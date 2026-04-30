<template>
  <div class="section2">
    <div class="container">
      <div class="head flex-ac flex-jb">
        <div class="current-tab">欣聯建設都更專區</div>
      </div>
      <transition-group class="flex-ac flex-js wrap" name="slide-fade" mode="out-in">
        <div class="card" 
        v-for="(case_item, index) in current_case_list" 
        :key="case_item.title + index" 
        @click="$router.push(case_item.link)">
          <div class="card-img">
            <img :src="case_item.img" alt="">
            <div class="add-btn">
              +
            </div>
          </div>
          <div class="card-content" v-html="case_item.title"></div>
          <div class="card-status" v-html="case_item.status"></div>
          <div class="card-location" v-html="case_item.location"></div>
        </div>
      </transition-group>
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


.img {
  @include img_c_pc(1234, 321);
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
    margin-bottom: sizem(30);
  }
}

.cate-list {
  width: size(420);
  margin-bottom: size(40);

  @include md {
    width: sizem(310);
    margin: sizem(0) auto sizem(30);
  }

  .cate-btn {
    font-size: size(28);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: size(1.4);
    text-align: left;
    color: #808080;
    border-bottom: 1px solid #808080;
    transition: all 0.3s ease;
    cursor: pointer;
    &.active,
    &:hover {
      color: #000;
      border-bottom: 1px solid #000;
    }

    @include md {
      font-size: sizem(21);
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.29;
      letter-spacing: sizem(1.05);
      text-align: left;
    }
  }
}

.card {
  position: relative;
  width: size(370);
  font-size: size(15);
  margin-bottom: size(78);
  cursor: pointer;
  margin-right: size(63);
  letter-spacing: 0.06em;  
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  border-bottom: solid 1px #4d4d4d;
  text-align: left;
  color: #000;
  padding: 0 0 1.2em 0;
  &:nth-child(3n) {
    margin-right: 0;
  }

  .card-img img {
    transition: all .3s;
  }

  @include md {
    font-size: sizem(15);
    width: 100%;
    margin-right: 0;
    margin-bottom: sizem(60);
  }
  &:hover {
    .card-img {
      /* border-radius: 50%; */
      overflow: hidden;
      img {transform: scale(1.1);}
    }
  }
}

.card-img {
  position: relative;
  width: 100%;
  height: size(370);
  overflow: hidden;
  transition: all 0.5s;
  margin: 0 0 .8em 0;

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
    line-height:1;
    height: size(45);
    text-align: center;
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
  font-size: size(27);
  letter-spacing: 0.06em;
  line-height: 1.2;
  width: 11em;
  margin: 0 0 0.15em 0;

  @include md {
    font-size: sizem(23);
  width: 10em;
  }
}
.card-status {
  font-size: size(12);
  position: absolute;
  right: 0;top: size(385);
  background:#D7D7D7;
  padding: 0.5em 0.8em;

  @include md {
    font-size: sizem(12);
    top: sizem(322);
  }
}
.card-location{

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
import { renewal_list } from '@/info/shin-lan/renewal'
import _ from 'lodash'

export default {
  name: 'section2',

  data() {
    return {
      isPC,
      isMobile,
      isTablet,
      renewal_list,
      
    }
  },
  computed: {
    type() {
      return this.$route.query.type ? this.$route.query.type : 1
    },
    case_list() {
  return this.renewal_list
},
   current_case_list() {
  return this.case_list
},
  },



}
</script>
