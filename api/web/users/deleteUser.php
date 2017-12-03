<?php
    // 引入其他文件
    header("Access-Control-Allow-Origin: *");
    include '../../common/connect.php';
    //允许所有域名发起的跨域请求，可以使用通配符 *
    $id = isset($_REQUEST['id']) ? $_REQUEST['id'] : '';
    // 编写查询sql语句
    $sql = "delete from users where id='$id'";
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