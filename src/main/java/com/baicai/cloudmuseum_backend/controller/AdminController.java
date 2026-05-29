package com.baicai.cloudmuseum_backend.controller;

import com.baicai.cloudmuseum_backend.config.AdminAuthInterceptor;
import com.baicai.cloudmuseum_backend.dto.ApiResponse;
import com.baicai.cloudmuseum_backend.entity.Article;
import com.baicai.cloudmuseum_backend.entity.Course;
import com.baicai.cloudmuseum_backend.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private UserService userService;
    @Autowired
    private ArticleService articleService;
    @Autowired
    private RelicService relicService;
    @Autowired
    private CourseService courseService;
    @Autowired
    private ReservationService reservationService;

    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @PostMapping("/login")
    public ApiResponse<Map<String, Object>> login(@RequestBody Map<String, String> body) {
        String username = body.get("username");
        String password = body.get("password");
        if (username == null || password == null) {
            return ApiResponse.fail("用户名和密码不能为空");
        }
        var user = userService.getByUsername(username);
        if (user == null || !"ADMIN".equals(user.getRole())) {
            return ApiResponse.fail("用户不存在或无权限");
        }
        if (!encoder.matches(password, user.getPassword())) {
            return ApiResponse.fail("密码错误");
        }
        String token = UUID.randomUUID().toString().replace("-", "");
        AdminAuthInterceptor.tokenStore.put(token, username);
        Map<String, Object> data = new HashMap<>();
        data.put("token", token);
        data.put("username", username);
        return ApiResponse.ok(data);
    }

    @GetMapping("/check")
    public ApiResponse<Map<String, Object>> check(@RequestHeader("X-Admin-Token") String token) {
        String username = AdminAuthInterceptor.tokenStore.get(token);
        if (username == null) {
            return ApiResponse.fail("token无效或已过期");
        }
        Map<String, Object> data = new HashMap<>();
        data.put("username", username);
        return ApiResponse.ok(data);
    }

    @GetMapping("/stats")
    public ApiResponse<Map<String, Object>> stats() {
        Map<String, Object> stats = new LinkedHashMap<>();
        stats.put("users", userService.getAll().size());
        stats.put("articles", articleService.getAll(null, null).size());
        stats.put("relics", relicService.count(null, null));
        stats.put("courses", courseService.getAll(null).size());
        stats.put("reservations", reservationService.count(null, null, null));
        return ApiResponse.ok(stats);
    }

    /** 管理端文章列表（含草稿） */
    @GetMapping("/articles")
    public ApiResponse<List<Article>> articles(
            @RequestParam(required = false) String type,
            @RequestParam(required = false) String status) {
        return ApiResponse.ok(articleService.getAll(type, status));
    }

    /** 管理端课程列表（含已下架） */
    @GetMapping("/courses")
    public ApiResponse<List<Course>> courses(@RequestParam(required = false) String status) {
        if (status != null) {
            return ApiResponse.ok(courseService.getAll(status));
        }
        return ApiResponse.ok(courseService.getAll(null));
    }
}
