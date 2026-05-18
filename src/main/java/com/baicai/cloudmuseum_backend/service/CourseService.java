package com.baicai.cloudmuseum_backend.service;

import com.baicai.cloudmuseum_backend.entity.Course;
import java.util.List;

public interface CourseService {
    Course getById(Long id);
    List<Course> getActive();
    List<Course> getAll(String status);
    Course create(Course course);
    Course update(Course course);
    void delete(Long id);
    boolean reserveCapacity(Long courseId, int count);
    boolean releaseCapacity(Long courseId, int count);
}
