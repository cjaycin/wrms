package com.app.vo;

import java.util.List;

/**
 * Created by cjay on 2017/6/8.
 */
public class PagedResultVO<T> {

    private List<T> data;

    private long total = 0;		// totalRowCount

    private long totalPageCount = 0L;

    public List<T> getData() {
        return data;
    }

    public void setData(List<T> data) {
        this.data = data;
    }

    public long getTotal() {
        return total;
    }

    public void setTotal(long total) {
        this.total = total;
    }

    public long getTotalPageCount() {
        return this.totalPageCount;
    }

    public void setTotalPageCount(long totalPageCount) {
        this.totalPageCount = totalPageCount;
    }

}
