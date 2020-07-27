<template>
  <div class="section5">
    <div class="full-bg relative">
      <div
        class="full-img"
        v-lazy:background-image="require('./s5/bg.jpg')"
      ></div>
      <div class="water">
      <div
        class="water-img bg-img"
        v-lazy:background-image="require('./s1/e3.gif')"
      ></div>
      <div
        class="waterpng-img bg-img"
        v-lazy:background-image="require('./s5/bg21.png')"
      ></div>
      </div>
    <!--    <div class="river">
        <div
          v-for="item in riverList"
          :key="item"
          v-lazy:background-image="item"
        ></div>
      </div>
      -->
      <div class="mask absolute">
      <h3 class="title">雙溪之美 悉心典藏<br />浪漫RESORT水花園</h3>
      <img
        v-lazy="require('./s2/hr.png')"
        alt=""
        class="hr"
        data-aos="grow"
        data-aos-delay="400"
        data-aos-duration="600"
      >
      <h3 class="desc">恰前有雙溪環腰、內有波光瀲灩<br />
        兩棟環景鉅座間以水花園串聯，水幕森林、綠蔭滿懷<br />
        如同置身頂級渡假飯店中步步皆美。</h3>
</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.bg {
  background-size: cover;
  position: relative;
  height: size(1080);
}

// .bg-img {
//   background-attachment: fixed;
// }

.bg-img {
  position: absolute;
  z-index: 2;
    height: 100%;
    background-position: center;bottom: 0;right: 0;
  // &:first-child {
  //   position: relative;
  // }
&.water-img{opacity: 0.3;
    width: 80%;
    background-size:100% 100%;}
&.waterpng-img{
    width:100%;background-position:center top;
    background-size:cover;}
}
.water{top: 50%;right: 0;
    width: 100%;
    height:50%;
    position: absolute;}
@keyframes water {
  from {
    transform: skewX(50deg);
  }
  to {
    transform: skewX(-50deg);
  }
}

.mask {
  background-color: rgba(0, 0, 0, 0.5);
  width: size(846);
  height:40%;
  top: 13%;
  right: 0;
  z-index: 2;
  font-size:calc(12px + 1vh);
  color: #ffffff;
  font-weight:initial;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
    align-content:center;

}
.title {
  font-size:2.1em;
  font-weight: bold;
  letter-spacing:0.1em;
}

.desc {
  font-size:1em;
  font-weight: normal;
  line-height: 1.81;
}

.hr {
    width: 25em;
    margin: 0.5em auto;
    height: auto;
}


/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
.bg-img {
&.water-img{
    width: 100%;}
}
  .full-bg {
    width: 100vw;
    min-height: auto;
    height: size-m(287 + 317);
    background-color: #fff;
  }
  .full-img {
    width: 100vw;
    min-height: auto;
    height: size-m(317);
    background-size: cover;
  }
.water{top:size-m(317 * 0.5);
    height: size-m(317 * 0.5);}
  .river {
    position: absolute;
    right: 0;
    bottom: size-m(287);
    width: 100vw;
    z-index: 1;
    div {
      width: 100%;
      height: 13px;
      // margin-left: calc((1920px - 2600px) / 2);
      // position: absolute;
      background-size: cover;
      background-position: 100%;
    }
  }

  .title {
    width: size-m(260);
    font-size: size-m(25);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.52;
    letter-spacing: 2.5px;
    text-align: center;
    color: #ffffff;
    top: size-m(349);
    right: size-m(60);
    z-index: 3;
  }

  .desc {
    font-size: size-m(14);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.57;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    top: size-m(472);
    right: size-m(18);
    z-index: 3;
  }

  .hr {
    width: size-m(323);
    height: size-m(13);
    top: size-m(438);
    right: size-m(26);
    z-index: 3;
  }

  .mask {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: size-m(287);
    top: size-m(317);
    right: 0;
    z-index: 2;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section5',

  data() {
    return {
      isMobile,
      riverList: [
        require('./s5/an (1).png'),
        require('./s5/an (2).png'),
        require('./s5/an (3).png'),
        require('./s5/an (4).png'),
        require('./s5/an (5).png'),
        require('./s5/an (6).png'),
        require('./s5/an (7).png'),
        require('./s5/an (8).png'),
        require('./s5/an (9).png'),
        require('./s5/an (10).png'),
        require('./s5/an (11).png'),
        require('./s5/an (12).png'),
        require('./s5/an (13).png'),
        require('./s5/an (14).png'),
        require('./s5/an (15).png'),
      ],
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
