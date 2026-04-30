<template>
  <div class="section2">
    <div class="container">
      <div class="typelist">
        <div class="head">
          <div class="pages" @click="$router.push('/renewal')">
            <img src="data:image/svg+xml,%3Csvg viewBox='0 10 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.5,10v3.7h-4.5c-8,0-8,12.3,0,12.3h3.3v-2.8h-3.3c-4.4,0-4.4-6.7,0-6.7h4.5v3.7l5.5-5.1-5.5-5.1Z' fill='%23333'/%3E%3C/svg%3E%0A" alt="回都更列表">回都更列表
          </div>
          <div class="current-tab">欣聯建設於台北市松山延壽段都市更新案</div>
          <!-- <div class="pages flex-ac">
            <div class="page-btn flex-c" v-for="(page, index) in pages" :key="`page-btn-${index}`" @click="changePage(index)">{{page}}</div>
          </div> -->
        </div>
        <div class="mb6">
          <img src="../renewal/type2/01.jpg" alt="" class="img img1 mb1">
          <img src="../renewal/type2/02.jpg" alt="" class="img img1 mb1">
          <img src="../renewal/type2/03.jpg" alt="" class="img img1 mb2">
          <img src="../renewal/type2/04.jpg" alt="" class="img img1 mb2"> 
          <img src="../renewal/type2/05.jpg" alt="" class="img img1 mb2">
          <img src="../renewal/type2/06.jpg" alt="" class="img img1 mb2">
          <img src="../renewal/type2/07.jpg" alt="" class="img img1 mb2">
          <img src="../renewal/type2/08.jpg" alt="" class="img img1 mb2">
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