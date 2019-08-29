<template>
  <div class="section9">
    <div class="bg fullscreen relative">
      <div class="main">
        <swiper :options="swiperOption" ref="swiperBig">
          <swiper-slide v-for="(carousel) in carouselList" :key="carousel.item">
            <img v-if="!isMobile" :src="carousel.scale" alt />
            <img :src="carousel.detail" alt />
          </swiper-slide>
          <!-- <div class="swiper-pagination" slot="pagination">
          </div>-->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="items" v-if="!isMobile">
        <swiper :options="swiperOptionSmall" ref="swiperSmall">
          <swiper-slide v-for="(carousel, index) in carouselList" :key="carousel.item">
            <img :src="carousel.item" alt @click="swipeBigTo(index)" class="item-img" />
          </swiper-slide>
        </swiper>
      </div>
      <div class="items" v-else>
        <swiper :options="swiperOptionSmallMobile" ref="swiperSmall">
          <swiper-slide v-for="(carousel, index) in carouselList" :key="carousel.item">
            <img :src="carousel.item" alt @click="swipeBigTo(index)" class="item-img" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.swiper-container {
  height: 100%;
}
.swiper-slide {
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media screen and (max-width: 767px) {
  .swiper-slide {
    height: 100%;
    img {
      width: 100%;
      height: auto;
      cursor: pointer;
    }
  }
}
</style>
<style lang="scss" scoped>
.bg {
  background-image: url('./s6_bg.png');
  background-size: cover;
  position: relative;
}

.main {
  position: relative;
  z-index: 0;
  box-shadow: 0 3px 26px 0 rgba(0, 0, 0, 0.16);
  width: 90%;
  height: 70%;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 30%;
    height: auto;
    background-color: #ffffff;
  }
}

.items {
  display: flex;
  width: 100vw;
  height: 30%;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
  transition: all 0.5s;
  z-index: 1;
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .bg {
  }

  .main {
    position: relative;
    z-index: 0;
    box-shadow: 0 3px 26px 0 rgba(0, 0, 0, 0.16);
    width: 100%;
    height: auto;
    margin: 0 auto;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: auto;
      background-color: #ffffff;
    }
  }

  .items {
    display: flex;
    width: 100vw;
    height: auto;
    align-items: flex-end;
    justify-content: space-between;
    position: relative;
    transition: all 0.5s;
    z-index: 1;
  }

  .fullscreen {
    height: auto !important;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section9',

  data() {
    return {
      isMobile,
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },

      swiperOptionSmall: {
        slidesPerView: 5,
        spaceBetween: 0,
        loop: true,
      },

      swiperOptionSmallMobile: {
        slidesPerView: 3,
        spaceBetween: 0,
        loop: true,
      },
      carouselList: [
        {
          item: require('./item/1.png'),
          scale: require('./scale/1.png'),
          detail: require('./detail/1.jpg'),
        },
        {
          item: require('./item/2.png'),
          scale: require('./scale/2.png'),
          detail: require('./detail/2.jpg'),
        },
        {
          item: require('./item/3.png'),
          scale: require('./scale/3.png'),
          detail: require('./detail/3.jpg'),
        },
        {
          item: require('./item/4.png'),
          scale: require('./scale/4.png'),
          detail: require('./detail/4.jpg'),
        },
        {
          item: require('./item/5.png'),
          scale: require('./scale/5.png'),
          detail: require('./detail/5.jpg'),
        },
        {
          item: require('./item/6.png'),
          scale: require('./scale/6.png'),
          detail: require('./detail/6.jpg'),
        },
        {
          item: require('./item/7.png'),
          scale: require('./scale/7.png'),
          detail: require('./detail/7.jpg'),
        },
      ],
    }
  },

  computed: {
    swiperBig() {
      return this.$refs.swiperBig.swiper
    },

    swiperSmall() {
      return this.$refs.swiperSmall.swiper
    },
  },

  mounted() {
    this.swiperBig.on('slideChangeTransitionEnd', () => {
      this.swipeSmallTo(this.swiperBig.activeIndex)
    })
  },

  methods: {
    swipeBigTo(index) {
      this.swiperBig.slideTo(index + 1, 1000, false)
    },

    swipeSmallTo(index) {
      this.swiperSmall.slideTo(index + (this.isMobile ? 2 : 4), 1000, false)
    },
  },

  created() {},
}
</script>
