<template>
  <div class="section1">
      <img src="./all/nina.jpg" :alt="`${info.caseName}_logo`" class="nina">

      <div class="mark">
       <img src="./s1/mark.png" data-aos="fade-down" data-aos-delay="0" alt="" class="mark1">
       <img src="./s1/star1.png" data-aos="fade-down" data-aos-delay="0" alt="" class="star1">
       <img src="./s1/star2.png" data-aos="fade-down" data-aos-delay="0" alt="" class="star2">  
        </div>

      <img src="./s1/logo.png" data-aos="fade-down" data-aos-delay="0" alt="logo" class="logo">
      
    <div class="txt">

      <img v-if="isPC" src="./s1/txt.png" alt="" class="t1" data-aos="fade-down" data-aos-delay="300">
      <img v-if="isMobile" src="./s1/txt_m.png" alt="" class="t1" data-aos="fade-down" data-aos-delay="300">
      <div class="button" v-if="isPC"  v-scroll-to="{ element: `#contact`, offset: 0 }">立即預約</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  background: url('./s1/bg.jpg') center center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  //overflow: hidden;
  position: relative;
  z-index: 2; 
  margin: 0 0 5vw;
}
/*
  */
  .nina{
      position: absolute;
      top:0;
      left: 0;
      transform: translate(-100%,-100%);}
.t0{
  position: absolute;
  width: 100%;height:auto;
  top: 0;left: 0;object-fit: cover;
  opacity: 0.5;
  }
.c{
      position: absolute;left:0;right:0;
      top:calc(50% + (0 - 540) * 100vw / 1920);
    img{
      position: absolute;
      animation:an 5s ease-in-out infinite alternate;}
    .c1{width:size(451);top:size(230);left: size(-150);transform: translateX(-8%);animation-delay: -1s;}
    .c2{width:size(319);top:size(170);left: size(600);transform: translateX(-20%);animation-delay: -2s;}
    .c3{width:size(434);top:size(145);right:size(5);transform: translateX(-10%);}
    .c4{width:size(633);top:size(650);right:size(-180);transform: translateX(-15%);animation-delay: -1s;}
    .c5{width:size(316);top:size(820);left: size(840);transform: translateX(-20%);animation-delay: -1s;}
    .c6{width:size(275);top:size(760);left: size(680);transform: translateX(-15%);}
    .c7{width:size(126);top:size(120);right:size(310);transform: translate(-15%,-10%)rotate(10deg);}
  }


@keyframes an{
    to{
      transform: translateX(0);
    }
}
.logo{
  position: absolute;
  left: size(220);
  top:calc(50% + (400 - 540) * 100vw / 1920);
  width:size(561);
  }


.mark{
  position: relative;
  left: size(845);
  top:size(245);
  width:size(264);

  .mark1{
   width:100%;
  }
  .star1{
   width:size(127);
   position: absolute;
   left:size(-10);
   top:size(10);
   transform: rotate(1turn);
   animation:star 3s linear infinite reverse;
  }
  .star2{
   width:size(114);
   position: absolute;
   right:size(15);
   bottom:size(10);
   transform: rotate(0turn);
   animation:star 3s linear infinite reverse;
  }

  @keyframes star{
    to{
      transform: rotate(1turn);
    }
}

}



.txt{
  position: absolute;
      top:calc(50% + (250 - 540) * 100vw / 1920);
  left:size(870);
  font-size: size(34);
  font-weight: 500;
  line-height: 1.6;
  color: #444;
  text-align: center;

  


  .t1{
     width:size(809);
     top:calc(50% + (560 - 540) * 100vw / 1920);
     left: size(10);
     position: absolute;
    }
    .button{
      position: absolute;
      left: size(17);
      bottom:size(-475);
      width:size(220) ;
      font-size:size(34);
      border-radius: 40px;
      letter-spacing:0em;
      font-family: 'Noto Serif TC', serif;
      font-weight: 500;
      color: #fff;
      cursor: pointer;
      display: inline-block;
      border:2px solid #efb66d;
      vertical-align: middle;
      margin: 0 0.5em 0.2em 0;
      padding: 0.1em 1em ;
      transition: all 0.3s;
      &:hover{
        background:#efb66d;
        color: #FFF;
      }
    }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
    background: url('./s1/bg_m.jpg') center center;
    background-size:cover;
    min-height: sizem(604);
    max-height: sizem(750);
    height: calc(100vh - 63px);
    margin: 0 0 25vw;
  }

.bg{
  position: absolute;
  width:100%;
  top:0;
  left: 0;
  transform: translateY(-100%);
  }
.bgx{
  position: absolute;
  width:100%;
  top:calc(50% - 43vw);
  left: 0;
  }
.c{
   top:calc(50% + (0 - 302) * 100vw / 375);
    .c1{width:sizem(230);top:sizem(570);left: sizem(-60);}
    .c2{width:sizem(280);top:sizem(573);left: sizem(210);}
    .c3{width:sizem(208);top:sizem(180);right:sizem(-140);}
    .c4{width:sizem(200);top:sizem(369);right:sizem(275);}
    .c5{width:sizem(170);top:sizem(85);left: sizem(270);}
    .c7{width:sizem(70);top:sizem(574);right:sizem(83);}
}

.logo{
   width:sizem(245);
   top:calc(50% + (230 - 302) * 100vw / 375);
   left:sizem(65);
  }

      .mark{
      position: relative;
      margin: 0px auto;
      left: auto;
      width:sizem(130);
      top:calc(50% + (95 - 302) * 100vw / 375);

      .mark1{
      width:100%;
      }
      .star1{
      width:sizem(55);
      position: absolute;
      left:sizem(2);
      top:sizem(10);
      }
      .star2{
      width:sizem(50);
      position: absolute;
      right:sizem(15);
      bottom:sizem(10);
      }

    }


.txt{
   left:sizem(57);
   top:calc(50% + (356 - 302) * 100vw / 375);
   width: 100%;

  .t1{
     width:sizem(259);
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
