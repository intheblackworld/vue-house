<template>
  <div class="section6">
    <div class="fullscreen bg-cover bg flex-jb relative wrap">
      <div class="content">
        <div class="label" v-scroll-reveal.reset="$fadeIn()">【 韻致建築 】</div>
        <div class="flex-ab flex-jb">
          <h3 class="title" v-scroll-reveal.reset="$fadeIn(300)">
            三重水畔最美留白
            <br />超低建蔽規劃
          </h3>
        </div>
      </div>
      <div class="toggle" v-scroll-reveal.reset="$fadeIn(600)">
        <div
          :class="`item ${item.open ? 'open' : ''}`"
          v-for="(item, index) in toggleList"
          :key="item.title"
        >
          <h3 @click="toggle(index)" class="title flex-jb flex-ac">
            {{item.title}}
            <img src="./s6_arrow.png" alt />
          </h3>
          <div class="desc">{{item.desc}}</div>
        </div>
      </div>
    </div>
    <div v-show="!loading"></div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url('./s6_bg.jpg');
}

.content {
  color: #fff;
  text-align: left;
  top: 15%;
  transform: none;
  margin-left: 40px;
  margin-top: 120px;
}
.label {
  font-size: 34px;
  margin-bottom: 10px;
}

.title {
  font-size: 48px;
  line-height: 1.3;
  letter-spacing: 3px;
}

.desc {
  font-size: 24px;
  line-height: 1.7;
}

.toggle {
  margin-top: 120px;
  margin-right: 40px;
}

.item {
  width: 403px;
  height: 44px;
  background: rgba(12, 73, 127, 0.5);
  border-radius: 33px / 33px;
  color: #fff;
  overflow: hidden;
  margin-bottom: 40px;
  cursor: pointer;
  transition: all 0.5s;

  &.open {
    height: 180px;
    border-radius: 15px / 15px;
  }
  .title {
    font-size: 25px;
    margin-top: 7px;
    text-align: center;
    margin-bottom: 30px;
    padding: 0 10px 0 30px;

    img {
      width: 20px;
    }
  }

  .desc {
    font-size: 16px;
    padding: 0 20px 20px;
    text-align: justify;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .content {
    color: #fff;
    text-align: left;
    top: auto;
    transform: none;
    margin-left: 20px;
    margin-top: 40px;

    .flex-ab {
      flex-wrap: wrap;
    }
  }

  .label {
    font-size: 22.5px;
    margin-bottom: 10px;
  }

  .title {
    font-size: 30px;
    line-height: 1.3;
    letter-spacing: 3px;
  }

  .desc {
    font-size: 18px;
    line-height: 1.7;
  }

  .toggle {
    margin: 0 auto;
  }

  .item {
    width: 280px;
    height: 33px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 17px / 17px;
    color: #fff;
    overflow: hidden;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 0.5s;

    &.open {
      height: 180px;
      border-radius: 15px / 15px;
    }
    .title {
      font-size: 16px;
      margin-top: 7px;
      text-align: center;
      margin-bottom: 30px;
      padding: 0 10px 0 15px;

      img {
        width: 20px;
      }
    }

    .desc {
      font-size: 14px;
      padding: 0 20px 20px;
      text-align: justify;
    }
  }
}
</style>

<script>
export default {
  name: 'section6',

  data() {
    return {
      loading: true,
      toggleList: [
        {
          title: '戶戶土地持分10坪以上',
          desc:
            '20%建蔽率，讓住戶擁有大片開放空間，居住環境更舒適。同時擁有人均最大土地持分，每戶至少10坪以上。全區唯一超高土地持分!',
          open: false,
        },
        {
          title: '花園裡的家，城市微型綠洲',
          desc:
            '用綠意彩繪建築身段，四季花藝勾勒一座城市綠洲。走進花園就到家，在城市聽見自然的聲音',
          open: false,
        },
      ],
    }
  },

  methods: {
    toggle(index) {
      this.toggleList.forEach(item => (item.open = false))
      this.toggleList[index].open = true
    },
  },

  created() {
    window.setTimeout(() => {
      this.loading = false
    }, 1000)
  },
}
</script>
