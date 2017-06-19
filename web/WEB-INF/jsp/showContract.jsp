<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ page contentType="text/html; charset=utf-8"%>

<table>
  <tr>
    <td width="15%" class="table_title right">客户姓名：&nbsp;</td>
    <td width="35%" class="left">${customer.name}</td>
    <td width="15%" class="table_title right">合同号：&nbsp;</td>
    <td width="35%" class="left">${contract.code}</td>
  </tr>
  <tr>
    <td class="table_title right">客户地址：&nbsp;</td>
    <td class="left">${customer.address}</td>
    <td class="table_title right">合同日期：&nbsp;</td>
    <td class="left"><fmt:formatDate value="${contract.hdate}" pattern="yyyy-MM-dd"></fmt:formatDate></td>
  </tr>
  <tr>
    <td class="table_title right">客户电话：&nbsp;</td>
    <td class="left">${customer.mobile}</td>
    <td class="table_title right">结账日期：&nbsp;</td>
    <td class="left"><fmt:formatDate value="${contract.jdate}" pattern="yyyy-MM-dd"></fmt:formatDate></td>
  </tr>
  <tr>
    <td colspan="4" class="right notice">合计：${contract.totalprice}&nbsp;&nbsp;</td>
  </tr>
</table>

<br/>
<jsp:include page="iteminfo.jsp"/>
