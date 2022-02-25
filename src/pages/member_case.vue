<template>
  <div class="bg flex-jb flex-as">
    <div class="sidebar" v-if="isPC">
      <div class="shin-lan-title-h shin-lan-title-h-m title gold" data-aos="fade" data-aos-delay="0">
        專屬<span data-aos="flip-right"></span>個案
      </div>
      <div class="list">
        <div :class="`item flex-ac flex-jb ${case_item.id == $route.params.id ? 'active' : ''}`" v-for="case_item in case_list" :key="case_item.id + 'nav'" @click="$router.push(`/case/${case_item.id}`)">
          <div>{{case_item.title}}</div>
          <div>more</div>
        </div>
      </div>
    </div>
    <div class="shin-lan-title-h shin-lan-title-h-m title gold" data-aos="fade" data-aos-delay="0" v-else>
        專屬<span data-aos="flip-right"></span>個案
      </div>
    <div class="content">
      <div class="content-item" v-for="(case_item, index) in case_list" :key="case_item.id + 'item'" @click="$router.push(`/case/${case_item.id}`)">
        <div class="item-title">{{case_item.title}}</div>
        <div class="item-content">
          <img :src="find_img(case_item.title, index)" alt="" class="item-img">
          <div class="add-btn">+</div>
        </div>
      </div>
    </div>
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
  border-bottom: 1px solid #666;
  margin-bottom: size(20);
  cursor: pointer;

  .active {
    color: #000;
    border-bottom: 1px solid #000;
  }
}
.content-item {
  cursor: pointer;
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
  margin-top: size(20);
  margin-bottom: size(20);

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

.item-content {
  position: relative;
  height: size(590);
  border-bottom: solid 1px #c59c63;

  @include md {
    height: sizem(230);
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
@media screen and (max-width: 767px) {
  .bg {
    flex-wrap: wrap;
  }
}
</style>

<script>
// import Section1 from '@/projects/shin-lan/member/Section1.vue'
import { isPC } from '@/utils'
import { get_category_by_user } from '@/http/api'
import { hot_case } from '@/info/shin-lan'

export default {
  name: 'member_case',
  components: {
    // Section1,
    // Section2,
  },

  data() {
    return {
      isPC,
      case_list: [],
    }
  },

  computed: {},

  mounted() {
    get_category_by_user().then((res) => {
      console.log(res)
      if (res.error_code == 0) {
        this.case_list = res.data.categories
      }
      //  else if (res.error_code == 401) {
      //   window.alert('權限過期，請重新登入')
      //   this.$router.push('/login')
      // }
    })
  },

  methods: {
    find_img(name, index) {
      console.log(name, index)
      if (this.case_list[index].channel_covers.length > 0) {
        return this.case_list[index].channel_covers[0]
      }
      const item = hot_case.find((c) => c.title == name)
      console.log(item)
      if (item) {
        return item.img
      } else {
        return ''
      }
      // console.log(item)
      // return .imgs[0]
    },
  },

  watch: {},
}
</script>
