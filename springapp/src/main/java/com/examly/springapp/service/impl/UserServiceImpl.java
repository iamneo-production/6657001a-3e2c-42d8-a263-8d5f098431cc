package com.examly.springapp.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.examly.springapp.entity.UserEntity;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.repository.UserRepository;
import com.examly.springapp.service.UserService;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public String saveUser(UserModel user) {
      
        UserEntity tempuser = new UserEntity();
        tempuser.setEmail(user.getEmail());
        tempuser.setPassword(passwordEncoder.encode(user.getPassword()));
        tempuser.setMobileNumber(user.getMobileNumber());
        tempuser.setUserRole(user.getUserRole().toUpperCase());
        tempuser.setUsername(user.getUsername());
        try{
        userRepository.save(tempuser);}
        catch(Exception e){
            return "User already exist";
        }
        return "User saved succcessfully";

    }

    @Override
    public UserEntity fetchUser(String email){
        return userRepository.findByEmail(email).get();
    }

    
}

   