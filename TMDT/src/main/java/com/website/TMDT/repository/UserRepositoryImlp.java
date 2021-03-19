package com.website.TMDT.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.website.TMDT.model.User;

@Repository
public class UserRepositoryImlp implements UserRepository {
	@Autowired
	JdbcTemplate jdbc;

	@Override
	public List<User> getAllUser(int status) {
		String sql = "SELECT * FROM user WHERE statusUser = ?";
		return jdbc.query(sql, new Object[] {status},new BeanPropertyRowMapper(User.class));
		 
	}

	@Override
	public User findByName(String account) {
		String sql="SELECT   account , password FROM user u INNER JOIN user_role ur ON u.idUser = ur.idUser INNER JOIN role r on ur.idRole = r.idRole WHERE account = ?  AND statusUser != 0 AND statusUser != 2 GROUP BY account  ";	
		return (User) jdbc.query(sql, new Object[] {account}, new BeanPropertyRowMapper(User.class));
	}
	
}
