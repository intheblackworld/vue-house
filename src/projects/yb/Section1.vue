<template>
  <div class="section1">
    <div class="bg" v-if="!isMobile">
      <div class="vh1">
      <div class="absolute right">
        <img src="./s1/txt.png" alt="有我們在幸福的未來就在現在" class="txt"><br>
        <button class="button" v-scroll-to="{ element: `#contact`, offset: -100}">立即預約</button>
      </div>
     
      <img src="./s1/title.png" alt="超規格暖心價" class="absolute title">
      <img src="./s1/nexttofuture.png" alt="" class="absolute slogan">
    </div>
      <div class="vh2">
        <div>
      <img src="./s1/img1.jpg" alt="img1" class="img1">
      <img src="./s1/img2.jpg" alt="img2" class="img2">
    </div>
    </div>
    </div>
    <div class="bg" v-if="isMobile">
      <div class="vh1">
      <img src="./mo/1/txt.png" alt="有我們在幸福的未來就在現在" class="txt_mo">
    </div>
      <div class="vh2">
      <img src="./mo/1/1.jpg" alt="img1" class="img1_mo">
      <img src="./mo/1/2.jpg" alt="img2" class="img2_mo">
    </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '~@/assets/style/function.scss';
.bg {
  background-size: cover;
  position: relative;
  // background-color: #fddb3e;
  // background-image: url('./s1/kv_city_bg.jpg');
  background-position: bottom;
  background-repeat: no-repeat;
  overflow: hidden;
  //height: size(2260);
  // pointer-events: none;
}

.img1 {
  width: size(900);
  height:calc(100vh + 60px);
 min-height:size(800);
 max-height:size(1100);
  object-fit: cover;
  background: url("./s1/img1.jpg") fixed;
  
}

.img2 {
  width: size(765);
  height:calc(100vh + 60px);
 min-height:size(800);
 max-height:size(1100);
  margin-left:size(80);
  object-fit: cover;
}
.vh1{height:calc(100vh - 3vw);
      width: 1800px;max-width:81%;position: relative; overflow: hidden;margin: auto;}
.vh2{position: relative; overflow: hidden;text-align: right;}
.button {
  cursor: pointer;
  width:6.2em;
  border: 2px solid;
  border-color: #eb5500 #d70032 #d70032  #eb5500;
  border-radius: 1.2em;
  color: #e50;
  font-size:calc(100vh * 34 / 1000);
  font-weight: 500;
  line-height: 2;
  letter-spacing: 0.08em;
  font-family: "Noto Sans TC", serif;
  background:  #f6f6f6;
  transition: all 0.3s;
  margin:0 0 0 0;
  &:hover{
background: linear-gradient(to right, rgba(235,85,0,1) 0%,rgba(215,0,50,1) 100%);
  color: #fff;
  }
}
.right{
  top:calc(53.5%);
  right: 0;text-align: left;
}

.txt {
  height:calc(100vh * 178 / 1000);
}

.title {
  height:calc(100vh * 142 / 1000);
  top:calc(50% + 15vh);
 // top: size(709);
  left: size(0);
}

.slogan {
  height:calc(100vh * 394 / 1000);
  bottom:calc(50% - 16vh);
 // top: size(312);
  left: size(-9);
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    position: relative;
    margin: 0;
  }
  .vh1{height:auto;}
  .txt_mo{
  width: 100%;
}
.img1_mo{
  width: size_m(267);
}

.img2_mo{
  width: size_m(68.5);
  margin-left:size_m(18);
}

}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
// import Parallax from '@/components/Parallax.vue'

export default {
  name: 'section1',

  components: {
    // Parallax,
  },
  data() {
    return {
      isMobile,
    }
  },
  computed: {},

  watch: {},

  methods: {
  },
  created() {
  },
}
</script>
