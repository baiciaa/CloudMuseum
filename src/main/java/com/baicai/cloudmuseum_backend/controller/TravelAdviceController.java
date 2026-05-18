package com.baicai.cloudmuseum_backend.controller;

import com.baicai.cloudmuseum_backend.dto.ApiResponse;
import com.baicai.cloudmuseum_backend.dto.TravelAdviceRequest;
import com.baicai.cloudmuseum_backend.service.TravelAdviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/travel")
public class TravelAdviceController {

    @Autowired
    private TravelAdviceService travelAdviceService;

    @PostMapping("/advice")
    public ApiResponse<Map<String, Object>> getAdvice(@RequestBody TravelAdviceRequest request) {
        return ApiResponse.ok(travelAdviceService.generate(request));
    }
}
