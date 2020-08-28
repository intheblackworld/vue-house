 <template>
  <div>
    <div class="section6">
      <img
        src="./s6/bg.jpg"
        alt=""
        class="bg-img"
        v-if="isPC"
      >
      <img
        src="./s6/2.png"
        alt=""
        class="bg-img"
        data-aos="fade-down"
        data-aos-delay="0"
        v-if="isPC"
      >
      <img
        src="./s6/1.png"
        alt=""
        class="bg-img cloud"
        data-aos="fade-right"
        data-aos-delay="800"
        v-if="isPC"
      >

      <img
        src="./s6/bgm.jpg"
        alt=""
        class="bg-img"
        v-if="isMobile"
      >
      <img
        src="./s6/2_m.png"
        alt=""
        class="bg-img house"
        data-aos="fade-down"
        data-aos-delay="0"
        v-if="isMobile"
      >
      <img
        src="./s6/1_m.png"
        alt=""
        class="bg-img cloud"
        data-aos="fade-right"
        data-aos-delay="800"
        v-if="isMobile"
      >
      <div
        class="border absolute"
        data-aos="fade-up"
        data-aos-delay="200"
      ></div>
      <div
        class="title absolute"
        data-aos="fade-up"
        data-aos-delay="400"
      >地標推手<br />築億精工</div>
      <div
        class="subtitle absolute"
        data-aos="fade-up"
        data-aos-delay="600"
      >尺度｜決定胸懷與眼界</div>
      <div
        class="desc absolute"
        data-aos="fade-up"
        data-aos-delay="800"
      >【築億丰盛】前後雙臨路，創造基地退縮永久棟距，簡潔俐落外觀線條，盡顯悠遠大器。面向蘭州公園，居家視野開闊。
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section6 {
  width: size(1920);
  height: size(900);
  min-height: size(900);
  overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: size(900);
  min-height: size(900);
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

.border {
  width: size(773);
  height: size(263);
  top: size(287);
  right: size(190);
  border: solid 3.9px #ffffff;
}

.title {
  width: size(328);
  top: size(299);
  right: size(596);
  white-space: nowrap;
  font-size: size(81);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.34;
  letter-spacing: 1.62px;
  text-align: left;
  color: #ffffff;
}

.subtitle {
  width: size(289);
  top: size(353);
  right: size(275);
  font-size: size(26);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 3.59px;
  text-align: left;
  color: #000000;
  white-space: nowrap;
}

.desc {
  width: size(350);
  top: size(408);
  right: size(214);
  font-size: size(16);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.45;
  letter-spacing: 1.92px;
  text-align: left;
  color: #4d4d4d;
}

.cloud {
  animation: cloud 5s 0s ease-in-out infinite alternate-reverse;
}

@keyframes cloud {
  to {
    margin-left: 150px;
  }
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
    height:100%;
    min-height:100%;
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
    z-index: 1;margin-left: 0px;
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
