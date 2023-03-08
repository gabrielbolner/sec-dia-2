package br.com.cwi.safeapi.security.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum Function {

    USER(Names.USER),
    ADMIN(Names.ADMIN);

    public static class Names {
        public static final String USER = "ROLE_USER";
        public static final String ADMIN = "ROLE_ADMIN";
    }

    private final String role;
}
