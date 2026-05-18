package com.baicai.cloudmuseum_backend.controller;

import com.baicai.cloudmuseum_backend.service.AsrService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/voice")
public class VoiceToTextController {

    @Autowired
    private AsrService asrService;


    @PostMapping("/recognize")
    public ResponseEntity<Map<String, Object>> recognize(@RequestParam("audio") MultipartFile audioFile) {
        try {
            String result = asrService.recognizeMultipartFile(audioFile);
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("text", result);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("success", false);
            error.put("message", e.getMessage());
            return ResponseEntity.badRequest().body(error);
        }
    }

}