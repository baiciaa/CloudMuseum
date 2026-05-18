package com.baicai.cloudmuseum_backend.controller;

import com.baicai.cloudmuseum_backend.dto.TextChatRequest;
import com.baicai.cloudmuseum_backend.dto.TextChatResponse;
import com.baicai.cloudmuseum_backend.service.TextChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.TimeoutException;

@RestController
@RequestMapping("/api/chat")
public class TextChatController {

    @Autowired
    private TextChatService textChatService;

    @GetMapping("/ask")
    public TextChatResponse askByGet(@RequestParam String question) {
        try {
            return textChatService.askQuestion(question);
        } catch (Exception e) {
            // 判断是否为超时异常（直接异常或因响应式包装导致的异常）
            Throwable cause = e.getCause();
            if (e instanceof TimeoutException || cause instanceof TimeoutException) {
                return TextChatResponse.error("服务响应超时，请稍后重试");
            }
            return TextChatResponse.error("处理请求失败：" + e.getMessage());
        }
    }

    @PostMapping("/ask")
    public TextChatResponse askByPost(@RequestBody TextChatRequest request) {
        try {
            return textChatService.askQuestion(request.getQuestion());
        } catch (Exception e) {
            Throwable cause = e.getCause();
            if (e instanceof TimeoutException || cause instanceof TimeoutException) {
                return TextChatResponse.error("服务响应超时，请稍后重试");
            }
            return TextChatResponse.error("处理请求失败：" + e.getMessage());
        }
    }
}