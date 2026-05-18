package com.baicai.cloudmuseum_backend.service.impl;

import com.baicai.cloudmuseum_backend.dto.WeatherResponse;
import com.baicai.cloudmuseum_backend.service.WeatherService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Map;

@Service
public class WeatherServiceImpl implements WeatherService {

    private final WebClient webClient;

    @Value("${gaode.weather.api.key}")
    private String apiKey;

    public WeatherServiceImpl() {
        this.webClient = WebClient.create("https://restapi.amap.com");
    }

    @Override
    public WeatherResponse getWeather(String city) {
        Map<String, Object> raw;
        try {
            raw = webClient.get()
                    .uri(uriBuilder -> uriBuilder
                            .path("/v3/weather/weatherInfo")
                            .queryParam("key", apiKey)
                            .queryParam("city", city)
                            .queryParam("extensions", "base")
                            .build())
                    .retrieve()
                    .bodyToMono(Map.class)
                    .block();
        } catch (Exception e) {
            throw new RuntimeException("获取天气信息失败: " + e.getMessage(), e);
        }

        WeatherResponse response = new WeatherResponse();
        response.setCity(city);
        response.setRaw(raw);

        try {
            List<Map<String, Object>> lives = (List<Map<String, Object>>) raw.get("lives");
            if (lives != null && !lives.isEmpty()) {
                Map<String, Object> live = lives.get(0);
                response.setWeather((String) live.get("weather"));
                response.setTemperature((String) live.get("temperature"));
                response.setWindDirection((String) live.get("winddirection"));
                response.setHumidity((String) live.get("humidity"));
                response.setReportTime((String) live.get("reporttime"));
            }
        } catch (Exception ignored) {
            // 解析失败不影响返回，raw 字段保留原始数据
        }

        return response;
    }
}
