<template>
  <div class="section1">
    <img src="./s1/pc.jpg" alt="" class="t0">
  </div>
</template>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 976 443" class="greatminds">
<path d="M147.5,124.5h-36.4v-3.7h86v3.7h-22.6v59.3h-3.4c-14.4-14.2-32.8,6.7-49.9,8.8c-44.7,11.4-91.1-12.7-111.4-54C-22.4,76.9,31-1.2,99.2,0.4c22.7-3.1,48.2,20.4,60.7,4.7h4.2v52.3H161c-3-18.9-13.6-38.8-32.9-47.6C100.3-3,59.1,4.9,44.9,34c-16.3,33.4-32,158.1,53.7,157.4c32.5-1.6,48.8-20.2,48.8-46.9V124.5z M271.3,93.2v94.3h31.3v3.7h-90.8v-3.7h31.3V8.8h-31.3V5.1c10.7,0,91.1,0,100.8,0c60.9,0,76.4,77.9,0,85.2c19,2.2,47.1,9.3,53.8,30.6c7.2,21.4-3.6,88.1,37.8,62.5l2.5,2.9c-18.8,14.2-65.2,13.7-65.2-33.4c0-49.9-16.1-59.6-38.2-59.6H271.3z M271.3,89.5C305.3,90,333,93.7,332.5,49c1.3-40.1-29.9-43.8-61.2-40.2V89.5z M415.4,187.5h31.3V8.8h-31.3V5.1h161.4v45.2h-3.1C557-3.8,519.4,10.7,475,8.8v80.7c36.2,0.9,50.4,1.2,59.5-38.4h3.1v81.3h-3.1c-8.6-40.2-22.1-40.3-59.5-39.2v94.3c17.7-1.4,64.5,4.3,79.1-6.1c17.4-9.5,27.8-29.5,30.3-47.4h3.1v57.2H415.4V187.5z M605.3,187.5h24.8L706.3,0.4h6.8l76.7,187.1h25.1v3.7H728v-3.7h31.3l-29.6-72.6h-65.4l-29.6,72.6H666v3.7h-60.7V187.5z M697,35.2l-31,76H728L697,35.2z M844.5,187.5h31.3V8.8c-37-2.1-56.8,4.8-68.6,44.2h-3.1V5.1h171.5v47.8h-3.1C960.8,13.5,941,6.7,904,8.8v178.7h31.3v3.7h-90.8V187.5z M37.1,435.7h31.3v3.7H1.6v-3.7h31.3V257H1.6v-3.7h63.5l52.5,141.4L170,253.3h62.3v3.7h-31.3v178.7h31.3v3.7h-90.8v-3.7h31.3V257l-68,182.6L37.1,258.9V435.7z M249,435.7h31.3V257H249v-3.7h90.8v3.7h-31.3v178.7h31.3v3.7H249V435.7z M355.1,435.7h31.3V257h-31.3v-3.7h60.4l95.9,143.2V257h-31.3v-3.7h66.9v3.7h-31.3v186H510L391.2,267.7h-0.6v168h31.3v3.7h-66.9V435.7z M561.3,435.7h31.3V257h-31.3v-3.7c39.2,0,63.4,0,100.8,0c132.5,0,134.1,186,0,186c-40.3,0-60.4,0-100.8,0V435.7z M660.8,435.7c91.8,0,92.2-178.7,0-178.7h-40v178.7H660.8z M803.9,383.2h3.1c8,42.3,32.9,57.2,68.6,56.4c57.2-1.3,69.8-66.4,12.1-81c-19.3-4.9-54.3-13.6-67-26.4c-25.3-25.6-8.6-68.4,25.1-79.4c51-16.7,68.1,20.8,77.7,0.5h3.9v47.3h-3.4c-3.3-18.7-13.9-36.6-32-44.3c-24.2-10.3-68.1-1.3-67.8,31.7c0.3,40.3,74.5,36.6,104.2,57.7c35.9,25.5,14.7,79.3-23,92.4c-16.8,5.8-38.6,4.7-56.7,3.1c-10.9-0.9-34.9-16.1-40.6-2h-4.2V383.2z"/>
</svg>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1060);
  position: relative;
  z-index: 2;
}
.greatminds{
  position: absolute;
  top: 0;left: 0;
  width: 50%;
  fill: #FFF;
}
.bg{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height:100%;
  object-fit: cover;
  &::before,
  &::after{
    content:"";
    display: block;
    width: 100%;height: 50%;background-size: cover;}
  &::before{background-image: url("./s1/bg_01.png");background-position: 50% 100%;}
  &::after{background-image: url("./s1/bg_02.jpg");background-position: 50% 0%;}
  .bg-h{
    position: absolute;
    top:calc(50% + (602 - 540) * 100vw / 1920);
    left: calc(50% - 258 * 50vw / 1920);
    width:size(257);
    z-index: 3;
    box-shadow: 1vw -1vw 1vw -.7vw #002840CC;
  }
}
.t0{
  position: absolute;
  width: 100%;height:auto;
  top:0;
  left: 0;object-fit: cover;
  opacity: 0.5;
  }
.c{
  position: absolute;
  top: 50%;
  left: 0%;
  width: 100%;
  img{position: absolute;
  left: 0%;
  }
  .c1,.c2{width:100%;
  transform: translateX(0%);
  animation: an 25s 0s linear infinite;
  top: -18vw;}
  .c2{
  left: 100%;}
  .c3{width: size(1000);
  transform: translateX(200%);
  animation: an 50s linear infinite;
  top: -23vw;}
  }
@keyframes an{
    to{
  transform: translateX(-100%);
    }
}
.txt{
  position: absolute;
  top:calc(50% + (190 - 540) * 100vw / 1920);
  left:size(1056);
  font-size: size(19);
  line-height: 2.2;
  color: #0083ca;
  text-align: center;
      width:30em;
    letter-spacing:0.09em;
  font-weight: 800;
  .o{position: absolute;
  top:size(-155);left:size(-85);
  width:36.3vw;
  height:36.3vw;
  border-radius: 50%;
  background: #fff;
  &::after{content: ""; 
  display: block;
  position: relative;
  top:size(0);left:size(1);
  border-radius: 50%;
  width: 98%;
  height: 98%;background: #b8e0f2}
  }
.logo{
      width:size(160);
      margin:1.5em auto .5em;
      float: left;
  }
.img{
      width:66%;
    overflow: hidden;
    border-bottom: 2px solid #002840;padding: 6em 1.5em 0 0;
    img{vertical-align:bottom;width:size(99);}
    }
  .t1{
      width:66%;
  color: #002840;
  font-size: 1.7em;
    letter-spacing:0.05em;
    border-bottom: 2px solid #002840;
    overflow: hidden;
      text-align: center;
    }
  .t2{
      width:66%;
  font-size: 1em;
    overflow: hidden;
      text-align: center;
    }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
    min-height: sizem(604);
    max-height: sizem(750);
    height: calc(100vh - 63px);
    margin: 0;
  
  }
.bg{

  height:auto;

}

.c{width:180%;
  
  .c1,.c2{
  top: -10vw;}
  /*
  .c1{width: sizem(300);
  transform: translateX(50vw);
  top: 0vw;}
  .c2{width: sizem(400);
  transform: translateX(50vw);
  top: 30vw;}
  .c3{width: sizem(350);
  transform: translateX(45vw);
  top:39vw;}
  */
@keyframes an{
    to{
  transform: translateX(-100%);
    }
}

  }
.txt{
   left:sizem(0);
   top:calc(35% + (46 - 650 * .35) * 100vw / 375);
   width: 100%;
  font-size: sizem(14);
  line-height: 1.8;


  .img{
    width:sizem(200);
    margin: 0px auto;    padding: 0em 1.5em 0 0;
    z-index: 3;
    position: relative;
  }

  .img img{
    width:sizem(70);
    margin-top: 1em;
  }
.logo{
   width:sizem(203);float:none;
   margin:1.8em 0 0 .7em;
  }
  .t1{ 
      width:sizem(280);
      margin: 0px auto;
      text-align: center;
      }
  .t2{
      width:100%;
      margin: .5em auto;
    }
  .o{
    top:sizem(-170);
    left:sizem(-88);
    width:sizem(550);
    height:sizem(550);
    &::after{
  width: 106%;
    top:sizem(-10);
    left:-3%;  

    }

  }  
}


}
</style>
<script>
// @ is an alias to /src
import info from '@/info'
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
    }
  },

  methods: {},

  mounted() {},

  created() {},

  computed: {},
}
</script>
