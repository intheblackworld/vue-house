<template>
  <div :class="`navigation ${min ? 'min' : ''}`">
    <div class="layout-container-fluid nav-container">
      <div class="layout-container nav-container">
        <div class="nav">
          <img class="logo" src="@/assets/img/nav-logo.png" alt v-scroll-to="{ element: `#section1`, offset: offset }" v-if="isPC" />
          <img class="logo" src="@/projects/jiman1/mobile/01/menu_logo_m.png" alt v-scroll-to="{ element: `#section1`, offset: offset }" v-if="isMobile" />
          <div class="menu" @click="toggleSidebar" v-show="!isOpen">
            <!-- <font-awesome-icon icon="bars" /> -->
            <img src="@/projects/jiman1/mobile/01/menu_btn_m.png" alt="">
          </div>
          <div :class="`mask ${isOpen ? 'open' : ''}`">
          </div>
          <ul :class="`navlist ${isOpen ? 'open': ''}`">
            <div class="close" @click="isOpen = false">
              <img src="../assets/img/close.png" alt="">
            </div>
            <li :key="item.name" v-scroll-to="{ element: `#${item.section}`, offset: offset }" v-for="item in list" class="flex-c" @click="toggleSidebar">
              <span class="link">
                <span>
                  <h3 class="title" v-html="item.name"></h3>
                  <span class="subTitle">{{item.subTitle}}</span>
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isPC, isMobile, isTablet } from '@/utils'
import navList from '@/info/navList'

export default {
  name: 'navigation',
  components: {},
  data() {
    return {
      isOpen: false,
      isMobile,
      isTablet,
      list: navList,
    }
  },

  props: ['min'],

  computed: {
    offset() {
      if (this.isMobile) {
        return -39
      }

      if (this.isTablet) {
        return -45
      }

      return -56
    },
  },

  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen
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
//     // background-image: linear-gradient(to right, #d70032 0%, #eb5500 100%);
//     // border-radius: 20px / 20px;
//     position: relative;
//     z-index: 3;
//     &:hover {
//       color: #eee;
//       // background-image: linear-gradient(to left, #d70032 0%, #eb5500 100%);
//     }
//   }
// }
</style>
<style lang="scss" scoped>
@import '../assets/style/variableColor.scss';
@import '../assets/style/variableDefault.scss';
@import '../assets/style/function.scss';

.navigation {
  background-color: $nav_bg;
  // background-image: $nav_bg;
  background-size: cover;
  height: $nav_pc_height;
  z-index: 10;
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex !important;
  align-items: center;
  // box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.2);
}

.nav-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  a {
    display: block;
    cursor: pointer;
  }
}

.logo {
  width: $logo_pc_width;
  height: auto;
  position: absolute;
  left: size(0);
  display: block;
  top: 50%;
  transform: translate(3%, -50%);
  transition: all 0.3s;
}

.mask {
  display: none;
}

.navlist {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  padding-left: 30px;
  li {
    height: 100%;

    &:nth-last-child(1) {
      .title {
        border-right: none;
      }
    }
  }

  .link {
    color: $nav_link_color;
    height: 22px;
    text-align: center;
    display: block;
    cursor: pointer;
    padding: 0 0px;
    // margin: 0 10px;
    transition: all 0.8s;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    // overflow: hidden;
    // border-right: 1px solid $nav_link_hover_bg;

    &:hover {
      color: $nav_link_hover_color;
      // background: $nav_link_hover_bg;
    }

    // &::before {
    //   content: '';
    //   width: 0%;
    //   height: 100%;
    //   display: block;
    //   background: $nav_link_hover_bg; // second bg
    //   position: absolute;
    //   transform: skewX(-20deg);
    //   left: -10%;
    //   opacity: 1;
    //   top: 0;
    //   z-index: 2;
    //   transition: all 0.7s cubic-bezier(0.77, 0, 0.175, 1);
    //   // box-shadow: 2px 0px 14px rgba(0, 0, 0, 0.6);
    // }

    // &::after {
    //   content: '';
    //   width: 0%;
    //   height: 100%;
    //   display: block;
    //   background: #fff; // first bg
    //   position: absolute;
    //   transform: skewX(-20deg);
    //   left: -10%;
    //   opacity: 0;
    //   top: 0;
    //   z-index: 1;
    //   transition: all 0.4s cubic-bezier(0.2, 0.95, 0.57, 0.99);
    //   // box-shadow: 2px 0px 14px rgba(0, 0, 0, 0.6);
    // }
    // &:hover::before,
    // &:hover::before {
    //   opacity: 1;
    //   width: 116%;
    // }
    // &:hover::after,
    // &:hover::after {
    //   opacity: 1;
    //   width: 120%;
    // }

    .title {
      font-size: size(36.3) !important;
      font-weight: bold;
      position: relative;
      font-weight: 400;
      width: size(200);
      z-index: 3;
      // box-shadow: 0 0px 0px 1px #000;
      border-right: 1px solid #000;
      > span {
        font-size: 24px !important;
      }
    }

    .subTitle {
      color: $nav_link_subtitle_color;
      font-size: 12px;
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
  font-size: 16px;
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
    // background-color: transparent !important;
    height: $nav_phone_height;
    background-color: $nav_bg;
    height: 70px;
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
    left: 15px;
    // display: none;
  }

  .mask {
    width: 100vw;
    top: $nav_phone_height;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
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

  .nav {
    position: static;
    height: 60px;
  }

  .menu {
    display: block;
    position: absolute;
    top: 15px;
    right: 15px;
    width: sizem(31.5);
    height: sizem(31.5);
    padding-top: sizem(8);
    // background-color: #af1f24;
    z-index: 112;
    img {
      width: 100%;
    }
    svg {
      width: sizem(35);
      height: sizem(35);
      color: $nav_btn_color;
    }
  }

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
    padding-left: 0;
    padding-top: 120px;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;

    li {
      width: 100vw;
      height: 70px;
      margin-bottom: 0;
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

  .mask-logo {
    width: $logo_phone_width;
    height: auto;
    position: absolute;
    left: 45px;
    display: block;
    top: 17px;
  }

  .close {
    width: 40px;
    position: absolute;
    right: 20px;
    top: 20px;
    z-index: 12000;
  }

  .navlist {
    position: fixed;
    z-index: 111;
    width: 0%;
    right: 0;
    top: $nav_phone_height;
    height: calc(100vh - #{$nav_phone_height});
    text-align: center;
    transition: all 0.3s ease-in;
    display: block;
    transform: translateX(40%);

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

      .link {
        display: flex;
        justify-content: center;
        span {
          white-space: nowrap;
        }
        .divided {
          display: none;
        }

        .title {
          width: 100% !important;
          font-size: sizem(24) !important;
        }
      }
    }
  }
}
</style>
