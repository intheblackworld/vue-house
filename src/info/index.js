import { isMobile } from '../utils/index'
export default {
  address: '接待中心：新北市土城區青雲路252號',
  googleSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7233.154697618221!2d121.45600908501937!3d24.98049061914176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346802c5a4279dd1%3A0x5f5db61bcd3099b6!2zMjM25paw5YyX5biC5Zyf5Z-O5Y2A6Z2S6Zuy6LevMjUy6Jmf!5e0!3m2!1szh-TW!2stw!4v1608692951677!5m2!1szh-TW!2stw',
  googleLink: 'https://goo.gl/maps/9SX54qd38JiK4bm6A',
  phone: '02-2263-5666',
  fbLink: 'https://www.facebook.com/%E6%82%85%E5%B3%B0-WE%E6%99%82%E4%BB%A3-103275648265850',
  fbMessage: 'https://m.me/103275648265850',
  caseName: '悅峰WE時代',
  indigatorLength: 10,

  houseInfos: [
  ['投資興建', '悅峰建設股份有限公司',],
    ['建築設計', '吳文修建築師事務所',],
   /*   ['基地面積', '316坪',],
    ['樓層規劃', '地上8層/ 地下4層',],
    ['規劃戶數', '64戶',],
    ['規劃坪數', '14~24坪',],
    ['座落位置', '台北市信義區吳興街524巷',],
    */
  ],

  gtmCode: ['TD53M2C'], // 可放置多個
  recaptcha_site_key_v2: '6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz',
  recaptcha_site_key: '6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s', // recaptcha v3
  recaptcha_user_token: '6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa',
  order: {
    title: isMobile ? '立即預約' : '立即預約',
    subTitle: ''
  }
}
