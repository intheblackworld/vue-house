import { isMobile } from '../utils/index'
export default {
  address: '接待會館：新北市五股區成泰路三段171號(對面)',
  googleSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.2907122557103!2d121.44305321542826!3d25.092018683945213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a601fb82c025%3A0xa0eb02e41c8374ec!2zMjQ45paw5YyX5biC5LqU6IKh5Y2A5oiQ5rOw6Lev5LiJ5q61MTcx6Jmf!5e0!3m2!1szh-TW!2stw!4v1612155242808!5m2!1szh-TW!2stw',
  googleLink: 'https://goo.gl/maps/BEp2gd6h3otsGDwd6',
  phone: '02-2292-2255',
  fbLink: 'https://www.facebook.com/sky0222922255/',
  fbMessage: 'https://m.me/102772851839341',
  caseName: '天空之邑',
  indigatorLength: 10,

  houseInfos: [
    ['投資興建', '寶德建設股份有限公司'],
    ['建築設計', '陳朝雄 A8建築師事務所'],
    ['結構工程', '吳志強 永安結構顧問'],

    ['門廳公設', '袁世賢 呈境室內設計'],
    ['園藝景觀', '徐世萃 大漢設計工程'],
    ['格局規劃', '2-3房(17 -29坪)'],
    ['公設比例', '32.5%'],

    ['樓層規劃', '地上24層，地下5層'],
    ['基地面積', '1946坪'],
    ['建照號碼', '103股建字第00674號'],
  ],

  gtmCode: ['W95H7JW','KBMFDGX'], // 可放置多個
  recaptcha_site_key_v2: '6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz',
  recaptcha_site_key: '6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s', // recaptcha v3
  recaptcha_user_token: '6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa',
  order: {
    title: isMobile ? '預約賞屋' : '預約賞屋',
    subTitle: ''
  }
}
