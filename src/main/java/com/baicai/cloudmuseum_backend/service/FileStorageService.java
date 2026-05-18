package com.baicai.cloudmuseum_backend.service;

import org.springframework.web.multipart.MultipartFile;

public interface FileStorageService {
    String store(MultipartFile file, String subDir);
}
