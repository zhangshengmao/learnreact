<?php
    include "../../common/server.php";
    header("Access-Control-Allow-Origin: *");
    $addresEdit = isset($_REQUEST['address']) ? $_REQUEST['address'] : 1;
    $username = isset($_REQUEST['username']) ? $_REQUEST['username'] : 1;
    $obj =json_decode($addresEdit);
    $sql ="insert into address (user_name,tel,name,address) values('$username','$obj->tel','$obj->name','$obj->detaddress')";
    // echo "excute($sql)";
    
    if(excute($sql)){
        echo "ok";
    }
    else{
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

?>