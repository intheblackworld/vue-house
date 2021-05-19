import { isMobile } from '../utils/index'
export default {
  address: '接待中心：桃園市蘆竹區大福路145號',
  googleSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.58242481766!2d121.24736666770482!3d25.020645183978576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34682102351fe553%3A0x80d36070ed716d14!2z5qSN5pil5qi5!5e0!3m2!1szh-TW!2stw!4v1617774811235!5m2!1szh-TW!2stw',
  googleLink: 'https://goo.gl/maps/aMWGVKfV4YeWXcgM7',
  phone: '03-3235850',
  fbLink: 'https://www.facebook.com/植春樹-103761678229425',
  fbMessage: 'https://m.me/103761678229425',
  caseName: '植春樹',
  indigatorLength: 10,

  houseInfos: [
    ['全案規劃', '萬家興建設'],
    ['營建施工', '英順營造'],
    ['景觀設計', '太研規劃 吳書原景觀建築師'],
    ['規劃顧問', '春秋國際'],
    ['建築美學', '自然洋行建築團隊 曾志偉建築師'],
    ['企劃執行', '玖壹士廣告．葛里芬廣告'],
  ],

  gtmCode: ['NXPZLM6'], // 可放置多個
  recaptcha_site_key_v2: '6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz',
  recaptcha_site_key: '6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s', // recaptcha v3
  recaptcha_user_token: '6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa',
  order: {
    title: isMobile ? '預約賞屋' : '預約賞屋',
    subTitle: ''
  }
}
