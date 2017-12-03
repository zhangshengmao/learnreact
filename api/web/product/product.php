<?php
    //允许所有域名发起的跨域请求，可以使用通配符 *
    header("Access-Control-Allow-Origin: *");
    // 引入其他文件
    include '../../common/connect.php';

    // 编写查询sql语句
    $sql = 'select * from product';
    // 利用sql语句查询数据库
    // 查询结果集
    $result = $conn->query($sql);


    // 使用查询结果集
    $row = $result->fetch_all(MYSQLI_ASSOC);


    echo json_encode($row,JSON_UNESCAPED_UNICODE);


?>