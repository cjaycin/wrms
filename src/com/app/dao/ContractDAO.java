package com.app.dao;

import com.app.domain.Contract;

import java.util.List;

/**
 * Created by cjay on 2015/4/15.
 */
public interface ContractDAO {
    public List getAllContract();
    public List getContractByCid(long cid);
    public List getItemsByPid(long pid);
    public int saveBasicInfo(Contract contract);
}
