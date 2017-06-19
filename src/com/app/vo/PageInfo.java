package com.app.vo;

/**
 * Created by cjay on 2017/6/8.
 */
public class PageInfo {
    /**
     * 页数
     */
    private int page = 1;

    /**
     * 条目数
     */
    private int pageSize = 10;

    /**
     * 保存从数据库查询出的总条数
     */
    private long totalRowCount = 0;

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public long getTotalRowCount() {
        return totalRowCount;
    }

    public void setTotalRowCount(long totalRowCount) {
        this.totalRowCount = totalRowCount;
    }

}
