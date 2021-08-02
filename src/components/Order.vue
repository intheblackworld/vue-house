<template>
  <div class="order-bg">
    <img src="@/projects/tsi2/s1/bgimg2.png" alt="" class="bg-img2">
   <img src="@/projects/tsi2/s1/bgimg1.png" alt="" class="bg-img1">
    <!-- <img src="@/projects/fs/order/bg_m.jpg" alt="" class="bg-img" v-if="isMobile"> -->
    <div class="order-top">
      <!-- <div class="title-block">
        <h3 class="title">{{order.title}}</h3>
        <div class="subtitle">{{order.subTitle}}</div>
      </div> -->
      <h3
        class="order-title"
        v-html="order.title"
        data-aos="fade-down"
        data-aos-delay="0"
      ></h3>
      <div
        class="order-subtitle"
        data-aos="fade-down"
        data-aos-delay="100"
        v-html="order.subTitle"
      ></div>
      <div class="order">
        <div class="form">
          <div class="group">
            <div
              class="row"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              <label>姓名</label>
              <el-input
                v-model="form.name"
                placeholder
              ></el-input>
            </div>
            <div
              class="row"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <label>手機</label>
              <el-input
                v-model="form.phone"
                placeholder
              ></el-input>
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
            <!-- <div class="row">
              <label>想看房型</label>
              <el-select v-model="form.house" placeholder>
                <el-option
                  v-for="city in ['甜蜜2房', '幸福3房', '都想看看']"
                  :key="city"
                  :label="city"
                  :value="city"
                  no-data-text=""
                ></el-option>
              </el-select>
            </div> -->
            <!-- <div class="row">
              <label>E-mail</label>
              <el-input v-model="form.email" placeholder></el-input>
            </div> -->
            <div
              class="row"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <label>居住城市</label>
              <el-select
                v-model="form.city"
                placeholder
              >
                <el-option
                  v-for="city in cityList"
                  :key="city.value"
                  :label="city.label"
                  :value="city.value"
                  no-data-text="無數據"
                ></el-option>
              </el-select>
            </div>
            <div
              class="row"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <label>居住地區</label>
              <el-select
                v-model="form.area"
                placeholder
              >
                <el-option
                  v-for="area in areaList"
                  :key="area.value"
                  :label="area.label"
                  :value="area.value"
                  no-data-text="請先選擇居住城市"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div
            class="group"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            <div class="row">
              <el-input
                type="textarea"
                :rows="2"
                placeholder="請輸入您的留言 (選填)"
                v-model="form.msg"
              ></el-input>
            </div>
          </div>
        </div>
        <div
          class="control"
          data-aos="fade-down"
          data-aos-delay="500"
        >
          <el-checkbox v-model="checked">
            <h3>
              本人知悉並同意
              <span @click="showPolicyDialog">「個資告知事項聲明」</span>
              內容
            </h3>
          </el-checkbox>
        </div>
        <div
          style="margin: 0 auto;z-index:2;"
          v-if="!isMobile"
          data-aos="fade-down"
          data-aos-delay="600"
        >
          <vue-recaptcha
            :sitekey="info.recaptcha_site_key_v2"
            @verify="isVerify = true"
            :loadRecaptchaScript="true"
          ></vue-recaptcha>
        </div>
        <div
          style="margin: 0 auto;z-index:2;"
          v-if="isMobile"
        >
          <vue-recaptcha
            :sitekey="info.recaptcha_site_key_v2"
            @verify="isVerify = true"
            :loadRecaptchaScript="true"
          ></vue-recaptcha>
        </div>
        <el-button
          class="form-submit flex-c"
          type="primary"
          :disabled="!checked || !isVerify"
          @click="submit"
          :loading="isSubmit"
        >立即預約</el-button>
        <Loading
          :loading="isSubmit"
          :isOpacity="true"
        />
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
          '「姓名、手機」是必填欄位',
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
      }).then(response => {
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
.bg-img1,
.bg-img2 {
  position: absolute;
  width:calc(2561 * 100vw / 1920);
  left: 50%;
  bottom: 555px;
  animation: img 7s 0s ease-in-out infinite alternate;
  transform-origin: 20% 100%;
    transform: scaleY(0.96) translate(-50%, 0);
}
.bg-img2 {
  animation: img 7s -1s ease-in-out infinite alternate;}

@keyframes img {
  to {
    transform: scaleX(0.97) translate(-50%, 5%);
  }
}
.order-bg {
  background-color: $order_bg_color;
 // background-image: $order_bg_image;
  background-repeat: no-repeat;
  position: relative;
  padding-top: 130px;
  background-size: 100vw 100%;
  background-attachment: fixed;
  background-position: 0% 0%;
  font-family: $family3;
  overflow: hidden;
  input,
  textarea,
  button {
    font-family: $family3;
  }
  .order-top {
    position: relative;
    overflow: hidden;
  }
  .order-title {
    font-family: $family2;
    width: 80vw;
    padding-top: 20px;
    padding-bottom: 20px;
    margin: 0 auto 10px;
    display: inline-block;
    font-weight: 700;
    line-height: 1.7;
    letter-spacing: 20px;
    font-size: calc(100vw * 50 / 1920);
    text-align: center;
    color: $order_title_color;
    // border-top: 1px solid #248184;
    // border-bottom: 1px solid #248184;
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
      //width:10em;
      flex: 0 0 6.8em;
      display:block;text-align: left;
      font-size: 16px;
      opacity: 0.8;
      font-weight: bold;
      color: $order_input_label_color;

      span {
        color: #ff0000;
      }
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
  //  background-image: $order_bg_image;
  //  background-size: cover;
    padding-top: 40px;
    margin: 0;
    // position: relative;
    z-index: 2;

    > img {
      display: block;
    }
    .order-title {
      width: 290px;
      padding-top: 10px;
      padding-bottom: 0px;
      font-size: calc(100vw * 47 / 375);
      letter-spacing: 4px;
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
    margin-bottom: -12px ;
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
    .el-checkbox{
      margin:10px auto;
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
