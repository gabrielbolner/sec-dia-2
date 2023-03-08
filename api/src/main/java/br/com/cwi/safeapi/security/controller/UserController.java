package br.com.cwi.safeapi.security.controller;

import br.com.cwi.safeapi.security.controller.request.UserRequest;
import br.com.cwi.safeapi.security.controller.response.UserResponse;
import br.com.cwi.safeapi.security.service.AddUserService;
import br.com.cwi.safeapi.security.service.AuthenticatedUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private AddUserService service;

    @Autowired
    private AuthenticatedUserService authenticatedUserService;

    @PostMapping
    public UserResponse addUser(@RequestBody UserRequest request) {
        return service.add(request);
    }
}
