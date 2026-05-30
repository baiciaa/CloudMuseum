package com.baicai.cloudmuseum_backend.service;

import com.baicai.cloudmuseum_backend.entity.SiteVisit;
import java.util.List;
import java.util.Map;

public interface SiteVisitService {

    void trackVisit(String pagePath, String ip);

    Map<String, Object> getVisitStats();
}
