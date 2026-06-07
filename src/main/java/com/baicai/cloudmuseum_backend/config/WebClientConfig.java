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

    @Value("${textchat.api.connect-timeout:5000}")
    private int connectTimeout;

    @Value("${textchat.api.read-timeout:5000}")
    private int readTimeout;

    @Bean
    public WebClient webClient() {
        // 配置连接池和超时（推荐，避免默认值过短）
        HttpClient httpClient = HttpClient.create(
                        ConnectionProvider.builder("custom")
                                .maxConnections(100)
                                .build()
                ).option(ChannelOption.CONNECT_TIMEOUT_MILLIS, connectTimeout)
                .responseTimeout(Duration.ofMillis(readTimeout));

        return WebClient.builder()
                .baseUrl(baseUrl)
                .defaultHeader("Content-Type", "application/json")
                .clientConnector(new ReactorClientHttpConnector(httpClient))
                .build();
    }
}
