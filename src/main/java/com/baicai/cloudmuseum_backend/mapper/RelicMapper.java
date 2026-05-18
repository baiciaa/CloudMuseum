package com.baicai.cloudmuseum_backend.mapper;

import com.baicai.cloudmuseum_backend.entity.Relic;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface RelicMapper {

    @Select("SELECT * FROM relics WHERE id = #{id}")
    Relic findById(Long id);

    @Select("<script>" +
            "SELECT * FROM relics WHERE 1=1" +
            "<if test='era != null'> AND era = #{era}</if>" +
            "<if test='category != null'> AND category = #{category}</if>" +
            "ORDER BY created_at DESC LIMIT #{offset}, #{limit}" +
            "</script>")
    List<Relic> findAll(@Param("era") String era, @Param("category") String category,
                        @Param("offset") int offset, @Param("limit") int limit);

    @Select("<script>" +
            "SELECT count(*) FROM relics WHERE 1=1" +
            "<if test='era != null'> AND era = #{era}</if>" +
            "<if test='category != null'> AND category = #{category}</if>" +
            "</script>")
    int count(@Param("era") String era, @Param("category") String category);

    @Insert("INSERT INTO relics (name, description, era, category, image_url, model_url, external_link) " +
            "VALUES (#{name}, #{description}, #{era}, #{category}, #{imageUrl}, #{modelUrl}, #{externalLink})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    int insert(Relic relic);

    @Update("UPDATE relics SET name=#{name}, description=#{description}, era=#{era}, " +
            "category=#{category}, image_url=#{imageUrl}, model_url=#{modelUrl}, external_link=#{externalLink} " +
            "WHERE id=#{id}")
    int update(Relic relic);

    @Delete("DELETE FROM relics WHERE id=#{id}")
    int deleteById(Long id);
}
