package com.baicai.cloudmuseum_backend.service.impl;

import com.baicai.cloudmuseum_backend.dto.CreateReservationRequest;
import com.baicai.cloudmuseum_backend.entity.Course;
import com.baicai.cloudmuseum_backend.entity.Reservation;
import com.baicai.cloudmuseum_backend.mapper.CourseMapper;
import com.baicai.cloudmuseum_backend.mapper.ReservationMapper;
import com.baicai.cloudmuseum_backend.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ReservationServiceImpl implements ReservationService {

    @Autowired
    private ReservationMapper reservationMapper;

    @Autowired
    private CourseMapper courseMapper;

    @Override
    public Reservation getById(Long id) {
        Reservation reservation = reservationMapper.findById(id);
        if (reservation == null) throw new RuntimeException("预约不存在");
        return reservation;
    }

    @Override
    public List<Reservation> getAll(Long userId, String status, Long courseId, int page, int size) {
        int offset = (page - 1) * size;
        return reservationMapper.findAll(userId, status, courseId, offset, size);
    }

    @Override
    public int count(Long userId, String status, Long courseId) {
        return reservationMapper.count(userId, status, courseId);
    }

    @Override
    @Transactional
    public Reservation create(CreateReservationRequest req) {
        Course course = null;
        if (req.getCourseId() != null) {
            course = courseMapper.findById(req.getCourseId());
            if (course == null) throw new RuntimeException("课程不存在");
            if (!"ACTIVE".equals(course.getStatus())) throw new RuntimeException("课程未开放预约");

            int remaining = course.getMaxCapacity() - course.getCurrentReserved();
            if (req.getVisitorCount() > remaining) {
                throw new RuntimeException("该课程仅剩 " + remaining + " 个名额");
            }

            courseMapper.incrementReserved(course.getId(), req.getVisitorCount());
        }

        Reservation reservation = new Reservation();
        reservation.setUserId(req.getUserId());
        reservation.setType(req.getType());
        reservation.setCourseId(req.getCourseId());
        reservation.setVisitDate(req.getVisitDate());
        reservation.setVisitorCount(req.getVisitorCount());
        reservation.setStatus("PENDING");
        reservation.setContactName(req.getContactName());
        reservation.setContactPhone(req.getContactPhone());
        reservation.setRemarks(req.getRemarks());

        reservationMapper.insert(reservation);
        return reservation;
    }

    @Override
    @Transactional
    public Reservation updateStatus(Long id, String status) {
        Reservation reservation = getById(id);
        String oldStatus = reservation.getStatus();

        // 额度流转：PENDING 创建时已占额，CANCELLED 需释放；CONFIRMED 不重复占额
        boolean wasActive = "PENDING".equals(oldStatus) || "CONFIRMED".equals(oldStatus);
        boolean willBeActive = "PENDING".equals(status) || "CONFIRMED".equals(status);

        if (wasActive && !willBeActive && reservation.getCourseId() != null) {
            courseMapper.incrementReserved(reservation.getCourseId(), -reservation.getVisitorCount());
        }
        if (!wasActive && willBeActive && reservation.getCourseId() != null) {
            courseMapper.incrementReserved(reservation.getCourseId(), reservation.getVisitorCount());
        }

        reservationMapper.updateStatus(id, status);
        reservation.setStatus(status);
        return reservation;
    }

    @Override
    public Reservation update(Long id, Reservation r) {
        r.setId(id);
        reservationMapper.update(r);
        return getById(id);
    }

    @Override
    public void delete(Long id) {
        Reservation reservation = getById(id);
        if ("CONFIRMED".equals(reservation.getStatus()) && reservation.getCourseId() != null) {
            courseMapper.incrementReserved(reservation.getCourseId(), -reservation.getVisitorCount());
        }
        reservationMapper.deleteById(id);
    }
}
