package com.baicai.cloudmuseum_backend.mapper;

import com.baicai.cloudmuseum_backend.entity.Article;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface ArticleMapper {

    @Select("SELECT * FROM articles WHERE id = #{id}")
    Article findById(Long id);

    @Select("SELECT * FROM articles WHERE status = 'PUBLISHED' ORDER BY created_at DESC")
    List<Article> findPublished();

    @Select("<script>" +
            "SELECT * FROM articles WHERE status = 'PUBLISHED'" +
            "<if test='type != null'> AND type = #{type}</if>" +
            "ORDER BY created_at DESC LIMIT #{offset}, #{limit}" +
            "</script>")
    List<Article> findPublishedByType(@Param("type") String type, @Param("offset") int offset, @Param("limit") int limit);

    @Select("<script>" +
            "SELECT * FROM articles WHERE 1=1" +
            "<if test='type != null'> AND type = #{type}</if>" +
            "<if test='status != null'> AND status = #{status}</if>" +
            "ORDER BY created_at DESC" +
            "</script>")
    List<Article> findAll(@Param("type") String type, @Param("status") String status);

    @Insert("INSERT INTO articles (title, content, type, cover_image, external_link, author, status) " +
            "VALUES (#{title}, #{content}, #{type}, #{coverImage}, #{externalLink}, #{author}, #{status})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    int insert(Article article);

    @Update("UPDATE articles SET title=#{title}, content=#{content}, type=#{type}, " +
            "cover_image=#{coverImage}, external_link=#{externalLink}, author=#{author}, status=#{status} " +
            "WHERE id=#{id}")
    int update(Article article);

    @Delete("DELETE FROM articles WHERE id=#{id}")
    int deleteById(Long id);

    @Select("<script>" +
            "SELECT count(*) FROM articles WHERE status = 'PUBLISHED'" +
            "<if test='type != null'> AND type = #{type}</if>" +
            "</script>")
    int countPublished(@Param("type") String type);
}
