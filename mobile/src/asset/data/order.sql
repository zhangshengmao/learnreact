/*
Navicat MySQL Data Transfer

Source Server         : big_baby
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : big_baby

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-11-13 14:10:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `order`
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `order_num` varchar(255) NOT NULL,
  `order_name` varchar(255) DEFAULT NULL,
  `order_product` varchar(255) DEFAULT NULL,
  `order_phone` varchar(255) DEFAULT NULL,
  `order_total_price` varchar(255) DEFAULT NULL,
  `order_date` varchar(255) DEFAULT NULL,
  `order_status` varchar(255) DEFAULT NULL,
  `order_address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`order_num`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES ('10001', 'rr', 'uu', '18877572889', '1223', null, null, '广州天河区');
