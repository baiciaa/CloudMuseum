/**
 * 图片资源配置 — 集中管理所有装饰性图片路径
 * 替换图片只需修改此文件，代码中的引用通过此配置获取
 */
export const IMAGES = {
  // Hero 区背景轮播（1920×1080 横屏图）
  heroSlides: [
    '/images/bg/panorama-01.jpg', // 蓬莱阁(原分辨率)
  ],

  // 板块装饰纹理（可平铺纹理图）
  textures: {
    history: '',   // TODO: 古画/古地图纹理
    relics: '',    // TODO: 青铜器/陶器纹理
    tour: '',      // TODO: 蓬莱风光纹理
    explore: '',   // TODO: 3D场景截图
    education: '', // TODO: 书法/古籍纹理
  },

  // 旅行攻略卡片缩略图
  tourCards: {
    location: '', // TODO: 地图/定位
    weather: '',  // TODO: 蓬莱气候
    crowd: '',    // TODO: 景区人流
    ticket: '',   // TODO: 门票
  },

  // 云端漫游入口封面
  exploreCover: '', // TODO: 3D漫游场景预览图
  explorePreview: '', // TODO: 全景预览缩略图

  // 研学中心卡片
  educationCourse: '',     // TODO: 研学课程照片
  educationReservation: '', // TODO: 团体活动照片

  // 页脚装饰
  footerDecoration: '', // TODO: 博物馆建筑剪影/线描
};
