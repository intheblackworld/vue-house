<template>
  <div>
    <div class="contact-info">
      <img class="logo" :src="require('@/assets/img/contact-logo.png')" alt="" />
      <div class="info">
        <div class="btn flex-c" @click="showCallDialog">
          <span class="flex-c">
            <font-awesome-icon icon="phone" />
            <span>{{info.phone}}</span>
          </span>
        </div>
        <div class="btn flex-c" @click="showMessengerDialog">
          <span class="flex-c">
            <font-awesome-icon :icon="['fab', 'facebook-messenger']" /><span>FB 諮詢</span>
          </span>
        </div>
        <!-- <a class="btn flex-c" :href="info.fbMessage" target="_blank" v-else>
        <span class="flex-c">
          <font-awesome-icon :icon="['fab', 'facebook-messenger']" />FB 諮詢
        </span>
      </a> -->
        <a class="btn flex-c" :href="info.fbLink" target="_blank">
          <span class="flex-c">
            <font-awesome-icon :icon="['fab', 'facebook-f']" /><span>前往粉絲專頁</span>
          </span>
        </a>
        <div class="address flex-c" v-html="info.address"></div>
        <div class="google-btn flex-c" @click="isShowMapDialog = true">
          <span class="flex-c">
            <font-awesome-icon icon="map-marker-alt" /><span>導航 Google 地圖</span>
          </span>
        </div>
        <!-- <a class="google-btn flex-c" :href="info.googleLink" target="_blank" v-else>
        <span class="flex-c">
          <font-awesome-icon icon="map-marker-alt" />導航 Google 地圖
        </span>
      </a> -->
      </div>
    </div>
    <el-dialog title :visible.sync="isShowCallDialog" :width="isMobile ? '90%' : '500px'" :modal-append-to-body="false">
      <CallDialog :phone="info.phone" />
    </el-dialog>
    <el-dialog title :visible.sync="isShowMessengerDialog" :width="isMobile ? '90%' : '500px'" :modal-append-to-body="false">
      <MessengerDialog :messenger="info.fbMessage" />
    </el-dialog>
    <el-dialog title :visible.sync="isShowMapDialog" :width="isMobile ? '90%' : '500px'" :modal-append-to-body="false">
      <MapDialog :link="info.googleLink" :address="info.address" />
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
  background: $contact_bg;
  background-size: cover;
  box-shadow: $contact_shadow;
  display: flex;
  flex-direction: column;
  align-content: center;
  position: relative;
  z-index: 4;
  width: 1200px;
  height: 515px;
  padding: 30px;
  margin: 0 auto;
}

.logo {
  width: $contact_logo_pc_width;
  height: auto;
  margin: 50px auto 50px;
}
.info {
  width: 880px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 16px;
  line-height: 1.6;
}

.btn {
  width: 280px;
  height: 60px;
  margin-bottom: 20px;
  cursor: pointer;
  text-decoration: none;
  color: $contact_btn_color;
  background: $contact_btn_bg;
  border: $contact_btn_border;
  transition: all 0.5s;
  // border-radius: 10px;

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

    svg {
      color: $contact_btn_hover_icon;
    }
  }
}
.address {
  width: 600px;
  height: 60px;
  background: #eee;
  //box-shadow: inset 0 0 0 1px #999;
  color: #444;
  // border-radius: 10px 0 0  10px;

  &::v-deep span {
    color: #c00;
    font-size: 1.1em;
    font-weight: bold;
  }
}
.google-btn {
  // border-radius:0 10px 10px 0;
  width: 280px;
  height: 60px;
  font-size: 16px;
  margin-bottom: 25px;
  cursor: pointer;
  text-decoration: none;
  color: $contact_google_btn_color;
  background: $contact_google_btn_bg;
  // background-image: url("../assets/img/contact_gold_button.png");
  border: $contact_btn_border;
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
    height: 460px;
    padding: 60px 0 80px;

    .logo {
      width: $contact_logo_tablet_width;
    }
  }
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .contact-info {
    width: 85%;
    height: auto;
    padding: 0;
    position: relative;
    z-index: 5;
    .logo {
      width: $contact_logo_mobile_width;
    }
  }

  .info {
    width: 100%;
    justify-content: center;
    text-align: center;
    margin-bottom: 40px;

    > * {
      margin-bottom: 12px;
    }
  }

  .logo {
    margin: 50px auto;
  }

  .address {
    width:  100%;
    margin-bottom: 0;
    text-align: left;
    border-bottom: none;
    padding: 10px;
    height: auto;
  }
  .btn {
    width: 100%;
    position: relative;
    span{padding: 0 0 0 0.5em;}
   svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: calc(50% - 5em);
    margin-right: 0;
  }
  }
  .google-btn {
    // border-radius: 0 0 10px 10px;
    width: 100%;
  }
}
</style>
