<%--
  Created by IntelliJ IDEA.
  User: cjay
  Date: 2017/6/7
  Time: 16:38
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html; charset=UTF-8" language="java" %>
<%@include file="/WEB-INF/views/base/header.jsp"%>
<%@include file="/WEB-INF/views/base/footer.jsp"%>
<link href="${pageContext.request.contextPath}/styles/login.css" rel="stylesheet"/>
<%--<form class="bs-example bs-example-form" role="form">
  <div class="input-group input-group-lg">
    <span class="input-group-addon glyphicon glyphicon-user"></span>
    <input type="text" class="form-control" placeholder="手机号" name="username" autofocus="autofocus">
  </div>
  <br/>
  <div class="input-group input-group-lg">
    <span class="input-group-addon 	glyphicon glyphicon-asterisk"></span>
    <input type="password" class="form-control" placeholder="密码" name="password">
  </div>
  <br>
  <button class="btn btn-primary btn-block btn-lg" type="submit" id="btnSubmit">登录</button>
</form>--%>
<div class="container">
  <div class="row">
    <div class="col-md-offset-3 col-md-6">
      <form class="form-horizontal" action="/user/login" method="post">
        <span class="heading">用户登录</span>
        <div class="form-group">
          <input type="text" class="form-control" id="username" name="loginId" placeholder="用户名">
          <i class="fa fa-user"></i>
        </div>
        <div class="form-group">
          <input type="password" class="form-control" id="password" name="password" placeholder="密　码">
          <i class="fa fa-lock"></i>
          <%--<a href="#" class="fa fa-question-circle"></a>--%>
        </div>
        <div class="form-group">
          <%--<div class="main-checkbox">
            <input type="checkbox" value="None" id="checkbox1" name="check"/>
            <label for="checkbox1"></label>
          </div>--%>
          <%--<span class="text">Remember me</span>--%>
          <button type="submit" class="btn btn-default btn-block" id="btnSubmit">登录</button>
        </div>
      </form>
    </div>
  </div>
</div>

  <!--/header-->
  <%--<div class="kk_body  top_60">
    <div class="kk_main signup_wrap container mb_30">
      &lt;%&ndash;<h2 class="signup_header clearfix"><a href="/user/register/index" class="btn btn-md btn-default pull-right btn_gray">还没有账号？立即注册</a></h2>&ndash;%&gt;
      <div class="form_pane">
        <h1 class="text-center form_title">登&nbsp;录</h1>
        &lt;%&ndash;<p class='text-center form_subtitle gray'>我们致力于打造最高效、易用的量化交易平台</p>&ndash;%&gt;
        <form class='kkform' name="CyLoginForm" method="post">
          <div class="input-group">
            <span class="input-group-addon glyphicon glyphicon-user"></span>
            <input type="text" class="form-control" placeholder="手机号" name="username" autofocus="autofocus">
          </div>
          <div class="relative">
            &lt;%&ndash;<div class="form-group form-group-lg">&ndash;%&gt;
            <div class="input-group">
              <input type="password" class="form-control" name="password" placeholder="密码">
            </div>
          </div>
          <button class="btn btn-danger btn-block btn-lg" type="submit" id="btnSubmit">登录</button>
        </form>
        &lt;%&ndash;<div class=" fright mt_20 cursor alert_btn"><span class="link_gray ">无法登录？</span></div>&ndash;%&gt;
        &lt;%&ndash;<div class="alert" >
          <span>请通过QQ反馈您遇到的问题<br>QQ:287886321</span><br>
          <button type="button" class="btn btn-danger alert_ok" >确定
          </button>
        </div>&ndash;%&gt;
      </div>
    </div>
  </div>--%>
<%--
<script type="text/javascript">
  $(function () {
    $('#btnSubmit').click(function(){
      var username = $("input[name='username']").val();
      var password = $("input[name='password']").val();
      $.ajax({
        type:"POST",
        url:"/user/login",
        data: {"loginId": username, "password": password},
        dataType: "json",
        success: function(result) {
//          alert("success");
        },
        error: function(result) {
          alert("用户名密码错误");
        }
      });
    });
  });
</script>--%>
