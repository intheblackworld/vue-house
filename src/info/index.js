import { isMobile } from '../utils/index'
export default {
  address: '接待會館：XXXXXXX',
  googleSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14459.458624532934!2d121.54206080973437!3d25.038666778046455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abc5a2d1f3fb%3A0xd9024adfb242723c!2z5piO5puc55m-6LKo5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1637140119206!5m2!1szh-TW!2stw',
  googleLink: 'https://goo.gl/maps/auQVah6XWmRxmCEo9',
  phone: '02-0000000',
  fbLink: 'https://www.facebook.com/',
  fbMessage: 'https://m.me/',
  caseName: 'template',
  indigatorLength: 10,

  houseInfos: [
    ['投資興建', 'XXXXX',],
    ['建築設計', 'XXXXX',],
    ['基地面積', 'XXXXX',],
    ['樓層規劃', 'XXXXX',],
    ['規劃戶數', 'XXXXX',],
    ['規劃坪數', 'XXXXX',],
    ['座落位置', 'XXXXX',],
  ],

  gtmCode: [''], // 可放置多個
  recaptcha_site_key_v2: '6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz',
  recaptcha_site_key: '6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s', // recaptcha v3
  recaptcha_user_token: '6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa',
  order: {
    title: isMobile ? '立即預約' : '立即預約',
    subTitle: ''
  }
}
