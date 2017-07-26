/**
 * Created by Weetao on 2017-06-07.
 */
// var app=angular.module('app',[]);
app.controller('mainCtrl',function(){
    $(function(){
        var btn = $('.actionAll .SmallRadius');
        var content = $('.BigRadius');
        var arrayData = [
            {"pos":"BigRadius1","tit":"微信点餐","content":"微信点餐--内容123456789"},
            {"pos":"BigRadius2","tit":"外买点餐","content":"外买点餐--内容123456789"},
            {"pos":"BigRadius3","tit":"预定点餐","content":"预定点餐--内容123456789"},
            {"pos":"BigRadius4","tit":"收银点餐","content":"收银点餐--内容123456789"},
            {"pos":"BigRadius5","tit":"多门店管理","content":"多门店管理--内容123456789"},
            {"pos":"BigRadius6","tit":"分析数据","content":"分析数据--内容123456789"}
        ];
        content.html(
            '<i class="'+arrayData[0].pos+'"></i>' +
            '<h1>'+arrayData[0].tit+'</h1>' +
            '<p>'+arrayData[0].content+'</p>' +
            '<a href="#">立即体验</a>'
        );
        $.each(btn,function(index,value){
            var _this = $(this);
            $(this).hover(function(){
                content.addClass('animated fadeInDownBig');
                $.each(arrayData,function(i,v) {
                    if(index===i){
                        content.html(
                            '<i class="'+arrayData[i].pos+'"></i>' +
                            '<h1>'+arrayData[i].tit+'</h1>' +
                            '<p>'+arrayData[i].content+'</p>' +
                            '<a href="#">立即体验</a>'
                        )
                    }
                });
            },function(){
                content.removeClass('animated fadeInDownBig');
            })
        })
    });
})