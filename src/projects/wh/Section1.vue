<template>
  <div class="section1">
    <div class="bg fullscreen" v-if="!isMobile">
      <!-- <img src="./s1/bg1.png" alt class="bg-img relative" data-aos="fade" data-aos-delay="600" /> -->
      <div class="nav">
        <div class="menu">
          <a href class="logo-link" v-scroll-to="{ element: `#section1` }">
            <img src="./menu/logo.png" alt />
          </a>
          <a href="https://www.dacin.com.tw/about/" class="logo-link" target="_blank">
            <img src="./menu/menu_02.png" alt />
          </a>
          <a href="http://unigiants.com.tw/" class="logo-link" target="_blank">
            <img src="./menu/menu_03.png" alt />
          </a>
        </div>
        <div class="menu">
          <div class="item" v-scroll-to="{ element: `#contact-info` }">
            <!-- img src="./menu/menu_05.png" alt / -->
            <svg version="1.1" id="1" x="0px" y="0px" viewBox="0 0 60 105" style="enable-background:new 0 0 60 105;" xml:space="preserve">
<path d="M51.6,43.1c-0.2-0.4-0.5-0.5-0.7-0.6c-3.2-0.3-8.5,0.2-15.6,1.5c0.4-0.4,0.9-0.8,1.3-1.2 c1.1-1.1,0.9-3.4,0.9-3.6l-1,0.1c0.1,0.6,0.1,2.1-0.6,2.8c-0.6,0.5-1.2,1.2-1.7,1.6c-0.2-0.2-0.4-0.4-0.6-0.5 c0.4-0.4,0.8-1.1,0.8-2.4c0-1.5-0.7-3.7-2.3-4.7c-0.1-0.4-0.2-1.4,0.5-2.4c0.8-1.2,2.4-0.9,2.5-0.9l0.2-1c-0.1,0-2.3-0.4-3.5,1.4 c-0.6,0.9-0.7,1.8-0.7,2.5c-0.3-0.1-0.7-0.1-1.1-0.1c-0.4,0-0.8,0.1-1.1,0.1c0-0.7-0.1-1.6-0.7-2.5c-1.2-1.8-3.4-1.4-3.5-1.4l0.2,1 c0.1,0,1.7-0.3,2.5,0.9c0.7,1,0.5,2,0.5,2.4c-1.6,1-2.3,3.2-2.3,4.7c0,1.2,0.4,1.9,0.8,2.4c-0.2,0.2-0.4,0.3-0.6,0.5 c-0.5-0.4-1.2-1-1.7-1.6c-0.7-0.6-0.6-2.2-0.6-2.8l-1-0.1c0,0.3-0.2,2.5,0.9,3.6c0.4,0.4,0.9,0.8,1.3,1.2c-7-1.3-12.4-1.9-15.6-1.5 c-0.2,0-0.5,0.1-0.6,0.5c-0.4,0.8-0.1,2.5,0.5,3.6c0.9,1.5,4.3,5.5,7.5,5.5c0,0,0.1,0,0.1,0c2,0,4.9-0.8,7.7-2 c-0.5,0.5-1.9,2-2.4,2.4c-0.7,0.7-1,1.7-1,5.1h1c0-3.3,0.4-4,0.7-4.4c0.4-0.4,1.3-1.3,1.9-2c-0.3,0.9-0.5,2.6-0.5,5.4 c0,4.6,3.4,12.4,5.9,12.4h0.3c2.6,0,5.9-7.8,5.9-12.4c0-2.9-0.3-4.5-0.5-5.4c0.6,0.7,1.6,1.6,1.9,2c0.4,0.4,0.7,1,0.7,4.4h1 c0-3.4-0.3-4.4-1-5.1c-0.5-0.5-1.8-1.9-2.4-2.4c2.8,1.2,5.7,2,7.7,2c0,0,0.1,0,0.1,0c3.3,0,6.7-4,7.5-5.5 C51.7,45.6,52,43.9,51.6,43.1z M30,43.1c0,0,2.4-0.1,3.5,1.3c-0.3,0.1-0.7,0.1-1,0.2c-0.8,0.2-1.7,0.8-1.8,1.6c-0.1,0.4,0,1,0.9,1.6 c1,0.6,2.1,1.2,3.2,1.7c-0.5,0.9-2.1,3-4.7,3c-2.7,0-4.2-2.1-4.7-3c1.1-0.5,2.2-1.1,3.2-1.7c0.9-0.6,1-1.3,0.9-1.6 c-0.2-0.8-1-1.4-1.8-1.6c-0.4-0.1-0.7-0.1-1-0.2C27.5,43.1,30,43.1,30,43.1z M33.2,64c-0.3,0.2-1.3,0.6-3.1,0.6h-0.3 c-1.7,0-2.7-0.4-3.1-0.6c-0.4-0.8-0.7-1.7-1-2.7C26.6,61.7,28,62,30,62c2,0,3.4-0.3,4.2-0.6C33.9,62.3,33.6,63.2,33.2,64z M34.5,60.1c-0.4,0.2-1.8,0.8-4.5,0.8c-2.7,0-4.1-0.6-4.5-0.8C25.2,59,25,57.9,25,56.9c0.9,0.4,2.5,0.9,5,0.9c2.5,0,4.1-0.5,5-0.9 C35,57.9,34.8,59,34.5,60.1z M30,53.6c2.1,0,3.6-1,4.5-2c0.2,0.7,0.4,2,0.5,4.1c-0.5,0.3-2,1.1-5,1.1c-3,0-4.5-0.7-5-1.1 c0.1-2.1,0.3-3.4,0.5-4.1C26.4,52.6,27.9,53.6,30,53.6z M27.2,42.6c-0.2-0.2-0.7-0.6-0.7-1.8c0-1.7,0.9-4.3,3.5-4.3 c2.5,0,3.5,2.7,3.5,4.3c0,1.2-0.5,1.7-0.7,1.8C31.5,42,28.5,42,27.2,42.6z M16.5,51.1C16.5,51.1,16.5,51.1,16.5,51.1 c-2.7,0-5.8-3.5-6.7-5c-0.6-1-0.6-2.3-0.5-2.6c3.5-0.3,9.8,0.4,17.8,2.1l0.2,0c0.5,0.1,1,0.5,1,0.8c0,0.2-0.2,0.5-0.4,0.6 C24.3,49.3,19.4,51.1,16.5,51.1z M30.1,68h-0.3c-0.6,0-1.5-1.1-2.4-2.7c0.6,0.2,1.4,0.3,2.4,0.3h0.3c1,0,1.8-0.1,2.4-0.3 C31.6,66.9,30.7,68,30.1,68z M50.2,46.1c-0.9,1.5-4,5-6.7,5c0,0,0,0-0.1,0c-2.9-0.1-7.8-1.8-11.4-4.1c-0.2-0.1-0.5-0.4-0.4-0.6 c0.1-0.3,0.5-0.7,1-0.8l0.2,0c6.8-1.4,12.3-2.1,15.9-2.1c0.7,0,1.3,0,1.9,0.1C50.9,43.9,50.8,45.2,50.2,46.1z"/>
</svg>
            <div>來電洽詢</div>
          </div>
          <div class="item" v-scroll-to="{ element: `#contact-info` }">
            <svg version="1.1" id="1" x="0px" y="0px" viewBox="0 0 60 105" style="enable-background:new 0 0 60 105;" xml:space="preserve">
<path d="M30,69.5l-0.2-0.1c-0.1-0.1-3.7-1.5-7.3-4.6c-4.8-4-7.3-8.9-7.3-14V36.4l0.5,0.1c0.1,0,11.5,2.6,11.5,12.5 c0,3.2-0.9,7.7-8.3,10.7c3.7,5.5,9.9,8.4,11,8.9c1.1-0.5,7.3-3.4,11-8.9c-7.4-3-8.3-7.6-8.3-10.7c0-9.9,11.3-12.4,11.5-12.5 l0.5-0.1v14.5c0,5.2-2.5,10-7.3,14c-3.6,3-7.1,4.5-7.3,4.6L30,69.5z M16.1,37.5v13.4c0,3.1,1,5.8,2.4,8.1c7.1-2.8,7.9-7,7.9-10 C26.4,41,18.3,38.1,16.1,37.5z M43.9,37.5C41.7,38.1,33.6,41,33.6,49c0,3,0.8,7.2,7.9,10c1.4-2.3,2.4-5,2.4-8.1V37.5z"/>
<path d="M36.5,65.4c-0.1,0-3.1-0.8-6.5-2.8c-3.4,2-6.4,2.8-6.6,2.8l-0.2-0.8c0.1,0,2.8-0.7,5.9-2.5 c-4.2-2.7-8.6-7.2-8.6-14.2c0-5.2,3.1-10.4,9.1-15.4l0.3-0.2l0.3,0.2c2.3,1.9,9.1,7.5,9.1,15.4c0,5.5-2.8,10.3-8,13.8 c-0.2,0.1-0.4,0.3-0.6,0.4c3.1,1.8,5.8,2.5,5.9,2.5L36.5,65.4z M30,33.3c-2.4,2-8.6,7.3-8.6,14.5c0,6.8,4.5,11.1,8.6,13.7 c4.1-2.5,8.6-6.8,8.6-13.7C38.6,40.7,32.4,35.3,30,33.3z"/>
</svg>
            <div>地圖導航</div>
          </div>
          <div class="item" v-scroll-to="{ element: `#contact` }">
            <svg version="1.1" id="1" x="0px" y="0px" viewBox="0 0 60 105" style="enable-background:new 0 0 60 105;" xml:space="preserve">
<path d="M48.1,34.2H41c-2.5,0-4.6,0.7-6,1.9c-0.7-0.6-2.4-1.9-5-1.9c-2.6,0-4.3,1.2-5,1.9c-1.4-1.2-3.4-1.9-5.9-1.9 h-7.1v7.1c0,2.5,0.7,4.5,1.9,5.9c-0.6,0.7-1.9,2.4-1.9,5.1c0,2.7,1.3,4.4,1.9,5.1c-1.2,1.4-1.9,3.4-1.9,5.9v7.1h7.1 c2.5,0,4.5-0.7,5.9-1.9c0.7,0.6,2.4,1.9,5,1.9c2.7,0,4.4-1.3,5-1.9c1.4,1.2,3.4,1.9,6,1.9h7.1v-7.1c0-2.5-0.7-4.6-1.9-6 c0.6-0.7,1.9-2.4,1.9-5c0-2.6-1.2-4.3-1.9-5c1.2-1.4,1.9-3.4,1.9-6V34.2z M41.7,48.3c-2.4,0-4.7,0-5.5,0.1c-0.2-0.3-0.4-0.6-0.7-0.9 l1.6-1.6l8.9-0.1C45.1,47.4,43.6,48.3,41.7,48.3z M46,58.8l-8.9-0.1l-1.6-1.6c0.2-0.3,0.5-0.6,0.7-0.9c0.7,0,3.1,0.1,5.5,0.1 C43.6,56.3,45.1,57.2,46,58.8z M40.5,69.4c-1.1,0-2.1-0.2-3-0.6l-0.1-8.4l3.1,3.1L40.5,69.4z M41.5,64.5l4.9,4.9h-4.9L41.5,64.5z M42.2,63.8l4.9,0v4.9L42.2,63.8z M41.2,62.8l-3.1-3.1l8.4,0.1c0.3,0.9,0.5,1.9,0.6,3L41.2,62.8z M34.5,56.8c-2.5,2.5-6.5,2.5-9,0 c-1.2-1.2-1.9-2.8-1.9-4.5c0-1.7,0.7-3.3,1.9-4.5c1.2-1.2,2.9-1.9,4.5-1.9c1.6,0,3.2,0.6,4.5,1.9c1.2,1.2,1.9,2.8,1.9,4.5 C36.4,54,35.7,55.6,34.5,56.8z M13.5,59.8l8.4-0.1l-3.1,3.1l-5.9,0C13,61.6,13.2,60.6,13.5,59.8z M17.8,63.8l-4.9,4.9v-4.9 L17.8,63.8z M18.5,64.5l0,4.9h-4.9L18.5,64.5z M19.6,63.5l3.1-3.1l-0.1,8.4c-0.9,0.3-1.9,0.5-3,0.6L19.6,63.5z M22.9,58.7L14,58.8 c0.9-1.6,2.4-2.5,4.4-2.5c2.4,0,4.7,0,5.5-0.1c0.2,0.3,0.4,0.6,0.7,0.9L22.9,58.7z M14,45.8l8.9,0.1l1.6,1.6 c-0.2,0.3-0.5,0.6-0.7,0.9c-0.7,0-3.1-0.1-5.5-0.1C16.4,48.3,14.9,47.4,14,45.8z M19.6,35.2c1.1,0,2.1,0.2,3,0.6l0.1,8.4l-3.1-3.1 L19.6,35.2z M18.5,40.1l-4.9-4.9h4.9L18.5,40.1z M17.8,40.8l-4.9,0v-4.9L17.8,40.8z M18.8,41.8l3.1,3.1l-8.4-0.1 C13.2,44,13,43,13,41.8L18.8,41.8z M41.5,35.2h4.9l-4.9,4.9L41.5,35.2z M40.5,41.1l-3.1,3.1l0.1-8.4c0.9-0.3,1.9-0.5,3-0.6 L40.5,41.1z M46.5,44.8l-8.4,0.1l3.1-3.1l5.9,0C47,43,46.9,44,46.5,44.8z M42.2,40.8l4.9-4.9v4.9L42.2,40.8z M36.5,36.3l-0.1,8.9 l-1.6,1.6c-0.3-0.2-0.6-0.5-0.9-0.7c0-0.7,0.1-3.1,0.1-5.5C34,38.7,34.9,37.2,36.5,36.3z M34.3,36.8c-0.8,1-1.3,2.3-1.3,3.8 c0,2,0,3.9-0.1,4.9c-1.9-0.8-4-0.8-5.9,0c0-1-0.1-3-0.1-4.9c0-1.5-0.5-2.8-1.3-3.9c0.6-0.5,2.1-1.6,4.3-1.6 C32.2,35.2,33.7,36.3,34.3,36.8z M26,40.6c0,2.4,0,4.7,0.1,5.5c-0.3,0.2-0.6,0.4-0.9,0.7l-1.6-1.6l-0.1-8.9 C25.1,37.2,26,38.7,26,40.6z M14.5,48c1,0.9,2.3,1.3,3.9,1.3c2,0,3.9,0,4.9,0.1c-0.4,0.9-0.6,1.9-0.6,2.9c0,1,0.2,2,0.6,2.9 c-1,0-3,0.1-4.9,0.1c-1.5,0-2.8,0.5-3.9,1.3c-0.5-0.6-1.6-2.1-1.6-4.3C12.9,50.1,14,48.5,14.5,48z M23.6,68.3l0.1-8.9l1.6-1.6 c0.3,0.2,0.6,0.5,0.9,0.7c0,0.7-0.1,3.1-0.1,5.5C26,65.9,25.1,67.4,23.6,68.3z M25.7,67.8c0.9-1,1.3-2.3,1.3-3.9c0-2,0-3.9,0.1-4.9 c0.9,0.4,1.9,0.6,2.9,0.6c1,0,2-0.2,2.9-0.6c0,1,0.1,3,0.1,4.9c0,1.5,0.5,2.8,1.3,3.8c-0.6,0.5-2.1,1.6-4.3,1.6 C27.8,69.4,26.3,68.4,25.7,67.8z M34,64c0-2.4,0-4.7-0.1-5.5c0.3-0.2,0.6-0.4,0.9-0.7l1.6,1.6l0.1,8.9C34.9,67.4,34,65.9,34,64z M45.5,56.6c-1-0.8-2.3-1.3-3.8-1.3c-2,0-3.9,0-4.9-0.1c0.4-0.9,0.6-1.9,0.6-2.9s-0.2-2-0.6-2.9c1,0,3-0.1,4.9-0.1 c1.5,0,2.8-0.5,3.8-1.3c0.5,0.6,1.6,2.1,1.6,4.3C47.1,54.5,46,56,45.5,56.6z"/>
</svg>
            <div>立即預約</div>
          </div>
        </div>
      </div>
      <div class="left">
        <!-- img class="img" src="./s1/logo.png" alt /  data-aos="fade-up" data-aos-delay="400"-->
        <img src="./s1/logo.png" alt class="img" data-aos="fade" data-aos-delay="400" />
        <img src="./s1/t1.png" alt class="img" data-aos="fade" data-aos-delay="600" />
        <img src="./s1/t2.png" alt class="img" data-aos="fade" data-aos-delay="800" />
        <img src="./s1/t3.png" alt class="img" data-aos="fade" data-aos-delay="1000" />
        <img src="./s1/button.png" alt class="btn" v-scroll-to="{ element: `#contact` }" data-aos="fade" data-aos-delay="1200" />
      </div>
      <div class="right">
        <img src="./s1/bg.png" alt class="img" />
        <img class="img" src="./s1/img.gif" alt />
        <img src="./s1/imgt.png" alt class="img" />
      </div>
    </div>
    <div class="bg fullscreen" v-else>
     <div>
        <img src="./mo/1/buttonhover7.png" alt class="btn" v-scroll-to="{ element: `#contact` }" />
        <img src="./mo/1/logo.png" alt class="img" v-scroll-to="{ element: `#contact` }" />
        <img class="img" src="./mo/1/img.gif" alt />
        <img class="img" src="./mo/1/t1.png" alt />
        <img class="img" src="./mo/1/t2.png" alt />
        <img class="img" src="./mo/1/t3.png" alt />
        <img class="img" src="./mo/1/t4.png" alt />
     </div>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  background-position: center;
  position: relative;
  height: 100vh;
  display: flex;
  overflow: hidden;
  min-height: 700px !important;
  width: 90%;
  margin: 0 auto;
  background-color: #fffffb;
}
.nav {
  position: fixed;
  width: 100vw;
  height:calc(100vw * 1 / 20);
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 5vw;
  z-index: 5;

  .logo-link {
    height: 100%;
    margin:auto calc(100vw * 5 / 1920);
    img{height: 100%;width:auto;}
  }
}

.menu {
  display: flex;
  justify-content: flex-end;

  .item {
    width: calc(100vw * 236 / 1920);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: calc(100vw * 29 / 1920);
    font-weight: bold;
    letter-spacing: 3px;
    text-align: left;
    color: #fffffb;
    transition: all 0.3s;
    cursor: pointer;

    > div {
      font-family: 'Noto Serif TC', serif;
    }

    img {
      height: calc(100vw * 64 / 1920);
    }
    &:hover {
      background-color: #8e6129;
    svg{ fill:#fff;}
    }
    svg{ fill:#8e6129;width: calc(100vw * 6/ 200);height:100%;
    transition: fill 0.3s;}
  }
}
.left {
  width: 59%;
  height: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
  z-index: 1;

  .img {
    display: block;
    width: 100%;
    position: absolute;
    object-fit: contain;
    top: 0;

    &:nth-child(1) {
      position: relative;
    }
  }

  .btn {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: calc(50% + 15vw);
    width: calc(100vw * 399 / 1920);
    cursor: pointer;
    opacity: 0.7;
    &:hover {
      animation: btn_op 0.3s linear alternate infinite;
    }
  }
}
@keyframes btn_op {
  to {
    opacity: 1;
    transform: scale(1.1);
  }
}

.right {
  width: 41%;
  height: 100%;
  position: relative;

  .img {
    display: block;
    width: 100%;
    position: absolute;
    object-fit: contain;
    top: 0;

    &:nth-child(1) {
      position: relative;
    object-fit: cover;
    }
  }
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh !important;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .bg {
    min-height: auto !important;
    width: 100vw;
    max-height:calc(100vh - 63px);
    background: url("./mo/1/bg.png") center center;
    background-size: 100% auto;
    position: relative;
    > div{
      
    height: auto;
    position: absolute;
    top:50%;
    left: 0;
    transform: translateY(-50%);
    }
  }
  .img {
    width: 100vw;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    &:last-child{position: relative;}
  }
  .btn {
    bottom: 5%;
    width: calc(100vw * 43 / 375);
    position: absolute;
    left: calc(100vw * 33 / 375);;
    opacity: .7;
    animation: btn_op 0.6s linear alternate infinite;
    &:hover {
      opacity: 1;
      animation-play-state: paused;
    }
  }
  .logo-group {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    img {
      width: 90%;
    }
  }
  .left {
    width: 68%;
  }

  .right {
    width: 100vw;
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
      isMobile,
    }
  },

  methods: {},

  mounted() {},

  computed: {},
}
</script>
