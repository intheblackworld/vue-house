<template>
  <div class="navigation">
    <div class="layout-container-fluid nav-container">
      <div class="layout-container nav-container">
        <div class="nav">
<<<<<<< HEAD
          <img class="logo" src="@/assets/img/nav-logo.png" alt />
          <div class="menu" @click="toggleSidebar">
            <font-awesome-icon icon="bars" />
=======
        <!--   <img
            class="logo"
            src="@/assets/img/nav-logo.png"
            alt
            v-scroll-to="{ element: `#section1` }"
          />  -->
          <div
            :class="`menu ${isOpen ? 'open' : ''}`"
            @click="toggleSidebar"
          >
          <span></span>
          <!--<font-awesome-icon icon="bars" />-->
>>>>>>> 9121ee9ebd5fb65447ba0f9cece584988d37677e
          </div>
          <div
            :class="`mask ${isOpen ? 'open' : ''}`"
            @click="toggleSidebar"
          />
          <ul :class="`navlist ${isOpen ? 'open': ''}`">
            <li
              :key="item.name"
              v-scroll-to="{ element: `#${item.section}`, offset: offset }"
              v-for="item in list"
              class="flex-ac"
              @click="toggleSidebar"
            >
              <span class="link">
                <img
                  v-if="item.imgSrc"
                  :src="item.imgSrc"
                  alt
                />
                <span>
<<<<<<< HEAD
                  <p class="title">{{item.name}}</p>
                  <span class="subTitle">{{item.subTitle}}</span>
=======
                <!--  <div class="title">{{item.name}}</div>
                  <span class="subTitle">{{item.subTitle}}</span> -->
>>>>>>> 9121ee9ebd5fb65447ba0f9cece584988d37677e
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

<style lang="scss" scoped>
@import '../assets/style/variableColor.scss';
@import '../assets/style/variableDefault.scss';
<<<<<<< HEAD
@import '../assets/style/function.scss';
=======
@import '@/assets/style/function.scss';
>>>>>>> 9121ee9ebd5fb65447ba0f9cece584988d37677e

.navigation {
  font-size: 20px;//圈圈大小
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
<<<<<<< HEAD
 // box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.2);
=======
  //box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.2);
>>>>>>> 9121ee9ebd5fb65447ba0f9cece584988d37677e
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
<<<<<<< HEAD
  width: $logo_pc_width;
  height: auto;
=======
  width: auto;
  height: 66%;
  cursor: pointer;
>>>>>>> 9121ee9ebd5fb65447ba0f9cece584988d37677e
  position: absolute;
  left: 0;
  display: block;
  top: 50%;
  transform: translateY(-50%);
}

.mask {
  display: none;
}

.navlist {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  li {
    height: 100%;
  }

  .link {
    color: $nav_link_color;
    height: 22px;
    text-align: center;
    display: block;
    cursor: pointer;
<<<<<<< HEAD
    padding: 0 20px;
    transition: all .8s;
=======
    padding: 0 1em;
    transition: all 0.8s;
>>>>>>> 9121ee9ebd5fb65447ba0f9cece584988d37677e
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
      font-size:inherit !important;
    // border-right: 1px solid $nav_link_hover_bg;
<<<<<<< HEAD

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
      font-size: 16px !important;
      font-weight: bold;
=======
    > span {
      z-index: 3;
    }
    &::after{content: "";width: 1em;height: 1em;border: 1px solid #ccc;border-radius: 50%;}
    &:hover {
     // background-color: $nav_link_hover_bg;
      img {
        animation: r5 0.3s alternate infinite;
        transform-origin: 50% 100%;
      }
    .title {
      margin:0.5em 0 0 0 ;
    }
    }

    @keyframes r5 {
      0% {
        transform: skewX(-2deg);
      }
      100% {
        transform:skewX(2deg);
      }
    }

    .title {
>>>>>>> 9121ee9ebd5fb65447ba0f9cece584988d37677e
      position: relative;
      z-index: 3;
      margin:0.8em 0 0 0 ;
      transition: all 0.3s;
    }

    .subTitle {
      color: $nav_link_subtitle_color;
      font-size: 12px;
    }

    img {
<<<<<<< HEAD
      // width: 35px;
      // height: 35px;
      margin-right: 10px;
=======
      width: calc(100vw * 50 / 1920);
      height: auto;
      margin-right: 10px;vertical-align: text-bottom;
>>>>>>> 9121ee9ebd5fb65447ba0f9cece584988d37677e
    }
  }
}

.menu {
  display: none;
  span{display: block;width: 1em;transition: all 0.3s;height: 1em;border: 1px solid #ccc;border-radius: 50%;
  &::before,
  &::after{transition: all 0.3s;
content: "";background: #fff0;width: 1.3em;height:1px;display: block;position: absolute;top: 50%;left: -0.15em;
  }}
  &.open{
    
  span{border: 1px solid #fff0;
  &::before{transform: rotate(45deg);background: #fff;
  }
  &::after{transform: rotate(-45deg);background: #fff;
}
  }
  }
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
    z-index: 110;
    width:3em;right: 0;
  }

  .nav-container {
    display: block;
    height: auto;
  }

  .logo {
    width: $logo_phone_width;
    left: 15px;
    display: none;
  }

  .nav {
    width: 100%;
    position: static;
    height: $nav_phone_height;
  }

  .menu {
    display: block;
    position: absolute;
<<<<<<< HEAD
    top: 15px;
    right: 15px;
    width: sizem(50);
    height: sizem(50);
    padding-top: sizem(8);
    background-color: #8e8a74;
    z-index: 112;
=======
    width: 100%;
    //right: 15px;
>>>>>>> 9121ee9ebd5fb65447ba0f9cece584988d37677e

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
<<<<<<< HEAD
      width: 100vw;
      height: 70px;
      margin-bottom:0;
=======
      height: 40px;
      margin-bottom: 5px;
>>>>>>> 9121ee9ebd5fb65447ba0f9cece584988d37677e
    }

    .link {
      height: 30px;
      width: 100%;
      font-size: 17px;
<<<<<<< HEAD
      margin-top:0;
=======
      margin-top: 20px;
>>>>>>> 9121ee9ebd5fb65447ba0f9cece584988d37677e
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
<<<<<<< HEAD
=======

      img {
        width: calc(100vw * 200 / 1920);
        height: auto;
        margin-right: 10px;
      }

      .title {
        font-size: size-m(15) !important;
      }
>>>>>>> 9121ee9ebd5fb65447ba0f9cece584988d37677e
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
      }
    }
  }

  .mask {
    width: 2em;
    top: $nav_phone_height;
    right: 0;
    //background: rgba(0, 0, 0, 0.8);
    position: fixed;
<<<<<<< HEAD
    z-index: 110;
=======
    z-index: -1;
>>>>>>> 9121ee9ebd5fb65447ba0f9cece584988d37677e
    height: calc(100vh - #{$nav_phone_height});
    opacity: 0;
    transition: all 0.3s ease-in;
    position: relative;
    &.open {
      display: block;
    //  width: 100vw;
    width: 2em;
      opacity: 1;
<<<<<<< HEAD
=======
      z-index: 110;
>>>>>>> 9121ee9ebd5fb65447ba0f9cece584988d37677e
    }
  }
}
</style>
