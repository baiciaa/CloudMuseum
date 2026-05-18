package com.baicai.cloudmuseum_backend.dto;

public class TextChatResponse {
    private String answer;
    private String status;

    // 静态工厂方法：创建错误响应
    public static TextChatResponse error(String errorMessage) {
        TextChatResponse response = new TextChatResponse();
        response.setStatus("error");
        response.setAnswer(errorMessage);
        return response;
    }

    // 静态工厂方法：创建成功响应（可选，方便使用）
    public static TextChatResponse success(String answer) {
        TextChatResponse response = new TextChatResponse();
        response.setStatus("success");
        response.setAnswer(answer);
        return response;
    }

    public String getAnswer() { return answer; }
    public void setAnswer(String answer) { this.answer = answer; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}