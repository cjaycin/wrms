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
            <div class="box-col">
                <h4>添加新产品</h4>
                <ul class="options">
                    <li> <label>名称：</label><input type="text" placeholder="Enter name" data-bind="value: productName" class="name k-textbox"> </li>
                    <li> <label>单价：</label><input type="number" placeholder="Enter number" data-bind="value: productPrice" class="k-textbox"> </li>
                    <li> <label>数量：</label><input type="number" placeholder="Enter number" data-bind="value: productUnitsInStock" class="k-textbox"> </li>
                    <%--<li> <label>总价：</label><input type="number" placeholder="Enter number" data-bind="value: productSum" class="k-textbox"> </li>--%>
                    <li>
                        <button type="button" class="btn btn-default btn-lg" data-bind="click: addProduct">
                            <span class="glyphicon glyphicon-plusr"></span> 添  加
                        </button>
                        <%--<button class="k-button" data-bind="click: addProduct">添 加</button> </li>--%>
                </ul>
            </div>
            <table id="products" class="metrotable">
                <thead>
                <tr>
                    <th>名称</th>
                    <th>单价</th>
                    <th>数量</th>
                    <th>总价</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody data-template="row-template" data-bind="source: products">
                </tbody>
                <tfoot data-template="footer-template" data-bind="source: this">
                </tfoot>
            </table>
        </div>
        <script id="row-template" type="text/x-kendo-template">
            <tr>
                <td data-bind="text: name">
                </td>
                <td data-bind="text: price" data-format="C">
                </td>
                <td data-bind="text: unitsInStock"></td>
                <td data-bind="text: sum" data-format="C"></td>
                <td><button class="k-button" data-bind="click: deleteProduct">Delete</button></td>
            </tr>
        </script>
        <script id="footer-template" type="text/x-kendo-template">
            <tr>
                <td>
                    Products count: #: total() #
                </td>
                <td>
                    Total price: #: totalPrice() #
                </td>
                <td colspan="2">
                    Units in stock: #: totalUnitsInStock() #
                </td>
            </tr>
        </script>
    </div>

  </div>

</div>

<%@include file="/WEB-INF/views/base/footer.jsp"%>
<style>
    .demo-section {
        min-height: 200px;
    }
    .metrotable > tbody > tr > td  {
        font-size: 12px;
    }
    .metrotable > thead > tr > th {
        font-size: 14px;
        padding-top: 0;
    }

    .metrotable > tfoot > tr > td {
        padding-right: 10px;
    }

    .box-col label {
        display: inline-block;
        width: 95px;
    }
    .code-sample {
        clear: right;
    }

    .prettyprint {
        background-color: #fff;
        border: 1px solid #ccc;
        overflow: auto;
        padding: 5px;
    }
</style>

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
          productName: "Product name",
          productPrice: 10,
          productUnitsInStock: 10,
          addProduct: function() {
              this.get("products").push({
                  name: this.get("productName"),
                  price: parseFloat(this.get("productPrice")),
                  unitsInStock: parseFloat(this.get("productUnitsInStock")),
                  sum: parseFloat(this.get("productPrice")) * parseFloat(this.get("productUnitsInStock"))
              });
          },
          deleteProduct: function(e) {
              // the current data item (product) is passed as the "data" field of the event argument
              var product = e.data;

              var products = this.get("products");

              var index = products.indexOf(product);

              // remove the product by using the splice method
              products.splice(index, 1);
          },
          total: function() {
              return this.get("products").length;
          },
          totalPrice: function() {
              var sum = 0;

              $.each(this.get("products"), function(index, product) {
                  sum += product.price;
              });

              return sum;
          },
          totalUnitsInStock: function() {
              var sum = 0;

              $.each(this.get("products"), function(index, product) {
                  sum += product.unitsInStock;
              });

              return sum;
          },
          sumPrice: function(){
              var sum = 0;
              $.each(this.get("products"), function(index, product){
                 sum += product.sum;
              });
              return sum;
          },
          products: [
//              { name: "Hampton Sofa", price: 989.99, unitsInStock: 39 },
//              { name: "Perry Sofa", price: 559.99, unitsInStock: 17 },
//              { name: "Donovan Sofa", price: 719.99, unitsInStock: 29 },
//              { name: "Markus Sofa", price: 839.99, unitsInStock: 3 }
          ]
      });

      kendo.bind($("#example"), viewModel);
  }

</script>