<template>
  <div>
    <div class="bg">
      <div class="bg-color"></div>
      <div v-if="!isMobile">
        <img
          v-lazy="require('./s1/bg1.png')"
          alt
          class="bg-img"
        />
        <img
          :src="require('./s1/toplogo.png')"
          alt
          class="top-logo"
          data-aos="fade"
          data-aos-delay="300"
        />
        <img
          :src="require('./s1/logo.gif')"
          alt="京城鳳翔"
          class="logo"
          data-aos="fade"
          data-aos-delay="300"
        />
        <img
          :src="require('./s1/text.png')"
          alt
          class="title-img"
          data-aos="fade"
          data-aos-delay="300"
        />
      </div>
      <div :class="`dialog ${isShowDialog ? '' : 'hide'}`">
        <div
          class="close"
          @click="closeDialog"
        >
          <img
            src="../jh/s4/close.png"
            alt
          />
        </div>
        <div class="dialog-content">
          <iframe
            width="560"
            height="315"
            :src="link"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div
        class="relative section"
        id="section2"
        v-if="!isMobile"
      >
        <img
          v-lazy="require('./s1/bg2.png')"
          alt
          class="bg-img img-1"
        />
        <img
          v-lazy="require('./s1/bg3.jpg')"
          alt
          class="bg-img img-2"
        />
        <div class="button" @click="showDialog('http://fs.h35.tw/output/index.html')">720度 環景</div>
      </div>
      <div v-if="isMobile">
        <img
          :src="require('./s1/logo.gif')"
          alt
          class="logo"
          data-aos="fade"
          data-aos-delay="300"
        />
        <img
          :src="require('./mo/12/bg1.png')"
          alt
          class="bg-img"
        />
        <img
          :src="require('./s1/toplogo.png')"
          alt
          class="top-logo"
        />
        <img
          :src="require('./mo/12/text.png')"
          alt="鳳山新東區．絕版雙捷運｜天天公園第一排"
          class="bg-img"
        />
      </div>
      <div
        class="section"
        id="section2"
        v-if="isMobile"
      >
        <Map
          :tagList="tagList"
          :bgSrcT="bgSrcT"
          :bgSrcB="bgSrcB"
          :hand="hand"
          :bgText="''"
        >
          <img
            src="./mo/12/bg_m.png"
            alt
            class="mask"
            v-if="isMobile"
            @click="hideMask"
            v-show="showMask"
          />
          <img
            src="./mo/12/bg_icon.png"
            alt
            class="mask"
            v-if="isMobile"
            @click="hideMask"
            v-show="showMask"
          />
        </Map>
        <!-- fs.h35.tw -->
        <div class="button" @click="showDialog('http://fs.h35.tw/output/index.html')">720度 環景</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.bg {
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  height: size(2100);
  z-index: 5;
}
.bg-color {
  width: 300%;
  height: 100%;
  position: absolute;
  top: 0;
  left: -200%;
  animation: oxxo 5s infinite ease-in-out;
  background-image: linear-gradient(
    136deg,
    #064849,
    #064849 35%,
    #628963 38%,
    #87a6a2 40%,
    #628963 43%,
    #064849 50%,
    #064849 100%
  );
}
@keyframes oxxo {
  0% {
    left: -200%;
  }
  70% {
    left: -200%;
  }
  100% {
    left: 0%;
  }
}
.bg-img {
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  display: block;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
    // mix-blend-mode: screen;
    // opacity: 0;
  }
}

.bg-all {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
}

.bg-2 {
  position: relative;
}

.img-2 {
  position: relative;
}

.logo {
  width: size(370);
  top: size(262);
  left: 0;
  right: 0;
  margin: 0 auto;
  position: absolute;
}

.top-logo {
  width: size(230);
  left: 0;
  top: 0;
  position: absolute;
}

.title-img {
  width: size(464);
  top: size(735);
  left: 0;
  right: 0;
  margin: 0 auto;
  position: absolute;
}
.button {
  position: absolute;
  background: #0007;
  color: #fff;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  font-size: size(20);
  display: flex;
  border: 1px solid #fa0;
  border-radius: size(20);
  letter-spacing: 0.1em;
  bottom: size(20);
  right: size(100);
  width: size(200);
  height: size(100);
  animation: button 1s infinite ease-in-out;
  &:hover {
    background: #000c;
    bottom: size(30);
  }
}

@keyframes button {
  0% {
    border-color: #fb56;
  }
  80% {
    border-color: #fb56;
  }
  90% {
    border-color: #fff;
  }
  100% {
    border-color: #fb56;
  }
}

.dialog {
  width: 100vw;
  height: 100vh;
  display: block;
  z-index: 150;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);

  .close {
    width: 30px;
    height: 30px;
    cursor: pointer;
    img {
      width: 100%;
    }

    position: fixed;
    z-index: 10;
    top: 30px;
    right: 30px;
  }

  &.hide {
    display: none;
  }

  .dialog-content {
    width: 100vw;
    height: 100vh;
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%) !important;
    background: transparent;

    iframe {
      width: 100%;
      height: 100%;
    }
  }
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .bg {
    height: calc(100vh + 100vw * 581 / 375);
    // z-index: 150;
  }
  .bg-color {
    background-image: linear-gradient(
      110deg,
      #064849,
      #064849 35%,
      #628963 38%,
      #87a6a2 40%,
      #628963 43%,
      #064849 50%,
      #064849 100%
    );
  }
  .logo {
    width: size-m(185);
    top: size-m(240);
    left: 0;
    right: 0;
    margin: 0 auto;
    position: absolute;
    z-index: 1;
  }

  .top-logo {
    width: size-m(130);
    left: 0;
    top: 0;
    position: absolute;
  }
  .bg-img {
    // &:nth-child(1) {
    //   position: absolute;
    //   z-index: 2;
    //   // mix-blend-mode: screen;
    //   // opacity: 0;
    // }
  }
  #section2 {
    position: absolute;
    top: size-m(581);
  }
  .button {
    font-size: size-m(20);
    border-radius: 1em;
    bottom: size-m(10);
    right: size-m(88);
    width: size-m(200);
    height: size-m(70);
    z-index: 4;
    &:hover {
      background: #000c;
      bottom: size-m(10);
    }
  }
}
</style>
<script>
// @ is an alias to /src
import Map from '@/components/Map.vue'
import { isMobile } from '@/utils'

export default {
  name: 'section1',
  components: {
    Map,
  },
  data() {
    return {
      isMobile,
      showMask: isMobile,
      isShowDialog: false,
      mapText: [
        {
          title: '',
          desc: '',
        },
        {
          title: '',
          desc: '',
        },
      ],
      tagList: [],
      bgSrcT: require('./mo/12/bg2.png'),
      bgSrcB: require('./mo/12/bg3.jpg'),
      hand: '',
    }
  },

  methods: {
    hideMask() {
      this.showMask = false
    },

    showDialog(link) {
      this.link = link
      this.isShowDialog = true
    },

    closeDialog() {
      this.isShowDialog = false
      // this.$refs[`dialogVideo${index}`].pause()
    },
  },

  mounted() {},

  computed: {},
}
</script>
