<template>
  <div class="section4">
    <div class="bg">
      <div v-if="!isMobile">
        <img src="./s4/1.png" alt="耘耕美築 恆久淳萃 公園綠景第一排" class="bg-img" />
        <img src="./s4/2.png" alt="耘耕美築 恆久淳萃 公園綠景第一排" class="bg-img" />
        <img src="./s4/3.png" alt="耘耕美築 恆久淳萃 公園綠景第一排" class="bg-img" />
        <img src="./s4/4.png" alt="耘耕美築 恆久淳萃 公園綠景第一排" class="bg-img" />
        <img src="./s4/5.png" alt="耘耕美築 恆久淳萃 公園綠景第一排" class="bg-img" />
        <img src="./s4/t1.png" alt="淡江大橋連接台北都心生活" class="bg-img" />
        <img src="./s4/t2.png" alt="【十分鐘快意馳騁淡江大橋】" class="bg-img" />
        <img src="./s4/t3.png" alt="【放映浪漫淡水美麗新影城】" class="bg-img" />
        <img src="./s4/t4.png" alt="【金鬱金香酒店、葛林之森、雲門舞集】" class="bg-img" />
      </div>
      <div v-else>
        
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background: url('./s4/bg.jpg');
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
    background: url('./s4/mo/bg.jpg');
    height: 100%;
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

  methods: {},
}
</script>
