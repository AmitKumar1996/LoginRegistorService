package dev.amit.LoginRegistorServer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.amit.LoginRegistorServer.entity.Users;
import dev.amit.LoginRegistorServer.repository.userRepository;
import dev.amit.LoginRegistorServer.requests.LoginRequest;

@Service
public class UserService {
	
	@Autowired
	userRepository userRepository;
	
	public Users addUser(Users user) {
		
		return userRepository.save(user);
	}
	
//	public Boolean loginUser(LoginRequest loginRequest) {
//		
//		Optional<Users> user = userRepository.findById(loginRequest.getUserId());
//		if(user.isEmpty()) {
//			return false;
//		}
//		
//		
//		Users user1= user.get();
//		
//		if(!user1.getPassword().equals(loginRequest)) {
//			return false;
//		}
//		
//		return true;
//	}
	
	public Boolean loginUser(LoginRequest loginRequest) {
	    return userRepository.findById(loginRequest.getUserId())
	            .filter(user -> user.getPassword().equals(loginRequest.getPassword()))
	            .isPresent();
	}


}
