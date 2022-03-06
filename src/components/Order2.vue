<template>
  <div class="order-bg">
    <img src="../projects/db/contact/title.png" alt="聯絡我們" class="order-title" v-if="!isMobile">
    <img src="../projects/db/index/s7/title.png" alt="聯絡我們" class="order-title" v-if="isMobile">
    <img src="../projects/db/index/s7/資產 16@2x.png" alt="" class="info-img" data-aos="fade-down" data-aos-delay="500" v-if="isPC">
    <img src="../projects/db/contact/logot.png" :alt="`${info.caseName}_logot`" class="logot" data-aos="fade-down" data-aos-delay="600" v-if="isPC">
    <div class="info-desc" data-aos="fade-down" data-aos-delay="600" v-if="isPC">
      <span>{{info.address}}</span><br />
      {{info.phone}}
    </div>
    <!-- <h3 class="order-subtitle" v-html="order.subTitle"></h3>
    <div class="order-title" v-html="order.title" data-aos="fade-down" data-aos-delay="0"></div> -->
    <div class="flex-ac flex-jb btn-list" v-if="isMobile">
      <a class="btn-contact" :href="info.fbLink" target="_blank">
        <div class="flex-ac flex-ja">
          <img src="./btn_01_icon.png" alt="" class="btn-icon">
          <span>FB諮詢</span>
        </div>
      </a>
      <div class="btn-contact" @click="type = 0">
        <div class="flex-ac flex-ja">
          <img src="./btn_02_icon.png" alt="" class="btn-icon">
          <span>賞屋諮詢</span>
        </div>
      </div>
      <div class="btn-contact" @click="type = 1">
        <div class="flex-ac flex-ja">
          <img src="./btn_03_icon.png" alt="" class="btn-icon">
          <span>建案合作提案</span>
        </div>
      </div>
    </div>
    <div class="order">
      <div class="form">
        <div class="group group1">
          {{`${type == 0 ? '賞屋諮詢' : '建案合作提案'}`}}
        </div>
        <div class="group group2">
          <!-- <div class="form-hint">* 每個欄位都是必填欄位</div> -->
          <div class="row" data-aos="fade-down" data-aos-delay="100">
            <el-input id="form-name" v-model="form.name" placeholder="姓名 (必填)"></el-input>
          </div>
          <div class="row space" data-aos="fade-down" data-aos-delay="200">
            <el-input id="form-phone" v-model="form.phone" placeholder="電話 (必填)"></el-input>
            <el-select v-model="form.contact_time" placeholder="可聯繫時間">
              <el-option v-for="city in ['10-11', '11-12', '12-13', '13-14', '14-15', '15-16', '16-17']" :key="city" :label="city" :value="city" no-data-text=""></el-option>
            </el-select>
          </div>
          <div class="row" data-aos="fade-down" data-aos-delay="200" v-if="type == 0">
            <el-input id="form-house" v-model="form.house" placeholder="想了解的建案 (必填)"></el-input>
          </div>
          <div class="row" data-aos="fade-down" data-aos-delay="100">
            <el-input id="form-email" v-model="form.email" placeholder="您的E-mail" v-if="type == 1"></el-input>
          </div>
          <div class="row" data-aos="fade-down" data-aos-delay="200">
            <el-input type="textarea" :rows="5" placeholder="請輸入您的留言，將有專人為您服務" v-model="form.msg"></el-input>
          </div>
          <div class="control" data-aos="fade-down" data-aos-delay="500">
            <!-- <div class="control-desc">
              <p>您所登錄的個人資料將作為以下用途</p>
              <p>
                (一)本網站所載之相關事項通知<br />
                (二)客戶管理與服務<br />
                (三)本公司行銷業務之推廣
              </p>
            </div> -->
            <el-checkbox v-model="checked">
              <div>
                本人知悉並同意
                <span @click="showPolicyDialog">「個資告知事項聲明」</span>
                內容
              </div>
            </el-checkbox>
          </div>
          <div style="margin: 0 auto;z-index:2;" v-if="!isMobile" data-aos="fade-down" data-aos-delay="600">
            <vue-recaptcha :sitekey="info.recaptcha_site_key_v2" @verify="isVerify = true" :loadRecaptchaScript="true"></vue-recaptcha>
          </div>
          <div style="margin: 0 auto;z-index:2;" v-if="isMobile">
            <vue-recaptcha :sitekey="info.recaptcha_site_key_v2" @verify="isVerify = true" :loadRecaptchaScript="true"></vue-recaptcha>
          </div>
          <el-button class="form-submit flex-c" type="primary" :disabled="!checked" @click="submit" :loading="isSubmit">確認送出</el-button>
        </div>
        <div class="group group3" v-if="!isMobile">
          <div v-if="!isMobile">
            <a class="btn-contact" :href="info.fbLink" target="_blank">
              <div class="flex-ac flex-ja">
                <img src="./btn_01_icon.png" alt="" class="btn-icon">
                <span>FB諮詢</span>
              </div>
            </a>
            <div class="btn-contact" @click="type = 0">
              <div class="flex-ac flex-ja">
                <img src="./btn_02_icon.png" alt="" class="btn-icon">
                <span>賞屋諮詢</span>
              </div>
            </div>
            <div class="btn-contact" @click="type = 1">
              <div class="flex-ac flex-ja">
                <img src="./btn_03_icon.png" alt="" class="btn-icon">
                <span>建案合作提案</span>
              </div>
            </div>
          </div>
          <img src="./db_text.png" alt="" class="company-name">
          <!-- <iframe class="google-map" title="googlemap" :src="googleSrc" width="100%" height="535" frameborder="0" style="border: 0" allowfullscreen /> -->
          <div class="control" data-aos="fade-down" data-aos-delay="500">
            <div class="control-desc">
              新北市新店區安興路105號10樓之7<br />
              P 02-2211-7711 / F 02-2212-3760
            </div>
          </div>
          <div class="links flex-ac flex-js">
            <a :href="info.fbLink" target="_blank">
              <img src="../projects/db/contact/icon1.png" :alt="`${info.caseName}_icon1`" class="ig">
            </a>
            <!-- <a href="#">
          <img src="../projects/db/contact/icon2.png" :alt="`${info.caseName}_icon2`" class="ig">
        </a> -->
            <a href="https://www.youtube.com/channel/UC2Jmxt8ws2aENeLAU1PEirg" target="_blank">
              <img src="../projects/db/contact/icon3.png" :alt="`${info.caseName}_icon3`" class="ig">
            </a>
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
      type: 0, // 0 賞屋諮詢 1 建案合作提案
      cityList,
      info,
      order: info.order,
      isMobile,
      googleSrc: info.googleSrc,
      form: {
        name: '',
        phone: '',
        email: '',
        house: '', // 想了解的建案
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
      if (this.type == 0) {
        this.$notify({
          title: '請填寫必填欄位',
          message: h(
            'i',
            { style: 'color: #82191d' },
            '「姓名、手機、想了解的建案」是必填欄位',
          ),
        })
      } else if (this.type == 1) {
        this.$notify({
          title: '請填寫必填欄位',
          message: h(
            'i',
            { style: 'color: #82191d' },
            '「姓名、手機」是必填欄位',
          ),
        })
      }
    },

    submit() {
      if (this.isSubmit) return
      // if (!this.isVerify) return
      if (!this.checked) return
      this.isSubmit = true
      let unvalid
      if (this.type == 0) {
        unvalid = !this.form.name ||
        !this.form.phone ||
        !this.form.house
      } else  if (this.type == 1) {
        unvalid = !this.form.name ||
        !this.form.phone
      }
      if (
        unvalid
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
      formData.append('house', this.form.house)
      formData.append('city', this.form.city)
      formData.append('area', this.form.area)
      formData.append('contact_time', this.form.contact_time)
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
        `https://script.google.com/macros/s/AKfycbyQKCOhxPqCrLXWdxsAaAH06Zwz_p6mZ5swK80USQ/exec?name=${this.form.name}&phone=${this.form.phone}&email=${this.form.email}&house=${this.form.house}&cityarea=${this.form.city}${this.form.area}&msg=${this.form.msg}&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_content=${utmContent}&utm_campaign=${utmCampaign}&date=${date}&campaign_name=${info.caseName}
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

.info-img {
  @include img_r_pc(570, 1114, 375);
}

.logot {
  @include img_r_pc(313, 1154, 615);
}

.info-desc {
  @include img_r_pc(314, 1194, 615);
  font-size: size(22.2);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.27;
  letter-spacing: size(-0.84);
  text-align: left;
  white-space: nowrap;
  color: #ffffff;

  span {
    font-weight: bold;
  }
}

.order-bg {
  // background-color: $order_bg_color;
  width: 100vw;
  height: auto;
  background-image: $order_bg_image;
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
    @include img_l_pc(1242, 145, 339);
    // font-family: $family2;
    // width: 100vw;
    // padding-top: size(10);
    // font-size: size(58.7);
    // font-weight: 500;
    // font-stretch: normal;
    // font-style: normal;
    // line-height: 1.2;
    // letter-spacing: size(11.69);
    // text-align: center;
    // color: #ffffff;
    // color: $order_title_color;
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
    width: size(1242);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
    margin-top: size(447);
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
    justify-content: flex-start;
    > .group {
      // flex: 1;
      align-items: flex-start;
      &:nth-child(1) {
        margin: 0 size(40) 0 0;
      }
    }
  }

  .group {
    /* flex: 1 1 auto; */
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

  .group1 {
    width: size(46);
    writing-mode: vertical-lr;
    text-orientation: upright;
    font-size: size(36);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: size(7.16);
    text-align: center;
    color: #fff;
  }

  .group2 {
    width: size(712);
    margin-right: size(52);
  }

  .group3 {
    width: size(410);
    border-left: 1px solid #fff;
    padding-left: size(52);
  }

  .btn-contact {
    display: flex;
    align-items: center;
    justify-content: center;
    width: size(350);
    height: size(70);
    text-decoration: none;
    // opacity: 0;
    border-radius: 5px;
    font-size: size(20);
    font-weight: bold;
    letter-spacing: 3px;
    text-align: justify;
    background-position: center;
    background-color: #fff;
    border: 1px solid #008fbb;
    // border-radius: 72px / 72px;
    margin: 0;
    margin-left: 0;
    margin-bottom: 20px;
    transition: all 0.3s;
    color: #008fbb;
    cursor: pointer;

    > div {
      width: 60%;
    }

    .btn-icon {
      width: size(30);
    }

    &:hover {
      background-color: #fff7a4;
    }
  }

  .company-name {
    width: size(336);
    margin-bottom: size(20);
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

  .links {
    width: 100%;
    a {
      width: size(60);
      margin-right: 15px;
    }

    img {
      width: 100%;
    }
  }

  .row.space {
    justify-content: space-between;
    .el-input,
    .el-select {
      width: 48.6%;
    }
  }

  .control {
    margin-top: 0px;
    margin-bottom: 20px;
  }

  .control-desc {
    width: 100%;
    margin-left: size(10);
    font-size: size(20);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: 0.02em;
    text-align: left;
    color: #ffffff;

    p {
      //   line-height: 1.7;
      margin-bottom: 12px;
    }
  }

  .google-map {
    margin-top: 0;
    margin-bottom: 20px;
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
    padding-top: 120px;
    margin: 0;
    // position: relative;
    z-index: 2;

    > img {
      display: block;
    }
    .order-title {
      @include img_l_m(310, 64, 33);
      // font-family: $family2;
      // width: 100vw;
      // padding-top: size(10);
      // font-size: size(58.7);
      // font-weight: 500;
      // font-stretch: normal;
      // font-style: normal;
      // line-height: 1.2;
      // letter-spacing: size(11.69);
      // text-align: center;
      // color: #ffffff;
      // color: $order_title_color;
    }

    .order-subtitle {
      font-size: sizem(15);
      margin-bottom: 0;
    }

    .form-hint {
      font-size: sizem(16);
    }
    .order {
      width: 90% !important;
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

  .order-bg .group1 {
    width: 100%;
    writing-mode: initial;
    text-orientation: initial;
    font-size: sizem(30);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: 5.97px;
    text-align: center;
    color: #fff;
    margin-bottom: sizem(20)
  }

  .btn-list {
    width: sizem(350);
    margin: 0 auto;
    .btn-contact {
      width: sizem(92);
      height: sizem(92);
      font-size: sizem(16);
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.2;
      letter-spacing: sizem(2);
      text-align: center;
      color: #008fbb;
      border-radius: 15px;

      span {
        display: block;
        width: 100%;
        text-align: center;
        letter-spacing: sizem(3);
      }

      > div {
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
      }

      .btn-icon {
        width: sizem(25);
      }
    }
  }

  .company-name {
    width: size(336);
    margin-bottom: size(20);
  }
}
</style>
