<template>
  <div class="info-footer" id="info-footer">
    <div class="container flex-as flex-jb">
      <div>
        <img src="../projects/shin-lan/shin-lan/all/bottom_logo.png" alt="" class="logo">
        <div class="flex flex-ac">
          <div class="desc">
            建築不只是良心事業，更是腳踏實地，<br />
            始終如一的堅持。
          </div>
          <div class="links flex-ac">
            <a href="" target="_blank" class="social-link">
              <img src="../projects/shin-lan/shin-lan/all/fb.png" alt="">
            </a>
            <a href="" target="_blank" class="social-link">
              <img src="../projects/shin-lan/shin-lan/all/line.png" alt="">
            </a>
          </div>
        </div>
      </div>
      <div class="infos flex">
        <div>
          <div class="info-title">
            聯絡資訊
          </div>
          <div class="info-list">
            TEL｜{{info.phone}}<br />
            FAX｜{{info.fax}}
          </div>
        </div>
        <div v-if="isPC">
          <div class="info-title">
            關於欣聯
          </div>
          <div class="info-list">
            <div @click="$router.push('/about_us')">關於我們</div>
            <div @click="$router.push('/news')">最新消息</div>
            <div @click="$router.push('/medias')">影音專區</div>
            <div @click="$router.push('/company')">企業責任</div>
            <div @click="$router.push('/renewal')">都更專區</div>
          </div>
        </div>
        <div v-if="isPC">
          <div class="info-title">
            建案資訊
          </div>
          <div class="info-list">
            <div @click="$router.push('/hot_case')">熱銷個案</div>
            <div @click="$router.push('/classic_case')">經典案例</div>
          </div>
        </div>
        <div v-if="isPC">
          <div class="info-title">
            客戶專區
          </div>
          <div class="info-list">
            <div @click="$router.push('/member')">會員專區</div>
            <div @click="$router.push('/contacts')">聯絡我們</div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// import info from '@/info'
import { isPC } from '@/utils'
import Footer from '@/layouts/Footer.vue'
import info from '@/info'
export default {
  name: 'info_footer',
  components: {
    Footer,
  },
  data() {
    return {
      isPC,
      info,
      // houseInfos: info.houseInfos,
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.info-footer {
  width: 100vw;
  height: size(352);
  position: relative;
  z-index: 1;
  background-color: rgba(17, 17, 3, 0.22);
  @include md {
    height: sizem(374);
  }
}

.container {
  width: 1200px;
  height: size(313);
  margin: 0 auto;
  padding: size(40) 0;
  @include md {
    width: 100%;
    height: auto;
    padding: 0;
  }
}

.links {
  @include md {
    @include img_r_m(106, 208, 33);
  }
}

.social-link {
  width: size(35);
  margin-right: 5px;

  img {
    width: 100%;
  }

  @include md {
    width: sizem(48);
  }
}

.logo {
  display: block;
  width: size(210);
  margin-bottom: size(15);

  @include md {
    @include img_l_m(209, 50, 33);
  }
}

.desc {
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: size(1.44);
  text-align: left;
  color: #000;
  @include md {
    @include img_c_m(310, 114);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    text-align: left;
    color: #000;
  }
}

.infos {
  width: 55%;
  justify-content: space-between;

  @include md {
    @include img_l_m(131, 208, 33);
  }

  .info-title {
    width: size(86);
    font-size: size(21);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.24;
    letter-spacing: size(0.82);
    text-align: left;
    color: #333;
    border-bottom: solid 1px #c59c63;
    white-space: nowrap;
    margin-bottom: 0.5rem;

    @include md {
      width: sizem(86);
      font-size: sizem(18);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.28;
      letter-spacing: sizem(0.7);
      text-align: left;
      color: #333;
    }
  }

  .info-list {
    font-size: size(18);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.06;
    letter-spacing: size(5.72);
    text-align: left;
    color: #333;
    > div {
      cursor: pointer;
    }

    @include md {
      font-size: sizem(15);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.6;
      letter-spacing: normal;
      text-align: left;
      color: #333;
    }
  }
}

/* 平板尺寸 */
// @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
//   .content {
//     width: 686px;
//   }

//   .title {
//     font-size: 32px;
//     margin: 40px 0 24px;
//   }

//   .item {
//     margin-bottom: 20px;
//   }
// }

// // 避免內容電腦過渡平板時，設計未考量的調整
// @media only screen and (min-width: 1025px) and (max-width: 1199.98px) {
// }
</style>
