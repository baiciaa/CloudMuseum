package com.baicai.cloudmuseum_backend.config;

import com.alibaba.dashscope.utils.Constants;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import jakarta.annotation.PostConstruct;  // Spring Boot 3.x 用 jakarta

@Configuration
public class DashScopeConfig {

    @Value("${dashscope.websocket.url:wss://dashscope.aliyuncs.com/api-ws/v1/inference}")
    private String websocketUrl;

    @Value("${dashscope.api.key}")  // ← 改成和配置文件一致的key
    private String apiKey;

    @PostConstruct
    public void init() {
        Constants.baseWebsocketApiUrl = websocketUrl;
        System.out.println("DashScope SDK 初始化完成，WebSocket URL: " + websocketUrl);
    }

    public String getApiKey() {
        return apiKey;
    }
}