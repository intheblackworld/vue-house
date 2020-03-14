<template>
  <div class="section8">
    <div class="bg">
      <div v-if="!isMobile">
        <img v-lazy="require('./s8/bg.jpg')" alt class="bg-img" />
        <img v-lazy="require('./s8/bg2.jpg')" alt class="bg-img bottom" />
        <div class="content-t">
          <div class="title">小資正當道 甜蜜2房</div>
          <div class="desc">
            房間都開窗 / 真正適合生活的臥室，享受每天早上把陽光當鬧鐘的小確幸。
            <br />配備雙衛浴 / 客人主人分開用，家人間也不用排隊，掌握全家生活自主權。
          </div>
        </div>
        <img v-lazy="require('./s8/img1-1.png')" alt class="img img-rt" data-aos="fade" data-aos-delay="300" />
        <img v-lazy="require('./s8/img1-2.jpg')" alt class="img img-lt" data-aos="fade" data-aos-delay="300" />
        <div class="content-b">
          <div class="title">有型又有款 幸福3房</div>
          <div class="desc">
            方正又有窗 / 3間房都開窗，格局方方正正好規劃，盡情大展身手的小天地。
            <br />露臺大格局 / 客廳旁落地窗，直接連接大露臺，搭起與自然風光平行舞台。
          </div>
        </div>
        <img v-lazy="require('./s8/img2-1.png')" alt class="img img-lb" data-aos="fade" data-aos-delay="300" />
        <img v-lazy="require('./s8/img2-2.jpg')" alt class="img img-rb" data-aos="fade" data-aos-delay="300" />
      </div>
      <div v-else></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.bg {
  background-size: cover;
  position: relative;
  overflow: hidden;
  position: relative;
  height: size(2560);
}

.bg-img {
  width: 100vw;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  z-index: 1;

  &.fix {
    position: fixed;
  }

  &:nth-child(1) {
    position: relative;
  }

  &.bottom {
    top: size(1280);
  }
}

.img {
  position: absolute;
  z-index: 2;
}

.img-lt {
  width: size(766);
  left: size(95);
  top: size(443);
}

.img-rt {
  width: size(960);
  top: 0;
  right: 0;
}

.img-lb {
  width: size(980);
  left: 0;
  bottom: 0;
}

.img-rb {
  width: size(766);
  right: size(107);
  bottom: size(88);
}

.content-t {
  width: size(735);
  top: size(150);
  left: size(100);
  position: absolute;
  z-index: 3;
}

.title {
  font-size: size(40);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  margin-bottom: size(50);
}

.desc {
  font-size: size(17);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.12;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
}

.content-b {
  width: size(582);
  top: size(1443);
  right: size(115);
  position: absolute;
  z-index: 3;

  .title, .desc {
    text-align: right;
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
    background-size: cover;
    position: relative;
    overflow: hidden;
    position: relative;
    height: auto;
    display: flex;
    align-items: center;

    > div {
      display: block;
    }
  }

  .swiper-container {
    width: 100vw;
    position: relative;
  }

  .bg-img {
    width: 100vw;
    position: absolute;
    top: auto;
    left: 0;
    bottom: 0;
    height: auto;
    display: block;
    object-fit: cover;
    z-index: 3;

    // &:nth-child(1) {
    //   position: relative;
    // }
  }

  .content {
    width: 90vw;
    padding-left: 0;
    margin: 0 auto;
  }

  .item-title {
    font-size: calc(100vw * 12 / 375);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.58;
    letter-spacing: 0.48px;
    text-align: right;
    color: #ffffff;
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'

export default {
  name: 'section8',

  data() {
    return {
      isMobile,
      isTablet,
    }
  },

  methods: {},
}
</script>
