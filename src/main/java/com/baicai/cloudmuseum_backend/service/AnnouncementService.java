package com.baicai.cloudmuseum_backend.service;

import com.baicai.cloudmuseum_backend.entity.Announcement;
import java.util.List;

public interface AnnouncementService {
    Announcement getById(Long id);
    List<Announcement> getPublished(String type, int page, int size);
    int countPublished(String type);
    List<Announcement> getAll(String type, String status);
    Announcement create(Announcement announcement);
    Announcement update(Announcement announcement);
    void delete(Long id);
}
