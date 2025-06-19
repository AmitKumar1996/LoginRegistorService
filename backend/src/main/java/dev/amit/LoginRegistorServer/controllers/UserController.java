package dev.amit.LoginRegistorServer.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import dev.amit.LoginRegistorServer.entity.Users;
import dev.amit.LoginRegistorServer.requests.LoginRequest;
import dev.amit.LoginRegistorServer.service.UserService;

@RestController
public class UserController {  // ✅ fix class name convention: PascalCase, singular
	
	@Autowired
	private UserService userService;  // ✅ best practice: private field
	
	@PostMapping("/addUser")
	@CrossOrigin(origins = "http://localhost:3000")
	public Users addUser(@RequestBody Users user) {
		
		System.out.println("log-1");
		return userService.addUser(user);
		//System.out.println("log-2");
	}
	
	@PostMapping("/loginUser")
	@CrossOrigin(origins = "http://localhost:3000")
	public Boolean loginUser(@RequestBody LoginRequest loginRequest) {
		return userService.loginUser(loginRequest);
	}
	
}
