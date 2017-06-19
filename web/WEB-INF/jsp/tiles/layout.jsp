<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="/tags/jstl-core" prefix="c" %>
<%@ taglib uri="/tags/jstl-format" prefix="fmt" %>
<%@ taglib uri="/tags/jstl-function" prefix="fn" %>
<%@ taglib uri="/tags/stringHelper" prefix="stringHelper" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@ page contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <title><tiles:insertAttribute name="title" ignore="true" /></title>
  <link rel="stylesheet" type="text/css" href="/static/css/style.css" />
  <link rel="stylesheet" type="text/css" href="/static/css/ztree/zTreeStyle/zTreeStyle.css"/>
  <script type="text/javascript" src="/static/js/jquery-1.11.2.min.js"></script>
  <script type="text/javascript" src="/static/js/jquery.ztree.all-3.5.min.js"></script>
</head>
<body>
  <div id="container" class="radius_all">
    <div id="header">
      <tiles:insertAttribute name="header" />
    </div>
    <div id="body">
      <%--<div id="menu">
        <tiles:insertAttribute name="menu" />
      </div>--%>
      <div id="topMenu"><tiles:insertAttribute name="topMenu" /></div>
      <div id="content"><tiles:insertAttribute name="body" /></div>
    </div>
    <div id="footer" class="radius_bottom"><tiles:insertAttribute name="footer" /></div>
  </div>
</body>
</html>