import { isMobile } from '../utils/index'
export default {
  address: '台北市松江路252巷',
  googleSrc:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3614.258618139814!2d121.5325556!3d25.0592222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAzJzMzLjIiTiAxMjHCsDMxJzU3LjIiRQ!5e0!3m2!1szh-TW!2stw!4v1615801563403!5m2!1szh-TW!2stw',
  googleLink: 'https://goo.gl/maps/jRV143mcJBkciBKx7',
  phone: '02-29668888',
  fbLink: 'https://www.facebook.com/佳元松江-103677951795416',
  fbMessage: 'https://m.me/103677951795416',
  caseName: '佳元松江',
  indigatorLength: 10,

  houseInfos: [
    ['投資興建', '佳元機構 佳元地產股份有限公司'],
    ['建築規劃', '陳克聚建築師事務所'],
    ['公設規劃', '與作設計事業 劉守書'],
    ['結構設計', '聯邦工程顧問'],
    ['綠建築顧問', '辰宇永續建築'],
    ['建照號碼', '北市109建字第0283號'],
    ['建築代銷', '聯碩行銷股份有限公司'],
    ['經紀人', '戴子順 (96)竹縣地經字第00150號'],
  ],

  gtmCode: ['TDK2DLT'], // 可放置多個
  recaptcha_site_key_v2: '6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz',
  recaptcha_site_key: '6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s', // recaptcha v3
  recaptcha_user_token: '6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa',
  order: {
    title: isMobile ? '預約賞屋' : '預約賞屋',
    subTitle: ''
  }
}
