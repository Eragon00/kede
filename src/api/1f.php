<?php
    $id = isset($_GET['id']) ? $_GET['id'] : null;
    $url = 'data/1f.json';
    $file = fopen($url,'r');
    $content = fread($file,filesize($url));
    $res = json_decode($content);
    fclose($file);
    echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>
