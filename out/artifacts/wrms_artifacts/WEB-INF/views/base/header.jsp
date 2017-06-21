<%--
  Created by IntelliJ IDEA.
  User: shangmengde
  Date: 17/1/18
  Time: 23:16
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html; charset=UTF-8" language="java"
    pageEncoding="UTF-8" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html lang="zh-CN">
<head>
    <meta charset="UTF-8"/>
    <title>bootstrap框架</title>
    <link href="${pageContext.request.contextPath}/components/bootstrap/dist/css/bootstrap.min.css"
          rel="stylesheet">
    <link href="${pageContext.request.contextPath}/components/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css"
          rel="stylesheet">
    <link href="${pageContext.request.contextPath}/components/bootstrap-validator/css/bootstrapValidator.min.css"
          rel="stylesheet">
    <%--<link href="${pageContext.request.contextPath}/components/bootstrap/dist/css/bootstrap-theme.min.css"--%>
          <%--rel="stylesheet">--%>
    <%--<link href="${pageContext.request.contextPath}/components/bootstrap/dist/css/bootstrap-datetimepicker.min.css"--%>
          <%--rel="stylesheet">--%>
    <%--<link href="${pageContext.request.contextPath}/components/bootstraptable/bootstrap-table.min.css"--%>
          <%--rel="stylesheet">--%>
    <%--<link href="${pageContext.request.contextPath}/components/kendoui/2015.3.1111/styles/kendo.common.min.css"--%>
          <%--rel="stylesheet">--%>
    <%--<link href="${pageContext.request.contextPath}/components/kendoui/2015.3.1111/styles/kendo.default.min.css"--%>
          <%--rel="stylesheet">--%>
    <%--<link rel="stylesheet"--%>
          <%--href="${pageContext.request.contextPath}/components/kendoui/2015.3.1111/styles/kendo.rtl.min.css"/>--%>
    <%--<link rel="stylesheet"--%>
          <%--href="${pageContext.request.contextPath}/components/kendoui/2015.3.1111/styles/kendo.dataviz.min.css"/>--%>
    <%--<link rel="stylesheet"--%>
          <%--href="${pageContext.request.contextPath}/components/kendoui/2015.3.1111/styles/kendo.dataviz.default.min.css"/>--%>
    <%--<script src="${pageContext.request.contextPath}/components/kendoui/2015.3.1111/js/kendo.web.min.js"></script>--%>
    <%--<script src="${pageContext.request.contextPath}/components/kendoui/2015.3.1111/js/cultures/kendo.culture.zh-CN.min.js"></script>--%>

    <link rel="stylesheet"
          href="${pageContext.request.contextPath}/udeskCDN/vendor/font-awesome/4.5.0/css/font-awesome.min.css"/>
    <link rel="stylesheet"
          href="${pageContext.request.contextPath}/udeskCDN/vendor/kendoui/2015.3.1111/styles/kendo.common.min.css"/>
    <link rel="stylesheet"
          href="${pageContext.request.contextPath}/udeskCDN/vendor/kendoui/2015.3.1111/styles/kendo.default.min.css"/>
    <%--<link rel="stylesheet"
          href="${pageContext.request.contextPath}/udeskCDN/vendor/kendoui/2015.3.1111/styles/kendo.rtl.min.css"/>
    <link rel="stylesheet"
          href="${pageContext.request.contextPath}/udeskCDN/vendor/kendoui/2015.3.1111/styles/kendo.dataviz.min.css"/>
    <link rel="stylesheet"
          href="${pageContext.request.contextPath}/udeskCDN/vendor/kendoui/2015.3.1111/styles/kendo.dataviz.default.min.css"/>
--%>
    <link href="${pageContext.request.contextPath}/styles/ita/oldUdesk/bootstrap-multiselect.css"	rel="stylesheet" />

    <link href="${pageContext.request.contextPath}/styles/ita/toastr.min.css" rel="stylesheet"/>
    <link href="${pageContext.request.contextPath}/styles/ita/table.css" rel="stylesheet"/>
    <link href="${pageContext.request.contextPath}/styles/ita/flow.css" rel="stylesheet" />
    <link href="${pageContext.request.contextPath}/styles/ita/index.css" rel="stylesheet" />
    <link href="${pageContext.request.contextPath}/styles/local.css" rel="stylesheet" />
    <script type="text/javascript"
            src="${pageContext.request.contextPath}/udeskCDN/vendor/jquery/1.11.2/jquery.min.js"></script>
    <script type="text/javascript"
            src="${pageContext.request.contextPath}/scripts/util/ajaxLoadJS.js"></script>
    <script type="text/javascript"
            src="${pageContext.request.contextPath}/udeskCDN/vendor/kendoui/2015.3.1111/js/kendo.web.min.js"></script>
    <script type="text/javascript"
            src="${pageContext.request.contextPath}/udeskCDN/vendor/kendoui/2015.3.1111/js/cultures/kendo.culture.zh-CN.min.js"></script>
    <script type="text/javascript"
            src="${pageContext.request.contextPath}/components/bootstrap-datetimepicker-master/js/moment-with-locales.min.js"></script>
    <script type="text/javascript"
            src="${pageContext.request.contextPath}/components/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js"></script>
    <script type="text/javascript"
            src="${pageContext.request.contextPath}/components/bootstrap-validator/js/bootstrapValidator.min.js"></script>

</head>
<body>

<nav class="navbar navbar-inverse" role="navigation">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/meetingMis/meeting/meetingIndex">
                <span class="glyphicon glyphicon-th-list"></span> bootstrap框架
            </a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <%--<li><a href="/meetingMis/meeting/meetingIndex">新建</a></li>--%>
                <%--<li><a href="/meetingMis/meeting/meetingIndex">管理</a></li>--%>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">菜单<span class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">
                        <li><a href="/meetingMis/meeting/meetingIndex">Action</a></li>
                        <%--<li><a href="#">Another action</a></li>--%>
                        <%--<li><a href="#">Something else here</a></li>--%>
                        <%--<li class="divider"></li>--%>
                        <%--<li><a href="#">Separated link</a></li>--%>
                        <%--<li class="divider"></li>--%>
                        <%--<li><a href="#">One more separated link</a></li>--%>
                    </ul>
                </li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>
