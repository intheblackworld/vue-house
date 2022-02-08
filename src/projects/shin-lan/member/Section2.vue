<template>
  <div class="section2">
    <div class="container">
      <div class="shin-lan-title-h shin-lan-title-h-m title gold" data-aos="fade" data-aos-delay="0">
        會員<span data-aos="flip-right"></span>登入
      </div>
      <div class="form flex-as flex-jb wrap">
        <div class="group">
          <div class="row flex-ac flex-jb" data-aos="fade-down" data-aos-delay="100">
            <div class="label">
              帳　號
            </div>
            <el-input id="form-email" v-model="form.email" placeholder="請輸入帳號"></el-input>
          </div>
          <div class="row flex-ac flex-jb" data-aos="fade-down" data-aos-delay="200">
            <div class="label">
              密　碼
            </div>
            <el-input id="form-phone" v-model="form.password" placeholder="請輸入密碼" type="password"></el-input>
          </div>
          <el-button class="form-submit flex-c" type="primary" @click="login" :loading="isSubmit">確認送出</el-button>
          <div class="hint" v-if="isPC">
            如需有加入會員需求,歡迎聯絡專員,由專人為您服務
          </div>
          <div class="hint" v-if="isMobile">
            如需有加入會員需求,<br />歡迎聯絡專員,由專人為您服務
          </div>
        </div>
        <div class="group">
          <img src="../shin-lan/accounts/img1.jpg" alt="" class="img1">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.section2 {
  width: 100%;
  // height: size(715);
  position: relative;
  margin: 0;
  // background: url('s1/bg.jpg') center;
  background-size: cover;
  overflow: hidden;
  text-align: center;
  // background-color: rgba(17, 17, 3, 0.11);

  // 手機版
  @include md {
    // height: 100vh;
    // height: size(604);
    // min-height: calc(604 * 100vw / 375);
    // max-height: calc(812 * 100vw / 375);
  }
}

.container {
  width: size(1240);
  margin: size(180) auto;

  @include md {
    width: sizem(310);
    margin: sizem(80) auto;
  }
}

.title {
  margin-bottom: size(30);
  @include md {
    margin-bottom: 0;
  }
}

.form {
  width: 100%;

  .group {
    width: 48%;

    @include md {
      width: 100%;
    }
  }

  .row {
    // height: size(70);
    margin-bottom: size(20);
    @include md {
      margin-bottom: 0;
      margin-top: sizem(20);
    }

    .label {
      width: 25%;
      font-size: size(19);
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.58;
      letter-spacing: size(19.57);
      text-align: left;
      color: #323333;

      @include md {
        display: none;
      }
    }
  }
  .form-submit {
    width: 100% !important;
    height: size(57) !important;
    font-size: size(20);
    font-weight: 500 !important;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: size(4);
    text-align: center;
    color: #fff;

    @include md {
      height: sizem(49) !important;
      margin-top: sizem(12);
      font-size: sizem(14) !important;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.21;
      letter-spacing: sizem(2.8);
      text-align: center;
      color: #fff;
    }
  }

  .hint {
    font-size: size(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: size(1.11);
    text-align: left;
    color: #000;
    margin-top: size(20);

    @include md {
      font-size: sizem(15);
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 2;
      letter-spacing: normal;
      text-align: left;
      color: #000;
      margin-top: sizem(12);
    }
  }
}

.img1 {
  width: 100%;
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import _ from 'lodash'
import { user_login } from '@/http/api'
// import slider from '@/mixins/slider.js'

export default {
  name: 'section2',

  // mixins: [slider],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isSubmit: false,
      form: {
        email: '',
        password: '',
      },
    }
  },
  computed: {},

  methods: {
    login() {
      if (!this.form.email || !this.form.password) {
        this.alertValidate()
        this.isSubmit = false
        return
      }
      user_login(this.form).then((res) => {
        console.log(res)
      })
    },
    alertValidate() {
      const h = this.$createElement
      this.$notify({
        title: '請填寫必填欄位',
        message: h(
          'i',
          { style: 'color: #82191d' },
          '「帳號、密碼」是必填欄位',
        ),
      })
    },
  },

  mounted() {},

  watch: {},

  created() {},
}
</script>
