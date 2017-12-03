<?php
	include "../../common/server.php";
    header("Access-Control-Allow-Origin: *");

    $sql = "select * from sort";
    $res = query($sql);
    echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>