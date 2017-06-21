package com.app.dao;

import com.app.domain.Contract;
import com.app.domain.PageList;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.CallableStatementCallback;
import org.springframework.jdbc.core.CallableStatementCreator;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by cjay on 2015/4/15.
 */
@Repository
public class ContractDAOImpl extends BaseDAO implements ContractDAO {
    public List getAllContract(){
        String sql = "select * from tbl_c_contract";
        return this.queryForList(sql);
    }
    public List getContractByCid(long cid){
        String sql ="select * from tbl_c_contract where customerid=?";
        return this.queryForList(sql,cid);
    }

    public List getContractById(long id){
        String sql = "select * from tbl_c_contract where id=?";
        return this.queryForList(sql, id);
    }

    public List getItemsByPid(long pid){
        String sql = "select * from tbl_c_item where project_id=?";
        return this.queryForList(sql, pid);
    }

    public PageList getContractsByPage(List condition, int curPage, int pageSize){
        StringBuffer sql = new StringBuffer("select * from tbl_c_contract where 1=1");
        List conditions = new ArrayList();
        if(condition != null && !"".equals(condition) && condition.size() > 0){
            String conStr = "%"+condition.get(0).toString()+"%";
            conditions.add(conStr);
            conditions.add(conStr);
            conditions.add(conStr);
//            conditions.add(conStr);
            sql.append(" and customer_name like ?")
                    .append(" or customer_address like ?")
                    .append(" or customer_mobile like ?");
//                    .append(" or tel like ?");
//            sql.append(" and name like '%").append(conStr).append("%'")
//                    .append(" or address like '%").append(conStr).append("%'")
//                    .append(" or mobile like '%").append(conStr).append("%'")
//                    .append(" or tel like '%").append(conStr).append("%'");

        }
         return this.queryForPageList(curPage, pageSize, sql.toString(), conditions, null, null);
    }

    public int saveBasicInfo(final Contract contract){

        final String sql = "insert into tbl_c_contract(orderNo, customer_name, customer_mobile, customer_address, hdate, jdate)values(?,?,?,?,?,?)";
        final String orderNo = this.executeProcedure("DD", 8);
        int idResult = 0;
        KeyHolder keyHolder = new GeneratedKeyHolder();
        this.update(new PreparedStatementCreator() {
            @Override
            public PreparedStatement createPreparedStatement(Connection connection) throws SQLException {
                PreparedStatement ps = connection.prepareStatement(sql, PreparedStatement.RETURN_GENERATED_KEYS);
                ps.setObject(1, orderNo);
                ps.setObject(2, contract.getCustomerName());
                ps.setObject(3, contract.getCustomerMobile());
                ps.setObject(4, contract.getCustmoerAddress());
                ps.setObject(5, contract.getHdate());
                ps.setObject(6, contract.getJdate());
                return ps;
            }
        }, keyHolder);
        idResult = keyHolder.getKey().intValue();
        return idResult;
    }

}
