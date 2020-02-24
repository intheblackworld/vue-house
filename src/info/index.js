import { isMobile } from '@/utils'
export default {
  address: isMobile ? '接待中心：<br />106台北市大安區基隆路三段20-1號' : '接待中心：106台北市大安區基隆路三段20-1號',
  googleSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.4133154679057!2d121.54507481500598!3d25.02004388397876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa2ff4247133%3A0x798f754d4f0ebbca!2zMTA25Y-w5YyX5biC5aSn5a6J5Y2A5Z-66ZqG6Lev5LiJ5q61MjAtMeiZnw!5e0!3m2!1szh-TW!2stw!4v1582457601443!5m2!1szh-TW!2stw',
  googleLink: 'https://goo.gl/maps/3ZwyNvyAcLRSsaEK9',
  phone: '07-9555588',
  fbLink:
    'https://www.facebook.com/dunnanhowhow/',
  fbMessage: 'https://m.me/dunnanhowhow/',
  caseName: '敦南好好',
  houseInfos: [
    // ['投資興建', '築禾建設股份有限公司'],
    // ['廣告代銷', '新誠家廣告有限公司'],
    // ['建築設計', '吳成榮建築師事務所'],
    // ['公設設計', '磐石設計有限公司'],
    // ['景觀設計', '老圃造園工程股份有限公司'],
    // ['基地面積', '3,361坪'],
    // ['樓層規劃', '27F/B5'],
    // ['坪數規劃', '2房(30~31坪) 、3房(42~46坪) 、3+1房(48坪)、4房(59~73坪)']
  ],

  gtmCode: ['TDQRFKC'], // 可放置多個
  recaptcha_site_key_v2: '6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz',
  recaptcha_site_key: '6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s', // recaptcha v3
  recaptcha_user_token: '6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa',
  order: {
    title: '預約賞屋',
    subTitle: ''
  }
}
