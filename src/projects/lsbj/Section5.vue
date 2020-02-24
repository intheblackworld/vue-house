<template>
  <div class="section5">
    <div class="bg relative">
      <div v-if="!isMobile">
        <div class="btn-group">
          <img src="./s5/left.png" alt class="btn left" @click="decIndex" />
          <img src="./s5/right.png" alt class="btn right" @click="addIndex" />
        </div>
        <div :class="`slide`" data-aos="fade" data-aos-delay="600">
          <div
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s5-slide-${index}`"
          >
            <img :class="`slide-img1 ${slideIndex === index ? 'active' : ''}`" :src="slide.src1" alt />
            <img :class="`slide-img2 ${slideIndex === index ? 'active' : ''}`" :src="slide.src2" alt />
            <div class="slide-text">
              <h3>{{slideList[slideIndex].title}}</h3>
              <p>{{slideList[slideIndex].p}}</p>
            </div>
          </div>
        </div>
        <!-- <img src="./s4/img2a.png" alt class="img" data-aos="fade" data-aos-delay="400" />
        <img src="./s4/img3a.png" alt class="img" data-aos="fade" data-aos-delay="600" />
        <img src="./s4/lineba.png" alt class="img" />
        <img src="./s4/stitlea.png" alt class="img" />
        <img src="./s4/titlea.png" alt class="img" />-->
      </div>
      <div v-if="isMobile">
        <!--<img src="./s5/mo/title.png" alt class="img" /> -->
        <div :class="`slide`" data-aos="fade" data-aos-delay="600">
          <div
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s5-slide-${index}`"
          >
            <img :class="`slide-img1 ${slideIndex === index ? 'active' : ''}`" :src="slide.src1" alt />
            <img :class="`slide-img2 ${slideIndex === index ? 'active' : ''}`" :src="slide.src2" alt />
          </div>
        </div>
        <div class="btn-group">
          <img src="./s5/left.png" alt class="btn left" @click="decIndex" />
          <img src="./s5/right.png" alt class="btn right" @click="addIndex" />
        </div>
        <div class="slide-text">
              <h3>{{slideList[slideIndex].title}}</h3>
              <p>{{slideList[slideIndex].p}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
  z-index: 2;
  overflow: hidden;height: 100vh;
}

.img {
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: contain;
  display: block;
  z-index: 1;
  &.fix {
    position: fixed;
  }
  // &:nth-child(1) {
  //   position: relative;
  // }
}


.slide {
  height: 100%;
  .slide-img1{
  width: 100vw;height: 100vh;filter: blur(10px);opacity: 0.6;}
  .slide-img2{
  position: absolute;top:0;left:50%;height: 100vh;object-fit: contain;transform: translate(-50%)}
}

.slide-text {
  font-size:0.92vw;line-height: 1.6;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 1.2px;
  text-align:left;
  color: #ffffff;
  position: absolute;
  padding: 3.1vw  5vw 2px 60vw;
  right:0;min-height: 15vw;
  bottom: 0;
  z-index: 5;
    background: url('./s5/tbg.png') no-repeat;
    background-position: top right;
    background-size: 100vw auto;

h3{color: #fff;font-size: 1.7em;padding: 0 0 0.8em 3em;}
p{color: rgba(255,255,255, 0.7);width: 36em;}
}

.btn-group {
  width: 100vw;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  margin: 0 auto;
  right: 0;
  z-index: 3;

  .btn {
    cursor: pointer;
    position: absolute;

    &.left {
      left: 0;
    }

    &.right {
      right: 0;
    }
  }
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
    background-size: cover;
    overflow: visible;
    height:calc(100vh - 63px);
  }

  .img {
    &:nth-child(1) {
      position: relative;margin: 0 0 5em;
    }
  }

  .slide {
  .slide-img1{height:calc(100vh - 63px);}
  .slide-img2{height:50%;object-fit: cover;width: 100%;}

  }

  .slide-text {
    background-image:url('./s2/mo/titleall.png');
    font-size: calc(100vw * 11 / 375);
    left: calc(100vw * 0 / 375);
    right: auto;
    top: 50%;
    bottom:auto;  
    padding: 4em 2em 0 3em;
    width: 100%;
h3{}
p{width: auto;}
  }

  .btn-group {
    top: 25%;

    > img {
      width: 30px;
    }
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
      slideList: [
        {
          src1: isMobile
            ? require('./s5/mo/迎賓車道圖.jpg')
            : require('./s5/1迎賓車道圖.jpg'),
          src2: isMobile
            ? require('./s5/mo/迎賓車道圖.jpg')
            : require('./s5/1迎賓車道圖.jpg'),
          title: '飯店式迴車廣場',
          p: '跨界飯店Private Club住宅，國際飯店行旅質感凝鍊，以低調內斂的姿態，在現代都會桃源內雕琢奢華，一樓大器規格迎賓，璞麗風華LOBBY、LOUNGE交誼廳咖啡品茗小酌、閱讀交誼區休閒商務聚會、VIP視聽室影音盛宴…同步飯店質感生活。',
        },
        {
          src1: isMobile
            ? require('./s5/mo/大廳.jpg')
            : require('./s5/2大廳.jpg'),
          src2: isMobile
            ? require('./s5/mo/大廳.jpg')
            : require('./s5/2大廳.jpg'),
          title: '挑高7米迎賓大廳 Lobby',
          p: '',
        },
        {
          src1: isMobile
            ? require('./s5/mo/沙發區.jpg')
            : require('./s5/3沙發區.jpg'),
          src2: isMobile
            ? require('./s5/mo/沙發區.jpg')
            : require('./s5/3沙發區.jpg'),
          title: '歐式午茶交誼廳 Lounge',
          p: '跨界飯店Private Club住宅，國際飯店行旅質感凝鍊，以低調內斂的姿態，在現代都會桃源內雕琢奢華，一樓大器規格迎賓，璞麗風華LOBBY、LOUNGE交誼廳咖啡品茗小酌、閱讀交誼區休閒商務聚會、VIP視聽室影音盛宴…同步飯店質感生活。',
        },
        {
          src1: isMobile
            ? require('./s5/mo/長型會客區.jpg')
            : require('./s5/4長型會客區.jpg'),
          src2: isMobile
            ? require('./s5/mo/長型會客區.jpg')
            : require('./s5/4長型會客區.jpg'),
          title: '歐式尊爵饗宴廳 Ballroom',
          p: '跨界飯店Private Club住宅，國際飯店行旅質感凝鍊，以低調內斂的姿態，在現代都會桃源內雕琢奢華，一樓大器規格迎賓，璞麗風華LOBBY、LOUNGE交誼廳咖啡品茗小酌、閱讀交誼區休閒商務聚會、VIP視聽室影音盛宴…同步飯店質感生活。',
        },
        {
          src1: isMobile
            ? require('./s5/mo/視聽室.jpg')
            : require('./s5/視聽室.jpg'),
          src2: isMobile
            ? require('./s5/mo/視聽室.jpg')
            : require('./s5/視聽室.jpg'),
          title: 'VIP包廂影廳',
          p: '跨界飯店Private Club住宅，國際飯店行旅質感凝鍊，以低調內斂的姿態，在現代都會桃源內雕琢奢華，一樓大器規格迎賓，璞麗風華LOBBY、LOUNGE交誼廳咖啡品茗小酌、閱讀交誼區休閒商務聚會、VIP視聽室影音盛宴…同步飯店質感生活。',
        },
        {
          src1: isMobile
            ? require('./s5/mo/SKY.jpg')
            : require('./s5/SKY.jpg'),
          src2: isMobile
            ? require('./s5/mo/SKY.jpg')
            : require('./s5/SKY.jpg'),
          title: 'SKY BAR',
          p: '跨界飯店Private Club住宅，國際飯店行旅質感凝鍊，以低調內斂的姿態，在現代都會桃源內雕琢奢華，一樓大器規格迎賓，璞麗風華LOBBY、LOUNGE交誼廳咖啡品茗小酌、閱讀交誼區休閒商務聚會、VIP視聽室影音盛宴…同步飯店質感生活。',
        },
      ],
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
