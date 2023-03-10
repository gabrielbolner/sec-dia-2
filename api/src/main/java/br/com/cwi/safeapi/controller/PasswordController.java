package br.com.cwi.safeapi.controller;


import br.com.cwi.safeapi.controller.request.ForgotPasswordRequest;
import br.com.cwi.safeapi.controller.request.UpdatePasswordRequest;
import br.com.cwi.safeapi.security.domain.User;
import br.com.cwi.safeapi.security.repository.UserRepository;
import br.com.cwi.safeapi.security.service.AuthenticatedUserService;
import br.com.cwi.safeapi.security.service.EmailService;
import br.com.cwi.safeapi.service.TokenUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.mail.MessagingException;

import static br.com.cwi.safeapi.service.TokenUtils.generateToken;

@RestController
@RequestMapping("/passwords")
public class PasswordController {

    @Autowired
    private EmailService emailService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthenticatedUserService authenticatedUserService;

    @Autowired
    private TokenUtils tokenUtils;

    @Secured("IS_AUTHENTICATED_ANONYMOUSLY")
    @PostMapping("/forgot-password")
    public void forgotPassword(@RequestBody ForgotPasswordRequest request ) throws MessagingException {

        String email = request.getEmail();
        User user = userRepository.findByEmail(email).get();

        if (user == null) {
            throw new UsernameNotFoundException("User with e-mail " + email + " not found");
        }

        String token = generateToken(user);

        user.setResetToken(token);

        userRepository.save(user);

        String body = "To recover your password, please access this link: http://localhost:3000/recover-password/" + token;

        emailService.sendEmail(email, "Password Recover", body);
    }

    @Secured("IS_AUTHENTICATED_ANONYMOUSLY")
    @PostMapping("/recover-password")
    public void recoverPassword(@RequestBody UpdatePasswordRequest request) {
        User user = userRepository.findByResetToken(request.getToken());

        tokenUtils.resetarSenha( request.getToken(),  request.getNewPassword());
    }
}
