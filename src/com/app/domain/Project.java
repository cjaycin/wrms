package com.app.domain;

import java.io.Serializable;

/**
 * Created by cjay on 2015/4/15.
 */
public class Project implements Serializable {
    private long customerId;
    private String name;
    private double price;

    public long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(long customerId) {
        this.customerId = customerId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
