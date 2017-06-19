package com.app.dao;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowCallbackHandler;
import org.springframework.stereotype.Repository;

import com.app.domain.User;

@Repository
public class UserDAOImpl implements UserDAO {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public void register(User user) {
        String sqlStr = "insert into user(loginid,password) values(?,?)";
        Object[] params = new Object[]{user.getLoginId(),user.getPassword()};
        jdbcTemplate.update(sqlStr, params);
    }

    @Override
    public User findUserByUserName(String userName) {
        String sqlStr = "select id, loginid,password,name from tbl_c_admin where loginid=?";
        final User user = new User();
        jdbcTemplate.query(sqlStr, new Object[]{userName}, new RowCallbackHandler() {
            @Override
            public void processRow(ResultSet rs) throws SQLException {
                user.setId(rs.getInt("id"));
                user.setLoginId(rs.getString("loginid"));
                user.setPassword(rs.getString("password"));
                user.setName(rs.getString("name"));
            }
        });
        return user;
    }

}
