/*
Navicat MySQL Data Transfer

Source Server         : big_baby
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : big_baby

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-11-18 09:08:04
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `sort`
-- ----------------------------
DROP TABLE IF EXISTS `sort`;
CREATE TABLE `sort` (
  `id` varchar(255) NOT NULL,
  `sort_name` varchar(255) DEFAULT NULL,
  `sort_type` varchar(255) DEFAULT NULL,
  `sort_list` varchar(19999) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sort
-- ----------------------------
INSERT INTO `sort` VALUES ('1', '卧室', '0', '[{\"img\":\"wab11\",\"text\":\"床\",\"goodType\":0},{\"img\":\"wbb11\",\"text\":\"床垫\",\"goodType\":1},{\"img\":\"wcb11\",\"text\":\"床头柜\",\"goodType\":2},{\"img\":\"wdb11\",\"text\":\"衣柜\",\"goodType\":3}]');
INSERT INTO `sort` VALUES ('2', '客厅', '1', '[{\"img\":\"sab11\",\"text\":\"书桌\",\"goodType\":8},{\"img\":\"sbb11\",\"text\":\"书架\",\"goodType\":9},{\"img\":\"scb11\",\"text\":\"书柜\",\"goodType\":10},{\"img\":\"sdb11\",\"text\":\"书房套装\",\"goodType\":11}]');
INSERT INTO `sort` VALUES ('3', '书房', '2', '[{\"img\":\"kab11\",\"text\":\"沙发\",\"goodType\":4},{\"img\":\"kbb11\",\"text\":\"茶几\",\"goodType\":5},{\"img\":\"kcb11\",\"text\":\"电视柜\",\"goodType\":6},{\"img\":\"kdb11\",\"text\":\"鞋柜\",\"goodType\":7}]');
INSERT INTO `sort` VALUES ('4', '儿童房', '3', '[{\"img\":\"eab11\",\"text\":\"儿童床\",\"goodType\":12},{\"img\":\"ebb11\",\"text\":\"儿童床垫\",\"goodType\":13},{\"img\":\"ecb11\",\"text\":\"儿童床头柜\",\"goodType\":14},{\"img\":\"edb11\",\"text\":\"儿童衣柜\",\"goodType\":15}]');
