<?php
	header("Access-Control-Allow-Origin: *");

	include '../../common/connect.php';
	
	// $user_address = isset($_REQUEST['user_address']) ? $_REQUEST['user_address'] : '';
	// $user_sign = isset($_REQUEST['user_sign']) ? $_REQUEST['user_sign'] : '';
	// $user_collect = isset($_REQUEST['user_collect']) ? $_REQUEST['user_collect'] : '';
	// $head_image = isset($_REQUEST['head_image']) ? $_REQUEST['head_image'] : '';
	// $user_order = isset($_REQUEST['user_order']) ? $_REQUEST['user_order'] : '';
	// $user_id = isset($_REQUEST['user_id']) ? $_REQUEST['user_id'] : '';
	$user_name = isset($_REQUEST['user_name']) ? $_REQUEST['user_name'] : '';
	$user_gender = isset($_REQUEST['user_gender']) ? $_REQUEST['user_gender'] : '';
	$user_phone = isset($_REQUEST['user_phone']) ? $_REQUEST['user_phone'] : '';
	$user_account = isset($_REQUEST['user_account']) ? $_REQUEST['user_account'] : '';
	$user_password = isset($_REQUEST['user_password']) ? $_REQUEST['user_password'] : '';
	$user_identify = isset($_REQUEST['user_identify']) ? $_REQUEST['user_identify'] : '';
	$user_time = isset($_REQUEST['user_time']) ? $_REQUEST['user_time'] : date("Y/m/d h:i:s");
	$arr=rand(1,1000);
	$id = isset($_REQUEST['id']) ? $_REQUEST['id'] : $arr;





	// 查看用户名是否已经存在

	$sql = "select user_name from user where user_name='$user_name'";
	
	
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

		$sql = "insert into user (id,user_name,user_password,user_phone,user_gender,user_identify,user_account,user_time) values('$id','$user_name','$user_password','$user_phone','$user_gender','$user_identify','$user_account','$user_time')";

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