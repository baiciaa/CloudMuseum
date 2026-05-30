package com.baicai.cloudmuseum_backend.service.impl;

import com.baicai.cloudmuseum_backend.entity.Recruitment;
import com.baicai.cloudmuseum_backend.mapper.RecruitmentMapper;
import com.baicai.cloudmuseum_backend.service.RecruitmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecruitmentServiceImpl implements RecruitmentService {

    @Autowired
    private RecruitmentMapper recruitmentMapper;

    @Override
    public Recruitment getById(Long id) {
        Recruitment r = recruitmentMapper.findById(id);
        if (r == null) throw new RuntimeException("报名不存在");
        return r;
    }

    @Override
    public List<Recruitment> getAll(String type, String status) {
        return recruitmentMapper.findAll(type, status);
    }

    @Override
    public Recruitment create(Recruitment recruitment) {
        if (recruitment.getStatus() == null) recruitment.setStatus("PENDING");
        recruitmentMapper.insert(recruitment);
        return recruitment;
    }

    @Override
    public Recruitment updateStatus(Long id, String status) {
        recruitmentMapper.updateStatus(id, status);
        return getById(id);
    }

    @Override
    public void delete(Long id) {
        recruitmentMapper.deleteById(id);
    }
}
