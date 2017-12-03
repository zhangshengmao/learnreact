<?php
    include "../../common/server.php";
    header("Access-Control-Allow-Origin: *");
    
    $order_num = isset($_REQUEST['order_num']) ? $_REQUEST['order_num'] : 1;
    $user_name = isset($_REQUEST['user_name']) ? $_REQUEST['user_name'] : 1;
    $order_product = isset($_REQUEST['order_product']) ? $_REQUEST['order_product'] : 1;
    $order_phone = isset($_REQUEST['order_phone']) ? $_REQUEST['order_phone'] : 1; 
    $order_total_price = isset($_REQUEST['order_total_price']) ? $_REQUEST['order_total_price'] : 1; 
    $order_date = isset($_REQUEST['order_date']) ? $_REQUEST['order_date'] : 1; 
    $order_status = isset($_REQUEST['order_status']) ? $_REQUEST['order_status'] : 1;
    $order_address = isset($_REQUEST['order_address']) ? $_REQUEST['order_address'] : 1; 
    $buycarLi = isset($_REQUEST['buycarLi']) ? $_REQUEST['buycarLi'] : false; 

    $sql = "insert into `order` (
            order_num,
            user_name,
            order_product,order_phone, 
            order_total_price,order_date,
            order_status,
            order_address) 
            values('$order_num',
            '$user_name',
            '$order_product',
            '$order_phone',
            '$order_total_price',
            '$order_date',
            '$order_status',
            '$order_address')";
    
    if(excute($sql)){
        if($buycarLi){
            $sql = "update buycar set list='$buycarLi' where username='$user_name'";
            if(excute($sql)){
                echo "true1";
            }else{
                echo "false1";
            }
        }else{
            // echo "1";
           $sql = "DELETE FROM buycar where username='$user_name'";
            if(excute($sql)){
                echo "true2";
            }else{
                echo "flase2";
            }            
        }
    }else{
        echo "false";
    } 
    
?>