<template>
  <div>
    <div
      v-if="!isMobile"
      class="section1"
    >
      <img
        src="./s1/logo_img.png"
        alt=""
        class="logo-img absolute"
        data-aos="fade-up"
        data-aos-delay="100"
      >
      <img
        src="./s1/logo.png"
        alt=""
        class="logo absolute"
        data-aos="fade-up"
        data-aos-delay="300"
      >
      <!-- <img src="./s1/slogo.png" alt="" class="slogo"> -->
      <img
        src="./s1/txt.png"
        alt=""
        class="txt absolute"
        data-aos="fade-up"
        data-aos-delay="400"
      >
      <div
        class="btn absolute"
        v-scroll-to="{ element: `#contact` }"
        data-aos="fade"
        data-aos-delay="1000"
      >
        <h3>立即預約</h3>
      </div>
    </div>

    <div
      v-if="isMobile"
      class="section1"
    >
      <img
        src="./mo/1/logo_m.png"
        alt=""
        class="logo-img absolute"
        data-aos="fade-up"
        data-aos-delay="100"
      >
      <img
        src="./mo/1/txt_m.png"
        alt=""
        class="txt absolute"
        data-aos="fade-up"
        data-aos-delay="400"
      >
      <div
        class="btn absolute"
        v-scroll-to="{ element: `#contact` }"
        data-aos="fade"
        data-aos-delay="1000"
      >
        <h3>立即預約</h3>
      </div>
    </div>


    <div class="short flex-c">
      <div class="poetry">
        <ul class="poetry-desc">
          <li
            v-for="(text, index) in poetry_list_1"
            data-aos="fade-up"
            :data-aos-delay="200 + (index + 1) * 200"
            data-aos-duration="1000"
            :key="text"
          >{{text}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section1 {
  width: size(1920);
  height: size(1080);
  background-image: url('./s1/bg.jpg');
  background-size: cover;
  background-attachment: fixed;
}

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

.logo {
  width: size(888);
  top: size(380);
  right: size(239);
}

.logo-img {
  width: size(428);
  top: size(259);
  left: size(210);
}

.txt {
  width: size(886);
  top: size(648);
  right: size(241);
}

.btn {
  width: size(335);
  height: size(80);
  color: #fff;
  font-size: size(30);
  background: #004980;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: size(735);
  right: size(397);
  cursor: pointer;
}

.short {
  width: 100vw;
  height: size(905);
}

.poetry {
  // position: absolute;
  width: size(287 + 68);
  // border-top: 0.5px solid #ccc;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  // padding-top: size(40);
  // padding-right: size(20);

  li {
    margin: 0 size(30);
  }
}

.poetry-desc {
  width: size(287 + 68);
  writing-mode: vertical-rl;
  text-orientation: upright;
  font-size: size(32);
  font-weight: normal;
  color: #004980;
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
  .section1 {
    width: 100vw;
    height: size-m(667);
    background-image: url('./mo/1/bg.jpg');
    background-size: cover;
    background-attachment: fixed;
  }

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

  // .logo {
  //   width: size-m(241);
  //   top: size-m(88);
  //   right: size-m(67);
  // }

  .logo-img {
    width: size-m(241);
    top: size-m(88);
    right: size-m(67);
    left: auto;
  }

  .txt {
    width: size-m(241);
    top: size-m(388);
    right: size-m(67);
  }

  .btn {
    width: size-m(140);
    height: size-m(38);
    color: #fff;
    font-size: size-m(15);
    background: #004980;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: size-m(538);
    right: size-m(168);
    cursor: pointer;
  }

  .short {
    width: 100vw;
    height: size-m(395);
  }

  .poetry {
    // position: absolute;
    width: size-m(170);
    // border-top: 0.5px solid #ccc;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    // padding-top: size(40);
    // padding-right: size(20);

    li {
      margin: 0 size-m(13);
    }
  }

  .poetry-desc {
    width: size-m(170);
    writing-mode: vertical-rl;
    text-orientation: upright;
    font-size: size-m(17);
    font-weight: normal;
    color: #004980;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
      isMobile,
      isTablet,
      poetry_list_1: [
        '一條有故事的街道',
        '一棟有學問的房子',
        '職人手工限量十九席',
        '書墨浦城  靜邀',
        '拾藏百年城南歲月閑好',
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
