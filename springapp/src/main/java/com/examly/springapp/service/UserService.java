package com.examly.springapp.service;

import com.examly.springapp.model.UserModel;

public interface UserService{

    String saveUser(UserModel user);
    UserEntity fetchUser(String email);
    
}
