package com.baicai.cloudmuseum_backend.service.impl;

import com.baicai.cloudmuseum_backend.entity.Announcement;
import com.baicai.cloudmuseum_backend.mapper.AnnouncementMapper;
import com.baicai.cloudmuseum_backend.service.AnnouncementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnnouncementServiceImpl implements AnnouncementService {

    @Autowired
    private AnnouncementMapper announcementMapper;

    @Override
    public Announcement getById(Long id) {
        Announcement a = announcementMapper.findById(id);
        if (a == null) throw new RuntimeException("资讯不存在");
        return a;
    }

    @Override
    public List<Announcement> getPublished(String type, int page, int size) {
        int offset = (page - 1) * size;
        return announcementMapper.findPublished(type, offset, size);
    }

    @Override
    public int countPublished(String type) {
        return announcementMapper.countPublished(type);
    }

    @Override
    public List<Announcement> getAll(String type, String status) {
        return announcementMapper.findAll(type, status);
    }

    @Override
    public Announcement create(Announcement announcement) {
        if (announcement.getStatus() == null) announcement.setStatus("PUBLISHED");
        announcementMapper.insert(announcement);
        return announcement;
    }

    @Override
    public Announcement update(Announcement announcement) {
        announcementMapper.update(announcement);
        return getById(announcement.getId());
    }

    @Override
    public void delete(Long id) {
        announcementMapper.deleteById(id);
    }
}
