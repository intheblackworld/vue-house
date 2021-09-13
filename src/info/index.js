import { isMobile } from '../utils/index'
export default {
  address: '台北市北投區稻香路161巷',
  googleSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.813664623801!2d121.48627601500841!3d25.141989783921876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442afb255a147cb%3A0x1fb2054eb2fa0c5a!2zMTEy5Y-w5YyX5biC5YyX5oqV5Y2A56i76aaZ6LevMTYx5be3!5e0!3m2!1szh-TW!2stw!4v1625897944660!5m2!1szh-TW!2stw',
  googleLink: 'https://goo.gl/maps/yZtHjckuCPk28Unq7',
  phone: '02-28979888',
  fbLink: 'https://www.facebook.com/YANGMINGMANOR',
  fbMessage: 'https://m.me/YANGMINGMANOR/',
  caseName: '綠山丘',
  indigatorLength: 10,

  houseInfos: [
    ['投資興建', '興益發建設股份有限公司'],
    ['外觀設計', '李天鐸建築事務所'],
    ['建築規劃', '梁正芳建築事務所'],
    ['公設門廳', '墨工空間'],
    ['景觀園藝', '李天鐸建築事務所'],
    ['建築代銷', '自建自售'],
    ['建照號碼', '107建字第0182號'],
    ['基地面積', '近3000坪'],
    ['坪數規劃', '26-38坪 2-3房'],
    ['建築規劃', '地上五層、地下三層'],
  ],

  gtmCode: ['KC6DKK5'], // 可放置多個
  recaptcha_site_key_v2: '6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz',
  recaptcha_site_key: '6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s', // recaptcha v3
  recaptcha_user_token: '6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa',
  order: {
    title: isMobile ? '預約賞屋' : '預約賞屋',
    subTitle: ''
  }
}
