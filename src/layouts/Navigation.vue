<template>
  <div :class="`navigation ${min ? 'min' : ''}`">
    <div class="layout-container-fluid nav-container">
      <div class="layout-container nav-container">
        <div :class="`nav ${isOpen ? 'open': ''}`" >
          <img class="logo" src="../assets/img/navlogo.png" alt v-scroll-to="{ element: `#section1`, offset: 0 }" />
     <!--     <img class="logo" src="@/projects/nina/s1/logo.png" alt v-scroll-to="{ element: `#section1`, offset: offset }" />  -->
       <!--   <div class="menu" @click="toggleSidebar" v-show="!isOpen">
            <font-awesome-icon icon="bars" />
          </div>  -->

          <div class="mask" @click="isOpen = false">
            <div class="close" @click="isOpen = false">
              <img src="../assets/img/close.png" alt="">
            </div>
          </div>
          <div class="menu" @click="toggleSidebar" v-if="isMobile">
            <div :class="`menu-icon ${isOpen ? 'open': ''}`" ></div>
          </div>
          <ul :class="`navlist ${isOpen ? 'open': ''}`">
            <li :key="item.name"
            v-scroll-to="{ element: `#${item.section}`, offset: isMobile ? (item.mobileOffset ? item.mobileOffset : 0) : item.offset}"
            v-for="item in list"
            class="flex-c"
            @click="toggleSidebar">
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
import info from '@/info'
import { isMobile, isTablet } from '@/utils'
import navList from '@/info/navList'

export default {
  name: 'navigation',
  components: {},
  data() {
    return {
      info,
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
 // background: $nav_bg;
  // background-image: $nav_bg;
 // background-size: 100% 100%;
  height: $nav_pc_height;
  z-index:4;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex !important;
  align-items: center;
  background: $nav_bg;
  font-size:size(16);

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
  //padding-left: 30px;
  li {
    height: 100%;
    &:first-child{
      .link {
    &::after{
      display: none;}}
    }
  }

  .link {
    color: $nav_link_color;
    height:80%;
    text-align: center;
    cursor: pointer;
    padding: 0 1.3em;
    margin: 0;
    transition: all 0.8s;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:hover {
      color: $nav_link_hover_color;
    }
    &::after{
      content: "";
      display: block;
      position: absolute;left: 0;width: 1px;height: 1em;background: #FFF9;}
    &.btn{
    color: $nav_btn_color;
    background:$nav_btn_bg;
    padding: 0 1.5em;
    border-radius:1.5em ;
    margin: 0 0.5em;

    &:hover {
      color: $nav_btn_hover_color;
      background: $nav_btn_hover_bg;
    }
    &::after{
      display: none;
      }

    }


    .title {
      font-weight: 500;
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
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 112;
    right: 15px;
    top: 15px;
    width: 40px;
    height: 40px;
  // background-color: #008796;
    cursor: pointer;
    flex: 1 0 50%;
    margin-bottom: 1rem;
    text-align: center;
    color: $nav_link_color;
}
.menu-icon {
    position: relative;
    width: 30px;
    height: 3px;
    background-color:currentColor;
 //box-shadow:0 0 10px #600,0 0 4px #600c ;
z-index: 3;
    &::after,
    &::before {
    position: absolute;
    left: 0;
 //box-shadow:0 0 7px #6009,0 0 4px #6009 ;
    content: "";
    display: block;
    width: 30px;
    height: 3px;
    background-color: currentColor;
    transition: transform .2s ease-in,top .2s linear .2s;}
    &::before {
    top: -10px;
}
    &::after {
    top: 10px;
}
&.open{
    background-color: transparent;
    &::after,
    &::before {top: 0;transition: top .2s linear,transform .2s ease-in .2s;}
    &::after{transform: rotate(-45deg);}
    &::before{transform: rotate(45deg);}

}

}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .navigation {
  height: $nav_tablet_height;
    /* height: 70px;
    justify-content: center;
  background: transparent;
  */
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
/*
  .navlist {
   // width: 85%;
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
  */

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
   // background-color: transparent !important;
    height: $nav_phone_height;
    justify-content: center;
    font-size:sizem(17);
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

  .nav {
    position: static;
    width: 100%;
    height: 100%;
  }
  .mask{
    position: absolute;
    top: 0;
    left:0;
    right: 0;
    bottom: 0;
  }

.menu{
    top: 10px;}
  .navlist {
    position: absolute;
    z-index: 111;
    background: transparent;
    background: #0003;
    background-size: cover;
    width: 0%;
    right: 0;
    top: 0;
    height: calc(100vh - 63px);
    text-align: center;
    transition: all 0.3s ease-in;
    transform: translateX(40%);
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;

    li {
      width: 100%;
      height:auto;
      margin-bottom: 0;
    }

    .link {
      height: 3em;
      width: 100%;
      align-items: center;
      justify-content: center;
      padding: 0 0;
      &::after{
      display: block;
      position: absolute;left: 0;
      top:0;
      width:100%;height: 1px;background: #FFF9;}

      img,
      span {
        display: block;
      }
    /*
      span {
        line-height: 16px;
      }
      */
      
    &.btn{
      height: 3em;
      margin: 0.35em auto;
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
  //  display: none;

    &.open {
    //  display: block;
      width: 100%;
      transform: translateX(0%);
      background-color:#005475ee;
    }
    .link {
      width: 10em;
    }
  }
}
</style>
