<template>
  <div class="section9">
    <img src="./shin-lan/index/9/img.png" alt="" class="dec-img">
    <div class="container">
      <div class="case-info">
        <div class="case-card">
          <div v-if="isPC" class="shin-lan-title-v title" data-aos="fade">
            會員<span data-aos="flip-right"></span>專區
          </div>
          <div v-if="isMobile" class="shin-lan-title-h title" data-aos="fade">
            會員<span data-aos="flip-right"></span>專區
          </div>
          <div class="case-desc" v-html="current_case.desc"></div>
          <div class="case-more flex-c" @click="$router.push('/member')">了解更多</div>
        </div>
        <img :src="current_case.img" alt="" class="case-thumb">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section9 {
  width: 100%;
  height: size(630 + 270 + 127);
  min-height: size(630 + 270 + 127);
  max-height: auto;
  background-size: cover;
  background-attachment: fixed;
  // background-color: #fff;

  @include md {
    width: 100vw;
    height: sizem(650);
    min-height: auto;
    max-height: initial;
    overflow: visible;
    margin-top: sizem(30);
  }
}

/* .shin-lan-title {
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
} */

.case-info {
  width: size(1330);
  height: size(630);
  position: absolute;
  right: 0;
  top: size(270);
  @include md {
    width: sizem(355);
    left: sizem(15);
    top: sizem(80);
  }
}

.case-card {
  width: size(1330 - 723);
  height: size(630);
  padding: 3rem 0.2rem 2rem 4.8rem;
  background-color: #fff;
  @include md {
    width: 100%;
    height: auto;
    padding: sizem(20);
  }
}

.case-desc {
  font-size: size(18);
  height: size(120);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: size(1.44);
  text-align: left;
  color: #000;
  margin-top: size(100);
  @include md {
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    text-align: left;
    color: #000;
    height: auto;
  }
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
  transition: all 0.3s;
  position: relative;
  z-index: 3;

  @include md {
    width: sizem(160);
    height: sizem(40);
    margin: sizem(15) auto;
  }

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
    transition: all 0.3s;
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

  @include md {
    @include img_l_m(311, 280, -15);
    height: sizem(271);
  }
}

.title {
  width: size(67);
  // @include img_l_pc(220, 514, 342);

  @include md {
    @include img_l_m(127, -50, 15);
    font-size: sizem(28);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.45;
    letter-spacing: sizem(1);
    text-align: left;
    color: #3e3a39;
  }
}

.dec-img {
  @include img_l_pc(671, 219, 0);
  z-index: 2;

  @include md {
    @include img_r_m(141, 0, 0);
    transform: rotateY(180deg);
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
// import { get_category } from '@/http/api'

export default {
  name: 'section9',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      // blockIndex: 0,
      current_case: {
        img: require('@/assets/img/shin-lan/index/9/img2.jpg'),
        desc: `
        我們用心傾聽您的需求<br />我們相信用行動發揮真誠、體貼、專業的服務軟實力，<br />才能讓客戶真實感受到欣聯建設用心建造的好房子。`,
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
