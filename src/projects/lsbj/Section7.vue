<template>
  <div class="section6">
    <div class="bg relative">
      <div class="img">
      <div>
        <img src="./s7/7-1.jpg" alt="hotel dùa" class="img1">
        <p>Hotel dùa</p>
      </div>
      <div>
        <img src="./s7/7-2.jpg" alt="MLD" class="img2">
        <p>MLD</p>
        <img src="./s7/7-3.jpg" alt="晶綺盛宴" class="img3">
        <p>晶綺盛宴</p>
      </div>
      </div>
         <h2 class="text"><span>上市櫃多角化經營</span><span>打造夢想生活藍圖</span></h2>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
  z-index: 2;
  overflow: hidden;
  height: 100vh;
}

.img {
  display: flex;width: 100vw;height:100%;
  img{object-fit: cover;
  & +p{position: absolute;bottom:0;right:0;margin:0 0 ; color: #FFF;z-index: 2;text-align: right;padding: 0 30px 10px 0;}
  }
  > div{
    position: relative;
    width: 50%;height:100%;
    flex: 1 1 auto;flex-direction:column;}
    div{
      display: flex;flex-direction:column;
      }
  .img1{width:100%;height:100%;}
  .img2 + p{bottom: 50%;}
  .img2,.img3{width:100%;height: 50%;flex: 1 1 40%;}
}

.text{
  display: flex;
   position: absolute;top: calc(100vw * 120 / 1920);left:50%;
  font-weight: bold;color: #000;width:3.7em;transform: translateX(-50%);line-height: 1.1;
  font-size:calc(100vw * 57 / 1920);
  span{font-family: "Noto Serif TC";background-color:rgba(255,255,255,0.8) ;margin:0 0.2em;padding:1.7em 0.1em;
  &:nth-child(2){position: relative;top: calc(100vw * 100 / 1920);}
  }

}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    height:calc(100vh - 63px);
  }
  .img{flex-direction:column;
  > div{
    width: 100%;height:30%;flex-direction:row;
    div{flex-direction:row;}
    &:nth-child(1) {height:47%;}
    &::before{content: "";width: 100%;height:calc(100vw * 100 / 750);position: absolute;bottom: 0;left: 0;
    background: -moz-linear-gradient(top,  rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 100%);
background: -webkit-linear-gradient(top,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%);
background: linear-gradient(to bottom,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 );
}
    }
  .img2,.img3{width:50%;height: 100%;flex: 1 1 40%;}
  img{
  & +p{padding: 0 10px 10px 0;}
  }
  .img2 + p{bottom:0;right: 50%;}
    }
.text{
  display: flex; flex-direction:column;
   position: absolute;top: calc(100vw * 630 / 750);left:50%;
  font-weight: bold;color: #000;width:11em;transform: translateX(-55%);
  font-size:calc(100vw * 40 / 750);
  span{display: block;font-family: "Noto Serif TC";background-color:rgba(255,255,255,0.8) ;margin:0;padding:0.3em 0em;flex:1 1 auto;
  &:nth-child(2){position: relative;left: calc(100vw * 70 / 750);top:calc(100vw * 10 / 750);}
  }

}
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
export default {
  name: 'section6',

  data() {
    return {
      isMobile,
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
