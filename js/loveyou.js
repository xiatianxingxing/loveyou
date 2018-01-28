/**
 * Created by Administrator on 2018/1/27 0027.
 */
$(function() {
    var speed=2000;
    var $key=0;  /* key 是个变量   $Key 也是变量  有些程序员喜欢加$  $num*/
    /*控制图片的播放张数*/

    /*核心原理： 当我们点击一下， 先当前这一张要出去    然后 ++  就是下一张  在淡淡的进来*/
    /*右侧按钮的做法*/


     $(".rightbtn").click(function(event) {
     autoplay();
     });


    /*左测按钮的做法*/

     $(".leftbtn").click(function(event) {
     $(this).siblings("ul").children('li').eq($key).fadeOut(speed);
     $key--;

     $key=$key%$(".xiaoyu ul li").length;   //length  返回长度  就是图片的张数




     $(this).siblings("ul").children('li').eq($key).fadeIn(speed);


     });


    /*添加定时器开始*/
    var timer=setInterval(autoplay, 5000);  /*开始定时器*/
    function autoplay(){
        /*因为定时做的效果，其实就是点击右侧按钮*/
        $(".xiaoyu ul li").eq($key).fadeOut(speed);
        $key++; /* 我们一般  先++  后判断  再 执行*/


        $key=$key%$(".xiaoyu ul li").length;   /*length  返回长度  就是图片的张数*/


        /*console.log($key);*/
        $(".xiaoyu ul li").eq($key).fadeIn(speed);



    }
    $(".xiaoyu").hover(function() {

        clearInterval(timer);  /*清除定时器*/
        timer=null;    /*清空变量*/
    }, function() {

        clearInterval(timer);  /*经验 开启定时器之前，首先先清除*/
        timer=setInterval(autoplay, 5000);   /*开启定时器*/
    });

});