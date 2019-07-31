<template>
  <div class="section1">
    <Loading :loading="loading" />
    <!-- 背景圖覽家仔 -->
    <!-- <div class="lazy-bg fullscreen" v-lazy:background-image="require('./s1_bg.jpg')">
      
    </div>-->
    <div class="fullscreen bg-cover bg flex-c">
      <div class="content m-auto relative flex-jb wrap">
        <div v-scroll-reveal.reset="$fadeIn()">
          <icon class="icon desc-1" :data="desc1" />
          <icon class="icon desc-2" :data="desc2" />
        </div>
        <div v-scroll-reveal.reset="$fadeIn(300)">
          <icon class="icon desc-3" :data="desc3" />
          <icon class="icon desc-4" :data="desc4" />
        </div>
      </div>
      <div v-scroll-reveal.reset="$fadeIn(600)" class="absolute tree-1">
        <img src="./s1_tree_1.png" alt class="" />
      </div>
      <div v-scroll-reveal.reset="$fadeIn(600)" class="absolute tree-2">
        <img src="./s1_tree_2.png" alt />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/variableDefault.scss';
.bg {
  background-image: url('./s1_bg.jpg');
  margin-top: $nav_pc_height;
}

.content {
  width: 640px;
  left: -50px;
  margin-top: -250px;
  z-index: 2;
  .desc-1,
  .desc-2 {
    height: 48px;
    margin-bottom: 40px;
    fill: #666;
  }

  .desc-3,
  .desc-4 {
    height: 52px;
    fill: #333;
  }
}

.tree-1 {
  left: 0;
  img {
    width: 100%;
  }
}

.tree-2 {
  right: 0;
  margin-top: 50px;
  img {
    width: 100%;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
    margin-top: $nav_tablet_height;
  }
  .content {
    width: 540px;
    left: auto;
    margin-top: -150px;
    .desc-1,
    .desc-2 {
      height: 38px;
      margin-bottom: 25px;
      fill: #666;
    }

    .desc-3,
    .desc-4 {
      height: 41px;
      fill: #333;
    }
  }

  .tree-1 {
    left: 0;
    width: 300px;
  }

  .tree-2 {
    right: 0;
    width: 500px;
    margin-top: 50px;
  }
}

/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .bg {
    margin-top: $nav_phone_height;
  }
  .content {
    width: 100vw;
    left: auto;
    margin-top: -250px;
    display: block;

    svg {
      display: block;
    }
    .desc-1,
    .desc-2 {
      height: 26px;
      margin-bottom: 15px;
      fill: #666;
    }

    .desc-3,
    .desc-4 {
      height: 30px;
      margin-bottom: 15px;
      fill: #333;
    }

    .desc-1 {
      margin-left: 25px;
    }

    .desc-2 {
      margin-left: 50px;
    }

    .desc-3 {
      margin-left: 75px;
    }

    .desc-4 {
      margin-left: 100px;
    }
  }

  .tree-1 {
    left: 0;
    width: 146px;
  }

  .tree-2 {
    right: 0;
    width: 250px;
    margin-top: 0px;
    bottom: 0;
    top: auto;
    transform: none;
  }
}
</style>

<script>
// @ is an alias to /src
import Loading from '@/components/Loading.vue'
import { setTimeout } from 'timers'
import desc1 from '../../assets/svg/s1_desc_1.svg'
import desc2 from '../../assets/svg/s1_desc_2.svg'
import desc3 from '../../assets/svg/s1_desc_3.svg'
import desc4 from '../../assets/svg/s1_desc_4.svg'

export default {
  name: 'section1',
  components: {
    Loading,
  },

  data() {
    return {
      loading: false,
      desc1,
      desc2,
      desc3,
      desc4,
    }
  },

  methods: {},

  created() {
    this.$Lazyload.$on('loaded', ({ el, src }) => {
      setTimeout(() => {
        if (this.loading) {
          this.loading = false
        }
      }, 500)
    })
  },
}
</script>
