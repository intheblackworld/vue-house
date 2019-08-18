<template>
  <div class="home">
    <div ref="gtmNoScript" />
    <Navigation />
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

  // mounted() {
  //   const s = document.createElement('script')
  //   s.type = 'text/javascript'
  //   s.async = true
  //   s.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  //   new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  //   j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  //   'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  //   })(window,document,'script','dataLayer','GTM-${this.$gtmCode}');`

  //   const n = document.createElement('noscript')
  //   n.type = 'text/javascript'
  //   n.async = true
  //   n.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-${this.$gtmCode}"
  //   height="0" width="0" style="display:none;visibility:hidden"></iframe>`
  //   document.head.appendChild(s)
  //   this.$refs.gtmNoScript.appendChild(n)
  // },
}
</script>
