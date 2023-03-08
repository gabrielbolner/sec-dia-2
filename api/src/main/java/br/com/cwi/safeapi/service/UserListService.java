package br.com.cwi.safeapi.service;

import br.com.cwi.safeapi.controller.request.UpdateUserRequest;
import br.com.cwi.safeapi.security.controller.response.UserResponse;
import br.com.cwi.safeapi.security.domain.User;
import br.com.cwi.safeapi.security.mapper.UserMapper;
import br.com.cwi.safeapi.security.repository.UserRepository;
import br.com.cwi.safeapi.validator.UserValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Objects;
import java.util.Optional;

@Service
public class UserListService {

    @Autowired
    private UserRepository userRepository;


    public Page<UserResponse> listByNameOrEmail(String received, Pageable pageable) {

        Page<UserResponse> map = userRepository.findByFullNameContainingIgnoreCaseOrEmailContainingIgnoreCaseAndActive(received, received, true, pageable)
                .map(UserMapper::toResponse);
        return map;
    }

    public UserResponse getById(Long id) {
        User foundUser = userRepository.findById(id).get();
        return UserMapper.toResponse(foundUser);
    }

    public UserResponse updateProfile(Long id, UpdateUserRequest request) {


        //User user = UserValidator.findById(id);
        User user = userRepository.findById(id).get();
        if (Objects.isNull(user)){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"Usuario não existe");
        }

        if(Objects.nonNull(request.getPhone())){
            user.setPhone(request.getPhone());
        }
        if(Objects.nonNull(request.getProfileImage())){
            user.setProfileImage(request.getProfileImage());
        }
        if(Objects.nonNull(request.getFullName())){
            user.setFullName(request.getFullName());
        }
        userRepository.save(user);

        return UserMapper.toResponse(user);
    }
}
