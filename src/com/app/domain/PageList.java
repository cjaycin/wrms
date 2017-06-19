package com.app.domain;

import java.util.List;

/**
 * Created by cjay on 2017/6/8.
 */
public class PageList {
    private int curPage;
    private int numPerPage;
    private int totalPage;
    private List result;

    public int getCurPage() {
        return curPage;
    }

    public void setCurPage(int curPage) {
        this.curPage = curPage;
    }

    public int getNumPerPage() {
        return numPerPage;
    }

    public void setNumPerPage(int numPerPage) {
        this.numPerPage = numPerPage;
    }

    public int getTotalPage() {
        return totalPage;
    }

    public void setTotalPage(int totalPage) {
        this.totalPage = totalPage;
    }

    public List getResult() {
        return result;
    }

    public void setResult(List result) {
        this.result = result;
    }
}
