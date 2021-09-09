import { isMobile } from '../utils/index'
export default {
  address: '接待會館：新北市淡水區濱海路一段221號',
  googleSrc:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14441.667847824308!2d121.4297412!3d25.1891574!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442baae99a969a5%3A0xe237443136d4542c!2zMjUx5paw5YyX5biC5reh5rC05Y2A5r-x5rW36Lev5LiA5q61MjIx6Jmf!5e0!3m2!1szh-TW!2stw!4v1619420285955!5m2!1szh-TW!2stw',
  googleLink: 'https://goo.gl/maps/ni3y9Fgx5pkodSaPA',
  phone: '02-2805-5588',
  fbLink: 'https://www.facebook.com/名軒海樂地-Ocean-Holiday-100895095426997',
  fbMessage: 'https://m.me/100895095426997',
  caseName: '名軒海樂地',
  indigatorLength: 10,

  houseInfos: [
    ['投資興建', '麗寶集團-名軒開發'],
    ['門廳公設', '總監-李美文、杜墨設計、十口人聯合建築師事務所'],
    ['建築設計', '呂文程、林大俊建築師'],
    ['景觀規劃', '綠點有限公司'],
    ['結構設計', '豐立工程顧問有限公司'],
    ['建築工程', '中福營造股份有限公司'],
    ['外觀美學＆燈光設計', '陳明偉建築師'],
    ['企劃銷售', '綠堡機構-寶穎廣告'],
  ],

  gtmCode: ['MD49K2X','TDZ62ZS'], // 可放置多個
  recaptcha_site_key_v2: '6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz',
  recaptcha_site_key: '6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s', // recaptcha v3
  recaptcha_user_token: '6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa',
  order: {
    title: isMobile ? '預約賞屋' : '預約賞屋',
    subTitle: '若想了解建案資訊，歡迎填寫表單或來電洽詢，將由專人為您服務，謝謝！'
  }
}
