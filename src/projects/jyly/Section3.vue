<template>
  <div class="relative">
    <div v-if="!isMobile">
      <div class="block relative">
        <img
          src="./s3/img.jpg"
          alt=""
          class="img"
          data-aos="fade"
          data-aos-delay="200"
          @click="isShowDialog = true"
        >
        <div :class="`dialog ${isShowDialog ? 'show' : ''}`">
          <div><img
              src="./s3/mo/map.jpg"
              alt=""
              class="dialog-content"
            ></div>
          <img
            src="@/projects/jh/s4/close.png"
            class="close"
            alt
            @click="isShowDialog = false"
          />
        </div>
        <div class="poetry">
          <ul class="poetry-title">
            <li
              data-aos="fade"
              data-aos-delay="200"
              data-aos-duration="1000"
            >台北城心聚富版圖</li>
            <li
              data-aos="fade"
              data-aos-delay="600"
              data-aos-duration="1000"
            >京畿首善名門聚落</li>
          </ul>
          <ul class="poetry-desc">
            <li
              v-for="(text, index) in poetry_list_1"
              data-aos="fade"
              :data-aos-delay="100 + (index + 1) * 200"
              data-aos-duration="1000"
              :key="text"
            >{{text}}</li>
          </ul>
        </div>
      </div>
      <div class="text-block">
        <div class="poetry poetry-b">
          <ul class="poetry-desc">
            <li
              v-for="(text, index) in poetry_list_2"
              data-aos="fade"
              :data-aos-delay="700 + (index + 1) * 200"
              data-aos-duration="1000"
              :key="text"
              :class="`${(index > poetry_list_2.length - 3) ? 'red' : ''}`"
            >{{text}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="block relative">
        <div class="poetry">
          <ul class="poetry-title">
            <li
              data-aos="fade"
              data-aos-delay="400"
              data-aos-duration="1000"
            >台北城心聚富版圖</li>
            <li
              data-aos="fade"
              data-aos-delay="600"
              data-aos-duration="1000"
            >京畿首善名門聚落</li>
          </ul>
          <ul class="poetry-desc">
            <li
              v-for="(text, index) in poetry_list_1"
              data-aos="fade"
              :data-aos-delay="700 + (index + 1) * 200"
              data-aos-duration="1000"
              :key="text"
            >{{text}}</li>
          </ul>
        </div>
        <img
          src="./s3/mo/map0.jpg"
          alt=""
          class="img"
          data-aos="fade"
          data-aos-delay="200"
        >
        <img
          src="./s3/mo/scale.png"
          alt=""
          class="scale"
          @click="isShowDialog = true"
        >
      </div>
      <div :class="`dialog ${isShowDialog ? 'show' : ''}`">
        <div><img
            src="./s3/mo/map.jpg"
            alt=""
            class="dialog-content"
          ></div>
        <img
          src="@/projects/jh/s4/close.png"
          class="close"
          alt
          @click="isShowDialog = false"
        />
      </div>
      <div class="poetry poetry-b">
        <ul class="poetry-desc">
          <li
            v-for="(text, index) in poetry_list_2"
            data-aos="fade"
            :data-aos-delay="700 + (index + 1) * 300"
            data-aos-duration="1000"
            :key="text"
            :class="`${(index > poetry_list_2.length - 3) ? 'red' : ''}`"
          >{{text}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.bg-img {
  width: 100vw;
  height: auto;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.img {
  width: size(1177);
  position: absolute;
  top: size(108);
  left: size(160);
}

.poetry {
  position: absolute;
  width: size(353);
  border-top: 0.5px solid #ccc;
  padding-top: size(40);
  padding-right: size(20);
  top: size(108);
  right: size(181);

  &.poetry-b {
    border-top: none;
    top: auto;
    right: auto;
    padding: 0;
    .poetry-desc {
      font-size: size(24);
    }
  }

  .poetry-title,
  .poetry-desc {
    writing-mode: vertical-rl;
    text-orientation: upright;
    margin: 0 auto;
  }

  .poetry-title {
    font-size: size(29);
    font-weight: 400;
    color: #231815;
    margin-bottom: size(60);
  }

  .poetry-desc {
    font-size: size(19);
    font-weight: normal;
    color: #595757;
  }
  li {
    // font-size: size(27);
    margin: 0 15px;
    text-align: left;

    &.red {
      color: #c00d23;
    }
  }
}

.block {
  height: size(1085);
}

.text-block {
  position: relative;
  width: size(1333);
  height: size(510);
  margin: 40px auto;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dialog {
  display: none;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 120;
  > div {
    width: calc(100vw - 40px);
    height: calc(100vh - 20px);
    background: rgba(0, 0, 0, 0.5);
    overflow: auto;
    position: absolute;
    margin: 10px 0 0 10px;
  }
  .dialog-content {
    width: 100%;
    height: auto;
    min-width: $contact_logo_pc_width;
    min-height: 700px;
    margin: 0;
  }

  &.show {
    display: block;
  }

  .close {
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px;
    width: 50px;
    right: 30px;
    top: 20px;
    cursor: pointer;
    z-index: 5;
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
  .poetry {
    position: relative;
    width: size-m(193);
    border-top: 0.5px solid #ccc;
    padding-top: 0;
    padding-right: 0;
    top: size-m(0);
    left: auto;
    right: auto;
    margin: 0 auto;

    .poetry-title {
      font-size: size-m(19);
      font-weight: 400;
      color: #231815;
      position: relative;
      width: size-m(60);
      height: auto;
      margin: 0 auto;
      top: 0;
      left: 0;
      right: 0;
      padding-right: 0;
      padding-top: size-m(35);
    }

    .poetry-desc {
      width: size-m(188);
      font-size: size-m(15);
      font-weight: normal;
      color: #595757;
      margin: 0 auto;
      margin-top: size-m(47);
      margin-bottom: size-m(50) !important;
      display: block !important;

      li {
        width: size-m(20);
      }
    }
    &.poetry-b {
      .poetry-desc {
        width: size-m(148);
        font-size: size-m(17);
      }
    }
  }
  li {
    // font-size: size(27);
    margin: 0 4px !important;
    text-align: left;
  }

  .block {
    margin-top: 40px;
    padding-bottom: 40px;
    display: block;
    height: auto;
  }

  .dialog {
    > div {
      width: calc(100vw - 20px);
    }
  }
  .img {
    width: 100vw;
    position: relative;
    right: auto;
    top: auto;
    left: auto;
  }

  .scale {
    position: absolute;
    cursor: pointer;
    bottom: 10vh;
    right: 0;
  }
  .text-block {
    width: 100vw;
    border: none;
    height: size-m(140);
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'

export default {
  name: 'section3',

  data() {
    return {
      isMobile,
      isTablet,
      isShowDialog: false,
      poetry_list_1: [
        '往左繁華命脈忠孝東路二段，',
        '往右是仁愛綠蔭大道，',
        '都心綠肺大安森林公園、',
        '博愛特區、兩廳院',
        '昔日將門貴胄官邸際會，',
        '今日知名豪宅林立',
        '雄踞經濟、文化、綠地三大流域',
        '坐擁市中心正核心精萃稀有地段',
      ],
      poetry_list_2: [
        '幾近於零遷出率',
        '住進來捨不得離開',
        '臨沂街唯一高坪效輕豪邸',
        '席次限量稀有 錯過不再',
        '初夏即將公開',
        '歡迎提前預約',
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
