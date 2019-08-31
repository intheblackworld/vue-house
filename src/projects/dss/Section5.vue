<template>
  <div class="section5">
    <div class="bg fullscreen">
      <div v-if="!isMobile" class="flex">
        <div class="content relative">
          <img src="./s5_bird.png" alt class="bird" />
          <div class="text">
            <div class="title">高大特區</div>
            <div class="subtitle">楠梓人口急漲 催生高大特區</div>
            <div
              class="desc"
            >根據高雄民政局2019年4月份人口統計數據顯示，楠梓區人口總數已名列前茅，急起直追三民、左營等區域。因南高雄發展較早，現主要商業區多集中在南高雄，而北高雄則偏向住宅機能，其中高雄大學為中心「高大特區」，更是高雄市面積最大的區段徵收計劃，區內街廓整齊，公園綠地多，生活機能完善，比起高雄其他區域行情，是相對輕鬆入門的小豪宅區，吸引不少首購族群前來置產。</div>
          </div>
        </div>
        <div class="slide relative">
          <img
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s4-slide-${index}`"
            :src="slide.src"
            alt
          />
          <div class="btn-group flex-jb flex-ac flex-mobile-jb">
            <img @click="decIndex" src="./small_left_btn.png" alt />
            <img @click="addIndex" src="./small_right_btn.png" alt />
          </div>
          <div class="name">{{slideList[slideIndex].name}}</div>
        </div>
      </div>
      <div v-else>
        <div class="slide relative">
          <img
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s4-slide-${index}`"
            :src="slide.src"
            alt
          />
          <div class="btn-group flex-jb flex-ac flex-mobile-jb">
            <img @click="decIndex" src="./small_left_btn.png" alt />
            <img @click="addIndex" src="./small_right_btn.png" alt />
          </div>
          <div class="name">{{slideList[slideIndex].name}}</div>
        </div>
        <div class="content relative">
          <img src="./s5_bird.png" alt class="bird" />
          <div class="text">
            <div class="title">高大特區</div>
            <div class="subtitle">楠梓人口急漲 催生高大特區</div>
            <div
              class="desc"
            >根據高雄民政局2019年4月份人口統計數據顯示，楠梓區人口總數已名列前茅，急起直追三民、左營等區域。因南高雄發展較早，現主要商業區多集中在南高雄，而北高雄則偏向住宅機能，其中高雄大學為中心「高大特區」，更是高雄市面積最大的區段徵收計劃，區內街廓整齊，公園綠地多，生活機能完善，比起高雄其他區域行情，是相對輕鬆入門的小豪宅區，吸引不少首購族群前來置產。</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-color: #fff;
  background-position: 100% 0%;
  background-size: cover;
  background-image: url('./s5_bg.png');
  position: relative;
  display: flex;
}

.content {
  width: calc(100vw * (720 / 1920));
  min-width: 600px;
  height: auto;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide {
  width: calc(100vw * (1200 / 1920));
  .slide-img {
    max-height: 900px;
    height: 100%;
  }

  .btn-group {
    width: 95%;
    img {
      width: 36px;
    }
  }

  .name {
    font-size: 16px;
    width: 283px;
    height: 41px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #fff;
    position: absolute;
    right: 16px;
    bottom: 16px;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, .8)
    );
    padding-right: 20px;
  }
}

.fullscreen {
  max-height: 900px;
}

.bird {
  position: absolute;
  right: 0;
  top: 20px;
}

.text {
  width: 505px;
  margin: 0 auto;
}
.title {
  width: 227px;
  height: 86px;
  line-height: 86px;
  background-color: #00a29a;
  font-size: 38px;
  font-weight: bold;
  letter-spacing: 3.8px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 36px;
}

.subtitle {
  width: 415px;
  height: 32px;
  font-size: 33px;
  font-weight: bold;
  line-height: 2.12;
  text-align: justify;
  color: #00a29a;
  margin-bottom: 36px;
}

.desc {
  width: 505px;
  height: 168px;
  font-size: 18px;
  line-height: 1.67;
  text-align: justify;
  color: #000000;
  margin: 0 auto;
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: auto;
  }

  .bird {
    width: 250px;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
    background-size: 1920px auto;
    background-position: center;
  }

  .fullscreen {
    height: auto;
  }

  .bird {
    width: 160px;
  }

  .text {
    width: 90%;

    .title {
      width: 50%;
      height: 63px;
      line-height: 63px;
      font-size: 32px;
      margin-bottom: 18px;
    }

    .subtitle {
      font-size: 24px;
      margin-bottom: 18px;
    }

    .desc {
      width: 100%;
      font-size: 16px;
    }
  }

  .content {
    width: 35%;
    min-width: auto;
  }

  .slide {
    width: 65%;
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-position: 55%;
    position: relative;
    display: block;
  }

  .fullscreen {
    height: auto !important;
  }

  .slide {
    width: 100vw;

    .btn-group {
      bottom: 45%;
    }

    .name {
      font-size: 16px;
      color: #fff;
      position: absolute;
      right: 16px;
      bottom: 16px;
      padding-right: 0px;
      background-image: none !important;
    }
  }

  .content {
    width: 100%;
    min-width: auto;
  }

  .bird {
    width: 30vw;
  }

  .text {
    width: 90%;
    .title {
      width: 50%;
      height: 43px;
      line-height: 43px;
      font-size: 26px;
      margin-bottom: 18px;
      margin-top: 18px;
    }

    .subtitle {
      font-size: 18px;
      margin-bottom: 18px;
      height: auto;
    }

    .desc {
      width: 100%;
      font-size: 14px;
      height: auto;
      margin-bottom: 20px;
    }
  }
}
</style>

<script>
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
export default {
  name: 'section5',
  mixins: [slider],

  data() {
    return {
      isMobile,
      slideList: [
        {
          name: '高雄大學',
          src: require('./s5_img_1.jpg'),
        },
        {
          name: '後勁溪',
          src: require('./s5_img_2.jpg'),
        },
        {
          name: '援中港濕地',
          src: require('./s5_img_3.jpg'),
        },
        {
          name: '援中港濕地',
          src: require('./s5_img_4.jpg'),
        },
        {
          name: '援中港濕地',
          src: require('./s5_img_5.jpg'),
        },
        {
          name: '藍田路家樂福及商家',
          src: require('./s5_img_6.jpg'),
        },
        {
          name: '大學路',
          src: require('./s5_img_7.jpg'),
        },
        {
          name: '大學路',
          src: require('./s5_img_8.jpg'),
        },
      ],
    }
  },

  methods: {},
}
</script>
