<template>
  <div class="section1">
    <!-- 
    <img src="./s1/pc.jpg" class="t0" />
   -->
    <img src="./s1/bg.jpg" class="bg" />

   
    <div class="imglt" data-aos="zoom-in" data-aos-delay="0" >
      <div>
    <img src="./s1/g.png" class="img1" />
    <img src="./s1/g.gif" class="img2" /></div>
    </div>
   <div class="imgrt" data-aos="zoom-in" data-aos-delay="0">
      <div>
    <img src="./s1/g.png" class="img1" />
    <img src="./s1/g.gif" class="img2" /></div>
    </div>
    <div class="imglb" data-aos="zoom-in" data-aos-delay="0" data-aos-offset="-300">
      <div>
    <img src="./s1/w.png" class="img1" />
    <img src="./s1/w.gif" class="img2" /></div>
    </div>
    <div class="imgrb" data-aos="zoom-in" data-aos-delay="0" data-aos-offset="-300">
      <div>
    <img src="./s1/w.png" class="img1" />
    <img src="./s1/w.gif" class="img2" /></div>
    </div>
    <div class="tree" data-aos="fade-up" data-aos-delay="0" data-aos-offset="-300">
    <img src="./s1/tree.png" class="tree1" />
    <img src="./s1/tree.png" class="tree2" />
    <img src="./s1/tree.png" class="tree3" v-if="!isMobile" />
    <img src="./s1/img.png" class="tree4" />
    </div>
    <div class="cloud" data-aos="fade-up" data-aos-delay="0" data-aos-offset="-300">
    <div v-if="!isMobile"><img src="./s1/cloud2.png" class="cloud1" /></div>
    <img src="./s1/cloud2.png" class="cloud2" />
    <div v-if="!isMobile"><img src="./s1/cloud1.png" class="cloud3" /></div>
    <img src="./s1/cloud1.png" class="cloud4" />
    <img src="./s1/cloud2.png" class="cloud5"  v-if="!isMobile" />
    <img src="./s1/cloud1.png" class="cloud6"  v-if="!isMobile" />
    </div>

    <div class="txt">
<svg @init="init" class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 224">
  <path class="st0" d="M34.9,205.9c-0.8-0.7-1.7-1.4-2.7-2.1l1-1.2c0.4,0.3,1.2,0.9,2.1,1.6c0.3,0.2,0.5,0.4,0.7,0.5L34.9,205.9
L34.9,205.9z M34.3,213.2l-1.6-0.7c0.8-2.3,1.5-4.1,1.8-5.4c0.4,0.2,1,0.5,1.6,0.6C35.4,209.9,34.8,211.7,34.3,213.2z M35.4,201.8
c-0.9-0.8-1.7-1.5-2.5-2.1l1.1-1.2c0.9,0.7,1.8,1.4,2.6,2.1L35.4,201.8L35.4,201.8z M37.3,201.3v-1.6h9.1v1.6h-3.8v9.5H47v1.5H36.5
v-1.5h4.4v-9.5H37.3L37.3,201.3z M55.7,211.3V210h6.4v-0.8h1.6v0.8h6.4v1.2h-6.4v2.1h-1.6v-2.1h-6.4V211.3z M56.3,203l-0.4-1.1
c1.5-0.3,2.9-0.9,4.3-1.7h-4V199h6.2v5h-1.5v-0.8c-1.3,0.8-2.7,1.4-4.2,1.9l-0.4-1.2c1.7-0.4,3.2-1.1,4.6-1.9v-1
C59.4,201.9,57.8,202.6,56.3,203L56.3,203z M63.4,202.7l-0.5-1c1.6-0.4,2.9-0.9,4.1-1.5h-3.9V199h6.3v5.2h-1.5v-1.4
c-1.5,0.8-2.8,1.3-4.1,1.6v0.6h5.8v1.2h-2.4c-0.1,0.2-0.3,0.4-0.4,0.7c1,0.5,1.9,1,2.7,1.5l-0.9,1.1c-1.1-0.8-1.9-1.3-2.5-1.7
c-0.4,0.5-1,1-1.8,1.5l-1.1-1.1c1-0.5,1.8-1.2,2.4-2.1h-4.7c-0.1,0.1-0.4,0.6-0.5,0.8c0.5,0.2,1.8,1,2.2,1.3l-1,1.1
c-0.6-0.4-1.3-0.9-2.1-1.4c-0.5,0.5-1.2,1.1-2,1.6c-0.1-0.1-0.9-0.7-1.2-1c1.5-0.8,2.4-1.6,2.8-2.4h-2.8V205h5.8v-1h1.3l-0.2-0.6
c1.7-0.5,3.3-1.1,4.6-1.8v-0.8C66.4,201.7,64.9,202.3,63.4,202.7L63.4,202.7z M79.4,201.2v-1.4h2.7v-1.5h1.5v1.5h2.8v1.4h-5.2
c0.2,0.3,0.9,1.4,1.2,1.8l-0.9,0.5h1.8c0.4-0.8,0.8-1.5,1.2-2.3l1.4,0.5c-0.4,0.6-0.7,1.2-1.1,1.8h1.9v1.4h-3v1.4h2.7v1.4h-2.7v0.8
l0.6-0.5c0.5,0.4,1.2,1.2,2.2,2.3l-1,0.9c-0.5-0.6-1.6-2-1.8-2.2v3.9h-1.5v-4c-0.7,1.2-1.5,2.2-2.5,3.1l-0.9-1.1
c1.2-1,2.2-2,2.8-3.3h-2.2v-1.4h2.8v-1.4H79v-1.4h2c-0.4-0.6-0.7-1.2-1.1-1.7l1.1-0.6L79.4,201.2L79.4,201.2z M90.5,213.1v-7.8h-1.8
c0.1,3.3-0.5,6.1-1.7,7.9c-0.2-0.1-1.1-0.7-1.3-0.9c1.1-1.5,1.6-3.7,1.5-6.8v-6c2.2-0.2,4.6-0.4,5.7-0.6l0.5,1.5
c-1.5,0.2-3.6,0.4-4.7,0.5v2.9h4.9v1.5H92v7.8L90.5,213.1L90.5,213.1z M102.7,202.9v-3.3h6.1v-1.2h1.7v1.2h5.9v3.3h-1.6v-2h-10.6v2
H102.7L102.7,202.9z M103.5,213.3v-6.1h12.2v6.1h-1.6v-0.7h-9v0.7H103.5z M104.7,206.4v-2.9h9.8v2.9H104.7z M105,202.7v-0.9h9.1v0.9
H105z M105,208.4v1.1h3.8v-1.1H105z M105,210.5v1h3.8v-1H105z M106.3,204.5v1h6.6v-1H106.3z M114.1,208.4h-3.7v1.1h3.7V208.4z
 M110.4,210.5v1h3.7v-1H110.4z M126.4,200.3v-1.4h13.5v1.4h-11.6V211c0,0.3,0.2,0.5,0.6,0.5h11.2v1.3h-11.9c-0.9,0-1.4-0.5-1.4-1.3
v-11.2H126.4L126.4,200.3z M129.3,210.4v-4.2h4.5v4.2H129.3z M130.6,205.2v-3.9h7.6v3.9H130.6z M130.6,207.3v1.9h1.9v-1.9H130.6z
 M132,202.5v1.6h4.7v-1.6H132z M134.9,210.4v-4.2h4.5v4.2H134.9z M136.1,207.3v1.9h2.1v-1.9H136.1z M152.2,205.5v2.3H150v-2.3H152.2
z M162.9,213.3c-0.4-0.5-0.8-0.9-1.1-1.3c1.4-2.6,1.2-3.9,1.3-7.5V199h11.5c0,0,0,5.1,0,6.8c0,3.8,0.1,5.4,0.6,5.5
c0.3,0.1,0.5-0.5,0.5-3.1c0.4,0.2,0.7,0.4,1,0.4c-0.1,4-0.7,4.5-1.8,4.5s-1.7-1.2-1.7-7.3v-5.5h-8.7v4.7
C164.4,208.9,164.4,210.4,162.9,213.3L162.9,213.3z M165.5,208.7v-4.3h2.7V203c-0.5,0-2.3,0.1-2.8,0.1c0-0.5-0.1-0.9-0.2-1.3
c2.8,0,5.1-0.1,7-0.2l0.2,1.2c-0.9,0-1.8,0.1-2.9,0.2v1.4h2.7v4.3h-2.7v1.8l1.5-0.1l-0.4-1.1l1.1-0.2c0.2,0.6,0.9,2.6,1.2,3.3
l-1.2,0.3l-0.3-1.2c-1.5,0.2-5.5,0.5-6.4,0.5l-0.2-1.3c0.7,0,2.2,0,3.4-0.1v-1.9H165.5L165.5,208.7z M166.7,205.5v1.9h1.5v-1.9
H166.7z M170.9,205.5h-1.6v1.9h1.6V205.5z M189.2,206.1h-3.9l0,0v-1.6h6.4v-6.2h1.7v6.2h6.4v1.6h-4.7v4.4c0,0.7,0.3,1,1,1h1
c1.4-0.2,1-1.8,1.2-3.1c0.6,0.3,1.1,0.5,1.6,0.6c-0.4,2.5,0,3.9-2.6,3.9h-1.7c-1.4,0-2.1-0.7-2.1-2.1V206h-2.6
c0.2,3.3-1.3,5.9-4.7,7.2c-0.2-0.2-0.8-1.1-1.1-1.5C188.3,210.5,189.2,209.1,189.2,206.1z M188.9,203.6c-1.2-1.5-2.1-2.6-2.7-3.3
l1.2-1c0.9,1,1.8,2,2.8,3.1L188.9,203.6L188.9,203.6z M196,203.7l-1.1-1.1c1-1.1,1.9-2.1,2.8-3.3l1.3,1
C198.3,201.1,197.4,202.2,196,203.7z M208.6,200.4v-1.3h6.8v1.3h-1.7v1.9h1.5v10.9H214v-0.9h-3.8v0.9H209v-10.9h1.6v-1.9H208.6
L208.6,200.4z M210.1,203.5v3.3c0.5-0.8,0.8-1.9,0.7-3.3H210.1z M213.5,207.2c-0.6,0-0.9-0.4-1-1.2v-2.5h-0.8c0,1.6-0.3,3-0.9,4.2
c-0.2-0.1-0.4-0.3-0.6-0.5v1.2h3.8v-1.2H213.5z M210.2,209.6v1.6h3.8v-1.6H210.2z M211.7,200.4v1.9h0.8v-1.9H211.7z M214.1,203.6
h-0.7v1.9c0,0.5,0.1,0.7,0.6,0.6h0.2v-2.5H214.1z M215.7,210.4v-1.3h3.2v-0.3l1.7-1.1h-4.2v-1.2h6.2v1.3l-2.1,1.4h2.9v1.3h-3v1.1
c0,1.1-0.4,1.6-1.5,1.6H217c0-0.4-0.1-0.9-0.2-1.3h1.3c0.5,0,0.8-0.2,0.8-0.6v-0.8L215.7,210.4L215.7,210.4z M215.9,201v-1.3h2.8
v-1.3h1.5v1.3h2.9v1.3H215.9z M216.4,205.5v-3.6h5.9v3.6H216.4z M217.8,203.1v1.2h3.3v-1.2H217.8z M234.2,205.8
c-0.8-0.7-1.6-1.4-2.4-2l1-1.1c0.8,0.6,1.6,1.2,2.4,1.9L234.2,205.8z M233.5,213.2l-1.5-0.5c0-0.2,0.1-0.4,0.2-0.8
c0.6-2.1,1.1-3.7,1.4-5c0.5,0.2,1,0.4,1.5,0.6c-0.2,0.8-0.6,2.1-1.1,3.9C233.8,212.2,233.6,212.8,233.5,213.2L233.5,213.2z
 M234.5,201.7c-0.6-0.6-1.4-1.3-2.3-2.1l1-1.1c0.8,0.6,1.7,1.3,2.4,2L234.5,201.7z M236.2,209.9v-1.2h3.6v-1.4h-4.3V206h4.3v-1.3
h-3.5v-1.2h6.6l-0.4-0.2c0.5-0.8,0.9-1.7,1.4-2.6l1.5,0.4c-0.6,1-1,1.8-1.4,2.4h1.5v2.6h1v1.3h-1v3.4H244V210h-2.6v1.3
c0,1.2-0.6,1.9-1.9,1.9c-0.6,0-1.6,0.1-2,0.1c0-0.6-0.1-1.1-0.3-1.4c0.3,0,0.9,0.1,1.7,0.1c0.6,0,1-0.3,1-0.8v-1.1h-3.7V209.9z
 M236,200.5c0-0.2-0.1-0.4-0.1-0.7c-0.1-0.3-0.1-0.5-0.2-0.7c3.5-0.1,6.9-0.2,10-0.4l0.2,1.4C242.5,200.4,239.2,200.5,236,200.5z
 M237.1,203.2c-0.4-0.8-0.7-1.4-0.9-1.8l1.4-0.4c0.2,0.4,0.8,1.4,1,1.8L237.1,203.2L237.1,203.2z M240.3,202.9
c-0.2-0.6-0.5-1.3-0.8-1.9l1.5-0.3c0.3,0.6,0.6,1.2,0.8,1.9L240.3,202.9z M244,204.7h-2.6v1.3h2.6V204.7z M241.4,207.3v1.4h2.6v-1.4
H241.4z M260.8,211.3v1.2h-4.2l0,0v-1.2H260.8z M259.5,205.7h-2.2v3.3l1.7-0.9c0,0.3,0.2,1.1,0.3,1.4c-1.2,0.7-2.4,1.3-3.5,2
l-0.7-1.3l0.7-0.4v-10.2c2.4-0.1,4.7-0.3,6.9-0.6l0.4,1.5c-0.5,0.1-1.4,0.2-2.3,0.2c0,1.5,0,2.6,0.1,3.5h2.3v1.4H261
c0.1,1.7,0.3,4.5,1.1,4.5c0.4,0,0.3-1.5,0.5-2.6c0.4,0.2,0.8,0.4,1,0.4c-0.2,1.5,0,3.7-1.6,3.7C260.9,211.8,259.8,211.2,259.5,205.7
z M259.4,204.2c0-0.8-0.1-1.9-0.1-3.3c-0.4,0-1.6,0.1-2.1,0.1v3.2H259.4L259.4,204.2z M264,213.3v-14.1h5.5v1.5l-1.4,4
c2.1,1.6,2.6,6.1,0,6.4c-0.3,0-1.2,0.1-1.9,0.1c0-0.4-0.2-1.1-0.3-1.6h1.2c2,0,1.1-3.2-0.6-4.7l1.3-4.3h-2.4v12.6H264V213.3z"/>
<g>
<defs>
<path id="v11" d="M69,71.4c-0.2,3.6-4,5.9-5.6,1.8
c-3.2-19.2-3.6-40.9-2.6-60.7c0.7-4.2-8.4-4.2-5.8-8.2c3.8-4.3,19.9,2.9,18.9,8.2C70.9,20,70,63,69,71.4z"/>
</defs>
<clipPath id="v12">
<use xlink:href="#v11"  style="overflow:visible;"/>
</clipPath>
<path class="an1" style="clip-path:url(#v12);stroke-width:13;" d="M58.4,5.7c9.2,4,11.9-1.2,9,8.2s-2.6,53-1.6,57.1"/>
</g>
<g>
<defs>
<path id="v21" d="M38.9,53.6c-23.8,12.3-14.5-1.4-1.2-9.1l8.3-2.4
c0,0,9.3-4.3,10.1-4.3c2.1,0.9,5,5.3,3.5,7.5c-3.9,2.8-8.6,2.5-13.1,3.8L38.9,53.6z M37.7,42c-3,0.8-6.2,2.2-9.3,3.5
c-1.7,0.7-4.1-3-2.8-4.5c1.8-2.2,8-4.6,11.4-5.6c3.9-1.3,12.8-6.1,16.4-4c3,5.6-3.9,5.6-7.4,8.9C46,40.3,37.7,42,37.7,42z
 M36.5,30.9c-8.1,2.5-9.5,2.6-11.3,0.3c-1.6-3.5,14.7-9.3,19-11.3c2.8-0.3,5.1,1.5,7.1,3.7c3.4,4-4.4,3.7-6.6,5.2L36.5,30.9z"/>
</defs>
<clipPath id="v22">
<use xlink:href="#v21"  style="overflow:visible;"/>
</clipPath>
<path class="an2" style="clip-path:url(#v22);stroke-width:9;" d="M27.4,30.1c8.2-4,20-5.4,23.4-8.6"/>
<path class="an3" style="clip-path:url(#v22);stroke-width:9;" d="M25.3,43.8c9-4.4,22.3-9,28.8-10.4"/>
<path class="an4" style="clip-path:url(#v22);stroke-width:10;" d="M24.2,57.9c10.2-8,28.6-13.7,32.8-16.3"/>
</g>
<g>
<defs>
<path id="v31" d="M45,35.6c1.6,2.8,0.5,11.2,3,29.9c0.5,3.6-3.4,4.4-4.3,4
c-4.4-2.2-3.8-10.8-4.8-15.9c-2-12.2-1.4-26.6-5.5-38.2c-6.3-7.3,5.1-6.4,9.2-3.7c4.4,2,1.8,5.1,1.6,8.2
C44.2,19.9,44.5,34.6,45,35.6z"/>
</defs>
<clipPath id="v32">
<use xlink:href="#v31"  style="overflow:visible;"/>
</clipPath>
<path class="an5" style="clip-path:url(#v32);stroke-width:11;" d="M32.6,12c10.9,5.3,7.4,0.3,7.2,13.1c-0.1,8,0,21.6,6.2,44.4"/>
</g>
<g>
<defs>
<path id="v41" d="M84.7,50.6c-4.9-0.8-10.8,2.9-10.8-0.5
c0-4,0.6-4.9,4.3-6.6c11.7-5.3,11.4-1.2,14.6-3.1c4.3-2.6,9.6-2.2,11.1,2.5C102.4,45.4,88.9,51.3,84.7,50.6z M87.7,37.6
c-5.6-0.2-13.4,3.8-12.5-2.8c0.4-2.5,12.1-3.8,17.6-5.5c2.1-0.7,6.2,0.5,7.1,1C102.1,35.5,92.1,37.7,87.7,37.6z M84,27
c-13.9,2.8-10.9-4.9,2.1-7.7c3.3-0.7,12.1-2.7,13.5-1.6c2,1.6,4.8,4,3.8,6.3c-2.2,2-6.6,0.5-9.9,1.7C91.3,26.4,86.6,26.4,84,27z"
/>
</defs>
<clipPath id="v42">
<use xlink:href="#v41"  style="overflow:visible;"/>
</clipPath>

<path class="an6" style="clip-path:url(#v42);stroke-width:9;" d="M78.3,24.8c5.9-2,17.2-4.6,22.9-3.3"/>

<path class="an7" style="clip-path:url(#v42);stroke-width:9;" d="M77.3,36.6c9.2-2,16.4-4.4,20.9-4"/>

<path class="an8" style="clip-path:url(#v42);stroke-width:10;" d="M77.3,48.2c4.2-1.3,22.8-5.8,23.6-6.3"/>
</g>
<g>
<defs>
<path id="v51" d="M85.2,60.2c-1.4-6.3,0.4-16.4,0.6-20.1
c0.2-4.7,1.5-27.1-1.2-30.1c-1-1.2-0.4-2.6,0.6-3.7c2.9-3.4,10.2,2.9,11.2,4c1.6,2-1.3,5.1-1.3,7.4c0,1.6,1.3,3.3-0.4,7.8
c-1.7,4.5-0.7,7.9-1.2,11c-1.7,9.2,0.5,14.3-3,23.6C89.4,63.1,86.3,65.1,85.2,60.2z"/>
</defs>
<clipPath id="v52">
<use xlink:href="#v51"  style="overflow:visible;"/>
</clipPath>

<path class="an9" style="clip-path:url(#v52);stroke-width:11;" d="M85.9,7.6c10.9,5.3,4,2.6,3.8,15.4c-0.1,8,0,14.8-2,39.2"/>
</g>
<g>
<defs>
<path id="v61" d="M87.1,82.8c3.5-2.9,5.8-5.4,11.9-13.7
c-16.3-1.7-39-0.4-68.7,20.8c-4,2.9-5.5,2.6-7.8-1.6C19.8,83.3,9,58.9,4.7,54.7c-3.8-3.7-1.2-8.2,1.1-7.2
c3.6,1.5,9.8,1.9,10.9,5.6c6,18.8,7.1,24,10.6,26.1c7.9-3.6,28.6-13.8,46.8-17.7c12.8-2.8,24.3-0.7,29.3,1.1
c5.6-9.8,15.5-21.7,9.6-29c-5.2-7.6,9.1-0.5,11.1,0.5c5.8,0.6,8.4,4,9.2,8.8c1.4,8.4-1.8,6.4-17,24.1
c-8.4,9.8-15.6,15.9-21.2,18.9C87.9,89.7,83.2,86,87.1,82.8z"/>
</defs>
<clipPath id="v62">
<use xlink:href="#v61"  style="overflow:visible;"/>
</clipPath>

<path class="an10" style="clip-path:url(#v62);stroke-width:12;" d="M6.3,49.8c10.3,5.1,14.5,35.9,19.1,36.9c4.6,1,26-23.5,72.2-23.3"/>
<path class="an11" style="clip-path:url(#v62);stroke-width:19;" d="M116.4,32.9c17.1,12.3,7.7,10.8,1.2,20c-5.2,7.4-12.1,13.2-26.4,29.2"/>
</g>
<g>
<defs>
<path id="v71" d="M43.9,111.2C48,107.9,60.8,98.9,64,96.4
c-2.3-3.9-28.8,11.8-25-1.8c0.1-0.4,29-13.2,33.8-12.9c14,0.9,22.3-1.5,22.3,4.2c0,3.8-0.3,9.5-5,9.3
c-7.6-1.1-35.7,10.5-42.1,16.7C41,118.7,40.7,113.8,43.9,111.2z"/>
</defs>
<clipPath id="v72">
<use xlink:href="#v71"  style="overflow:visible;"/>
</clipPath>

<path class="an12" style="clip-path:url(#v72);stroke-width:13;" d="M45.4,112c16.9-17.1,45.1-23.2,45.1-23.2c-19.7-8.2-34.3,6.4-46.7,8.7"/>
</g>
<g>
<defs>
<path id="v81" d="M48,111.9c10.7-2.4,41.9-13,54.8-3.6
c3.7,2.7,1,8.5-1.1,8.2c-1.8-0.3-17.7,6.1-16.9,7.8c0.6,1.3,2.9,0.8,3.3,2c0.4,1.9-1.5,6.3-4,6.1c-4.4,0.1-21.5,5.2-25.7,8.1
c0.4,2.2,1.2,3.1-2.8,2.8C45,142.7,38,121.1,33.4,116.1c-2.2-2.4,0.5-6.6,2-6.1C37.6,110.5,45.2,111.6,48,111.9z M49.7,119.7
c0.9,2.9,4.7,10.2,5.8,13.1c5.6-1.9,24.9-15.9,28.7-20C89,107.6,63.4,112,49.7,119.7z"/>
</defs>
<clipPath id="v82">
<use xlink:href="#v81"  style="overflow:visible;"/>
</clipPath>

<path class="an13" style="clip-path:url(#v82);stroke-width:13;" d="M35.7,112.8c5.9,0.7,6.5,5.6,8.3,10.4c2,5.4,5.2,10.2,8.3,18.3"/>
<path class="an14" style="clip-path:url(#v82);stroke-width:13;" d="M44.8,115.3c8-2.4,33.3-11.1,49.7-7.1c21.3,5.3-18.4,6-30.3,18.9"/>
<path class="an15" style="clip-path:url(#v82);stroke-width:13;" d="M53.6,137c4.3-2.9,26-11.1,34.4-8.8"/>
</g>
<g>
<defs>
<path id="v91" d="M120.6,165.6c3,2,0.1,8.8-2.7,10c-2.1,0.9-4-1-11.2-3.6
c-22.8-8.3-54.6-3.3-76.4,7.7c-6.8,3.6-17-13.3-12.7-13.1c1.6,0,2.4,2.3,7.6,2.1c9.4-0.3,22.5-5.3,32.4-6.2
c16.9-11.6,24.3-17.3,22.8-19c-2.9-3.2-15.6,4.1-24.3,14.5c-0.7,0.8-0.9,2.5-1.1,3.3c-3,1.4-9.4-3-10.7-5.8
c-0.9-2.3-5.5-12.1-0.1-12.6c1.2-0.1,4.2,8.6,11.1,5.5c26.1-11.7,24.1-12.8,32.4-10.2c11.3,3.5,7.6,2.8,7.8,6.1
c0.3,4.7-1.6,2.6-25.8,15.9C86.9,158.1,103.5,159.8,120.6,165.6L120.6,165.6z"/>
</defs>
<clipPath id="v92">
<use xlink:href="#v91"  style="overflow:visible;"/>
</clipPath>

<path class="an16" style="clip-path:url(#v92);stroke-width:13;" d="M43.8,143c0,5.6,5.8,17.3,11.1,11.5c5.7-6.3,17.9-15.3,25.3-15.3c29.4,0.1-6.4,11.1-19.5,18"/>

<path class="an17" style="clip-path:url(#v92);stroke-width:13;" d="M18.7,166.9c13.5,23.3,22.3-18.8,99.6,3.7"/>
</g>
<g>
<defs>
<path id="v101" d="M211.4,78.7c-5.2-10.1-1.7-21-3.6-36.4
c-1.1-9.1,0.1-21.2-2.8-23c-2.5-1.5-5.5-7.6-2.1-9.1c4.8-2.1,33.1,12.1,28.1,18.4c-7.7,9.8-8.8,42.2-12,47.9
C216.8,80.4,213.9,83.6,211.4,78.7z"/>
</defs>
<clipPath id="v102">
<use xlink:href="#v101"  style="overflow:visible;"/>
</clipPath>

<path class="an18" style="clip-path:url(#v102);stroke-width:24;" d="M208.4,13.3c29.3,14.3-2.5,1.2,6.6,60.3"/>
</g>
<g>
<defs>
<path id="v111" d="M221.2,63.9c5.7-5.4,15.3-13.1,19.1-20.4
c2.2-3-1-8.2,3.7-8.2c4.1,0.4,15.5,4.7,14.6,9.7c-2.7,3-33.1,22.4-37.3,23.7S217.8,67.2,221.2,63.9z M208.1,49.7
c-9.3,5.3-10.4,22.1-17.9,19.9c-4.7-1.6-14.9-11.4-9.1-16.7c2.4,0,4.3,4.4,7.2,4.3c6.5-0.9,10-8.9,19.5-14.9
C212.2,39.5,213.2,46.8,208.1,49.7z"/>
</defs>
<clipPath id="v112">
<use xlink:href="#v111"  style="overflow:visible;"/>
</clipPath>

<path class="an19" style="clip-path:url(#v112);stroke-width:13;" d="
M180.6,56.7c14.8,18.6,10.4-3.8,29-11.7c12.8-5.5,23.6-13.1,28.2-11.2c32.9,14.3,9.4,2.1-19.4,34.4"/>
</g>
<g>
<defs>
<path id="v121" d="M232.6,70.7c1.8-2.2,2.6-3.8,5.2-4c9.6-0.2,30,10.4,8.9,14.7c-5.6,0.9-10.7,1.1-20.9,15.8
c4.5,2.7,17.5,11.8,14.1,17.7c-5.3,7.1-16.3,21.9-13.1,31c3.1,6.3,41.6,9.2,45.4,3.5c2.8-8.2,0.6-25.1-8.3-31.5l3.3-1.3
c5.5,2.4,21.5,23.3,24.9,26.6l0,0c8.6,6.3,9.5,15.7-0.8,21.9c-3.7,0.5-13.8,0.9-30.4,1.1c-25.2-1.1-28.9,4.3-41.1-7.6
c-8.2-11.7-6-8.6-1.5-26.6c2.3-10.4,6-21.5,2.2-28.8c-21,22.1-37.5,61.5-71.1,63.3l-0.5-3.3c26.6-15.4,45.1-51.3,65.4-73
c-15.1,3.3-37.2,23.4-51.3,8.9c-1.8-1.5-5.2-5.8-1.7-6.8c6.7,1.3,13,4.1,20.6,0C219,73.8,229.5,74.5,232.6,70.7z"/>
</defs>
<clipPath id="v122">
<use xlink:href="#v121"  style="overflow:visible;"/>
</clipPath>

<path class="an20" style="clip-path:url(#v122);stroke-width:15;" d="
M160.4,92.7c22.8,21.5,64.6-27,83.6-21.3c13.4,4.1-3.8-1.1-21.7,18.3c-27.6,29.8-41.7,67.4-74.6,75.5"/>

<path class="an21" style="clip-path:url(#v122);stroke-width:24;" d="
M223.1,98.4c14.3,16.9,9.1,13.8-2,44.9c-7.3,20.4,51.2,21.6,67.9,10.4c-6.3-11.7-8.6-21.3-25.4-37.1"/>
</g>
</svg>


<div :class="`t1 ${cls}`" data-aos="zoom-in" data-aos-delay="400">{{title}}
</div>
      <div class="t2"  data-aos="zoom-in" data-aos-delay="400">37｜47｜70坪</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
 // overflow: hidden;
  position: relative;
  // background: url("./s1/bg.jpg") center;
  // background-size: 100% auto;
}
.bg{
  position: absolute;
  width: 100%;height:auto;
  top:calc(50% + (-270 - 1080 * 0.5) * 100vw / 1920);
  left:0;object-fit: cover;}
.t0{
  position: absolute;
  width: 100%;height:auto;
  top:0;
  left:0;object-fit: cover;
   opacity: .5;
  }
.img0{
    position: absolute;left:size(-120);width:size(820);
  bottom:size(-520);transform-origin: 0% 50%;
  }

  .img1{position:absolute; width: 100%;}
.img2{position:absolute; width: 100%;
   filter: blur(size(1));
}

.imglt{position:absolute;top: size(-37);left:size(-335);transform-origin: 0% 0%; width: size(1040);
 > div{
    transform: rotate(-20deg);}
 img{left: 0;top: 0;}

}
.imgrt{position:absolute;top:size(12);right: size(-640);transform-origin: 100% 0%;width: size(1170);
 > div{transform: rotate(26deg);}
 img{right: 0;top: 0;}

}
.imglb{position:absolute;bottom:size(-5);left:size(-760);transform-origin: 0% 0%; width: size(1550);z-index: 2;

 > div{
    transform: rotate(13deg);}
 img{left: 0;bottom: 0;}

}
.imgrb{position:absolute;bottom:size(30);right: size(-800);transform-origin: 100% 0%;width: size(1550);z-index: 2;
 > div{transform: rotate(-21deg);}
 img{right: 0;bottom: 0;}

}
.tree{position:absolute;bottom:size(60);left: 0;width: 100%;
.tree1{position: absolute;right:size(210);bottom:size(0);width:size(210);}
.tree2{position: absolute;left:size(380);bottom:size(-60);width:size(135);}
.tree3{position: absolute;left:size(212);bottom:size(-80);width:size(233);}
.tree4{position: absolute;right:size(464);bottom:size(-54);width:size(273);}
}
.cloud{position:absolute;bottom:0;left: 0;width: 100%;
 > div{transform: scaleX(-1);}
.cloud1{position: absolute;right:size(72);bottom:size(226);width:size(180);
      animation: cloud 3s -.3s linear infinite alternate;
      transform: translateX(10%);}
.cloud2{position: absolute;left:size(133);bottom:size(208);width:size(156);
      animation: cloud 3s -.8s linear infinite alternate;
      transform: translateX(-30%);}
.cloud3{position: absolute;right:size(440);bottom:size(152);width:size(250);
      animation: cloud 3s -1.5s linear infinite alternate;
      transform: translateX(15%);}
.cloud4{position: absolute;right:size(656);bottom:size(107);width:size(242);
      animation: cloud 3s -1s linear infinite alternate;
      transform: translateX(-20%);}
.cloud5{position: absolute;right:size(417);bottom:size(100);width:size(156);
      animation: cloud 3s linear infinite alternate;
      transform: translateX(-25%);}
.cloud6{position: absolute;right:size(14);bottom:size(285);width:size(250);
      animation: cloud 3s -.5s linear infinite alternate;
      transform: translateX(-10%);}
}
@keyframes cloud{
    to{
      transform: translateX(0%);
    }
}


.txt{
  position: relative;
  // top:calc(50% + (253 - 540) * 100vw / 1920);
 //  left:size(-260);
  top:calc(50% + (423 - 1080 * 0.5) * 100vw / 1920);
  font-size: size(36);
  line-height: 1.5;
  color: #fff;
  text-align: center;
  width:size(800);
    letter-spacing:0em;
    padding: 0;
  font-weight: 300;
  margin: auto;

  //filter: drop-shadow(0 0 7px #eff);
.logo{
  width:size(310);filter: drop-shadow(0.3vw 0.2vw 0.1vw #000c);
  margin: 0 auto 0em;
  .st0{fill:#FFF;stroke-width:0;}
	path{fill:none;stroke:#FFF;stroke-linecap:round;stroke-miterlimit:10;}
	.an1{stroke-dasharray:74;stroke-dashoffset:74;animation:letterDraw 0.1258s 0s forwards;}
	.an2{stroke-dasharray:26;stroke-dashoffset:26;animation:letterDraw 0.0442s 0.1258s linear forwards;} 
	.an3{stroke-dasharray:31;stroke-dashoffset:31;animation:letterDraw 0.0527s 0.17s forwards;}
	.an4{stroke-dasharray:37;stroke-dashoffset:37;animation:letterDraw 0.0629s 0.2227s forwards;}
	.an5{stroke-dasharray:64;stroke-dashoffset:64;animation:letterDraw 0.1088s 0.2856s forwards;}
	.an6{stroke-dasharray:24;stroke-dashoffset:24;animation:letterDraw 0.0408s 0.3944s forwards;}
	.an7{stroke-dasharray:22;stroke-dashoffset:22;animation:letterDraw 0.0374s 0.4352s forwards;}
	.an8{stroke-dasharray:25;stroke-dashoffset:25;animation:letterDraw 0.0425s 0.4726s forwards;}
	.an9{stroke-dasharray:59;stroke-dashoffset:59;animation:letterDraw 0.1003s 0.5151s forwards;}
	.an10{stroke-dasharray:120;stroke-dashoffset:120;animation:letterDraw 0.204s 0.6154s forwards;}
	.an11{stroke-dasharray:67;stroke-dashoffset:67;animation:letterDraw 0.1139s 0.8194s forwards;}
	.an12{stroke-dasharray:101;stroke-dashoffset:101;animation:letterDraw 0.1717s 0.9333s forwards;}
	.an13{stroke-dasharray:35;stroke-dashoffset:35;animation:letterDraw 0.0595s 1.105s forwards;}
	.an14{stroke-dasharray:99;stroke-dashoffset:99;animation:letterDraw 0.1683s 1.1645s forwards;}
	.an15{stroke-dasharray:37;stroke-dashoffset:37;animation:letterDraw 0.0629s 1.3328s forwards;}
	.an16{stroke-dasharray:98;stroke-dashoffset:98;animation:letterDraw 0.1666s 1.3957s forwards;}
	.an17{stroke-dasharray:105;stroke-dashoffset:105;animation:letterDraw 0.1785s 1.5623s forwards;}
	.an18{stroke-dasharray:69;stroke-dashoffset:69;animation:letterDraw 0.1173s 1.7408s forwards;}
	.an19{stroke-dasharray:134;stroke-dashoffset:134;animation:letterDraw 0.2278s 1.8581s forwards;}
	.an20{stroke-dasharray:237;stroke-dashoffset:237;animation:letterDraw 0.4029s 2.0859s forwards;}
	.an21{stroke-dasharray:174;stroke-dashoffset:174;animation:letterDraw 0.2958s 2.4888s forwards;}

	@keyframes letterDraw {
	to { stroke-dashoffset: 0;}
	}
}

  
.t1{
    display: block;
  font-size: 1.27em;
  font-weight: 700;
  margin: 0;
    letter-spacing:0.07em;
  color: #E0C38F;
    }
  .t2{
    display: inline-block;
  font-size: 1em;
  font-weight: 700;
  border: 1px solid currentColor;
  margin:0.5em 0 0 0;
  padding: 0 .9em 0.1em .9em;
    }

}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
    min-height: sizem(604);
    max-height: sizem(604);
    height: calc(100vh - 63px);
  }
.bg{
  position: absolute;
  width: 100%;height: sizem(604);
  top:calc(50% + (-72 - 604 * 0.5) * 100vw / 375);
  left:0;object-fit: cover;}

.imglt{top: sizem(-80);left:sizem(-200); width: sizem(520);}
.imgrt{top:sizem(-20);right: sizem(-380);width: sizem(580);}
.imglb{bottom:sizem(-2);left:sizem(-540);width: sizem(690);opacity: .5;}
.imgrb{bottom:sizem(5);right: sizem(-550);width: sizem(750);}
.tree{bottom:sizem(0);
.tree1{right:sizem(-26);bottom:sizem(20);width:sizem(85);}
.tree2{left:sizem(-32);bottom:sizem(-10);width:sizem(109);}
.tree4{right:sizem(60);bottom:sizem(0);width:sizem(105);}
}
.cloud{
.cloud2{left:sizem(76);bottom:sizem(80);width:sizem(62);}
.cloud4{right:sizem(34);bottom:sizem(107);width:sizem(99);}

}
.txt{
  font-size: sizem(24);
  top:calc(50% + (160 - 302) * 100vw / 375);
  width:sizem(300);
.logo{
  width:sizem(200);filter: drop-shadow(1vw 0.7vw 0.4vw #000c);
  margin: 0 auto 0.6em;
}
.t1{
  &.s8{
  font-size: .8em;}
    }
.t2{
  margin:0.8em 0 0 0;
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
  components: {},

  props: ['title', 'cls'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
    }
  },

  methods: {
    init() {},},

  mounted() {},

  created() {},

  computed: {},
}
</script>
