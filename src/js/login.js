// $(document).ready(function(){
//     var $denglu = $('#denglu');
//     var $_username = $('#UserName');
//     var $_password = $('#Password');
//     // console.log($_username);
//     // var username = $_username.val();

    
//     // $denglu.on('click',function(){
//     //     if(username == '' ){
//     //         alert('请输入用户名');
//     //     }
//     //     if(password == '' ){
//     //         alert('请输入密码');
//     //     }
//     //     var reg = /^[a-z][\da-z\-]{5,19}$/i;
//     //     if(!reg.test(username)){
//     //         alert('用户名格式不正确');
//     //         return false;//阻止代码向下执行，阻止默认行为
//     //     }
//     //     var reg = /^\S{1,20}$/i;
//     //     if(!reg.test(password)){
//     //         alert('密码不合法');
//     //         return false;
//     //     }
//     // })

    
//     $_username.on('blur',function(){

//         var username = $_username.val();
//         console.log(username);

//         $.get('http://localhost:1111/api/login.php','username',function (res){
//                 if(res === 'yes'){
//                     alert('用户名可用');
//                 }else if(res === 'no'){
//                     alert('用户名已存在');
//                 }
//         })

        
//     });
// });
document.addEventListener('DOMContentLoaded',function(){
            
    var username = document.querySelector('#UserName');
    var password = document.querySelector('#Password');
    var denglu = document.querySelector('#denglu');


    //     var username = username.value;
    //     var password = password.value;
    // denglu.onclick=function(){
    //     if(username == '' ){
    //         alert('请输入用户名');
    //     }
    //     if(password == '' ){
    //         alert('请输入密码');
    //     }
    //     var reg = /^[a-z][\da-z\-]{5,19}$/i;
    //     if(!reg.test(username)){
    //         alert('用户名格式不正确');
    //         return false;//阻止代码向下执行，阻止默认行为
    //     }
    //     var reg = /^\S{1,20}$/i;
    //     if(!reg.test(password)){
    //         alert('密码不合法');
    //         return false;
    //     }
    // }

    username.onblur = function(){
        // 获取输入的用户名
        var _username = username.value;

        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = ()=>{
            if(xhr.readyState === 4){
                //no,yes
                if(xhr.responseText === 'yes'){
                    alert('用户名可用');
                }else{
                   alert('用户名已存在');
                }
            }
        }

        // get请求传参：利用url参数实现
        xhr.open('get',`http://localhost:1111/api/login.php?username=${_username}`,true);
        xhr.send();
    }
    
})
