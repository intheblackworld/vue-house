import { isMobile } from '@/utils'
export default {
  address: isMobile ? '接待中心：<br />111台北市士林區至誠路一段138號' : '接待中心：111台北市士林區至誠路一段138號',
  googleSrc:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3613.0092505244456!2d121.5325418!3d25.1015482!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442affb2b813fe5%3A0x2b6e5fe12ac71db2!2z5aSq5a2Q6I-v5aiB!5e0!3m2!1szh-TW!2stw!4v1595324694704!5m2!1szh-TW!2stw',
  googleLink: 'https://goo.gl/maps/cDhuzh9GKooBmQcR8',
  phone: '02-2838-2188',
  fbLink:
    'https://www.facebook.com/home2188/',
  fbMessage: 'https://m.me/home2188/',
  caseName: '太子華威',
  houseInfos: [
    ['', ''],
    ['投資興建', '太子建設、華威聯合'],
    ['建築設計', 'PGA團隊-周夢龍建築師'],
    ['企劃銷售', '梁茂廣告有限公司'],
    ['使用執照', '107使字0131號'],
    ['營造公司', '大成工程股份有限公司'],
    ['座落位置', '至誠路一段138號'],
  ],
  exterior: '../projects/tv/s1/exterior.jpg',

  gtmCode: ['TBJR8C6'], // 可放置多個
  recaptcha_site_key_v2: '6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz',
  recaptcha_site_key: '6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s', // recaptcha v3
  recaptcha_user_token: '6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa',
  order: {
    title: '預約賞屋',
    subTitle: ''
  }
}
