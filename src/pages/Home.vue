<template>
  <div class="home">
    <div ref="gtmNoScript" />
    <Loading :loading="loading" />
    <!-- <SideNavigation v-if="isSide" />
    <Navigation v-else /> -->
    <div id="section1">
      <Section1 />
    </div>
    <div id="section2">
      <Section2 />
    </div>
    <!-- <div id="section4">
      <Section4 />
    </div> -->
    <ContactSection />
    <!-- <SimpleOrder /> -->
    <!-- <MobileNav /> -->
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Playball&display=swap');
</style>

<script>
// @ is an alias to /src
// import Navigation from '@/layouts/Navigation.vue'
// import SideNavigation from '@/layouts/SideNavigation.vue'
import ContactSection from '@/layouts/ContactSection.vue'
// import MobileNav from '@/layouts/MobileNav.vue'
import Loading from '@/components/Loading.vue'
import gtm from '@/mixins/gtm.js'

import Section1 from '@/projects/ywh/Section1.vue'
import Section2 from '@/projects/ywh/Section2.vue'
// import SimpleOrder from '@/components/SimpleOrder.vue'

export default {
  name: 'home',
  mixins: [gtm],
  components: {
    Loading,
    // Navigation,
    // SideNavigation,
    ContactSection,
    // MobileNav,
    Section1,
    Section2,
    // SimpleOrder,

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
