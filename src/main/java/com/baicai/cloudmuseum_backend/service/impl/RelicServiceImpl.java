package com.baicai.cloudmuseum_backend.service.impl;

import com.baicai.cloudmuseum_backend.entity.Relic;
import com.baicai.cloudmuseum_backend.mapper.RelicMapper;
import com.baicai.cloudmuseum_backend.service.RelicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RelicServiceImpl implements RelicService {

    @Autowired
    private RelicMapper relicMapper;

    @Override
    public Relic getById(Long id) {
        Relic relic = relicMapper.findById(id);
        if (relic == null) throw new RuntimeException("文物不存在");
        return relic;
    }

    @Override
    public List<Relic> getAll(String era, String category, int page, int size) {
        int offset = (page - 1) * size;
        return relicMapper.findAll(era, category, offset, size);
    }

    @Override
    public int count(String era, String category) {
        return relicMapper.count(era, category);
    }

    @Override
    public Relic create(Relic relic) {
        relicMapper.insert(relic);
        return relic;
    }

    @Override
    public Relic update(Relic relic) {
        relicMapper.update(relic);
        return getById(relic.getId());
    }

    @Override
    public void delete(Long id) {
        relicMapper.deleteById(id);
    }
}
