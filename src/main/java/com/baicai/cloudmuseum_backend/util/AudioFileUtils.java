package com.baicai.cloudmuseum_backend.util;


import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

public class AudioFileUtils {

    /**
     * 将MultipartFile保存为临时文件
     */
    public static Path saveTempFile(MultipartFile audioFile) throws IOException {
        String originalName = audioFile.getOriginalFilename();
        String suffix = "";
        if (originalName != null && originalName.contains(".")) {
            suffix = originalName.substring(originalName.lastIndexOf("."));
        }

        Path tempFile = Files.createTempFile("audio_", suffix);
        Files.copy(audioFile.getInputStream(), tempFile, StandardCopyOption.REPLACE_EXISTING);

        // 设置JVM退出时删除临时文件
        tempFile.toFile().deleteOnExit();

        return tempFile;
    }
}
