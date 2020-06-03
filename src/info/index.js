import { isMobile } from '@/utils'
export default {
  address: isMobile ? '接待中心：<br />高雄市前金區五福成功路口' : '接待中心：高雄市前金區五福成功路口',
  googleSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.869891284376!2d120.29292241496046!3d22.621333285157736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM3JzE2LjgiTiAxMjDCsDE3JzQyLjQiRQ!5e0!3m2!1szh-TW!2stw!4v1580885557863!5m2!1szh-TW!2stw',
  googleLink: 'https://goo.gl/maps/1anUYRhVrMSXcW119',
  phone: '07-9555588',
  fbLink:
    'https://www.facebook.com/聯上鉑金-112092063649467',
  fbMessage: 'https://m.me/112092063649467',
  caseName: '聯上鉑金',
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

  gtmCode: ['PQJ64CK'], // 可放置多個
  recaptcha_site_key_v2: '6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz',
  recaptcha_site_key: '6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s', // recaptcha v3
  recaptcha_user_token: '6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa',
  order: {
    title: '預約賞屋',
    subTitle: ''
  }
}
