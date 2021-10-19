<template>
  <div class="thanks" ref="gtmnoscrip2">
    <div class="content-wraper">
      <header class="header">
        <nav class="navbar">
          <div class="container-fluid nav-ml">
            <a class="navbar-brand" href="https://www.hiyes.tw/">
              <img src="https://case.hiyes.tw/resources/thanku/img/nav_logo.png" style="height:45px" alt="nav_logo">
            </a>
          </div>
        </nav>
      </header>
      <main>
        <div class="hiyes-kv">
          <div class="bg-main">
            <div class="container">
              <div class="hiyes-title text-right">
                <h2 class="hiyes-font--1">恭喜你已預約成功!!</h2>
                <hr class="hr--transparent-40">
                <div class="hiyes-font--2 color-1">
                  客服將於上班日 9:30-17:30<br>
                  <hr class="hr--transparent-10">
                  盡快與你聯繫 例假日除外
                </div>

                <hr class="hr--transparent-40">
                <div class="text-center">
                  <a href="https://www.hiyes.tw/BuildingCase" class="hiyes-btn hiyes-btn--color1">看更多建案
                    <i class="fas fa-chevron-circle-right"></i>
                  </a>
                </div>

                <hr class="hr--transparent-10">
                <div class="text-center color-3">
                  客服專線 0800-520-666
                </div>
              </div>
            </div>
          </div>

          <div class="brand text-right hiyes-font--3 color-1 hidden-xs">
            Create Your Lifestyle 替人們實現對家的夢想
          </div>
        </div>
        <div class="sticky mt">

        </div>

      </main>

      <footer class="footer">
        <div class="copyright">海悅廣告股份有限公司 版權所有 © HI-YES CORP.｜ 電話：(02)8712-8888 ｜ 地址：台北市松山區敦化北路260號7樓</div>
      </footer>
    </div>
  </div>
</template>
<style lang="scss" scoped>
// @import '@/assets/style/variableColor.scss';
// .thanks {
//   width: 100vw;
//   height: 100vh;
//   background: $phone_thanks_bg;
//   background-size: cover;
//   background-position: center;
//   // background-image: linear-gradient(to top, rgba(0, 0, 0, 0.24), rgba(156, 30, 35, 0));
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   a {
//     .img {
//       position: absolute;
//       opacity: 1;
//     }
//     .img-hover {
//       opacity: 0;
//     }

//     &:hover {
//       .img {
//         opacity: 0;
//       }
//       .img-hover {
//         opacity: 1;
//       }
//     }
//   }
// }

// @media screen and (max-width: 767px) {
//   .thanks {
//     a {
//       .img,
//       .img-hover {
//         width: 90vw;
//       }
//     }
//   }
// }
</style>

<script>
import formThanksGtm from '@/mixins/formThanksGtm.js'
export default {
  name: 'formThanks',
  components: {},
  mixins: [formThanksGtm],

  methods: {},

  created() {
    var scriptTag1 = document.createElement('script')
    scriptTag1.src =
      'https://case.hiyes.tw/resources/thanku/vendor/jquery/jquery.min.js'
    document.getElementsByTagName('body')[0].appendChild(scriptTag1)

    var scriptTag2 = document.createElement('script')
    scriptTag2.src =
      'https://case.hiyes.tw/resources/thanku/vendor/bootstrap/js/bootstrap.min.js'
    document.getElementsByTagName('body')[0].appendChild(scriptTag2)

    var scriptTag3 = document.createElement('script')
    scriptTag3.src =
      'https://case.hiyes.tw/resources/thanku/vendor/fontawesome/js/solid.min.js'
    document.getElementsByTagName('body')[0].appendChild(scriptTag3)

    var scriptTag4 = document.createElement('script')
    scriptTag4.src =
      'https://case.hiyes.tw/resources/thanku/vendor/fontawesome/js/fontawesome.min.js'
    document.getElementsByTagName('body')[0].appendChild(scriptTag4)

    var linkTag1 = document.createElement('link')
    linkTag1.type = 'text/css'
    linkTag1.rel = 'stylesheet'
    linkTag1.href =
      'https://case.hiyes.tw/resources/thanku/vendor/bootstrap/css/bootstrap.min.css'
    document.getElementsByTagName('head')[0].appendChild(linkTag1)

    var linkTag2 = document.createElement('link')
    linkTag2.type = 'text/css'
    linkTag2.rel = 'stylesheet'
    linkTag2.href = 'https://case.hiyes.tw/resources/thanku/css/main.css'
    document.getElementsByTagName('head')[0].appendChild(linkTag2)

    var linkTag3 = document.createElement('link')
    linkTag3.type = 'text/css'
    linkTag3.rel = 'stylesheet'
    linkTag3.href = 'https://case.hiyes.tw/resources/thanku/css/thanku.css'
    document.getElementsByTagName('head')[0].appendChild(linkTag3)
  },
}
</script>
