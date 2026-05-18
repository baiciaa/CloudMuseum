package com.baicai.cloudmuseum_backend.controller;

import com.baicai.cloudmuseum_backend.dto.ApiResponse;
import com.baicai.cloudmuseum_backend.entity.Course;
import com.baicai.cloudmuseum_backend.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping
    public ApiResponse<List<Course>> list(@RequestParam(required = false) String status) {
        if (status != null) {
            return ApiResponse.ok(courseService.getAll(status));
        }
        return ApiResponse.ok(courseService.getActive());
    }

    @GetMapping("/{id}")
    public ApiResponse<Course> getById(@PathVariable Long id) {
        return ApiResponse.ok(courseService.getById(id));
    }

    @PostMapping
    public ApiResponse<Course> create(@RequestBody Course course) {
        return ApiResponse.ok(courseService.create(course));
    }

    @PutMapping("/{id}")
    public ApiResponse<Course> update(@PathVariable Long id, @RequestBody Course course) {
        course.setId(id);
        return ApiResponse.ok(courseService.update(course));
    }

    @DeleteMapping("/{id}")
    public ApiResponse<?> delete(@PathVariable Long id) {
        courseService.delete(id);
        return ApiResponse.empty();
    }
}
