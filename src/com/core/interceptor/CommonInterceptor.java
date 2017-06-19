package com.core.interceptor;

import org.apache.log4j.Logger;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by lenovo on 2015/4/13.
 */
public class CommonInterceptor implements HandlerInterceptor {
    private static Logger logger = Logger.getLogger(CommonInterceptor.class);

    @Override
    public boolean preHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object handler) throws Exception {
        logger.info("����ʼ");

        // �������ʼʱ��
        httpServletRequest.setAttribute("startTime", System.currentTimeMillis());
        // ���ajax����
        httpServletResponse.setHeader("Access-Control-Allow-Origin", "*");
        // �����Ӧ��������
        httpServletResponse.setCharacterEncoding("UTF-8");
        httpServletResponse.setContentType("text/html;charset=UTF-8");

        return true;
    }
    @Override
    public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object handler, ModelAndView modelAndView) throws Exception {
    }

    @Override
    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object handler, Exception e) throws Exception {
        long startTime = Long.valueOf(String.valueOf(httpServletRequest.getAttribute("startTime")));
        long endTime = System.currentTimeMillis();

        //����ʱ����
//        if ((endTime - startTime) > SystemConfigure.getInstance().getConfig("timeouts").getInt("funcwarnTime") * 60000) {
//            logger.warn("�������, ��ʱ" + (endTime - startTime) + "ms");
//        }
        logger.info("�������,��Ӧ�����" + httpServletRequest.getAttribute("resMap") + ", ��ʱ" + (endTime - startTime) + "ms");
    }


}
