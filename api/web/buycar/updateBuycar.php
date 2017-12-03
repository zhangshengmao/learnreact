<?php
/**
 * @Author: Marte
 * @Date:   2017-11-14 21:14:38
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-11-14 21:32:44
 */
    header("Access-Control-Allow-Origin: *");
    include '../../common/connect.php';
    
    $username = isset($_REQUEST['username']) ? $_REQUEST['username'] : '';
    $account = isset($_REQUEST['account']) ? $_REQUEST['account'] : '';
    $list = isset($_REQUEST['list']) ? $_REQUEST['list'] : '';
    $id = isset($_REQUEST['id']) ? $_REQUEST['id'] : '';

    $sql = "update buycar set username='$username',account='$account',list='$list'  where id='$id'";

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