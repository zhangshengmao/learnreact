<?php
    include "../../common/server.php";
    header("Access-Control-Allow-Origin: *");
    $id = isset($_REQUEST['id']) ? $_REQUEST['id'] : 1;
    $username = isset($_REQUEST['username']) ? $_REQUEST['username'] : 1;
    
    $sql = "delete from address where id = $id";
    if(excute($sql)){
        $sql = "select * from address where user_name= '$username'";
        echo json_encode(query($sql),JSON_UNESCAPED_UNICODE);
    }

?>