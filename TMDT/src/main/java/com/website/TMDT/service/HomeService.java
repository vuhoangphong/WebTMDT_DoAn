package com.website.TMDT.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.website.TMDT.model.User;
import com.website.TMDT.repository.UserRepository;

@Service
public class HomeService {
	@Autowired
	UserRepository userRepository;
	public List<User> getAllUser(int status) {
		return userRepository.getAllUser(status);
	}
}
