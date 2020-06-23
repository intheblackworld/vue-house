<template>
  <div class="home no-padding-top">
    <Loading :loading="load" />
    <!-- <SideNavigation v-if="isSide" />
    <Navigation v-else /> -->
    <Indigator :viewIndex="viewIndex" />
    <!-- <full-page
      ref="fullPage"
      :options="options"
      id="fullpage"
    > -->
    <div
      class="section"
      id="section1"
    >
      <Section1 />
    </div>
    <div
      class="section"
      id="section2"
    >
      <Section2 />
    </div>
    <div
      class="section"
      id="section3"
    >
      <Section3 />
    </div>
    <div
      class="section"
      id="section4"
    >
      <Section4 />
    </div>
    <div
      class="section"
      id="section5"
    >
      <Section5 />
    </div>
    <div
      class="section"
      id="section6"
    >
      <Section6 />
    </div>
    <div
      class="section"
      id="section7"
    >
      <Section7 />
    </div>
    <div
      class="section"
      id="section8"
    >
      <Section8 />
    </div>
    <!-- </full-page> -->
    <ContactSection
      class="section"
      id="contact"
    />
    <MobileNav />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Playball&display=swap');
@import '../assets/style/variableColor.scss';

.section,
.section .fp-slide,
.section .fp-tableCell {
  height: auto !important;
}
</style>

<script>
// @ is an alias to /src
// import Navigation from '@/layouts/Navigation.vue'
import { isMobile } from '@/utils'
// import SideNavigation from '@/layouts/SideNavigation.vue'
import ContactSection from '@/layouts/ContactSection.vue'
import MobileNav from '@/layouts/MobileNav.vue'
import Loading from '@/components/Loading.vue'
import Indigator from '@/components/Indigator.vue'

import Section1 from '@/projects/tsht/Section1.vue'
import Section2 from '@/projects/tsht/Section2.vue'
import Section3 from '@/projects/tsht/Section3.vue'
import Section4 from '@/projects/tsht/Section4.vue'
import Section5 from '@/projects/tsht/Section5.vue'
import Section6 from '@/projects/tsht/Section6.vue'
import Section7 from '@/projects/tsht/Section7.vue'
import Section8 from '@/projects/tsht/Section8.vue'

export default {
  name: 'home',
  components: {
    Loading,
    Indigator,
    // Navigation,
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
    Section8,
  },

  data() {
    return {
      isMobile,
      isSide: false,
      load: true,
      viewIndex: 0,
      // action: {
      //   moveTo: () => {},
      // },

      // indigatorIndex: 0,
      // options: {
      //   menu: '#menu',
      //   anchors: [],
      //   scrollBar: true,
      //   onLeave: this.onLeave,
      //   afterLoad: this.afterLoad,
      //   continuousHorizontal: true,

      //   // navigation: true,
      //   // sectionsColor: ['#41b883', '#ff5f45', '#0798ec'],
      // },
    }
  },
  created() {
    // setTimeout(() => {
    //   this.load = false
    // }, 500)
    window.addEventListener('load', event => {
      this.load = false
    })
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll, false)
    // this.action = this.$refs.fullPage.api
    // if (this.isMobile) {
    //   this.$refs.fullPage.api.setResponsive(true)
    // }
  },
  methods: {
    onDone() {
      console.log('done')
    },
    onScroll() {
      // 获取所有锚点元素
      const navContents = document.querySelectorAll('.section')
      // 所有锚点元素的 offsetTop
      const offsetTopArr = []
      navContents.forEach(item => {
        offsetTopArr.push(item.offsetTop)
      })
      // 获取当前文档流的 scrollTop
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      // 定义当前点亮的导航下标
      let navIndex = 0
      for (let n = 0; n < offsetTopArr.length; n++) {
        // 如果 scrollTop 大于等于第n个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
        // 那么此时导航索引就应该是n了
        if (scrollTop >= offsetTopArr[n] - 100) {
          navIndex = n
        }
      }
      // console.log(navIndex)
      this.viewIndex = navIndex + 1
    },

    // onLeave(origin, destination, direction) {
    //   if (!this.isMobile) {
    //     if (origin.isLast === true && direction === 'up') {
    //       console.log('加固')
    //       this.$refs.fullPage.api.setResponsive(false)
    //     }
    //     if (origin.isFirst === true && direction === 'down' && this.isMobile) {
    //       this.$refs.fullPage.api.setResponsive(false)
    //     }

    //     if (
    //       destination.isFirst === true &&
    //       direction === 'up' &&
    //       this.isMobile
    //     ) {
    //       this.$refs.fullPage.api.setResponsive(false)
    //     }
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
