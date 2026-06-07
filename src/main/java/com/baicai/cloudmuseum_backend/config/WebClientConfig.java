package com.baicai.cloudmuseum_backend.config;

import io.netty.channel.ChannelOption;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.netty.http.client.HttpClient;
import reactor.netty.resources.ConnectionProvider;
import java.time.Duration;

@Configuration
public class WebClientConfig {

    @Value("${textchat.api.base-url}")
    private String baseUrl;

    @Value("${textchat.api.key:}")
    private String customApiKey;

    @Value("${textchat.api.connect-timeout:5000}")
    private int connectTimeout;

    @Value("${textchat.api.read-timeout:5000}")
    private int readTimeout;

    @Value("${textchat.openai.api.base-url:https://api.deepseek.com}")
    private String openAiBaseUrl;

    @Value("${textchat.openai.api.key:}")
    private String openAiApiKey;

    /**
     * 自定义 AI 服务客户端（默认）
     */
    @Bean
    public WebClient webClient() {
        return buildWebClient(baseUrl, customApiKey);
    }

    /**
     * OpenAI 兼容客户端（DeepSeek / 通义千问等）
     * textchat.api.type=openai 时由 OpenAiChatApiClientImpl 使用
     */
    @Bean
    public WebClient openAiWebClient() {
        return buildWebClient(openAiBaseUrl, openAiApiKey);
    }

    private WebClient buildWebClient(String url, String apiKey) {
        HttpClient httpClient = HttpClient.create(
                        ConnectionProvider.builder("custom")
                                .maxConnections(100)
                                .build()
                ).option(ChannelOption.CONNECT_TIMEOUT_MILLIS, connectTimeout)
                .responseTimeout(Duration.ofMillis(readTimeout));

        WebClient.Builder builder = WebClient.builder()
                .baseUrl(url)
                .defaultHeader("Content-Type", "application/json")
                .clientConnector(new ReactorClientHttpConnector(httpClient));

        if (apiKey != null && !apiKey.isEmpty()) {
            builder.defaultHeader("Authorization", "Bearer " + apiKey);
        }
        return builder.build();
    }
}
