<?php
	
	/**
	 * 连接数据库函数
	 */
	function connect(){
		$severname = 'localhost:3306';
		$username = 'root';
		$password = '';
		$dbname = 'big_baby';
		$conn = new mysqli($severname,$username,$password,$dbname);
		if($conn->connect_error){
		    die('连接失败：' . $conn->connect_error);
		}
		$conn->set_charset('utf8');
		return $conn;
	}


	/**
	 * 查询函数
	 */
	function query($sql){
	    //初始化连接
	    $conn = connect();
	    //执行 sql 脚本，也叫数据库脚本，返回一个结果集（对象）
	    $result = mysqli_query($conn, $sql);
	    //定义了一个数组
	    $jsonData = array();           
	    if ($result)
		    {
		        //在结果集中获取对象(逐行获取)
		        while ($obj = mysqli_fetch_object($result))
		        {
		            //$jsonData.push($obj)
		            $jsonData[] = $obj;
		            // print_r($obj->email);
		        }   
		        // 释放结果集
		        mysqli_free_result($result);
		    } 
	    //关闭连接
	    mysqli_close($conn);   
	    return $jsonData;
	}

	//执行逻辑语句 更新，插入，修改
	function excute($sql){
	    //初始化连接
	    $conn = connect();
	    //执行 sql 脚本，也叫数据库脚本，返回一个结果集（对象）
	    //返回一个布尔值，true|false，不用释放
	    $result = mysqli_query($conn,$sql);
	    //关闭连接
	    mysqli_close($conn);
	    return $result;
	}
?>