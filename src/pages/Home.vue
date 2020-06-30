<template>
  <div class="home no-padding-top">
    <div ref="gtmNoScript" />
    <Loading :loading="load" />
    <!-- <SideNavigation v-if="isSide" /> -->
    <Navigation />
    <div id="section1">
      <Section1 />
    </div>
    <!-- <VideoSection1
      :playBtn="require('@/projects/sfdy/video/play-btn.png')"
      title="開箱系列影片"
      :close="require('@/projects/sfdy/video/close.png')"
      :arrows="[require('@/projects/sfdy/video/arrow-left.png'), require('@/projects/sfdy/video/arrow-right.png')]"
      :slideList="[
        {
          title: '釋放壓力，回家就是享受的開始',
          img: require('@/projects/sfdy/video/1.jpg'),
          video: 'https://www.youtube.com/embed/9UEKBWJladU',
          isPlay: false,
        },
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
    /> -->
    <div id="section2">
      <Section2 />
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
import Navigation from '@/layouts/Navigation.vue'
import ContactSection from '@/layouts/ContactSection.vue'
import MobileNav from '@/layouts/MobileNav.vue'
import Loading from '@/components/Loading.vue'
import gtm from '@/mixins/gtm.js'

import Section1 from '@/projects/hoh1/Section1.vue'
import Section2 from '@/projects/hoh1/Section2.vue'
// import SimpleOrder from '@/components/SimpleOrder.vue'

export default {
  name: 'home',
  mixins: [gtm],
  components: {
    Navigation,
    Loading,
    ContactSection,
    MobileNav,
    Section1,
    Section2,
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
