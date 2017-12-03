<?php

	header("Access-Control-Allow-Origin: *");
	include '../../common/connect.php';
	
	$account = isset($_REQUEST['user_account']) ? $_REQUEST['user_account'] : '';
	$password = isset($_REQUEST['user_password']) ? $_REQUEST['user_password'] : '';

	// 密码md5加密
	$password = md5($password);

	$sql = "select * from user where user_account='$account' and user_password='$password' and user_identify='管理员'";

	// 获取查询结果
	$result = $conn->query($sql);

	$row = $result->fetch_row();

	// print_r($row[0]);
	if($row[0]){
		echo 'yes';
	}else{
		echo 'no';
	}
	

	// 释放查询内存(销毁)
	$result->free();

	//关闭连接
	$conn->close();
?>