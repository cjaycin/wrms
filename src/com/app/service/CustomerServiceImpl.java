package com.app.service;

import com.app.dao.CustomerDAO;
import com.app.domain.PageList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by cjay on 2015/4/15.
 */
@Service
public class CustomerServiceImpl extends BaseService implements CustomerService{
    @Autowired
    private CustomerDAO customerDAO;

    public List getAllCustomer(){
        return customerDAO.getAllCustomer();
    }

    public List getCustomerById(long id){
        return customerDAO.getCustomerById(id);
    }

    public PageList getCustomerByPage(String condition, int curPage, int pageSize){
        List con = new ArrayList();
        if(condition != null && !"".equals(condition)){
            con.add(condition);
        }
        return customerDAO.getCustomerByPage(con, curPage, pageSize);
    }
}
