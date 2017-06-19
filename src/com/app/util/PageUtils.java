package com.app.util;

import com.app.vo.PagedResultVO;

import java.util.List;

/**
 * Created by cjay on 2017/6/8.
 */
public class PageUtils {
    /**
     * 获取前台分页的对象列表
     * @param resList
     * @param totalRowCount
     * @return
     */
    public static <T> PagedResultVO<T> getPageResultVO(List<T> resList, long totalRowCount){
        PagedResultVO<T> pagedResultVO = new PagedResultVO<T>();
        pagedResultVO.setData(resList);
        pagedResultVO.setTotal(totalRowCount);
        return pagedResultVO;
    }
}
