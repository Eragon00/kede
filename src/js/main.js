/* 
* @Author: Marte
* @Date:   2018-01-02 17:11:29
* @Last Modified by:   Marte
* @Last Modified time: 2018-01-06 18:08:08
*/

$(document).ready(function(){

    var $hot_r = $('.hot_r');
    var $hot_rItem = $hot_r.find('.tis div');
    var $hot_rContent = $hot_r.find('ul');
    // console.log($hot_rItem);
    $hot_rItem.first().addClass('active');
    $hot_rContent.slice(1).hide();
    $hot_r.on('mouseover','.tis div',function(){
        // console.log($(this));
        $(this).addClass('active').siblings().removeClass('active');
        var idx = $(this).index();
        $hot_rContent.eq(idx).show().siblings().hide();
    });

    
    var $_f_l_ban = $('._f_l_ban');
    // console.log($_f_l_ban);
    $('._f_l_ban').ljtCarousel({
        width:210,
        height:360,
        imgs:['../img/1f_left1.jpg','../img/1f_left2.jpg'],
        buttons:true
    });


    var mapfn = function(item){
        return `
            <li class="_f_item">
                <a href="#">
                    <img class="_f_item_img" src="${item.imgurl}">
                    <p class="_f_item_price">￥${item.price}</p>
                    <p class="_f_item_name">${item.title}</p>
                    <p class="_f_item_sales">${item.discounts}</p>
                </a>
            </li>
        `
    }


    var $ms= $('<ul/>');
    $ms.addClass('ms');
    var $zdm =$('<ul/>');
    $zdm.addClass('zdm');
    $.get('./api/1f.php',function (res){
        console.log(res);
        return $ms.html(res.slice(0,5).map(mapfn).join(''))
            +   $zdm.html(res.slice(5,10).map(mapfn).join(''));
    },'json');
    $ms.appendTo('.msr');
    $zdm.appendTo('.msr');


    var $msl = $('.msl');
    var $msl_t = $msl.find('div a');
    console.log($msl_t);
    var $msl_n = $('.msr ul');
    $msl_t.first().addClass('act');
    $msl_n.slice(1).hide();
    $msl.on('mouseover','div a',function(){
        $(this).addClass('act').siblings().removeClass('act');
        var idx = $(this).index();
        // console.log(idx);
        $msl_n.eq(idx).show().siblings().hide();
    })





    var $_1f_r = $('._1f_r');
    var $status = [200,304];
    var $xhr = new XMLHttpRequest();
    $xhr.onload = function(){
        if($status.includes($xhr.status)){
            var $data = JSON.parse($xhr.responseText);
            console.log($data);

            var $ul1 = $('<ul/>');
            $ul1.html($data.slice(0,10).map(mapfn).join(''));
            $ul1.appendTo($_1f_r);
            var $ul2 = $('<ul/>');
            $ul2.html($data.slice(10,20).map(mapfn).join(''));
            $ul2.appendTo($('._2f_r'));
            var $ul3 = $('<ul/>');
            $ul3.html($data.slice(10,20).map(mapfn).join(''));
            $ul3.appendTo($('._3f_r'));
            var $ul4 = $('<ul/>');
            $ul4.html($data.slice(10,20).map(mapfn).join(''));
            $ul4.appendTo($('._4f_r'));
            var $ul5 = $('<ul/>');
            $ul5.html($data.slice(10,20).map(mapfn).join(''));
            $ul5.appendTo($('._5f_r'));


        }
    };
    $xhr.open('get','./api/1f.php',true);
    $xhr.send();



    var $_f_r_ban = $('<div/>');
    $_f_r_ban.appendTo($_1f_r);
    $_f_r_ban.addClass('_f_r_ban');
    // console.log($_f_l_ban);
    $('._f_r_ban').ljtCarousel({
        width:490,
        height:240,
        imgs:['../img/1f_ban1.jpg','../img/1f_ban2.jpg'],
        buttons:true
    });

});