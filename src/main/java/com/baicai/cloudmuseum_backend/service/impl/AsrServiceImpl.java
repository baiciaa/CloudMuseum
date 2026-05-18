package com.baicai.cloudmuseum_backend.service.impl;

import com.alibaba.dashscope.audio.asr.recognition.Recognition;
import com.alibaba.dashscope.audio.asr.recognition.RecognitionParam;
import com.alibaba.dashscope.audio.asr.recognition.RecognitionResult;
import com.alibaba.dashscope.common.ResultCallback;
import com.baicai.cloudmuseum_backend.config.DashScopeConfig;
import com.baicai.cloudmuseum_backend.service.AsrService;
import com.baicai.cloudmuseum_backend.util.AudioFileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileInputStream;
import java.nio.ByteBuffer;
import java.nio.file.Path;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.TimeUnit;

@Service
public class AsrServiceImpl implements AsrService {

    @Autowired
    private DashScopeConfig dashScopeConfig;

    private static final int CHUNK_SIZE = 3200;  // 每次发送的音频块大小（字节）
    private static final int SAMPLE_RATE = 16000; // 采样率
    private static final String MODEL = "fun-asr-realtime"; // 使用的模型

    @Override
    public String recognizeFile(Path audioFilePath) {
        CompletableFuture<String> resultFuture = new CompletableFuture<>();

        recognizeStreaming(audioFilePath, new AsrCallback() {
            @Override
            public void onIntermediateResult(String text) {
                // 中间结果暂不处理，只记录最终结果
                System.out.println("[中间结果] " + text);
            }

            @Override
            public void onFinalResult(String text) {
                resultFuture.complete(text);
            }

            @Override
            public void onComplete() {
                // 已完成
            }

            @Override
            public void onError(Exception e) {
                resultFuture.completeExceptionally(e);
            }
        });

        try {
            // 等待识别完成，最多30秒
            return resultFuture.get(30, TimeUnit.SECONDS);
        } catch (Exception e) {
            throw new RuntimeException("语音识别失败: " + e.getMessage(), e);
        }
    }

    @Override
    public String recognizeMultipartFile(MultipartFile audioFile) {
        try {
            // 将MultipartFile临时保存
            Path tempFile = AudioFileUtils.saveTempFile(audioFile);
            return recognizeFile(tempFile);
        } catch (Exception e) {
            throw new RuntimeException("文件处理失败: " + e.getMessage(), e);
        }
    }

    @Override
    public void recognizeStreaming(Path audioFilePath, AsrCallback callback) {
        Recognition recognizer = null;

        try {
            // 1. 构建识别参数
            RecognitionParam param = RecognitionParam.builder()
                    .model(MODEL)
                    .apiKey(dashScopeConfig.getApiKey())
                    .format("wav")      // 音频格式
                    .sampleRate(SAMPLE_RATE)
                    .build();

            // 2. 创建识别器
            recognizer = new Recognition();

            // 3. 设置回调（处理识别结果）
            ResultCallback<RecognitionResult> sdkCallback = new ResultCallback<RecognitionResult>() {
                @Override
                public void onEvent(RecognitionResult result) {
                    if (result.isSentenceEnd()) {
                        // 句子结束 = 最终结果
                        callback.onFinalResult(result.getSentence().getText());
                    } else {
                        // 中间结果（实时显示）
                        callback.onIntermediateResult(result.getSentence().getText());
                    }
                }

                @Override
                public void onComplete() {
                    callback.onComplete();
                }

                @Override
                public void onError(Exception e) {
                    callback.onError(e);
                }
            };

            // 4. 建立连接
            recognizer.call(param, sdkCallback);
            System.out.println("[识别] 连接已建立，开始发送音频: " + audioFilePath);

            // 5. 分块发送音频数据
            FileInputStream fis = new FileInputStream(audioFilePath.toFile());
            byte[] allData = new byte[fis.available()];
            fis.read(allData);
            fis.close();

            for (int i = 0; i * CHUNK_SIZE < allData.length; i++) {
                int start = i * CHUNK_SIZE;
                int end = Math.min(start + CHUNK_SIZE, allData.length);
                ByteBuffer buffer = ByteBuffer.wrap(allData, start, end - start);
                recognizer.sendAudioFrame(buffer);

                // 控制发送速率，模拟实时录音
                Thread.sleep(100);
            }

            // 6. 通知服务端音频发送完毕
            recognizer.stop();

            // 7. 打印性能指标
            System.out.println("[Metric] requestId: " + recognizer.getLastRequestId() +
                    ", 首包延迟: " + recognizer.getFirstPackageDelay() + "ms" +
                    ", 末包延迟: " + recognizer.getLastPackageDelay() + "ms");

        } catch (Exception e) {
            callback.onError(e);
        } finally {
            // 8. 关闭连接
            if (recognizer != null) {
                recognizer.getDuplexApi().close(1000, "bye");
            }
        }
    }
}
