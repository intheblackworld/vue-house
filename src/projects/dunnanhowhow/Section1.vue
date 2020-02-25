<template>
  <div class="section1">
    <div class="bg relative section-kv kv animated">
      <div class="kv_banner">
        <div class="kv_logo">
          <parallax breakpoint="(min-width: 68px)" :speed-factor="0.1" direction="up">
            <img src="./s1/logo.png" alt="敦南好好 3米6自由式｜2房好生活" />
          </parallax>
        </div>

        <h1 title="敦南好好 3米6自由式｜2房好生活" class="subtitle">
          <div class="kv_subslogan">
            <parallax breakpoint="(min-width: 68px)" :speed-factor="1.2" direction="down">
              <img src="./s1/kv_slogan.png" alt="敦南好好 就愛市中心首購住大安" />
            </parallax>
          </div>
        </h1>
      </div>
      <div class="kv_decoration">
        <div class="ball ball-1">
          <div class="ring">
            <parallax breakpoint="(min-width: 68px)" :speed-factor="1" direction="up">
              <img class="js-parallax" data-parallax="2" src="./s1/ring.png" alt="敦南好好 就愛市中心首購住大安" />
            </parallax>
          </div>
          <parallax breakpoint="(min-width: 68px)" :speed-factor="1.2" direction="up">
            <img class="js-parallax" data-parallax="1" src="./s1/ball_1.png" alt="敦南好好 就愛市中心首購住大安" />
          </parallax>
        </div>
        <div class="ball ball-2">
          <parallax breakpoint="(min-width: 68px)" :speed-factor="1.2" direction="up">
            <img class="js-parallax" data-parallax="1" src="./s1/ball_2.png" alt="敦南好好 就愛市中心首購住大安" />
          </parallax>
        </div>
        <div class="ball ball-3">
          <parallax breakpoint="(min-width: 68px)" :speed-factor="1.2" direction="up">
            <img class="js-parallax" data-parallax="1" src="./s1/ball_3.png" alt="敦南好好 就愛市中心首購住大安" />
          </parallax>
        </div>
        <div class="ball ball-5">
          <div class="perfume perfume-1">
            <parallax breakpoint="(min-width: 68px)" :speed-factor="1.2" direction="up">
              <img
                class="js-parallax"
                data-parallax="2"
                src="./s1/perfume_1.png"
                alt="敦南好好 就愛市中心首購住大安"
              />
            </parallax>
          </div>
          <parallax breakpoint="(min-width: 68px)" :speed-factor="1.2" direction="up">
            <img class="js-parallax" data-parallax="1" src="./s1/ball_5.png" alt="敦南好好 就愛市中心首購住大安" />
          </parallax>
        </div>
        <div class="perfume perfume-2">
          <parallax breakpoint="(min-width: 68px)" :speed-factor="1.2" direction="up">
            <img
              class="js-parallax"
              data-parallax="2"
              src="./s1/perfume_2.png"
              alt="敦南好好 就愛市中心首購住大安"
            />
          </parallax>
        </div>

        <div class="flag flag-1">
          <parallax breakpoint="(min-width: 68px)" :speed-factor="1.2" direction="up">
            <img class="js-parallax" data-parallax="3" src="./s1/flag_1.png" alt="敦南好好 就愛市中心首購住大安" />
          </parallax>
        </div>
        <div class="flag flag-2">
          <parallax breakpoint="(min-width: 68px)" :speed-factor="1.2" direction="up">
            <img class="js-parallax" data-parallax="3" src="./s1/flag_2.png" alt="敦南好好 就愛市中心首購住大安" />
          </parallax>
        </div>
      </div>
      <div class="scroll-down" v-scroll-to="{ element: `#section2`, offset: offset }">
        <div class="scroll-text">scroll down</div>
        <img src="./s1/arrow-down.png" alt class="after" />
      </div>
      <!--    <img src="./s3/bg1.png" alt class="img-bg" />
      </parallax>-->
      <!-- <img src="./s1/logo.png" alt="頤昌豐岳" class="img" data-aos="fade" data-aos-delay="700" /> -->
      <!-- <icon class="icon logo-icon" :data="logo" />
      <img src="./s1/light3.png" alt="" class="img light3">-->
      <!--/div>
      <div v-else>
      <img src="./s1/mo/bg.jpg" alt="" class="img"-->
    </div>
  </div>
</template>
<style lang="scss">
.Masthead,
.Masthead__image {
  height: auto !important;
  min-height: 23.875rem;
}
.Masthead__image > img {
  height: auto !important;
  min-height: auto !important;
}

.Masthead__image.is-parallax > img {
  height: auto !important;
  min-height: auto !important;
}

@media (max-width: 768px) {
  .Masthead,
  .Masthead__image {
    height: auto !important;
    min-height: 12.875rem;
  }
}
</style>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
  height: 100vh;
  max-height: 1080px;
  background-color: #cb191d;
  background-image: url('./s1/kv_city_bg.jpg');
  background-position: bottom;
  background-repeat: no-repeat;
  margin: 0 120px 0 0;
}

img {
  width: 100%;
}

.flag {
  position: absolute;
}
.flag-1 {
  max-width: 37px;
  width: 9.8666666667%;
}
@media (min-width: 768px) {
  .flag-1 {
    max-width: 98px;
    width: 5.1041666667%;
  }
}
.flag-2 {
  max-width: 43px;
  width: 11.4666666667%;
}
@media (min-width: 768px) {
  .flag-2 {
    max-width: 112px;
    width: 5.8333333333%;
  }
}

@media screen and (max-height: 800px) and (min-width: 992px) and (max-width: 1199px) {
  .flag-1 {
    max-width: 49px;
  }
  .flag-2 {
    max-width: 46px;
  }
}
.ball {
  position: absolute;
}

.kv_banner {
  position: absolute;
  top: 22.4887556222%;
  left: 50%;
  transform: translateX(-50%);
  width: 56.8%;
  z-index: 2;
  opacity: 0;
  transition: 0.7s opacity;
}
@media (min-width: 768px) {
  .kv_banner {
    max-width: 300px;
  }
}
@media (min-width: 1200px) {
  .kv_banner {
    max-width: 423px;
  }
}
@media screen and (max-height: 800px) and (min-width: 992px) {
  .kv_banner {
    max-width: 212px;
    top: 22.2222222222%;
  }
}
.kv_logo {
  position: relative;
  z-index: 1;
  margin-bottom: 13px;
}

.kv_decoration {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}

.scroll-text {
  font-size: 20px;
  margin-bottom: 5px;
  font-family: Didot, 'Didot LT STD', 'Times New Roman', serif;
  font-style: italic;
  color: #fff;
}

.after {
  width: 16px;
  height: 8px;
  margin: 5px auto 0;
}

.scroll-down {
  position: absolute;
  display: block;
  z-index: 2;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
}
@media screen and (max-height: 800px) and (min-width: 992px) {
  .scroll-down {
    bottom: 20px;
  }
}

.kv .ball-1 {
  width: 214px;
  bottom: -100%;
  left: -100%;
  z-index: 2;
}
@media (min-width: 768px) {
  .kv .ball-1 {
    max-width: 571px;
    width: 29.7395833333%;
  }
}
.kv .ball-2 {
  width: 160px;
  top: -100%;
  left: -100%;
}
@media (min-width: 1440px) {
  .kv .ball-2 {
    max-width: 321px;
    width: 16.71875%;
  }
}
.kv .ball-3 {
  width: 192px;
  top: -100%;
  right: -100%;
}
@media (min-width: 768px) {
  .kv .ball-3 {
    max-width: 571px;
    width: 29.7395833333%;
  }
}
.kv .ball-4 {
  width: 32.8638497653%;
  top: -10.6666666667%;
  left: -16.4319248826%;
  opacity: 0;
}
@media (min-width: 768px) {
  .kv .ball-4 {
    max-width: 185px;
  }
}
.kv .ball-5 {
  width: 150px;
  right: -100%;
  bottom: -100%;
}
@media (min-width: 768px) {
  .kv .ball-5 {
    max-width: 389px;
    width: 20.2604166667%;
  }
}
.kv .ball-1,
.kv .ball-3 {
  transition-delay: 0.49s;
}
.kv .ball-4 {
  transition-delay: 0.9s;
}
.kv .ball-2,
.kv .ball-5 {
  transition-delay: 0.21s;
}
.kv .ring {
  position: absolute;
  z-index: 2;
  width: 57.476635514%;
  top: -59.3457943925%;
  right: 7.476635514%;
}
@media (min-width: 768px) {
  .kv .ring {
    width: 57.6182136602%;
    top: -56.7425569177%;
    right: 1.9264448336%;
  }
}
.kv .perfume {
  position: absolute;
  z-index: 2;
}
.kv .perfume-1 {
  width: 88%;
  right: 18%;
  top: -73.3333333333%;
}
@media (min-width: 768px) {
  .kv .perfume-1 {
    width: 117.9948586118%;
    right: 2.5706940874%;
    top: -104.1131105398%;
  }
}
.kv .perfume-2 {
  width: 13.8666666667%;
  bottom: 13.1934032984%;
  left: 30.6666666667%;
}
@media screen and (max-height: 800px) and (min-width: 992px) and (max-width: 1199px) {
  .kv .perfume-2 {
    max-width: 120px;
  }
}
@media (min-width: 768px) {
  .kv .perfume-2 {
    width: 12.5%;
    bottom: 7.037037037%;
    left: 23.75%;
  }
}
.kv .flag {
  z-index: 2;
}
.kv .flag-1 {
  top: 44.0779610195%;
  left: 5.8666666667%;
}
@media (min-width: 768px) {
  .kv .flag-1 {
    top: 31.5740740741%;
    left: 20.9375%;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .kv .flag-1 {
    left: 15%;
  }
}
.kv .flag-2 {
  top: 27.5862068966%;
  right: 5.8666666667%;
}
@media (min-width: 768px) {
  .kv .flag-2 {
    top: 37.962962963%;
    right: 25.3125%;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .kv .flag-2 {
    right: 15%;
  }
}
.kv .ring,
.kv .perfume,
.kv .flag-1,
.kv .flag-2 {
  opacity: 0;
  transition-property: all;
  transition-duration: 0.7s;
  transition-delay: 1.2s;
}
.section-kv.animated .kv_banner {
  opacity: 1;
}
.section-kv.animated .ball {
  z-index: 1;
}
.section-kv.animated .ball-2 {
  top: -80px;
  left: -74px;
}
@media (min-width: 768px) {
  .section-kv.animated .ball-2 {
    top: -5.2777777778%;
    left: -2.3958333333%;
  }
}
.section-kv.animated .ball-5 {
  bottom: -46px;
  right: -43px;
}
@media (min-width: 768px) {
  .section-kv.animated .ball-5 {
    bottom: -11.4814814815%;
    right: 4.375%;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .section-kv.animated .ball-5 {
    bottom: -5%;
  }
}
.section-kv.animated .ball-1 {
  bottom: -42px;
  left: -116px;
  z-index: 2;
}
@media (min-width: 768px) {
  .section-kv.animated .ball-1 {
    bottom: -14.4444444444%;
    left: -8.90625%;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .section-kv.animated .ball-1 {
    bottom: -5%;
  }
}
.section-kv.animated .ball-3 {
  top: -57px;
  right: -56px;
}
@media (min-width: 768px) {
  .section-kv.animated .ball-3 {
    top: -13.5185185185%;
    right: -4.1145833333%;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .section-kv.animated .ball-3 {
    top: -5%;
    right: -4%;
  }
}
.section-kv.animated .ball-4 {
  opacity: 1;
}
.section-kv.animated .ring,
.section-kv.animated .perfume,
.section-kv.animated .flag-1,
.section-kv.animated .flag-2 {
  opacity: 1;
}

.subtitle {
  position: absolute;
  left: 0;
  right: 0;
  top: 130%;
  margin: 0 auto;
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    height: 100vh;
    position: relative;
    margin: 0;
  }

  .subtitle {
    position: absolute;
    left: 0;
    right: 0;
    top: 130%;
    margin: 0 auto;
  }
}

@media screen and (max-width: 576px) {
  html.android.mobile .kv {
    height: 93vh;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import Parallax from '@/components/Parallax.vue'

export default {
  name: 'section1',

  components: {
    Parallax,
  },

  data() {
    return {
      isMobile,
      hide: false,
    }
  },

  computed: {},

  methods: {},

  created() {},
}
</script>
