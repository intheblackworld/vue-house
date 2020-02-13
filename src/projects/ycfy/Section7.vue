<template>
  <div class="section7">
    <div class="bg relative">
      <div v-if="!isMobile">
        <!-- img src="./s7/bg.jpg" alt class="img" / -->
        <img src="./s7/bg2.png" alt class="img" data-aos="fade" data-aos-delay="200" />
        <img src="./s7/stitlea.png" alt="頤昌建築自主建築履歷 工程安全最放心" class="img" />
        <img src="./s7/titlea.png" alt="六項履歷" class="img" />
        <ul class="text">
          <li>結構外審報告</li>
          <li>混凝土生產履歷</li>
          <li>鋼筋綁紮紀錄</li>
          <li>SA級續接</li>
          <li>強化圍束紀錄</li>
          <li>防水工程</li>
        </ul>
      </div>
      <div v-if="isMobile">
        <img src="./s7/mo/bg.jpg" alt class="img" />
        <img src="./s7/mo/bg2.png" alt class="img" data-aos="fade" data-aos-delay="200" />
        <img src="./s7/mo/lineba.png" class="img" alt />
        <img src="./s7/mo/stitlea.png" alt="頤昌建築自主建築履歷 工程安全最放心" class="img" />
        <img src="./s7/mo/titlea.png" alt="六項履歷" class="img" />
        <ul class="text">
          <li>結構外審報告</li>
          <li>混凝土生產履歷</li>
          <li>鋼筋綁紮紀錄</li>
          <li>SA級續接</li>
          <li>強化圍束紀錄</li>
          <li>防水工程</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background:url(./s7/bg.jpg) fixed;
  background-size: cover;
  position: relative;
  z-index: 2;
  overflow: hidden;
  &:before{
   content:"建商保有修改權";
   display:block;
   position: absolute;bottom:0.5em;right:1.5em;z-index: 3;color:rgba(120, 80, 0, 0.5);
   }
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

.text {
  width: calc(100vw * 745 / 1920);
  font-size: calc(100vw * 27 / 1920);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 1.2px;
  text-align: left;
  color: #333;
  left: calc(100vw * 1200 / 1920);
  top: calc(100vw * 380 / 1920);
  position: absolute;
  display: flex;    width: 22.5em;
    flex-wrap: wrap;
    li{
      flex: 1 1 9em;
      margin: 0 0 0.5em;
      &:before{
   content:url("data:image/svg+xml,%3Csvg version='1.1' id='icon' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 20 20' xml:space='preserve'%3E%3Cpolyline style='fill:%23000;' points='20,10 10,20 0,10 10,0 20,10 '/%3E%3C/svg%3E");
   display: inline-block;
   height:1em;
   width:1em;
      margin: 0 0.3em 0 0;
}
    }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .text {
    width: calc(100vw * 850 / 1920);
    right: calc(100vw * 142 / 1920);
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-size:100% auto ;
    background-image: url('./s7/mo/bg.jpg');
  }

  .text {
    width: calc(100vw * 330 / 375);
    height: auto;
    font-size: calc(100vw * 12 / 375);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: 0.72px;
    text-align: left;
    top:calc(100vw * 185 / 375);
    left: calc(100vw * 19 / 375);
  }

  .img {
    &:nth-child(1) {
      position: relative;
      height: calc(100vw * 478 / 375);
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
export default {
  name: 'section7',

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
