import { isMobile } from '../utils/index'
export default {
  address: '接待會館：新北市五股區成泰路三段171號(對面)',
  googleSrc:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7231.658232756988!2d121.2874233!3d25.0059219!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAwJzIxLjMiTiAxMjHCsDE3JzMwLjUiRQ!5e0!3m2!1szh-TW!2stw!4v1618267854178!5m2!1szh-TW!2stw',
  googleLink: 'https://goo.gl/maps/9xdcURNeHnyLXxxc8',
  phone: '02-2292-2255',
  fbLink: 'https://www.facebook.com/%E5%98%89%E7%92%9F%E4%B8%80%E5%93%81%E7%A1%AF-102835311925785',
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

  gtmCode: ['W95H7JW'], // 可放置多個
  recaptcha_site_key_v2: '6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz',
  recaptcha_site_key: '6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s', // recaptcha v3
  recaptcha_user_token: '6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa',
  order: {
    title: isMobile ? '預約賞屋' : '預約賞屋',
    subTitle: ''
  }
}
