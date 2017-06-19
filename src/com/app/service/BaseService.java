package com.app.service;

import com.app.dao.BaseDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by cjay on 2015/4/15.
 */
@Service
public class BaseService {
    @Autowired
    private BaseDAO baseDAO;
}
