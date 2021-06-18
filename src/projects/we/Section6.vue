  <template>
  <div class="section6">
    <div>
      <div class="i1"></div>
      <svg class="i2" id="i2" viewBox="0 0 500 500"><polyline points="430,437 67,437 67,60 "/></svg>
      <img src="./s6/1.jpg" alt="" class="img">
      <img src="./s6/title.png" alt="最wow建材" class="logo">
      <div class="title" v-if="isPC">
        建材從優 享受從寬 CP值最威
      </div>
      <div class="title" v-if="isMobile">
        建材從優 享受從寬<br />CP值最威
      </div>
      <div class="desc">
        從管道間排水防疫的PAPA &amp; STUDOR建材，搭配當層排氣工法，到媲美大戶的日本INAX全系列衛浴五金、DORIS整體廚具、YKK氣密窗、冠軍磁磚、德國精工木地板…全數納入你的威生活。
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section6 {
  width: size(1920);
  // height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  overflow: hidden;
  position: relative;
  background: #6A9F87;
  background-size: auto;
}

.bg-img {
  width: size(1920);
  height: 100%;
  min-height: size(900);
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;

  &:nth-child(1) {
    position: relative;
  }
}

.logo {
  @include img_r_pc(465, 105, 209);
}

.img {
  @include img_l_pc(482, 270, 308);
  border-radius: size(55)
}


.i1 { 
  @include div_l_pc(1500, 1500,0 ,-820);
  top: calc(50% + -750 * 100vw / 1920);
  border: size(140) solid #81BFA3;border-radius: 50%;
}
.i2{@include img_l_pc(500, 255, 830);fill:none;stroke:#076D1C;stroke-width:95;stroke-linecap:round;stroke-miterlimit:10;}


.title {
  @include img_r_pc(732, 290, 205);
  font-size: size(45);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.47;
  letter-spacing: size(0.29);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.desc {
  @include img_r_pc(680, 380,255);
  font-size: size(25);
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.97;
  letter-spacing:0.02em;
  text-align: justify;
  color: #000;
}
/*
.t1 {
  width: size(751);
  top: size(483);
  left: size(585);
}

.t2 {
  width: size(751);
  top: size(711);
  left: size(585);
}
*/
@media only screen and (max-width: 1440px) {
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section6 {
    width: 100vw;
    min-height: sizem(470);
    max-height: sizem(822);
    height: sizem(822);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }
  .logo {
    @include img_r_m(239, 72, 18);
  }

  .img {
    @include img_l_m(338, 149, 18);
    border-radius: 20px;
  }

.i2{@include img_r_m(140, 650, 12);transform: rotate(270deg);}



  .title {
    @include img_r_m(223, 522, 119);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: sizem(1.25);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .desc {
    @include img_r_m(280, 608, 62);
    font-size: sizem(15);
    line-height: 1.7;
    letter-spacing:0.05em;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section6',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
    }
  },

  methods: {},

  mounted() {},

  created() {},

  computed: {},
}
</script>
