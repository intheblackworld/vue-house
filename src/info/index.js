import { isMobile } from '../utils/index'
export default {
  address: '接待中心：台灣新北市蘆洲區光榮路120巷1號',
  googleSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.3774958345693!2d121.46310273834531!3d25.089079749129265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a8b459f2ebcd%3A0xf900cb978e851b8e!2zMjQ35paw5YyX5biC6JiG5rSy5Y2A5YWJ5qau6LevMTIw5be3MeiZnw!5e0!3m2!1szh-TW!2stw!4v1609745909583!5m2!1szh-TW!2stw',
  googleLink: 'https://goo.gl/maps/iZvYMG3MbN9TZzrF7',
  phone: '02-8287-6888',
  fbLink: 'https://www.facebook.com/%E4%B9%9D%E6%8F%9A%E7%9B%A7%E7%99%BB%E5%A0%A1-102628871717373/',
  fbMessage: 'https://m.me/102628871717373',
  caseName: '九揚盧登堡',
  indigatorLength: 10,

  houseInfos: [
  /* ['投資興建', '盛泓開發股份有限公司',],
    ['建築設計', '吳文修建築師事務所',],
     ['基地面積', '316坪',],
    ['樓層規劃', '地上8層/ 地下4層',],
    ['規劃戶數', '64戶',],
    ['規劃坪數', '14~24坪',],
    ['座落位置', '台北市信義區吳興街524巷',],
    */
  ],

  gtmCode: [' '], // 可放置多個
  recaptcha_site_key_v2: '6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz',
  recaptcha_site_key: '6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s', // recaptcha v3
  recaptcha_user_token: '6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa',
  order: {
    title: isMobile ? '立即預約' : '立即預約',
    subTitle: ''
  }
}
