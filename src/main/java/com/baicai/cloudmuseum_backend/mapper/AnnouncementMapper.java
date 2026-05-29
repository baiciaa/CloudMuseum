package com.baicai.cloudmuseum_backend.mapper;

import com.baicai.cloudmuseum_backend.entity.Announcement;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface AnnouncementMapper {

    @Select("SELECT * FROM announcements WHERE id = #{id}")
    Announcement findById(Long id);

    @Select("<script>" +
            "SELECT * FROM announcements WHERE status = 'PUBLISHED'" +
            "<if test='type != null'> AND type = #{type}</if>" +
            "ORDER BY created_at DESC LIMIT #{offset}, #{limit}" +
            "</script>")
    List<Announcement> findPublished(@Param("type") String type, @Param("offset") int offset, @Param("limit") int limit);

    @Select("<script>" +
            "SELECT count(*) FROM announcements WHERE status = 'PUBLISHED'" +
            "<if test='type != null'> AND type = #{type}</if>" +
            "</script>")
    int countPublished(@Param("type") String type);

    @Select("<script>" +
            "SELECT * FROM announcements WHERE 1=1" +
            "<if test='type != null'> AND type = #{type}</if>" +
            "<if test='status != null'> AND status = #{status}</if>" +
            "ORDER BY created_at DESC" +
            "</script>")
    List<Announcement> findAll(@Param("type") String type, @Param("status") String status);

    @Insert("INSERT INTO announcements (title, content, type, cover_image, status) " +
            "VALUES (#{title}, #{content}, #{type}, #{coverImage}, #{status})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    int insert(Announcement announcement);

    @Update("UPDATE announcements SET title=#{title}, content=#{content}, type=#{type}, " +
            "cover_image=#{coverImage}, status=#{status} WHERE id=#{id}")
    int update(Announcement announcement);

    @Delete("DELETE FROM announcements WHERE id=#{id}")
    int deleteById(Long id);
}
