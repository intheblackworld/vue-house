<template>
  <div>
    <div
      v-if="!isMobile"
      class="section3"
    >
      <img
        src="./s3/bg.jpg"
        alt=""
        class="bg-img"
      >
      <ul class="title absolute">
        <li
          v-for="(text, index) in title_list"
          data-aos="fade-down"
          :data-aos-delay="200 + (index + 1) * 100"
          data-aos-duration="600"
          :key="text"
        >{{text}}</li>
      </ul>
      <h3
        class="desc absolute"
        data-aos="fade-down"
        data-aos-delay="600"
        data-aos-duration="600"
      >
        無敵的大安森林,視野秒秒都在踏青。不必婉美紐約中央公園、不必遙想倫敦海德公園、不必儕身「高持有稅」的大安森林大道,隱忍百户紛擾，這裡才是富貴人家高端置產的秘境！以「低持有税、人文精工、頂級到位」超越大道地產學,為入主大安森林第一環名宅群,開創珍稀入手的優勢,預見未來財高追漲的自由。
      </h3>
    </div>

    <div
      v-if="isMobile"
      class="section3"
    >
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  overflow: hidden;
}

.bg-img {
  width: 100vw;
  height: 100vh;
  min-height: size(900);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;

  &:nth-child(1) {
    position: relative;
  }
}

.title {
  width: size(726);
  top: size(56);
  right: 0;
  left: 0;
  margin: 0 auto;
  li {
    font-size: size(35);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: 2.8px;
    text-align: center;
    color: #231815;
    white-space: nowrap;
  }
}

.desc {
  bottom: size(60);
  right: size(74);
  width: size(484);
  font-size: size(20);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.08;
  letter-spacing: 0.4px;
  text-align: left;
  color: #ffffff;
}

@media only screen and (max-width: 1440px) {
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section3 {
    width: 100vw;
    height: size-m(667);
    background-image: url('./mo/1/bg.jpg');
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: 100vw;
    height: auto;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    object-fit: cover;

    &:nth-child(1) {
      position: relative;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'

export default {
  name: 'section3',

  data() {
    return {
      isMobile,
      isTablet,
      title_list: [
        '找不到理由投反對票⋯',
        '當世界擁有一座森林 價值也找到永恆的晴空',
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
