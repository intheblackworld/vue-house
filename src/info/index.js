import { isMobile } from '@/utils'
export default {
  address: isMobile ? '接待中心：<br />新北市板橋區四川路1段67號' : '接待中心：新北市板橋區四川路1段67號',
  googleSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.827395987948!2d121.4574644154466!3d25.00598034556714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346802a7ab132eb1%3A0xba251ab14efef2ed!2zMjIw5paw5YyX5biC5p2_5qmL5Y2A5Zub5bed6Lev5LiA5q61NjfomZ8!5e0!3m2!1szh-TW!2stw!4v1592186782931!5m2!1szh-TW!2stw',
  googleLink: 'https://goo.gl/maps/DLpgBj4Bp3xDxpt76',
  phone: '02-29516688',
  fbLink:
    'https://www.facebook.com/%E6%96%B0%E6%9D%BFThe-View-110815740621987/',
  fbMessage: 'https://m.me/110815740621987',
  caseName: '新板The View',

  //新板The View 建案資訊有調整版型
  houseInfos: [
     ['', '高層景觀飯店寓所 府中商圈200米'],
     ['投資興建', '國宸建設'],
     ['基地面積', '494坪'],
     ['建築設計', '蔡錦勝建築師事務所'],
     ['坪數規劃', '15-21坪'],
     ['貴賓專線', '02-29516688'],
     ['接待會館', '新北市板橋區四川路1段67號'],
     ['個案官網', 'tv.h35.tw']
  ],
  //新板The View 建案資訊 外觀圖
  exterior: '../projects/tv/s1/exterior.jpg',

  gtmCode: ['MBXXVBQ','TBJTV9J'], // 可放置多個
  recaptcha_site_key_v2: '6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz',
  recaptcha_site_key: '6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s', // recaptcha v3
  recaptcha_user_token: '6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa',
  order: {
    title: '預約賞屋',
    subTitle: ''
  }
}
