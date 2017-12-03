<?php
    include "../../common/server.php";
    header("Access-Control-Allow-Origin: *");
    
    $username = isset($_REQUEST['username']) ? $_REQUEST['username'] : 0;


    if($username){
        $sql = "select * from `order` where user_name= '$username'";
        // echo $sql;
        echo json_encode(query($sql),JSON_UNESCAPED_UNICODE);
    }
?>