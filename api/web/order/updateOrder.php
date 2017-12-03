<?php
    header("Access-Control-Allow-Origin: *");
    include '../../common/connect.php';
    
    $user_name = isset($_REQUEST['user_name']) ? $_REQUEST['user_name'] : '';
    $order_num = isset($_REQUEST['order_num']) ? $_REQUEST['order_num'] : '';
    $order_phone = isset($_REQUEST['order_phone']) ? $_REQUEST['order_phone'] : '';
    $order_status = isset($_REQUEST['order_status']) ? $_REQUEST['order_status'] : '';
    $order_address = isset($_REQUEST['order_address']) ? $_REQUEST['order_address'] : '';
    $order_total_price = isset($_REQUEST['order_total_price']) ? $_REQUEST['order_total_price'] : '';

    $id = isset($_REQUEST['id']) ? $_REQUEST['id'] : '';

    $sql = "update user set user_name='$user_name',user_password='$user_password',user_gender='$user_gender',user_sign='$user_sign'  where id='$id'";

    echo $sql;
    // 利用sql语句查询数据库
    // 查询结果集
    $result = $conn->query($sql);


    if ($result) {
        echo "ok";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

?>