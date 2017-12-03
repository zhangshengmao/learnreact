<?php
    include "../../common/server.php";
    header("Access-Control-Allow-Origin: *");
    $goodsId = isset($_REQUEST['goodsId']) ? $_REQUEST['goodsId'] : 1;
   
    $cars=json_decode($goodsId);
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

?>