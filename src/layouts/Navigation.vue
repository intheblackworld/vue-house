<template>
  <div :class="`navigation ${min ? 'min' : ''}`">
    <div class="layout-container-fluid nav-container">
      <div class="layout-container nav-container">
        <div class="nav">
          <img
            class="logo"
            src="@/assets/img/nav-logo.png"
            alt
             v-scroll-to="{ element: `#section1`, offset: offset }"
          />
          <div
            class="menu"
            @click="toggleSidebar"
            v-show="!isOpen"
          >
            <font-awesome-icon icon="bars" />
          </div>
          <div :class="`mask ${isOpen ? 'open' : ''}`">
            <div
              class="close"
              @click="isOpen = false"
            >
              <img
                src="../assets/img/close.png"
                alt=""
              >
            </div>
          </div>
          <ul :class="`navlist ${isOpen ? 'open': ''}`">
            <li
              :key="item.name"
              v-scroll-to="{ element: `#${item.section}`, offset: item.offset }"
              v-for="item in list"
              class="flex-c"
              @click="toggleSidebar"
            >
              <span class="link">
                <span class="flex-c">
                  <h1
                    class="title"
                    v-html="item.name"
                  ></h1>
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
import { isMobile, isTablet } from '@/utils'
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
 // background-color: $nav_bg;
  // background-image: $nav_bg;
 // background-size: cover;
  height: $nav_pc_height;
  z-index: 10;
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex !important;
  align-items: center;
 // box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.2);
 &::after{content:"";width: 100%; height: 100%;background: #f15a24;position: absolute;top: -50%;left: 0;box-shadow:0 0 20px 40px#f15a24;}

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
  justify-content:center;
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
  transition: all .3s;
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
      .link {
        border-right: none;
      }
    }
  }

  .link {
    color: $nav_link_color;
    height: 100%;
   // border-right: 1px solid #fff;
    text-align: center;
    display: block;
    cursor: pointer;
    padding: 0 22px;
    // margin: 0 10px;
    transition: all 0.8s;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    // overflow: hidden;
    // border-right: 1px solid $nav_link_hover_bg;
      font-size: 24px !important;

    &:hover {
      color: $nav_link_hover_color;
      // background: $nav_link_hover_bg;
    }

     &::before {
       content: '';
       width: 0%;
       height: 2px;
       display: block;
       background:#ffff00; // second bg
       position: absolute;
     //  transform: skewX(-20deg);
    //   left: -10%;
    //   opacity: 1;
       top:calc(50% + 0.8em);
       z-index: 2;
       transition: all 0.7s cubic-bezier(0.77, 0, 0.175, 1);
     }

     &:hover::before {
       opacity: 1;
       width: 70%;
   }
    // &:hover::after,
    // &:hover::after {
    //   opacity: 1;
    //   width: 120%;
    // }

    .title {
      font-size: 1em !important;
      font-weight: 500;
      position: relative;
      color: #fff;
      z-index: 3;
      > span {
        font-size: 24px !important;
      }
    }
    h1.title{font-family: "Noto Serif TC";}

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
    background-color: transparent !important;
    height: $nav_phone_height;
  //  background-color: #fff;
    height: 70px;
    justify-content: center;
    &::after{display: none;}


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
    display: none;
  }

  .nav {
    position: static;
    height:60px;
  }

  .menu {
    display: block;
    position: absolute;
    top: 15px;
    right: 15px;
    width: sizem(50);
    height: sizem(50);
    padding-top: sizem(8);
    background-color: $mobile_nav_background;
    z-index: 112;

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
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;

    li {
      width: 100vw;
      height: 70px;
      margin-bottom:0;
    }

    .link {
      height: 50px;
      width: 100%;
      font-size: 17px;
      margin-top:0;
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

  .navlist {
    display: none;
    .link {
      width: auto;
      padding: 0;
      .title {
        font-size: 12px !important;
        margin-top: 14px;
        width: auto;
        height: auto;
        color: #333;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        background-image: none;
        border-radius: 0;
        position: relative;
        z-index: 3;
        &:hover {
          background-image: none;
        }
      }
    }
  }
}
</style>
