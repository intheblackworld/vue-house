<template>
  <div class="home no-padding-top">
    <div ref="gtmNoScript" />
    <Loading :loading="load" />
    <SideNavigation />
    <!-- <Navigation /> -->
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
    <!-- <SimpleOrder /> -->
    <MobileNav />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Playball&display=swap');
</style>

<script>
// @ is an alias to /src
import SideNavigation from '@/layouts/SideNavigation.vue'
import ContactSection from '@/layouts/ContactSection.vue'
import MobileNav from '@/layouts/MobileNav.vue'
import Loading from '@/components/Loading.vue'
import gtm from '@/mixins/gtm.js'

import Section1 from '@/projects/hg1/Section1.vue'
// import Section2 from '@/projects/hg1/Section2.vue'
// import Section3 from '@/projects/hg1/Section3.vue'
// import Section4 from '@/projects/hg1/Section4.vue'
// import Section5 from '@/projects/hg1/Section5.vue'
// import Section6 from '@/projects/hg1/Section6.vue'
// import Section7 from '@/projects/hg1/Section7.vue'
// import SimpleOrder from '@/components/SimpleOrder.vue'

export default {
  name: 'home',
  mixins: [gtm],
  components: {
    SideNavigation,
    Loading,
    ContactSection,
    MobileNav,
    Section1,
    // Section2,
    // Section3,
    // Section4,
    // Section5,
    // Section6,
    // Section7,
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

    // window.location = "https://ywh.nhc888.com.tw/"
  },

  methods: {
    onDone() {
      console.log('done')
    },
  },
}
</script>
