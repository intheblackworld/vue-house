<template>
  <div class="relative">
    <div v-if="!isMobile">
      <div class="block relative">
        <img
          src="./s2/bg_01.png"
          alt=""
          class="bg-img"
          data-aos="fade"
          data-aos-delay="1500"
        >
        <img
          src="./s2/img1.jpg"
          alt=""
          class="img t-img"
          data-aos="fade"
          data-aos-delay="200"
        >
        <div class="poetry poetry-t">
          <ul class="poetry-title">
            <li
              data-aos="fade"
              data-aos-delay="600" data-aos-duration="1000"
            >幸町官邸特區百年一遇</li>
            <li
              data-aos="fade"
              data-aos-delay="1000" data-aos-duration="1000"
            >難得釋出 才謂無價</li>
          </ul>
          <ul class="poetry-desc">
            <li
              v-for="(text, index) in poetry_list_1"
              data-aos="fade"
              :data-aos-delay="600 + (index + 1) * 200" data-aos-duration="1000"
              :key="text"
            >{{text}}</li>
          </ul>
        </div>
      </div>
      <div class="block relative">
        <img
          src="./s2/bg_02.png"
          alt=""
          class="bg-img"
          data-aos="fade"
          data-aos-delay="1500"
        >
        <img
          src="./s2/img2.jpg"
          alt=""
          class="img b-img"
          data-aos="fade"
          data-aos-delay="200"
        >
        <div class="poetry poetry-b">
          <ul class="poetry-title">
            <li
              data-aos="fade"
              data-aos-delay="400" data-aos-duration="1000"
            >仕紳文哲 靜巷富隱</li>

            <li
              data-aos="fade"
              data-aos-delay="800" data-aos-duration="1000"
            >將相豪賈的名人戲廂</li>
          </ul>
          <ul class="poetry-desc">
            <li
              v-for="(text, index) in poetry_list_2"
              data-aos="fade"
              :data-aos-delay="600 + (index + 1) * 200" data-aos-duration="1000"
              :key="text"
            >{{text}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="block relative">
        <img
          src="./s2/mo/bg_01.png"
          alt=""
          class="bg-img"
          data-aos="fade"
          data-aos-delay="800" data-aos-duration="1000"
        >
        <ul class="poetry-title">
          <li
            data-aos="fade"
            data-aos-delay="300"
            data-aos-duration="1000"
          >幸町官邸特區百年一遇</li>
          <li
            data-aos="fade"
            data-aos-delay="500"
            data-aos-duration="1000"
          >難得釋出 才謂無價</li>
        </ul>
        <img
          src="./s2/img1.jpg"
          alt=""
          class="img"
          data-aos="fade"
          data-aos-delay="1000"
        >
        <ul class="poetry-desc">
          <li
            v-for="(text, index) in poetry_list_1"
            data-aos="fade"
            :data-aos-delay="400 + (index + 1) * 200" data-aos-duration="1000"
            :key="text"
          >{{text}}</li>
        </ul>
      </div>
      <div class="block relative">
        <img
          src="./s2/mo/bg_02.png"
          alt=""
          class="bg-img"
          data-aos="fade"
          data-aos-delay="800"
        >
        <ul class="poetry-title poetry-title-b">
          <li
            data-aos="fade"
            data-aos-delay="400" data-aos-duration="1000"
          >仕紳文哲 靜巷富隱</li>
          <li
            data-aos="fade"
            data-aos-delay="800" data-aos-duration="1000"
          >將相豪賈的名人戲廂</li>
        </ul>
        <img
          src="./s2/img2.jpg"
          alt=""
          class="img"
          data-aos="fade"
          data-aos-delay="1000"
        >
        <ul class="poetry-desc">
          <li
            v-for="(text, index) in poetry_list_2"
            data-aos="fade"
            :data-aos-delay="100 + (index + 1) * 200" data-aos-duration="1000"
            :key="text"
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
  width: size(969);
  position: absolute;
}

.t-img {
  top: size(98);
  left: size(181);
}

.b-img {
  top: size(77);
  right: size(180);
}

.poetry {
  position: absolute;
  width: size(500);
  border-top: 0.5px solid #ccc;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  padding-top: size(40);
  padding-right: size(20);

  &.poetry-t {
    top: size(98);
    right: size(180);
  }

  &.poetry-b {
    top: size(80);
    left: size(181);
    padding-right: size(40);
  }

  .poetry-title,
  .poetry-desc {
    writing-mode: vertical-rl;
    text-orientation: upright;
  }

  .poetry-title {
    font-size: size(29);
    font-weight: 400;
    color: #231815;
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

  .poetry-title {
    font-size: size-m(18);
    font-weight: 400;
    color: #231815;
    position: absolute;
    z-index: 5;
    width: size-m(193);
    height: size-m(251);
    margin: 0 auto !important;
    top: 0;
<<<<<<< HEAD
   left:50% !important;
   // right: auto;
=======
    left: 0;
    right: 0;
>>>>>>> 112b644a58ad186058e6a45b4169d95e83750ac5
    border-top: 0.5px solid #ccc;
    // padding-right: size-m(120) !important;
    padding-top: size-m(23);

    &.poetry-title-b {
      padding-right: size-m(0);
      left: 0 !important;
      right: 0 !important;
    }
  }

  .poetry-desc {
    font-size: size-m(15);
    font-weight: normal;
    color: #595757;
    margin: 0 auto;
    margin-top: size-m(47);
  }
  li {
    // font-size: size(27);
    margin: 0 10px;
    text-align: left;
    &:nth-child(1) {
      margin-right: size-m(120);
    }
  }

  .block {
    margin-top: 40px;
    padding-bottom: 40px;
  }

  .img {
    width: 100vw;
    position: relative;
    right: auto;
    top: auto;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'

export default {
  name: 'section2',

  data() {
    return {
      isMobile,
      isTablet,
      poetry_list_1: [
        '人間最珍貴的，',
        '是無法複製的歷史與文化',
        '百年前日治時代臨沂街「幸町」',
        '貴族官舍特區，台北書畫館、',
        '齊東日式宿舍、海軍將官官舍',
        '漫步濃蔭街巷，',
        '偶遇黛瓦木造老房',
        '寧靜街區難得推案，',
        '錯過就是十年...',
      ],
      poetry_list_2: [
        '愛上水墨般的人文綠意，',
        '多少聞人落籍在臨沂、齊東、泰安街',
        '書畫大師溥心畬、李國鼎、',
        '孫運璿、黎玉璽將軍官邸',
        '將門富賈文人會際，一時冠蓋雲集',
        '地靈人傑盛況歷歷在目，',
        '那個時代最好的，現在依然在',
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
