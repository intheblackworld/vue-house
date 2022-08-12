<template>
    <div class="section10">
      <div class="box">
   <!--   
    <div class="title" data-aos="fade" data-aos-delay="0">匠心聚作淬煉經典<br/>
大台北首購俱歡顏</div><div class="desc1">聰明購屋學 /杜甫終於也能如願高枕無憂，每一個認真生活的人，都值得被更好地對待，美國MUSE、義大利A’Design設計獎，全台第一大推案建築團隊，以舒適凌駕豪華的書苑人文指標宅，讓大台北首購家庭住好住幸福</div> 
       -->
      <div class="list">
      <div class="swipe swipe1" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <div class="prev-btn" @click="decMultiIndex(1)">
            <img loading="lazy" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='31.5,57 4.5,30 31.5,3 '/%3E%3C/svg%3E" alt="_prev">
            </div>
            <div class="next-btn" @click="addMultiIndex(1)">
            <img loading="lazy" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='3.5,3 30.5,30 3.5,57 '/%3E%3C/svg%3E" alt="_next">
            </div>
          </div>
        <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(1)" v-touch:swipe.right="() => addMultiIndex(1)">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList1" v-show="slideIndex1 === i" :key="slide.img" :class="`swipe-item absolute`">
              <img loading="lazy" :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
        </div>
      </div>
        <div class="txt">
          <h3 class="title"><img loading="lazy" src="./s10/1.png" alt="全台第一大推案建築師 陳朝雄" /><span class="b">凝鍊奢華 書寫人文</span></h3>
          <div class="subtitle">全台第一大推案建築師 陳朝雄</div>
          <div class="desc">
            以地標之姿收服城市高度，以精湛工藝豐藏城市品味<br v-if="!isMobile" /><span v-else>，</span>
            匠心獨運地將理性與感性深度融合書院人文底蘊<br v-if="!isMobile" /><span v-else>，</span>
            有古典的精緻，有現代的時尚<br v-if="!isMobile" /><span v-else>，</span>
            高貴典雅沈穩大器，成就書苑建築之巔<br />
            <br />
            代表作品｜波爾多、江翠PARK、金城舞、橋蓮雄鋒
          </div>
        </div>
        <div class="pagination absolute flex-ac" v-if="isPC">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList1" :key="slide.img + '-dot'" @click="goToMultiIndex(1, index)"><span :class="`${slideIndex1 === index ? 'active' : ''}`"></span></div>
          </div>
      </div>
      <div class="list">
      <div class="swipe swipe2" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <div class="prev-btn" @click="decMultiIndex(2)">
            <img loading="lazy" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='31.5,57 4.5,30 31.5,3 '/%3E%3C/svg%3E" alt="_prev">
            </div>
            <div class="next-btn" @click="addMultiIndex(2)">
            <img loading="lazy" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='3.5,3 30.5,30 3.5,57 '/%3E%3C/svg%3E" alt="_next">
            </div>
          </div>
        <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(2)" v-touch:swipe.right="() => addMultiIndex(2)">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList2" v-show="slideIndex2 === i" :key="slide.img" :class="`swipe-item absolute`">
              <img loading="lazy" :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>          
        </div>
      </div>
        <div class="txt">
          <h3 class="title"><img loading="lazy" src="./s10/2.png" alt="信義區豪宅御用景觀設計師 大漢景觀徐世萃" /><span class="b">山水化境 自然成詩</span></h3>
          <div class="subtitle">信義區豪宅御用景觀設計師 大漢景觀徐世萃</div>
          <div class="desc">
            「碧波白」景觀設計師專為頂級豪宅打造會呼吸的城市綠帶<br v-if="!isMobile" /><span v-else>，</span>
            完美融合建築與環境，讓空間與土地產生最自然的連結<br v-if="!isMobile" /><span v-else>，</span>
            讓生活日常隨風光水綠自在呼吸<br />
            <br />
            代表作品｜維多利亞酒店、碧波白、城上城、希望城市
          </div>
        </div>
          <div class="pagination absolute flex-ac" v-if="isPC">
           <div :class="`pagination-dot`" v-for="(slide, index) in slideList2" :key="slide.img + '-dot'" @click="goToMultiIndex(2, index)"><span :class="`${slideIndex2 === index ? 'active' : ''}`"></span></div>
          </div>
      </div>
      <div class="list">
      <div class="swipe swipe3" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
          <div class="swipe-btns absolute flex-ac flex-jb" v-if="isMobile">
            <div class="prev-btn" @click="decMultiIndex(3)">
            <img loading="lazy" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='31.5,57 4.5,30 31.5,3 '/%3E%3C/svg%3E" alt="_prev">
            </div>
            <div class="next-btn" @click="addMultiIndex(3)">
            <img loading="lazy" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='3.5,3 30.5,30 3.5,57 '/%3E%3C/svg%3E" alt="_next">
            </div>
          </div>
        <div class="swipe-wrap relative" v-touch:swipe.left="() => decMultiIndex(3)" v-touch:swipe.right="() => addMultiIndex(3)">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList3" v-show="slideIndex3 === i" :key="slide.img" :class="`swipe-item absolute`">
              <img loading="lazy" :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
        </div>
      </div>
        <div class="txt">
          <h3 class="title"><img loading="lazy" src="./s10/3.png" alt="榮獲美國MUSE、義大利A’Design設計獎設計師 徐慈姿" /><span class="b">雍雅豐釀 國際邸蘊</span></h3>
          <div class="subtitle">榮獲美國MUSE、義大利A’Design設計獎設計師 徐慈姿</div>
          <div class="desc">
            以生活的立體感知為基底，透過光影轉換借景入境<br v-if="!isMobile" /><span v-else>，</span>
            讓公設空間不僅是頂級社交休閒場域<br v-if="!isMobile" /><span v-else>，</span>
            更成為家的空間延展，散發無限美學張力<br />
            <br />
            代表作品｜頤海大院 · 台中帝寶 · 神采飛洋 · 希望城市
          </div>
        </div>
          <div class="pagination absolute flex-ac" v-if="isPC">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList3" :key="slide.img + '-dot'" @click="goToMultiIndex(3, index)"><span :class="`${slideIndex3 === index ? 'active' : ''}`"></span></div>
          </div>
      </div>
    </div>
    </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section10 {
  width:100%;
  height:auto;
  position: relative;
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-weight: 600;
  padding:5em 0 0 0;
  font-size: size(19);

  .box{
  width: size(1500);
  margin:0em auto 3em;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
    align-items:stretch;
  position: relative;
  }
}

.list{
  flex:0 0 size(470);
  width: size(470);
  position: relative;
}
.txt{
  position: relative;
  z-index: 3;
  font-stretch: normal;
  font-style: normal;
  font-size: size(18);
  font-weight: 600;
  line-height: 1.6;
  z-index: 3;
  margin: 2.8em 0 8em 0;

.title {
  position: relative;
  font-size:2em;
  margin:0 auto 0.4em;
  font-weight: 900;
  text-align: justify;
  img{float: right;
    height: 1.9em;
  margin:-0.15em auto 0em;
    vertical-align: middle;}
}
.subtitle {
  position: relative;
  font-size:1em;
  letter-spacing:0.03em;
  font-weight: 900;
  color: #B28247;
}

.desc {
  width: 100%;
  line-height: 1.5;
  margin:1em auto 3em auto;
  list-style: circle;
  overflow: hidden;
  text-align: justify;
  li{list-style:inherit;float: left;margin: 0.2em 0 0.2em 1.4em;
  width:calc(100% - 1.4em);
  }
}
  }

/* Swipe */
.swipe {
//  position: absolute;
  width:100%;
  height: size(470);
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
  top: size(480);
  right:0;
  left: 0;
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
  width: 114%;
  left: -7%;
  height: 100%;
  padding: 0 0;
  z-index: 3;
  font-size: size(20);
  pointer-events: none;

  .prev-btn,
  .next-btn {
    width: 1em;
    cursor: pointer;
  pointer-events:auto;
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
  .section10 {
    width: 100vw;
    height: auto;
    font-size: sizem(14);
    text-align: justify;
  padding: 0 ;
  .box{
    width: sizem(320);
  flex-direction:column;margin: 0em auto 4em;
  }
  }
.img{
  width:100%;
  text-align: center;
  img{width:5.5em;}
}
  
.list{
  flex:0 0 100%;
  width: 100%;
  position: relative;
}
.txt{
    width:100%;
margin:0.5em auto 0em;
padding: 0 0 3em;
  font-size: sizem(14);
.title{
  font-size:1.5em;
}
  .subtitle {
  font-size:1.05em;
  display: block;
  position: relative;
      img{height:2.8em;position: absolute;
      top: .2em;
      right: 0;}
  i{display: none;}
  }
  .desc {
  list-style: circle;
  li{margin: 0.2em 0 0.2em 2em;
  width:calc(100% - 2em); }
  }
  }

  /* Swipe */
  .swipe {
    position: relative;
    width:100%;
    height: sizem(300);
    min-height: auto;
    margin: auto;
    top:0;
    left:0;
  order:initial;
  }


.swipe-item {
  .slide-name {
    font-size: sizem(12);
  }
}

  .swipe-btns {

    .prev-btn,
    .next-btn {
  font-size: sizem(15);
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section10',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      stopAutoPlay: true,
      slideList1: [
        {
          img: require('./s10/1-1.jpg'),
          name: '陳朝雄',
        },
        {
          img: require('./s10/1-2.jpg'),
          name: '力璞玉',
        },
        {
          img: require('./s10/1-3.jpg'),
          name: '帝景',
        },
        {
          img: require('./s10/1-4.jpg'),
          name: '橋蓮雄鋒',
        },
        {
          img: require('./s10/1-5.jpg'),
          name: '橋蓮雄鋒',
        },
      ],
      slideList2: [
        {
          img: require('./s10/2-1.jpg'),
          name: '徐世萃',
        },
        {
          img: require('./s10/2-2.jpg'),
          name: '墾丁凱薩大飯店',
        },
        {
          img: require('./s10/2-3.jpg'),
          name: '維多利亞酒店',
        },
        {
          img: require('./s10/2-4.jpg'),
          name: '碧波白',
        },
        {
          img: require('./s10/2-5.jpg'),
          name: '希望城市',
        },
      ],
      slideList3: [
        {
          img: require('./s10/3-1.jpg'),
          name: '徐慈姿',
        },
        {
          img: require('./s10/3-3.jpg'),
          name: '波爾多',
        },
        {
          img: require('./s10/3-4.jpg'),
          name: '歡喜市',
        },
        {
          img: require('./s10/3-5.jpg'),
          name: '開璽吾界',
        },
        {
          img: require('./s10/3-6.jpg'),
          name: '開璽吾界',
        },
        {
          img: require('./s10/3-2.jpg'),
          name: '開璽吾界',
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
   //    console.log(this.slideIndex, 'slideIndex')
      }
    },
  },
}
</script>
