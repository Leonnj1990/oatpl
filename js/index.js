$(function () {
        multilevel_menu();
        function multilevel_menu() {
            $(".stair-menus").click(function () {
                $(this).next().slideToggle().siblings(".second-menus").hide();
                $(this).children(".OA-packup").toggle().next().toggle();
            });
            $(".second-part").click(function () {
                $(this).next().slideToggle();
                $(this).children(".OA-packup").toggle().next().toggle();
            });
        }
        var counts = 0;
        add_tab();
        function add_tab() {
//             解绑
            $(".three-part").unbind('click');
//             解绑
//             当菜单点击时
            $(".three-part").click(function () {
//                 取出.third-text的文本
                var texts = $(this).text();
//                 取出.third-text的文本
                //计数器自增一
                counts++;
                //计数器自增一
//                 取所有新添加的div
                var show1a = $(".tab-left .addtab");
//                 取所有新添加的div
//                 初始化
                var isready=0;
//                 初始化
//                 循环 当i小于tab的长度时i自增
                for (var i = 0; i<show1a.length;i++){
//                     假如showla的文本等于texts的文本时
                    if(show1a.eq(i).text() == texts){
//                         找到
                        isready=1;
//                         假如showla的文本等于texts的文本时给自己加上一个#fff阴影给他的所以同胞加上#f1f1f1的阴影
                        $(show1a.eq(i)).css("box-shadow","0px 4px 0px #fff").siblings().css("box-shadow","0px 4px 10px #f1f1f1");
                        $(".homepage").css("box-shadow","0px 4px 10px #f1f1f1");
//                         假如showla的文本等于texts的文本时给自己加上一个#fff阴影给他的所以同胞加上#f1f1f1的阴影
//                         假如showla的文本等于texts的文本时那么tab自己显示其他同胞隐藏
                        var tab = $(".matter-descend .tab");
//                         当x小于tab的长度时x自增
                        for (var x = 0;x<tab.length;x++){
                            if(x==i) {
                                $(tab).eq(x).show().siblings().hide();
//                                 跳出循环
                                break;
//                                 跳出循环
                            }
                        }
//                         当x小于tab的长度时x自增
//                                 跳出循环
                        break;
//                                 跳出循环
//                         假如showla的文本等于texts的文本时那么tab自己显示其他同胞隐藏
                    }
                }
//                 循环
                //假如showla的文本等于texts的文本时
                //未找到则添加
                if(!isready){
                    //设置css
                    //绑定click事件
                    $(".tab-left").append("<div id='"+counts+"' class='addtab'><a href='#'>"+texts+"</a><i  class='OA-shut'></i></div>");
                    $(".matter-descend").append("<div id='tabdiv"+counts+"' class='tab'>"+texts+"</div>");
//                    选项卡内容切换
                    var tab = $(".matter-descend .tab");
                    for (var x = 0;x<tab.length;x++){
                        if(x==i) {
                            $(tab).eq(x).show().siblings().hide();
                            break;
                        }
                    }
//                    选项卡内容切换
//                    选项卡点击时
                    $('#'+counts).css("box-shadow","0px 4px 0px #fff").siblings().css("box-shadow","0px 4px 10px #f1f1f1");
                    $(".homepage").css("box-shadow","0px 4px 10px #f1f1f1");
                    $(".addtab").unbind('click');
                    $(".addtab").click(function () {
                        $(this).css("box-shadow","0px 4px 0px #fff").siblings().css("box-shadow","0px 4px 10px #f1f1f1");
                        $(".homepage").css("box-shadow","0px 4px 10px #f1f1f1");
                        $(".matter-descend .tab").hide();
                        $("#tabdiv"+$(this).attr('id')).show().siblings().hide();
                    });
//                    选项卡点击时
//                    点关闭按钮时当前标签移除，跳转到首页
                    $(".OA-shut").unbind('click');
                    $(".OA-shut").click(function () {
                        pid=$(this).parent().attr('id');
                        $('#'+pid).remove();
                        $('#tabdiv'+pid).remove();
                        $(".metter-journal,.metter-statistics,.metter-details").show();
                        $(".homepage").css("box-shadow","0px 4px 0px #fff").siblings().css("box-shadow","0px 4px 10px #f1f1f1");
                    });
//                    点关闭按钮时当前标签移除，跳转到首页
                }
                //未找到则添加
//
            });
        }
        shut_tab();
        function shut_tab() {
            $(".OA-close").click(function () {
                $("[class^=addtab]").remove();
                $("[id^=tabdi]").hide().siblings(".metter-journal,.metter-statistics,.metter-details").show();
                $(".homepage").css("box-shadow","0px 4px 10px #fff").siblings().css("box-shadow","0px 4px 10px #f1f1f1");
            });
            $(".homepage").click(function () {
                $("[id^=tabdi]").hide().siblings(".metter-journal,.metter-statistics,.metter-details").show();
                $(this).css("box-shadow","0px 4px 10px #fff").siblings().css("box-shadow","0px 4px 10px #f1f1f1");
            })
        }
        Message_box();
        function Message_box() {
            $(".OA-message").hover(function () {
                $(".OA-arrow,.OA-message_box").stop(true,false).slideDown(500)
            },function () {
                $(".OA-arrow,.OA-message_box").stop(true,false).slideUp(500)
            })
        }
        menus_button();
        function menus_button() {
            $(".OA-number").click(function () {
                $(".OA-menus").toggle()
            })
        }
    });