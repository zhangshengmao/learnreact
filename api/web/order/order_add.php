<?php
	header("Access-Control-Allow-Origin: *");

	include '../../common/connect.php';
	
	$order_num = isset($_REQUEST['order_num']) ? $_REQUEST['order_num'] : '';
	$user_name = isset($_REQUEST['user_name']) ? $_REQUEST['user_name'] : '';
	$user_num = isset($_REQUEST['user_num']) ? $_REQUEST['user_num'] : '';
	$order_address = isset($_REQUEST['order_address']) ? $_REQUEST['order_address'] : '';
	$order_phone = isset($_REQUEST['order_phone']) ? $_REQUEST['order_phone'] : '';
	$order_total_price = isset($_REQUEST['order_total_price']) ? $_REQUEST['order_total_price'] : '';
	$order_date = isset($_REQUEST['order_date']) ? $_REQUEST['order_date'] : '';
	$order_status = isset($_REQUEST['order_status']) ? $_REQUEST['order_status'] : '';
	$order_product = isset($_REQUEST['order_product']) ? $_REQUEST['order_product'] : '';
	$user_password = isset($_REQUEST['user_password']) ? $_REQUEST['user_password'] : '';
	$id = isset($_REQUEST['id']) ? $_REQUEST['id'] : '';




	// 查看用户名是否已经存在

	$sql = "select order_num from `order` where order_num='$order_num'";
	
	
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

		$sql = "insert into `order` (id,order_num,user_name,order_product,order_phone,order_total_price,order_date,order_status,order_address) values('$id','$order_num','$user_name','$order_product','$order_phone','$order_total_price','$order_date','$order_status','$order_address')";

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