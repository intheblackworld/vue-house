<template>
  <div>
    <div class="section" id="section1" @init="init">
      <Section1 />
    </div>
    <vue-lazy-component class="section" id="section2" style="">
      <Section2 />
    </vue-lazy-component>
    <vue-lazy-component class="section" id="section3">
      <Section3 />
    </vue-lazy-component>
    <vue-lazy-component class="section relative" id="section4">
      <Section4 :viewIndex="viewIndex" />
    </vue-lazy-component>
    <vue-lazy-component class="section" id="section5">
      <Section5 :viewIndex="viewIndex" />
    </vue-lazy-component>
    <vue-lazy-component class="section" id="section6">
      <Section6 />
    </vue-lazy-component>
    <vue-lazy-component class="section" id="section7">
      <Section7 />
    </vue-lazy-component>
    <vue-lazy-component class="section" id="section8">
      <Section8 />
    </vue-lazy-component>
    <vue-lazy-component class="section" id="section9">
      <Section9 />
    </vue-lazy-component>
    <!-- <vue-lazy-component class="section" id="section10">
      <Section10 />
    </vue-lazy-component> -->
    <ContactSection />
    <!-- <vue-lazy-component class="section" id="section11">
        <Section11 />
      </vue-lazy-component> -->
    <!-- <vue-lazy-component class="section" id="section12">
        <Section12 />
      </vue-lazy-component>
      <vue-lazy-component class="section" id="section13">
        <Section13 />
      </vue-lazy-component>
      <vue-lazy-component class="section" id="section14">
        <Section14 />
      </vue-lazy-component>
      <vue-lazy-component class="section" id="section15">
        <Section15 />
      </vue-lazy-component>
      <vue-lazy-component class="section" id="section16">
        <Section16 />
      </vue-lazy-component>
      <vue-lazy-component class="section" id="section17">
        <Section17 />
      </vue-lazy-component>
      <vue-lazy-component class="section" id="section18">
        <Section18 />
      </vue-lazy-component>
      <vue-lazy-component class="section" id="section19">
        <Section19 />
      </vue-lazy-component> -->
    <!-- <vue-lazy-component class="section" id="section10">
        <Section10 :viewIndex="viewIndex" />
      </vue-lazy-component>
      <vue-lazy-component class="section" id="section7">
          <Section7 />
      </vue-lazy-component>
      <vue-lazy-component class="section" id="section8">
         <Section8 />
      </vue-lazy-component>
      <vue-lazy-component class="section" id="section9">
        <Section9 :viewIndex="viewIndex" />
      </vue-lazy-component> -->
    <!-- <vue-lazy-component class="section" id="contact"> -->
    <!-- </vue-lazy-component> -->
    <!-- <MobileNav /> -->
  </div>
</template>

<style lang="scss" scoped>
// // @import url('https://fonts.googleapis.com/css?family=Playball&display=swap');
// @import '../assets/style/variableColor.scss';
// @import '@/assets/style/function.scss';

// .section,
// .section .fp-slide,
// .section .fp-tableCell {
//   height: auto !important;
// }
// #contact {
//   z-index: 3;
// }

// .bg-img {
//   // background-image: url('~@/projects/lj/s1/bg.png');
//   // padding-top: $nav_pc_height;
//   background-attachment: fixed;
//   background-size: auto;
//   background-position: center center;
//   background-repeat: repeat;
//   overflow: hidden; //試底下多的那塊哪來的
// }

// @media only screen and (max-width: 767px) {
//   //.bg-img {
//   //  background-image: url('~@/projects/lj/s1/bg_m.png');
//   //}
// }
</style>

<script>
// @ is an alias to /src
// import $ from 'jquery'
import _ from 'lodash'
// import Navigation from '@/layouts/Navigation.vue'
import { isMobile } from '@/utils'
// import SideNavigation from '@/layouts/SideNavigation.vue'
import ContactSection from '@/layouts/ContactSection.vue'
// //import MobileNav from '@/layouts/MobileNav.vue'
// import Loading from '@/components/Loading.vue'
// import Indigator from '@/components/Indigator.vue'
// import LeafFlow from '@/components/LeafFlow.vue'

import Section1 from '@/projects/shin-lan/Section1.vue'
import Section2 from '@/projects/shin-lan/Section2.vue'
import Section3 from '@/projects/shin-lan/Section3.vue'
import Section4 from '@/projects/shin-lan/Section4.vue'
import Section5 from '@/projects/shin-lan/Section5.vue'
import Section6 from '@/projects/shin-lan/Section6.vue'
import Section7 from '@/projects/shin-lan/Section7.vue'
import Section8 from '@/projects/shin-lan/Section8.vue'
import Section9 from '@/projects/shin-lan/Section9.vue'
// import Section10 from '@/projects/shin-lan/Section10.vue'
// import Section11 from '@/projects/shin-lan/Section11.vue'
// import Section12 from '@/projects/shin-lan/Section12.vue'
// import Section13 from '@/projects/shin-lan/Section13.vue'
// import Section14 from '@/projects/shin-lan/Section14.vue'
// import Section15 from '@/projects/shin-lan/Section15.vue'
// import Section16 from '@/projects/shin-lan/Section16.vue'
// import Section17 from '@/projects/shin-lan/Section17.vue'
// import Section18 from '@/projects/shin-lan/Section18.vue'
// import Section19 from '@/projects/shin-lan/Section19.vue'
// import Section9 from '@/projects/jcs/Section9.vue'
// import Section10 from '@/projects/jcs/Section10.vue'

export default {
  name: 'home',
  components: {
    // Loading,
    // // Indigator,
    // Navigation,
    // SideNavigation,
    // // LeafFlow,
    ContactSection,
    // MobileNav,
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Section7,
    Section8,
    Section9,
    // Section10,
    // Section11,
    // Section12,
    // Section13,
    // Section14,
    // Section15,
    // Section16,
    // Section17,
    // Section18,
    // Section19,
    // Section8,
    // Section9,
    // Section10,
  },

  data() {
    return {
      isMobile,
      // isSide: false,
      // load: false,
      viewIndex: 0,
      // // isNavMin: false,
      // isHide: false,
      // scrollPos: 0,
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
    window.addEventListener('scroll', _.throttle(this.onScroll, 200), false)
    // this.action = this.$refs.fullPage.api
    // if (this.isMobile) {
    //   this.$refs.fullPage.api.setResponsive(true)
    // }
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
