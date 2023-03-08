package br.com.cwi.safeapi.validator;

import br.com.cwi.safeapi.security.domain.User;
import br.com.cwi.safeapi.security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Objects;
import java.util.Optional;

@Service
public class UserValidator {
    @Autowired
    private static UserRepository userRepository;


    public static User findById(Long id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isEmpty()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"Usuario não existe");
        }
        String s = user.get().getEmail();
        return user.get();
    }
}
