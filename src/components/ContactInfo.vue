<template>
  <div> 
    <div id="contact-info" class="contact-info" data-aos="fade" data-aos-delay="0">

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
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 100%;
  transform: translateY(0);
  margin: 5vw auto 2vw;
  padding: 3vw 0;
  line-height: 1.4;
    font-family:'Noto Sans TC', serif;
  &::before{content: "";
  position: absolute;top: 0;left: 0;right: 0;bottom: 0;
  background: $contact_bg;
 display: block;z-index: 2;}
}

.img1{position:absolute; width: 100%;}
.img2{position:absolute; width: 100%;
 filter: blur(size(1));
}
.imglb{position:absolute;top:size(280);left:size(-800);transform-origin: 0% 0%; width: size(1450);z-index: 2;

> div{
   transform: rotate(13deg);}
img{left: 0;bottom: 0;}

}
.imgrb{position:absolute;top:size(270);right: size(-750);transform-origin: 100% 0%;width: size(1400);z-index: 2;
> div{transform: rotate(-21deg);}
img{right: 0;bottom: 0;}

}
.tree{position:absolute;top:size(0);left: 0;width: 100%;
  .bg1{position:absolute;top:size(-150);right:0;width:90%;transform: rotate(180deg);}
.tree1{position: absolute;right:size(410);top:size(140);width:size(135);}
.tree2{position: absolute;left:size(280);top:size(0);width:size(210);}
.tree4{position: absolute;left:size(-10);top:size(0);width:size(200);}
}

.logo {
  width: $contact_logo_pc_width;
  height: auto;
  // height:;
  margin: 1vw auto 3vw;
  padding: 0 0 0 0;
  fill: #FFF;
  position: relative;z-index: 3;
      filter: drop-shadow(0.3vw 0.2vw 0.1vw #000c);
}
.info {
  width: 880px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;z-index: 3;
}

.btn {
  width: 280px;
  height: 60px;
  font-size: 16px;
  margin-bottom: 20px;
  cursor: pointer;
  text-decoration: none;
  color: $contact_btn_color;
  background: $contact_btn_bg;
 // box-shadow: $contact_btn_border;
  border: $contact_btn_border;
  border-radius: .5em;
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
.addressall{
  width: 99%;
  border-radius: .5em;
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
  border-radius: .5em;
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
    // position: static;
    margin:10vw 0 0 0;
  }
.imglb{top:sizem(180);left:sizem(-450);width: sizem(609);
}
.imgrb{top:sizem(150);right: sizem(-470);width: sizem(585);
}
.tree{
  .bg1{top:sizem(-50);right:sizem(-270);width:sizem(920);}
.tree1{right:sizem(20);top:sizem(90);width:sizem(65);}
.tree2{left:sizem(-10);top:sizem(60);width:sizem(91);}
.tree4{left:sizem(300);top:sizem(-70);width:sizem(90);}
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
  margin: 15vw auto 10vw;
    left: auto;
    position: relative;
      width: $contact_logo_mobile_width;
      filter: drop-shadow(1vw 0.7vw 0.4vw #000c);
  }
  .btn,
  .address,
  .google-btn {
    width: 100%;
  }
 // .google-btn {  }
  .addressall{
    width: 100%;
 //   border-radius: 30px;
  }
  .address {
    // width: 280px;
    padding: .9em 1em;
    text-align: justify;
    //font-size: 14px;
    height: auto;
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
