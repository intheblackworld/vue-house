<template>
  <div class="home no-padding-top" ><h1>紅布朗花園</h1>
      <Loading :loading="load" />
      <!-- <SideNavigation v-if="isMobile" />
      <Navigation v-if="!isMobile" /> -->
      <!-- <Indigator :viewIndex="viewIndex" /> -->
      <!-- <full-page
      ref="fullPage"
      :options="options"
      id="fullpage"
    >
    -->
      <vue-lazy-component class="section relative" id="section1" @init="init">
        <Section1 />
      </vue-lazy-component>
      <vue-lazy-component class="section" id="section2" style="">
         <Section2 />
      </vue-lazy-component>
      <!-- 
      <vue-lazy-component class="section" id="section3" style="">
         <Section3 />
      </vue-lazy-component>
      <vue-lazy-component class="section" id="section3">
        <Section3 />
      </vue-lazy-component>
       -->
      <ContactSection />
      <!-- </vue-lazy-component> -->
    <MobileNav />
  </div>
</template>

<style lang="scss" scoped>
// @import url('https://fonts.googleapis.com/css?family=Playball&display=swap');
@import '../assets/style/variableColor.scss';
@import '@/assets/style/function.scss';

.section,
.section .fp-slide,
.section .fp-tableCell {
  height: auto !important;
}
h1{position: absolute;top:-2em;}
/*
#contact {
 // position: relative;
 // z-index: 3;
}
*/
</style>

<script>
// @ is an alias to /src
import info from '@/info'
import $ from 'jquery'
// import Navigation from '@/layouts/Navigation.vue'
import { isMobile } from '@/utils'
// import SideNavigation from '@/layouts/SideNavigation.vue'
import ContactSection from '@/layouts/ContactSection.vue'
import MobileNav from '@/layouts/MobileNav.vue'
import Loading from '@/components/Loading.vue'
// import Indigator from '@/components/Indigator.vue'
import UIkit from 'uikit';
// import LeafFlow from '@/components/LeafFlow.vue'

import Section1 from '@/projects/jyh/Section1.vue'
import Section2 from '@/projects/jyh/Section2.vue'
// import Section3 from '@/projects/jyh/Section3.vue'

export default {
  name: 'home',
  components: {
    Loading,
    // Indigator,
    // Navigation,
    // SideNavigation,
    // LeafFlow,
    ContactSection,
    MobileNav,
    UIkit,
    Section1,
    Section2,
   // Section3,
    // Section4,
    // Section5,
    // Section6,
    // Section7,
    // Section8,
    // Section9,
    // Section10,
  },

  data() {
    return {
      isMobile,
      isSide: false,
      load: false,
      viewIndex: 0,
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
    // window.addEventListener('scroll', this.onScroll, false)
    // this.action = this.$refs.fullPage.api
    // if (this.isMobile) {
    //   this.$refs.fullPage.api.setResponsive(true)
    // }
  },
  methods: {
    init() {},
    // onScroll() {
    //   // 获取所有锚点元素
    //   const navContents = document.querySelectorAll('.section')
    //   // 所有锚点元素的 offsetTop
    //   const offsetTopArr = []
    //   navContents.forEach(item => {
    //     offsetTopArr.push(item.offsetTop)
    //   })
    //   // 获取当前文档流的 scrollTop
    //   const scrollTop =
    //     document.documentElement.scrollTop || document.body.scrollTop
    //   // 定义当前点亮的导航下标
    //   let navIndex = 0
    //   for (let n = 0; n < offsetTopArr.length; n++) {
    //     // 如果 scrollTop 大于等于第n个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
    //     // 那么此时导航索引就应该是n了
    //     if (scrollTop >= offsetTopArr[n] - 100) {
    //       navIndex = n
    //     }
    //   }
    //   // console.log(navIndex + 1)
    //   if (this.viewIndex !== navIndex + 1) {
    //     this.viewIndex = navIndex + 1
    //   }
    //   // this.viewIndex = navIndex + 1
    // },

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
