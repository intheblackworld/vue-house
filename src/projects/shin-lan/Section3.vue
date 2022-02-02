<template>
  <div class="section3">
    <img src="./shin-lan/index/3/img.png" alt="" class="dec-img">
    <div class="container">
      <div class="shin-lan-title-v title gold" data-aos="fade">
        熱銷<span data-aos="flip-right"></span>個案
      </div>
      <div class="case-info">
        <div class="case-card">
          <div class="flex-ac flex-jb">
            <img :src="current_case.img1" alt="" class="case-img">
            <img :src="current_case.img1" alt="" class="case-img">
            <img :src="current_case.img1" alt="" class="case-img">
          </div>
          <div class="flex-ac flex-jb">
            <div class="case-title" v-html="current_case.title"></div>
            <div class="case-btns flex-ac flex-jb">
              <div v-show="current_case.case_link" @click="$router.push(current_case.case_link)">個案介紹</div>
              <div v-show="current_case.media_link" @click="$router.push(current_case.media_link)">個案影片</div>
            </div>
          </div>
          <div class="case-desc" v-html="current_case.desc"></div>
          <div class="case-more flex-c" @click="$router.push(current_case.more_link)">更多精彩個案</div>
        </div>
        <img :src="current_case.img" alt="" class="case-thumb">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section3 {
  width: 100%;
  height: size(630 + 144);
  min-height: size(630 + 144);
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
  width: 1.2em;
  span {
    display: block;
    width: 3em;
    height: size(1);
    background: currentColor;
    margin: 0.2em 0 0.1em 0;
    transform-origin: 0 0;
  }

  &.gold {
    color: #b18863;
  }
}

.case-info {
  width: size(1330);
  height: size(630);
  position: absolute;
  right: 0;
  top: size(144);
}

.case-card {
  width: size(1330 - 723);
  height: size(630);
  padding: 2rem 1.5rem 2rem 2.5rem;
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
}

.case-desc {
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: size(1.44);
  text-align: left;
  color: #000;
  margin-bottom: size(15);
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
  border: solid 1px #707070;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  z-index: 3;

  &:hover {
    background-color: #000009;
    color: #fff;
  }
}

.case-btns {
  width: size(180);

  > div {
    width: 48%;
    font-size: size(18);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: size(1.44);
    text-align: center;
    color: #000;
    cursor: pointer;
    border-bottom: solid 1.1px #4d4d4d;
    transition: all .3s;

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
  @include img_l_pc(60, 514, 342);

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

.btn-more {
  @include img_r_pc(158, 151, 0);
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

.dec-img {
  @include img_l_pc(520, 60, 0);
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
// import { get_category } from '@/http/api'

export default {
  name: 'section3',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      // blockIndex: 0,
      current_case: {
        img: require('@/assets/img/shin-lan/work/2欣聯詠心/0.jpg'),
        img1: require('@/assets/img/shin-lan/work/2欣聯詠心/1.jpg'),
        img2: require('@/assets/img/shin-lan/work/2欣聯詠心/2.jpg'),
        img3: require('@/assets/img/shin-lan/work/2欣聯詠心/3.jpg'),
        case_link: '', // 個案介紹連結
        media_link: '', // 個案影片連結
        desc: `
        新北市｜三重區<br />
        27-54坪  仁義核心 綠景帝王<br />
        企劃銷售｜大心廣告有限公司<br />
        坪數規劃｜23-33坪  6000坪綠景大棟距<br />三重都心最珍稀「欣聯詠心」<br />鄰近溪尾、碧華熱鬧商圈，隔壁走兩步就有全聯<br />
        貴賓專線｜02-2980-0888<br />
        接待會館｜新北市三重區元富二街&元信一街旁`,
        more_link: '', // 更多精采個案連結
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
