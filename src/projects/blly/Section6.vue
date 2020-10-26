 <template>
  <div>
    <div class="section6">
      <img src="./s6/bg.png" alt="" class="bg-img" v-if="isPC">
      <img src="./m/6/bg.png" alt="" class="build absolute" v-if="isMobile">
      <img src="./s6/img.jpg" alt="" class="img absolute" data-aos="fade" data-aos-delay="200">
      <img src="./s1/hr.png" alt="" class="hr absolute">
      <h3 class="title absolute" data-aos="fade" data-aos-delay="600">Living Movement</h3>
      <svg v-if="!isMobile" xmlns="http://www.w3.org/2000/svg" class="cls-1 absolute" viewBox="0 0 771 2"><line y1="1" x2="770.41" y2="1"/></svg>
      <h3 class="subtitle absolute" data-aos="fade" data-aos-delay="400">至此境 得從容 享自在</h3>
      <div class="desc absolute" data-aos="fade" data-aos-delay="800">
        現場完工實景
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.cls-1{fill:none;stroke:#666;stroke-miterlimit:10;stroke-width:2px;
  width: size(771);
  height:size(2);
  left:size(0);
  top: size(820);
  animation: letterDraw1 .5s linear 2s forwards;
  stroke-dasharray: 771;
  stroke-dashoffset: 771;
}
@keyframes letterDraw1 {
    to {
        stroke-dashoffset: 0
    }
}
.section6 {
  width: size(1920);
  height: 100vh;
  min-height: size(1080);
  background-color: #fff;
}

.bg-img {
  width: 100vw;
  height: size(1080);
  min-height: size(1080);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    top: 0;
    left: auto;
    right: 0;
    // height: auto;
  }
}

.img {
  width: size(472);
  top: size(351);
  left: size(140);
}

.title {
  width: size(626);
  top: size(692);
  left: size(135);
  font-size: size(67.2);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.85;
  letter-spacing: size(-2.69);
  text-align: left;
  color: #a3a3a3;
  white-space: nowrap;
  font-family: "TrajanPro";
}

.subtitle {
  width: size(557);
  top: size(335);
  left: size(686);
  font-size: size(55.1);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: size(3.31);
  text-align: left;
  color: #231815;
  white-space: nowrap;
}

.desc {
  width: size(340);
  top: size(637);
  left: size(624);
  font-size: size(20.1);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.61;
  letter-spacing: size(1.2);
  text-align: left;
  color: #808080;
}

.hr {
  width: 100vw;
  height: auto;
  left: 0;
  top: size(-220);
  transform: scaleX(-1);
}

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
    min-height:sizem(604);
    max-height:sizem(700);
    height:calc(100vh - 63px);
  }

  .bg-img {
    width: 100vw;
    height: 100%;
    min-height: 100%;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    object-fit: cover;

    &:nth-child(1) {
      top: 0;
      left: auto;
      right: 0;
      // height: auto;
    }
  }

  .img {
    width: sizem(310);
    top:calc(35.8%  - 27.6vw);
    left: sizem(33);
  }

  .build {
    width: 100vw;
    bottom: 0;
    left: 0;
  }

  .title {
    width: sizem(205);
    top: sizem(26);
    left: sizem(32);
    font-size: sizem(22);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.64;
    letter-spacing: sizem(-0.88);
    text-align: left;
    color: #a3a3a3;
    white-space: nowrap;
  }

  .subtitle {
    width: sizem(253);
    top: sizem(58);
    left: sizem(32);
    font-size: sizem(25);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: sizem(1.5);
    text-align: left;
    color: #231815;
    white-space: nowrap;
  }

  .desc {
    width: sizem(340);
    top:calc(35.8%  + 27.6vw);
    left: sizem(266);
    font-size: sizem(12);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.61;
    letter-spacing: sizem(1.2);
    text-align: left;
    color: #808080;
  }

  .hr {
    display: none;
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

  created() {},

  mounted() {},

  computed: {},
}
</script>
