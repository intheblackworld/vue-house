<template>
    <div class="section9">
      <div class="o" data-aos="zoom-in"></div>

    <div class="c" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1900">
      
      <div class="c2"><img src="./all/3.png" alt="3"></div>
      <div class="c1"><img src="./all/1.png" alt="1"></div>
    </div>
    <div class="txt">
      <div class="title" data-aos="zoom-in" data-aos-delay="0">質感提升  延長保固</div>
      <div class="desc" data-aos="zoom-in" data-aos-delay="200">
        防水保固5年、固定設備2年
      </div>
    </div>
    </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section9 {
  width:100%;
  height:auto;
  position: relative;

  font-stretch: normal;
  font-style: normal;
  text-align: center;
  line-height: 1.2;
  font-weight: 400;
  padding: 0;
  font-size: size(30);
  color: #666;

  padding:0em 0 7em;
}
.o{
  position: absolute;
  top:size(-120);
  left:calc(50% - 25vw);
  width: calc(2 * 9vw);
  height:calc(2 * 9vw);
  border-radius: 50%;
background: linear-gradient(to bottom, rgba(220,60,0,0.12) 0%,rgba(220,60,0,0) 100%);}
.c{
      position: absolute;left:0;right:0;
      top:0;
      div{
        position: absolute;
        animation:an 5s ease-in-out infinite alternate;
        img{width: 100%;}
      }
    .c1{
      width:size(600);top:size(-160);right: size(-0);
      transform:rotate(3deg);
      transform-origin: 50% 50%;
    animation-delay: -1s;
      img{width: 100%;
      transform:rotate(-20deg)scaleX(-1);}}
    .c2{
      width:size(600);top:size(-130);left: size(1200);
      transform:rotate(3deg);
      transform-origin: 50% 50%;
      img{width: 100%;
      transform:rotate(-16deg)scaleX(-1);}}
  }
@keyframes an{
    to{
      transform: translateX(0);
    }
}
.txt{
  position: relative;
  z-index: 3;
  margin: 0em auto 0em;
  text-align: center;
}
.title{
  position: relative;
  font-size: size(50);
  margin:0 auto 0em;
  letter-spacing:0.04em;
  color: #bb9259;
  font-weight: 700;
  width: 100%;
}
.desc {
  margin:0.5em auto 3em auto;
  line-height: 2;
  letter-spacing:0.05em;
  list-style: circle;
  overflow: hidden;

  width: 100%;
}

/* Swipe */
.swipe {
//  position: absolute;
  width:100%;
  height: size(420);
  top: size(185);
  right: size(199);
  object-fit: cover;
  z-index: 3;
  order:3;
}

// begin
.swipe-fade-leave-to {
  opacity: 0;
  z-index: 0;
}
// end
.swipe-fade-enter {
  opacity: 0;
  z-index: 1;
}

.swipe-fade-enter-active {
  transition: all 0.5s ease;
}

.swipe-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.swipe-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.swipe-item {
  width: 100%;
  height: 100%;
  z-index: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .slide-name {
    right:1.5em;
    bottom:1em;
    color: #fff;
    font-size: size(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.89px;
    text-align: left;
    color: #fff;
   text-shadow:0 0.1em 0.3em #000;
  }
}

.pagination {
  width: auto;
  bottom:16em;
  right:0;
  justify-content: center;
  font-size:size(13);
}

.pagination-dot {
  padding:0.3em;
  margin: 0 0.3em;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width: 1em;
    height: 1em;
   // border-radius: 50%;
   // border: 4px solid  #ccc;
   background: #ccc;
    position: relative;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      display: block;
   background: #80c5b6;
   // border-radius: 50%;
   // border: 2.1px solid  #e38023;
      opacity: 1;
      position: absolute;
      top: 20%;
      left: 20%;
      transition: all 0.3s;
      transform-origin: center;
      transform: scale(0);
    }
    &.active {
      box-shadow: none;
      &::before {
        top: 0%;
        left: 0%;
        transform: scale(1);
      }
    }
  }
}

.swipe-btns {
  width: 100%;
  height: 100%;
  padding: 0 15px;
  z-index: 3;

  .prev-btn,
  .next-btn {
    width: size(20);
    cursor: pointer;
  }
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
  .section9 {
    width: 100vw;
    height: auto;

    font-size: sizem(18);
    text-align: justify;
  padding: 0 0 3em;
  .box{
  width:100%;
  flex-direction:column;    margin: 0em auto 6em;
  }

  }
  
.o{
  position: absolute;
  top:sizem(-50);
  left:calc(50% - 48vw);
  width: calc(2 * 15vw);
  height:calc(2 * 16vw);
  border-radius: 50%;
background: linear-gradient(to bottom, rgba(220,60,0,0.12) 0%,rgba(220,60,0,0) 100%);}
  
  .c{
    height: 100%;
    .c1{
      width:sizem(250);bottom:sizem(-110);right: sizem(-100); top: auto;
      }
    .c2{
      width:sizem(300);bottom:sizem(-200);right: sizem(-50);left: auto;
      top: auto;
  }
  }
.list{
  flex:0 0 100%;
  width: 100%;
  position: relative;
}
.title{
    font-size: sizem(30);
  letter-spacing:0.01em;
}
  .txt{
  position: relative;
    width:100%;
margin:0em auto 0em;
padding: 0 0 3em;
  left:0;
  top:0;
  }

  /* Swipe */
  .swipe {
    position: relative;
    width:  sizem(320);
    height: sizem(240);
    min-height: auto;
    margin: auto;
    top:0;
    left:0;
  order:initial;
  }


.swipe-item {
  .slide-name {
    font-size: sizem(12);
  }
}

  .swipe-btns {

    .prev-btn,
    .next-btn {
      width: sizem(15);
      cursor: pointer;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section9',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList1: [
        {
          img: require('./s8/1.jpg'),
          name: '示意圖',
        },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {
    viewIndex() {
      if (this.viewIndex === 3) {
        this.slideIndex = 0
        console.log(this.slideIndex, 'slideIndex')
      }
    },
  },
}
</script>
