package com.Forum.Forum.client;

import com.Forum.Forum.dto.CoursesUserDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "courses", contextId = "coursesUserClient", path = "/api/users")
public interface CoursesUserClient {

    @GetMapping("/{id}")
    CoursesUserDTO getUserById(@PathVariable("id") Long id);
}
