<template>
  <div class="section2">
    <div class="container">
      <div class="typelist">
        <div class="head">
          <div class="pages" @click="$router.push('/renewal')">
            <img src="data:image/svg+xml,%3Csvg viewBox='0 10 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.5,10v3.7h-4.5c-8,0-8,12.3,0,12.3h3.3v-2.8h-3.3c-4.4,0-4.4-6.7,0-6.7h4.5v3.7l5.5-5.1-5.5-5.1Z' fill='%23333'/%3E%3C/svg%3E%0A" alt="回都更列表">回都更列表
          </div>
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


      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
@import '@/assets/style/renewal.scss';
</style>
<script>
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'renewal-detail',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
    }
  }
}
</script>