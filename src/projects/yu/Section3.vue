<template>
  <div class="relative">
    <div v-if="!isMobile" class="c-content">
     <div class="flex"> 
      <div class="txt">
      <div class="title flex" data-aos="fade" data-aos-delay="800">
        板南線永春站5mins<br />輕擁台北5大精華商圈
      </div>
      <div class="desc flex" data-aos="fade" data-aos-delay="1200">
        本案近距板南線永春站450米<br />
        沿線貫穿台北市中心核心地段<br />
        台北車站商圈、忠孝復興SOGO商圈<br />
        忠孝敦化東區商圈、市政府信義101商圈<br />
        國⽗父紀念館大巨蛋松菸商圈<br />
        永春站位於規劃環狀線東環段Y37站<br />
        未來雙軸動能交會，雙捷樞紐置產增值
      </div>
      </div>
      <img
        src="./s3/1.jpg"
        alt=""
        class="img" data-aos="fade" data-aos-delay="1600"
      >
      </div>
      <div class="line-top absolute"></div>
      <div class="line-left absolute"></div>
      <div class="line-center absolute"></div>
      <div class="line-bottom absolute"></div>
    </div>
    <div
      v-else
       class="c-content">
    >
      <img
        src="./s3/1_m.jpg"
        alt=""
        class="img absolute" data-aos="fade" data-aos-delay="800"
      >
      <img
        src="./s3/2_m.jpg"
        alt=""
        class="img2 absolute" data-aos="fade" data-aos-delay="1200"
      >
      <div class="line-top absolute"></div>
      <div class="line-left absolute"></div>
      <div class="line-center absolute"></div>
      <div class="line-top2 absolute"></div>
      <div class="line-bottom absolute"></div>
      <div class="title absolute" data-aos="fade" data-aos-offset="-800" data-aos-delay="1600">
        板南線永春站5mins<br />輕擁台北5大精華商圈
      </div>
      <div class="desc absolute" data-aos="fade" data-aos-offset="-1000" data-aos-delay="1800">
        本案近距板南線永春站450米<br />
        沿線貫穿台北市中心核心地段<br />
        台北車站商圈、忠孝復興SOGO商圈<br />
        忠孝敦化東區商圈、市政府信義101商圈<br />
        國⽗父紀念館大巨蛋松菸商圈<br />
        永春站位於規劃環狀線東環段Y37站<br />
        未來雙軸動能交會，雙捷樞紐置產增值
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  height: size(765);
  top: size(116);
  overflow: hidden;
}
.c-content {
  //background-color: #fff;
  width: size(1690);
  height:auto;
  margin:0 0 0 size(115);
  position: relative;
}

.img {
  top: 0;
  right:size(115);
  width: size(845);
  z-index: 1;
}
.txt{flex: 1 1 auto; padding: 0 0 0 size(61);}

.title {
  width: size(400);
  font-size: size(41);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.64;
  letter-spacing: normal;
  text-align: left;
  color: #bb1a12;
  height:size(223);
  align-items: center;
  
}


.line-top {
  background-color: #bf1b12;
  z-index: 1;
  width: size(960);
  height: 1px;
  top: size(223);
  left: size(-115);
}

.line-bottom {
  background-color: #bf1b12;
  z-index: 1;
  width: 100vw;
  height: 1px;
  bottom: 0;
  left:calc(50% - 50vw);
}

.line-center {
  background-color: #bf1b12;
  z-index: 1;
  top: 0;
  left:size(845);
  width: 1px;
  height:100%;
}

.line-left {
  background-color: #bf1b12;
  z-index: 1;
  left:0;
  top: size(223);
  width: 1px;
  height:calc(100% - 11.6145833333vw);
}

.desc {
  width: size(530);
  top: size(280);
  left: size(216);
  font-size: size(30);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: left;
  color: #1a1311;
  height:size(535);
  align-items: center;
}
@media only screen and (max-width: 1440px) {
  .bg-img {
  }
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .relative {
    height: size-m(489);
  top: size-m(22);
  }
  .c-content{height:100%;

  }

  .title {
    width:size-m(200);
    font-size: size-m(14);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.64;
    letter-spacing: normal;
    text-align: left;
    color: #bb1a12;
    top: size-m(244);
    right: 0;
    left:size-m(155);
  }
  .img {
    top: 0;
    left: 0;
    width: size-m(352);
    z-index: 1;
  }

  .img2 {
    top: size-m(300);
    left:size-m(-22);
    width: size-m(158);
    z-index: 1;
  }

  .white-line {
    width: 100vw;
    height: size(20);
    background-color: #fff;
    top: size(108);
  }

  .line-top {
    background-color: #bf1b12;
    z-index: 1;
    width: 100vw;
    height: 1px;
    top: size-m(232);
  }

  .line-bottom {
    background-color: #bf1b12;
    z-index: 1;
    width: 100vw;
    height: 1px;
    bottom: 0;
  }

  .line-center {
    background-color: #bf1b12;
    z-index: 1;
    left: size-m(136);
    right: auto;
    top: size-m(232);
    width: 1px;
    height: size-m(257);
  }

  .line-right {
    width: 1px;
    height: size-m(318);
  }

  .line-left {
    background-color: #bf1b12;
    width: 1px;
    height: size-m(232);
    top: 0;
    z-index: 1;
  }

  .line-top2 {
    background-color: #bf1b12;
    z-index: 1;
    left: size-m(-22);
    top: size-m(299);
    width: 100vw;
    height: 1px;
  }

  .desc {
    width:18em;
    top: size-m(325);
    left:size-m(155);
    right: 0;
    font-size: size-m(12);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    text-align: justify;
    color: #1a1311;
    transform: scale(0.8);
    transform-origin: 0 50%;
    span {
      color: #bf1b12;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section3',

  components: {},
  data() {
    return {
      isMobile,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
