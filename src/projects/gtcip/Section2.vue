<template>
  <div class="section2">
    <div class="txt">
      <p>
        隔壁的昌平國小新生開學第一天<br />
        牽著他的手走路到學校，2個新手一樣緊張<br />
        對面頭前國中資優班畢業那一天<br />
        看著他的背影長得比我高<br />
        心中酸酸甜甜的驕傲起來...
        <span>School</span>
      </p>
      <p>
        新莊副都心頭前國中正對面<br />
        昌平國小旁，自家公托中心<br />
        牽他到昌平上課，看他從頭前畢業<br />
        陪他到輔大註冊<br />
        努力學習，哈佛也不遠了…
        <span>University</span>
      </p>
      <p>
        雙校連璧 書冊成林<br />
        墨香隨步 雙捷隨行<br />
        雙園環繞 風光入座<br />
        美式人生 雙喜臨門<br />
        新莊副都心20%純住宅區內<br />
        僅有1%的極限量好事成雙
        <span>Learning</span>
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width:100%;
  height: size(890);
  position: relative;
  font-size: size(25);
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-weight: 400;
  color: #333;
  line-height: 2.35;
}




.txt{
  background: #EEE9;
  margin: auto auto auto size(110);
  width: size(1530);  
  padding: size(190) 0 0 size(150);
 p{margin: 0 0 8em;
  position: relative;
span{
  font-family: 'Ruthie';
font-weight: 400;line-height: 1.5;
  font-size: size(110);
  color: #C79E63;
  position: absolute;
  right:size(660);
  bottom:-.56em;
}
&::after{content:"";background: #C79E63;height: 1px;width:100%;display: block;}
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
  .section2 {
    width: 100%;
    height: auto;
  }
.o{
  top:sizem(260);
  right:sizem(10);
  width:sizem(90);
  height:sizem(90);

}
.c{
    .c1{width:sizem(230);top:sizem(320);left: sizem(110);}
    .c2{width:sizem(170);top:sizem(390);left: sizem(200);}
}
  .txt{
  position: relative;
  width: sizem(310);
margin:1.5em auto 10em;
  left:0;
  top:0;
  font-size: sizem(15);
  text-align: center;
  }
.title{
    font-size: sizem(25);
}

.sub{
  font-size: sizem(18);
}
  .desc {
   //line-height: 1.73;
  margin:0em auto;
  text-align: left;
  letter-spacing:0em;
  margin-top: sizem(20);

  }
  /* Swipe */
  .swipe {
    position: relative;
    width: 100%;
    height: sizem(255);
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
  name: 'section2',

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
          img: require('./s2/1.jpg'),
          name: '台北橋',
        },
        {
          img: require('./s2/2.jpg'),
          name: '中興橋',
        },
        {
          img: require('./s2/3.jpg'),
          name: '重新橋',
        },
        {
          img: require('./s2/4.jpg'),
          name: '環河快速道',
        },
        {
          img: require('./s2/5.jpg'),
          name: '捷運三重國小站',
        },
        {
          img: require('./s2/6.jpg'),
          name: '重陽路上高速公路',
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
      if (this.viewIndex === 3) {
        this.slideIndex = 0
        console.log(this.slideIndex, 'slideIndex')
      }
    },
  },
}
</script>
