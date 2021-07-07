import { isMobile } from '../utils/index'
export default {
  address: '接待會館：新北市鶯歌區鶯歌路138號',
  googleSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.898160807022!2d121.33052711542625!3d24.969579284002585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681f06b2c3b155%3A0xcb0c54b0e24835ff!2zMjM55paw5YyX5biC6bav5q2M5Y2A6bav5q2M6LevMTM46Jmf!5e0!3m2!1szh-TW!2stw!4v1613701470590!5m2!1szh-TW!2stw',
  googleLink: 'https://goo.gl/maps/KSXXeNHshFKyR3eQ7',
  phone: '02-2670-7777',
  fbLink: 'https://www.facebook.com/立瑾Way-102495151749492/',
  fbMessage: 'https://m.me/102495151749492/',
  caseName: '立瑾綻',
  indigatorLength: 10,

  houseInfos: [
    ['投資興建', '立瑾建築機構-立澄建設'],
    ['規劃坪數', ''],
    ['建築設計', '蔡廷芳建築師事務所'],
    ['建照號碼', '110鶯建字第00297號'],
    ['營造公司', '鴻駿營造有限公司'],
    ['不動產信託', ''],

    /* 
投資興建：立瑾建築機構-立澄建設
建築設計：蔡廷芳建築師事務所
營造公司：鴻駿營造有限公司

(右邊)
規劃坪數：
建照號碼：
不動產信託： ['投資興建', '瑞天開發、汎利建設',],
      ['建築設計', '陳逸倫建築師事務所',],
      ['基地面積', '316坪',],
      ['樓層規劃', '地上8層/ 地下4層',],
      ['規劃戶數', '64戶',],
      ['規劃坪數', '14~24坪',],
      ['座落位置', '台北市信義區吳興街524巷',],*/
  ],

  gtmCode: ['NC3LPM7'], // 可放置多個
  recaptcha_site_key_v2: '6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz',
  recaptcha_site_key: '6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s', // recaptcha v3
  recaptcha_user_token: '6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa',
  order: {
    title: isMobile ? '預約賞屋' : '預約賞屋',
    subTitle: ''
  }
}
