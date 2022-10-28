<template>
  <div>
    <div class="section4">
      <img  src="./s4/mapimg.png" alt="" data-aos="fade" class="mapimg" />
      <div class="txt">
      <div class="title" data-aos="fade-up" data-aos-delay="200">建案資訊</div>
      <div class="desc" data-aos="fade-up" data-aos-delay="300">
        <span>建設公司：</span>合硯建設股份有限公司<br>
        <span>代銷公司：</span>聯發開發事業有限公司<br>
        <span>建案特色：</span><br>
        千坪壯闊美地，鳳鳴國小步行約3分鐘、鳳鳴國中步行約8分鐘，上下學免煩惱。
        散步約3分鐘就到8800坪公四公園，緊鄰台鐵鳳鳴站 (預定113年11月完工)。
        車程5分鐘直上大湳交流道，鄰近桃鶯路商圈，豐富生活機能不用等。
      </div>
      </div>
      <img v-if="isPC" src="./s2/style_2.png" class="style2">
      <img v-if="isMobile" src="./s4/style_2_m.png" class="style2">
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {
  width:100%;
  height:auto;
  position: relative;
  margin:0 auto 0;
  padding: 10vw 0 10vw;
  font-family: "Noto Serif TC";
  background-size: 100% auto;
  // background:#FFF;
&::after{content: "";clear: both;display: block;}
}
.style2{
  position: absolute;
  width:size(580);
  //top:size(-810);
  top:size(0);
  right:size(-200);
  //right: 0;
  mix-blend-mode: hard-light ;
  z-index: -1;
} 
.bg{position: absolute;left: 0;top: 0;width: 100%;}
.img{width: size(520);position: absolute;right: 0;top:calc(50% - 19vw);
transform-origin:100% 50% ;
z-index: 2;
transform: scale(0);
}
.mapimg{
  width: size(670);
}

.txt{
float: right;
  position: relative;
  width: size(700);
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(19);
  font-weight: 600;
  line-height: 1.4;
  z-index: 2;
  color: #fff;
  margin-right: size(210);
  }

.title{
  font-size:size(43);
  width: 100%;
  margin:0 auto 0;
  color: #F9E07E;
  border-bottom:1px solid #fff;
  padding-bottom: size(15);
}
  .subtitle{font-size: 1.25em;
    padding:.75em 0 0 0;
  }
.desc {
  font-size:size(18);
 // margin:1em auto;
  padding:1em 0 0 0;
  line-height: 2;
  letter-spacing:0.05em;
  font-weight: 600;
  list-style: circle;
  overflow: hidden;
  li{list-style:inherit;float: left;margin: 0.3em 0 0.3em 1.4em;width:calc(100% - 1.4em);
  }
  span{
  color: #F9E07E;
  }
}

/* Swipe */

.swipe {position: relative;
float: left;
 // position: absolute;
  width: size(840);
  height: size(560);
// top: size(185);
 // left: size(210);
  margin-left: size(210);
  z-index: 3;
}
.slide-name {
    right:1.5em;
    bottom:1em;
    color: #fff;
    font-size: size(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.89px;
    text-align: left;
    color: #ffffff;
   text-shadow:0 0.1em 0.3em #000;
}

.swipe-wrap {
  width: 100%;
  height: 100%;
}
.swipe-item {
  width: 100%;
  height: 100%;
  z-index: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

// 過場動畫
// begin 
.swipe-fade-leave-to {
  opacity: 0;
  z-index: 0;
}
// end
.swipe-fade-enter {
  opacity: 0;
  z-index: 1;
}

.swipe-fade-enter-active {
  transition: all 0.5s ease;
}

.swipe-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

// pagination
.pagination {
  width: auto;
  bottom: size(0);
  left:calc(100% + 50 * 100vw / 1920);
  justify-content: center;
  font-size: size(20);

}
.pagination-dot {
  padding: 0.25em;
  margin: 0 0.2em;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width:1em;
    height:1em;
    border-radius: 50%;
    border: 0.2em solid  $pagination;
    position: relative;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
    border-radius: 50%;
    border:  0.105em solid  $pagination-active;
      opacity: 1;
      position: absolute;
      top: 20%;
      left: 20%;
      transition: all 0.3s;
      transform-origin: center;
      transform: scale(0);
    }
    &.active {
      box-shadow: none;
      &::before {
        width: 100%;
        height: 100%;
        top: 0%;
        left: 0%;
        transform: scale(1.6);
      }
    }
  }
}
.swipe-btns {
  width: 100%;
  height: 100%;
  padding: 0 0.75em;
  z-index: 3;
  font-size: size(20);

  .prev-btn,
  .next-btn {
    width: 1em;
    cursor: pointer;
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
  .section4 {
    width: 100%;
    height: auto;
    padding: 0 ;
    background-size: 250% auto;
    display: flex;
    flex-direction: column-reverse;
    //margin-top: sizem(50);
    margin-top: sizem(200);

  }

  .style2{
    width:100%;
    right: sizem(-0);
    top: sizem(-310);
  }
  .mapimg{
  width: sizem(330);
  margin:sizem(50) auto;
  }
  .bg{position: absolute;left: 0;top:auto;bottom:sizem(0);width: 100%;}
.img{width: sizem(320);right:sizem(-20);top:auto;bottom:sizem(-10);}
  .txt{
    position: relative;
    width: sizem(320);
    float: none;
    margin:0em auto 0;
    left:0;
    top:0;
    font-size: sizem(15);
    padding-top: 7vw;
    .title{
      font-size:sizem(23);
      padding-bottom: sizem(10);
    }
    .subtitle{
      font-size:1.1em;
    }

    .desc {
      font-size:sizem(15);
      letter-spacing:0.02em;
    }
  }
  /* Swipe */
  .swipe {
    position: relative;
    width: 100%;
    float: none;
    height: sizem(250);
    top:0;
    left:0;
  margin-left:0;
  }
.swipe-item {
  .slide-name {
    font-size: sizem(12);
  }
}
  .swipe-btns {
  font-size: sizem(15);
  }
}
</style>
<script>
// @ is an alias to /src
import info from '@/info'
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section4',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: require('./s4/1.jpg'),
          name: '台中市政府',
        },
        {
          img: require('./s4/2.jpg'),
          name: '大遠百、新光三越',
        },
        {
          img: require('./s4/3.jpg'),
          name: '捷運市政府站',
        },
        {
          img: require('./s4/4.jpg'),
          name: 'VVS1交通動線示意圖',
        },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {
    viewIndex() {
      if (this.viewIndex === 3) {
        this.slideIndex = 0
        console.log(this.slideIndex, 'slideIndex')
      }
    },
  },
}
</script>
