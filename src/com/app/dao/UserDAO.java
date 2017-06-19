package com.app.dao;

import com.app.domain.User;

/**
 * Created by lenovo on 2015/4/10.
 */
public interface UserDAO {
    public void register(User user);
    public User findUserByUserName(final String userName);
}
