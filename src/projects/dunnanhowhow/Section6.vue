<template>
  <div class="section6">
    <div class="bg relative">
      <div v-if="!isMobile">
        <div class="container">
          <div class="content">
            <div class="avatar">
              <img src="./s6/1/1.jpg" alt />
              <div class="border"></div>
            </div>
            <div class="items">
              <div class="text">
                <div class="title">
                  豪邸御用名家-
                  <br />三十三景觀設計-鄭如珊
                </div>
                <div class="desc">創造人在環境中流動與呼吸的藝術，回歸人文角度，不只是在空間種樹，而是讓人與植物一起涵養共生。</div>
                <div class="desc">
                  代表業績：
                  <br />國泰美術觀道
                  <br />吉美敦南花園
                  <br />三發景悅
                </div>
              </div>
              <div class="imgs">
                <img src="./s6/1/2.jpg" alt="" @click="showDialog(0)">
                <img src="./s6/1/3.jpg" alt="" @click="showDialog(1)">
                <img src="./s6/1/4.jpg" alt="" @click="showDialog(2)">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isMobile"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
  z-index: 2;
  overflow: hidden;
  background-image: url('./s6/bg.png');
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
  name: 'section6',

  data() {
    return {
      isMobile,
      dialogImg: '',
      imgList: [
        require('./s6/1/2.jpg'),
        require('./s6/1/3.jpg'),
        require('./s6/1/4.jpg'),
        require('./s6/2/2.jpg'),
        require('./s6/2/3.jpg'),
        require('./s6/2/4.jpg'),
        require('./s6/2/5.jpg'),
      ],
      isShow: false,
    }
  },

  computed: {},

  methods: {
    showDialog(index) {
      this.dialogImg = this.imgList[index]
    }
  },

  created() {},
  mounted() {},
}
</script>
