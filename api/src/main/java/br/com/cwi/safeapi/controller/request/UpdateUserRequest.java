package br.com.cwi.safeapi.controller.request;

import lombok.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UpdateUserRequest {


    private String fullName;

    private String profileImage;

    private String phone;
}
