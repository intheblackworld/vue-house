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
          <!-- <div class="swipe-btns absolute flex-ac flex-jb">
            <img
              src="./all/prev-btn.png"
              alt=""
              class="prev-btn"
              @click="decIndex"
            >
            <img
              src="./all/next-btn.png"
              alt=""
              class="next-btn"
              @click="addIndex"
            >
          </div> -->
        </div>
      </div>
      <!-- <img v-if="currentItem.img" :src="currentItem.img" alt="" class="news-img"> -->
      <div class="news-desc" v-html="currentItem.desc"></div>
      <div class="pagination flex-c">
        <a class="pagi" target="_blank" v-for="(link, index) in currentItem.links" :key="'pagi' + index" :href="link.url">{{link.title}}</a>
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
  font-size: size(64);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #ff9e00;
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
    border: solid 1px #ff9e00;
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
      background-color: #ff9e00;
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
    color: #ff9e00;
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
    height: sizem(200);
    margin-bottom: sizem(15);
    .swipe-item{
    width: 100%;
    object-fit: cover;}
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
      border: solid 1px #ff9e00;
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
      list: [
        {
          title: '立瑾綻於鳳鳴預定地隆重開工 祈求一切平安、順遂',
          subtitle: '',
          date: '2021/3/4(四)',
          author: '',
          imgs: [
            require('../news/s2/8/02.jpg'),
            require('../news/s2/8/01.jpg'),
          ],

          desc: '位於鳳鳴新市鎮的新古典建築美墅「立瑾綻」於10月22號正式『好日開工』！立瑾建築機構林總經理帶領團隊一起為台灣祈福，也祈望工程一切順利平安！<br><br>鶯歌曾在2012年榮獲聯合國「國際宜居城市」，氣候舒適宜人，還有便利的交通路網–6分鐘上北二高、鳳鳴火車站、預定的鶯歌捷運站、到桃機也很方便，鄰近的鳳鳴重劃區於焉成為大台北蛋白的熱門建案區，「立瑾綻」位於台鐵鳳鳴站第一排精華地，今日的開工讓團隊都非常地興奮期待！',
          links: [
        /*    {
              title: '立瑾WAY官網',
              id: '1',
              url: 'https://way.h35.tw/',
            },*/
          ],
        },
        {
          title: '因應COVID-19新冠肺炎 立瑾建築機構自主快篩',
          subtitle: '',
          date: '2021/3/4(四)',
          author: '',
          imgs: [
            require('../news/s2/7/04.jpg'),
            require('../news/s2/7/01.jpg'),
            require('../news/s2/7/03.jpg'),
            require('../news/s2/7/02.jpg'),
          ],

          desc: '因本土疫情嚴峻，台灣進入第三級防疫警戒，整體國家經濟及人民健康受到極大影響。在社會醫療支援尚未明朗的情況下，自我檢測是個人維護同時保障他人健康的方法。<br><br>立瑾建築機構的林總經理，深知員工即是企業的重要財富，於6/17日委由林信祐診所林院長，安排全體員工實行COVID-19篩檢，最終結果皆為陰性！日後也將持續做好防護措施及自主健康管理。<br><br>在此，願大家都能平安健康，共相扶持，渡過疫情！',
          links: [
        /*    {
              title: '立瑾WAY官網',
              id: '1',
              url: 'https://way.h35.tw/',
            },*/
          ],
        },
        {
          title: '鶯歌最夯建案 立瑾WAY 3/6即將開案',
          subtitle: '',
          date: '2021/3/4(四)',
          author: '',
          imgs: [
            require('../news/s2/6/1.jpg'),
            require('../news/s2/6/2.jpg'),
          ],

          desc: '看準「鳳鳴重劃區」前景，新北首購族逆勢搶進，立瑾WAY 潛銷期，即熱詢好評不斷，除了早鳥超值優惠，豪宅等級的建材標配與超優格局，使年節前後預約人潮不絕。<br><br>如今將於3/6（六）正式開案，備有精緻美味點心，戰鼓醒獅表演。誠摯邀請各界嘉賓共襄盛舉，撥冗蒞臨新北鶯歌的接待中心，共享這份喜悅與治癒好宅帶來的驚喜。<br><br><br>◤活動流程◢ <br>13:00   貴賓、媒體到場<br>14:00   主持人開場<br>14:05   戰鼓醒獅演出<br>14:15   長官與貴賓致詞、唱名<br>14:25   開案儀式 業績長紅<br>14:35   產品介紹<br>14:45   樣品屋介紹<br>15:00   圓滿落幕 業績長紅<br><br>「鶯歌鳳鳴重劃區」，擁有新北難求的親民價格，加上「桃園鐵路地下化」的加持，未來走路3分鐘即到 「鳳鳴火車站」，至台北車站不僅縮短20分鐘路程，更有捷運板南線延伸 「三鶯線」 ，串連「桃機、高鐵」，雙北桃園任意馳騁。<br><br>立瑾建設，以人為本，扎實當下，放眼未來，用心打造恆久經典的宜居住宅。',
          links: [
            {
              title: '立瑾WAY官網',
              id: '1',
              url: 'https://way.h35.tw/',
            },
          ],
        },
        {
          title: '三重立瑾醞召開第一次區權會',
          subtitle: '',
          date: '2021/1/3(日)',
          author: '',
          imgs: [
            require('../news/s2/5/a1.jpg'),
            require('../news/s2/5/a2.jpg'),
            require('../news/s2/5/a3.jpg'),
            require('../news/s2/5/a4.jpg'),
          ],

          desc: '2021/1/3(日)三重立瑾醞第一次區域所有權人大會，會議實記！',
          links: [
            {
              title: '立瑾醞官網',
              id: '1',
              url: 'https://lju.h35.tw/',
            },
          ],
        },
        {
          title: '立瑾醞 三重水岸正大3房 純住宅智能規劃 永久景觀棟距稀有珍貴',
          subtitle: '',
          date: '2019/10/09 19:41',
          author: '中時新聞網 綜合報導',
          imgs: [
            require('../news/s2/1/20191009004718.jpg'),
            require('../news/s2/1/20191009004721.jpg'),
            require('../news/s2/1/20191009004722.jpg'),
            require('../news/s2/1/20191009004724.jpg'),
            require('../news/s2/1/20191009004726.jpg'),
          ],
          desc:
            '新北市三重區生活機能成熟、交通便捷，一直是大台北地區購屋的熱門區域。三重區內的二重疏洪道重劃區，具有雙捷運線、緊鄰距北市一橋之隔等地段條件，尤其左岸，不僅擁有區域既有的生活機能優勢，更因為稀有水岸景觀、寬闊視野與廣大綠帶，以及更優於右岸的價格優勢，吸引許多置產、自住客群的目光。<br><br>二重疏洪道重劃區以淡水河為界，區內有雙捷運、雙快速道路的交通優勢，以及兼具都會區稀有的水岸景觀，近幾年成為大台北熱門重劃區段。看好二重疏洪道重劃區未來性，立瑾建設在左岸推出純住宅產品「立瑾醞」，除了地段既有的優勢，水岸校園永久棟距、正2房、正3房規劃、戶戶土地持份超過10坪等規劃，在區域內獨具一格，受到換屋、置產客層高度關注。地產專家分析，寬闊視野、綠帶景觀，加上中和新蘆線與機場線雙捷運，該區段未來性看好，發展潛力備受期待。<br><br>「立瑾醞」正臨神農街、面向7755坪國、中小預定地，擁有超寬闊永久棟距。生活機能以幸福東路、光復路、化成路、重新路為主，家樂福、IKEA都在附近。交通上，近重新橋，約10分鐘車程可達台北西門，擁有捷運中和新蘆線「先嗇宮站」、機場線雙捷運「三重站」，開車可直上台64線、台65線快速道路，連結新北環快、串聯國道一號中山高速公路。<br><br>優質規劃也是「立瑾醞」主要優勢，基地面積583坪，樓高12層、地下2樓，前庭臨路退縮26米、後院退縮24米，建蔽率20%，前庭、後院合計擁有460坪寬闊空間。全案規劃為43戶純住宅大樓，正2房、正3房規劃，44坪3房、41坪3房、38坪3房，及31坪2房，同層4戶，雙電梯。<br><br>現場專案經理指出，「立瑾醞」是區域內唯一按照規格、以真正大3房為主力的建案，像是41.45坪3房，面國、中小預定地擁有永久景觀、頂樓僅規劃一戶75.8坪更是區域內唯一。<br><br>「頂樓僅規劃一戶，客廳、主臥雙露臺，全室採光。」專案經理表示，頂樓該戶四面分別可見大屯山、觀音山、林口臺地及前庭景觀、寬闊國、中小預定地。「是區域中唯一一間大坪數3房格局，非常稀有、珍貴。」<br><br>室內挑高3.2米，戶戶標配包含小米AI音箱、石頭掃地機器人、小米空氣淨化氣2S、小米智慧攝影機1080P等智慧家庭設備。廚具包含抽油煙機、烘碗機、瓦斯爐等全採用櫻花，並含永久免費油網送到家、永久免費廚房健檢、永久免費水質健檢等服務，衛浴採用TOTO衛浴、Hansgrohe德國百年衛浴品牌。大廳挑高4.2米，設有健身房、交誼廳、閱覽室等實用休閒公設，全棟規劃有光纖到家、三菱電梯、ATS不斷電系統、廚餘冷藏、長庚活水系統、STUDOR防疫、鑄鋁玄關門、eTag停車場管理等貼心設備。現場專案表示，目前開價每坪43~46萬元，一戶一車位，全部坡道平面車位，每位210~220萬元，2房已經接近完銷，預計2020年6月可完工交屋。',
          links: [
            {
              title: '立瑾醞官網',
              id: '1',
              url: 'https://lju.h35.tw/',
            },
            {
              title: '原文',
              id: '2',
              url:
                'https://www.chinatimes.com/realtimenews/20191009004715-260410',
            },
          ],
        },
        {
          title: '快來「立瑾醞」！ 地主自己當',
          subtitle: '',
          date: '2019-08-29',
          author: '聯合新聞網 李文全',
          imgs: [require('../news/s2/2/160683225228081_P6748206.jpg')],
          desc:
            '新三重時代來臨了！北市東西翻轉大計劃，北門與雙子星特區的「西區復興計劃」，有望復興西區繁榮的新樣貌，而緊鄰一橋之隔的三重，具備地利優勢，加上中美貿易大戰一觸擊發，台商返鄉潮效應之下，各產業發展面臨巨大變化，看好產業改變帶來的翻轉能量，包括玉山金控、群光電子、藍天電腦及未來東森商業總部，都看見蛻變中的新三重，率先瞄準重劃區進駐，而這股充沛的產業浪潮，也即將改寫三重新風貌。<br><br><b>區域少見正大3房 擁有河景校園雙視野景觀</b><br>立瑾建設預見此趨勢，選在三重左岸重劃區推出口碑建案「立瑾醞」，基地有583坪，正對7,755坪校園預定地，且緊鄰424公頃大台北都會公園，規劃為一棟12樓，一層四戶，正2-3房，31-44坪，僅43戶的智能純住宅。相對區域內其它同級產品，「立瑾醞」20%低建蔽率，讓住戶擁有更大的空間，真正落實正二房、正三房應有的規格，讓居家環境更舒適宜人。負責銷售的林經理表示：「建案訴求水岸學校當鄰居、河景校園雙視野景觀，預計年底落架，於明年第二季完工交屋。4字頭的開價比起三重市區平實不少。親民合理的價格結合優越的生活環境和交通性，「立瑾醞」自8月初公開後，每週來人賞屋落在20組以上，目前兩房產品已所剩不多，主推的是區域少見的正大3房。」<br><br><b>戶戶升級智能好宅 住在這裡超有感</b><br>「立瑾醞」是立瑾建設在三重地區第一個精緻規劃的建案，建材上相當講究，不僅智能居家系統，其它引人注目的精工設備更是戶戶標配，包含德國Hansgrohe衛浴、TOTO衛浴、樂奇暖風機、櫻花永久免費健檢整體廚房、長庚活水系統、FTTH光纖到府、STUDO吸氣閥、維夫拉克電子鎖、ATS不斷電系統，eTag停車場管理。智能居家、安全監控、空氣淨化、智慧音箱，貼心完善的設備讓生活超有感。<br><br><b>想住大3房 來這裡看就對了</b><br>林經理進一步指出，「立瑾醞」有三點特色是目前同區推案中絕無僅有的；除了是區域內唯一的正大3房產品，它更是全區最高土地持分的產品，戶戶持分至少10坪以上。此外，全棟全平面車位設計，一戶配一車位。想購得價格實惠且品質優良的好宅，民眾不妨趁暑期即將結束，把握機會帶著家人賞屋。<br><br><b>接待中心：新北市三重區神農街451號</b>',
          links: [
            {
              title: '立瑾醞官網',
              id: '1',
              url: 'https://lju.h35.tw/',
            },
            {
              title: '原文',
              id: '2',
              url: 'https://house.udn.com/house/story/11132/4015881',
            },
          ],
        },
        {
          title: '別再買縮水版3房了！立瑾醞三重水岸大3房一次買到位',
          subtitle: '',
          date: '2019/10/21 08:00',
          author: '',
          imgs: [
            require('../news/s2/3/2193147-XXL.jpg'),
            require('../news/s2/3/2193145-PH.jpg'),
          ],
          desc:
            '三重二重疏洪道左側重劃區，因為具備水岸景觀與交通完備2大優勢，加上房價相對親民，是近年首購、首換型產品的推案熱區。<br><br>8月登場迄今未滿兩個月的新案「立瑾醞」，正2房產品賣到僅剩1樓挑高4米2最後1戶，正3房的完美格局，更被網路口碑推爆，每周都吸引超過20組以上來人看屋。<br><br><b>小3房根本很難住 立瑾醞大3房優勢凸顯</b><br>負責銷售的林經理指出「新興重劃區的3房往往為了遷就總價，選擇大砍坪數，硬要在28-32坪內擠出3房格局，這類縮水版3房就是假3房，根本很難住！預售還可以唬弄消費者，但未來成屋要轉手，其實價值遠不如正3房。」<br><br>而這也是「立瑾醞」38坪-44坪大3房越賣越熱的關鍵原因，「比過一圈，就知道Big size正3房的價值。」<br><br>實際坪數是影響未來居住舒適度的關鍵，以前標準三房，室內將近30坪，現在建商新蓋的「小三房」，室內空間往往不到20坪。<br><br>不少民眾等交屋入住後才發現，所有家具都要配合訂做尺寸縮小版，擺放完家具後客廳已經沒有什麼讓孩子活動的空間。<br><br>除了主臥勉強塞進雙人床外，小孩房的大小只能算嬰兒房，沒住幾年又因空間不敷孩子成長所需，面臨換房的需求。「買小3房最後反而因小失大，那為何不一開始就一次買到位，選擇真正實際好住的大3房？」<br><br><b>二重疏洪道重劃區左岸大3房 高性價比吸睛</b><br>「立瑾醞」目前主力銷售包括A1戶44坪、A2戶41坪、A5戶38坪三種坪數；A1戶享七千多坪校園景觀，A2戶擁抱河景與校園棟距景觀，A5戶遙望新莊市景及林口台地。<br><br>每坪開價43-46萬元，三房含車位總價接近2000萬，每戶搭售一坡道平面車位，車位售價210-220萬元。<br><br>個案擁有景觀、棟距、大視野、水岸，加上中和新蘆線「先嗇宮站」與機場線「三重站」雙捷運加持，轉個彎就能直上台64八里新店快速道路，連結新北環快銜接板橋、中和、永和、新店，串聯中山高國道系統，區位潛力無限。<br><br>「立瑾醞」基地面積583坪，規劃均值43戶純住宅，每戶未來的土地持份都超過10坪，相當於自己當地主的概念，又享有424公頃大都會水岸公園、7755坪校園預定地。<br><br>除滿足頂崁產業區的業主需求外，也因較二重疏洪道重劃區右岸三重段的5字頭房價親民，吸引三重、新莊客用原本2房預算來左岸的「立瑾醞」一次到位買大3房。',
          links: [
            {
              title: '立瑾醞官網',
              id: '1',
              url: 'https://lju.h35.tw/',
            },
            {
              title: '原文',
              id: '2',
              url: 'https://www.setn.com/News.aspx?NewsID=620831',
            },
          ],
        },
        {
          title: '立瑾醞 口碑推爆：三重水岸住大3房的幸福',
          subtitle: '',
          date: '2019.08.29',
          author: '文 鄭啟明',
          imgs: [
            require('../news/s2/4/30-98629-001.jpg'),
            require('../news/s2/4/27-98629-005.jpg'),
          ],
          desc:
            '三重二重疏洪道左側重劃區，一直具有水岸景觀與交通完備的兩大優勢。寬闊的視野與綠帶景觀，加上中和新蘆線「先嗇宮站」與機場線雙捷運「三重站」，轉個彎就能直上台64八里新店快速道路，連結新北環快銜接板橋、中和、永和、新店，串聯中山高國道系統，這裡正成為未來開發潛力股。區內8月登場的新案「立瑾醞」，以水岸校園永久棟距、正二房與正三房規格，和戶戶土地持份逾10坪的三大優勢，網路口碑推爆。<br><br>「立瑾醞」規劃為43戶的純住宅大樓，一層四戶，產品規格分為44坪三房、41坪三房、38坪三房，以及31坪兩房，戶戶標配智慧家庭設備、Hansgrohe、TOTO衛浴，及提供永久保固與水質檢測的櫻花廚具。所有房型皆享有公園綠地的開闊景觀，總價1500萬起可購得二房含車位。<br><br>負責銷售的林經理指出，「立瑾醞」的優勢在於，它是區域內「唯一以大3房為主力」的建案。二重疏洪道重劃區左岸的眾多建案中，目前僅有『立瑾醞』按規格打造真正的三房（38~44坪）、兩房（31坪）住宅，因此無論哪一種房型，實際坪數都較它案同級產品更大。<br><br>此外，僅43戶的純住社區，戶戶平均持分583坪的基地面積，換算後每戶所持分的土地面積超過10坪，更享有424公頃大都會水岸公園綠地河景、將近八千坪校園預定地的第一排永久棟距。相較於同區右岸三重段5字頭的房價，左岸充滿潛力的平實價格，使得「立瑾醞」自八月初開案迄今，每周來客數皆維持在20組左右。除有來自新莊和三重的換屋族群，也吸引不少頂崁工業區的企業主在此換屋、置產。',
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

        /*
      {
        title: '立瑾醞 享受大三房、水岸景觀之美',
        subtitle: '',
        date: '2019年8月30日',
        author: '中時新聞網 綜合報導',
        img: '',
        desc:'商時報【台北訊】 三重二重疏洪道左側重劃區，一直具有水岸景觀與交通完備的兩大優勢。寬闊的視野與綠帶景觀，加上中和新蘆線「先嗇宮站」與機場線雙捷運「三重站」，轉個彎就能直上台64八里新店快速道路，連結新北環快銜接板橋、中和、永和、新店，串聯中山高國道系統，這裡正成為未來開發潛力股。區內8月登場的新案「立瑾醞」，以水岸校園永久棟距、正二房與正三房規格，和戶戶土地持份逾10坪的三大優勢，網路口碑推爆。 「立瑾醞」規畫為43戶的純住宅大樓，一層四戶，產品規格分為44坪三房、41坪三房、38坪三房，以及31坪兩房，戶戶標配智慧家庭設備、Hansgrohe、TOTO衛浴，提供永久保固與水質檢測的櫻花廚具。各房型皆享公園綠地開闊景觀，總價1,500萬起可購得二房含車位。 負責銷售的林經理指出，「立瑾醞」的優勢在於，它是區域內「唯一以大三房為主力」的建案。二重疏洪道重劃區左岸的眾多建案中，目前僅有「立瑾醞」按規格打造真正的三房（38∼44坪）、兩房（31坪）住宅，因此無論哪一種房型，實際坪數都較它案同級產品更大。 此外，僅43戶的純住社區，戶戶平均持分583坪的基地面積，換算後每戶所持分的土地面積超過10坪，更享424公頃大都會水岸公園綠地河景、將近8千坪校園預定地的第一排永久棟距。相較於同區右岸三重段五字頭的房價，左岸充滿潛力的平實價格，使得「立瑾醞」自8月初開案迄今，每周來客數皆維持在20組左右。除有來自新莊和三重的換屋族群，也吸引不少頂崁工業區的企業主在此換屋、置產。地址：新北市三重區神農街451號，洽詢電話：（02）2995－8585，官網：https://reurl.cc/md6DG7。',
        links: [
            {
              title: '立瑾醞官網',
              id: '1',
              url: 'https://lju.h35.tw/',
            },
            {
              title: '原文',
              id: '2',
              url: 'https://tw.news.yahoo.com/立瑾醞 享受大三房、水岸景觀之美-215015395--finance.html',
            },
          ],
      },*/
      ],
      /*
      list: [...Array(18).keys()].map((i) => ({
        title: '立瑾醞 三重水岸正大3房 純住宅智能規劃 永久景觀棟距稀有珍貴',
        subtitle: '',
        date: '2019/10/09 19:41',
        author: '中時新聞網 綜合報導',
        img: require('./s1/1/20191009004718.jpg'),
        desc:
          '新北市三重區生活機能成熟、交通便捷，一直是大台北地區購屋的熱門區域。三重區內的二重疏洪道重劃區，具有雙捷運線、緊鄰距北市一橋之隔等地段條件，尤其左岸，不僅擁有區域既有的生活機能優勢，更因為稀有水岸景觀、寬闊視野與廣大綠帶，以及更優於右岸的價格優勢，吸引許多置產、自住客群的目光。<br><br>「立瑾醞」為純住宅產品，戶戶採光佳。圖/業主提供。<br>「立瑾醞」為純住宅產品，戶戶採光佳。圖/業主提供。<br>二重疏洪道重劃區以淡水河為界，區內有雙捷運、雙快速道路的交通優勢，以及兼具都會區稀有的水岸景觀，近幾年成為大台北熱門重劃區段。看好二重疏洪道重劃區未來性，立瑾建設在左岸推出純住宅產品「立瑾醞」，除了地段既有的優勢，水岸校園永久棟距、正2房、正3房規劃、戶戶土地持份超過10坪等規劃，在區域內獨具一格，受到換屋、置產客層高度關注。地產專家分析，寬闊視野、綠帶景觀，加上中和新蘆線與機場線雙捷運，該區段未來性看好，發展潛力備受期待。<br><br>「立瑾醞」周邊生活機能，發展潛力備受期待。圖/業主提供。<br>「立瑾醞」周邊生活機能，發展潛力備受期待。圖/業主提供。<br>「立瑾醞」正臨神農街、面向7755坪國、中小預定地，擁有超寬闊永久棟距。生活機能以幸福東路、光復路、化成路、重新路為主，家樂福、IKEA都在附近。交通上，近重新橋，約10分鐘車程可達台北西門，擁有捷運中和新蘆線「先嗇宮站」、機場線雙捷運「三重站」，開車可直上台64線、台65線快速道路，連結新北環快、串聯國道一號中山高速公路。<br><br>客廳空間可利用中島規劃成餐廳、和室或是書房。圖/易繼中攝。<br>客廳空間可利用中島規劃成餐廳、和室或是書房。圖/易繼中攝。<br>優質規劃也是「立瑾醞」主要優勢，基地面積583坪，樓高12層、地下2樓，前庭臨路退縮26米、後院退縮24米，建蔽率20%，前庭、後院合計擁有460坪寬闊空間。全案規劃為43戶純住宅大樓，正2房、正3房規劃，44坪3房、41坪3房、38坪3房，及31坪2房，同層4戶，雙電梯。<br><br>主臥擺上Queen size加大雙人床，走道空間寬敞。圖/易繼中攝。<br>主臥擺上Queen size加大雙人床，走道空間寬敞。圖/易繼中攝。<br>現場專案經理指出，「立瑾醞」是區域內唯一按照規格、以真正大3房為主力的建案，像是41.45坪3房，面國、中小預定地擁有永久景觀、頂樓僅規劃一戶75.8坪更是區域內唯一。<br><br>「頂樓僅規劃一戶，客廳、主臥雙露臺，全室採光。」專案經理表示，頂樓該戶四面分別可見大屯山、觀音山、林口臺地及前庭景觀、寬闊國、中小預定地。「是區域中唯一一間大坪數3房格局，非常稀有、珍貴。」<br><br>戶戶標配小米全套智能家電。圖/易繼中攝。<br>戶戶標配小米全套智能家電。圖/易繼中攝。<br>室內挑高3.2米，戶戶標配包含小米AI音箱、石頭掃地機器人、小米空氣淨化氣2S、小米智慧攝影機1080P等智慧家庭設備。廚具包含抽油煙機、烘碗機、瓦斯爐等全採用櫻花，並含永久免費油網送到家、永久免費廚房健檢、永久免費水質健檢等服務，衛浴採用TOTO衛浴、Hansgrohe德國百年衛浴品牌。大廳挑高4.2米，設有健身房、交誼廳、閱覽室等實用休閒公設，全棟規劃有光纖到家、三菱電梯、ATS不斷電系統、廚餘冷藏、長庚活水系統、STUDOR防疫、鑄鋁玄關門、eTag停車場管理等貼心設備。現場專案表示，目前開價每坪43~46萬元，一戶一車位，全部坡道平面車位，每位210~220萬元，2房已經接近完銷，預計2020年6月可完工交屋。',
      })),
      */
      pageCount: 3,
      currentPage: 1,
      currentItem: {
        // title: '新聞標題新聞標題新聞標題新聞標題新聞標題1',
        // subtitle: '小標文字1',
        // date: '2020-12-02',
        // author: 'XXXX',
        // img: require('../news/s2/1/20191009004718.jpg'),
        // desc:
        //   '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
      },
      // links: [
      //   {
      //     title: '立瑾醞官網',
      //     id: '2',
      //     url: 'https://lju.h35.tw/',
      //   },
      //   {
      //     title: '立瑾醞官網',
      //     id: '2',
      //     url: 'https://lju.h35.tw/',
      //   },
      // ],
    }
  },

  methods: {
    // @slideChangeTransitionEnd="slideChanged"
    // slideChanged(e) {
    //   const swiper = this.$refs.mySwiper.swiper
    //   if (swiper.isEnd) {
    //     this.slideIndex = 0
    //   } else if (swiper.isBeginning) {
    //     this.slideIndex = swiper.slides.length - 3
    //   } else {
    //     this.slideIndex = swiper.activeIndex - 1
    //   }
    // },
  },

  mounted() {
    this.currentItem = this.list[this.$route.params.id]
  },

  created() {},

  computed: {},
}
</script>
