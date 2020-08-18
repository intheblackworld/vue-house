<template>
  <div>
    <div class="short flex-c">
      <div class="poetry">
        <h3
          class="poetry-title"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          v-if="!isMobile"
        >人生最好的時光，就是要用來慢慢品味</h3>
        <h3
          class="poetry-title"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          v-if="isMobile"
        >人生最好的時光<br />就是要用來慢慢品味</h3>
        <ul class="poetry-desc">
          <li
            v-for="(text, index) in poetry_list"
            data-aos="fade-right"
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
.short {
  width: size(1555);
  height: size(550);
  border-top: 1px solid #004980;
  border-bottom: 1px solid #004980;
  margin: 0 auto;
}

.poetry {
  // position: absolute;
  // width: size(360);
  // border-top: 0.5px solid #ccc;
  // display: flex;
  // justify-content: center;
  // flex-direction: row-reverse;
  // padding-top: size(40);
  // padding-right: size(20);

  li {
    margin: 0 size(30);
  }
}

.poetry-title {
  font-size: size(35);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: left;
  color: #004980;
  margin-bottom: size(40);
}

.poetry-desc {
  font-size: size(24);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
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
  .short {
    width: size-m(292);
    height: size-m(365);
    border-top: 1px solid #004980;
    border-bottom: 1px solid #004980;
    margin: 0 auto;
  }

  .poetry {
    // position: absolute;
    // width: size(360);
    // border-top: 0.5px solid #ccc;
    // display: flex;
    // justify-content: center;
    // flex-direction: row-reverse;
    // padding-top: size(40);
    // padding-right: size(20);

    li {
      margin: 0 size(30);
    }
  }

  .poetry-title {
    font-size: size-m(20);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    text-align: center;
    color: #004980;
    margin-bottom: size-m(16);
  }

  .poetry-desc {
    font-size: size-m(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    text-align: center;
    color: #000000;
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
      poetry_title: '人生最好的時光，就是要用來慢慢品味',
      poetry_list: [
        '住進來捨不得離開的浦城街',
        '十年來第一次稀有靜獻',
        '限量十九席　歡迎預約品賞',
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
