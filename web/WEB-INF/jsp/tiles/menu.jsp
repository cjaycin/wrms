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
        isSimpleData : false,              //�����Ƿ���ü� Array ��ʽ��Ĭ��false
        treeNodeKey : "id",               //��isSimpleData��ʽ�£���ǰ�ڵ�id����
        treeNodeParentKey : "pId",        //��isSimpleData��ʽ�£���ǰ�ڵ�ĸ��ڵ�id����
        showLine : true                  //�Ƿ���ʾ�ڵ�������
    };

    var treeNodes = [
        {id:0, pId:-1, name:"���ڵ�"},
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
            simpleData: {   //�򵥵�����Դ��һ�㿪���ж��Ǵ����ݿ����ȡ��API�н��ܣ�����ֻ�Ǳ��ص�
                enable: true,
                idKey: "id",  //id��pid�����ﲻ�ö�˵�˰ɣ�����Ŀ¼����
                pIdKey: "pId",
                rootPId: 0   //���ڵ�
            }
        },
        callback: {
            onAsyncSuccess: zTreeOnAsyncSuccess  /!**�ص����������ã��첽�ύ�ɹ��Ļص�����**!/
        }
    };

    $(document).ready(function(){//��ʼ��ztree����
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