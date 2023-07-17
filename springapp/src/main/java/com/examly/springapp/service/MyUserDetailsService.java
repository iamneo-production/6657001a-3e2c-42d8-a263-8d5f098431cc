package com.examly.springapp.service;

import java.util.Collection;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.examly.springapp.entity.UserEntity;
import com.examly.springapp.repository.UserRepository;

@Service
public class MyUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        UserEntity user = userRepository.findByEmail(email).get();

        if(user != null){
            return new org.springframework.security.core.userdetails.User(
                user.getEmail(),
                user.getPassword(),
                getAuthority(user)
        );
        }else{
            throw new UsernameNotFoundException("User not found");
        }
    }

    private Collection<GrantedAuthority> getAuthority(UserEntity user){
        GrantedAuthority authority = new SimpleGrantedAuthority("ROLE_"+user.getUserRole());
        return Collections.singleton(authority);
    }


    
}
