<template>
  <div class="section11 relative">
    <div class="bg relative" v-if="!isMobile">
      <img src="./s11/bg1.jpg" alt="輕井澤" class="bg-img" />
      <img src="./s11/bg2.jpg" alt="輕井澤" class="bg-img" />
      <div class="text">
        <h3 class="title">精工至上</h3>
        <h4 class="subtitle">20年結構保固+5年防水保固</h4>
        <p>以筏式基礎穩定打底，搭配PC基樁強化安全性<br>
從工程材料、結構、機電、<br>
防水施工…等皆有建物生產履歷<br>
交屋後提供完善客戶服務，住得安心，買得更放心</p>
      </div>
  <!--    <div class="text-bottom">
        <h3 class="title">美學極現</h3>
        <h4 class="subtitle">日本建築職人精神藏美實現</h4>
        <p>以建築演繹「新日本建築美學」著重美感與機能兼具<br>
名宅建築團隊精心打造沿街式透天產品．戶戶臨路<br>
以品牌實力打造水岸別墅社區成功典範</p>
      </div> -->
    </div>
    <div class="bg relative" v-else>
       <img src="./s11/mo/bg1_01.jpg" alt="輕井澤" class="bg-img" />
        <img src="./s11/mo/bg1_02.jpg" alt="輕井澤" class="bg-img" />
      <div class="text">
        <h3 class="title">精工至上</h3>
        <h4 class="subtitle">20年結構保固+5年防水保固</h4>
        <p>以筏式基礎穩定打底，搭配PC基樁強化安全性<br>
從工程材料、結構、機電、<br>
防水施工…等皆有建物生產履歷<br>
交屋後提供完善客戶服務，住得安心，買得更放心</p>
      </div>
     <!--  <div class="text-bottom">
        <h3 class="subtitle">美學極現</h3>
        <h4 class="title">日本建築職人精神藏美實現</h4>
        <p>以建築演繹「新日本建築美學」著重美感與機能兼具<br>
名宅建築團隊精心打造沿街式透天產品．戶戶臨路<br>
以品牌實力打造水岸別墅社區成功典範</p>
      </div> -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-position: center;
  background-size: auto;
}
.bg-img {
  width: 100vw;
  height: auto;
  display: block;
  position: absolute;
  object-fit: cover;
  top: 0;

  &:nth-child(1), &:nth-child(2) {
    position: relative;
  }
}

.text {
  top: calc(100vw * (80 / 1920));
  text-shadow: 2px 0 8px #0369;
}

.text-bottom {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: auto;
  bottom: calc(100vw * (100 / 1920));
    color: #40220f;
    line-height: 1.6;
    width:100%;
    font-stretch: normal;
    font-style: normal;
    letter-spacing:0.1em;
    text-align: center;
    font-size: calc(100vw * (18 / 1920));
  .title {
    font-size:4.44em;
    font-weight: bold;
    line-height: normal;
  }

  .subtitle {margin: 0.1em 0 0 0;
    font-size:1.67em;
    font-weight: 600;transform: scaleX(0.9);
  }
  p{margin: 0.5em 0 0 0;
    font-size:1em;}
}

@media screen and (max-width: 767px) {
  .bg {
    background-image: url('./s2/mo/bg.jpg');
  }

.text {
    top: calc(100vw * (35 / 375));
}
  
  .text-bottom {
    bottom: calc(100vw * (50 / 375));
    .title {
      font-size: 35.4px;
      letter-spacing: 1.42px;
    }

    .subtitle {
      font-size: 15px;
      letter-spacing: 3.5px;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section11',

  methods: {},

  data() {
    return {
      isMobile,
    }
  },
}
</script>
