<template>
  <div>
    <div class="section2">
      <img src="./newspc/2.jpg" alt="bg" class="bg-img" v-if="isPC">
      <img src="./m/2/bg.jpg" alt="bg" class="bg-img" v-if="isMobile">
      <h3 class="title absolute" data-aos="fade" data-aos-delay="400">
        被人們遺忘的八里
      </h3>
      <div class="desc absolute" data-aos="fade" data-aos-delay="600">
        大台北外圍房地產發展區有中壢、桃園、青埔、南崁、林口、三峽、鶯歌、礁溪這些環大台北的城鎮中交通距離大台北最近的地區還是八里，從關渡大橋約10多分鐘左右的車程就可以進入台北市區但上述地區房價都比八里貴，今日八里發展迅速遊客眾多，人們已經改變對八里的觀感，此時需快速入主美麗新世界。
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width:100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  background-size: cover;
  // background-position: 0 0;
  // background-attachment: fixed;
  overflow: hidden;
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;
}

.title {
  width: auto;
  top:calc(50% + (227 - 540) * 100vw / 1920);
  left: size(100);
  font-size: size(54.9);
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing:0.06em;
  text-align: left;
  color: #FFF;
  white-space: nowrap;

}

.subtitle {
  width: size(389);
  top:size(385);
  left: size(526);
  font-size: size(67);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.85;
  letter-spacing:-0.04em;
  text-align: left;
  color: #FFF;
  white-space: nowrap;
  font-family: "TrajanPro";
}

.desc {
  width: 26em;
  top:calc(50% + (332 - 540) * 100vw / 1920);
  left: size(100);
  font-size: size(19);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: 0.06em;
  text-align: justify;
  color: #FFF;
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
    width: 100vw;
    min-height:sizem(604);
    max-height:sizem(750);
    height:calc(100vh - 63px);
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

.bg-img {top: auto;bottom: 0;}
  .subtitle {
    width: sizem(128);
    top: sizem(80);
    left: sizem(32.5);
    font-size: sizem(22);
    letter-spacing:-0.04em;
    white-space: nowrap;
  }

  .title {
    width: sizem(291);
    top: sizem(140);
    
  top:calc(50% + (80 - 604 * .5) * 100vw / 375);
    left: sizem(32.5);
    font-size: sizem(25);
    line-height: 1.44;
    letter-spacing:0.06em;
  }

  .desc {
    width: sizem(291);
  top:calc(50% + (125 - 604 * .50) * 100vw / 375);
    left: sizem(32.5);
    font-size: sizem(15);
    letter-spacing: 0.03em;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
// import Map from '@/components/Map.vue'

export default {
  name: 'section2',
  props: ['viewIndex'],
  // components: {
  //   Map,
  // },

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
