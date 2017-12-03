/*
Navicat MySQL Data Transfer

Source Server         : big_baby
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : big_baby

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-11-18 09:07:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `buycar`
-- ----------------------------
DROP TABLE IF EXISTS `buycar`;
CREATE TABLE `buycar` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `list` varchar(10000) DEFAULT NULL,
  `account` varchar(5000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=103 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of buycar
-- ----------------------------
INSERT INTO `buycar` VALUES ('1', 'lau', '1111', null);
INSERT INTO `buycar` VALUES ('52', '456', '[{\"username\":\"laughing\",\"product_id\":\"17\",\"product_name\":\"全友 成人卧房 65903 白色 大五门衣柜\",\"product_origin_price\":\"7125\",\"amount\":1,\"product_image\":\"wdb21.jpg\"}]', null);
INSERT INTO `buycar` VALUES ('90', 'a11111', '[{\"username\":\"a11111\",\"product_id\":\"12\",\"product_name\":\"时尚卧室家具法式 罗曼尼玫瑰系列 床头柜\",\"product_origin_price\":\"86\",\"amount\":1,\"product_image\":\"wcb21.jpg\"}]', null);
INSERT INTO `buycar` VALUES ('79', 'huangxingliang', '[{\"username\":\"huangxingliang\",\"product_id\":\"29\",\"product_name\":\"全友家私 青少年家具 储物电脑桌 学习书桌 书架转椅组合 6326\",\"product_origin_price\":\"1640\",\"amount\":4,\"product_image\":\"sbb11.jpg\"}]', null);
INSERT INTO `buycar` VALUES ('92', 'laughing', '[{\"username\":\"laughing\",\"product_id\":\"7\",\"product_name\":\"英伦高尔夫 1.8米床 头层牛皮 实木框架 丽斯达牛皮面床架\",\"product_origin_price\":\"2490\",\"amount\":1,\"product_image\":\"wab71.jpg\"},{\"username\":\"laughing\",\"product_id\":\"18\",\"product_name\":\"美诚美诺 卧室家具 油楠木 移门衣柜 D10\",\"product_origin_price\":\"2667\",\"amount\":1,\"product_image\":\"wdb31.jpg\"},{\"username\":\"laughing\",\"product_id\":\"1\",\"product_name\":\"柚至臻 柚木 桐木 1.8米床\",\"product_origin_price\":\"9600\",\"amount\":1,\"product_image\":\"wab11.jpg\"},{\"username\":\"laughing\",\"product_id\":\"1\",\"product_name\":\"柚至臻 柚木 桐木 1.8米床\",\"product_origin_price\":\"9600\",\"amount\":3,\"product_image\":\"wab11.jpg\"},{\"username\":\"laughing\",\"product_id\":\"1\",\"product_name\":\"柚至臻 柚木 桐木 1.8米床\",\"product_origin_price\":\"9600\",\"amount\":4,\"product_image\":\"wab11.jpg\"},{\"username\":\"laughing\",\"product_id\":\"21\",\"product_name\":\"宝莱佳 实木生态板 卧室 红橡木 移门衣柜 1E02\",\"product_origin_price\":\"610\",\"amount\":4,\"product_image\":\"wdb61.jpg\"},{\"username\":\"laughing\",\"product_id\":\"6\",\"product_name\":\"全友 成人卧房 1.8米双人床 88007\",\"product_origin_price\":\"6229\",\"amount\":5,\"product_image\":\"wab51.jpg\"}]', null);
INSERT INTO `buycar` VALUES ('93', 'gggggg', '[{\"username\":\"gggggg\",\"product_id\":\"2\",\"product_name\":\"克罗德曼 布艺/松木框架 高箱床 AFB-123\",\"product_origin_price\":\"5700\",\"amount\":1,\"product_image\":\"wab21.jpg\"},{\"username\":\"gggggg\",\"product_id\":\"7\",\"product_name\":\"英伦高尔夫 1.8米床 头层牛皮 实木框架 丽斯达牛皮面床架\",\"product_origin_price\":\"2490\",\"amount\":2,\"product_image\":\"wab71.jpg\"},{\"username\":\"gggggg\",\"product_id\":\"18\",\"product_name\":\"美诚美诺 卧室家具 油楠木 移门衣柜 D10\",\"product_origin_price\":\"2667\",\"amount\":3,\"product_image\":\"wdb31.jpg\"}]', null);
INSERT INTO `buycar` VALUES ('96', 'huang123', '[]', null);
INSERT INTO `buycar` VALUES ('101', 'hxl123', '[{\"username\":\"hxl123\",\"product_id\":\"22\",\"product_name\":\"斐亨外贸家具折扣 布艺沙发 进口实木 随心搭配\",\"product_origin_price\":\"392\",\"amount\":1,\"product_image\":\"kab11.jpg\"}]', null);
INSERT INTO `buycar` VALUES ('102', 'chenwengui', '[]', null);
