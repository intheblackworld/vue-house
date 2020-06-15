<template>
  <div>
    <div class="bg relative">
      <img
        src="./s4/walk.gif"
        alt=""
        class="img absolute"
      >
      <div
        v-if="!isMobile"
        class="container flex-ac flex-jb relative left"
      >
        <div
          class="slides relative"
          data-aos="fade"
          data-aos-delay="400"
        >
          <div class="slide-text">{{slideList[slideIndex].text}}</div>
          <img
            :src="slide.src"
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s2-1-slide-${index}`"
          />
        </div>
        <div class="content">
          <h3
            class="title"
            data-aos="fade"
            data-aos-delay="400"
          >夜際繁華</h3>
          <h3
            class="subtitle"
            data-aos="fade"
            data-aos-delay="600"
            v-html="slideList[slideIndex].subtitle"
          ></h3>
          <ul class="desc-list">
            <h3
              v-for="(text, index) in desc_list[slideList[slideIndex].contentIndex]"
              data-aos="fade"
              :data-aos-delay="600 + (index + 1) * 200"
              data-aos-duration="1000"
              :key="text"
            >{{text}}</h3>
          </ul>
        </div>
      </div>
      <div v-if="isMobile">
        <div
          class="slides relative"
          data-aos="fade"
          data-aos-delay="400"
        >
          <div class="slide-text">{{slideList[slideIndex].text}}</div>
          <img
            :src="slide.src"
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s2-1-slide-${index}`"
          />
          <div class="arrows absolute">
            <img
              src="./arrow-left.png"
              alt=""
              class="arrow-l"
              @click="decIndex"
            >
            <img
              src="./arrow-right.png"
              alt=""
              class="arrow-r"
              @click="addIndex"
            >
          </div>
        </div>
        <div class="content">
          <h3
            class="title"
            data-aos="fade"
            data-aos-delay="400"
          >夜際繁華</h3>
          <h3
            class="subtitle"
            data-aos="fade"
            data-aos-delay="600"
            v-html="slideList[slideIndex].subtitle"
          ></h3>
          <ul class="desc-list">
            <h3
              v-for="(text, index) in desc_list[slideList[slideIndex].contentIndex]"
              data-aos="fade"
              :data-aos-delay="600 + (index + 1) * 200"
              data-aos-duration="1000"
              :key="text"
            >{{text}}</h3>
          </ul>
        </div>
      </div>
      <div class="indigator-list flex-c">
        <div
          @click="setIndex(index)"
          :class="`indigator ${slideList[slideIndex].contentIndex === index ? 'active' : ''}`"
          v-for="index in [0, 1, 2]"
          :key="`indigator-1-${index}`"
        ></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.bg {
  background-size: cover;
  position: relative;
  z-index: 2;
  overflow: hidden;
  height: 100vh;
}

.img {
  right: size(215);
  width: size(310);
  top: size(326);
}

.container {
  width: size(1460);
  height: 100%;

  &.left {
    margin-left: size(70);
  }

  &.right {
    margin-right: size(70);
  }
}

.slides {
  width: size(890);
}

.content {
  width: size(438);
  height: size(710);
  padding-top: size(200);
}

.title {
  font-size: size(50);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.65;
  letter-spacing: 2.5px;
  text-align: left;
  color: #606060;
  margin-bottom: size(25);
  margin-left: size(-5);
}

.subtitle {
  font-size: size(21);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: 0.63px;
  text-align: left;
  color: #aa8356;
  margin-bottom: size(15);
}

.desc-list {
  > h3 {
    font-size: size(15);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: 3.75px;
    text-align: left;
    color: #727272;
  }
}

.indigator-list {
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: size(80);
  .indigator {
    width: size(19);
    height: size(19);
    border-radius: size(19);
    margin: 0 20px;
    background-color: rgba(186, 146, 98, 0.4);
    cursor: pointer;

    &.active {
      background-color: rgba(186, 146, 98, 1);
    }
  }
}

.arrows {
  display: none;
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    height: auto;
  }
  .img {
    right: size-m(37);
    width: size-m(124);
    top: auto;
    bottom: size-m(10);
  }

  .container {
    width: 100vw;
    height: 100%;
    flex-wrap: wrap;

    &.left {
      margin-left: 0;
    }

    &.right {
      margin-right: 0;
    }
  }

  .slides {
    width: 100vw;
  }

  .content {
    width: 100vw;
    height: size-m(550);
    padding-top: size-m(31);
    padding-left: size-m(27);
    padding-bottom: size-m(200);
  }

  .title {
    font-size: size-m(39);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.65;
    letter-spacing: 2.5px;
    text-align: left;
    color: #606060;
    margin-bottom: size-m(25);
    margin-left: size-m(-5);
  }

  .subtitle {
    font-size: size-m(16);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.55;
    letter-spacing: 0.63px;
    text-align: left;
    color: #aa8356;
    margin-bottom: size-m(15);
  }

  .desc-list {
    > h3 {
      font-size: size-m(14);
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.14;
      letter-spacing: 0.14px;
      text-align: left;
      color: #727272;
    }
  }

  .indigator-list {
    display: none;
  }

  .arrows {
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .arrow-l {
      width: size-m(14);
      position: absolute;
      left: size-m(5);
      cursor: pointer;
    }

    .arrow-r {
      width: size-m(14);
      position: absolute;
      right: size-m(5);
      cursor: pointer;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section4',
  mixins: [slider],

  data() {
    return {
      isMobile,
      slideList: [
        {
          src: require('./s4/1-1.jpg'),
          contentIndex: 0,
          subtitle: '讓時尚為我啟蒙，新板為我加冕',
        },
        {
          src: require('./s4/1-2.jpg'),
          contentIndex: 0,
          subtitle: '讓時尚為我啟蒙，新板為我加冕',
        },
        {
          src: require('./s4/2-1.jpg'),
          contentIndex: 1,
          subtitle: '新板像打翻的珠寶盒，生活絢麗無比',
        },
        {
          src: require('./s4/2-2.jpg'),
          contentIndex: 1,
          subtitle: '新板像打翻的珠寶盒，生活絢麗無比',
        },
        {
          src: require('./s4/2-3.jpg'),
          contentIndex: 1,
          subtitle: '新板像打翻的珠寶盒，生活絢麗無比',
        },
        {
          src: require('./s4/3-1.jpg'),
          contentIndex: 2,
          subtitle: '新北信義大新板特區，最大歡樂耶誕城',
        },
        {
          src: require('./s4/3-2.jpg'),
          contentIndex: 2,
          subtitle: '新北信義大新板特區，最大歡樂耶誕城',
        },
      ],
      desc_list: [
        [
          '時尚精靈背後的天使長',
          '輕取新板的機會只有一次',
          '時尚的華麗，豪宅的佈局，人文的靜謐',
          '平凡貴氣自有細膩紋理',
        ],
        [
          '飯店百貨CBD，大遠百Mega City',
          '誠品生活、環球購物、威秀影城',
          '凱薩飯店，新板希爾頓酒店',
          '絢爛熙來攘往，儷人繽紛來去',
        ],
        [
          '年度盛會，冬日慶典，全國最大',
          '結合府中商圈，開城光雕秀',
          '孩子的魔法小鎮，情侶的甜蜜森林',
          '家庭繽紛聖誕夢',
        ],
      ],
    }
  },

  computed: {},

  methods: {
    setIndex(index) {
      this.slideIndex = index * 2
    },
  },

  created() {},
  mounted() {},
}
</script>
