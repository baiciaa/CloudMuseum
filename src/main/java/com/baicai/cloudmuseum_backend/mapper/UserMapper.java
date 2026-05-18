package com.baicai.cloudmuseum_backend.mapper;

import com.baicai.cloudmuseum_backend.entity.User;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface UserMapper {

    @Select("SELECT * FROM users WHERE id = #{id}")
    User findById(Long id);

    @Select("SELECT * FROM users WHERE username = #{username}")
    User findByUsername(String username);

    @Select("SELECT * FROM users ORDER BY created_at DESC")
    List<User> findAll();

    @Insert("INSERT INTO users (username, password, role, phone, email) " +
            "VALUES (#{username}, #{password}, #{role}, #{phone}, #{email})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    int insert(User user);

    @Update("UPDATE users SET username=#{username}, role=#{role}, phone=#{phone}, email=#{email} WHERE id=#{id}")
    int update(User user);

    @Update("UPDATE users SET password=#{password} WHERE id=#{id}")
    int updatePassword(@Param("id") Long id, @Param("password") String password);

    @Delete("DELETE FROM users WHERE id=#{id}")
    int deleteById(Long id);
}
