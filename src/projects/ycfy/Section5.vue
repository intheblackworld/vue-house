<template>
  <div class="section4">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s5/text.png" alt class="text" />
        <img src="./s5/bottom.png" alt class="img" />
      </div>
      <div v-if="isMobile">
        <img src="./s5/mo/bottom.png" alt class="img" />
        <img src="./s5/text.png" alt class="text" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url('./s1/bg.jpg');
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

  &.mix {
    mix-blend-mode: multiply;
  }

  &.fix {
    position: fixed;
  }
  &:nth-child(2) {
    position: relative;
  }
}

.text {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 20px;
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
  name: 'section4',

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
