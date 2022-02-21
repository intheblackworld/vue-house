<template>
  <div class="order-bg">
    <div class="order">
      <div class="shin-lan-title-h shin-lan-title-h-m title gold" data-aos="fade" data-aos-delay="0">
        聯絡<span data-aos="flip-right"></span>我們
      </div>
      <div class="order-desc" v-html="order.desc" data-aos="fade" data-aos-delay="0"></div>
      <div class="order-hint" data-aos="fade" data-aos-delay="0">* 每個欄位都是必填欄位</div>
      <div class="form">
        <div class="group">
          <!-- <div class="form-hint">* 每個欄位都是必填欄位</div> -->
          <div class="row" data-aos="fade-down" data-aos-delay="100">
            <el-input id="form-name" v-model="form.name" placeholder="姓名 (必填)"></el-input>
          </div>
          <div class="row" data-aos="fade-down" data-aos-delay="200">
            <el-input id="form-phone" v-model="form.phone" placeholder="電話 (必填)"></el-input>
          </div>
          <div class="row" data-aos="fade-down" data-aos-delay="200">
            <el-input id="form-phone" v-model="form.type" placeholder="想了解的建案"></el-input>
          </div>
          <div class="row" data-aos="fade-down" data-aos-delay="300">
            <el-input type="textarea" :rows="5" placeholder="請輸入您的留言，將有專人為您服務" v-model="form.msg"></el-input>
          </div>
          <div class="control" data-aos="fade-down" data-aos-delay="500">
            <div class="control-desc">
              <p>您所登錄的個人資料將作為以下用途</p>
              <p>
                (一)本網站所載之相關事項通知<br />
                (二)客戶管理與服務<br />
                (三)本公司行銷業務之推廣
              </p>
            </div>
            <el-checkbox v-model="checked">
              <div>
                本人知悉並同意
                <span @click="showPolicyDialog">「個資告知事項聲明」</span>
                內容
              </div>
            </el-checkbox>
          </div>
          <!-- <div style="margin: 0 auto;z-index:2;" v-if="!isMobile" data-aos="fade-down" data-aos-delay="600">
            <vue-recaptcha :sitekey="info.recaptcha_site_key_v2" @verify="isVerify = true" :loadRecaptchaScript="true"></vue-recaptcha>
          </div>
          <div style="margin: 0 auto;z-index:2;" v-if="isMobile">
            <vue-recaptcha :sitekey="info.recaptcha_site_key_v2" @verify="isVerify = true" :loadRecaptchaScript="true"></vue-recaptcha>
          </div> -->
          <el-button class="form-submit flex-c" type="primary" :disabled="!checked" @click="submit" :loading="isSubmit">確認送出</el-button>
        </div>
        <div class="group">
          <iframe class="google-map" title="googlemap" :src="googleSrc" width="100%" height="535" frameborder="0" style="border: 0" allowfullscreen data-aos="fade-down" data-aos-delay="300" />
          <div class="control" data-aos="fade-down" data-aos-delay="500">
            <img src="../projects/shin-lan/shin-lan/all/logo.png" alt="" class="logo">
            <div class="control-desc">
              <p>
                地址｜{{info.address}}<br />
                電話｜{{info.phone}}<br />
                傳真｜{{info.fax}}<br />
                E-mail｜{{info.email}}<br />
                歡迎來電或來信洽詢
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- <img src="./" alt="" class="bottom-img"> -->
      <Loading :loading="isSubmit" :isOpacity="true" />
    </div>
    <PolicyDialog :policyVisible="policyVisible" />
  </div>
</template>

<script>
// import ContactInfo from '@/components/ContactInfo.vue'
import PolicyDialog from '@/components/PolicyDialog.vue'
import info from '@/info'
import { cityList, renderAreaList } from '@/info/address'
import { isMobile } from '@/utils'
import Loading from '@/components/Loading.vue'
import VueRecaptcha from 'vue-recaptcha'

export default {
  name: 'order',
  components: {
    PolicyDialog,
    Loading,
    VueRecaptcha,
  },

  data() {
    return {
      cityList,
      info,
      order: info.order,
      isMobile,
      googleSrc: info.googleSrc,
      form: {
        name: '',
        phone: '',
        email: '',
        city: '',
        area: '',
        msg: '',
        time_start: '',
        time_end: '',
      },
      checked: false,
      isSubmit: false,
      // isVerify: false, // google 機器人驗證
      policyVisible: false,
      showValidateDialog: false,
    }
  },

  computed: {
    areaList() {
      return renderAreaList(this.form.city)
    },
  },

  methods: {
    showPolicyDialog() {
      this.policyVisible = true
    },

    alertValidate() {
      const h = this.$createElement
      this.$notify({
        title: '請填寫必填欄位',
        message: h(
          'i',
          { style: 'color: #82191d' },
          '「姓名、手機」是必填欄位',
        ),
      })
    },

    submit() {
      if (this.isSubmit) return
      // if (!this.isVerify) return
      if (!this.checked) return
      this.isSubmit = true
      if (
        !this.form.name ||
        !this.form.phone
        // ||
        // !this.form.time_start ||
        // !this.form.time_end
        // ||
        // !this.form.email ||
        // !this.form.city ||
        // !this.form.area
      ) {
        this.alertValidate()
        this.isSubmit = false
        return
      }
      const urlParams = new URLSearchParams(window.location.search)
      const utmSource = urlParams.get('utm_source')
      const utmMedium = urlParams.get('utm_medium')
      const utmContent = urlParams.get('utm_content')
      const utmCampaign = urlParams.get('utm_campaign')
      const formData = new FormData()
      formData.append('name', this.form.name)
      formData.append('phone', this.form.phone)
      formData.append('email', this.form.email)
      formData.append('msg', this.form.msg)
      formData.append('type', this.form.type)
      // formData.append('time_start', this.form.time_start)
      // formData.append('time_end', this.form.time_end)
      formData.append('city', this.form.city)
      formData.append('area', this.form.area)
      formData.append('utm_source', utmSource)
      formData.append('utm_medium', utmMedium)
      formData.append('utm_content', utmContent)
      formData.append('utm_campaign', utmCampaign)
      const time = new Date()
      const year = time.getFullYear()
      const month = time.getMonth() + 1
      const day = time.getDate()
      const hour = time.getHours()
      const min = time.getMinutes()
      const sec = time.getSeconds()
      const date = `${year}-${month}-${day} ${hour}:${min}:${sec}`
      fetch(
        `https://script.google.com/macros/s/AKfycbyQKCOhxPqCrLXWdxsAaAH06Zwz_p6mZ5swK80USQ/exec?name=${this.form.name}&phone=${this.form.phone}&email=${this.form.email}&cityarea=${this.form.city}${this.form.area}&msg=${this.form.msg}&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_content=${utmContent}&utm_campaign=${utmCampaign}&date=${date}&campaign_name=${info.caseName}
      `,
        {
          method: 'GET',
        },
      )
      fetch('contact-form.php', {
        method: 'POST',
        body: formData,
      }).then((response) => {
        this.isSubmit = false
        if (response.status === 200) {
          window.location.href = 'formThanks'
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variableColor.scss';
@import '@/assets/style/function.scss';
.bg-img {
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  display: block;
  object-fit: cover;
  // mix-blend-mode: screen;
  //background: ("~@/projects/fs/order/bg_m.jpg");
  &.no-mix {
    mix-blend-mode: normal;
    height: 100%;
  }
}
.order-bg {
  //background-color: $order_bg_color;
  width: 100vw;
  height: auto;
  // background-image: $order_bg_image;
  background-repeat: repeat;
  // position: relative;
  // background-size: 100vw auto;
  background-attachment: fixed;
  background-position: 80% 0%;
  overflow: hidden;
  font-family: $family3;
  input,
  textarea,
  button {
    font-family: $family3;
  }

  .title {
    margin-bottom: size(40);
  }
  .order-title {
    font-family: $family2;
    width: 100vw;
    padding-top: size(10);
    font-size: size(58.7);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: size(11.69);
    text-align: center;
    color: #ffffff;
    color: $order_title_color;
  }

  .order-desc {
    width: 50%;
    font-size: size(18);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: size(1.44);
    text-align: justify;
    color: #000;
    margin-bottom:2em;
    @include md {
      width: 100%;
    font-size: sizem(15);
      margin-bottom: sizem(25);
    }
  }

  .order-hint {
    font-size: size(20);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: size(0.2);
    text-align: left;
    color: #000;
    margin-bottom: size(25);
    @include md {
      font-size: sizem(15);
    }
  }

  .order {
    width: size(1440);
    margin: 6vw auto 3vw auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
    justify-content: space-between;
  }

  .logo {
    width: size(345);
    margin-left: 0;
    display: inline-block;

    @include md {
      width: sizem(237);
    }
  }

  .form-hint {
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 30px;
    letter-spacing: 0.02em;
    text-align: left;
    color: $order_subtitle_color;
    margin-bottom: 5px;
  }

  .form {
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin: 0 auto;
    justify-content: space-between;
    > .group {
      // flex: 1;
      align-items: flex-start;
      &:nth-child(1) {
        margin: 0 size(40) 0 0;
      }
    }
  }

  .group {
    flex: 1 1 auto;
    // height: 250px;
    margin-bottom: 40px;

    // &:nth-child(1) {
    //   border-right: 1px solid rgba(0, 0, 0, 0.2);
    //   padding: 0 29px 0 0;
    //   .row {
    //     justify-content: flex-start;
    //   }
    // }

    // &:nth-child(2) {
    //   .row {
    //     justify-content: flex-end;
    //     align-items: flex-start;
    //     height: 100%;
    //   }
    // }
  }

  .row {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    &.house {
      margin-top: 50px;
    }

    &:nth-last-child(1) {
      margin-bottom: 0;
    }

    label {
      width: size(92);
      font-size: size(16);
      opacity: 0.8;
      font-weight: bold;
      color: $order_input_label_color;
    }
  }

  .control {
    margin-top: 0px;
    margin-bottom: 20px;
    text-align: left;
  }

  .control-desc {
    font-size: size(18);
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.02em;
    text-align: left;
    color: #000;

    p {
      margin-bottom: 0.8em;
    }
  }

  .google-map {
    // margin-top: 35px;
    margin-bottom: 15px;

    @include md {
      height: sizem(250);
    }
  }
}
.el-textarea .el-textarea__inner,
.el-input__inner {
  font-size: size(20) !important;
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .order-title {
    font-size: 32px;
  }

  .order-subtitle {
    font-size: 16px;
  }

  .order {
    width: 920px;
    margin: 0 auto;
  }
}

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .order-bg {
    // background-image: $order_bg_image_m;
    /*background-attachment: initial;
    background-size: cover;*/
    height: auto;
    padding-top: 40px;
    margin: 0;
    // position: relative;
    z-index: 2;

    > img {
      display: block;
    }
    .order-title {
      padding-top: 10px;
      padding-bottom: 5px;
      font-size: calc(100vw * 25 / 375);
      letter-spacing: 4px;
    }

    .order-subtitle {
      font-size: sizem(15);
      margin-bottom: 0;
    }

    .form-hint {
      font-size: sizem(16);
    }
    .order {
      width: sizem(310) !important;
      margin: 0 auto;
      padding: 0;
    }

    .form {
      flex-direction: column;
    }

    .group {
      width: 100%;
      height: auto !important;
      margin-bottom: 0px !important;
      border: none !important;
      &:nth-child(1) {
        padding: 0;
      }
    }

    .row {
      margin-bottom: 12px !important;

      &.house {
        margin-top: 20px;
      }
      label {
        width: 30% !important;
      }
    }

    .control {
      margin-top: 10px;
      margin-bottom: 10px;
    }

    .control-desc {
      font-size: sizem(15);
    }
  }
}
</style>
