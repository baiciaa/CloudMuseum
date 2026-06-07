package com.baicai.cloudmuseum_backend.dao;

import com.baicai.cloudmuseum_backend.dto.TextChatRequest;
import com.baicai.cloudmuseum_backend.dto.TextChatResponse;

public interface TextChatApiClient {
    TextChatResponse callChatApi(TextChatRequest request);
}
