<template>
  <div class="section3">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s1/1.jpg" alt="高雄漢神商圈雄女人文首排_聯上鉑金_60-140坪|五福 成功路口" class="img">
      </div>
      <div v-if="isMobile">
        <img src="./s1/1m.jpg" alt="高雄漢神商圈雄女人文首排_聯上鉑金_60-140坪|五福 成功路口" class="img">
      </div>
        <div class="img light4">
          <div class="light_b"></div>
          <img src="./s1/light4.jpg" alt="聯上鉑金_light4">
        </div>
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
  &.light4{mix-blend-mode:screen;width: 100%;height: 100%;}
}
.light_b{
  width:300%;height: 100%;position: absolute;left:-200%;animation: light_b 5s  infinite;
  background: -moz-linear-gradient(-45deg,  rgba(0,0,0,1) 0%, rgba(0,0,0,1) 34%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 66%, rgba(0,0,0,1) 100%);
background: -webkit-linear-gradient(-45deg,  rgba(0,0,0,1) 0%,rgba(0,0,0,1) 34%,rgba(0,0,0,0) 50%,rgba(0,0,0,1) 66%,rgba(0,0,0,1) 100%);
background: linear-gradient(135deg,  rgba(0,0,0,1) 0%,rgba(0,0,0,1) 34%,rgba(0,0,0,0) 50%,rgba(0,0,0,1) 66%,rgba(0,0,0,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#000000',GradientType=1 );
}
@keyframes op {
    to {
        opacity: 1;
    }
}
@keyframes light_b {
    to {
        left:0;
    }
}
@keyframes arrow {
    to {
        transform: translateX(2%)
    }
}


.text{background: url('./s2/title.png') no-repeat;position: absolute;text-align:left;background-size: 65em auto;
font-size:0.92vw;line-height: 1.6;top: 5.5vw; left: 53.8vw;padding: 2.7em 2em 0 3em;right: 0;

h3{color: #fff;font-size: 1.7em;padding: 0 0 0.8em 3em;}
p{color: rgba(255,255,255, 0.7);}
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
    height:calc(100vh - 63px);
  }
  }
  .text{background-image: url('./s2/mo/titleall.png');background-size: 100% auto;font-size:3.8vw;top:50%; left: 0; padding: 0 1em 0 1.7em;}

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
