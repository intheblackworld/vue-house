<template>
  <div :class="`navigation ${min ? 'min' : ''}`">
    <div class="layout-container-fluid nav-container">
      <div class="layout-container nav-container">
        <div class="nav">
          <img class="logo" src="@/projects/ghs/s1/logo.png" alt v-scroll-to="{ element: `#section1`, offset: offset }" />
          <div class="menu" @click="toggleSidebar" v-show="!isOpen">
            <font-awesome-icon icon="bars" />
          </div>
          <div :class="`mask ${isOpen ? 'open' : ''}`">
            <div class="close" @click="isOpen = false">
              <img src="../assets/img/close.png" alt="">
            </div>
          </div>
          <ul :class="`navlist ${isOpen ? 'open': ''}`">
            <li :key="item.name" v-scroll-to="{ element: `#${item.section}`, offset: offset }" v-for="item in list" class="flex-c" @click="toggleSidebar">
              <span :class="`link ${item.type}`">
                <span>
                  <p :class="`title`" v-html="item.name"></p>
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
<style lang="scss" scoped>
@import '../assets/style/variableColor.scss';
@import '../assets/style/variableDefault.scss';
@import '../assets/style/function.scss';

.navigation {
  background: $nav_bg;
  // background-image: $nav_bg;
  background-size: 100%;
  height: $nav_pc_height;
  z-index:4;
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex !important;
  align-items: center;
  // box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.2);
  //@function&::after{content: "";height:100%;width: 150%;top: -100%;left: 0;z-index:9;position: absolute;box-shadow:0 size(0) size(72) size(72)  #005566;}
}

.nav-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;z-index:10;
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
  z-index: 3;
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
  }

  .link {
    color: $nav_link_color;
    height:80%;
    text-align: center;
    display: block;
    cursor: pointer;
    padding: 0 .5em;
    margin: 0 0.5em;
    transition: all 0.8s;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    font-size: 16px !important;

    &:hover {
      color: $nav_link_hover_color;
    }

    &.btn{
    color: $nav_btn_color;
    background:$nav_btn_bg;
    padding: 0 1.5em;
    border-radius:1.5em ;

    &:hover {
      color: $nav_btn_hover_color;
      background: $nav_btn_hover_bg;
    }

    }


    .title {
      font-weight: bold;
      position: relative;
      z-index: 3;
      > span {
        font-size: 24px !important;
      }
    }

    .subTitle {
      color: $nav_link_subtitle_color;
      font-size: 12px;
    }

    img {
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
  .nav {
    width: 0;
  }
  .navigation {
    background-color: transparent !important;
    height: $nav_phone_height;
    //  background-color: #fff;
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
    display: none;
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
    width: sizem(50);
    height: sizem(50);
    padding-top: sizem(8);
    background: transparent;
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

  .navlist {
    display: none;

    &.open {
      display: block;
      width: 100%;
      transform: translateX(0%);
      background-color: rgba(0, 0, 0, 0.7);
      padding: 0;
      padding-top: 30px;
      .link {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .link {
      width: auto;
      padding: 0;
      .title {
        font-size: 18px !important;
        margin-top: 0px;
        border: none;
        width: auto;
        height: auto;
        color: #fff;
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
