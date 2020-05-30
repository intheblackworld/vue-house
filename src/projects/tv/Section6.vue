<template>
  <div class="section6">
    <div class="bg relative">
      <div>
        <img src="./s6/6.jpg" alt="" class="img" v-if="!isMobile">
        <img src="./s6/6.jpg" alt="" class="img" v-if="!isMobile">
        <img src="./s6/6m.jpg" alt="" class="img" v-if="isMobile">
        <h2>VVVVV 聯上建築</h2>
        <div class="text">
        <h3>《 5Value 》核心新價值</h3>
          <ul>
            <li>V1.地段價值</li> 
            <li>V2.美學價值</li> 
            <li>V3.收藏價值</li> 
            <li>V4.實用價值</li> 
            <li>V5.安全價值</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
  z-index: 2;overflow: hidden;height: 100vh;
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
    position: absolute;
    height: 100vh;
  left: 0;
  top: 0;
  object-fit: contain;
  z-index: 2;
  }
  &:nth-child(2) {
    position: relative;
    height: 100vh;
  width: 100vw;
  object-fit:inherit;filter: blur(10px);
  z-index: 1;
  }
}
h2{
  position: absolute;top: calc(100vw * 52 / 1920);left:50%;background-color:rgba(255,255,255,0.8);
  font-weight: bold;color: #000;width: 11em;margin-left:-5.5em;line-height: 1.7;
  font-size:calc(100vw * 49 / 1920);
  z-index: 3;
}
.text{
  position: absolute;
  top: calc(100vw * 260 / 1920);font-size:calc(100vmin * 34 / 1080);
  right:calc(100vw * 70 / 1920);color: #fff;width: 13em;line-height:2;padding:1.5em 0;
  background-color:rgba(12,42,74,0.6);
  z-index: 3;
  &::before{content:"";position:absolute;width: 100%;height: 100%;top:-0.4em;left:0.4em;border: 1px solid #fff;}
  li{font-weight:lighter;}
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    height:calc(100vh - 63px);
}


.img {
  &:nth-child(1) {
    position: absolute;
    height: 100vh;
  left: 0;
  top: 0;
  object-fit: cover;
  z-index: 2;
  }
}
h2{font-size:calc(100vw * 31 / 750);top: calc(50vh - 30vw);
}
.text{ top:50vh;font-size:calc(100vw * 34 / 750);
  left:50%;margin-left:-6.5em;padding:0.8em 0;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
export default {
  name: 'section6',

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
