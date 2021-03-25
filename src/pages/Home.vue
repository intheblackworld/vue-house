<template>
  <div class="home no-padding-top">
    <Loading :loading="load" />
    <!-- <SideNavigation /> -->
    <Navigation />
    <!-- <Indigator :viewIndex="viewIndex" /> -->
    <!-- <full-page
      ref="fullPage"
      :options="options"
      id="fullpage"
    > -->
    <vue-lazy-component class="section relative" id="section1" @init="init" style="z-index: 3;">
      <Section1 />
    </vue-lazy-component>

    <vue-lazy-component class="section" id="section2">
      <Section2 />
    </vue-lazy-component>
    <vue-lazy-component
      class="section"
      id="section3"
    >
      <Section3 />
    </vue-lazy-component>
    <vue-lazy-component
      class="section relative"
      id="section4"
      style="z-index: 3;"
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
    <vue-lazy-component class="section" id="contact">
      <ContactSection />
    </vue-lazy-component>
    <MobileNav />
  </div>
</template>

<style lang="scss">
// @import url('https://fonts.googleapis.com/css?family=Playball&display=swap');
@import '../assets/style/variableColor.scss';
@import '@/assets/style/function.scss';

.section,
.section .fp-slide,
.section .fp-tableCell {
  height: auto !important;
}
#contact{z-index: 3;}
</style>

<script>
// @ is an alias to /src
import $ from 'jquery'
import Navigation from '@/layouts/Navigation.vue'
import { isMobile } from '@/utils'
// import SideNavigation from '@/layouts/SideNavigation.vue'
import ContactSection from '@/layouts/ContactSection.vue'
import MobileNav from '@/layouts/MobileNav.vue'
import Loading from '@/components/Loading.vue'
import Indigator from '@/components/Indigator.vue'
// import LeafFlow from '@/components/LeafFlow.vue'

import Section1 from '@/projects/dc/Section1.vue'
import Section2 from '@/projects/dc/Section2.vue'
import Section3 from '@/projects/dc/Section3.vue'
import Section4 from '@/projects/dc/Section4.vue'
import Section5 from '@/projects/dc/Section5.vue'
import Section6 from '@/projects/dc/Section6.vue'
import Section7 from '@/projects/dc/Section7.vue'

export default {
  name: 'home',
  components: {
    Loading,
    // Indigator,
    Navigation,
    // SideNavigation,
    // LeafFlow,
    ContactSection,
    MobileNav,
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Section7,
  },

  data() {
    return {
      isMobile,
      isSide: false,
      load: true,
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
    $(document).ready(() => {
      // Images loaded is zero because we're going to process a new set of images.
      var imagesLoaded = 0
      // Total images is still the total number of <img> elements on the page.
      var totalImages = $('img').length

      const allImagesLoaded = () => {
        this.load = false
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
    })
  },
  mounted() {
  },
  methods: {
    init() {},
  },
}
</script>
