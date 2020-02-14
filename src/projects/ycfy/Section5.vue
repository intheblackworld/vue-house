<template>
  <div class="section5">
    <div class="bg relative">
      <div v-if="!isMobile">
        <!-- img src="./s5/bg.jpg" alt class="img" / -->
        <img src="./s5/bg1.png" alt class="img" />
        <!-- <img src="./s5/left_img1.png" alt class="img" data-aos="fade" data-aos-delay="200" />
        <img src="./s5/left_img2.png" alt class="img" data-aos="fade" data-aos-delay="400" />-->
        <img src="./s5/stitle.png" alt="建築強人/景觀大師/專利結構 攜手擘畫" class="img" />
        <img src="./s5/title.png" alt="四大團隊" class="img" />
        <div class="pic">
          <div class="block" data-aos="fade" data-aos-delay="200">
            <img :class="`${isShow ? 'show' : ''}`" src="./s5/1.jpg" alt="頤昌建設 張博勝 總經理" />
            <img :class="`${isShow ? '' : 'show'}`" src="./s5/b1.jpg" alt="頤昌建設 張博勝 總經理" />
          </div>
          <div class="block" data-aos="fade" data-aos-delay="400">
            <img :class="`${isShow ? 'show' : ''}`" src="./s5/2.jpg" alt="陳朝雄 建築師" />
            <img :class="`${isShow ? '' : 'show'}`" src="./s5/b2.jpg" alt="陳朝雄 建築師" />
          </div>
          <div class="block" data-aos="fade" data-aos-delay="600">
            <img :class="`${isShow ? 'show' : ''}`" src="./s5/3.jpg" alt="冠宇和瑞空間設計 王俊智 總監" />
            <img :class="`${isShow ? '' : 'show'}`" src="./s5/b3.jpg" alt="冠宇和瑞空間設計 王俊智 總監" />
          </div>
          <div class="block" data-aos="fade" data-aos-delay="800">
            <img :class="`${isShow ? 'show' : ''}`" src="./s5/4.jpg" alt="戴雲發結構技師" />
            <img :class="`${isShow ? '' : 'show'}`" src="./s5/b4.jpg" alt="戴雲發結構技師" />
          </div>
        </div>
        <div class="text">頤昌建築２０２０鉅作，邀請陳朝雄建築師、冠宇和瑞空間設計、戴雲發Alfa-Safe攜手合作</div>
      </div>
      <div v-if="isMobile">
        <!-- img src="./s5/mo/bg.jpg" alt class="img" / -->
        <img src="./s5/mo/bg1.png" alt class="img" />
        <img src="./s5/mo/stitlea.png" alt="建築強人/景觀大師/專利結構 攜手擘畫" class="img" />
        <img src="./s5/mo/titlea.png" alt="四大團隊" class="img" />
        <div class="text">頤昌建築２０２０鉅作，邀請陳朝雄建築師、冠宇和瑞空間設計、戴雲發Alfa-Safe攜手合作</div>
        <div class="pic">
          <div class="block" data-aos="fade" data-aos-delay="200">
            <img :class="`${isShow ? 'show' : ''}`" src="./s5/1_m.jpg" alt="頤昌建設 張博勝 總經理" />
            <img :class="`${isShow ? '' : 'show'}`" src="./s5/b1_m.jpg" alt="頤昌建設 張博勝 總經理" />
          </div>
          <div class="block" data-aos="fade" data-aos-delay="400">
            <img :class="`${isShow ? 'show' : ''}`" src="./s5/2.jpg" alt="陳朝雄 建築師" />
            <img :class="`${isShow ? '' : 'show'}`" src="./s5/b2.jpg" alt="陳朝雄 建築師" />
          </div>
          <div class="block" data-aos="fade" data-aos-delay="600">
            <img :class="`${isShow ? 'show' : ''}`" src="./s5/3.jpg" alt="冠宇和瑞空間設計 王俊智 總監" />
            <img :class="`${isShow ? '' : 'show'}`" src="./s5/b3.jpg" alt="冠宇和瑞空間設計 王俊智 總監" />
          </div>
          <div class="block" data-aos="fade" data-aos-delay="800">
            <img :class="`${isShow ? 'show' : ''}`" src="./s5/4.jpg" alt="戴雲發結構技師" />
            <img :class="`${isShow ? '' : 'show'}`" src="./s5/b4.jpg" alt="戴雲發結構技師" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background: url(./s5/bg.jpg) fixed;
  background-size: cover;
  position: relative;
  z-index: 2;
  overflow: hidden;
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
.pic {
  width: 100vw;
  height: auto;
  position: absolute;
  left: 0;
  top: calc(100vw * 350 / 1920);
  object-fit: cover;
  display: block;
  .block {
    width: calc(100vw * 375 / 1920);
    margin: 0 0 0 calc(100vw * 15 / 1920);
    position: relative;overflow:hidden;
    display: inline-block;
    &:nth-child(1) {
      width: calc(100vw * 455 / 1920);
      margin: 0;
      img {
        transition-delay: .1s;
      }
    }

    &:nth-child(2) {
      img {
        transition-delay: .2s;
      }
    }

    &:nth-child(3) {
      img {
        transition-delay: .3s;
      }
    }

    &:nth-child(4) {
      img {
        transition-delay: .4s;
      }
    }
  }
  img {
    width: 100%;
    height: auto;
    display: block;
    position: absolute;
    opacity: 1;
    //transition: opacity 0.8s;
    transition: all 0.8s;
      z-index: 1;
      transform: translateX(0);

    &.show {
      opacity:0;
      position: relative;
      transform: translate(-80%,-10%)rotate(30deg);
      z-index: 2;
    transition: all 0;
    }

  }
}
.text {
  width: calc(100vw * 885 / 1920);
  font-size: calc(100vw * 20 / 1920);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 1px;
  text-align: left;
  color: #666666;
  right: calc(100vw * 135 / 1920);
  top: calc(100vw * 270 / 1920);
  position: absolute;
}

.slide {
  position: absolute;
}

.slide1 {
  width: calc(100vw * 520 / 1920);
  top: calc(100vw * 349 / 1920);
  right: calc(100vw * 599 / 1920);
}

.slide2 {
  width: calc(100vw * 450 / 1920);
  top: calc(100vw * 349 / 1920);
  right: calc(100vw * 139 / 1920);
}

.slide-text {
  font-size: calc(100vw * 20 / 1920);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 1.2px;
  text-align: right;
  color: #ffffff;
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 2px 10px;
  background: #000;
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .text {
    width: calc(100vw * 1050 / 1920);
    right: calc(100vw * 139 / 1920);
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: 100% auto;
    background-image: url('./s4/mo/bg.jpg');
    overflow: visible;
  }

  .img {
    &:nth-child(1) {
      position: relative;
      height: calc(100vw * 2000 / 750);
    }
  }

  .pic {
    top: calc(100vw * 290 / 375);
    .block {
      width: calc(100vw * 350 / 750);
      margin: 0 0 calc(100vw * 15 / 750) calc(100vw * 15 / 750);
      &:nth-child(1) {
        width: calc(100vw * 350 / 750);
        margin: 0 0 calc(100vw * 15 / 750) calc(100vw * 15 / 750);
      }
    }
  }

  .text {
    width: calc(100vw * 319 / 375);
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
    top: calc(100vw * 222 / 375);
  }

  .slide,
  .slide1,
  .slide2 {
    width: 100vw;
    height: calc(100vw * 318 / 375);
    position: absolute;
    top: calc(100vw * 279 / 375);
  }

  .slide-text {
    font-size: calc(100vw * 20 / 375);
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
export default {
  name: 'section5',
  mixins: [slider],
  data() {
    return {
      isMobile,
      isShow: false,
      slideList1: [
        {
          src: require('./s5/img1-1.jpg'),
          title: '頤昌詠萃',
        },
        {
          src: require('./s5/img1-2.jpg'),
          title: '頤昌詠萃',
        },
        {
          src: require('./s5/img1-3.jpg'),
          title: '頤昌詠萃',
        },
        {
          src: require('./s5/img1-4.jpg'),
          title: '頤昌詠萃',
        },
        {
          src: require('./s5/img1-5.jpg'),
          title: '頤昌詠萃',
        },
      ],

      slideList2: [
        {
          src: require('./s5/img2-1.jpg'),
          title: '冠宇和瑞空間設計／業績',
        },
        {
          src: require('./s5/img2-2.jpg'),
          title: '冠宇和瑞空間設計／業績',
        },
        {
          src: require('./s5/img2-3.jpg'),
          title: '冠宇和瑞空間設計／業績',
        },
        {
          src: require('./s5/img2-4.jpg'),
          title: '冠宇和瑞空間設計／業績',
        },
        {
          src: require('./s5/img2-5.jpg'),
          title: '冠宇和瑞空間設計／業績',
        },
      ],

      slideList3: [
        {
          src: require('./s5/img1-1.jpg'),
          title: '頤昌詠萃',
        },
        {
          src: require('./s5/img2-1.jpg'),
          title: '冠宇和瑞空間設計／業績',
        },
        {
          src: require('./s5/img1-2.jpg'),
          title: '頤昌詠萃',
        },
        {
          src: require('./s5/img2-2.jpg'),
          title: '冠宇和瑞空間設計／業績',
        },
        {
          src: require('./s5/img1-3.jpg'),
          title: '頤昌詠萃',
        },
        {
          src: require('./s5/img2-3.jpg'),
          title: '冠宇和瑞空間設計／業績',
        },
        {
          src: require('./s5/img1-4.jpg'),
          title: '頤昌詠萃',
        },
        {
          src: require('./s5/img2-4.jpg'),
          title: '冠宇和瑞空間設計／業績',
        },
        {
          src: require('./s5/img1-5.jpg'),
          title: '頤昌詠萃',
        },
        {
          src: require('./s5/img2-5.jpg'),
          title: '冠宇和瑞空間設計／業績',
        },
      ],
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {
    setInterval(() => {
      this.isShow = !this.isShow
    }, 5000)
  },
}
</script>
