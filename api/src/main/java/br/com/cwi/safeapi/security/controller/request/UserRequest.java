package br.com.cwi.safeapi.security.controller.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Getter
@Setter
public class UserRequest {

    @NotBlank
    private String fullName;

    @Email
    @NotNull
    private String email;

    @NotBlank
    private String password;

    private String profileImage;

    private String permission;

    private String phone;

    private LocalDate added_in;

    private LocalDate modified_in;
}
