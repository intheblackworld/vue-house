<template>
  <div class="section2">
    <img src="../process/s1/rb.png" alt="" class="rb">
    <div class="process-container">
      <div class="process-item" v-for="(item, index) in list" :key="item.title + index" @click="goTo(item.isFinished, index)">
        <img :src="item.img" alt="" class="process-img">
        <div class="process-b">
          <div class="process-title">
            {{item.title}}
          </div>
          <div class="process-subtitle">
            {{item.subtitle}}
          </div>
          <div class="process-link flex-c">
            READ MORE
          </div>
        </div>
      </div>
      <div class="process-item0"></div>
      <div class="process-item0"></div>
      <!--
      <div class="pagination flex-c">
        <div :class="`pagi flex-c ${index === currentPage ? 'active' : ''}`" v-for="index in pageCount" :key="'pagi' + index" @click="currentPage = index">{{index}}</div>
      </div>
      -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: size(1920);
  // height: size(1444);
  overflow: hidden;
  position: relative;
  background: #fff;
  background-size: auto;
}
.rb {
  @include img_r_pc(340, 0, 115);
  top: auto;
  bottom: 30px;
}
.bg-img {
  width: size(1920);
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  &:nth-child(1) {
    position: relative;
  }
}
.process-container {
  width: size(1920 - 304 * 2);
  margin: size(80) auto;
  padding-bottom: size(80);
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
}

.process-title {
  font-size: size(33);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.61;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
}

.process-subtitle {
  font-size: size(20);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
}
.process-item {
  width: size(403);
  min-height: size(537);
  margin-bottom: size(70);
  border: 1px solid #707070;
  cursor: pointer;
  position: relative;
  transition: background-color 0.5s;
/*
  &:nth-child(n + 3) {
    opacity: 0.5;
  }
  */
  &:hover{background: #0002;
  .process-img{opacity: 0.8;}
  .process-link {
  background-color: #ff9e00;}
  }
}
.process-item0 {width: size(403);}

.process-b {
  border-top: 1px solid #707070;
  padding: size(14) size(20);
}

.process-img {
  width: 100%;
  height: size(363);
  object-fit: cover;
  transition: opacity 0.5s;
  // margin-bottom: size(10);
}

.process-link {
  width: 9em;
  height:2.2em;
  border-radius:1em;
  background-color: #000;
  transition: background-color 0.3s;
  cursor: pointer;
  font-size:calc(12px + 0.05vw);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing:0.05em;
  text-align: left;
  color: #ffffff;
  float: right;
  position: relative;
  &::after{
    content: "";display: inline-block;
    width: 1.5em;height: 1.5em;
    margin: -0.25em -0.5em 0 0.2em;
    border: 1px solid #FFF;
    border-radius: 50%;

  }
  &::before{
    content: "";
    position: absolute;
    right: 10%;
    top: 31%;
    width: .7em;
    height: .7em;
    border: 1px solid #FFF;
    border-bottom: 0px;
    border-left: 0px;
    transform: rotate(45deg);
    transform-origin: center center;
  }
}

.pagination {
  width: 100%;
  height: size(80);
  margin-top: size(40);

  .pagi {
    width:  2.25em;
    height: 2.25em;
    font-size: size(20);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    border: solid 1px #ff9e00;
    color: #666666;
    margin: 0 0.75em;
    cursor: pointer;

    &.active {
      color: #ffffff;
      background-color: #ff9e00;
    }
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
  .section2 {
    width: 100vw;
    min-height: sizem(604);
    max-height: auto;
    height: auto;
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: sizem(375);
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    object-fit: cover;
    margin-top: 0;

    &:nth-child(1) {
      position: relative;
    }
  }

  .bg {
    width: sizem(350);
    top: sizem(60);
    bottom: sizem(63);
    // background-image: url('./s1/bg.png');
    background-attachment: fixed;
  }

  .process-container {
    width: sizem(375);
    margin: sizem(60) auto;
    padding-bottom: sizem(60);
    display: flex;
    flex-wrap: wrap;
  }
  .process-item {
    width: sizem(310);
    height: sizem(414);
    margin: 0 auto sizem(40);
  }

  .process-b {
    padding: sizem(15) sizem(10);
  }

  .process-img {
    height: sizem(280);
    margin-bottom: sizem(10);
  }

  .process-title {
    font-size: sizem(24);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.58;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
  }

  .process-link {
    font-size: sizem(12);
  }

  .pagination {
    width: 100%;
    height: sizem(80);
    margin-top: sizem(40);

    .pagi {
      font-size: sizem(20);
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section2',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      tabIndex: 0,
      list: [
        {
          img: require('../process/list/1/0.jpg'),
          title: '2021 立瑾WAY',
          subtitle: '已完售，預計2023年初完工。',
          isFinished: true,
        },
        {
          img: require('../works/3/1.jpg'),
          title: '2021 立瑾綻',
          subtitle: '公開銷售中',
          isFinished: true,
        },
 /*       {
          img: require('../process/list/1/0.jpg'),
          title: '2021 立瑾WAY',
          subtitle: '已完售，預計2023年初完工。',
          isFinished: false,
        },
        {
          img: require('../process/list/1/0.jpg'),
          title: '2021 立瑾WAY',
          subtitle: '已完售，預計2023年初完工。',
          isFinished: false,
        },
        {
          img: require('../process/list/1/0.jpg'),
          title: '2021 立瑾WAY',
          subtitle: '已完售，預計2023年初完工。',
          isFinished: false,
        },
        {
          img: require('../process/list/1/0.jpg'),
          title: '2021 立瑾WAY',
          subtitle: '已完售，預計2023年初完工。',
          isFinished: false,
        },
        */
      ],
      pageCount: 3,
      currentPage: 1,
    }
  },

  methods: {
    goTo(isFinished, index) {
      if (isFinished) {
        this.$router.push(`/process/${index}`)
      }
    },
    // @slideChangeTransitionEnd="slideChanged"
    // slideChanged(e) {
    //   const swiper = this.$refs.mySwiper.swiper
    //   if (swiper.isEnd) {
    //     this.slideIndex = 0
    //   } else if (swiper.isBeginning) {
    //     this.slideIndex = swiper.slides.length - 3
    //   } else {
    //     this.slideIndex = swiper.activeIndex - 1
    //   }
    // },
  },

  mounted() {},

  created() {},

  computed: {},
}
</script>
