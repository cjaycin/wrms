package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.UserDAO;
import com.app.domain.User;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDAO userDAO;

    @Override
    public User loginCheck(User user) {
        User u  = userDAO.findUserByUserName(user.getLoginId());
        System.out.println("id="+u.getId()+",  userName="+u.getLoginId()+", password="+u.getPassword());
        if(user.getPassword().equals(u.getPassword())){
            return u;
        }
        else{
            return null;
        }
    }

    @Override
    public User loginCheck(String login_id,String password) {
        User u  = userDAO.findUserByUserName(login_id);
        System.out.println("id="+u.getId()+",  userName="+u.getLoginId()+", password="+u.getPassword());
        return u;
    }

    @Override
    public boolean register(User user) {
        User u =  userDAO.findUserByUserName(user.getLoginId());
        if(u.getId()==0){
            userDAO.register(user);
            return true;
        }
        else{
            System.out.println("id="+u.getId()+",  userName="+u.getLoginId()+", password="+u.getPassword());
            return false;
        }
    }

}
