package com.app.dao;

import com.app.domain.PageList;
import com.mchange.v1.util.DebugUtils;
import com.sun.xml.internal.ws.util.UtilException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.*;
import org.springframework.jdbc.core.simple.SimpleJdbcDaoSupport;

import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.sql.*;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.sql.Connection;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.List;
import java.util.logging.Logger;

import javax.sql.DataSource;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.PreparedStatementSetter;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.simple.SimpleJdbcDaoSupport;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

@SuppressWarnings({ "rawtypes", "unchecked" })
@Repository
public class BaseDAO {
    private static final Logger logger = Logger.getLogger("BaseDAO");

    @Autowired
    private JdbcTemplate jdbcTemplate;
    
    private void print(String sql,List values){
        RuntimeException e = new RuntimeException();
        String callerClass = e.getStackTrace()[1].getClassName();
        String callerMethod = e.getStackTrace()[1].getMethodName();
        int callerMethodLine = e.getStackTrace()[1].getLineNumber();
        DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String currentTime=df.format(new Date());
        logger.info("<" + currentTime + ">" + "(" + callerClass + ".java:" + callerMethodLine + ")" + callerMethod + "------>");
        logger.info("sql:"+sql);
    }
    public int[] batchUpdate(String[] sql) {
        return jdbcTemplate.batchUpdate(sql);
    }
    public Connection connection() {
        try {
            return jdbcTemplate.getDataSource().getConnection();
        } catch (Exception e) {
            throw new UtilException("��ȡ���Ӷ���ʱ����",e);
        }
    }

    /*public void delete(Object object, String tableName, String keyName) {
        try {
            List params = new ArrayList();
            String sql = "delete from " + tableName + " where " + keyName + " =?";
            params.add(getIdValue(object, tableName));
            print(sql,params);
            jdbcTemplate.update(sql, params.toArray());
        } catch (Exception e) {
            throw new UtilException("ɾ������ʱ����",e);
        }
    }*/

    public void deleteById(Object id, String tableName, String keyName) {
        try {
            List params = new ArrayList();
            String sql = "delete from " + tableName + " where " + keyName + " =?";
            params.add(id);
            print(sql,params);
            jdbcTemplate.update(sql, params.toArray());
        } catch (Exception e) {
            throw new UtilException("ɾ������ʱ����",e);
        }
    }

    /*public List getBySql(String sql, Object... objects) {
        try {
            return queryHashTableList(sql, objects);
        }catch(EmptyResultDataAccessException e){
            return new ArrayList();
        }  catch (Exception e) {
            throw new UtilException("����SQL��ȡ�б�ʱ����",e);
        }
    }*/
    public int getCurSerialNo(String serialStr) {
        try {
            String sql = "SELECT CURRVAL(?)";
            List params = new ArrayList();
            params.add(serialStr);
            print(sql, params);
            return jdbcTemplate.queryForInt(sql, new Object[] { serialStr });
        } catch (Exception e) {
            throw new UtilException("�������к�ʱ����",e);
        }
    }
    public DataSource getDataSource() {
        try {
            return jdbcTemplate.getDataSource();
        } catch (Exception e) {
            throw new UtilException("��������Դʱ����",e);
        }
    }

    protected Object getJavaBean(String sql, Class returnType, Object... paramValue) {
        try {
            RowMapper rowMapper = new BeanPropertyRowMapper(returnType);
            try {
                return jdbcTemplate.queryForObject(sql, paramValue, rowMapper);
            } catch (Exception ex) {
                ex.printStackTrace();
                return null;
            }
        } catch (Exception e) {
            throw new UtilException("����SQL�Լ�����������Լ�����ֵ��ȡ����ʱ����",e);
        }
    }
    // ������ͨ��javabean
    protected List getJavaList(String sql, Class returnType, Object... paramValue) {
        try {
            RowMapper rowMapper = new BeanPropertyRowMapper(returnType);
            return jdbcTemplate.query(sql, paramValue, rowMapper);
        } catch (Exception e) {
            throw new UtilException("����SQL�Լ�����������Լ�����ֵ��ȡ������б�ʱ����",e);
        }
    }
    public List query(String sql, Object[] args, RowMapper rowMapper) {
        try {
            return jdbcTemplate.query(sql, args, rowMapper);
        }catch(EmptyResultDataAccessException e){
            return new ArrayList();
        }  catch (Exception e) {
            throw new UtilException("����SQL�Լ�RowMapper�Լ�����ֵ��ȡ������б�ʱ����",e);
        }
    }
    public List query(String sql, RowMapper rowMapper) {
        try {
            return jdbcTemplate.query(sql, rowMapper);
        }catch(EmptyResultDataAccessException e){
            return new ArrayList();
        } catch (Exception e) {
            throw new UtilException("����SQL�Լ�RowMapper��ȡ������б�ʱ����",e);
        }
    }
    public List queryForList(String sql, Object... args) {
        try {
            return jdbcTemplate.queryForList(sql, args);
        }catch(EmptyResultDataAccessException e){
            return new ArrayList();
        } catch (Exception e) {
            throw new UtilException("����SQL�Լ�������ȡԪ����Map���б�ʱ����",e);
        }
    }

    public List queryForList(String sql){
        try{
            return jdbcTemplate.queryForList(sql);
        }catch (EmptyResultDataAccessException e){
            return new ArrayList();
        }catch (Exception e){
            throw new UtilException("����SQL�Լ�������ȡԪ����Map���б�ʱ����",e);
        }
    }

    public PageList queryForPageList(int pageNo, int pageSize, String sql, List objects, String ordercolum, String orderby){
        if (sql.endsWith(";")) {
            sql = sql.substring(0, sql.length() - 1);
        }
        String sql1 = "select count(*) from (" + sql + ") as r";
        int recordCount = 0;
        List<Object> param = new ArrayList<Object>();
        for (Object o : objects) {
            param.add(o);
        }
        recordCount = this.queryInt(sql1, param.toArray());
        int start = pageNo < 1 ? 0 : (pageNo - 1) * pageSize;
        int max = pageSize;
        if (start < 0 || max < 0) {
            start = 0;
            max = recordCount;
        }
        String tempsql = null;
        // ���û��෽��
        if (null == ordercolum && null == orderby) {
//            tempsql = sql + " OFFSET ? LIMIT ?";
            tempsql = sql + " LIMIT ?,?";
        } else {
//            tempsql = sql + " order by " + ordercolum + orderby + " OFFSET ? LIMIT ?";
            tempsql = sql + " order by " + ordercolum + orderby + " LIMIT ?,?";
        }
        param.add(start);
        param.add(max);
        List list = null;
        // �������Ԫ��Ϊhashtable�ļ���
        list = this.queryForList(tempsql, param.toArray());
        PageList pageList = new PageList();
        pageList.setCurPage(pageNo);
        pageList.setNumPerPage(pageSize);
        pageList.setResult(list);
        pageList.setTotalPage(recordCount);
        return pageList;
    }

    public int queryInt(String sql, Object... args) {
        try {
            List<Object> param = new ArrayList<Object>();
            for (Object b : args) {
                param.add(b);
            }
            print(sql,param);
            return jdbcTemplate.queryForInt(sql, args);
        } catch(EmptyResultDataAccessException e){
            return 0;
        }
        catch (Exception e) {
            throw new UtilException("��ȡ����ֵʱ����",e);
        }
    }
    /*public Hashtable<String, Object> queryHashtable(HashtableRowMapper rowMapper, String sql, Object... args) {
        try {
            return (Hashtable) jdbcTemplate.queryForObject(sql, args, rowMapper);
        }catch(EmptyResultDataAccessException e){
            return new Hashtable<String, Object>();
        } catch (Exception e) {
            throw new UtilException("����SQL�Լ�RowMapper�Լ�������ȡHashtableʱ����",e);
        }
    }
    public Hashtable<String, Object> queryHashtable(String sql, Object... args) {
        try {
            return queryHashtable(new HashtableRowMapper(), sql, args);
        }catch(EmptyResultDataAccessException e){
            return new Hashtable<String, Object>();
        }catch (Exception e) {
            throw new UtilException("����SQL�Լ�������ȡHashtableʱ����",e);
        }
    }
    public List<Hashtable<String, Object>> queryHashTableList(String sql, HashtableRowMapper rowMapper, Object... args) {
        try {
            List<Object> param = new ArrayList<Object>();
            for (Object b : args) {
                param.add(b);
            }
            print(sql,param);
            return jdbcTemplate.query(sql, args, rowMapper);
        }catch(EmptyResultDataAccessException e){
            return new ArrayList<Hashtable<String, Object>>();
        }
        catch (Exception e) {
            throw new UtilException("����SQL�Լ�RowMapper�Լ�������ȡHashtable���б�ʱ����",e);
        }
    }
    public List<Hashtable<String, Object>> queryHashTableList(String sql, Object... args) {
        try {
            return queryHashTableList(sql, new HashtableRowMapper(), args);
        }catch(EmptyResultDataAccessException e){
            return new ArrayList<Hashtable<String, Object>>();
        } catch (Exception e) {
            throw new UtilException("����SQL�Լ�������ȡHashtable���б�ʱ����",e);
        }
    }
    public PageView queryHashTablePageObject(int pageSize, int pageNo, HashtableRowMapper rowMapper, String sql, Object... objects) {
        try {
            return queryHashTablePageObject(null, null, pageSize, pageNo, rowMapper, sql, objects);
        } catch(EmptyResultDataAccessException e){
            return new PageView();
        }catch (Exception e) {
            throw new UtilException("����SQL�Լ�RowMapper�Լ�������ȡ��ҳʱ����",e);
        }
    }
    public PageView queryHashTablePageObject(String ordercolum, String orderby, int pageSize, int pageNo, HashtableRowMapper rowMapper, String sql, Object... objects) {
        try {
            if (sql.endsWith(";")) {
                sql = sql.substring(0, sql.length() - 1);
            }
            String sql1 = "select count(*) from (" + sql + ") as r";
            int recordCount = 0;
            List<Object> param = new ArrayList<Object>();
            for (Object o : objects) {
                param.add(o);
            }
            recordCount = this.queryInt(sql1, param.toArray());
            int start = pageNo < 1 ? 0 : (pageNo - 1) * pageSize;
            int max = pageSize;
            if (start < 0 || max < 0) {
                start = 0;
                max = recordCount;
            }
            String tempsql = null;
            // ���û��෽��
            if (null == ordercolum && null == orderby) {
                tempsql = sql + " OFFSET ? LIMIT ?";
            } else {
                tempsql = sql + " order by " + ordercolum + orderby + " OFFSET ? LIMIT ?";
            }
            param.add(start);
            param.add(max);
            List list = null;
            // �������Ԫ��Ϊhashtable�ļ���
            list = this.query(tempsql, param.toArray(), rowMapper);
            if (!BaseUtil.isSpace(list)) {
                PageView o = new PageView();
                o.setItems(list);
                o.setRecordCount(recordCount);
                o.setCurrentPageNo(pageNo);
                o.setPageSize(pageSize);
                return o;
            }
            return new PageView();
        } catch(EmptyResultDataAccessException e){
            return new PageView();
        } catch (Exception e) {
            throw new UtilException("��ȡ��ҳʱ����",e);
        }
    }
    public PageView queryHasTablePageObject(int pageSize, int pageNo, String sql, Object... objects) {
        try {
            return this.queryHashTablePageObject(pageSize, pageNo, new HashtableRowMapper(), sql, objects);
        } catch(EmptyResultDataAccessException e){
            return new PageView();
        } catch (Exception e) {
            throw new UtilException("��ȡ��ҳʱ����",e);
        }
    }
    public void queryHasTablePageObject(PageView pageView, String sql, Object... objects) {
        try {
            queryPageObject(pageView, sql, new HashtableRowMapper(), objects);
        } catch(EmptyResultDataAccessException e){
        } catch (Exception e) {
            throw new UtilException("��ȡ��ҳʱ����",e);
        }
    }
    public int queryInt(String sql, Object... args) {
        try {
            List<Object> param = new ArrayList<Object>();
            for (Object b : args) {
                param.add(b);
            }
            print(sql,param);
            return jdbcTemplate.queryForInt(sql, args);
        } catch(EmptyResultDataAccessException e){
            return 0;
        }
        catch (Exception e) {
            throw new UtilException("��ȡ����ֵʱ����",e);
        }
    }

    public PageView queryJavaPageObject(int pageSize, int pageNo, String sql, Class destVO, Object... objects) {
        try {
            String sql1 = "select count(*) from (" + sql + ") as r";
            int recordCount = 0;
            List<Object> param = new ArrayList<Object>();
            for (Object o : objects) {
                param.add(o);
            }
            recordCount = this.queryInt(sql1, param.toArray());
            int start = pageNo < 1 ? 0 : (pageNo - 1) * pageSize;
            int max = pageSize;
            // ���û��෽��
            String tempsql = sql + " OFFSET ? LIMIT ?";
            param.add(start);
            param.add(max);
            List list = getJavaList(tempsql, destVO, param);
            if (!BaseUtil.isSpace(list)) {
                PageView o = new PageView();
                o.setItems(list);
                o.setRecordCount(recordCount);
                o.setCurrentPageNo(pageNo);
                o.setPageSize(pageSize);
                return o;
            }
            return new PageView();
        } catch(EmptyResultDataAccessException e){
            return new PageView();
        } catch (Exception e) {
            throw new UtilException("��ȡjava��ҳ����ʱ����",e);
        }
    }
    public List queryList(String sql, Class destVO, Object... args) {
        try {
            List<Object> param = new ArrayList<Object>();
            for (Object o : args) {
                param.add(o);
            }
            return this.query(sql, param.toArray(), new MyRowMapper(destVO));
        }  catch(EmptyResultDataAccessException e){
            return new ArrayList();
        }catch (Exception e) {
            throw new UtilException("��ȡ�б�ʱ����",e);
        }
    }
    public List queryList(String sql, RowMapper rowMapper, Object... args) {
        try {
            return jdbcTemplate.query(sql, args, rowMapper);
        } catch(EmptyResultDataAccessException e){
            return new ArrayList();
        } catch (Exception e) {
            throw new UtilException("��ȡ�б�ʱ����",e);
        }
    }
    public <T> T queryObject(String sql, Class<T> destVO, Object... args) {
        try {
            T o = null;
            List<Object> param = new ArrayList<Object>();
            for (Object b : args) {
                param.add(b);
            }
            print(sql,param);
            o = (T) jdbcTemplate.queryForObject(sql, args, new MyRowMapper(destVO));
            return o;
        }catch(EmptyResultDataAccessException e){
            return null;
        }
        catch (Exception e) {
            throw new UtilException("��ȡ����ʱ����",e);
        }
    }
    public <T> T queryObject(String sql, RowMapper mapper, Object... args) {
        try {
            T o = null;
            List<Object> param = new ArrayList<Object>();
            for (Object b : args) {
                param.add(b);
            }
            print(sql,param);
            o = (T) jdbcTemplate.queryForObject(sql, param.toArray(), mapper);
            return o;
        }  catch(EmptyResultDataAccessException e){
            return null;
        }catch (Exception e) {
            throw new UtilException("��ȡ����ʱ����",e);
        }
    }

    public PageView queryPageObject(int pageSize, int pageNo, String sql, Class destVO, Object... objects) {
        try {
            String sql1 = "select count(*) from (" + sql + ") as r";
            int recordCount = 0;
            List<Object> param = new ArrayList<Object>();
            for (Object o : objects) {
                param.add(o);
            }
            recordCount = this.queryInt(sql1, param.toArray());
            int start = pageNo < 1 ? 0 : (pageNo - 1) * pageSize;
            int max = pageSize;
            if (start < 0 || max < 0) {
                start = 0;
                max = recordCount;
            }
            // ���û��෽��
            String tempsql = sql + " OFFSET ? LIMIT ?";
            param.add(start);
            param.add(max);
            List list=this.query(tempsql, param.toArray(), new MyRowMapper(destVO));
            if (!BaseUtil.isSpace(list)) {
                PageView o = new PageView();
                o.setItems(list);
                o.setRecordCount(recordCount);
                o.setCurrentPageNo(pageNo);
                o.setPageSize(pageSize);
                return o;
            }
            return new PageView();
        } catch(EmptyResultDataAccessException e){
            return new PageView();
        } catch (Exception e) {
            throw new UtilException("��ȡ��ҳʱ����",e);
        }
    }
    public PageView queryPageObject(int pageSize, int pageNo, String sql, RowMapper mapper, Object... objects) {
        try {
            String sql1 = "select count(*) from (" + sql + ") as r";
            int recordCount = 0;
            List<Object> param = new ArrayList<Object>();
            for (Object o : objects) {
                param.add(o);
            }
            recordCount = this.queryInt(sql1, param.toArray());
            int start = pageNo < 1 ? 0 : (pageNo - 1) * pageSize;
            int max = pageSize;
            if (start < 0 || max < 0) {
                start = 0;
                max = recordCount;
            }
            // ���û��෽��
            String tempsql = sql + " OFFSET ? LIMIT ?";
            param.add(start);
            param.add(max);
            List list =  this.query(tempsql, param.toArray(), mapper);
            if (!BaseUtil.isSpace(list)) {
                PageView o = new PageView();
                o.setItems(list);
                o.setRecordCount(recordCount);
                o.setCurrentPageNo(pageNo);
                o.setPageSize(pageSize);
                return o;
            }
            return new PageView();
        } catch(EmptyResultDataAccessException e){
            return new PageView();
        } catch (Exception e) {
            throw new UtilException("��ȡ��ҳʱ����",e);
        }
    }
    public void queryPageObject(PageView pageView, String sql, Class destVO, Object... objects) {
        try {
            String sql1 = "select count(*) from (" + sql + ") as r";
            int recordCount = 0;
            List<Object> param = new ArrayList<Object>();
            for (Object o : objects) {
                param.add(o);
            }
            recordCount = this.queryInt(sql1, param.toArray());
            int start = pageView.getCurrentPageNo() < 1 ? 0 : (pageView.getCurrentPageNo() - 1) * pageView.getPageSize();
            int max = pageView.getPageSize();
            if (start < 0 || max < 0) {
                start = 0;
                max = recordCount;
            }
            // ���û��෽��
            String tempsql = sql + " OFFSET ? LIMIT ?";
            param.add(start);
            param.add(max);
            List list = this.query(tempsql, param.toArray(), new MyRowMapper(destVO));
            if (!BaseUtil.isSpace(list)) {
                pageView.setItems(list);
                pageView.setRecordCount(recordCount);
            }
        }  catch(EmptyResultDataAccessException e){
        }catch (Exception e) {
            throw new UtilException("��ȡ��ҳʱ����",e);
        }
    }
    public void queryPageObject(PageView pageView, String sql, RowMapper mapper, Object... objects) {
        try {
            String sql1 = "select count(*) from (" + sql + ") as r";
            int recordCount = 0;
            List<Object> param = new ArrayList<Object>();
            for (Object o : objects) {
                param.add(o);
            }
            recordCount = this.queryInt(sql1, param.toArray());
            int start = pageView.getCurrentPageNo() < 1 ? 0 : (pageView.getCurrentPageNo() - 1) * pageView.getPageSize();
            int max = pageView.getPageSize();
            if (start < 0 || max < 0) {
                start = 0;
                max = recordCount;
            }
            // ���û��෽��
            String tempsql = sql + " OFFSET ? LIMIT ?";
            param.add(start);
            param.add(max);
            List list =jdbcTemplate.query(tempsql, param.toArray(), mapper);
            if (!BaseUtil.isSpace(list)) {
                pageView.setItems(list);
                pageView.setRecordCount(recordCount);
            }
        }  catch(EmptyResultDataAccessException e){
        }catch (Exception e) {
            throw new UtilException("��ȡ��ҳʱ����",e);
        }
    }*/
    public List queryString(String sql, Object... args) {
        try {
            return jdbcTemplate.queryForList(sql, args, String.class);
        } catch(EmptyResultDataAccessException e){
            return new ArrayList();
        } catch (Exception e) {
            throw new UtilException("��ȡ�б�ʱ����",e);
        }
    }
    /*public int save(Object object, String tableName) {
        try {
            List params = new ArrayList();
            List<HashMap<String, Object>> list = getFieldsProps(object, tableName);
            List values = new ArrayList();
            StringBuffer fieldNames = new StringBuffer();
            StringBuffer sb = new StringBuffer();
            for (HashMap<String, Object> hash : list) {
                if (hash.get("value") != null) {
                    int type = HashUtil.getinteger(hash, "type");
                    fieldNames.append(hash.get("name"));
                    fieldNames.append(",");
                    // ����������ʹ���
                    if (type == java.sql.Types.ARRAY) {
                        if (hash.get("value") != null) {
                            sb.append("'" + hash.get("value") + "',");
                        } else {
                            sb.append("null,");
                        }
                    } else {
                        values.add(hash.get("value"));
                        sb.append("?,");
                    }
                }
            }
            fieldNames.deleteCharAt(fieldNames.length() - 1);
            sb.deleteCharAt(sb.length() - 1);
            StringBuffer sql = new StringBuffer();
            sql.append("insert into ");
            sql.append(tableName);
            sql.append("(");
            sql.append(fieldNames.toString());
            sql.append(") values (");
            sql.append(sb.toString());
            sql.append(") RETURNING ");
            sql.append(GetDataBaseColum.getKeyName(this.support.getDataSource(), tableName));
            params.addAll(values);
            print(sql.toString(),params);
            return jdbcTemplate.queryForInt(sql.toString(), params.toArray());
        }catch (Exception e) {
            throw new UtilException("�������ʱ����",e);
        }
    }
    public void setSupport(SimpleJdbcDaoSupport support) {
        this.support = support;
    }
    public int update(Object object, String tableName) {
        try {
            String sql;
            String keyName = GetDataBaseColum.getKeyName(this.support.getDataSource(), tableName);
            List<HashMap<String, Object>> list = getFieldsProps(object, tableName);
            List values = new ArrayList();
            StringBuffer fieldNames = new StringBuffer();
            for (HashMap<String, Object> hash : list) {
                if (hash.get("value") != null) {
                    int type = HashUtil.getinteger(hash, "type");
                    fieldNames.append(hash.get("name"));
                    // ����������ʹ���
                    if (type == java.sql.Types.ARRAY) {
                        fieldNames.append("='" + hash.get("value") + "',");
                    } else {
                        fieldNames.append("=?,");
                        values.add(hash.get("value"));
                    }
                }
            }
            fieldNames.deleteCharAt(fieldNames.length() - 1);
            sql = "update " + tableName + " set " + fieldNames.toString() + " where " + keyName + "=" + getIdValue(object, tableName);
            print(sql,values);
            return jdbcTemplate.update(sql, values.toArray());
        } catch (Exception e) {
            throw new UtilException("���¶���ʱ����",e);
        }
    }
    public int update(Object object, String tableName, String keyName) {
        try {
            String sql;
            List<HashMap<String, Object>> list = getFieldsProps(object, tableName);
            List values = new ArrayList();
            StringBuffer fieldNames = new StringBuffer();
            for (HashMap<String, Object> hash : list) {
                if (hash.get("value") != null) {
                    int type = HashUtil.getinteger(hash, "type");
                    fieldNames.append(hash.get("name"));
                    // ����������ʹ���
                    if (type == java.sql.Types.ARRAY) {
                        fieldNames.append("='" + hash.get("value") + "',");
                    } else {
                        fieldNames.append("=?,");
                        values.add(hash.get("value"));
                    }
                }
            }
            fieldNames.deleteCharAt(fieldNames.length() - 1);
            sql = "update " + tableName + " set " + fieldNames.toString() + " where " + keyName + "=" + getIdValue(object, tableName);
            print(sql,values);
            return jdbcTemplate.update(sql, values.toArray());
        } catch (Exception e) {
            throw new UtilException("���¶���ʱ����",e);
        }
    }*/
    public int update(String sql, Object[] args, int[] argTypes) {
        try {
            return jdbcTemplate.update(sql, args, argTypes);
        } catch (Exception e) {
            throw new UtilException("���¶���ʱ����",e);
        }
    }
    public int update(String sql, PreparedStatementSetter pss) {
        try {
            return jdbcTemplate.update(sql, pss);
        } catch (Exception e) {
            throw new UtilException("���¶���ʱ����",e);
        }
    }
    public int updateBySQL(String sql, Object... objects) {
        try {
            List<Object> param = new ArrayList<Object>();
            for (Object b : objects) {
                param.add(b);
            }
            print(sql,param);
            return jdbcTemplate.update(sql, objects);
        } catch (Exception e) {
            throw new UtilException("����SQL���¼�¼ʱ����",e);
        }
    }
    public int updateBySQLReturnID(String serialName, String sql, Object... objects) {
        try {
            List<Object> param = new ArrayList<Object>();
            for (Object b : objects) {
                param.add(b);
            }
            print(sql,param);
            jdbcTemplate.update(sql, objects);
            return this.getCurSerialNo(serialName);
        } catch (Exception e) {
            throw new UtilException("����SQL���¼�¼ʱ����",e);
        }
    }
    public int updateBySQLWithArrays(String sql, Object[] objects) {
        try {
            List<Object> param = Arrays.asList(objects);
            print(sql, param);
            return jdbcTemplate.update(sql, objects);
        } catch (Exception e) {
            throw new UtilException("����SQL���¼�¼ʱ����",e);
        }
    }

    public int insertAndGetKey(final String sql, final List datas) {
//        final String insertSQL = sql;
//        final Object[] datas = objects;
        int idResult = 0;
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbcTemplate.update(new PreparedStatementCreator() {
            @Override
            public PreparedStatement createPreparedStatement(Connection connection) throws SQLException {
                PreparedStatement ps = connection.prepareStatement(sql, PreparedStatement.RETURN_GENERATED_KEYS);

                for(int i = 0; i < datas.size(); i++){
                    ps.setObject(i+1, datas.get(i));
                }
                return ps;
            }
        },keyHolder);
        idResult = keyHolder.getKey().intValue();
        return idResult;
    }

    public void update(PreparedStatementCreator preparedStatementCreator, KeyHolder keyHolder){
        jdbcTemplate.update(preparedStatementCreator, keyHolder);
    }

    public String executeProcedure(final String preFix, final int num){
        String param2Value = (String) this.jdbcTemplate.execute(
                new CallableStatementCreator() {
                    public CallableStatement createCallableStatement(Connection con) throws SQLException {
                        String storedProc = "{call generate_orderNo (?,?,?)}";// ���õ�sql
                        CallableStatement cs = con.prepareCall(storedProc);
                        cs.setString(1, preFix);// �������������ֵ
                        cs.setInt(2, num);// �������������ֵ
                        cs.registerOutParameter(3,Types.VARCHAR);// ע���������������
                        return cs;
                    }
                }, new CallableStatementCallback() {
                    public Object doInCallableStatement(CallableStatement cs) throws SQLException, DataAccessException {
                        cs.execute();
                        return cs.getString(3);// ��ȡ���������ֵ
                    }
                });
        return  param2Value;
    }
}
