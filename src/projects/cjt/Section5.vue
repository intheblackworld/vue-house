<template>
  <div class="section5">
    <div class="title-bg">
      <div class="text" v-if="isMobile">
        <h3 class="title">森活贏家 菁英聚落</h3>
        <div class="desc">5大商圈Ⅹ雙大道Ⅹ生態休閒Ⅹ國家級綠校園</div>
      </div>
    </div>
    <Map :tagList="tagList" :bgSrc="isMobile ? bgmSrc: bgSrc" :hand="hand" :altList="altList">
      <div class="text" v-if="!isMobile">
        <h3 class="title">森活贏家 菁英聚落</h3>
        <div class="desc">5大商圈Ⅹ雙大道Ⅹ生態休閒Ⅹ國家級綠校園</div>
      </div>
    </Map>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-color: #fff;
  background-position: 100% 0%;
  background-size: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-image: url('./s2_bg.jpg');
}

.bg-top {
  width: 100vw;
  height: 530px;
  display: block;
}
.text {
  top: 100px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
}

.title {
  font-size: calc(100vw * (80 / 1920));
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.14;
  letter-spacing: 1.3px;
  text-align: center;
  color: #ffffff;
}

.desc {
  font-size: calc(100vw * (34 / 1920));
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.81;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
}
@media only screen and (max-width: 1440px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }

  .text {
    top: 40px;
  }

  .title {
    font-size: calc(100vw * (90 / 1920));
  }

  .desc {
    font-size: calc(100vw * (38 / 1920));
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
    background-size: 1920px auto;
    background-position: center;
  }

  .title {
    // font-size: 52px;
    margin-top: 80px;
  }

  .desc {
    // font-size: 24px;
  }

  .text {
    top: 0;
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-position: 55%;
    // background-image: url('./s3_bg_m.jpg');
  }

  .title {
    width: 100vw;
    font-size: calc(100vw * (35.5 / 375));
  }

  .desc {
    width: 100vw;
    font-size: calc(100vw * (15 / 375));
  }

  .text {
    top: 0px;
    background-size: cover;
  }

  .title-bg {
    background-size: auto;
    height: 138px;
    background-image: url('./s5/mo/titlebg.jpg');
    background-size: contain;
    display: flex;
    align-items: center;

    .text {
      position: relative;
    }
  }
}
</style>

<script>
import { isMobile } from '@/utils'
import Map from '@/components/Map.vue'
export default {
  name: 'section5',

  components: {
    Map,
  },

  data() {
    return {
      isMobile,
      tagList: [
        require('./s5/1.png'),
        require('./s5/2.png'),
        require('./s5/3.png'),
        require('./s5/12.png'),
        require('./s5/4.png'),
        require('./s5/5.png'),
        require('./s5/6.png'),
        require('./s5/7.png'),
        require('./s5/8.png'),
        require('./s5/9.png'),
        require('./s5/10.png'),
        require('./s5/11.png'),
      ],

      altList: [
        '輕井澤',
        '嘉南大圳',
        '中央水路景觀公園',
        '九份子國中小學基地',
        '台17線',
        '鹽水溪',
        '北外環道路',
        '和緯商圈',
        '國安商圈',
        '好市多商圈',
        '海佃商圈',
        '文賢商圈',
      ],

      bgSrc: require('./s5/bg.jpg'),
      bgmSrc: require('./s5/mo/map.jpg'),
      hand: require('./s5/mo/hand.png'),
    }
  },

  mounted() {},
}
</script>
