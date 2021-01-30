import { isMobile } from '../utils/index'
export default {
  address: '接待會館：新北市五股區新五路三段157號',
  googleSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.287345766993!2d121.4453082150074!3d25.092132683945135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a8aa48dd86d3%3A0x98a97449a6066c9b!2zMjQ45paw5YyX5biC5LqU6IKh5Y2A5paw5LqU6Lev5LiJ5q61MTU36Jmf!5e0!3m2!1szh-TW!2stw!4v1611984342402!5m2!1szh-TW!2stw',
  googleLink: 'https://goo.gl/maps/sfyZDRjcqF315UjD6',
  phone: '02-2292-2255',
  fbLink: 'https://www.facebook.com/%E9%80%A3%E9%9B%B2%E6%99%AF%E7%B2%8B-105504811458953',
  fbMessage: 'https://m.me/105504811458953',
  caseName: '天空之邑',
  indigatorLength: 10,

  houseInfos: [
    ['投資興建', '連雲建築・展曜建設股份有限公司'],
    ['建築設計', '吉村靖孝建築設計事務所'],
    ['建築代銷', '聯碩行銷股份有限公司'],
   // ['建照號碼', ' '],
    ['建築規劃', '吳興宇建築師事務所'],
    ['營建施工', '展瑞營造'],
    ['建案位置', '文山區仙岩路16巷32號、仙岩公園首排'],
    ['經紀人', '徐福龍 (91) 北市經證字第00848號'],
  ],

  gtmCode: ['MGNM9FV'], // 可放置多個
  recaptcha_site_key_v2: '6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz',
  recaptcha_site_key: '6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s', // recaptcha v3
  recaptcha_user_token: '6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa',
  order: {
    title: isMobile ? '預約賞屋' : '預約賞屋',
    subTitle: ''
  }
}
