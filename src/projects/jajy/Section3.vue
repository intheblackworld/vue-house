<template>
  <div class="section3" id="scene">
    <img src="./s3/bg-m.jpg" class="bg" v-if="isMobile" />
    <img src="./s3/bg.jpg" class="bg" v-else />
    <div class="txt">
      <h3 class="title">潛能豐藏湖子內<br v-if="isMobile" />  引領嘉義新未來</h3>
      <p class="desc">嘉義市最大、最強<br v-if="isMobile" /><span v-else>，</span>市區唯一重劃 —「湖子內重劃區」<span  v-if="isMobile">，</span><br v-else />
面積193公頃<br v-if="isMobile" /><span v-else>，</span>市府投入55億鉅資，傾力打造大嘉義最強心臟<br />
住宅、商業、工業、休閒、文教，新願景生活，一次到位<br />
睿智眼界先行，建設接力達標，及早入主潛力湖子內<br />
以地段定義價值、願景決定漲幅！</p>
    </div>
    <Map :tagList="tagList" :bgSrc="bgSrc" :hand="hand"></Map>
    <div class="mask" @click="showMask = false" v-show="showMask"></div>
    
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/variableDefault.scss";
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section3 {
  position: relative;
  width: 100%;
  height:auto;
  background-size: 100% auto;
.bg{
  position: absolute;
  width: calc(100% * 2000 / 1920);height:auto;
  top:size(-100);
  left:0;object-fit: cover;
  z-index: -1;
  filter: blur(.5vw);
}
  /*
  background-size: 100%;
  background-position: bottom;
  background-color: #eb5c20;
  background-image: url("~@/projects/lyn/s2/map.jpg");
  z-index: 1;
  */
  .txt{
  // @include img_c_pc(1000, 0);
    line-height: 1.45;z-index:3;
    font-weight: 300;
  //  text-shadow:0 0 .4em rgb(41, 114, 163,0.5),0 0 .1em rgb(41, 114, 163,1);
    text-align: center;
  font-stretch: normal;
  font-style: normal;
  font-size: size(27);
  font-weight: 700;
  line-height: 1.4;
  z-index: 2;
  font-family: 'Noto Serif TC', serif;
  overflow: hidden;
  }
.title{
  font-size:2.2em;
  margin:1.5em auto 0.3em;
  font-weight: 900;
  color: #00537A;
  &::before,
  &::after{
    content: "";
    display: inline-block;
    height: .9em;
    width: .3em;
    background: #006180;
    vertical-align: middle;
    margin:-0.2em 1.55em 0;
    }

}
.subtitle{
  font-size:1.3em;
  margin:.5em auto 0;
  letter-spacing:0.03em;
  font-weight: 900;
  color: #000;
}

.desc {
  margin:0.1em auto 1.9em;
  line-height: 1.6;
  list-style: circle;
}
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section3 {
    position: relative;
    width: size-m(375);
    height: auto;
   
  .bg{
  width: calc(100% * 400 / 375);
  top:size-m(-20);
  }
  .txt{
  //@include img_c_m(370, 50);
    font-size:sizem(12);
    width:sizem(310);
    margin: auto;
  .title {display: flex;
  margin:1.7em auto 0.3em;
  font-size:1.9em;
    justify-content:space-between;
    align-items:stretch;
    width: 10em;
  &::before,
  &::after{
    content: "";
    display:block;
    align-self:stretch;
    flex: 0 0 3px;
    background: #006180;
    height: auto;
  //  vertical-align: middle;
    margin:0;
    }
    }

    }
  }
}
// 避免內容電腦過渡平板時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1199.98px) {
}
// 避免過度到 1280 x 720 時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1280px) {
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from "@/utils";
import Map from '@/components/Map.vue'
import info from '@/info'
export default {
  name: "section3",
  components: {
    Map,
  },
  data() {
    return {
      isMobile,
      info,
      tagList: [],
      bgSrc: require('./s3/map.jpg'),
      hand: require('./s3/h.png'),
    };
  },
  methods: {
 /*   scrollTo(el) {
      this.scrollInstance.scrollTo(el);
    },*/
  },
  mounted() {},
  created() {},
};
</script>