<template>
  <div class="section3">
    <div class="fullscreen bg-cover bg flex-c relative">
      <div class="content m-auto absolute-c">
        <div class="label" v-scroll-reveal.reset="$fadeIn()">【 醞釀翻轉 】</div>
        <div class="flex-ab flex-jb">
          <h3 class="title" v-scroll-reveal.reset="$fadeIn(300)">
            聚焦三重2.0時代
            <br />啟動大西區計畫
          </h3>
          <div class="desc" v-scroll-reveal.reset="$fadeIn(600)">
            北市西區復興計劃，掀起城市經濟紅利
            <br />跟著機場捷運、五星計劃放眼未來
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url('./s3_bg.jpg');
}

.content {
  width: 810px;
  color: #fff;
  text-align: left;
  top: 15%;
  transform: none;
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

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media screen and (max-width: 767px) {

  .content {
    width: 100vw;
    padding: 0 7px;
    color: #fff;
    text-align: left;
    top: 15%;
    transform: none;

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
}
</style>

<script>
export default {
  name: 'section3',

  data() {
    return {}
  },

  methods: {},
}
</script>
