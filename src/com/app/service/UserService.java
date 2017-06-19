package com.app.service;

import com.app.domain.User;

public interface UserService {
    public boolean register(User user);
    public User loginCheck(User user);
    public User loginCheck(String login_id,String password);
}
