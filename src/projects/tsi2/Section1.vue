<template>
  <div class="section1">
    <!-- 藍色那張 -->
    <transition-group name="slide-fade" mode="out-in">
      <div key="default-bg">
        <img loading="lazy" src="./s1/map_bg.jpg" :alt="`${info.caseName}_cloud`" class="map-img" v-if="isPC">
        <img loading="lazy" v-if="isMobile" src="./s1/map_bgm.jpg" :alt="`${info.caseName}_cloud`" class="mimg">
     <!-- <img loading="lazy" src="./s1/t.png" :alt="`${info.caseName}_cloud`" class="map-t" data-aos="fade" data-aos-delay="200">  -->
        <div class="map-t1" data-aos="fade" data-aos-delay="200">
      <img loading="lazy" src="./s1/img.png" :alt="`${info.caseName}img`" class="img">
<svg version="1.1" id="logo" class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 529 169">
<path d="M124.7,104.3v22.1H84.2L64.2,92.3h-5.1l-19.9,34.1H0.3v-22.1l20.6-24.9H0.5V46.1h36.2v-9.3H2.4V4.4h120v32.4
	H85.2v9.3h38.9v33.3h-21.8L124.7,104.3z M260.3,6.2v36.5H231v-7.7h-4v11.3h29.6v22.1h-49.4l-7.9-7.9V35.1h-4v25.4l-7.9,7.9H138V46.4
	h30.4V35.1h-4v7.7h-29.8V6.2h39.9V0.3h45.1v5.9H260.3z M217.7,99.1h41.7v26.9h-124V99.1h39.7v-3.6h-37.6V72.1h118.9v23.4h-38.8V99.1
	z M394,88.9v36.5h-80.8l-11.8-11.6l-9.3,12.8h-21.9V67.8h35.5v14l29.6-31v-3.5h-62.3V11.8h32.7V2.1h50.1v9.7H391v38.5l-37,38.6H394z
	 M528.7,94.8V127H407.4V50.3h119.7v41.2h-79.3v6.9h38.4l4.3-3.5H528.7z M525.5,46.5H408.6V4.1h116.9V46.5z M443.4,69.4v4.7h11.2
	v-4.7H443.4z M483.4,24.4h-33.5v4.3h33.5V24.4z M491.8,69.4h-12.1v4.7h12.1V69.4z"/>
<path d="M108.3,167.2c13-3.6-4.7-9.3-7.2-13.6c-3.7-9,12.5-11.4,14.3-3.1l-1.9,0.9c-0.5-5.8-12.3-6.2-9.5,0.4
	c3,3.6,8.9,4.1,11.4,8.3c3.6,9.2-13.2,11.8-15.2,3.3l2-0.8C103,165.3,105.5,167.3,108.3,167.2z M136.5,146h3.7v9.8l11.6-9.8h2.4
	l-11.1,9.3l14,12.8h-4.7l-12.3-11.2v11.2h-3.7V146z M177.4,146l7.7,11.2l7.6-11.2h2l-8.6,12.6v9.6h-3.7v-9.2l-8.8-12.9H177.4z
	 M252.3,147c-10.4-0.4-12.5,16.1-3.4,19.6c8.8,2.5,9-1.3,8.5-8.6h-4.2v-1.3h7.9v9.7c-5.6,3-13.8,3.3-18.8-1.2
	c-12.6-12,10.2-28.8,18.6-14.1l-1.6,1.1C257.6,149.1,255.7,147.1,252.3,147z M291.4,145.5l10.4,22.6H298l-3.4-7.4h-9.5l-3.5,7.4
	h-1.9l10.7-22.6H291.4z M285.8,159.3h8.1l-4-8.8L285.8,159.3z M320.9,146c2.4,0.1,9-0.3,11.2,0.4c6.6,1.4,5.4,10.2-0.9,11l8.1,10.7
	h-4.3l-7.7-10.4h-2.6v10.4h-3.7V146z M324.6,156.6c10.4,1.5,10.6-11,0-9.2V156.6z M358.3,146c8.4-0.5,21.3-0.4,21.1,10.9
	c0.3,11.3-12.7,11.9-21.1,11.3V146z M362,166.5c17.2,3.2,17.2-22,0-18.9V166.5z M415.6,146v1.4H404v7.9h7.8v1.4H404v9.9h11.7v1.4
	h-15.4V146H415.6z M436,146h2.1l14.5,16.2h0.1V146h1.6v22.7h-0.9l-15.7-18h-0.1v17.5H436V146z"/>
</svg>

          <div class="txt1">
<svg version="1.1" class="t1" id="t1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 65" >
	<path d="M154.6,39.5c0,13.8-11.2,24.9-24.9,24.9h-104c-13.8,0-24.9-11.2-24.9-24.9v-6.2c0-13.8,11.2-24.9,24.9-24.9
		h104c13.8,0,24.9,11.2,24.9,24.9V39.5z"/>
	<path class="st1" d="M51.9,25.2v2H25.2v-2h11.7v-2.3l3.7,0.2c0,0.2-0.2,0.4-0.7,0.5v1.6H51.9z M42.1,39.7c0.4,1.2,1,2.3,1.7,3.2
		c1.6-0.8,3.4-1.9,4.6-2.7l2.3,1.8c-0.1,0.1-0.2,0.2-0.4,0.2c-0.1,0-0.2,0-0.3,0c-1.2,0.7-3.2,1.8-4.8,2.5c1.7,1.8,4,3.1,6.9,3.8
		c-0.5,0.5-1.3,1.5-1.6,2.2c-5.5-1.6-8.9-5.3-10.7-10.8h-1.1c-0.4,0.2-0.9,0.5-1.4,0.7c3,2,4.4,4.5,4.4,6.6c0,2.4-1.9,3.9-4.6,3.9
		c-0.7,0-1.6,0-2.5,0c-0.1-0.7-0.3-1.7-0.7-2.3c1,0.1,2.1,0.1,2.8,0.1c0.6,0,2.5,0,2.5-1.9c0-0.4-0.1-0.9-0.3-1.4
		c-3.2,2.5-7.9,4.3-12.3,5.2c-0.3-0.5-0.9-1.3-1.3-1.8C30,48,35.1,46.3,38,43.9c-0.2-0.3-0.5-0.6-0.8-0.9c-2.7,1.7-6.6,3-10,3.7
		c-0.3-0.5-0.8-1.2-1.2-1.5c3.5-0.5,7.6-1.7,10-3.1c-0.3-0.2-0.7-0.5-1-0.7c-2.4,0.9-5.1,1.5-7.6,2c-0.2-0.4-0.7-1.2-1-1.6
		c2.7-0.4,5.8-1.1,8.4-2.1h-5.3v-1.8h18.1v1.8H42.1z M51.6,39.5H49v-2.9H28v3.1h-2.5v-5h26V39.5z M29.3,28.4H48v5H29.3V28.4z
		 M45,31.9v-1.8H32.1v1.8H45z M64.5,46.1c-0.1,0.2-0.4,0.3-0.7,0.2c-2,1.4-5,3-7.6,4c-0.4-0.5-1.3-1.4-1.9-1.9
		c2.5-0.8,5.5-2.2,7.2-3.6L64.5,46.1z M69.5,34.2h12.2v2.2H54.6v-2.2h12v-1.8h-8.2V24h19.4v8.4h-8.1v0h0.5c0,0.3-0.2,0.4-0.7,0.5
		V34.2z M77.5,44.4h-8v3.9c0,2.4-1.1,2.5-5.9,2.5c-0.1-0.7-0.5-1.6-0.8-2.2c1.4,0.1,3,0.1,3.4,0.1c0.4,0,0.5-0.1,0.5-0.5v-3.8h-7.8
		v-6.6h18.6V44.4z M61.1,25.8v1.5H75v-1.5H61.1z M61.1,29v1.5H75V29H61.1z M61.6,39.8v2.6h13.1v-2.6H61.6z M79.4,50.3
		c-1.7-1.2-5.1-2.9-7.7-4l1.8-1.5c2.6,1,6,2.6,7.9,3.8L79.4,50.3z M84.6,22.1c9.9-9.1,27.5,3.4,14.4,12.8
		c14.6,9.9-3.4,25.9-16.1,16.8l2.8-5c10.4,7,18.3-7.2,5.4-9.1l-1.9-5.2c12.8,1.1,7.6-13.6-2-5.1L84.6,22.1z M134.9,40H122
		c-0.1,0.7-0.2,1.4-0.4,2.1h8l0.6-0.1l1.6,0.3c0,0.2-0.1,0.5-0.1,0.8c-0.7,7.7-1.3,7.7-5.3,7.7c-0.7,0-1.4,0-2.2-0.1
		c-0.1-0.7-0.4-1.7-0.7-2.4c1.4,0.1,2.8,0.1,3.4,0.1c0.5,0,0.8-0.1,1-0.3c0.4-0.4,0.7-1.5,0.9-4H121c-1.1,2.8-3.3,5.1-8,6.5
		c-0.3-0.7-1-1.7-1.5-2.2c5.8-1.5,7.2-4.5,7.7-8.6h-5.9c-0.4,3.6-1.5,7.5-3.9,10.3c-0.5-0.5-1.7-1.3-2.4-1.6
		c3.3-3.8,3.7-9.3,3.7-13.4v-6.7h21.5v6.8h-7.7c-0.1,0.2-0.3,0.3-0.7,0.4v1.9h10.9V40z M134.7,24.4v2.5h-26.6v-2.5H134.7z
		 M121.1,35.5h-7.5c0,0.7,0,1.5-0.1,2.3h7.6V35.5z M129.5,30.8h-15.9v2.5h15.9V30.8z"/>
<path d="M188,22.2c1.7,2.1,3.3,5,3.9,6.9l-3.7,2.1c-0.2-0.8-0.6-1.8-1.1-2.8c-0.6,3.4-3.1,2.9-5.6,3
	c-4.4,0.2-3.9-3.8-3.8-7.1c-0.4,2.7-1,5.2-2.7,7l-3.3-2.4c0.7-0.7,1.2-1.7,1.6-2.7l-2.9,1c-0.2-1.3-0.7-3.1-1.2-4.7v9.2h-4V21.6h0
	c-0.2,2.6-0.7,5.8-1.6,7.7c-0.8-0.5-2.2-1.2-3.2-1.5c0.7-1.8,1.1-4.9,1.2-7.6l3.6,0.8v-2.1l-3.2,0.2c-0.1,0.3-0.4,0.5-0.6,0.5
	l-0.8-4.6h2.3c0.4-0.6,0.8-1.1,1.2-1.7c-0.9-1.4-2.3-3.1-3.5-4.4c0.8-1.1,1.5-2.2,2.2-3.3l0.5,0.5c0.8-1.7,1.6-3.7,2.1-5.3l4.5,1.8
	c-0.1,0.3-0.5,0.4-1,0.4c-0.7,1.8-1.9,4.1-3,5.8c0.2,0.3,0.4,0.6,0.6,0.8c1-1.7,1.9-3.4,2.6-4.8l4.3,1.9c-0.1,0.3-0.5,0.4-1,0.4
	c-0.9,1.6-2.2,3.6-3.6,5.4l2.6-1.1c0.7,1.4,1.5,3,2.1,4.4v-12h6.1c0.4-1,0.7-2.2,0.8-3.1l5.6,1.3c-0.1,0.3-0.4,0.4-0.9,0.4l-0.7,1.4
	h6.5v16h-7.6c1.1,0.7,2.2,1.6,2.9,2.3l-3.1,2.7c-0.3-0.4-0.7-0.7-1.1-1.1c0.2,0.5-0.5,4.2,0.5,4c1.3-0.1,1.4,0.4,1.5-2.2
	c0.5,0.4,1.5,0.9,2.4,1.2c-0.5-0.9-1.1-1.9-1.7-2.6L188,22.2z M169,14.9c-0.3-0.6-0.5-1.2-0.8-1.8c-0.5,0.6-0.9,1.2-1.4,1.8
	L169,14.9z M177.7,22.2l2.4,0.1c-0.8-0.6-1.7-1.2-2.5-1.7l1.1-0.9h-5.4v-1l-2.8,1.2c-0.1-0.5-0.2-0.9-0.3-1.5l-1,0.1v2.5l2.9-0.9
	c0.6,1.5,1.2,3.3,1.6,4.8c0.2-0.7,0.3-1.6,0.4-2.4l3.6,0.9V22.2z M179.6,9.2c0.4-0.7,0.7-1.3,1-2H177v3l1.6-1.5L179.6,9.2z
	 M177,12.2c0.4-0.3,0.7-0.6,1-0.9c-0.4-0.2-0.7-0.4-1-0.5V12.2z M180.4,12.6c-0.5,0.6-1,1.1-1.6,1.6c-0.4-0.6-1.2-1.3-1.8-1.6v3.8
	h2.6c-0.4-0.5-0.8-1-1.2-1.3c1-0.5,2-1.1,2.8-1.9L180.4,12.6z M185,15.9c-0.4-0.4-0.9-0.8-1.5-1.2c-0.6,0.6-1.3,1.1-2,1.6h5.3v-2.4
	L185,15.9z M182.2,10.2l-0.2,0.3c0.3,0.2,0.7,0.4,1,0.6c0.2-0.3,0.4-0.6,0.5-0.9H182.2z M183.2,8c0.4,0,1.8,0,2.1-0.1l1.6,0.6V7.2
	h-3.2L183.2,8z M186.9,9.1c-0.4,1.3-0.9,2.4-1.6,3.5c0.6,0.4,1.1,0.8,1.6,1.1V9.1z M170.4,35.4c-0.7,2-1.3,4.1-2.2,6v23h-4.5v-15
	c-0.6,0.8-1.1,1.6-1.7,2.2c-0.4-1.2-1.4-3.9-1.9-5.1c2.3-2.9,4.7-8.1,6.1-13.1l4.2,1.4v-0.1h21v3.4h-6.6v1h5.5v6.9h-19.5v-6.9h5.2
	v-1h-5.7V35.4z M190.1,59.4h-3.8c2.2,0.8,4.6,1.7,6,2.4l-4.1,2.6c-1.5-0.9-4.3-2.2-6.9-3.1l2.2-1.9h-5.8l2.6,1.8
	c-2.4,1-5.5,2.5-8.9,3.1c-0.5-0.9-1.6-2.4-2.4-3.2c2.1-0.4,4.3-1,6.1-1.7h-3.9V47h18.8V59.4z M175,41.8v1.7h1.2v-1.7H175z
	 M175.7,49.5v0.8h9.8v-0.8H175.7z M175.7,52.8v0.8h9.8v-0.8H175.7z M175.7,56v0.9h9.8V56H175.7z M181.1,39.1v-1h-1.3v1H181.1z
	 M179.8,41.8v1.7h1.3v-1.7H179.8z M186.1,41.8h-1.3v1.7h1.3V41.8z"/>
</svg>
<span>1589</span>
<svg version="1.1" class="t2" id="t2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 65">
<path class="st0" d="M24.5,2.9h6.6v3.9h-6.6v1h-4.6v-1h-6.9v1H8.3v-1H1.9V2.9h6.4V1l5.6,0.3c0,0.4-0.3,0.6-0.9,0.7v0.9h6.9V1
	l5.6,0.3c0,0.4-0.3,0.6-1,0.7V2.9z M29.7,19.5v8.4c0,3.1-0.9,4.1-5.3,4.1c-0.1-0.8-0.4-1.7-0.7-2.6l-2.9,0.7c0-0.4-0.1-0.8-0.2-1.3
	c-3.9,0.3-7.7,0.7-10.4,0.8c-0.1,0.3-0.4,0.5-0.6,0.5l-1.4-4.5c1.6,0,3.7,0,5.9-0.1v-2.1H8V32H3.5V19.5h10.6v-0.8h-8V8.1h21.1v10.6
	h-8.6v0.8H29.7z M10.5,11.1V12h3.6v-0.9H10.5z M10.5,15.8h3.6v-0.9h-3.6V15.8z M22.5,12v-0.9h-3.9V12H22.5z M22.5,15.8v-0.9h-3.9
	v0.9H22.5z M18.6,25.4l1.1,0c-0.1-0.4-0.3-0.9-0.5-1.3l3-0.7h-3.7V25.4z M22.7,23.4c0.7,1.5,1.3,3.4,1.6,4.9c0.7,0,0.8,0,0.8-0.4
	v-4.5H22.7z M11.7,54.2v4.4c3.3,1.1,16.2,0.5,20.6,0.5c-0.7,1.1-1.5,3.3-1.8,4.7c-6.9-0.5-20.8,2-24.9-4.1c-0.3,2.1-0.8,3.9-1.4,5.3
	c-0.8-0.6-2.6-1.4-3.7-1.8c1.3-3.2,1.6-9,1.7-14.5l5,0.7c-0.1,0.3-0.3,0.5-0.8,0.6c-0.2,1.6-0.1,4.1,1,5.3v-8H1.2v-4.2h6v-2.4H2.2
	v-4.1h5.1v-3l5.4,0.3c0,0.4-0.3,0.6-0.9,0.7v2.1h4v4.1h-4v2.4h4.8v4.2h-4.8v2.9H16v4.1H11.7z M25.4,43.3v-4.4h-8.6v-4.2h13.2v13.7
	h-4.5v-1l-3.3,0c0,6.4,0.1,6.4,1.3,6.4c4.1,0,4.2,0.5,4.2-4c0,1.2,2.9,1.5,4.1,1.8c-0.3,7.4-2.5,6.5-9,6.5c-6.3,0-5.2-1.9-5.2-14.7
	H25.4z"/>
</svg>
</div>
<div class="txt2">24層擎天地標｜千坪御花園｜2292-2255</div>
        </div>
        <img loading="lazy" src="./s1/t2.png" :alt="`${info.caseName}_cloud`" class="map-t2" data-aos="fade" data-aos-delay="200">
        
        <div class="title1 title" data-aos="fade" data-aos-delay="0">
          洲子洋天空再進化
        </div>
        <div class="title2 title" data-aos="fade" data-aos-delay="100">
          讓雙北人都羨慕
        </div>
      <!--  <h3 class="desc" data-aos="fade" data-aos-delay="300">
          15萬坪寬闊樹海濃蔭，128萬坪大臺北都會水岸公園，藍天綠邑絕美生活別說你不羨慕！這就是洲子洋，宜居大城持續進化，讓雙北人一眼愛上。
        </h3> -->
      </div>
    </transition-group>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  //overflow: hidden;
  // position: relative;
    z-index:2;
    background: #fff;
  //z-index: 3;
  // margin: 0 0 size(400) 0;
}

.animate-bg {
  width: 100vw;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: fixed;
  background:#036EB7;
  z-index: 100;
  top: 0;
  left: 0;
  transition: all 0.3s;
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  // opacity: 0.5;

  &:nth-child(1) {
    position: relative;
  }
}

.img1,
.img2 {
  position: absolute;
  width:size(2561);
  left: 50%;
  bottom: 0;
  animation: img 3s 0s ease-in-out infinite alternate;
  transform-origin: 20% 100%;
    transform: scaleY(0.96) translate(-50%, 0);
}
.img2 {
  animation: img 3s -0.5s ease-in-out infinite alternate;}

@keyframes img {
  to {
    transform: scaleX(0.96) translate(-50%, 5%);
  }
}

.map-img {
  @include img_r_pc(1646, 0, 0);
  object-fit: cover;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  z-index: 0;
}
.map-t {
  @include img_r_pc(701, 150, 390);
  top: calc(50% + (180 - 1080 * .5) * 100vw / 1920);
}
.map-t1 {
  @include img_r_pc(702, 150, 390);
  top: calc(50% + (180 - 1080 * .5) * 100vw / 1920);
  color: #FFF;
  font-size: size(50);
font-family: 'Noto Sans TC', serif;
font-weight: 700;
  svg{fill: currentColor;}
  .img{float: right;width:3.4em;}
.logo{width:10.58em;margin:0.84em 0 0 0;}
.txt1{color: #FFF000;
filter: drop-shadow(0 0 .2em rgba(0, 0, 0, 0.7));
margin: 0.68em 0 -0.04em 0;
font-family: 'Biryani', sans-serif;
span{font-size: 2.4em; margin: 0 0.02em;}
}
.t1{height: 1.3em;
.st1{color: #036EB7;}
}
.t2{height:1.3em;}

.txt2{font-size:0.56em;
filter: drop-shadow(0 0 .2em rgba(0, 0, 0, 0.7));}
}
.map-t2 {
  @include img_l_pc(200, 100, 690);
  top: calc(50% + (130 - 1080 * .5) * 100vw / 1920);
}

.title {
  font-size: size(40);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: size(4);
  text-align: left;
  padding-top: size(46);
  color: #ffffff;
  background-color: #036EB7;
  writing-mode: vertical-rl;
  text-orientation: upright;
}

.title1 {
  @include div_l_pc(70, 517, 73, 150);
  transform: translateY(-5%);
}

.title2 {
  @include div_l_pc(70, 440, 73, 233);
  transform: translateY(-5%);
}

.desc {
  @include img_l_pc(476, 96, 353);
  font-size: size(20);
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: size(1.6);
  text-align: left;
  color: #ffffff;
  text-shadow: 0 0 0.5em #008ed4;
}

// begin
.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  // transform: translateY(50px) !important;
  opacity: 0;
}
// end
.slide-fade-enter {
  // margin-top: 0
  // transform: translateY(0px) !important;
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 1s ease;
}

.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
    min-height: sizem(604);
    max-height: sizem(750);
    height:calc(100vh - 63px);
    margin:0;
  }

  .animate-bg {
    width: 100vw;
    height: 100vh;
    min-height: auto;
    max-height: 100vh;
    transition: all 0.3s;
  }

  .bg-img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    object-fit: cover;
    margin-top: 0;
    // opacity: 0.5;

    &:nth-child(1) {
      position: relative;
    }
  }

  .img1,
  .img2 {
    position: absolute;
    width: 100vw;
    bottom: 0;
  }


  .map-img,
  .map-t {
  }
.mimg{
    @include img_c_m(375, 137);
    top: auto;
    bottom:0;
    height: calc(100% - 36.5333333333vw);
  }
 /* .map{
    @include img_c_m(375, 137);
    top: auto;
    bottom:0;
    height: calc(100% - 36.5333333333vw);
  }*/
.map-t{
    @include img_r_m(320, 220,18);
    top: calc(35% - 0vw);
}
.map-t1{
    @include img_r_m(320, 220,18);
    top: calc(35% - 0vw);
    font-size: sizem(22.5);
}
.map-t2{
    @include img_l_m(150, 170,10);
    top: calc(35% - 14vw);
}
  
  .map-bg-frame {
    @include img_l_m(375, 137, 0);
  }

  .title {
    font-size: sizem(23);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.09;
    letter-spacing: sizem(2.3);
    text-align: left;
    color: #ffffff;
    background-color: #036EB7;
    padding-left: sizem(16);
    writing-mode: horizontal-tb;
    text-orientation: mixed;
    z-index: 20;
  }

  .title1 {
    @include div_l_m(310, 42, 57, 40);
  transform: translateX(-5%);
  }

  .title2 {
    @include div_l_m(264, 42, 107, 40);
  transform: translateX(-5%);
  }

  .desc {
    @include img_l_m(310, 170, 40);
    text-shadow: 0 0 3px rgba(22, 29, 45, 0.85);
    font-size: sizem(15);
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    z-index: 1;
  }
}
</style>
<script>
// @ is an alias to /src
import Map from '@/components/Map.vue'
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section1',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isAnimateBg: true,
      // blockIndex: 0,
      bgmSrc: require('./s1/map_bg_m.jpg'),
      hand: require('./s1/m_2_mobile_hand.png'),
    }
  },

  components: {
    Map,
  },

  methods: {},

  mounted() {
    setTimeout(() => {
      this.isAnimateBg = false
    }, 4000)//6000
  },

  created() {},

  computed: {},
}
</script>
