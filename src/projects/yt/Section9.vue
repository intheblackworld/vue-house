<template>
  <div class="section9">
    <div class="bg fullscreen">
      <div v-if="!isMobile">
        <img src="./s9/1.png" alt="耘耕美築 恆久淳萃 公園綠景第一排" class="bg-img" />
        <img src="./s9/2.png" alt="耘耕美築 恆久淳萃 公園綠景第一排" class="bg-img" />
        <img src="./s9/3.png" alt="耘耕美築 恆久淳萃 公園綠景第一排" class="bg-img" />
        <img src="./s9/4.png" alt="◆ 鋼筋續接等級 台北101規格" class="bg-img" />
        <img src="./s9/5.png" alt="建築功力最深厚 二十年工程紮馬步" class="bg-img" />
        <img src="./s9/6.png" alt="◆ 嚴守試水時間 十年防水保固" class="bg-img" />
        <img src="./s9/7.png" alt="◆ 八年室內粉刷 常保空間如新" class="bg-img" />
        <img src="./s9/8.png" alt="◆ 主柱圍束強化 增加鋼筋用量" class="bg-img" />
        <img src="./s9/9.png" alt="◆ 落實鋼筋綁紮 要求結構無虞" class="bg-img" />
        <img src="./s9/10.png" alt="◆ 專業結構外審 安全雙重把關" class="bg-img" />
        <img src="./s9/11.png" alt="◆ 嚴守工程標準 高磅數混凝土" class="bg-img" />
        <img src="./s9/12.png" alt="建築功力最深厚 二十年工程紮馬步" class="bg-img" />
        <img src="./s9/13.png" alt="建築功力最深厚 二十年工程紮馬步" class="bg-img" />
        <img src="./s9/14.png" alt="建築功力最深厚 二十年工程紮馬步" class="bg-img" />
        <img src="./s9/15.png" alt="建築功力最深厚 二十年工程紮馬步" class="bg-img" />
        <img src="./s9/16.png" alt="建築功力最深厚 二十年工程紮馬步" class="bg-img" />
        <img src="./s9/17.png" alt="建築功力最深厚 二十年工程紮馬步" class="bg-img" />
      </div>
      <div v-else>
        <!-- <img src="./s9/mo/img.gif" alt="耘耕美築 恆久淳萃 公園綠景第一排" class="bg-img" />
        <img src="./s9/mo/2.png" alt="耘耕美築 恆久淳萃 公園綠景第一排" class="bg-img" />
        <img src="./s9/mo/3.png" alt="耘耕美築 恆久淳萃 公園綠景第一排" class="bg-img" />-->
        <!-- <img src="./s9/mo/4.png" alt="耘耕美築 恆久淳萃 公園綠景第一排" class="bg-img" /> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background: url('./s9/bg.jpg');
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
    // background: url('./s9/0/bg.jpg');
    height: 100%;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section9',

  data() {
    return {
      isMobile,
    }
  },

  methods: {},
}
</script>