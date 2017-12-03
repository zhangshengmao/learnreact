<?php
    include "../../common/server.php";
    header("Access-Control-Allow-Origin: *");
    $username = isset($_REQUEST['username']) ? $_REQUEST['username'] : 1;
    $newpassword = isset($_REQUEST['newpas']) ? $_REQUEST['newpas'] : false;
    $wornpassword = isset($_REQUEST['wornpas']) ? $_REQUEST['wornpas'] : false;
    $gender = isset($_REQUEST['gender']) ? $_REQUEST['gender'] : false;
    $signCont = isset($_REQUEST['signCont']) ? $_REQUEST['signCont'] : false;

    $newtel = isset($_REQUEST['newtel']) ? $_REQUEST['newtel'] : false;
    if($wornpassword){
        $sql = "select * from users where user_name= '$username' and user_password='$wornpassword'";
        if(sizeof(query($sql))>0){
            $sql = "update users set user_password='$newpassword' where user_name='$username'";
            echo excute($sql);
        }
    }else if($signCont){
        $sql = "update users set user_sign='$signCont' where user_name='$username'";
        echo json_encode(excute($sql),JSON_UNESCAPED_UNICODE);
    }else if(){
        $sql = "update users set user_phone='$newtel' where user_name='$username'";
        echo json_encode(excute($sql),JSON_UNESCAPED_UNICODE);
    }
    
?>