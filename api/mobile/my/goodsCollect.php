<?php

    include "../../common/server.php";
    header("Access-Control-Allow-Origin: *");
    $username = isset($_REQUEST['username']) ? $_REQUEST['username'] : 1;
    $GoodsId = isset($_REQUEST['goodsId']) ? $_REQUEST['goodsId'] : 1;
    // echo "$username";


//  echo $cont;
    $sql1 = "update users set user_collect='$GoodsId' where user_name='$username'";

    if(excute($sql1)){
        echo "ok";
    }

?>
