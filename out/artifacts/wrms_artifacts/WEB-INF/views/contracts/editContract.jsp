<%--
  Created by IntelliJ IDEA.
  User: cjay
  Date: 2017/6/9
  Time: 15:58
  To change this template use File | Settings | File Templates.
--%>
<%@include file="/WEB-INF/views/base/header.jsp"%>
<%@ page contentType="text/html; charset=UTF-8" language="java" %>
<div class="container">
  <div class="queryArea">
    <div class="grouptitle">
      <span style="margin-top:-5px; font-weight: bold; font-size: larger">基本信息</span>
    </div>
    <form class="form-horizontal" method="post">
      <div class="form-group">
        <div class="col-sm-6">
          <input type="text" class="form-control" id="name" name="name" placeholder="用户名">
        </div>
        <div class="col-sm-6">
          <input type="text" class="form-control" id="phone" name="phone" placeholder="联系方式">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-12">
          <input type="text" class="form-control" id="address" name="address" placeholder="联系地址">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-6">
          <label>选择日期：</label>
          <!--指定 date标记-->
          <div class='input-group date' id='datetimepicker1'>
            <input type='text' class="form-control" />
                <span class="input-group-addon">
                    <span class="glyphicon glyphicon-calendar"></span>
                </span>
          </div>
        </div>
        <div class="col-sm-6">
          <label>选择日期：</label>
          <!--指定 date标记-->
          <div class='input-group date' id='datetimepicker2'>
            <input type='text' class="form-control" />
                <span class="input-group-addon">
                    <span class="glyphicon glyphicon-calendar"></span>
                </span>
          </div>
        </div>
      </div>
    </form>
    <div id="basicInfo_area"></div>
  </div>
  <div class="queryArea" style="margin-top: 15px">
    <div class="grouptitle">
      <span style="margin-top:-5px; font-weight: bold; font-size: larger">产品明细</span>
    </div>
    <div id="contractInfo_area">
      <div class="gridArea">
        <div id="meetingGrid" class="row"></div>
      </div>

      <div id="grid"></div>
      <script type="text/x-kendo-template" id="template">
        <div class="refreshBtnContainer">
          <label class="category-label">项目名称：橱柜</label>
          <%--<botton id="addButton" class="pull-right btn">--%>
            <%--<span class="glyphicon glyphicon-plus"></span>新增--%>
          <%--</botton>--%>
          <%--<input type="create" id="category" style="width: 150px; float: right;"/>--%>

        </div>
      </script>

    </div>
    <div style="margin: 10px; text-align: right;">
      <p>
        <a href="#" class="btn btn-info btn-lg" id="add_project">
          <span class="glyphicon glyphicon-plus"></span>新增项目
        </a>
      </p>
    </div>
  </div>
</div>

<script id="meetingGridToolbar" type="text/x-kendo-template">
  <div class="btn-toolbar">
    <button id="deleteButton" class="pull-right btn">
      <span class="glyphicon glyphicon-remove"></span>  删除
    </button>
    <button id="editButton" class="pull-right btn">
      <span class="glyphicon glyphicon-edit"></span>  编辑
    </button>
    <button data-toggle="modal" data-target="\\#addModal" class="pull-right btn">
      <span class="glyphicon glyphicon-plus"></span>  新增
    </button>
  </div>
</script>

<%@include file="/WEB-INF/views/base/footer.jsp"%>

<script type="text/javascript">
  $(function () {
    $('#datetimepicker1').datetimepicker({
      format: 'YYYY-MM-DD',
      locale: moment.locale('zh-cn')
    });
    $('#datetimepicker2').datetimepicker({
      format: 'YYYY-MM-DD',
      locale: moment.locale('zh-cn')
    });
    bindNewGrid();
    $("#add_project").click(function(){
      $("#contractInfo_area").append('<div class="gridArea"><div class="row"></div></div>');
    });
  });

  function bindNewGrid(){
    var dataSource = new kendo.data.DataSource({
      transport: {
        read:  {
//          url: "https://demos.telerik.com/kendo-ui/service/products",
          url: "/contract/listItemsByPid?pid=35",
          dataType: "json"
        },
        update: {
          url: "https://demos.telerik.com/kendo-ui/service/products/update",
          dataType: "jsonp"
        },
        destroy: {
          url: "https://demos.telerik.com/kendo-ui/service/products/destroy",
          dataType: "jsonp"
        },
        create: {
          url: "https://demos.telerik.com/kendo-ui/service/products/create",
          dataType: "jsonp"
        },
        parameterMap: function(options, operation) {
          if (operation !== "read" && options.models) {
            return {models: kendo.stringify(options.models)};
          }
        }
      },
      requestStart: function(e) {
        if (e.type != "read") {
          kendoConsole.log(kendo.format("Request start ({0})", e.type));
        }
      },
      requestEnd: function(e) {
        if (e.type != "read") {
          kendoConsole.log(kendo.format("Request end ({0})", e.type));
        }
      },
      batch: true,
      pageSize: 20,
      schema: {
        model: {
//          id: "id",
          fields: {
            item_name: {editable: false, nullable: false },
            item_per: { nullable: false },
            item_price: { type: "number", validation: { min: 0, required: true} },
            item_count: { type: "number", validation: { min: 0, required: true } },
            item_total: {}
          }
        }
      }
    });

    $("#grid").kendoGrid({
      dataSource: dataSource,
      pageable: {
        refresh: true
      },
      height: 300,
//      toolbar: kendo.template($("#template").html()),
      toolbar: ["create"],
      columns: [
//        "id",
        { field: "item_name", title:"名称", width: "160px"},
        { field: "item_per", title:"单位", width: "80px"},
        { field: "item_price", title:"单价", width: "100px"},
        { field: "item_count", title:"数量", width: "100px"},
        { field: "item_total", title:"总价", width: "100px"},
        { command: ["edit", "destroy"], title: "&nbsp;", width: "200px" }
      ],
      editable: "inline"
    });
  }

</script>