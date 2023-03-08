package br.com.cwi.safeapi.security.service;

import br.com.cwi.safeapi.security.controller.request.UserRequest;
import br.com.cwi.safeapi.security.controller.response.UserResponse;
import br.com.cwi.safeapi.security.domain.Function;
import br.com.cwi.safeapi.security.domain.Permission;
import br.com.cwi.safeapi.security.domain.User;
import br.com.cwi.safeapi.security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

import static br.com.cwi.safeapi.security.domain.Function.ADMIN;
import static br.com.cwi.safeapi.security.domain.Function.USER;
import static br.com.cwi.safeapi.security.mapper.UserMapper.toEntity;
import static br.com.cwi.safeapi.security.mapper.UserMapper.toResponse;

@Service
public class AddUserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public UserResponse add(UserRequest request) {

        User user = toEntity(request);
        user.setPassword(getSenhaCriptografada(request.getPassword()));
        user.addPermission(getPermissaoPadrao());
        user.setAdded_in(LocalDate.now());
        user.setModified_in(LocalDate.now());
        user.setProfileImage(request.getProfileImage());
        user.setPhone(request.getPhone());
        user.setActive(true);

        Function function = request.getPermission().equals("ADMIN") ? ADMIN: USER;
        Permission permission = new Permission();
        permission.setFunction(function);
        permission.setUser(user);

        userRepository.save(user);

        return toResponse(user);
    }

    private String getSenhaCriptografada(String openPassword) {
        return passwordEncoder.encode(openPassword);
    }

    private Permission getPermissaoPadrao() {
        Permission permission = new Permission();
        permission.setFunction(USER);
        return permission;
    }
}
