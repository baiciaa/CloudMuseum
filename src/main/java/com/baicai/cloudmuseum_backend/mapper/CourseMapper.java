package com.baicai.cloudmuseum_backend.mapper;

import com.baicai.cloudmuseum_backend.entity.Course;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface CourseMapper {

    @Select("SELECT * FROM courses WHERE id = #{id}")
    Course findById(Long id);

    @Select("SELECT * FROM courses WHERE status = 'ACTIVE' ORDER BY created_at DESC")
    List<Course> findActive();

    @Select("<script>" +
            "SELECT * FROM courses WHERE 1=1" +
            "<if test='status != null'> AND status = #{status}</if>" +
            "ORDER BY created_at DESC" +
            "</script>")
    List<Course> findAll(@Param("status") String status);

    @Insert("INSERT INTO courses (title, description, content, cover_image, max_capacity, current_reserved, price, schedule_info, status) " +
            "VALUES (#{title}, #{description}, #{content}, #{coverImage}, #{maxCapacity}, #{currentReserved}, " +
            "#{price}, #{scheduleInfo}, #{status})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    int insert(Course course);

    @Update("UPDATE courses SET title=#{title}, description=#{description}, content=#{content}, " +
            "cover_image=#{coverImage}, max_capacity=#{maxCapacity}, price=#{price}, " +
            "schedule_info=#{scheduleInfo}, status=#{status} WHERE id=#{id}")
    int update(Course course);

    @Update("UPDATE courses SET current_reserved = current_reserved + #{delta} WHERE id=#{id} AND current_reserved + #{delta} >= 0 AND current_reserved + #{delta} <= max_capacity")
    int incrementReserved(@Param("id") Long id, @Param("delta") int delta);

    @Delete("DELETE FROM courses WHERE id=#{id}")
    int deleteById(Long id);
}
