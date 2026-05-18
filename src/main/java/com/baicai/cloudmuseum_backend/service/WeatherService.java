package com.baicai.cloudmuseum_backend.service;

import com.baicai.cloudmuseum_backend.dto.WeatherResponse;

public interface WeatherService {
    WeatherResponse getWeather(String city);
}
