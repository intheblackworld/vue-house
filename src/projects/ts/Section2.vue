<template>
  <div class="section2">
    <img src="./s1/bg.png" :alt="`${info.caseName}_b`" class="bg">
    <div class="tree1">
    <img src="./s2/tree1.png" :alt="`${info.caseName}_tree`">
    <img src="./s2/tree2.png" :alt="`${info.caseName}_tree`">
    </div>
    <div class="txt1">
    <img src="./s2/title1.png" data-aos="zoom-in-up" :alt="`${info.caseName}_公開前搶先預約下訂`" class="title1">
    <img src="./s2/title2.png" data-aos="zoom-in-up" data-aos-delay="200" :alt="`${info.caseName}_享購屋優惠價`" class="title2">
    </div>
    <div class="txt2" data-aos="flip-up" data-aos-delay="300">
    <div class="title1">活動辦法:</div>
<ol class="desc" >
  <li>正式公開前，至泰舍至善元銷售中心現場預約戶別，並填寫預約單(需付10萬預約金)。</li>
  <li>本預約優惠活動，期限至公開前一日。</li>
  <li>正式公開當日，不接受現場預約保留。</li>
  <li>活動辦法與細則歡迎至現場洽詢。</li>
      </ol>
    <div class="title2">※活動辦法-泰舍至善元接待中心現場保有修改權利</div>
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
  width: size(1052);
}
.title2{
  @include img_c_pc(722,290);
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
  padding: 3em 5em 1em 5em;
  border-radius:1.5em;
  z-index: 3;
  position: relative;
  
.title1{
  font-size:size(40);
  border-bottom: 2px solid #900;
}
.title2{
  text-align: right;
  font-size:0.85em;
position: relative;
margin: 2em 0 0em 0;
}.desc {
  margin:1em auto;
  line-height: 2;
  letter-spacing:0em;
  list-style:decimal;
  overflow: hidden;
  li{list-style:inherit;float: left;margin: 0.3em 0 0.3em 1.4em;width:calc(100% - 1.4em);
  }
}


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
  @include img_l_m(520,255,-230);
  }
.txt1{
  margin:30vw auto -5vw auto;
.title1{
  width: sizem(375);
}
.title2{
  @include img_c_m(256,100);
}
}

.txt2{
  padding: 3em 1em .8em 1em;
  width:sizem(345);
  font-size:sizem(15);
.title1{
  font-size:sizem(25);
}
.desc {
  margin:1em auto 3.2em auto;
  line-height:1.4;
  li{margin: 0.4em 0 0.4em 1.4em;
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
