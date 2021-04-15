<template>
  <div class="section2">
    <div class="news-container">
      <ol class="breadcrumb">
        <li class="bc_li" @click="$router.push('/#section5')">首頁</li>
        <li class="bc_li" @click="$router.push('/news/#top')">新聞列表</li>
      </ol>
      <div class="news-title">{{currentItem.title}}</div>
      <div class="news-subtitle">
        {{currentItem.subtitle}}
      </div>
      <div class="news-date">
        {{currentItem.date}}
      </div>
      <div class="news-author">
        {{currentItem.author}}
      </div>
      <div class="swipe news-img" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, index) in slideList" v-show="slideIndex === index" :key="slide + index" :class="`swipe-item absolute`">
              <img :src="slide" alt="">
            </div>
          </transition-group>
          <div class="pagination absolute flex-ac">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
          </div>
          <div class="swipe-btns absolute flex-ac flex-jb">
            <img src="../all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
            <img src="../all/next-btn.png" alt="" class="next-btn" @click="addIndex">
          </div>
        </div>
      </div>
      <div class="news-desc" v-html="currentItem.desc"></div>
      <div class="pagination flex-c">
        <a class="pagi" target="_blank" v-for="(link, index) in currentItem.links" :key="'pagi' + index" :href="link.url">{{link.title}}</a>
      </div>
      <div class="navigation">
        <span class="pn">
          <span class="back" @click="$router.push('/news/#top')">
            回新聞列表</span>
          <span class="pnprev" @click="$router.push(`/news/${currentNum === 0 ? item_list.length - 1 : currentNum - 1}?type=${currentItem.type}`)" aria-label="上一頁"></span>
          <span class="pnnext" @click="$router.push(`/news/${currentNum === item_list.length -  1 ? 0 : currentNum + 1}?type=${currentItem.type}`)" aria-label="下一頁"></span>
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section2 {
  width: size(1920);
  // height: size(1444);
  overflow: hidden;
  position: relative;
  background: #fff;
  background-size: auto;
}

.bg-img {
  width: size(1920);
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  margin-top: 0;
  &:nth-child(1) {
    position: relative;
  }
}
.news-container {
  width: size(1330);
  margin: size(0) auto;
  padding-bottom: size(80);
}
.news-title {
  width: 100%;
  font-size: size(54);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #0289b8;
  margin-bottom: size(15);
}
.news-subtitle {
  font-size: size(22);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  margin-bottom: size(15);
}
.news-date {
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #666666;
  margin-bottom: size(15);
}
.news-author {
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #666666;
  margin-bottom: size(15);
}

.swipe {
  width: size(1280);
  height: size(850);
  background-color: #000;
  // top: 0;
  // left: size(183);
  object-fit: cover;
}

.swipe-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.swipe-item {
  width: 100%;
  height: 100%;
  left: 0%;
  transition: left 1s ease-in-out;
  z-index: 0;
  object-fit: cover;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

// // begin
.swipe-fade-leave-to {
  opacity: 0;
  z-index: 0;
}
// end
.swipe-fade-enter {
  opacity: 0;
  z-index: 1;
}

.swipe-fade-enter-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.swipe-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.pagination {
  width: auto;
  bottom: 10px;
  left: 0;
  right: 0;
  margin: 0 auto;
  justify-content: center;
}

.pagination-dot {
  padding: 5px;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    box-shadow: 0 0 0 1px #fff;
    position: relative;
    background-color: rgba(0, 0, 0, 0.01);
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: #fff;
      border-radius: 20px;
      opacity: 1;
      position: absolute;
      top: 20%;
      // transform: translateY(-50%);
      left: 20%;
      transition: all 0.3s;
      transform-origin: center;
      transform: scale(0);
    }
    &.active {
      &::before {
        content: '';
        width: 60%;
        height: 60%;
        display: block;
        background: #fff;
        border-radius: 20px;
        opacity: 1;
        position: absolute;
        top: 20%;
        // transform: translateY(-50%);
        left: 20%;
        transform: scale(1);
      }
    }
  }
}

.swipe-btns {
  width: 100%;
  height: 100%;
  padding: 0 15px;
  z-index: 3;

  .prev-btn,
  .next-btn {
    width: size(20);
    cursor: pointer;
  }
}
.news-img {
  // width: 100%;
  object-fit: cover;
  margin-bottom: size(15);
}
.news-desc {
  width: 100%;
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
}

.pagination {
  width: 100%;
  height: size(80);
  margin-top: size(40);

  .pagi {
    width: size(230);
    height: size(71);
    border-radius: 10px;
    font-size: size(21);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    text-decoration: none;
    line-height: size(71);
    letter-spacing: size(1.68);
    text-align: center;
    border: solid 1px #008fbb;
    color: #666666;
    margin: 0 size(15);
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 0 size(5) 0 size(5);
    transition: all 0.5s;

    &.active,
    &:hover {
      color: #ffffff;
      background-color: #008fbb;
    }
  }
}
.breadcrumb {
  font-size: size(18);
  display: block;
  padding: 0.9em 0.3em 1em 0.3em;
  text-align: left;
  &::after {
    content: ' ';
    display: block;
    clear: both;
  }
  li {
    display: inline-block;
    font-weight: normal;
    color: #555;
    white-space: nowrap;
    &::before {
      content: '>';
      display: inline-block;
      margin: 0 0.3em;
    }
    &:first-child:before {
      display: none;
    }
    &:hover {
      text-decoration: underline;
    }
    &:hover:before {
      text-decoration: none;
    }
  }
}

.pn {
  font-size: size(18);
  background: #08a;
  text-align: center;
  display: flex;
  padding: 0;
  color: #fff;
  margin: 3em 0 0.5em 0;
  line-height: 1.7;
  > * {
    color: #fff;
    transition: all 0.2s;
    padding: 6px 0 7px 0;
  }
  span {
    flex: 1;
    &:hover {
      background: #666;
      display: inline;
      transition: all 0.2s;
    }
  }
  .pnnext::after,
  .pnprev::before,
  .pnmore::before {
    content: '';
    display: inline-block;
    width: 0.5em;
    height: 0.5em;
    border: 2px solid currentColor;
    border-width: 2px 2px 0 0;
    margin: 0 0.5em 1px 0.5em;
  }
  .pnnext::after {
    transform: rotate(45deg);
  }
  .pnprev::before {
    transform: rotate(-135deg);
  }
  .pnmore::before {
    transform: rotate(135deg);
    margin: 0 0.5em 3px 0.5em;
  }
  .back {
    width: 6em;
    order: 2;
    display: inline-block;
    text-align: center;
    cursor: pointer;
  }
  .back ~ .pnnext {
    text-align: left;
    order: 3;
  }
  .back ~ .pnprev {
    text-align: right;
    order: 1;
  }
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
  .section2 {
    width: 100vw;
    min-height: sizem(604);
    max-height: auto;
    height: auto;
    // background-image: url('./mo/1/bg.png');
    background-size: cover;
    background-attachment: scroll;
  }

  .bg-img {
    width: sizem(375);
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    object-fit: cover;
    margin-top: 0;

    &:nth-child(1) {
      position: relative;
    }
  }

  .news-container {
    width: sizem(310);
    margin: sizem(60) auto;
    padding-bottom: sizem(60);
  }
  .news-title {
    width: 100%;
    font-size: sizem(28);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #0289b8;
    margin-bottom: sizem(15);
  }
  .news-subtitle {
    font-size: sizem(16);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    margin-bottom: sizem(15);
  }
  .news-date {
    font-size: sizem(13);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #666666;
    margin-bottom: sizem(15);
  }
  .news-author {
    font-size: sizem(13);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #666666;
    margin-bottom: sizem(15);
  }
  .news-img {
    width: 100%;
    object-fit: cover;
    margin-bottom: sizem(15);
  }
  .news-desc {
    width: 100%;
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
  }

  .pagination {
    width: 100%;
    height: auto;
    margin-top: size(40);
    flex-wrap: wrap;

    .pagi {
      width: 100%;
      height: sizem(63);
      border-radius: 10px;
      font-size: sizem(20);
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: sizem(63);
      letter-spacing: sizem(1.6);
      text-align: center;
      border: solid 1px #0289b8;
      color: #666666;
      margin: 0;
      margin-bottom: 15px;
      cursor: pointer;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      padding: 0 sizem(5) 0 sizem(15);
    }
  }

  /* Swipe */
  .swipe {
    width: 100%;
    height: sizem(270);
    min-height: auto;
    top: sizem(0);
    left: sizem(0);
    object-fit: cover;
    position: relative !important;
  }

  // begin
  .swipe-fade-leave-to {
    opacity: 0;
    z-index: 0;
  }
  // end
  .swipe-fade-enter {
    opacity: 0;
    z-index: 1;
  }

  .swipe-fade-enter-active {
    transition: all 0.5s ease;
  }

  .swipe-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }

  // begin
  // .swipe-left-leave-to {
  //   margin-left: -100vw;
  //   z-index: 0;
  // }
  // // end
  // .swipe-left-enter {
  //   opacity: 0.5;
  //   margin-left: 0;
  //   z-index: 1;
  // }

  // .swipe-left-enter-active {
  //   transition: all 0.5s ease;
  // }

  // .swipe-left-leave-active {
  //   transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  // }

  .swipe-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .swipe-item {
    width: 100%;
    height: 100%;
    z-index: 0;
    .slide-name {
      right: 1em;
      font-size: sizem(13);
    }

    // &:nth-child(1) {
    //   z-index: 1;
    //   // opacity: 1;
    // }

    // &.base {
    //   z-index: 1;
    //   opacity: 1;
    // }
    // &.active {
    //   z-index: 2;
    //   // opacity: 1;
    // }
  }

  .pagination {
    display: none;
  }

  .pagination-dot {
    padding: 5px;
    margin: 0 10px;
    cursor: pointer;
    z-index: 4;

    span {
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      box-shadow: 0 0 0 1px #fff;
      position: relative;
      background-color: rgba(0, 0, 0, 0.01);
      transition: all 0.5s;

      &::before {
        content: '';
        width: 60%;
        height: 60%;
        display: block;
        background: #004ea2;
        border-radius: 20px;
        opacity: 1;
        position: absolute;
        top: 20%;
        // transform: translateY(-50%);
        left: 20%;
        transition: all 0.3s;
        transform-origin: center;
        transform: scale(0);
      }
      &.active {
        &::before {
          content: '';
          width: 100%;
          height: 100%;
          display: block;
          background: #004ea2;
          border-radius: 20px;
          opacity: 1;
          position: absolute;
          top: 0%;
          // transform: translateY(-50%);
          left: 0%;
          transform: scale(1);
        }
      }
    }
  }

  .swipe-btns {
    width: 100%;
    height: 100%;
    padding: 0 15px;
    z-index: 3;

    .prev-btn,
    .next-btn {
      width: sizem(15);
      cursor: pointer;
    }
  }

  .breadcrumb {
    font-size: sizem(13);
  }
  .pn {
    font-size: sizem(15);
    line-height: 2.3;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'

export default {
  name: 'section2',

  mixins: [slider],

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      tabIndex: 0,
      item_list: [
        {
          type: 2,
          title: '【商周】萬隆捷運站新建案《自慢藏》 珍藏人生最美風景',
          subtitle: '',
          date: '2021.04.07',
          author: '商周 廣編企劃',
          imgs: [
            require('../newimg/9/3e6e77c8-960a-1bf1-ea24-310cedcf7ef3.jpg'),
            require('../newimg/9/baa57624-44c5-5bbf-f771-cf9a5e62efbb.jpg'),
          ],
          desc:
            '北市萬隆站一帶鄰近大安信義繁華商圈，卻有著都市難得的水岸綠地，以及台大、師大最高學府的人文書香環繞，卻少有建地釋出。近期一個名為《自慢藏》的建案卻吸引了不少區域客的注意，不僅前後水岸綠意雙景觀、鄰近台大師大的極佳位置，吸引區域客和大學教授們青睞，高標準的嚴謹施工品質，更引起左鄰右舍不少討論。<br><br>萬隆是北市開發已久的區域，交通便利機能成熟又有著水岸綠意，日間漫步河濱公園，夜間住宅區巷弄靜謐，是台北市難得的宜居空間，卻罕有新屋建案，因為區內30年以上舊公寓林立、早已無可建空間，都更案沒有高容積獎勵下吃力不討好，一般建商願意投入者也不多。，這次整合了國有財產署戰基地約40%的土地面積加入，才有了「自慢藏」860坪的大基地面積，饒是如此，該案仍數度轉易不同建商，最後才由40年的台北市在地建商沅利建設接手，與日本國土開發營造商攜手，打造地下四樓、地面22層的SRC鋼骨雙塔耐震水岸景觀豪邸。<br><br><b>日系自慢建築工藝 藏山、藏水、藏台大</b><br>《自慢藏》基地位於汀洲路四段219號旁，鄰近師大分部，正對萬坪河濱帶狀公園入口，後方隔著僅4樓高的古亭地政事務所，就是從景美圖書館開始連成一片的萬和1、2、3號公園老樹綠蔭，坐擁前後水岸綠意雙景觀，同時坐擁公館羅斯福繁華商圈便利機能，收納公館、台大、師大商圈的豐富生活機能。交通上也十分便利，散步4分鐘就到捷運萬隆站，1分鐘即可上水源快速道路，快速銜接雙北。<br><br>為了與珍稀的地理位置相得益彰，建商特別邀請曾參與東京機場、關西空港、北陸新幹線、三井花園飯店等開發營造工程的「JDC日本國土開發株式會社」，承襲70年日本血統的嚴謹精工，以最高規格打造台灣水岸最自慢的建築地標。例如結合SC及RC雙重優勢，CFT柱內灌漿，以高壓灌漿混凝土入鋼柱提升結構穩固性；水泥磅數也超越法規標準，採用最高8000psi高強度混凝土；SA級鋼筋續接器，則是和捷運、高鐵、台北101同等的最高安全規格，並採用連續壁+扶壁+地中壁工法，使結構更加穩固。<br><br><b>珍稀自慢 細琢典藏</b><br>建築規劃同樣令人眼睛一亮，《自慢藏》總戶數165戶分別以35、45和60坪三種坪數規劃，一層四戶、戶戶邊間雙面採光的設計，在台北市極為稀少。戶戶加厚22公分中空樓板，強化隔音隔熱效果，提升居家品質。本案還罕見地拿到銀級綠建築和SRC鋼骨耐震標章，目前大台北地區僅有9個建案獲得該雙標章認證。<br><br>高坪效是《自慢藏》的另一大亮點，31.9%的低公設比加上雨遮不計坪、不計價，相當於直皆多買到數坪的室內空間。雖然公設比低，《自慢藏》規劃設計的公設十分豐富，包括媽媽教室、交誼宴會廳、閱覽室、健身房、琴房/多功能教室、廚藝教室、兒童遊戲室，頂樓空中花園外，室外還有中庭花園和左側櫻花大道的雙花園規畫，地下室車位則全以坡道平面車位規劃。呼應所在區域的人文氣息，《自慢藏》也規劃與商周出版社合作，首批由商周編輯選書千冊，從童書、成長、商業到人文藝術，以豐富的藏書富住戶的心靈。<br><br><b>見識越高 越是深藏不露的建築堅持</b><br>相較於大型知名建商動輒百億推案量，沅利建設卻有著「十年磨一件」打造高品質的耐性。<br>本次案名《自慢藏》除了引自日文自慢「值得引以為傲」和「珍藏傳家」的意思，也代表著沅利建設40年來的企業精神。沅利建設江文章董事長表示：「沅利建設從上一代至今40年，一直都是用一種『自慢藏』的精神，專注在專業上的努力，務實、無私地經營，能夠抬頭挺胸地面對大眾。」這樣的精神反映在沅利建設的作品上，是安心、可靠的高建設品質，更以參與國家建設、提高居住安全回饋社會為榮，過去沅利建設曾籌辦位於北市文山區的溪州街都更案、新北市大坪林捷運共構的聯合開發案，甚至獲選為捷運聯合開發評估第一名的優良建商，嚴謹踏實可見一斑。<br><br><b>沅利建設40年 水岸自慢代表作</b><br>《自慢藏》前後花了9年整合，最早核准的內容並不包含綠建築和耐震標章，建商則堅持與時俱進，不惜增加成本、延長工期，也要打造當代最足以自豪的作品。「這個案子有很大一部分是國有地、人民的財產，很感謝國家願意把這個責任交給我們的信任，國有財產署一路走來也參與我們所有的工程進度。」除了和日本國土開發營造商攜手，沅利建設在結構安全上還找來參與台中機場工程的「聯邦工程顧問」，以國家交通建設的高標為自慢藏的基礎工程層層把關監督，另外請來「台灣大學地震中心」以第三方公證單位角色進行結構外審。一步一腳印打造萬丈高樓的同時，也以專業數據標準的檢驗，驗證建商在安全結構、細節工法上的細膩用心，值得追尋建築真價值的人士「自慢」收藏。<br><br>《自慢藏》預計於4月正式公開、年底完工，2022年第三季交屋。雖然所有規劃、團隊、建材用料都以頂規打造，但建商強調將採區域行情銷售，已吸引不少沅利建設的忠實VIP客戶預約下訂。',
          links: [
            {
              title: '原文',
              id: '1',
              url: 'https://www.businessweekly.com.tw/business/indep/1001357',
            },
            {
              title: '自慢藏',
              id: '2',
              url: 'https://jiman.debang.tw/',
            },
          ],
        },
        {
          type: 2,
          title: '【蘋果新聞網】沅利建設十年磨一劍「自慢藏」台大水岸代表作公開',
          subtitle: '',
          date: '2021-03-31',
          author: '蘋果新聞網',
          imgs: [
            require('../newimg/10/3c47049f966d810b27760fa1a50b93fc.jpg'),
            require('../newimg/10/6ec896a7b0061345193adef53d31dd25.jpg'),
            require('../newimg/10/6f3caf5e598be1d1546667293708423d.jpg'),
            require('../newimg/10/7V44J6V6SZFVFE3E5B7TN2BJWA.jpg'),
          ],
          desc:
            '成立40年的老字號建設公司沅利建設，在台北市有不少經典業績作品，一直秉持著只做高品質建築的沅利建設，近期在素地珍稀的台大、師大生活圈，推出緊鄰水岸與河濱公園的「自慢藏」，優越條件加上精細規劃，光是VIP客戶預約就已達七成，引起市場注目。<br><br>「自慢藏」基地位置位於汀洲路四段上，基地面積廣達860坪，規劃地上22層、地下4層，單層四併，35、45、60坪產品。從基地條件來看，具有緊鄰水岸與公園的雙重優勢，步行至捷運萬隆站，也僅要4分鐘。該案公設比僅31.9%低公設比，坪效高，相當受到精打細算購屋族的青睞。<br><br>由於該案為沅利建設40年集大成代表作，建設公司禮聘創立於1951年的JDC日本國土開發株式會社共同開發營造，曾參與過東京機場、關西空港、北陸新幹線等營造工程的國土開發，以日本嚴謹精工聞名，此次台日攜手合作營造，將以最高規格打造安全堡壘。<br><br>除此之外，本案也特別以SRC鋼骨耐震、CFT柱內灌漿，再採用超越法規標準的最高8000psi高強度混凝土，以及與捷運、高鐵、台北101享有同等規格的SA級鋼筋續接器，不只獲得台灣建築中心認證的建築耐震標章，同時取得內政部國家認證銀級綠建築標章雙重認證，並有聯邦工程顧問把關、台灣大學地震中心結構外審，打造水岸地標建築。建材配備上，更有中鋼、新日鐵最頂級鋼材、戶戶中空加厚隔音樓板，配備頂級。<br><br>回應「自慢藏」案名的發想理念，沅利建設董事長江文章表示，從事建築開發營造這麼多年來，最讓他「自慢」的一件事就是，買沅利建設的房子，不會讓消費者變成孤兒，「我們在任何區塊都可能是消費者，非常了解售服的重要性。」秉持著對購屋客的誠懇信念，江董表示：「見識越高越是深藏不露。」接下來會再推出讓購屋客滿意的好建築。<br><br>「自慢藏」基本資料<br>投資興建：沅利建設<br>建築結構：SRC鋼骨耐震<br>樓層規劃：地上22層、地下4層<br>坪數規劃：35、45、60坪<br>基地位置：台北市文山區汀洲路四段281、291號<br>洽詢電話：02-2933-1888',
          links: [
            {
              title: '原文',
              id: '1',
              url:
                'https://tw.appledaily.com/headline/20210408/2LXPLTA5ERDOJMAJVBXDTUWA24/',
            },
            {
              title: '自慢藏',
              id: '2',
              url: 'https://jiman.debang.tw/',
            },
          ],
        },
        {
          type: 2,
          title:
            '【中時新聞網】沅利建設攜手日本國土開發營造商 打造水岸宅「自慢藏」 4月初正式公開',
          subtitle: '',
          date: '11:25 2021/03/30',
          author: '中時新聞網 房產網 葉思含',
          imgs: [
            require('../newimg/11/20210330002197.jpg'),
            require('../newimg/11/20210330002199.jpg'),
          ],
          desc:
            '台北市文山區捷運萬隆站旁水岸宅向來少有推案，元家集團沅利建設推出40年代表作「自慢藏」，攜手日本國土開發營造商，主打台灣水岸自慢代表作，基地面積達860坪，規劃35~60坪，未公開已吸引不少購屋客和VIP客層看屋，且預約已達7成，預計4月初正式公開。<br><br>元家集團沅利建設是北市老牌建商，從萬華起家，興建超過20~30件知名作品，此次「自慢藏」為沅利建設史上最大案量指標案，緊鄰台大、師大生活圈，一次囊括水岸景觀、地段與建設品牌等條件，沅利建設董事長江文章表示，基地位台北市文山區汀洲路四段281、291號，緊鄰新店溪水岸、師大分部、萬和公園旁圖書館綠園道，步行至捷運萬隆站4分鐘，因此未公開即受到當地不少區域客及台師大教授青睞，更有購屋客直接指定樓層和水岸景觀戶別。<br><br>江文章指出，為打造40年代表作，元家集團沅利建設特別邀請創立於1951年的JDC日本國土開發營造商共同開發營造，日本國土參與過東京機場、關西空港、北陸新幹線、三井花園飯店等開發營造工程。同時認真投入環境保護與資源有效利用，曾獲第5次地球環境大賞「經濟團體聯合會會長獎」，實力與業績有目共睹。因此「自慢藏」主打承襲70年日本血統的嚴謹精工，規劃SRC鋼骨耐震、CFT柱內灌漿，以高壓灌漿混凝土入鋼柱；並採用超越法規標準的最高8000psi高強度混凝土，以及與捷運、高鐵、台北101享有同等規格的SA級鋼筋續接器，江文章透露，將以日系精工最高規格，打造台灣水岸最自慢的建築地標為理念，故命名為「自慢藏」。<br><br>「自慢藏」基地四面臨路，面積860坪，是在地難得的四面臨路方形基地，前擁新店溪水岸，後享公園綠地景觀，主打在地唯一雙景觀SRC建築。總銷60億，規劃地上22樓、地下4樓雙棟建築，每棟單層4戶，規劃35、45、60坪，共165戶，負責銷售的得邦廣告專案經理林松憲表示，「自慢藏」規劃31.9%低公設比，且雨遮不計坪、不計價，因此坪效相當高，以相同產品來看，35坪比一般建案多出3~4坪，60坪產品則多出6~7坪，對購屋族來說相當划算。<br><br>特別的是，「自慢藏」不只獲得台灣建築中心認證的建築耐震標章，同時取得內政部國家認證銀級綠建築標章雙重認證，並有聯邦工程顧問把關+台灣大學地震中心結構外審，採用中鋼、新日鐵最頂級鋼材、戶戶中空加厚隔音樓板。',
          links: [
            {
              title: '原文',
              id: '1',
              url: 'https://house.chinatimes.com/20210330002195-264401',
            },
            {
              title: '自慢藏',
              id: '2',
              url: 'https://jiman.debang.tw/',
            },
          ],
        },
        {
          type: 2,
          title: '【中時新聞網】睽違20年 南勢角迎來首座鋼骨大樓',
          subtitle: '',
          date: '16:06 2020/12/14',
          author: '中時新聞網 朱立君',
          imgs: [
            require('../newimg/8/中時1.jpg'),
            require('../newimg/8/中時2.jpg'),
            require('../newimg/8/中時3.jpg'),
            require('../newimg/8/中時4.jpg'),
          ],
          desc:
            '雙和地區開發較早，多年來人口密度居高不下，據內政部統計，永和區以每平方公里38,614人居全台第一，中和區也以每平方公里20,488人名列前茅，因其人口稠密特性，購屋剛性需求維持一定強度，不過區域內多為老舊屋舍，缺乏指標型建築，美聯開發近期在中和區推出36層樓高指標型建案，並採用SC結構工法，將是中和區20年來首座全棟制震鋼骨大樓，已引起雙北地區首購族與換屋族高度興趣。<br><br>【太陽帝國坐落中和精華地段 交通條件與生活機能良好】<br>美聯開發的新案「太陽帝國」位於中和區景新街上，受訪的專案經理林鈺浩表示，建案基地位址為中和精華地段，標榜「一高、二捷、三快、六大橋」，除國道三號外，捷運步行5分鐘內可抵達南勢角站和景平站，若自行開車則可以選擇64、水源、新北環快等快速道路，聯外橋樑共有華中橋、中正橋、永福橋、福和橋、秀朗橋和中安大橋，對於通勤往返的民眾來說十分便利。<br><br>而中和一代開發較早，生活機能早已發展成熟，附近就有興南商圈、南勢角市場以及黃昏市場，兼具傳統與現代化市集，商圈內店家與賣場林立，麥當勞、大潤發、全聯均在此設有分店，知名健身中心World Gym也在區域內設立據點，滿足民眾日常生活需求。<br><br>【國內外設計大師聯手 打造世界級建築】<br>先前於碧潭建案「碧波白」獲得MUSE Design大獎肯定的澳洲知名建築團隊PTW事務所，這次攜手燈光王牌林朗菴、創作台中帝寶的空間王牌徐慈姿、設計陶朱隱園的景觀王牌徐世萃，一同操刀規劃「太陽帝國」，打造出極富設計感的高樓地標。有別於碧波白位於水岸邊，帶給人潔白波浪的形象，「太陽帝國」位於人文薈萃的中和區，採用富有層次的建築視覺，在雄偉外觀下更凸顯人文特性。<br><br>【SC鋼骨結構打造區域地標 高規格制震器使安全更上層樓】<br>「太陽帝國」採用SC鋼骨結構，連續壁工法深至41米，直達質地堅硬的凝灰岩層，並使用SCC自充填混凝土進行柱內灌漿，搭配原有的箱型鋼構與外側混凝土，三道堅實工法使得大樓更加穩固。而考量到台灣位於地震帶上，大小地震頻仍，全案特別配備144支BRB制震器，讓安全更上層樓。<br><br>林經理指出，「太陽帝國」在格局規劃上經過精心琢磨，共有一至三房等房型設計，坪數介於17~39坪之間，滿足首購與換屋族群需求。而為了強調居住品質，該建案在內部標配上十分講究，廚藝設備採用義大利知名品牌Svago，兼具實用與美觀性，讓住戶不僅住得舒適，更住得安心。目前開價為每坪58~68萬之間，現已熱銷7成，未來若想入主中和區指標型大樓，則須加緊腳步了。',
          links: [
            {
              title: '太陽帝國',
              id: '1',
              url: 'https://ace.debang.tw/',
            },
          ],
        },
        {
          type: 2,
          title:
            '【經濟日報】住宅安全受重視 中和地標「太陽帝國」全棟採鋼骨結構為換屋首選',
          subtitle: '',
          date: '2020-11-06 18:46',
          author: '經濟日報 張瑞文',
          imgs: [
            require('../newimg/7/經濟1.jpg'),
            require('../newimg/7/經濟2.jpg'),
          ],
          desc:
            '全台房市交易引爆，雖然話題集中在重劃區的小宅市場，但實際熱銷買氣還是呈現在個案表現。代銷業者坦言，對換屋族而言與其選擇重劃區小宅，市區內的換屋類產品更具吸引力，像是新北中永和多年來缺乏大型住宅案，因此區域內推出主打三房產品的「太陽帝國」，隨即吸引周邊換屋目光，一個月狂銷60戶，且主要以自住客為主。<br><br>房仲業者分析，中永和人口密度高，許多家庭都是早年到國外打拼人士，在事業有成回國定居要在成長出生地定居，找尋地標建築，但礙於中永和開發成熟，既是新北市人口重鎮也是置產的蛋黃區，因此土地供給有限，長年以來在區域內可選擇的新建案不多，特別是捷運沿線，換屋需求大於建案供給，尤其是地標型建築規劃採高檔建材配備的優質住宅。<br><br>這類換屋族群有足夠的購屋預算，多半屆臨退休潮，在住宅需求選擇上除了希望享有電梯大樓的管理，更重要的，是舒適的居住空間與環境，因此對於三房產品的需求強烈加上重劃區也非這類換屋族群的首選，因此多半的換屋族希望在生活機能成熟、捷運交通便捷的地段，找尋最適宜自住產品，近捷運站的市心地區，指標建案中和「太陽帝國」一推出，就能很快吸引在地人與北市客群的目光。<br><br>「太陽帝國」主打三房產品，規劃33至39 坪，總價2200萬元起含平面車位，除了換屋族群感興趣，小資族或新婚族的詢問度極高。不動產業者指出，「太陽帝國」的客戶多半是建案週邊區域客或有地緣性關係者，不少是過去居住的老舊公寓因屋鄰達30年以上，從住宅安全來看有急迫換屋需求。且目前中和區老屋的總價行情落在1800萬元無車位(不包含翻新裝潢金額)，相對「太陽帝國」全棟採鋼骨結構打造，既是中和地標建築，又以總價2200萬起含車位，結構更加安全，顯得划算，更有價值。另一類客群，是位於北市中正與大安區的居民，太陽帝國步行三分鐘，從南勢角站搭捷運，4站進中正區古亭站，5站進大安區東門站，對於當地房價，相對便宜許多，性價比高，受到當地換屋族群的親睞。<br><br>此外，「太陽帝國」為樓高36層的超高樓雙S級制震國際級地標宅，採取SC鋼骨混凝土構造，鋼骨結構加上CFT柱內外灌漿萬磅水泥，同時還採用全棟144組BRB制震器，至少可以抵抗六級地震，在結構上是雙和史上僅有且少數以全棟鋼骨結構、BRB制震工法住宅，其結構強度媲美台北101金融大樓，不僅是中和區新興地標建築，更符合換屋族對於安全的要求。<br><br>「太陽帝國」具有1128坪壯闊基地，共規劃607戶、店面13戶，全案已銷售突破7成，甚至締造一個月熱銷60戶的紀錄，買方又以換屋族與置產客為主，是今年以來雙和一帶備受矚目的指標建案。',
          links: [
            {
              title: '太陽帝國',
              id: '1',
              url: 'https://ace.debang.tw/',
            },
          ],
        },
        {
          type: 2,
          title: '【東森新聞】36層全棟鋼骨制震宅 南勢角建案太陽帝國熱銷',
          subtitle: '',
          date: '2020/11/13 16:53',
          author: '東森新聞',
          imgs: [require('../newimg/6/東森.jpg')],
          desc:
            '捷運沿線住宅一直都很熱門，其中台北捷運中和新蘆線上，最近屬南勢角最夯，因為房價在六字頭，比起隔五站的東門，少了四成，還有三環三線的優勢，受到換屋族喜愛。<br><br>上班時間人潮湧入，台北捷運中和新蘆線橫跨新店溪，連接台北市大安區到新北中永和地帶，是不少人買房的首選位置，不過捷運中和新蘆線最精華的永康商圈東門站，周邊房屋單坪破百萬，讓許多人望之卻步，而南勢角站新建案「太陽帝國」，每坪6字頭。<br><br>瑞普萊坊市場研究部總監黃舒衛：「這邊的生活機能發展其實非常成熟，再加上它南側其實有一個非常好的天然資源，也會吸引不管是在地的換屋族，或者在其他地方工作的一些台北市新北市的這些小家庭，或是換屋需求會往這邊移動。」<br><br>走出南勢角捷運站過一條馬路，美食林立商家集中，生活機能完善，對換屋族來說，與其選擇重劃區小宅，在市區便利的產品更具吸引力。<br><br>太陽帝國專案經理林鈺浩：「雙和地區的話，有我們國道三號水源快速道路，新北環快還有六四快速道路，南來北往整個雙北市地區的話，都相當便捷，太陽帝國位於在南勢角站，及景平站的中間處，步行只要三到四分鐘。」<br><br>粉色調三房空間，客餐廳結合，動線合而為一，讓整個空間顯得更開闊，適合有換屋需求的小家庭。<br><br>太陽帝國專案經理林鈺浩：「一般的案子來講的話，都是蓋RC結構，那我們太陽帝國的話，結構上是採取整棟的鋼骨系統，再加上我們特殊工法CFT，柱內外灌漿萬磅水泥，還有就是我們整棟，加裝了144支BRB制震器，我們結構上有RC的剛性，以及結合了鋼骨的韌性，制震的條件來講的話，也會比擬我們台北101。」<br><br>短短一個月銷售超過60戶，雙和指標太陽帝國也衝出交易好成績。',
          links: [
            {
              title: '太陽帝國',
              id: '1',
              url: 'https://ace.debang.tw/',
            },
          ],
        },

        //以下為神采飛洋新聞2篇
        {
          type: 2,
          title: '【中時新聞網】百萬自備款買新北三房 神采飛洋賣破七成',
          subtitle: '',
          date: '2020/11/25',
          author: '中時新聞網 朱立君',
          imgs: [
            require('../newimg/5/中時1.jpg'),
            require('../newimg/5/中時2.jpg'),
            require('../newimg/5/中時3.jpg'),
            require('../newimg/5/中時4.jpg'),
          ],
          desc:
            '近期新北市五股洲子洋重劃區建設不斷，從設置產業園區，到規劃中的五泰輕軌，同時擁親水的大台北都會公園，讓五股成為房市熱門區，其中多為三重、蘆洲移居過來，剛成家不久的青年首購族，在租金漲個不停的情況下，普遍有「租不如買」的觀念。而首購族在買房時，首要考量的就是房價，畢竟地段再好，生活品質再棒的房地產，也必須有足夠預算才買得起。茂德建設在五股推出的新案「神采飛洋」，即針對首購族需求而規劃，打出「百萬自備款即可入主新北三房經濟宅」等口號，成功引起熱銷。<br><br>【神采飛洋標榜購屋有三低 開賣即造成熱銷】<br>針對首購族對於房價較為敏感，「神采飛洋」標榜「低總價、低月付、低自備」三低付款模式。總價上，最低只要1,068萬即可買到三房兩衛含車位，而兩房加車位最低也只要768萬；月付2萬也在剛成家的住戶可負擔的範圍內；自備款為總價的10%，約110萬左右就能入住三房，若是購買兩房則只需80萬自備款。三低付款模式成功減輕預算上的壓力，讓消費者買房更輕鬆。<br><br>另外，由於「神采飛洋」位於五股精華地段，除價格親民、入手難度較低外，還保有良好的抗跌性，未來五泰輕軌完工後，交通便利性大增，將順勢帶動當地房價上漲，使得「神采飛洋」有更大增值空間。<br><br>【洲子洋重劃區題材豐富 發展前景看好】<br>「神采飛洋」坐落在新城五路與新城八路之間，鄰近成泰商圈與工商路商圈，知名賣場如全聯、頂好均在此設有分店，造就優異生活機能。而經歷COVID-19疫情後，住戶也建立起居家防疫概念，「公園防疫宅」成為購屋新趨勢，「神采飛洋」鄰近洲子洋公園，大片綠地與自行車道，構築起水岸生活圈，提升生活品質。交通部分，原本就享有國1、64與65、新北環快速道路，開車只需約15分鐘即可抵達台北車站，而規劃中的五泰輕軌也將在此設置F08站點，使得交通更加便捷。<br><br>與成泰路上的其他建案相比，「神采飛洋」的另一特點就是避開主要幹道，避開64快速道路車流往返所製造的噪音，既擁有便利交通，也享有安靜的居家環境。<br><br>【符合首購族買屋需求 神采飛洋熱銷7成】<br>擁有輕鬆付款、地段優異以及未來增值性高等特點，「神采飛洋」成功引起首購族與置產客的關注，從七月推案至今，每周平均有50~60組顧客前來賞屋，現已熱銷七成，即將進入完銷倒數階段。',
          links: [
            {
              title: '神采飛揚',
              id: '1',
              url: 'https://hoh.h35.tw',
            },
          ],
        },
        {
          type: 2,
          title:
            '【三立新聞】租不如買！「神采飛洋」區域最低價　入住洲子洋蛋黃區',
          subtitle: '',
          date: '2020/08/04 16:00:00',
          author: '三立新聞 生活中心／新北報導',
          imgs: [
            require('../newimg/4/三立1.jpg'),
            require('../newimg/4/三立2.jpg'),
            require('../newimg/4/三立3.jpg'),
            require('../newimg/4/三立4.jpg'),
            require('../newimg/4/三立5.jpg'),
            require('../newimg/4/三立7.jpg'),
          ],
          desc:
            '新冠肺炎重創全球經濟，國內持續處於低利率環境，五大銀行新增房貸利率創下歷史新低1.349%，宣告「租不如買」的時代正式來臨，更是首購族輕鬆成家的好時機。過去，不少年輕族群受限購屋預算，只能選擇老舊公寓入住，不但生活品質落後，居住年限不長，未來換屋更可能因屋齡過舊而難脫手。近年，不少發展快速的重劃區崛起，不但擁有重劃區房價的優勢，區域規劃完整，生活機能便利，新大樓的社區式管理及完善公設，更適合起步中的雙薪小家庭。近期在洲子洋重劃區開案的「神采飛洋」，便以區域內最低總價的優勢，創下開案一個月熱銷5成的佳績。<br><br>洲子洋重劃區因緊鄰佔地424公頃的「新北大都會公園」，因而被定位為大直水岸重劃區的再版。區域內街廓完整、綠覆率高，五股運動公園以及公園內新落成的五股國民運動中心，加上區域內歷史悠久的成州國小與公托幼兒園的學區，是集公園、校園、花園的健康樂活生活圈。而位於洲子洋蛋黃區精華地段的「神采飛洋」，更是距五股最熱鬧的成泰商圈僅兩分鐘步程的「一巷宅」，同時享有便利與清靜的優勢，成為洲子洋重劃區最受矚目的地段。<br><br>不僅擁有地段環境的優勢，「神采飛洋」更邀集打造陶朱隱園、維多利亞酒店、碧波白經驗的景觀藝術設計師徐世萃，參與台中帝寶、開璽吾界、頤海大院等建案的公共空間設計師徐慈姿，擁有波爾多、江翠一號、金城舞2等建築設計經驗的陳朝雄等三大設計師，集結多年豪宅名邸的設計經驗，聯手為年輕族群打造一個高品味的「幸福空間」。<br><br>神采飛洋專案經理江建德指出，為了實踐全民輕鬆成家的理念，神采飛洋打出「低總價」、「低自備」跟「低月付」的三低策略，推出738萬起含車位的兩房以及998萬三房兩衛邊間含車位的方案，打造年輕人買得起的家。他進一步分析，以目前五股地區的出租行情，三房可以有2萬元左右的租金水準，若以計算投資報酬率，約可維持在3%左右的一個投報率。<br><br>江建德補充，五泰輕軌今年已經通過了交通部的可行性評估，最快會在2023年開始動工，未來將連結到機場捷運線的輔大醫院站以及蘆洲捷運線，其中F08站距離「神采飛洋」基地僅步行2分鐘的距離，成為一大利多。而目前規劃中的國道1號五股交流道改善工程－增設北出及北入匝道」計畫，也將在五年後完工，未來五股的交通將更加便利',
          links: [
            {
              title: '神采飛揚',
              id: '1',
              url: 'https://hoh.h35.tw',
            },
          ],
        },

        //以下為碧波白新聞3篇
        {
          type: 2,
          title:
            '【中時新聞網】MUSE Design Awards得獎公布 台灣之光「碧波白」雙料',
          subtitle: '',
          date: '2020/11/03',
          author: '中時新聞網 朱立君',
          imgs: [
            require('../newimg/3/20201103002310.jpg'),
            require('../newimg/3/20201103002318.jpg'),
            require('../newimg/3/20201103002320.jpg'),
            require('../newimg/3/20201103002431.jpg'),
          ],
          desc:
            'MUSE Design Awards謬思設計獎為國際獎項協會International Awards Associates(IAA)的一項重要大獎，獎項設立的宗旨為集合全世界各個領域的設計構思，打造出未來設計新趨勢，並提供給創作者更豐富的設計靈感，經過評審嚴格審查後，僅有呈現最具創造力與美感的作品，才有機會捧起「謬思女神雕像獎盃」。今年的參賽情況相當踴躍，設計者無不展現創作技藝與巧思，爭取這項榮譽，日前已公布得獎名單，來自台灣的建築設計作品「碧波白」，在外觀設計與室內空間設計項目，均獲得金獎殊榮，成為2020台灣唯一雙料奪金的作品，成為建築設計界的「台灣之光」。<br><br>【百年建築團隊著手規劃 「碧波白」成就美學經典】<br>「碧波白」位於北台灣景色最優美的碧潭水岸，外觀為30層樓高白色波浪建築，一改高樓建築予人方方正正的刻板印象，因此與周圍建築物對比十分顯眼，成為新店當地相當醒目的地標。常需要會見賓客，住戶進出頻繁的交誼大廳，則運用燈光與大器的柱面設計，搭配平台鋼琴與其他精心布置的裝置藝術，讓人體驗華麗氛圍之餘，也能感受到精緻典雅的內涵。<br><br>受訪業者表示，這次之所以在MUSE Design Awards大獲好評，一舉雙料奪金，得完全歸功於背後大有來頭的設計團隊，「碧波白」的外觀設計部分，特別邀請到澳洲百年建築團隊PTW，該團隊善於挑選世界知名水岸打造地標建築，從雪梨Lumiere One Central Park，到杜拜Palm Jebel、北京水立方，每一件作品，都帶有國際眼界與格局，並成功為城市留下百年傳承的經典之作。而在內部空間規劃上，則邀請到台灣空間設計之光—涵碧樓美學大師王勝正、台北101燈光設計師林朗菴聯手打造出極富後現代主義美感的公設大廳。在建築外觀與內部空間皆精心擘劃的情況下，才使得「碧波白」順利拿下難能一見的Muse建築設計雙金獎，為碧潭畔豎立起一座唯美地標。<br><br>【碧波白地理條件優 兼顧交通便利與生活機能】<br>「碧波白」鄰近捷運新店站，擁有碧潭畔的悠閒生活環境，生活機能則依靠新店最繁榮的北新路商圈，商家賣場應有盡有，交通往返也相當便利，開車5分鐘即可駛上國道，約15分鐘抵達信義區。開價約落在每坪68~78萬之間，現已進入完銷倒數階段，限量釋出38、45坪精華保留席以及78坪大戶豪邸。業者表示，由於新冠疫情影響造成台商回流，而「碧波白」的整體規劃相當受到台商們的喜愛，再加上周遭生活條件優異，因此現階段成交的皆為自住客，其中不乏從大安區、信義區搬來的換屋族，是大台北近年來難得一建的優質建案。',
          links: [
            {
              title: '碧波白官網',
              id: '1',
              url: 'https://www.bmwlife.com.tw/',
            },
          ],
        },
        {
          type: 2,
          title: '【東森新聞】坐擁全齡機能！新店碧波白兩代宅躍升換屋首選',
          subtitle: '',
          date: '2020/07/07 13:01',
          author: '東森新聞',
          imgs: [require('../newimg/2/1.jpg')],
          desc:
            '最近房市兩代宅熱銷，因為不少父母跟小孩希望同鄰不同居，就出現不少人一次買下兩戶，一大配一小，不僅能就近照顧，也能保有隱私。像是碧潭建案碧波白就看準新店的全齡機能推出兩代宅，衝出好成績。<br><br>依山傍水、寧靜美景讓人著迷，新店碧潭房市熱，更有機能來幫襯。<br><br>東森財經記者 劉佩綺：從碧潭風景區，步行的距離就可以來到，新店傳統的光明街商圈，在這裡可以找到傳統的台灣小吃，甜點、飲料，都能一次滿足。<br><br>便利商店、連鎖賣場，都在步行範圍，更有學區、醫院，從小孩到年長者，全齡需求，都包含在內。<br><br>北市大市政管理學院院長 邱英浩：新店未來的發展，從都市更新跟整體開發，這兩部分的配合，未來一定會朝向，混合使用高效率便利而且宜居，也是辦公的好場所，所以這個區域的發展，我認為，可能在整個新北或台北市來講，新店一定是前幾位的發展區域。<br><br>建案碧波白，就是看好新店碧潭全齡機能，祭出了兩代宅，父母住大房、孩子住小房，一次買下同社區兩間房，主打城市裡一碗湯的距離互相照應，但大小坪數分棟管理，卻也能保有隱私空間，同鄰不同居，大受歡迎。<br><br>碧波白專案經理 蕭遙：買兩代宅優勢，非常明顯，像很多客戶是換屋族群，他把舊屋賣掉，一次來買兩戶，那他能夠符合全齡化需求，以前早期換屋，一次要換到一個比較大的空間，那兩代宅的概念，就是說可以一大配一小，現在難免都會注重彼此的隱私性，同鄰不同居，我們所謂煲一碗湯的距離，這是大家覺得最好的，小朋友結婚後有老婆，跟公婆有彼此的空間，彼此的作息也比較不影響，包括有時候，小朋友作息時間跟長輩，不見得能夠搭配，讓彼此可以就近照顧，但又保有彼此的隱私。',
          links: [
            {
              title: '碧波白官網',
              id: '1',
              url: 'https://www.bmwlife.com.tw/',
            },
          ],
        },
        {
          type: 2,
          title: '【東森新聞】翻修老屋不如換新房！ 換屋客搶進新店碧波白',
          subtitle: '',
          date: '2020/06/23 14:10',
          author: '東森新聞',
          imgs: [require('../newimg/1/1.jpg')],
          desc:
            '愈來愈多人換屋都選擇買新房，因為老屋裝修費用動輒上百萬元，不如當新屋的頭期款，新店建案碧波白全棟鋼材用料上萬噸，是一般建案的兩倍，把結構安全拉到最高，也成功吸引換屋和退休族群。<br><br>夏日艷陽照耀下，水面波光粼粼，新店碧潭的愜意，讓人忘情於山水之間，這般氛圍，也成了許多人的置產首選。<br><br>東森財經記者 劉佩綺：一棟棟新建案沿著河畔蓋起來，其實根據交易顯示，在新北市老屋的交易佔比，只剩下總體的三成，也顯示民眾現在買房子，愈來愈偏好新房。<br><br>老屋逐漸退場，因為住了三四十年老公寓，如果要整修，1坪5萬元起跳，但畢竟鋼筋水泥構造的建築物，還是約有50年的耐用年限，不少人乾脆把動輒上百萬的裝潢費，當作換新屋的頭期款，下半輩子要住得更舒適。<br><br>屋比房屋總經理 葉國華：許多換屋族，本身目前就住在老舊的房子裡面，那他們本來想說，自己的舊家要整修要花不少錢，於是換屋的過程去思考，如果還是換舊房子，那每坪花5-8萬裝修費，這是跑不掉的，於是思考是不是，把這筆錢當作自備款，拿去買預售屋或新成屋。<br><br>住得安心安全最是關鍵，建案碧波白打出安全牌，30層SRC鋼骨制震，全棟鋼材用料高達1萬噸，是一般建案的2倍，鋼板厚度達5-7公分，更加厚實，也採世界級領先工法，連續壁與筏式施工，深入岩盤，耐震強度都升級。<br><br>碧波白專案經理 周益安：其實換屋的客戶，他們本身真的不缺房甚至有好幾棟，心中當然想要換就是要換最好的，我們碧波白除了地段、還有方便性，對他們來說，結構安全真的是首要條件，我們碧波白採用的是跟101相同中鋼的鋼材，是SRC的工法加CFT(鋼管混凝土結構)，這其實在市場上是比較少見的，舊房子其實免不了會有一些漏水或壁癌，尤其台灣又是大地震，有時候水管都會跑掉的，還不如把這些(裝修費)，拿來當頭期款，換一個最堅固的房子來居住，很多換屋族，也是因為這樣選擇碧波白。',
          links: [
            {
              title: '碧波白官網',
              id: '1',
              url: 'https://www.bmwlife.com.tw/',
            },
          ],
        },
      ],
      slideList: [
        require('../newimg/8/中時1.jpg'),
        require('../newimg/8/中時2.jpg'),
        require('../newimg/8/中時3.jpg'),
        require('../newimg/8/中時4.jpg'),
      ],
      currentItem: {},
    }
  },

  methods: {},

  mounted() {},

  created() {
    this.slideList = this.item_list[this.$route.params.id].imgs
    this.currentItem = this.item_list[this.$route.params.id]
    this.currentNum = Number(this.$route.params.id)
  },

  computed: {},

  watch: {
    $route() {
      this.currentItem = this.item_list[this.$route.params.id]
      this.currentNum = Number(this.$route.params.id)
    },
  },
}
</script>
