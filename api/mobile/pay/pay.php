<?php
    include "../../common/server.php";
    header("Access-Control-Allow-Origin: *");
    
    $order_num = isset($_REQUEST['order_num']) ? $_REQUEST['order_num'] : false;
    $order_status = isset($_REQUEST['order_status']) ? $_REQUEST['order_status'] : false;
    $makesure = isset($_REQUEST['makesure']) ? $_REQUEST['makesure'] : false;


    if($makesure){
        $sql = "update `order` set order_status='$order_status' where order_num='$order_num'";
        if(excute($sql)){
            echo 'true';
        }
    }else if($order_num){
        $sql = "select * from `order` where order_num= '$order_num'";
        echo json_encode(query($sql),JSON_UNESCAPED_UNICODE);
    }

?>