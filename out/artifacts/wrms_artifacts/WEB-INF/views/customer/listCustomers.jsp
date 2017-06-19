<%--
  Created by IntelliJ IDEA.
  User: cjay
  Date: 2017/6/8
  Time: 13:41
  To change this template use File | Settings | File Templates.
--%>
<%@include file="/WEB-INF/views/base/header.jsp"%>
<%@ page contentType="text/html; charset=UTF-8" language="java" %>
<div class="container">
  <div class="queryArea">
    <div class="grouptitle">
      <span style="margin-top:-5px;">查询区</span>
    </div>
    <form id="searchMeetingForm" class="form-horizontal" method="post">
      <div class="form-group">
        <label class="col-xs-2" style="padding-right:0px;">关键字</label>
        <div class="col-xs-4">
          <input type="text" class="form-control" id="condition" name="condition"
                 placeholder="请输入查询关键字" ／>
        </div>
        <div class="col-xs-6">
          <div class="btn-toolbar">
            <button id="resetBtn" type="button" class="pull-right btn">
              <span class="glyphicon glyphicon-refresh">重置</span>
            </button>
            <button id="searchBtn" type="submit" class="pull-right btn">
              <span class="glyphicon glyphicon-search">查询</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>

  <script id="meetingGridToolbar" type="text/x-kendo-template">
    <div class="btn-toolbar">
      <button id="deleteButton" class="pull-right btn">
        <span class="glyphicon glyphicon-remove"></span>  删除
      </button>
      <button id="editButton" class="pull-right btn">
        <span class="glyphicon glyphicon-edit"></span>  编辑
      </button>
      <button data-toggle="modal" data-target="\\#addContractModal" class="pull-right btn">
        <span class="glyphicon glyphicon-plus"></span>  新增
      </button>
    </div>
  </script>

  <div class="gridArea">
    <div id="meetingGrid" class="row"></div>
  </div>
    <%@include file="/WEB-INF/views/contracts/addContractDlg.jsp"%>
  <%--
    <%@include file="meetingAddDlg.jsp"%>
    <%@include file="meetingDeleteDlg.jsp"%>
    <%@include file="meetingDetailDlg.jsp"%>
    <%@include file="meetingUpdateDlg.jsp"%>
    <%@include file="sendMailDlg.jsp"%>--%>
</div>

<%@include file="/WEB-INF/views/base/footer.jsp"%>
<script type="text/javascript">
  $(function(){
    bindGrid();
  });

  $("#resetBtn").click(function () {
    $("#condition").val("");
  });

  $("#searchMeetingForm").submit(function(event) {
    event.preventDefault();
    bindGrid();
  });

  function bindGrid(){
    $("#meetingGrid").kendoGrid({
      toolbar :[
        {template:kendo.template($("#meetingGridToolbar").html())},
      ],
      columns :[
        {field : "name", title: "姓名" , width:"22%"},
        {field : "address", title: "地址" , width:"26"},
        {field : "mobile", title: "手机号码" , width:"13%"},
        {field : "tel", title: "联系电话" , width:"13%"},
//        {field : "total_price", title: "总额" , width:"13%"},
//        {field : "status ", title: "状态" , width:"13%"},
        {title : "操作", width:"13%",
          template:function(item) {
            return "<button class='k-button k-button-icontext k-grid-查看详情' " +
                    "onclick='editContract("+item.id+")'>查看详情</button>";
          }
        }
      ],
      groupable : false,
      sortable : true,
      scrollable : false,
      selectable : "single row",
      dataSource : {
        transport : {
          read : function(options) {
            $.ajax({
              type:"POST",
              url:"/customer/allCustomer",
              data: $("#searchMeetingForm").serialize() + "&page=" + options.data.page + "&pageSize=" + options.data.pageSize,
              dataType: "json",
              success: function(result) {
                options.success(result.pagedResultVO);
              },
              error: function(result) {
//                options.error(result);
              }
            });
          }
        },
        serverPaging : true,
        serverFiltering : true,
        schema : {
          data : function(response) {
            return response.data;
          },
          total : function(response) {
            return response.total;
          }
        }
      },
      pageable : {
        refresh : true,
        pageSizes : true,
        buttonCount : 5,
        page : 1,
        pageSize : 10,
        pageSizes : [ 5, 10, 20, 30 ],
        messages : {
          display : "显示 {0}-{1} 共 {2} 项",
          empty : "没有数据",
          itemsPerPage : "每面显示数量",
          first : "第一页",
          last : "最后一页",
          next : "下一页",
          previous : "上一页"
        }
      }
    });
  }

  function editContract(id){
    window.location = "/contract/editContract?cid="+id;
/*    $.ajax({
      type:"POST",
      url:"/contract/editContract?cid="+id,
      dataType: "json",
      success: function(result) {
      },
      error: function(result) {
      }
    })*/;
  }
</script>