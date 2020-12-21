  <template>
  <div class="section6">
    <div>
      <img src="./s6/i1.png" alt="" class="i1">
      <img src="./s6/i2.png" alt="" class="i2">
      <img src="./s6/1.jpg" alt="" class="img">
      <img src="./s6/logo.png" alt="最wow建材" class="logo">
      <div class="title">
        建材從優 享受從寬 CP值最威
      </div>
      <div class="desc">
        從管道間排水防疫的PAPA & STUDOR建材，搭配當層排氣工法，到媲美大戶的日本INAX全系列衛浴五金、DORIS整體廚具、YKK氣密窗、冠軍磁磚、德國精工木地板….全數納入你的威生活。
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
  background: #34c2ce;
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
}

.i1 {
  @include img_l_pc(677, 0, 0);
}

.i2 {
  @include img_l_pc(461, 266, 849);
}

.title {
  @include img_r_pc(732, 247, 205);
  font-size: size(57);
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
  @include img_r_pc(728, 362, 209);
  font-size: size(33);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.97;
  letter-spacing: normal;
  text-align: left;
  color: #050101;
  // white-space: nowrap;
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
    max-height: sizem(812);
    height: calc(100vh - 63px);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }
  .logo {
    width: sizem(308);
    top: sizem(243);
    left: sizem(35);
  }

  .t1 {
    width: sizem(308);
    top: sizem(309);
    left: sizem(35);
  }

  .t2 {
    width: sizem(308);
    top: sizem(403);
    left: sizem(35);
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
