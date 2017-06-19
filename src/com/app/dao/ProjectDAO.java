package com.app.dao;

import com.app.domain.Project;

import java.util.List;

/**
 * Created by cjay on 2015/4/15.
 */
public interface ProjectDAO {
    public List getProjectListByCustomer(long customerId);
    public void addProject(Project project);

}
