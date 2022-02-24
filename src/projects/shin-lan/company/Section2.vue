<template>
  <div class="section2">
    <div class="container">
      <div class="pages flex-ac flex-jr">
        <div class="page-btn flex-c" v-for="(page, index) in pages" :key="`page-btn-${index}`" @click="changePage(index)">{{page}}</div>
      </div>
      <transition-group class="item-list" name="slide-fade" mode="out-in" tag="div">
        <div class="item flex flex-as flex-jb" v-for="(item, itemIndex) in current_company_list" :key="item.title + itemIndex">
          <div class="item-content">
            <div class="item-date" v-html="item.date"></div>
            <div class="item-title" v-html="item.title"></div>
            <div class="item-subtitle" v-html="item.subtitle"></div>
            <div class="item-desc" v-html="item.desc"></div>
            <div class="pagination absolute flex-ac" v-if="isPC">
              <div :class="`pagination-dot`" v-for="(slide, index) in item.imgs" :key="slide + '-dot' + index + itemIndex" @click="goTo(itemIndex, index)"><span :class="`${item.slideIndex === index ? 'active' : ''}`"></span></div>
            </div>
          </div>
          <div class="swipe" data-aos="fade" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
            <div class="swipe-wrap relative" v-touch:swipe.left="() => decIndex(itemIndex)" v-touch:swipe.right="() => addIndex(itemIndex)">
              <transition-group name="swipe-fade" mode="out-in">
                <div v-for="(slide, i) in item.imgs" v-show="item.slideIndex === i" :key="slide + i + itemIndex" :class="`swipe-item absolute`">
                  <img :src="slide" alt="">
                </div>
              </transition-group>
            </div>
        <div class="arrow-left" @click="decIndex(itemIndex)" v-if="isMobile"></div>
        <div class="arrow-right" @click="addIndex(itemIndex)" v-if="isMobile"></div>
          </div>
        </div>
      </transition-group>
      <!-- <transition-group class="flex-ac flex-jb wrap" name="slide-fade" mode="out-in">
        <div class="card" v-for="(hot_item, index) in hot_list" :key="hot_item.title + index">
          <div class="card-img">
            <img :src="hot_item.img" alt="">
            <div class="add-btn">
              +
            </div>
          </div>
          <div class="card-content" v-html="hot_item.title"></div>
        </div>
      </transition-group> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
// begin
.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  // margin-top: 50px !important;
  opacity: 0;
}
// end
.slide-fade-enter {
  margin-top: 10px !important;
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-active {
  transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
}

.section2 {
  width: 100%;
  // height: size(715);
  position: relative;
  margin: 0;
  // background: url('s1/bg.jpg') center;
  background-size: cover;
  overflow: hidden;
  text-align: center;
  // background-color: rgba(17, 17, 3, 0.11);
  font-size: size(18);
  line-height: 1.67;
  letter-spacing: 0.08em;
  text-align: justify;

  // 手機版
  @include md {
    // height: 100vh;
    // height: size(604);
    // min-height: calc(604 * 100vw / 375);
    // max-height: calc(812 * 100vw / 375);
    font-size: sizem(15);
    letter-spacing: normal;
  }
}

.container {
  width: size(1240);
  min-height: size(680);
  margin: size(53) auto;

  @include md {
    width: sizem(310);
    margin: sizem(80) auto;
  }
}

.item-list {
  width: size(1240);
  // position: absolute;
  top: 0;
  @include md {
    width: 100%;
  }
}

.item {
  margin-bottom: size(122);
  @include md {
    flex-wrap: wrap;
    position: relative;
  margin-bottom: sizem(60);
    padding-bottom: sizem(80);
    border-bottom: 1px solid #666;
  }
}

.item-content {
  width: size(540);
  position: relative;

  @include md {
    width: 100%;
  }
}

.item-img {
  width: size(632);
}

.item-date {
  margin-bottom: 0.3em;
}

.item-title {
  width: 100%;
  font-size: size(47);
  font-weight: bold;
  line-height: 1.06;
  letter-spacing: size(2.82);
  margin-bottom: 1.2em;
  font-family: 'Noto Serif TC', serif;

  @include md {
    font-size: sizem(28);
    line-height: 1.39;
    letter-spacing: normal;
    margin-bottom: 0.2em;
  }
}

.item-subtitle {
  width: 100%;
  font-size: size(28);
  font-weight: 500;
  line-height: 1.4;
  letter-spacing:0.05em;
  margin-bottom: 0.4em;

  @include md {
    font-size: sizem(18);
    letter-spacing: normal;
  }
}

.item-desc {
  width: 100%;
  margin-bottom:2em;
}

.pages {
  font-size: size(25);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  text-align: right;
  color: #333;
  margin-bottom: size(50);

  @include md {
    display: none;
  }

  .page-btn {
    width: size(40);
    text-align: center;
    border-right: 1px solid #c59c63;
    cursor: pointer;

    &:nth-last-child(1) {
      border-right: none;
    }
  }
}

/* Swipe */
.swipe {
  position: relative;
  width: size(632);
  height: size(470);
  // bottom: size(40);
  right: 0;
  object-fit: cover;

  @include md {
    width: 100%;
    height: sizem(230);
  }
}

// begin
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

// begin
// .swipe-left-leave-to {
//   margin-left: -100vw;
//   z-index: 0;
// }
// // end
// .swipe-left-enter {
//   opacity: 0.5;
//   margin-left: 0;
//   z-index: 1;
// }

// .swipe-left-enter-active {
//   transition: all 0.5s ease;
// }

// .swipe-left-leave-active {
//   transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
// }

.swipe-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.swipe-item {
  width: 100%;
  height: 100%;
  z-index: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.pagination {
  width: auto;
  bottom: size(0);
  right: auto;
  left: -.5em;
  margin: 0 auto;
  justify-content: center;
  font-size: size(15);
}

.pagination-dot {
  margin: 0 0;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
  width: 2em;
  height: 2em;
    // border-radius: 20px;
    // box-shadow: 0 0 0 1px #000;
    position: relative;
  color: #333;
    transition: color 0.3s;
  background: none;
  border-radius: 0;
  &::before{
    content: "";
    width: 50%;
    height:50%;
    background: currentColor;
    display: block;position: relative;
    top: 25%;left: 25%;

  }
  &::after{
    content: "";
    width: 50%;
    height:50%;
    background: #b18863;
    display: block;position: absolute;
    top: 25%;left: 25%;
    border-radius: 50%;
    transform:scale(0);
    transition: transform 0.3s,border-radius 0.2s 0.2s;

    }
  &.active {
  &::after{
    border-radius: 0%;
    transform:scale(1);
    }
  }
  &:hover{
  color: #666;}
  }
}
.arrow-left, .arrow-right {
  @include img_l_m(60,245, 0);
  height: 25px;
 // background-color: rgba(0, 0, 0, .5);
  &::before{
    content: "";
    position: relative;
    left: 20%;
    border: 1px solid #666;
    border-width: 0 0 1px 1px;
    width: 50%;display: block;
    height: 40%;
    transform:skewX(-45deg);

  }
}

.arrow-left{
  left: 0
}
.arrow-right {
  left: auto;right: 0;transform: scaleX(-1);
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import { company } from '@/info/shin-lan'
import _ from 'lodash'
// import slider from '@/mixins/slider.js'

export default {
  name: 'section2',

  // mixins: [slider],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      pageIndex: 0,
      count: 2,
      company_list: [...company],
      // blockIndex: 0,
    }
  },
  computed: {
    total() {
      return this.company_list.length
    },
    totalPage() {
      return (
        Math.floor(this.total / this.count) +
          (this.total % this.count > 0 ? 1 : 0) || 1
      )
    },
    current_company_list() {
      return this.company_list.slice(
        this.pageIndex * this.count,
        this.count * (this.pageIndex + 1),
      )
    },
    pages() {
      return _.range(1, this.totalPage + 1)
    },
  },

  methods: {
    init() {
      this.pageIndex = 0
      if (this.isPC) {
        this.count = 2
      } else {
        this.count = 999
      }
    },
    changePage(index) {
      this.pageIndex = index
    },

    goTo(itemIndex, index) {
      this.current_company_list[itemIndex].slideIndex = index
    },

    addIndex(itemIndex) {
      this.current_company_list[itemIndex].slideIndex =
        this.current_company_list[itemIndex].slideIndex ===
        this.current_company_list[itemIndex].imgs.length - 1
          ? 0
          : this.current_company_list[itemIndex].slideIndex + 1
    },

    decIndex(itemIndex) {
      this.current_company_list[itemIndex].slideIndex =
        this.current_company_list[itemIndex].slideIndex === 0
          ? this.current_company_list[itemIndex].imgs.length - 1
          : this.current_company_list[itemIndex].slideIndex - 1
    },
  },

  mounted() {
    this.init()
  },

  watch: {},

  created() {},
}
</script>
