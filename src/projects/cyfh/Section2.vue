<template>
  <div>
    <div
      v-if="isDialog"
      class="dialog flex-c"
    >
      <div class="relative"><img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAKlBMVEVHcEz////z8fHz8fH////z8fHz8fHz8fHz8fHz8fHz8fHz8fHx7u708fEdE1r4AAAADnRSTlMAA0S1Bec3v6z4KcoaoNqzfoQAAAF6SURBVHjapZfLksMgDAQZwOLl/P/vboBydPAaXCPdkkq3TWBAuBoqHFmoQdynNIkcH6WVjztDSRI5PpVwOlfzkTxhgE/HGD44Q/ThyIKhknwEHzl+lnzUwPAuquEtn4/soV/Aq4Hge/mshj0fbryDGih+zsWrFQWZ/F08DNjz6QiCB3VpFbv8tHLx96pfw4klf7aSFg+pqRuW/OYlz9R/sHr/1B+wMQgeeGn6gqtRPMwmJOn4V4bwf7rhQ8//u4US7obYednzuj8s8ksYNH/70mQR/N2gfP9IGqA8Y5j5JTZ+P9J9TStx/HUwCVCv/DOGkupY2nBUoadb88/U11CagYdREE1DsP+JsU9jBeovxsRSZBaS8hMbBjoK9jBSBvuGEo1bGpSnNmVn3NbxdLDEdwcLTtvRBsvhuj/e3e54B91gKM+3OPYmC+/aPKdtnrXRtLa6FD8LaqB4zeadJwzcpQnDIN1gv3TZr30EPw3z4mm++pov39brf/0DkT4QydVQXNwAAAAASUVORK5CYII="
          alt=""
          class="close"
          @click="isDialog = false"
        ><iframe
          src="https://www.youtube.com/embed/0VXHd50CyJQ"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe></div>
    </div>
    <div class="relative section2">

      <div v-if="!isMobile">
        <div class="row">
          <div class="text-row flex-ac flex-jb">
            <div
              class="title-block"
              data-aos="fade"
              data-aos-delay="400"
            >
              <h3 class="subtitle">中山北路第一排</h3>
              <h3 class="title">與雙溪河畔 奇蹟相遇</h3>
            </div>
            <div
              class="desc"
              data-aos="fade"
              data-aos-delay="600"
            >孕育士林的口袋之河—雙溪，千百年來潺潺流淌，不舍晝夜，靜靜流動的歲月裡，無數人在這塊土地上留下生命的印記！「全陽豐會」在這條中山北路與雙溪十字交會的地段，一期一會、知音相遇。</div>
          </div>
          <div
            class="flex-ac flex-jb"
            data-aos="fade"
            data-aos-delay="800"
          >
            <img
              src="./s2/img.jpg"
              alt=""
              class="img1"
            >
            <img
              src="./s2/road.png"
              alt=""
              class="road"
            >
          </div>
        </div>
        <div class="row flex-ab flex-jb">
          <div
            class="flex-ac flex-jb"
            data-aos="fade"
            data-aos-delay="200"
          >
            <img
              src="./s3/img.jpg"
              alt=""
              class="img1"
              @click="isDialog = true"
            >
          </div>
          <div class="text-block">
            <div
              class="title-block"
              data-aos="fade"
              data-aos-delay="400"
            >
              <h3 class="title">吳念真導演 深情執導</h3>
              <h3 class="subtitle">真情上映：</h3>
            </div>
            <div
              class="desc"
              data-aos="fade"
              data-aos-delay="600"
            >《全陽豐會》緊鄰水岸，<br />
              這條士林碩果僅存的河水，<br />
              千百年來潺潺流淌，<br />
              河面曾經浮現的天光山色，<br />
              您或許不曾看過，</div>
            <div class="desc">
              但，如果有緣<br />
              此後你和家人，<br />
              都將成為這片河岸風景的一部分。
            </div>
          </div>
        </div>

        <div
          class="row4"
          id="section4"
        >
          <div class="flex-ac flex-jb">
            <!-- <img
            src="./s2/img.jpg"
            alt=""
            class="img1"
          > -->
            <swiper
              class="img1"
              :options="swiperOption"
              ref="mySwiper"
              data-aos="fade"
              data-aos-delay="1000"
            >
              <swiper-slide
                v-for="(slide, index) in imgList"
                :index="index"
                :key="slide"
                class="item-img"
              >
                <img
                  :src="slide"
                  :class="`item-img`"
                />
              </swiper-slide>
              <div
                class="swiper-pagination"
                slot="pagination"
              ></div>
            </swiper>
          </div>
          <div class="text-row flex-ac flex-jb">
            <div
              class="title-block"
              data-aos="fade"
              data-aos-delay="400"
            >
              <h3 class="subtitle">優雅生活美學</h3>
              <h3 class="title">台北人的集體記憶</h3>
            </div>
            <div
              class="desc"
              data-aos="fade"
              data-aos-delay="600"
            >中山北路五段跨界天母福林橋一帶，圓山、士林官邸、雙溪、故宮…貴族血統人文薈萃，漫遊傳奇老舖郭元益、士林夜市、文青風格士東市場、華榮市場…所有的豐盛美好都在這裡相聚！</div>
          </div>
        </div>
      </div>
      <div v-if="isMobile">
        <div class="row">
          <div class="text-block">
            <div
              class="title-block"
              data-aos="fade"
              data-aos-delay="400"
            >
              <h3 class="subtitle">中山北路第一排</h3>
              <h3 class="title">與雙溪河畔 奇蹟相遇</h3>
            </div>
            <div
              class="desc"
              data-aos="fade"
              data-aos-delay="600"
            >孕育士林的口袋之河—雙溪，千百年來潺潺流淌，不舍晝夜，靜靜流動的歲月裡，無數人在這塊土地上留下生命的印記！「全陽豐會」在這條中山北路與雙溪十字交會的地段，一期一會、知音相遇。</div>
          </div>
          <img
            src="./s2/road.png"
            alt=""
            class="road"
          >
          <div
            class="flex-ac flex-jb"
            data-aos="fade"
            data-aos-delay="700"
          >
            <img
              src="./s2/img.jpg"
              alt=""
              class="img1"
            >
          </div>
        </div>
        <div class="row">
          <div class="text-block">
            <div
              class="title-block"
              data-aos="fade"
              data-aos-delay="400"
            >
              <h3 class="title">吳念真導演 深情執導</h3>
              <h3 class="subtitle">真情上映：</h3>
            </div>
            <div
              class="desc"
              data-aos="fade"
              data-aos-delay="600"
            >《全陽豐會》緊鄰水岸，<br />
              這條士林碩果僅存的河水，<br />
              千百年來潺潺流淌，<br />
              河面曾經浮現的天光山色，<br />
              您或許不曾看過，</div>
            <div class="desc">
              但，如果有緣<br />
              此後你和家人，<br />
              都將成為這片河岸風景的一部分。
            </div>
          </div>
          <div
            class="flex-ac flex-jb"
            data-aos="fade"
            data-aos-delay="700"
          >
            <img
              @click="isDialog = true"
              src="./s3/img.jpg"
              alt=""
              class="img2"
            >
          </div>
        </div>
        <div
          class="row4"
          id="section4"
        >
          <swiper
            class="img2"
            :options="swiperOption"
            ref="mySwiper"
            data-aos="fade"
            data-aos-delay="800"
          >
            <swiper-slide
              v-for="(slide, index) in imgList"
              :index="index"
              :key="slide"
              class="item-img"
            >
              <img
                :src="slide"
                :class="`item-img`"
              />
            </swiper-slide>
            <div
              class="swiper-pagination"
              slot="pagination"
            ></div>
          </swiper>

          <div class="text-block">
            <div
              class="title-block"
              data-aos="fade"
              data-aos-delay="400"
            >
              <h3 class="subtitle">優雅生活美學</h3>
              <h3 class="title">台北人的集體記憶</h3>
            </div>
            <div
              class="desc"
              data-aos="fade"
              data-aos-delay="600"
            >中山北路五段跨界天母福林橋一帶，圓山、士林官邸、雙溪、故宮…貴族血統人文薈萃，漫遊傳奇老舖郭元益、士林夜市、文青風格士東市場、華榮市場…所有的豐盛美好都在這裡相聚！</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  // overflow: hidden;
  position: relative;
  z-index: 2;
  //height: 100vh;
}

.section2 {
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;

  &::v-deep .swiper-pagination-bullet {
    width: 1em;
    height: 1em;
    background-color: transparent;
    box-shadow: inset 0 0 0 1px #fff;
    opacity: 1;
    margin: 0 0.8em !important;

    &.swiper-pagination-bullet-active {
      background-color: #fff;
    }
  }
}
.swiper-pagination {
  font-size: 18px;
  bottom: 0.4em;
  text-align: center;
  padding: 0;
  left: 0;
}

// .bg-img {
//   width: 100vw;
//   height: auto;
//   position: absolute;
//   display: block;
//   top: 0;
//   left: 0;
//   object-fit: cover;
//   &:first-child {
//     position: relative;
//   }
// }

.img1 {
  width: size(1138);
  cursor: pointer;
}

.road {
  width: size(313);
}

.text-row {
  width: size(1138);
  min-height: size(112);
  margin: size(20) 0 0 0;
  .desc {
    width: size(820);
  }
}

.text-block {
  width: size(360);
  .title-block {
    line-height: 1.6;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    text-align: left;
    color: #000000;
    .title {
      // font-size: size(30);
      white-space: nowrap;
    }
  }
}

.title-block {
  width: size(460);
  top: 0;
  padding-left: size(20);
  margin: 0 0 size(36.5) 0;
  position: relative;
  letter-spacing: 0.2em;
  line-height: 1.4;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  text-align: left;
  color: #000000;
  &::after {
    content: '';
    height: 83%;
    width: size(3);
    background: #000;
    position: absolute;
    top: 10%;
    left: 0;
  }
  .title {
    font-size: size(37);
    font-weight: bold;
  }

  .subtitle {
    font-size: size(31);
    font-weight: normal;
  }
}

.desc {
  // width: size(1100);
  font-size: size(20);
  line-height: 1.8;
  text-align: left;
  color: #333333;
  margin: 0 0 1em 1em;
}

.row {
  width: size(1138 + 78 + 313);
  margin: 0 auto 0;
  padding-bottom: 200px;
}

.row4 {
  width: size(1561);
  margin: 0 auto;

  .img1,
  .text-row {
    width: 100%;
  }
}
.item-img {
  width: 100%;
}

.dialog {
  position: fixed;
  width: 100vw;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 250;
  .close {
    width: size(40);
    cursor: pointer;
    position: absolute;
    top: -70px;
    right: -70px;
    z-index: 2;
  }
  iframe {
    width: size(1280);
    height: size(750);
  }
}

@media only screen and (max-width: 1440px) {
  .bg-img {
  }
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .relative {
    margin: 0 0 0 0;
  }

  .swiper-pagination {
    top: size_m(5);
    font-size: size_m(13);
  }

  .row {
    padding-top: size_m(60);
    padding-bottom: 0;
    width: 100vw;
  }

  .text-block {
    width: size-m(310);
    margin: 0 auto;
  }

  .title-block {
    width: 100%;
    padding-left: 15px;
    &::after {
      width: size_m(3);
      height: 90%;
      top: 5%;
    }
  }

  .desc {
    width: 100%;
    font-size: size-m(14.6);
    margin: 0 0 1em 0;
    // margin-bottom: 40px;
  }

  .text-block {
    margin-bottom: size-m(40);
    .title-block {
      height: auto;
      margin-bottom: size-m(15);
    }
    .title {
      font-size: size-m(25);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.2;
      letter-spacing: 5.15px;
      text-align: left;
      color: #000000;
    }

    .subtitle {
      font-size: size-m(21);
      font-weight: normal;
      letter-spacing: 4.33px;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.2;
      text-align: left;
      color: #000000;
    }
  }

  .img1 {
    width: 100%;
    height: size-m(200);
    object-fit: cover;
    object-position: center;
    margin: size-m(50) 0 0 0;
  }

  .road {
    width: size-m(250);
    // height: size-m(227);
    object-fit: contain;
    object-position: center;
  }

  .img2 {
    width: 100vw;
    height: auto;
    object-fit: cover;
    object-position: center;
    margin-bottom: 40px;
  }

  .item-img {
    width: 100vw;
  }

  .row4 {
    width: 100vw;
    margin: 0 auto;

    .img1,
    .text-row {
      width: 100%;
    }
  }

  .dialog {
    position: fixed;
    width: 100vw;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 250;
    .close {
      width: size-m(40);
      cursor: pointer;
      position: absolute;
      top: -70px;
      right: 0px;
      z-index: 2;
    }
    iframe {
      width: 100vw;
      height: size-m(345);
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
// import Parallax from '@/components/Parallax.vue'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'section2',
  mixins: [slider],
  components: {
    swiper,
    swiperSlide,
    // Parallax,
  },
  data() {
    return {
      isMobile,
      isDialog: false,
      swiperOption: {
        slidesPerView: isMobile ? 1 : 1,
        centeredSlides: true,
        spaceBetween: isMobile ? 10 : 30,
        slidesPerColumn: isMobile ? 1 : 1,
        effect: 'fade',

        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
        loop: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      imgList: isMobile
        ? [
            require('./mo/4/1.jpg'),
            require('./mo/4/2.jpg'),
            require('./mo/4/3.jpg'),
          ]
        : [require('./s4/1.jpg'), require('./s4/2.jpg'), require('./s4/3.jpg')],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
