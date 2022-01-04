<template>
  <div class="home no-padding-top" >
    <div class="bg-img">
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
      <vue-lazy-component class="relative" id="section1" @init="init">
        <Section1 />
      </vue-lazy-component>
      <vue-lazy-component class="relative" id="section2" @init="init">
        <Section2 />
      </vue-lazy-component>
      <vue-lazy-component class="relative" id="section2" @init="init">
        <Section3 />
      </vue-lazy-component>
      <!-- 
      <vue-lazy-component class="section relative" id="section4" >
        <Section4 :viewIndex="viewIndex" />
      </vue-lazy-component>
      <vue-lazy-component class="section" id="section5">
        <Section5 :viewIndex="viewIndex" />
      </vue-lazy-component>
      <vue-lazy-component class="section" id="section6">
        <Section6 />
      </vue-lazy-component>
      <vue-lazy-component class="section" id="section10">
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
      <ContactSection />
      <!-- </vue-lazy-component> -->
    </div>
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
#contact {
 // position: relative;
 // z-index: 3;
}
</style>

<script>
// @ is an alias to /src
/*import info from '@/info'
import $ from 'jquery'
import Navigation from '@/layouts/Navigation.vue'*/
import { isMobile } from '@/utils'
// import SideNavigation from '@/layouts/SideNavigation.vue'
import ContactSection from '@/layouts/ContactSection.vue'
import MobileNav from '@/layouts/MobileNav.vue'
import Loading from '@/components/Loading.vue'
// import Indigator from '@/components/Indigator.vue'
import UIkit from 'uikit';
// import LeafFlow from '@/components/LeafFlow.vue'
import Section1 from '@/projects/ty/Section1.vue'
import Section2 from '@/projects/ty/Section2.vue'
import Section3 from '@/projects/ty/Section3.vue'
// import Section4 from '@/projects/ty/Section4.vue'
// import Section5 from '@/projects/ty/Section5.vue'
// import Section6 from '@/projects/ty/Section6.vue'
// import Section7 from '@/projects/ty/Section7.vue'
// import Section8 from '@/projects/ty/Section8.vue'
// import Section9 from '@/projects/ty/Section9.vue'
// import Section10 from '@/projects/ty/Section10.vue'

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
    Section3,
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
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    init() {},
  },
}
</script>
