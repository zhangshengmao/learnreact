<?php
	header("Access-Control-Allow-Origin: *");

	include '../../common/connect.php';
	
	$id = isset($_REQUEST['id']) ? $_REQUEST['id'] : '';
	$product_name = isset($_REQUEST['product_name']) ? $_REQUEST['product_name'] : '';
	$product_type = isset($_REQUEST['product_type']) ? $_REQUEST['product_type'] : '';
	$product_origin_price = isset($_REQUEST['product_origin_price']) ? $_REQUEST['product_origin_price'] : '';
	$product_discount = isset($_REQUEST['product_discount']) ? $_REQUEST['product_discount'] : '';
	$product_inventory = isset($_REQUEST['product_inventory']) ? $_REQUEST['product_inventory'] : '';
	$product_description = isset($_REQUEST['product_description']) ? $_REQUEST['product_description'] : '';
	$product_image = isset($_REQUEST['product_image']) ? $_REQUEST['product_image'] : '';
	$product_rate = isset($_REQUEST['product_rate']) ? $_REQUEST['product_rate'] : '';
	$product_spec = isset($_REQUEST['product_spec']) ? $_REQUEST['product_spec'] : '';
	$product_color = isset($_REQUEST['product_color']) ? $_REQUEST['product_color'] : '';
	$product_brand = isset($_REQUEST['product_brand']) ? $_REQUEST['product_brand'] : '';
	$product_sold_out = isset($_REQUEST['product_sold_out']) ? $_REQUEST['product_sold_out'] : '';




	// 查看用户名是否已经存在

	$sql = "select product_name from product where product_name='$product_name'";
	
	
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

		$sql = "insert into product (id,product_name,product_type,product_origin_price,product_discount,product_inventory,product_description,product_image,product_rate,product_spec,product_color,product_brand,product_sold_out) values('$id','$product_name','$product_type','$product_origin_price','$product_discount','$product_inventory','$product_description','$product_image','$product_rate','$product_spec','$product_color','$product_brand','$product_sold_out')";

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