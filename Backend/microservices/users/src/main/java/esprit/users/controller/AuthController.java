package esprit.users.controller;

import esprit.users.dto.*;
import esprit.users.entity.User;
import esprit.users.security.JwtTokenProvider;
import esprit.users.service.RecaptchaVerificationService;
import esprit.users.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Map;

@RestController
@RequestMapping("/user/auth")
@RequiredArgsConstructor
@Validated
public class AuthController {

    private final UserService userService;
    private final RecaptchaVerificationService recaptchaVerificationService;
    private final JwtTokenProvider jwtTokenProvider;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@Valid @RequestBody SignupRequest request) {
        if (!recaptchaVerificationService.verify(request.getRecaptchaToken())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("message", "Vérification « I'm not a robot » échouée. Cochez la case et réessayez."));
        }
        User created = userService.signup(request);
        String token = jwtTokenProvider.createToken(created);
        AuthResponse body = AuthResponse.builder()
                .token(token)
                .tokenType("Bearer")
                .user(UserResponse.fromEntity(created))
                .build();
        return ResponseEntity.status(HttpStatus.CREATED).body(body);
    }

    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> signin(@Valid @RequestBody SigninRequest request) {
        User user = userService.signin(request);
        String token = jwtTokenProvider.createToken(user);
        return ResponseEntity.ok(AuthResponse.builder()
                .token(token)
                .tokenType("Bearer")
                .user(UserResponse.fromEntity(user))
                .build());
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<Void> forgotPassword(@Valid @RequestBody ForgotPasswordRequest request) {
        userService.requestPasswordReset(request.getEmail(), request.getPhone(), request.getResolvedChannel());
        return ResponseEntity.ok().build();
    }

    @PostMapping("/reset-password")
    public ResponseEntity<Void> resetPassword(@Valid @RequestBody ResetPasswordRequest request) {
        userService.resetPassword(request.getToken(), request.getNewPassword());
        return ResponseEntity.ok().build();
    }

    @PostMapping("/google-signin")
    public ResponseEntity<AuthResponse> googleSignin(@Valid @RequestBody GoogleSigninRequest request) {
        User user = userService.googleSignin(request.getIdToken());
        String token = jwtTokenProvider.createToken(user);
        return ResponseEntity.ok(AuthResponse.builder()
                .token(token)
                .tokenType("Bearer")
                .user(UserResponse.fromEntity(user))
                .build());
    }

    @PostMapping("/facebook-signin")
    public ResponseEntity<AuthResponse> facebookSignin(@Valid @RequestBody FacebookSigninRequest request) {
        User user = userService.facebookSignin(request.getAccessToken());
        String token = jwtTokenProvider.createToken(user);
        return ResponseEntity.ok(AuthResponse.builder()
                .token(token)
                .tokenType("Bearer")
                .user(UserResponse.fromEntity(user))
                .build());
    }
}

