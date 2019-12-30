<template>
  <div class="section1">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s1/bg.jpg" alt class="img"/>
        <img src="./s1/bg2.jpg" alt class="img fix mix" data-aos="fade" data-aos-delay="200" />
        <img src="./s1/bg3.png" alt class="img" data-aos="fade" data-aos-delay="400" />
        <img src="./s1/img1.png" alt class="img fix" data-aos="fade" data-aos-delay="600" />
        <img src="./s1/logo.png" alt="頤昌豐岳" class="img" data-aos="fade" data-aos-delay="700" />
        <img src="./s1/text1.png" alt="雙語校園｜無瑕景觀｜ 豐居久安" class="img" data-aos="fade" data-aos-delay="900" />
        <img src="./s1/title.png" alt="早鳥豐收價 24.8萬起" class="img" data-aos="fade" data-aos-delay="800" />
      </div>
      <div v-if="isMobile">
        <img src="./s1/mo/bg.jpg" alt class="img" />
        <img src="./s1/mo/bg2.jpg" alt class="img fix mix" />
        <img src="./s1/mo/bg3.png" alt class="img" />
        <img src="./s1/mo/logo.png" alt class="img" />
        <img src="./s1/mo/text1.png" alt class="img" />
        <img src="./s1/mo/title.png" alt class="img" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
}

.img {
  width: 100vw;
  height: auto;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  display: block;
  &.fix {
    position: fixed;
  }

  &.mix {
    mix-blend-mode: multiply;
  }
  &:nth-child(1) {
    position: relative;
  }
}

.girl2 {
  animation: girl 2s linear 2s infinite;
}

@keyframes girl {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
  }

  .img {
    &:nth-child(1) {
      position: relative;
      height: calc(100vw * (636 / 375));
    }
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
    }
  },

  computed: {
  },

  methods: {},

  created() {},
  mounted() {
  },
}
</script>
