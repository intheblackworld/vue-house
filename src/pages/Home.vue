<template>
  <div class="home no-padding-top">
    <div ref="gtmNoScript" />
    <SideNavigation v-if="isSide" />
    <Navigation v-else />
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
    <ContactSection />
    <MobileNav />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/layouts/Navigation.vue'
import SideNavigation from '@/layouts/SideNavigation.vue'
import ContactSection from '@/layouts/ContactSection.vue'
import MobileNav from '@/layouts/MobileNav.vue'
import gtm from '@/mixins/gtm.js'

import Section1 from '@/projects/cjt/Section1.vue'
import Section2 from '@/projects/cjt/Section2.vue'
import Section3 from '@/projects/cjt/Section3.vue'
import Section4 from '@/projects/cjt/Section4.vue'
import Section5 from '@/projects/cjt/Section5.vue'
import Section6 from '@/projects/cjt/Section6.vue'

export default {
  name: 'home',
  mixins: [gtm],
  components: {
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
  },

  data() {
    return {
      isSide: true,
    }
  },

  methods: {
    onDone() {
      console.log('done')
    },
  },
}
</script>
