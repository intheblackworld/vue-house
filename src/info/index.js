import { isMobile } from '../utils/index'
export default {
  address: '接待會館：新北市鶯歌區鶯歌路128號旁',
  googleSrc:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3616.9040482748223!2d121.330933!3d24.969379!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU4JzEwLjUiTiAxMjHCsDE5JzU3LjUiRQ!5e0!3m2!1szh-TW!2stw!4v1609137511275!5m2!1szh-TW!2stw',
  googleLink: 'https://goo.gl/maps/5QJkBQZhCXpT7kbWA',
  phone: '02-2670-7777',
  fbLink: 'https://www.facebook.com/立瑾Way-102495151749492/  ',
  fbMessage: 'https://m.me/102495151749492/',
  caseName: '立瑾WAY',
  indigatorLength: 10,

  houseInfos: [
  /*  ['投資興建', '瑞天開發、汎利建設',],
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
