package com.baicai.cloudmuseum_backend.controller;

import com.baicai.cloudmuseum_backend.dto.ApiResponse;
import com.baicai.cloudmuseum_backend.dto.CreateReservationRequest;
import com.baicai.cloudmuseum_backend.dto.UpdateStatusRequest;
import com.baicai.cloudmuseum_backend.entity.Reservation;
import com.baicai.cloudmuseum_backend.service.ReservationService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/reservations")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @GetMapping
    public ApiResponse<Map<String, Object>> list(
            @RequestParam(required = false) Long userId,
            @RequestParam(required = false) String status,
            @RequestParam(required = false) Long courseId,
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10") int size) {
        List<Reservation> list = reservationService.getAll(userId, status, courseId, page, size);
        int total = reservationService.count(userId, status, courseId);
        Map<String, Object> result = new HashMap<>();
        result.put("list", list);
        result.put("total", total);
        result.put("page", page);
        result.put("size", size);
        return ApiResponse.ok(result);
    }

    @GetMapping("/{id}")
    public ApiResponse<Reservation> getById(@PathVariable Long id) {
        return ApiResponse.ok(reservationService.getById(id));
    }

    @PostMapping
    public ApiResponse<Reservation> create(@Valid @RequestBody CreateReservationRequest request) {
        return ApiResponse.ok(reservationService.create(request));
    }

    @PutMapping("/{id}/status")
    public ApiResponse<Reservation> updateStatus(@PathVariable Long id, @RequestBody UpdateStatusRequest request) {
        return ApiResponse.ok(reservationService.updateStatus(id, request.getStatus()));
    }

    @PutMapping("/{id}")
    public ApiResponse<Reservation> update(@PathVariable Long id, @RequestBody Reservation reservation) {
        return ApiResponse.ok(reservationService.update(id, reservation));
    }

    @DeleteMapping("/{id}")
    public ApiResponse<?> delete(@PathVariable Long id) {
        reservationService.delete(id);
        return ApiResponse.empty();
    }
}
