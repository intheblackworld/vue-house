<template>
  <div class="section2">
    <div class="bg fullscreen">
      <div v-if="!isMobile">
        <img src="./s6/1o1.png" alt="追求卓越" class="bg-img" />
        <img src="./s6/2o1.png" alt="Alfa-Safe耐震系統工法" class="bg-img" />
        <img src="./s6/2o2.png" alt="SPEED作業效率化" class="bg-img" />
        <img src="./s6/2o3.png" alt="SIMPLE防呆配件化" class="bg-img" />
        <img src="./s6/2o4.png" alt="STANDARD規格標準化" class="bg-img" />
        <img src="./s6/3o1.png" alt="SYSTEM系統規則化" class="bg-img" />
      </div>
      <div v-else>
        <!-- <img src="./s2/mo/1.png" alt="耘耕美築 恆久淳萃 公園綠景第一排" class="bg-img" />
        <img src="./s2/mo/2.gif" alt="耘耕美築 恆久淳萃 公園綠景第一排" class="bg-img" /> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background: url('./s6/bg.jpg');
  background-size: cover;
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
    background: url('./s6/mo/bg.jpg');
    height: 100%;
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

  methods: {},
}
</script>
