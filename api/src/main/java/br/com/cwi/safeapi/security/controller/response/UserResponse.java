package br.com.cwi.safeapi.security.controller.response;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class UserResponse {

    private Long id;

    private String fullName;

    private String email;

    private String password;

    private String profileImage;

    private String phone;

    private LocalDate added_in;

    private LocalDate modified_in;

}
