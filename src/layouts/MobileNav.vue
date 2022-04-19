<template>
  <div :class="{ 'mobile-nav': true }">
    <a class="nav-item" @click="showCallDialog">
      <font-awesome-icon icon="phone" />
      <div class="label">撥打電話</div>
    </a>

    <a class="nav-item" v-scroll-to="{ element: `#contact`, offset: offset }">
      <font-awesome-icon icon="pen" />
      <div class="label">預約賞屋</div>
    </a>
    <a class="nav-item" @click="trackFb" :href="info.fbLink" target="_blank">
      <font-awesome-icon :icon="['fab', 'facebook-f']" />
      <div class="label">粉絲專頁</div>
    </a>
    <a class="nav-item" @click="showMapDialog">
      <font-awesome-icon icon="map-marker-alt" />
      <div class="label">地圖導航</div>
    </a>
    <el-dialog title :visible.sync="isShowCallDialog" width="90%" :modal-append-to-body="false">
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
import { isMobile, isTablet } from '@/utils'
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

  display: flex;
  position: fixed;
  bottom: 0;
  z-index: 100;
  box-shadow: 0 -2px 8px 0 #0006;
  display: none;
  transition: all .5s;
    font-size: 15px;
    font-weight: 600;
    text-shadow: 0 0.1em 0.5em #069;
    letter-spacing: 0.06em;

  .nav-item {
    flex: 1;
    color: $mobile_nav_color;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid $mobile_nav_border;
    text-decoration:none;

    &:nth-child(4) {
      border-right: none;
    }
  }

  svg {
    width: 1.3em;
    height:1.6em;
    color: $mobile_nav_icon;
    margin: 0 0 0.4em;
  }

  .label {
    text-align: center;
  }
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .mobile-nav {
    display: flex;
  }
}
</style>
