<%--
  Created by IntelliJ IDEA.
  User: cjay
  Date: 2017/6/16
  Time: 14:25
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html; charset=UTF-8" language="java" pageEncoding="UTF-8" %>

<div class="modal fade" id="addContractModal" role="dialog" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title" id="myModalLabel">添加订单</h4>
      </div>
      <div class="modal-body">
        <form class="form-horizontal" action="/contract/saveBasicInfo" method="post">
          <div class="form-group">
            <div class="col-sm-6">
              <input type="text" class="form-control" id="name" name="name" placeholder="客户姓名">
            </div>
            <div class="col-sm-6">
              <input type="text" class="form-control" id="phone" name="mobile" placeholder="联系方式">
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-6">
              <label>选择日期：</label>
              <!--指定 date标记-->
              <div class='input-group date' id='datetimepicker1'>
                <input type='text' class="form-control" name="date1">
                <span class="input-group-addon">
                    <span class="glyphicon glyphicon-calendar"></span>
                </span>
              </div>
            </div>
            <div class="col-sm-6">
              <label>选择日期：</label>
              <!--指定 date标记-->
              <div class='input-group date' id='datetimepicker2'>
                <input type='text' class="form-control" name="date2">
                <span class="input-group-addon">
                    <span class="glyphicon glyphicon-calendar"></span>
                </span>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-12">
              <input type="text" class="form-control" id="address" name="address" placeholder="联系地址">
            </div>
            <%--<div class="col-sm-2">
              <button type="submit" class="btn btn-primary" data-loading-text="保存中..." >保存基本信息</button>
            </div>--%>
          </div>
          <div class="form-group">
            <div class="col-sm-6">
            </div>
            <div class="col-sm-6">
              <button type="submit" class="btn btn-primary" data-loading-text="保存中..." >保存基本信息</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal">取消</button>
            </div>
          </div>
        </form>
      </div>
<%--
      <div class="modal-footer">
        <div class="btn-toolbar">
          <button type="button" class="btn btn-primary" id="save">保存</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal">取消</button>
        </div>
      </div>
--%>
    </div>
  </div>
</div>
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

    validateForm();
  });

  function validateForm(){
    $('#basicInfoForm').bootstrapValidator({
      message: 'This value is not valid',
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      fields: {
        name: {
          message: '客户姓名验证失败',
          validators: {
            notEmpty: {
              message: '客户姓名不能为空'
            }
          }
        },
        mobile: {
          validators: {
            notEmpty: {
              message: '联系方式不能为空'
            }
          }
        },
        address: {
          validators: {
            notEmpty: {
              message: '联系地址不能为空'
            }
          }
        }
//        date1: {
//          validators: {
//            notEmpty: {
//              message: '日期不能为空'
//            }
//          }
//        },
//        date2: {
//          validators: {
//            notEmpty: {
//              message: '日期不能为空'
//            }
//          }
//        }
      },
      submitHandler: function (validator, form, submitButton) {
/*        $.ajax({
          type:"POST",
          url:"/contract/saveBasicInfo",
          data: form.serialize(),
          dataType: "json",
          success: function(result) {

          },
          error: function(result) {
//                options.error(result);
          }
        })*/;
      }
    });
  }

</script>