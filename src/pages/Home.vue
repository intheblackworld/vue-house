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
    <div id="section9">
      <Section9 />
    </div>
    <div id="section10">
      <Section10 />
    </div>
    <!-- <div id="section11">
      <Section11 />
    </div> -->
    <div id="section12">
      <Section12 />
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

import Section1 from '@/projects/lju/Section1.vue'
import Section2 from '@/projects/lju/Section2.vue'
import Section3 from '@/projects/lju/Section3.vue'
import Section4 from '@/projects/lju/Section4.vue'
import Section5 from '@/projects/lju/Section5.vue'
import Section6 from '@/projects/lju/Section6.vue'
import Section7 from '@/projects/lju/Section7.vue'
import Section8 from '@/projects/lju/Section8.vue'
import Section9 from '@/projects/lju/Section9.vue'
import Section10 from '@/projects/lju/Section10.vue'
// import Section11 from '@/projects/lju/Section11.vue'
import Section12 from '@/projects/lju/Section12.vue'

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
    Section9,
    Section10,
    // Section11,
    Section12,
  },

  methods: {
    onDone() {
      console.log('done')
    },
  },
}
</script>
