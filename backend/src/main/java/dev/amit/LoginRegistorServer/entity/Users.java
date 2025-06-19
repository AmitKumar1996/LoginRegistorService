
package dev.amit.LoginRegistorServer.entity;

import com.fasterxml.jackson.annotation.JsonSubTypes.Type;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Users {
	
	@Id 
	private String email;
	
	@Column
	private String name;
	
	
	private String password;
	
	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public Users(String email, String name, String password) {
		super();
		this.email = email;
		this.name = name;
		this.password = password;
	}


	public Users() {
		super();
		// TODO Auto-generated constructor stub
	}


	@Override
	public String toString() {
		return "User [email=" + email + ", name=" + name + ", password=" + password + "]";
	}


	
	
	

}
