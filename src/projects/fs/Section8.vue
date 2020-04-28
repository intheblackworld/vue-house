<template>
  <div class="section8">
    <div class="bg">
      <div v-if="!isMobile">
        <img
          v-lazy="require('./s8/bg.jpg')"
          alt
          class="bg-img"
        />
        <img
          v-lazy="require('./s8/bg2.jpg')"
          alt
          class="bg-img bottom"
        />
        <div class="content-t">
          <div class="title">小資正當道 甜蜜2房</div>
          <div class="desc">
            房間都開窗 / 真正適合生活的臥室，享受每天早上把陽光當鬧鐘的小確幸。<br />配備雙衛浴 / 客人主人分開用，家人間也不用排隊，掌握全家生活自主權。
          </div>
        <div class="button" @click="showDialog('https://fs.h35.tw/output/index.html')">360度 環景</div>
        </div>
        <img
          v-lazy="require('./s8/img1-1.png')"
          alt
          class="img img-rt"
          data-aos="fade"
          data-aos-delay="300"
        />
        <img
          v-lazy="require('./s8/img1-2.jpg')"
          alt
          class="img img-lt"
          data-aos="fade"
          data-aos-delay="300"
        />
        <div class="content-b">
          <div class="title">有型又有款 幸福3房</div>
          <div class="desc">
            方正又有窗 / 3間房都開窗，格局方方正正好規劃，盡情大展身手的小天地。<br />露臺大格局 / 客廳旁落地窗，直接連接大露臺，搭起與自然風光平行舞台。
          </div>
        <div class="button" @click="showDialog('https://fs.h35.tw/output/index.html')">360度 環景</div>
        </div>
        <img
          v-lazy="require('./s8/img2-1.png')"
          alt
          class="img img-lb"
          data-aos="fade"
          data-aos-delay="300"
        />
        <img
          v-lazy="require('./s8/img2-2.jpg')"
          alt
          class="img img-rb"
          data-aos="fade"
          data-aos-delay="300"
        />
      </div>
      <div v-else>
        <el-dialog
          title
          :visible.sync="isShowDialog"
          :width="'90%'"
          :modal-append-to-body="false"
          top="30vh"
        >
          {{dialogContent}}
        </el-dialog>
        <div class="relative">
          <img
            v-lazy="require('./mo/8/bg1.png')"
            alt
            class="bg-img1"
          />
          <img
            :src="require('./s8/img1-2.jpg')"
            alt
            class="bg-img"
            data-aos="fade"
            data-aos-delay="300"
          />
          <div class="content-t">
            <div class="title">小資正當道 甜蜜2房</div>
            <div class="desc">
              房間都開窗 / 真正適合生活的臥室，享受每天早上把陽光當鬧鐘的小確幸。<br />配備雙衛浴 / 客人主人分開用，家人間也不用排隊，掌握全家生活自主權。
            </div>
        <div class="button" @click="showDialog('https://fs.h35.tw/output/index.html')">360度 環景</div>
          </div>
        </div>
        <div class="relative">
          <img
            v-lazy="require('./mo/8/img1-2.jpg')"
            alt
            class="bg-img"
          />
          <div class="circle">
            <div class="circle0 circle1"></div>
            <div class="circle0 circle2"></div>
            <div class="circle0 circle3-1"></div>
            <div class="circle0 circle3-2"></div>
            <div class="circle0 circle4"></div>
            <div class="circle0 circle5"></div>
            <div class="circle0 circle6"></div>
            <div class="circle0 circle7"></div>
          </div>
          <div
            class="cursor-block block-1"
            @click="showDialog(0)"
          ></div>
          <div
            class="cursor-block block-2"
            @click="showDialog(1)"
          ></div>
          <div
            class="cursor-block block-3"
            @click="showDialog(2)"
          ></div>
          <div
            class="cursor-block block-4"
            @click="showDialog(3)"
          ></div>
          <div
            class="cursor-block block-5"
            @click="showDialog(4)"
          ></div>
          <div
            class="cursor-block block-6"
            @click="showDialog(5)"
          ></div>
          <div
            class="cursor-block block-7"
            @click="showDialog(5)"
          ></div>
        </div>
        <div class="relative">
          <img
            v-lazy="require('./mo/8/bg1.png')"
            alt
            class="bg-img1"
          />
          <img
            v-lazy="require('./s8/img2-2.jpg')"
            alt
            class="bg-img"
            data-aos="fade"
            data-aos-delay="300"
          />
          <div class="content-t">
            <div class="title">有型又有款 幸福3房</div>
            <div class="desc">
              方正又有窗 / 3間房都開窗，格局方方正正好規劃，盡情大展身手的小天地。<br />露臺大格局 / 客廳旁落地窗，直接連接大露臺，搭起與自然風光平行舞台。
            </div>
        <div class="button" @click="showDialog('https://fs.h35.tw/output/index.html')">360度 環景</div>
          </div>
        </div>
        <div class="relative">
          <img
            v-lazy="require('./mo/8/img2-2.jpg')"
            alt
            class="bg-img"
          />
          <div class="circle">
            <div class="circle0 circle8"></div>
            <div class="circle0 circle9"></div>
            <div class="circle0 circle10"></div>
            <div class="circle0 circle11"></div>
            <div class="circle0 circle12"></div>
            <div class="circle0 circle13"></div>
            <div class="circle0 circle14"></div>
            <div class="circle0 circle15"></div>
          </div>
          <div
            class="cursor-block block-8"
            @click="showDialog(6)"
          ></div>
          <div
            class="cursor-block block-9"
            @click="showDialog(7)"
          ></div>
          <div
            class="cursor-block block-10"
            @click="showDialog(8)"
          ></div>
          <div
            class="cursor-block block-11"
            @click="showDialog(9)"
          ></div>
          <div
            class="cursor-block block-12"
            @click="showDialog(10)"
          ></div>
          <div
            class="cursor-block block-13"
            @click="showDialog(11)"
          ></div>
          <div
            class="cursor-block block-14"
            @click="showDialog(12)"
          ></div>
          <div
            class="cursor-block block-15"
            @click="showDialog(13)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.section8 {
  .el-dialog {
    background: #20969b;
  }

  .el-dialog__body {
    font-size: size-m(14);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.21;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    padding: 20px 25px 30px;
  }

  .el-dialog__headerbtn .el-dialog__close {
    color: #fff;
  }

  .el-dialog__headerbtn {
    top: 3px;
    right: 3px;
  }
}
</style>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.bg {
  background-size: cover;
  position: relative;
  overflow: hidden;
  height: size(2560);
  z-index: 3;
}

.bg-img {
  width: 100vw;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  z-index: 1;

  &.fix {
    position: fixed;
  }

  &:nth-child(1) {
    position: relative;
  }

  &.bottom {
    top: size(1280);
  }
}

.img {
  position: absolute;
  z-index: 2;
}

.img-lt {
  width: size(766);
  left: size(95);
  top: size(443);
}

.img-rt {
  width: size(960);
  top: 0;
  right: 0;
}

.img-lb {
  width: size(980);
  left: 0;
  bottom: 0;
}

.img-rb {
  width: size(766);
  right: size(107);
  bottom: size(88);
}

.content-t {
  width: size(760);
  top: size(150);
  left: size(100);
  position: absolute;
  z-index: 3;
}

.title {
  font-size: size(40);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  margin-bottom: size(50);
}

.desc {
  font-size: size(17);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.12;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
}

.content-b {
  width: size(582);
  top: size(1443);
  right: size(115);
  position: absolute;
  z-index: 3;

  .title,
  .desc {
    text-align: right;
  }
}
.button {
  position: relative;
  background: #0003;
  color: #fff;
  float: right;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  font-size: size(20);
  display: flex;
  border-radius:1em;
  letter-spacing: 0.1em;
    bottom:-0.75em;
  width:10em;
  height:3em;
  transition: all 0.3;
  box-shadow: 0px 3px 0 #0007;
  &:hover {
    background: #0007;
    bottom:-0.5em;
  box-shadow: 0px 7px 0 #000c;
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
    background-size: cover;
    position: relative;
    overflow: hidden;
    position: relative;
    height: auto;
    display: flex;
    align-items: center;
    background: #20969b;

    > div {
      display: block;
    }
  }

  .swiper-container {
    width: 100vw;
    position: relative;
  }

  .bg-img1 {
    position: absolute;
    width: 100vw;
    left: 0;
    top: 0;}
  .bg-img {
    width: 100vw;
    position: relative;
    left: 0;
    top: 0;
    height: auto;
    display: block;
    object-fit: cover;
    z-index: 3;

    &:nth-child(1) {
      position: relative;
    }
    &:nth-child(2) {margin-top: size-m(10);
    }
  }
.circle{
    z-index: 3;
  .circle0{
    position: absolute;
    left: 0;
    top: 0;
    border: 3px solid #0006;
    border-radius: 50%;
    font-size:size-m(18);
    width: 1em;height: 1em;
    z-index: 3;
    opacity: 0;
    animation: circlee 8s infinite ease-out;
  }
  .circle1{
    left: size-m(60);
    top: size-m(110);
    animation-delay:0s;
  }
  .circle2{
    left: size-m(130);
    top: size-m(135);
    animation-delay:1s;
  }
  .circle3-1{
    left: size-m(250);
    top: size-m(90);
    animation-delay:2s;
  }
  .circle3-2{
    left: size-m(250);
    top: size-m(170);
    animation-delay:3s;
  }
  .circle4{
    left: size-m(115);
    top: size-m(280);
    animation-delay:4s;
  }
  .circle5{
    left: size-m(250);
    top: size-m(320);
    animation-delay:5s;
  }
  .circle6{
    left: size-m(244);
    top: size-m(432);
    animation-delay:6s;
  }

  .circle7{
    left: size-m(129);
    top: size-m(455);
    animation-delay:7s;
  }
  .circle8{
    left: size-m(270);
    top: size-m(56);
    animation-delay:0s;
  }
  .circle9{
    left: size-m(170);
    top: size-m(115);
    animation-delay:1s;
  }
  .circle10{
    left: size-m(300);
    top: size-m(155);
    animation-delay:2s;
  }
  .circle11{
    left: size-m(45);
    top: size-m(210);
    animation-delay:3s;
  }
  .circle12{
    left: size-m(170);
    top: size-m(210);
    animation-delay:4s;
  }

  .circle13{
    left: size-m(145);
    top: size-m(315);
    animation-delay:5s;
  }
  .circle14{
    left: size-m(245);
    top: size-m(315);
    animation-delay:6s;
  }
  .circle15{
    left: size-m(305);
    top: size-m(315);
    animation-delay:7s;
  }


}
  @keyframes circlee{
    from{opacity: 1;transform: scale(1);}
    10%{opacity: 0; transform: scale(1.5);}
    to{opacity: 0; transform: scale(1.5);}
  }
  .content-t {
    position: relative;
    width: size-m(310);
    //top: size-m(397);
   left:  size-m(-3);
   // right: 0;
   top: 0;
    margin:auto;
    padding: 7vw 0;
    overflow: hidden;
  }

  .title {
    font-size: size-m(22);
    margin-bottom: size-m(30);
  }

  .desc {
    font-size: size-m(12);
  }

  .item-title {
    font-size: calc(100vw * 12 / 375);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.58;
    letter-spacing: 0.48px;
    text-align: right;
    color: #ffffff;
    position: absolute;
    right: 20px;
    bottom: 20px;
  }

  .cursor-block {
    cursor: pointer;
    position: absolute;
    z-index: 5;
  }

  .block-1 {
    width: size-m(60);
    height: size-m(180);
    top: size-m(50);
    left: size-m(40);
  }

  .block-2 {
    width: size-m(75);
    height: size-m(180);
    top: size-m(50);
    left: size-m(105);
  }

  .block-3 {
    width: size-m(150);
    height: size-m(160);
    top: size-m(50);
    right: size-m(35);
  }

  .block-4 {
    width: size-m(145);
    height: size-m(110);
    top: size-m(235);
    left: size-m(40);
  }

  .block-5 {
    width: size-m(150);
    height: size-m(205);
    top: size-m(220);
    right: size-m(35);
  }

  .block-6 {
    width: size-m(120);
    height: size-m(40);
    top: size-m(430);
    right: size-m(65);
  }

  .block-7 {
    width: size-m(120);
    height: size-m(40);
    top: size-m(440);
    right: size-m(185);
  }

  .block-8 {
    width: size-m(125);
    height: size-m(60);
    top: size-m(35);
    right: size-m(30);
  }

  .block-9 {
    width: size-m(200);
    height: size-m(80);
    top: size-m(85);
    right: size-m(100);
  }

  .block-10 {
    width: size-m(70);
    height: size-m(125);
    top: size-m(100);
    right: size-m(30);
  }

  .block-11 {
    width: size-m(48);
    height: size-m(110);
    top: size-m(165);
    left: size-m(30);
  }

  .block-12 {
    width: size-m(200);
    height: size-m(95);
    top: size-m(170);
    left: size-m(80);
  }

  .block-13 {
    width: size-m(130);
    height: size-m(100);
    top: size-m(270);
    left: size-m(80);
  }

  .block-14 {
    width: size-m(60);
    height: size-m(100);
    top: size-m(270);
    left: size-m(220);
  }

  .block-15 {
    width: size-m(58);
    height: size-m(100);
    top: size-m(270);
    right: size-m(30);
  }
.button {
  font-size:size-m(15);
  &:hover {
  }
}
}
</style>

<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'

export default {
  name: 'section8',

  data() {
    return {
      isMobile,
      isTablet,
      isShowDialog: false,
      dialogIndex: 0,
      contentList: [
        '廚房選用大雅廚具，配有Glem蒸烤箱、林內抽油煙機等國際廚具。',
        '客餐廳採開放式規劃，走道無虛坪，打破格局限制想像。',
        '主浴、客浴配備ROCA馬桶，採乾溼分離設計，並配暖風機或換氣扇。',
        '客餐廳、房間皆鋪設高級地磚，易清潔好保養。',
        '主臥室超大格局，給您足夠空間訂製系統衣櫃。',
        '臥房皆開窗，讓室內空氣流通，採光明亮好生活。',

        '工作陽台設有水龍頭，預留管線空間，並設置陽台燈，整潔又美觀。',
        '臥室可做書房、小孩房來靈活使用，開窗採光、通風性能一級棒。',
        '廚房選用大雅廚具，配有Glem蒸烤箱、林內抽油煙機等國際廚具。',
        '景觀陽台就是自家的小花園，並鋪設木紋磚，質感大大提升。',
        '開放式客餐廳設計，大面寬尺度，家族團聚絕不失面子。',
        '主臥採套房設計，大面窗採光佳，大空間可做梳妝台、系統衣櫃。',
        '主浴乾濕分離，配備ROCA智慧馬桶、V&B面盆、暖風機等。',
        '衛浴採乾溼分離，配有ROCA馬桶、換氣扇等，給您乾爽舒適生活。',
      ],
    }
  },

  computed: {
    dialogContent() {
      return this.contentList[this.dialogIndex]
    },
  },

  methods: {
    showDialog(index) {
      this.dialogIndex = index
      this.isShowDialog = true
    },
  },
}
</script>
