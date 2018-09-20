# Host: localhost  (Version 5.7.17-log)
# Date: 2018-09-20 13:56:35
# Generator: MySQL-Front 6.0  (Build 2.20)


#
# Structure for table "about"
#

DROP TABLE IF EXISTS `about`;
CREATE TABLE `about` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `content` longtext NOT NULL,
  `priority` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "about"
#


#
# Structure for table "auth_group"
#

DROP TABLE IF EXISTS `auth_group`;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "auth_group"
#


#
# Structure for table "base_info"
#

DROP TABLE IF EXISTS `base_info`;
CREATE TABLE `base_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `website_title` varchar(300) DEFAULT NULL,
  `small_website_title` varchar(300) DEFAULT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  `user_name` varchar(100) NOT NULL,
  `slogan` longtext,
  `created_time` date NOT NULL,
  `modified_time` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "base_info"
#


#
# Structure for table "blog_user"
#

DROP TABLE IF EXISTS `blog_user`;
CREATE TABLE `blog_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `nickname` varchar(30) DEFAULT NULL,
  `qq` varchar(20) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  `avatar` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

#
# Data for table "blog_user"
#

INSERT INTO `blog_user` VALUES (1,'pbkdf2_sha256$100000$b5Mx6aSVtSU4$VGAjR9O5p5aKxiIUU3MkWIa/23t4MpHV6UVjcrmynBo=',X'323031382D30392D32302030353A35303A32322E313535313938',1,'TRsky','','','625310581@qq.com',1,1,X'323031382D30392D32302030353A35303A30302E323232323230',NULL,NULL,NULL,'avatar/default.jpg');

#
# Structure for table "account_emailaddress"
#

DROP TABLE IF EXISTS `account_emailaddress`;
CREATE TABLE `account_emailaddress` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(254) NOT NULL,
  `verified` tinyint(1) NOT NULL,
  `primary` tinyint(1) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `account_emailaddress_user_id_2c513194_fk_blog_user_id` (`user_id`),
  CONSTRAINT `account_emailaddress_user_id_2c513194_fk_blog_user_id` FOREIGN KEY (`user_id`) REFERENCES `blog_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "account_emailaddress"
#


#
# Structure for table "account_emailconfirmation"
#

DROP TABLE IF EXISTS `account_emailconfirmation`;
CREATE TABLE `account_emailconfirmation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` datetime(6) NOT NULL,
  `sent` datetime(6) DEFAULT NULL,
  `key` varchar(64) NOT NULL,
  `email_address_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `key` (`key`),
  KEY `account_emailconfirm_email_address_id_5b7f8c58_fk_account_e` (`email_address_id`),
  CONSTRAINT `account_emailconfirm_email_address_id_5b7f8c58_fk_account_e` FOREIGN KEY (`email_address_id`) REFERENCES `account_emailaddress` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "account_emailconfirmation"
#


#
# Structure for table "blog_user_groups"
#

DROP TABLE IF EXISTS `blog_user_groups`;
CREATE TABLE `blog_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `blog_user_groups_user_id_group_id_9046f296_uniq` (`user_id`,`group_id`),
  KEY `blog_user_groups_group_id_29990e74_fk_auth_group_id` (`group_id`),
  CONSTRAINT `blog_user_groups_group_id_29990e74_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `blog_user_groups_user_id_4e1acb48_fk_blog_user_id` FOREIGN KEY (`user_id`) REFERENCES `blog_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "blog_user_groups"
#


#
# Structure for table "blog_userip"
#

DROP TABLE IF EXISTS `blog_userip`;
CREATE TABLE `blog_userip` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ip` varchar(50) NOT NULL,
  `count` int(10) unsigned NOT NULL,
  `visit_time` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

#
# Data for table "blog_userip"
#

INSERT INTO `blog_userip` VALUES (1,'127.0.0.1',1,'2018-09-20');

#
# Structure for table "blog_visitcount"
#

DROP TABLE IF EXISTS `blog_visitcount`;
CREATE TABLE `blog_visitcount` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `count` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

#
# Data for table "blog_visitcount"
#

INSERT INTO `blog_visitcount` VALUES (1,1);

#
# Structure for table "category"
#

DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `created_time` date NOT NULL,
  `modified_time` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "category"
#


#
# Structure for table "column_category"
#

DROP TABLE IF EXISTS `column_category`;
CREATE TABLE `column_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `created_time` date NOT NULL,
  `modified_time` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "column_category"
#


#
# Structure for table "column"
#

DROP TABLE IF EXISTS `column`;
CREATE TABLE `column` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `created_time` date NOT NULL,
  `modified_time` date NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `column_category_id_b7c8bde7_fk_column_category_id` (`category_id`),
  CONSTRAINT `column_category_id_b7c8bde7_fk_column_category_id` FOREIGN KEY (`category_id`) REFERENCES `column_category` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "column"
#


#
# Structure for table "article"
#

DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` varchar(10) NOT NULL,
  `created_time` datetime(6) NOT NULL,
  `public_time` datetime(6) DEFAULT NULL,
  `modified_time` datetime(6) NOT NULL,
  `title` varchar(100) NOT NULL,
  `slogan` varchar(300) DEFAULT NULL,
  `digest` longtext NOT NULL,
  `content` longtext,
  `words` int(10) unsigned NOT NULL,
  `time` int(10) unsigned NOT NULL,
  `views` int(10) unsigned NOT NULL,
  `author_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `column_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `article_author_id_01185df5_fk_blog_user_id` (`author_id`),
  KEY `article_category_id_99127861_fk_category_id` (`category_id`),
  KEY `article_column_id_32b4df3f_fk_column_id` (`column_id`),
  CONSTRAINT `article_author_id_01185df5_fk_blog_user_id` FOREIGN KEY (`author_id`) REFERENCES `blog_user` (`id`),
  CONSTRAINT `article_category_id_99127861_fk_category_id` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `article_column_id_32b4df3f_fk_column_id` FOREIGN KEY (`column_id`) REFERENCES `column` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "article"
#


#
# Structure for table "dashboard_userdashboardmodule"
#

DROP TABLE IF EXISTS `dashboard_userdashboardmodule`;
CREATE TABLE `dashboard_userdashboardmodule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `module` varchar(255) NOT NULL,
  `app_label` varchar(255) DEFAULT NULL,
  `user` int(10) unsigned NOT NULL,
  `column` int(10) unsigned NOT NULL,
  `order` int(11) NOT NULL,
  `settings` longtext NOT NULL,
  `children` longtext NOT NULL,
  `collapsed` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

#
# Data for table "dashboard_userdashboardmodule"
#

INSERT INTO `dashboard_userdashboardmodule` VALUES (21,'Quick links','jet.dashboard.modules.LinkList',NULL,1,0,0,'{\"draggable\": false, \"deletable\": false, \"collapsible\": false, \"layout\": \"inline\"}','[{\"title\": \"Return to site\", \"url\": \"/\"}, {\"title\": \"\\u4fee\\u6539\\u5bc6\\u7801\", \"url\": \"/admin/password_change/\"}, {\"title\": \"\\u6ce8\\u9500\", \"url\": \"/admin/logout/\"}]',0),(22,'Applications','jet.dashboard.modules.AppList',NULL,1,1,0,'{\"models\": null, \"exclude\": [\"auth.*\"]}','',0),(23,'管理','jet.dashboard.modules.AppList',NULL,1,2,0,'{\"models\": [\"auth.*\"], \"exclude\": null}','',0),(24,'Recent Actions','jet.dashboard.modules.RecentActions',NULL,1,0,1,'{\"limit\": 10, \"include_list\": null, \"exclude_list\": null, \"user\": null}','',0),(25,'Latest Django News','jet.dashboard.modules.Feed',NULL,1,1,1,'{\"feed_url\": \"http://www.djangoproject.com/rss/weblog/\", \"limit\": 5}','',0),(26,'Support','jet.dashboard.modules.LinkList',NULL,1,2,1,'{\"draggable\": true, \"deletable\": true, \"collapsible\": true, \"layout\": \"stacked\"}','[{\"title\": \"Django documentation\", \"url\": \"http://docs.djangoproject.com/\", \"external\": true}, {\"title\": \"Django \\\"django-users\\\" mailing list\", \"url\": \"http://groups.google.com/group/django-users\", \"external\": true}, {\"title\": \"Django irc channel\", \"url\": \"irc://irc.freenode.net/django\", \"external\": true}]',0),(27,'Application models','jet.dashboard.modules.ModelList','blog',1,0,0,'{\"models\": [\"blog.*\"], \"exclude\": null}','',0),(28,'Recent Actions','jet.dashboard.modules.RecentActions','blog',1,1,0,'{\"limit\": 10, \"include_list\": [\"blog.*\"], \"exclude_list\": null, \"user\": null}','',0),(29,'Application models','jet.dashboard.modules.ModelList','sites',1,0,0,'{\"models\": [\"sites.*\"], \"exclude\": null}','',0),(30,'Recent Actions','jet.dashboard.modules.RecentActions','sites',1,1,0,'{\"limit\": 10, \"include_list\": [\"sites.*\"], \"exclude_list\": null, \"user\": null}','',0),(31,'Application models','jet.dashboard.modules.ModelList','easy_comment',1,0,0,'{\"models\": [\"easy_comment.*\"], \"exclude\": null}','',0),(32,'Recent Actions','jet.dashboard.modules.RecentActions','easy_comment',1,1,0,'{\"limit\": 10, \"include_list\": [\"easy_comment.*\"], \"exclude_list\": null, \"user\": null}','',0),(33,'Application models','jet.dashboard.modules.ModelList','account',1,0,0,'{\"models\": [\"account.*\"], \"exclude\": null}','',0),(34,'Recent Actions','jet.dashboard.modules.RecentActions','account',1,1,0,'{\"limit\": 10, \"include_list\": [\"account.*\"], \"exclude_list\": null, \"user\": null}','',0);

#
# Structure for table "django_content_type"
#

DROP TABLE IF EXISTS `django_content_type`;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

#
# Data for table "django_content_type"
#

INSERT INTO `django_content_type` VALUES (1,'dashboard','userdashboardmodule'),(2,'jet','bookmark'),(3,'jet','pinnedapplication'),(4,'admin','logentry'),(5,'auth','permission'),(6,'auth','group'),(7,'contenttypes','contenttype'),(8,'sessions','session'),(9,'blog','user'),(10,'blog','about'),(11,'blog','article'),(12,'blog','baseinfo'),(13,'blog','category'),(14,'blog','column'),(15,'blog','columncategory'),(16,'blog','friendslinks'),(17,'blog','tag'),(18,'blog','userip'),(19,'blog','visitcount'),(20,'easy_comment','comment'),(21,'easy_comment','like'),(22,'easy_comment','favour'),(23,'notifications','notification'),(24,'online_status','onlinestatus'),(25,'sites','site'),(26,'account','emailaddress'),(27,'account','emailconfirmation'),(28,'socialaccount','socialaccount'),(29,'socialaccount','socialapp'),(30,'socialaccount','socialtoken'),(31,'message','message');

#
# Structure for table "django_admin_log"
#

DROP TABLE IF EXISTS `django_admin_log`;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_blog_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_blog_user_id` FOREIGN KEY (`user_id`) REFERENCES `blog_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

#
# Data for table "django_admin_log"
#

INSERT INTO `django_admin_log` VALUES (1,X'323031382D30392D32302030353A35313A30302E333636353533','1','127.0.0.1',1,'[{\"added\": {}}]',18,1),(2,X'323031382D30392D32302030353A35313A31362E323036333439','1','0',1,'[{\"added\": {}}]',19,1);

#
# Structure for table "auth_permission"
#

DROP TABLE IF EXISTS `auth_permission`;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8;

#
# Data for table "auth_permission"
#

INSERT INTO `auth_permission` VALUES (1,'Can add user dashboard module',1,'add_userdashboardmodule'),(2,'Can change user dashboard module',1,'change_userdashboardmodule'),(3,'Can delete user dashboard module',1,'delete_userdashboardmodule'),(4,'Can add bookmark',2,'add_bookmark'),(5,'Can change bookmark',2,'change_bookmark'),(6,'Can delete bookmark',2,'delete_bookmark'),(7,'Can add pinned application',3,'add_pinnedapplication'),(8,'Can change pinned application',3,'change_pinnedapplication'),(9,'Can delete pinned application',3,'delete_pinnedapplication'),(10,'Can add log entry',4,'add_logentry'),(11,'Can change log entry',4,'change_logentry'),(12,'Can delete log entry',4,'delete_logentry'),(13,'Can add permission',5,'add_permission'),(14,'Can change permission',5,'change_permission'),(15,'Can delete permission',5,'delete_permission'),(16,'Can add group',6,'add_group'),(17,'Can change group',6,'change_group'),(18,'Can delete group',6,'delete_group'),(19,'Can add content type',7,'add_contenttype'),(20,'Can change content type',7,'change_contenttype'),(21,'Can delete content type',7,'delete_contenttype'),(22,'Can add session',8,'add_session'),(23,'Can change session',8,'change_session'),(24,'Can delete session',8,'delete_session'),(25,'Can add 用户',9,'add_user'),(26,'Can change 用户',9,'change_user'),(27,'Can delete 用户',9,'delete_user'),(28,'Can add About',10,'add_about'),(29,'Can change About',10,'change_about'),(30,'Can delete About',10,'delete_about'),(31,'Can add 文章',11,'add_article'),(32,'Can change 文章',11,'change_article'),(33,'Can delete 文章',11,'delete_article'),(34,'Can add 用户信息',12,'add_baseinfo'),(35,'Can change 用户信息',12,'change_baseinfo'),(36,'Can delete 用户信息',12,'delete_baseinfo'),(37,'Can add 类别名称',13,'add_category'),(38,'Can change 类别名称',13,'change_category'),(39,'Can delete 类别名称',13,'delete_category'),(40,'Can add 专栏名称',14,'add_column'),(41,'Can change 专栏名称',14,'change_column'),(42,'Can delete 专栏名称',14,'delete_column'),(43,'Can add 专栏类别',15,'add_columncategory'),(44,'Can change 专栏类别',15,'change_columncategory'),(45,'Can delete 专栏类别',15,'delete_columncategory'),(46,'Can add 友情链接',16,'add_friendslinks'),(47,'Can change 友情链接',16,'change_friendslinks'),(48,'Can delete 友情链接',16,'delete_friendslinks'),(49,'Can add 标签名称',17,'add_tag'),(50,'Can change 标签名称',17,'change_tag'),(51,'Can delete 标签名称',17,'delete_tag'),(52,'Can add 访问用户信息',18,'add_userip'),(53,'Can change 访问用户信息',18,'change_userip'),(54,'Can delete 访问用户信息',18,'delete_userip'),(55,'Can add 网站访问总次数',19,'add_visitcount'),(56,'Can change 网站访问总次数',19,'change_visitcount'),(57,'Can delete 网站访问总次数',19,'delete_visitcount'),(58,'Can add comment',20,'add_comment'),(59,'Can change comment',20,'change_comment'),(60,'Can delete comment',20,'delete_comment'),(61,'Can add 点赞',21,'add_like'),(62,'Can change 点赞',21,'change_like'),(63,'Can delete 点赞',21,'delete_like'),(64,'Can add favour',22,'add_favour'),(65,'Can change favour',22,'change_favour'),(66,'Can delete favour',22,'delete_favour'),(67,'Can add notification',23,'add_notification'),(68,'Can change notification',23,'change_notification'),(69,'Can delete notification',23,'delete_notification'),(70,'Can add Online Status',24,'add_onlinestatus'),(71,'Can change Online Status',24,'change_onlinestatus'),(72,'Can delete Online Status',24,'delete_onlinestatus'),(73,'Can add site',25,'add_site'),(74,'Can change site',25,'change_site'),(75,'Can delete site',25,'delete_site'),(76,'Can add email address',26,'add_emailaddress'),(77,'Can change email address',26,'change_emailaddress'),(78,'Can delete email address',26,'delete_emailaddress'),(79,'Can add email confirmation',27,'add_emailconfirmation'),(80,'Can change email confirmation',27,'change_emailconfirmation'),(81,'Can delete email confirmation',27,'delete_emailconfirmation'),(82,'Can add social account',28,'add_socialaccount'),(83,'Can change social account',28,'change_socialaccount'),(84,'Can delete social account',28,'delete_socialaccount'),(85,'Can add social application',29,'add_socialapp'),(86,'Can change social application',29,'change_socialapp'),(87,'Can delete social application',29,'delete_socialapp'),(88,'Can add social application token',30,'add_socialtoken'),(89,'Can change social application token',30,'change_socialtoken'),(90,'Can delete social application token',30,'delete_socialtoken'),(91,'Can add 留言',31,'add_message'),(92,'Can change 留言',31,'change_message'),(93,'Can delete 留言',31,'delete_message');

#
# Structure for table "blog_user_user_permissions"
#

DROP TABLE IF EXISTS `blog_user_user_permissions`;
CREATE TABLE `blog_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `blog_user_user_permissions_user_id_permission_id_1d3c1311_uniq` (`user_id`,`permission_id`),
  KEY `blog_user_user_permi_permission_id_95ca6010_fk_auth_perm` (`permission_id`),
  CONSTRAINT `blog_user_user_permi_permission_id_95ca6010_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `blog_user_user_permissions_user_id_379a1502_fk_blog_user_id` FOREIGN KEY (`user_id`) REFERENCES `blog_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "blog_user_user_permissions"
#


#
# Structure for table "auth_group_permissions"
#

DROP TABLE IF EXISTS `auth_group_permissions`;
CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "auth_group_permissions"
#


#
# Structure for table "django_migrations"
#

DROP TABLE IF EXISTS `django_migrations`;
CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;

#
# Data for table "django_migrations"
#

INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial',X'323031382D30392D32302030353A33313A35332E363738353135'),(2,'contenttypes','0002_remove_content_type_name',X'323031382D30392D32302030353A33313A35332E393838303138'),(3,'auth','0001_initial',X'323031382D30392D32302030353A33313A35342E383439343530'),(4,'auth','0002_alter_permission_name_max_length',X'323031382D30392D32302030353A33313A35352E313836303532'),(5,'auth','0003_alter_user_email_max_length',X'323031382D30392D32302030353A33313A35352E323035373839'),(6,'auth','0004_alter_user_username_opts',X'323031382D30392D32302030353A33313A35352E323630343336'),(7,'auth','0005_alter_user_last_login_null',X'323031382D30392D32302030353A33313A35352E323739343834'),(8,'auth','0006_require_contenttypes_0002',X'323031382D30392D32302030353A33313A35352E323934313337'),(9,'auth','0007_alter_validators_add_error_messages',X'323031382D30392D32302030353A33313A35352E333134313932'),(10,'auth','0008_alter_user_username_max_length',X'323031382D30392D32302030353A33313A35352E333333373432'),(11,'auth','0009_alter_user_last_name_max_length',X'323031382D30392D32302030353A33313A35352E333534383030'),(12,'blog','0001_initial',X'323031382D30392D32302030353A33313A35392E303536393739'),(13,'account','0001_initial',X'323031382D30392D32302030353A33313A35392E353636393233'),(14,'account','0002_email_max_length',X'323031382D30392D32302030353A33313A35392E373735333430'),(15,'account','0003_auto_20180910_2344',X'323031382D30392D32302030353A33323A30302E313131343438'),(16,'admin','0001_initial',X'323031382D30392D32302030353A33323A30302E353333313831'),(17,'admin','0002_logentry_remove_auto_add',X'323031382D30392D32302030353A33323A30302E353630343635'),(18,'admin','0003_auto_20180910_2344',X'323031382D30392D32302030353A33323A30302E373732353230'),(19,'blog','0002_auto_20180912_2307',X'323031382D30392D32302030353A33323A30302E383033313032'),(20,'blog','0003_auto_20180918_0241',X'323031382D30392D32302030353A33323A30312E313239313035'),(21,'blog','0004_auto_20180919_1100',X'323031382D30392D32302030353A33323A30312E313634303937'),(22,'blog','0005_remove_about_image',X'323031382D30392D32302030353A33323A30312E323938313738'),(23,'dashboard','0001_initial',X'323031382D30392D32302030353A33323A30312E333934383936'),(24,'easy_comment','0001_initial',X'323031382D30392D32302030353A33323A30322E373135353635'),(25,'easy_comment','0002_comment_status',X'323031382D30392D32302030353A33323A30322E393834313036'),(26,'easy_comment','0003_remove_comment_status',X'323031382D30392D32302030353A33323A30332E313631353134'),(27,'easy_comment','0004_auto_20180918_2210',X'323031382D30392D32302030353A33323A30332E363237303233'),(28,'jet','0001_initial',X'323031382D30392D32302030353A33323A30332E383631313730'),(29,'jet','0002_delete_userdashboardmodule',X'323031382D30392D32302030353A33323A30332E393834363237'),(30,'message','0001_initial',X'323031382D30392D32302030353A33323A30342E323331373531'),(31,'message','0002_auto_20180915_0122',X'323031382D30392D32302030353A33323A30342E323635393035'),(32,'message','0003_auto_20180915_1456',X'323031382D30392D32302030353A33323A30342E333030303235'),(33,'message','0004_auto_20180916_1042',X'323031382D30392D32302030353A33323A30342E333334353130'),(34,'message','0005_message_status',X'323031382D30392D32302030353A33323A30342E343939383538'),(35,'message','0006_auto_20180917_0016',X'323031382D30392D32302030353A33323A30342E353332313631'),(36,'notifications','0001_initial',X'323031382D30392D32302030353A33323A30352E333737353534'),(37,'notifications','0002_auto_20150224_1134',X'323031382D30392D32302030353A33323A30352E373432333230'),(38,'notifications','0003_notification_data',X'323031382D30392D32302030353A33323A30352E393736393932'),(39,'notifications','0004_auto_20150826_1508',X'323031382D30392D32302030353A33323A30362E303134313032'),(40,'notifications','0005_auto_20160504_1520',X'323031382D30392D32302030353A33323A30362E303531373032'),(41,'notifications','0006_indexes',X'323031382D30392D32302030353A33323A30362E333739393434'),(42,'notifications','0007_auto_20180910_2344',X'323031382D30392D32302030353A33323A30362E363437343830'),(43,'online_status','0001_initial',X'323031382D30392D32302030353A33323A30362E393631303932'),(44,'sessions','0001_initial',X'323031382D30392D32302030353A33323A30372E303931313733'),(45,'sites','0001_initial',X'323031382D30392D32302030353A33323A30372E313637393633'),(46,'sites','0002_alter_domain_unique',X'323031382D30392D32302030353A33323A30372E323338373938'),(47,'socialaccount','0001_initial',X'323031382D30392D32302030353A33323A30382E353733333133'),(48,'socialaccount','0002_token_max_lengths',X'323031382D30392D32302030353A33323A30382E373033373334'),(49,'socialaccount','0003_extra_data_default_dict',X'323031382D30392D32302030353A33323A30382E373331333430'),(50,'socialaccount','0004_auto_20180910_2344',X'323031382D30392D32302030353A33323A30392E303639303534');

#
# Structure for table "django_session"
#

DROP TABLE IF EXISTS `django_session`;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "django_session"
#

INSERT INTO `django_session` VALUES ('0ewrnvhk9w3kw7b6ruqkj3zszlgz6mk8','MmQzOGViMTU2ZDgyMTU3NDcyMTY4ZmM3MzY2MDhmNGRjMTYwNDc3NTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIzOTE1MjU5YjJiYjc3YTRmY2QxMWU2MmY5ZThjODg3NmViZjE3NDQxIn0=',X'323031382D31302D30342030353A35303A32322E313638373237');

#
# Structure for table "django_site"
#

DROP TABLE IF EXISTS `django_site`;
CREATE TABLE `django_site` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `domain` varchar(100) NOT NULL,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_site_domain_a2e37b91_uniq` (`domain`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

#
# Data for table "django_site"
#

INSERT INTO `django_site` VALUES (1,'example.com','example.com');

#
# Structure for table "easy_comment_comment"
#

DROP TABLE IF EXISTS `easy_comment_comment`;
CREATE TABLE `easy_comment_comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) DEFAULT NULL,
  `content` longtext NOT NULL,
  `submit_date` datetime(6) NOT NULL,
  `lft` int(10) unsigned NOT NULL,
  `rght` int(10) unsigned NOT NULL,
  `tree_id` int(10) unsigned NOT NULL,
  `level` int(10) unsigned NOT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `post_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `easy_comment_comment_post_id_a0b9e608_fk_article_id` (`post_id`),
  KEY `easy_comment_comment_user_id_7c3e43ab_fk_blog_user_id` (`user_id`),
  KEY `easy_comment_comment_lft_f63d1105` (`lft`),
  KEY `easy_comment_comment_rght_f39b9543` (`rght`),
  KEY `easy_comment_comment_tree_id_6ce923e2` (`tree_id`),
  KEY `easy_comment_comment_level_5588ad51` (`level`),
  KEY `easy_comment_comment_parent_id_4fe1e79a` (`parent_id`),
  CONSTRAINT `easy_comment_comment_parent_id_4fe1e79a_fk_easy_comm` FOREIGN KEY (`parent_id`) REFERENCES `easy_comment_comment` (`id`),
  CONSTRAINT `easy_comment_comment_post_id_a0b9e608_fk_article_id` FOREIGN KEY (`post_id`) REFERENCES `article` (`id`),
  CONSTRAINT `easy_comment_comment_user_id_7c3e43ab_fk_blog_user_id` FOREIGN KEY (`user_id`) REFERENCES `blog_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "easy_comment_comment"
#


#
# Structure for table "easy_comment_favour"
#

DROP TABLE IF EXISTS `easy_comment_favour`;
CREATE TABLE `easy_comment_favour` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `object_id` int(10) unsigned NOT NULL,
  `date_created` datetime(6) NOT NULL,
  `liked` tinyint(1) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `easy_comment_favour_user_id_content_type_id__db9517f5_uniq` (`user_id`,`content_type_id`,`object_id`),
  KEY `easy_comment_favour_content_type_id_237eb70c_fk_django_co` (`content_type_id`),
  CONSTRAINT `easy_comment_favour_content_type_id_237eb70c_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `easy_comment_favour_user_id_99e1bf44_fk_blog_user_id` FOREIGN KEY (`user_id`) REFERENCES `blog_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "easy_comment_favour"
#


#
# Structure for table "easy_comment_like"
#

DROP TABLE IF EXISTS `easy_comment_like`;
CREATE TABLE `easy_comment_like` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_time` datetime(6) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `comment_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `easy_comment_like_comment_id_be43e759_fk_easy_comment_comment_id` (`comment_id`),
  KEY `easy_comment_like_user_id_a02eb581_fk_blog_user_id` (`user_id`),
  CONSTRAINT `easy_comment_like_comment_id_be43e759_fk_easy_comment_comment_id` FOREIGN KEY (`comment_id`) REFERENCES `easy_comment_comment` (`id`),
  CONSTRAINT `easy_comment_like_user_id_a02eb581_fk_blog_user_id` FOREIGN KEY (`user_id`) REFERENCES `blog_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "easy_comment_like"
#


#
# Structure for table "friend_links"
#

DROP TABLE IF EXISTS `friend_links`;
CREATE TABLE `friend_links` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `url` varchar(300) NOT NULL,
  `remark` longtext,
  `created_time` date NOT NULL,
  `status` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "friend_links"
#


#
# Structure for table "jet_bookmark"
#

DROP TABLE IF EXISTS `jet_bookmark`;
CREATE TABLE `jet_bookmark` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  `title` varchar(255) NOT NULL,
  `user` int(10) unsigned NOT NULL,
  `date_add` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "jet_bookmark"
#


#
# Structure for table "jet_pinnedapplication"
#

DROP TABLE IF EXISTS `jet_pinnedapplication`;
CREATE TABLE `jet_pinnedapplication` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(255) NOT NULL,
  `user` int(10) unsigned NOT NULL,
  `date_add` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "jet_pinnedapplication"
#


#
# Structure for table "message"
#

DROP TABLE IF EXISTS `message`;
CREATE TABLE `message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) DEFAULT NULL,
  `content` longtext NOT NULL,
  `submit_date` datetime(6) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `status` varchar(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `message_user_id_60e6a50a_fk_blog_user_id` (`user_id`),
  CONSTRAINT `message_user_id_60e6a50a_fk_blog_user_id` FOREIGN KEY (`user_id`) REFERENCES `blog_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "message"
#


#
# Structure for table "notifications_notification"
#

DROP TABLE IF EXISTS `notifications_notification`;
CREATE TABLE `notifications_notification` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `level` varchar(20) NOT NULL,
  `unread` tinyint(1) NOT NULL,
  `actor_object_id` varchar(255) NOT NULL,
  `verb` varchar(255) NOT NULL,
  `description` longtext,
  `target_object_id` varchar(255) DEFAULT NULL,
  `action_object_object_id` varchar(255) DEFAULT NULL,
  `timestamp` datetime(6) NOT NULL,
  `public` tinyint(1) NOT NULL,
  `action_object_content_type_id` int(11) DEFAULT NULL,
  `actor_content_type_id` int(11) NOT NULL,
  `recipient_id` int(11) NOT NULL,
  `target_content_type_id` int(11) DEFAULT NULL,
  `deleted` tinyint(1) NOT NULL,
  `emailed` tinyint(1) NOT NULL,
  `data` longtext,
  PRIMARY KEY (`id`),
  KEY `notifications_notifi_action_object_conten_7d2b8ee9_fk_django_co` (`action_object_content_type_id`),
  KEY `notifications_notifi_actor_content_type_i_0c69d7b7_fk_django_co` (`actor_content_type_id`),
  KEY `notifications_notifi_target_content_type__ccb24d88_fk_django_co` (`target_content_type_id`),
  KEY `notifications_notification_deleted_b32b69e6` (`deleted`),
  KEY `notifications_notification_emailed_23a5ad81` (`emailed`),
  KEY `notifications_notification_public_1bc30b1c` (`public`),
  KEY `notifications_notification_unread_cce4be30` (`unread`),
  KEY `notifications_notification_recipient_id_d055f3f0_fk_blog_user_id` (`recipient_id`),
  CONSTRAINT `notifications_notifi_action_object_conten_7d2b8ee9_fk_django_co` FOREIGN KEY (`action_object_content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `notifications_notifi_actor_content_type_i_0c69d7b7_fk_django_co` FOREIGN KEY (`actor_content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `notifications_notifi_target_content_type__ccb24d88_fk_django_co` FOREIGN KEY (`target_content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `notifications_notification_recipient_id_d055f3f0_fk_blog_user_id` FOREIGN KEY (`recipient_id`) REFERENCES `blog_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "notifications_notification"
#


#
# Structure for table "online_status_onlinestatus"
#

DROP TABLE IF EXISTS `online_status_onlinestatus`;
CREATE TABLE `online_status_onlinestatus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `last_login` datetime(6) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`),
  CONSTRAINT `online_status_onlinestatus_user_id_95fafa56_fk_blog_user_id` FOREIGN KEY (`user_id`) REFERENCES `blog_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "online_status_onlinestatus"
#


#
# Structure for table "socialaccount_socialaccount"
#

DROP TABLE IF EXISTS `socialaccount_socialaccount`;
CREATE TABLE `socialaccount_socialaccount` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `provider` varchar(30) NOT NULL,
  `uid` varchar(191) NOT NULL,
  `last_login` datetime(6) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `extra_data` longtext NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `socialaccount_socialaccount_provider_uid_fc810c6e_uniq` (`provider`,`uid`),
  KEY `socialaccount_socialaccount_user_id_8146e70c_fk_blog_user_id` (`user_id`),
  CONSTRAINT `socialaccount_socialaccount_user_id_8146e70c_fk_blog_user_id` FOREIGN KEY (`user_id`) REFERENCES `blog_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "socialaccount_socialaccount"
#


#
# Structure for table "socialaccount_socialapp"
#

DROP TABLE IF EXISTS `socialaccount_socialapp`;
CREATE TABLE `socialaccount_socialapp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `provider` varchar(30) NOT NULL,
  `name` varchar(40) NOT NULL,
  `client_id` varchar(191) NOT NULL,
  `secret` varchar(191) NOT NULL,
  `key` varchar(191) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "socialaccount_socialapp"
#


#
# Structure for table "socialaccount_socialapp_sites"
#

DROP TABLE IF EXISTS `socialaccount_socialapp_sites`;
CREATE TABLE `socialaccount_socialapp_sites` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `socialapp_id` int(11) NOT NULL,
  `site_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `socialaccount_socialapp_sites_socialapp_id_site_id_71a9a768_uniq` (`socialapp_id`,`site_id`),
  KEY `socialaccount_socialapp_sites_site_id_2579dee5_fk_django_site_id` (`site_id`),
  CONSTRAINT `socialaccount_social_socialapp_id_97fb6e7d_fk_socialacc` FOREIGN KEY (`socialapp_id`) REFERENCES `socialaccount_socialapp` (`id`),
  CONSTRAINT `socialaccount_socialapp_sites_site_id_2579dee5_fk_django_site_id` FOREIGN KEY (`site_id`) REFERENCES `django_site` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "socialaccount_socialapp_sites"
#


#
# Structure for table "socialaccount_socialtoken"
#

DROP TABLE IF EXISTS `socialaccount_socialtoken`;
CREATE TABLE `socialaccount_socialtoken` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` longtext NOT NULL,
  `token_secret` longtext NOT NULL,
  `expires_at` datetime(6) DEFAULT NULL,
  `account_id` int(11) NOT NULL,
  `app_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `socialaccount_socialtoken_app_id_account_id_fca4e0ac_uniq` (`app_id`,`account_id`),
  KEY `socialaccount_social_account_id_951f210e_fk_socialacc` (`account_id`),
  CONSTRAINT `socialaccount_social_account_id_951f210e_fk_socialacc` FOREIGN KEY (`account_id`) REFERENCES `socialaccount_socialaccount` (`id`),
  CONSTRAINT `socialaccount_social_app_id_636a42d7_fk_socialacc` FOREIGN KEY (`app_id`) REFERENCES `socialaccount_socialapp` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "socialaccount_socialtoken"
#


#
# Structure for table "tag"
#

DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `created_time` date NOT NULL,
  `modified_time` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "tag"
#


#
# Structure for table "article_tags"
#

DROP TABLE IF EXISTS `article_tags`;
CREATE TABLE `article_tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `article_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `article_tags_article_id_tag_id_9ea24d7b_uniq` (`article_id`,`tag_id`),
  KEY `article_tags_tag_id_55b93824_fk_tag_id` (`tag_id`),
  CONSTRAINT `article_tags_article_id_ebbe35ec_fk_article_id` FOREIGN KEY (`article_id`) REFERENCES `article` (`id`),
  CONSTRAINT `article_tags_tag_id_55b93824_fk_tag_id` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "article_tags"
#

