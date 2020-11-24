import { isMobile } from '../utils/index'
export default {
  address: '新北市三重區五谷王北街48號',
  googleSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.5006040482017!2d121.47356631500666!3d25.051016483964386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a8f6eb73de7f%3A0xcd6eec18a60f8730!2zMjQx5paw5YyX5biC5LiJ6YeN5Y2A5LqU6LC3546L5YyX6KGXNDjomZ8!5e0!3m2!1szh-TW!2stw!4v1605628939458!5m2!1szh-TW!2stw',
  googleLink: 'https://goo.gl/maps/1vxT7Dtx5QZctzVP6',
  phone: '02-89856888',
  fbLink: 'https://www.facebook.com/京旺協奏曲-102351781701612/',
  fbMessage: 'https://m.me/102351781701612/',
  caseName: '京旺協奏曲',
  indigatorLength: 10,

  houseInfos: [
    ['投資興建', '京旺開發建設股份有限公司'],
    ['公設設計', '如榆建築及設計事務所'],
    ['結構設計', '竺樺結構技師事務所'],
    ['建案位置', '新北市三重區五谷王北街48號'],
    ['建築設計', '呂建勳建築師事務所'],
    ['景觀設計', '三十三設計有限公司'],
    ['建築代銷', '聯碩行銷股份有限公司'],
    ['建照號碼', '109重建字第00491'],
  ],

  gtmCode: ['WX44LWQ'], // 可放置多個
  recaptcha_site_key_v2: '6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz',
  recaptcha_site_key: '6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s', // recaptcha v3
  recaptcha_user_token: '6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa',
  order: {
    title: isMobile ? '預約賞屋' : '預約賞屋',
    subTitle: ''
  }
}
