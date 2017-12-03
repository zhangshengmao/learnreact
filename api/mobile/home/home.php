<?php
    header("Access-Control-Allow-Origin: *");
    include "../../common/server.php";

    $sqlDisc = "select * from product order by product_discount*1 limit 0,3";  
    $resDisc = query($sqlDisc);
    
    $sqlSoldOut = "select * from product order by product_sold_out*1 desc limit 0,3";  
    $resSoldOut = query($sqlSoldOut);

    $sqlUpTime = "select * from product order by product_up_time*1 desc limit 0,4";  
    $resUpTime = query($sqlUpTime);
    
    $sqlLimit = "select * from product order by id*1 limit 0,8";  
    $resLimit = query($sqlLimit);

    $res = array(
        "disc" => $resDisc,
        "sold" => $resSoldOut,
        "time" => $resUpTime,
        "limit" => $resLimit
    );
    
    echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>