<?php
    include "../../common/server.php";
    header("Access-Control-Allow-Origin: *");
    
    $username = isset($_REQUEST['username']) ? $_REQUEST['username'] : false;
    $list = isset($_REQUEST['list']) ? $_REQUEST['list'] : false;
    $account = isset($_REQUEST['account']) ? $_REQUEST['account'] : false;


    if($account){
        $sql = "update buycar set list='$list',account='$account' where username='$username'";
        if(excute($sql)){
            $sql = "select * from buycar where username= '$username'";
            echo json_encode(query($sql),JSON_UNESCAPED_UNICODE);
        }   
    }else if($list){
        // echo '1';
        $sql = "update buycar set list='$list' where username='$username'";
        if(excute($sql)){
            $sql = "select * from buycar where username= '$username'";
            if(sizeof(query($sql))>0){
                echo json_encode(query($sql),JSON_UNESCAPED_UNICODE);
            }else{
                $sql = "insert into buycar (username,list) values('$username','$list')";
                echo json_encode(query($sql),JSON_UNESCAPED_UNICODE);
            }
        }
    }else if($username){
        $sql = "select * from buycar where username= '$username'";
        echo json_encode(query($sql),JSON_UNESCAPED_UNICODE);
    }



?>