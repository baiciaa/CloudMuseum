package com.baicai.cloudmuseum_backend.mapper;

import com.baicai.cloudmuseum_backend.entity.Recruitment;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface RecruitmentMapper {

    @Select("SELECT * FROM recruitments WHERE id = #{id}")
    Recruitment findById(Long id);

    @Select("<script>" +
            "SELECT * FROM recruitments WHERE 1=1" +
            "<if test='type != null'> AND type = #{type}</if>" +
            "<if test='status != null'> AND status = #{status}</if>" +
            "ORDER BY created_at DESC" +
            "</script>")
    List<Recruitment> findAll(@Param("type") String type, @Param("status") String status);

    @Insert("INSERT INTO recruitments (name, phone, email, age, school, intro, type, status) " +
            "VALUES (#{name}, #{phone}, #{email}, #{age}, #{school}, #{intro}, #{type}, #{status})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    int insert(Recruitment recruitment);

    @Update("UPDATE recruitments SET status=#{status} WHERE id=#{id}")
    int updateStatus(@Param("id") Long id, @Param("status") String status);

    @Delete("DELETE FROM recruitments WHERE id=#{id}")
    int deleteById(Long id);
}
