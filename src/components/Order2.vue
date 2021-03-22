<template>
  <div class="order-bg">
    <img src="@/projects/kid/s1/logo.png" alt="" class="order-logo">
    <h3 class="order-subtitle" v-html="order.subTitle"></h3>
    <div class="order-title" v-html="order.title" data-aos="fade-down" data-aos-delay="0"></div>
    <div class="order">
      <div class="form">
        <div class="group">
          <!-- <div class="form-hint">* 每個欄位都是必填欄位</div> -->
          <div class="row" data-aos="fade-down" data-aos-delay="100">
            <el-select v-model="form.activity" placeholder="想報名的活動">
              <el-option v-for="(act, index) in activies" :key="act.value + index" :label="act.label" :value="act.value" :disabled="act.disabled" no-data-text="無數據"></el-option>
            </el-select>
          </div>
          <div class="row" data-aos="fade-down" data-aos-delay="100">
            <el-input id="form-people" type="number" v-model="form.count" placeholder="報名人數" :min="1" :max="6"></el-input>
          </div>
          <div class="row" data-aos="fade-down" data-aos-delay="100">
            <el-input id="form-name" v-model="form.name" placeholder="姓名*"></el-input>
          </div>
          <div class="row" data-aos="fade-down" data-aos-delay="200">
            <el-input id="form-phone" v-model="form.phone" placeholder="手機*"></el-input>
          </div>
          <div class="row" data-aos="fade-down" data-aos-delay="300">
            <el-select v-model="form.city" placeholder="居住城市*">
              <el-option v-for="city in cityList" :key="city.value" :label="city.label" :value="city.value" no-data-text="無數據"></el-option>
            </el-select>
          </div>
          <div class="row" data-aos="fade-down" data-aos-delay="400">
            <el-select v-model="form.area" placeholder="居住地區*">
              <el-option v-for="area in areaList" :key="area.value" :label="area.label" :value="area.value" no-data-text="請先選擇居住城市"></el-option>
            </el-select>
          </div>
          <!-- <div class="row" data-aos="fade-down" data-aos-delay="200">
            <el-input id="form-phone" v-model="form.type" placeholder="想了解的建案"></el-input>
          </div> -->
          <!-- <div class="row">
            <el-input type="textarea" :rows="5" placeholder="請輸入您的留言，將有專人為您服務" v-model="form.msg"></el-input>
          </div> -->
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
                本人已悉知以上個人資料蒐集聲明事項
                <!-- <span @click="showPolicyDialog">「個資告知事項聲明」</span> -->
                <!-- 內容 -->
              </div>
            </el-checkbox>
          </div>
          <el-button class="form-submit flex-c" type="primary" :disabled="!checked || !isVerify" @click="submit" :loading="isSubmit">確認送出</el-button>
        </div>
        <div class="group">
          <iframe class="google-map" title="googlemap" :src="googleSrc" width="100%" frameborder="0" style="border: 0" allowfullscreen />
          <div class="control" data-aos="fade-down" data-aos-delay="500">
            <div class="control-desc">
              <p>
                <!-- 電話 {{info.phone}}<br />客服信箱：{{info.email}}<br /> -->
                樂園位置：<br v-if="!isMobile">{{info.address}}
              </p>
            </div>
            <a :href="info.googleLink" target="_blank" class="contact-btn flex-c wrap google-map-btn">
              <img src="~@/projects/kid/c/m.png" alt="">
              <div class="btn-desc">
                地圖導航
              </div>
            </a>
            <a :href="info.fbLink" target="_blank" class="contact-btn flex-c wrap fb-btn">
              <img src="~@/projects/kid/c/f.png" alt="">
              <div class="btn-desc">
                粉絲專頁
              </div>
            </a>
          <img src="~@/projects/kid/c/map2.png" class="map_img" alt="停車資訊地圖">
          </div>
        </div>
      </div>
      <img src="~@/projects/kid/c/bottom.png" alt="" class="bottom-img" v-if="!isMobile">
      <img src="~@/projects/kid/c/bottom_m.png" alt="" class="bottom-img" v-if="isMobile">
      <img src="~@/projects/kid/c/資產 48@2x.png" alt="" class="bottom-logo">
      <!-- <div style="margin: 0 auto;z-index:2;" v-if="!isMobile" data-aos="fade-down" data-aos-delay="600">
        <vue-recaptcha :sitekey="info.recaptcha_site_key_v2" @verify="isVerify = true" :loadRecaptchaScript="true"></vue-recaptcha>
      </div> -->
      <!-- <div style="margin: 0 auto;z-index:2;" v-if="isMobile">
        <vue-recaptcha :sitekey="info.recaptcha_site_key_v2" @verify="isVerify = true" :loadRecaptchaScript="true"></vue-recaptcha>
      </div> -->
      <Loading :loading="isSubmit" :isOpacity="true" />
    </div>
    <PolicyDialog :policyVisible="policyVisible" />
  </div>
</template>

<script>
import main from '@/main.js'
import ContactInfo from '@/components/ContactInfo.vue'
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
      activies: [
        {
          value: '3/27(六)14:00-16:00 讀報素養闖關',
          label: '3/27(六)14:00-16:00 讀報素養闖關',
        },
        {
          value: '4/3(六)14:00-16:00  當我們童在一起',
          label: '4/3(六)14:00-16:00  當我們童在一起',
        },
        {
          value: '4/10(六)14:00-15:30  故事魔法寶盒',
          label: '4/10(六)14:00-15:30  故事魔法寶盒',
        },
        {
          value: '4/17(六)14:00-15:00 可愛動物聯萌',
          label: '4/17(六)14:00-15:00 可愛動物聯萌',
        },
        {
          value: '4/24(六)14:00-15:00 如何沖泡一杯好咖啡',
          label: '4/24(六)14:00-15:00 如何沖泡一杯好咖啡',
        },
        {
          value: '2/28(日)14:00-16:00 瑪莎見面會',
          label: '2/28(日)14:00-16:00 瑪莎見面會',
          disabled: true,
        },
        {
          value: '3/6(六)14:00-16:00 春來了',
          label: '3/6(六)14:00-16:00 春來了',
          disabled: true,
        },
        {
          value: '3/13(六)14:00-16:00 海底探險家',
          label: '3/13(六)14:00-16:00 海底探險家',
          disabled: true,
        },
        {
          value: '3/20(六)14:00-15:30 親子讀報趣',
          label: '3/20(六)14:00-15:30 親子讀報趣',
          disabled: true,
        },
        /*   {
          value: '更多精彩活動 敬請期待 即將公開',
          label: '更多精彩活動 敬請期待 即將公開',
        }, */
      ],
      form: {
        // activity: '2/15(六)14:00-16:00 瑪莎見面會', // 活動名稱
        activity: '',
        count: '', // 報名人數
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
      isVerify: true, // google 機器人驗證
      policyVisible: false,
      showValidateDialog: false,
    }
  },

  computed: {
    areaList() {
      return renderAreaList(this.form.city)
    },
  },

  created() {
    main.$on('changeAct', (index) => {
      this.form.activity = this.activies[index].value
    })
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
          '「活動、姓名、手機、居住城市、居住地區」是必填欄位',
        ),
      })
    },

    alertValidateCount() {
      const h = this.$createElement
      this.$notify({
        title: '報名人數超過上限',
        message: h(
          'i',
          { style: 'color: #82191d' },
          '報名人數最多以六人為限',
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
        // !this.form.activity ||
        // ||
        // !this.form.time_start ||
        // !this.form.time_end
        // ||
        // !this.form.email ||
        !this.form.city ||
        !this.form.area
      ) {
        this.alertValidate()
        this.isSubmit = false
        return
      }
      if (this.form.count > 6) {
        this.alertValidateCount()
        this.isSubmit = false
        return
      }
      const urlParams = new URLSearchParams(window.location.search)
      const utmSource = urlParams.get('utm_source')
      const utmMedium = urlParams.get('utm_medium')
      const utmContent = urlParams.get('utm_content')
      const utmCampaign = urlParams.get('utm_campaign')
      const formData = new FormData()
      formData.append('activity', this.form.activity)
      formData.append('count', this.form.count)
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
  background-color: $order_bg_color;
  width: 100vw;
  height: auto;
  // background-image: $order_bg_image;
  padding-bottom: 250px;
  background-repeat: repeat;
  position: relative;
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
  .order-title {
    font-family: $family2;
    width: 100vw;
    padding-top: size(10);
    font-size: size(58.7);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: size(11.69);
    text-align: center;
    color: #ffffff;
    color: $order_title_color;
  }

  .order-logo {
    width: size(490);
    margin: 20px auto;
  }

  .order-subtitle {
    width: 100vw;
    font-size: size(37.4);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: $order_subtitle_color;
    padding-top: size(96);
  }

  .order {
    width: size(930);
    min-width: 750px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;
    justify-content: space-between;
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
      margin-top: size(40);
      &:nth-child(1) {
        margin: size(40) size(40) 0 0;
      }
    }
  }

  .group {
    flex: 1 1 auto;
    // height: 250px;
    margin-bottom: 40px;
    &:nth-child(1) {
      flex: 1 1 55%;
    }
    &:nth-child(2) {
      flex: 1 1 45%;
    }
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
    margin-bottom: 19px;

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
    position: relative;
  }

  .control-desc {
    font-size: size(20);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.02em;
    text-align: left;
    color: #ffffff;

    p {
      line-height: 1.5;
      margin-bottom: 12px;
    }
  }

  .google-map {
    // margin-top: 35px;
    display: block;
    width:100%;
    height: size(200);
    margin:0 auto size(15) auto;
  }
  .map_img{
    width:105%;margin:size(70) 0 size(15) -5%;}
}
.el-textarea .el-textarea__inner,
.el-input__inner {
  font-size: size(20) !important;
}

.bottom-img {
  width: 100vw;
  position: absolute;
  bottom: 0;
  left: 0;
}

.bottom-logo {
  position: absolute;
  width: size(299);
  bottom: size(50);
  left: 0;
  right: 0;
  margin: 0 auto;
}
.contact-btn {
  border-radius: 1.1em;
  background-color: #3a836d;
  text-decoration: none;
  font-size: size(15);
  padding: 0.3em 0 0 0;
  img {
    width: 3em;
  }
  .btn-desc {
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }
}
.google-map-btn {
  @include div_r_pc(80, 80, 0, 100);
  right: 6em;
  width: 5.3em;
  height: 5.3em;
}

.fb-btn {
  @include div_r_pc(80, 80, 0, 0);
  width: 5.3em;
  height: 5.3em;
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
    position: relative;
    z-index: 2;
    padding-bottom: 350px;

    > img {
      display: block;
    }
    .order-title {
      padding-top: 10px;
      padding-bottom: 5px;
      font-size: calc(100vw * 35 / 375);
      letter-spacing: 4px;
    }

    .order-logo {
      width: sizem(310);
      margin: 20px auto;
    }

    .order-subtitle {
      font-size: sizem(15);
      margin-bottom: 0;
    }

    .contact-btn {
      border-radius: 19px;
      background-color: #3a836d;
      text-decoration: none;
      img {
        width: sizem(40);
      }
      .btn-desc {
        font-size: sizem(15);
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.73;
        letter-spacing: normal;
        text-align: left;
        color: #ffffff;
      }
    }
    .google-map {
      height: sizem(248);
    margin:0 auto sizem(15) auto;
    }

  .map_img{
    width:100%;margin:sizem(120) 0 0 0;}


    .google-map-btn {
      @include div_l_m(70, 70, 45, 0);
    }

    .fb-btn {
      @include div_l_m(70, 70, 45, 82);
    }

    .bottom-img {
      width: 100vw;
      position: absolute;
      bottom: 63px;
      left: 0;
    }

    .bottom-logo {
      width: sizem(195);
      position: absolute;
      bottom: 74px;
      left: 0;
      right: 0;
      margin: 0 auto;
    }

    .form-hint {
      font-size: sizem(16);
    }
    .order {
      width: 90% !important;
      min-width: auto;
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
