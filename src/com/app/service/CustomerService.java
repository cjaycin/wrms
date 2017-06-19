package com.app.service;

import com.app.domain.PageList;

import java.util.List;

/**
 * Created by cjay on 2015/4/15.
 */
public interface CustomerService {
    public List getAllCustomer();
    public List getCustomerById(long id);
    public PageList getCustomerByPage(String condition, int curPage, int pageSize);
}
