<template>
  <div>
    <div class="section5">
      <img src="./all/light.png" alt="" data-aos="fade" data-aos-duration="1500" data-aos-delay="600" class="light">
      <div class="txt">
      <div class="title" data-aos="fade-down" data-aos-delay="200" >姮興實績，有目共睹</div>
      <div class="subtitle" data-aos="fade-down" data-aos-delay="300" >百戶透天建設，真正深耕在地</div>
      <div class="line" data-aos="fade" data-aos-delay="200" ></div>
      <div class="desc">
＜德安恆星1～6＞ 數百戶幸福家庭的暖心口碑，感謝知音相知相惜！姮興開發將持續打造您心中的夢想宅邸，靜邀收藏。
      </div>
      </div>
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
}
 .light{
  position: absolute;
  top:size(630);
  left:size(60);
  width:size(280);
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
  font-size:2.5em;
  font-weight: 500;
  line-height:size(100);
  letter-spacing: normal;
  color: #fff;
  &::before{content:"";position: absolute;z-index:-1;top: 0;right: 0;
  height: 100%;width: 150%;
  background: url("./all/r_bg.png");
  background-size: 100% 100%;
  }
}

.subtitle {
  position: relative;
  font-size: size(30);
  margin:3em auto 0.8em;
  letter-spacing:0.04em;
  color: #096e90;
}
.line {
  position: relative;
  background-color: #FFF;
  width:100%;
  height: size(3);
  margin: 2em 0 0.5em 0;
    z-index: -1;
  &::before{
    content:"";
    display: block;
    width: 100%;
    position: absolute;
    top: 0;left: 0;
    padding:10.1% 0;
    transform: translateY(-75%);
    background:url('./all/title.png') no-repeat;  
    background-size:100% auto;  
    z-index: -1;
  }
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
  .txt{
  position: relative;
  width: sizem(310);
margin:1.5em auto 1em;
  left:0;
  top:0;
  font-size: sizem(15);
  }
.title{
    font-size: sizem(30);
  margin:2.45em auto 1em;
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
    width: 90%;
    height: sizem(200);
    min-height: auto;
    top:0;
    left:0;
    margin:auto auto 20vw auto;
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
  name: 'section6',

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
          img: require('./s5/1.jpg'),
          name: '',
        },
        {
          img: require('./s5/2.jpg'),
          name: '',
        },
        {
          img: require('./s5/3.jpg'),
          name: '',
        },
        {
          img: require('./s5/4.jpg'),
          name: '',
        },
        {
          img: require('./s5/5.jpg'),
          name: '',
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
