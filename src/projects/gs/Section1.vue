<template>
  <div>
    <div class="section1">
      <img
        src="./s1/bg.png"
        alt="小城故事NO.7外觀"
        class="bottom-img absolute"
        data-aos="fade-up"
        data-aos-delay="0"
        v-if="!isMobile"
      >

      <img
        src="./mo/1/bg.png"
        alt="小城故事NO.7外觀"
        class="bottom-img absolute"
        data-aos="fade-up"
        data-aos-delay="0"
        v-if="isMobile"
      >
      <img
        src="./s1/logo.png"
        alt="小城故事NO.7"
        class="logo absolute"
        data-aos="fade-down"
        data-aos-delay="200"
        v-if="!isMobile"
      >
      <img
        src="./mo/1/logo1.png"
        alt="小城故事NO.7"
        class="logo absolute"
        data-aos="fade-down"
        data-aos-delay="200"
        v-if="isMobile"
      >
      <img
        src="./mo/1/logo2.png"
        alt="小城故事NO.7"
        class="logo2 absolute"
        data-aos="fade-down"
        data-aos-delay="600"
        v-if="isMobile"
      >
      <img
        src="./s1/txt.png"
        alt="S tory ot Town"
        class="txt absolute"
        data-aos="fade-right"
        data-aos-delay="800"
      >
      <div
        class="block absolute"
        data-aos="fade-down"
        data-aos-delay="400"
      ></div>
      <div
        class="border absolute"
        data-aos="fade"
        data-aos-delay="500"
      ></div>
      <h3
        class="title absolute"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        小城故事系列<br />譜寫宜蘭在地情感
      </h3>
      <h3
        class="desc absolute"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        深耕宜蘭30載，從規劃兼具美學質地與永久保值的建築，以書寫在地建築歷史為責任，精益求精、時刻創新。
      </h3>
      <div class="item-list flex absolute">
        <div
          class="item"
          v-for="(item, index) in item_list"
          :key="item.desc"
          data-aos="fade-down"
          :data-aos-delay="800 + (index * 100)"
          data-aos-duration="1000"
        >
          <div class="item-hr" v-if="isMobile"></div>
          <h3
            class="item-title"
            v-html="item.title"
          ></h3>
          <h3
            class="item-desc"
            v-html="item.desc"
          ></h3>
          <div class="item-hr" v-if="!isMobile"></div>
        </div>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: size(1920);
  height: 100vh;
  min-height: 900px;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
}

.bottom-img {
  width: 100vw;
  height: auto;
  left: 0;
  bottom: 0;
  object-fit: cover;
  z-index: 1;
}

.logo {
  width: size(693);
  top: size(270);
  right: size(452);
  height: auto;
  object-fit: cover;
}

.txt {
  width: size(527);
  top: size(443);
  right: size(274);
  height: auto;
  object-fit: cover;
}

.title {
  width: size(350);
  right: size(780);
  top: size(438);
  font-size: size(29);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.46;
  letter-spacing: 7.57px;
  text-align: left;
  color: #000000;
}

.desc {
  width: size(350);
  right: size(780);
  top: size(538);
  font-size: size(17);
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 2.57px;
  text-align: left;
  color: #8e8a74;
}

.border {
  width: size(715);
  height: size(308);
  top: size(409);
  right: size(448);
  border: size(8.2) solid #8e8a74;
}

.block {
  opacity: 0.38;
  background-color: #8e8a74;
  width: size(240);
  top: size(156);
  right: size(572);
}

.item-list {
  top: size(299);
  left: size(211);

  .item {
    width: size(22);
    margin-right: size(45);
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // flex-wrap: wrap;
    .item-hr {
      width: 2px;
      height: size(202);
      background-color: #8e8a74;
      margin: 0 auto;
    }
    &:nth-child(1) {
      margin-top: 0;
    }
    &:nth-child(2) {
      margin-top: size(43);
      .item-hr {
        height: size(199);
      }
    }

    &:nth-child(3) {
      margin-top: size(20);
      .item-hr {
        height: size(88);
      }
    }
    &:nth-child(4) {
      margin-top: size(17);
      .item-hr {
        height: size(88);
      }
    }

    &:nth-child(5) {
      margin-top: size(18);
      .item-hr {
        height: size(58);
      }
    }

    &:nth-child(6) {
      margin-top: size(12);
      .item-hr {
        height: size(147);
      }
    }
  }
  .item-title,
  .item-desc {
    writing-mode: vertical-lr;
    text-orientation: upright;
    // display: inline-block;
    // margin: auto;
  }

  .item-title {
    font-size: size(12);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.08;
    letter-spacing: normal;
    text-align: center;
    color: #8e8a74;
    margin-bottom: size(10);
    margin-left: size(2.5);
  }

  .item-desc {
    font-size: size(17);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.08;
    letter-spacing: normal;
    text-align: center;
    color: #8e8a74;
    margin-bottom: size(10);
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
  .section1 {
    width: 100vw;
    min-height: auto;
    height: sizem(604 + 329);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .bottom-img {
    width: 100vw;
    height: auto;
    left: 0;
    bottom: sizem(329);
    object-fit: cover;
    z-index: 1;
  }

  .logo {
    width: sizem(280);
    top: sizem(29);
    right: auto;
    left: sizem(18);
    height: auto;
    object-fit: cover;
  }

  .logo2 {
    width: sizem(63);
    top: sizem(101);
    right: sizem(28);
    height: auto;
    object-fit: cover;
    z-index: 2;
  }

  .txt {
    width: sizem(312);
    top: sizem(327);
    right: sizem(13);
    height: auto;
    object-fit: cover;
  }

  .title {
    width: sizem(246);
    right: sizem(79);
    top: sizem(138);
    font-size: sizem(25);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.46;
    letter-spacing: 7.57px;
    text-align: left;
    color: #000000;
    white-space: nowrap;
  }

  .desc {
    width: sizem(270);
    right: sizem(54);
    top: sizem(223);
    font-size: sizem(15);
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: 2.57px;
    text-align: left;
    color: #8e8a74;
  }

  .border {
    width: sizem(347);
    height: sizem(276);
    top: sizem(115);
    right: sizem(14);
    border: sizem(6) solid #8e8a74;
  }

  .block {
    opacity: 0.38;
    background-color: #8e8a74;
    width: size(48);
    top: size(217);
    right: size(0);
  }

  .item-list {
    top: sizem(600);
    left: sizem(44);

    .item {
      width: sizem(17);
      margin-right: sizem(35);
      // display: flex;
      // align-items: center;
      // justify-content: center;
      // flex-wrap: wrap;
      .item-hr {
        width: 1.5px;
        height: sizem(67);
        background-color: #8e8a74;
        margin: 0 auto;
        margin-bottom: 15px;
      }
      &:nth-child(1) {
        margin-top: 0;
      }
      &:nth-child(2) {
        margin-top: sizem(13);
        .item-hr {
          height: sizem(111);
        }
      }

      &:nth-child(3) {
        margin-top: sizem(30);
        .item-hr {
          height: sizem(65);
        }
      }
      &:nth-child(4) {
        margin-top: sizem(17);
        .item-hr {
          height: sizem(69);
        }
      }

      &:nth-child(5) {
        margin-top: sizem(20);
        .item-hr {
          height: sizem(58);
        }
      }

      &:nth-child(6) {
        margin-top: sizem(5);
        .item-hr {
          height: sizem(68);
        }
      }
    }
    .item-title,
    .item-desc {
      writing-mode: vertical-lr;
      text-orientation: upright;
      // display: inline-block;
      // margin: auto;
    }

    .item-title {
      font-size: sizem(12);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.08;
      letter-spacing: normal;
      text-align: center;
      color: #8e8a74;
      margin-bottom: sizem(10);
      margin-left: sizem(2.5);
    }

    .item-desc {
      font-size: sizem(17);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.08;
      letter-spacing: normal;
      text-align: center;
      color: #8e8a74;
      margin-bottom: sizem(10);
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
      isMobile,
      isTablet,
      item_list: [
        {
          title: '第一期',
          desc: '礁溪四城吳沙村',
        },
        {
          title: '第二期',
          desc: '冬山河岸景觀農舍',
        },
        {
          title: '第三期',
          desc: '小城故事河岸別墅系列',
        },
        {
          title: '第五期',
          desc: '二結首耀別墅',
        },
        {
          title: '第六期',
          desc: '二結鄰靜別墅',
        },
        {
          title: '第七期',
          desc: '傳藝路小城故事',
        },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
