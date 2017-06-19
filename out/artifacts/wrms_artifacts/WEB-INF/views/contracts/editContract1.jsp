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

    <div id="example">
      <div class="demo-section k-content wide">
          <%--<div>--%>
              <%--<h4>橱柜</h4>--%>
              <div data-role="grid" date-scrollable="true" data-editable="true" data-toolbar="['create', 'save']" data-columns="[
                             { field: 'id', title:'ID', width: '60px'},
                             { field: 'item_name', title:'名称', width: '160px'},
                             { field: 'item_per', title:'单位', width: '80px'},
                              { field: 'item_price', title:'单价', width: '100px'},
                              { field: 'item_count', title:'数量', width: '100px'},
                              { field: 'item_total', title:'总价', width: '100px'},
                              { command: ['destroy'], title: '&nbsp;', width: '100px' }
                          ]" data-bind="source: products,
                        visible: isVisible,
                        events: {
                          save: onSave
                        }" style="height: 300px">

              </div>
          <%--</div>--%>
      </div>
    </div>
  </div>
</div>

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
      var viewModel = kendo.observable({
          isVisible: true,
          onSave: function(e) {
              if("item_price" in e.values && e.model.item_count != undefined && e.model.item_count != ""){
                  e.model.item_total = e.values.item_price * e.model.item_count;
                  e.sender.refresh();
              }
              if("item_count" in e.values && e.model.item_price != undefined && e.model.item_price != ""){
                  e.model.item_total = e.values.item_price * e.model.item_count;
                  e.sender.refresh();
              }
              console.log("event :: save(" + kendo.stringify(e.values, null, 4) + ")");
          },
          products: new kendo.data.DataSource({
              schema: {
                  model: {
          id: "id",
                      fields: {
                          id: {editable: false, default: 0},
                          item_name: {editable: true, nullable: false },
                          item_per: { nullable: false },
                          item_price: { type: "number", validation: { min: 0, required: true} },
                          item_count: { type: "number", validation: { min: 0, required: true } },
                          item_total: {editable: false}
                      }
                  }
              },
              batch: true,
              transport: {
                  read: {
                      url: "/contract/listItemsByPid?pid=35",
                      dataType: "json"
                  },
                  update: {
                      url: "/contract/listItemsByPid?pid=35",
                      dataType: "json"
                  },
                  create: {
                      url: "/contract/listItemsByPid?pid=35",
                      dataType: "json"
//                      url: "//demos.telerik.com/kendo-ui/service/products/create",
//                      dataType: "jsonp"
                  },
                  destroy: {
                      url: "/contract/listItemsByPid?pid=35",
                      dataType: "json"
                  },
                  parameterMap: function(options, operation) {
                      if (operation !== "read" && options.models) {
                          return {models: kendo.stringify(options.models)};
                      }
                  }
              }
          })
      });
      kendo.bind($("#example"), viewModel);
  }

</script>