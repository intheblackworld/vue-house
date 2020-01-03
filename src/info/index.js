import { isMobile } from '@/utils'
export default {
  address: isMobile ? '接待中心：<br />桃園市龜山區樂善二路、<br />樂善一路口' : '接待中心：桃園市龜山區樂善二路、樂善一路口',
  googleSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903.6608972404138!2d121.38686952921384!3d25.046166698997933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAyJzQ2LjIiTiAxMjHCsDIzJzE0LjciRQ!5e0!3m2!1szh-TW!2stw!4v1577702442368!5m2!1szh-TW!2stw',
  googleLink: 'https://goo.gl/maps/aKE25sLzC15gi8yB7',
  phone: '03-3277366',
  fbLink:
    'https://www.facebook.com/%E5%8F%8B%E6%96%87%E5%8C%96-100596024670205/',
  fbMessage: 'https://m.me/100596024670205',
  caseName: '頤昌豐岳',
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

  gtmCode: ['NV2FC34'], // 可放置多個
  recaptcha_site_key_v2: '6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz',
  recaptcha_site_key: '6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s', // recaptcha v3
  recaptcha_user_token: '6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa',
  order: {
    title: isMobile ? '豐收大林口<br />岳見新生活' : '豐收大林口  岳見新生活',
    subTitle: '請留下您的大名、電話、進行預約賞屋!'
  }
}
