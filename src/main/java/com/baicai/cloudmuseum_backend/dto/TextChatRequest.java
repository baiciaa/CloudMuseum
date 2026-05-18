package com.baicai.cloudmuseum_backend.dto;

public class TextChatRequest {

    private String question;

    public TextChatRequest() {}
    public TextChatRequest(String question) { this.question = question; }

    public String getQuestion() { return question; }
    public void setQuestion(String question) { this.question = question; }

}
