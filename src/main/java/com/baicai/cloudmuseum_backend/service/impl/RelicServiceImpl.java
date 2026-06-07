package com.baicai.cloudmuseum_backend.service.impl;

import com.baicai.cloudmuseum_backend.entity.Relic;
import com.baicai.cloudmuseum_backend.mapper.RelicMapper;
import com.baicai.cloudmuseum_backend.service.RelicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RelicServiceImpl implements RelicService {

    @Autowired
    private RelicMapper relicMapper;

    @Override
    @Cacheable(value = "relics", key = "'detail:' + #id")
    public Relic getById(Long id) {
        Relic relic = relicMapper.findById(id);
        if (relic == null) throw new RuntimeException("文物不存在");
        return relic;
    }

    @Override
    @Cacheable(value = "relics", key = "'list:' + #era + ':' + #category + ':' + #page + ':' + #size")
    public List<Relic> getAll(String era, String category, int page, int size) {
        int offset = (page - 1) * size;
        return relicMapper.findAll(era, category, offset, size);
    }

    @Override
    @Cacheable(value = "relics", key = "'count:' + #era + ':' + #category")
    public int count(String era, String category) {
        return relicMapper.count(era, category);
    }

    @Override
    @CacheEvict(value = "relics", allEntries = true)
    public Relic create(Relic relic) {
        relicMapper.insert(relic);
        return relic;
    }

    @Override
    @CacheEvict(value = "relics", allEntries = true)
    public Relic update(Relic relic) {
        relicMapper.update(relic);
        return getById(relic.getId());
    }

    @Override
    @CacheEvict(value = "relics", allEntries = true)
    public void delete(Long id) {
        relicMapper.deleteById(id);
    }
}
