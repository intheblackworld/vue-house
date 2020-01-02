<template>
  <div class="home no-padding-top">
    <Loading :loading="load" />
    <!-- <SideNavigation v-if="isSide" /> -->
    <!-- <Navigation v-else /> -->
    <Indigator />
    <div id="section1">
      <Section1 />
    </div>
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
    <ContactSection />
    <MobileNav />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Playball&display=swap');
@import '../assets/style/variableColor.scss';
</style>

<script>
// @ is an alias to /src
import Navigation from '@/layouts/Navigation.vue'
import SideNavigation from '@/layouts/SideNavigation.vue'
import ContactSection from '@/layouts/ContactSection.vue'
import MobileNav from '@/layouts/MobileNav.vue'
import Loading from '@/components/Loading.vue'
import Indigator from '@/components/Indigator.vue'

import Section1 from '@/projects/fs/Section1.vue'
import Section2 from '@/projects/fs/Section2.vue'
import Section3 from '@/projects/fs/Section3.vue'
import Section4 from '@/projects/fs/Section4.vue'
import Section5 from '@/projects/fs/Section5.vue'
import Section6 from '@/projects/fs/Section6.vue'
import Section7 from '@/projects/fs/Section7.vue'
// import Section8 from '@/projects/fs/Section8.vue'
// import Section9 from '@/projects/fs/Section9.vue'

export default {
  name: 'home',
  components: {
    Loading,
    Indigator,
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
    // Section8,
    // Section9,
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
