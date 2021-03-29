<template>
  <div class="sideNav">
    <div :class="`nav ${isOpen ? 'open' : ''}`">
      <div class="menu" @click="toggleSidebar">
        <span data-v-8ecc579a="" class="menu_icon"></span>
        <span data-v-8ecc579a="" class="menu_text"></span>
        <img src="../projects/hy1/s1/menulogo.png" alt="" class="logo">
      </div>
      <div :class="`mask ${isOpen ? 'open' : ''}`" @click="toggleSidebar" />
      <ul :class="`navlist ${isOpen ? 'open': ''}`">
        <li :key="item.name" v-scroll-to="{ element: `#${item.section}`, offset: offset }" v-for="item in list" class="flex-ac" @click="toggleSidebar">
          <span class="link">
            <img v-if="item.imgSrc" :src="item.imgSrc" alt />
            <span>
              <h3 class="title">{{item.name}}</h3>
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
@import '../assets/style/function.scss';

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
  top: 0;
  left: 0;
}

.menu {
  text-align: center;
  display: block;
  position: fixed;
  z-index: 112;
  top: 0;
  left: 0;
  width: 80px;
  cursor: pointer;

  &::after {
    content: '';
    position: fixed;
    width: 100vw;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 111;
    height: size(118);
    background: transparent;
    z-index: 100;
    border-style: solid;
    border-width: size(118) 100vw 0 0;
    border-color: #c40000 transparent transparent transparent;
    transition: all 0.3s;
  }

  .logo {
    position: absolute;
    width: size(102);
    top: size(24);
    left: size(111);
    z-index: 110;
    transition: all 0.3s;
  }

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
.menu_icon::after,
.menu_icon::before {
  position: absolute;
  display: block;
  width: 100%;
  height: size(3);
  left: 0;
  background-color: #fff;
  content: '';
  transition: all 0.3s;
  top: 0;
  z-index: 112;
}
.menu_icon {
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-indent: -9999px;
  line-height: 0;
  top: 40%;
  left: 25%;
  width: 50%;
  margin-top: -2px;
}

.menu_icon::before {
  -webkit-transform: translateY(400%);
  transform: translateY(400%);
}

.menu_icon::after {
  -webkit-transform: translateY(-400%);
  transform: translateY(-400%);
}
.menu_text {
  display: block;
  font-size: 1em;
  font-family: 'Barlow Condensed';
  font-weight: bold;
  margin: size(90) 0 size(20) 0;
  transition: all 0.5s;
  overflow: hidden;
}

// .nav {
//   &.open {
//     &::after {
//       content: '';
//       position: fixed;
//       width: 100vw;
//       top: 0;
//       left: 0;
//       width: 100vw;
//       z-index: 111;
//       height: size(118);
//       background: transparent;
//       z-index: 100;
//       border-style: solid;
//       border-width: size(968) 100vw 0 0;
//       border-color: #c40000 transparent transparent transparent;
//     }
//   }
// }
.open {
  .menu_icon {
    width: 0;
  }

  .logo {
    width: size(204);
  }

  .menu_icon:before {
    opacity: 0;
  }

  .menu_icon:after {
    opacity: 0;
  }
  .menu_text {
    transform: translate(0) rotate(90deg);
    font-size: 1.5em;
  }
}
.navlist {
  position: fixed;
  z-index: 111;
  width: 0;
  overflow: hidden;
  left: 25px;
  top: $nav_phone_height;
  height: calc(100vh - #{$nav_phone_height});
  text-align: center;
  transition: all 1s ease-in;
  display: flex;
  flex-wrap: wrap;
  transform: translateX(0%);
  align-content: center;

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
    background-size: cover;
    position: relative;
    cursor: pointer;
    padding: 0 20px 0 0;

    img,
    span {
      display: block;
    }
    span {
      line-height: 16px;
      white-space: nowrap;
    }


    &::before {
      position: absolute;
      display: block;
      right: 185px;
      content: '';
      top: calc(50% - 0.5em);
      width: 45px;
      height: 1px;
      opacity: 1;
      transition: all 0.3s;
      border: 1px solid #fff;
      border-width: 1px 1px 0 0;
    }
    &:hover:before {
      background: none;
      width: 15px;
      height: 15px;
      border-color: #c00;
      transform: rotate(45deg);
      animation: menu_l 0.3s infinite alternate ease-out;
    }

    .subTitle {
      font-family: 'Barlow Condensed', sans-serif;
      margin-top: 5px;
      color: $nav_link_subtitle_color;
    }
    .title {
      font-size: size(30);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.33;
      letter-spacing: size(0.3);
      text-align: left;
      color: $nav_link_color;
      margin-top: size(-10);
      color: #000;
    }
  }
  @keyframes menu_l {
    to {
      right: 200px;
    }
  }

  &::before {
    position: absolute;
    display: block;
    left: 0;
    background-color: #fff;
    content: '';
    top: 0;
    width: 1px;
    height: 0px;
    opacity: 0;
    transition: all 1s;
  }
  &.open::before {
    height: calc(50vh + 223px);
    opacity: 1;
  }
  &.open {
    width: 230px;
    transform: translateX(0%);
    opacity: 1;

    .link {
      .divided {
        display: none;
      }

      &:hover {
        .title,
        .subTitle {
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
  background: rgba(0, 0, 0, .6);
  // background: -moz-linear-gradient(
  //   left,
  //   rgba(255, 255, 255, 0.8) 0%,
  //   rgba(255, 255, 255, 0.8) 50%,
  //   rgba(255, 255, 255, 0) 100%
  // );
  // background: -webkit-linear-gradient(
  //   left,
  //   rgba(255, 255, 255, 0.8) 0%,
  //   rgba(255, 255, 255, 0.8) 50%,
  //   rgba(255, 255, 255, 0) 100%
  // );
  // background: linear-gradient(
  //   to right,
  //   rgba(255, 255, 255, 0.8) 0%,
  //   rgba(255, 255, 255, 0.8) 50%,
  //   rgba(255, 255, 255, 0) 100%
  // );
  // filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ccffffff', endColorstr='#00ffffff',GradientType=1 );

  &.open {
    display: block;
    width: 100vw;
    opacity: 1;
    z-index: 110;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  /* .navigation {
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
  */
}

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  /* .navigation {
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
    left: 0px;
    top: 20px;
    width: 40px;

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
    transform: translateX(0%);

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
  }*/
}
</style>
