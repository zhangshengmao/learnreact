/*
Navicat MySQL Data Transfer

Source Server         : big_baby
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : big_baby

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-11-18 09:06:41
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `address`
-- ----------------------------
DROP TABLE IF EXISTS `address`;
CREATE TABLE `address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `tel` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `address` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of address
-- ----------------------------
INSERT INTO `address` VALUES ('29', 'laughing', '1888888888', '北京天安门', '大宝');
INSERT INTO `address` VALUES ('31', 'laughing', '188888888', '北京天安门', 'huangxinglian');
INSERT INTO `address` VALUES ('35', 'hxl123', '18877572889', '广州', '黄杏连');
INSERT INTO `address` VALUES ('36', 'a11111', '1fsfdsad', 'dsadsadas', 'zhangshengmao ');
INSERT INTO `address` VALUES ('37', 'a11111', 'sdsad', 'sadsa', 'sada');
INSERT INTO `address` VALUES ('38', 'gggggg', '12346757889', '广州', 'gggggg');
INSERT INTO `address` VALUES ('39', 'huang123', '18877572889', '广州', 'huang123');
INSERT INTO `address` VALUES ('40', 'huang123', '18877572889', '北京', 'huang123');
INSERT INTO `address` VALUES ('41', 'chenwengui', '18877572889', '北京天安门', 'chenwengui');
