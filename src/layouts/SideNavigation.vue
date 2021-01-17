<template>
  <div class="sideNav">
    <div class="nav relative">
      <div class="menu" @click="toggleSidebar">
        <img v-if="isOpen" src="@/assets/img/menu-close.png" class="close" alt />
        <img v-else src="@/assets/img/menu-btn.png" alt />
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
  top: 10px;
  right: 30px;
  width: 100px;
  cursor: pointer;
  overflow: hidden;
  border-radius:20px;
&:before {
    content: "";
    width: 40%;
    height: 100%;
    display: block;
    background: #fff;
    position: absolute;
    transform: skewX(-20deg);
    left: -10%;
    opacity: 0;
    top: 0;
    z-index: 5;
    transition: all .4s cubic-bezier(.2,.95,.57,.99)
}
&:hover:before {
    opacity: 1;
    width: 90%;
    left: 140%
}
  img {
    width: 100%;
  }

  .close {
    width: 40px;
    margin-top: 20px;
    margin-right: 0px;
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
  background-image: url('./nav_bg.png');

  li {
    height: 60px;
    margin-bottom:0;
    width: 100%;
  }

  .link {
    position: relative;overflow: hidden;
    height: 60px;
    width: 100%;
    font-size: 17px;
    align-items: center;
    justify-content: center;
    display: none;
    background-size: cover;
    border-top: 1px solid rgba(250, 250, 250, 0.6);
    border-bottom: 1px solid rgba(60, 30, 0, 0.2);
    transition: all 0.3s;

    img,
    span {
      display: block;
    }
    span {
      line-height: 16px;
    }

    &:hover {
      color: $nav_link_hover_color;
      background: $nav_link_hover_bg;
      background-position: center;
      background-size: cover;
    }
    &:before {
    content: "";
    width: 40%;
    height: 100%;
    display: block;
    background: #fff;
    position: absolute;
    transform: skewX(-20deg);
    left: -10%;
    opacity: 0;
    top: 0;
    z-index: 5;
    transition: all .4s cubic-bezier(.2,.95,.57,.99)
}
&:hover:before {
    opacity: 1;
    width: 90%;
    left: 140%
}
  }

  &.open {
    width: 230px;
    transform: translateX(0%);
    display: flex;
    flex-wrap: wrap;
    align-content: center;

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
    right: 5px;
    top: 5px;
    width: 60px;
    border-radius: 10px;

    img {
      width: 100%;
    }

    .close {
      width: 40px;
    }

    svg {
      color: $nav_btn_color;
    }
  }

  .navlist {
    position: fixed;
    z-index: 111;
    background-image: url('./nav_bg.png');
    width: 0%;
    right: 0;
    top: $nav_phone_height;
    height: calc(100vh - #{$nav_phone_height});
    text-align: center;
    transition: all 0.3s ease-in;
    display: block;
    transform: translateX(40%);


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
