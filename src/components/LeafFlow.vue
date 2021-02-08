<template>
  <div class="leaf-content" id="leaf-content">
    <div id="leaf-bg"></div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.leaf-content {
  width: 100vw;
  height: 100vh;
  min-height: size(1080);
  position: fixed;
  z-index: 1;
}
</style>

<script>
import $ from 'jquery'
import { isMobile, isPC } from '@/utils'
import 'jquery.transit'
export default {
  name: 'LeafFlow',

  data() {
    return {}
  },

  watch: {},

  methods: {},

  mounted() {
    $(function () {
      var snowflakeURl = [
        // require('../projects/jsjm1/s2/leaf (1).png'),
        // require('../projects/jsjm1/s2/leaf (2).png'),
        // require('../projects/jsjm1/s2/leaf (3).png'),
        // require('../projects/jsjm1/s2/leaf (4).png'),
        require('../projects/jiman/leaf/f1.png'),
        require('../projects/jiman/leaf/f2.png'),
        require('../projects/jiman/leaf/f3.png'),
        require('../projects/jiman/leaf/f4.png'),
        require('../projects/jiman/leaf/f5.png'),
        require('../projects/jiman/leaf/f6.png'),
      ]
      var container = $('#leaf-content')
      const visualWidth = container.width()
      const visualHeight = container.height() //获取content的宽高
      function snowflake() {
        // 雪花容器
        var $flakeContainer = $('#leaf-bg')
        // 随机六张图
        function getImagesName() {
          return snowflakeURl[[Math.floor(Math.random() * 6)]]
        }
        // 创建一个雪花元素
        function createSnowBox() {
          var url = getImagesName()
          return $('<div class="snowbox" />')
            .css({
              width: isMobile ? 15 : 25,
              height: isMobile ? 17 : 35,
              position: 'absolute',
              backgroundRepeat: 'no-repeat',
              zIndex: 100000,
              top: '-41px',
              backgroundImage: 'url(' + url + ')',
              backgroundSize: 'cover',
            })
            .addClass('snowRoll')
        }
        // 开始飘花
        setInterval(
          function () {
            // 运动的轨迹
            var startPositionLeft = Math.random() * visualWidth - 100,
              startOpacity = 1,
              endPositionTop = visualHeight - 40,
              endPositionLeft = startPositionLeft - 100 + Math.random() * 1000,
              duration = visualHeight * 10 + Math.random() * 10000
            // 随机透明度，不小于0.5
            var randomStart = Math.random()
            randomStart = randomStart < 0.5 ? startOpacity : randomStart
            // 创建一个雪花
            var $flake = createSnowBox()
            // 设计起点位置
            $flake.css({
              left: startPositionLeft,
              opacity: randomStart,
            })
            // 加入到容器
            $flakeContainer.append($flake)
            // 开始执行动画
            $flake.transition(
              {
                top: endPositionTop,
                left: endPositionLeft,
                opacity: 0.7,
              },
              duration,
              'ease-out',
              function () {
                $(this).remove() //结束后删除
              },
            )
          },
          isMobile ? 1500 : 500,
        )
      }
      snowflake() //执行函数
    })
  },
}
</script>
