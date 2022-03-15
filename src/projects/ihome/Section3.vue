<template>
  <div>
    <div class="section3">
<!--     <img src="./s2/hr.png" alt="" class="hr absolute">  -->
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
      <div class="title" data-aos="fade-down" data-aos-delay="200" ><span>i Playing</span>玩美國度 瘋玩森活</div>
      <div class="line" data-aos="fade" data-aos-delay="200" ></div>
      <div class="subtitle" data-aos="fade-down" data-aos-delay="300" >8分鐘尋常日玩出潮風格</div>
      <ul class="desc">
        <li data-aos="fade-up" data-aos-delay="300">日月光廣場＋家樂福+延吉+學府商圈享樂全能購足</li>
        <li data-aos="fade-up" data-aos-delay="400">清水國小＋中正國中，書香校園承載孩子金色未來</li>
        <li data-aos="fade-up" data-aos-delay="500">土城體育場 + 運動中心＋大清運動公園運森度呼吸</li>
      </ul>
      </div>
      <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="500" v-if="isPC">
        <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width:100%;
  height: size(900);
  position: relative;
  overflow: hidden;
  z-index: 3;
}

.txt{
  position: absolute;
  width: size(610);
  left: size(210);
  top: size(233);
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
  font-size:2.72em;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: normal;
  color: #000;
  span{
  color: #d03636;
  font-size:1.43em;
  font-family: Georgia;
  margin: 0 .5em 0 0;
  display: block;
  }
}

.subtitle {
  position: relative;
  font-size: size(30);
  margin:1.5em auto 0.8em;
  letter-spacing:0.04em;
  color: #d03636;
}
.line {
  position: relative;
  background-color: #888;
  width:100%;
  height: size(2);
  margin: 2em 0 0.5em 0;
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
    border: 2.1px solid  #d03636;
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
  .section3 {
    height: auto;
  }
  .txt{
  position: relative;
  width: sizem(310);
margin:1.5em auto 7em;
  left:0;
  top:0;
  font-size: sizem(15);
  }
.title{
    font-size: sizem(30);
}
  .line {
    background-color: #888;
    width: sizem(310);
    height: sizem(2);
  }
  .subtitle {
    font-size: sizem(18);}
  .desc {
    width: sizem(310);
    top: sizem(548);
    right: sizem(32);
    font-size: sizem(15);
    line-height: 1.73;
  }

  /* Swipe */
  .swipe {
    position: relative;
    width: 100%;
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
  name: 'section3',

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
          img: require('./s3/2.jpg'),
          name: '土城國民運動中心',
        },
        {
          img: require('./s3/3.jpg'),
          name: '土城家樂福',
        },
        {
          img: require('./s3/5.jpg'),
          name: '日月光廣場',
        },
        {
          img: require('./s3/1.jpg'),
          name: '新北市立土城醫院',
        },
        {
          img: require('./s3/4.jpg'),
          name: '藏壽司',
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
