<template>
  <div class="order-bg">
  <!--  <img src="@/projects/ypy1/c/bg.png" alt="" class="bg-img" v-if="isPC">
    <img src="@/projects/ypy1/m/c/bg_t.png" alt="" class="bg-img" v-if="isMobile">-->
    <!-- <img src="@/projects/fs/order/bg1.png" alt="" class="bg-img no-mix"> -->
    <!-- <img src="@/projects/fs/order/bg_m.jpg" alt="" class="bg-img" v-if="isMobile"> -->
    <div class="order-top">
      <!-- <div class="title-block">
        <h3 class="title">{{order.title}}</h3>
        <div class="subtitle">{{order.subTitle}}</div>
      </div> -->
      <h3 class="order-title" v-html="order.title" data-aos="fade-down" data-aos-delay="0"></h3>
      <div class="order-subtitle" data-aos="fade-down" data-aos-delay="100" v-html="order.subTitle"></div>
      <div class="order">
        <div class="form">
          <div class="group form_input" data-aos="fade-down" data-aos-delay="0">
            <div class="row" data-aos="fade-down" data-aos-delay="100">
              <label for="order-name">姓名<span>*</span></label>
              <el-input v-model="form.name" name="order-name" id="order-name" placeholder></el-input>
            </div>
            <div class="row" data-aos="fade-down" data-aos-delay="200">
              <label for="order-phone">手機<span>*</span></label>
              <el-input v-model="form.phone" name="order-phone" id="order-phone" placeholder></el-input>
            </div>
            <!-- <div class="row" data-aos="fade-down"
        data-aos-delay="300">
              <label>聯絡時間(起)</label>
              <el-time-select
                v-model="form.time_start"
                :editable="false"
                :picker-options="{
                  start: '10:00',
                  step: '01:00',
                  end: '18:00',
                }"
              ></el-time-select>
            </div>
            <div class="row" data-aos="fade-down"
        data-aos-delay="400">
              <label>聯絡時間(迄)</label>
              <el-time-select
                v-model="form.time_end"
                :editable="false"
                :picker-options="{
                  start: '10:00',
                  step: '01:00',
                  end: '18:00',
                }"
              ></el-time-select>
            </div> -->
            <div class="row" data-aos="fade-down" data-aos-delay="200">
              <label for="order-house">需求坪數<span>*</span></label>
              <el-select v-model="form.house" name="order-house" id="order-house" placeholder>
                <el-option v-for="city in ['22坪', '30坪', '42坪', '53坪']" :key="city" :label="city" :value="city" no-data-text=""></el-option>
              </el-select>
            </div>
            <!-- <div class="row">
              <label>E-mail</label>
              <el-input v-model="form.email" placeholder></el-input>
            </div> -->
            <div class="row" data-aos="fade-down" data-aos-delay="300">
              <label for="order-city">居住城市</label>
              <el-select v-model="form.city" name="order-city" id="order-city" placeholder>
                <el-option v-for="city in cityList" :key="city.value" :label="city.label" :value="city.value" no-data-text="無數據"></el-option>
              </el-select>
            </div>
            <div class="row" data-aos="fade-down" data-aos-delay="400">
              <label for="order-area">居住地區</label>
              <el-select v-model="form.area" name="order-area" id="order-area" placeholder>
                <el-option v-for="area in areaList" :key="area.value" :label="area.label" :value="area.value" no-data-text="請先選擇居住城市"></el-option>
              </el-select>
            </div>
          </div>
          <div class="group" data-aos="fade-down" data-aos-delay="500">
            <div class="row">
              <el-input type="textarea" :rows="2" placeholder="請輸入您的留言 (選填)" v-model="form.msg"></el-input>
            </div>
          </div>
        </div>
        <div class="control" data-aos="fade-down" data-aos-delay="500">
          <el-checkbox v-model="checked">
            <h3>
              本人知悉並同意
              <span @click="showPolicyDialog">「個資告知事項聲明」</span>
              內容
            </h3>
          </el-checkbox>
        </div>
        <div style="margin: 0 auto;z-index:2;" v-if="!isMobile" data-aos="fade-down" data-aos-delay="600" data-aos-duration="300">
          <vue-recaptcha :sitekey="info.recaptcha_site_key_v2" @verify="isVerify = true" :loadRecaptchaScript="true"></vue-recaptcha>
        </div>
        <div style="margin: 0 auto;z-index:2;" v-if="isMobile">
          <vue-recaptcha :sitekey="info.recaptcha_site_key_v2" @verify="isVerify = true" :loadRecaptchaScript="true"></vue-recaptcha>
        </div>
        <el-button class="form-submit flex-c" type="primary" :disabled="!checked || !isVerify" @click="submit" :loading="isSubmit">立即預約</el-button>
        <Loading :loading="isSubmit" :isOpacity="true" />
      </div>
    </div>
    <ContactInfo />
    <GoogleMap />
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
          '「姓名、手機、需求坪數」',
        ),
      })
    },

    submit() {
      if (this.isSubmit) return
      if (!this.isVerify) return
      if (!this.checked) return
      this.isSubmit = true
      if (
        !this.form.name ||
        !this.form.phone ||
        // !this.form.time_start ||
        // !this.form.time_end
        // ||
        // !this.form.email ||
        // !this.form.city ||
        !this.form.house
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
      // formData.append('time_start', this.form.time_start)
      // formData.append('time_end', this.form.time_end)
      formData.append('city', this.form.city)
      formData.append('area', this.form.area)
      formData.append('house', this.form.house)
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
        `https://script.google.com/macros/s/AKfycbyQKCOhxPqCrLXWdxsAaAH06Zwz_p6mZ5swK80USQ/exec?name=${this.form.name}&phone=${this.form.phone}&house=${this.form.house}&email=${this.form.email}&cityarea=${this.form.city}${this.form.area}&msg=${this.form.msg}&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_content=${utmContent}&utm_campaign=${utmCampaign}&date=${date}&campaign_name=${info.caseName}
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
  top: size(-310);
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
  position: relative;
  // padding-top: 130px;
  background-size:100% auto;
  // background-attachment: fixed;
  background-position: 0% 0%;
  font-family: $family3;
  input,
  textarea,
  button {
    font-family: $family3;
  }
  .order-top {
    position: relative;
    overflow: hidden;
    z-index: 3;
  }
  .order-title {
    font-family: $family2;
    width:920px;
    margin: 0 auto 0.2em;
    display:flex;align-items: center;
    font-weight: 900;
    line-height: 1.7;
    letter-spacing:0.2em;
    font-size: calc(100vw * 50 / 1920);
    text-align: center;
    text-indent:0.2em;
    color: $order_title_color;
    position: relative;left: 0.1em;

    &::after,
    &::before {
      content: '';
      width: auto;
      flex: 1;
      background:#fff000;
      height: 1px;left: -0.1em;position: relative;
    }
    &::after{margin-left: 0.5em;}
    &::before {margin-right: 0.5em;}
  }

  .order-subtitle {
    width: 100vw;
    font-size: 20px;
    text-align: center;
    color: $order_subtitle_color;
    margin-bottom: 20px;
    padding-bottom: 8px;
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
    font-size:16px !important;
    width: 100%;
    display: flex;
   // align-items: flex-start;
    margin: 0 auto;
    justify-content: space-between;
    margin-bottom: 1.5em;
    align-items:stretch;
    > .group {
      flex: 1;
      align-items: flex-start;
    &:nth-child(2) {
      .row {
        height: 100%;
      }
    }
  }


  }

  .row {
    display: flex;
    align-items: center;
    margin-bottom: 0.935em;

    &.house {
      margin-top: 50px;
    }

    &:nth-last-child(1) {
      margin-bottom: 0;
    }

    label {
      //width:10em;
      flex: 0 0 6.5em;
      display: block;
      text-align: left;
      font-size:1em;
      opacity: 0.8;
      font-weight: 900;
      padding: 0 0 0 0.6em;
      color: $order_input_label_color;

      span {
        color: #ff0000;
      }
    }
  //  .el-input{flex: 1;}
  }

  .form_input{
     border-right: 1px solid #fff000;
     padding-right:3%;
     margin-right:3%;
    .row{
    background: $order_input_bg;
    border: $order_input_border;
    color: $order_input_color;
    }
  }


  .control {
    margin-top: 0px;
    margin-bottom: 20px;
  }
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
  //  padding-top: sizem(160);
  padding-top:0;
    margin: 0;
    margin-top: sizem(-160);
    background-image: url('~@/projects/ypy1/m/c/bg.jpg');
    background-position: 50% sizem(160);

    > img {
      display: block;
    }
    .order-title {
      width: 290px;
      font-size: calc(100vw * 35 / 375);
    &::after,
    &::before {height: 2px;}
/*
      padding-top: 10px;
      padding-bottom: 0px;
      &::after {
        border-top: 2px solid #fff000;right:7em;
      }

      &::before {
        border-top: 2px solid #fff000;left:7em;
      }
      &::after {
        content: '';
        width: 60px;
        border-top: 2px solid #fff000;
        position: absolute;
        right: -10px;
        top: 50%;
      }

      &::before {
        content: '';
        width: 60px;
        border-top: 2px solid #fff000;
        position: absolute;
        left: -10px;
        top: 50%;
      }*/
    }

    .bg-img {
      background-color: #fff;
      top: 0;
    }

    .order-subtitle {
      // display: none;
      font-weight: bold;
      font-size: 14px;
    }
    .order {
      width: 84%;
      margin: 0 auto;
      padding: 0;
    }

    .form {
      flex-direction: column;
    }
    .row {
      label {
        width: 30% !important;
      }
    }

.form_input{
     border-right:0px solid #fff000;
     padding-right:0%;
     margin-right:0%;
    margin-bottom: 0.935em;
  }

    .control {
      .el-checkbox {
        margin: 10px auto;
      }
      /* margin-top: 10px;
      margin-bottom: 10px;
      */
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
