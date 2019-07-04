<template>
  <div class="navigation">
    <div class="layout-container-fluid">
      <div class="layout-container">
        <div class="nav">
          <img class="logo" src="@/assets/img/nav-logo.png" alt />
          <div class="menu" @click="toggleSidebar">
            <font-awesome-icon icon="bars" />
          </div>
          <div class="mask" @click="toggleSidebar" />
          <ul :class="`navlist ${isOpen ? 'open': ''}`">
            <li
              :key="item.name"
              v-scroll-to="{ element: `#${item.element}`, offset: 0 }"
              v-for="item in list"
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  components: {},
  data() {
    return {
      isOpen: false,
      list: [
        {
          name: '翻轉東區',
          imgSrc: '',
          subTitle: '',
          section: 'section2',
        },

        {
          name: '精彩生活',
          imgSrc: '',
          subTitle: '',
          section: 'section3',
        },

        {
          name: '頂級御所',
          imgSrc: '',
          subTitle: '',
          section: 'section4',
        },

        {
          name: '珍藏精工',
          imgSrc: '',
          subTitle: '',
          section: 'section5',
        },
      ],
    }
  },

  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen
    }
  },
}
</script>


<style lang="scss" scoped>
@import '../assets/style/variableColor.scss';
@import '../assets/style/variableDefault.scss';

.navigation {
  background: $nav_bg;
  height: $nav_pc_height;
  z-index: 10;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex !important;
  align-items: center;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.2);
}

.nav {
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

  .link {
    color: $nav_link_color;
    text-align: center;
    display: block;
    cursor: pointer;
    margin-right: 40px;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: $nav_link_hover_color;
    }

    .title {
      font-size: 16px;
    }

    .subTitle {
      color: $nav_link_subtitle_color;
      font-size: 12px;
    }

    img {
      width: 35px;
      height: 35px;
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
  }

  .logo {
    width: $logo_tablet_width;
    // left: -240px;
  }

  .navlist .link {
    font-size: 12px;
    width: 120px;

    img {
      height: 35px;
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
    height: $nav_phone_height;
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
    position: absolute;
    right: 15px;
    width: 18px;

    svg {
      color: $nav_btn_color;
    }
  }

  .navlist {
    position: absolute;
    background: $nav_bg;
    width: 0%;
    right: 0;
    top: $nav_phone_height;
    height: calc(100vh - #{$nav_phone_height});
    text-align: center;
    transition: all 0.3s ease-in;
    display: block;
    transform: translateX(40%);

    .link {
      height: 40px;
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
      width: 40%;
      transform: translateX(0%);

      .link {
        display: block;
        span {
          white-space: nowrap;
        }

        img,
        .divided {
          display: none;
        }
      }
    }
  }

  .mask {
    width: 0;
    top: $nav_phone_height;
    right: 0;
    display: block;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    height: calc(100vh - #{$nav_phone_height});
    opacity: 0;
    transition: all 0.3s ease-in;
    &.open {
      width: 100vw;
      opacity: 1;
    }
  }
}
</style>
