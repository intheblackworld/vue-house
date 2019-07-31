<template>
  <div class="section9">
    <div class="bg bg-cover relative fullscreen">
      <div class="container flex-c wrap">
        <div class="title" v-scroll-reveal.reset="$fadeIn()">
          <txt1 />
        </div>
        <div class="relative desc">
          <div v-scroll-reveal.reset="$fadeIn()">
            <icon class="icon txt2" :data="txt2" />
          </div>
          <div class="circle1 absolute" v-scroll-reveal.reset="$fadeIn(300)">
            <txt3 />
          </div>
          <div class="circle2 absolute" v-scroll-reveal.reset="$fadeIn(300)">
            <txt3 />
          </div>
        </div>
      </div>
      <div class="footer flex-c">
        <h3>一層四戶2~3房 31~44坪大尺碼</h3>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  width: 100vw;
  background-image: url('./s9_bg.jpg');
  padding-top: 100px;
}

.container {
  width: 900px;
  margin-top: 0px;
  margin-left: 200px;
}

.title {
  margin-right: 30px;
}

.txt2 {
  width: 372px;
}

.circle1 {
  right: 108px;
  bottom: -7px;
}

.circle2 {
  right: -4px;
  bottom: -7px;
}

.footer {
  width: 100vw;
  background-color: #c82514;
  height: 60px;
  font-size: 34px;
  position: absolute;
  bottom: 0;
  color: #fff;
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
    width: 100vw;
    background-image: url('./s9_bg.jpg');
    padding-top: 70px;
  }

  .container {
    width: 900px;
    margin-top: 0px;
    margin-left: 50px;
  }
}

/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .bg {
    width: 100vw;
    background-image: url('./s9_bg.jpg');
    padding-top: 30px;
  }

  .container {
    width: 100vw;
    margin-left: 0;
    margin-top: 0;
  }

  .title {
    width: 317px;
    margin: 0 auto;
    margin-bottom: 30px;

    svg {
      width: 100%;
    }
  }

  .desc {
    width: 299px;
    margin: 0 auto;
    svg {
      width: 100%;
    }
  }

  .footer {
    font-size: 24px;
  }
  .circle1, .circle2 {
    width: 87px;
    svg {
      width: 100%;
    }
  }
  .circle1 {
    right: 88px;
  }
}
</style>

<script>
import { isMobile } from '@/utils'
import txt1 from './s9_txt_1.vue'
import txt2 from '@/assets/svg/s9_txt2.svg'
import txt3 from './s9_txt_3.vue'

export default {
  name: 'section9',
  components: {
    txt1,
    txt3,
  },

  data() {
    return {
      isMobile,
      txt2,
      txt3,
      slideList: [
        {
          src: require('./s8_img_1.jpg'),
          title: '麗韻門廳，如同飯店宴會Bar',
          desc: '典雅的灰藍色階，鋪陳出飯店般的情緒，崗石與玻璃材質的完美設計',
          btn: '健身空間，喚醒身體的能量',
          goToIndex: 1,
        },
        {
          src: require('./s8_img_2.jpg'),
          title: '健身空間，喚醒身體的能量',
          desc: '兼具健身房與閱覽空間，陪伴孩子閱讀時也鍛鍊自己的身材與線條',
          btn: '麗韻門廳，如同飯店宴會Bar',
          goToIndex: 0,
        },
      ],
    }
  },

  methods: {},
}
</script>
