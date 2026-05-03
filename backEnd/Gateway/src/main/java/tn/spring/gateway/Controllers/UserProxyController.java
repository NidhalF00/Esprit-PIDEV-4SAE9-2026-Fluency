package tn.spring.gateway.Controllers;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.spring.gateway.Clients.UserFeignClient;

import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserProxyController {

    private final ProxyForwarder proxy;
    private final UserFeignClient userFeignClient;

    @Value("${gateway.services.user-url}")
    private String userServiceUrl;

    public UserProxyController(ProxyForwarder proxy, UserFeignClient userFeignClient) {
        this.proxy = proxy;
        this.userFeignClient = userFeignClient;
    }

    private String userUsersBase() {
        return userServiceUrl + "/api/users";
    }

    @PostMapping("/create-employee")
    public ResponseEntity<String> createEmployee(@RequestBody Map<String, Object> body,
                                                 HttpServletRequest req) {
        return proxy.forward(userUsersBase() + "/create-employee", HttpMethod.POST, body, req);
    }

    @PostMapping("/create-user")
    public ResponseEntity<String> createUser(@RequestBody Map<String, Object> body,
                                             HttpServletRequest req) {
        return proxy.forward(userUsersBase() + "/create-user", HttpMethod.POST, body, req);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> update(@PathVariable String id,
                                         @RequestBody Map<String, Object> body,
                                         HttpServletRequest req) {
        return proxy.forward(userUsersBase() + "/" + id, HttpMethod.PUT, body, req);
    }

    @PutMapping("/block/{id}")
    public ResponseEntity<String> block(@PathVariable String id, HttpServletRequest req) {
        return proxy.forward(userUsersBase() + "/block/" + id, HttpMethod.PUT, null, req);
    }

    @PutMapping("/unblock/{id}")
    public ResponseEntity<String> unblock(@PathVariable String id, HttpServletRequest req) {
        return proxy.forward(userUsersBase() + "/unblock/" + id, HttpMethod.PUT, null, req);
    }

    @PutMapping("/role/{id}")
    public ResponseEntity<String> changeRole(@PathVariable String id,
                                             @RequestBody Map<String, Object> body,
                                             HttpServletRequest req) {
        return proxy.forward(userUsersBase() + "/role/" + id, HttpMethod.PUT, body, req);
    }

    @GetMapping("/admins")
    public ResponseEntity<String> getAdmins(HttpServletRequest req) {
        return proxy.forward(userUsersBase() + "/admins", HttpMethod.GET, null, req);
    }

    @GetMapping("/students")
    public ResponseEntity<String> getStudents(HttpServletRequest req) {
        String authHeader = req.getHeader(HttpHeaders.AUTHORIZATION);
        return userFeignClient.getStudents(authHeader);
    }

    @GetMapping("/tutors")
    public ResponseEntity<String> getTutors(HttpServletRequest req) {
        return proxy.forward(userUsersBase() + "/tutors", HttpMethod.GET, null, req);
    }

    @GetMapping("/{id}")
    public ResponseEntity<String> getById(@PathVariable String id, HttpServletRequest req) {
        return proxy.forward(userUsersBase() + "/" + id, HttpMethod.GET, null, req);
    }
}
