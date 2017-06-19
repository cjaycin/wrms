package com.app.dao;

import com.app.domain.PageList;

import java.util.List;

/**
 * Created by cjay on 2015/4/15.
 */
public interface CustomerDAO {
    public List getAllCustomer();
    public List getCustomerById(long id);
    public PageList getCustomerByPage(List condition, int curPage, int pageSize);
}
