import { isMobile } from '../utils/index'
export default {
  address: '桃園市中壢區大同路186號',
  googleSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.2977358294615!2d121.21881161537769!3d24.955982847567636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468224a47c85d5f%3A0xe9ce48c6dd51fd48!2zMzIw5qGD5ZyS5biC5Lit5aOi5Y2A5aSn5ZCM6LevMTg26Jmf!5e0!3m2!1szh-TW!2stw!4v1630914350973!5m2!1szh-TW!2stw',
  googleLink: 'https://goo.gl/maps/2v4Ded5m8UZowX19A',
  phone: '',
  fbLink: 'https://www.facebook.com/',
  fbMessage: 'https://m.me/',
  caseName: '麗昇陽',
  indigatorLength: 10,

  houseInfos: [
    ['投資興建', ''],
    ['門廳公設', ''],
    ['建築設計', ''],
    ['景觀規劃', ''],
    ['結構設計', ''],
    ['企劃銷售', ''],
  ],

  gtmCode: ['MD49K2X','TDZ62ZS'], // 可放置多個
  recaptcha_site_key_v2: '6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz',
  recaptcha_site_key: '6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s', // recaptcha v3
  recaptcha_user_token: '6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa',
  order: {
    title: isMobile ? '預約賞屋' : '預約賞屋',
    subTitle: ''
  }
}
