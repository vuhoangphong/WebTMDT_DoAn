package com.website.TMDT.repository;

import java.util.List;

import com.website.TMDT.model.User;

public interface  UserRepository {
	List<User> getAllUser(int status);
	User findByName(String account);
}
