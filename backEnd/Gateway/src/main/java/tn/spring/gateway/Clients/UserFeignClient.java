package tn.spring.gateway.Clients;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(name = "User")
public interface UserFeignClient {

    @GetMapping("/api/users/students")
    ResponseEntity<String> getStudents(
            @RequestHeader(HttpHeaders.AUTHORIZATION) String authorization
    );
}
