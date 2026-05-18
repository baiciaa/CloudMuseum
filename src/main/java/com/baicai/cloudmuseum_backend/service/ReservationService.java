package com.baicai.cloudmuseum_backend.service;

import com.baicai.cloudmuseum_backend.entity.Reservation;
import com.baicai.cloudmuseum_backend.dto.CreateReservationRequest;
import java.util.List;

public interface ReservationService {
    Reservation getById(Long id);
    List<Reservation> getAll(Long userId, String status, Long courseId, int page, int size);
    int count(Long userId, String status, Long courseId);
    Reservation create(CreateReservationRequest request);
    Reservation updateStatus(Long id, String status);
    Reservation update(Long id, Reservation reservation);
    void delete(Long id);
}
