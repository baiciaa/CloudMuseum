package com.baicai.cloudmuseum_backend.service;

import com.baicai.cloudmuseum_backend.entity.Article;
import java.util.List;

public interface ArticleService {
    Article getById(Long id);
    List<Article> getPublished(String type, int page, int size);
    int countPublished(String type);
    List<Article> getAll(String type, String status);
    Article create(Article article);
    Article update(Article article);
    void delete(Long id);
}
