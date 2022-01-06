<template>
  <div>
    <div class="section5">
      <img src="./all/light.png" alt="" data-aos="fade" data-aos-duration="1500" data-aos-delay="600" class="light">
      <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
          </div>  
        </div>
      </div>
      <div class="txt">
      <div class="title" data-aos="fade-down" data-aos-delay="200">快捷交通．離塵不離城的生活</div>
      <div class="line" data-aos="fade" data-aos-delay="200" ></div>
      <div class="desc" data-aos="fade-up" data-aos-delay="300">高鐵、機捷與航廈，南來北往於彈指之間<br>
核心樞紐，快捷便利<br>
四通八達暢行北市，輕取國門<br>
游刃有餘在慢生活與快步調之中，生活可以是如此輕盈又豐盈<br>
基地位於大園航空城客運園區，鄰近高鐵、捷運及機場，便捷交通一住擁有，台灣從北到南，往返只要一眨眼的時間。

      </div>
      </div>
      <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="500" v-if="isPC">
        <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section5 {
  width: size(1920);
  height: size(900);
  position: relative;
  overflow: hidden;
  z-index: 3;
}
  .light{
  position: absolute;
  top:size(660);
  left:size(170);
  width:size(350);
  transform: translate(40%,-20%) rotate(-30deg) scale(0.4);

  }

.txt{
  position: absolute;
  width: size(610);
  left: size(210);
  top: size(185);
  font-stretch: normal;
  font-style: normal;
  text-align: left;
  font-size: size(18);
  font-weight: 500;
  line-height: 1.2;
  z-index: 3;
  }

.title{
  position: relative;
  font-size: size(30);
  margin:1.5em auto 0.8em;
  letter-spacing:0.04em;
  color: #52b559;
}

.desc {
  margin:1em auto;
  font-size: size(18);
  line-height: 2;
  letter-spacing:0.05em;
  color: #666666;
  list-style: circle;
  overflow: hidden;
  li{list-style:inherit;float: left;margin: 0.3em 0 0.3em 1.4em;width:calc(100% - 1.4em);
  }
}

/* Swipe */
.swipe {
  position: absolute;
  width: size(840);
  height: size(560);
  top: size(185);
  right: size(210);
  object-fit: cover;
  z-index: 3;
}

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

.swipe-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
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
    color: #fff;
   text-shadow:0 0.1em 0.3em #000;
  }
}

.pagination {
  width: auto;
  bottom: size(148);
  right:calc(50% + 6.95vw);
  justify-content: center;
}

.pagination-dot {
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 4px solid  #ccc;
    position: relative;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
    border-radius: 50%;
    border: 2.1px solid  #096e90;
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
  padding: 0 15px;
  z-index: 3;

  .prev-btn,
  .next-btn {
    width: size(20);
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
  .section5 {
    width: 100vw;
    height: auto;
  }
  .light{
  top:auto;
bottom: 0;
  left:sizem(190);
  width:sizem(200);

  }
  .txt{
  position: relative;
  width: sizem(310);
margin:1.5em auto 3em;
  left:0;
  top:0;
  font-size: sizem(15);
  }
.title{
    font-size: sizem(30);
  &::before{width: 100vw;
  left: calc(50% - 50vw);
  }
}
  .line {
    width: sizem(310);
    height: sizem(2);
  margin: 1.1em auto 1em auto;
  }
  .subtitle {
    font-size: sizem(18);
  margin:1em auto 0em;
  }
  .desc {
   //line-height: 1.73;
  margin:0em auto;
  font-size: sizem(15);
  }

  /* Swipe */
  .swipe {
    position: relative;
    width: 100vw;
    height: sizem(250);
    min-height: auto;
    top:0;
    left:0;
  }

  .swipe-item {
    .slide-name{
      right: 1em;
    font-size: sizem(13);
    }
  }

  .swipe-btns {

    .prev-btn,
    .next-btn {
      width: sizem(15);
      cursor: pointer;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section5',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: require('./s5/桃園機場.jpg'),
          name: '桃園國際機場',
        },
        {
          img: require('./s5/高鐵桃園.jpg'),
          name: '高鐵桃園站',
        },
        {
          img: require('./s5/捷運A15.jpg'),
          name: '機捷A15大園站 ',
        },
        {
          img: require('./s5/台61.jpg'),
          name: '台61快速道路',
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
