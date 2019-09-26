<template>
  <div class="section2">
    <div class="bg fullscreen">
      <div v-if="!isMobile">
        <img src="./s2/1.png" alt="耘耕美築 恆久淳萃 公園綠景第一排" class="bg-img" />
        <img src="./s2/2.gif" alt="耘耕美築 恆久淳萃 公園綠景第一排" class="bg-img" />
        <img src="./s2/t1.png" alt="【知足】黃國書" class="bg-img" />
        <img src="./s2/t2.png" alt="東方而生的建築思維" class="bg-img" />
        <img src="./s2/t3.png" alt="【相信彎腰低頭，耕耘才有收穫】" class="bg-img" />
        <img src="./s2/t4.png" alt="【樸實自有華美，領跑品牌之路】" class="bg-img" />
      </div>
      <div v-else>
        <img src="./s2/mo/1.png" alt="耘耕美築 恆久淳萃 公園綠景第一排" class="bg-img" />
        <img src="./s2/mo/2.gif" alt="耘耕美築 恆久淳萃 公園綠景第一排" class="bg-img" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background: url('./s2/bg.jpg');
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
    background: url('./s2/mo/bg.jpg');
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
