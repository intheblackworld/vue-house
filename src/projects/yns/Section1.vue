<template>
  <div class="section1">
    <div class="bg fullscreen">
      <div v-if="!isMobile">
        <img src="./s1/0.png" alt class="img" />
        <div class="img bear">
        <img src="./s1/1.png" alt="bear" class="img bear0" />
        <img src="./s1/11.png" alt="bear" class="img bear1" />
        <img src="./s1/12.png" alt="bear" class="img bear2" /></div>
        <img src="./s1/2.png" alt class="img bottom" />
        <img src="./s1/2-1.png" alt class="img bottom grace" />
        <img src="./s1/3.png" class="img" data-aos="fade-down" data-aos-delay="600" alt="北大樂馥" />
        <!--img src="./s1/2-1.png" alt :class="`img dog1 ${dog1 ? 'show' : ''}`" />
        <img src="./s1/2-2.png" alt class="img" />
        <img src="./s1/4.png" alt class="img grace" data-aos="fade" data-aos-delay="900" />
        <img src="./s1/2-2.png" alt :class="`img dog2 ${dog2 ? 'show' : ''}`" / -->
        <div class="text" data-aos="fade-down" data-aos-delay="900">
          弘華機構-和彩建設
          <br />在地深耕用心建築，值得您細心鑑賞
        </div>
      </div>
      <div v-else>
        <img src="./s1/0.png" alt class="img" data-aos="fade-down" data-aos-delay="0" />
        <div class="img bear">
        <img src="./s1/m1.png" alt="bear" class="img bear0" />
        <img src="./s1/m11.png" alt="bear" class="img bear1" />
        <img src="./s1/m12.png" alt="bear" class="img bear2" /></div>
        <img src="./s1/m2.png" alt class="img bottom" />
        <img src="./s1/m2-1.png" alt class="img bottom grace" />
        <img src="./s1/m3.png" class="img" data-aos="fade-down" data-aos-delay="600" alt="北大樂馥" />
        <!-- img src="./s1/2-1m.png" alt :class="`img dog1 ${dog1 ? 'show' : ''}`" />
        <img src="./s1/2-2m.png" alt :class="`img dog2 ${dog2 ? 'show' : ''}`" />
        <img src="./s1/m3.png" alt class="img" data-aos="fade-down" data-aos-delay="600" />
        <img src="./s1/m4.png" alt class="img" data-aos="fade-down" data-aos-delay="900" / -->
        <div class="text" data-aos="fade-down" data-aos-delay="900">
          弘華機構-和彩建設
          <br />在地深耕用心建築，值得您細心鑑賞
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background-color: #f39800;
  //background-image: url('./s1/bg.png');
  position: relative;
  overflow: hidden;
}

.img {
  width: 1920px;
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  margin-left: -960px;
  object-fit: cover;
}

.bear{
  animation: bear 5s linear infinite  alternate;
  transform:rotate(10deg);
  .bear1{
  top: 0;
  animation: bear 1.25s ease-out infinite  alternate;
  transform:rotate(30deg);
  transform-origin: 19% 45%;}
  .bear2{
  top: 0;
  animation: bear 1.25s ease-in infinite alternate-reverse;
  transform:rotate(30deg);
  transform-origin: 22% 48%;}
}

.bottom{
  top: auto;
  bottom:0;
}
@keyframes bear {
  to {
  transform:rotate(0);
  }
}

.grace {
  margin-left: -960px;
  animation: grace 3s linear infinite alternate;
  transform-origin: bottom;
  transform:translateX(2%);
}

@keyframes grace {
  to {
  transform:translateX(-2%);
  }
}

.text {
  text-align: left;
  position: absolute;
  top: 86%;
  font-size: 2.8vh;
  line-height: 1.4;
  left: 66.9%;
  width: 100%;
  color: #fff;
  font-weight: bold;
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .bg {
  }

  .fullscreen {
   // height: auto !important;
    height:calc(100vh - 0px - 63px) !important;
  }

  .img {
    width: 100vw;
    left: 0;
    /*position: absolute;
    top: 0;
    height: 100vh;*/
    margin-left: 0px;
    object-fit: initial;

    &:nth-child(1) {
      position: relative;
    }
  }
.bear{
  transform-origin: 50% 100%;
  .bear1{
  transform-origin: 28% 56%;}
  .bear2{
  transform-origin: 31% 59%;}
}
.grace{width: 120vw;left: -10vw;}

  .text {
    top: 92%;
    font-size: 12px;
    left: 3.9%;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import { setInterval } from 'timers'

export default {
  name: 'section1',

  data() {
    return {
      isMobile,
      dog1: true,
      dog2: false,
    }
  },

  methods: {},

  created() {
    setInterval(() => {
      this.dog1 = !this.dog1
      this.dog2 = !this.dog2
    }, 3000)
  },
}
</script>
