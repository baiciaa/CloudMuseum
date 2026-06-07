package com.baicai.cloudmuseum_backend.util;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class ImageUrlResolver {

    @Value("${app.base-url:}")
    private String baseUrl;

    @Value("${app.cdn-url:}")
    private String cdnUrl;

    /**
     * 将相对路径解析为完整可访问的 URL。
     * 优先级：CDN > base-url > 相对路径
     */
    public String resolve(String imageUrl, HttpServletRequest request) {
        if (imageUrl == null || imageUrl.isBlank()) {
            return null;
        }
        if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
            return imageUrl;
        }
        // CDN 优先
        if (cdnUrl != null && !cdnUrl.isBlank()) {
            String prefix = cdnUrl.endsWith("/") ? cdnUrl.substring(0, cdnUrl.length() - 1) : cdnUrl;
            return prefix + imageUrl;
        }
        // base-url 兜底
        if (baseUrl != null && !baseUrl.isBlank()) {
            String prefix = baseUrl.endsWith("/") ? baseUrl.substring(0, baseUrl.length() - 1) : baseUrl;
            return prefix + imageUrl;
        }
        return imageUrl;
    }
}
