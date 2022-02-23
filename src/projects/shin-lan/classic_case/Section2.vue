<template>
  <div class="section2">
    <div class="container">
      <div class="type-tab flex-ac flex-jb" v-if="isMobile">
        <div :class="`tab ${$route.query.type == 2 ? '' : 'active'}`" @click="$router.push('/classic_case?type=1')">
          欣聯建設Shin-Lan
        </div>
        <div :class="`tab ${$route.query.type == 2 ? 'active' : ''}`" @click="$router.push('/classic_case?type=2')">
          合聯營造Heran
        </div>
      </div>
      <div class="head flex-ac flex-jb">
        <div class="current-tab">{{type_text}}</div>
        <div class="pages flex-ac">
          <div class="page-btn flex-c" v-for="(page, index) in pages" :key="`page-btn-${index}`" @click="changePage(index)">{{page}}</div>
        </div>
      </div>
      <transition-group class="flex-ac flex-js wrap" name="slide-fade" mode="out-in">
        <div class="card" v-for="(case_item, index) in current_case_list" :key="case_item.title + index" @click="$router.push(case_item.link)">
          <div class="card-img">
            <img :src="case_item.img" alt="">
            <div class="add-btn">
              +
            </div>
          </div>
          <div class="card-content" v-html="case_item.title"></div>
        </div>
      </transition-group>
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
  margin: size(53) auto;

  @include md {
    width: sizem(310);
  }
}

.desc {
  @include img_c_pc(1234, 170);
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: size(1.44);
  text-align: center;
  color: #000;
}

.img {
  @include img_c_pc(1234, 321);
}

.type-tab {
  margin: sizem(50) auto;
  .tab {
    font-size: sizem(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: sizem(1.4);
    text-align: left;
    color: #808080;
    border-bottom: 1px solid #808080;
    cursor: pointer;

    &.active {
      color: #000;
      border-bottom: 1px solid #000;
    }
  }
}

.current-tab {
  font-size: size(20);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(4);
  text-align: left;
  color: #fff;
  background-color: #000;
  padding: 0.3rem 0.5rem;
  margin-bottom: size(45);

  @include md {
    width: 100%;
    font-size: sizem(20);
    margin-bottom: sizem(60);
  }
}

.card {
  width: size(370);
  margin-bottom: size(78);
  cursor: pointer;
  margin-right: size(63);
  &:nth-child(3n) {
    margin-right: 0;
  }

  @include md {
    width: 100%;
    margin-right: 0;
    margin-bottom: sizem(60);
  }
  &:hover{
    .card-img {
      border-radius:50%;
    }
  }
}

.card-img {
  position: relative;
  width: 100%;
  height: size(370);
overflow: hidden;
transition:all 0.5s;


  @include md {
    height: sizem(310);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    top: 0;
    left: 0;
  }
  .add-btn {
    position: absolute;
    font-size: size(42);
    font-weight: 300;
    color: #000;
    background-color: rgba(255, 255, 255, 0.8);
    width: size(45);
    height: size(45);
    right: size(10);
    bottom: size(10);
    @include md {
      font-size: sizem(42);
      width: sizem(45);
      height: sizem(45);
      right: sizem(10);
      bottom: sizem(10);
    }
  }
}

.card-content {
  font-size: size(28);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: size(1.4);
  text-align: left;
  color: #000;
  border-bottom: solid 1px #4d4d4d;

  @include md {
    font-size: sizem(23);
  }
}

.pages {
  font-size: size(25);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  text-align: left;
  color: #333;

  @include md  {
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
import { case_list_1, case_list_2 } from '@/info/shin-lan'
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
      count: 6,
      // 欣聯建設Shin-Lan 經典案例
      case_list_1: [
        ...case_list_1
      ],
      // 合聯營造Heran 經典案例
      case_list_2: [
        ...case_list_2
      ],
      // blockIndex: 0,
    }
  },
  computed: {
    type() {
      return this.$route.query.type ? this.$route.query.type : 1
    },
    total() {
      return this.case_list.length
    },
    type_text() {
      return this.$route.query.type == 2 ? '合聯營造Heran' : '欣聯建設Shin-Lan'
    },
    totalPage() {
      return (
        Math.floor(this.total / this.count) +
          (this.total % this.count > 0 ? 1 : 0) || 1
      )
    },
    case_list() {
      return this[`case_list_${this.type || 1}`]
    },
    current_case_list() {
      return this.case_list.slice(
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
        this.count = 6
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

  watch: {
    $route: function () {
      this.init()
    },
  },

  created() {},
}
</script>
