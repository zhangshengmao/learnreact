<?php
    include "../../common/server.php";
    header("Access-Control-Allow-Origin: *");
    $username = isset($_REQUEST['username']) ? $_REQUEST['username'] : 1;
    $GoodsId = isset($_REQUEST['goodsId']) ? $_REQUEST['goodsId'] : 1;
    $str = isset($_REQUEST['str']) ? $_REQUEST['str'] : 1;

    // echo "$username";

    $sql1 = "update users set user_collect='$str' where user_name='$username'";
    if(excute($sql1)){
        $cars=json_decode($GoodsId);
        $arrlength=count($cars);
        $sql = "select * from product where ";
        $num = $arrlength-1;
        for($x=0;$x<$arrlength;$x++){
            if($x==$num){
               $sql = $sql . "id = '$cars[$x]'"; 
            }else{
                $sql = $sql . "id = '$cars[$x]' or ";
            }
        }
        echo json_encode(query($sql),JSON_UNESCAPED_UNICODE);
    }
?>