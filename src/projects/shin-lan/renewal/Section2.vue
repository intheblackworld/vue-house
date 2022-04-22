<template>
  <div class="section2">
    <div class="container">
      <div class="type-tab flex-ac flex-ja" v-if="isMobile">
        <div :class="`tab ${$route.query.type == 2 ? '' : 'active'}`" @click="$router.push('/renewal?type=1')">
          萬華段都更
        </div>
      <!--  <div :class="`tab ${$route.query.type == 2 ? 'active' : ''}`" @click="$router.push('/renewal?type=2')">
          XXX段都更
        </div>  -->
      </div>
      <div class="head flex-ac flex-jb">
        <div class="current-tab">欣聯建設於台北市萬華區康定路大理街都市更新案</div>
        <!-- <div class="pages flex-ac">
          <div class="page-btn flex-c" v-for="(page, index) in pages" :key="`page-btn-${index}`" @click="changePage(index)">{{page}}</div>
        </div> -->
      </div>
      <img src="../../shin-lan/shin-lan/process/1.jpg" alt="" class="img img1 mb2">
      <div class="flex-ac flex-jb wrap mb6">
        <div class="title">
          一、基地位置
        </div>
        <div class="desc desc1">
          東以康定路、南以和平西路三段42巷 、西以大理街42巷 、北以大理街所圍之街廓範圍內，為一非完整街廓。【詳-更新單元位置圖】
        </div>
      </div>
      <div class="flex flex-jb wrap mb6">
        <img src="../../shin-lan/shin-lan/process/2.png" alt="" class="img img2 mb2" v-if="isMobile">
        <div class="content content1">
          <div class="title mb2">
            二、更新單元範圍
          </div>
          <div class="desc mb4">
            本更新單元座落於臺北市萬華區萬華段二小段894地號等22筆土地，土地面積為1,243.00㎡。【詳-更新單元地籍範圍圖】
          </div>
          <div class="subtitle mb1">
            土地部分
          </div>
          <div class="desc mb2">
            公有土地：本案無。<br />
            私有土地：面積1,243.00㎡(100%) 所有權人共計26名
          </div>
          <div class="subtitle mb1">
            建物部分
          </div>
          <div class="desc">
            面積2,926.62㎡，所有權人共25名，皆為私有。
          </div>
        </div>
        <img src="../../shin-lan/shin-lan/process/2.png" alt="" class="img img2" v-if="isPC">
      </div>
      <div class="flex flex-jb wrap mb6">
        <img src="../../shin-lan/shin-lan/process/3.png" alt="" class="img img1" v-if="isPC">
        <img src="../../shin-lan/shin-lan/mo/process/31.png" alt="" class="img img1 mb1" v-if="isMobile">
        <img src="../../shin-lan/shin-lan/mo/process/32.png" alt="" class="img img2 mb2" v-if="isMobile">
        <div class="content content2">
          <div class="title mb2">
            三、使用分區
          </div>
          <div class="desc mb6">
            土地使用分區為商三和商三特
          </div>
          <div class="title mb2">
            四、實施者、規劃單位介紹
          </div>
          <div class="desc mb4">
            一、實施者：由欣聯建設開發股份有限公司擔任實施者，辦理都市更新相關事務<br />
            二、建築規劃：黃翔龍建築師事務所<br />
            三、都市更新規劃：：弘傑不動產事業股份有限公司
          </div>
        </div>
      </div>
      <div class="mb6">
        <div class="shin-lan-title-h gold title mb4" data-aos="fade">
          基本<span data-aos="flip-right"></span>資料
        </div>
        <div class="label mb2">透視圖</div>
        <img src="../../shin-lan/shin-lan/process/4.jpg" alt="" class="img img1">
      </div>

      <div class="mb6">
        <div class="shin-lan-title-h gold title mb4" data-aos="fade">
          設計<span data-aos="flip-right"></span>規劃
        </div>
        <div class="title mb2">
          一、法令依據
        </div>
        <div class="desc mb6">
          依108年5月15日公告之「都市更新建築容積獎勵辦法」及108年12月19日公告之「臺北市都市更新建築容積獎勵辦法」檢討。
        </div>

        <div class="title mb2">
          二、都市更新容積獎勵
        </div>
        <div class="desc mb6">
          (1)基本條件設定說明<br />
          土地面積：1.243.00㎡<br />
          基準容積：6927.30㎡<br />
          (2)都市更新容積獎勵<br />
          本案所申請之都市更新容積獎勵均符合『都市更新條例』第65條之規定。 都更獎勵上限計算，每筆土地依法容1.5倍或法容0.3倍+原容擇優計算其上限。
        </div>
        <img src="../../shin-lan/shin-lan/process/5.jpg" alt="" class="img img1">
      </div>

      <div class="mb6">
        <div class="shin-lan-title-h gold title mb4" data-aos="fade">
          獎勵<span data-aos="flip-right"></span>容積
        </div>
        <div class="title mb2">
          財務計畫
        </div>
        <div class="desc mb6">
          1.費用提列：<br />
          相關成本項目編列方式和標準依臺北市「臺北市都市更新事業計畫及權利變換計畫內有關費用提列標準」提列。<br />
          2.更新事業實施經費：<br />
          預估更新總成本約18億9134萬元，未來實際費用應以臺北市政府核定公告之權利變換計畫書登載為準。
        </div>
      </div>

      <div class="mb6">
        <div class="shin-lan-title-h gold title mb4" data-aos="fade">
          財務<span data-aos="flip-right"></span>計畫
        </div>
        <div class="title mb2">
          權利變換計畫
        </div>
        <div class="desc mb6">
          1.法令依據：都市更新條例及都市更新權利變換實施辦法等相關法令<br />
          2.權利變換機制：都市更新條例第3條<br />
          『權利變換』指更新單元內重建區段之土地所有權人、合法建築物所有權人、他項權利人、實施者或與實施者協議出資之人，提供土地、建築物、他項權利或資金，參與或實施都市更新事業，於都市更新事業計畫實施完成後，按其更新前權利價值比率及提供資金額度，分配更新後土地、建築物或權利金。<br />
          3.選任專業估價者：都市更新條例第50條<br />
          Ø實施者指定一家，其餘二家由實施者自臺北市都市更新處建議名單中，以公開、隨機方式選任。<br />
          Ø本案於110年7月24日召開專業估價者選任會議。<br />
          Ø本本案委託三家鑑價機構：中信不動產估價師聯合事務所、天易不動產估價師聯合事務所、信彩不動產估價師事務所。為保障全案土地所有權人權益，選定鑑價最高者為權利變換依據。
        </div>
        <img src="../../shin-lan/shin-lan/process/6.png" alt="" class="img img1 mb6">
        <img src="../../shin-lan/shin-lan/process/7.png" alt="" class="img img1 mb6">
      </div>

      <div class="mb6">
        <div class="shin-lan-title-h gold title mb4" data-aos="fade">
          權利<span data-aos="flip-right"></span>變換
        </div>
        <div class="title mb2">
          實施進度
        </div>
        <div class="desc mb6">
          本案相關會議重要時程如下：<br />
          (1)專業估價者選任會議：110年7月24日。<br />
          (2)事業計畫公聽會：110年11月02日，下午14點，假萬華區格萊天漾大飯店14樓康定廳。
        </div>

        <div class="title mb2">
          同意書簽署時點與效力
        </div>
        <div class="desc mb6">
          依都市更新條例第37條規定：所有權人對於公開展覽之計畫所載更新後分配之權利價值比率或分配比率低於出具同意書時者，得於公開展覽期滿前，撤銷其同意。
        </div>

        <div class="title mb2">
          實施者及相關單位聯絡窗口
        </div>
        <div class="desc mb6">
          施者： 欣聯建設開發股份有限公司<br />
          聯絡地址：臺北市中山區長安東路2段88號6樓<br />
          聯絡電話：(02)2515-3700<br /><br />

          規劃單位：弘傑城市開發股份有限公司<br />
          地址：臺北市中山區建國北路二段33號13樓之6<br />
          電話：(02)2507-1910<br />
          聯絡人：沈韋呈<br /><br />

          主管機關聯絡資訊<br />
          機關：內政部營建署 http://www.cpami.gov.tw/chinese/<br />
          地址：臺北市松山區八德路2段342號<br />
          電話：(02)8771-2345<br />
          機關：臺北市都市更新處 http://uro.gov.taipei/<br />
          地址：臺北市中山區南京東路三段168號17樓<br />
          法令諮詢專線：(02)2781-5696分機3093
        </div>
      </div>

      <!--
      <transition-group class="flex-ac flex-js wrap" name="slide-fade" mode="out-in">
        <div class="card" v-for="(case_item, index) in current_case_list" :key="case_item.title + index">
          <div class="card-img">
            <img :src="case_item.img" alt="">
            <div class="add-btn">
              +
            </div>
          </div>
          <div class="card-content" v-html="case_item.title"></div>
        </div>
      </transition-group> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
// begin
.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  // margin-top: 50px !important;
  opacity: 0;
}
// end
.slide-fade-enter {
  margin-top: 10px !important;
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-active {
  transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
}

.mb1 {
  margin-bottom: size(10);
  @include md {
    margin-bottom: sizem(10);
  }
}

.mb2 {
  margin-bottom: size(20);
  @include md {
    margin-bottom: sizem(20);
  }
}
.mb3 {
  margin-bottom: size(30);
  @include md {
    margin-bottom: sizem(30);
  }
}
.mb4 {
  margin-bottom: size(40);
  @include md {
    margin-bottom: sizem(40);
  }
}

.mb5 {
  margin-bottom: size(50);
  @include md {
    margin-bottom: sizem(50);
  }
}

.mb6 {
  margin-bottom: size(60);
  @include md {
    margin-bottom: sizem(60);
  }
}

.section2 {
  width: 100%;
  // height: size(715);
  position: relative;
  margin: 0;
  // background: url('s1/bg.jpg') center;
  background-size: cover;
  overflow: hidden;
  text-align: center;
  // background-color: rgba(17, 17, 3, 0.11);

  // 手機版
  @include md {
    // height: 100vh;
    // height: size(604);
    // min-height: calc(604 * 100vw / 375);
    // max-height: calc(812 * 100vw / 375);
  }
}

.container {
  width: size(1240);
  margin: size(53) auto;

  @include md {
    width: sizem(310);
  }
}

.content {
  text-align: left;
}

.content1 {
  width: size(572);
  @include md {
    width: 100%;
  }
}

.title {
  font-size: size(34);
  &.gold {
    color: #b18863;
  }

  @include md {
      font-size: sizem(28);
  }
}

.subtitle {
  display: inline-block;
  font-size: size(28);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: size(1.4);
  text-align: left;
  border-bottom: 1px solid #000;
  color: #000;

  @include md {
    font-size: sizem(18);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.39;
    letter-spacing: normal;
    text-align: left;
    color: #000;
  }
}

.desc {
  // @include img_c_pc(1234, 170);
  font-size: size(18);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: size(1.44);
  text-align: left;
  color: #000;

  @include md {
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    text-align: left;
    color: #000;
  }
}

.label {
  font-size: size(28);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: size(1.4);
  text-align: left;
  color: #000;

  @include md {
    font-size: sizem(18);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.39;
    letter-spacing: normal;
    text-align: left;
    color: #000;
  }
}

.desc1 {
  width: size(833);
  text-align: left;

  @include md {
    width: 100%;
  }
}

.img1 {
  width: 100%;

  @include md {
    width: 100vw;
    margin-left: sizem(-32.5);
  }
}

.img2 {
  width: size(630);
  @include md {
    width: 100%;
  }
}

// .img {
//   @include img_c_pc(1234, 321);
// }

.type-tab {
  margin: sizem(50) auto;
  .tab {
    font-size: sizem(15);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: sizem(1.4);
    text-align: left;
    color: #808080;
    border-bottom: 1px solid #808080;
    cursor: pointer;

    &.active {
      color: #000;
      border-bottom: 1px solid #000;
    }
  }
}

.current-tab {
  font-size: size(20);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(4);
  text-align: left;
  color: #fff;
  background-color: #000;
  padding: 0.3rem 0.5rem;
  margin-bottom: size(45);

  @include md {
    width: 100%;
    font-size: sizem(20);
    margin-bottom: sizem(60);
  }
}

.card {
  width: size(370);
  margin-bottom: size(78);
  cursor: pointer;
  margin-right: size(63);
  &:nth-child(3n) {
    margin-right: 0;
  }

  @include md {
    width: 100%;
    margin-right: 0;
    margin-bottom: sizem(60);
  }
}

.card-img {
  position: relative;
  width: 100%;
  height: size(370);

  @include md {
    height: sizem(310);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    top: 0;
    left: 0;
  }
  .add-btn {
    position: absolute;
    font-size: size(42);
    font-weight: 300;
    color: #000;
    background-color: rgba(255, 255, 255, 0.8);
    width: size(45);
    height: size(45);
    right: size(10);
    bottom: size(10);
    @include md {
      font-size: sizem(42);
      width: sizem(45);
      height: sizem(45);
      right: sizem(10);
      bottom: sizem(10);
    }
  }
}

.card-content {
  font-size: size(28);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: size(1.4);
  text-align: left;
  color: #000;
  border-bottom: solid 1px #4d4d4d;

  @include md {
    font-size: sizem(23);
  }
}

.pages {
  font-size: size(25);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  text-align: left;
  color: #333;

  @include md {
    display: none;
  }

  .page-btn {
    width: size(40);
    text-align: center;
    border-right: 1px solid #c59c63;
    cursor: pointer;

    &:nth-last-child(1) {
      border-right: none;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
// import { case_list_1, case_list_2 } from '@/info/shin-lan'
import _ from 'lodash'

export default {
  name: 'section2',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      pageIndex: 0,
      count: 6,
      // case_list_1: [
      //   ...case_list_1
      // ],
      // case_list_2: [
      //   ...case_list_2
      // ],
      // blockIndex: 0,
    }
  },
  computed: {
    type() {
      return this.$route.query.type ? this.$route.query.type : 1
    },
    total() {
      return this.case_list.length
    },
    type_text() {
      return this.$route.query.type == 2 ? '合聯營造Holan' : '欣聯建設Shin-Lan'
    },
    totalPage() {
      return (
        Math.floor(this.total / this.count) +
          (this.total % this.count > 0 ? 1 : 0) || 1
      )
    },
    case_list() {
      return this[`case_list_${this.type || 1}`]
    },
    current_case_list() {
      return this.case_list.slice(
        this.pageIndex * this.count,
        this.count * (this.pageIndex + 1),
      )
    },
    pages() {
      return _.range(1, this.totalPage + 1)
    },
  },

  methods: {
    init() {
      this.pageIndex = 0
      if (this.isPC) {
        this.count = 6
      } else {
        this.count = 999
      }
    },
    changePage(index) {
      this.pageIndex = index
    },
  },

  mounted() {
    this.init()
  },

  watch: {
    $route: function () {
      this.init()
    },
  },

  created() {},
}
</script>
