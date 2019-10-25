import { isMobile, isTablet } from '@/utils'

export default {
  address: isMobile ? '接待會館∕新莊中平路．幸福路口<br />（J-MART購物中心旁）' : '接待會館∕新莊中平路．幸福路口（J-MART購物中心旁）',
  googleSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.5451434410493!2d121.44280061500659!3d25.049505883965097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7eb24a84fb3%3A0x4deb385ab8b7622f!2z55K95ZyS!5e0!3m2!1szh-TW!2stw!4v1571729290072!5m2!1szh-TW!2stw',
  googleLink: 'https://goo.gl/maps/cNWzTtwa4wvJt91i6',
  phone: '02-8991-7555',
  fbLink: 'https://www.facebook.com/璽園-世代團圓-109813180429618/',
  fbMessage: 'https://m.me/109813180429618',
  caseName: '璽園',

  houseInfos: [
    ['投資興建', '翔富建設股份有限公司'],
    ['廣告代銷', '大元廣告行銷團隊'],
    ['公設設計', '呈境室內裝修設計'],
    ['基地面積', '1065坪']
  ],

  gtmCode: ['5TFPQVG'], // 可放置多個
  order: {
    title: '預約賞屋',
    subTitle: ''
  }
}
