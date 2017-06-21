package com.app.controller;

import com.alibaba.fastjson.JSONObject;
import com.app.domain.Contract;
import com.app.domain.PageList;
import com.app.service.ContractService;
import com.app.service.CustomerService;
import com.app.util.PageUtils;
import com.app.vo.BasicInfoVO;
import com.app.vo.CustomerPageVO;
import com.app.vo.PagedResultVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletResponse;
import java.io.UnsupportedEncodingException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by cjay on 2015/4/15.
 */
@Controller
public class BusinessController {
    @Autowired
    private CustomerService customerService;
    @Autowired
    private ContractService contractService;

    @RequestMapping(value = "/contract/allContract", method = RequestMethod.POST)
    public void listAllCustomer(@ModelAttribute("customerPageVO")CustomerPageVO customerPageVO, HttpServletResponse response){
        List conditionList = new ArrayList();
        conditionList.add(customerPageVO.getCondition());
        PageList customerList = contractService.getContractsByPage(conditionList, customerPageVO.getPage(), customerPageVO.getPageSize());
        PagedResultVO pagedResultVO = PageUtils.getPageResultVO(customerList.getResult(), customerList.getTotalPage());
        Map result = new HashMap();
        result.put("pagedResultVO", pagedResultVO);
        String jsonObject = JSONObject.toJSONString(result);
        try {
            response.setContentType("text/json; charset=utf-8");
            response.setCharacterEncoding("utf-8");
            response.getWriter().print(jsonObject);
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    @RequestMapping("/contract/editContract")
    public String showCustomer(ModelMap modelMap,@RequestParam int id){
        List contractList = contractService.getContractById(id);
        modelMap.addAttribute("contract",contractList.get(0));
//        List customerList = customerService.getCustomerById(cid);
//        if (customerList!=null && customerList.size()>0){
//            modelMap.addAttribute("customer",customerList.get(0));
//        }
//        List contractList = contractService.getContractByCid(cid);
//        if (contractList!=null && contractList.size()>0){
//            modelMap.addAttribute("contract",contractList.get(0));
//        }
        return "/contracts/editContract3";
    }

    @RequestMapping(value = "/contract/listItemsByPid")
    public void listItemsByPid(@ModelAttribute("pid")String pid, HttpServletResponse response){
        List list = contractService.getItemsByPid(Long.valueOf(pid));
        Map result = new HashMap();
//        result.put("result", list);
        String jsonObject = JSONObject.toJSONString(list);
        try {
            response.setContentType("text/json; charset=urf-8");
            response.setCharacterEncoding("utf-8");
            response.getWriter().print(jsonObject);
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    /**
     * 保存订单基本信息
     */
    @RequestMapping(value = "/contract/saveBasicInfo", method = RequestMethod.POST)
    public String saveBasicInfo(@ModelAttribute("BasicInfoVo")BasicInfoVO basicInfoVO, HttpServletResponse response) throws ParseException, UnsupportedEncodingException {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Contract contract = new Contract();
        contract.setCustomerName(new String(basicInfoVO.getName().getBytes("ISO-8859-1"),"utf-8"));
        contract.setCustomerMobile(basicInfoVO.getMobile());
        contract.setCustmoerAddress(new String(basicInfoVO.getAddress().getBytes("ISO-8859-1"), "utf-8"));
        contract.setHdate(sdf.parse(basicInfoVO.getDate1()));
        contract.setJdate(sdf.parse(basicInfoVO.getDate2()));
        int id = contractService.saveBasicInfo(contract);
        /*String jsonObject = JSONObject.toJSONString(id);
        try {
            response.setContentType("text/json; charset=utf-8");
            response.setCharacterEncoding("utf-8");
            response.getWriter().print(jsonObject);
        } catch (Exception e){
            e.printStackTrace();
        }*/
        return "contracts/listContracts";
    }
}
