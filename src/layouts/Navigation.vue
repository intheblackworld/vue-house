<template>
  <div class="navigation">
    <div class="layout-container-fluid nav-container">
      <div class="layout-container nav-container">
        <div class="nav">
          <img
            class="logo"
            src="@/assets/img/nav-logo.png"
            alt
            v-scroll-to="{ element: `#section1` }"
          />
          <div
            class="menu"
            @click="toggleSidebar"
          >
            <font-awesome-icon icon="bars" />
          </div>
          <div
            :class="`mask ${isOpen ? 'open' : ''}`"
            @click="toggleSidebar"
          />
          <ul :class="`navlist ${isOpen ? 'open': ''}`">
            <li
              :key="item.name"
              v-scroll-to="{ element: `#${item.section}`, offset: item.offset ? item.offset : offset }"
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
                  <div class="title">{{item.name}}</div>
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
@import '@/assets/style/function.scss';

.navigation {
  background-color: $nav_bg;
  background-image: $nav_bg;
  background-size: cover;
  height: $nav_pc_height;
  z-index: 10;
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex !important;
  align-items: center;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.2);
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
  width: auto;
  height: 66%;
  cursor: pointer;
  position: absolute;
  left: 0;
  display: block;
  top: 16%;
  transform: translateY(0%);
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
    height: 100%;
    text-align: center;
    display: block;
    cursor: pointer;
    padding: 0 1em;
    transition: all 0.8s;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    font-size: 22px !important;
    // border-right: 1px solid $nav_link_hover_bg;
    > span {
      z-index: 3;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &:hover {
      background-color: $nav_link_hover_bg;
      img {
        animation: r5 0.3s alternate infinite;
        transform-origin: 50% 100%;
      }
      .title {
        // margin: 0.5em 0 0 0;
      }
    }

    @keyframes r5 {
      0% {
        transform: skewX(-2deg);
      }
      100% {
        transform: skewX(2deg);
      }
    }

    .title {
      position: relative;
      z-index: 3;
      // margin: 0.8em 0 0 0;
      transition: all 0.3s;
    }

    .subTitle {
      color: $nav_link_subtitle_color;
      font-size: 12px;
      z-index: 3;
    }

    img {
      width: calc(100vw * 50 / 1920);
      height: auto;
      margin-right: 10px;
      vertical-align: text-bottom;
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
    background-color: transparent;
    box-shadow: none;
    height: $nav_phone_height;
    z-index: 110;
  }

  .nav-container {
    display: block;
    height: auto;
  }

  .logo {
    //width: $logo_phone_width;
    left: 15px;
    //top: 15px;
  }

  .nav {
    position: static;
    height: $nav_phone_height;
  }

  .menu {
    display: block;
    position: absolute;
    right: 15px;
    width: 30px;

    svg {
      width: 100%;
      height: 100%;
      color: $nav_btn_color;
    }
  }

  .navlist {
    position: absolute;
    z-index: 111;
    background: transparent;
    width: 0%;
    right: 0;
    top: $nav_phone_height;
    height: calc(100vh - #{$nav_phone_height});
    text-align: center;
    transition: all 0.3s ease-in;
    display: block;
    transform: translateX(40%);

    li {
      height: 70px;
      margin-bottom: 5px;
    }

    .link {
      height: 50px;
      width: 100%;
      font-size: 17px;
      margin-top: 20px;
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

      img {
        width: calc(100vw * 200 / 1920);
        height: auto;
        margin-right: 10px;
      }

      .title {
        font-size: size-m(24) !important;
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
      }
    }
  }

  .mask {
    width: 100vw;
    top: $nav_phone_height;
    right: 0;
    background: rgba(255, 255, 255, 0.8);
    position: fixed;
    z-index: -1;
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
}
</style>
