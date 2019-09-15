<template>
  <div class="home">
    <div ref="gtmNoScript" />
    <Loading :loading="loading" />
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
    <div id="section8">
      <Section8 />
    </div>
    <div id="section9">
      <Section9 />
    </div>
    <div id="section10">
      <Section10 />
    </div>
    <div id="section11">
      <Section11 />
    </div>
    <ContactSection />
    <MobileNav />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Playball&display=swap');
</style>

<script>
// @ is an alias to /src
import Navigation from '@/layouts/Navigation.vue'
import SideNavigation from '@/layouts/SideNavigation.vue'
import ContactSection from '@/layouts/ContactSection.vue'
import MobileNav from '@/layouts/MobileNav.vue'
import Loading from '@/components/Loading.vue'
import gtm from '@/mixins/gtm.js'

import Section1 from '@/projects/jh/Section1.vue'
import Section2 from '@/projects/jh/Section2.vue'
import Section3 from '@/projects/jh/Section3.vue'
import Section4 from '@/projects/jh/Section4.vue'
import Section5 from '@/projects/jh/Section5.vue'
import Section6 from '@/projects/jh/Section6.vue'
import Section7 from '@/projects/jh/Section7.vue'
import Section8 from '@/projects/jh/Section8.vue'
import Section9 from '@/projects/jh/Section9.vue'
import Section10 from '@/projects/jh/Section10.vue'
import Section11 from '@/projects/jh/Section11.vue'

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
    Section9,
    Section10,
    Section11,

  },

  data() {
    return {
      isSide: true,
      loading: true,
    }
  },
  created() {
    this.$Lazyload.$on('loaded', ({ el, src }) => {
      setTimeout(() => {
        if (this.loading) {
          this.loading = false
        }
      }, 0)
    })
  },

  methods: {
    onDone() {
      console.log('done')
    },
  },
}
</script>
