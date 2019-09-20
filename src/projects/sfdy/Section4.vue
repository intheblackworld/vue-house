<template>
  <div class="section4">
    <!-- <div class="tree"></div>  -->
    <div class="bg">
      <div class="content" id="section4">
        <div class="img"></div>
        <!-- <div class="tree"></div> -->
        <div class="text-area-bg">
          <div class="text-area-container">
            <div class="text-area-title">
              <h3>“風的廊道”</h3>
              <h3>建築微氣候</h3>
            </div>風與水，這兩項是影響「建築微氣候」的關鍵，而「幸福大院」重視風、水、光、綠四大建築元素，在別墅間預留風的廊道，搭配垂直綠廊，讓風有效流動並降溫，即使從冷氣房走出來，也能感受到涼爽清新的微風吹拂。社區水撲滿設計，讓基地像...，能循環用水、更能調節氣候。「幸福大院」用自然生態及遠見思維，營造涼爽宜居的生活環境。
          </div>
        </div>
      </div>
    </div>
    <img src="./s4_tree.png" alt class="tree" v-if="!isMobile" />
    <img src="./s4_tree_m.png" alt class="tree" v-if="isMobile" />
  </div>
</template>
<style lang="scss">
.home {
  background: url('./s4_bg.jpg');
  background-size: 1920px;
  background-position: bottom;
}
</style>
<style lang="scss" scoped>
@import '../../assets/style/variableDefault.scss';

.section4 {
  position: relative;
  height: 100%;
}

.bg {
  display: flex;
  background-image: url('./s4_bg.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  position: relative;
  align-items: center;
  justify-content: center;
  // width: 100v;
  // height: 100vh;
  // left: 0;
  // top: 0;
  width: 100vw;
  height: calc(100vw * (1200 / 1920));
  // height: calc(100vh - 60px);
  position: relative;
}

.content {
  display: flex;
  width: 80%;
  max-width: 1250px;
  max-height: 700px;
  height: 70%;
  // min-height: 710px;
}

.img {
  background-image: url('./s4_img.jpg');
  background-position: center;
  background-size: cover;
  flex: 2;
}

.text-area-bg {
  background-image: url('./box.png');
  background-size: 100% 100%;
  flex: 1;
  background-repeat: no-repeat;
  margin-left: 6px;

  .text-area-container {
    text-align: left;
    color: #595757;
    width: 70%;
    height: 80%;
    margin: 0 auto;
    margin-top: 10%;
    line-height: 1.6;
    font-size: 20px;
  }

  .text-area-title {
    font-size: 48px;
    color: #249486;
    text-align: center;
    margin-bottom: 16px;
  }
}

.tree {
  position: absolute;
  width: 100vw;
  left: 0;
  top: 12%;
  left: 0;
  z-index: 1;
}

@media only screen and (min-width: 1281px) and (max-width: 1440px) {
  .text-area-bg {
    .text-area-title {
      font-size: 42px;
    }
  }
  .tree {
    top: 5%;
    width: 96%;
  }
}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {
  .text-area-bg {
    .text-area-container {
      font-size: 18px;
    }

    .text-area-title {
      font-size: 38px;
    }
  }
  .tree {
    top: 4%;
    margin-left: -30px;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .text-area-bg {
    .text-area-container {
      font-size: 14px;
      width: 80%;
    }

    .text-area-title {
      font-size: 30px;
    }
  }

  .content {
    height: 440px;
  }
  .tree {
    top: 20%;
    // height: calc(100vw * (768 / 1024));
  }

  .bg {
    height: calc(100vw * (728 / 1024));
  }
}

@media screen and (max-width: 767px) {
  .bg {
    display: block;
    height: initial;
    background-attachment: scroll;
  }
  .fullscreen {
    // height: auto !important;
  }
  .content {
    width: 100%;
    max-height: initial;
    display: block;
    margin: 60px 0 40px 0;
  }

  .img {
    width: 100vw;
    height: 280px;
  }

  .text-area-bg {
    width: 90%;
    margin: 0 auto;
    top: -100px;
    position: relative;

    .text-area-container {
      padding: 40px 10px 180px;
      line-height: 1.6;
      font-size: 17px;
      width: 80%;
    }

    .text-area-title {
      font-size: 35px;
    }
  }

  .tree {
    // background-image: url('./s4_tree_m.png');
    width: 100vw;
    // height: calc(100vw * (281 / 375));
    bottom: 2%;

    top: auto;
    right: 0%;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
export default {
  name: 'section4',

  data() {
    return {
      isMobile,
    }
  },

  methods: {},

  created() {},
}
</script>
