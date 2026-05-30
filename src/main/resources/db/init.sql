-- CloudMuseum 数据库初始化脚本

CREATE DATABASE IF NOT EXISTS cloud_museum
    DEFAULT CHARACTER SET utf8mb4
    DEFAULT COLLATE utf8mb4_unicode_ci;

USE cloud_museum;

-- ========== 用户表 ==========
CREATE TABLE IF NOT EXISTS users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(64) NOT NULL UNIQUE COMMENT '用户名',
    password VARCHAR(256) NOT NULL COMMENT '密码(BCrypt)',
    role VARCHAR(16) NOT NULL DEFAULT 'USER' COMMENT '角色: USER/ADMIN',
    phone VARCHAR(20) DEFAULT NULL COMMENT '手机号',
    email VARCHAR(128) DEFAULT NULL COMMENT '邮箱',
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户表';

-- ========== 文章表（博物馆介绍、历史、研学课程文章等） ==========
CREATE TABLE IF NOT EXISTS articles (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(256) NOT NULL COMMENT '标题',
    content TEXT NOT NULL COMMENT '内容',
    type VARCHAR(32) NOT NULL COMMENT '类型: INTRO/HISTORY/COURSE/NEWS',
    cover_image VARCHAR(512) DEFAULT NULL COMMENT '封面图URL',
    external_link VARCHAR(512) DEFAULT NULL COMMENT '外部链接',
    author VARCHAR(64) DEFAULT NULL COMMENT '作者',
    status VARCHAR(16) NOT NULL DEFAULT 'PUBLISHED' COMMENT '状态: PUBLISHED/DRAFT',
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_type (type),
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='文章表';

-- ========== 文物表 ==========
CREATE TABLE IF NOT EXISTS relics (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(256) NOT NULL COMMENT '文物名称',
    description TEXT COMMENT '文物描述',
    era VARCHAR(64) DEFAULT NULL COMMENT '年代',
    category VARCHAR(64) DEFAULT NULL COMMENT '分类',
    image_url VARCHAR(512) DEFAULT NULL COMMENT '图片URL',
    model_url VARCHAR(512) DEFAULT NULL COMMENT '3D模型URL(Unity包)',
    external_link VARCHAR(512) DEFAULT NULL COMMENT '外部链接（官方介绍页）',
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_era (era),
    INDEX idx_category (category)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='文物表';

-- ========== 研学课程表 ==========
CREATE TABLE IF NOT EXISTS courses (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(256) NOT NULL COMMENT '课程标题',
    description TEXT COMMENT '课程简介',
    content TEXT COMMENT '课程详情',
    cover_image VARCHAR(512) DEFAULT NULL COMMENT '封面图URL',
    max_capacity INT NOT NULL DEFAULT 30 COMMENT '最大容量',
    current_reserved INT NOT NULL DEFAULT 0 COMMENT '当前已预约人数',
    price DECIMAL(10,2) DEFAULT NULL COMMENT '价格',
    schedule_info TEXT COMMENT '课程安排(JSON)',
    status VARCHAR(16) NOT NULL DEFAULT 'ACTIVE' COMMENT '状态: ACTIVE/INACTIVE',
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='研学课程表';

-- ========== 预约表 ==========
CREATE TABLE IF NOT EXISTS reservations (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL COMMENT '用户ID',
    type VARCHAR(16) NOT NULL COMMENT '类型: INDIVIDUAL/GROUP',
    course_id BIGINT DEFAULT NULL COMMENT '关联课程ID（可为空，表示非课程预约）',
    visit_date DATE NOT NULL COMMENT '参观日期',
    visitor_count INT NOT NULL DEFAULT 1 COMMENT '参观人数',
    status VARCHAR(16) NOT NULL DEFAULT 'PENDING' COMMENT '状态: PENDING/CONFIRMED/CANCELLED',
    contact_name VARCHAR(64) NOT NULL COMMENT '联系人姓名',
    contact_phone VARCHAR(20) NOT NULL COMMENT '联系人电话',
    remarks TEXT COMMENT '备注',
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_user_id (user_id),
    INDEX idx_course_id (course_id),
    INDEX idx_status (status),
    INDEX idx_visit_date (visit_date)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='预约表';

-- ========== 资讯公告/研学宣传表 ==========
CREATE TABLE IF NOT EXISTS announcements (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(256) NOT NULL COMMENT '标题',
    content TEXT NOT NULL COMMENT '正文',
    type VARCHAR(16) NOT NULL COMMENT 'NOTICE(官方公告) / EDUCATION(研学宣传)',
    cover_image VARCHAR(512) DEFAULT NULL COMMENT '封面图(仅EDUCATION)',
    status VARCHAR(16) NOT NULL DEFAULT 'PUBLISHED' COMMENT 'PUBLISHED / DRAFT',
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_type (type),
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='资讯公告/研学宣传表';

-- ========== 招募报名表 ==========
CREATE TABLE IF NOT EXISTS recruitments (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(64) NOT NULL COMMENT '姓名',
    phone VARCHAR(20) NOT NULL COMMENT '手机号',
    email VARCHAR(128) DEFAULT NULL COMMENT '邮箱',
    age INT DEFAULT NULL COMMENT '年龄',
    school VARCHAR(256) DEFAULT NULL COMMENT '学校/单位',
    intro TEXT COMMENT '申请理由/简介',
    type VARCHAR(16) NOT NULL COMMENT 'VOLUNTEER / ACTIVITY',
    status VARCHAR(16) NOT NULL DEFAULT 'PENDING' COMMENT 'PENDING / APPROVED / REJECTED',
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_type (type),
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='招募报名表';

-- ========== 网站访问统计表 ==========
CREATE TABLE IF NOT EXISTS site_visits (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    page_path VARCHAR(256) NOT NULL DEFAULT '/' COMMENT '页面路径',
    visit_date DATE NOT NULL COMMENT '访问日期',
    pv_count INT NOT NULL DEFAULT 0 COMMENT '访问次数(PV)',
    uv_count INT NOT NULL DEFAULT 0 COMMENT '独立访客数(UV)',
    ip_addresses TEXT COMMENT 'IP地址集合(逗号分隔)',
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY uk_page_date (page_path, visit_date),
    INDEX idx_visit_date (visit_date)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='网站访问统计表';

-- ========== 初始管理员账号 ==========
-- 密码 "admin123" 的 BCrypt 哈希
INSERT INTO users (username, password, role) VALUES
    ('admin', '$2a$10$HuPxpHv.2j3/1mqLPxvz.ePgOC4oQ0nr75EzakGFBV9xzHLbsqKUm', 'ADMIN');
