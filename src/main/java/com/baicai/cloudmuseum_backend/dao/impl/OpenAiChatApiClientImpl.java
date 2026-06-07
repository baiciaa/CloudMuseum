package com.baicai.cloudmuseum_backend.dao.impl;

import com.baicai.cloudmuseum_backend.dao.TextChatApiClient;
import com.baicai.cloudmuseum_backend.dto.TextChatResponse;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Repository;
import org.springframework.web.reactive.function.client.WebClient;
import java.time.Duration;
import java.util.List;
import java.util.Map;

/**
 * OpenAI 兼容客户端（DeepSeek / 通义千问 / Claude API 等）
 * 配置 textchat.api.type=openai 时启用
 */
@Repository
@ConditionalOnProperty(name = "textchat.api.type", havingValue = "openai")
public class OpenAiChatApiClientImpl implements TextChatApiClient {

    @Autowired
    private WebClient openAiWebClient;

    @Value("${textchat.api.read-timeout:60000}")
    private int readTimeout;

    @Value("${textchat.api.model:deepseek-chat}")
    private String modelName;

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public TextChatResponse callChatApi(String question) {
        try {
            Map<String, Object> body = Map.of(
                    "model", modelName,
                    "messages", List.of(Map.of("role", "user", "content", question)),
                    "stream", false
            );

            String json = openAiWebClient.post()
                    .uri("/v1/chat/completions")
                    .bodyValue(body)
                    .retrieve()
                    .bodyToMono(String.class)
                    .block(Duration.ofMillis(readTimeout));

            JsonNode root = objectMapper.readTree(json);
            String answer = root.path("choices").get(0).path("message").path("content").asText("");

            TextChatResponse response = new TextChatResponse();
            response.setStatus("success");
            response.setAnswer(answer);
            return response;
        } catch (Exception e) {
            TextChatResponse response = new TextChatResponse();
            response.setStatus("error");
            response.setAnswer("AI 服务暂不可用，请稍后再试");
            return response;
        }
    }
}
