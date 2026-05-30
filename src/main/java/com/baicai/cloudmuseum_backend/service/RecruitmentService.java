package com.baicai.cloudmuseum_backend.service;

import com.baicai.cloudmuseum_backend.entity.Recruitment;
import java.util.List;

public interface RecruitmentService {
    Recruitment getById(Long id);
    List<Recruitment> getAll(String type, String status);
    Recruitment create(Recruitment recruitment);
    Recruitment updateStatus(Long id, String status);
    void delete(Long id);
}
