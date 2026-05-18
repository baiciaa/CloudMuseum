package com.baicai.cloudmuseum_backend.dao.impl;

import com.baicai.cloudmuseum_backend.dao.TextChatApiClient;
import com.baicai.cloudmuseum_backend.dto.TextChatRequest;
import com.baicai.cloudmuseum_backend.dto.TextChatResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;
import org.springframework.web.reactive.function.client.WebClient;
import java.time.Duration;

@Repository
public class TextChatApiClientImpl implements TextChatApiClient {

    @Autowired
    private WebClient webClient;

    @Value("${textchat.api.read-timeout:30000}")
    private int readTimeout;

    @Override
    public TextChatResponse callChatApi(TextChatRequest request) {
        try {
            return webClient.post()
                    .uri("/chat")
                    .bodyValue(request)
                    .retrieve()
                    .bodyToMono(TextChatResponse.class)
                    .block(Duration.ofMillis(readTimeout));  // 使用配置的超时时间
        } catch (Exception e) {
            // 捕获超时或其他异常，返回友好的错误响应
            TextChatResponse errorResponse = new TextChatResponse();
            errorResponse.setStatus("error");
            errorResponse.setAnswer("服务调用失败: " + e.getMessage());
            return errorResponse;
        }
    }
}