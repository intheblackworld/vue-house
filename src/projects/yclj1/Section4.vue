<template>
    <div class="section4">
      <div class="box">
      <div class="title" data-aos="fade" data-aos-delay="0">以靜御繁</div>

      <div class="list">
              <div class="swipe swipe1" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(1)" v-touch:swipe.right="() => addMultiIndex(1)">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList1" v-show="slideIndex1 === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decMultiIndex(1)">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="addMultiIndex(1)">
          </div>
        </div>
      </div>
        <div class="txt">
      <div class="subtitle" data-aos="fade" data-aos-delay="200" >交通樞紐悠遊城市之間</div>
      <hr class="hr" data-aos="fade" data-aos-delay="300" >
      <div class="desc" data-aos="fade" data-aos-delay="400">
      由高鐵南路（台31線）直通桃園高鐵站，高鐵、機捷南北暢行無阻，<br v-if="isPC">
66快速道路橫貫東西，串接國道1號、2號、3號高速暢遊，<br v-if="isPC">
新屋中壢線巴士車班暢行交通便利。</div>
     <!-- <ul class="desc">
        <li data-aos="fade-up" data-aos-delay="300">日月光廣場＋家樂福+延吉+學府商圈享樂全能購足</li>
        <li data-aos="fade-up" data-aos-delay="400">清水國小＋中正國中，書香校園承載孩子金色未來</li>
        <li data-aos="fade-up" data-aos-delay="500">土城體育場 + 運動中心＋大清運動公園運森度呼吸</li>
      </ul>  -->
        </div>
          <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList1" :key="slide.img + '-dot'" @click="goToMultiIndex(1, index)"><span :class="`${slideIndex1 === index ? 'active' : ''}`"></span></div>
          </div>
      </div>
      <div class="list">
      <div class="swipe swipe2" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(2)" v-touch:swipe.right="() => addMultiIndex(2)">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList2" v-show="slideIndex2 === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>

          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decMultiIndex(2)">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="addMultiIndex(2)">
          </div>
        </div>
      </div>
        <div class="txt">
      <div class="subtitle" data-aos="fade" data-aos-delay="200" >可繁華可靜謐隨心所欲</div>
      <hr class="hr" data-aos="fade" data-aos-delay="300" >
      <div class="desc" data-aos="fade" data-aos-delay="400">
        近取中壢好市多商場，連步行都好方便的怡然自得！<br v-if="isPC">
區域有多座公園與民族路一線豐富生活機能，<br v-if="isPC">
中壢地政事務所的公托、社福中心便民又利民。</div>
     <!-- <ul class="desc">
        <li data-aos="fade-up" data-aos-delay="300">日月光廣場＋家樂福+延吉+學府商圈享樂全能購足</li>
        <li data-aos="fade-up" data-aos-delay="400">清水國小＋中正國中，書香校園承載孩子金色未來</li>
        <li data-aos="fade-up" data-aos-delay="500">土城體育場 + 運動中心＋大清運動公園運森度呼吸</li>
      </ul>  -->
        </div>
          <div class="pagination absolute flex-ac" data-aos="fade-up" data-aos-delay="200" v-if="isPC">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList2" :key="slide.img + '-dot'" @click="goToMultiIndex(2, index)"><span :class="`${slideIndex2 === index ? 'active' : ''}`"></span></div>
          </div>
      </div>
    </div>
    </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {
  width:100%;
  height:auto;
  position: relative;

  font-stretch: normal;
  font-style: normal;
  text-align: center;
  line-height: 1.2;
  color: #fff;
  font-weight: 400;
  padding: 0;
  font-size: size(17);
  padding: 0 0 6em;

  .box{
  width: size(1500);
  margin:0em auto 0em;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
    align-items:stretch;
  position: relative;
  }
}
.list{
  flex:0 0 size(728);
  width: size(728);
  position: relative;
}
.title{
  position: relative;
  font-size: size(40);
  padding: 2.2em 0 .8em;
  letter-spacing:0.06em;
  color: #FFF;
  font-weight: 800;
  text-align: center;
  width: 100%;
      transform:translateY(-10%) scale(1.2);
}

.txt{
  position: relative;
  z-index: 3;
  }


.subtitle {
  position: relative;
  font-size: size(30);
  margin:1.5em auto 0.6em;
  letter-spacing:0.04em;
  color: #80c5b6;
  font-weight: 500;
      transform: scale(1.2);
}

.hr{background: none;border: 0;opacity: .5;
      transform: scale(1.2);
border-bottom:1px solid currentColor;}
.desc {
  margin:1em auto;
  line-height: 2;
  letter-spacing:0.05em;
  list-style: circle;
      transform: scale(1.2);
  overflow: hidden;
  li{list-style:inherit;float: left;margin: 0.3em 0 0.3em 1.4em;width:calc(100% - 1.4em);
  }
}

/* Swipe */
.swipe {
//  position: absolute;
  width:100%;
  height: size(477);
  top: size(185);
  right: size(199);
  object-fit: cover;
  z-index: 3;
  order:3;
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
  bottom:16em;
  right:0;
  justify-content: center;
  font-size:size(13);
}

.pagination-dot {
  padding:0.3em;
  margin: 0 0.3em;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width: 1em;
    height: 1em;
   // border-radius: 50%;
   // border: 4px solid  #ccc;
   background: #ccc;
    position: relative;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      display: block;
   background: #80c5b6;
   // border-radius: 50%;
   // border: 2.1px solid  #e38023;
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
        top: 0%;
        left: 0%;
        transform: scale(1);
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
  .section4 {
    width: 100vw;
    height: auto;

    font-size: sizem(14);
    text-align: justify;
  padding: 0 0 3em;
  .box{
  width:100%;
  flex-direction:column;
  }

  }
.list{
  flex:0 0 100%;
  width: 100%;
  position: relative;
}
  .txt{
  position: relative;
    width: sizem(320);
margin:0em auto 0em;
padding: 0 0 3em;
  left:0;
  top:0;
  }
.title{
    font-size: sizem(30);
  letter-spacing:0.01em;
}
  .subtitle {
    font-size: sizem(17.6);
  letter-spacing:0em;
  margin:1.5em auto 0em;
  }
  .desc {
  margin:0em auto;
  letter-spacing:0em;
  }

  /* Swipe */
  .swipe {
    position: relative;
    width: 100vw;
    height: sizem(246);
    min-height: auto;
    top:0;
    left:0;
  order:initial;
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
  name: 'section4',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList1: [
        {
          img: require('./s4/1-1.jpg'),
          name: '中壢交流道',
        },
        {
          img: require('./s4/1-2.jpg'),
          name: 'A19',
        },
        {
          img: require('./s4/1-3.jpg'),
          name: 'A19',
        },
        {
          img: require('./s4/1-4.jpg'),
          name: '66快速道路',
        },
        {
          img: require('./s4/1-5.jpg'),
          name: 'A18',
        },
      ],

      slideList2: [
        {
          img: require('./s4/2-1.jpg'),
          name: '松勇公園',
        },
        {
          img: require('./s4/2-2.jpg'),
          name: 'Costco',
        },
        {
          img: require('./s4/2-3.jpg'),
          name: '華泰名品城',
        },
        {
          img: require('./s4/2-4.jpg'),
          name: '中央大學',
        },
        {
          img: require('./s4/2-5.jpg'),
          name: '中壢地政暨婦幼館',
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
