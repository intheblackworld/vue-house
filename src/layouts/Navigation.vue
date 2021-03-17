<template>
  <div :class="`navigation ${min ? 'min' : ''}`">
    <div class="layout-container-fluid nav-container">
      <div class="layout-container nav-container">
        <div class="nav">
          <img class="logo" src="../assets/img/nav-logo.png" alt v-scroll-to="{ element: `#section1`, offset: offset }"/>
          <!-- <img class="logo" src="../assets/img/nav-logo_m.png" alt v-scroll-to="{ element: `#section1`, offset: offset }" v-if="isMobile" />  -->
          <div class="menu" @click="toggleSidebar" v-if="isMobile">
            <div :class="`btn ${isOpen ? 'open' : ''}`"><span></span></div>
          </div>
          <div :class="`mask ${isOpen ? 'open' : ''}`" @click="toggleSidebar">
          </div>
          <ul :class="`navlist ${isOpen ? 'open': ''}`">
       <!--     <div class="close" @click="isOpen = false" v-if="isMobile">
              <img src="../assets/img/close.png" alt="">
            <img src="@/projects/jiman1/mobile/01/menu_btn_m.png" alt="">
            </div> -->
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
  left:0;
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
    height:100%;
    text-align: center;
    display: block;
    cursor: pointer;
    padding: 0 0px;
    transition: all 0.8s;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:hover {
      color: $nav_link_hover_color;
    }


    .title {
      font-size: size(30) !important;
      font-weight: bold;
      position: relative;
      font-weight: 400;
      width:5.5em;
      z-index: 3;
      letter-spacing: 0.05em;
      border-right: 1px solid #000;
      > span {
        font-size:size(24)!important;
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
    height: $nav_tablet_height;
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
  //  height: 70px;
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
    background:#d67f76;
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
    top: 0;
    right:0;
    width: $nav_phone_height;
    height: 100%;
    padding-top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    // background-color: #af1f24;

    z-index: 112;
    .btn{width:60%;position: absolute;left: 20%;top: 20%;
    color: #fff;height: 60%;
      &::after{content: "menu";font-size: 13px;position: absolute;left: 0; right: 0;bottom: 0;}
      span{ width: 100%;height:100%;display: block;position: absolute;left: 0; top: 0;
        &::after,
        &::before{
          content: "";display: block;margin-bottom: 19%;
          width: 100%;height: 20%;border: solid currentColor;border-width: 1px 0 1px 0;
          transition: all .5s;
        }
      }
      &.open{
        &::after{content: "close";}
        span{ 
          &::after,
          &::before{
            margin-bottom: 0%;position: absolute;left: 5%; top: 25%;
            width: 90%;height:1px;border-width:0;
            background: currentColor;
            transform: rotate(45deg);
            transform-origin: 50% 50%;
          }
          &::after{
            transform: rotate(-45deg);
            transform-origin: 50% 50%;}
        }
      }
    }



    img {
       width: sizem(35);
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
    top: 0 !important;
    height: calc(100vh - #{$nav_phone_height});
    text-align: center;
    transition: all 0.3s ease-in;
    display: block;
    transform: translateX(40%);
    padding-left: 0;
    // padding-top: 120px;
    display: flex !important;
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
          width:5em;
          font-size: sizem(24) !important;
          border-right: 1px solid #000;
          border-left: 1px solid #000;
        }
      }
    }
  }
}
</style>
