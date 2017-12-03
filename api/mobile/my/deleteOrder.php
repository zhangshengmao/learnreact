<?php
    include "../../common/server.php";
    header("Access-Control-Allow-Origin: *");
    
    $order_num = isset($_REQUEST['order_num']) ? $_REQUEST['order_num'] : 0;



    $sql = "delete from `order` where order_num= '$order_num'";
        // echo $sql;
    if(excute($sql)){
        echo "ok";
    }
    else{
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
?>