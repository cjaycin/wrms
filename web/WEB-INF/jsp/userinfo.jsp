<%@ page contentType="text/html; charset=utf-8"%>


<style>



  .title{
    text-align: right;
  }

</style>
<table>
  <tr>
    <td width="15%" class="title">客户姓名：&nbsp;</td>
    <td width="35%">${name}</td>
    <td width="15%" class="title">合同号：&nbsp;</td>
    <td width="35%"></td>
  </tr>
  <tr>
    <td class="title">客户地址：&nbsp;</td>
    <td></td>
    <td class="title">合同日期：&nbsp;</td>
    <td></td>
  </tr>
  <tr>
    <td class="title">客户电话：&nbsp;</td>
    <td></td>
    <td class="title">结账日期：&nbsp;</td>
    <td></td>
  </tr>
  <tr>
    <td class="title" colspan="4" align="right">共计：￥12000&nbsp;&nbsp;</td>
  </tr>
</table>

<br/>
<jsp:include page="iteminfo.jsp"/>
