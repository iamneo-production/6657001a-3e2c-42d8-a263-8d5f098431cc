package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.config.JwtUtil;
import com.examly.springapp.model.AuthResponse;
import com.examly.springapp.model.LoginModel;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.service.UserService;

@RestController
public class AuthController {
    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserDetailsService userDetailsService;

    @PostMapping("/user/signup")
    public ResponseEntity<?> saveUser(@RequestBody UserModel user) {
        String response = userService.saveUser(user);

        return ResponseEntity.ok(response);
    }

    @PostMapping("/user/login")
    public ResponseEntity<?> isUserPresent(@RequestBody LoginModel loginModel) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginModel.getEmail(), loginModel.getPassword()));
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password", e);
        }
        final UserDetails userdetails = userDetailsService.loadUserByUsername(loginModel.getEmail());
        final String token = jwtUtil.generateToken(userdetails);

        return ResponseEntity.ok(new AuthResponse(token));
    }

    @GetMapping("/user/hello")
    @PreAuthorize("hasRole('USER')")
    public String helloUser(){
        return "hello user";
    }

    
    @GetMapping("/admin/hello")
    @PreAuthorize("hasRole('ADMIN')")
    public String helloAdmin(){
        return "hello admin";
    }
}
