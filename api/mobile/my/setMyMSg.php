<?php
    include "../../common/server.php";
    header("Access-Control-Allow-Origin: *");
    $username = isset($_REQUEST['username']) ? $_REQUEST['username'] : 1;
    $addresEdit = isset($_REQUEST['address']) ? $_REQUEST['address'] : 1;
    // "select user_name from users where user_name= '$username'"

        $sql = "select * from users where user_name = '$username'";
        $obj = query($sql)[0];
         $res = array(
             'username'=>$obj->user_name,
             'gender'=>$obj->user_gender,
             'account'=>$obj->user_account,
             'sign'=>$obj->user_sign,
             'address'=>$obj->user_address,
             'handimgs'=>$obj->head_image,
         );
        echo json_encode($res,JSON_UNESCAPED_UNICODE);

    // echo "$username";
?>