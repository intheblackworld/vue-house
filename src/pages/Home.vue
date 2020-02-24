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
    <Section3 />
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
// import Navigation from '@/layouts/Navigation.vue'
import SideNavigation from '@/layouts/SideNavigation.vue'
import ContactSection from '@/layouts/ContactSection.vue'
import MobileNav from '@/layouts/MobileNav.vue'
import Loading from '@/components/Loading.vue'
import gtm from '@/mixins/gtm.js'

import Section1 from '@/projects/dunnanhowhow/Section1.vue'
import Section2 from '@/projects/dunnanhowhow/Section2.vue'
import Section3 from '@/projects/dunnanhowhow/Section3.vue'
import Section6 from '@/projects/dunnanhowhow/Section6.vue'
import Section7 from '@/projects/dunnanhowhow/Section7.vue'
// import SimpleOrder from '@/components/SimpleOrder.vue'

export default {
  name: 'home',
  mixins: [gtm],
  components: {
    Loading,
    // Navigation,
    SideNavigation,
    ContactSection,
    MobileNav,
    Section1,
    Section2,
    Section3,
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

    // window.location = "https://ywh.nhc888.com.tw/"
  },

  methods: {
    onDone() {
      console.log('done')
    },
  },
}
</script>
