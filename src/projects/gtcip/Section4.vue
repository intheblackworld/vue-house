<template>
  <div>
    <div class="section4">
      
  </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section4 {  
  width:100%;
  height:auto;
  position: relative;
  margin: 5.3vw 0 0 0;
}

.img-o{
  width: size(160);
  position: absolute;
  opacity:0.3 !important;
  top:size(790);
  left:size(100);
}

.o{
  position: absolute;
  top:size(790);
  left:size(100);
  width:size(210);
  height:size(210);
  border-radius: 50%;
background: linear-gradient(to bottom, rgba(220,60,0,0.12) 0%,rgba(220,60,0,0) 100%);}
.c{
      position: absolute;left:0;right:0;
      top:calc(50% + (0 - 540) * 100vw / 1920);
      div{
        position: absolute;
        animation:an 5s ease-in-out infinite alternate;
        img{width: 100%;}
      }
    .c1{
      width:size(355);top:size(-4);right: size(-21);
      transform:rotate(3deg);
      transform-origin: 50% 50%;
    animation-delay: -3s;
      img{width: 100%;
      transform:rotate(-48deg)scaleX(-1);}}
  }
@keyframes an{
    to{
      transform: translateX(0);
    }
}
.txt{
  position: relative;
  width: size(1500);
  margin:0 auto 6em;
  font-stretch: normal;
  font-style: normal;
  text-align: justify;
  font-size: size(17);
  font-weight: 400;
  line-height: 1.2;
  z-index: 3;
  color: #242424;
  }

  .sub{
  position: relative;
  font-size: size(25);
  margin:1em auto 0.5em;
  letter-spacing:0.04em;
  color: #000000;
  font-weight: 700;

  .line{
    position: absolute;
    width: size(125);
    height: size(2);
    background: #c49847;
    top:size(15);
    right:size(0);

    }
}

.title{
  position: relative;
  font-size: size(40);
  margin:1em auto 0.5em;
  letter-spacing:0.04em;
  color: #00537A;
  font-weight: 700;
}
.desc {
  margin:1em auto;
  line-height: 2;
  letter-spacing:0.05em;
  list-style: circle;
  overflow: hidden;
  li{list-style:inherit;float: left;margin: 0.3em 0 0.3em 1.4em;width:calc(100% - 1.4em);
  }
}
/* Swipe */
.swipe {
  position: relative;
  margin: auto;
  width: size(1500);
  height: size(840);
  // left: size(210);
  object-fit: cover;
  z-index: 3;
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
    color: #ffffff;
   text-shadow:0 0.1em 0.3em #000;
}

.swipe-wrap {
  width: 100%;
  height: 100%;
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
}

// 過場動畫
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

// pagination
.pagination {
  width: auto;
  bottom: -2.2em;
  right: -0.5em;
  justify-content: center;
  font-size: size(20);

}
.pagination-dot {
  padding: 0.25em;
  margin: 0 0.2em;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width:1em;
    height:1em;
    border-radius: 50%;
    border: 0.2em solid  rgba(255, 255, 255, 0.5);
    position: relative;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
    border-radius: 50%;
    border:  0.105em solid  #c99637;
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
        width: 100%;
        height: 100%;
        top: 0%;
        left: 0%;
        transform: scale(1.6);
      }
    }
  }
}


.swipe-btns {
  width: 100%;
  height: 100%;
  padding: 0 0.75em;
  z-index: 3;
  font-size: size(20);

  .prev-btn,
  .next-btn {
    width: 1em;
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
  .section4 {
    width: 100%;
    height: auto;
    min-height: auto;
    max-height: initial;
  }

.o{
  top:sizem(260);
  left:sizem(10);
  width:sizem(90);
  height:sizem(90);

}
.c{
    .c1{width:sizem(130);top:sizem(340);left: sizem(280);}
  }
  .txt{
    position: relative;
    width: sizem(310);
    margin:1.5em auto 8em;
    left:0;
    top:0;
    font-size: sizem(15);
    text-align: center;
  }
.title{
    font-size: sizem(25);
}

.sub{
  font-size: sizem(18);
}
  .desc {
   //line-height: 1.73;
  margin:0em auto;
  text-align: left;
  letter-spacing:0em;
  margin-top: sizem(20);

  }
  /* Swipe */
  .swipe {
    position: relative;
    width: 100%;
    height: sizem(255);
    top:0;
    left:0;
  }
.swipe-item {
  .slide-name {
    font-size: sizem(12);
  }
}
  .swipe-btns {
  font-size: sizem(15);
  }
}

</style>
<script>
// @ is an alias to /src
import info from '@/info'
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section4',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      slideList: [
        {
          img: require('./s4/1.jpg'),
          name: '三張公園',
        },
        {
          img: require('./s4/2.jpg'),
          name: '六張公園',
        },
        {
          img: require('./s4/3.jpg'),
          name: '六合公園',
        },
        {
          img: require('./s4/4.jpg'),
          name: '厚德國小',
        },
        {
          img: require('./s4/5.jpg'),
          name: '明志國中',
        },
        {
          img: require('./s4/6.jpg'),
          name: '格致中學',
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
      if (this.viewIndex === 7) {
        this.slideIndex = 0
        console.log(this.slideIndex, 'slideIndex')
      }
    },
  },
}
</script>
