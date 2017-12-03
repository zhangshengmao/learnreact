<?php
	include "../../common/server.php";
    header("Access-Control-Allow-Origin: *");
	$type = isset($_GET['type'])?$_GET['type']:'getDetails';
	$value = isset($_GET['value'])?$_GET['value']:'1';
	
	switch($type){
		case "getDetails":
			$sql = "select * from product where id = '$value'";
			break;
		case "listType":
			$sql = "select * from product where product_type = '$value'";
			break;
		case "listName":
			$sql = "select * from product where product_name like '%$value%'";
			break;
	} 
    
    $res = query($sql);
    echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>