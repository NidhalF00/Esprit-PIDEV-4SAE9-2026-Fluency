package com.Forum.Forum.client;

import com.Forum.Forum.dto.CoursesModuleDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "courses", contextId = "coursesModuleClient", path = "/api/modules")
public interface CoursesModuleClient {

    @GetMapping("/{id}")
    CoursesModuleDTO getModuleById(@PathVariable("id") Long id);
}
