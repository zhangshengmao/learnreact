<?php
    header("Access-Control-Allow-Origin: *");
    include '../../common/connect.php';
    
    $user_name = isset($_REQUEST['user_name']) ? $_REQUEST['user_name'] : '';
    $user_password = isset($_REQUEST['user_password']) ? $_REQUEST['user_password'] : '';
    $user_gender = isset($_REQUEST['user_gender']) ? $_REQUEST['user_gender'] : '';
    $user_sign = isset($_REQUEST['user_sign']) ? $_REQUEST['user_sign'] : '';
    $id = isset($_REQUEST['id']) ? $_REQUEST['id'] : '';

    $sql = "update users set user_name='$user_name',user_password='$user_password',user_gender='$user_gender',user_sign='$user_sign'  where id='$id'";

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