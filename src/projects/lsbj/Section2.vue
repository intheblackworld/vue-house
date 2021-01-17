<template>
  <div class="section2">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s2/bg.jpg" alt="全球聚焦前金區  臨海都市新傳奇" class="img" data-aos="fade" data-aos-delay="400">
        <div class="text"><h3>全球聚焦前金區  臨海都市新傳奇</h3><p>國家級建設陸續到位，高雄的前景在亞灣，亞灣的精華就在前金區。漢神大立雙時尚生活圈，雙站四線捷運未來齊聚加持，珍稀地段價值創造極上置產CP值。</p>
</div>
        <!--<img src="./s1/logo.png" alt="頤昌豐岳" class="img" data-aos="fade" data-aos-delay="700" /> -->
      </div>
      <div v-if="isMobile">
        <img src="./s2/mo/bg.jpg" alt="全球聚焦前金區 臨海都市新傳奇" class="img" data-aos="fade" data-aos-delay="400">
        <!-- <img src="./s2/mo/t.png" alt="放眼世界頂級豪宅，能夠成就非凡獨特珍稀價值，唯有無法複製的景觀，港灣海景調色、壽山濃綠寫意、雄女青青校園，永恆無垠山河海景觀，一如東京港區，國際同步創造臨海都市新傳奇。" class="img" data-aos="fade" data-aos-delay="600">
        -->
        <div class="text"><h3>全球聚焦前金區<br>臨海都市新傳奇</h3><p>國家級建設陸續到位，高雄的前景在亞灣，亞灣的精華就在前金區。漢神大立雙時尚生活圈，雙站四線捷運未來齊聚加持，珍稀地段價值創造極上置產CP值。</p>
</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
  z-index: 2;
  overflow: hidden;
  height: 100vh;
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
    height: 100vh;
  }
}
.text{width:40vw;background:#0149 url('./s2/title.png') no-repeat;position: absolute;text-align:left;
font-size:0.92vw;line-height: 1.6;bottom:0; right: 0;padding: 2.7em 2em 0 3em;right: 0;background-size: 65em auto;

h3{color: #fff;font-size: 1.7em;padding: 0 0 0.8em 3em;}
p{color: rgba(255,255,255, 0.9);margin: 0 2em 3em 0;}
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
    height:calc(100vh - 63px);
  }
  .img {
  &:nth-child(1) {
  //  height:calc(100vh - 63px);
  height: auto;
  }
  }
.text{width:auto;background-image:url('./s2/mo/titleall.png');
background-color: #0140;
background-size: 100% auto;font-size:3.8vw;top:50%; left: 0;padding: 0 1em 0 1.7em;}
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
