<template>
  <div :class="`navigation ${min ? '' : 'min'}`">
    <div class="layout-container-fluid nav-container">
      <div class="layout-container nav-container">
        <div class="nav">
          <div class="close flex-c" @click="min = !min" v-if="!isMobile">
            <div class="menu-icon"></div>
          </div>
          <!-- <img class="logo" src="@/assets/img/nav-logo.png" alt @click="$router.push('/')" /> -->
          <div @click="toggleSidebar('')" :class="`menu ${isOpen ? 'open' : ''}`">
            <div class="menu-icon"></div>
            <!-- <font-awesome-icon icon="bars" /> -->
          </div>
          <div :class="`mask ${isOpen ? 'open' : ''}`">
            <!-- <div class="close" @click="isOpen = false">
              <img src="../assets/img/close.png" alt="">
            </div> -->
          </div>
          <ul :class="`navlist ${isOpen ? 'open': ''}`">
         <!--     <img src="@/projects/lc/menu/icon_f.png" alt="" class="fb" @click="showMessengerDialog" v-if="isMobile">
            <img src="@/projects/lc/menu/icon_l.png" alt="" class="line" v-if="isMobile">
           <li v-if="isMobile" alt v-scroll-to="{ element: `#section1`, offset: offset }"><img class="navlogo" src="@/assets/img/nav-logo.png" /></li> -->
            <li :key="item.name" v-for="item in list" class="flex-c">
              <span :class="`link ${item.path == $route.name ? 'active' : ''}`" @click="toggleSidebar(item.path)">
                <span class="flex-c wrap">
                  <p class="title" v-html="item.name"></p>
                  <span class="subTitle">{{item.subTitle}}</span>
                </span>
              </span>
            </li>
          <!--   <li class="flex-c" @click="showMessengerDialog">
              <img src="@/projects/lc/menu/icon_f.png" class="fb" alt="fb">
            </li>
            <li class="flex-c">
          <img src="@/projects/lc/menu/icon_l.png" class="line" alt="line">
            </li> -->
          </ul>
        </div>
      </div>
    </div>
    <el-dialog title :visible.sync="isShowMessengerDialog" :width="isMobile ? '90%' : '500px'" :modal-append-to-body="false">
      <MessengerDialog :messenger="info.fbMessage" />
    </el-dialog>
  </div>
</template>

<script>
import { isMobile, isTablet } from '@/utils'
import info from '@/info'
import navList from '@/info/navList'
import MessengerDialog from '@/components/Dialog/Messenger'

export default {
  name: 'navigation',
  components: {
    MessengerDialog,
  },
  data() {
    return {
      info,
      isOpen: false,
      isMobile,
      isTablet,
      list: navList,
      isShowMessengerDialog: false,
    }
  },

  props: ['min'],

  computed: {
    offset() {
      if (this.isMobile) {
        return 0
      }

      if (this.isTablet) {
        return 0
      }

      return 0
    },
  },

  mounted() {
    // console.log(this.$route)
    // console.log(this.list)
  },

  methods: {
    toggleSidebar(path) {
      if (!path) {
        this.isOpen = !this.isOpen
      } else {
        this.$router.push(`/${path}`)
      }
    },

    showMessengerDialog() {
      // if (!this.isMobile) return
      this.isShowMessengerDialog = true
    },
  },
}
</script>
<style lang="scss">
// .navigation {
//   .title {
//     font-size: 19px !important;
//     width: 140px;
//     height: 40px;
//     color: #fff;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-image: linear-gradient(to right, #d70032 0%, #eb5500 100%);
//     border-radius: 20px / 20px;
//     position: relative;
//     z-index: 3;
//     &:hover {
//       background-image: linear-gradient(to left, #d70032 0%, #eb5500 100%);
//     }
//   }
// }
</style>
<style lang="scss" scoped>
@import '../assets/style/variableColor.scss';
@import '../assets/style/variableDefault.scss';
@import '../assets/style/function.scss';

.navigation {
  background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.7)  45%,rgba(255, 255, 255, 0.7)  90%, rgba(255, 255, 255, 0.42));
  // background-image: $nav_bg;
  background-size: cover;
  height: $nav_pc_height;
  z-index: 30;
  position: fixed;
  top: 0;
  left: size(0);
  width: 100%;
  display: flex !important;
  align-items: center;
  transition: all 0.5s;
  // box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.2);
}

.nav-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav {
  justify-content: flex-end;
  //min-width: 1280px;
  width: size(1400);
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  // justify-content: center;
  position: relative;
  a {
    display: block;
    cursor: pointer;
  }
}

.line {
  width: 1.5em;
  display: block;

  cursor: pointer;
  margin: 0 1.5em 0 0;
}
.fb {
  width: 1.5em;
  display: block;
  cursor: pointer;
  margin: 0 1.5em 0 0;
}
.logo {
  width: $logo_pc_width;
  height: auto;
  // position: absolute;
  // left: 50px;
  display: block;
  // top: 50%;
  // transform: translate(3%, -50%);
  transition: all 0.3s;
}

.mask {
  display: none;
}

.close {
  @include div_r_pc(40, 40, 15, 0);
  // width: size(40);
  // height: size(40);
  background-color: #008fbb;
  cursor: pointer;
}

.menu-icon {
  position: relative;
  font-size:size(20);
  width:1.5em;
  top: 0.5em;
  height: 2px;
  margin-top: -1em;
  background-color: #fff0;
  transition: all 0.3s;
}

.menu-icon::before {
  position: absolute;
  left: 0;
  content: '';
  display: block;
  width:100%;
  height: 2px;
  background-color: #fff;
  transition: transform 0.2s ease-in, top 0.2s;
  transform: rotate(45deg);
  transform-origin: center;
  top:0;
}

.menu-icon::after {
  position: absolute;
  left: 0;
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  background-color: #fff;
  transition: transform 0.2s ease-in, top 0.2s;
  transform: rotate(-45deg);
  transform-origin: center;
  top:0;
}

.min {
  &.navigation {
    background: transparent;
  }

  .navlist {
    display: none;
  }
  .menu-icon {
  background-color: #fff;
  }

  .menu-icon::before {
  transform: rotate(0deg);
  top: -0.5em;
  }

  .menu-icon::after {
  transform: rotate(0deg);
  top:0.5em;}
}
.navlist {
  display: flex;
  align-items:center;
    justify-content:space-around;
  height: 100%;
  overflow: hidden;
  padding-right:3em;
  //padding-top: 50px;
  font-size: size(18);
  width: 48em;
  li {
    height: 100%;
    align-items: stretch;
    flex: 1;

    &:nth-last-child(1) {
      .title {
        border-right: none;
      }
    }
  }

  .link {
    color: $nav_link_color;
    // height: 22px;
    // margin-top:50%;
    margin: 0 0 0 0;
    text-align: center;
    display: block;
    cursor: pointer;
    padding: 0;
    line-height: 1.3;
    // margin: 0 10px;
    transition: all 0.8s;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    // overflow: hidden;
    // border-right: 1px solid $nav_link_hover_bg;
    &.active,
    &:hover {
      color: $nav_link_hover_color;
   background: $nav_link_hover_bg;
  //border-bottom: 3px solid #069;
    }

    > span {
      //width: 80px;
    justify-content: center;

    }

    .title {
      width: 100%;
      font-weight: 300;
      position: relative;
      // border-right: 1px solid #000;
      // padding: 0 35px;
      z-index: 3;
      > span {
        font-size: 1.3em ;
      }
    }

    .subTitle {
     // width: 100%;
      color: $nav_link_subtitle_color;
      font-size:0.9em;
      text-align: center;
      font-family: "gothic";
    }

    img {
      // width: 35px;
      // height: 35px;
      margin-right: 10px;
    }
  }
}

.menu {
  display: none;
}

.link {
  color: rgba(0, 0, 0, 0.7);
  // font-size: 16px;
}


/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .navigation {
    height: 70px;
    justify-content: center;
    &.min {
      .logo {
        width: $logo_tablet_width;
      }
    }
  }

  .logo {
    width: $logo_tablet_width;
    // left: -240px;
  }
  .navlist {
    width: 85%;
  }

  .navlist .link {
    font-size: 12px;
    width: 120px;
    white-space: nowrap;

    img {
      // height: 35px;
      margin-bottom: 5px;
    }

    .divided {
      margin-left: 6px;
    }
  }

  :global {
    .ui.fluid.container {
      width: 100% !important;
    }
  }
}

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .navigation {
    background-color: transparent !important;
    height: $nav_phone_height;
    //  background-color: #fff;
    justify-content: center;
    &.min {
      .logo {
        width: $logo_phone_width;
      }
    }
  }

  .nav-container {
    display: block;
    height: auto;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .logo {
    width: $logo_phone_width;
    margin-left: 15px;
    // display: none;
  }

  .nav {
    position: static;
    height: 60px;
    width: 100%;
  }

  .menu {
    display: block;
    position: absolute;
    top: 5px;
    right: 15px;
    width: sizem(40);
    height: sizem(40);
   // padding-top: sizem(8);
    background-color: #008fbb;
    z-index: 112;

    svg {
      width: sizem(35);
      height: sizem(35);
      color: $nav_btn_color;
    }
    &.open {

  .menu-icon {
  background-color: #fff0;
  }

  .menu-icon::before {
  transform: rotate(-45deg);
  top:0em;
  }

  .menu-icon::after {
  transform: rotate(45deg);
  top:0em;}
}
  }
.menu-icon {
  top:100%;
  left: 50%;transform: translateX(-50%);
  font-size:sizem(20);}

  .navlist {
    position: absolute;
    z-index: 111;
    background: transparent;
    background-size: cover;
    width: 0%;
    right: 0;
    top: $nav_phone_height;
    height: calc(100vh - #{$nav_phone_height});
    text-align: center;
    transition: all 0.3s ease-in;
    display: block;
    transform: translateX(40%);
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
      margin-top:sizem(60);

    li {
      width: 100vw;
      height: 45px;
      margin-top:0;
      margin-bottom:  15px;
    }

    .link {
      height: 50px;
      width: 100%;
      font-size: 17px;
      margin-top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      display: none;

      img,
      span {
        display: block;
      }
      span {
        line-height: 16px;
      }
    }
  }
.min .navlist{display: block;}
  .mask-logo {
    width: $logo_phone_width;
    height: auto;
    position: absolute;
    left: 45px;
    display: block;
    top: 17px;
  }

  .navlist {
    position: fixed;
    z-index: 111;
    width: 0%;
    right: 0;
    top: 0;
    height: calc(100vh - #{$nav_phone_height});
    text-align: center;
    transition: all 0.3s ease-in;
    display: block;
    transform: translateX(40%);

    .navlogo {
      height: 50px;
    }
    li {
    }

    .link {
      display: none;

      img,
      span {
        display: block;
      }
      span {
        line-height: 16px;
      }
    }

    &.open {
      width: 100%;
      transform: translateX(0%);
      padding-left: 0;
      // padding-top: 50px;

      .link {
        display: flex;
        justify-content: center;
        color: #4d4d4d;
        .title {
          border-right: none;
        }
        span {
          white-space: nowrap;
        }
        .divided {
          display: none;
        }
      }
      .close {
        transform: translateX(0);
      }
    }
  }

  .mask {
    width: 100vw;
    top: 0;
    right: 0;
    background-color: #FFFC;
   // background-image: url('~@/projects/lc/form/bg.jpg');
    background-repeat: repeat;
    background-attachment: fixed;
    background-position: 80% 0%;

    position: fixed;
    height: calc(100vh - #{$nav_phone_height});
    opacity: 0;
    transition: all 0.3s ease-in;
    &.open {
      display: block;
      width: 100vw;
      opacity: 1;
      z-index: 110;
    }
  }

  .close {
    position: fixed;
    width: sizem(41);
    height: sizem(41);
    top: 10px;
    right: 10px;
    z-index: 120;
    transform: translateX(100%);
    img {
      width: 100%;
    }
  }

  .line {
    width: sizem(40);
    position: absolute;
    right: sizem(130);
    display: block;
    top: auto;
    bottom: sizem(90);
    cursor: pointer;
  }

  .fb {
    width: sizem(40);
    position: absolute;
    right: 205px;
    display: block;
    top: auto;
    bottom: sizem(90);
    cursor: pointer;
  }
}
</style>
