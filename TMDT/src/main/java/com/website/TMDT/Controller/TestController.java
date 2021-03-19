package com.website.TMDT.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.website.TMDT.model.User;
import com.website.TMDT.service.HomeService;

@RestController
public class TestController {
	@Autowired
	HomeService homeService;
	
	@GetMapping("/hello")
	public List<User> hello() {
		return homeService.getAllUser(1);
	}
	
	@PostMapping("/hello")
	public User hello( @RequestBody User user ) {
		return user;
	}
}
