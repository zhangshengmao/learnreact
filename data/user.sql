/*
Navicat MySQL Data Transfer

Source Server         : big_baby
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : big_baby

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-11-18 09:08:09
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) DEFAULT NULL,
  `user_gender` varchar(255) DEFAULT NULL,
  `user_tel` varchar(255) DEFAULT NULL,
  `user_address` varchar(255) DEFAULT NULL,
  `user_sign` varchar(255) DEFAULT NULL,
  `user_collect` varchar(255) DEFAULT NULL,
  `hand_image` varchar(255) DEFAULT NULL,
  `user_order` varchar(255) DEFAULT NULL,
  `user_account` varchar(255) DEFAULT NULL,
  `user_password` varchar(255) DEFAULT NULL,
  `user_identify` varchar(255) DEFAULT NULL,
  `user_time` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=201742 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('201734', '德邦', '男', '15707998877', '战争学员', 'gfrgtrgfrgf', null, null, null, null, '', null, null);
INSERT INTO `user` VALUES ('201735', '安妮', '女', '1563523532532', '祖安', null, null, null, null, null, 'e10adc3949ba59abbe56e057f20f883e', null, null);
INSERT INTO `user` VALUES ('201730', '9999', '12', '12', '12', null, null, null, null, null, '123456', null, null);
INSERT INTO `user` VALUES ('201733', '21421', '42141', '4214', '214214', null, null, null, null, null, '76c538125fc5c9ec6ad1d05650a57de5', null, null);
INSERT INTO `user` VALUES ('201736', '1242151', '4124', '1241', '1414', null, null, null, null, null, 'e0c641195b27425bb056ac56f8953d24', null, null);
INSERT INTO `user` VALUES ('201737', '迦娜', '女', '156757655666', '战争学院', null, null, null, null, null, 'e10adc3949ba59abbe56e057f20f883e', null, null);
INSERT INTO `user` VALUES ('201738', '阿利斯塔', '男', '156757655666', '祖安', '战士的最高境界，就是不拿盾牌也能够开盾墙！', null, null, null, null, 'e10adc3949ba59abbe56e057f20f883e', null, null);
INSERT INTO `user` VALUES ('201739', '你好', '女', '15644443333', '慕尼黑$user_identify=管理员', '', null, null, null, null, 'e10adc3949ba59abbe56e057f20f883e', null, null);
INSERT INTO `user` VALUES ('201740', '凤栖梧', '女', '15746364365', '墨尔本', null, null, null, null, null, 'e10adc3949ba59abbe56e057f20f883e', '管理员', null);
INSERT INTO `user` VALUES ('201741', '阿婆', '女', '1576653535', '菲律宾', null, null, null, null, '223456', 'e10adc3949ba59abbe56e057f20f883e', '管理员', null);
