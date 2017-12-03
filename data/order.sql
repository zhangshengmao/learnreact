/*
Navicat MySQL Data Transfer

Source Server         : big_baby
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : big_baby

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-11-18 09:07:50
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `order`
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_num` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `order_product` varchar(1999) DEFAULT NULL,
  `order_phone` varchar(255) DEFAULT NULL,
  `order_total_price` varchar(255) DEFAULT NULL,
  `order_date` varchar(255) DEFAULT NULL,
  `order_status` varchar(255) DEFAULT NULL,
  `order_address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1207 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES ('1198', '2017111793508', 'hxl123', '[{\"username\":\"hxl123\",\"product_id\":\"12\",\"product_name\":\"时尚卧室家具法式 罗曼尼玫瑰系列 床头柜\",\"product_origin_price\":\"86\",\"amount\":1,\"product_image\":\"wcb21.jpg\"}]', '18822345678', '86', '2017年11月17日 16:16:18', '待付款', '');
INSERT INTO `order` VALUES ('1151', '2017111768932', 'laughing', '[{\"username\":\"laughing\",\"product_id\":\"18\",\"product_name\":\"美诚美诺 卧室家具 油楠木 移门衣柜 D10\",\"product_origin_price\":\"11335\",\"amount\":1,\"product_image\":\"wdb31.jpg\"},{\"username\":\"laughing\",\"product_id\":\"8\",\"product_name\":\"帕尔玛牛皮面床架\",\"product_origin_price\":\"5399\",\"amount\":1,\"product_image\":\"wab81.jpg\"},{\"username\":\"laughing\",\"product_id\":\"6\",\"product_name\":\"全友 成人卧房 1.8米双人床 88007\",\"product_origin_price\":\"6229\",\"amount\":2,\"product_image\":\"wab51.jpg\"},{\"username\":\"laughing\",\"product_id\":\"7\",\"product_name\":\"英伦高尔夫 1.8米床 头层牛皮 实木框架 丽斯达牛皮面床架\",\"product_origin_price\":\"2490\",\"amount\":2,\"product_image\":\"wab71.jpg\"}]', '188888888', '34172', '2017年11月17日 14:36:49', '待评价', '北京市紫禁城');
INSERT INTO `order` VALUES ('1146', '2017111786445', 'laughing', '[{\"username\":\"this.state.userObj.username\",\"product_id\":\"20\",\"product_name\":\"东方百盛胡桃木色三门衣柜902\",\"product_origin_price\":\"5399\",\"amount\":4,\"product_image\":\"wdb51.jpg\"}]', '188888888', '21596', '2017年11月17日 12:13:08', '待收货', '北京市紫禁城');
INSERT INTO `order` VALUES ('1153', '2017111796318', 'laughing', '[{\"username\":\"laughing\",\"product_id\":\"3\",\"product_name\":\"青岛一木 北欧系列 全实木 1.8米 橡木大床\",\"product_origin_price\":\"299\",\"amount\":1,\"product_image\":\"wab31.jpg\"}]', '188888888', '299', '2017年11月17日 14:40:54', '待发货', '北京市紫禁城');
INSERT INTO `order` VALUES ('1154', '2017111733764', 'laughing', '[{\"username\":\"laughing\",\"product_id\":\"7\",\"product_name\":\"英伦高尔夫 1.8米床 头层牛皮 实木框架 丽斯达牛皮面床架\",\"product_origin_price\":\"2490\",\"amount\":1,\"product_image\":\"wab71.jpg\"}]', '188888888', '2490', '2017年11月17日 14:43:10', '待收货', '北京市紫禁城');
INSERT INTO `order` VALUES ('1188', '2017111729702', 'laughing', '[{\"username\":\"laughing\",\"product_id\":\"11\",\"product_name\":\"北欧系列 全实木 橡木床头柜\",\"product_origin_price\":\"1400\",\"amount\":1,\"product_image\":\"wcb11.jpg\"}]', '188888888', '1400', '2017年11月17日 15:56:24', '待发货', '北京市紫禁城');
INSERT INTO `order` VALUES ('1199', '2017111791640', 'hxl123', '[{\"username\":\"hxl123\",\"product_id\":\"12\",\"product_name\":\"时尚卧室家具法式 罗曼尼玫瑰系列 床头柜\",\"product_origin_price\":\"86\",\"amount\":1,\"product_image\":\"wcb21.jpg\"}]', '18822345678', '86', '2017年11月17日 16:16:27', '待付款', '');
INSERT INTO `order` VALUES ('1195', '2017111734530', 'laughing', '[{\"username\":\"laughing\",\"product_id\":\"9\",\"product_name\":\"龙凤床垫 弹簧床垫 豪华定制 天骄之子系列 皇冠\",\"product_origin_price\":\"8632\",\"amount\":1,\"product_image\":\"wbb11.jpg\"}]', '188888888', '8632', '2017年11月17日 16:10:10', '待付款', '北京市紫禁城');
INSERT INTO `order` VALUES ('1147', '2017111797396', 'laughing', '[{\"username\":\"laughing\",\"product_id\":\"17\",\"product_name\":\"全友 成人卧房 65903 白色 大五门衣柜\",\"product_origin_price\":\"7125\",\"amount\":1,\"product_image\":\"wdb21.jpg\"}]', '188888888', '7125', '20171117', '已付款', '北京市紫禁城');
INSERT INTO `order` VALUES ('1200', '2017111717090', 'hxl123', '[{\"username\":\"hxl123\",\"product_id\":\"14\",\"product_name\":\"东方百盛胡桃木色水滴式拉手床头柜J900\",\"product_origin_price\":\"999\",\"amount\":1,\"product_image\":\"wcb41.jpg\"},{\"username\":\"hxl123\",\"product_id\":\"29\",\"product_name\":\"全友家私 青少年家具 储物电脑桌 学习书桌 书架转椅组合 6326\",\"product_origin_price\":\"1640\",\"amount\":1,\"product_image\":\"sbb11.jpg\"},{\"username\":\"hxl123\",\"product_id\":\"31\",\"product_name\":\"全友 餐厅 餐台椅（一桌四椅） 88001\",\"product_origin_price\":\"5038\",\"amount\":1,\"product_image\":\"sdb11.jpg\"},{\"username\":\"hxl123\",\"product_id\":\"22\",\"product_name\":\"斐亨外贸家具折扣 布艺沙发 进口实木 随心搭配\",\"product_origin_price\":\"392\",\"amount\":1,\"product_image\":\"kab11.jpg\"}]', '18822345678', '8069', '2017年11月17日 16:31:15', '待付款', '');
INSERT INTO `order` VALUES ('1197', '2017111713490', 'a11111', '[{\"username\":\"a11111\",\"product_id\":\"8\",\"product_name\":\"帕尔玛牛皮面床架\",\"product_origin_price\":\"5399\",\"amount\":1,\"product_image\":\"wab81.jpg\"}]', '15507865170', '5399', '2017年11月17日 16:10:24', '待付款', '');
INSERT INTO `order` VALUES ('1201', '2017111764318', 'huang123', '[{\"username\":\"huang123\",\"product_id\":\"7\",\"product_name\":\"英伦高尔夫 1.8米床 头层牛皮 实木框架 丽斯达牛皮面床架\",\"product_origin_price\":\"2490\",\"amount\":4,\"product_image\":\"wab71.jpg\"}]', '18877572889', '9960', '2017年11月17日 16:34:11', '待付款', '广州');
INSERT INTO `order` VALUES ('1202', '2017111793159', 'huang123', '[{\"username\":\"huang123\",\"product_id\":\"3\",\"product_name\":\"青岛一木 北欧系列 全实木 1.8米 橡木大床\",\"product_origin_price\":\"2092\",\"amount\":1,\"product_image\":\"wab31.jpg\"}]', '18877572889', '2092', '2017年11月17日 16:35:45', '待发货', '广州');
INSERT INTO `order` VALUES ('1203', '2017111771798', 'chenwengui', '[{\"username\":\"chenwengui\",\"product_id\":\"8\",\"product_name\":\"帕尔玛牛皮面床架\",\"product_origin_price\":\"5399\",\"amount\":6,\"product_image\":\"wab81.jpg\"}]', '18877572889', '32394', '2017年11月17日 17:17:48', '待发货', '北京天安门');
INSERT INTO `order` VALUES ('1204', '2017111724933', 'chenwengui', '[{\"username\":\"chenwengui\",\"product_id\":\"3\",\"product_name\":\"青岛一木 北欧系列 全实木 1.8米 橡木大床\",\"product_origin_price\":\"2092\",\"amount\":1,\"product_image\":\"wab31.jpg\"}]', '18877572889', '2092', '2017年11月17日 17:18:54', '待发货', '北京天安门');
INSERT INTO `order` VALUES ('1205', '2017111791694', 'chenwengui', '[{\"username\":\"chenwengui\",\"product_id\":\"20\",\"product_name\":\"东方百盛胡桃木色三门衣柜902\",\"product_origin_price\":\"5399\",\"amount\":8,\"product_image\":\"wdb51.jpg\"},{\"username\":\"chenwengui\",\"product_id\":\"7\",\"product_name\":\"英伦高尔夫 1.8米床 头层牛皮 实木框架 丽斯达牛皮面床架\",\"product_origin_price\":\"2490\",\"amount\":1,\"product_image\":\"wab71.jpg\"},{\"username\":\"chenwengui\",\"product_id\":\"9\",\"product_name\":\"龙凤床垫 弹簧床垫 豪华定制 天骄之子系列 皇冠\",\"product_origin_price\":\"8632\",\"amount\":2,\"product_image\":\"wbb11.jpg\"}]', '18877572889', '62946', '2017年11月17日 17:43:48', '待发货', '');
INSERT INTO `order` VALUES ('1175', '2017111769761', 'huangxingliang', '[{\"username\":\"huangxingliang\",\"product_id\":\"29\",\"product_name\":\"全友家私 青少年家具 储物电脑桌 学习书桌 书架转椅组合 6326\",\"product_origin_price\":\"1640\",\"amount\":4,\"product_image\":\"sbb11.jpg\"}]', '13864869958', '6560', '2017年11月17日 15:19:24', '待付款', '');
INSERT INTO `order` VALUES ('1177', '2017111791007', 'huangxingliang', '[{\"username\":\"huangxingliang\",\"product_id\":\"17\",\"product_name\":\"全友 成人卧房 65903 白色 大五门衣柜\",\"product_origin_price\":\"7125\",\"amount\":1,\"product_image\":\"wdb21.jpg\"}]', '13864869958', '7125', '2017年11月17日 15:20:14', '待付款', '');
INSERT INTO `order` VALUES ('1206', '2017111728448', 'chenwengui', '[{\"username\":\"chenwengui\",\"product_id\":\"8\",\"product_name\":\"帕尔玛牛皮面床架\",\"product_origin_price\":\"5399\",\"amount\":1,\"product_image\":\"wab81.jpg\"},{\"username\":\"chenwengui\",\"product_id\":\"2\",\"product_name\":\"克罗德曼 布艺/松木框架 高箱床 AFB-123\",\"product_origin_price\":\"5700\",\"amount\":4,\"product_image\":\"wab21.jpg\"},{\"username\":\"chenwengui\",\"product_id\":\"12\",\"product_name\":\"时尚卧室家具法式 罗曼尼玫瑰系列 床头柜\",\"product_origin_price\":\"86\",\"amount\":1,\"product_image\":\"wcb21.jpg\"}]', '18877572889', '28285', '2017年11月17日 17:44:25', '待付款', '');
INSERT INTO `order` VALUES ('1187', '2017111737887', 'hxl123', '[{\"username\":\"hxl123\",\"product_id\":\"6\",\"product_name\":\"全友 成人卧房 1.8米双人床 88007\",\"product_origin_price\":\"6229\",\"amount\":1,\"product_image\":\"wab51.jpg\"}]', '18822345678', '6229', '2017年11月17日 15:43:28', '待付款', '');
