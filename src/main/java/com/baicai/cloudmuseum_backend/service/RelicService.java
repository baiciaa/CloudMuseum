package com.baicai.cloudmuseum_backend.service;

import com.baicai.cloudmuseum_backend.entity.Relic;
import java.util.List;

public interface RelicService {
    Relic getById(Long id);
    List<Relic> getAll(String era, String category, int page, int size);
    int count(String era, String category);
    Relic create(Relic relic);
    Relic update(Relic relic);
    void delete(Long id);
}
