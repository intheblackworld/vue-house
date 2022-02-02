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
            <img src="../shin-lan/all/arrow-left.png" alt="" class="arrow-left" v-if="isMobile" @click="decIndex(itemIndex)">
            <img src="../shin-lan/all/arrow-right.png" alt="" class="arrow-right" v-if="isMobile" @click="addIndex(itemIndex)">
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

  // 手機版
  @include md {
    // height: 100vh;
    // height: size(604);
    // min-height: calc(604 * 100vw / 375);
    // max-height: calc(812 * 100vw / 375);
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
    padding-bottom: sizem(70);
    border-bottom: 1px solid #000;
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
  font-size: size(19);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 3.8px;
  text-align: left;
  color: #000;
  margin-bottom: 0.3rem;
  @include md {
    // @include img_l_m(77, 0, 0);
    // width: sizem(106);
    // height: sizem(20);
    // top: auto;
    // bottom: sizem(25);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    text-align: left;
    color: #000;
  }
}

.item-title {
  width: 100%;
  font-size: size(47);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.06;
  letter-spacing: size(2.82);
  text-align: left;
  color: #000;
  margin-bottom: 1.2rem;
  font-family: 'Noto Serif TC', serif;

  @include md {
    font-size: sizem(28);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.39;
    letter-spacing: normal;
    text-align: left;
    color: #000;
    margin-bottom: 0.2rem;
  }
}

.item-subtitle {
  width: 100%;
  font-size: size(28);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: size(1.4);
  text-align: left;
  color: #000;
  margin-bottom: 0.8rem;

  @include md {
    font-size: sizem(18);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.39;
    letter-spacing: normal;
    text-align: left;
    color: #000;
    margin-bottom: 0.4rem;
  }
}

.item-desc {
  width: 100%;
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: size(1.44);
  text-align: left;
  color: #000;
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
    height: sizem(260);
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
  }
}

.pagination {
  width: auto;
  bottom: size(44);
  right: auto;
  left: 0;
  margin: 0 auto;
  justify-content: center;
}

.pagination-dot {
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width: 10px;
    height: 10px;
    position: relative;
    background-color: #000;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: #000;
      opacity: 1;
      position: absolute;
      top: 20%;
      // transform: translateY(-50%);
      left: 20%;
      transition: all 0.3s;
      transform-origin: center;
      transform: scale(0);
    }
    &.active {
      box-shadow: none;
      &::before {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        background: #b18863;
        opacity: 1;
        position: absolute;
        top: 0%;
        // transform: translateY(-50%);
        left: 0%;
        transform: scale(1);
      }
    }
  }
}

.arrow-left {
  @include img_l_m(30, 275, 0);
  background-color: #000;
}

.arrow-right {
  @include img_r_m(30, 275, 0);
  background-color: #000;
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
