<template>
  <div class="section5">
    <img src="./shin-lan/index/5/img.jpg" alt="" class="thumb" v-if="isPC">
    <img src="./shin-lan/mo/index/5/img.jpg" alt="" class="thumb" v-if="isMobile">
    <div v-if="isMobile" class="shin-lan-title-h title" data-aos="fade">
      最新<span data-aos="flip-right"></span>消息
    </div>
    <div class="container">
      <div v-if="isPC" class="shin-lan-title-v title" data-aos="fade">
        最新<span data-aos="flip-right"></span>消息
      </div>
      <div class="btn-more flex-c" @click="$router.push('/news')">
        了解更多
      </div>
      <div class="item-list">
        <div class="item flex flex-as flex-js" v-for="(item, index) in item_list" :key="item.title + index" @click="$router.push(item.link)">
          <div>
            <div class="item-date" v-html="item.date"></div>
            <div class="item-btn">閱讀更多</div>
          </div>
          <div>
            <div class="item-title" v-html="item.title"></div>
            <div class="item-desc" v-html="item.desc_short"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section5 {
  width: 100%;
  height:auto;
  background-size: cover;
  background-attachment: fixed;
  //background-color: #f7f8f8;
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing:0.05em;
  text-align: justify;
  color: #000;

  @include md {
    width: 100vw;
    height: auto;
    min-height: auto;
    max-height: initial;
    overflow: visible;
    padding-bottom: sizem(65);
    font-size: sizem(15);
    letter-spacing: normal;
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
  // opacity: 0.5;
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
  margin: size(60) auto size(76);
  position: relative;
  @include md {
    width: sizem(310);
    margin: sizem(85) auto sizem(0);
    padding-bottom: sizem(40);
  }
}

.title {
  @include img_l_pc(67, 15, 0);

  @include md {
    @include img_l_m(310, 248, 32.5);
    font-size: sizem(28);
    font-weight: 600;
    line-height: 1.45;
    letter-spacing: sizem(1);
    border-bottom: 1px solid #000;
    padding-bottom: .4em;
  }
}

.item-list {
  width: size(1030);
  position: relative;
  top: 0;
  left: size(200);
  @include md {
    position: relative;
    left: 0;
    width: 100%;
  }
}

.item {
  cursor: pointer;
  padding: 0.7em 0.8em;
  transition: background 0.3s;
  @include md {
  padding: 1em 0 4em 0;
    flex-wrap: wrap;
    position: relative;
    border-bottom: 1px solid #000;
  }
  &:hover{
    background: #0002;
  }
}

.item-date {
  margin-bottom: 0.3em;
  white-space: nowrap;
  @include md {
    @include img_l_m(77, 0, 0);
    width: sizem(106);
    height: sizem(20);
    top: auto;
    bottom: sizem(20);
  }
}
.item-btn {
  width: size(106);
  background-color: #000;
  font-size: size(15);
  font-weight: 500;
  line-height: 1.38;
  letter-spacing: 0.2em;
  text-align: center;
  color: #fff;
  margin-right: 1.5em;
  white-space: nowrap;
  @include md {
    @include img_r_m(106, 0, 0);
    top: auto;
    bottom: sizem(20);
    font-size: sizem(13);
  margin-right: 0;
  }
}

.item-title {
  font-size: size(28);
    line-height: 1.39;
  font-weight: 500;
  margin-bottom: .2em;
  @include md {
    font-size: sizem(18);
  }
}

.item-desc {
 // width: size(800);
  margin-bottom: 0.2em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  @include md {
    width: 100%;
  -webkit-line-clamp: 3;
  }
}

.btn-more {
  @include img_l_pc(158, 300, 0);
  height: size(40);
  border: solid 1px #707070;
  font-size: size(15);
  font-weight: 500;
  line-height: 1.2;
  letter-spacing:0.2em;
  text-align: center;
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
    bottom: sizem(-20);
    font-size: sizem(15);
    line-height: 1.73;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import { news } from '@/info/shin-lan'
// import slider from '@/mixins/slider.js'

export default {
  name: 'section5',

  // mixins: [slider],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      item_list: [...news.slice(0, 3)],
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
