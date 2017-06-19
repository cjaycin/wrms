package com.app.service;

import com.app.dao.ContractDAO;
import com.app.domain.Contract;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by cjay on 2015/4/15.
 */
@Service
public class ContractServiceImpl implements ContractService{
    @Autowired
    private ContractDAO contractDAO;

    public List getAllContract(){
        return contractDAO.getAllContract();
    }
    public List getContractByCid(long cid){
        return contractDAO.getContractByCid(cid);
    }
    public List getItemsByPid(long pid){
        return contractDAO.getItemsByPid(pid);
    }
    public int saveBasicInfo(Contract contract){
        return contractDAO.saveBasicInfo(contract);
    }
}
