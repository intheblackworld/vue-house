<template>

    

  <div>
    <div class="mobile-nav">
    <a class="nav-item" @click="showCallDialog" v-if="isMobile">
      <font-awesome-icon icon="phone" />
      <div class="label">撥打電話</div>
    </a>
    <a class="nav-item" v-scroll-to="{ element: `#contact`, offset: offset }" v-if="isMobile">
      <font-awesome-icon icon="pen" />
      <div class="label">預約賞屋</div>
    </a>
    <a class="nav-item" @click="showMessengerDialog" v-if="isMobile">
      <font-awesome-icon :icon="['fab', 'facebook-messenger']" />
      <div class="label">FB諮詢</div>
    </a>
    <a class="nav-item" @click="showMapDialog" v-if="isMobile">
      <font-awesome-icon icon="map-marker-alt" />
      <div class="label">地圖導航</div>
    </a>
    </div>
    <div class="mobile-nav-pc">
        <a class="nav-item fix-phone" @click="showCallDialog" v-if="isPC">
          <font-awesome-icon icon="phone" />
          <div class="label">撥打電話</div>
        </a>
        <a class="nav-item fix-home" v-scroll-to="{ element: `#contact`, offset: offset }"  v-if="isPC">
          <font-awesome-icon icon="pen" />
          <div class="label">預約賞屋</div>
        </a>
        <a class="nav-item fix-map" @click="showMapDialog"  v-if="isPC">
          <font-awesome-icon icon="map-marker-alt" />
          <div class="label">地圖導航</div>
        </a>
        </div>

    
    <el-dialog title :visible.sync="isShowCallDialog" :width="isMobile ? '90%' : '500px'" :modal-append-to-body="false">
      <CallDialog :phone="info.phone" />
    </el-dialog>
    <el-dialog
      title
      :visible.sync="isShowMessengerDialog"
      width="90%"
      :modal-append-to-body="false"
    >
      <MessengerDialog :messenger="info.fbMessage" />
    </el-dialog>
    <el-dialog title :visible.sync="isShowMapDialog" :width="isMobile ? '90%' : '500px'" :modal-append-to-body="false">
      <MapDialog :link="info.googleLink" :address="info.address" />
    </el-dialog>
  </div>
  

  
</template>

<script>
import { isMobile, isTablet, isPC } from '@/utils'
import CallDialog from '@/components/Dialog/Call'
import MessengerDialog from '@/components/Dialog/Messenger'
import MapDialog from '@/components/Dialog/Map'
import info from '@/info'

export default {
  name: 'mobileNav',
  components: {
    CallDialog,
    MessengerDialog,
    MapDialog,
  },
  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isBottom: false,
      isShowCallDialog: false,
      isShowMessengerDialog: false,
      isShowMapDialog: false,
    }
  },
  computed: {
    offset() {
      if (this.isMobile) {
        return -100
      }

      if (this.isTablet) {
        return 0
      }

      return 0
    },
  },
  methods: {
    showCallDialog() {
      this.isShowCallDialog = true
    },
    showMessengerDialog() {
      this.isShowMessengerDialog = true
    },

    showMapDialog() {
      this.isShowMapDialog = true
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variableColor.scss';

.mobile-nav {
  width: 100%;
  height: 63px;
  background: $mobile_nav_background;
  position: fixed;
  display: none;
  bottom: 0;
  z-index: 100;
  box-shadow: 0 -2px 8px 0 #0006;
  transition: all .5s;
}
.mobile-nav-pc {
  display: flex;
  position: fixed;
  bottom: 0;
  z-index: 5;

  .nav-item {
    flex: 1;
    color: $mobile_nav_color;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid $mobile_nav_border;

    &:nth-child(4) {
      border-right: none;
    }
  }

  svg {
    width: 20px !important;
    height: 25px;
    color: $mobile_nav_icon;
  }

  .label {
    text-align: center;
  }
}
.fix-phone {
  top:6%;
  margin-top: 80px;
  position: fixed;
  z-index: 4;
  width: 90px;
  height: 90px;
  background: #42191F;
  border-radius: 60px;
  margin-left: 30px;
  img {
    width: 100%;
  }
}
.fix-home {
  top:6%;
  margin-top: 180px;
  position: fixed;
  z-index: 4;
  width: 90px;
  height: 90px;
  background: #42191F;
  border-radius: 60px;
  margin-left: 30px;
  img {
    width: 100%;
  }
}
.fix-map {
  top:6%;
  margin-top: 280px;
  position: fixed;
  z-index: 4;
  width: 90px;
  height: 90px;
  background: #42191F;
  border-radius: 60px;
  margin-left: 30px;
  img {
    width: 100%;
  }
  .fix-none{
    display: none !important;
  }
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .mobile-nav {
    display: flex;
  }
  .nav-item {
    flex: 1;
    color: $mobile_nav_color;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid $mobile_nav_border;

    &:nth-child(4) {
      border-right: none;
    }
  }
}
</style>
