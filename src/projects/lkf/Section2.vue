<template>
  <div class="section2">
    <video-bg autoplay="autoplay" :sources="[require('./s2_video.mp4')]" img="./s2_bg.jpg">
      <img class="mask-img" src="./s2_mask.png" alt />
      <div class="mask"></div>
      <div class="title">Luxury Life</div>
      <div class="content">
        <div>
          <p class="sub-title">捷運正對面 首座國際精裝寓所</p>
          <p class="text">
            低總價 X 低月付 X 高投報
            <br />18~22坪 奢華質感機能住宅
          </p>
        </div>
      </div>
    </video-bg>
  </div>
</template>
<style lang="scss" scoped>
.mask {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  left: 0;
  top: 0;
}
.mask-img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}

.title {
  width: 292px;
  height: 66px;
  opacity: 0.7;
  font-family: TimesNewRomanPSMT;
  font-size: 60px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #c08d4e;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 10%;
  position: absolute;
}

.content {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 1280px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  top: 60%;
  padding-right: 20px;
  .sub-title {
    width: 430px;
    height: 42px;
    font-size: 31.5px;
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    margin-bottom: 10px;
  }

  .text {
    width: 350px;
    height: 71px;
    font-size: 28px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-image: url('./s1_bg_m.jpg');
    .img {
      display: none;
    }
    .imgM {
      display: block;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import VideoBg from 'vue-videobg'

export default {
  name: 'section2',
  components: {
    VideoBg,
  },

  data() {
    return {}
  },

  methods: {},
}
</script>
