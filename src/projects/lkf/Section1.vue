<template>
  <div class="section1">
    <Loading :loading="loading" />
    <!-- 背景圖覽家仔 -->
    <!-- <div class="lazy-bg fullscreen" v-lazy:background-image="require('./s1_bg.jpg')">
      
    </div>-->
    <section v-scroll-reveal.reset="$fadeInDown()">
      <img src="./s1_bg.jpg" class="img" />
      <img src="./s1_footer.png" class="img" />
      <img src="./s1_bg_m.jpg" class="imgM" />
      <img src="./s1_footer_m.png" class="imgM" />
    </section>
  </div>
</template>
<style lang="scss" scoped>
.img {
  display: block;
  width: 100vw;
}

.imgM {
  width: 100vw;
  display: block;
  display: none;
}

@media screen and (max-width: 767px) {
  .img {
    display: none;
  }
  .imgM {
    display: block;
  }
}
</style>

<script>
// @ is an alias to /src
import Loading from '@/components/Loading.vue'
import { setTimeout } from 'timers'

export default {
  name: 'section1',
  components: {
    Loading,
  },

  data() {
    return {
      loading: false,
    }
  },

  methods: {},

  created() {
    this.$Lazyload.$on('loaded', ({ el, src }) => {
      setTimeout(() => {
        if (this.loading) {
          this.loading = false
        }
      }, 500)
    })
  },
}
</script>
