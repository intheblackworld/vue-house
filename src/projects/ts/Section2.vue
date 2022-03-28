<template>
  <div class="section2">
    <img src="./s1/bg.png" :alt="`${info.caseName}_b`" class="bg">
    <div class="tree1">
    <img src="./s2/tree1.png" :alt="`${info.caseName}_tree`">
    <img src="./s2/tree2.png" :alt="`${info.caseName}_tree`">
    </div>
    <div class="txt1">
    <div class="title1"  data-aos="zoom-in-up">新莊地王 席席爭藏</div>
    <div class="title2"  data-aos="zoom-in-up" data-aos-delay="200"><span>3/26 公開銷售</span></div>
    </div>
    <div class="txt2" data-aos="flip-up" data-aos-delay="300">
    <div class="title1">特點:</div>
<ol class="desc" >
  <li>近3000坪 壯闊地王角地</li>
  <li>中正路 、新泰路 繁華雙大道</li>
  <li>新莊捷運站290米</li>
  <li>新莊運動公園230米</li>
  <li>新莊行政金融中心</li>
  <li>新莊最市心 百米新帝標</li>
</ol>
<ol class="desc" start="7">
  <li>拔高103米-新古典石材外觀樓群</li>
  <li>烈震不倒的CFT鋼柱結構 大量制震系統</li>
  <li>挑高7.8米飯店式門廳、挑高4.2米房間</li>
  <li>千坪中庭花園、 VIP休閒俱樂部</li>
  <li>超寬8.6米-ETC車道</li>
  <li>北市才有的頂級建材及智慧住宅</li>
      </ol>
  <!--  <div class="title2">※活動辦法-泰舍至善元接待中心現場保有修改權利</div> -->
    </div>
</div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2{
  width: 100%;
 //height: size(957);
  position: relative;
  margin: 0;
 // background: url("./s1/bg2.jpg") center;
  background-size: cover;
  &::before{content: "";width:100%;background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 50%,rgba(0,0,0,0) 100%);
  height: size(2000);
  position: absolute;
  bottom:size(2000 * -.7);left: 0;
  }
}

.bg {
  @include img_c_pc(1920,230);width: 100%;
}
.tree1{
  @include img_l_pc(1500,300,-100);
  img{width: 100%;
  animation: tree	5s infinite alternate;
  transform: skewY(2deg);
  transform-origin: 0% 50%;
  position: relative;
  z-index: 2;
  &:last-child{position: absolute;top: 0;
  z-index: 4;left: 0}
  }
}
.tree2{
  @include img_r_pc(1515,200,-1000);
  transform:rotate(35deg);
  img{width: 100%;
  animation: tree	5s infinite alternate;
  transform: skewY(2deg);
  transform-origin: 100% 50%;}}
  
@keyframes tree {
  to { transform: skewY(3deg);}
}
.txt1{
  margin: 1.5em auto -1em auto;
  font-size:size(48);
  text-align: center;
  position: relative;
  z-index: 4;
.title1{
  font-weight: 700;
  color: #000;
  padding: 0 0 .8em 0;
  width: 19.925em;//1052
  height:8.391em;//443
  background: url("./s2/title1bg.png") no-repeat center;
  background-size: cover;
  display: flex;align-items: center;justify-content: center;
  margin: auto;
  font-size: 1.1em;
  letter-spacing: .1em;

}
.title2{
  @include div_c_pc(722,155,290);
  width: 7.92em;
  height:1.7em;
  font-weight: 700;
  padding: .35em 0 0 0;
  font-size: 1.9em;
  &::before{content: "";
  position:absolute;z-index: -1;top: 0;
  left: 0;width: 100%;
  height: 100%;
  background: #590000;
  border-radius: .85em;
  }
  span{
  background: linear-gradient(to right, #b07515 1%,#f5d77f 14%,#ffffd7 26%,#f5d77f 36%,#b07515 49%,#f5d77f 61%,#ffffd7 74%,#f5d77f 84%,#b07515 100%);
  background-clip: text;
  color: transparent;

  }
}
}

.txt2{
  margin:0em auto;
  width:size(1200);
  background: #F4E9C6;
  font-size:size(24);
  line-height: 1.6;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #000;
 // transform:scaleX(0.9);
  transform-origin: 50% 0;
  text-align: left;
  padding: 3.5em 5em 2.5em 5em;
  border-radius:1.5em;
  z-index: 3;
  position: relative;
.title1{
  font-size:size(40);
  border-bottom: 2px solid #900;
  padding: 0 0 0 .2em;
  margin: 0 0 0.3em 0;
}
.title2{
  text-align: right;
  font-size:0.85em;
position: relative;
margin: 2em 0 0em 0;
}

.desc {
  margin:0em auto;
  width: 50%;float: left;
  line-height: 1.6;
  letter-spacing:0em;
  list-style:decimal;
  overflow: hidden;

  li{list-style:inherit;float: left;margin: 0.2em 0 0.2em 1.7em;width:calc(100% - 1.4em);
  }
}

  &::after{content: "";clear: both;display: block;}


}


/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section2{
  &::before{
	    height: sizem(2000);
  bottom:sizem(2000 * -.8);
  z-index: -1;
  }
}
.tree1{
  @include img_l_m(520,365,-230);
  }
.txt1{
  margin:30vw auto -5vw auto;
  font-size:sizem(16.5);
.title2{
  @include img_c_m(256,100);
}
}

.txt2{
  padding: 2em 1em 3em 1em;
  width:sizem(345);
  font-size:sizem(15);
.title1{
  font-size:sizem(25);
  
}
.desc {
  margin:0em auto 0em auto;
  width: 100%;float:none;
  line-height:1.5;
  li{margin: 0.15em 0 0.15em 1.8em;
  }}

}

}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import UIkit from 'uikit';
export default {
  name: 'section2',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      UIkit,
      // blockIndex: 0,
    }
  },

  methods: {},

  mounted() {
    // setTimeout(() => {
    //   this.blockIndex = 1
    // }, 6000)
  },

  created() {},

  computed: {},
}
</script>
