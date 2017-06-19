<%--
  Created by IntelliJ IDEA.
  User: cjay
  Date: 2017/6/14
  Time: 9:41
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<div class="modal fade" id="addProjectModal" role="dialog" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title" id="myModalLabel">添加产品</h4>
      </div>
      <div class="modal-body">
        <form id="addMeetingForm" method="post" class="form-horizontal">
          <div class="form-group modal-first-div">
            <label class="col-xs-2">产品名称：</label>
            <div class="col-xs-10">
              <input type="text" class="form-control" id="themeAdd"
                     name="theme"/>
              <%--<input type="text" class="form-control" id="themeAdd"--%>
              <%--name="theme" check-type="required"/>--%>
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <div class="btn-toolbar">
          <button id="btnAddMeeting" type="button" class="btn btn-primary">保存</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal">取消</button>
        </div>
      </div>
    </div>
  </div>
</div>