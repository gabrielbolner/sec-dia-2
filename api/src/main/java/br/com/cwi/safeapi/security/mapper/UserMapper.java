package br.com.cwi.safeapi.security.mapper;

import br.com.cwi.safeapi.security.controller.request.UserRequest;
import br.com.cwi.safeapi.security.controller.response.UserResponse;
import br.com.cwi.safeapi.security.domain.User;

public class UserMapper {

    public static User toEntity(UserRequest request) {
        User entity = new User();
        entity.setFullName(request.getFullName());
        entity.setEmail(request.getEmail());
        entity.setPhone(request.getPhone());
        return entity;
    }

    public static UserResponse toResponse(User entity) {
        UserResponse response = new UserResponse();
        response.setId(entity.getId());
        response.setFullName(entity.getFullName());
        response.setEmail(entity.getEmail());
        response.setPhone(entity.getPhone());
        response.setAdded_in(entity.getAdded_in());
        response.setModified_in(entity.getModified_in());
        response.setProfileImage(entity.getProfileImage());
        return response;
    }
}
