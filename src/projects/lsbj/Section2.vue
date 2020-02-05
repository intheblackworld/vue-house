<template>
  <div class="section2">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s2/bg.jpg" alt="山河海匯 世界極景總和" class="img" data-aos="fade" data-aos-delay="400">
        <img src="./s2/text.png" alt="放眼世界頂級豪宅，能夠成就非凡獨特珍稀價值，唯有無法複製的景觀，港灣海景調色、壽山濃綠寫意、雄女青青校園，永恆無垠山河海景觀，一如東京港區，國際同步創造臨海都市新傳奇。" class="img" data-aos="fade" data-aos-delay="600">
        <!-- <img src="./s1/logo.png" alt="頤昌豐岳" class="img" data-aos="fade" data-aos-delay="700" /> -->
      </div>
      <div v-if="isMobile">
        <img src="./s2/mo/bg.jpg" alt="山河海匯 世界極景總和" class="img" data-aos="fade" data-aos-delay="400">
        <img src="./s2/mo/t.png" alt="放眼世界頂級豪宅，能夠成就非凡獨特珍稀價值，唯有無法複製的景觀，港灣海景調色、壽山濃綠寫意、雄女青青校園，永恆無垠山河海景觀，一如東京港區，國際同步創造臨海都市新傳奇。" class="img" data-aos="fade" data-aos-delay="600">
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

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .text {
    width: calc(100vw * 595 / 1920);
    right: calc(100vw * 202 / 1920);
  }
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

  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
