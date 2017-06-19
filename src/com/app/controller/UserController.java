package com.app.controller;

import com.app.domain.User;
import com.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;


@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("login")
    public String login(){
        return "user/login";
    }


    @RequestMapping("/user/loginView")
    public String loginView(){
        return "login";
    }

    @RequestMapping("/user/testView")
    public String testView(){
        return "test";
    }

    @RequestMapping("/user/registerView")
    public String registerView(){
        return "register";
    }

    @RequestMapping("/user/login")
    public String login(User user){
        ModelAndView mav = new ModelAndView();
        User u = userService.loginCheck(user);
        if(null==u){
            mav.setViewName("error");
            mav.addObject("errorMsg","µÇÂ¼Ê§°Ü");
            return null;
        }
        else{
            mav.setViewName("success");
            mav.addObject("user", u);
            return "customer/listCustomers";
        }
    }

    @RequestMapping("/user/test")
    public ModelAndView test(String username){
        ModelAndView mav = new ModelAndView();
        User u = userService.loginCheck(username, "123321");
        mav.setViewName("main.page");
        mav.addObject("message", u.getPassword());
        String s =loginView();
        return mav;
    }

    @RequestMapping("/user/register")
    public ModelAndView register(User user){
        ModelAndView mav = new ModelAndView();
        if(userService.register(user)){
            mav.setViewName("register_succ");
            return mav;
        }
        else{
            mav.setViewName("register");
            mav.addObject("errorMsg","×¢²áÊ§°Ü");
            return mav;
        }
    }
}
