<template>
  <div class="order-bg">
    <div class="bubble-bg" v-if="isPC">
      <img src="../projects/tsy/s1/bg_style_8.png" :alt="`${info.caseName}_bubble_1`" class="bubble_1">
      <img src="../projects/tsy/s1/bg_style_5.png" :alt="`${info.caseName}_bubble_2`" class="bubble_2">
      <img src="../projects/tsy/s1/bg_style_6.png" :alt="`${info.caseName}_bubble_3`" class="bubble_3">
      <img src="../projects/tsy/s1/bg_style_7.png" :alt="`${info.caseName}_bubble_4`" class="bubble_4">
    </div>
    <div class="bubble-bg" v-if="isMobile">
      <img src="../projects/tsy/mobile/m_bg_style_class_2.png" :alt="`${info.caseName}_bubble_1`" class="bubble_1">
    </div>
    <div class="bling-bg" v-if="isPC">
      <img src="../projects/tsy/s1/style_1.png" :alt="`${info.caseName}_bling_1`" class="bling_1">
      <img src="../projects/tsy/s1/style_2.png" :alt="`${info.caseName}_bling_2`" class="bling_2">
      <img src="../projects/tsy/s1/style_2.png" :alt="`${info.caseName}_bling_3`" class="bling_3">
      <img src="../projects/tsy/s1/style_2.png" :alt="`${info.caseName}_bling_4`" class="bling_4">
    </div>
    <div class="bling-bg" v-if="isMobile">
      <img src="../projects/tsy/mobile/m_style_class_2.png" :alt="`${info.caseName}_bling_1`" class="bling_1">
    </div>
    <!-- <img src="@/projects/fs/order/bg.png" alt="" class="bg-img"> -->
    <!-- <img src="@/projects/fs/order/bg1.png" alt="" class="bg-img no-mix"> -->
    <!-- <img src="@/projects/fs/order/bg_m.jpg" alt="" class="bg-img" v-if="isMobile"> -->
    <div class="order-top">
      <!-- <div class="title-block">
        <h3 class="title">{{order.title}}</h3>
        <div class="subtitle">{{order.subTitle}}</div>
      </div> -->
      <div class="order-title" v-html="order.title" data-aos="fade-down" data-aos-delay="0"></div>
      <div class="order-subtitle" v-html="order.subTitle" data-aos="fade-down" data-aos-delay="0"></div>
      <div class="order">
        <div class="form">
          <div class="group">
            <div class="row" data-aos="fade-down" data-aos-delay="100">
              <label>姓名</label>
              <el-input v-model="form.name" placeholder></el-input>
            </div>
            <div class="row" data-aos="fade-down" data-aos-delay="200">
              <label>手機</label>
              <el-input v-model="form.phone" placeholder></el-input>
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
            <div class="row" data-aos="fade-down" data-aos-delay="300">
              <label>居住城市</label>
              <el-select v-model="form.city" placeholder>
                <el-option v-for="city in cityList" :key="city.value" :label="city.label" :value="city.value" no-data-text="無數據"></el-option>
              </el-select>
            </div>
            <div class="row" data-aos="fade-down" data-aos-delay="400">
              <label>居住地區</label>
              <el-select v-model="form.area" placeholder>
                <el-option v-for="area in areaList" :key="area.value" :label="area.label" :value="area.value" no-data-text="請先選擇居住城市"></el-option>
              </el-select>
            </div>
          </div>
          <div class="group" data-aos="fade-down" data-aos-delay="600">
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
        <div style="margin: 0 auto;z-index:2;" v-if="!isMobile" data-aos="fade-down" data-aos-delay="600">
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
import { isMobile, isPC } from '@/utils'
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
      isPC,
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

.bling-bg {
  @for $i from 1 through 10 {
    $randomNum: random(3) + 1;
    > img:nth-child(#{$i}) {
      transform: translateY((random(10) - 30) + px);
      animation: an ($randomNum + s) 1s infinite alternate;
    }
  }
}

@keyframes an {
  to {
    transform: translateY(0);
  }
}

// ------------ bling

.bling_1 {
  @include img_l_pc(27, 700, 155);
}

.bling_2 {
  @include img_l_pc(34, 500, 311);
}

.bling_3 {
  @include img_r_pc(105, 840, 145);
}

.bling_4 {
  @include img_l_pc(240, 925, 98);
}

.bubble-bg {
  @for $i from 1 through 10 {
    $randomNum: random(3) + 4;
    > img:nth-child(#{$i}) {
      opacity: 0;
      transform: translateY((random(20) - 40) + px);
      animation: an2 ($randomNum + s) 1s infinite alternate;
    }
  }
}

@keyframes an2 {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// ----- bubble
.bubble_1 {
  @include img_l_pc(391, 0, 52);
  // z-index: 6;
}

.bubble_2 {
  @include img_r_pc(323, -56, 110);
}

.bubble_3 {
  @include img_r_pc(559, 340, 48);
}

.bubble_4 {
  @include img_l_pc(289, 840, 204);
}
.order-bg {
  background-color: $order_bg_color;
  // background-image: $order_bg_image;
  background-repeat: no-repeat;
  position: relative;
  padding-top: 130px;
  background-size: 100vw auto;
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
  }
  .order-title {
    font-family: $family2;
    width: 100vw;
    padding-top: 20px;
    padding-bottom: 8px;
    font-size: size(85);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: size(21.26);
    text-align: center;
    color: #ffffff;
    text-align: center;
    color: $order_title_color;
  }

  .order-subtitle {
    width: 100vw;
    font-size: size(18);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: size(4.32);
    text-align: center;
    color: $order_subtitle_color;
    margin-bottom: 0px;
    padding-bottom: 28px;
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
      display: block;
      text-align: left;
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
  .bling-bg {
    @for $i from 1 through 10 {
      $randomNum: random(3) + 1;
      > img:nth-child(#{$i}) {
        transform: translateY((random(8) - 20) + px);
        animation: an ($randomNum + s) 1s infinite alternate-reverse;
      }
    }
  }
  // ----- bling mobile
  .bling_1 {
    @include img_c_m(335, 100);
  }

  .bubble-bg {
    @for $i from 1 through 10 {
      $randomNum: random(3) + 2;
      > img:nth-child(#{$i}) {
        opacity: 0;
        transform: translateY((random(8) - 20) + px);
        animation: an2 ($randomNum + s) 1s infinite alternate-reverse;
      }
    }
  }
  // ----- bubble mobile
  .bubble_1 {
    @include img_c_m(375, 170);
  }
  .order-bg {
    // background-image: $order_bg_image_m;
    background-size: cover;
    padding-top: 40px;
    margin: 0;
    position: relative;
    z-index: 2;

    > img {
      display: block;
    }
    .order-title {
      padding-top: 10px;
      padding-bottom: 5px;
      font-size: sizem(37);
      font-weight: 900;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.19;
      letter-spacing: sizem(9.25);
      text-align: center;
      color: #ffffff;
    }

    .order-subtitle {
      // display: none;
      font-size: sizem(12);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: sizem(2.88);
      text-align: center;
      color: #ffffff;
    }
    .order {
      width: 84%;
      margin: 0 auto;
      padding: 0;
    }

    .form {
      flex-direction: column;
      margin-bottom: -12px;
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
