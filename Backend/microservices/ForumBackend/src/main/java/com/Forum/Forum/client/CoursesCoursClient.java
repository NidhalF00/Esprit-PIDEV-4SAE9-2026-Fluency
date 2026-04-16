package com.Forum.Forum.client;

import com.Forum.Forum.dto.CoursesCoursDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "courses", contextId = "coursesCoursClient", path = "/api/cours")
public interface CoursesCoursClient {

    @GetMapping("/{id}")
    CoursesCoursDTO getCoursById(@PathVariable("id") Long id);
}
