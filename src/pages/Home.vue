<template>
  <div class="home">
    <div ref="gtmNoScript" />
    <Loading :loading="load" />
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
    <div id="section7">
      <Section7 />
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
import Loading from '@/components/Loading.vue'
import gtm from '@/mixins/gtm.js'

import Section1 from '@/projects/east/Section1.vue'
import Section2 from '@/projects/east/Section2.vue'
import Section3 from '@/projects/east/Section3.vue'
import Section4 from '@/projects/east/Section4.vue'
import Section5 from '@/projects/east/Section5.vue'
import Section6 from '@/projects/east/Section6.vue'
import Section7 from '@/projects/east/Section7.vue'

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
  },

  data() {
    return {
      isSide: true,
      load: true,
    }
  },
  created() {
    window.addEventListener('load', (event) => {
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
