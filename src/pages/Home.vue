<template>
  <div class="home no-padding-top">
    <div ref="gtmNoScript" />
    <Loading :loading="load" />
    <div class="tilt section section-1">
      <div class="title" v-if="!isMobile">
        <img src="./texture/section-1/title1.png" alt="久等了!西門路。" />
        <img src="./texture/section-1/title2.png" alt="台南首發！蔦屋書香跨界住宅 文元學區  2-4房 06-225-6688" />
      </div>
      <div class="title" v-if="isMobile">
        <img src="./mobile-texture/section-1/title1.png" alt="久等了!西門路。" />
        <img src="./mobile-texture/section-1/title2.png" alt="台南首發！蔦屋書香跨界住宅 文元學區  2-4房 06-225-6688" />
      </div>
      <div class="button1">
        <a href=""><img src="./texture/section-1/r-button-1.png" v-scroll-to="{ element: `#contact`, offset: 0 }" alt="立即預約" /></a>
        <a href=""><img src="./texture/section-1/r-button-2.png" alt="立即來電" v-scroll-to="{ element: `#section-bottom`, offset: 0 }" /></a>
      </div>
      <div class="button2" v-if="!isMobile">
        <a href=""><img src="./texture/section-1/c-button.png" alt="立即預約" v-scroll-to="{ element: `#contact`, offset: 0 }" /></a>
      </div>
      <div class="button2" v-if="isMobile">
        <a href=""><img src="./mobile-texture/section-1/c-button.png" alt="立即預約" v-scroll-to="{ element: `#contact`, offset: 0 }" /></a>
      </div>
      <div class="subtitle" v-if="!isMobile">
        <img src="./texture/section-1/title3.png" alt="您對家的夢想是甚麼？ 是奢華享受，是安心安全 孩子唸雙語好學校，有18座公園綠地盡情奔跑，家裡有超級大花園，還有全球最美書店選書
一家子同居三代同堂幸福寬裕的好所在，您的心願，讓 〔西門大院〕 幫您完美實現" />
      </div>
      <div class="subtitle" v-if="isMobile">
        <img src="./mobile-texture/section-1/title3.png" alt="您對家的夢想是甚麼？ 是奢華享受，是安心安全 孩子唸雙語好學校，有18座公園綠地盡情奔跑，家裡有超級大花園，還有全球最美書店選書
一家子同居三代同堂幸福寬裕的好所在，您的心願，讓 〔西門大院〕 幫您完美實現" />
      </div>
      <div class="bg" data-aos="fade-down" data-aos-duration="2000" v-if="!isMobile">
        <img src="./texture/section-1/bg.png" alt="" />
      </div>
      <div class="bg" data-aos="fade-down" data-aos-duration="2000" v-if="isMobile">
        <img src="./mobile-texture/section-1/bg.png" alt="" />
      </div>
    </div>
    <!--分隔-->
    <div class="divider" data-aos="fade-down" data-aos-duration="2000">
      <img src="./texture/divider.png" alt="" v-if="!isMobile" />
      <img src="./mobile-texture/divider.png" alt="" v-else />
    </div>
    <!--滑動區塊-->
    <div class="section section-swiper">
      <div class="swiper-container" data-aos="fade-up" data-aos-duration="1000">
        <div class="swipe-here">
          <img src="./texture/swipe.png" alt="" v-if="!isMobile" />
          <img src="./mobile-texture/swipe.png" alt="" v-else />
        </div>
        <div class="swiper-wrapper text-align-center" v-if="!isMobile">
          <div class="swiper-slide">
            <img src="./texture/section-swiper/s2-1.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="./texture/section-swiper/s2-1.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="./texture/section-swiper/s2-1.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="./texture/section-swiper/s2-1.png" alt="" />
          </div>
        </div>
        <div class="swiper-wrapper text-align-center" v-else>
          <div class="swiper-slide">
            <img src="./mobile-texture/section-swiper/s2-1.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="./mobile-texture/section-swiper/s2-1.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="./mobile-texture/section-swiper/s2-1.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="./mobile-texture/section-swiper/s2-1.png" alt="" />
          </div>
        </div>
      </div>
      <div class="title" data-aos="fade-left" data-aos-duration="1000">
        <p class="swiper-intro-text-1">
          台積電領頭擴大投資南科，古都台南正在3.0翻轉中！<br />
          正西門路核心大道，貫通市心四通八達，15分通勤南科，科技新貴置產首選<br />
          北區鄭子寮重劃區，西門三越商圈、COSTCO商圈、小北商圈繁華匯聚<br />
          未來南山微風精品百貨、台南公園開發案潛力無限，現在入主正是起漲點
        </p>
        <img src="./texture/section-swiper/s2-title.png" alt="2021 許好願，買大院" v-if="!isMobile" />
        <img src="./mobile-texture/section-swiper/s2-title.png" alt="2021 許好願，買大院" v-else />
      </div>
      <div class="swiper-container">
        <div class="feature-title text-align-center">
          <img src="./texture/section-swiper/s3-title.png" alt="" v-if="!isMobile" />
          <img src="./mobile-texture/section-swiper/s3-title.png" alt="" v-else />
        </div>
        <div class="swipe-here">
          <img src="./texture/swipe.png" alt="" v-if="!isMobile" />
          <img src="./mobile-texture/swipe.png" alt="" v-else />
        </div>
        <div class="swiper-wrapper text-align-center" data-aos="fade-up" data-aos-duration="1000" v-if="!isMobile">
          <div class="swiper-slide">
            <img src="./texture/section-swiper/s3-1.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="./texture/section-swiper/s3-1.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="./texture/section-swiper/s3-1.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="./texture/section-swiper/s3-1.png" alt="" />
          </div>
        </div>
        <div class="swiper-wrapper text-align-center" data-aos="fade-up" data-aos-duration="1000" v-else>
          <div class="swiper-slide">
            <img src="./mobile-texture/section-swiper/s3-1.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="./mobile-texture/section-swiper/s3-1.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="./mobile-texture/section-swiper/s3-1.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="./mobile-texture/section-swiper/s3-1.png" alt="" />
          </div>
        </div>
        <div class="swiper-pagination text-align-right"></div>
      </div>
      <div class="title flex-reverse" data-aos="fade-right" data-aos-duration="1000">
        <p class="text-align-right swiper-intro-text-2">
          以往到日本朝聖全球最美書店「蔦屋書店 」，現在在家就能享受<br />
          台南首座與台灣蔦屋書店TSUTAYA BOOKSTORE攜手打造<br />
          將現代和風生活提案帶入〔西門大院〕書香人文空間<br />
          包括四季大花園、台灣蔦屋書房、健身房、兒童遊戲閱覽室<br />
          才藝教室、閱覽室、空中花園等豐富的樂齡共享休閒設施
        </p>
        <img src="./texture/section-swiper/s3-title.png" alt="台日攜手西門大院×臺灣蔦屋" v-if="!isMobile" />
        <img src="./mobile-texture/section-swiper/s3-title.png" alt="台日攜手西門大院×臺灣蔦屋" v-else />
      </div>
      <div class="swiper-container">
        <div class="feature-title text-align-center" data-aos="fade-up" data-aos-duration="1000">
          <img src="./texture/section-swiper/s4-title.png" alt="" v-if="!isMobile" />
          <img src="./mobile-texture/section-swiper/s4-title.png" alt="" v-else />
        </div>
        <div class="swipe-here">
          <img src="./texture/swipe.png" alt="" v-if="!isMobile" />
          <img src="./mobile-texture/swipe.png" alt="" v-else />
        </div>
        <div class="swiper-wrapper text-align-center" data-aos="fade-right" data-aos-duration="1000" v-if="!isMobile">
          <div class="swiper-slide">
            <img src="./texture/section-swiper/s4-1.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="./texture/section-swiper/s4-1.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="./texture/section-swiper/s4-1.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="./texture/section-swiper/s4-1.png" alt="" />
          </div>
        </div>
        <div class="swiper-wrapper text-align-center" data-aos="fade-right" data-aos-duration="1000" v-else>
          <div class="swiper-slide">
            <img src="./mobile-texture/section-swiper/s4-1.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="./mobile-texture/section-swiper/s4-1.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="./mobile-texture/section-swiper/s4-1.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="./mobile-texture/section-swiper/s4-1.png" alt="" />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="title" data-aos="fade-left" data-aos-duration="1000">
        <p class="swiper-intro-text-3">
          座落豪宅林立鄭子寮高級住宅生活聚落，18座公園綠意環繞<br />
          市心難得低密度高綠覆開發，文元國小高升學率明星學區<br />
          禮聘台北名宅大師團隊打造，正西門路凌空24層雙塔地標<br />
          千坪開闊大基地，三面臨路好風光，高坪效精工制震宅<br />
          等待是值得的，鄭子寮最美的日系花園建築，2021即將美好盛開
        </p>
        <img src="./texture/section-swiper/s4-title.png" alt="鄭子寮富人特區 凌空24層制震豪邸" v-if="!isMobile" />
        <img src="./mobile-texture/section-swiper/s4-title.png" alt="鄭子寮富人特區 凌空24層制震豪邸" v-else />
      </div>
    </div>

    <!-- <SideNavigation v-if="isSide" /> -->
    <!-- <Navigation /> -->
    <!-- <div id="section1">
      <Section1 />
    </div>
    <div id="section2">
      <Section2 />
    </div>
    <div id="section3">
      <Section3 />
    </div>
    <div id="section4">
      <Section4 />
    </div>
    <div id="section5">
      <Section5 />
    </div>
    <div id="section6">
      <Section6 />
    </div> -->
    <!-- <div id="section7">
      <Section7 />
    </div> -->
    <ContactSection />
    <!-- <SimpleOrder /> -->
    <!-- <MobileNav /> -->
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Playball&display=swap');
@import url('./css/style.css');
@import url('./css/swiper-bundle.min.css');
</style>

<script>
// @ is an alias to /src
// import Navigation from '@/layouts/Navigation.vue'
import ContactSection from '@/layouts/ContactSection.vue'
import MobileNav from '@/layouts/MobileNav.vue'
import Loading from '@/components/Loading.vue'
import { isMobile } from '@/utils'
import gtm from '@/mixins/gtm.js'

// import Section1 from '@/projects/hg/Section1.vue'
// import Section2 from '@/projects/hg/Section2.vue'
// import Section3 from '@/projects/hg/Section3.vue'
// import Section4 from '@/projects/hg/Section4.vue'
// import Section5 from '@/projects/hg/Section5.vue'
// import Section6 from '@/projects/hg/Section6.vue'
import Section7 from '@/projects/hg/Section7.vue'
// import SimpleOrder from '@/components/SimpleOrder.vue'

export default {
  name: 'home',
  mixins: [gtm],
  components: {
    // Navigation,
    Loading,
    ContactSection,
    MobileNav,
    // Section1,
    // Section2,
    // Section3,
    // Section4,
    // Section5,
    // Section6,
    Section7,
  },

  data() {
    return {
      isMobile,
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

  mounted() {
    console.log($)
  },

  methods: {
    onDone() {
      console.log('done')
    },
  },
}
</script>
