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
     * 优先级: 配置的 base-url > 请求上下文 > 原样返回相对路径
     */
    public String resolve(String imageUrl, HttpServletRequest request) {
        if (imageUrl == null || imageUrl.isBlank()) {
            return imageUrl;
        }
        // 已是绝对 URL 则原样返回
        if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
            return imageUrl;
        }
        // 配置了 base-url 则使用
        if (baseUrl != null && !baseUrl.isBlank()) {
            String stripped = baseUrl.endsWith("/") ? baseUrl.substring(0, baseUrl.length() - 1) : baseUrl;
            return stripped + imageUrl;
        }
        // 从请求上下文自动检测
        if (request != null) {
            String scheme = request.getScheme();
            String host = request.getServerName();
            int port = request.getServerPort();
            boolean isStandard = ("http".equals(scheme) && port == 80)
                    || ("https".equals(scheme) && port == 443);
            if (isStandard) {
                return scheme + "://" + host + imageUrl;
            } else {
                return scheme + "://" + host + ":" + port + imageUrl;
            }
        }
        // 兜底返回相对路径
        return imageUrl;
    }
}
