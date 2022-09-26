<template>
  <div class="section1">
    <!-- 
    <img src="./s1/mo.jpg" class="t0" />
   
   -->
   <div class="img">
    <div class="start">
    <img src="./s1/start1.png" class="start1" />
    <img src="./s1/start1.png" class="start2" />
    <img src="./s1/start2.png" class="start3" />
    <img src="./s1/start1.png" class="start4" />
    </div>
    <img src="./s1/1.png" class="cloud" data-aos="zoom-in" data-aos-delay="0" />
    <bear class="bear" data-aos="zoom-in" data-aos-delay="200" />

    

    </div>
    <div class="txt" data-aos="zoom-in" data-aos-delay="0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 415 250" class="logo">
        <path fill="#FFF" d="M45.7,243.6H30.9V222h3.3v19.1h11.5V243.6z M76.2,227.7c10.1-0.5,10.3,17.1-0.2,16.3C65.5,244.3,65.9,227.1,76.2,227.7z M76.1,241.6c6.1,0.5,6-11.7,0-11.4C69.9,229.6,69.9,242.1,76.1,241.6z M121.4,228l-6.2,15.5h-3.6l-6-15.5h3.5c3.1,9.5,3.6,10,4.3,13.4h0.1c0.9-3.3,1.4-4.1,4.5-13.4H121.4z M155.6,238.8l3.4,0.5c-2.5,7.5-16.7,5.6-15.9-3.3c-0.4-11.8,17.4-10.9,15.8,0.8h-12.5C145.9,242.1,154.2,243.6,155.6,238.8z M146.4,234.6h9.3C155.9,228.3,146.2,228.5,146.4,234.6z M209.6,237.1l3.4-0.7c2.4,12.2,20.7-0.1,4.1-2.9c-4.7-1-6.9-3-6.7-6c0-7.8,15.9-7.7,16.4,0.1l-3.3,0.7c-0.1-4.7-9.3-5.4-9.6-0.8c0.3,5,14.7,2.9,13.5,10.3C227.7,246.4,209.9,246,209.6,237.1z M265.4,243.5h-3.2v-2.6c-2.8,5.2-11,3.8-11-3.1V228h3.2v9.5c0,6.1,7.8,5,7.8-0.4V228h3.2V243.5z M304,243.6h-3.2v-9.3c0-5.8-7.7-5.1-7.8,0.2v9.1h-3.2V228h3.2v2.7c3.1-5.1,11-4.2,11,3.2V243.6z M342.5,243.6h-3.2v-9.3c0-5.9-7.7-5.1-7.8,0.2v9.1h-3.2V228h3.2v2.7c3.1-5.1,11-4.1,11,3.2V243.6z M371.8,243l-6.6-15h3.5c0.5,1.4,4.3,11.3,4.5,12.5h0.1c0.3-1.1,3.8-11.1,4.2-12.5h3.5c-3.7,9.1-6.1,14.5-6.8,16.3c-2,5.2-4.7,6.2-8.1,4.8l-0.2-2.3C369.2,248.1,370.7,246.3,371.8,243z"/>
        <path d="M187.6,196.7c-30.3-8.8-62.6-29.5-80.9-51.5c1.1,4.3,1.7,10.5,1.7,15.2v36.5c0.7,8.5-16.3,8.4-16,0v-35.9c0-4.7,0.9-10.9,1.9-15.6c-18.8,21.1-47.2,40.6-77.7,51c-9.9,4.5-16-12.4-6-15.4c26.7-8.1,53.2-23.5,70.7-39.9H13.1c-7.8,0.6-8.1-14.8,0-14.3h79.2v-10c-0.3-8.4,16.7-8.5,16,0v10h82c8.1-0.6,7.9,15,0,14.3h-70.9c19.2,17.3,49.1,33.3,73.9,39.5C204.2,183.7,198.5,201.4,187.6,196.7z M409.3,73.9h-54.5V60.2h42.7c7.1-0.1,7.1-13.3,0-13.2h-42.7V33.8h50.4c7.5-0.1,7.3-13.6,0-13.5h-50.4V8.6c0.7-7.3-15.8-7.5-15.2,0v11.7h-45.9c-7-0.1-7.2,13.4,0,13.5h45.9V47h-40.6c-7.1-0.1-7.2,13.2,0,13.2h40.6v13.7h-50c-7.4-0.4-6.9,13.6,0,13.5c0,0,119.6,0,119.6,0C416.4,87.5,416.9,73.6,409.3,73.9z M280.1,26.9c0-4.1-3.5-7.6-7.6-7.6c-12.9,0-25.7,0-38.6,0c-4.1,0-7.6,3.5-7.6,7.6c0,20.1,0,40.3,0,60.4c0,4.1,3.5,7.6,7.6,7.6c6.3,0,12.5,0,18.8,0c9.8,0,9.8-15.2,0-15.2c-3.7,0-7.5,0-11.2,0c0-15.1,0-30.2,0-45.3c7.8,0,15.6,0,23.4,0v143.7c-7.8,0-15.6,0-23.4,0c0-22.1,0-44.2,0-66.3c0-9.8-15.2-9.8-15.2,0c0,24.6,0,49.3,0,73.9c0,4.1,3.5,7.6,7.6,7.6c12.9,0,25.7,0,38.6,0c4.1,0,7.6-3.5,7.6-7.6V26.9z M77.4,103.5c15.8,0,31.6,0,47.4,0c4.1,0,7.6-3.5,7.6-7.6c0-22.4,0-44.8,0-67.1c0-4.1-3.5-7.6-7.6-7.6c-9.5,0-19,0-28.5,0c1.3-4,2.7-7.9,4-11.9C103.3,0,88.7-4,85.6,5.2c-1.8,5.3-3.6,10.6-5.3,16c-1,0-1.9,0-2.9,0c-4.1,0-7.6,3.5-7.6,7.6c0,9.7,0,19.4,0,29.2c0,4.1,3.5,7.6,7.6,7.6c9.2,0,18.4,0,27.7,0c9.8,0,9.8-15.2,0-15.2c-6.7,0-13.4,0-20.1,0c0-4.7,0-9.3,0-14c10.7,0,21.5,0,32.2,0c0,17.3,0,34.7,0,52c-10.7,0-21.5,0-32.2,0c0-3.4,0-6.7,0-10.1c0-9.8-15.2-9.8-15.2,0c0,5.9,0,11.8,0,17.7C69.8,100,73.3,103.5,77.4,103.5z M141.3,106.7c16.4,0,32.8,0,49.2,0c4.1,0,7.6-3.5,7.6-7.6c0-8.2,0-16.5,0-24.7c0-9.8-15.2-9.8-15.2,0c0,5.7,0,11.4,0,17.1c-8.5,0-17,0-25.6,0c10-12.1,20.1-24.3,30.1-36.4c4-4.9,1.6-12.9-5.4-12.9c-7.9,0-15.7,0-23.6,0c4.9-8.1,9.9-16.2,14.8-24.3c5.1-8.3-8-16-13.1-7.6c-7.3,11.9-14.6,23.8-21.8,35.7c-3,4.9,0.9,11.4,6.5,11.4c7,0,14,0,21,0c-10,12.1-20.1,24.3-30.1,36.4C131.9,98.6,134.3,106.7,141.3,106.7z M57.3,106.7c4.1,0,7.6-3.5,7.6-7.6c0-8.2,0-16.5,0-24.7c0-9.8-15.2-9.8-15.2,0c0,5.7,0,11.4,0,17.1c-8.5,0-17,0-25.6,0c10-12.1,20.1-24.3,30.1-36.4c4-4.9,1.6-12.9-5.4-12.9c-7.9,0-15.7,0-23.6,0c4.9-8.1,9.9-16.2,14.8-24.3c5.1-8.3-8-16-13.1-7.6C19.9,22.2,12.6,34.1,5.3,45.9c-3,4.9,0.9,11.4,6.5,11.4c7,0,14,0,21,0c-10,12.1-20.1,24.3-30.1,36.4c-4,4.9-1.6,12.9,5.4,12.9C24.6,106.7,40.9,106.7,57.3,106.7z M384.9,187.8h-24.4c-8.8-0.1-8.8,13.7,0,13.6h24.7c7.7,0,13.9-6.2,13.9-13.9v-76c0-7.7-6.2-13.9-13.9-13.9h-70.9c-7.7,0-13.9,6.2-13.9,13.9v16.8c0,7.7,6.2,13.9,13.9,13.9h41.6v10.6h-47.3c-4.5,0-8.1,3.6-8.1,8.1v33.7c-0.1,8.9,13.8,8.9,13.7,0v-28h48.8c3.5,0,6.3-2.8,6.3-6.3v-25.1c0-3.5-2.8-6.3-6.3-6.3h-48.8V111h70.8V187.8z"/>
      </svg>
      <div class="t1" data-aos="zoom-in" data-aos-delay="200">一站到新板</div>
      <div class="t2" data-aos="zoom-in" data-aos-delay="400">鈔輕1088萬起 買精品2-3房</div>
      <div class="t3" data-aos="zoom-in" data-aos-delay="600">（詳洽現場說明）</div>
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
  background-image: linear-gradient(0deg, #218AC8 0%, #3191B8 8%, #7EB373 45%, #AEC848 72%, #C1D138 85%);
  background-size: 100% auto;
  &::before{
    content: "";
    position: absolute;
    height: size(670);
    left: 0;
    right: 0;
    top: calc(50% + (100 - 540) * 100vw / 1920);
    background: radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0.515717) 34.37%, rgba(255, 255, 255, 0.307292) 58.85%, rgba(255, 255, 255, 0.108914) 77.08%, rgba(255, 255, 255, 0) 100%);
  }
}
.start{
  position: absolute;
  top:50%;left:0;
  transform:translateY(1vw);
  animation: start 4s 1s linear alternate infinite;
  .start1{
    position: absolute;
    top:size(230 - 540);left:size(222);
    width:size(63);
  transform:translateY(10%);
  animation: start 4s 1s linear alternate infinite;
  }
  .start2{
    position: absolute;
    top:size(170 - 540);left:size(760);
    transform:rotate(-30deg);
    width:size(63);
  }
  .start3{
    position: absolute;
    top:size(267 - 540);left:size(885);
    width:size(50);
  transform:translateY(20%);
  animation: start 4s 1s linear alternate infinite;
  }
  .start4{
    position: absolute;
    top:size(690 - 540);left:size(1615);
    width:size(100);
  transform:translateY(15%);
  animation: start 4s 1s linear alternate infinite;
  }
 // transform:translateY(10%);
 // animation: start 2s 1s ease-in-out alternate infinite;
  
  @keyframes start{
    to{
      transform:translateY(0);
    }
}
  }
.cloud{
  position: absolute;
  top:calc(50% + (450 - 540) * 100vw / 1920);
  left:size(235);
  width:size(705);
}
.bear{
  position: absolute;
  left: size(400);
  top:calc(50% + (300 - 540) * 100vw / 1920);
  width: size(380);
}
.t0{
  position: absolute;
  width: 100%;height:auto;
  top:0;
  left:0;object-fit: cover;
  opacity: .3;
  }


.txt{
  position: relative;
 //  left:size(-260);
 top:calc(50% + (344 - 1080 * 0.5) * 100vw / 1920);
  font-size: size(39);
  line-height: 1.5;
  color: #fff;
  text-align: center;
 // width:size(850);
    letter-spacing:0.02em;
    margin: auto 0 auto auto;
  width:size(1345);
  font-weight: 600;
  filter: drop-shadow(0 0.1em 0.1em #00000026);

.logo{
  position: relative;
  margin:0 auto 0em;
  width:size(414);
  fill: #CA2458;
  }
  
  .t1{
  font-size:2.46em;
  color:#FF0;
  font-weight: 700;
    }
  .t2{
  font-size:1em;
  font-weight: 700;
  margin: .1em 0 .3em 0;
    }
  .t3{
  font-size:.5em;
  font-weight: 700;
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
  &::before{
    top:calc(50% + (60 - 604 * .5) * 100vw / 375);
    height: sizem(200);
  }
  }
.start{
  transform:translateY(3vw);
  .start1{
    top:sizem(430 - 604 * .5);
    left:sizem(30);
    width:sizem(23);
  }
  .start2{
    top:sizem(400 - 604 * .5);
    left:sizem(230);
    width:sizem(23);
  }
  .start3{
    top:sizem(440 - 604 * .5);
    left:sizem(275);
    width:sizem(20);
  }
  .start4{
    top:sizem(200 - 604 * .5);
    left:sizem(310);
    width:sizem(27);
  }


}
  
.cloud{
  position: absolute;
  left:sizem(10);
  top:calc(50% + (445 - 604 * .5) * 100vw / 375);
  width:sizem(265);
  font-size: sizem(9);
}
.bear{
  right:auto;
  left:sizem(80);
  top:calc(50% + (390 - 604 * .5) * 100vw / 375);
  width: sizem(140);
}
.txt{
  width:100%;
  font-size: sizem(21);
  top:calc(50% + (115 - 604 * .5) * 100vw / 375);
  padding: 0;
.logo{
  width:sizem(210);
  margin:0 auto -0.2em;
  }
}


}
</style>
<script>
// @ is an alias to /src
import info from '@/info'
import { isPC, isMobile, isTablet } from '@/utils'
 import bear from './bear.vue'

export default {
  name: 'section1',
  components: {
    bear,
  },

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
