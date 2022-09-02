<template>
  <div class="section3" id="scene">
    <Map :tagList="tagList" :bgSrc="bgSrc" :bgSrcpng="bgSrcpng" :hand="hand"></Map>
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
 // background: #0006;
  padding:0;
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
      bgSrc: require('./s3/bg.jpg'),
    //  bgSrcpng: require('./s3/map.png'),
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