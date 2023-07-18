package com.examly.springapp.model;

public class AuthResponse {

    private String role;
    private String token;

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public AuthResponse(String role, String token) {
        this.role = role;
        this.token = token;
    }

    public AuthResponse() {
    }
    
}
