package com.baicai.cloudmuseum_backend.service.impl;

import com.baicai.cloudmuseum_backend.entity.User;
import com.baicai.cloudmuseum_backend.mapper.UserMapper;
import com.baicai.cloudmuseum_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @Override
    public User getById(Long id) {
        User user = userMapper.findById(id);
        if (user == null) throw new RuntimeException("用户不存在");
        user.setPassword(null);
        return user;
    }

    @Override
    public User getByUsername(String username) {
        return userMapper.findByUsername(username);
    }

    @Override
    public List<User> getAll() {
        List<User> users = userMapper.findAll();
        users.forEach(u -> u.setPassword(null));
        return users;
    }

    @Override
    public User create(User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        userMapper.insert(user);
        user.setPassword(null);
        return user;
    }

    @Override
    public User update(User user) {
        userMapper.update(user);
        return getById(user.getId());
    }

    @Override
    public void updatePassword(Long id, String newPassword) {
        userMapper.updatePassword(id, encoder.encode(newPassword));
    }

    @Override
    public void delete(Long id) {
        userMapper.deleteById(id);
    }
}
