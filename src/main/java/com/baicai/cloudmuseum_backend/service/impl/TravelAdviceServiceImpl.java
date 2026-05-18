package com.baicai.cloudmuseum_backend.service.impl;

import com.baicai.cloudmuseum_backend.dao.TextChatApiClient;
import com.baicai.cloudmuseum_backend.dto.TextChatRequest;
import com.baicai.cloudmuseum_backend.dto.TextChatResponse;
import com.baicai.cloudmuseum_backend.dto.TravelAdviceRequest;
import com.baicai.cloudmuseum_backend.dto.WeatherResponse;
import com.baicai.cloudmuseum_backend.service.TravelAdviceService;
import com.baicai.cloudmuseum_backend.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class TravelAdviceServiceImpl implements TravelAdviceService {

    @Autowired
    private WeatherService weatherService;

    @Autowired
    private TextChatApiClient textChatApiClient;

    @Override
    public Map<String, Object> generate(TravelAdviceRequest request) {
        Map<String, Object> result = new HashMap<>();

        WeatherResponse weather = weatherService.getWeather(request.getCity());
        result.put("weather", weather);

        String prompt = buildPrompt(request, weather);
        TextChatResponse aiResponse = textChatApiClient.callChatApi(new TextChatRequest(prompt));

        result.put("advice", aiResponse.getAnswer());
        return result;
    }

    private String buildPrompt(TravelAdviceRequest req, WeatherResponse weather) {
        StringBuilder sb = new StringBuilder();
        sb.append("你是一位专业的博物馆旅行顾问。请根据以下信息，为游客提供个性化的参观建议：\n");
        sb.append("城市: ").append(req.getCity()).append("\n");
        sb.append("日期: ").append(req.getDate() != null ? req.getDate() : "今天").append("\n");

        if (weather.getWeather() != null) {
            sb.append("天气: ").append(weather.getWeather())
              .append(", 温度: ").append(weather.getTemperature()).append("℃\n");
        }
        if (req.getInterests() != null && !req.getInterests().isEmpty()) {
            sb.append("兴趣偏好: ").append(req.getInterests()).append("\n");
        }
        sb.append("\n请提供：1) 根据天气的出行建议 2) 推荐的参观路线 3) 注意事项。300字以内。");
        return sb.toString();
    }
}
