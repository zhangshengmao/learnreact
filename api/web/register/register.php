<?php
	header("Access-Control-Allow-Origin: *");

	include '../../common/connect.php';
	
	$username = isset($_REQUEST['user_name']) ? $_REQUEST['user_name'] : '';
	$password = isset($_REQUEST['user_password']) ? $_REQUEST['user_password'] : '123456';
	$gender = isset($_REQUEST['user_gender']) ? $_REQUEST['user_gender'] : '';
	$phone = isset($_REQUEST['user_phone']) ? $_REQUEST['user_phone'] : '';
	$account = isset($_REQUEST['user_account']) ? $_REQUEST['user_account'] : '';
	$identify = isset($_REQUEST['user_identify']) ? $_REQUEST['user_identify'] : '';
	$arr=rand(1,1000);
	$id = isset($_REQUEST['id']) ? $_REQUEST['id'] : $arr;

	// 查看用户名是否已经存在
	$sql = "select user_name from user where user_name='$username'";
	

	$result = $conn->query($sql);
	if($result->num_rows>0){
		echo "fail";
	}else{
		// 密码md5加密
		// md5()
		// echo "$password <br>";
		$password = md5($password);
		// $password = md5($password);
		// echo "$password <br>";

		
			// password_hash()     //对密码加密.
			// 	* PASSWORD_DEFAULT：Bcrypt//加密算法，字段超过60个字符长度，
			// 	* PASSWORD_BCRYPT：//字符串长度总为60。
			// 	* PASSWORD_DEFAULT：Bcrypt加密算法，字段超过60个字符长度，
			// 	* PASSWORD_BCRYPT：字符串长度总为60。
			// password_verify()    //验证已经加密的密码，检验其hash字串是否一致.
		 
		// $password = password_hash($password,PASSWORD_DEFAULT);

		$sql = "insert into user (id,user_name,user_password,user_gender,user_phone,user_identify,user_account) values ('$id','$username','$password','$gender','$phone','$identify','$account')";

		// 获取查询结果
		$result = $conn->query($sql);

		if ($result) {
		    echo "ok";
		} else {
		    echo "Error: " . $sql . "<br>" . $conn->error;
		}
	}

	
	

	// 释放查询内存(销毁)
	// $result->free();

	//关闭连接
	$conn->close();
?>