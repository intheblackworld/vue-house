<template>
  <div class="home no-padding-top">
    <!-- <img class="og" src="@/projects/yjy/all/og.jpg" :alt="`${info.caseName}_ogimg`"> -->
    <Loading :loading="load" />
    <!-- <SideNavigation /> -->
    <Navigation />
    <!-- <Indigator :viewIndex="viewIndex" /> -->
    <!-- <full-page
      ref="fullPage"
      :options="options"
      id="fullpage"
    > -->
    <!-- <LeafFlow /> -->
    <div class="bg1">
    <vue-lazy-component class="section relative" id="section1" @init="init">
      <Section1 />
    </vue-lazy-component>
<!--
    <vue-lazy-component class="section" id="section2">
      <Section2 />
    </vue-lazy-component> 


<VideoSection1  id="section2"
      :playBtn="require('@/projects/yjy/video/play-btn.png')"
      title="建築×美學影片"
      :close="require('@/projects/yjy/video/close.png')"
      :arrows="[require('@/projects/yjy/video/arrow-left.png'), require('@/projects/yjy/video/arrow-right.png')]"
      :slideList="[
        {
          title: '恆鑽地段奢美居',
          img: require('@/projects/yjy/video/2.jpg'),
          video: 'https://www.youtube.com/embed/-60Gqkr3TtU?&enablejsapi=1&playerapiid=ytplayer',
          isPlay: false,
        },
        {
          title: '打造有溫度的家',
          img: require('@/projects/yjy/video/3.jpg'),
          video: 'https://www.youtube.com/embed/d7aWvSn2tQc?&enablejsapi=1&playerapiid=ytplayer',
          isPlay: false,
        },
        {
          title: '樣品屋私藏設計',
          img: require('@/projects/yjy/video/1.jpg'),
          video: 'https://www.youtube.com/embed/9UEKBWJladU?&enablejsapi=1&playerapiid=ytplayer',
          isPlay: false,
        },
      ]"
    />
    <vue-lazy-component
      class="section"
      id="section3"
    >
      <Section3 :viewIndex="viewIndex" />
    </vue-lazy-component>
-->


    <vue-lazy-component
      class="section"
      id="section4"
    >
      <Section4 />
    </vue-lazy-component>
    <vue-lazy-component
      class="section"
      id="section5"
    >
      <Section5 />
    </vue-lazy-component>
  </div>
    <vue-lazy-component
      class="section"
      id="section6"
    >
      <Section6 />
    </vue-lazy-component>
     <vue-lazy-component
      class="section"
      id="section7"
    >
      <Section7 />
    </vue-lazy-component>
<!--     
     <vue-lazy-component
      class="section"
      id="section8"
    >
      <Section8 />
    </vue-lazy-component>

    <vue-lazy-component
      class="section"
      id="section9"
    >
    <Section9 />
    </vue-lazy-component>
     
    <vue-lazy-component
      class="section"
      id="section10"
    >
    <Section10 />
    </vue-lazy-component>
    <vue-lazy-component
      class="section"
      id="section11"
    >
    <Section11 />
    </vue-lazy-component>
  <vue-lazy-component
      class="section relative"
      id="section10"
      style="z-index: 3;"
    >
      <Section10 />
    </vue-lazy-component>-->
    <!-- <vue-lazy-component
      class="section"
      id="section11"
    >
      <Section11 />
    </vue-lazy-component> -->
    <div class="section" id="contact">
      <ContactSection />
    </div>
    <MobileNav />
  </div>
</template>

<style lang="scss">
// @import url('https://fonts.googleapis.com/css?family=Playball&display=swap');
@import '../assets/style/variableColor.scss';
@import '@/assets/style/function.scss';

.section,
.section .fp-slide,
.section .fp-tableCell {
  height: auto !important;
}
#contact{z-index: 3;}
.og{position: absolute;width:1px;}

/*
.bg1 {
//padding-top: $nav_pc_height;
position: relative;
  // overflow: hidden;//試底下多的那塊哪來的
    background:url("~@/projects/yjy/s1/bg.jpg") top center;
&::after{content: "";clear: both;display: block;}
}

@media screen and (max-width: 767px) {

.bg1 {
    background-size: 250% auto;
}



}
*/



</style>

<script>
// @ is an alias to /src
import $ from 'jquery'
import info from '@/info'
import Navigation from '@/layouts/Navigation.vue'
import { isMobile } from '@/utils'
// import SideNavigation from '@/layouts/SideNavigation.vue'
import ContactSection from '@/layouts/ContactSection.vue'
import MobileNav from '@/layouts/MobileNav.vue'
import Loading from '@/components/Loading.vue'
import Indigator from '@/components/Indigator.vue'
// import LeafFlow from '@/components/LeafFlow.vue'

import Section1 from '@/projects/yjy/Section1.vue'
import Section2 from '@/projects/yjy/Section2.vue'
import Section3 from '@/projects/yjy/Section3.vue'
import Section4 from '@/projects/yjy/Section4.vue'
import Section5 from '@/projects/yjy/Section5.vue'
import Section6 from '@/projects/yjy/Section6.vue'
import Section7 from '@/projects/yjy/Section7.vue'
import Section8 from '@/projects/yjy/Section8.vue'
import Section9 from '@/projects/yjy/Section9.vue'
/* 
import Section10 from '@/projects/yjy/Section10.vue'
import Section10 from '@/projects/yjy/Section10.vue'
import Section11 from '@/projects/yjy/Section11.vue' */
import VideoSection1 from '@/components/VideoSection1.vue'

export default {
  name: 'home',
  components: {
    Loading,
    // Indigator,
    Navigation,
    // SideNavigation,
    // LeafFlow,
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
    /* 
    Section10,
    Section11,
    Section11,
    */
    VideoSection1,
  },
  data() {
    return {
      info,
      isMobile,
      isSide: false,
      load: true,
      viewIndex: 0,
      // action: {
      //   moveTo: () => {},
      // },
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
    $(document).ready(() => {
      // Images loaded is zero because we're going to process a new set of images.
      var imagesLoaded = 0
      // Total images is still the total number of <img> elements on the page.
      var totalImages = $('img').length

      const allImagesLoaded = () => {
        this.load = false
      }
      const imageLoaded = () => {
        imagesLoaded++
        if (imagesLoaded == totalImages) {
          allImagesLoaded()
        }
      }
      $('img').each(function(idx, img) {
        $('<img>')
          .on('load', imageLoaded)
          .attr('src', $(img).attr('src'))
      })
    })
    // window.location = "https://ywh.nhc888.com.tw/"
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll, false)
    // this.action = this.$refs.fullPage.api
    // if (this.isMobile) {
    //   this.$refs.fullPage.api.setResponsive(true)
    // }
    
  },
  methods: {
    init() {},
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
      if (this.viewIndex === navIndex + 1) {
        this.viewIndex = navIndex + 1
      }
      // this.viewIndex = navIndex + 1
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
