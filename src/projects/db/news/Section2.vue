<template>
  <div class="section2">
    <div class="news-container">
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
      <div class="swipe news-img" data-aos="fade-right" data-aos-delay="200" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true">
        <div class="swipe-wrap relative">
          <img v-for="(slide, i) in currentItem.imgs" :src="slide" :key="slide + i + 'slide'" :class="`swipe-item absolute ${slideIndex === i ? 'active' : ''} ${(slideIndex === (i + 1) || slideIndex === (i - currentItem.imgs.length + 1)) ? 'base' : ''}`">
          <div class="pagination absolute flex-ac">
            <div :class="`pagination-dot`" v-for="(slide, index) in currentItem.imgs" :key="slide + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
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
      <div class="back" @click="$router.push('/news')">
        ［回上一頁］
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
  margin: size(80) auto;
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

.back {
  margin-top: size(15);
  cursor: pointer;
}
.swipe {
  width: size(1280);
  height: size(850);
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

  &.base {
    z-index: 1;
    left: 0;
  }
  &.active {
    z-index: 2;
    left: 0;
  }
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
  .back {
    @include img_r_m(107, 0, 134);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.09;
    letter-spacing: sizem(3.3);
    text-align: left;
    color: #008fbb;
    white-space: nowrap;
    cursor: pointer;
    top: auto;
    bottom: sizem(80);
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
      slideList: [
        {
          title: '百萬自備款買新北三房 神采飛洋賣破七成',
          subtitle: '',
          date: '2020/11/25 09:51',
          author: '中時新聞網 朱立君',
          imgs: [
            require('../news/s2/4/20201125001673.jpg'),
            require('../news/s2/4/20201125001676.jpg'),
            require('../news/s2/4/20201125001677.jpg'),
            require('../news/s2/4/20201125001679.jpg')
          ],
          desc:
            '近期新北市五股洲子洋重劃區建設不斷，從設置產業園區，到規劃中的五泰輕軌，同時擁親水的大台北都會公園，讓五股成為房市熱門區，其中多為三重、蘆洲移居過來，剛成家不久的青年首購族，在租金漲個不停的情況下，普遍有「租不如買」的觀念。而首購族在買房時，首要考量的就是房價，畢竟地段再好，生活品質再棒的房地產，也必須有足夠預算才買得起。茂德建設在五股推出的新案「神采飛洋」，即針對首購族需求而規劃，打出「百萬自備款即可入主新北三房經濟宅」等口號，成功引起熱銷。<br><br>【房租連漲10年 促使租屋族轉當首購族】<br><br>據內政部統計，近十年房租均呈現上漲趨勢，而自2018年起，房租上漲幅度都在5%以上，加上房貸利率持續走低的助攻下，不少租屋族興起「租不如買」的念頭，紛紛進場購屋，也因此炒熱預售屋以及中古屋市場。<br><br>【神采飛洋標榜購屋有三低 開賣即造成熱銷】<br><br>針對首購族對於房價較為敏感，「神采飛洋」標榜「低總價、低月付、低自備」三低付款模式。總價上，最低只要1,068萬即可買到三房兩衛含車位，而兩房加車位最低也只要768萬；月付2萬也在剛成家的住戶可負擔的範圍內；自備款為總價的10%，約110萬左右就能入住三房，若是購買兩房則只需80萬自備款。三低付款模式成功減輕預算上的壓力，讓消費者買房更輕鬆。<br><br>另外，由於「神采飛洋」位於五股精華地段，除價格親民、入手難度較低外，還保有良好的抗跌性，未來五泰輕軌完工後，交通便利性大增，將順勢帶動當地房價上漲，使得「神采飛洋」有更大增值空間。<br><br>【洲子洋重劃區題材豐富 發展前景看好】<br><br>「神采飛洋」坐落在新城五路與新城八路之間，鄰近成泰商圈與工商路商圈，知名賣場如全聯、頂好均在此設有分店，造就優異生活機能。而經歷COVID-19疫情後，住戶也建立起居家防疫概念，「公園防疫宅」成為購屋新趨勢，「神采飛洋」鄰近洲子洋公園，大片綠地與自行車道，構築起水岸生活圈，提升生活品質。交通部分，原本就享有國1、64與65、新北環快速道路，開車只需約15分鐘即可抵達台北車站，而規劃中的五泰輕軌也將在此設置F08站點，使得交通更加便捷。<br><br>與成泰路上的其他建案相比，「神采飛洋」的另一特點就是避開主要幹道，避開64快速道路車流往返所製造的噪音，既擁有便利交通，也享有安靜的居家環境。<br><br>【符合首購族買屋需求 神采飛洋熱銷7成】<br><br>擁有輕鬆付款、地段優異以及未來增值性高等特點，「神采飛洋」成功引起首購族與置產客的關注，從七月推案至今，每周平均有50~60組顧客前來賞屋，現已熱銷七成，即將進入完銷倒數階段。',
          links: [
            /*{
              title: '立瑾醞官網',
              id: '1',
              url: 'https://lju.h35.tw/',
            },
            {
              title: '原文',
              id: '2',
              url: 'https://www.setn.com/News.aspx?NewsID=620831',
            },*/
          ],
        },
        {
          title: '租不如買！「神采飛洋」區域最低價　入住洲子洋蛋黃區',
          subtitle: '',
          date: '2020/08/04 16:00:00',
          author: '三立新聞 生活中心／新北報導',
          imgs: [
            require('../news/s2/3/2700816-PH.jpg'),
            require('../news/s2/3/2700819-PH.jpg'),
            require('../news/s2/3/2700820-PH.jpg'),
            require('../news/s2/3/2700821-PH.jpg'),
            require('../news/s2/3/2700822-PH.jpg'),
            require('../news/s2/3/2700843-PH.jpg'),
          ],
          desc:
            '新冠肺炎重創全球經濟，國內持續處於低利率環境，五大銀行新增房貸利率創下歷史新低1.349%，宣告「租不如買」的時代正式來臨，更是首購族輕鬆成家的好時機。過去，不少年輕族群受限購屋預算，只能選擇老舊公寓入住，不但生活品質落後，居住年限不長，未來換屋更可能因屋齡過舊而難脫手。近年，不少發展快速的重劃區崛起，不但擁有重劃區房價的優勢，區域規劃完整，生活機能便利，新大樓的社區式管理及完善公設，更適合起步中的雙薪小家庭。近期在洲子洋重劃區開案的「神采飛洋」，便以區域內最低總價的優勢，創下開案一個月熱銷5成的佳績。<br><br>洲子洋重劃區因緊鄰佔地424公頃的「新北大都會公園」，因而被定位為大直水岸重劃區的再版。區域內街廓完整、綠覆率高，五股運動公園以及公園內新落成的五股國民運動中心，加上區域內歷史悠久的成州國小與公托幼兒園的學區，是集公園、校園、花園的健康樂活生活圈。而位於洲子洋蛋黃區精華地段的「神采飛洋」，更是距五股最熱鬧的成泰商圈僅兩分鐘步程的「一巷宅」，同時享有便利與清靜的優勢，成為洲子洋重劃區最受矚目的地段。<br><br>不僅擁有地段環境的優勢，「神采飛洋」更邀集打造陶朱隱園、維多利亞酒店、碧波白經驗的景觀藝術設計師徐世萃，參與台中帝寶、開璽吾界、頤海大院等建案的公共空間設計師徐慈姿，擁有波爾多、江翠一號、金城舞2等建築設計經驗的陳朝雄等三大設計師，集結多年豪宅名邸的設計經驗，聯手為年輕族群打造一個高品味的「幸福空間」。<br><br>神采飛洋專案經理江建德指出，為了實踐全民輕鬆成家的理念，神采飛洋打出「低總價」、「低自備」跟「低月付」的三低策略，推出738萬起含車位的兩房以及998萬三房兩衛邊間含車位的方案，打造年輕人買得起的家。他進一步分析，以目前五股地區的出租行情，三房可以有2萬元左右的租金水準，若以計算投資報酬率，約可維持在3%左右的一個投報率。<br><br>江建德補充，五泰輕軌今年已經通過了交通部的可行性評估，最快會在2023年開始動工，未來將連結到機場捷運線的輔大醫院站以及蘆洲捷運線，其中F08站距離「神采飛洋」基地僅步行2分鐘的距離，成為一大利多。而目前規劃中的國道1號五股交流道改善工程－增設北出及北入匝道」計畫，也將在五年後完工，未來五股的交通將更加便利。',
          links: [
            /*{
              title: '立瑾醞官網',
              id: '1',
              url: 'https://lju.h35.tw/',
            },
            {
              title: '原文',
              id: '2',
              url: 'https://www.setn.com/News.aspx?NewsID=620831',
            },*/
          ],
        },
        {
          title: '住宅安全受重視 中和地標「太陽帝國」全棟採鋼骨結構為換屋首選',
          subtitle: '',
          date: '2020-11-06 18:46',
          author: '經濟日報 張瑞文',
          imgs: [
            require('../news/s2/2/161071133133167_P9028429.jpg'),
            require('../news/s2/2/161071133159705_P9028438.jpg')
          ],
          desc:
            '全台房市交易引爆，雖然話題集中在重劃區的小宅市場，但實際熱銷買氣還是呈現在個案表現。代銷業者坦言，對換屋族而言與其選擇重劃區小宅，市區內的換屋類產品更具吸引力，像是新北中永和多年來缺乏大型住宅案，因此區域內推出主打三房產品的「太陽帝國」，隨即吸引周邊換屋目光，一個月狂銷60戶，且主要以自住客為主。<br>房仲業者分析，中永和人口密度高，許多家庭都是早年到國外打拼人士，在事業有成回國定居要在成長出生地定居，找尋地標建築，但礙於中永和開發成熟，既是新北市人口重鎮也是置產的蛋黃區，因此土地供給有限，長年以來在區域內可選擇的新建案不多，特別是捷運沿線，換屋需求大於建案供給，尤其是地標型建築規劃採高檔建材配備的優質住宅。<br>這類換屋族群有足夠的購屋預算，多半屆臨退休潮，在住宅需求選擇上除了希望享有電梯大樓的管理，更重要的，是舒適的居住空間與環境，因此對於三房產品的需求強烈加上重劃區也非這類換屋族群的首選，因此多半的換屋族希望在生活機能成熟、捷運交通便捷的地段，找尋最適宜自住產品，近捷運站的市心地區，指標建案中和「太陽帝國」一推出，就能很快吸引在地人與北市客群的目光。<br>「太陽帝國」主打三房產品，規劃33至39 坪，總價2200萬元起含平面車位，除了換屋族群感興趣，小資族或新婚族的詢問度極高。不動產業者指出，「太陽帝國」的客戶多半是建案週邊區域客或有地緣性關係者，不少是過去居住的老舊公寓因屋鄰達30年以上，從住宅安全來看有急迫換屋需求。且目前中和區老屋的總價行情落在1800萬元無車位(不包含翻新裝潢金額)，相對「太陽帝國」全棟採鋼骨結構打造，既是中和地標建築，又以總價2200萬起含車位，結構更加安全，顯得划算，更有價值。另一類客群，是位於北市中正與大安區的居民，太陽帝國步行三分鐘，從南勢角站搭捷運，4站進中正區古亭站，5站進大安區東門站，對於當地房價，相對便宜許多，性價比高，受到當地換屋族群的親睞。<br>此外，「太陽帝國」為樓高36層的超高樓雙S級制震國際級地標宅，採取SC鋼骨混凝土構造，鋼骨結構加上CFT柱內外灌漿萬磅水泥，同時還採用全棟144組BRB制震器，至少可以抵抗六級地震，在結構上是雙和史上僅有且少數以全棟鋼骨結構、BRB制震工法住宅，其結構強度媲美台北101金融大樓，不僅是中和區新興地標建築，更符合換屋族對於安全的要求。<br>「太陽帝國」具有1128坪壯闊基地，共規劃607戶、店面13戶，全案已銷售突破7成，甚至締造一個月熱銷60戶的紀錄，買方又以換屋族與置產客為主，是今年以來雙和一帶備受矚目的指標建案。',
          links: [
          /*{
              title: '原文',
              id: '2',
              url:
                'https://www.chinatimes.com/realtimenews/20191009004715-260410',
            },
            */
          ],
        },
        {
          title: 'MUSE Design Awards得獎公布 台灣之光「碧波白」雙料奪金',
          subtitle: '',
          date: '2020/11/03 09:49',
          author: '文 中時新聞網 朱立君',
          imgs: [
            require('../news/s2/1/20201103002310.jpg'),
            require('../news/s2/1/20201103002318.jpg'),
            require('../news/s2/1/20201103002320.jpg'),
            require('../news/s2/1/20201103002431.jpg'),
          ],
          desc:
            'MUSE Design Awards謬思設計獎為國際獎項協會International Awards Associates(IAA)的一項重要大獎，獎項設立的宗旨為集合全世界各個領域的設計構思，打造出未來設計新趨勢，並提供給創作者更豐富的設計靈感，經過評審嚴格審查後，僅有呈現最具創造力與美感的作品，才有機會捧起「謬思女神雕像獎盃」。今年的參賽情況相當踴躍，設計者無不展現創作技藝與巧思，爭取這項榮譽，日前已公布得獎名單，來自台灣的建築設計作品「碧波白」，在外觀設計與室內空間設計項目，均獲得金獎殊榮，成為2020台灣唯一雙料奪金的作品，成為建築設計界的「台灣之光」。<br><br>【百年建築團隊著手規劃 「碧波白」成就美學經典】<br><br>「碧波白」位於北台灣景色最優美的碧潭水岸，外觀為30層樓高白色波浪建築，一改高樓建築予人方方正正的刻板印象，因此與周圍建築物對比十分顯眼，成為新店當地相當醒目的地標。常需要會見賓客，住戶進出頻繁的交誼大廳，則運用燈光與大器的柱面設計，搭配平台鋼琴與其他精心布置的裝置藝術，讓人體驗華麗氛圍之餘，也能感受到精緻典雅的內涵。<br><br>受訪業者表示，這次之所以在MUSE Design Awards大獲好評，一舉雙料奪金，得完全歸功於背後大有來頭的設計團隊，「碧波白」的外觀設計部分，特別邀請到澳洲百年建築團隊PTW，該團隊善於挑選世界知名水岸打造地標建築，從雪梨Lumiere One Central Park，到杜拜Palm Jebel、北京水立方，每一件作品，都帶有國際眼界與格局，並成功為城市留下百年傳承的經典之作。而在內部空間規劃上，則邀請到台灣空間設計之光—涵碧樓美學大師王勝正、台北101燈光設計師林朗菴聯手打造出極富後現代主義美感的公設大廳。在建築外觀與內部空間皆精心擘劃的情況下，才使得「碧波白」順利拿下難能一見的Muse建築設計雙金獎，為碧潭畔豎立起一座唯美地標。<br><br>【碧波白地理條件優 兼顧交通便利與生活機能】<br><br>「碧波白」鄰近捷運新店站，擁有碧潭畔的悠閒生活環境，生活機能則依靠新店最繁榮的北新路商圈，商家賣場應有盡有，交通往返也相當便利，開車5分鐘即可駛上國道，約15分鐘抵達信義區。開價約落在每坪68~78萬之間，現已進入完銷倒數階段，限量釋出38、45坪精華保留席以及78坪大戶豪邸。業者表示，由於新冠疫情影響造成台商回流，而「碧波白」的整體規劃相當受到台商們的喜愛，再加上周遭生活條件優異，因此現階段成交的皆為自住客，其中不乏從大安區、信義區搬來的換屋族，是大台北近年來難得一建的優質建案',
          links: [
            {
              title: '立瑾醞官網',
              id: '1',
              url: 'https://lju.h35.tw/',
            },
            {
              title: '原文',
              id: '2',
              url: 'https://ctee.com.tw/industrynews/building/137651.html',
            },
          ],
        },
      ],
      pageCount: 3,
      currentPage: 1,
      currentItem: {},
    }
  },

  methods: {},

  mounted() {
    this.currentItem = this.slideList[this.$route.params.id]
  },

  created() {},

  computed: {},
}
</script>
