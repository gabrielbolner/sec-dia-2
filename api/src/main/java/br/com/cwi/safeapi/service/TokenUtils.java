package br.com.cwi.safeapi.service;


import br.com.cwi.safeapi.security.domain.User;
import br.com.cwi.safeapi.security.repository.UserRepository;
import br.com.cwi.safeapi.security.service.AddUserService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TokenUtils {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AddUserService addUserService;

    private static final String SECRET = "mySecret";

    public static String generateToken(User user) {
        String token = Jwts.builder()
                .setSubject(user.getEmail())
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .compact();
        return token;
    }

    public void resetarSenha(String token, String novaSenha) {
        User user = userRepository.findByResetToken(token);

        if (user == null) {
            throw new RuntimeException("Token inválido");
        }

        String encriptedPassword = addUserService.getSenhaCriptografada(novaSenha);

        user.setPassword(encriptedPassword);
        user.setResetToken(null);

        userRepository.save(user);
    }
}
