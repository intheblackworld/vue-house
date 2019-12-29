<template>
  <div class="section2">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s2/bg.jpg" alt class="img" />
        <img src="./s2/img.png" alt class="img" />
        <img src="./s2/stitlew.png" alt="全結構工程 十年防水保固" class="img" />
        <img src="./s2/t_bg1.png" alt class="img" />
        <img src="./s2/titlew.png" alt="堅持" class="img" />
      </div>
      <div v-if="isMobile">
        <img src="./s2/mo/img.png" alt class="img" />
        <img src="./s2/mo/stitlew.png" alt="全結構工程 十年防水保固" class="img" />
        <img src="./s2/mo/t_bg1.png" alt class="img" />
        <img src="./s2/mo/titlew.png" alt="堅持" class="img" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
  z-index: 2;
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
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
export default {
  name: 'section2',

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
