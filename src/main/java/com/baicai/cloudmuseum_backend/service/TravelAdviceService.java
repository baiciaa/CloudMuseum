package com.baicai.cloudmuseum_backend.service;

import com.baicai.cloudmuseum_backend.dto.TravelAdviceRequest;
import java.util.Map;

public interface TravelAdviceService {
    Map<String, Object> generate(TravelAdviceRequest request);
}
