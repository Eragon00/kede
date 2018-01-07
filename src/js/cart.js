/* 
* @Author: Marte
* @Date:   2018-01-05 10:56:50
* @Last Modified by:   Marte
* @Last Modified time: 2018-01-07 22:59:09
*/

$(document).ready(function(){
    var $cart_content = $('.cart_content');
    // console.log($cart_content);
    var $settlementRealTotalMoney = $('#settlementRealTotalMoney');
    var $btnGoToSubmit = $('#btnGoToSubmit');

    var carlist;

    var cookies = document.cookie;
    // console.log(cookies);
    if(cookies.length){
        cookies = cookies.split('; ');
        cookies.forEach(function(item){
            var arr = item.split('=');
            if(arr[0] === 'carlist'){
                carlist = JSON.parse(arr[1]);
            }
        })
    }

    console.log(carlist);
    var total = 0;
    var allqty = 0;
    var $ul = $('<ul/>');
    $ul.html(carlist.map(function(goods){
        total += goods.price*goods.qty;
        allqty += goods.qty;
        return `
            <li data-id="${goods.id}">
                <a href="#">
                    <img src="${goods.imgurl}">
                    <span class="title">${goods.title}</span>
                </a>
                <span class="guang"></span>
                <span class="jian">-</span>
                <span class="shu">${goods.qty}</span>
                <span class="jia">+</span>
                <span class="danjia">￥${goods.price}</span>
                <span class="xiaoji">￥${goods.price*goods.qty}</span>
                <span class="caozuo">&times;</span>
            </li>
        `
    }).join(''));

    $cart_content.children().hide();
    $ul.appendTo($cart_content);

    $settlementRealTotalMoney.html(total);
    var $TotalMoney = $('#TotalMoney');
    $TotalMoney.html(total);
    var $Quantity = $('#Quantity');
    $Quantity.html(allqty);

    var $caozuo = $('.caozuo');
    $caozuo.on('click',function(){
        var $currentLi = $(this).closest('li');
        // console.log($currentLi);
        var guid = $currentLi.attr('data-id');
        // console.log(guid);
        for(var i=0;i<carlist.length;i++){
            if(carlist[i].id === guid){
                carlist.splice(i,1);
                break;
            }
        }
        document.cookie = 'carlist=' + JSON.stringify(carlist);
        $currentLi.closest().remove($currentLi);

    })
});