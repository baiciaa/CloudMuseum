package com.baicai.cloudmuseum_backend.service.impl;

import com.baicai.cloudmuseum_backend.entity.Course;
import com.baicai.cloudmuseum_backend.mapper.CourseMapper;
import com.baicai.cloudmuseum_backend.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseMapper courseMapper;

    @Override
    @Cacheable(value = "courses", key = "'detail:' + #id")
    public Course getById(Long id) {
        Course course = courseMapper.findById(id);
        if (course == null) throw new RuntimeException("课程不存在");
        return course;
    }

    @Override
    @Cacheable(value = "courses", key = "'active'")
    public List<Course> getActive() {
        return courseMapper.findActive();
    }

    @Override
    public List<Course> getAll(String status) {
        return courseMapper.findAll(status);
    }

    @Override
    @CacheEvict(value = "courses", allEntries = true)
    public Course create(Course course) {
        if (course.getStatus() == null) course.setStatus("ACTIVE");
        if (course.getCurrentReserved() == null) course.setCurrentReserved(0);
        courseMapper.insert(course);
        return course;
    }

    @Override
    @CacheEvict(value = "courses", allEntries = true)
    public Course update(Course course) {
        courseMapper.update(course);
        return getById(course.getId());
    }

    @Override
    @CacheEvict(value = "courses", allEntries = true)
    public void delete(Long id) {
        courseMapper.deleteById(id);
    }

    @Override
    @CacheEvict(value = "courses", allEntries = true)
    public boolean reserveCapacity(Long courseId, int count) {
        return courseMapper.incrementReserved(courseId, count) > 0;
    }

    @Override
    @CacheEvict(value = "courses", allEntries = true)
    public boolean releaseCapacity(Long courseId, int count) {
        return courseMapper.incrementReserved(courseId, -count) > 0;
    }
}
