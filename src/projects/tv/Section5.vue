<template>
  <div>
    <div class="bg relative">
      <img
        src="./s5/o.png"
        alt=""
        class="img absolute"
      >
      <div
        v-if="!isMobile"
        class="container flex-ac flex-jb relative right"
      >
        <div class="content">
          <h3
            class="title"
            data-aos="fade"
            data-aos-delay="400"
          >飯店管理</h3>
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
          >飯店管理</h3>
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
  left: size(195);
  width: size(266);
  top: auto;
  bottom: size(40);
}

.container {
  width: size(1460);
  height: 100%;

  &.left {
    margin-left: size(70);
  }

  &.right {
    margin-left: size(370);
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
  margin: size(370) auto 0 auto;
  top:50%;
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
    height:100vh;
  }
  .img {
    left: auto;
    right: size-m(0);
    width: size-m(180);
    //top: auto;
    top: size-m(470);
  }

  .container {
    width: 100vw;
    height: 100%;
    flex-wrap: wrap;

    &.left {
      margin-left: 0;
    }

    &.right {
      margin-left: 0;
    }
  }

  .slides {
    width: 100vw;
  }

  .content {
    width: 100vw;
    height:auto;
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
      font-size: size-m(12);
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
  name: 'section5',
  mixins: [slider],

  data() {
    return {
      isMobile,
      slideList: [
        {
          src: require('./s5/1.jpg'),
          contentIndex: 0,
          subtitle: '當散步變成旅行，在家就是假期<br />奢華與悠遊同行',
        },
        {
          src: require('./s5/2.jpg'),
          contentIndex: 1,
          subtitle: '從台北的安杰、兩岸的安杰<br />到國際的安杰',
        },
        {
          src: require('./s5/3.jpg'),
          contentIndex: 2,
          subtitle: '從台北的安杰、兩岸的安杰<br />到國際的安杰',
        },
      ],
      desc_list: [
        [
          '一眼瞬間的華麗，圓最美的人生風景',
          '最適合妳的顏色，才是世界上最美的顏色',
          '時間好像靜止，相遇最初的感動',
          '每扇窗都像櫥窗，每顆心都閃耀光芒',
          'THE VIEW 妳的專屬飯店寓所',
        ],
        [
          '服務的景深，成就服務時尚',
          '致力探尋社區每方空間與環境風貌的相契',
          '人文內涵的融合',
          '期盼與住戶一起發現驚喜、享受生活',
        ],
        [
          '服務的景深，成就服務時尚',
          '致力探尋社區每方空間與環境風貌的相契',
          '人文內涵的融合',
          '期盼與住戶一起發現驚喜、享受生活',
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
