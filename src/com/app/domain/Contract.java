package com.app.domain;

import java.util.Date;

/**
 * Created by cjay on 2017/6/15.
 */
public class Contract {
    private String code;
    private String customerName;
    private String customerMobile;
    private String custmoerAddress;
    private Date hdate;
    private Date jdate;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerMobile() {
        return customerMobile;
    }

    public void setCustomerMobile(String customerMobile) {
        this.customerMobile = customerMobile;
    }

    public String getCustmoerAddress() {
        return custmoerAddress;
    }

    public void setCustmoerAddress(String custmoerAddress) {
        this.custmoerAddress = custmoerAddress;
    }

    public Date getHdate() {
        return hdate;
    }

    public void setHdate(Date hdate) {
        this.hdate = hdate;
    }

    public Date getJdate() {
        return jdate;
    }

    public void setJdate(Date jdate) {
        this.jdate = jdate;
    }
}
