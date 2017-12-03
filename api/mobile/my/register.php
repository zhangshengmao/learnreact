<?php
    header("Access-Control-Allow-Origin: *");
    include "../../common/server.php";
    $username = isset($_REQUEST['username']) ? $_REQUEST['username'] : 1;
    $password = isset($_REQUEST['password']) ? $_REQUEST['password'] : 1;
    $tel = isset($_REQUEST['tel']) ? $_REQUEST['tel'] : 1;

    $user_sign = isset($_REQUEST['user_sign']) ? $_REQUEST['user_sign'] : '快去设置你的个性签名吧！';
    $user_collect = isset($_REQUEST['user_collect']) ? $_REQUEST['user_collect'] : 'false';
    $user_gender = isset($_REQUEST['user_gender']) ? $_REQUEST['user_gender'] : '保密';
    $user_address = isset($_REQUEST['user_address']) ? $_REQUEST['user_address'] :1;
    $head_image = isset($_REQUEST['head_image']) ? $_REQUEST['head_image'] : 'setheader.jpg';
    $user_order = isset($_REQUEST['user_order']) ? $_REQUEST['user_order'] : '您还没有订单呢！';
    $user_account = isset($_REQUEST['user_account']) ? $_REQUEST['user_account'] : "big-baby".$tel;


    $sql = "select user_name from users where user_name= '$username'";
    
    if(sizeof(query($sql))>0){
        echo "false";
    }
    else{
        // $password = md5($password);是否对密码加密
        $sql = "insert into users (user_name,user_password,user_phone,user_sign,user_collect,user_gender,head_image,user_order,user_account) values
        ('$username','$password','$tel','$user_sign','$user_collect','$user_gender','$head_image','$user_order','$user_account')";
        if (excute($sql)) {
            echo "ok";
        }
        else{
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
?>