<template>
  <div class="section3">
    <img src="./s3/bg.jpg" :alt="`${info.caseName}_img`" class="bg-img">
    <h3 class="desc" v-if="isPC" data-aos="fade-up" data-aos-delay="400">
      攤開中山北路世紀繪卷，台灣第一條現代化大道，40米林蔭壯闊綿延，日本天皇敕使御道，國家外交官道，顯赫人物踏響中山北獨有貴族身世，人文熟釀的精緻風土，終於迎來最懂品味的璞真。中山北路二段最高俯望，23層國際樹海巔峰，天地靜謐，時光盡為奢華而生。
    </h3>
    <div class="title" v-if="isPC" data-aos="fade-up" data-aos-delay="200">
      百年林蔭最高俯望<br />璞真訂製傳世眼界
    </div>
    <div class="subtitle" v-if="isPC" data-aos="fade-up" data-aos-delay="400">
      中山北路
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section3 {
  width: 100%;
  height: size(900);
  min-height: size(900);
  max-height: auto;
  background-size: cover;
  background-attachment: fixed;

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

.title {
  @include img_l_pc(272, 505, 143);
  font-size: size(34);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  white-space: nowrap;
}

.desc {
  @include img_l_pc(464, 618, 143);
  font-size: size(16);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: size(1.6);
  text-align: left;
  color: #fff;
}

.subtitle {
  @include img_l_pc(32, 71, 54);
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
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section3 {
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
  name: 'section3',

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
