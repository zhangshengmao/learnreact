<?php
    include "../../common/server.php";
    header("Access-Control-Allow-Origin: *");
    $username = isset($_REQUEST['username']) ? $_REQUEST['username'] : 1;
    // $sql ="insert into address (user_name,tel,name,address) values('$username','$obj->tel','$obj->name','$obj->detaddress')";
    $sql = "select * from address where user_name= '$username'";
    echo json_encode(query($sql),JSON_UNESCAPED_UNICODE);

?>