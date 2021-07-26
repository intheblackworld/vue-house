import { isMobile } from '../utils/index'
export default {
  address: '新竹縣湖口鄉文化路112號旁',
  googleSrc:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14479.169226020316!2d121.0159571!3d24.8709422!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfdc5981c60c90c1f!2z5a-M5L6G5qiC5o6l5b6F5pyD6aSo!5e0!3m2!1szh-TW!2stw!4v1627286080384!5m2!1szh-TW!2stw',
  googleLink: 'https://goo.gl/maps/EutYpjp3yR7zEp9x7',
  phone: '03-5971568',
  fbLink: 'https://www.facebook.com/fulaileee',
  fbMessage: 'https://m.me/fulaileee/',
  caseName: '富來樂',
  indigatorLength: 10,

  houseInfos: [
    ['投資興建', '富來建設股份有限公司'],
    ['建築規劃', '張建鴻建築事務所'],
    ['建築營造', '萬代福營造有限公司'],
    ['建照號碼', '(108)府建字第00597號'],
    ['規劃戶數', '2棟，住家74戶，店面6戶'],
    ['基地面積', '498.52坪'],
  ],

  gtmCode: ['TDJZ5DF'], // 可放置多個
  recaptcha_site_key_v2: '6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz',
  recaptcha_site_key: '6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s', // recaptcha v3
  recaptcha_user_token: '6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa',
  order: {
    title: isMobile ? '預約賞屋' : '預約賞屋',
    subTitle: '若想了解建案資訊，歡迎填寫表單或來電洽詢，將由專人為您服務，謝謝！'
  }
}
