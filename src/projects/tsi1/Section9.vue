<template>
  <div class="section9">
    <img src="./s9/09_bg.png" :alt="`${info.caseName}_img`" class="bg-img">
    <img src="./s9/09_textbox.png" :alt="`${info.caseName}_img`" class="text-box">
    <h3 class="title">
      首購不委屈 天空最精彩
    </h3>
    <div class="desc">
      <span>首購不委屈，讓您一次買最好！</span><br />
      「天空之邑」讓您把生活機能、交通動能、區域地標、捷運增值潛能，省錢買包，不如一次將幸福通包。
    </div>
    <div class="list flex-ac flex-jb">
      <div class="item flex-c wrap">
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
      <div class="item flex-c wrap">
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
      <div class="item flex-c wrap">
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

.text-box {
  @include img_c_pc(1164, 293);
}

.title {
  @include img_c_pc(562, 162);
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.35);
  font-size: size(50);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: size(5);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.desc {
  @include img_c_pc(868, 777);
  font-size: size(18);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.94;
  letter-spacing: size(0.9);
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
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
    min-height: sizem(665);
    max-height: sizem(812);
    height: calc(100vh - 63px);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
    margin: 0 0 50vw 0;
  }

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
  }
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
      // blockIndex: 0,
    }
  },

  methods: {},

  mounted() {
    // setTimeout(() => {
    //   this.blockIndex = 1
    // }, 6000)
  },

  created() {},

  computed: {},
}
</script>
