import { isMobile } from '../utils/index'
export default {
  address: '台北市文山區羅斯福路五段216號之2號',
  googleSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1807.9674460345761!2d121.53746605862119!3d25.002328214429987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa1d136e1fb5%3A0x8bc6de2b2de9cc7c!2zMTE25Y-w5YyX5biC5paH5bGx5Y2A576F5pav56aP6Lev5LqU5q61MjE26Jmf!5e0!3m2!1szh-TW!2stw!4v1612773335927!5m2!1szh-TW!2stw',
  googleLink: 'https://goo.gl/maps/7jRLW7dWRUQpvdG77',
  phone: '02-2933-1888',
  fbLink: 'https://www.facebook.com/%E8%87%AA%E6%85%A2%E8%97%8F-338064510833000',
  fbMessage: 'https://m.me/338064510833000',
  caseName: '翠松園',
  indigatorLength: 10,
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
    ['坪數規劃', '23、30、57',],
    ['建築代銷', '君頤廣告',],
    ['建造號碼', '107店建字第00254號',],
    ['經紀⼈', '呂佳縈',],
  ],

  gtmCode: ['KT3B2F7'], // 可放置多個
  //得幫金鑰
  recaptcha_site_key_v2: '6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC',
  recaptcha_site_key: '6LfGUjEaAAAAAFR9F5m6Lg1RfS-D07l64KWmoLcK', // recaptcha v3
  recaptcha_user_token: '6LfGUjEaAAAAAFR9F5m6Lg1RfS-D07l64KWmoLcK',
  order: {
    title: isMobile ? '搶先預約' : '搶先預約',
    subTitle: isMobile ? '若想了解建案資訊，歡迎填寫表單或來電洽詢<br />將由專人為您服務，謝謝！' : '若想了解建案資訊，歡迎填寫表單或來電洽詢，將由專人為您服務，謝謝！',
  }
}
