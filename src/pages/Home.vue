<template>
  <div class="home">
    <div ref="gtmNoScript" />
    <Loading :loading="loading" />
    <SideNavigation v-if="isSide" />
    <Navigation v-else />
    <div id="section1">
      <Section1 />
    </div>
    <VideoSection1
      :playBtn="require('@/projects/sfdy/video/play-btn.png')"
      title="開箱系列影片"
      :close="require('@/projects/sfdy/video/close.png')"
      :arrows="[require('@/projects/sfdy/video/arrow-left.png'), require('@/projects/sfdy/video/arrow-right.png')]"
      :slideList="[
        {
          title: '內容街景大公開',
          img: require('@/projects/sfdy/video/2.jpg'),
          video: 'https://www.youtube.com/embed/-60Gqkr3TtU?&enablejsapi=1&playerapiid=ytplayer',
          isPlay: false,
        },
        {
          title: '屋內機密大公開',
          img: require('@/projects/sfdy/video/3.jpg'),
          video: 'https://www.youtube.com/embed/d7aWvSn2tQc?&enablejsapi=1&playerapiid=ytplayer',
          isPlay: false,
        },
        {
          title: '回家就是享受的開始',
          img: require('@/projects/sfdy/video/1.jpg'),
          video: 'https://www.youtube.com/embed/9UEKBWJladU?&enablejsapi=1&playerapiid=ytplayer',
          isPlay: false,
        },
      ]"
    />
    <div id="section2">
      <Section2 />
    </div>
    <div id="section3">
      <Section3 />
    </div>
    <div>
      <Section4 />
    </div>
    <div>
      <Section5 />
    </div>
    <div id="section6">
      <Section6 />
    </div>
    <div id="section10">
      <Section10 />
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

    <div id="section11">
      <Section11 />
    </div>
    <div id="section12">
      <Section12 />
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
import Loading from '@/components/Loading.vue'
import gtm from '@/mixins/gtm.js'

import Section1 from '@/projects/sfdy/Section1.vue'
import Section2 from '@/projects/sfdy/Section2.vue'
import Section3 from '@/projects/sfdy/Section3.vue'
import Section4 from '@/projects/sfdy/Section4.vue'
import Section5 from '@/projects/sfdy/Section5.vue'
import Section6 from '@/projects/sfdy/Section6.vue'
import Section7 from '@/projects/sfdy/Section7.vue'
import Section8 from '@/projects/sfdy/Section8.vue'
import Section9 from '@/projects/sfdy/Section9.vue'
import Section10 from '@/projects/sfdy/Section10.vue'
import Section11 from '@/projects/sfdy/Section11.vue'
import Section12 from '@/projects/sfdy/Section12.vue'

import VideoSection1 from '@/components/VideoSection1.vue'

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
    Section12,
    VideoSection1,
  },

  data() {
    return {
      isSide: false,
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
