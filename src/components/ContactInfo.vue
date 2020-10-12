<template>
  <div>
<<<<<<< HEAD
    <div class="contact-info" id="contact-info">
      <!-- <img class="logo" src="@/assets/img/contact-logo.png" :alt="info.caseName" /> -->
=======
    <div
      class="contact-info"
      data-aos="fade"
      data-aos-delay="0"
    >
      <img
        class="logo"
        src="@/assets/img/contact-logo.png"
        :alt="info.caseName"
        data-aos="fade-down"
        data-aos-delay="0"
      />
>>>>>>> 720caaf22d574c193475400070dc9cf3e9e04e82
      <div class="info">
        <div
          class="btn flex-c"
          @click="showCallDialog"
<<<<<<< HEAD
        >
          <span class="flex-c">
            <font-awesome-icon icon="phone" />
            {{info.phone}}
=======
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <span class="flex-c">
            <font-awesome-icon icon="phone" />
            <span>{{info.phone}}</span>
>>>>>>> 720caaf22d574c193475400070dc9cf3e9e04e82
          </span>
        </div>
        <div
          class="btn flex-c"
          @click="showMessengerDialog"
<<<<<<< HEAD
        >
          <span class="flex-c">
            <font-awesome-icon :icon="['fab', 'facebook-messenger']" />FB 諮詢
          </span>
        </div>
        <!-- <a class="btn flex-c" :href="info.fbMessage" target="_blank" v-else>
        <span class="flex-c">
          <font-awesome-icon :icon="['fab', 'facebook-messenger']" />FB 諮詢
        </span>
      </a> -->
=======
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <span class="flex-c">
            <font-awesome-icon :icon="['fab', 'facebook-messenger']" /><span>FB 諮詢</span>
          </span>
        </div>
>>>>>>> 720caaf22d574c193475400070dc9cf3e9e04e82
        <a
          class="btn flex-c"
          :href="info.fbLink"
          target="_blank"
<<<<<<< HEAD
        >
          <span class="flex-c">
            <font-awesome-icon :icon="['fab', 'facebook-f']" />前往粉絲專頁
=======
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <span class="flex-c">
            <font-awesome-icon :icon="['fab', 'facebook-f']" /><span>前往粉絲專頁</span>
>>>>>>> 720caaf22d574c193475400070dc9cf3e9e04e82
          </span>
        </a>
        <div
          class="address flex-c"
<<<<<<< HEAD
          v-html="info.address"
        ></div>
        <div
          class="google-btn flex-c"
          @click="showMapDialog"
        >
          <span class="flex-c">
            <font-awesome-icon icon="map-marker-alt" />導航 Google 地圖
          </span>
        </div>
        <!-- <a class="google-btn flex-c" :href="info.googleLink" target="_blank" v-else>
        <span class="flex-c">
          <font-awesome-icon icon="map-marker-alt" />導航 Google 地圖
        </span>
      </a> -->
=======
          data-aos="fade-down"
          data-aos-delay="400"
        >{{info.address}}</div>
        <div
          class="google-btn flex-c"
          data-aos="fade-down"
          data-aos-delay="400"
          @click="showMapDialog"
        >
          <span class="flex-c">
            <font-awesome-icon icon="map-marker-alt" /><span>導航 Google 地圖</span>
          </span>
        </div>
>>>>>>> 720caaf22d574c193475400070dc9cf3e9e04e82
      </div>
    </div>
    <el-dialog
      title
      :visible.sync="isShowCallDialog"
      :width="isMobile ? '90%' : '500px'"
      :modal-append-to-body="false"
    >
      <CallDialog :phone="info.phone" />
    </el-dialog>
    <el-dialog
      title
      :visible.sync="isShowMessengerDialog"
      :width="isMobile ? '90%' : '500px'"
      :modal-append-to-body="false"
    >
      <MessengerDialog :messenger="info.fbMessage" />
    </el-dialog>
    <el-dialog
      title
      :visible.sync="isShowMapDialog"
      :width="isMobile ? '90%' : '500px'"
      :modal-append-to-body="false"
    >
      <MapDialog
        :link="info.googleLink"
        :address="info.address"
      />
    </el-dialog>
  </div>
</template>

<script>
import info from '@/info'
import { isMobile, isTablet } from '@/utils'
import CallDialog from '@/components/Dialog/Call'
import MessengerDialog from '@/components/Dialog/Messenger'
import MapDialog from '@/components/Dialog/Map'
export default {
  name: 'contactInfo',
  components: {
    CallDialog,
    MessengerDialog,
    MapDialog,
  },
  data() {
    return {
      info,

      isMobile,
      isTablet,
      isShowCallDialog: false,
      isShowMessengerDialog: false,
      isShowMapDialog: false,
    }
  },
  methods: {
    showCallDialog() {
      // if (!this.isMobile) return
      this.isShowCallDialog = true
    },
    showMessengerDialog() {
      // if (!this.isMobile) return
      this.isShowMessengerDialog = true
    },

    showMapDialog() {
      // if (!this.isMobile) return
      this.isShowMapDialog = true
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variableColor.scss';
@import '@/assets/style/variableDefault.scss';

.contact-info {
<<<<<<< HEAD
 // background: $contact_bg;
  // background-image: url('../assets/img/contact_bg.jpg');
  background-size: cover;
 // border-top: 1px solid #4446;
  // background-position: 50% 100%;
  box-shadow: $contact_shadow;
  display: flex;
  flex-direction: column;
  align-content: center;
  // justify-content: space-between;
  // transform: translateY(14%);
  position: relative;
  z-index: 3;
  width: 1200px;
  height: 360px;
  padding-top: 50px;

  margin: 50px auto 0 auto;
  // padding: 60px 0 50px;
}

.logo {
  width: auto;
  height: 45%;
  margin: 40px auto 40px;
=======
  background: $contact_bg;
  // background-image: url('../assets/img/contact_bg.jpg');/
  background-size: cover;
  //box-shadow: $contact_shadow;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  position: relative;
  z-index: 3;
  width: 1200px;
  height: 460px;
  /* background-size: 100vw auto;
  background-attachment: fixed;
  background-position: 0% 50%; */
  transform: translateY(0);
  margin: 2vw auto -3vw;
  padding: 30px 0 40px;
}

.logo {
  width: $contact_logo_pc_width;
  height: auto;
  // height:;
  margin: 0 auto 20px;
>>>>>>> 720caaf22d574c193475400070dc9cf3e9e04e82
}
.info {
  width: 880px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.btn {
  width: 280px;
  height: 60px;
  font-size: 16px;
  margin-bottom: 20px;
  cursor: pointer;
  text-decoration: none;
  border-radius: 60px / 60px;
  color: $contact_btn_color;
  background: $contact_btn_bg;
  border: $contact_btn_border;
  transition: all 0.5s;
  position: relative;
  overflow: hidden;
  font-weight: 600;
  &.half {
    width: 49%;
  }
  svg {
    color: $contact_btn_icon;
    width: 24px;
    height: 24px;
    margin-right: 12px;
    transition: all 0.5s;
  }

  &:hover {
    background: $contact_btn_hover_bg;
    // background-image: url("../assets/img/contact_gold_button.png");
    color: $contact_btn_hover_color;
    box-shadow: none !important;

    svg {
      color: $contact_btn_hover_icon;
    }
  }
  &::before {
    content: '';
    width: 40%;
    height: 100%;
    display: block;
    background: #fff;
    position: absolute;
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
    left: -10%;
    opacity: 0;
    top: 0;
    z-index: 5;
    transition: all 0.4s cubic-bezier(0.2, 0.95, 0.57, 0.99);
  }
  &:hover:before {
    opacity: 1;
    width: 90%;
    left: 140%;
  }
}
.address {
  width: 600px;
  height: 60px;
  background: #fff;
<<<<<<< HEAD
  box-shadow: inset 0 0 0 1px #d70032;
  border-top-left-radius: 60px;
  border-bottom-left-radius: 60px;
  color: #444;

  &::v-deep span {
    color: #c00;
    font-size: 1.1em;
    font-weight: bold;
  }
=======
  color: #040000;
  font-weight: bold;
  //box-shadow: $contact_btn_border;
>>>>>>> 720caaf22d574c193475400070dc9cf3e9e04e82
}
.google-btn {
  width: 280px;
  height: 60px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  border-top-right-radius: 60px;
  border-bottom-right-radius: 60px;
  color: $contact_google_btn_color;
  background: $contact_google_btn_bg;
<<<<<<< HEAD
  // background-image: url("../assets/img/contact_gold_button.png");
  border: $contact_btn_border;
=======
  background-position: center !important;
  box-shadow: $contact_btn_border;
>>>>>>> 720caaf22d574c193475400070dc9cf3e9e04e82
  transition: all 0.5s;

  svg {
    color: $contact_google_btn_icon;
    width: 24px;
    height: 24px;
    margin-right: 12px;
    transition: all 0.5s;
  }

  &:hover {
    background: $contact_google_hover_btn_bg;
    color: $contact_google_hover_btn_color;

    svg {
      color: $contact_google_hover_btn_icon;
    }
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .contact-info {
    display: flex;
    width: 90% !important;
    height: 360px;
    padding: 60px 0 80px;

    .logo {
      width: $contact_logo_tablet_width;
    }
  }
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .contact-info {
    background: $contact_bg_m;
    display: flex;
    width: 100%;
    //  max-width: 95%;
    height: auto;
    padding: 5%;
    transform: none;
    position: static;
    margin: 0;

    .logo {
      width: $contact_logo_mobile_width;
      margin: 5% auto 10%;
    }
  }

  .btn {
    &.half {
      width: 280px;
    }
    svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: calc(50% - 5em);
      margin-right: 0;
      + span {
        margin-left: 1.5em;
      }
    }
  }

  .info {
    width: 100%;
    justify-content: center;
    text-align: center;
<<<<<<< HEAD
    //  margin-bottom: 40px;
    margin-bottom: -12px;
=======
    //margin-bottom: 40px;
>>>>>>> 720caaf22d574c193475400070dc9cf3e9e04e82

    > * {
      margin-bottom: 12px;
      &.address {
        margin-bottom: 0;
      }
    }
  }

  .logo {
    margin-bottom: 20px;
    margin: 0 auto 30px;
    left: auto;
    position: relative;
  }
  .btn,
  .address,
  .google-btn {
    width: 100%;
  }
  .google-btn {
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
  }
  .address {
<<<<<<< HEAD
    margin-bottom: 0;
    text-align: left;
    // border: 1px solid #666;
    border-bottom: none;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  .btn svg {
    position: absolute;
    margin: 0 0 0 -70px;
=======
    width: 280px;
    padding: 0 1em;
    text-align: justify;
  }

  .google-btn {
    margin-top: 15px;
  }
}

@media only screen and (max-width: 321px) {
  .address {
    font-size: 14px;
>>>>>>> 720caaf22d574c193475400070dc9cf3e9e04e82
  }
}
</style>
