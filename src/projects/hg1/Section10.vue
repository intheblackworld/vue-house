<template>
  <div class="section10">

  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section10 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  overflow: hidden;
}
.bg {
  background-color: #fff;
  background-position: 100% 0%;
  background-size: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-image: url('./s2_bg.jpg');
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
  &:nth-child(1) {
    position: relative;
  }
}
.txt{
  width: size(1140);
  height: size(490);
  top:0;
  left: 0;
  /*display: flex;
  flex-direction:row-reverse;*/
  padding: size(50) 0 0  size(140);
  background:linear-gradient(to right, #9e0d1b 0%,#9e0d1b 50%,#9e0d1b00 100%);
  }

.subtitle {
  width: size(283);
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);
  font-size: size(25.5);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: size(1.5);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.title {
  width: size(441);
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);
  font-size: size(46.4);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: size(3.71);
  text-align: left;
  color: #ffffff;
  white-space: nowrap;
}

.hr {
  width: size(564);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.6);
  border: solid 1px #ffffff;
  margin:  size(20) 0;
}

.desc {
  width: size(570);
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);
  font-size: size(21);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: 0.1em;
  text-align: left;
  color: #fff;
}
@media only screen and (max-width: 1440px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
    background-size: 1920px auto;
    background-position: center;
  }
  .txt {
    height: auto;
    margin-top: 100px;
  }

  .title {
    font-size: 52px;
  }

  .desc {
    font-size: 24px;
  }

  .text {
    top: 0;
  }
}

@media screen and (max-width: 767px) {
  .section10 {
    width: 100vw;
    height: sizem(667);
    min-height: auto;
  max-height:initial;
    position: relative;
  }

  .bg-img {
    width: 100vw;
    height: sizem(667);
    min-height: size(1080);
    position: absolute;
    top: 0;
    left: 0;
    height: auto;
    display: block;
    object-fit: cover;
    margin-top: 0;
    &:nth-child(1) {
      position: relative;
    }
  }
 .txt {
   top: 0;
   left: 0;
   width: 100%;
    height: auto;
    padding:sizem(45)  0 sizem(45) sizem(32) ;
  }

  .subtitle {
    width: sizem(200);
    top: sizem(25);
    left: sizem(32);
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);
    font-size: sizem(18);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.7;
    letter-spacing: sizem(1.06);
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .title {
    width: sizem(206);
    top: sizem(49);
    left: sizem(32);
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);
    font-size: sizem(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }

  .hr {
    width: sizem(310);
    top: sizem(0);
    left: sizem(0);
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.6);
    border: solid 1px #ffffff;
    margin:sizem(20) 0;
  }

  .desc {
    width: sizem(313);
    top: sizem(145);
    left: sizem(32);
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: sizem(1.5);
    text-align: left;
    color: #ffffff;
  }
}
</style>

<script>
import { isMobile } from '@/utils'
import info from '@/info'
export default {
  name: 'section10',

  data() {
    return {
      isMobile,
      info,
    }
  },

  mounted() {},
}
</script>
