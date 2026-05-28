package com.baicai.cloudmuseum_backend.util;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class ImageUrlResolver {

    @Value("${app.base-url:}")
    private String baseUrl;

    /**
     * 将相对路径解析为完整可访问的 URL。
     * - 配置了 app.base-url → 拼接完整 URL
     * - 未配置 → 原样返回相对路径，由前端根据当前 origin 自动解析
     */
    public String resolve(String imageUrl, HttpServletRequest request) {
        if (imageUrl == null || imageUrl.isBlank()) {
            return imageUrl;
        }
        if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
            return imageUrl;
        }
        if (baseUrl != null && !baseUrl.isBlank()) {
            String stripped = baseUrl.endsWith("/") ? baseUrl.substring(0, baseUrl.length() - 1) : baseUrl;
            return stripped + imageUrl;
        }
        // 未配置 base-url: 返回相对路径，浏览器基于当前页面 origin 自动解析
        // 开发环境: Vite proxy /uploads → localhost:8081
        // 生产环境: 同域部署或 Nginx 反向代理
        return imageUrl;
    }
}
