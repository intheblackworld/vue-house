<template>
  <div class="section10">
    <div class="bg relative">
      <img v-if="!isMobile" src="./s10_footer.png" alt class="footer" />
      <img v-else src="./s10_footer_m.png" alt class="footer" />
      <img
        src="./s11_tree_2.png"
        alt
        v-if="isMobile"
        class="m-tree"
        :data-aos="!isMobile ? 'fade' : 'fade-up'"
        data-aos-offset="50"
        data-aos-delay="1000"
        data-aos-duration="1500"
        data-aos-mirror="true"
        data-aos-once="false"
      />
      <div class="flex-jb wrap custom">
        <div
          class="slide relative"
          :data-aos="!isMobile ? 'fade' : 'fade-up'"
          data-aos-offset="50"
          data-aos-delay="300"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <img
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s4-slide-${index}`"
            :src="slide.src"
            alt
          />

          <div class="btn-group flex-jb flex-ac">
            <img @click="addIndex" src="./small_left_btn.png" alt />
            <img @click="decIndex" src="./small_right_btn.png" alt />
          </div>
        </div>
        <img
          src="./s10_icon_2.png"
          alt
          class="tree absolute-ac"
          :data-aos="!isMobile ? 'fade' : 'fade'"
          data-aos-offset="50"
          data-aos-delay="300"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="false"
        />
        <div
          class="content wrap"
          :data-aos="!isMobile ? 'fade' : 'fade-up'"
          data-aos-offset="50"
          data-aos-delay="600"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div
            class="flex-ac head"
            :data-aos="!isMobile ? 'fade' : 'fade-up'"
            data-aos-offset="50"
            data-aos-delay="0"
            data-aos-duration="1500"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <div class="text">
              <h3
                class="title"
                v-html="isMobile ? '放大幸福 加倍感動<br />大一點好室會發生!' : '放大幸福 加倍感動<br /> 大一點好室會發生!'"
              ></h3>
              <div class="desc" v-if="!isMobile">空間大一點，驚喜多一點，想不到的細節都藏在這裡</div>
            </div>
          </div>
          <div
            class="m-desc"
            :data-aos="!isMobile ? 'fade' : 'fade-up'"
            data-aos-offset="50"
            data-aos-delay="0"
            data-aos-duration="1500"
            data-aos-mirror="true"
            data-aos-once="false"
            v-if="isMobile"
          >空間大一點，驚喜多一點，想不到的細節都藏在這裡</div>
          <h3 class="border flex-c">三房</h3>
          <h3
            class="title"
            v-html="(isMobile || isTablet) ? '寬裕客餐廳<br />主臥加碼更衣室' : '寬裕客餐廳，主臥加碼更衣室'"
          ></h3>
          <div
            class="desc"
            v-if="!isMobile"
            v-html="(isTablet) ? '<p>大尺碼客餐廳，是親朋來訪好友相聚<br />小酌的完美場域</p> <p>主臥室升級更衣室雙排儲櫃，老婆閨<br />密講悄悄話的完美空間</p>' : '<p>大尺碼客餐廳，是親朋來訪好友相聚小酌的完美場域</p> <p>主臥室升級更衣室雙排儲櫃，老婆閨密講悄悄話的完美空間</p>'"
          ></div>
          <div class="desc" v-else>
            <p>
              大尺碼客餐廳，是親朋來訪好友相聚小酌的完美場域。
              主臥室升級更衣室雙排儲櫃，老婆閨密講悄悄話的完美空間
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '../../assets/style/variableDefault.scss';

.bg {
  background-image: url('./s10_bg.jpg');

  .icon-1 {
    margin: 0 30px;
    height: 20vh;
  }

  .tree {
    height: 30vh;
    right: 0;
  }

  .text {
    text-align: left;
    position: relative;
    z-index: 2;
    .title {
      font-size: 49px;
      color: #231815;
      margin-bottom: 0px;
    }

    .desc {
      font-size: 3.5vh;
      color: #231815;
      margin-bottom: 15px;
    }
  }

  .head {
    padding-top: calc(100vh * (15 / 900));
  }

  .slide {
    width: 50%;
    height: auto;
    margin-top: 20px;

    .slide-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .btn-group {
      width: 95%;
      bottom: 45%;
    }
  }

  .content {
    color: #231815;
    padding: 0px;
    padding-left: 30px;
    width: 50%;
    position: relative;
    z-index: 2;
    .border {
      width: 103px;
      height: 103px;
      border: 1px solid #231815;
      font-size: 42px;
      color: #231815;
      margin-bottom: 30px;
    }

    .head {

    }

    .title {
      font-size: 32px;
      margin-bottom: 0px;
      line-height: 1.5;
      text-align: left;
    }

    .desc {
      font-size: 17px;
      line-height: 1.5;
      text-align: left;
      margin-bottom: 20px;
    }
  }
}

.footer {
  width: 100vw;
}

.custom {
  display: flex;
  margin: 0 auto;
  width: 1440px;
  padding-left: 200px;
  max-width: 100vw;
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
    width: 100vw;

    .slide {
      width: 65%;
      height: 377px;

      .btn-group {
        bottom: 22vh;
      }
    }

    .content {
      width: 35%;
    }

    .text {
      .title {
        // font-size: 6vh;
      }
    }

    .content {
      .title {
        line-height: 1.3;
      }
    }

    .tree {
      height: 22vh;
      right: 0;
    }
  }

  .custom {
    padding-left: 0px;
  }
}

/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .bg {
    width: 100vw;
    height: auto;
    background-image: url('./s10_bg.jpg');
    padding-top: 0px;

    .head {
      padding-top: 30px;
    }
  }

  .custom {
    padding-left: 0px;
  }

  .fullscreen {
    height: calc(100vh - 60px) !important;
  }

  .bg {
    .icon-1 {
      margin: 0;
      height: 15vh;
    }

    .tree {
      display: none;
    }

    .text {
      text-align: center;
      .title {
        width: 100vw;
        font-size: 4vh;
        line-height: 1.3;
        color: #231815;
        margin-bottom: 0px;
        margin-left: 20px;
      }

      .desc {
        font-size: 15px;
        color: #231815;
      }
    }

    .m-desc {
      width: 100%;
      margin: 0 auto;
      font-size: 1.9vh;
      text-align: left;
      color: #231815;
      margin-top: 15px;
      margin-bottom: 15px;
    }

    .slide {
      width: 100vw;
      height: calc(100vw * (430 / 885));
      margin-top: 20px;

      .slide-img {
        width: 100%;
      }

      .btn-group {
        width: 100vw;
        bottom: calc(100vw * (180 / 885));
      }
    }

    .content {
      color: #231815;
      padding: 15px;
      position: relative;
      z-index: 2;
      width: 100vw;
      display: flex;
      align-items: center;
      .border {
        width: 63px;
        height: 63px;
        border: 1px solid #231815;
        font-size: 28px;
        color: #231815;
        margin-bottom: 2vh;
        display: flex;
        margin-right: 20px;
      }

      .title {
        width: 100vw;
        font-size: 24px;
        margin-left: 0;
        margin-bottom: 20px;
        line-height: 1.4;
        text-align: left;
        display: inline-block;
      }

      .desc {
        font-size: 14px;
        text-align: left;
        line-height: 1.4;
        text-align: justify;
      }
    }
  }

  .m-tree {
    position: absolute;
    right: 5vw;
    bottom: 0;
    width: 10vw;
  }

  .custom {
    margin: 0 auto;
  }
}
</style>

<script>
import { isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'
export default {
  name: 'section10',
  mixins: [slider],
  components: {},

  data() {
    return {
      isMobile,
      isTablet,
      slideList: [
        {
          src: require('./s10_img_1.jpg'),
        },
        {
          src: require('./s10_img_2.jpg'),
        },
        {
          src: require('./s10_img_3.jpg'),
        },
      ],
    }
  },

  methods: {},
}
</script>
