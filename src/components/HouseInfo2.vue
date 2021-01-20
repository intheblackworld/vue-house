<template>
  <div class="house-info" id="house-info">
    <div class="content">
      <!-- <div class="title" data-aos="fade-down" data-aos-delay="0">{{info.mechanism}}</div> -->
      <img src="../projects/db/contact/logo.png" :alt="`${info.caseName}_logo`" class="logo">
      <img src="../projects/db/contact/logot.png" :alt="`${info.caseName}_logot`" class="logot">
      <div class="desc">
        <span>{{info.address}}</span><br />
        {{info.phone}}
      </div>
      <!-- <div class="links flex-ac flex-jb">
        <a href="#">
          <img src="../projects/db/contact/icon1.png" :alt="`${info.caseName}_icon1`" class="ig">
        </a>
        <a href="#">
          <img src="../projects/db/contact/icon2.png" :alt="`${info.caseName}_icon2`" class="ig">
        </a>
        <a href="#">
          <img src="../projects/db/contact/icon3.png" :alt="`${info.caseName}_icon3`" class="ig">
        </a>
      </div> -->
      <!-- <div class="info" data-aos="fade-down" data-aos-delay="200">
        <div class="item">
          電話 {{info.phone}}
        </div>
        <div class="item">
          信箱 {{info.email}}
        </div>
        <div class="item">
          地址 {{info.address}}
        </div>
      </div> -->
    </div>
    <Footer />
  </div>
</template>

<script>
import info from '@/info'
import Footer from '@/layouts/Footer.vue'
export default {
  name: 'houseInfo',
  components: {
    Footer,
  },
  data() {
    return {
      info,
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variableColor.scss';
@import '@/assets/style/function.scss';
.house-info {
  width: 100vw;
  background: $house_bg center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  // background-attachment: fixed;
  // box-shadow: 0 0 15vw #0009;
}
.content {
  width: size(700);
  height: size(230);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.title {
  margin: 0.5em 0 0em 0;
  font-size: size(50);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: 0.1em;
  text-align: left;
  color: $house_title_color;
}

.info {
  margin-bottom: size(25);
}

// .item {
//   font-size: size(18);
//   font-weight: 500;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 2;
//   letter-spacing: 0.1em;
//   text-align: center;
//   color: #ffffff;
//   //margin-bottom: 12px;
//   //border-left: 4px solid $house_border_color;
//   .label {
//     font-size: 1em;
//     color: $house_label_color;
//     margin-bottom: 0;
//     margin-right: 0.8em;
//     white-space: nowrap;
//     font-family: $family3;
//     width: 4.5em;
//   }

//   .desc {
//     font-size: 14px;
//     text-align: left;
//     color: $house_desc_color;
//     font-family: $family3;
//     font-weight: bold;
//   }
// }

.desc {
}

.logo {
  @include img_l_pc(889, -50, 36);
}

.logot {
  @include img_l_pc(335, 111, 959);
}

.desc {
  @include img_l_pc(379, 152, 960);
  font-size: size(23.2);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.27;
  letter-spacing: size(1.46);
  text-align: left;
  white-space: nowrap;
  color: #ffffff;

  span {
    font-weight: bold;
  }
}

.links {
  @include img_r_pc(184, 154, 362);
  a {
    width: size(60);
  }

  img {
    width: 100%;
  }
}

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
.house-info {
  background-size: cover;
}
  .content {
    min-height: sizem(175 + 188);
    width: 100%;
    margin-bottom: 0;
    font-size: 15px;
    padding-bottom: 50px;
  }

  .title {
    font-size: 32px;
    margin: 0.8em 0 0.5em 0;
  }

  .item {
    align-items: flex-start;
    font-size: sizem(15);
    margin: 0;
    width: 100%;
    height: auto;
    margin-left: 0;
    padding: 5px 20px;
    white-space: normal;
  }

  .info {
    width: 100%;
    flex: 1;
    justify-content: space-around;
    align-content: space-around;
  }

  .logo {
    @include img_r_m(500, 10, 0);
  }

  .logot {
    @include img_r_m(277, 252, 65);
  }

  .desc {
    @include img_l_m(268, 285, 34);
    font-size: sizem(16);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: sizem(-0.32);
    text-align: left;
    white-space: nowrap;
    color: #ffffff;

    span {
      font-weight: 300;
    }
  }

  .links {
    @include img_l_m(184, 169, 161);
    a {
      width: sizem(52);
    }

    img {
      width: 100%;
    }
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .content {
    width: 686px;
  }

  .title {
    font-size: 32px;
    margin: 40px 0 24px;
  }

  .item {
    margin-bottom: 20px;
  }
}

// 避免內容電腦過渡平板時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1199.98px) {
}
</style>
