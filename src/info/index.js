import { isMobile } from '@/utils'

export default {
  address: isMobile ? '接待中心：<br />台北市信義區 松仁路底' : '接待中心：台北市信義區 松仁路底',
  googleSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7230.737949643077!2d121.5655864!3d25.0215494!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa4db80ba0d5%3A0x770f6becdaf7f7a4!2zMTEw5Y-w5YyX5biC5L-h576p5Y2A5ZCz6IiI6KGXNjAw5be3MjAtMeiZnw!5e0!3m2!1szh-TW!2stw!4v1583661533968!5m2!1szh-TW!2stw',
  googleLink: 'https://goo.gl/maps/qQYKFtHS9KSknH4DA',
  phone: '02-23455888',
  fbLink: 'https://www.facebook.com/%E9%81%94%E6%AC%A3%E4%BF%A1%E7%BE%A9%E6%96%87%E8%8F%AF-110242950514856/',
  fbMessage: 'https://m.me/110242950514856/',
  caseName: '達欣信義文華',
  indigatorLength: 8,
  houseInfos: [
    ['投資興建', '達欣開發股份有限公司'],
    ['建照號碼', '108建字第0228號'],
    ['建築設計', '李祖原聯合建築師事務所'],
    ['公設規劃', '原堂室內裝修工程股份有限公司'],
    ['景觀規劃', '瀚翔景觀國際股份有限公司'],
    ['建築代銷', '聯碩行銷股份有限公司'],
    ['經紀人', '戴子順  (96)竹縣地經字第00150號'],
  ],

  gtmCode: ['5CPWJJQ'], // 可放置多個
  recaptcha_site_key_v2: '6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz',
  recaptcha_site_key: '6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s', // recaptcha v3
  recaptcha_user_token: '6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa',
  order: {
    title: '預約賞屋',
    subTitle: ''
  }
}
