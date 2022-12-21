<template>
  <div class="section8">
    <div class="img" data-aos="zoom-in-left"><img src="./s8/img1.png" alt="img" /><img src="./s8/img2.png" alt="img" /></div>
   
    <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
      <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
        <transition-group name="swipe-fade" mode="out-in">
          <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
            <img :src="slide.img" alt>
            <div class="slide-name absolute" v-html="slide.name" v-if="slide.name"></div>
          </div>
        </transition-group>
        <div v-if="isPC" class="pagination absolute flex-ac" data-aos="fade" data-aos-delay="200">
          <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)">
            <span :class="`${slideIndex === index ? 'active' : ''}`"></span>
          </div>
        </div>
        <div v-else class="swipe-btns absolute flex-ac flex-jb">
            <div class="prev-btn" @click="decIndex">
            <img loading="lazy" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='31.5,57 4.5,30 31.5,3 '/%3E%3C/svg%3E" alt="_prev">
            </div>
            <div class="next-btn" @click="addIndex">
            <img loading="lazy" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 60'%3E%3Cpolyline fill='none' stroke='%23FFF' stroke-width='6' points='3.5,3 30.5,30 3.5,57 '/%3E%3C/svg%3E" alt="_next">
            </div>
        </div>
      </div>
    </div>
      <div class="txt">
      <h3 class="title" data-aos="fade-up" data-aos-delay="200" v-html="slideList[slideIndex].title"></h3>
<!-- <div class="subtitle" data-aos="zoom-in" data-aos-delay="200" v-html="slideList[slideIndex].subtitle"></div> -->
      <div class="desc" data-aos="fade-up" data-aos-delay="300" v-html="slideList[slideIndex].desc"></div>
      </div>
  </div>
</template>
<style lang="scss">
.section8 {
.txt{
.desc {
  span{
    color: #000
  }
}
}
}

</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section8 {
  width:100%;
  height:auto;
  position: relative;
  margin:0 auto 0;
  padding: 9vw 0 9vw;
  background: #FFF3;
  &::after{content: "";clear: both;display: block;height: 1px;}
}
.img{width: size(753);position: absolute;right:size(0);bottom: size(0);
z-index: 2;
img{
  &:first-child{
  width: 100%;}
      &:last-child{
  width: 35.6%;transform:translateX(-50%);
transform-origin: 0 50%;
position: absolute;top: 0;left: -5%;
      animation: an 3s linear alternate infinite}
      }
}

@keyframes an{
    to{
      transform: translateX(0);
    }
}
.txt{
  position: relative;
  width: size(1500);
  height: size(220);
  margin: 0 auto 3em auto;
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(19);
  font-weight: 600;
  line-height: 1.4;
  z-index: 2;
  color: #2C5252;

.title{
  font-size:2.2em;
  margin:.4em auto 0;
  font-weight: 900;
  color: #002B69;
}
.subtitle{
  font-size:1.3em;
  margin:.5em auto 0;
  letter-spacing:0.03em;
  font-weight: 900;
  color: #A9292C;
}

.desc {
  margin:0.1em auto;
  line-height: 1.6;
  list-style: circle;
}
  }
/* Swipe */
.swipe {
  position: relative;
  margin: auto;
  width: size(1500);
  height: size(850);
  // left: size(210);
  object-fit: cover;
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
  bottom: -2.2em;
  right: -0.5em;
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
  .section8 {
    width: 100%;
    height: auto;
    min-height: auto;
    max-height: initial;
  padding:8vw 0 0 0;
  }
.img{width: sizem(250);right: 0;bottom:5vw;}
  .txt{
    position: relative;
    width: sizem(320);
  height: sizem(480);
    margin:1.5em auto 5em;
    left:0;
    top:0;
    font-size: sizem(14);
    .title{
      font-size:1.5em;
    }
    .subtitle{
      font-size:1.1em;
    }
  }

  
  /* Swipe */
  .swipe {
    position: relative;
    width: 100%;
    height: sizem(200);
    top:0;
    left:0;
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
  name: 'section8',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      dialogImg: null,
      showMask: false,
      slideList: [
        {
          img: require("./s8/1.jpg"),
          name: '',
          title: '防疫 /永續防疫・安心抵家',
         // subtitle: '西雅圖Seatle',
          desc: '<span>◆智慧人臉辨識：</span>叫電梯、開門，免動手零接觸連動門禁<br /><span>◆愛迪士空氣清淨機：</span>淨化公設空間、電梯間空氣清新<br /><span>◆公設TOTO感應式龍頭：</span>免接觸，減少共用病菌傳媒<br /><span>◆國際安全標準總存水灣＋瑞典Durgo吸氣閥：</span>防止病毒藉由排水系統造成建築物垂感染<br /><span>◆當層排氣：</span>排出廢氣、臭氧，保持室內空氣不滯留<br /><span>◆垃圾貯藏室及廚餘冷藏設備：</span>防止惡臭，杜絕病媒',
        },
        {
          img: require("./s8/2.jpg"),
          name: '',
          title: '好水 / 永續好水・健康抵家',
         // subtitle: '西雅圖Seatle',
          desc: '第一重 德國進口 格溫拜克淨水器<br /><span>《地下水塔前置處理》</span>德國DVGW認証，德國精密不銹鋼過濾孔徑100微米濾網，反洗時間1.5分鐘/水壓2bar，全自動雜質過濾品質把關。<br /><br />第二重  台灣ＮＯ.1 長庚生技活水<br /><span>《頂樓水塔水質活化》</span>經由長庚生技活水系統進行水質活化，成為奈米級的水分子，<br />重建大自然深山山泉水的甘甜水質，以優質好水，提升生理循環代謝效能，促進健康。<br /><br />第三重  櫻花廚下式濾水器<br /><span>《各戶戶別廚下配備》</span>SGS國際品質檢驗及NSF國際認證過濾效能，<br />強效去除重金屬、有害細菌、餘氯、農藥及雜質異味，免插電及排水，節能環保。',
        },
        {
          img: require("./s8/3.jpg"),
          name: '',
          title: '極選 / 永續極選・永居抵家',
         // subtitle: '西雅圖Seatle',
          desc: '<span>◆維夫拉克四合一電子門鎖：</span>感應、密碼、傳統鑰匙、藍芽解鎖<br /><span>◆勝群鋁門窗：</span>氣密、水密、抗風，省力把手及兒童安全限制開口器<br /><span>◆電動曬衣架：</span>智能遙控一鍵升降，360°無盲點，遇阻停止安全智能<br /><span>◆廚房收納：</span>電器櫃、系統收納櫃、五金掛架、落地式烘碗機一應俱全<br /><span>◆全套TOTO衛浴收納：</span>鏡櫃、面盆下櫃、置物架、淋浴間收納層架<br /><span>◆太格木地板：</span>德國品牌，內政部建築研究所測試隔音性能 20db<br /><span>◆IOS智能社區：</span>人臉辨識門禁＋3C防盜、防災、緊急開關保安系統',
        },
        {
          img: require("./s8/4.jpg"),
          name: '',
          title: '貼心 / 永續貼心・首選抵家',
         // subtitle: '西雅圖Seatle',
          desc: '<span>◆機車位標配金屬檔板：</span>讓機車停立方便，停車穩靠更整齊<br /><span>◆電動車充電設備預留線槽：</span>專為電動車住戶規劃預留空間<br /><span>◆戶戶配置緊急供電系統：</span>客廳TV、冰箱，不怕臨時斷電問題<br /><span>◆主浴及公衛緊急求救開關：</span>緊急狀況第一時間黃金援助通知<br /><span>◆瓦斯遮斷閥：</span>瓦斯偵測器＋瓦斯警報訊息，啟動瓦斯遮斷<br /><span>◆地下室訊號強波器：</span>改善地下室收訊不良，不漏接重要電話',
        },
      ]
    }
  },

  methods: {
    showDialog() {
      this.isDialog = true;
      this.showMask = true;
      this.dialogImg = this.slideList[this.slideIndex].full;
    },

    handleScroll() {
      this.showMask = false;
    }
  },

  created() {},

  mounted() {},

  computed: {},

  watch: {}
}
</script>
