<template>
  <div>
    <div class="section9">
      <div class="bg">
        <div class="ink-1 absolute" data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="1200"><img src="./s2/ink2.png" alt="ink"></div>
        <div class="ink-2 absolute" data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="1200"><img src="./s2/ink2.png" alt="ink"></div>
        <div class="ink-3 absolute" data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="1200"><img src="./s2/ink1.png" alt="ink"></div>
        <div class="ink-4 absolute" data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="1200"><img src="./s2/ink1.png" alt="ink"></div>
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
      <div v-if="!isMobile" class="list-item absolute">
        <div class="list-title" v-html="list[listIndex].title">
        </div>
        <div class="list-desc" v-html="list[listIndex].desc"></div>
        <div class="list flex-jb">
          <div class="item" v-for="(item, i) in list" :key="item.img" @click="listIndex = i">
            <img :src="item.img" alt="" :class="`${i === listIndex ? 'active' : ''}`">
            <div class="name" v-html="item.name"></div>
          </div>
        </div>
      </div>
      <div v-if="isMobile">
        <div class="carousel-container absolute">
          <carousel-3d ref="mycarousel" :width="imgWidth" :height="imgHeight" :perspective="0" :disable3d="false" :border="0" :display="3" space="auto" :autoplay="false" @after-slide-change="onAfterSlideChange">
            <slide v-for="(item, index) in list" :index="index" :key="item.img" class="img-slide">
              <img :src="item.img" :class="`video-img absolute`" />
            </slide>
          </carousel-3d>
        </div>
        <div class="list-title absolute" v-html="list[listIndex].title"></div>
        <div class="list-desc absolute" v-html="list[listIndex].desc"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section9 {
  width:100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
}

.bg-img {
  width: 100%;
  height:100%;
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
  top: calc(50% - 23vw);
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
.list-item {
  width: size(1152);
  top: calc(50% - 23vw);
  left:size(656);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  }
.list-title {
  width: size(1046);
  height: size(125);
  top: size(100);margin: auto;
  padding-top: size(20);
  background-image: url('./s9/title.png');
  background-size: cover;
  font-size: size(48.8);
  font-weight: bold;
  line-height: 1.6;
  letter-spacing:0.14em;
  text-align: center;
  color: #ffffff;
}

.list-desc {
  font-size: size(28);
  line-height: 1.63;
  margin:1.2em 0 1.5em 0;
  letter-spacing:0.12em;
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
    &.active {
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
  width: size(767);
  top:calc(50% + 5vw);
  left: size(-420);
  img{width: 100%;transform: scaleX(-1); opacity:0.3;}
}

.ink-2 {
  width: size(800);
  top:calc(50% + 10vw);
  left: size(-120);
  img{width: 100%;transform:rotate(170deg) scaleX(-1); opacity:0.3;}
}
.ink-3 {
  width: size(1000);
  top:calc(50% + 5vw);
  right: size(-200);
  img{width: 100%;transform: scaleX(1);opacity: 0.15;}
}

.ink-4 {
  width: size(900);
  top:calc(50% - 9vw);
  right: size(-500);
  img{width: 100%;transform:rotate(90deg)scaleX(1);opacity: 0.3;}
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
    height: sizem(1033);
  min-height: sizem(604);
  max-height: sizem(2000);
    //background-image: url('./mo/1/00.jpg');
    background-size: cover;
    background-attachment: scroll;
  }

  .text-item {
    width: sizem(310);
    top: 0;
    margin-right: auto;
    margin: 30px auto;
    > * {
      width: sizem(310);
    }
    .hr {
      width: sizem(288);
      display: inline-block;
      margin: 15px auto;
    }

    .title {
      font-size: sizem(25);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.44;
      letter-spacing: sizem(3.5);
      text-align: center;
      color: #2e627f;
      white-space: nowrap;
    }

    .desc {
      width: sizem(310);
      font-size: sizem(15);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.73;
      letter-spacing: sizem(1.2);
      text-align: justify;
      color: #2e627f;
    }
  }

  .carousel-container {
    width: 100vw;
    top: sizem(380);
  }

  .list-title {
    width: sizem(340);
    height: sizem(114);
    top: sizem(757);
    right: sizem(0);
    left: 0;
    margin: 0 auto;
    padding-top: sizem(10);
    background-image: url('./s9/title.png');
    background-size: 100% 100%;
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: sizem(3.5);
    text-align: center;
    color: #ffffff;
  }

  .list-desc {
    width: sizem(310);
    top: sizem(880);
    right: sizem(0);
    left: 0;
    margin: 0 auto;
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: sizem(1.8);
    text-align: left;
    color: #000000;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  name: 'section9',

  components: {
    Carousel3d,
    Slide,
  },

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      listIndex: 0,
      imgWidth: 220,
      imgHeight: 328,
      list: [
        {
          title: isMobile ? '營建工法顧問<br />豐禾營建 張維仁總經理' : '營建工法顧問 豐禾營建 張維仁總經理',
          desc:
            '豐禾重視團隊和諧與共融成長，相信一棟好的建築，需要內外兼備，故用心培養人才，精煉細膩的營建工法，在建築的每個角落呈現日系的完美精神，為人築起最安全與自在的空間。',
          img: require('./s9/1.jpg'),
          name: '張維仁總經理',
        },
        {
          title: isMobile ? '空間藝術顧問<br />常季設計 張立人設計師' : '空間藝術顧問 常季設計 張立人設計師',
          desc:
            '內斂豪奢 盡顯尊貴不凡 / 豪宅御用 常季設計<br />張立人：門廳、公設、庭園，不應只是做為建築的裝飾，而是願意因為空間的氣氛而坐下來享受',
          img: require('./s9/2.jpg'),
          name: '張立人設計師',
        },
        {
          title: isMobile ? '禾象聯合建築師事務所<br />王東奎建築師' : '禾象聯合建築師事務所 王東奎建築師',
          desc:
            '臺南豪宅指定御用建築師，富立建設、富鼎建設、築立建設多項集合住宅建築擘手，2008-2019榮獲多項建築獎紀錄：14座建築園冶獎、1座全球卓越建設獎銀獎、1座國家建築金獎、8座國家卓越建設獎',
          img: require('./s9/3.jpg'),
          name: '王東奎建築師',
        },
        {
          title: isMobile ? '美學藝術顧問<br />WHITESTONE 白石畫廊' : '美學藝術顧問 WHITESTONE 白石畫廊',
          desc:
            '除了給居住者硬體上安全的住宅之外， 也希望能將我們一直以來重視的美感生活，從一個單純提供居住的空間， 轉變成一個美學演繹的空間。透過其所收藏的藝術作品與國際藝術家們交流， 將藝術不斷的帶入居住著生活的環境之中',
          img: require('./s9/4.jpg'),
          name: '白石畫廊',
        },
      ],
    }
  },

  methods: {
    onAfterSlideChange(index) {
      this.listIndex = index
    },
  },

  created() {},

  mounted() {},

  computed: {},
}
</script>
