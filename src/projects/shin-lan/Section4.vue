<template>
  <div class="section4">
    <img src="./shin-lan/index/4/img.png" alt="" class="dec-img">
    <div class="container">
      <div class="case-info">
        <div class="case-card">
          <div class="shin-lan-title-h title" data-aos="fade">
            經典<span data-aos="flip-right"></span>案例
          </div>
          <div class="flex-ac flex-jb">
            <div class="case-title" v-html="current_case.title"></div>
          </div>
          <div class="case-desc" v-html="current_case.desc"></div>
          <div class="case-btns flex-ac flex-js">
            <a :href="current_case.link1" target="_blank" v-html="current_case.link1_text"></a>
            <a :href="current_case.link2" target="_blank" v-html="current_case.link2_text"></a>
          </div>
          <div class="case-more flex-c" @click="current_case.more_link">了解更多</div>
        </div>
        <img :src="current_case.img" alt="" class="case-thumb">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section4 {
  width: 100%;
  height: size(630 + 270 + 127);
  min-height: size(630 + 270 + 127);
  max-height: auto;
  background-size: cover;
  background-attachment: fixed;
  // background-color: #fff;

  @include md {
    width: 100vw;
    height: 176vw;
    min-height: auto;
    max-height: initial;
    overflow: visible;
  }
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
  span {
    display: inline-block;
    width: size(1);
    height: 1em;
    background: currentColor;
    margin: -0.1em 0.15em 0.1em 0.1em;
    transform-origin: 50% 50%;
    vertical-align: middle;
  }
}

.case-info {
  width: size(1330);
  height: size(630);
  position: absolute;
  right: 0;
  top: size(270);
}

.case-card {
  width: size(1330 - 723);
  height: size(630);
  padding: 6rem 0.2rem 2rem 4.8rem;
  background-color: #fff;
}

.case-title {
  font-size: size(28);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: size(1.4);
  text-align: left;
  color: #000;
  margin: size(20) 0;
  border-bottom: solid 1px #707070;
}

.case-desc {
  font-size: size(18);
  height: size(200);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: size(1.44);
  text-align: left;
  color: #000;
}

.case-more {
  width: size(160);
  height: size(41);
  font-size: size(15);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(3);
  text-align: left;
  color: #000;
  cursor: pointer;
  border: solid 1px #707070;
  transition: all .3s;
  position: relative;
  z-index: 3;

  &:hover {
    background-color: #000009;
    color: #fff;
  }
}

.case-btns {
  width: 100%;
  margin-bottom: size(20);
  > a {
    width: 40%;
    margin-right: 1.5rem;
    font-size: size(16);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: size(1.44);
    text-align: center;
    color: #000;
    cursor: pointer;
    border-bottom: solid 1.1px #4d4d4d;
    text-decoration: none;
    transition: all .3s;
    display: block;
    position: relative;
    z-index: 3;
    white-space: nowrap;
    &:hover {
      color: #b18863;
    }
  }
}

.case-img {
  width: 32%;
}

.case-thumb {
  @include img_r_pc(723, 0, 0);
  height: 100%;
  object-fit: cover;
}

.title {
  width: size(220);
  // @include img_l_pc(220, 514, 342);

  @include md {
    @include img_c_m(167, 62);
    font-size: sizem(20);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.45;
    letter-spacing: sizem(1);
    text-align: center;
    color: #3e3a39;
  }
}

.dec-img {
  @include img_l_pc(820, 250, 0);
  z-index: 2;
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
// import { get_category } from '@/http/api'

export default {
  name: 'section4',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      // blockIndex: 0,
      current_case: {
        img: require('@/assets/img/shin-lan/work/3東園綻/0.jpg'),
        title: '東園綻',
        link1_text: '欣聯建設Shin-Lan', // 連結1
        link2_text: '合聯營造Heran', // 連結2
        link1: '', // 連結1
        link2: '', // 連結2
        desc: `
        「東園綻」於民國107年由欣聯建設開發投資興建，限量2房，近華江高中及西園國小，生活機能方便。`,
        more_link: '', // 了解更多
      },
    }
  },

  methods: {},

  mounted() {
    // get_category().then((res) => {
    //   console.log(res, 'get_category')
    //   if (res.data.categories) {
    //     this.current_case = {
    //       ...this.current_case,
    //       ...res.data.categories.slice(0, 1),
    //     }
    //   }
    // })
  },

  created() {},

  computed: {},
}
</script>
