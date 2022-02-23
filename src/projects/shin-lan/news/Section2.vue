<template>
  <div class="section2">
    <div class="container">
      <transition-group class="item-list" name="slide-fade" mode="out-in" tag="div">
        <div class="item flex flex-as flex-js" v-for="(item, index) in current_news_list" :key="item.title + index" @click="$router.push(item.link)">
          <img :src="item.imgs[0]" alt="" class="item-img" v-if="index == 0 && isMobile">
          <div>
            <div class="item-date" v-html="item.date"></div>
            <div class="item-btn">閱讀更多</div>
          </div>
          <div>
            <div class="item-title" v-html="item.title"></div>
            <div class="item-desc" v-html="item.desc_short"></div>
          </div>
        </div>
      </transition-group>
      <div class="pages flex-ac flex-jr">
        <div class="page-btn flex-c" v-for="(page, index) in pages" :key="`page-btn-${index}`" @click="changePage(index)">{{page}}</div>
      </div>
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
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing:0.05em;
  text-align: justify;
  color: #000;

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
  left: size(200);
  @include md {
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
/*
.item {
  margin-bottom: 1.5rem;
  cursor: pointer;
  @include md {
    flex-wrap: wrap;
    position: relative;
    padding-bottom: sizem(70);
    border-bottom: 1px solid #000;
  }
}
*/
.item-img {
  width: 100%;
  margin-bottom: sizem(15);
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
  @include md {
    width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  }
}

.btn-more {
  @include img_l_pc(158, 251, 0);
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
}

.pages {
  font-size: size(25);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  text-align: right;
  color: #333;

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
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import { news } from '@/info/shin-lan'
import _ from 'lodash'

export default {
  name: 'section2',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      pageIndex: 0,
      count: 5,
      news_list: [...news],
      // blockIndex: 0,
    }
  },
  computed: {
    total() {
      return this.news_list.length
    },
    totalPage() {
      return (
        Math.floor(this.total / this.count) +
          (this.total % this.count > 0 ? 1 : 0) || 1
      )
    },
    current_news_list() {
      return this.news_list.slice(
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
        this.count = 5
      } else {
        this.count = 999
      }
    },
    changePage(index) {
      this.pageIndex = index
    },
  },

  mounted() {
    this.init()
  },

  watch: {},

  created() {},
}
</script>
