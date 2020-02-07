<template>
  <div class="section6">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s6/bg.jpg" alt class="img" />
        <img src="./s6/lineba.png" alt class="img" />
        <div class="map">
          <img src="./s6/map.png" alt class="img" data-aos="fade" data-aos-delay="200" />
        </div>
        <img src="./s6/stitlea.png" alt="A7明日版圖 五大建設帶領崛起" class="img" />
        <img src="./s6/titlea.png" alt="五大建設" class="img" />
        <div class="text">樂善科技園區、郵政物流園區、工五工業區、華亞園區、文青中小學重大建設</div>
      </div>
      <div v-if="isMobile">
        <div class="img_bg">
          <img src="./s6/bg.jpg" alt class="img content" />
        </div>
        <img src="./s6/mo/lineba.png" alt class="img" />
        <div :class="`map ${isOpen ? 'open': ''}`" @click="isOpen = !isOpen">
          <img
            src="./s6/map.png"
            alt
            class="img"
            data-aos="fade"
            data-aos-delay="200"
          />
        </div>
        <img src="./s6/mo/stitlea.png" alt="A7明日版圖 五大建設帶領崛起" class="img" />
        <img src="./s6/mo/titlea.png" alt="五大建設" class="img" />
        <div class="text">
          樂善科技園區、郵政物流園區、工五工業區、
          <br />華亞園區、文青中小學重大建設
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
  z-index: 2;
  overflow: hidden;
}

.img {
  width: 100vw;
  height: auto;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  display: block;
  &.fix {
    position: fixed;
  }
  &:nth-child(1) {
    position: relative;
  }
}
.map {
  width: 100%;
  top: 0;
  left: 0;
  background: url(./s6/mbg.png) repeat-x 0 100%;
  position: absolute;
  height: 100%;
  background-size: auto 0;
  transition: all 0.5s;

  img {
    width: 22vw;
    top: 20.9vw;
    left: 69.4vw;
    background: rgba(0, 40, 80, 0.5);
    transition: all 0.5s;
  }
  &::after {
    content: '區域地圖點擊放大';
    transition: all 0.5s;
    color: #fff;
    position: absolute;
    transform: translate(-100%, -100%);
    top: 38.3vw;
    left: 90.4vw;
  }
  &.open {
    background-size: auto 100%;
    &::after {
      content: '';
    }
    img {
      width: 51vw;
      top: 12.9vw;
      left: 3.4vw;
      background: rgba(0, 0, 0, 0);
    }
  }
}
.stitle {
  font-family: 'DFKai-sb';
  position: absolute;
  top: 4.6em;
  text-align: left;
  font-size: 8vw;
  color: #333;
  left: 2vw;
  transform: scaleX(0.9);
  font-weight: bold;
  line-height: 1.1;
}
.text {
  width: calc(100vw * 750 / 1920);
  font-size: calc(100vw * 20 / 1920);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 1.2px;
  text-align: left;
  color: #666;
  right: calc(100vw * 164 / 1920);
  top: calc(100vw * 280 / 1920);
  position: absolute;
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .text {
    width: calc(100vw * 850 / 1920);
    right: calc(100vw * 144 / 1920);
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: 100% auto;
    background-image: url('./s1/bg1.jpg');
  }
  .img {
    object-position: 0 0;
    height: 63vw;
  }
  .img_bg {
    overflow: auto;
    width: 100vw;
    img {
      height: 185vw;
      width: auto;
    }
  }
  .map {
    height: 38%;
    img {
      width: 24vw;
      top: 32vw;
      left: 74vw;
      object-position: 50% 50%;
      opacity: 0.5;
    }
    &::after {
      top: 62.3vw;
      left: 94.4vw;
      width: 4.2em;
    }

    &.open {
      height: 100%;
      background-size: auto 100%;
      &::after {
        content: '';
      }
      img {
        width: 100vw;
        height: auto;
        top: 70vw;
        left: 0;
      }
    }
  }
  .text {
    width: calc(100vw * 317 / 375);
    height: auto;
    font-size: calc(100vw * 12 / 375);
    line-height: 1.67;
    letter-spacing: 0.72px;
    color: #666;
    left: calc(100vw * 19 / 375);
    top: calc(100vw * 205 / 375);
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
export default {
  name: 'section6',

  data() {
    return {
      isMobile,
      isOpen: false,
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {
    if (this.isMobile) {
      setTimeout(() => {
        const map = document.querySelector('.img_bg')
        const mapBg = document.querySelector('.content')
        console.log(map)
        map.scrollTo(mapBg.clientWidth * 47 / 100, 0)
      }, 500)
    }
  },
}
</script>
