<template>
  <div class="home no-padding-top">
    <Loading :loading="load" />
    <!-- <SideNavigation v-if="isSide" />
    <Navigation v-else /> -->
    <TopIndigator :viewIndex="viewIndex" />
    <!-- <full-page
      ref="fullPage"
      :options="options"
      id="fullpage"
    > -->
    <vue-lazy-component
      class="section"
      id="section1"
    >
      <Section1 />
    </vue-lazy-component>

    <vue-lazy-component
      class="section"
      id="section2"
    >
      <VideoSection
        :playBtn="require('@/projects/sdj1/s2/youtube.png')"
        title="系列影片"
        :close="require('@/projects/jh/s4/close.png')"
        :arrows="[require('@/projects/gydy/arrow-left.png'), require('@/projects/gydy/arrow-right.png')]"
        :slideList="[
        {
          title: '萬眾矚目北高雄<br />百貨版圖新時代',
          img: require('@/projects/sdj1/s2/1.jpg'),
          video: 'https://www.youtube.com/embed/8sbUAwaPYJY',
          isPlay: false,
        },
        {
          title: '明誠文藻雙商圈<br />河堤綠帶散步到',
          img: require('@/projects/sdj1/s2/2.jpg'),
          video: 'https://www.youtube.com/embed/g1u3UUro2VU',
          isPlay: false,
        },
      ]"
      />
    </vue-lazy-component>
    <vue-lazy-component
      class="section"
      id="section4"
    >
      <Section4 />
    </vue-lazy-component>
    <vue-lazy-component
      class="section"
      id="section3"
    >
      <Section3 />
    </vue-lazy-component>

    <vue-lazy-component
      class="section"
      id="section5"
    >
      <Section5 />
    </vue-lazy-component>
    <vue-lazy-component
      class="section"
      id="section7"
    >
      <Section7 />
    </vue-lazy-component>
    <vue-lazy-component
      class="section"
      id="section6"
    >
      <Section6 />
    </vue-lazy-component>
    <vue-lazy-component
      class="section"
      id="section8"
    >
      <Section8 />
    </vue-lazy-component>
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
import _ from 'lodash'
import Navigation from '@/layouts/Navigation.vue'
import { isMobile } from '@/utils'
import SideNavigation from '@/layouts/SideNavigation.vue'
import ContactSection from '@/layouts/ContactSection.vue'
import MobileNav from '@/layouts/MobileNav.vue'
import Loading from '@/components/Loading.vue'
import VideoSection from '@/components/VideoSection.vue'
import TopIndigator from '@/components/TopIndigator.vue'

import Section1 from '@/projects/sdj1/Section1.vue'
// import Section2 from '@/projects/sdj1/Section2.vue'
import Section3 from '@/projects/sdj1/Section3.vue'
import Section4 from '@/projects/sdj1/Section4.vue'
import Section5 from '@/projects/sdj1/Section5.vue'
import Section6 from '@/projects/sdj1/Section6.vue'
import Section7 from '@/projects/sdj1/Section7.vue'
import Section8 from '@/projects/sdj1/Section8.vue'
// import Section9 from '@/projects/sdj/Section9.vue'
// import Section10 from '@/projects/sdj/Section10.vue'
// import Section11 from '@/projects/sdj/Section11.vue'
// import Section12 from '@/projects/sdj/Section12.vue'

export default {
  name: 'home',
  components: {
    Loading,
    TopIndigator,
    VideoSection,
    Navigation,
    SideNavigation,
    ContactSection,
    MobileNav,
    Section1,
    // Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Section7,
    Section8,
    // Section9,
    // Section10,
    // Section11,
    // Section12,
  },

  data() {
    return {
      isMobile,
      isSide: false,
      load: true,
      viewIndex: 1,
      offsetTopArr: [],
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
  },
  mounted() {
    window.addEventListener('load', event => {
      console.log('loaded')
      this.load = false
    })
    window.addEventListener('scroll', _.throttle(this.onScroll, 500), false)
    // 获取所有锚点元素
    const navContents = document.querySelectorAll('.section')
    // 所有锚点元素的 offsetTop
    navContents.forEach(item => {
      this.offsetTopArr.push(item.offsetTop)
    })
  },

  methods: {
    onScroll() {
      // 获取当前文档流的 scrollTop
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      // 定义当前点亮的导航下标
      let navIndex = 0
      for (let n = 0; n < this.offsetTopArr.length; n++) {
        // 如果 scrollTop 大于等于第n个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
        // 那么此时导航索引就应该是n了
        let height = this.isMobile ? 200 : 800
        if (scrollTop >= this.offsetTopArr[n] - height) {
          navIndex = n
        }

        // if (n > 4) {
        //   navIndex = 5
        // }
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
