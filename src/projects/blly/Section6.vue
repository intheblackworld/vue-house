 <template>
  <div>
    <div class="section6">
      <img src="./s6/bg.png" alt="" class="bg-img">
      <img src="./s6/img.jpg" alt="" class="img absolute">
      <img src="./s1/hr.png" alt="" class="hr absolute">
      <h3 class="title absolute" data-aos="fade-up" data-aos-delay="600">Living Movement</h3>
      <h3 class="subtitle absolute" data-aos="fade-up" data-aos-delay="400">至此境 得從容 享自在</h3>
      <div class="desc absolute" data-aos="fade-up" data-aos-delay="800">
        現場完工實景
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

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
    height: calc(100vh - 63px);
    min-height: auto;
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

  .house {
    z-index: 2;
  }

  .cloud {
    z-index: 1;
    margin-left: 0px;
    width: calc(100vw + 40px);
    animation: cloud 15s 0s ease-in-out infinite alternate-reverse;
  }

  @keyframes cloud {
    to {
      margin-left: -40px;
    }
  }

  .border {
    width: sizem(331);
    height: sizem(242);
    top: sizem(25);
    right: sizem(21);
    border: solid 2.4px #ffffff;
  }

  .title {
    width: sizem(102);
    top: sizem(45);
    right: 0;
    left: sizem(34);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: 0.5px;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .subtitle {
    width: sizem(289);
    top: sizem(121);
    right: auto;
    left: sizem(34);
    font-size: sizem(20);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: 2.8px;
    text-align: left;
    color: #000000;
    white-space: nowrap;
  }

  .desc {
    width: sizem(310);
    top: sizem(161);
    right: auto;
    left: sizem(34);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: 1.5px;
    text-align: left;
    color: #4d4d4d;
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
