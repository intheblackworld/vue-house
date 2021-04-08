import { isMobile } from '../utils/index'
export default {
  address: '接待會館：台北市信義區吳興街494巷1號',
  googleSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1807.6618242421!2d121.56833755808036!3d25.02308829599437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abf46a6ca363%3A0x533977bb64281c23!2z5L-h576pQ0FTQeaOpeW-heacg-mkqA!5e0!3m2!1szh-TW!2stw!4v1604894660043!5m2!1szh-TW!2stw',
  googleLink: 'https://goo.gl/maps/XieUejYHgZL8ayCF9',
  phone: '02-8789-6600',
  fbLink: 'https://www.facebook.com/%E4%BF%A1%E7%BE%A9casa-110034637544471',
  fbMessage: 'https://m.me/110034637544471',
  caseName: '信義CASA',
  indigatorLength: 10,

  houseInfos: [
    ['投資興建', '瑞天開發、汎利建設',],
    ['建築設計', '陳逸倫建築師事務所',],
    ['基地面積', '316坪',],
    ['樓層規劃', '地上8層/ 地下4層',],
    ['規劃戶數', '64戶',],
    ['規劃坪數', '14~24坪',],
    ['座落位置', '台北市信義區吳興街524巷',],
  ],

  gtmCode: ['MW7GBQQ'], // 可放置多個
  recaptcha_site_key_v2: '6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz',
  recaptcha_site_key: '6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s', // recaptcha v3
  recaptcha_user_token: '6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa',
  order: {
    title: isMobile ? '立即預約' : '立即預約',
    subTitle: ''
  }
}
