<template>
  <div class="home no-padding-top">
    <div ref="gtmNoScript" />
    <Loading :loading="load" />
    <!-- <SideNavigation v-if="isSide" /> -->
    <Navigation :min="isNavMin" />
    <img src="../projects/yb1/s1/bg.jpg" alt="" class="s1-img">
    <div id="section1">
      <Section1 />
    </div>
    <div class="linear-bg">
      <div id="section2">
        <Section2 />
      </div>
      <div id="section3">
        <Section3 />
      </div>
      <div id="section4">
        <Section4 />
      </div>
    </div>
    <div id="section5">
      <Section5 />
    </div>
    <div id="section6">
      <Section6 />
    </div>
    <div id="section7">
      <Section7 />
    </div>
    <div id="section8">
      <Section8 />
    </div>
    <ContactSection />
    <!-- <SimpleOrder /> -->
    <MobileNav />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Playball&display=swap');
@import '~@/assets/style/function.scss';
.s1-img {
  width: auto;
  height: 200vh;
  min-height: size(2160);
  display: block;
  position: absolute;
  top: 0;
  left: size((1920 - 2440) / 2);

  &:nth-child(1) {
    position: relative;
  }
}

.linear-bg {
  width: size(1800);
  // height: 3299px;
  opacity: 0.95;
  clip-path: polygon(0 0,100% 0%,100% 100%,10% 100%,0% 90%);
  background-image: linear-gradient(to bottom, rgba(255, 87, 0, 0.85), #fa0032 100%, #fa0032 100%);
  margin: 0 auto 56px;
}
</style>

<script>
// @ is an alias to /src
import Navigation from '@/layouts/Navigation.vue'
import ContactSection from '@/layouts/ContactSection.vue'
import MobileNav from '@/layouts/MobileNav.vue'
import Loading from '@/components/Loading.vue'
import gtm from '@/mixins/gtm.js'

import Section1 from '@/projects/yb1/Section1.vue'
import Section2 from '@/projects/yb1/Section2.vue'
import Section3 from '@/projects/yb1/Section3.vue'
import Section4 from '@/projects/yb1/Section4.vue'
import Section5 from '@/projects/yb1/Section5.vue'
import Section6 from '@/projects/yb1/Section6.vue'
import Section7 from '@/projects/yb1/Section7.vue'
import Section8 from '@/projects/yb1/Section8.vue'
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
    Section3,
    Section4,
    Section5,
    Section6,
    Section7,
    Section8,
  },

  data() {
    return {
      isSide: true,
      isNavMin: false,
      load: true,
    }
  },
  created() {
    window.addEventListener('load', event => {
      this.load = false
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
    onDone() {
      console.log('done')
    },

    showCallDialog() {
      // if (!this.isMobile) return
      this.isShowCallDialog = true
    },

    onScroll() {
      // // 获取所有锚点元素
      // const navContents = document.querySelectorAll('.section')
      // // 所有锚点元素的 offsetTop
      // const offsetTopArr = []
      // navContents.forEach(item => {
      //   offsetTopArr.push(item.offsetTop)
      // })
      // 获取当前文档流的 scrollTop
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      // 定义当前点亮的导航下标
      // let navIndex = 0
      if (scrollTop > 200) {
        this.isNavMin = true
      } else {
        this.isNavMin = false
      }
      // for (let n = 0; n < offsetTopArr.length; n++) {
      //   // 如果 scrollTop 大于等于第n个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
      //   // 那么此时导航索引就应该是n了
      //   if (scrollTop >= offsetTopArr[n] - 100) {
      //     navIndex = n
      //   }
      // }
      // console.log(navIndex)
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
