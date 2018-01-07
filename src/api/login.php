<?php

    $username = $_GET['username'];


    $userlist = array('laoxie','lemon','张三','李四','王老五','奥巴马','习大大','eragon');

    if(in_array($username,$userlist)){
        echo "no";
    }else{
        echo "yes";
    }
    // var_dump($username);

?>