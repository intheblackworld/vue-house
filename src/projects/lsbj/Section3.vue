<template>
  <div class="section3">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s3/bg.jpg" alt="雄女第一排無遮蔽視野　坐享亞灣山海河帝景" class="img" data-aos="fade" data-aos-delay="400">
        <div class="text"><h3>雄女第一排無遮蔽視野　坐享亞灣山海河帝景</h3><p>緊鄰雄女第一排無遮蔽視野，遠眺高雄市心點點璀璨繁華，近賞愛河亞灣山海河相連的朗闊帝景，倚窗敘寫人生巔峰豪情。</p>
</div>
      </div>
      <div v-if="isMobile">
        <img src="./s3/mo/bg.jpg" alt="雄女第一排無遮蔽視野　坐享亞灣山海河帝景" class="img" data-aos="fade" data-aos-delay="400">
         <div class="text"><h3>雄女第一排無遮蔽視野<br>坐享亞灣山海河帝景</h3><p>緊鄰雄女第一排無遮蔽視野，遠眺高雄市心點點璀璨繁華，近賞愛河亞灣山海河相連的朗闊帝景，倚窗敘寫人生巔峰豪情。</p>
</div> </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
  z-index: 2;
  overflow: hidden;
  height: 100vh;
}

.img {
  width: 100vw;
  height: auto;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  display: block;
  &.fix {
    position: fixed;
  }
  &:nth-child(1) {
    position: relative;
    height: 100vh;
  }
}

.text{background: url('./s2/title.png') no-repeat;position: absolute;text-align:justify;background-size: 65em auto;
font-size:0.92vw;line-height: 1.6;top: 3vw; left: 53.8vw;padding: 2.7em 2em 0 3em;right: 0;

h3{color: #fff;font-size: 1.7em;padding: 0 0 0.8em 3em;}
p{color: rgba(255,255,255, 0.9);margin: 0 0 5em 0;}
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .text {
    width: calc(100vw * 950 / 1920);
    right: calc(100vw * 232 / 1920);
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    height:calc(100vh - 63px);
  }
  .img {
  &:nth-child(1) {
   // height:calc(100vh - 63px);
  }
  }
  .text{background-image: url('./s2/mo/titleall.png');background-size: 100% auto;font-size:3.8vw;top:50%; left: 0;
   padding: 0 1em 0 1.7em;
h3{padding: 0 0 0.8em 2.8em;}
p{width: 90%;}}

}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
export default {
  name: 'section3',

  data() {
    return {
      isMobile,
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
