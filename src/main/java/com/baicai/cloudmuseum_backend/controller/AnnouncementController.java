package com.baicai.cloudmuseum_backend.controller;

import com.baicai.cloudmuseum_backend.dto.ApiResponse;
import com.baicai.cloudmuseum_backend.entity.Announcement;
import com.baicai.cloudmuseum_backend.service.AnnouncementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/announcements")
public class AnnouncementController {

    @Autowired
    private AnnouncementService announcementService;

    @GetMapping
    public ApiResponse<Map<String, Object>> list(
            @RequestParam(required = false) String type,
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10") int size) {
        List<Announcement> list = announcementService.getPublished(type, page, size);
        int total = announcementService.countPublished(type);
        Map<String, Object> result = new HashMap<>();
        result.put("list", list);
        result.put("total", total);
        result.put("page", page);
        result.put("size", size);
        return ApiResponse.ok(result);
    }

    @GetMapping("/{id}")
    public ApiResponse<Announcement> getById(@PathVariable Long id) {
        return ApiResponse.ok(announcementService.getById(id));
    }

    @PostMapping
    public ApiResponse<Announcement> create(@RequestBody Announcement announcement) {
        return ApiResponse.ok(announcementService.create(announcement));
    }

    @PutMapping("/{id}")
    public ApiResponse<Announcement> update(@PathVariable Long id, @RequestBody Announcement announcement) {
        announcement.setId(id);
        return ApiResponse.ok(announcementService.update(announcement));
    }

    @DeleteMapping("/{id}")
    public ApiResponse<?> delete(@PathVariable Long id) {
        announcementService.delete(id);
        return ApiResponse.empty();
    }
}
