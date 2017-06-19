<script type="text/javascript" language="javascript">
    /*var setting = {
//        check: {
//        enable: true,
//            chkboxType: {"Y":"", "N":""}
//        },
        view: {
            fontCss:{},
            showLine:true,
            expandSpeed: 300
        },
        data: {
            simpleData: {
                enable: true,
                idKey: "id",
                pIdKey: "pId",
                rootPId: 0
            }
        }/!*,
        callback: {
            beforeClick: beforeClick,
            onCheck: onCheck
        }*!/
    };
    function beforeClick(treeId, treeNode) {
        alert("beforeClick");
    }
    function onCheck(e, treeId, treeNode) {
        alert("onCheck");
    }

    var citynodes = [
        {id:0, pId:-1, name:"aa"},
        {id:1, pId:0, name:"bb"},
        {id:2, pId:0, name:"cc"}
    ];*/

    var setting = {
        isSimpleData : false,              //数据是否采用简单 Array 格式，默认false
        treeNodeKey : "id",               //在isSimpleData格式下，当前节点id属性
        treeNodeParentKey : "pId",        //在isSimpleData格式下，当前节点的父节点id属性
        showLine : true                  //是否显示节点间的连线
    };

    var treeNodes = [
        {id:0, pId:-1, name:"根节点"},
        {"id":1, "pId":0, "name":"test1"},
        {"id":11, "pId":1, "name":"test11"},
        {"id":12, "pId":1, "name":"test12"},
        {"id":111, "pId":11, "name":"test111"}
    ];



    $(document).ready(function(){
        var zTreeDemo = $.fn.zTree.init($("#cityTree"),setting, treeNodes);
    });
    /*var setting = {
        async: {
            enable: true,
            type:'post',
            url:"treedata.jsp"
            ///dataFilter: filter
        },
        data: {
            simpleData: {   //简单的数据源，一般开发中都是从数据库里读取，API有介绍，这里只是本地的
                enable: true,
                idKey: "id",  //id和pid，这里不用多说了吧，树的目录级别
                pIdKey: "pId",
                rootPId: 0   //根节点
            }
        },
        callback: {
            onAsyncSuccess: zTreeOnAsyncSuccess  /!**回调函数的设置，异步提交成功的回调函数**!/
        }
    };

    $(document).ready(function(){//初始化ztree对象
        $.fn.zTree.init($("#cityTree"), setting);
    });*/
    var timer;
    $(function(){
        $(window).scroll(function(){
            clearInterval(timer);
            var topScroll=getScroll();
            var topDiv="50px";
            var top=topScroll+parseInt(topDiv);
            timer=setInterval(function(){
                //$(".test").css("top", top+"px");
                $("#menu").animate({"top":top},0);
            },500)
        })
    })
    function getScroll(){
        var bodyTop = 0;
        if (typeof window.pageYOffset != 'undefined') {
            bodyTop = window.pageYOffset;
        } else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {
            bodyTop = document.documentElement.scrollTop;
        }
        else if (typeof document.body != 'undefined') {
            bodyTop = document.body.scrollTop;
        }
        return bodyTop
    }
</script>
<ul id="cityTree" class="ztree"></ul>