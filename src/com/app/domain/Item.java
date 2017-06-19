package com.app.domain;

/**
 * Created by cjay on 2015/4/15.
 */
public class Item {
    private long projectId;
    private String itemName;
    private String itemPer;
    private double itemPrice;
    private int itemCount;
    private double itemTotal;
    private String note;

    public long getProjectId() {
        return projectId;
    }

    public void setProjectId(long projectId) {
        this.projectId = projectId;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getItemPer() {
        return itemPer;
    }

    public void setItemPer(String itemPer) {
        this.itemPer = itemPer;
    }

    public double getItemPrice() {
        return itemPrice;
    }

    public void setItemPrice(double itemPrice) {
        this.itemPrice = itemPrice;
    }

    public int getItemCount() {
        return itemCount;
    }

    public void setItemCount(int itemCount) {
        this.itemCount = itemCount;
    }

    public double getItemTotal() {
        return itemTotal;
    }

    public void setItemTotal(double itemTotal) {
        this.itemTotal = itemTotal;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }
}
