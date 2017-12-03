/*
Navicat MySQL Data Transfer

Source Server         : big_baby
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : big_baby

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-11-18 09:08:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `user_id` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `user_gender` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `user_phone` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `user_sign` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `user_collect` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `user_address` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `head_image` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `user_order` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `user_account` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `user_password` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `user_time` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `user_identify` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38227 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'laughing', '000001', 'male', '188888888', '天降大任。。。', ',17,11,1,19,18,32,16', '北京市紫禁城', 'setheader.jpg', null, '666666', '2', '1511513447', null);
INSERT INTO `users` VALUES ('3', '黄杏连', '', '女', '18877582889', null, null, '广州', null, null, '123', 'e10adc3949ba59abbe56e057f20f883e', '33', '管理员');
INSERT INTO `users` VALUES ('380', 'lfq123', null, '保密', '15707974435', '快去设置你的个性签名吧！', 'false', 'Array', 'setheader.jpg', '您还没有订单呢！', 'big-baby15707974435', 'lfq123', '1511442919', '用户');
INSERT INTO `users` VALUES ('381', 'erwerwe', null, '保密', '18898329078', '快去设置你的个性签名吧！', 'false', '1', '', '您还没有订单呢！', 'big-baby18898329078', 'rewrewrewr', '43234', '用户');
INSERT INTO `users` VALUES ('382', 'erwerwedsafsa', null, '保密', '18898329078', '快去设置你的个性签名吧！', 'false', '1', '', '您还没有订单呢！', 'big-baby18898329078', 'rewrewrewr', '4343', '用户');
INSERT INTO `users` VALUES ('38212', 'weqqwe', null, '保密', '15507865170', '快去设置你的个性签名吧！', 'false', '1', 'setheader.jpg', '您还没有订单呢！', 'big-baby15507865170', 'wdeaqd', null, null);
INSERT INTO `users` VALUES ('38213', 'fkjdsafdkj', null, '保密', '15507865170', '快去设置你的个性签名吧！', 'false', null, 'setheader.jpg', '您还没有订单呢！', 'big-baby15507865170', 'flsdhlfkdsk', null, null);
INSERT INTO `users` VALUES ('38214', 'dssdasdfsdafdsa', null, '保密', '15507865170', '快去设置你的个性签名吧！', 'false', null, 'setheader.jpg', '您还没有订单呢！', 'big-baby15507865170', 'fsdafsdafsda', null, null);
INSERT INTO `users` VALUES ('38215', 'fdsafdsf', null, '保密', '15507865170', '快去设置你的个性签名吧！', 'false', null, 'setheader.jpg', '您还没有订单呢！', 'big-baby15507865170', 'fdsafsdaf', null, null);
INSERT INTO `users` VALUES ('38216', 'dsgdsagdfagerwa', null, '保密', '15507865170', '快去设置你的个性签名吧！', 'false', null, 'setheader.jpg', '您还没有订单呢！', 'big-baby15507865170', 'fdsfasdaf', null, null);
INSERT INTO `users` VALUES ('38217', 'fdsafdsg', null, '保密', '15507865170', '快去设置你的个性签名吧！', 'false', null, 'setheader.jpg', '您还没有订单呢！', 'big-baby15507865170', 'fdsfsdafsa', null, null);
INSERT INTO `users` VALUES ('38218', 'dsadsafsa', null, '保密', '15507865170', '快去设置你的个性签名吧！', 'false', null, 'setheader.jpg', '您还没有订单呢！', 'big-baby15507865170', 'dsadsada', null, null);
INSERT INTO `users` VALUES ('38219', 'sfdwqfd', null, '保密', '15507865170', '快去设置你的个性签名吧！', 'false', null, 'setheader.jpg', '您还没有订单呢！', 'big-baby15507865170', 'wqeqwdq', null, null);
INSERT INTO `users` VALUES ('38220', 'huangxinglian', null, '保密', '15597865170', '快去设置你的个性签名吧！', 'false', null, 'setheader.jpg', '您还没有订单呢！', 'big-baby15597865170', '111111', null, null);
INSERT INTO `users` VALUES ('38221', 'a11111', null, '保密', '15507865170', '快去设置你的个性签名吧！', 'false,18,8,32,12', null, 'setheader.jpg', '您还没有订单呢！', 'big-baby15507865170', '1', '1511517900', null);
INSERT INTO `users` VALUES ('38222', 'huangxingliang', null, '保密', '13864869958', '快去设置你的个性签名吧！', 'false,2', null, 'setheader.jpg', '您还没有订单呢！', 'big-baby13864869958', '111111', '1511508760', null);
INSERT INTO `users` VALUES ('38223', 'hxl123', null, '保密', '18822345678', '快去设置你的个性签名吧！', 'false', null, 'setheader.jpg', '您还没有订单呢！', 'big-baby18822345678', '123456', '1511516875', null);
INSERT INTO `users` VALUES ('38224', 'gggggg', null, '保密', '17777364445', '快去设置你的个性签名吧！', 'false', null, 'setheader.jpg', '您还没有订单呢！', 'big-baby17777364445', '123456', '1511512338', null);
INSERT INTO `users` VALUES ('38225', 'huang123', null, '保密', '18877572889', '快去设置你的个性签名吧！', 'false', null, 'setheader.jpg', '您还没有订单呢！', 'big-baby18877572889', '123456', '1511513525', null);
INSERT INTO `users` VALUES ('38226', 'chenwengui', null, '保密', '18877572889', '快去设置你的个性签名吧！', 'false', null, 'setheader.jpg', '您还没有订单呢！', 'big-baby18877572889', '123456', '1511516932', null);
