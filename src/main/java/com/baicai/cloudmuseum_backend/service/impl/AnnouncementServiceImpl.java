package com.baicai.cloudmuseum_backend.service.impl;

import com.baicai.cloudmuseum_backend.entity.Announcement;
import com.baicai.cloudmuseum_backend.mapper.AnnouncementMapper;
import com.baicai.cloudmuseum_backend.service.AnnouncementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnnouncementServiceImpl implements AnnouncementService {

    @Autowired
    private AnnouncementMapper announcementMapper;

    @Override
    @Cacheable(value = "announcements", key = "'detail:' + #id")
    public Announcement getById(Long id) {
        Announcement a = announcementMapper.findById(id);
        if (a == null) throw new RuntimeException("资讯不存在");
        return a;
    }

    @Override
    @Cacheable(value = "announcements", key = "'list:' + #type + ':' + #page + ':' + #size")
    public List<Announcement> getPublished(String type, int page, int size) {
        int offset = (page - 1) * size;
        return announcementMapper.findPublished(type, offset, size);
    }

    @Override
    @Cacheable(value = "announcements", key = "'count:' + #type")
    public int countPublished(String type) {
        return announcementMapper.countPublished(type);
    }

    @Override
    public List<Announcement> getAll(String type, String status) {
        return announcementMapper.findAll(type, status);
    }

    @Override
    @CacheEvict(value = "announcements", allEntries = true)
    public Announcement create(Announcement announcement) {
        if (announcement.getStatus() == null) announcement.setStatus("PUBLISHED");
        announcementMapper.insert(announcement);
        return announcement;
    }

    @Override
    @CacheEvict(value = "announcements", allEntries = true)
    public Announcement update(Announcement announcement) {
        announcementMapper.update(announcement);
        return getById(announcement.getId());
    }

    @Override
    @CacheEvict(value = "announcements", allEntries = true)
    public void delete(Long id) {
        announcementMapper.deleteById(id);
    }
}
