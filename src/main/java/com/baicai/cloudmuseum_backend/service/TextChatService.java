package com.baicai.cloudmuseum_backend.service;

import com.baicai.cloudmuseum_backend.dto.TextChatResponse;

public interface TextChatService {
    TextChatResponse askQuestion(String question);
}
