package com.baicai.cloudmuseum_backend.controller;

import com.baicai.cloudmuseum_backend.dto.ApiResponse;
import com.baicai.cloudmuseum_backend.entity.Relic;
import com.baicai.cloudmuseum_backend.service.RelicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/relics")
public class RelicController {

    @Autowired
    private RelicService relicService;

    @GetMapping
    public ApiResponse<Map<String, Object>> list(
            @RequestParam(required = false) String era,
            @RequestParam(required = false) String category,
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10") int size) {
        List<Relic> relics = relicService.getAll(era, category, page, size);
        int total = relicService.count(era, category);
        Map<String, Object> result = new HashMap<>();
        result.put("list", relics);
        result.put("total", total);
        result.put("page", page);
        result.put("size", size);
        return ApiResponse.ok(result);
    }

    @GetMapping("/{id}")
    public ApiResponse<Relic> getById(@PathVariable Long id) {
        return ApiResponse.ok(relicService.getById(id));
    }

    @PostMapping
    public ApiResponse<Relic> create(@RequestBody Relic relic) {
        return ApiResponse.ok(relicService.create(relic));
    }

    @PutMapping("/{id}")
    public ApiResponse<Relic> update(@PathVariable Long id, @RequestBody Relic relic) {
        relic.setId(id);
        return ApiResponse.ok(relicService.update(relic));
    }

    @DeleteMapping("/{id}")
    public ApiResponse<?> delete(@PathVariable Long id) {
        relicService.delete(id);
        return ApiResponse.empty();
    }
}
