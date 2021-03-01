<template>
  <div class="section9">
    <img src="./s9/08_bg.jpg" :alt="`${info.caseName}_icon`" class="bg">
    <img src="./s9/08_logo_icon.png" :alt="`${info.caseName}_icon`" class="logo">
    <img src="./s9/08_title_1.png" :alt="`${info.caseName}_icon`" class="title1">
    <img src="./s9/08_title_2.png" :alt="`${info.caseName}_icon`" class="title2">
    <vue-accordion :items="items" :accordionClass="acClass" :styles="styles"></vue-accordion>
  </div>
</template>
<style lang="scss">
@import '@/assets/style/function.scss';
.vue-accordion {
  max-width: size(1920 - 389) !important;
  width: size(1920 - 389);
  position: absolute;
  top: 0;
  left: size(389);
}

.vue-accordion {
  ul {
    li {
      background-position: 0% !important;
      background-size: cover !important;
    }
    li {
      width: 15% !important;
    }
    li:nth-child(2) {
      width: 60% !important;
    }
  }
  ul:hover {
    li:hover a {
      background: transparent !important;
    }
    li:nth-child(2) {
      width: 15% !important;
    }
    li {
      width: 15% !important;
    }

    li:hover {
      width: 60% !important;
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
  // overflow: hidden;
  position: relative;
  // background: #552e70 fixed;
  background-size: auto;
  // z-index: 23;
}

.bg-img {
  width: size(1920);
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
    height: calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(750);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
    background: transparent;
  }
  .logo {
    @include img_c_m(320, 190);
    top: calc(50% - 22vw);
  }

  .bg {
    @include img_c_m(375, 0);
    top: auto;
    bottom: sizem(-275);
  }

  .tree {
    @include img_r_m(280, 0, -110);
    top: auto;
    bottom: 0;
  }

  .img2 {
    @include img_l_m(135, 0, 140);
    top: auto;
    bottom: 0;
  }

  .img3 {
    @include img_l_m(110, 0, 200);
    top: auto;
    bottom: 0;
  }

  .img4 {
    @include img_l_m(113, 0, 206);
    top: auto;
    bottom: 0;
  }

  .t2 {
    @include img_c_m(310, 121);
    top: calc(50% - 40vw);
  }

  .mrt {
    @include img_l_m(114, 0, 0);
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
          height: '100vh',
        },
      },
      items: [
        {
          title: '',
          text: '',
          url: '',
          image: require('./s9/08_item_1.jpg'),
        },
        {
          title: '',
          text: '',
          url: '',
          image: require('./s9/08_item_2.jpg'),
        },
        {
          title: '',
          text: '',
          url: '',
          image: require('./s9/08_item_3.jpg'),
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
