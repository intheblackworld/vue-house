<template>
  <div class="section10">
    <img src="./s10/img.png" alt="" class="img" data-aos="fade-up" data-aos-delay="0">
    <div class="item-list flex wrap flex-ac flex-ja">
      <div class="item flex-c" data-aos="fade-up" data-aos-delay="200">
        <h3 class="item-text">
          <span>
            7600
          </span>
          坪<br />
          壯闊大基地
        </h3>
      </div>
      <div class="item flex-c" data-aos="fade-up" data-aos-delay="300">
        <h3 class="item-text">
          輕軌<span>
            V11
          </span><br />
          出站就到家
        </h3>
      </div>
      <div class="item flex-c" data-aos="fade-up" data-aos-delay="300">
        <h3 class="item-text">
          <span>
            6000
          </span>
          坪<br />
          海灣俱樂部
        </h3>
      </div>
      <div class="item flex-c" data-aos="fade-up" data-aos-delay="400">
        <h3 class="item-text">
          <span>
            18
          </span>
          項<br />
          全年齡化公設
        </h3>
      </div>
    </div>
    <h3 class="title title1" data-aos="fade-up" data-aos-delay="400">
      1+1～3+1房時尚輕旅宅
    </h3>
    <h3 class="desc" data-aos="fade-up" data-aos-delay="600">
      基地位置｜淡水 沙崙路二段×新市六路一段<br />
      接待會館｜新北市淡水區濱海路一段221號<br />
      禮賓專線｜02-2805-5588
    </h3>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section10 {
  width: 100%;
  height: 100vh;
  min-height: size(1080);
  max-height: size(1080);
  position: relative;
}

.title {
  @include div_l_pc(772, 103, 713, 189);
  background-image: linear-gradient(
    to right,
    rgba(184, 28, 34, 0.9),
    rgba(233, 85, 4, 0.9)
  );
  padding: 0;
  font-size: size(65);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: size(2.6);
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
}

.desc {
  @include img_r_pc(751, 0, 163);
  top: auto;
  bottom: size(212);
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.75);
  font-size: size(39);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.48;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.img {
  position: absolute;
  width: size(957);
  top: 0;
  left: size(84);
}

.item-list {
  @include img_r_pc(563, 0, 301);
  .item {
    width: size(240);
    height: size(240);
    border: solid size(8) #fefefe;
    box-shadow: inset 0 0 3px 0 #333;
    border-radius: 999px;
    margin-bottom: size(20);
  }

  .item-text {
    font-size: size(30);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    white-space: nowrap;

    span {
      font-size: size(42);
      font-weight: bold;
      color: #fff000;
    white-space: nowrap;
    }
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
    height: sizem(840);
    min-height: auto;
    max-height: initial;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
    &::after,
    &::before {
      display: none;
    }
  }

  .title {
    @include div_c_m(303, 40, 636);
    background-image: linear-gradient(
      to right,
      rgba(184, 28, 34, 0.9),
      rgba(233, 85, 4, 0.9)
    );
    padding: 0;
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: sizem(1);
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
  }

  .desc {
    @include img_c_m(290, 0);
    top: auto;
    bottom: sizem(85);
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.75);
    font-size: sizem(15);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .img {
    @include img_c_m(366, 384);
  }

  .item-list {
    @include img_c_m(315, 40);
    .item {
      width: sizem(145);
      height: sizem(145);
      border: solid sizem(4) #fefefe;
      box-shadow: inset 0 0 3px 0 #333;
      border-radius: 999px;
      margin-bottom: sizem(16);
    }

    .item-text {
      font-size: sizem(20);
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.3;
      letter-spacing: normal;
      text-align: center;
      color: #ffffff;

      span {
        font-size: sizem(25);
        font-weight: bold;
        color: #fff000;
      }
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
// import slider from '@/mixins/slider.js'

export default {
  name: 'section10',

  // mixins: [slider],
  // props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      // slideList: [
      //   {
      //     img: require('./s4/1漁人碼頭、情人橋.jpg'),
      //     name: '漁人碼頭、情人橋',
      //   },
      //   {
      //     img: require('./s4/2美麗新淡海影城.jpg'),
      //     name: '美麗新淡海影城',
      //   },
      //   {
      //     img: require('./s4/3淡水紅毛城.jpg'),
      //     name: '淡水紅毛城',
      //   },
      //   {
      //     img: require('./s4/4淡水老街(中正路).jpg'),
      //     name: '淡水老街(中正路)',
      //   },
      //   {
      //     img: require('./s4/5紅樹林自然保留區.jpg'),
      //     name: '紅樹林自然保留區',
      //   },
      // ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {
    // viewIndex() {
    //   if (this.viewIndex === 5) {
    //     this.slideIndex = 0
    //     console.log(this.slideIndex, 'slideIndex')
    //   }
    // },
  },
}
</script>
