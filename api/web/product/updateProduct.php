<?php
/**
 * @Author: Marte
 * @Date:   2017-11-14 21:14:38
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-11-14 21:32:44
 */
    header("Access-Control-Allow-Origin: *");
    include '../../common/connect.php';
    
    $name = isset($_REQUEST['product_name']) ? $_REQUEST['product_name'] : '';
    $type = isset($_REQUEST['product_type']) ? $_REQUEST['product_type'] : '';
    $color = isset($_REQUEST['product_color']) ? $_REQUEST['product_color'] : '';
    $price = isset($_REQUEST['product_price']) ? $_REQUEST['product_price'] : '';
    $id = isset($_REQUEST['id']) ? $_REQUEST['id'] : '';

    $sql = "update product set product_name='$name',product_type='$type',product_color='$color',product_price='$price'  where id='$id'";

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