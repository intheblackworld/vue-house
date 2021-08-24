<template>
  <div class="section5">
    <img src="./s5/1.png" :alt="`${info.caseName}_img`" class="img" data-aos="fade-down" data-aos-delay="600">
    <h3 class="desc" v-if="isPC" data-aos="fade-up" data-aos-delay="400">
      勤美（1532）集團成立於1972年，鑄造業起家，為亞洲第一專業鑄造廠，迄今為台灣（勤美，股票代號TW1532）、香港（勤美達，股票代號HK0319）雙上市集團，為大中華地區最大民營鑄造集團。近年轉型跨國控股公司，旗下擁有建設公司、大型商場、文化美學、基金會等大型事業部，追求人文美善的多角化經營。
    </h3>
    <div class="title" v-if="isPC" data-aos="fade-up" data-aos-delay="200">
      台灣香港雙上市，跨國控股集團<br />職人精神，專心做好一件事
    </div>
    <div class="subtitle" v-if="isPC" data-aos="fade-up" data-aos-delay="400">
      勤美集團
    </div>
    <a href="http://www.cmp.com.tw/"  target="_blank" class="btn flex-c"  data-aos="fade-up" data-aos-delay="600">前往勤美集團網站</a>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section5 {
  width: 100%;
  height: size(900);
  min-height: size(900);
  max-height: auto;
  background-size: cover;
  background-attachment: fixed;
  background-color: #fff;

  // margin: 0 0 size(400) 0;

  // &:before {
  //   content: ' ';
  //   position: fixed;
  //   z-index: -1;
  //   top: 0;
  //   right: 0;
  //   bottom: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background: url('./s1/bg.jpg') center 0 no-repeat;
  //   background-size: cover;
  // }
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  // opacity: 0.5;
}

.img {
  @include img_l_pc(1050, 93, 143);
}

.title {
  @include img_r_pc(464, 262, 143);
  font-size: size(34);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #267f9c;
  white-space: nowrap;
}

.desc {
  @include img_r_pc(464, 375, 143);
  font-size: size(16);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: size(1.6);
  text-align: left;
  color: #3e3a39;
}

.subtitle {
  @include img_r_pc(32, 71, 54);
  font-size: size(28);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: center;
  color: #f3b2c1;
  writing-mode: vertical-lr;
  text-orientation: upright;
}

.btn {
  @include div_r_pc(238, 71, 550, 363);
  font-size: size(26);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #267f9c;
  text-decoration: none;
  border: 1px solid #267f9c;
  transition: all .3s;

  &:hover {
    color: #fff;
    background-color: #267f9c;
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section5 {
    width: 100vw;
    min-height: sizem(530);
    max-height: sizem(530);
    height: sizem(530);
    // margin: 0 0 -12vw 0;
    // background-size: auto size-m(750);
    z-index: initial;
    // &:before {
    //   background-image: url('./s1/bg_m.jpg');
    // }
  }

  .img {
    @include img_c_m(315, 110);
  }

  .title {
    @include img_r_m(88, 43, 31);
    font-size: sizem(20);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: sizem(2.6);
    text-align: center;
    color: #cc8b00;
    white-space: nowrap;
  }

  .subtitle {
    @include img_r_m(156, 77, 31);
    font-size: sizem(20);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: sizem(2.6);
    text-align: center;
    color: #000;
    white-space: nowrap;
  }

  .desc {
    @include img_r_m(315, 347, 30);
    font-size: sizem(16);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.86;
    letter-spacing: sizem(0.7);
    text-align: left;
    color: #4d4d4d;
    white-space: normal;
  }

  .t_style {
    @include img_r_m(218, 0, 0);
    animation: strech 5s ease-in-out alternate infinite;
  }

  .cloud-bg {
    .cloud {
      animation: cloud 5s ease-in-out alternate infinite;
    }

    .cloud1 {
      @include img_l_m(213, 92, -20);
      transform: translateX(-10%);
    }

    .cloud2 {
      @include img_r_m(200, 520, -20);
      transform: translateX(-15%);
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section5',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      // blockIndex: 0,
    }
  },

  methods: {},

  mounted() {
    // setTimeout(() => {
    //   this.blockIndex = 1
    // }, 6000)
  },

  created() {},

  computed: {},
}
</script>
