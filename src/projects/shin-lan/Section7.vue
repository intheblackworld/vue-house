<template>
  <div class="section7">
    <img v-if="isPC" src="./shin-lan/index/7/bg.png" alt="" class="thumb">
    <img v-if="isMobile" src="./shin-lan/mo/index/7/bg.png" alt="" class="thumb">
    <div v-if="isPC" class="shin-lan-title-v title" data-aos="fade">
      企業<span data-aos="flip-right"></span>責任
    </div>
    <div v-if="isMobile" class="shin-lan-title-h title" data-aos="fade">
      企業<span data-aos="flip-right"></span>責任
    </div>
    <div class="desc" v-if="isPC">
      欣聯建設本持著服務社會的精神，<br />
      持續為社會公益服務
    </div>
    <div class="desc" v-if="isMobile">
      欣聯建設本持著服務社會的精神，
      持續為社會公益服務
    </div>
    <div class="container">
      <div class="item-list" @click="$router.push('/company')">
        <div class="item flex-c flex-jb" v-for="(item, index) in item_list" :key="item.name + index" @click="$router.push(item.link)">
          <img v-if="isMobile" :src="item.imgs[0]" alt="" class="item-img">
          <div>
            <div class="item-date" v-html="item.date"></div>
            <div class="item-title" v-html="item.title"></div>
            <div class="item-subtitle" v-html="item.subtitle"></div>
            <div class="item-desc" v-html="item.desc"></div>
            <div class="btn-more flex-c" v-if="isPC">
              了解更多
            </div>
          </div>
          <img v-if="isPC" :src="item.imgs[0]" alt="" class="item-img">
        </div>
      </div>
      <div class="btn-more flex-c" @click="$router.push('/company')" v-if="isMobile">
        了解更多
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section7 {
  width: 100%;
  height: size(494 + 480 + 100);
  background-size: cover;
  background-attachment: fixed;
 // background-color: #f7f8f8;

  @include md {
    width: 100vw;
    height: auto;
    min-height: auto;
    max-height: initial;
    overflow: visible;
    padding-bottom: sizem(65);
  }
}

.thumb {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
}

.shin-lan-title {
  color: #000; // 顏色
  font-size: size(47); // size(47)
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.06;
  letter-spacing: 0.06em;
  text-align: left;
  width: 1.2em;
  span {
    display: block;
    width: 3em;
    height: size(1);
    background: currentColor;
    margin: 0.2em 0 0.1em 0;
    transform-origin: 0 0;
  }
}

.container {
  width: size(1240);
  margin: size(76) auto size(76);
  position: relative;

  @include md {
    width: sizem(310);
    margin: sizem(40) auto 0;
    padding-bottom: sizem(60);
  }
}

.title {
  @include img_l_pc(67, 130, 352);

  @include md {
    @include img_l_m(127, 90, 33);
    font-size: sizem(28);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.45;
    letter-spacing: sizem(1);
    text-align: center;
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

  @include md {
    @include img_c_m(310, 173);
    font-size: sizem(13);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.31;
    letter-spacing: normal;
    text-align: left;
    color: #000;
  }
}

.item-list {
  @include img_c_pc(1220, 50);

  @include md {
    position: relative;
    width: sizem(310);
    top: 0;
  }
}

.item {
  cursor: pointer;

  @include md {
    flex-wrap: wrap;
  }

  > div {
    width: size(550);

    @include md {
      width: 100%;
    }
  }

  .item-img {
    @include md {
      width: 100%;
    }
  }
}

.item-date {
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: size(1.44);
  text-align: left;
  color: #000;
  margin-bottom: 0.3rem;

  @include md {
    font-size: sizem(15);
  }
}

.item-title {
  font-size: size(28);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: size(1.4);
  text-align: left;
  color: #000;
  margin-bottom: 0.2rem;
  @include md {
    font-size: sizem(18);
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
  @include md {
    font-size: sizem(15);
  }
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
    font-size: sizem(15);
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

  &:hover {
    background-color: #000009;
    color: #fff;
  }

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
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import { company } from '@/info/shin-lan'
// import slider from '@/mixins/slider.js'

export default {
  name: 'section7',

  // mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      item_list: [company[0]],
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
