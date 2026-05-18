package com.baicai.cloudmuseum_backend.controller;

import com.baicai.cloudmuseum_backend.dto.ApiResponse;
import com.baicai.cloudmuseum_backend.entity.Article;
import com.baicai.cloudmuseum_backend.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/articles")
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    @GetMapping
    public ApiResponse<Map<String, Object>> list(
            @RequestParam(required = false) String type,
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10") int size) {
        List<Article> articles = articleService.getPublished(type, page, size);
        int total = articleService.countPublished(type);
        Map<String, Object> result = new HashMap<>();
        result.put("list", articles);
        result.put("total", total);
        result.put("page", page);
        result.put("size", size);
        return ApiResponse.ok(result);
    }

    @GetMapping("/{id}")
    public ApiResponse<Article> getById(@PathVariable Long id) {
        return ApiResponse.ok(articleService.getById(id));
    }

    @PostMapping
    public ApiResponse<Article> create(@RequestBody Article article) {
        return ApiResponse.ok(articleService.create(article));
    }

    @PutMapping("/{id}")
    public ApiResponse<Article> update(@PathVariable Long id, @RequestBody Article article) {
        article.setId(id);
        return ApiResponse.ok(articleService.update(article));
    }

    @DeleteMapping("/{id}")
    public ApiResponse<?> delete(@PathVariable Long id) {
        articleService.delete(id);
        return ApiResponse.empty();
    }
}
