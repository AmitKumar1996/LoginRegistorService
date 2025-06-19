//package dev.amit.LoginRegistorServer.controllers;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.ResponseBody;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//public class EmpController {
//	
//	private static final HttpStatus ResponseEntity = null;
//	@Autowired
//	EmpRepository empRepository;
//	
//	
//	@PostMapping("/employee")
//	public ResponseEntity<?> createEmployee(@ResponseBody Employee employee){
//		
//		empRepository.save(employee);
//		return ResponseEntity<>(HttpStatus.OK);
//	}
//	
//	
//	@GetMapping("/employee")
//	public ResponseEntity<?> getEmployee(){
//		
//		empRepository.findAll();
//		
//	}
//
//}
