package com.example.ecommerce;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class TestController {

    @GetMapping("/api/test")
    public Map<String,String> test(){
        return Map.of(
                "message","Frontend and backend connection is working!",
                "status","success"
        );
    }
}
