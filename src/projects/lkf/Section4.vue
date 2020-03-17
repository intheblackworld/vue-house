<template>
  <div class="section4">
    <Map :tagList="tagList" :bgSrc="bgSrc" :hand="hand">
      <div class="text">
        <div class="title" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500">國際線上 便利路網</div>
        <hr data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500" />
        <div
          class="desc"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1500"
        >International Flight</div>
      </div>
    </Map>
    <div class="fluid">
      <div class="foot-container">
        <div class="content" v-if="isMobile">
          <div class="text" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500">
            <div class="title">A9捷運站30秒漫步行</div>
            <div class="desc">
              3站直達國際機場，出境入境輕鬆掌握；連結桃園機場與捷運藍線。與台北市緊密連結，到達桃園機場僅需3站，更可迅速接軌台北車站捷運藍線，超便利交通成為觀光商務必經的交通要道！
            </div>
          </div>
        </div>
        <!--
        <div v-else class="m-content">
          <div
            class="title"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
          >{{mapText[mapIndex].title}}</div>
          <div
            class="desc"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >{{mapText[mapIndex].desc}}</div>
          <div
            class="button"
            @click="mapIndex = mapIndex === 0 ? 1 : 0"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            <div class="triangle"></div>
            {{mapText[mapIndex === 0 ? 1 : 0].title}}
          </div>
        </div>
        -->
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.map {
  .text {
    top: 70px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .title {
    width: 298px;
    height: 48px;
    font-size: 36px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: #1a1311;
    margin: 0 auto;
    margin-bottom: 15px;
  }

  hr {
    width: 304.7px;
    height: 0;
    border: solid 1px #c08d4e;
    margin: 0 auto;
    margin-bottom: 5px;
   + .desc {
    font-family: TimesNewRomanPSMT;
  }
  }


  .desc {
    width: 145px;
    height: 20px;
    font-size: 18px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
    margin: 0 auto;
    margin-bottom: 30px;
  }
}

.fluid {
  width: 100vw;
  background-color: #f5ede0;
  position: relative;
  z-index: 1;
}
.foot-container {
  width: 1380px;
  height:80px;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 40px;
  background-color: #f5ede0;
  position: relative;
  border-bottom: solid 3px #c08d4e;
  .content {
    width: 45%;
    min-width: 620px;
    height: 240px;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #f5ede0;
    .text {
      width: 530px;
      height: 182px;
      margin: 0 auto;
      padding-top: 60px;
      color: #1a1311;
    }

    .title {
      font-size: 22px;
      text-align: left;
      margin-bottom: 10px;
    }

    .desc {
      font-size: 14px;
      line-height: 1.57;
      text-align: justify;
      margin-bottom: 20px;
    }
  }
}

@media only screen and (min-width: 1281px) and (max-width: 1440px) {
  .map {
    .text {
      top: 30px;
    }
  }
  .foot-container {
    width: 1024px;
  }
}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {
  .map {
    .text {
      top: 20px;
    }
  }
  .foot-container {
    width: 1024px;
  }
  .fullscreen {
    height: auto;
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .map {
    .text {
      top: 30px;

      .title {
        font-size: 28px;
        height: 40px;
        margin-bottom: 10px;
      }
    }
  }
  .foot-container {
    width: 900px;
    transform: scale(1);
  }
}

@media screen and (max-width: 767px) {
  .map {
    .text {
      width: 200px;
      top: 40px;
    }
    .title {
      width: 184px;
      height: 21px;
      font-size: 22px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: center;
      color: #231f20;
    }

    hr {
      width: 201px;
    }

    .desc {
      width: 110px;
      height: 13px;
      font-family: TimesNewRomanPSMT;
      font-size: 14px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: center;
      color: #c49a6c;
    }
  }
  .foot-container {
    width: 100vw;
    height:auto;
    border-bottom: none; 
    .content {
min-width:90%;width:90%;
    position: relative; top: -120px;
    margin: auto auto -120px auto;height:auto;
      .text,.title {width:auto;height:auto;
      }
      .text{padding:30px 15px;border-bottom: 1px solid #c49a6c;}
      .title {text-align: center;}
      .desc {height:auto;
      }
    }
  }
}
</style>

<script>
import Map from '@/components/Map.vue'
import { isMobile } from '@/utils'
export default {
  name: 'section4',

  components: {
    Map,
  },

  data() {
    return {
      isMobile,
      mapIndex: 0,
      tagList: [
        require('./s4/1.png'),
        require('./s4/2.png'),
        require('./s4/3.png'),
        require('./s4/4.png'),
        require('./s4/5.png'),
        require('./s4/6.png'),
        require('./s4/7.png'),
        require('./s4/8.png'),
        require('./s4/9.png'),
        require('./s4/10.png'),
        require('./s4/11.png'),
        require('./s4/12.png'),
        require('./s4/13.png'),
        require('./s4/14.png'),
      ],

      bgSrc: require('./s4_bg.jpg'),
      hand: require('./s4_hand.png'),
    }
  },

  methods: {},
}
</script>
