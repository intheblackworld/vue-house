<template>
  <div class="section2">
    <div class="container">
      <div class="typelist">
        <div class="head">
          <div class="pages" @click="goBack">
            <img src="data:image/svg+xml,%3Csvg viewBox='0 10 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.5,10v3.7h-4.5c-8,0-8,12.3,0,12.3h3.3v-2.8h-3.3c-4.4,0-4.4-6.7,0-6.7h4.5v3.7l5.5-5.1-5.5-5.1Z' fill='%23333'/%3E%3C/svg%3E%0A" alt="回都更列表">回都更列表
          </div>
          <div class="current-tab">欣聯建設於台北市松山延壽段都市更新案</div>
          <!-- <div class="pages flex-ac">
            <div class="page-btn flex-c" v-for="(page, index) in pages" :key="`page-btn-${index}`" @click="changePage(index)">{{page}}</div>
          </div> -->
        </div>
        
        <div class="update-info">
          <ul>
            <li>
              <strong>更新單元範圍：</strong>
              臺北市松山區延壽段一小段 <br>418、419、420、421、422、423地號（共計 6 筆）
            </li>

            <li>
              <strong>基地面積：</strong>
              2365.31平方公尺
            </li>

            <li>
              <strong>興建規模：</strong>
              一幢兩棟，地上：11層和14層，地下：3層
            </li>

            <li>
              <strong>實施者：</strong>
              欣聯建設開發股份有限公司
            </li>

            <li>
              <strong>規劃單位：</strong>
              振皓工程顧問股份有限公司
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
</style>
<script>
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'renewal-detail',

  data() {
    return {
      info
    }
  },

  computed: {
    isPC: () => isPC,
    isMobile: () => isMobile,
    isTablet: () => isTablet
  },

  methods: {
    goBack() {
      if (window.history.length > 1) {
        this.$router.back()
      } else {
        this.$router.push('/renewal')
      }
    }
  }
}
</script>