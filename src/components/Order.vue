<template>
  <div class="order-bg">
    <div class="animate-slide" v-if="isPC">
      <img src="../projects/hg1/s12/漂浮物件_分層/11_class_1.png" :alt="`${info.caseName}_logo`" class="pc1" data-parallax="4">
      <img src="../projects/hg1/s12/漂浮物件_分層/11_class_2.png" :alt="`${info.caseName}_logo`" class="pc2" data-parallax="4">
    </div>
    <div class="animate-slide aaa" v-if="isMobile">
      <!-- <img src="../projects/hg1/s1/mo3.png" :alt="`${info.caseName}_bg`" class="mo3" data-parallax="3"> -->
      <img src="../projects/hg1/mo/s12/漂浮物件_單一/m_11_single_2.png" :alt="`${info.caseName}_bg`" class="mo2" data-parallax="2">
      <!-- <img src="../projects/hg1/mo/s12/漂浮物件_單一/m_11_single_1.png" :alt="`${info.caseName}_bg`" class="mo1" data-parallax="1"> -->
    </div>
    <div class="order-title" v-scroll-to="{ element: `#contact` }">{{order.title}}</div>
    <h3 class="order-subtitle">{{order.subTitle}}</h3>
    <div class="order">
      <div class="form">
        <div class="group">
          <div class="row">
            <label for="name">姓名<span>*</span></label>
            <el-input id="name" v-model="form.name" placeholder></el-input>
          </div>
          <div class="row">
            <label for="phone">手機<span>*</span></label>
            <el-input id="phone" v-model="form.phone" placeholder></el-input>
          </div>
          <!-- <div class="row">
            <label>E-mail</label>
            <el-input v-model="form.email" placeholder></el-input>
          </div> -->
          <div class="row">
            <label for="city">居住城市</label>
            <el-select id="city" v-model="form.city" placeholder>
              <el-option v-for="city in cityList" :key="city.value" :label="city.label" :value="city.value"></el-option>
            </el-select>
          </div>
          <div class="row">
            <label for="area">居住地區</label>
            <el-select id="area" v-model="form.area" placeholder no-data-text="請先選擇居住城市">
              <el-option v-for="area in areaList" :key="area.value" :label="area.label" :value="area.value"></el-option>
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
        <el-checkbox v-model="checked">
          <p>
            本人知悉並同意
            <span @click="showPolicyDialog">「個資告知事項聲明」</span>
            內容
          </p>
        </el-checkbox>
      </div>
      <div style="margin: 0 auto">
        <vue-recaptcha :sitekey="info.recaptcha_site_key_v2" @verify="isVerify = true"></vue-recaptcha>
      </div>
      <el-button class="form-submit" type="primary" :disabled="!checked || !isVerify" @click="submit" :loading="isSubmit">立即預約</el-button>
      <!-- <Loading :loading="isSubmit" :isOpacity="true" /> -->
    </div>
    <ContactInfo />
    <GoogleMap />
    <PolicyDialog :policyVisible="policyVisible" />
  </div>
</template>

<script>
import { isPC, isMobile } from '@/utils'
import ContactInfo from '@/components/ContactInfo.vue'
import GoogleMap from '@/components/GoogleMap.vue'
import PolicyDialog from '@/components/PolicyDialog.vue'
import info from '@/info'
import { cityList, renderAreaList } from '@/info/address'
// import Loading from '@/components/Loading.vue'
import VueRecaptcha from 'vue-recaptcha'

export default {
  name: 'order',
  components: {
    ContactInfo,
    GoogleMap,
    PolicyDialog,
    // Loading,
    VueRecaptcha,
  },

  data() {
    return {
      cityList,
      info,
      isPC,
      isMobile,
      order: info.order,
      form: {
        name: '',
        phone: '',
        email: '',
        city: '',
        area: '',
        msg: '',
      },
      checked: false,
      isSubmit: false,
      isVerify: false, // google 機器人驗證
      policyVisible: false,
      showValidateDialog: false,
      window,
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
      window.dotq = window.dotq || []

      window.dotq.push({
        projectId: '10000',

        properties: {
          pixelId: '10101258',

          qstrings: {
            et: 'custom',

            ea: 'lead10101258',
          },
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variableColor.scss';
@import '@/assets/style/function.scss';
.order-bg {
  // background-color: $order_bg_color;transparent
  background-color: transparent;
  background-image: $order_bg_image;
  background-size: cover;
  // position: relative;
  padding-top: calc(100vw * 200 / 1920);
  // overflow: hidden;

  .order-title {
    margin-top: 0;
    margin-bottom: 0.1em;
    font-size: calc(100vw * 85 / 1920);
    font-weight: 800;
    line-height: 1.5;
    letter-spacing: 0.15em;
    text-align: center;
    color: $order_title_color;
    // width: calc(100vw * 500 / 1920);
    display: block;
    margin: 0 auto 0;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    z-index: 3;
  }

  .order-subtitle {
    font-size: calc(100vw * 18 / 1920);
    text-align: center;
    color: $order_subtitle_color;
    margin-bottom: 2em;
    position: relative;
    z-index: 3;
  }

  .order {
    width: 920px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 3;
  }

  .form {
    display: flex;
    align-items: center;
    > .group {
      flex: 1;
    }
  }

  .group {
    height: 236px;

    &:nth-child(1) {
      border-right: 1px solid rgba(255, 255, 255, 0.2);
      .row {
        justify-content: flex-start;
      }
    }

    &:nth-child(2) {
      .row {
        justify-content: flex-end;
        height: 100%;
      }
    }
  }

  .row {
    display: flex;
    //align-items: center;
    margin-bottom: 15px;
    align-items: stretch;
    justify-content: center;

    &:nth-last-child(1) {
      margin-bottom: 0;
    }

    label {
      width: 92px;
      align-items: center;
      display: flex;
      font-size: 16px;
      opacity: 1;
      color: $order_input_label_color;
      background: $order_input_bg;
      margin-left: 21px;
      padding: 0.5em;

      span {
        color: #c00;
      }
    }
    .el-input {
      width: auto;
    }
    .el-input__inner {
      width: auto !important;
    }
    .el-select {
      margin: 0;
    }
  }

  .control {
    margin-top: 60px;
    margin-bottom: 20px;
  }
}

.animate-slide {
  width: 100%;
  height: 100%;
  position: absolute;
  // z-index: 3;
  top: 0;
  left: 0;
  transition: all 0.5s;
  > img {
    @for $i from 1 through 10 {
      $randomNum: random(4) + 3;
      &:nth-child(#{$i}) {
        transform: translateY((random(10) - 50) + px);
        animation: an ($randomNum + s) 3s infinite alternate;
      }
    }
  }

  .pc1 {
    @include img_r_pc(1920, 197, 0);
    z-index: 1;
  }

  .pc2 {
    @include img_l_pc(1920, 306, 0);
    z-index: 1;
  }
}

@keyframes an {
  to {
    transform: translateY(0);
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
    // background-image: $order_bg_image_m;
    background-color: transparent;
    background-size: auto 250vw;
    padding-top: calc(100vw * 250 / 375);
    .order-title {
      font-size: sizem(37);
      margin-top: 10px;
      margin-bottom: 20px;
      width: 100vw;
      height: 30px;
      position: relative;
      z-index: 2;
      white-space: nowrap;
      text-align: center;
      // display: none;
    }
    .order-subtitle {
      // display: none;
      width: sizem(294);
      margin: 0 auto;
      line-height: 1.4;
      margin-bottom: 15px;
    }
    .order {
      width: 85% !important;
      margin: 0 auto;
      padding: 0;
      position: relative;
      z-index: 2;
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
      label {
        width: 40% !important;
        margin-left: 0;
      }
      .el-input {
        width: 100%;
      }
    }

    .control {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }

  .animate-slide {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.5s;
    > img {
      @for $i from 1 through 10 {
        $randomNum: random(4) + 3;
        &:nth-child(#{$i}) {
          transform: translateY((random(10) - 50) + px);
          animation: an ($randomNum + s) 3s infinite alternate;
        }
      }
    }

    // .mo1 {
    //   @include img_r_m(60, 230, -20);
    // }

    .mo2 {
      @include img_r_m(75, -20, 0);
    }
  }
}
</style>
