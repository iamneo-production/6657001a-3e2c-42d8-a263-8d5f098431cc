package com.examly.springapp.service;

import com.examly.springapp.model.UserModel;
import com.examly.springapp.entity.UserEntity;

public interface UserService{

    String saveUser(UserModel user);
    String saveAdmin(UserModel user);
    UserEntity fetchUser(String email);
    
}
