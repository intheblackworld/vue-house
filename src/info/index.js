import { isMobile } from '../utils/index'
export default {
  address: '新北市新店區北宜路二段225號',
  googleSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.3706602029324!2d121.5513162154261!3d24.9535006840101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468019a17672335%3A0xf2b049e5845da248!2zMjMx5paw5YyX5biC5paw5bqX5Y2A5YyX5a6c6Lev5LqM5q61MjI16Jmf!5e0!3m2!1szh-TW!2stw!4v1613900894952!5m2!1szh-TW!2stw',
  googleLink: 'https://goo.gl/maps/zhnxsLxHmxTKq3uU9',
  phone: '02-2217-0666',
  fbLink: 'https://www.facebook.com/%E7%BF%A0%E6%9D%BE%E5%9C%92-104854654998745',
  fbMessage: 'https://m.me/104854654998745/',
  caseName: '翠松園',
  indigatorLength: 8,
  houseInfos: [
    ['基地位置', '新北市新店區⽵林路與⽵林路70巷交界',],
    ['接待會館', '新北市新店區北宜路⼆段 225號',],
    ['投資興建', '鈺軒建設股份有限公司',],
    ['建築設計', '王⼭頌建築師',],
    ['⼯程營造', '昌譽營造',],
    ['公設擘劃', '紅林室內裝修設計有限公司',],
    ['建築結構', 'RC 基地⾯積 636.99坪',],
    ['樓層規劃', '地下四層；地上⼗三層',],
    //  ['經  紀  人 ', '呂佳縈',],
    ['坪數規劃', '23、31、57',],
    ['建築代銷', '君頤廣告',],
    ['建造號碼', '107店建字第00254號',],
    ['經紀⼈', '呂佳瑩',],
  ],

  gtmCode: ['P8KH8SW'], // 可放置多個
  //得幫金鑰
  recaptcha_site_key_v2: '6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz',
  recaptcha_site_key: '6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s', // recaptcha v3
  recaptcha_user_token: '6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa',
  order: {
    title: isMobile ? '預約賞屋' : '預約賞屋',
    subTitle: isMobile ? '' : '',
  }
}
