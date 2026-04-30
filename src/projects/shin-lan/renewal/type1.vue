<template>
  <div class="section2">
    <div class="container">
      <div class="typelist">
        <div class="head">
          <div class="pages" @click="$router.push('/renewal')">
            <img
              src="data:image/svg+xml,%3Csvg viewBox='0 10 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.5,10v3.7h-4.5c-8,0-8,12.3,0,12.3h3.3v-2.8h-3.3c-4.4,0-4.4-6.7,0-6.7h4.5v3.7l5.5-5.1-5.5-5.1Z' fill='%23333'/%3E%3C/svg%3E%0A"
              alt="回都更列表">回都更列表
          </div>
          <div class="current-tab">欣聯建設於台北市萬華區康定路大理街都市更新案</div>
          <!-- <div class="pages flex-ac">
            <div class="page-btn flex-c" v-for="(page, index) in pages" :key="`page-btn-${index}`" @click="changePage(index)">{{page}}</div>
          </div> -->
        </div>
        <div class="update-info typr1">
          <div class="img"><img src="../../shin-lan/renewal/type1/0.jpg" alt="">
            <div class="caption">外觀3D模擬示意圖</div>
          </div>
          <ul>
            <li>
              <strong>更新單元範圍：</strong>
              臺北市萬華區萬華段二小段 <br>894、894-1、895、897、898、899、900、901、902、903、905、906、907、908、909、910、911、912、913、914、915、916
              地號（共計 22 筆）
            </li>

            <li>
              <strong>基地面積：</strong>
              1,243.00 平方公尺
            </li>

            <li>
              <strong>興建規模：</strong>
              地上 24 層、地下 5 層
            </li>

            <li>
              <strong>透視圖：</strong>
              （請置入圖片）
            </li>

            <li>
              <strong>本案說明：</strong>
              100% 所有權人同意，為 168 都更專案
            </li>

            <li>
              <strong>實施者：</strong>
              欣聯建設開發股份有限公司
            </li>

            <li>
              <strong>規劃單位：</strong>
              弘傑開發事業股份有限公司
            </li>
          </ul>
        </div>


      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
@import '@/assets/style/renewal.scss';

.typr1 {
  .img {
    position: relative;
    float: right;
    width: 40%;
    margin-left: 24px;
.caption {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 0.3em 0.5em;
      color: #fff;
      font-size: 14px;
    }
    img {
      width: 100%;vertical-align: bottom;
    }
  @include md {
    width: 100%;
    float: none;margin: auto;
.caption {
      font-size: 11px;
    }
  }
  }
  

}
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