<template>
  <div class="section1">
    <div>
	<!--	<img loading="lazy" src="./s1/pc.jpg" alt="" class="t0">  -->
		<img loading="lazy" src="./s1/bg.jpg" alt="" data-aos="fade" data-aos-duration="2000" data-aos-delay="0" class="bg" v-if="!isMobile">
		<img loading="lazy" src="./s1/bgm.jpg" alt="" data-aos="fade" data-aos-duration="2000" data-aos-delay="0" class="bg" v-else>
<div class="txt"><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 316.3 70.5" xml:space="preserve" class="logo"  data-aos="fade">
<path d="M56.1,3.1c8-0.1,8,12.9,0,12.8C48.1,16,48.1,3,56.1,3.1z M62.2,57.5V28.7c0-4.3-1-6.4-3.1-6.4H43.8v0.8c4.1,0,6.1,1.9,6.1,5.6v23.6c0,8.7,10.5,12.6,18.4,11.6v-0.8C64.2,63.1,62.2,61.3,62.2,57.5z M165.5,63.9c30.4-0.1,30.4-55.1,0-55.2C135,8.7,135.1,63.9,165.5,63.9z M176.2,36.3c-0.9,14.3,1.1,25-10.7,26.8c-11.8-1.8-9.8-12.5-10.7-26.8c0.9-14.3-1.1-25,10.7-26.8C177.3,11.3,175.3,22,176.2,36.3z M277.6,54.9c0.4,7.1,6.2,8.8,11.5,9l26.1,0v-12h-0.8c-0.5,7.5-3.7,11.2-9.6,11.2h-14.9V29.6h6.8c3.6,0,5.4,2.1,5.4,6.4h0.8V22.4H302c0,4.3-1.8,6.4-5.4,6.4h-6.8V10.3H304c5.9,0,9.1,3.7,9.6,11.2h0.8v-12h-42.9v0.8c4.1,0,6.1,1.9,6.1,1.7L277.6,54.9z M137,10.3V9.5h-24.5v0.8c4.1,0,6.1,1.9,6.1,5.6v13.7h-18.4V15.9c0-4.3-1-6.4-3.1-6.4H81.8v0.8c4.1,0,6.1,1.9,6.1,1.7v38.8c0,13.9,8.8,13.3,18.4,13.1v-0.8c-4.1,0-6.1-2-6.1-5.6V30.4h18.4v24.7c0,9.9,11.4,8.8,18.4,8.8v-0.8c-4.1,0-6.1-1.9-6.1-9.5V12C130.8,12.2,132.9,10.3,137,10.3z M259.8,57.5l-3.1-41.6c0-3.7,2-5.6,6.1-5.6V9.5h-16.7L229,44.6L214.1,9.5H197v0.8c4.1,0,6.1,1.9,6.1,5.6l-3.1,41.6c-0.2,3.7-2.2,5.6-6.1,5.6v0.8h13v-0.8c-4.5,0-6.4-2-6.1-5.6l3.1-41.6L219,51.1c0.1,0.1,3.2,6.6,2.2,7.4c6.5,0.3,11.3-6.9,8.3-13l15-30.7l2.9,39.7c1.1,10.2,11.3,9.4,18.6,9.3v-0.8C262.1,63.1,260.1,61.3,259.8,57.5z M3.9,9.2L2.3,9c0,3.2-0.6,6.8-1.7,8.5l1.6,0.7C3.4,15.7,3.9,12.9,3.9,9.2z M7.7,32.8V2.6H5.6v30.2H7.7z M28.1,12.5c0.7,0.9,1.4,1.6,2,2.1c0.4-0.8,0.9-1.4,1.5-1.9c-2.9-2.3-4.8-5.4-5.8-9.2h-8.6v1.9h7c0.6,1.9,1.5,3.7,2.7,5.5H14.8c1-1.6,1.8-3.2,2.4-4.8l-2-0.8c-0.8,2.4-2,4.6-3.6,6.4c-0.4-1.3-1.1-2.8-2-4.5L8.2,7.9c1.1,2.1,1.8,3.8,2.1,5.2l0.1-0.1l-0.2,0.2c0.6,0.5,1.1,0.9,1.5,1.4c0.5-0.4,1.1-1,1.8-1.8v8.3h3c-0.4,4.6-2.1,8.4-6.7,10.1c0.5,0.4,1,1,1.4,1.7c5-2.3,6.7-5.6,7.5-11.7h3.4v8.3c0,2.2,0.4,2.9,2.9,3h3.5c2.7-0.2,2.5-1.8,2.9-5.3c-0.8-0.2-1.4-0.5-1.9-0.9c0,1.8-0.1,3-0.3,3.5c-0.1,0.5-0.4,0.7-0.8,0.7h-3c-0.7,0-1-0.1-1-1v-8.3h3.8V12.5z M25.9,12.9v6.2H15.6v-6.2H25.9z M7.8,57.4V36.2H5.9v21.2H3.8V42.4H2.1v20.2h1.7v-3.4h6.3v2.1h1.7V42.4h-1.7v14.9H7.8z M26.8,38.6h-6.9c0.6-0.9,1-1.7,1.3-2.2l-1.9-0.5c-1.6,3.2-3.9,5.9-6.8,7.9c0.8,0.6,1.3,1,1.5,1.3c1.2-0.9,2.4-2,3.6-3.3c0.9,1.3,1.9,2.6,3.2,3.8c-2.5,1.8-5.4,3.1-8.6,3.9c0.4,0.4,0.8,1,1.2,1.7c3.4-1,6.3-2.5,8.9-4.3c2.4,1.8,5.2,3.2,8.2,4c0.3-0.6,0.8-1.2,1.3-1.8c-2.8-0.6-5.5-1.7-8-3.4c2.1-1.9,3.7-4,4.8-6.4l-1.3-0.7L26.8,38.6z M28.9,57.6v-1.7h-6.1v-2.3h6.5v-1.8h-6.5V49h-2v2.9h-6.3v1.8h6.3v2.3h-6v1.7h6v2.6H13V62h7.9v4.2h2V62h8v-1.8h-8v-2.6H28.9z M22.1,44.4c-1.4-1.2-2.6-2.5-3.5-4h7C24.8,41.7,23.6,43,22.1,44.4z"/>
</svg>

		<div class="title" data-aos="fade" data-aos-duration="1500" data-aos-delay="400">豪宅入門款 美式風格家<br>全區稀有 中島夢幻<b>2</b>房</div>
	<!--	<div class="stitle" data-aos="fade" data-aos-duration="1500" data-aos-delay="600">真情不二價給您!</div> -->
		<div class="desc" data-aos="fade" data-aos-duration="1500" data-aos-delay="600">270度採光</div></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width:100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  overflow: hidden;
  position: relative;
  background:#f8dee1;
  z-index: 2; 
}

.bg{
  position: absolute;
  left: 0;top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  }
.txt{
  position: absolute;
  top:calc(50% - 12.5vw);
  left:0;right: 0;margin: auto;
  width:23.793em;
  font-size: size(29);
  font-weight: 700;
  line-height: 1.53;
  color: #FFF;
  letter-spacing: 0.1em;
  filter: drop-shadow(.3vw .3vw .3vw rgba(0, 0, 0, 0.5));

.logo{
  width:100%;
  transform: translateY(-10%)scale(1.5);
  margin: auto auto 1.3em auto;
  fill: #EAD885;
  }
  .title{font-size:2.1em;
  line-height: 1.3;
 display: block;position: relative;
  transform: translateY(-10%)scale(1.5);
  b{font-size:1.4em;} 
 // b{color: #d03636;} 
&::after,
&::before{content: "";border: 0.1em solid #fff;
border-width: .1em .1em .1em 0;
display: block;
width: .5em;position: absolute;right: -35px;top: calc(50% - 1.4em);height: 2.8em;}
&::before{
border-width: .1em 0 .1em .1em;left: -35px;}
  }
  .stitle{
	  width: 100%;
	  background: #000;
	  color: #fff;
 margin: 1.7em 0 .8em;
  transform: scale(1.5);
  }
  .desc{
  font-size:2.5em;
 margin: 0.3em 0 .8em;
  transform: translateY(10%)scale(1.5);
	  color: #EAD885;}
}
@media only screen and (max-width: 1440px) {
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
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
  }
  .logo {
    width: sizem(308);
  }


.imgbg{
  bottom: sizem(-1);
  right:sizem(-90);
  width: sizem(280);
  height: auto;
  transform: translateX(-10%);
  }
.img{
  width: sizem(165);
  transform: translate(10%,5%);
  height: auto;
  }
.txt{
	position: absolute;
  font-size: sizem(14);
  width:23em;
  top:calc(50% - 30vw);
  margin: auto;

  .title{
     font-size: sizem(26);
  &::after{
    right: -10px;
  }
  &::before{
    left: -10px;
  }
}

  .desc{
  font-size:sizem(28)}

}

}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
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
