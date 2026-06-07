package com.baicai.cloudmuseum_backend.dao.impl;

import com.baicai.cloudmuseum_backend.dao.TextChatApiClient;
import com.baicai.cloudmuseum_backend.dto.TextChatResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Repository;
import org.springframework.web.reactive.function.client.WebClient;
import java.time.Duration;

/**
 * 自定义 AI 服务客户端（默认）
 * POST /chat  { "question": "..." }  →  { "answer": "...", "status": "success" }
 */
@Repository
@ConditionalOnProperty(name = "textchat.api.type", havingValue = "custom", matchIfMissing = true)
public class TextChatApiClientImpl implements TextChatApiClient {

    @Autowired
    private WebClient webClient;

    @Value("${textchat.api.read-timeout:30000}")
    private int readTimeout;

    @Override
    public TextChatResponse callChatApi(String question) {
        try {
            return webClient.post()
                    .uri("/chat")
                    .bodyValue(new com.baicai.cloudmuseum_backend.dto.TextChatRequest(question))
                    .retrieve()
                    .bodyToMono(TextChatResponse.class)
                    .block(Duration.ofMillis(readTimeout));
        } catch (Exception e) {
            TextChatResponse errorResponse = new TextChatResponse();
            errorResponse.setStatus("error");
            errorResponse.setAnswer("服务调用失败: " + e.getMessage());
            return errorResponse;
        }
    }
}