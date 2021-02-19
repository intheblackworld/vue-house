import { isMobile } from '../utils/index'
export default {
  address: '接待會館：新北市鶯歌區鶯歌路128號',
  googleSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.8828102185057!2d121.33095381542624!3d24.970101484002257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681ebf3c16ad83%3A0xde99a93dad8c79e0!2zMjM55paw5YyX5biC6bav5q2M5Y2A6bav5q2M6LevMTI46Jmf!5e0!3m2!1szh-TW!2stw!4v1613699900552!5m2!1szh-TW!2stw',
  googleLink: 'https://goo.gl/maps/yyCENALD9UWEme1T6',
  phone: '02-2670-7777',
  fbLink: 'https://www.facebook.com/立瑾Way-102495151749492/  ',
  fbMessage: 'https://m.me/102495151749492/',
  caseName: '立瑾WAY',
  indigatorLength: 10,

  houseInfos: [
    ['投資興建', '立瑾建築機構'],
    ['不動產信託', '陽信商業銀行'],
    ['建照號碼', '109鶯建字第00527號'],
    ['建築規劃', '劉錦鐘建築師事務所'],
    ['規劃坪數', '24~36坪'],
    ['廣告銷售', '鈞驛行銷團隊'],

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
