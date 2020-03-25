<template>
  <div class="section6">
    <div class="bg">
      <div v-if="!isMobile">
        <div class="box box1"
            data-aos="fade-left"
            data-aos-delay="300"></div>
        <div class="box box2"
            data-aos="fade-left"
            data-aos-delay="600"></div>
        <div class="block-img" data-aos="fade" data-aos-delay="300">
          <div class="relative">
            <img v-lazy="require('./s6/img.jpg')" alt />
            <div class="block-title">外觀3D示意圖</div>
          </div>
        </div>
        <div class="content">
          <div class="title">金獎冠冕加身 堅強厚實力</div>
          <div
            class="desc"
          >京城建設於2016年推出的【京城京城】，不僅為高雄指標豪宅，更榮獲內政部耐震、綠建築雙標章認證，以及第24屆中華建築金石獎施工品質類住宅超高層組的金石首獎！經國際級獎項與背書，品牌實力有目共睹</div>
          <div class="subtitle">京城集團近年沿革</div>
          <div class="desc">
            <div class="text">
              <span><span>2016－</span>工期長達6年的農十六案【京城京城】完工獲內政部耐震建築、綠建築標章認證，並榮獲建築金石獎首獎</span>
              <span><span>2016－</span>京城總部大樓遷移至博愛二路150號</span>
              <span><span>2016－</span>與「台灣建築安全履歷協會」簽約為中南部首家導入「建築安全履歷」建商</span>
            </div>
            <div class="text">
              <span><span>2017－</span>京城博愛路新企業總部落成、喬遷</span>
              <span><span>2017－</span>京城建設100%轉投資H20水京機國際酒店開幕</span>
              <span><span>2018－</span>【圓山大院】榮獲南台灣建築園冶獎等六大獎項</span>
              <span><span>2019－</span>【時尚京城】榮獲2019南台灣建築園治獎</span>
              <span><span>2019－</span>【京城美術皇居】、【時尚京城】、【閱河堤】與【圓山天墅】共獲得高雄厝、綠建築等五座獎項</span>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="block-img" data-aos="fade" data-aos-delay="300">
          <div class="relative">
            <img v-lazy="require('./mo/6/img.png')" alt />
          </div>
        </div>
        <div class="content">
          <div class="title">金獎冠冕加身 堅強厚實力</div>
          <div
            class="desc"
          >京城建設於2016年推出的【京城京城】，不僅為高雄指標豪宅，更榮獲內政部耐震、綠建築雙標章認證，以及第24屆中華建築金石獎施工品質類住宅超高層組的金石首獎！經國際級獎項與背書，品牌實力有目共睹</div>
          <div class="subtitle">京城集團近年沿革</div>
          <div class="desc">
            <div class="text">
              <span><span>2016－</span>工期長達6年的農十六案【京城京城】完工獲內政部耐震建築、綠建築標章認證，並榮獲建築金石獎首獎</span>
              <span><span>2016－</span>京城總部大樓遷移至博愛二路150號</span>
              <span><span>2016－</span>與「台灣建築安全履歷協會」簽約為中南部首家導入「建築安全履歷」建商</span>
              <span><span>2017－</span>京城博愛路新企業總部落成、喬遷</span>
              <span><span>2017－</span>京城建設100%轉投資H20水京機國際酒店開幕</span>
              <span><span>2018－</span>【圓山大院】榮獲南台灣建築園冶獎等六大獎項</span>
              <span><span>2019－</span>【時尚京城】榮獲2019南台灣建築園治獎</span>
              <span><span>2019－</span>【京城美術皇居】、【時尚京城】、【閱河堤】與【圓山天墅】共獲得高雄厝、綠建築等五座獎項</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.bg {
  position: relative;
  overflow: hidden;
  position: relative;
  height: size(1150);
  display: flex;
  align-items: center;
  background: #0e585a url('./s6/bgimg.png') fixed;
  background-size: cover;

  > div {
    display: flex;
    align-items: center;
  }
}
.box{position: absolute;}
.box1{background: #c9caca url('./s6/bgimg.png') fixed;
  background-size: cover;
    bottom:0;
    right: 0;
    width:size(1438);
    height: size(955);}
.box2{background:#20969b url('./s6/bgimg2.png') fixed;
  background-size: cover;
    top:size(242);
    right:0;
    width: size(94);
    height: size(754);}


.bg-img {
  width: 100vw;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  z-index: 1;

  &.fix {
    position: fixed;
  }

  &:nth-child(1) {
    // position: relative;
  }
}

.block-img {
  position: absolute;
  left: size(0);
  bottom: size(150);
  width: size(935);
  z-index: 3;

  img {
    width: 100%;
  }
}

.block-title {
  font-size: size(16);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.58;
  letter-spacing: 0.48px;
  text-align: right;
  color: #ffffff;
  position: absolute;
  right: size(10);
  bottom: size(10);
}

.content {
  position: absolute;
  width: size(729);
  top: size(460);
  right: size(142);
  z-index: 2;
}

.title {
  font-size: size(40);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  margin-bottom: size(10);
}

.desc {
  font-size: size(15);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: normal;
  color: #000000;
  margin-bottom: size(50);
  text-align: justify;
}

.subtitle {
  font-size: size(24);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  margin-bottom: size(10);
}

.text {
  width: 45%;
  display: inline-block;
  margin: 0 3% 0 0;
  vertical-align: top;
  line-height: 1.7;
  span{flex: 0 0 auto;
  text-align: justify;
  }  
  > span{
    display: flex;
    margin: 0 0 0.7em;
  }
  &:last-child{ 
  width: 52%;margin: 0;}
  
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .bg {
    position: relative;
    overflow: hidden;
    position: relative;
    height: size-m(957);
    display: block;
  background:  url('./mo/6/bgimg.png') fixed 0 0, url('./mo/6/bg.png') 0 0;
    background-size: 100% auto, 100% auto;
    img {
      display: block;
    }

    > div {
      display: block;
    }
  }

  .bg-img {
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    height: auto;
    display: block;
    object-fit: cover;
    z-index: 2;

    // &:nth-child(1) {
    //   position: relative;
    // }
  }

  .block-img {
    width: 100vw;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  .content {
    width: size-m(313);
    left: 0;
    right: 0;
    top: size-m(350);
    margin: 0 auto;
    z-index: 5;
  }

  .title {
    font-size: size-m(22);
  }

  .desc {
    font-size: size-m(13);
    width: 100%;
    display: block;
  }

  .subtitle {
    font-size: size-m(14);
  }

  .item-title {
    font-size: calc(100vw * 12 / 375);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.58;
    letter-spacing: 0.48px;
    text-align: right;
    color: #ffffff;
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
.text {
  width: 100%;
  &:last-child{ 
  width: 100%;margin: 0;}
}
}
</style>

<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'

export default {
  name: 'section6',

  data() {
    return {
      isMobile,
      isTablet,
    }
  },

  methods: {},
}
</script>
