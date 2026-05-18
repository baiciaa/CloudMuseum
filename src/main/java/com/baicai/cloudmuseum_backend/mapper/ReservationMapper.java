package com.baicai.cloudmuseum_backend.mapper;

import com.baicai.cloudmuseum_backend.entity.Reservation;
import org.apache.ibatis.annotations.*;

import java.time.LocalDate;
import java.util.List;

@Mapper
public interface ReservationMapper {

    @Select("SELECT * FROM reservations WHERE id = #{id}")
    Reservation findById(Long id);

    @Select("<script>" +
            "SELECT * FROM reservations WHERE 1=1" +
            "<if test='userId != null'> AND user_id = #{userId}</if>" +
            "<if test='status != null'> AND status = #{status}</if>" +
            "<if test='courseId != null'> AND course_id = #{courseId}</if>" +
            "ORDER BY created_at DESC LIMIT #{offset}, #{limit}" +
            "</script>")
    List<Reservation> findAll(@Param("userId") Long userId, @Param("status") String status,
                              @Param("courseId") Long courseId, @Param("offset") int offset,
                              @Param("limit") int limit);

    @Select("<script>" +
            "SELECT count(*) FROM reservations WHERE 1=1" +
            "<if test='userId != null'> AND user_id = #{userId}</if>" +
            "<if test='status != null'> AND status = #{status}</if>" +
            "<if test='courseId != null'> AND course_id = #{courseId}</if>" +
            "</script>")
    int count(@Param("userId") Long userId, @Param("status") String status,
              @Param("courseId") Long courseId);

    @Insert("INSERT INTO reservations (user_id, type, course_id, visit_date, visitor_count, status, contact_name, contact_phone, remarks) " +
            "VALUES (#{userId}, #{type}, #{courseId}, #{visitDate}, #{visitorCount}, #{status}, #{contactName}, #{contactPhone}, #{remarks})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    int insert(Reservation reservation);

    @Update("UPDATE reservations SET status=#{status} WHERE id=#{id}")
    int updateStatus(@Param("id") Long id, @Param("status") String status);

    @Update("UPDATE reservations SET contact_name=#{contactName}, contact_phone=#{contactPhone}, remarks=#{remarks}, visit_date=#{visitDate}, visitor_count=#{visitorCount} WHERE id=#{id}")
    int update(Reservation reservation);

    @Delete("DELETE FROM reservations WHERE id=#{id}")
    int deleteById(Long id);

    @Select("SELECT COALESCE(SUM(visitor_count), 0) FROM reservations WHERE course_id = #{courseId} AND visit_date = #{visitDate} AND status = 'CONFIRMED'")
    int sumConfirmedVisitors(@Param("courseId") Long courseId, @Param("visitDate") LocalDate visitDate);
}
