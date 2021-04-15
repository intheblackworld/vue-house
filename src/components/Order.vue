<template>
  <div>
  <div class="order-bg">
    <!-- <img src="@/projects/fs/order/bg.png" alt="" class="bg-img"> -->
    <!-- <img src="@/projects/fs/order/bg1.png" alt="" class="bg-img no-mix"> -->
    <!-- <img src="@/projects/fs/order/bg_m.jpg" alt="" class="bg-img" v-if="isMobile"> -->
    <div class="order-tt"></div>
    <div class="order-top">
      <!-- <div class="title-block">
        <h3 class="title">{{order.title}}</h3>
        <div class="subtitle">{{order.subTitle}}</div>
      </div> -->
      <div class="order-title_text">
      <div class="order-title" v-html="order.title" v-if="order.title"></div>
      <div class="order-subtitle" v-html="order.subTitle" v-if="order.subTitle"></div>
      </div>
      <div class="order">
        <div class="form">
          <div class="group">
            <div class="row">
              <label>姓名</label>
              <el-input v-model="form.name" placeholder></el-input>
            </div>
            <div class="row">
              <label>手機</label>
              <el-input v-model="form.phone" placeholder></el-input>
            </div>
            <div class="row">
              <label>居住城市</label>
              <el-select v-model="form.city" placeholder>
                <el-option v-for="city in cityList" :key="city.value" :label="city.label" :value="city.value" no-data-text="無數據"></el-option>
              </el-select>
            </div>
            <div class="row">
              <label>居住地區</label>
              <el-select v-model="form.area" placeholder>
                <el-option v-for="area in areaList" :key="area.value" :label="area.label" :value="area.value" no-data-text="請先選擇居住城市"></el-option>
              </el-select>
            </div>
          </div>
          <div class="group">
            <div class="row">
              <el-input type="textarea" :rows="2" placeholder="請輸入您的留言 (選填)" v-model="form.msg"></el-input>
            </div>
          </div>
        </div>
        <div class="control">
          <el-checkbox v-model="checked" checked>
            <h3>
              本人知悉並同意<br v-if="isMobile">
              <span @click="showPolicyDialog">「個資告知事項聲明」</span>
              內容
            </h3>
          </el-checkbox>
        </div>
        <!--
        <div style="margin: 0 auto;z-index:2;" v-if="!isMobile" data-aos="fade-down" data-aos-delay="600">
          <vue-recaptcha :sitekey="info.recaptcha_site_key_v2" @verify="isVerify = true" :loadRecaptchaScript="true"></vue-recaptcha>
        </div>
        <div style="margin: 0 auto;z-index:2;" v-if="isMobile">
          <vue-recaptcha :sitekey="info.recaptcha_site_key_v2" @verify="isVerify = true" :loadRecaptchaScript="true"></vue-recaptcha>
        </div>
        <el-button class="form-submit flex-c" type="primary" :disabled="!checked || !isVerify" @click="submit" :loading="isSubmit">立即預約</el-button>
        -->
        <el-button class="form-submit flex-c" type="primary" @click="submit" :loading="isSubmit">立即預約</el-button>
        <Loading :loading="isSubmit" :isOpacity="true" />
      </div>
    </div>
    <ContactInfo />
    <GoogleMap />
  </div>
    <PolicyDialog :policyVisible="policyVisible" />
  </div>
</template>

<script>
import ContactInfo from '@/components/ContactInfo.vue'
import GoogleMap from '@/components/GoogleMap.vue'
import PolicyDialog from '@/components/PolicyDialog.vue'
import info from '@/info'
import { cityList, renderAreaList } from '@/info/address'
import { isMobile } from '@/utils'
import Loading from '@/components/Loading.vue'
import VueRecaptcha from 'vue-recaptcha'

export default {
  name: 'order',
  components: {
    ContactInfo,
    GoogleMap,
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
      isVerify: false, // google 機器人驗證
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
          '「姓名、手機，並勾選個資法聲明」',
        ),
      })
    },

    // alertValidatePhone() {
    //   const h = this.$createElement
    //   this.$notify({
    //     title: '手機格式錯誤',
    //     message: h(
    //       'i',
    //       { style: 'color: #82191d' },
    //       '格式範例：09xxxxxxxx',
    //     ),
    //   })
    // },

    submit() {
      if (this.isSubmit) return
      if (!this.isVerify) return
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

      // if (!/1{2}[0-9]{8}$/.test(this.form.phone)) {
      //   this.alertValidatePhone()
      //   this.isSubmit = false
      //   return
      // }
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
  // background-color: $order_bg_color;
  background-image: $order_bg_image;
  background-repeat: Srepeat;
  position: relative;
  // padding-top: 130px;
  background-size: 100vw auto;
  background-attachment: fixed;
  background-position: 80% 0%;
  font-family: $family3;
  input,
  textarea,
  button {
    font-family: $family3;
  }

  .order-tt {position: relative;
    width: size(1440);
    height: size(350);
    margin: 0 auto size(-300);
    top: size(-300);
    background: rgba(0, 0, 0, 0.8);
  }
  .order-top {
    width: size(1440);
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.8);
    position: relative;
    overflow: hidden;
  }
  .order-title_text{
    font-size: calc(100vw * 16 / 1920);
    text-align: center;
    line-height: 1.6;
    padding: 1em 0;
  }
  .order-title {
    font-family: $family2;
    width: 100%;
    font-weight: 900;
    letter-spacing: 0.5em;
    color: $order_title_color;
    font-size: 2.1em;
  }

  .order-subtitle {
    width: 100%;
    font-size:1em;
    color: $order_subtitle_color;
  }

  .order {
    width: 920px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
    justify-content: space-between;
  }

  .form {
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin: 0 auto;
    justify-content: space-between;
    > .group {
      flex: 1;
      align-items: flex-start;
    }
  }

  .group {
    height: 250px;
    margin-bottom: 40px;

    &:nth-child(1) {
      border-right: 1px solid rgba(0, 0, 0, 0.2);
      .row {
        justify-content: flex-start;
      }
    }

    &:nth-child(2) {
      .row {
        justify-content: flex-end;
        align-items: flex-start;
        height: 100%;
      }
    }
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
      width: 92px;
      font-size: 16px;
      opacity: 0.8;
      font-weight: bold;
      color: $order_input_label_color;
    }
  }

  .control {
    margin-top: 0px;
    margin-bottom: 20px;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  /*
  .order-title {
  }

  .order-subtitle {
  }
  */

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
    background-attachment: initial;
    background-size: cover;
    padding-top: 0px;
    margin: 0;
    position: relative;
    z-index: 2;

    > img {
      display: block;
    }

    .order-tt {
      width: 100%;
      height: sizem(20);
      top: 0;
      margin: 0 auto;
      background: rgba(0, 0, 0, 0.8);
    }
    .order-top {
      width: 100%;
      margin: 0 auto;
      background: rgba(0, 0, 0, 0.8);
      position: relative;
      overflow: hidden;
    }
    .order-title_text{
      font-size: calc(100vw * 16 / 375);
    }
    .order-title {
    }
    .order {
      width: 95% !important;
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

    .hint {
      width: calc(100vw * 334 / 375);
      font-size: 12px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.2;
      letter-spacing: normal;
      text-align: left;
      color: #ffffff;
    }
  }
}
</style>
