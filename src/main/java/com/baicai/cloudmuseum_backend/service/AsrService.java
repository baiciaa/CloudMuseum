package com.baicai.cloudmuseum_backend.service;

import org.springframework.web.multipart.MultipartFile;
import java.nio.file.Path;

public interface AsrService {

    /**
     * 识别音频文件（同步方式）
     * @param audioFilePath 音频文件路径
     * @return 识别出的文字
     */
    String recognizeFile(Path audioFilePath);

    /**
     * 识别上传的音频文件
     * @param audioFile 上传的MultipartFile
     * @return 识别出的文字
     */
    String recognizeMultipartFile(MultipartFile audioFile);

    /**
     * 流式识别（边读边发，实时返回）
     * @param audioFilePath 音频文件路径
     * @param callback 实时回调
     */
    void recognizeStreaming(Path audioFilePath, AsrCallback callback);

    /**
     * 回调接口
     */
    interface AsrCallback {
        void onIntermediateResult(String text);  // 中间结果
        void onFinalResult(String text);          // 最终结果
        void onComplete();
        void onError(Exception e);
    }
}
