package com.baicai.cloudmuseum_backend.controller;

import com.baicai.cloudmuseum_backend.dto.ApiResponse;
import com.baicai.cloudmuseum_backend.dto.WeatherResponse;
import com.baicai.cloudmuseum_backend.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/weather")
public class WeatherController {

    @Autowired
    private WeatherService weatherService;

    @GetMapping
    public ApiResponse<WeatherResponse> getWeather(@RequestParam String city) {
        return ApiResponse.ok(weatherService.getWeather(city));
    }
}
