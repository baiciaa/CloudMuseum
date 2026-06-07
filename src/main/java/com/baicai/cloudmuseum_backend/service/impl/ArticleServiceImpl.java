package com.baicai.cloudmuseum_backend.service.impl;

import com.baicai.cloudmuseum_backend.entity.Article;
import com.baicai.cloudmuseum_backend.mapper.ArticleMapper;
import com.baicai.cloudmuseum_backend.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleServiceImpl implements ArticleService {

    @Autowired
    private ArticleMapper articleMapper;

    @Override
    @Cacheable(value = "articles", key = "'detail:' + #id")
    public Article getById(Long id) {
        Article article = articleMapper.findById(id);
        if (article == null) throw new RuntimeException("文章不存在");
        return article;
    }

    @Override
    @Cacheable(value = "articles", key = "'list:' + #type + ':' + #page + ':' + #size")
    public List<Article> getPublished(String type, int page, int size) {
        int offset = (page - 1) * size;
        return articleMapper.findPublishedByType(type, offset, size);
    }

    @Override
    @Cacheable(value = "articles", key = "'count:' + #type")
    public int countPublished(String type) {
        return articleMapper.countPublished(type);
    }

    @Override
    public List<Article> getAll(String type, String status) {
        return articleMapper.findAll(type, status);
    }

    @Override
    @CacheEvict(value = "articles", allEntries = true)
    public Article create(Article article) {
        if (article.getStatus() == null) article.setStatus("PUBLISHED");
        articleMapper.insert(article);
        return article;
    }

    @Override
    @CacheEvict(value = "articles", allEntries = true)
    public Article update(Article article) {
        articleMapper.update(article);
        return getById(article.getId());
    }

    @Override
    @CacheEvict(value = "articles", allEntries = true)
    public void delete(Long id) {
        articleMapper.deleteById(id);
    }
}
