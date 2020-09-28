<template>
  <div class="home no-padding-top">
<<<<<<< HEAD
    <div class="home2">
      <Loading :loading="load" />
      <SideNavigation />
      <!-- <Navigation /> -->
      <!-- <Indigator :viewIndex="viewIndex" /> -->
      <!-- <full-page
=======
    <Loading :loading="load" />
    <!-- <SideNavigation v-if="isSide" />
    <Navigation v-else /> -->
    <!-- <TopIndigator :viewIndex="viewIndex" /> -->
    <!-- <full-page
>>>>>>> 9121ee9ebd5fb65447ba0f9cece584988d37677e
      ref="fullPage"
      :options="options"
      id="fullpage"
    > -->
<<<<<<< HEAD
      <vue-lazy-component
        class="section"
        id="section1"
        @init="init"
      >
        <Section1 />
      </vue-lazy-component>
<!--
      <vue-lazy-component
        class="section"
        id="section2"
      >
        <Section2 />
      </vue-lazy-component> -->
      <vue-lazy-component
        class="section"
        id="section3"
      >
        <Section3 />
      </vue-lazy-component>
      <vue-lazy-component
        class="section"
        id="section4"
      >
        <Section4 />
      </vue-lazy-component>
      <vue-lazy-component
        class="section"
        id="section5"
      >
        <Section5 />
      </vue-lazy-component>
      <vue-lazy-component
        class="section"
        id="section6"
      >
        <Section6 />
      </vue-lazy-component>
      <vue-lazy-component
        class="section"
        id="section7"
      >
        <Section7 />
      </vue-lazy-component>
      <!-- <vue-lazy-component
        class="section"
        id="section8"
      >
        <Section8 />
      </vue-lazy-component> -->
      <!-- <vue-lazy-component
        class="section"
        id="section9"
      >
        <Section9 />
      </vue-lazy-component> -->
      <!-- <vue-lazy-component
=======
    <div
      class="section"
      id="section1"
    >
      <Section1 />
    </div>
    <!-- </full-page> -->
    <ContactSection
>>>>>>> 9121ee9ebd5fb65447ba0f9cece584988d37677e
      class="section"
      id="section10"
    >
      <Section10 />
    </vue-lazy-component>
    <vue-lazy-component
      class="section"
      id="section11"
    >
      <Section11 />
    </vue-lazy-component> -->
      <vue-lazy-component
        class="section"
        id="contact"
      >
        <ContactSection />
      </vue-lazy-component>
      <MobileNav />
    </div>
  </div>
</template>

<<<<<<< HEAD
<style lang="scss" scoped>
=======
<style lang="scss">
>>>>>>> 9121ee9ebd5fb65447ba0f9cece584988d37677e
// @import url('https://fonts.googleapis.com/css?family=Playball&display=swap');
@import '../assets/style/variableColor.scss';

.section,
.section .fp-slide,
.section .fp-tableCell {
  height: auto !important;
}
</style>

<script>
// @ is an alias to /src
<<<<<<< HEAD
import $ from 'jquery'
import Navigation from '@/layouts/Navigation.vue'
=======
// import _ from 'lodash'
// import Navigation from '@/layouts/Navigation.vue'
>>>>>>> 9121ee9ebd5fb65447ba0f9cece584988d37677e
import { isMobile } from '@/utils'
// import SideNavigation from '@/layouts/SideNavigation.vue'
import ContactSection from '@/layouts/ContactSection.vue'
import MobileNav from '@/layouts/MobileNav.vue'
import Loading from '@/components/Loading.vue'
<<<<<<< HEAD
import Indigator from '@/components/Indigator.vue'

import Section1 from '@/projects/llcs1/Section1.vue'
import Section2 from '@/projects/llcs1/Section2.vue'
import Section3 from '@/projects/llcs1/Section3.vue'
import Section4 from '@/projects/llcs1/Section4.vue'
import Section5 from '@/projects/llcs1/Section5.vue'
import Section6 from '@/projects/llcs1/Section6.vue'
import Section7 from '@/projects/llcs1/Section7.vue'
// import Section8 from '@/projects/llcs1/Section8.vue'
// import Section9 from '@/projects/llcs1/Section9.vue'
// import Section10 from '@/projects/llcs1/Section10.vue'
// import Section11 from '@/projects/llcs1/Section11.vue'
=======
// import TopIndigator from '@/components/TopIndigator.vue'

import Section1 from '@/projects/llcs/Section1.vue'
// import Section2 from '@/projects/sdj1/Section2.vue'
// import Section3 from '@/projects/sdj1/Section3.vue'
// import Section4 from '@/projects/sdj1/Section4.vue'
// import Section5 from '@/projects/sdj1/Section5.vue'
// import Section6 from '@/projects/sdj1/Section6.vue'
// import Section7 from '@/projects/sdj1/Section7.vue'
// import Section8 from '@/projects/sdj1/Section8.vue'
// import Section9 from '@/projects/sdj/Section9.vue'
// import Section10 from '@/projects/sdj/Section10.vue'
// import Section11 from '@/projects/sdj/Section11.vue'
// import Section12 from '@/projects/sdj/Section12.vue'
>>>>>>> 9121ee9ebd5fb65447ba0f9cece584988d37677e

export default {
  name: 'home',
  components: {
    Loading,
    // TopIndigator,
    // VideoSection,
    // Navigation,
    // SideNavigation,
    ContactSection,
    MobileNav,
    Section1,
<<<<<<< HEAD
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Section7,
=======
    // Section2,
    // Section3,
    // Section4,
    // Section5,
    // Section6,
    // Section7,
>>>>>>> 9121ee9ebd5fb65447ba0f9cece584988d37677e
    // Section8,
    // Section9,
    // Section10,
    // Section11,
<<<<<<< HEAD
=======
    // Section12,
>>>>>>> 9121ee9ebd5fb65447ba0f9cece584988d37677e
  },

  data() {
    return {
      isMobile,
      // isSide: false,
      load: true,
<<<<<<< HEAD
      viewIndex: 0,
=======
      // viewIndex: 1,
      // offsetTopArr: [],
>>>>>>> 9121ee9ebd5fb65447ba0f9cece584988d37677e
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
<<<<<<< HEAD
    $(document).ready(() => {
      // Images loaded is zero because we're going to process a new set of images.
      var imagesLoaded = 0
      // Total images is still the total number of <img> elements on the page.
      var totalImages = $('img').length

      const allImagesLoaded = () => {
        setTimeout(() => {
          this.load = false
        }, 500);
      }
      const imageLoaded = () => {
        imagesLoaded++
        if (imagesLoaded == totalImages) {
          allImagesLoaded()
        }
      }
      $('img').each(function(idx, img) {
        $('<img>')
          .on('load', imageLoaded)
          .attr('src', $(img).attr('src'))
      })
=======
    window.addEventListener('load', event => {
      this.load = false
>>>>>>> 9121ee9ebd5fb65447ba0f9cece584988d37677e
    })
  },
  mounted() {
    // window.addEventListener('scroll', _.throttle(this.onScroll, 500), false)
    // 获取所有锚点元素
    // const navContents = document.querySelectorAll('.section')
    // 所有锚点元素的 offsetTop
    // navContents.forEach(item => {
    //   this.offsetTopArr.push(item.offsetTop)
    // })
  },

  methods: {
<<<<<<< HEAD
    init() {},
=======
>>>>>>> 9121ee9ebd5fb65447ba0f9cece584988d37677e
    // onScroll() {
    //   // 获取当前文档流的 scrollTop
    //   const scrollTop =
    //     document.documentElement.scrollTop || document.body.scrollTop
    //   // 定义当前点亮的导航下标
    //   let navIndex = 0
    //   for (let n = 0; n < this.offsetTopArr.length; n++) {
    //     // 如果 scrollTop 大于等于第n个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
    //     // 那么此时导航索引就应该是n了
    //     let height = this.isMobile ? 200 : 800
    //     if (scrollTop >= this.offsetTopArr[n] - height) {
    //       navIndex = n
    //     }

    //     // if (n > 4) {
    //     //   navIndex = 5
    //     // }
    //   }
    //   // console.log(navIndex)
    //   this.viewIndex = navIndex + 1
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
