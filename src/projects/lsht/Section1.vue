<template>
  <div class="relative">
    <div v-if="!isMobile">
      <img
        src="./s1/bg.jpg"
        alt="聯上海棠"
        class="bg-img"
      >

      <div class="flex animate-row animate-row3">
        <img
          src="./s1/wave2.png"
          alt="聯上海棠"
          class="wave"
        >
        <img
          src="./s1/wave2.png"
          alt="聯上海棠"
          class="wave"
        >
      </div>
      <div class="flex animate-row animate-row2">
        <img
          src="./s1/wave2.png"
          alt="聯上海棠"
          class="wave"
        >
        <img
          src="./s1/wave2.png"
          alt="聯上海棠"
          class="wave"
        >
      </div>
      <div class="flex animate-row">
        <img
          src="./s1/wave1.png"
          alt="聯上海棠"
          class="wave"
        >
        <img
          src="./s1/wave1.png"
          alt="聯上海棠"
          class="wave"
        >
      </div>
      <img
        src="./s1/logo1.png"
        alt="聯上海棠"
        class="nav-logo absolute"
      >
      <img
        src="./s1/logo.png"
        alt="聯上海棠"
        data-aos="fade" data-aos-delay="400"
        class="logo absolute"
      >
      <h3 class="title1 absolute">總價<b>1588</b>萬起</h3>
<h3 class="title2 absolute">買海濱地王</h3>
      <img
        src="./s1/img.jpg"
        class="item-img absolute"
      />


      <div class="slide-content absolute">
        <h3 data-aos="fade" data-aos-delay="400" class="subtitle">
          大海傳說
        </h3>
        <h3 data-aos="fade" data-aos-delay="700" class="title">聽美人魚唱歌</h3>
        <div class="desc">
          <h3 class="words">
            傳說在海裡有一座城堡，美人魚住在裡面，日夜歌唱著，<br />
            一期一會，聽見美人魚唱歌，<br />
            看見她那宛如海棠盛開的魚尾，隨著日出日落搖擺著，<br />
            這樣的傳說，不必等待珍珠的眼淚，<br />
            只要傳說價就可以擁有…….<br /><br />
            制震景觀名宅<br />
            上市上櫃品牌<br />
            國際海灣地段<br />
            時尚優質建材<br /><br />
            因為擁有，讓生活，不再是傳說<br />
            陸地上的夢想家，終於住在海洋旁的飯店宅<br /><br /><br /><br />
            傳說在海裡有一座城堡，美人魚住在裡面，日夜歌唱著，<br />
            一期一會，聽見美人魚唱歌，<br />
            看見她那宛如海棠盛開的魚尾，隨著日出日落搖擺著，<br />
            這樣的傳說，不必等待珍珠的眼淚，<br />
            只要傳說價就可以擁有…….<br /><br />
            制震景觀名宅<br />
            上市上櫃品牌<br />
            國際海灣地段<br />
            時尚優質建材<br /><br />
            因為擁有，讓生活，不再是傳說<br />
            陸地上的夢想家，終於住在海洋旁的飯店宅<br /><br /><br /><br />
          </h3>
          <img
            src="./s1/imgs.png"
            alt="聯上海棠"
            class="mask"
          >
        </div>
      </div>
      <div class="item-border absolute"></div>
    </div>
    <div v-if="isMobile">
      <img
        src="./s1/bg.jpg"
        alt="聯上海棠"
        class="bg-img"
      >

      <div class="flex animate-row">
        <img
          v-lazy="require('./s1/wave1.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s1/wave1.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s1/wave1.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s1/wave1.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s1/wave1.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s1/wave1.png')"
          alt="聯上海棠"
          class="wave"
        >
      </div>
      <div class="flex animate-row animate-row2">
        <img
          v-lazy="require('./s1/wave2.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s1/wave2.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s1/wave2.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s1/wave2.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s1/wave2.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s1/wave2.png')"
          alt="聯上海棠"
          class="wave"
        >
      </div>
      <div class="flex animate-row animate-row3">
        <img
          v-lazy="require('./s1/wave2.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s1/wave2.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s1/wave2.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s1/wave2.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s1/wave2.png')"
          alt="聯上海棠"
          class="wave"
        >
        <img
          v-lazy="require('./s1/wave2.png')"
          alt="聯上海棠"
          class="wave"
        >
      </div>

      <img
        v-lazy="require('./s1/logo1.png')"
        alt="聯上海棠"
        class="nav-logo absolute"
      >
      <img
        v-lazy="require('./s1/logo.png')"
        alt="聯上海棠"
        class="logo absolute"
      >
      <h3 class="title1 absolute">總價<b>1588</b>萬起</h3>
<h3 class="title2 absolute">買海濱地王</h3>

      <img
        v-lazy="require('./mo/1/img.jpg')"
        class="item-img absolute"
      />
      <div class="item-border absolute"></div>

      <div class="slide-content absolute">
        <h3 class="subtitle">
          大海傳說
        </h3>
        <h3 class="title">聽美人魚唱歌</h3>
        <div class="desc">
          <h3 class="words">
            傳說在海裡有一座城堡，美人魚住在裡面，日夜歌唱著，<br />
            一期一會，聽見美人魚唱歌，<br />
            看見她那宛如海棠盛開的魚尾，隨著日出日落搖擺著，<br />
            這樣的傳說，不必等待珍珠的眼淚，<br />
            只要傳說價就可以擁有…….<br /><br />
            制震景觀名宅<br />
            上市上櫃品牌<br />
            國際海灣地段<br />
            時尚優質建材<br /><br />
            因為擁有，讓生活，不再是傳說<br />
            陸地上的夢想家，終於住在海洋旁的飯店宅<br /><br /><br /><br />
            傳說在海裡有一座城堡，美人魚住在裡面，日夜歌唱著，<br />
            一期一會，聽見美人魚唱歌，<br />
            看見她那宛如海棠盛開的魚尾，隨著日出日落搖擺著，<br />
            這樣的傳說，不必等待珍珠的眼淚，<br />
            只要傳說價就可以擁有…….<br /><br />
            制震景觀名宅<br />
            上市上櫃品牌<br />
            國際海灣地段<br />
            時尚優質建材<br /><br />
            因為擁有，讓生活，不再是傳說<br />
            陸地上的夢想家，終於住在海洋旁的飯店宅<br /><br /><br /><br />
          </h3>
          <img
            src="./mo/1/imgs.png"
            alt="聯上海棠"
            class="mask"
          >
        </div>
      </div>
    </div>
    
    <div class="logos">
      <img src="data:image/svg+xml,%0A%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 20' %3E%3ClinearGradient id='ID_1_' gradientUnits='userSpaceOnUse' x1='321' y1='-9.1e-13' x2='321' y2='9.6'%3E%3Cstop offset='0' style='stop-color:%237B2702'/%3E%3Cstop offset='1' style='stop-color:%23E62C17'/%3E%3C/linearGradient%3E%3Cpath fill='url(%23ID_1_)' d='M8.2,9.6v-4l8.8-5.3c0,0,0.7-0.4,1.6,0c0.7,0.4,2.7,1.7,2.7,1.7L8.2,9.6z'/%3E%3ClinearGradient id='ID_2_' gradientUnits='userSpaceOnUse' x1='-3536' y1='9.6' x2='-3536' y2='0'%3E%3Cstop offset='0' style='stop-color:%23F5A719'/%3E%3Cstop offset='1' style='stop-color:%23ED7300'/%3E%3C/linearGradient%3E%3Cpath fill='url(%23ID_2_)' d='M27.3,9.6v-4l-8.8-5.3c0,0-0.7-0.4-1.6,0c-0.7,0.4-2.7,1.7-2.7,1.7L27.3,9.6z'/%3E%3Cpolygon fill='%23941F24' points='8.2,10.1 8.2,10.3 18.3,4.3 18.1,4.2 '/%3E%3Cpath fill='%23000' d='M113.9,12.7v1h-7.9v-1h3.1V6.1h1.1v2.5h3.1v1.1h-3.1v3H113.9z M117.4,10.7c-0.3,0.1-0.5,0.1-0.8,0.2V13 c0,0.5-0.1,0.8-0.4,1c-0.3,0.2-0.7,0.2-1.3,0.2c0-0.3-0.2-0.7-0.3-1c0.3,0,0.7,0,0.8,0c0.1,0,0.1,0,0.1-0.2v-1.8l-1,0.3l-0.2-1 c0.3-0.1,0.7-0.2,1.2-0.3V8.6h-1v-1h1V6h1v1.6h0.7v1h-0.7V10l0.7-0.2L117.4,10.7z M119.3,10.4c-0.1,0.1-0.2,0.3-0.3,0.4h3.4 c0,0,0,0.2,0,0.4c-0.1,1.7-0.2,2.4-0.4,2.6c-0.2,0.2-0.3,0.3-0.6,0.3c-0.2,0-0.6,0-0.9,0c0-0.3-0.1-0.6-0.3-0.9c0.3,0,0.6,0,0.7,0 c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.6,0.3-1.6h-0.3c-0.4,1-1,1.9-1.7,2.5c-0.1-0.1-0.5-0.4-0.7-0.5c0.6-0.5,1.2-1.2,1.5-2h-0.4 c-0.5,0.9-1.3,1.8-2.1,2.3c-0.1-0.1-0.5-0.5-0.6-0.6c0.7-0.4,1.4-1,1.8-1.7h-0.4c-0.3,0.3-0.6,0.6-0.8,0.8c-0.1-0.2-0.5-0.4-0.7-0.6 c0.6-0.4,1-0.9,1.4-1.5h-0.9V9.6h5.3v0.8H119.3z M122.1,9.2H118V6.3h4.1V9.2z M121.1,7H119v0.4h2.2V7z M121.1,8.1H119v0.4h2.2V8.1z M131.1,6.4v7.8h-1v-0.4h-5.4v0.4h-1V6.4H131.1z M130.1,12.9V7.3H129c0.3,0.1,0.6,0.3,0.7,0.5l-0.3,0.4h0.4v0.7h-1.6 c0,0.5,0.1,0.9,0.2,1.3c0.2-0.3,0.3-0.7,0.4-1.1l0.8,0.2c-0.2,0.8-0.5,1.4-0.9,2c0.1,0.3,0.2,0.4,0.4,0.5c0.1,0,0.2-0.3,0.2-0.8 c0.2,0.2,0.5,0.4,0.6,0.5c-0.1,1.1-0.6,1.4-1.2,1.1c-0.3-0.1-0.5-0.3-0.7-0.6c-0.3,0.3-0.6,0.5-0.9,0.7c-0.1-0.2-0.4-0.5-0.6-0.6 c0.1-0.1,0.2-0.1,0.3-0.2c-0.7,0.1-1.4,0.2-2,0.3l-0.1-0.8c0.6-0.1,1.5-0.2,2.5-0.3l0,0.4c0.2-0.1,0.3-0.3,0.4-0.4 c-0.2-0.6-0.3-1.4-0.4-2.3H125V8.2h2.4c0-0.2,0-0.5,0-0.7h0.9c0,0.3,0,0.5,0,0.7h0.9c-0.2-0.2-0.4-0.3-0.7-0.5l0.4-0.4h-4.2v5.6 H130.1z M127.1,11h-1.9V9.3h1.9V11z M126.4,9.9h-0.6v0.6h0.6V9.9z M136.1,9.8c-0.3,0.3-0.6,0.6-0.9,0.8c-0.1-0.2-0.3-0.5-0.5-0.6 c0.1,0.3,0.1,0.6,0.1,0.8c0,0.6-0.1,0.9-0.4,1.1c-0.1,0.1-0.3,0.2-0.5,0.2c-0.1,0-0.3,0-0.5,0c0-0.2-0.1-0.6-0.2-0.9 c0.1,0,0.3,0,0.3,0c0.1,0,0.2,0,0.2-0.1c0.1-0.1,0.1-0.3,0.1-0.5c0-0.4-0.1-1-0.6-1.6c0.2-0.5,0.3-1.2,0.5-1.8h-0.6v6.9h-0.9V6.4 h1.8l0.1,0l0.6,0.4c-0.1,0.4-0.2,0.8-0.3,1.1c0.5-0.5,0.8-1.1,1.1-1.8l0.8,0.2c-0.1,0.1-0.1,0.3-0.2,0.4h0.7l0.1,0l0.5,0.2l0,0.2 l0.4-0.1l0-0.4h1.4l0.2,0l0.6,0.3c-0.2,0.7-0.6,1.5-1,2c0.3,0.5,0.8,0.9,1.2,1.1c-0.2,0.2-0.5,0.5-0.6,0.7c-0.4-0.2-0.7-0.6-1-0.9 v0.5h-2.6V9.8z M135.8,8.9c0.1-0.1,0.2-0.3,0.3-0.4c-0.2-0.2-0.4-0.4-0.6-0.5c-0.2,0.2-0.3,0.4-0.5,0.6c-0.1-0.1-0.3-0.3-0.5-0.4 c-0.1,0.3-0.2,0.6-0.3,0.8c0.2,0.3,0.4,0.7,0.5,1c0.3-0.2,0.6-0.5,0.9-0.8c-0.3,0.1-0.6,0.1-1,0.2l-0.1-0.6c0.4,0,0.7-0.1,1.2-0.1 L135.8,8.9z M136.5,12.3c-0.3,0.5-0.8,1.2-1.2,1.6c-0.2-0.2-0.6-0.4-0.8-0.5c0.4-0.4,0.8-0.9,1.1-1.4L136.5,12.3z M137.9,11.7v2.5 h-1v-2.5h-1.6v-0.8h4.2v0.8H137.9z M136,7.3l-0.1,0.1c0.2,0.1,0.4,0.3,0.6,0.4c0.1-0.2,0.1-0.3,0.2-0.5H136z M138.5,9.4 c-0.4-0.6-0.7-1.3-1-2.1c-0.2,0.8-0.6,1.5-1,2.1H138.5z M138.3,7.2c0.1,0.3,0.2,0.6,0.3,0.8c0.2-0.3,0.3-0.6,0.4-0.8H138.3z M139.1,11.9c0.4,0.4,0.9,1,1.2,1.4l-0.8,0.5c-0.2-0.4-0.8-1-1.1-1.5L139.1,11.9z M148.9,8.5v0.7h-1.6l-0.1,0.7h-5l0.1-0.7h-1.4V8.5 h1.5l0.1-0.7h4.9l-0.1,0.7H148.9z M146.6,13c0.8,0.2,1.5,0.4,2.1,0.6l-0.7,0.6c-0.6-0.2-1.7-0.6-2.7-0.8l0.4-0.4H144l0.5,0.4 c-0.7,0.4-2,0.7-3,0.9c-0.1-0.2-0.4-0.5-0.6-0.7c0.8-0.1,1.7-0.3,2.3-0.5H142v-2.8h5.7V13H146.6z M142.1,8.3h-0.9V6.7h3.2 c-0.1-0.2-0.2-0.4-0.3-0.5L145,6c0.1,0.2,0.3,0.5,0.4,0.8h3.2v1.5h-1V7.5h-5.5V8.3z M143.1,10.9h3.6v-0.3h-3.6V10.9z M143.1,11.7 h3.6v-0.3h-3.6V11.7z M143.1,12.5h3.6v-0.3h-3.6V12.5z M143.2,9.4h1.2l0-0.3h-1.2L143.2,9.4z M143.3,8.3l0,0.3h1.1l0-0.3H143.3z M146.3,9.4l0-0.3h-1.1l0,0.3H146.3z M146.4,8.3h-1.1l0,0.3h1.1L146.4,8.3z M152.9,12.8c-0.6,0.5-1.6,1-2.5,1.2 c-0.1-0.2-0.4-0.6-0.6-0.8c0.9-0.1,1.9-0.4,2.4-0.7L152.9,12.8z M157.5,11.4v0.9h-3.4v2h-1v-2h-3.3v-0.9h3.3V11h-2.5v-0.8h2.5V9.8 h-3V9h1.6c-0.1-0.2-0.2-0.4-0.3-0.6l0.6-0.1h-2.2V7.5h1.2c-0.1-0.3-0.4-0.8-0.6-1.1l0.9-0.3c0.3,0.4,0.6,0.9,0.7,1.2l-0.4,0.2h0.8V6 h1v1.4h0.7V6h1v1.4h0.8l-0.3-0.1c0.2-0.3,0.4-0.9,0.6-1.3l1.1,0.3c-0.2,0.4-0.5,0.8-0.7,1.1h1.1v0.8h-2.3l0.8,0.2 c-0.2,0.2-0.4,0.4-0.5,0.6h1.7v0.8h-3v0.4h2.6V11h-2.6v0.4H157.5z M152.5,8.3c0.1,0.2,0.3,0.5,0.3,0.7L152.3,9h2.4l-0.3-0.1 c0.1-0.2,0.3-0.5,0.4-0.7H152.5z M155.2,12.4c0.7,0.3,1.7,0.7,2.3,1l-0.7,0.6c-0.5-0.3-1.5-0.8-2.3-1.1L155.2,12.4z M158.7,10.7 c0-1.7,0.5-3.2,1.3-4.5l0.8,0.3c-0.7,1.3-1.1,2.8-1.1,4.2c0,1.4,0.3,2.9,1.1,4.2l-0.8,0.3C159.2,13.8,158.7,12.4,158.7,10.7z M169.5,10c-0.3,1.1-0.8,2-1.5,2.6c0.5,0.3,1.1,0.5,1.7,0.6c-0.2,0.2-0.5,0.6-0.7,0.9c-0.7-0.2-1.3-0.5-1.9-0.9 c-0.6,0.4-1.2,0.6-1.9,0.8c-0.1-0.3-0.3-0.6-0.5-0.9c0,0.3-0.1,0.5-0.3,0.6c-0.2,0.2-0.6,0.2-1.1,0.2c0-0.3-0.1-0.7-0.3-1 c0.3,0,0.5,0,0.6,0c0.1,0,0.1,0,0.1-0.1v-1.7c-0.2,0.1-0.5,0.3-0.7,0.4l-0.3-0.6c-0.1,1.1-0.2,2.3-0.5,3.1c-0.2-0.2-0.6-0.4-0.8-0.5 c0.5-1.2,0.5-2.9,0.5-4.2V6.3h2.8v2.6c0.9-0.5,1.1-1.1,1.1-1.7V6.3h2.9v1.9c0,0.3,0,0.3,0.1,0.3h0.3c0.1,0,0.3,0,0.4-0.1 c0,0.3,0,0.6,0.1,0.8c-0.1,0-0.3,0.1-0.5,0.1h-0.4c-0.8,0-1-0.3-1-1.2V7.3h-1v0c0,0.8-0.3,1.8-1.4,2.4c-0.1-0.2-0.4-0.5-0.6-0.6v4 c0,0.1,0,0.1,0,0.2c0.6-0.1,1.1-0.3,1.6-0.6c-0.5-0.5-0.8-1.1-1.1-1.7l0.4-0.1h-0.6v-1h3.6l0.2,0L169.5,10z M163,9.5 c0,0.4,0,0.8,0,1.2c0.3-0.1,0.6-0.2,0.9-0.3v-1l-0.3,0.3c-0.1-0.2-0.3-0.4-0.5-0.7V9.5z M163,7.3v1.1l0.2-0.2 c0.2,0.2,0.4,0.4,0.6,0.7V7.3H163z M166.3,10.8c0.2,0.5,0.6,0.9,1,1.2c0.4-0.3,0.7-0.8,0.9-1.2H166.3z M170.5,14.9 c0.7-1.3,1.1-2.7,1.1-4.2c0-1.4-0.3-2.9-1.1-4.2l0.8-0.3c0.8,1.3,1.3,2.8,1.3,4.5c0,1.8-0.5,3.2-1.3,4.5L170.5,14.9z M102.8,2.4 h-0.5v15.3h0.5V2.4z M14.7,11.7l0.3-0.1c0.1,0.2,0.2,0.3,0.5,0.3c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.1,0.1-0.3c0,0,0-0.1,0-0.1 c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0,0c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0c-0.2-0.1-0.4-0.2-0.5-0.3 c-0.1-0.1-0.1-0.2-0.1-0.4c0-0.2,0.1-0.3,0.2-0.5c0.1-0.1,0.3-0.2,0.5-0.2c0.2,0,0.3,0,0.4,0.1c0.1,0.1,0.2,0.2,0.2,0.3l-0.3,0.2 c-0.1-0.1-0.2-0.2-0.3-0.2c-0.1,0-0.2,0-0.2,0.1c-0.1,0.1-0.1,0.1-0.1,0.2c0,0.1,0,0.2,0.1,0.2c0.1,0.1,0.2,0.1,0.3,0.2c0,0,0,0,0,0 c0.2,0.1,0.4,0.2,0.5,0.3c0.1,0.1,0.1,0.2,0.1,0.4c0,0.2-0.1,0.4-0.2,0.5c-0.1,0.1-0.3,0.2-0.6,0.2c-0.2,0-0.4,0-0.5-0.1 C14.8,12,14.8,11.9,14.7,11.7z M16.6,9.9H17v1.4c0,0.4,0.2,0.6,0.6,0.6c0.4,0,0.6-0.2,0.6-0.6V9.9h0.4v1.5c0,0.6-0.3,0.9-1,0.9 c-0.6,0-1-0.3-1-0.9V9.9z M19.1,12.2V9.8l1.5,1.4c0.1,0.1,0.2,0.2,0.3,0.3V9.9h0.3v2.4l-1.5-1.5c-0.1-0.1-0.2-0.2-0.2-0.3v1.6H19.1z M12.6,15.7v-1.1l-0.8-1.3h0.4l0.5,0.8c0,0,0.1,0.1,0.1,0.2c0-0.1,0.1-0.1,0.1-0.2l0.5-0.8h0.4L13,14.6v1.1H12.6z M16.3,14.5 c0,0.3-0.1,0.6-0.4,0.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4c-0.2-0.2-0.4-0.5-0.4-0.9c0-0.3,0.1-0.6,0.4-0.9 c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4C16.2,13.9,16.3,14.2,16.3,14.5z M15.9,14.5c0-0.2-0.1-0.4-0.3-0.6 c-0.2-0.2-0.4-0.3-0.6-0.3c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.2,0.4-0.2,0.6c0,0.2,0.1,0.4,0.2,0.6c0.2,0.2,0.4,0.3,0.6,0.3 c0.2,0,0.4-0.1,0.6-0.3C15.9,15,15.9,14.8,15.9,14.5z M16.8,13.4h0.4v1.4c0,0.4,0.2,0.6,0.6,0.6c0.4,0,0.6-0.2,0.6-0.6v-1.4h0.4v1.5 c0,0.6-0.3,0.9-1,0.9c-0.6,0-1-0.3-1-0.9V13.4z M19.2,15.7v-2.4l1.5,1.4c0.1,0.1,0.2,0.2,0.3,0.3v-1.6h0.3v2.4l-1.5-1.5 c-0.1-0.1-0.2-0.2-0.2-0.3v1.6H19.2z M23.1,14.5H24c0,0.1,0,0.2,0,0.2c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3 c-0.4,0-0.7-0.1-0.9-0.3c-0.2-0.2-0.3-0.5-0.3-0.9c0-0.4,0.1-0.7,0.4-0.9c0.2-0.2,0.5-0.3,0.9-0.3c0.4,0,0.7,0.1,0.9,0.4l-0.3,0.2 c-0.2-0.2-0.4-0.3-0.6-0.3c-0.3,0-0.5,0.1-0.6,0.2c-0.2,0.2-0.2,0.4-0.2,0.6c0,0.3,0.1,0.5,0.2,0.6c0.2,0.2,0.4,0.2,0.6,0.2 c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.2-0.2,0.2-0.4v0h-0.6V14.5z M37.8,12.7v1h-7.9v-1H33V6.1h1.1v2.5h3.1v1.1h-3.1v3H37.8z M41.4,10.7 c-0.3,0.1-0.5,0.1-0.8,0.2V13c0,0.5-0.1,0.8-0.4,1c-0.3,0.2-0.7,0.2-1.3,0.2c0-0.3-0.2-0.7-0.3-1c0.3,0,0.7,0,0.8,0 c0.1,0,0.1,0,0.1-0.2v-1.8l-1,0.3l-0.2-1c0.3-0.1,0.7-0.2,1.2-0.3V8.6h-1v-1h1V6h1v1.6h0.7v1h-0.7V10l0.7-0.2L41.4,10.7z M43.3,10.4 c-0.1,0.1-0.2,0.3-0.3,0.4h3.4c0,0,0,0.2,0,0.4c-0.1,1.7-0.2,2.4-0.4,2.6c-0.2,0.2-0.3,0.3-0.6,0.3c-0.2,0-0.6,0-0.9,0 c0-0.3-0.1-0.6-0.3-0.9c0.3,0,0.6,0,0.7,0c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.6,0.3-1.6h-0.3c-0.4,1-1,1.9-1.7,2.5 c-0.1-0.1-0.5-0.4-0.7-0.5c0.6-0.5,1.2-1.2,1.5-2h-0.4c-0.5,0.9-1.3,1.8-2.1,2.3c-0.1-0.1-0.5-0.5-0.6-0.6c0.7-0.4,1.4-1,1.8-1.7 h-0.4c-0.3,0.3-0.6,0.6-0.8,0.8c-0.1-0.2-0.5-0.4-0.7-0.6c0.6-0.4,1-0.9,1.4-1.5h-0.9V9.6h5.3v0.8H43.3z M46,9.2H42V6.3H46V9.2z M45.1,7h-2.2v0.4h2.2V7z M45.1,8.1h-2.2v0.4h2.2V8.1z M55,6.4v7.8h-1v-0.4h-5.4v0.4h-1V6.4H55z M54,12.9V7.3h-1.1 c0.3,0.1,0.6,0.3,0.7,0.5l-0.3,0.4h0.4v0.7h-1.6c0,0.5,0.1,0.9,0.2,1.3c0.2-0.3,0.3-0.7,0.4-1.1l0.8,0.2c-0.2,0.8-0.5,1.4-0.9,2 c0.1,0.3,0.2,0.4,0.4,0.5c0.1,0,0.2-0.3,0.2-0.8c0.2,0.2,0.5,0.4,0.6,0.5c-0.1,1.1-0.6,1.4-1.2,1.1c-0.3-0.1-0.5-0.3-0.7-0.6 c-0.3,0.3-0.6,0.5-0.9,0.7c-0.1-0.2-0.4-0.5-0.6-0.6c0.1-0.1,0.2-0.1,0.3-0.2c-0.7,0.1-1.4,0.2-2,0.3l-0.1-0.8 c0.6-0.1,1.5-0.2,2.5-0.3l0,0.4c0.2-0.1,0.3-0.3,0.4-0.4c-0.2-0.6-0.3-1.4-0.4-2.3h-2.4V8.2h2.4c0-0.2,0-0.5,0-0.7h0.9 c0,0.3,0,0.5,0,0.7h0.9c-0.2-0.2-0.4-0.3-0.7-0.5l0.4-0.4h-4.2v5.6H54z M51.1,11h-1.9V9.3h1.9V11z M50.4,9.9h-0.6v0.6h0.6V9.9z M60.1,9.8c-0.3,0.3-0.6,0.6-0.9,0.8c-0.1-0.2-0.3-0.5-0.5-0.6c0.1,0.3,0.1,0.6,0.1,0.8c0,0.6-0.1,0.9-0.4,1.1 c-0.1,0.1-0.3,0.2-0.5,0.2c-0.1,0-0.3,0-0.5,0c0-0.2-0.1-0.6-0.2-0.9c0.1,0,0.3,0,0.3,0c0.1,0,0.2,0,0.2-0.1 c0.1-0.1,0.1-0.3,0.1-0.5c0-0.4-0.1-1-0.6-1.6c0.2-0.5,0.3-1.2,0.5-1.8h-0.6v6.9h-0.9V6.4h1.8l0.1,0l0.6,0.4 c-0.1,0.4-0.2,0.8-0.3,1.1C59,7.4,59.4,6.7,59.6,6l0.8,0.2c-0.1,0.1-0.1,0.3-0.2,0.4h0.7l0.1,0l0.5,0.2l0,0.2l0.4-0.1l0-0.4h1.4 l0.2,0l0.6,0.3c-0.2,0.7-0.6,1.5-1,2c0.3,0.5,0.8,0.9,1.2,1.1c-0.2,0.2-0.5,0.5-0.6,0.7c-0.4-0.2-0.7-0.6-1-0.9v0.5h-2.6V9.8z M59.8,8.9c0.1-0.1,0.2-0.3,0.3-0.4c-0.2-0.2-0.4-0.4-0.6-0.5c-0.2,0.2-0.3,0.4-0.5,0.6c-0.1-0.1-0.3-0.3-0.5-0.4 c-0.1,0.3-0.2,0.6-0.3,0.8c0.2,0.3,0.4,0.7,0.5,1c0.3-0.2,0.6-0.5,0.9-0.8c-0.3,0.1-0.6,0.1-1,0.2l-0.1-0.6c0.4,0,0.7-0.1,1.2-0.1 L59.8,8.9z M60.5,12.3c-0.3,0.5-0.8,1.2-1.2,1.6c-0.2-0.2-0.6-0.4-0.8-0.5c0.4-0.4,0.8-0.9,1.1-1.4L60.5,12.3z M61.9,11.7v2.5h-1 v-2.5h-1.6v-0.8h4.2v0.8H61.9z M59.9,7.3l-0.1,0.1c0.2,0.1,0.4,0.3,0.6,0.4c0.1-0.2,0.1-0.3,0.2-0.5H59.9z M62.4,9.4 c-0.4-0.6-0.7-1.3-1-2.1c-0.2,0.8-0.6,1.5-1,2.1H62.4z M62.2,7.2c0.1,0.3,0.2,0.6,0.3,0.8c0.2-0.3,0.3-0.6,0.4-0.8H62.2z M63,11.9 c0.4,0.4,0.9,1,1.2,1.4l-0.8,0.5c-0.2-0.4-0.8-1-1.1-1.5L63,11.9z M67.5,9.1c-0.1,1.3-0.3,2.3-0.7,3.2c0.8,0.7,1.9,0.8,3.2,0.8 c0.5,0,2.3,0,2.9,0c-0.1,0.2-0.3,0.7-0.4,1H70c-1.5,0-2.7-0.2-3.6-0.9c-0.3,0.5-0.6,0.8-1,1.1c-0.1-0.2-0.5-0.6-0.8-0.7 c0.4-0.3,0.8-0.7,1-1.2c-0.3-0.5-0.6-1-0.8-1.7l0.8-0.3c0.1,0.4,0.3,0.7,0.4,1c0.2-0.4,0.3-1,0.3-1.5h-1.4c0.3-0.6,0.8-1.6,1.2-2.5 h-1.3V6.5h2.7c-0.3,0.8-0.7,1.7-1.1,2.5h0.2l0.2,0L67.5,9.1z M69.3,7.5h-1.5V6.7h1.5V6.1h1v0.7h1.9v1.2h0.5v0.8h-0.5v1.2h-1.9v0.4h2 V11h-2v0.4h2.3v0.8h-2.3v0.6h-1v-0.6h-1.9v-0.8h1.9V11h-1.6v-0.8h1.6V9.8h-1.5V9.1h1.5V8.7h-2V7.9h2V7.5z M70.3,7.5v0.4h1V7.5H70.3z M71.3,8.7h-1v0.4h1V8.7z M81.6,7.3h-1.5c0.2,0.2,0.3,0.4,0.5,0.5l-0.7,0.5h0.6v1.7c0,0.1,0,0.2,0,0.3c0,0,0.1,0,0.1,0h0.1 c0,0,0.1,0,0.1,0c0,0,0.1-0.1,0.1-0.2c0-0.1,0-0.3,0-0.6c0.2,0.1,0.4,0.3,0.7,0.4c0,0.3-0.1,0.7-0.1,0.8c-0.1,0.1-0.2,0.3-0.3,0.3 c-0.1,0.1-0.3,0.1-0.5,0.1h-0.4c-0.2,0-0.4-0.1-0.6-0.2c-0.1-0.1-0.2-0.3-0.2-0.7l-0.3,0.6c-0.2-0.1-0.4-0.2-0.6-0.3 c-0.1,0.2-0.3,0.3-0.5,0.5h0.1v0.5h3.5v0.8h-2.3c0.7,0.3,1.7,0.8,2.2,1.1L80.7,14c-0.5-0.4-1.5-0.9-2.2-1.2l0.7-0.6h-1.1v2h-1v-2 h-3.4v-0.8H77v-0.5h0.1c-0.1-0.1-0.2-0.2-0.3-0.3v0c-1.1,0.1-2.2,0.3-3,0.4l-0.1-0.8c0.3,0,0.7-0.1,1.2-0.1V9.1h-1.1V8.3h2.2 c-0.2-0.2-0.5-0.6-0.7-0.8l0.3-0.3H75c-0.3,0.4-0.6,0.7-0.9,0.9C74,8,73.7,7.6,73.5,7.5c0.5-0.4,1-0.9,1.3-1.5l0.9,0.3 c0,0.1-0.1,0.2-0.1,0.3h1.9v0.8h-1.3c0.2,0.2,0.4,0.4,0.5,0.6l-0.6,0.5h0.7v0.7h-1v1c0.3,0,0.7-0.1,1-0.1l0,0.7 c0.4-0.2,0.7-0.3,0.8-0.5c-0.2-0.1-0.5-0.2-0.7-0.3l0.4-0.6c0.2,0.1,0.4,0.2,0.6,0.3c0,0,0-0.1,0-0.1V9h-0.8V8.3h2.6 c-0.1-0.2-0.4-0.6-0.7-0.8l0.3-0.2h-0.7c-0.2,0.4-0.5,0.7-0.8,0.9c-0.2-0.2-0.6-0.5-0.8-0.6c0.5-0.4,1-1,1.2-1.6l0.9,0.2 c0,0.1-0.1,0.2-0.1,0.3h2.4L81.6,7.3z M76.7,12.6c-0.5,0.7-1.5,1.3-2.4,1.5c-0.2-0.3-0.5-0.6-0.7-0.9c0.9-0.2,1.8-0.5,2.2-1 L76.7,12.6z M78.8,9.3c0,0.2,0,0.3,0,0.5c0.3,0.1,0.5,0.2,0.6,0.3V10V9h-0.6V9.3z M90,6.3v7.9h-1v-0.4h-5.4v0.4h-0.9V6.3H90z M89,13 V7.1h-5.4V13H89z M88.8,11.7h-1.1v0.6c0,0.3-0.1,0.4-0.3,0.5c-0.2,0.1-0.6,0.1-1.1,0.1c0-0.2-0.1-0.4-0.2-0.5c0.2,0,0.5,0,0.6,0 c0.1,0,0.1,0,0.1-0.1v-0.5h-1.5c0.2,0.2,0.5,0.5,0.6,0.7l-0.7,0.3c-0.1-0.2-0.4-0.6-0.6-0.8l0.6-0.3h-1.4v-0.6h3.1v-0.3h0.9v0.3h0.5 c-0.1-0.1-0.2-0.2-0.3-0.3c-1.4,0.1-2.9,0.1-4,0.1l0-0.6c0.5,0,1.2,0,1.9,0v-0.3h-1.7V8.4h1.7V8.1h-2V7.5h2V7.2h0.8v0.3h2v0.6h-2 v0.3h1.8v1.8H88c0.3,0.2,0.6,0.5,0.7,0.7l-0.5,0.3h0.5V11.7z M84.9,9.1h0.9V8.8h-0.9V9.1z M85.8,9.7V9.5h-0.9v0.3H85.8z M86.7,8.8 v0.3h0.9V8.8H86.7z M87.6,9.5h-0.9v0.3h0.9V9.5z M86.7,10.4h0.7l-0.1-0.1l0.3-0.2h-0.9V10.4z M94,6.8c-0.2,0.7-0.5,1.7-0.8,2.4 c0.5,0.7,0.6,1.3,0.6,1.8c0,0.6-0.1,0.9-0.4,1.1c-0.1,0.1-0.3,0.2-0.5,0.2c-0.2,0-0.4,0-0.6,0c0-0.3-0.1-0.6-0.2-0.9 c0.2,0,0.3,0,0.4,0c0.1,0,0.2,0,0.2-0.1C93,11.2,93,11,93,10.8c0-0.4-0.1-1-0.6-1.5c0.2-0.5,0.3-1.3,0.5-1.9h-0.7v6.9h-0.9V6.4h1.9 l0.1,0L94,6.8z M99,9.3c-0.3,0.2-0.7,0.4-1,0.6c0.3,0.9,0.8,1.9,1.3,2.4c-0.2,0.1-0.5,0.5-0.7,0.7c-0.5-0.6-1.1-1.7-1.4-2.7l0,0 c0.4,1.4,0.2,2.9-0.3,3.3c-0.3,0.3-0.6,0.4-1,0.4c-0.2,0-0.5,0-0.7,0c0-0.3-0.1-0.6-0.2-0.9c0.3,0,0.6,0,0.8,0c0.2,0,0.3,0,0.5-0.2 c0.2-0.2,0.3-0.6,0.3-1.1c-0.6,0.5-1.5,1-2.2,1.2c-0.1-0.2-0.4-0.5-0.6-0.7c1-0.3,2.1-0.9,2.7-1.5c0-0.1-0.1-0.3-0.1-0.5 c-0.5,0.4-1.2,0.8-1.7,1.1c-0.1-0.2-0.3-0.6-0.6-0.7c0.6-0.2,1.5-0.7,2-1.1c-0.1-0.2-0.2-0.3-0.3-0.5c-0.5,0.3-1,0.6-1.4,0.8 c-0.1-0.2-0.4-0.6-0.6-0.7c0.6-0.2,1.3-0.6,1.8-1H94V7.4h1.4c-0.2-0.3-0.5-0.6-0.8-0.9l0.8-0.5c0.4,0.3,0.8,0.7,1,1l-0.4,0.3h0.8 C96.9,7,97.3,6.5,97.5,6l1,0.3c-0.2,0.4-0.5,0.8-0.7,1.1H99v0.9h-2.3c-0.1,0.1-0.2,0.2-0.4,0.3c0.2,0.3,0.4,0.6,0.6,0.9 c0.5-0.3,1.1-0.7,1.4-1L99,9.3z'/%3E%3C/svg%3E%0A" alt="上揚國際">
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.relative {
  // height: 100vh;
  // overflow: hidden;
  position: relative;
  height: size(1080);
  //height: 100vh;
}

.bg-img {
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  object-fit: cover;
  &:first-child{
  height: size(1080);
  }
}
.logos{
  position: fixed;right: 0;bottom: 0;height:30px;
  opacity: 0.7;
z-index: 20;
img{height: 100%;}}

.animate-row {
  width: 200vw;
  animation: moving 30s linear infinite;
  position: absolute;
  // bottom: size(-200);
  top: -45vh;

  img {
    width: 50%;
    height: size(1337);
    // height: size(413);

    &:nth-child(2) {
      margin-left: -0.03%;
    }
  }

  &.animate-row2 {
    // bottom: size(100);
    animation: moving 20s -5s linear infinite;
  top: -43vh;

    // img {
    //   height: size(79);
    // }
    // animation-delay: 5s;
  }

  &.animate-row3 {
    animation: moving 25s -10s linear infinite;
  top: -40vh;
  }
}

.slide-content {
  width: size(758);
  height: size(884);
  right: size(188);
  left: auto;
  top: 0;
  overflow: hidden;
  border-radius: 60% 40% 45% 55% / 50% 45% 55% 50%;
  overflow: hidden;
  animation: border-radius 4s ease alternate infinite;
  padding-top: size(176);
}

.item-img {
  width: size(758);
  height: size(884);
  right: size(188);
  left: auto;
  top: 0;
  border-radius: 60% 40% 45% 55% / 50% 45% 55% 50%;
  overflow: hidden;
  animation: border-radius 4s ease alternate infinite;
}

.item-border {
  width: size(788);
  height: size(904);
  right: size(180);
  left: auto;
  top: 0;
  border-radius: 60% 40% 45% 55% / 50% 45% 55% 50%;
  overflow: hidden;
  animation: border-radius 5s 2s ease alternate infinite;
  border: 1px solid #d0a100;
}

.title {
  font-size: size(44);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.23;
  letter-spacing: 6.16px;
  text-align: center;
  color: #ffffff;
}

.subtitle {
  font-size: size(24);
  letter-spacing: 3.36px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.23;
  letter-spacing: 6.16px;
  text-align: center;
  color: #ffffff;
}

.desc {
  font-size: size(14);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  width: size(758);
  height: size(242);
  position: relative;
  overflow: hidden;

  .mask {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    position: absolute;
    top: 0;
  }

  .words {
  font-weight: 200;
  animation: scroll-top 10s linear infinite;
  }
}

.nav-logo {
  width: size(101);
  top: size(30);
  left: size(52);
}

.logo {
  width: size(190);
  top: size(278);
  left: size(378);
}
.title1{
  top:calc(50% + -2vw);
  left: size(355);
  font-size: size(30);
  b{font-size: 1.7em;letter-spacing:-0.05em;display: inline-block;position: relative;top: 0.05em;}
  }
.title2{
  top:calc(50% + 2vw);
  left: size(362);
  color: #0009;
  font-size: size(25);
  &::before,
  &::after{
    content: "";
    display: inline-block;
    height: 1px;
    width: 2.35vw;position: relative;top:-0.3em;
    background: currentColor;
  }
  }

@keyframes scroll-top {
  0% {
    margin-top: 0%;
  }
  100% {
    margin-top: -50%;
  }
} 

@keyframes border-radius {
  to{
    border-radius: 40% 55% 60% 45% / 45% 50% 50% 55%;
  }

}

@keyframes moving {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0) scaleY(1);
  }
  50% {
    -webkit-transform: translateX(0);
    transform: translateX(-25%) scaleY(0.6);
  }

  to {
    -webkit-transform: translateX(-100vw);
    transform: translateX(-50%) scaleY(1);
  }
}

@media only screen and (max-width: 1440px) {
  .bg-img {
  }
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .relative{
  margin:0 0 0 0;

  }
  .relative,
  .bg-img:first-child{
    height: 120vh;
  }
  .animate-row {
    width: 600vw;
  }

  .nav-logo {
    width: size-m(52);
    top: size-m(18);
    left: size-m(11);
  }

  .logo {
    width: size-m(95);
    top: size-m(20);
    left: size-m(140);
  }
.logos{bottom: 63px;}
  .title1{
  top:size-m(128);
  left: 0;
  width: 100%;
  font-size: size-m(20);
  text-align: center;
  b{font-size: 1.7em;letter-spacing:-0.05em;display: inline-block;position: relative;top: 0.05em;}
  }
.title2{
  top:size-m(168);
  left:0;
  width: 100%;
  color: #0009;
  text-align: center;
  font-size: size-m(15);
  &::before,
  &::after{
    content: "";
    display: inline-block;
    height: 1px;
    width: 2.35vw;position: relative;top:-0.3em;
    background: currentColor;
  }
  }

  .item-img {
    width: size-m(343);
    height: size-m(343);
    right: size-m(12);
    left: auto;
    top: size-m(204);
    border-radius: 60% 40% 45% 55% / 50% 45% 55% 50%;
    overflow: hidden;
    animation: border-radius 4s ease alternate infinite;
  }

  .slide-content {
    width: size-m(343);
    height: size-m(343);
    right: size-m(12);
    left: auto;
    top: size-m(204);
    overflow: hidden;
    border-radius: 60% 40% 45% 55% / 50% 45% 55% 50%;
    overflow: hidden;
    animation: border-radius 4s ease alternate infinite;
    padding-top: size-m(40);
  }

  .item-border {
    width: size-m(353);
    height: size-m(363);
    right: size-m(12);
    left: auto;
    top: size-m(204);
    border-radius: 60% 40% 45% 55% / 50% 45% 55% 50%;
    overflow: hidden;
    animation: border-radius 10s ease alternate infinite;
    border: 1px solid #d0a100;
  }

  .title {
    font-size: size-m(19);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.23;
    letter-spacing: 6.16px;
    text-align: center;
    color: #ffffff;
    position: relative;
    z-index: 2;
  }

  .subtitle {
    font-size: size-m(12);
    letter-spacing: 3.36px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.23;
    letter-spacing: 6.16px;
    text-align: center;
    color: #ffffff;
    position: relative;
    z-index: 2;
  }

  .desc {
    font-size: size-m(14);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    width: size-m(343);
    height: size-m(343);
    position: absolute;
    top: 0;
    overflow: hidden;

    .mask {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      position: absolute;
      top: 0;
    }

    //.words {
   //   animation: scroll-top 30s linear infinite;
   // }
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

  created() {},

  mounted() {},

  computed: {},
}
</script>
