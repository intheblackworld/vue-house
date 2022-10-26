<template>
  <div>
    <div id="contact-info" class="contact-info" data-aos="fade" data-aos-delay="0">
      <img v-if="isMobile" src="@/assets/img/bg_m.png" class="bg">
      <div class="info">
        <div class="btn flex-c" @click="showCallDialog" data-aos="fade-down" data-aos-delay="100">
          <span class="flex-c">
            <font-awesome-icon icon="phone" />
            <span>{{info.phone}}</span>
          </span>
        </div>
        <div class="btn flex-c" @click="showMessengerDialog" data-aos="fade-down" data-aos-delay="200">
          <span class="flex-c">
            <font-awesome-icon :icon="['fab', 'facebook-messenger']" /><span>FB 諮詢</span>
          </span>
        </div>
        <a class="btn flex-c btfanpage" :href="info.fbLink" target="_blank" data-aos="fade-down" data-aos-delay="300">
          <span class="flex-c">
            <font-awesome-icon :icon="['fab', 'facebook-f']" /><span>前往粉絲專頁</span>
          </span>
        </a>
        <a class="btn flex-c btfanpage" href="https://lin.ee/66APHIK" target="_blank" data-aos="fade-down" data-aos-delay="300">
          <span class="flex-c">
            <img src="@/assets/img/lineicon.png" ><span>Line官方</span>
          </span>
        </a>
        <div class="addressall" data-aos="fade-down" data-aos-delay="400">
          <div class="address flex-c">接待中心：<br v-if="isMobile">{{info.address}}</div>
          <div class="google-btn flex-c" @click="showMapDialog">
            <span class="flex-c">
              <font-awesome-icon icon="map-marker-alt" /><span>導航 Google 地圖</span>
            </span>
          </div>
        </div>
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
  background: $contact_bg ;

  // background-image: url('../assets/img/contact_bg.jpg');/
  // background-size: cover;
  //box-shadow: $contact_shadow;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  position: relative;
  z-index: 3;
  // width: 1200px;
  // height: 380px;
  /* background-size: 100vw auto;
  background-attachment: fixed;
  background-position: 0% 50%; */
  transform: translateY(0);
  margin: 20vw auto 0vw;
  //padding: 30px 0 40px;
  padding: 3vw 0;
  line-height: 1.4;
}

.logo {
  width: $contact_logo_pc_width;
  height: auto;
  // height:;
  margin: -3vw auto -8vw;
  padding: 0 0 0 15vw
}
.info {
  width: 880px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.btn {
  width: 210px;
  height: 60px;
  font-size: 16px;
  margin-bottom: 20px;
  cursor: pointer;
  text-decoration: none;
  color: $contact_btn_color;
  background: $contact_btn_bg;
 // box-shadow: $contact_btn_border;
  border: $contact_btn_border;
  border-radius: 0px ;
  transition: all 0.5s;
  position: relative;
  overflow: hidden;
  font-weight: 600;
  &.half {
    width: 49%;
  }
  svg,img {
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
.addressall{
  width: 99%;
  border-radius:0px ;
  background: #EEE;
}
.address {
  width:calc(100% - 280px);
  height: 60px;
  color: #040000;
  font-weight: bold;
  float: left;
  //box-shadow: $contact_btn_border;
  //border: $contact_btn_border;
}
.google-btn {
  width: 280px;
  height: 60px;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  left: 1%;
  text-decoration: none;
  // border-top-right-radius: 60px;
  //border-bottom-right-radius: 60px;
  color: $contact_google_btn_color;
  background: $contact_google_btn_bg;
  background-position: center !important;
  border: $contact_btn_border;
  transition: all 0.5s;
  border-radius:0px ;
  font-weight: 600;

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
  //  background: $contact_bg_m;
    background-size: 250% auto;
    display: flex;
    width: 100%;
    //  max-width: 95%;
    height: auto;
    padding:0 5% 5% 5%;
    transform: none;
    position: static;
    margin:80vw 0 0 0;
    position: relative;
    


    .bg{
      position: absolute;
      left: 0;
      right:0;
      bottom:sizem(-200);
      width: 100%;
      z-index: -1;
    }

    .logo {
      width:155%;
   //   margin: 30% auto 10%;
  margin: -0vw -10% -15vw;
  object-fit:cover;
  height: sizem(300);
  padding:0;
    }
  }


  .btn {
    &.half {
      width: 280px;
    }
    svg,img {
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
    //margin-bottom: 40px;

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
    /* border-top-right-radius: 0px;
    border-top-left-radius: 0px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;*/
  }
  .addressall{
    width: 100%;
    border-radius: 0px;}
  .address {
    // width: 280px;
    padding: 0 1em;
    text-align: justify;
    font-size: 14px;
  }

  .google-btn {
    margin-top: 15px;
    left: 0;
  }
}

@media only screen and (max-width: 321px) {
  .address {
    font-size: 14px;
  }
}
</style>
