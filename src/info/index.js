import { isMobile } from '../utils/index'
export default {
  address: '接待會館：台北市信義區吳興街494巷1號',
  googleSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.3236488381526!2d121.56724321500612!3d25.023088283977494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa4d0e7249c9%3A0xbeb38f2915eaf757!2zMTEw5Y-w5YyX5biC5L-h576p5Y2A5ZCz6IiI6KGXNDk05be3MeiZnw!5e0!3m2!1szh-TW!2stw!4v1604889101708!5m2!1szh-TW!2stw',
  googleLink: 'https://goo.gl/maps/4ea739yYEjrDbS6W8',
  phone: '02-2541-0606',
  fbLink: 'https://www.facebook.com/中山直美-115702496966413',
  fbMessage: 'https://m.me/115702496966413',
  caseName: '信義CASA',
  indigatorLength: 10,

  houseInfos: [
    ['投資興建', '鐵冠建設股份有限公司',],
    ['建築設計', '鄭復綱建築師事務所',],
    ['工程營造', '昌譽營造股份有限公司',],
    ['公設擘劃', '紅林室內裝修設計有限公司',],
    ['基地面積', '約197坪',],
    ['樓層規劃', '地上10層/地下3層',],
    ['坪數規劃', '23-28坪',],
    ['建築代銷', '君頤廣告',],
  //  ['經  紀  人 ', '呂佳縈',],
    ['座落位置', '台北市中山區新生北路二段76巷10-20號',],
  ],

  gtmCode: ['WX44LWQ'], // 可放置多個
  recaptcha_site_key_v2: '6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz',
  recaptcha_site_key: '6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s', // recaptcha v3
  recaptcha_user_token: '6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa',
  order: {
    title: isMobile ? '立即預約' : '立即預約',
    subTitle: ''
  }
}
