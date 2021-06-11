<template>
  <div class="section9">
    <img src="./s9/09_bg.png" :alt="`${info.caseName}_img`" class="bg-img" v-if="isPC">
    <img src="./s9/09_bg_m.jpg" :alt="`${info.caseName}_img`" class="bg-img" v-if="isMobile">
    <svg version="1.1" :class="`text-box ${position === 0 ? 'left': ''} ${position === 2 ? 'right': ''}`" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1203 431" style="enable-background:new 0 0 1203 431;" xml:space="preserve"  v-if="viewIndex === 8 || viewIndex === 10">

      <g id="圖層_2">
      </g>
      <g id="圖層_1">
      </g>
      <g id="圖層_3">
      </g>
      <g id="圖層_4">
        <g id="內白圈" class="an00">
          <g>
            <radialGradient id="SVGID_1_" cx="989.3204" cy="235.0923" r="188.7405" gradientUnits="userSpaceOnUse">
              <stop offset="0" style="stop-color:#1A171B" />
              <stop offset="1" style="stop-color:#000000;stop-opacity:0" />
            </radialGradient>
            <circle class="st13" cx="989.3" cy="235.1" r="188.7" />
            <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="1085" y1="317.6628" x2="862.5671" y2="95.23">
              <stop offset="0" style="stop-color:#E1E5E7" />
              <stop offset="1" style="stop-color:#FFFFFF" />
            </linearGradient>
            <circle class="st14" cx="973.8" cy="206.4" r="157.3" />
            <circle class="st15" cx="973.8" cy="206.4" r="153.4" />
          </g>
          <g>

            <radialGradient id="SVGID_3_" cx="611.2531" cy="-1519.3394" r="188.7405" gradientTransform="matrix(1 0 0 -1 0 -1283.25)" gradientUnits="userSpaceOnUse">
              <stop offset="0" style="stop-color:#1A171B" />
              <stop offset="1" style="stop-color:#000000;stop-opacity:0" />
            </radialGradient>
            <circle class="st16" cx="611.3" cy="236.1" r="188.7" />

            <linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="706.932" y1="-1379.4763" x2="484.4991" y2="-1601.9092" gradientTransform="matrix(1 0 0 -1 0 -1283.25)">
              <stop offset="0" style="stop-color:#E1E5E7" />
              <stop offset="1" style="stop-color:#FFFFFF" />
            </linearGradient>
            <circle class="st17" cx="595.7" cy="207.4" r="157.3" />
            <circle class="st15" cx="595.7" cy="207.4" r="153.4" />
          </g>
          <g>
            <radialGradient id="SVGID_5_" cx="233.3614" cy="235.0923" r="188.7408" gradientUnits="userSpaceOnUse">
              <stop offset="0" style="stop-color:#1A171B" />
              <stop offset="1" style="stop-color:#000000;stop-opacity:0" />
            </radialGradient>
            <circle class="st18" cx="233.4" cy="235.1" r="188.7" />
            <linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" x1="329.0403" y1="317.6628" x2="106.6075" y2="95.23">
              <stop offset="0" style="stop-color:#E1E5E7" />
              <stop offset="1" style="stop-color:#FFFFFF" />
            </linearGradient>
            <circle class="st19" cx="217.8" cy="206.4" r="157.3" />
            <circle class="st15" cx="217.8" cy="206.4" r="153.4" />
          </g>
        </g>
        <g id="彩色線" class="ancolorline">
          <path class="st20" d="M785,207c0-104,84.3-188.3,188.3-188.3S1161.5,103,1161.5,207" />
          <g>
            <g>
              <path class="st21" d="M31,207c0-0.2,0-0.3,0-0.5" />
              <path class="st22" d="M31.6,191.5c7.9-96.7,88.9-172.8,187.6-172.8c101.3,0,183.9,80,188.1,180.3" />
              <path class="st21" d="M407.5,206.5c0,0.2,0,0.3,0,0.5" />
            </g>
          </g>
          <path class="st23" d="M784.5,206.8c0,104-84.3,188.3-188.3,188.3S408,310.7,408,206.8" />
        </g>
        <g id="黑色線">
          <path class="st24 andarkline-1" d="M31,207.8c0,104,84.3,188.3,188.3,188.3s188.3-84.3,188.3-188.3" />
          <path class="st24 andarkline-3" d="M785,207.8c0,104,84.3,188.3,188.3,188.3s188.3-84.3,188.3-188.3" />
          <path class="st24 andarkline-2" d="M408,208c0-104,84.3-188.3,188.3-188.3S784.5,104,784.5,208" />
        </g>
        <g id="彩色小圈圈">
          <path class="st25 ancolor-1" d="M43.2,207.3c0,7.8-6.3,14.2-14.2,14.2c-7.8,0-14.2-6.3-14.2-14.2c0-7.8,6.3-14.2,14.2-14.2
				C36.9,193.1,43.2,199.5,43.2,207.3z" />
          <path class="st26 ancolor-2" d="M421.1,206.6c0-7.8-6.3-14.2-14.2-14.2s-14.2,6.3-14.2,14.2c0,7.8,6.3,14.2,14.2,14.2
				S421.1,214.4,421.1,206.6z" />
          <circle class="st27 ancolor-3" cx="784.5" cy="207.4" r="14.2" />
          <circle class="st28 ancolor-4" cx="1161.5" cy="207.4" r="14.2" />
        </g>
      </g>
    </svg>
    <img src="./s9/09_textbox.png" :alt="`${info.caseName}_img`" class="text-box1">

    <h3 class="title" data-aos="fade-top" data-aos-delay="400">
      首購不委屈<br v-if="isMobile"> 天空最精彩
    </h3>
    <div class="desc" data-aos="fade-top" data-aos-delay="1200">
      <span>首購不委屈，讓您一次買最好！</span><br />
      「天空之邑」讓您把生活機能、交通動能、區域地標、捷運增值潛能，省錢買包，不如一次將幸福通包。
    </div>
    <div :class="`list flex-ac flex-jb ${position === 0 ? 'left': ''} ${position === 2 ? 'right': ''}`">
      <div class="item flex-c wrap" data-aos="fade-top" data-aos-delay="600">
        <div class="item-title">
          生活機能
        </div>
        <div class="item-hr"></div>
        <div class="item-desc">
          五股市區、新市鎮、<br />
          <span class="orange">新莊副都心、洲子洋</span><br />
          生活機能全包
        </div>
      </div>
      <div class="item flex-c wrap" data-aos="fade-top" data-aos-delay="600">
        <div class="item-title">
          交通動能
        </div>
        <div class="item-hr"></div>
        <div class="item-desc">
          雙北各大城暢行無阻，<br />
          <span class="pink">「3高3捷4特快」</span><br />
          交通機能全包
        </div>
      </div>
      <div class="item flex-c wrap" data-aos="fade-top" data-aos-delay="600">
        <div class="item-title">
          增值潛能
        </div>
        <div class="item-hr"></div>
        <div class="item-desc">
          稀有雙塔地標、<br />
          <span class="red">
            五泰輕軌雙議題
          </span><br />
          讓您將增值潛能全包
        </div>
      </div>
    </div>
    <div class="next-btn flex-c" @click="add" v-if="isMobile">
      <img src="./all/next-btn.png" alt="">
    </div>
    <div class="prev-btn flex-c" @click="dec" v-if="isMobile">
      <img src="./all/prev-btn.png" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section9 {
  width: 100%;
  height: 100vh;
  min-height: size(1008);
  max-height: size(1008);
  //overflow: hidden;
  position: relative;
  background-size: cover;
  // margin: 0 0 size(400) 0;
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  // opacity: 0.5;

  &:nth-child(1) {
    position: relative;
  }
}

.text-box1 {
  display: none;
  @include img_c_pc(1164, 293);
}
.text-box {
  @include img_c_pc(1215, 273);

  .st0 {
    fill: none;
    stroke: #f15a24;
    stroke-width: 3;
    stroke-miterlimit: 10;
  }
  .st1 {
    fill: #f15a24;
  }
  .st2 {
    fill: #ffffff;
  }
  .st3 {
    fill: none;
    stroke: #f15a24;
    stroke-width: 4.2543;
    stroke-miterlimit: 10;
  }
  .st4 {
    fill: none;
    stroke: #169037;
    stroke-width: 2.6206;
    stroke-miterlimit: 10;
  }
  .st5 {
    fill: #b4337c;
  }
  .st6 {
    fill: none;
    stroke: #ffffff;
    stroke-width: 0.7147;
    stroke-miterlimit: 10;
  }
  .st7 {
    fill: #ffffff;
    stroke: #97a13b;
    stroke-width: 1.3278;
    stroke-miterlimit: 10;
  }
  .st8 {
    fill: #22a83b;
  }
  .st9 {
    fill: #7f9d26;
  }
  .st10 {
    fill: none;
    stroke: #ffffff;
    stroke-width: 3.7219;
  }
  .st11 {
    fill: none;
    stroke: #589424;
    stroke-width: 1.5239;
  }
  .st12 {
    fill: #221714;
  }
  .st13 {
    fill: url(#SVGID_1_);
  }
  .st14 {
    fill: url(#SVGID_2_);
  }
  .st15 {
    fill: #f6f6f6;
  }
  .st16 {
    fill: url(#SVGID_3_);
  }
  .st17 {
    fill: url(#SVGID_4_);
  }
  .st18 {
    fill: url(#SVGID_5_);
  }
  .st19 {
    fill: url(#SVGID_6_);
  }
  .st20 {
    fill: none;
    stroke: #ffff00;
    stroke-width: 7;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
    stroke-dasharray: 1, 15;
  }
  .st21 {
    fill: none;
    stroke: #ff8700;
    stroke-width: 7;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .st22 {
    fill: none;
    stroke: #ff8700;
    stroke-width: 7;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 0.999, 14.9855;
  }
  .st23 {
    fill: none;
    stroke: #f1ffff;
    stroke-width: 7;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
    stroke-dasharray: 1, 15;
  }
  .st24 {
    fill: none;
    stroke: #58585a;
    stroke-width: 5.0334;
    stroke-miterlimit: 10;
  }
  .st25 {
    fill: #ff8700;
  }
  .st26 {
    fill: #f1ffff;
  }
  .st27 {
    fill: #ffff00;
  }
  .st28 {
    fill: #58585a;
  }

  .an00 {
    opacity: 0;
    stroke-dashoffset: 420;
    animation: an52 0.5s 0.5s linear forwards;
  }

  .ancolorline {
    opacity: 0;
    stroke-dashoffset: 420;
    animation: an52 2s 1s linear forwards;
  }

  .andarkline-1 {
    stroke-dasharray: 618;
    stroke-dashoffset: 618;
    animation: an51 1s 1s linear forwards;
  }
  .andarkline-2 {
    stroke-dasharray: 618;
    stroke-dashoffset: 618;
    animation: an51 1s 2s linear forwards;
  }
  .andarkline-3 {
    stroke-dasharray: 618;
    stroke-dashoffset: 618;
    animation: an51 1s 3s linear forwards;
  }

  .ancolor-1 {
    opacity: 0;
    stroke-dashoffset: 420;
    animation: an52 0.2s 1s linear forwards;
  }
  .ancolor-2 {
    opacity: 0;
    stroke-dashoffset: 420;
    animation: an52 0.2s 2s linear forwards;
  }
  .ancolor-3 {
    opacity: 0;
    stroke-dashoffset: 420;
    animation: an52 0.2s 3s linear forwards;
  }
  .ancolor-4 {
    opacity: 0;
    stroke-dashoffset: 420;
    animation: an52 0.2s 4s linear forwards;
  }

  @keyframes an51 {
    to {
      stroke-dashoffset: 0;
    }
  }
  @keyframes an52 {
    to {
      opacity: 1;
    }
  }
}

.title {
  @include img_c_pc(562, 162);
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.35);
  font-size: size(50);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: 0.01em;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.desc {
  @include img_c_pc(868, 720);
  font-size: size(18);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.94;
  letter-spacing: size(0.9);
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
  text-shadow: 0 0 1em #000c;
  span {
    font-size: size(25);
    letter-spacing: size(1.25);
  }
}

.list {
  @include img_c_pc(1075, 283);
  .item {
    width: size(320);
    height: size(400);

    align-content: center;
  }

  .item-title {
    width: 100%;
    font-size: size(23.5);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.94;
    letter-spacing: size(1.17);
    text-align: center;
    color: #666666;
  }

  .item-hr {
    width: size(227);
    border-bottom: solid 1.3px #4d4d4d;
    margin: size(8) 0;
  }

  .item-desc {
    width: 100%;
    font-size: size(23.5);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.62;
    letter-spacing: size(1.17);
    text-align: center;
    color: #666666;

    .orange {
      color: #ff8700;
    }

    .pink {
      color: #f14d7e;
    }

    .red {
      color: #ff4047;
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section9 {
    width: 100vw;
    min-height: sizem(726);
    max-height: sizem(726);
    height: sizem(726);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
    margin: 0 0 0vw 0;
  }

  .title {
    @include img_c_m(375, 45);
    color: #444444;
    font-size: sizem(30);
    text-align: center;
    line-height: 1.6;
    text-shadow: none;
  }

  .desc {
    @include img_c_m(325, 572);
    font-size: sizem(14);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: sizem(1.4);
    text-align: center;
    color: #3e3e3e;
    white-space: normal;
    text-shadow: none;
    span {
      font-size: sizem(20);
      font-weight: 900;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.2;
      letter-spacing: sizem(2);
      text-align: center;
      color: #313131;
      font-family: 'Noto Serif TC';
    }
  }

  .text-box {
    @include img_l_m(325, 195, -260);
    width: auto;
    height: sizem(326);
    transition: all 0.5s;

    &.right {
      left: sizem(-550);
    }

    &.left {
      left: sizem(30);
    }
  }

  .list {
    @include img_l_m(870, 195, -240);
    transition: all .5s;
    &.right {
      left: sizem(-540);
    }

    &.left {
      left: sizem(50);
    }
    .item {
      width: sizem(310);
      height: sizem(310);

      align-content: center;
    }

    .item-title {
      width: 100%;
      font-size: sizem(18);
      font-weight: 900;
      font-stretch: normal;
      font-style: normal;
      line-height: 2;
      letter-spacing: sizem(0.9);
      text-align: center;
      color: #666666;
    }

    .item-hr {
      width: sizem(180);
      border-bottom: solid 1.3px #4d4d4d;
      margin: sizem(8) 0;
    }

    .item-desc {
      width: 100%;
      font-size: sizem(14);
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.56;
      letter-spacing: sizem(0.9);
      text-align: center;
      color: #666666;

      .orange {
        color: #ff8700;
      }

      .pink {
        color: #f14d7e;
      }

      .red {
        color: #ff4047;
      }
    }
  }

  .prev-btn {
    @include div_l_m(47, 360, 171, 0);
    background-image: linear-gradient(
      to bottom,
      rgba(26, 23, 27, 0),
      rgba(26, 23, 27, 0.93),
      rgba(26, 23, 27, 0)
    );
    img {
      width: sizem(14.7);
    }
  }

  .next-btn {
    @include div_r_m(47, 360, 171, 0);
    background-image: linear-gradient(
      to bottom,
      rgba(26, 23, 27, 0),
      rgba(26, 23, 27, 0.93),
      rgba(26, 23, 27, 0)
    );
    img {
      width: sizem(14.7);
    }
  }

  /* 
  .top {
    position: absolute;
    width: sizem(310);
    left: 0;
    right: 0;
    margin: 0 auto;
    top: calc(50% + 100vw * (70 - 302) / 375);
  }
  .c1 {
    left: 0;
    top: calc(50% - 77vw);
    width: sizem(97);
    transform: translateX(-10%);
  }
  .c2 {
    left: -6.7vw;
    top: calc(50% + 48vw);
    width: sizem(262);
    transform: translateX(-8%);
  }
  .c3 {
    right: 55vw;
    top: calc(50% + 72vw);
    width: sizem(132);
    transform: translateX(30%);
    animation-direction: alternate-reverse;
  }
  .c4 {
    right: -1.5vw;
    top: calc(50% + 60vw);
    width: sizem(369);
    transform: translateX(5%);
    animation-direction: alternate-reverse;
  }

  .t {
    position: absolute;
    width: sizem(310);
    left: 0;
    right: 0;
    margin: 0 auto;
    top: calc(50% + 100vw * (650 - 302) / 375);
  }
  .o {
    width: sizem(40);
    right: 19.7vw;
    top: calc(50% + 100vw * (676 - 302) / 375);
  }

  .top-logo {
    @include img_c_m(315, 135);
  }

  .top-title1 {
    @include img_c_m(315, 274);
  }

  .top-title2 {
    @include img_c_m(312, 409);
  }*/
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section9',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      position: 1, // 0 左, 1 中, 2 右
      // blockIndex: 0,
    }
  },

  props: ['viewIndex'],

  methods: {
    add() {
      this.position = this.position !== 2 ? this.position + 1 : this.position
    },

    dec() {
      this.position = this.position !== 0 ? this.position - 1 : this.position
    },
  },

  mounted() {
    // setTimeout(() => {
    //   this.blockIndex = 1
    // }, 6000)
  },

  created() {},

  computed: {},
}
</script>
