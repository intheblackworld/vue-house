<template>
  <div class="section2" id="scene">
      <div class="txt">
      <div class="subtitle" data-aos="fade-up" data-aos-delay="200">Uptown Banqiao</div>
      <div class="title" data-aos="fade-up" data-aos-delay="200">新板特區之上<br v-if="isMobile" />最名貴的地段收藏</div>

      </div>
    <Map class="map" :tagList="tagList" :bgSrc="bgSrc" :bgSrcpng="bgSrcpng" :hand="hand"></Map>
    <div class="mask" @click="showMask = false" v-show="showMask"></div>
    
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/variableDefault.scss";
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section2 {
  position: relative;
  width: 100%;
  height:  size(1080);
  background: #1995D1;
  padding: 0;overflow: hidden;
}
.map{
  position: absolute;
  left: 0;bottom: 0;
}
.txt{
  position: relative;
  z-index: 2;
  margin: 2.5em auto auto;
  @include txt(size(18)); 
  text-align: center;
  .title{
    color: #FFF;
  }
  }
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section2 {
    position: relative;
    width: size-m(375);
    height: size-m(667);
  padding: 0 0;
   
  .bg{
  width: calc(100% * 400 / 375);
  top:size-m(-20);
  }
  }
  .txt{
    position: relative;
    width: sizem(310);
    float: none;
    font-size: sizem(15);
    padding-top: 0;
    margin:2em auto 6em;
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
  name: "section2",
  components: {
    Map,
  },
  data() {
    return {
      isMobile,
      info,
      tagList: [],
      bgSrc: require('./s2/map.jpg'),
      bgSrcpng: require('./s2/map.png'),
      hand: require('./s2/h.png'),
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