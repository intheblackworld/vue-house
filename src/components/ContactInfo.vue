<template>
  <div>
    <div class="contact-info" id="contact-info" data-aos="fade" data-aos-delay="0">
   <!--   <div class="logobg1"></div>
      <div class="logobg2">
      <img src="@/projects/cfyd/s1/logobg1.png" :alt="`${info.caseName}_面水岸`" />
      <img src="@/projects/cfyd/s1/logobg2.png" :alt="`${info.caseName}_近捷運`" />
      <img src="@/projects/cfyd/s1/logobg3.png" :alt="`${info.caseName}_鄰公園`" />
      <img src="@/projects/cfyd/s1/logobg1.png" :alt="`${info.caseName}_蘆洲站5分鐘`" />
      <img src="@/projects/cfyd/s1/logobg2.png" :alt="`${info.caseName}_888萬起`" />
      <img src="@/projects/cfyd/s1/logobg3.png" :alt="`${info.caseName}_快樂王國`" />
      </div>

      <img v-if="!isMobile" class="logo" src="@/assets/img/contact-logo.png" :alt="`${info.caseName}contact-logo`" data-aos="zoom-in" />
      <img v-if="isMobile" class="logo" src="@/assets/img/contact-logo_m.png" :alt="`${info.caseName}contact-logo`" data-aos="zoom-in" />
-->      <div class="info">
        <div class="btn flex-c" @click="showCallDialog" data-aos="zoom-in" data-aos-delay="100">
          <span class="flex-c">
            <font-awesome-icon icon="phone" />
            <span>{{info.phone}}</span>
          </span>
        </div>
        <div class="btn flex-c" @click="showMessengerDialog" data-aos="zoom-in" data-aos-delay="200">
          <span class="flex-c">
            <font-awesome-icon :icon="['fab', 'facebook-messenger']" /><span>FB 諮詢</span>
          </span>
        </div>
        <a class="btn flex-c" :href="info.fbLink" target="_blank" data-aos="zoom-in" data-aos-delay="300">
          <span class="flex-c">
            <font-awesome-icon :icon="['fab', 'facebook-f']" /><span>前往粉絲專頁</span>
          </span>
        </a>
        <div class="address flex-c" data-aos="fade" data-aos-delay="400" v-if="info.address">{{info.address}}</div>
        <div class="google-btn flex-c" data-aos="fade" data-aos-delay="400" @click="showMapDialog" v-if="info.address">
          <span class="flex-c">
            <font-awesome-icon icon="map-marker-alt" /><span>導航 Google 地圖</span>
          </span>
        </div>
      </div>
    </div>
    <el-dialog title :visible.sync="isShowCallDialog" :width="isMobile ? '90%' : '500px'" :modal-append-to-body="false">
      <CallDialog :phone="info.phone" />
    </el-dialog>
    <el-dialog title :visible.sync="isShowMessengerDialog" :width="isMobile ? '90%' : '500px'" :modal-append-to-body="false">
      <MessengerDialog :messenger="info.fbMessage" />
    </el-dialog>
    <el-dialog title :visible.sync="isShowMapDialog" :width="isMobile ? '90%' : '500px'" :modal-append-to-body="false" >
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
 // background: $contact_bg;
  // background-image: url('../assets/img/contact_bg.jpg');
 // background-size: cover;
  // background: linear-gradient(
  //   to bottom,
  //   rgba(243, 149, 1, 1) 0%,
  //   rgba(218, 71, 19, 1) 100%
  // );
  //box-shadow: $contact_shadow;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  position: relative;
  z-index: 3;
  //width: 1200px;
  width: 60%;
 // height: 600px;
  /* background-size: 100vw auto;
  background-attachment: fixed;
  background-position: 0% 50%; */
  transform: translateY(0);
  margin:0 auto 2vw;
  padding:0 0 40px;
}
.logobg{position: absolute;top: 0;left:calc(50% - 98.6vw * .5);width: 98.6vw;}
.logobg1{position: absolute;top: -1vw;left:calc(50% - 85vw * .5);width: 85vw;height: 25vw;
background: radial-gradient(ellipse at center,
 rgba(255,136,146,1) 0%,
 rgba(255,136,146,.5) 10%,
 rgba(252,103,108,0.3) 20%,
 rgba(216,73,134,0.1) 39%,
 rgba(128,0,197,0) 70%);
 animation: logobg1 1.5s ease-in-out infinite alternate;transform: scale(.8);

}
@keyframes logobg1 {
    20% {opacity: 1;transform: scale(.8);}
    100% {opacity: .6;transform: scale(1.1);}
}
.logobg2{position: absolute;top: 0;left:calc(50% - 98.6vw * .5);width: 98.6vw;opacity:0.5;
font-size: 20vw;
img{position: absolute;animation: op 2s ease-in-out infinite alternate;opacity: 1;
&:nth-child(1){top: 0.29em;left:0.06em;animation-delay: .6s;width:1.93em;}
&:nth-child(2){top: 0.26em;left:0.15em;animation-delay: .0s;width:1.75em;}
&:nth-child(3){top: 0.3em;left:0em;animation-delay: 1.2s;width:1.94em;}
&:nth-child(4){top: 0.29em;right:0em;animation-delay: .0s;width:1.93em;}
&:nth-child(5){top: 0.26em;right:0.1em;animation-delay: .8s;width:1.75em;}
&:nth-child(6){top: 0.3em;right:0.06em;animation-delay: 1.5s;width:1.94em;}
}
}
@keyframes op {
    50% {opacity: 1;}
    100% {opacity: 0;}
}

.logo {
  position: relative;
  z-index: 2;
  width: $contact_logo_pc_width;
  height: auto;
  // height:;
  margin:$contact_logo_pc_margin;
}
.info {
  width: 880px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: "Noto Serif TC", sans-serif;
}

.btn {
  width: 280px;
  height: 60px;
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 20px;
  cursor: pointer;
  text-decoration: none;
  // border-radius: 60px / 60px;
  color: $contact_btn_color;
  background: $contact_btn_bg;
  box-shadow: $contact_btn_border;
  border-radius:1.8em;
  transition: all 0.5s;
  position: relative;
  overflow: hidden;
  //font-weight: 900;
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
  width: 700px;
  height: 60px;
  font-size: 18px;
  font-weight: 700;
  background: #fff;
  border: 1px solid #0004;
  border-radius:1.8em;
  color: $contact_btn_border;
  font-weight: 700;
  box-shadow: $contact_btn_border;
  z-index: 1;
  padding: 0 100px 0 0;
  margin-right: -100px;
  // border-top-left-radius: 60px;
  // border-bottom-left-radius: 60px;
}
.google-btn {
  width: 280px;
  height: 60px;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
  //font-weight: 900;
  // border-top-right-radius: 60px;
  // border-bottom-right-radius: 60px;
  color: $contact_google_btn_color;
  background: $contact_google_btn_bg;
  background-position: center !important;
  border: $contact_btn_border;
  border-radius:1.8em;
  transition: all 0.5s;
  z-index: 1;
  overflow: hidden;
  position: relative;

  svg {
    color: $contact_google_btn_icon;
    width: 24px;
    height: 24px;
    margin-right: 12px;
    transition: all 0.5s;
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
   // background: $contact_bg;
    display: flex;
    width: 100%;
    //  max-width: 95%;
    height: auto;
    padding: 10% 8%;
    transform: none;
    margin: 0;

    .logo {
      width: $contact_logo_mobile_width;
      margin: 5% auto 10%;
    }
.logobg{position: absolute;top: 0;
left:calc(50% - 223vw * .5);width: 223vw;}
.logobg1{position: absolute;top: 0;
left:calc(50% - 123vw * .5);width: 123vw;height: 50vw;
}
.logobg2{left:calc(50% - 223vw * .5);width: 223vw;
font-size:51vw;
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
    //margin-bottom: 40px;

    > * {
      margin-bottom: 12px;
      &.address {
        margin-bottom: 0;
      }
    }
  }

  .logo {
   // margin-bottom: 20px;
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
    // border-bottom-right-radius: 30px;
    // border-bottom-left-radius: 30px;
  }
  .address {
    // width: 280px;
    padding: 1.5em 1em 4.5em 1em;
    text-align: justify;
    line-height: 1.5;
    height: auto;
    margin:0 0 0 0;
    font-size: 15px;
    // border-top-right-radius: 30px;
    // border-top-left-radius: 30px;
    // border-bottom-right-radius: 0px;
    // border-bottom-left-radius: 0px;
  }
  .google-btn {
    margin-top:-2.7em;
  }
}

@media only screen and (max-width: 321px) {
  .address {
    font-size: 14px;
  }
}
</style>
