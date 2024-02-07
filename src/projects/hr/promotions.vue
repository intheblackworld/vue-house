<template>
    <div class="promotions">
    <img src="./s1/bgt.png" class="bg" v-if="!isMobile" />
    <img src="./s1/bgt-m.png" class="bg" v-else />
    <div class="bgbox"></div>
      <div class="txt">
      <div class="title" data-aos="fade-up" data-aos-delay="200" >2024公寓式酒店優質體驗<br>
「請你吃早餐」住宿方案！</div>
      <div class="desc" data-aos="fade-up" data-aos-delay="300">
－活動期間：2024/2/15 起至 2024/5/15止 。<br>
－專案優惠價：NT$30,000起/月。<br v-if="isMobile" />　(不同房型、人數價格有差異)<br>
－活動贈送：免費享用20日份早餐(一人使用)<br>
　*限量30間 售完為止* <br><br>

〘備註〙<br>
<ul>
  <li>此專案僅適用於官網、電話、官方Line訂房。</li>
  <li>恕不與其他優惠專案合併使用。</li>
  <li>每日限兌換一客早餐，週一至週五可至2F餐廳使用(六、日除外)。</li>
  <li>如雙人住宿，可另購1人早餐券，優惠價$3,000元/20日份。</li>
  <li>本飯店有最終保留及變更相關專案內容的權利；<br v-if="isMobile" />如有異動，依現場公告為準，恕不另行通知。</li>
  <li>入住時間為15:00後，退房時間為12:00前。</li>
  <li>如有詳細相關問題，歡迎來電洽詢。</li>
</ul>
</div>
      </div>
    </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.promotions {  
  width:100%;
  height:auto;
  position: relative;
  padding: 8vw 0;
  display: flex;
  justify-content:center;
  align-items:center;
&::after{content: "";clear: both;display: block;}
}

.bg{
  position: absolute;
  bottom:0;left:0;width: 100%;transform: translateY(80%);
}
.bgbox{
  position: absolute;
  background: radial-gradient(ellipse at center, rgba(0,0,0,0) 50%,rgba(0,0,0,0.12) 100%);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.txt{
  position: relative;
  width: auto;
  margin:0em auto 0em auto;
  padding: 2.8em 2.8em;
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(18);
  font-weight:500;
  line-height: 1.4;
  z-index: 2;
  background: #FFF3;
  border: 1px solid #ccb699;
  
 // color: #fff;

.title{
  font-size:2.2em;
  margin:0 auto 0;
  color: #754C24;
  display: flex;
    align-items:baseline;
  font-weight: 800;
}
  .subtitle{font-size: 1.25em;
    padding:.75em 0 0 0;
  }

.desc {
  padding:1em 0 0 0;
  line-height: 1.6;
  ul{list-style: square;
    font-size: 0.9em;
  li{
    margin-left: 1.4em;
    list-style:square;
    margin-bottom: 0.3em;
  }
  }
}
  }
/* Swipe */
.swipe {
  position: relative;
  margin: auto;
  width: size(1500);
  height: size(844);
  // left: size(210);
  object-fit: cover;
  z-index: 3;
}
.slide-name {
    right:1.5em;
    bottom:1em;
    color: #fff;
    font-size: size(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    text-align: left;
   text-shadow:0 0.1em 0.3em #000;
}

.swipe-wrap {
  width: 100%;
  height: 100%;
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

// 過場動畫
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

// pagination
.pagination {
  width: auto;
  bottom: -2.2em;
  right: 0em;
  justify-content: center;
  font-size: size(20);

}
.pagination-dot {
  padding: 0.25em;
  margin: 0 0.2em;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width:1em;
    height:1em;
    border-radius: 50%;
    border: 0.2em solid  $pagination;
    position: relative;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
    border-radius: 50%;
    border:  0.105em solid $pagination-active;
      opacity: 1;
      position: absolute;
      top: 20%;
      left: 20%;
      transition: all 0.3s;
      transform-origin: center;
      transform: scale(0);
    }
    &.active {
      box-shadow: none;
      &::before {
        width: 100%;
        height: 100%;
        top: 0%;
        left: 0%;
        transform: scale(1.6);
      }
    }
  }
}
.swipe-btns {
  width: 100%;
  height: 100%;
  padding: 0 0.75em;
  z-index: 3;
  font-size: size(20);

  .prev-btn,
  .next-btn {
    width: 1em;
    cursor: pointer;
  }
}

@media only screen and (max-width: 1440px) {
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .promotions {
  padding: 11vw 0 1vw;
  background:none;
  }

  .bg{
    transform: translateY(55%);
}
  .txt{
    position: relative;
    width: sizem(330);
    margin:-2em auto 4em;
    padding: 2em 1.5em;
    left:0;
    top:0;
    font-size: sizem(14);
    .title{
      font-size:1.7em;
      flex-wrap: wrap;
  &::after{width: 100%;flex: 0 0 100%;
  display: block;margin: .3em 0 0.3em 0;}
    }
    .subtitle{
      font-size:1.1em;
    }
  }
  /* Swipe */
  .swipe {
    position: relative;
    width: 100%;
    height: sizem(250);
    top:0;
    left:0;
  }
.swipe-item {
  .slide-name {
    font-size: sizem(12);
  }
}
  .swipe-btns {
  font-size: sizem(15);
  }
}

</style>
<script>
// @ is an alias to /src
import info from '@/info'
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'promotions',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img:require('./s2/1.jpg'),
          name: '智醫康寓外觀',
        },
        {
          img:require('./s2/2.jpg'),
          name: '大廳 實際以現場為主',
        },
        {
          img:require('./s2/3.jpg'),
          name: '櫃台 實際以現場為主',
        },
        {
          img:require('./s2/4.jpg'),
          name: '接待區 實際以現場為主',
        },
        {
          img:require('./s2/5.jpg'),
          name: '安全管制閘門 實際以現場為主',
        },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {
    viewIndex() {
      if (this.viewIndex === 7) {
        this.slideIndex = 0
        console.log(this.slideIndex, 'slideIndex')
      }
    },
  },
}
</script>
