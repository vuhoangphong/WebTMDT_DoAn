package com.website.TMDT.model;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.sql.Date;

@Data
public class User {
	private int idUser;
	private String fullName;
	private String email;
	private String phoneNumber;
	private String address;
	private byte sex;
	private byte[] avatar;
	private Date dateCreate;
	private String account;
	private String passWord;
	private int statusUser;
	
}
