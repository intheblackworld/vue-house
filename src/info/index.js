import { isMobile } from '../utils/index'
export default {
  address: '桃園市慈文路及慈文路827巷交叉路口',
  googleSrc:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8600.20220053574!2d121.28767738507747!3d25.00216823810232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc6f7bac8fdc14ce7!2z6bS76IuRIOaOpeW-heS4reW_gw!5e0!3m2!1szh-TW!2stw!4v1620958964456!5m2!1szh-TW!2stw',
  googleLink: 'https://goo.gl/maps/EHzYa4sNo23dyS3X9',
  phone: '03-3788899',
  fbLink: 'https://www.facebook.com/%E9%B4%BB%E8%8B%91-103436774533254/',
  fbMessage: 'https://m.me/103436774533254',
  caseName: '鴻苑',
  indigatorLength: 10,

  houseInfos: [
    ['投資興建', '鴻築建設股份有限公司'],
    ['營造公司', '國城營造有限公司'],
    ['建造執照', '105桃市都建執照字第00580-01號'],
    ['建築設計', '閤康聯合建築師事務所'],
    ['基地面積', '1607.37坪'],
    ['棟戶規劃', '1幢，3棟，146戶住家，11戶店面'],
  ],

  gtmCode: ['NPNGRRS','MT6W4V6','NWXW9MN'], // 可放置多個
  recaptcha_site_key_v2: '6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz',
  recaptcha_site_key: '6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s', // recaptcha v3
  recaptcha_user_token: '6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa',
  order: {
    title: isMobile ? '預約賞屋' : '預約賞屋',
    subTitle: isMobile ? '配合政府防疫政策，即日起賞屋採<br>「全面預約制」，賞屋前敬請先預約登記。' :'配合政府防疫政策，即日起賞屋採「全面預約制」，賞屋前敬請先預約登記。'
  }
}
