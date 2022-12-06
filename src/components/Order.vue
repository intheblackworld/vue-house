<template>
  <div class="order-bg" ref="parallax2">
    <div class="order-top"> <div class="img" data-aos="fade">
    <img src="@/projects/gtcip/s1/img.png"  /></div>
      <div class="title-block">
      <h2 class="order-title" v-html="order.title" data-aos="zoom-in" v-if="order.title"></h2>
      <div class="order-subtitle" v-html="order.subTitle" data-aos="zoom-in" v-if="order.subTitle"></div>
      </div>
      <div class="order" data-aos="zoom-in">
        <div class="form">
          <div class="group">
            <div class="row">
              <label>姓名<span>*</span></label>
              <el-input v-model="form.name" placeholder></el-input>
            </div>
            <div class="row">
              <label>手機<span>*</span></label>
              <el-input v-model="form.phone" placeholder></el-input>
            </div>
            <div class="row" v-if="order.room_type">
              <label>需求房型</label>
              <el-select v-model="form.room_type" placeholder>
                <el-option v-for="city in order.room_type" :key="city" :label="city" :value="city" no-data-text=""></el-option>
              </el-select>
            </div>
            <div class="row">
              <label>居住城市</label>
              <el-select v-model="form.city" placeholder>
                <el-option
                  v-for="city in cityList"
                  :key="city.value"
                  :label="city.label"
                  :value="city.value"
                  no-data-text="無數據"
                ></el-option>
              </el-select>
            </div>
            <div class="row">
              <label>居住地區</label>
              <el-select v-model="form.area" placeholder>
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
          <div class="group">
            <div class="row" style="height: 100%">
              <el-input
                type="textarea"
                :rows="7"
                placeholder="請輸入您的留言 (選填)"
                v-model="form.msg"
              ></el-input>
            </div>
          </div>
        </div>
        <div class="control">
          <el-checkbox v-model="checked">
            <h3>
              本人知悉並同意
              <span @click="showPolicyDialog">「個資告知事項聲明」</span>
              內容
            </h3>
          </el-checkbox>
        </div>
        <div style="margin: 0 auto; z-index: 2" v-if="!isMobile">
          <vue-recaptcha
            :sitekey="info.recaptcha_site_key_v2"
            @verify="isVerify = true"
            :loadRecaptchaScript="true"
          ></vue-recaptcha>
        </div>
        <div style="margin: 0 auto; z-index: 2" v-if="isMobile">
          <vue-recaptcha
            :sitekey="info.recaptcha_site_key_v2"
            @verify="isVerify = true"
            :loadRecaptchaScript="true"
          ></vue-recaptcha>
        </div>
        <el-button
          class="form-submit bt_registration btregistration"
          type="primary"
          :disabled="!checked || !isVerify"
          @click="submit"
          :loading="isSubmit"
          >立即預約</el-button
        >
        <Loading :loading="isSubmit" :isOpacity="true" />
      </div>
    </div>

    <ContactInfo />
    <GoogleMap />
    <PolicyDialog
      :policyVisible="policyVisible"
      @hidePolicyDialog="hidePolicyDialog"
    />
  </div>
</template>

<script>
import GoogleMap from "@/components/GoogleMap.vue";
import ContactInfo from "@/components/ContactInfo.vue";
import PolicyDialog from "@/components/PolicyDialog.vue";
import info from "@/info";
import { cityList, renderAreaList } from "@/info/address";
import { isMobile } from "@/utils";
import Loading from "@/components/Loading.vue";
import VueRecaptcha from "vue-recaptcha";

export default {
  name: "order",
  components: {
    GoogleMap,
    ContactInfo,
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
        name: "",
        phone: "",
        contacttime: "",
        city: "",
        area: "",
        gender: "",
        infosource: "",
        room_type: '',
        parking: "",
        houseStyle: "",
        msg: "",
        time_start: "",
        time_end: "",
      },
      checked: false,
      isSubmit: false,
      isVerify: false, // google 機器人驗證
      policyVisible: false,
      showValidateDialog: false,
    };
  },

  computed: {
    areaList() {
      return renderAreaList(this.form.city);
    },
  },

  mounted() {

    const elem = this.$refs.parallax2;

    var parallaxInstance = new Parallax(elem, {
      relativeInput: true,
      selector: '.parallax-item'
    });
  },
  methods: {
    showPolicyDialog() {
      this.policyVisible = true;
    },
    hidePolicyDialog() {
      this.policyVisible = false;
    },

    alertValidate() {
      const h = this.$createElement;
      this.$notify({
        title: "請填寫必填欄位",
        message: h(
          "i",
          { style: "color: #82191d" },
          "「姓名、手機」是必填欄位"
        ),
      });
    },

    alertPhoneValidate() {
      const h = this.$createElement;
      this.$notify({
        title: "格式錯誤",
        message: h("i", { style: "color: #82191d" }, "「手機」需為 10 碼數字"),
      });
    },

    submit() {
      if (this.isSubmit) return;
      if (!this.isVerify) return;
      if (!this.checked) return;
      this.isSubmit = true;
      if (
        !this.form.name ||
        !this.form.phone
        // ||
        // !this.form.time_start ||
        // !this.form.time_end
        // ||
        // !this.form.email ||
      ) {
        this.alertValidate('「姓名、手機」是必填欄位')
        this.isSubmit = false;
        return;
      }
      if (this.form.phone.length != 10) {
        this.alertValidate('手機號碼請填10碼')
        this.isSubmit = false;
        return;
      }
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get("utm_source");
      const utmMedium = urlParams.get("utm_medium");
      const utmContent = urlParams.get("utm_content");
      const utmCampaign = urlParams.get("utm_campaign");
      const formData = new FormData();
      formData.append("name", this.form.name);
      formData.append("phone", this.form.phone);
      formData.append("email", this.form.email);
      formData.append("contacttime", this.form.contacttime);
      formData.append("msg", this.form.msg);
      formData.append("room_type", this.form.room_type);
      // formData.append('time_start', this.form.time_start)
      // formData.append('time_end', this.form.time_end)
      formData.append("city", this.form.city);
      formData.append("area", this.form.area);
      formData.append("gender", this.form.area);
      formData.append("infosource", this.form.area);
      formData.append("parking", this.form.area);
      formData.append("houseStyle", this.form.area);
      formData.append("utm_source", utmSource);
      formData.append("utm_medium", utmMedium);
      formData.append("utm_content", utmContent);
      formData.append("utm_campaign", utmCampaign);
      const time = new Date();
      const year = time.getFullYear();
      const month = time.getMonth() + 1;
      const day = time.getDate();
      const hour = time.getHours();
      const min = time.getMinutes();
      const sec = time.getSeconds();
      const date = `${year}-${month}-${day} ${hour}:${min}:${sec}`;
      fetch(
        `https://script.google.com/macros/s/AKfycbyQKCOhxPqCrLXWdxsAaAH06Zwz_p6mZ5swK80USQ/exec?name=${this.form.name}&phone=${this.form.phone}&email=${this.form.email}&cityarea=${this.form.city}${this.form.area}&msg=${this.form.msg}&room_type=${this.form.room_type}&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_content=${utmContent}&utm_campaign=${utmCampaign}&date=${date}&campaign_name=${info.caseName}
      `,
        {
          method: "GET",
        }
      );
      fetch("contact-form.php", {
        method: "POST",
        body: formData,
      }).then((response) => {
        this.isSubmit = false;
        if (response.status === 200) {
          window.location.href = "formThanks";
        }
      });
    },
  },
};
</script>

<style lang="scss">
.el-input {
  border-left: 1px solid #eee !important;
}
</style>

<style lang="scss" scoped>
@import "@/assets/style/variableColor.scss";
@import "@/assets/style/function.scss";

.order-bg {
  position: relative;
  pointer-events: unset !important;
  .img{position: absolute;right:size(-80);top:size(110);
    transform: scale(2.5) rotate(-12deg)translate(-50%,-50%);
  img{width:size(317);transform: rotate(12deg);}
  }
  .order-top {
    position: relative;
    padding:0;
  background-color: $order_bg_color;
  width: size(1700);
  margin: auto;
  }
  .order-title {
  position: relative;
   // font-family: $family1;
  // width: size(1500);
   //font-family: 'Noto Serif TC', serif;
    padding-top:3em;
    padding-bottom:0;
    font-weight:700;
  line-height:1.6;
  font-size: size(39);
    letter-spacing: 0.06em;
    text-indent: size(10);
    text-align: center;
    color: $order_title_color;
    margin: 0 auto;
    margin-bottom: size(50);
    display: inline-block;
    z-index: 3;
   // background:  #2B5161;

   &::after,
   &::before{
    content: "";
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 90 172'%3E%3Cpath fill='%23C79E63' d='M44.4,5.1c1.9,0.5,2.7-1.8,1.4-2.7c-1.4-1-3.2-0.7-4.8-0.9C41.4,2.8,43,4.7,44.4,5.1L44.4,5.1z M1.3,165.8c5.4,7.1,16.2,7.6,20.8,4C14.8,167.8,10,159.6,1.3,165.8z M0.1,162.4c-1-6.9,4.8-18.7,12.5-18.5C7,149.6,13.1,160.1,0.1,162.4z M23.7,157.9c6.1,5.6,16.2,4.3,19.8,0.2C36.5,157.5,30.8,150.7,23.7,157.9z M22.1,154.9c-2.1-6.2,1.4-18,8.5-19C26.4,142.1,33.7,150.7,22.1,154.9z M40.3,148c6.1,4.7,15.4,2.7,18.4-1.4C52.1,146.7,46.3,140.8,40.3,148z M38.6,145.4c-2.4-5.6-0.2-16.7,6.4-18.3C41.5,133.2,49,140.6,38.6,145.4z M56.1,135.7c6.4,3.2,14.4-0.3,16.5-4.5C66.6,132.3,60.3,128.1,56.1,135.7z M54.1,133.6c-3.2-4.6-3-15.1,2.6-17.7C54.6,122,62.7,127.3,54.1,133.6z M67.2,123.4c5.8,1,11.4-3.7,12.1-7.5C74.7,118.2,68.7,116.3,67.2,123.4z M65.1,122.2c-3.6-2.9-6-11.3-2.1-14.6C62.7,112.9,70.5,115.2,65.1,122.2z M79.2,99c5.9,0,10.7-5.5,10.8-9.4C85.9,92.6,79.6,91.8,79.2,99z M76.9,98.1c-4-2.3-7.7-10.2-4.4-14.2C73.2,89.3,81.2,90.3,76.9,98.1z M83.2,75.8c4.6-1.9,6.5-7.7,5.4-10.7C86.4,68.8,81.3,70.1,83.2,75.8z M81.2,75.9c-3.8-0.5-9.1-5.5-7.8-9.6C75.6,70.3,82.1,68.5,81.2,75.9z M73.2,109.9c5.6,1,11-3.6,11.6-7.5C80.5,104.8,74.7,103,73.2,109.9z M71.2,108.8c-3.4-2.9-5.7-11.2-1.9-14.6C69,99.5,76.4,101.8,71.2,108.8z M81.4,86.7c5-1,8-6.4,7.4-9.6C85.9,80.3,80.5,80.7,81.4,86.7z M79.3,86.4c-3.7-1.2-8.1-7.2-6-11.1C74.7,79.7,81.6,79.2,79.3,86.4z M82.2,64.7c4.6-1.9,6.5-7.8,5.2-10.9C85.3,57.5,80.2,59,82.2,64.7z M80.2,64.8c-3.8-0.4-9.2-5.3-7.9-9.5C74.5,59.2,81,57.3,80.2,64.8z M81.3,54.5c3.8-2.6,4.5-8.4,2.9-11C82.9,47.3,78.5,49.5,81.3,54.5z M79.5,55c-3.5,0.2-9.2-3.4-8.8-7.5C73.3,50.7,78.9,47.9,79.5,55z M79,44.7c3.3-2.8,3.3-8.1,1.5-10.2C79.8,38.1,75.9,40.5,79,44.7z M77.4,45.3c-3.3,0.6-8.9-2-8.9-5.8C71.3,42.2,76.1,39,77.4,45.3z M74.8,36c2.9-2.6,2.7-7.5,1-9.4C75.2,29.9,71.8,32.3,74.8,36z M73.3,36.6c-3,0.7-8.3-1.5-8.4-5C67.5,34,71.9,30.9,73.3,36.6z M70.8,27.3c2.4-3.2,1.4-8.2-0.7-10C70.1,20.9,67.1,24,70.8,27.3z M69.4,28.2c-2.9,1.2-8.6-0.2-9.4-3.7C63.1,26.5,66.9,22.5,69.4,28.2z M63.8,19.4c1.9-3,0.7-7.4-1.2-8.7C62.8,13.8,60.4,16.7,63.8,19.4z M62.7,20.3c-2.4,1.2-7.5,0.3-8.4-2.7C57.1,19.1,60.2,15.4,62.7,20.3z M58.2,12.1c1.4-3-0.3-6.8-2.2-7.9C56.6,7.1,54.8,10.1,58.2,12.1z M57.3,13.1c-2,1.4-6.8,1.2-8-1.5C52.1,12.7,54.4,8.9,57.3,13.1z M52.1,6.9C53,4.1,51,0.7,49.1,0C50,2.5,48.7,5.4,52.1,6.9z M51.4,7.9c-1.7,1.5-6,1.9-7.4-0.5C46.6,8.1,48.2,4.4,51.4,7.9z'/%3E%3C/svg%3E%0A");
    display: inline-block;
    height: 1.9em;width: 1em;
    margin: 0 .8em .5em;
    vertical-align: middle;
   }
   &::before{transform: scaleX(-1);}
  }
  .order-title-img {
    width: 30vw;
    margin: 3vh auto;
    //margin-bottom: 1vw;

    img {
      width: 100%;
      max-width: 500px;
    }
  }

  .contact-brick {
    position: absolute;
    width: 20vw;
    left: 15vw;
    top: 42vw;
  }

  .order-subtitle {
    width: 100vw;
    font-size: 20px;
    text-align: center;
    color: $order_subtitle_color;
    margin-bottom: 40px;
    padding-bottom: 18px;
    line-height: 1.5;
    font-weight: 600;
  }

  .order {
    position: relative;
    width: 920px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
   // padding-bottom: 3rem;
    justify-content: space-between;
    z-index: 1;
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
    height: 240px;
    margin-bottom: 40px;
    align-content: space-between;
    display: flex;
    flex-wrap: wrap;

    &:nth-child(1) {
      border-right: 1px solid rgba(0, 0, 0, 0.2);
      margin-right: 40px;
      padding-right: 40px;
      .row {
        width: 100%;
        // justify-content: flex-start;
        .el-input {
          width: auto;
        }
      }
    }
    &:nth-child(2) {
      .row {
        //justify-content: flex-end;
        //align-items: flex-start;
        //height: 100%;
        width: 100%;
      }
    }
  }

  .row {
    display: flex;
    align-items: center;
    align-content: space-between;
    justify-content: space-between;
    background: $order_input_bg;
  //  border-radius:.8em;

    &.house {
      margin-top: 50px;
    }

    &:nth-last-child(1) {
      margin-bottom: 0;
    }

    label {
      width: 5vw;
      font-size: 16px;
      font-weight: 600;
      opacity: 0.8;
      color: $order_input_label_color;
      text-align: left;
      padding-left: 15px;
      white-space: nowrap;
      line-height: 1.2;
      span {
        color: #ff0000;
      }
    }
  }

  .control {
    margin-top: 40px;
    margin-bottom: 20px;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .order-title {
    font-size: 32px;
  }

  .order-title-img {
    width: 90vw;
  }

  .order-subtitle {
    font-size: 16px;
  }

  .order {
  //  width: 920px;
    margin: 0 auto;
  }
}

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media only screen and (max-width: 767px) {

  
  .order-bg {
    // background-color: $order_bg_color;
   // background-image: $order_bg_image_m;
   // background-size: contain;
    z-index: 2;

  .img{right:sizem(-58);top:sizem(-26);
  img{width:sizem(155);}
  }
    .order-top {
    /*  background-image: $order_bg_image_m;
      background-size: contain;
      background-repeat: repeat;*/
      // top: 10vw;
  width:100%;
  margin: auto;
    }

    .order-title {
      width: 100%;
      font-size: calc(100vw * 25 / 375);
    padding-top:2em;
    }
    .order-title-img {
      width: 80vw;
    }

    .order-subtitle {
      // display: none;
      font-size: 14px;
    //  max-width: 80vw;
      margin: 0 auto;
      margin-bottom: 0;
      line-height: 1.5;
    }
    .order {
      width: 85% !important;
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
      padding-right: 0 !important;
      &:nth-child(1) {
        .row {
          .el-input {
            width: 100%;
          }
        }
      }
    }
    .row {
      margin-bottom: 12px !important;

      &.house {
        margin-top: 20px;
      }
      label {
        width: 40% !important;
        text-align: left;
      font-size: 15px;
      }
    }

    .control {
      margin-top: 10px;
      margin-bottom: 10px;
    }

    .hint {
      width: calc(100vw * 334 / 375);
      font-size: 12px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.2;
      letter-spacing: normal;
      text-align: left;
      color: #ffffff;
    }

    @keyframes leaf {
      100% {
        transform: skew(2deg);
      }
    }
  }
}
</style>
