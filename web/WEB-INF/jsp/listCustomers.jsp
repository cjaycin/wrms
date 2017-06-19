<%--
  Created by IntelliJ IDEA.
  User: cjay
  Date: 2015/4/15
  Time: 21:20
  To change tdis template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="/tags/jstl-core" prefix="c" %>
<%@ taglib uri="/tags/jstl-format" prefix="fmt" %>
<%@ taglib uri="/tags/jstl-function" prefix="fn" %>
<%@ taglib uri="/tags/stringHelper" prefix="stringHelper" %>
<div class="title">
  <table class="left">
    <tr>
      <td width="5"><img src="/static/image/mod_tab_hd.png"/></td>
      <td align="left"><strong>客户列表</strong></td>
    </tr>
  </table>
</div>
<table>
  <tr class="table_title">
    <td width="15%" align="center">客户姓名</td>
    <td width="25%" align="center">客户地址</td>
    <td width="15%" align="center">手机号码</td>
    <td width="15%" align="center">联系电话</td>
    <td width="15%" align="center">总额</td>
    <td align="center">操作</td>
  </tr>
  <c:choose>
    <c:when test="${not empty customerList}">
      <c:forEach var="item" items="${customerList}">
        <td>${item.name}</td>
        <td>${item.address}</td>
        <td>${item.mobile}</td>
        <td>${item.tel}</td>
        <td>${item.total_price}</td>
        <td><a href="/contract/showContract?cid=${item.id}">查看</a>&nbsp;&nbsp;<a>删除</a></td>
      </c:forEach>
    </c:when>
  </c:choose>
  <tr>
    <td colspan="6" align="right">
      <div style="width: 100%; text-align: right">添加客户</div>
    </td>
  </tr>
</table>
