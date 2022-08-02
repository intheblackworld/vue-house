<template>
  <div :class="{ 'mobile-nav': true }">
    <a class="nav-item" @click="showCallDialog">
      <font-awesome-icon icon="phone" />
      <div class="label">撥打電話</div>
    </a>

    <a class="nav-item" v-scroll-to="{ element: `#contact`, offset: offset }">
      <font-awesome-icon icon="pen" />
      <div class="label">立即預約</div>
    </a>
    <a class="nav-item" @click="showMessengerDialog">
      <font-awesome-icon :icon="['fab', 'facebook-messenger']" />
      <div class="label">FB諮詢</div>
    </a>
    <a class="nav-item" @click="showMapDialog">
      <font-awesome-icon icon="map-marker-alt" />
      <div class="label">地圖導航</div>
    </a>
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
    <el-dialog title :visible.sync="isShowMapDialog" width="90%" :modal-append-to-body="false">
      <MapDialog :link="info.googleLink" :address="info.address" />
    </el-dialog>
  </div>
</template>

<script>
import { isPC,isMobile, isTablet } from '@/utils'
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
  display: flex;
  position: fixed;
  bottom: calc(50% - 2em);
  right: 0;
  z-index: 100;
  transition: all .5s;
  font-size:1.5vw;
  flex-direction:column;
   // opacity: 0.5;
  .nav-item {
  background: $mobile_nav_background;
    color: $mobile_nav_color;
    font-size: 1em;
    font-weight:700;
    line-height: 1.5;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    width: 4em;
    height: 4em;
    padding: 0em .8em;
    border-radius: 50%;
    margin: .3em;
    transition: all 0.3s;
    &:nth-child(1) {
 // background-image:url("~@/projects/great-intersection/s1/o1.png");background-size: contain;
    line-height: 1.2;
      order:2;
    }
    &:nth-child(2) {
 // background-image:url("~@/projects/great-intersection/s1/o1.png");background-size: contain;
    line-height: 1.2;
      order:1;
    }
    &:nth-child(3) {
    display: none;
    }
    &:nth-child(4) {
    display: none;
    }
    &:hover{transform: scale(1.2);
    }
  }

  svg {
    width: 20px !important;
    height: 25px;
    color: $mobile_nav_icon;
    display: none;
    
  }

  .label {
    text-align: center;
  }
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .mobile-nav {
  font-size:4vw;
  width: 100%;
  height: 63px;
  top: auto;
  bottom: 0;
  box-shadow: 0 -2px 8px 0 #0006;
    flex-direction:row;
  .nav-item {
    flex: 1;
    display: flex;
    height:auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid $mobile_nav_border;
    border-radius: 0%;
    margin:0;
    &:nth-child(1) {
      background-image:none;
      order:1;
    }
    &:nth-child(2) {
      background-image:none;
      order:2;
    }
    &:nth-child(3) {
      order:3;
    display: flex;
    }
    &:nth-child(4) {
      order:4;
    display: flex;
      border-right: none;
    }
    &:hover{transform: scale(1);
    }
  }

  svg {
    display: block;
  }

  .label {
    text-align: center;
  }
}
}
</style>
