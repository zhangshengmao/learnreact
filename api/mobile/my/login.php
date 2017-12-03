<?php
    include "../../common/server.php";
    header("Access-Control-Allow-Origin: *");
    $username = isset($_REQUEST['username']) ? $_REQUEST['username'] : 1;
    $password = isset($_REQUEST['password']) ? $_REQUEST['password'] : 1;
    $api_token = isset($_REQUEST['token']) ? $_REQUEST['token'] : false;

    
    if(!$api_token){
        $sql = "select user_name from users where user_name= '$username'";
        if(sizeof(query($sql))<=0){
            $res = array(
                'start'=>'用户不存在',
            );
            echo json_encode($res,JSON_UNESCAPED_UNICODE);
        }else{
            $sql1 = "select * from users where user_name= '$username' and user_password='$password'";
            if(sizeof(query($sql1))<=0){
                $res = array(
                    'start'=>'密码错误',
                );
                echo json_encode($res,JSON_UNESCAPED_UNICODE);
            }else if(sizeof(query($sql1))>0){
                // echo json_encode(query($sql1)[0]->user_sign,JSON_UNESCAPED_UNICODE);

                $api_token_server = md5(date('Y-m-d', time()) .  'secret' . $username);
                $time = time()+604800;
                $sql = "update users set user_time='$time' where user_name='$username'";

                if(excute($sql)){
                    $res = array(
                        'token'=>$api_token_server,
                        'start'=>excute($sql),
                        'username'=>$username,
                        'sign'=>query($sql1)[0]->user_sign,
                        'handimgs'=>query($sql1)[0]->head_image,
                        'tel'=>query($sql1)[0]->user_phone,
                        'user_address'=>query($sql1)[0]->user_address,
                        'user_collect'=>query($sql1)[0]->user_collect,
                    );
                    echo json_encode($res,JSON_UNESCAPED_UNICODE);
                }else{
                    echo '发生错误';
                }
            }
        }
    }else{
        $username = json_decode($api_token)->username;
        $sql1 = "select * from users where user_name= '$username'";
        $time = query($sql1)[0]->user_time;
        if($time>= time()){
            $time = time()+604800;
            $sql = "update users set user_time='$time' where user_name='$username'";
            $res = array(
                'token'=>md5(date('Y-m-d', time()) .  'secret' . $username),
                'start'=>excute($sql),
                'username'=>$username,
                'sign'=>query($sql1)[0]->user_sign,
                'handimgs'=>query($sql1)[0]->head_image,
                'tel'=>query($sql1)[0]->user_phone,
                'user_address'=>query($sql1)[0]->user_address,
                'user_collect'=>query($sql1)[0]->user_collect,
            );
            echo json_encode($res,JSON_UNESCAPED_UNICODE);
        }else{
            echo "false";
        }

    }



// 方法二

//（1）下面是用户登陆时把token插入数据库的代码
// $logininfo['token'] = appuser::settoken();
// $time_out = strtotime("+7 days");
// db::setByPk('u_adver', array('token1' => $logininfo['token'], 'time_out' => $time_out), $logininfo['id']);


// //（2）下面是生成token方法代码
//     public static function settoken()
//     {
//         $str = md5(uniqid(md5(microtime(true)),true));  //生成一个不会重复的字符串
//         $str = sha1($str);  //加密
//         return $str;
//     }

// //（3）下面是每个接口都必须调用的token验证代码，验证具体实现是在（4）
// $args['token'] = $_POST['token'];
// $tokencheck = appuser::checktokens($args['token'], 'u_adver');
//         if ($tokencheck != 90001)
//         {
//             $res['msg_code'] = $tokencheck;
//             v_json($res);
//         }


// // （4）token验证方法，db::是数据库操作类，这里设置是token如果七天没被调用则需要重新登陆（也就是说用户7天没有操作APP则需要重新登陆），如果某个接口被调用，则会重新刷新过期时间
//     public static function checktokens($token, $table)
//     {
//         $res = db::getOneForFields($table, 'time_out', 'token1 = ?', array($token));
//         if (!empty($res))
//         {
//             if (time() - $res['time_out'] > 0) 
//             {
//                 return 90003;  //token长时间未使用而过期，需重新登陆
//             }
//             $new_time_out = time() + 604800;//604800是七天
//             if (db::setWhere($table, array('time_out' => $new_time_out), 'token1 = ?', array($token)))
//             {
//                 return 90001;  //token验证成功，time_out刷新成功，可以获取接口信息
//             }
//     }
//         }
//         return 90002;  //token错误验证失败
?>
