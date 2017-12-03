<?php
    header("Access-Control-Allow-Origin: *");
    include '../../common/connect.php';
    
    $user_name = isset($_REQUEST['user_name']) ? $_REQUEST['user_name'] : '';
    $user_password = isset($_REQUEST['user_password']) ? $_REQUEST['user_password'] : '';
    $user_gender = isset($_REQUEST['user_gender']) ? $_REQUEST['user_gender'] : '';
    $user_phone = isset($_REQUEST['user_phone']) ? $_REQUEST['user_phone'] : '';
    $user_identity = isset($_REQUEST['user_identity']) ? $_REQUEST['user_identity'] : '';
    $user_account = isset($_REQUEST['user_account']) ? $_REQUEST['user_account'] : '';
    $user_time = isset($_REQUEST['user_time']) ? $_REQUEST['user_time'] : '';

    $id = isset($_REQUEST['id']) ? $_REQUEST['id'] : '';

    $sql = "update user set user_name='$user_name',user_password='$user_password',user_gender='$user_gender',user_account='$user_account',user_phone='$user_phone',user_time ='$user_time' where id='$id'";

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