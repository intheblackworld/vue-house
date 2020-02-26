<template>
  <div class="home">
    <div ref="gtmNoScript" />
    <Loading :loading="load" />
    <!-- <SideNavigation v-if="isSide" /> -->
    <!-- <Navigation v-else /> -->
    <Indigator :action="action" :indigatorIndex="indigatorIndex" />
    <full-page ref="fullPage" :options="options" id="fullpage">
      <div id="section1" class="section">
        <Section1 />
      </div>
      <div id="section2" class="section">
        <Section2 />
      </div>
      <div id="section3" class="section">
        <Section3 />
      </div>
      <div id="section4" class="section">
        <Section4 />
      </div>
      <div id="section5" class="section">
        <Section5 />
      </div>
      <div id="section6" class="section">
        <Section6 />
      </div>
      <div id="section7" class="section">
        <Section7 />
      </div>
      <ContactSection class="section" />
    </full-page>
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
import { isMobile } from '@/utils'
import SideNavigation from '@/layouts/SideNavigation.vue'
import ContactSection from '@/layouts/ContactSection.vue'
import Indigator from '@/components/Indigator.vue'
import MobileNav from '@/layouts/MobileNav.vue'
import Loading from '@/components/Loading.vue'
import gtm from '@/mixins/gtm.js'

import Section1 from '@/projects/lsbj/Section1.vue'
import Section2 from '@/projects/lsbj/Section2.vue'
import Section3 from '@/projects/lsbj/Section3.vue'
import Section4 from '@/projects/lsbj/Section4.vue'
import Section5 from '@/projects/lsbj/Section5.vue'
import Section6 from '@/projects/lsbj/Section6.vue'
import Section7 from '@/projects/lsbj/Section7.vue'
// import SimpleOrder from '@/components/SimpleOrder.vue'

export default {
  name: 'home',
  mixins: [gtm],
  components: {
    Loading,
    Indigator,
    // SideNavigation,
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
      isMobile,
      load: true,
      action: {
        moveTo: () => {},
      },

      indigatorIndex: 0,
      options: {
        menu: '#menu',
        anchors: [],
        scrollBar: true,
        onLeave: this.onLeave,
        afterLoad: this.afterLoad,
        continuousHorizontal: true,
        // navigation: true,
        // sectionsColor: ['#41b883', '#ff5f45', '#0798ec'],
      },
    }
  },
  created() {
    window.addEventListener('load', event => {
      this.load = false
    })
    // window.location = "https://ywh.nhc888.com.tw/"
  },

  mounted() {
    this.action = this.$refs.fullPage.api
    if (this.isMobile) {
      this.$refs.fullPage.api.setResponsive(true)
    }
  },

  computed: {},

  methods: {
    onDone() {
      console.log('done')
    },
    onLeave(origin, destination, direction) {
      console.log(origin, destination, direction)
      if (origin.isLast === true && direction === 'up') {
        console.log('加固')
        this.$refs.fullPage.api.setResponsive(false)
      }
      if (origin.isFirst === true && direction === 'down' && this.isMobile) {
        this.$refs.fullPage.api.setResponsive(false)
      }

      if (destination.isFirst === true && direction === 'up' && this.isMobile) {
        this.$refs.fullPage.api.setResponsive(false)
      }
    },

    afterLoad(origin, destination, direction) {
      this.indigatorIndex = destination.index
      if (destination.isLast === true && direction === 'down') {
        console.log('解除')
        this.$refs.fullPage.api.setResponsive(true)
      }
    },
  },
}
</script>
