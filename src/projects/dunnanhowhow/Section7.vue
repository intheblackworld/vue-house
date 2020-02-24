<template>
  <div class="section7">
    <div class="bg relative">
      <div v-if="!isMobile">
        <div class="relative">
          <img src="./s7/1/bg.jpg" alt class="img" />
          <img src="./s7/1/img.jpg" alt />
          <div class="text">
            <div>
              <div class="title">精品挑高4米2飯店大廳</div>
              <div class="desc">穿上低調奢華，演繹流金歲月社交場，尊寵每個回家的主人。</div>
            </div>
          </div>
        </div>

        <div class="relative">
          <img src="./s7/2/bg.jpg" alt class="img" />
          <img src="./s7/2/img.jpg" alt />
          <div class="text">
            <div>
              <div class="title">
                空中花火微醺
                <span>Lounge Bar</span>
              </div>
              <div class="desc">鳥瞰整座城市，101跨年煙火獨家包廂，擺上桌椅三五好友聚會微醺，建築中最性感的華麗休閒帶。</div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isMobile">
        <div class="relative">
          <img src="./s7/1/bg_m.jpg" alt class="img" />
          <img src="./s7/1/img.jpg" alt />
          <div class="text">
            <div class="title">精品挑高4米2<br />飯店大廳</div>
            <div class="desc">穿上低調奢華，演繹流金歲月社交場，尊寵每個回家的主人。</div>
          </div>
        </div>
        <div class="relative">
          <img src="./s7/2/bg_m.jpg" alt class="img" />
          <img src="./s7/2/img.jpg" alt />
          <div class="text">
            <div class="title">
                空中花火微醺<br />
                <span>Lounge Bar</span>
              </div>
              <div class="desc">鳥瞰整座城市，101跨年煙火獨家包廂，擺上桌椅三五好友聚會微醺，建築中最性感的華麗休閒帶。</div>
          </div>
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

img {
  position: absolute;
  width: calc(100vw * 1210 / 1920);
  height: calc(100vw * 960 / 1920);
  left: 0;
  top: 0;
}

.text {
  position: absolute;
  width: calc(100vw * 710 / 1920);
  height: calc(100vw * 960 / 1920);
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .title {
    width: calc(100vw * 440 / 1920);
    font-size: calc(100vw * 36 / 1920);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 6.48px;
    text-align: left;
    color: #b8a57e;
    margin-bottom: 10px;
    white-space: nowrap;
    span {
      letter-spacing: 0px;
    }
  }

  .desc {
    width: calc(100vw * 440 / 1920);
    font-size: calc(100vw * 18 / 1920);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
  }

  img {
    width: 100vw;
    height: auto;
  }

  .text {
    position: absolute;
    width: 100vw;
    height: calc(100vw * 260 / 375);
    bottom: 0;
    top: auto;
    flex-wrap: wrap;
    align-content: center;

    .title {
      width: calc(100vw * 310 / 375);
      font-size: calc(100vw * 36 / 375);
    }

    .desc {
      width: calc(100vw * 310 / 375);
      font-size: calc(100vw * 18 / 375);
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
export default {
  name: 'section7',

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
