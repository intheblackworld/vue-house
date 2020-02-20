<template>
  <div class="section13">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s13/資產 13.png" alt class="text" data-aos="fade" data-aos-delay="200" />
        <img src="./s13/bottom.png" alt class="img" />
      </div>
      <div v-if="isMobile">
        <img src="./s13/資產 13.png" alt class="img" data-aos="fade" data-aos-delay="200" />
        <img src="./s13/mo/bottom.png" alt class="img" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background:url(./s12/bg.jpg) fixed;
  background-size: cover;
  &:before{
    font-size:12px;
   content:"未經同意，不得轉載";
   display:block;
   position: absolute;bottom:0.5em;right:1.5em;z-index: 3;color:rgba(120, 80, 0, 0.5);
   }
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
  top:calc(100vw * 100 / 1920);
  width: calc(100vw * 472 / 1920);
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .text {
    top: 50px;
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-size:100% auto ;
    background-image: url('./s13/mo/bg.jpg');
  &:before{bottom:calc(100vw * 20 / 375);
   }
  }

  .img {
    &:nth-child(1) {
      position: relative;
      width: calc(100vw * (242 / 375));
      margin: 0 auto;
      padding-top: 25px;
    }

    &:nth-child(2) {
      position: relative;
      margin-top: -50px;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
export default {
  name: 'section13',

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
