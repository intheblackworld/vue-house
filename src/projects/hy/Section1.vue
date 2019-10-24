<template>
  <div class="section1">
    <div class="bg">
      <div v-if="!isMobile">
        <!-- <img src="./s1/bg1.png" alt class="bg-img relative" data-aos="fade" data-aos-delay="600" /> -->
        <img src="./s1/bg.jpg" alt class="bg-img" />
        <img src="./s1/b.png" alt class="bg-img b" />
        <img src="./s1/bear.gif" alt class="bear" />
        <img src="./s1/t.png" alt class="bg-img t" />
        <img src="./s1/title.png" alt class="bg-img title" />
        <div
          class="number"
          data-aos-id="ani-number"
          data-aos-offset="50"
          data-aos-delay="0"
          data-aos-duration="500"
          data-aos-mirror="true"
          data-aos-once="false"
        >{{animatedNumber}}
        </div>
      </div>
      <div v-else></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  position: relative;
}
.bg-img {
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  display: block;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.b {
  top: auto;
  bottom: 0;
}
.bear {
  left: 0;
  position: absolute;
  bottom: 0;
}

.title,
.t {
  top: 20%;
}

.number {
  font-size: calc(100vw * 215.8 / 1920);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: -4.32px;
  text-align: center;
  color: #e8db00;
  display: block;
  position: absolute;
  left: 30%;
  top: calc(100% * 540 / 1010);
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .bg {
  }

  .content {
    img {
      display: block;
      margin: 0 auto;
      margin-bottom: 10px;
    }

    .img1 {
      width: calc(100vw * 0.9 * 461 / 496);
    }

    .img2 {
      width: calc(100vw * 0.9 * 496 / 496);
    }

    .img3 {
      width: calc(100vw * 0.9 * 412 / 496);
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import { TweenLite } from 'gsap'

export default {
  name: 'section1',

  data() {
    return {
      isMobile,
      tweenedNumber: 0,
    }
  },

  methods: {},

  mounted() {
    document.addEventListener('aos:in:ani-number', ({ detail }) => {
      TweenLite.to(this.$data, 1.2, { tweenedNumber: 608 })
    })

    document.addEventListener('aos:out:ani-number', ({ detail }) => {
      TweenLite.to(this.$data, 1.2, { tweenedNumber: 0 })
    })
  },

  computed: {
    animatedNumber: function() {
      return this.tweenedNumber.toFixed(0)
    },
  }
}
</script>
