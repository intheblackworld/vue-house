<template>
  <div class="section8">
    <img src="./shin-lan/index/8/img.png" alt="" class="img">
    <div class="shin-lan-title-h title gold" data-aos="fade">
      都更<span data-aos="flip-right"></span>專區
    </div>
    <img src="./shin-lan/index/8/img2.jpg" alt="" class="item-img" v-if="isPC">
    <div class="item-list">
      <div class="item flex-c flex-jb" v-for="(item, index) in item_list" :key="item.name + index" @click="$router.push(item.link)">
        <div>
          <div class="item-title" v-html="item.title"></div>
          <div class="item-desc" v-html="item.desc"></div>
          <div class="btn-more flex-c" @click="$router.push('/renewal')">
            了解更多
          </div>
        </div>
      </div>
    </div>
    <img src="./shin-lan/index/8/img2.jpg" alt="" class="b-img" v-if="isMobile">
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section8 {
  width: 100%;
  height: size(750);
  min-height: size(750);
  max-height: auto;
  background-size: cover;
  background-attachment: fixed;
  background-color: #fff;

  @include md {
    width: 100vw;
    height: auto;
    min-height: auto;
    max-height: initial;
    overflow: visible;
    padding-bottom: sizem(0);
  }
}

.img {
  @include img_l_pc(446, 60, 0);
  object-fit: cover;
  @include md {
    @include img_r_m(175, -40, 0);
    transform: rotateY(180deg);
  }
}

.title {
  @include img_l_pc(267, 300, 335);

  @include md {
    @include img_l_m(167, 62, 32);
    font-size: sizem(28);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.45;
    letter-spacing: sizem(1);
    text-align: left;
  }
}

.desc {
  @include img_r_pc(290, 216, 359);
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: size(1.44);
  text-align: left;
  color: #000;
  white-space: nowrap;
}

.item-list {
  @include img_c_pc(1220, 370);
  @include md {
    position: relative;
    width: sizem(310);
    top: 0;
    padding-top: sizem(142);
    padding-bottom: sizem(40);
  }
}

.item {
  cursor: pointer;
  text-align: left;

  > div {
    width: size(550);

    @include md {
      width: 100%;
    }
  }
}

.item-img {
  @include img_r_pc(960, 60, 0);
}



.item-title {
  display: inline-block;
  margin-left: 0;
  font-size: size(28);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: size(1.4);
  text-align: left;
  color: #000;
  margin-bottom: 0.2rem;
  border-bottom: 1px solid #000;

  @include md {
    font-size: sizem(24);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.92;
    letter-spacing: sizem(1.2);
    text-align: left;
    color: #000;
    padding-bottom: 0.8rem;
    margin-bottom: 0.8rem;
  }
}

.item-subtitle {
  font-size: size(24);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: size(1.92);
  text-align: left;
  color: #000;
  margin-bottom: 0.2rem;
}

.item-desc {
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: size(1.44);
  text-align: left;
  color: #000;
  margin-bottom: 1rem;

  @include md {
    width: 100%;
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: normal;
    text-align: left;
    color: #000;
  }
}

.item-btn {
  width: size(106);
  height: size(20);
  background-color: #000;
  font-size: size(15);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(3);
  text-align: center;
  color: #fff;
  margin-right: 1.5rem;
}

.btn-more {
  width: size(158);
  height: size(40);
  border: solid 1px #707070;
  font-size: size(15);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(3);
  text-align: center;
  color: #000;
  cursor: pointer;
  transition: all 0.3s;

  @include md {
    @include img_c_m(160, 0);
    height: sizem(40);
    top: auto;
    bottom: 0;
    font-size: sizem(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: sizem(3);
    text-align: center;
    color: #000;
  }

  &:hover {
    background-color: #000009;
    color: #fff;
  }
}

.b-img {
  width: 100%;
  margin-top: sizem(40);
}


</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
// import slider from '@/mixins/slider.js'

export default {
  name: 'section8',

  // mixins: [slider],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      item_list: [
        {
          link: '',
          title: '萬華段都更',
          desc: '欣聯建設於台北市萬華區康定路大理街都市更新案<br />東以康定路、南以和平西路三段42巷 、西以大理街42巷 、北以大理街所圍之街廓範圍內，為一非完整街廓。【詳-更新單元位置圖】......',
        },
      ],
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
