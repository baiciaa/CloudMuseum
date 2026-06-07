package com.baicai.cloudmuseum_backend.service.impl;

import com.baicai.cloudmuseum_backend.dao.TextChatApiClient;
import com.baicai.cloudmuseum_backend.dto.TextChatRequest;
import com.baicai.cloudmuseum_backend.dto.TextChatResponse;
import com.baicai.cloudmuseum_backend.service.TextChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TextChatServiceImpl implements TextChatService {

    @Autowired
    private TextChatApiClient textChatApiClient;

    @Override
    public TextChatResponse askQuestion(String question) {
        TextChatRequest request = new TextChatRequest(question);
        TextChatResponse response = textChatApiClient.callChatApi(request);

        // 业务处理（例如空值校验、默认值等）
        if (response.getAnswer() == null || response.getAnswer().isEmpty()) {
            response.setAnswer("未获取到有效回答");
        }
        if (response.getStatus() == null) {
            response.setStatus("UNKNOWN");
        }
        return response;
    }
}

