import { isMobile } from '../utils/index'
export default {
  address: '桃園市中壢區大同路186號',
  googleSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.2977358294615!2d121.21881161537769!3d24.955982847567636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468224a47c85d5f%3A0xe9ce48c6dd51fd48!2zMzIw5qGD5ZyS5biC5Lit5aOi5Y2A5aSn5ZCM6LevMTg26Jmf!5e0!3m2!1szh-TW!2stw!4v1630914350973!5m2!1szh-TW!2stw',
  googleLink: 'https://goo.gl/maps/2v4Ded5m8UZowX19A',
  phone: '(03)426-0888',
  fbLink: 'https://www.facebook.com/麗昇陽-106746481749011',
  fbMessage: 'https://m.me/106746481749011',
  caseName: '麗昇陽',
  indigatorLength: 10,

  houseInfos: [
    ['投資興建', '昇陽建設企業股份有限公司'],
    ['行銷企劃', '君翊行銷．鴻陞廣告'],
    ['建築規劃', '三大聯合建築師事務所'],
    ['建照號碼', '(108)桃市都建執照字第會壢01427號'],
    ['營造工程', '辰豐營造股份有限公司'],
    ['經紀人', '(109)新北經字第003716號'],
    ['基地位址', '桃園市中壢區中榮路、康樂街口'],
  ],

  gtmCode: ['M7N7FTG'], // 可放置多個
  recaptcha_site_key_v2: '6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz',
  recaptcha_site_key: '6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s', // recaptcha v3
  recaptcha_user_token: '6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa',
  order: {
    title: isMobile ? '聯絡我們' : '聯絡我們',
    subTitle: ''
  }
}
