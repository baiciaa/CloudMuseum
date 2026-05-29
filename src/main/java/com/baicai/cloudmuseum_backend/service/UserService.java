package com.baicai.cloudmuseum_backend.service;

import com.baicai.cloudmuseum_backend.entity.User;
import java.util.List;

public interface UserService {
    User getById(Long id);
    User getByUsername(String username);
    List<User> getAll();
    User create(User user);
    User update(User user);
    void updatePassword(Long id, String newPassword);
    int countAll();
    void delete(Long id);
}
