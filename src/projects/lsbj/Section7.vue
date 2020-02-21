<template>
  <div class="section6">
    <div class="bg relative">
      <div>
        <img src="./s7/7.jpg" alt="" class="img" data-aos="fade" data-aos-delay="200" v-if="!isMobile">
        <img src="./s7/7m.jpg" alt="" class="img" data-aos="fade" data-aos-delay="200" v-if="isMobile">
         <h2 class="text"><span>上市櫃多角化經營</span><span>打造夢想生活藍圖</span></h2>
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
  }
}

.text{
  display: flex;
   position: absolute;top: calc(100vw * 120 / 1920);left:50%;
  font-weight: bold;color: #000;width:3.7em;transform: translateX(-50%);line-height: 1.1;
  font-size:calc(100vw * 57 / 1920);
  span{font-family: "Noto Serif TC";background-color:rgba(255,255,255,0.8) ;margin:0 0.2em;padding:1.7em 0.1em;
  &:nth-child(2){position: relative;top: calc(100vw * 100 / 1920);}
  }

}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
  }
.text{
  display: flex; flex-direction:column;
   position: absolute;top: calc(100vw * 630 / 750);left:50%;
  font-weight: bold;color: #000;width:11em;transform: translateX(-55%);
  font-size:calc(100vw * 40 / 750);
  span{display: block;font-family: "Noto Serif TC";background-color:rgba(255,255,255,0.8) ;margin:0;padding:0.3em 0em;flex:1 1 auto;
  &:nth-child(2){position: relative;left: calc(100vw * 70 / 750);top:calc(100vw * 10 / 750);}
  }

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
