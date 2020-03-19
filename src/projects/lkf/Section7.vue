<template>
  <div class="section7">
    <div class="bg" v-if="!isMobile">
      <div class="container-title">
        <div class="title" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500">自有資金 超高投報</div>
        <hr data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500" />
        <div class="desc" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1500">Intelligent Investor</div>
      </div>
      <img src="./s7_gold.png" alt class="gold" data-aos="fade" data-aos-delay="0" data-aos-duration="1500" />
      <div class="container" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500">
        <div class="content-title" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500">前進飯店 唯一機會</div>
        <div class="content">
          <div class="description" data-aos="fade" data-aos-delay="600" data-aos-duration="1500">
            <div class="title">月月固定奉上現金，穩健資產最好的保障!</div>
            <div class="desc">
              『蘭桂.坊』月月固定租金收入，與其將錢放在銀行，錢愈來愈薄，還不如買下一間飯店型房產，富養您的下半場人生。</div>
            <div class="title">不動產化現金流，你的未來財富在這裡!</div>
            <div class="desc">
              「蘭桂.坊」一次達到史上房產最長租約的穩定保障，擁有高達15年的飯店租約，更享有租滿7年以上階段調漲租金的幅度，讓投資越久越增值!
            </div>
            <div class="title">飯店型投資房產，一次租滿零空窗財富不打折!</div>
            <div class="desc">
              全套國際精裝修飯店設計，總價購買一次打包所有大小事宜，免管理費、免去租房空窗期租金損失，一次租好租滿等優勢，加上享有每年兩次的免費住宿；讓資金穩定高投報變大，現在不買更等何時!
            </div>
          </div>
          <div class="slide relative" data-aos="fade" data-aos-delay="800" data-aos-duration="1500">
            <div class="img-name">{{slideList[slideIndex].title}}</div>
            <img
              v-for="(slide, index) in slideList"
              :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
              :key="`s7-slide-${index}`"
              :src="slide.src"
              alt
            />
            <div class="btn-group flex-jc flex-ac flex-mobile-jb">
              <div
                class="dot"
                v-for="(slide, index) in slideList"
                :key="`s7-dot-${index}`"
                @click="slideIndex = index"
              ></div>
              <img @click="addIndex" src="./small_left_btn.png" alt class="arrow-btn" />
              <img @click="decIndex" src="./small_right_btn.png" alt class="arrow-btn" />
            </div>
          </div>
        </div>
        <div class="items">
          <div class="item-title">五大優點  讓您輕鬆當房東</div>
          <div class="item" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1500">
            <div class="item-desc">保證<br>收租</div>
          </div>
          <div class="item" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1500">
            <div class="item-desc">輕鬆<br>月付</div>
          </div>
          <div class="item" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1500">
            <div class="item-desc">長租<br>15年</div>
          </div>
          <div class="item" data-aos="fade-up" data-aos-delay="900" data-aos-duration="1500">
            <div class="item-desc">免<br>管理費</div>
          </div>
          <div class="item" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1500">
            <div class="item-desc">無<br>空窗期</div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative m-block" v-if="isMobile">
      <div class="container-title">
        <div class="title">自有資金 超高投報</div>
        <hr />
        <div class="desc">Intelligent Investor</div>
      </div>
      <img src="./s7m/mo.jpg" alt />
      <div class="relative">
        <div class="slide relative">
          <div class="img-name">{{slideList[slideIndex].title}}</div>
          <img
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s7-slide-${index}`"
            :src="slide.src"
            alt
          />
          <div class="btn-group flex-jc flex-ac flex-mobile-jb">
            <div
              class="dot"
              v-for="(slide, index) in slideList"
              :key="`s7-dot-${index}`"
              @click="slideIndex = index"
            ></div>
            <img @click="decIndex" src="./small_left_btn.png" alt class="arrow-btn" />
            <img @click="addIndex" src="./small_right_btn.png" alt class="arrow-btn" />
          </div>
        </div>
        <div class="description">
            <div class="title">月月固定奉上現金，穩健資產最好的保障!</div>
            <div class="desc">
              『蘭桂.坊』月月固定租金收入，與其將錢放在銀行，錢愈來愈薄，還不如買下一間飯店型房產，富養您的下半場人生。</div>
            <div class="title">不動產化現金流，你的未來財富在這裡!</div>
            <div class="desc">
              「蘭桂.坊」一次達到史上房產最長租約的穩定保障，擁有高達15年的飯店租約，更享有租滿7年以上階段調漲租金的幅度，讓投資越久越增值!
            </div>
            <div class="title">飯店型投資房產，一次租滿零空窗財富不打折!</div>
            <div class="desc">
              全套國際精裝修飯店設計，總價購買一次打包所有大小事宜，免管理費、免去租房空窗期租金損失，一次租好租滿等優勢，加上享有每年兩次的免費住宿；讓資金穩定高投報變大，現在不買更等何時!
            </div>
        </div>
      </div>
        <div class="items">
          <div class="item-title">五大優點  讓您輕鬆當房東</div>
          <div class="item" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1500">
            <div class="item-desc">保證<br>收租</div>
          </div>
          <div class="item" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1500">
            <div class="item-desc">輕鬆<br>月付</div>
          </div>
          <div class="item" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1500">
            <div class="item-desc">長租<br>15年</div>
          </div>
          <div class="item" data-aos="fade-up" data-aos-delay="900" data-aos-duration="1500">
            <div class="item-desc">免<br>管理費</div>
          </div>
          <div class="item" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1500">
            <div class="item-desc">無<br>空窗期</div>
          </div>
        </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  // background-color: #fff;
  background-image: url('./s7_bg.jpg');
  background-position: 100% 0%;
  background-size: cover;
  position: relative;
  padding-top: 60px;
  padding-bottom: 60px;
}

.container {
  width: 1380px;
  margin: 0 auto;
  margin-top: calc(100vw * 580 / 1920);
  padding: 20px 90px 40px;
  border: solid 3px #c08d4e;
  background: #1e1f1f;

  .content {
    display: flex;
    height: 400px;
    margin-bottom: 50px;

    .description {
      width: 50%;
      background-color: #c08d4e;
      color: #1a1311;
      padding:40px 30px 0 30px;
        line-height: 1.5;
        font-size: 14px;

      .title {
        font-size: 1.7em;
        margin: 0 auto;
        text-align: left;
      }

      .desc {
        text-align: justify;
        margin: 0 auto;
        margin-bottom: 30px;
      }
    }
  }

  .content-title {
    font-size: 45.9px;
    color: #fff;
    width: 50%;
    margin-top: 30px;
    margin-bottom: 20px;
  }
}

.gold {
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0px;
}

.container-title {
  .title {
    width: 298px;
    height: 48px;
    font-size: 36px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
    margin: 0 auto;
    margin-bottom: 15px;
  }

  hr {
    width: 304.7px;
    height: 0;
    border: solid 1px #c08d4e;
    margin: 0 auto;
    margin-bottom: 5px;
   + .desc {
    font-family: TimesNewRomanPSMT;
  }
  }

  .desc {
    width: 140px;
    height: 20px;
    font-size: 18px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: #c08d4e;
    margin: 0 auto;
    margin-bottom: 30px;
  }
}

.slide {
  width: 50%;
  z-index: 1;

  .img-name {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #fff;
    text-shadow: 0 0 2px #333;
    font-size: 14px;
    z-index: 3;
  }

  .slide-img {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
    left: 0;
    right: 0;
  }

  .btn-group {
    bottom: 30px;
  }
}

.items {
  justify-content: space-around;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
      line-height: 1.71;
  .item-title {
    flex:5 5 100%;
      font-size:4.5vw;
      letter-spacing: normal;
      color: #c08d4e;
      margin-bottom: 10px;
      width: 100%;
      font-weight: bolder;
  }
  .item {
  display: flex;
  justify-content:center;
  align-items: center;
  background: url("./s7_item.png");
  background-size: 100% auto;
  flex:0 0 183px;
  height:188px;
  padding:0 0 25px 0;
/*
    img {
      width: 185px;
    }
*/

    .item-desc {    
      font-size: 30px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.3;
      letter-spacing: 0.42px;
      text-align: center;
      color: #ffffff;
    }
  }
}

.arrow-btn {
  display: none;
}

@media only screen and (min-width: 1281px) and (max-width: 1440px) {
  .bg {
    padding-top: 30px;
  }
  .container {
    width: 1280px;
    margin-top: calc(100vw * 550 / 1920);

    // .content {}
  }
}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {
  .container {
    width: 1024px;
    padding: 20px 50px 40px;
  }
  .fullscreen {
    height: auto;
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .container {
    width: 900px;
    padding: 20px 30px 40px;

    .content-title {
      font-size: 32px;
    }

    .content {
      .description {
        .title,
        .desc {
          width: 90%;
        }
      }
    }
  }
  .gold {
    margin-top: 80px;
  }
  .slide {
    .slide-img {
      width: 100%;
      max-height: auto;
    }
  }
}

@media screen and (max-width: 767px) {
  .description {
    width: 84.4vw;
    margin: 0 auto;
    margin-top: -30px;
    padding: 30px 5% 0;
    left: 0;
    right: 0;
    z-index: 3;
    height: auto;
    color: #000;
    background: #c9a063;
    position: absolute;

    .title {
      margin-bottom: 10px;
      font-size: 17px;
      text-align: left;
    }

    .desc {
      text-align: justify;
      font-size: 14px;
      margin: 0 auto;
      margin-bottom: 30px;
    }

    .button {
      width: 80%;
      margin: 0 auto;
      height: 30px;
      background: #fff;
      color: #c9a063;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      .triangle {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 4px 7px 4px;
        border-color: transparent transparent #c9a063 transparent;
        margin-right: 15px;
      }
    }
  }
  .container {
    width: 90vw;
    margin: 0 auto;
    margin-top: calc(100vw * 580 / 1920);
    padding: 20px 90px 40px;
    border: solid 3px #c08d4e;
    background: #1e1f1f;
  }

  .slide {
    width: 50%;
    z-index: 1;

    .img-name {
      position: absolute;
      top: 10px;
      right: 10px;
      color: #fff;
      text-shadow: 0 0 2px #333;
      font-size: 14px;
      z-index: 3;
    }

    .slide-img {
      margin: 0 auto;
      width: 100%;
      height: 100%;
      object-fit: cover;
      left: 0;
      right: 0;
      transition: all 0s;
    }

    .btn-group {
      bottom: 30px;
    }
  }

  .container-title {
    .title {
      width: 184px;
      height: 21px;
      font-size: 22px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: center;
      color: #fff;
    }

    hr {
      width: 201px;
    }

    .desc {
      width: 110px;
      height: 13px;
      font-family: TimesNewRomanPSMT;
      font-size: 14px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: center;
      color: #c49a6c;
    }
  }

  .dot {
    display: none;
  }

  .arrow-btn {
    display: block;
    width: 28px !important;
    height: auto;
  }

  .slide {
    .btn-group {
      bottom: 40%;
    }

    .slide-img {
      width: 100vw;
      max-height: auto;
    }
  }

  .m-block {
    .container-title {
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 30px;
    }
    img {
      display: block;
      width: 100vw;
      margin-top: -1px;
    }
  }
  .items {
    width: 95%;
    margin: auto auto 15px auto;
    background: #000;
    border: 2px solid #c9a063;
    justify-content:space-around;
  .item-title {
    margin: 430px 0 0 0;
    font-size:7.5vw;
  }
  .item {
    flex:0 0 145px;height: 150px;padding: 0 0 6vw 0;
    .item-desc {   font-size: 6vw; 
    }
  }
}
}
</style>

<script>
import slider from '@/mixins/slider.js'
import { isMobile } from '@/utils'
export default {
  name: 'section7',
  mixins: [slider],

  data() {
    return {
      slideList: [
        {
          title: '華亞園區',
          src: require('./s7_img1.jpg'),
        },
        {
          title: '長庚園區',
          src: require('./s7_img2.jpg'),
        },
        {
          title: '國際媒體文創產業園區',
          src: require('./s7_img3.jpg'),
        },
        {
          title: '林口新創園區',
          src: require('./s7_img4.jpg'),
        },
        {
          title: '郵政物流特區',
          src: require('./s7_img5.jpg'),
        },
      ],
      contentIndex: 0,
      isMobile,
    }
  },

  methods: {},
}
</script>
