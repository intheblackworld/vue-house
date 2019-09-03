<template>
  <div class="home no-padding-top">
    <div ref="gtmNoScript" />
    <Navigation />
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
    <div id="section8">
      <Section8 />
    </div>
    <ContactSection />
    <MobileNav />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/layouts/Navigation.vue'
import ContactSection from '@/layouts/ContactSection.vue'
import MobileNav from '@/layouts/MobileNav.vue'
import gtm from '@/mixins/gtm.js'

import Section1 from '@/projects/stm/Section1.vue'
import Section2 from '@/projects/stm/Section2.vue'
import Section3 from '@/projects/stm/Section3.vue'
import Section4 from '@/projects/stm/Section4.vue'
import Section5 from '@/projects/stm/Section5.vue'
import Section6 from '@/projects/stm/Section6.vue'
import Section7 from '@/projects/stm/Section7.vue'
import Section8 from '@/projects/stm/Section8.vue'

export default {
  name: 'home',
  mixins: [gtm],
  components: {
    Navigation,
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

  methods: {
    onDone() {
      console.log('done')
    },
  },
}
</script>
