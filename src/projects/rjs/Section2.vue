<template>
<article class="section2">
  <div class="img">
    <img src="./s1/cat2.jpg" class="cat2" alt="cat">
    <div class="cat1">
      <img src="./s1/cat1.png" alt="cat">
      <img src="./s1/cat1.gif" alt="cat">
    </div>
    <div class="txt" data-aos="zoom-in-right"><span>展開和風新生活</span>
<span>日日都進步！！</span></div>
  </div>

<div class="txtall">
<h3 class="title" data-aos="zoom-in">洲子洋重劃區 水岸書香首席</h3>
<ul>
  <li data-aos="flip-left">3分鐘<br />台64線</li>
  <li data-aos="flip-left" data-aos-delay="100">4分鐘<br />成州市場</li>
  <li data-aos="flip-left" data-aos-delay="200">5分鐘<br />全聯</li>
  <li data-aos="flip-left" data-aos-delay="300">6分鐘<br />家樂福</li>
  <li data-aos="flip-left" data-aos-delay="400">捷運<br />蘆洲站</li>
  <li data-aos="flip-left" data-aos-delay="500">日系<br />景觀花園</li>
  <li data-aos="flip-left" data-aos-delay="600">名師<br />設計團隊</li>
  <li data-aos="flip-left" data-aos-delay="700">校園<br />首席書香</li>
</ul>
<div class="bottom" data-aos="zoom-in">集まれ！期待すべき種たち！<img src="./s1/slogo.png" alt="匯丞廣告" /></div>
</div>
</article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section2 {
  //  background: url('./s1/s2.jpg') center center no-repeat;
  background-size: contain;

  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  overflow: hidden;
  //z-index: 3;
}
.img{
  position: absolute;
  top:50%;
  left:size(100);
  .cat2{
    width: size(375);
    margin:size(-100) auto auto 0;
  }
  .cat1{
    width: size(277);
    position: absolute;
    top: size(-330);
    left: size(115);
    // opacity: .5;
    transform:rotate(-3deg);
    animation: ro 1s ease-in-out infinite alternate;
    transform-origin: 49% 90%;
    img{
      width: 100%;
      &:last-child{
        position: absolute;
        top:0;
        left: 0;
      }
    }
  }
.txt{
  position: absolute;
  top: size(-260);left:size(496);
  font-size:size(40);
  line-height: 1.01;
  text-align: center;
  z-index: 3;
  color: #00B451;
  width: 3em;
  transform-origin: 0 100%;
  span{width: 1.25em; text-align: center;display:block;float: right;
  word-break:break-word;
  }
  &::before{
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 67 105' fill='%2300B451'%3E%3Cpath d='M59.3,0l7,15.8L8.6,31.9L59.3,0z M0,56.1l34.9,48.7l12.4-11.9L0,56.1z'/%3E%3C/svg%3E");
      width:size(67);height: size(105);
      position: absolute;
      bottom:0;
      left:size(-75);
    }
  }
}
@keyframes ro{
  to {transform:rotate(3deg);}
}
.txtall{
  font-size:size(40);color: #00B451;
  line-height: 1.2;
  margin: 2.9em 0 auto auto;
  width: 63%;
  .title{
    color: #000;
    font-size: 1.75em;
    letter-spacing: 0.06em;
  }
  ul{overflow: hidden;
    display: flex;
    justify-content:space-between;
    flex-wrap: wrap;
  margin: 1.4em auto auto auto; width: 77%;}
  li{width: 5em;height: 5em;padding: 1.15em 0 0 0;border: 2px solid currentColor;border-radius: 50%;font-weight: 700;margin: 0 0 0.8em;}
  .bottom{
    font-size: 1.1em;letter-spacing: 0.2em;
     margin: 3.8em auto auto auto;
     img{height: 1.13em; vertical-align: middle;margin: 0 0 0 1.9em;}
  }
}


/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {

}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
export default {
  name: 'section2',

  data() {
    return {
      isMobile,
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
