<template>
  <div class="section9">
    <img src="./s9/08_bg.jpg" :alt="`${info.caseName}_icon`" class="bg" v-if="isPC">
    <div class="bg" v-if="isMobile"></div>
    <img src="./s9/08_logo_icon.png" :alt="`${info.caseName}_icon`" class="logo">
    <img src="./s9/08_title_1.png" :alt="`${info.caseName}_icon`" class="title1" v-if="isPC">
    <img src="./s9/08_title_2.png" :alt="`${info.caseName}_icon`" class="title2" v-if="isPC">
    <div class="title1" v-if="isMobile">
      九揚環球集團．經典建案
    </div>
    <div class="title2" v-if="isMobile">
      世襲貴族風範　實力無可取代
    </div>
    <div class="vue-accordion">
      <ul>
        <li :id="`s9_${item.index}`" v-scroll-to="{ element: `#s9_${item.index}`}" :class="`${currentIndex === index ? 'active' : ''}`" v-for="(item, index) in items" :key="item.image" :style="{ backgroundImage: `url(${item.image})` }" @click="currentIndex = index">
          <h2></h2>
          <p></p>
        </li>
      </ul>
    </div>
    <!-- <vue-accordion :items="items" :accordionClass="acClass" :styles="styles"></vue-accordion> -->
  </div>
</template>
<style lang="scss">
@import '@/assets/style/function.scss';
.vue-accordion {
  height: 100vh;
  max-width: size(1920 - 389) !important;
  width: size(1920 - 389);
  position: absolute;
  top: 0;
  left: size(389);
}

.vue-accordion {
  ul {
    width: 100%;
    height: 100%;
    display: table;
    table-layout: fixed;
    margin: 0;
    padding: 0;
    li {
      vertical-align: bottom;
      position: relative;
      height: 100%;
      display: table-cell;
      width: 50%;
      background-repeat: no-repeat;
      background-position: center;
      transition: all 0.5s ease;
      background-position: 0%;
      background-size: cover;
      cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.3) 80px 0px 80px -12px inset,
      rgba(0, 0, 0, 0.3) 18px 0px 18px -18px inset,;
    }
    li {
      width: 15%;
    }
  }
  li.active {
    width: 60%;
  }

  li.active {
    box-shadow: rgba(50, 50, 93, 0.25) 20px 0px 20px -12px inset,
      rgba(0, 0, 0, 0.3) 18px 0px 18px -18px inset;
  }
}
@media screen and (max-width: 767px) {
  .vue-accordion {
    max-width: 100vw !important;
    width: 100vw;
    height: auto;
    position: relative;
    top: 0;
    top: sizem(250);
    margin-bottom: sizem(200);
    left: 0;
  }

  .vue-accordion {
    ul {
      width: 100%;
      li {
        display: block !important;
        background-position: 100% 0% !important;
        background-size: cover !important;
        width: 100vw !important;
        height: sizem(218) !important;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
      }
    }
    li.active {
      width: 100vw !important;
      height: sizem(561) !important;
      // background: transparent !important;
      box-shadow: rgba(50, 50, 93, 0.1) 0px 15px 20px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
    li {
      width: 100vw !important;
      height: sizem(218) !important;
    }
  }
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section9 {
  width: size(1920);
  height: 100vh;
  // min-height: size(1080);
  // max-height: size(1080);
  overflow: hidden;
  position: relative;
  // background: #552e70 fixed;
  background-size: auto;
  // z-index: 23;
}

.bg-img {
  width:100%;
  // height: 100%;
  // min-height: size(900);
  position: absolute;
  top: -1px;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;

  &:nth-child(1) {
    position: relative;
  }
}

.bg {
  @include img_l_pc(389, 0, 0);
  top: auto;
  bottom: 0
}

.logo {
  @include img_l_pc(76, 157, 187);
}

.title1 {
  @include img_l_pc(47, 233, 206);
}

.title2 {
  @include img_l_pc(80, 247, 276);
}

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
/*
.t1 {
  width: size(751);
  top: size(483);
  left: size(585);
}

.t2 {
  width: size(751);
  top: size(711);
  left: size(585);
}
*/
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
  .section9 {
    width: 100vw;
    height: auto;
    min-height: sizem(604);
    max-height: auto;
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
    background: transparent;
  }
  .bg {
    @include img_l_m(375, 0, 0);
    height: sizem(250);
    background-color: #542e71;
  }

  .logo {
    @include img_c_m(60, 40);
  }

  .title1 {
    @include img_c_m(285, 83);
    font-size: sizem(25);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.46;
    letter-spacing: normal;
    text-align: right;
    color: #ebd232;
  }

  .title2 {
    @include img_c_m(260, 159);
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    font-size: sizem(20);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    text-align: right;
    color: #ffffff;
  }
}
</style>
<script>
// @ is an alias to /src
import info from '@/info'
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section9',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      acClass: 'vue-accordion',
      styles: {
        div: {
          height: isMobile ? 'auto' : '100vh',
        },
      },
      currentIndex: 1,
      items: [
        {
          index:1,
          title: '',
          text: '',
          // url: '#',
          image: isMobile
            ? require('./s9/08_item_1_m.jpg')
            : require('./s9/08_item_1.jpg'),
        },
        {
          index:2,
          title: '',
          text: '',
          // url: '#',
          image: isMobile
            ? require('./s9/08_item_2_m.jpg')
            : require('./s9/08_item_2.jpg'),
        },
        {
          index:3,
          title: '',
          text: '',
          // url: '#',
          image: isMobile
            ? require('./s9/08_item_3_m.jpg')
            : require('./s9/08_item_3.jpg'),
        },
        {
          index:4,
          title: '',
          text: '',
          // url: '#',
          image: isMobile
            ? require('./s9/08_item_4_m.jpg')
            : require('./s9/08_item_4.jpg'),
        },
      ],
    }
  },

  methods: {},

  mounted() {},

  created() {},

  computed: {},
}
</script>
