<template>
  <div id="app">
    <div ref="gtmNoScript" />
    <AstrictMask />
    <div class="home no-padding-top">
      <div class="bg-img">
        <Loading :loading="load" />
        <Navigation v-if="!isMobile" />
        <SideNavigation v-else />
        <router-view></router-view>
        <!-- <ContactSection /> -->
        <InfoFooter />
        <!-- </vue-lazy-component> -->
      </div>
      <!-- <MobileNav /> -->
    </div>
  </div>
</template>
<style lang="scss">
// @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css?family=Noto+Serif+TC:700&subset=chinese-traditional');
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC:300,400,500,600&subset=chinese-traditional');
// @import url('https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap');
</style>
<style lang="scss" scoped>
// @import url('https://fonts.googleapis.com/css?family=Playball&display=swap');
@import '../assets/style/variableColor.scss';
@import '@/assets/style/function.scss';

.section,
.section .fp-slide,
.section .fp-tableCell {
  min-height: 400px;
  height: auto !important;
}
#contact {
  z-index: 3;
}

.bg-img {
  // background-image: url('~@/projects/lj/s1/bg.png');
  // padding-top: $nav_pc_height;
  background-attachment: fixed;
  background-size: auto;
  background-position: center center;
  background-repeat: repeat;
  overflow: hidden; //試底下多的那塊哪來的
}

@media only screen and (max-width: 767px) {
  //.bg-img {
  //  background-image: url('~@/projects/lj/s1/bg_m.png');
  //}
}
</style>

<script>
// @ is an alias to /src
// import $ from 'jquery'
import _ from 'lodash'
import Navigation from '@/layouts/Navigation.vue'
import { isMobile } from '@/utils'
import SideNavigation from '@/layouts/SideNavigation.vue'
// import ContactSection from '@/layouts/ContactSection.vue'
import InfoFooter from '@/layouts/InfoFooter.vue'
import Loading from '@/components/Loading.vue'
import gtm from '@/mixins/gtm.js'
import AstrictMask from '@/components/AstrictMask'
import { get_ip } from '@/http/api'

export default {
  name: 'Main',
  mixins: [gtm],
  components: {
    Loading,
    // Indigator,
    Navigation,
    SideNavigation,
    // LeafFlow,
    // ContactSection,
    InfoFooter,
    AstrictMask,
  },

  data() {
    return {
      isMobile,
      isSide: false,
      load: false,
      viewIndex: 0,
      // isNavMin: false,
      isHide: false,
      scrollPos: 0,
      // action: {
      //   moveTo: () => {},
      // },
      // options: {
      //   menu: '#menu',
      //   anchors: [],
      //   scrollBar: true,
      //   onLeave: this.onLeave,
      //   afterLoad: this.afterLoad,
      //   continuousHorizontal: true,

      //   // navigation: true,
      //   // sectionsColor: ['#41b883', '#ff5f45', '#0798ec'],
      // },
    }
  },
  created() {
    this.$store.commit('user/setInfo', {
      key: 'ip',
      value: '127.0.0.1',
    })
    // get_ip().then((res) => {
    //   if (res.ip) {
    //     this.$store.commit('user/setInfo', {
    //       key: 'ip',
    //       value: res.ip,
    //     })
    //   }
    // })
    // $(document).ready(() => {
    //   // Images loaded is zero because we're going to process a new set of images.
    //   var imagesLoaded = 0
    //   // Total images is still the total number of <img> elements on the page.
    //   var totalImages = $('img').length
    //   const allImagesLoaded = () => {
    //     this.load = false
    //   }
    //   const imageLoaded = () => {
    //     imagesLoaded++
    //     if (imagesLoaded == totalImages) {
    //       allImagesLoaded()
    //     }
    //   }
    //   $('img').each(function (idx, img) {
    //     $('<img>').on('load', imageLoaded).attr('src', $(img).attr('src'))
    //   })
    // })
    // window.location = "https://ywh.nhc888.com.tw/"
  },
  mounted() {
    window.addEventListener('scroll', _.throttle(this.onScroll, 200), false)
    // this.action = this.$refs.fullPage.api
    // if (this.isMobile) {
    //   this.$refs.fullPage.api.setResponsive(true)
    // }
  },

  watch: {
    $route: function () {
      this.load = true
      setTimeout(() => {
        this.load = false
      }, 200)
    },
  },
  methods: {
    init() {},
    onScroll() {
      // const scrollTop =
      //   document.documentElement.scrollTop || document.body.scrollTop
      // 定义当前点亮的导航下标
      // let navIndex = 0
      // if (document.body.getBoundingClientRect().top > this.scrollPos) {
      //   this.isHide = false
      // } else {
      //   this.isHide = true
      // }
      // saves the new position for iteration.
      // this.scrollPos = document.body.getBoundingClientRect().top
      // if (scrollTop > 200) {
      //   this.isNavMin = true
      // } else {
      //   this.isNavMin = false
      // }
      // 获取所有锚点元素
      // const navContents = document.querySelectorAll('.section')
      // // 所有锚点元素的 offsetTop
      // const offsetTopArr = []
      // navContents.forEach(item => {
      //   offsetTopArr.push(item.offsetTop)
      // })
      // // 获取当前文档流的 scrollTop
      // const scrollTop =
      //   document.documentElement.scrollTop || document.body.scrollTop
      // // 定义当前点亮的导航下标
      // let navIndex = 0
      // for (let n = 0; n < offsetTopArr.length; n++) {
      //   // 如果 scrollTop 大于等于第n个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
      //   // 那么此时导航索引就应该是n了
      //   if (scrollTop >= offsetTopArr[n] - 100) {
      //     navIndex = n
      //   }
      // }
      // // console.log(navIndex + 1)
      // if (this.viewIndex !== navIndex + 1) {
      //   this.viewIndex = navIndex + 1
      // }
      // this.viewIndex = navIndex + 1
    },

    // onLeave(origin, destination, direction) {
    //   if (!this.isMobile) {
    //     if (origin.isLast === true && direction === 'up') {
    //       console.log('加固')
    //       this.$refs.fullPage.api.setResponsive(false)
    //     }
    //     if (origin.isFirst === true && direction === 'down' && this.isMobile) {
    //       this.$refs.fullPage.api.setResponsive(false)
    //     }

    //     if (
    //       destination.isFirst === true &&
    //       direction === 'up' &&
    //       this.isMobile
    //     ) {
    //       this.$refs.fullPage.api.setResponsive(false)
    //     }
    //   }
    // },

    // afterLoad(origin, destination, direction) {
    //   this.indigatorIndex = destination.index
    //   if (destination.isLast === true && direction === 'down') {
    //     console.log('解除')
    //     this.$refs.fullPage.api.setResponsive(true)
    //   }
    // },
  },
}
</script>
