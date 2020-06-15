<template>
  <div class="section1">
    <div class="bg relative">
      <img
        src="./1.png"
        alt=""
        class="img"
        v-if="!isMobile"
      >
      <img
        src="./1_m.png"
        alt=""
        class="img"
        v-else
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
// for svg
</style>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
  overflow: hidden;
  background-color: #ab977f;
  height: 100vh;
}
.img {
  width: auto;
  height:100vh;
  position: absolute;
  left:50%;transform: translateX(-50%);
  top: 0;
  object-fit:auto 100%;
  display: block;

  &:nth-child(1) {
    position: relative;
    // height: 100vh;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    position: relative;
  }
.img {
  object-fit: cover;
}
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
      isMobile,
      hide: false,
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {
    if (this.isMobile) {
      setTimeout(() => {
        const frame = document.querySelector('.img_bg')
        const content = document.querySelector('.img_bg_c .content')
        console.log(frame)
        console.log(content)
        frame.scrollTo((content.clientWidth * 20) / 100, 0)
      }, 500)

      setTimeout(() => {
        this.hide = false
      }, 700)
    }
  },
}
</script>