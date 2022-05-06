<template>
  <div class="section2" id="scene">
    <div class="txt">
      <h3 class="title">3分鐘進北市<br v-if="isMobile"> 5分鐘中和站</h3>
      <p class="desc">捷運黃金雙軸線 幸福成家第一站</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/variableDefault.scss";
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section2 {
  position: relative;
  width: size(1920);
  height: size(900);
  background-size: 100%;
  background-position: bottom;
  background-color: #eb5c20;
  background-image: url("~@/projects/lyn/s2/map.jpg");
  z-index: 1;
  .txt{
    color: #fff;
  }
  .title {
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
    background: unset;
    .title {
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
import GodModView from "@/components/GodModView.vue";
export default {
  name: "section2",
  props: ["scrollInstance"],
  components: {
    GodModView,
  },
  data() {
    return {
      isMobile,
    };
  },
  methods: {
    scrollTo(el) {
      this.scrollInstance.scrollTo(el);
    },
  },
  mounted() {},
  created() {},
};
</script>