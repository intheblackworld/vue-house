<template>
  <div class="sideNav">
    <div :class="`nav relative ${isOpen ? 'open' : ''}`">
      <div class="menu" @click="toggleSidebar">
        <span class="menu_icon"></span>
        <!-- img v-if="isOpen" src="@/assets/img/close.png" class="close" alt />
        <img v-else src="@/assets/img/menu-btn.png" alt / -->
      </div>
      <div :class="`mask ${isOpen ? 'open' : ''}`" @click="toggleSidebar" />
      <ul :class="`navlist ${isOpen ? 'open': ''}`">
        <li
          :key="item.name"
          v-scroll-to="{ element: `#${item.section}`, offset: offset }"
          v-for="item in list"
          class="flex-ac"
          @click="toggleSidebar"
        >
          <span class="link">
            <img v-if="item.imgSrc" :src="item.imgSrc" alt />
            <span>
              <p class="title">{{item.name}}</p>
              <span class="subTitle">{{item.subTitle}}</span>
            </span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { isMobile, isTablet } from '@/utils'
import navList from '@/info/navList'

export default {
  name: 'sideNavigation',
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
      return 0
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

.navigation {
  height: $nav_phone_height;
  z-index: 110;
}

.nav-container {
  display: block;
  height: auto;
}

.logo {
  width: $logo_phone_width;
  left: 15px;
}

.nav {
  position: static;
  height: $nav_phone_height;
}

.menu {
  display: block;
  position: fixed;
  z-index: 112;
  top: 35px;
  right: 35px;
  width: 35px;
  cursor: pointer;

  img {
    width: 100%;
  }

  .close {
    width: 40px;
    margin-top: 0px;
    margin-right: 0px;
  }
}
.menu_icon,
  .menu_icon::before,
  .menu_icon::after {
    position: absolute;
    display: block;
    width: 100%;
    height: 4px;
    left: 0;
    background-color: #690;
    content: '';
    transition-duration: 0.3s, 0.3s;
    transition-delay: 0.3s, 0s;
    transition-property: top, transform;
    top: 0;
  }
  .menu_icon {
    transition: all 0s 0.3s;
    text-indent: -9999px;
    line-height: 0;
    top: 50%;
    left: 20%;
    margin-top: -2px;
  }
  .menu_icon::before {
    transform: translate(0, 200%);
  }

  .menu_icon::after {
    transform: translate(0, -200%);
  }
  .open {
    .logo {
    }
    .menu_icon {
      background: none;
    }
    .menu_icon::before {
      background-color: #690;
      transform: translate(0, 0) rotate(45deg);
    }

    .menu_icon::after {
      background-color: #690;
      transform: translate(0, 0) rotate(-45deg);
    }
  }

.navlist {
  position: fixed;
  z-index: 111;
  background: $nav_bg;
  width: 0%;
  right: 0;
  top: $nav_phone_height;
  height: calc(100vh - #{$nav_phone_height});
  text-align: center;
  transition: all 0.3s ease-in;
  display: block;
  transform: translateX(40%);

  li {
    height: 60px;
    margin-bottom: 5px;
    width: 100%;
  }

  .link {
    height: 60px;
    width: 100%;
    font-size: 17px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    display: none;
    background-size: cover;

    img,
    span {
      display: block;
    }
    span {
      line-height: 16px;
    }

    &:hover {
      color: $nav_link_hover_color;
      // background: $nav_link_hover_bg;
    }
  }

  &.open {
    width: 230px;
    transform: translateX(0%);
    display: flex;
    flex-wrap: wrap;
    align-content: center;

    li:hover {
      // custom style
      &:nth-child(1),
      &:nth-child(5) {
        background-image: url('~@/assets/img/side/1.png');
        background-size: 105px;
        background-position: center;
        background-repeat: no-repeat;
      }
      &:nth-child(2),
      &:nth-child(6) {
        background-image: url('~@/assets/img/side/2.png');
        background-size: 105px;
        background-position: center;
        background-repeat: no-repeat;
      }
      &:nth-child(3),
      &:nth-child(7) {
        background-image: url('~@/assets/img/side/3.png');
        background-size: 105px;
        background-position: center;
        background-repeat: no-repeat;
      }
      &:nth-child(4),
      &:nth-child(8) {
        background-image: url('~@/assets/img/side/4.png');
        background-size: 105px;
        background-position: center;
        background-repeat: no-repeat;
      }
    }

    .link {
      display: flex;
      justify-content: center;
      cursor: pointer;
      span {
        white-space: nowrap;
      }

      .title {
        color: $nav_link_color;
      }

      .subTitle {
        color: $nav_link_subtitle_color;
      }
      .divided {
        display: none;
      }

      &:hover {
        .title {
          color: $nav_link_hover_color;
        }
      }
    }
  }
}

.mask {
  width: 100vw;
  top: $nav_phone_height;
  right: 0;
  background: transparent;
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
    width: 0%;
  }

  .navlist .link {
    font-size: 20px;
    width: 230px;
    white-space: nowrap;

    img {
      // height: 35px;
      margin-bottom: 5px;
    }

    .divided {
      margin-left: 6px;
    }
  }
}

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .navigation {
    height: $nav_phone_height;
    z-index: 110;
  }

  .nav-container {
    display: block;
    height: auto;
  }

  .logo {
    width: $logo_phone_width;
    left: 15px;
  }

  .nav {
    position: static;
    height: $nav_phone_height;
  }

  .menu {
    display: block;
    position: fixed;
    right: 35px;
    top: 35px;
    width: 35px;

    img {
      width: 100%;
      margin-right: -30px;
    }

    .close {
      width: 40px;
      margin-right: -30px;
    }

    svg {
      color: $nav_btn_color;
    }
  }

  .navlist {
    position: fixed;
    z-index: 111;
    background: $nav_bg;
    width: 0%;
    right: 0;
    top: $nav_phone_height;
    height: calc(100vh - #{$nav_phone_height});
    text-align: center;
    transition: all 0.3s ease-in;
    display: block;
    transform: translateX(40%);

    li {
      height: 50px;
      margin-bottom: 5px;
    }

    .link {
      height: 50px;
      width: 100%;
      font-size: 17px;
      margin-top: 10px;
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
}
</style>
