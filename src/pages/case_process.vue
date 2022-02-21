<template>
  <div class="bg flex-jb flex-as wrap">
    <div class="sidebar" v-if="isPC">
      <div class="shin-lan-title-h shin-lan-title-h-m title gold" data-aos="fade" data-aos-delay="0">
        專屬<span data-aos="flip-right"></span>個案
      </div>
      <div class="list">
        <img :src="current_item.img" alt="" class="list-cover">
        <div class="item flex-ac flex-jb">
          <div>客戶專區</div>
        </div>
        <div class="item flex-ac flex-jb">
          <div>進度工程</div>
        </div>
        <div class="sub-item flex-ac flex-jb" v-for="process in process_list" :key="process.code" @click="$router.push(`/case/${$route.params.id}/process/${process.id}`)">
          <div>{{process.title}}</div>
        </div>
        <div class="back-btn flex-c" @click="$router.push(`/case/${$route.params.id}`)">回到上頁</div>
        <!-- <div :class="`item flex-ac flex-jb ${case_item.id == $route.params.id ? 'active' : ''}`" v-for="case_item in case_list" :key="case_item.id + 'nav'" @click="$router.push(`/case/${case_item.id}`)">
          <div>{{case_item.title}}</div>
          <div>more</div>
        </div> -->
      </div>
    </div>
    <div class="content">
      <div class="content-item">
        <div class="item-title">{{process_detail.title}}</div>
        <div class="item-content" v-for="cover in process_detail.covers" :key="cover">
          <img :src="cover" alt="" class="item-img">
        </div>
      </div>
    </div>
    <!-- <div class="content">
      <div class="content-item" v-for="case_item in case_list" :key="case_item.id + 'item'" @click="$router.push(`/case/${case_item.id}`)">
        <div class="item-title">{{case_item.title}}</div>
        <div class="item-content">
          <img :src="find_img(case_item.title)" alt="" class="item-img">
          <div class="add-btn">+</div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
// .bg {
//   background-size: cover;
//   background-position: center;
//   width: 100vw;
//   height: 100vh;
// }
.title {
  margin-bottom: size(20);
  white-space: nowrap;

  @include md {
    margin-left: sizem(32.5);
  }
}
.sidebar {
  width: size(211);
}

.list-cover {
  width: 100%;
  margin-bottom: size(20);
}
.content {
  width: size(800);
  margin-top: size(30);
  @include md {
    width: sizem(310);
    margin: sizem(30) auto;
  }
}

.item {
  font-size: size(24);
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: size(1.92);
  text-align: left;
  color: #666;
  // border-bottom: 1px solid #666;
  margin-bottom: size(20);
  cursor: pointer;

  &.active {
    color: #000;
    // border-bottom: 1px solid #000;
  }
}

.sub-item {
  font-size: size(15);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: size(2.28);
  text-align: left;
  color: #b18863;
  margin-left: 0.5rem;
  cursor: pointer;
}
.content-item {
  cursor: pointer;
  margin-bottom: size(80);
  position: relative;
}

.item-title {
  font-size: size(34);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.18;
  letter-spacing: size(2.04);
  text-align: left;
  color: #000;
  font-family: 'Noto Serif TC', serif;
  margin-bottom: size(20);

  &.gold {
    color: #c59c63;
  }

  @include md {
    font-size: sizem(18);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.39;
    letter-spacing: normal;
    text-align: left;
    color: #000;
    margin-top: sizem(15);
  }
}

.item-desc {
  font-size: size(24);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: size(1.92);
  text-align: left;
  color: #000;
  margin-top: size(20);
  float: left;

  @include md {
    width: 100%;
    font-size: sizem(18);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.39;
    letter-spacing: normal;
    text-align: left;
    color: #000;
    margin-bottom: sizem(20);
  }

  &.gold {
    color: #c59c63;
  }
}

.item-content {
  position: relative;
  height: size(560);
  @include md {
    height: sizem(220);
  }
}

.item-img {
  width: 100%;
  height: size(515);

  @include md {
    height: sizem(200);
  }
}
.add-btn {
  position: absolute;
  font-size: size(42);
  font-weight: 300;
  color: #000;
  background-color: rgba(255, 255, 255, 0.8);
  width: size(45);
  height: size(45);
  right: size(20);
  bottom: size(90);
  @include md {
    font-size: sizem(42);
    width: sizem(45);
    height: sizem(45);
    right: sizem(10);
    bottom: sizem(33);
  }
}

.download-btn {
  width: size(160);
  height: size(41);
  font-size: size(15);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(3);
  text-align: left;
  color: #000;
  cursor: pointer;
  border: solid 1px #707070;
  transition: all 0.3s;
  position: relative;
  margin: size(20) 0 0;
  z-index: 3;
  float: right;

  &:hover {
    background-color: #000009;
    color: #fff;
  }

  @include md {
    width: sizem(160);
    height: sizem(41);
    margin: sizem(20) auto;
    float: none;
  }
}

.back-btn {
  width: size(160);
  height: size(41);
  font-size: size(15);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(3);
  text-align: left;
  color: #000;
  cursor: pointer;
  border: solid 1px #707070;
  transition: all 0.3s;
  position: relative;
  margin: size(20) 0 0;
  z-index: 3;
  text-decoration: none;

  &:hover {
    background-color: #000009;
    color: #fff;
  }
}
@media screen and (max-width: 767px) {
  .bg {
  }
}
</style>

<script>
// import Section1 from '@/projects/shin-lan/member/Section1.vue'
import { isPC } from '@/utils'
import {
  get_category_by_user,
  get_article_categories,
  get_article_detail,
} from '@/http/api'
import { hot_case } from '@/info/shin-lan'

export default {
  name: 'member_case_process',
  components: {
    // Section1,
    // Section2,
  },

  data() {
    return {
      isPC,
      case_list: [],
      process_list: [],
      process_detail: {},
    }
  },

  computed: {
    current_item() {
      if (this.case_list.length > 0) {
        const item = this.case_list.find((c) => c.id == this.$route.params.id)
        if (item.title) {
          const case_item = hot_case.find((c) => c.title == item.title)
          if (case_item) {
            return case_item
          } else {
            return {
              img: '',
            }
          }
        } else {
          return {
            img: '',
          }
        }
      } else {
        return {
          img: '',
        }
      }
    },
  },

  mounted() {
    get_category_by_user().then((res) => {
      if (res.error_code == 0) {
        this.case_list = res.data.categories
      }
    })
    get_article_categories({
      category_id: this.$route.params.id,
      limit: 99,
      page: 1,
    }).then((res) => {
      if (res.error_code == 0) {
        this.process_list = res.data
      }
    })
    this.init_process_detail()
  },

  methods: {
    init_process_detail() {
      get_article_detail({
        id: this.$route.params.process_id,
        limit: 99,
        page: 1,
      }).then((res) => {
        if (res.error_code == 0) {
          this.process_detail = res.data
        }
      })
    },
    // find_item(title) {
    //   const item = hot_case.find((c) => c.title == title)
    //   console.log(item)
    //   if (item) {
    //     return item.img
    //   } else {
    //     return ''
    //   }
    // },
    // find_img(title) {
    //   const item = hot_case.find((c) => c.title == title)
    //   console.log(item)
    //   if (item) {
    //     return item.img
    //   } else {
    //     return ''
    //   }
    //   // console.log(item)
    //   // return .imgs[0]
    // },
  },

  watch: {
    $route: function () {
      this.init_process_detail()
    },
  },
}
</script>
