package com.app.dao;

import com.app.domain.PageList;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by cjay on 2015/4/15.
 */
@Repository
public class CustomerDAOImpl extends BaseDAO implements CustomerDAO{
    public List getAllCustomer(){
        String sql = "select * from tbl_c_customer";
        return this.queryForList(sql);
    }
    public List getCustomerById(long id){
        String sql ="select * from tbl_c_customer where id=?";
        return this.queryForList(sql,id);
    }

    public PageList getCustomerByPage(List condition, int curPage, int pageSize){
        StringBuffer sql = new StringBuffer("select * from tbl_c_customer where 1=1");
        List conditions = new ArrayList();
        if(condition != null && !"".equals(condition) && condition.size() > 0){
            String conStr = "%"+condition.get(0).toString()+"%";
            conditions.add(conStr);
            conditions.add(conStr);
            conditions.add(conStr);
            conditions.add(conStr);
            sql.append(" and name like ?")
                    .append(" or address like ?")
                    .append(" or mobile like ?")
                    .append(" or tel like ?");
//            sql.append(" and name like '%").append(conStr).append("%'")
//                    .append(" or address like '%").append(conStr).append("%'")
//                    .append(" or mobile like '%").append(conStr).append("%'")
//                    .append(" or tel like '%").append(conStr).append("%'");

        }
        return this.queryForPageList(curPage, pageSize, sql.toString(), conditions, null, null);
    }

}
