/* 
* @Author: Marte
* @Date:   2018-01-04 10:17:40
* @Last Modified by:   Marte
* @Last Modified time: 2018-01-06 20:36:19
*/

$(document).ready(function(){
    $brand_tree = $('.brand_tree');
    $lis = $brand_tree.children('li');
    // console.log($lis);
    $brand_tree.on('click','li',function(){
        $ul = $(this).find('ul');
        console.log($ul);
        // $height = $ul.height();
        $height = ($ul.height() > 0 ? 0 : 208);
        // console.log($height);
        $ul.animate({height:$height});
    })

    $classify_h = $('.classify_h');
    $classify_more_btn = $('.classify_more_btn');
    // console.log($trs);
    $classify_more_btn.on('click',$classify_h,function(){
        $height = ($classify_h.height() > 60 ? 60 : 210);
        // console.log($height);
        $classify_h.animate({height:$height});
    })




    var $daja = $('.daja');
    var $dajiatitle = $('.dajiatitle')
    var $status = [200,304];
    var $dajiaxhr = new XMLHttpRequest();
    $dajiaxhr.onload = function(){
        if($status.includes($dajiaxhr.status)){
            var $data = JSON.parse($dajiaxhr.responseText).slice(0,4);
            // console.log($data);
            var $dajia_ul = $('<ul/>');
            // console.log($dajia_ul);
            $dajia_ul.html($data.map(function(item){
                return `
                    <li class="dajia_gs">
                        <a href="#">
                            <img class="dajia_gs_img" src="${item.imgurl}">
                            <p class="dajia_gs_price">￥${item.price}</p>
                            <p class="dajia_gs_name">${item.title}</p>
                            <p class="dajia_gs_sales">${item.discounts}</p>
                        </a>
                    </li>
                `
            }).join(''));
            // $dajia_ul.appendTo($daja);
            $dajiatitle.after($dajia_ul);
        }
    };
    $dajiaxhr.open('get','../api/goodlist.php',true);
    $dajiaxhr.send();




    var $product_list = $('.product_list');
    var $status = [200,304];
    var $xhr = new XMLHttpRequest();
    $xhr.onload = function(){
        if($status.includes($xhr.status)){
            var $data = JSON.parse($xhr.responseText);
            // console.log($data);
            var $ul = $('<ul/>');
            $ul.html($data.map(function(item){
                return `
                    <li class="goods" data-id="${item.id}">
                        <a href="#">
                            <img class="goods_img" src="${item.imgurl}">
                            <p class="goods_price">￥${item.price}</p>
                            <p class="goods_name">${item.title}</p>
                            <p class="goods_sales">${item.discounts}</p>
                        </a>
                    </li>
                `
            }).join(''));
            $ul.appendTo($product_list);

//传参
            $product_list.on('click','ul li',function(){
                var id = $(this).attr('data-id')
                var params = '?';
                console.log($data)
                $($data).each(function (i,item){
                    if(item.id == id){
                        for(var attr in item){
                            params = params + attr + "=" +  encodeURI(item[attr]) + "$";
                        }
                        params = params.slice(0,-1);
                        location.href = 'detail.html' + params;
                    }
                })
            })
            // $data.map(function (item){
            //     $product_list.on('click','ul li',function(){
            //         // 遍历对象，把对象转换url参数格式 encodeURI转码
            //         var params = '?';
            //         for(var attr in $data){
            //             params += attr + '=' + encodeURI($data[attr]) + '&'
            //         }
            //         // alert(params)

            //         // 删除多余的&
            //         params = params.slice(0,-1);
                    

            //         // 跳转页面
            //         location.href = 'detail.html' + params
            //     })
            // })


        }
    };
    $xhr.open('get','../api/goodlist.php',true);
    $xhr.send();


    
});