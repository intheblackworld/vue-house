<template>
  <div class="home">
    <div ref="gtmNoScript" />
    <Loading :loading="load" />
    <SideNavigation v-if="isSide" />
    <Navigation v-else />
    <!-- <Indigator
      :action="action"
      :indigatorIndex="indigatorIndex"
    /> -->
    <div
      id="section1"
      class="section"
    >
      <Section1 />
    </div>
    <div
      id="section2"
      class="section"
    >
      <Section2 />
    </div>
    <div
      id="section3"
      class="section"
    >
      <Section3 />
    </div>
    <div
      id="section4"
      class="section"
    >
      <Section4 />
    </div>
    <div
      id="section5"
      class="section"
    >
      <Section5 />
    </div>
    <div
      id="section6"
      class="section"
    >
      <Section6 />
    </div>
    <ContactSection class="section" />
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
// import Indigator from '@/components/Indigator.vue'
import MobileNav from '@/layouts/MobileNav.vue'
import Loading from '@/components/Loading.vue'
import gtm from '@/mixins/gtm.js'

import Section1 from '@/projects/tzhw/Section1.vue'
import Section2 from '@/projects/tzhw/Section2.vue'
import Section3 from '@/projects/tzhw/Section3.vue'
import Section4 from '@/projects/tzhw/Section4.vue'
import Section5 from '@/projects/tzhw/Section5.vue'
import Section6 from '@/projects/tzhw/Section6.vue'
// import Section7 from '@/projects/tv/Section7.vue'
// import SimpleOrder from '@/components/SimpleOrder.vue'

export default {
  name: 'home',
  mixins: [gtm],
  components: {
    Loading,
    // Indigator,
    SideNavigation,
    ContactSection,
    MobileNav,
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    // Section7,
  },

  data() {
    return {
      isSide: false,
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
    // window.addEventListener('scroll', this.onScroll, false)
    // this.action = this.$refs.fullPage.api
    // if (this.isMobile) {
    //   this.$refs.fullPage.api.setResponsive(true)
    // }
  },
  methods: {
    onDone() {
      console.log('done')
    },
    // onScroll() {
    //   // 获取所有锚点元素
    //   const navContents = document.querySelectorAll('.section')
    //   // 所有锚点元素的 offsetTop
    //   const offsetTopArr = []
    //   navContents.forEach(item => {
    //     offsetTopArr.push(item.offsetTop)
    //   })
    //   // 获取当前文档流的 scrollTop
    //   const scrollTop =
    //     document.documentElement.scrollTop || document.body.scrollTop
    //   // 定义当前点亮的导航下标
    //   let navIndex = 0
    //   for (let n = 0; n < offsetTopArr.length; n++) {
    //     // 如果 scrollTop 大于等于第n个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
    //     // 那么此时导航索引就应该是n了
    //     if (scrollTop >= offsetTopArr[n] - 100) {
    //       navIndex = n
    //     }
    //   }
    //   this.viewIndex = navIndex + 1
    // },

    // onLeave(origin, destination, direction) {
    //   if (origin.isLast === true && direction === 'up') {
    //     console.log('加固')
    //     this.$refs.fullPage.api.setResponsive(false)
    //   }
    //   if (origin.isFirst === true && direction === 'down' && this.isMobile) {
    //     this.$refs.fullPage.api.setResponsive(false)
    //   }

    //   if (destination.isFirst === true && direction === 'up' && this.isMobile) {
    //     this.$refs.fullPage.api.setResponsive(false)
    //   }
    // },

    // afterLoad(origin, destination, direction) {
    //   this.indigatorIndex = destination.index
    //   if (destination.isLast === true && direction === 'down') {
    //     console.log('解除')
    //     this.$refs.fullPage.api.setResponsive(true)
    //   }
    // },
  },
}
</script>
