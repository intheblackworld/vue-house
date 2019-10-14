<template>
  <div class="home no-padding-top">
    <div ref="gtmNoScript" />
    <Loading :loading="load" />
    <SideNavigation v-if="isSide" />
    <Navigation v-else />
    <div id="section1">
      <Section1 />
    </div>
    <div class="bg">
      <div id="section2">
        <Section2 />
      </div>
      <div id="section3">
        <Section3 />
      </div>
      <div id="section4">
        <Section4 />
      </div>
      <div id="section5">
        <Section5 />
      </div>
      <div id="section6">
        <Section6 />
      </div>
      <div id="section7">
        <Section7 />
      </div>
      <div id="section8">
        <Section8 />
      </div>
      <ContactSection />
    </div>
    <MobileNav />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Playball&display=swap');
@import '../assets/style/variableColor.scss';
.bg {
  background: $bg !important;
}
</style>

<script>
// @ is an alias to /src
import Navigation from '@/layouts/Navigation.vue'
import SideNavigation from '@/layouts/SideNavigation.vue'
import ContactSection from '@/layouts/ContactSection.vue'
import MobileNav from '@/layouts/MobileNav.vue'
import Loading from '@/components/Loading.vue'
import gtm from '@/mixins/gtm.js'

import Section1 from '@/projects/jscy/Section1.vue'
import Section2 from '@/projects/jscy/Section2.vue'
import Section3 from '@/projects/jscy/Section3.vue'
import Section4 from '@/projects/jscy/Section4.vue'
import Section5 from '@/projects/jscy/Section5.vue'
import Section6 from '@/projects/jscy/Section6.vue'
import Section7 from '@/projects/jscy/Section7.vue'
import Section8 from '@/projects/jscy/Section8.vue'

export default {
  name: 'home',
  mixins: [gtm],
  components: {
    Loading,
    Navigation,
    SideNavigation,
    ContactSection,
    MobileNav,
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Section7,
    Section8,
  },

  data() {
    return {
      isSide: true,
      load: true,
    }
  },
  created() {
    window.addEventListener('load', event => {
      this.load = false
    })
  },

  methods: {
    onDone() {
      console.log('done')
    },
  },
}
</script>
