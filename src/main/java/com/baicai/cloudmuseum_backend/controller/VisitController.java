package com.baicai.cloudmuseum_backend.controller;

import com.baicai.cloudmuseum_backend.dto.ApiResponse;
import com.baicai.cloudmuseum_backend.service.SiteVisitService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/visits")
public class VisitController {

    @Autowired
    private SiteVisitService siteVisitService;

    @PostMapping("/track")
    public ApiResponse<Map<String, Object>> track(@RequestBody(required = false) Map<String, String> body,
                                                   HttpServletRequest request) {
        String pagePath = body != null ? body.get("pagePath") : null;
        String ip = getClientIp(request);
        siteVisitService.trackVisit(pagePath, ip);
        return ApiResponse.empty();
    }

    private String getClientIp(HttpServletRequest request) {
        String ip = request.getHeader("X-Forwarded-For");
        if (ip == null || ip.isBlank() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("X-Real-IP");
        }
        if (ip == null || ip.isBlank() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getRemoteAddr();
        }
        if (ip != null && ip.contains(",")) {
            ip = ip.split(",")[0].trim();
        }
        return ip != null ? ip : "unknown";
    }
}
