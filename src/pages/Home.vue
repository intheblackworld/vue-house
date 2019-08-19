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

import Section1 from '@/projects/lkf/Section1.vue'
import Section2 from '@/projects/lkf/Section2.vue'

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
  },

  methods: {
    onDone() {
      console.log('done')
    },
  },
}
</script>
