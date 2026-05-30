package com.baicai.cloudmuseum_backend.controller;

import com.baicai.cloudmuseum_backend.dto.ApiResponse;
import com.baicai.cloudmuseum_backend.entity.Recruitment;
import com.baicai.cloudmuseum_backend.service.RecruitmentService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recruitments")
public class RecruitmentController {

    @Autowired
    private RecruitmentService recruitmentService;

    @GetMapping
    public ApiResponse<List<Recruitment>> list(
            @RequestParam(required = false) String type,
            @RequestParam(required = false) String status) {
        return ApiResponse.ok(recruitmentService.getAll(type, status));
    }

    @GetMapping("/{id}")
    public ApiResponse<Recruitment> getById(@PathVariable Long id) {
        return ApiResponse.ok(recruitmentService.getById(id));
    }

    @PostMapping
    public ApiResponse<Recruitment> create(@Valid @RequestBody Recruitment recruitment) {
        return ApiResponse.ok(recruitmentService.create(recruitment));
    }

    @PutMapping("/{id}/status")
    public ApiResponse<Recruitment> updateStatus(@PathVariable Long id, @RequestBody Recruitment recruitment) {
        return ApiResponse.ok(recruitmentService.updateStatus(id, recruitment.getStatus()));
    }

    @DeleteMapping("/{id}")
    public ApiResponse<?> delete(@PathVariable Long id) {
        recruitmentService.delete(id);
        return ApiResponse.empty();
    }
}
