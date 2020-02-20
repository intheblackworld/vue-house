<template>
  <div class="section8">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s8/bg.jpg" alt class="img" />
        <img src="./s8/img1a.png" alt class="img" data-aos="fade" data-aos-delay="200" />
        <img src="./s8/img1aa.png" alt class="img" data-aos="fade" data-aos-delay="400" />
        <img src="./s8/img2a.png" alt class="img" data-aos="fade" data-aos-delay="600" />
        <img src="./s8/stitlea.png" alt="升級家的價值 軟硬體用心加分" class="img" />
        <img src="./s8/titlea.png" alt="七大精品" class="img" />
        <ul class="text">
          <li>世界級RAK磁磚</li>
          <li>FTTH光纖到府</li>
          <li>新型石膏磚隔間</li>
          <li>櫻花廚具、TOTO衛浴</li>
          <li>停車位充電預留線槽</li>
          <li>貼心智慧信箱</li>
          <li>ATS不斷電系統</li>
        </ul>
        <img src="./s8/logoall.png" alt="logo" class="img" />
      </div>
      <div v-if="isMobile">
        <img src="./s8/mo/bg.jpg" alt class="img" />
        <img src="./s8/mo/img1.jpg" alt :class="`img ${activeIndex == 0 ? 'active' : 'hide'}`" />
        <img src="./s8/mo/img2.jpg" alt :class="`img ${activeIndex == 1 ? 'active' : 'hide'}`" />
        <img src="./s8/mo/img1a.png" alt class="img" data-aos="fade" data-aos-delay="200" />
        <img src="./s8/mo/stitlea.png" alt="升級家的價值 軟硬體用心加分" class="img" />
        <img src="./s8/mo/titlea.png" alt="七大精品" class="img" />
        <ul class="text">
          <li>世界級RAK磁磚</li>
          <li>FTTH光纖到府</li>
          <li>新型石膏磚隔間</li>
          <li>櫻花廚具、TOTO衛浴</li>
          <li>停車位充電預留線槽</li>
          <li>貼心智慧信箱</li>
          <li>ATS不斷電系統</li>
        </ul>
        <img src="./s8/mo/logoall.png" alt="logo" class="img logoall" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
  z-index: 2;
  overflow: hidden;
  &:before{
    font-size:12px;
   content:"建商保有修改權";
   display:block;
   position: absolute;bottom:1em;right:2em;z-index: 3;color:rgba(255, 255, 255, 0.5);
   }
}

.img {
  width: 100vw;
  height: auto;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  display: block;
  &.fix {
    position: fixed;
  }
  &:nth-child(1) {
    position: relative;
  }
}

.text {
  width: calc(100vw * 745 / 1920);
  font-size: calc(100vw * 25 / 1920);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: 1.2px;
  text-align: left;
  color: #333;
  left: calc(100vw * 700 / 1920);
  top: calc(100vw * 280 / 1920);
  position: absolute;
  display: flex;    width: 27.5em;
    flex-wrap: wrap;
    li{
      flex: 1 1 10em;
      margin: 0 0 0;
      &:before{
   content:url("data:image/svg+xml,%3Csvg version='1.1' id='icon' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 20 20' xml:space='preserve'%3E%3Cpolyline style='fill:%23000;' points='20,10 10,20 0,10 10,0 20,10 '/%3E%3C/svg%3E");
   display: inline-block;
   height:1em;
   width:1em;margin: 0 0.3em 0 0;
}
    }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .text {
    width: calc(100vw * 600 / 1920);
    right: calc(100vw * 630 / 1920);
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-size:100% auto ;
    background-image: url('./s1/bg1.jpg');
  }

  .text {
    width: calc(100vw * 288 / 375);
    height: auto;
    font-size: calc(100vw * 12 / 375);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: 0.72px;
    text-align: left;
    color: #666;
    left: calc(100vw * 21 / 375);
    top: calc(100vw * 235 / 375);
  }

  .img {
    transition: all .5s;
    &:nth-child(1) {
      position: relative;
      // height: calc(100vw * 478 / 375);
    }
    &:nth-child(2),
    &:nth-child(3) {
    left: calc(100vw * 20 / 375);
    top: calc(100vw * 380 / 375);
    width: calc(100vw * 288 / 375);
    }
    &:nth-child(4){
    top: calc(100vw * 40/ 375);

    }

    &.hide {
      opacity: 0;
    }

    &.active {
      opacity: 1;
    }
    &.logoall{width: calc(100vw * 288 / 375);
    left: calc(100vw * 20 / 375);
    top: calc(100vw * 325 / 375);}
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
export default {
  name: 'section8',

  data() {
    return {
      isMobile,
      activeIndex: 0
    }
  },

  computed: {},

  methods: {},

  created() {
    setInterval(() => {
      if (this.activeIndex === 0) {
        this.activeIndex = 1
      } else {
        this.activeIndex = 0
      }
    }, 3000)
  },
  mounted() {},
}
</script>
