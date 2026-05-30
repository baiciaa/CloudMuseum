package com.baicai.cloudmuseum_backend.service.impl;

import com.baicai.cloudmuseum_backend.entity.SiteVisit;
import com.baicai.cloudmuseum_backend.mapper.SiteVisitMapper;
import com.baicai.cloudmuseum_backend.service.SiteVisitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;

@Service
public class SiteVisitServiceImpl implements SiteVisitService {

    @Autowired
    private SiteVisitMapper siteVisitMapper;

    @Override
    public void trackVisit(String pagePath, String ip) {
        if (pagePath == null || pagePath.isBlank()) pagePath = "/";
        if (ip == null || ip.isBlank()) ip = "unknown";
        siteVisitMapper.trackVisit(pagePath, LocalDate.now(), ip);
    }

    @Override
    public Map<String, Object> getVisitStats() {
        LocalDate today = LocalDate.now();
        LocalDate yesterday = today.minusDays(1);
        LocalDate weekAgo = today.minusDays(6);

        long todayPV = siteVisitMapper.sumPvByDate(today);
        long todayUV = siteVisitMapper.sumUvByDate(today);
        long yesterdayPV = siteVisitMapper.sumPvByDate(yesterday);
        long yesterdayUV = siteVisitMapper.sumUvByDate(yesterday);
        long totalPV = siteVisitMapper.sumTotalPv();

        List<SiteVisit> trend = siteVisitMapper.findTrend(weekAgo, today);

        List<Map<String, Object>> trendData = new ArrayList<>();
        // fill gaps with zero
        Set<LocalDate> trendDates = new HashSet<>();
        for (SiteVisit sv : trend) trendDates.add(sv.getVisitDate());
        for (int i = 0; i < 7; i++) {
            LocalDate d = weekAgo.plusDays(i);
            if (trendDates.contains(d)) {
                SiteVisit sv = trend.stream().filter(t -> t.getVisitDate().equals(d)).findFirst().get();
                Map<String, Object> point = new LinkedHashMap<>();
                point.put("date", d.toString());
                point.put("pv", sv.getPvCount());
                point.put("uv", sv.getUvCount());
                trendData.add(point);
            } else {
                Map<String, Object> point = new LinkedHashMap<>();
                point.put("date", d.toString());
                point.put("pv", 0);
                point.put("uv", 0);
                trendData.add(point);
            }
        }

        Map<String, Object> stats = new LinkedHashMap<>();
        stats.put("todayPV", todayPV);
        stats.put("todayUV", todayUV);
        stats.put("yesterdayPV", yesterdayPV);
        stats.put("yesterdayUV", yesterdayUV);
        stats.put("totalPV", totalPV);
        stats.put("trend", trendData);
        return stats;
    }
}
