<template>
  <div>
    <div class="section9">
      <div class="opacity-3-bg">
        <img src="./s2/ink1.png" alt="" class="ink-1 absolute" data-aos="zoom-in-down" data-aos-delay="0" data-aos-duration="1200">
        <!-- <img src="./s2/ink1.png" alt="" class="ink-2 absolute" data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="1200">
        <img src="./s2/ink2.png" alt="" class="ink-3 absolute" data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="1200"> -->
      </div>
      <div class="opacity-5-bg">
        <img src="./s9/leaf (9).png" alt="" class="leaf-9 absolute" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="1200">
      </div>
      <div class="text-item flex-ac wrap absolute">
        <div class="title" data-aos="fade-right" data-aos-delay="600">
          清景麟地產<br />
          為生活而生的<br />
          建築行家
        </div>
        <div src="./s2/hr.png" alt="" class="hr" data-aos="fade-right" data-aos-delay="700"></div>
        <div class="desc" data-aos="fade-right" data-aos-delay="800">
          清景麟初衷在於傳遞美好生活及生活好美的溫度用心了解女主人對於家的機能需求，男主人想要卻不敢說出的秘密空間，再到孩子對空間安全感的規劃，清景麟地產近30年的相關服務經驗，傾聽客戶需求，建築消費者心目中真正理想的房子，認真經營一份”家”的事業
        </div>
      </div>
      <div class="list-title absolute">
        {{list[listIndex].title}}
      </div>
      <div class="list-desc absolute" v-html="list[listIndex].desc"></div>
      <div class="list flex-jb absolute">
        <div class="item" v-for="(item, i) in list" :key="item.img" @click="listIndex = i">
          <img :src="item.img" alt="">
          <div class="name" v-html="item.name"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section9 {
  width: size(1920);
  min-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  position: relative;
}

.bg-img {
  width: size(1920);
  height: 100vh;
  min-height: 900px;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;

  // &:nth-child(1) {
  //   position: relative;
  // }
}

.text-item {
  width: size(471);
  left: size(104);
  top: size(100);
  > * {
    width: size(471);
  }

  .desc {
    width: size(471);
    margin: 0 auto;
  }
  .hr {
    width: size(288);
    display: inline-block;
    margin: 15px auto;
    border: solid 2px #08607f;
  }

  .title {
    font-size: size(59.1);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: size(8.28);
    text-align: center;
    color: #2e627f;
    white-space: nowrap;
  }

  .desc {
    font-size: size(25);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: size(2);
    text-align: left;
    color: #2e627f;
  }
}

.img-item {
  width: size(1152);
}

.list-title {
  width: size(1046);
  height: size(125);
  top: size(100);
  right: size(162);
  padding-top: size(20);
  background-image: url('./s9/title.png');
  background-size: cover;
  font-size: size(48.8);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(6.83);
  text-align: center;
  color: #ffffff;
}

.list-desc {
  width: size(882);
  top: size(260);
  right: size(170);
  font-size: size(30);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: size(3.6);
  text-align: left;
  color: #000000;
}

.list {
  width: size(1152);
  top: size(455);
  right: size(112);
}

.item {
  width: size(252);
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
    display: block;
    transition: all 0.3s;
    &:hover {
      box-shadow: 0 0 0px 10px #38a9b3;
    }
  }

  .name {
    width: 100%;
    font-size: size(34.2);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.26;
    letter-spacing: size(4.78);
    text-align: center;
    color: #000000;
    margin-top: size(15);
  }
}

.ink-1 {
  height: size(1693);
  top: size(500);
  left: size(-800);
}

.ink-2 {
  height: size(1581);
  top: size(872);
  left: size(-600);
}

.ink-3 {
  height: size(1720);
  top: size(1064);
  left: size(564);
}



.leaf-9 {
  width: 100vw;
  top: size(-20);
  left: size(0);
  animation: leaf 3s ease-in-out infinite alternate-reverse;
}

.opacity-3-bg {
  opacity: 0.3;
}

.opacity-5-bg {
  opacity: 0.5;
}

@keyframes leaf {
  to {
    transform: skewX(5deg) translateX(20px);
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
  .section9 {
    width: 100vw;
    min-height: auto;
    height: sizem(604 + 329);
    //background-image: url('./mo/1/00.jpg');
    background-size: cover;
    background-attachment: scroll;
  }

  .bottom-img {
    width: 100vw;
    height: auto;
    left: 0;
    top: sizem(0);
    //  bottom: sizem(329);
    object-fit: cover;
    z-index: 2;
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
    top: sizem(205);
    right: sizem(0);
    height: auto;
    object-fit: cover;
  }

  .border {
    width: sizem(347);
    height: sizem(276);
    top: sizem(115);
    right: sizem(14);
    border-width: sizem(6);
    font-size: sizem(15);
    padding: 1.1em 0 0 2em;
  }

  .block {
    width: sizem(48);
    height: sizem(215);
    max-height: initial;
    top: sizem(-30);
    right: sizem(-20);
    left: auto;
    bottom: auto;
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
import { icPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section9',

  data() {
    return {
      icPC,
      isMobile,
      isTablet,
      listIndex: 0,
      list: [
        {
          title: '空間藝術顧問 常季設計 張立人設計師',
          desc:
            '內斂豪奢 盡顯尊貴不凡 / 豪宅御用 常季設計<br />張立人：門廳、公設、庭園，不應只是做為建築的裝飾，而是願意因為空間的氣氛而坐下來享受',
          img: require('./s9/1.jpg'),
          name: '張立人設計師',
        },
        {
          title: '空間藝術顧問 常季設計 張維仁總經理',
          desc:
            '內斂豪奢 盡顯尊貴不凡 / 豪宅御用 常季設計<br />張立人：門廳、公設、庭園，不應只是做為建築的裝飾，而是願意因為空間的氣氛而坐下來享受',
          img: require('./s9/2.jpg'),
          name: '張維仁總經理',
        },
        {
          title: '空間藝術顧問 常季設計 王東奎建築師',
          desc:
            '內斂豪奢 盡顯尊貴不凡 / 豪宅御用 常季設計<br />張立人：門廳、公設、庭園，不應只是做為建築的裝飾，而是願意因為空間的氣氛而坐下來享受',
          img: require('./s9/3.jpg'),
          name: '王東奎建築師',
        },
        {
          title: '空間藝術顧問 常季設計 白石畫廊',
          desc:
            '內斂豪奢 盡顯尊貴不凡 / 豪宅御用 常季設計<br />張立人：門廳、公設、庭園，不應只是做為建築的裝飾，而是願意因為空間的氣氛而坐下來享受',
          img: require('./s9/4.jpg'),
          name: '白石畫廊',
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
