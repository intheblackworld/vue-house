<template>
  <div class="section9">
    <transition-group name="fade-up" mode="out-in">
      <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" v-if="blockIndex === 0" key="swipe-0">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList" v-show="slideIndex === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
          <div class="pagination absolute flex-ac" v-if="isPC">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList" :key="slide.img + '-dot'" @click="goTo(index)"><span :class="`${slideIndex === index ? 'active' : ''}`"></span></div>
          </div>
          <div class="swipe-btns absolute flex-ac flex-jb">
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decIndex">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="addIndex">
          </div>
        </div>
      </div>
      <div class="swipe absolute" @mouseenter.stop="toggleTimer = false" @mouseleave.stop="toggleTimer = true" v-if="blockIndex === 1" key="swipe-1">
        <div class="swipe-wrap relative" v-touch:swipe.left="decIndex" v-touch:swipe.right="addIndex">
          <transition-group name="swipe-fade" mode="out-in">
            <div v-for="(slide, i) in slideList1" v-show="slideIndex1 === i" :key="slide.img" :class="`swipe-item absolute`">
              <img :src="slide.img" alt="">
              <div class="slide-name absolute" v-html="slide.name"></div>
            </div>
          </transition-group>
          <div class="pagination absolute flex-ac" v-if="isPC">
            <div :class="`pagination-dot`" v-for="(slide, index) in slideList1" :key="slide.img + '-dot'" @click="goToMultiIndex(index, 1)"><span :class="`${slideIndex1 === index ? 'active' : ''}`"></span></div>
          </div>
          <div class="swipe-btns absolute flex-ac flex-jb">
            <img src="./all/prev-btn.png" alt="" class="prev-btn" @click="decMultiIndex(1)">
            <img src="./all/next-btn.png" alt="" class="next-btn" @click="addMultiIndex(1)">
          </div>
        </div>
      </div>
    </transition-group>
    <transition name="fade-up" mode="out-in">
      <div v-if="blockIndex === 1 || blockIndex === 0">

<svg version="1.1" class="img" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 250 250" style="enable-background:new 0 0 250 250;" xml:space="preserve" v-if="viewIndex === 9 || viewIndex === 10">

<g id="圖層_1">
	<g id="外圓圈" class="an01">
		<path class="st0" d="M236.9,164.5c9.6-27,9.1-56.8-1.5-83.5"/>
		<path class="st0" d="M167.3,14.2c-25.8-9.7-54.3-10.1-80.4-1"/>
		<path class="st0" d="M16.5,79.5C5.3,106.7,4.6,137.3,14.6,165"/>
		<path class="st0" d="M78.6,233.1c28.8,12.5,61.7,13,90.8,1.4"/>
	</g>
	<g>
		<circle class="st1 an03" cx="125.6" cy="124.8" r="52.4"/>
	</g>
	<g id="文字" class="anfont">
				<path id="天空之邑" class="st2" d="M103.6,133.1h-7.3c1.4,3.6,4.1,6.1,8.6,7.1c-0.6,0.6-1.4,1.8-1.8,2.5
		c-4.2-1.2-6.7-3.5-8.5-6.9c-1.2,2.9-3.6,5.4-8.8,6.9c-0.3-0.7-1.1-1.8-1.7-2.3c5.5-1.7,7.6-4.5,8.3-7.4h-7.1v-2.6h7.4v-4h-8.1v-2.6
		h19.3v2.6h-8.5v4h7.8L103.6,133.1z M114.6,127.6c0,0.2-0.2,0.3-0.6,0.4c-0.6,2.9-1.5,5.2-6.9,6.4c-0.2-0.7-0.9-1.7-1.4-2.2
		c4.7-0.9,5.4-2.4,5.7-5L114.6,127.6z M117,136.7v3.2h8.3v2.3h-19.1v-2.3h8.2v-3.2h-5.7v-2.3h14.6v2.3H117z M109,127.1v2.5h-2.5v-5
		h7.8v-2.3l3.3,0.2c0,0.2-0.2,0.3-0.6,0.4v1.8h7.9v5h-2.6v-2.5L109,127.1z M116.8,127.2l3.1,0.1c0,0.2-0.2,0.3-0.6,0.4v2.9
		c0,0.6,0.1,0.7,0.9,0.7h2.2c0.6,0,0.7-0.2,0.8-1.2c0.6,0.3,1.5,0.8,2.2,0.9c-0.3,2-1,2.5-2.8,2.5h-2.9c-2.5,0-3.1-0.7-3.1-2.9
		L116.8,127.2z M144.1,126l2.2,1.2c-0.1,0.2-0.3,0.3-0.4,0.3c-2.3,4-6.3,8.5-10.3,11.6c2,0.9,4.4,0.9,7.2,0.9c1.4,0,3.4,0,4.4,0
		c-0.3,0.6-0.8,1.8-0.9,2.5h-5c-4.5,0-7.8-0.8-10-3.8c-0.7,1.2-1.4,2.5-2.1,3.4c0,0.1,0,0.2,0,0.3s0,0.3-0.1,0.4l-2.6-1.8
		c1.5-1.8,3.2-4.6,4.1-6.8l2.4,1l-0.6,1.1c0.2,0.6,0.6,1,0.9,1.3c3.1-2.4,6.4-6,8.4-8.9h-13.9v-2.5h7.5v-3.8l3.2,0.2
		c0,0.2-0.2,0.3-0.6,0.4v3.1h5.6L144.1,126z M152,138.7c0,1.3,0.3,1.5,2.9,1.5h7.6c2,0,2.3-0.3,2.6-2.3c0.7,0.3,1.8,0.8,2.5,0.9
		c-0.4,3.1-1.4,4-5,4H155c-4.3,0-5.6-0.8-5.6-4v-9H166v7.5h-2.6v-0.7h-11.5L152,138.7z M164.8,123.1v5.3h-14.1v-5.3H164.8z
		 M156.4,131.8h-4.3v2.3h4.3V131.8z M162.1,126.5v-1.4h-8.7v1.4H162.1z M163.5,134.1v-2.3H159v2.3H163.5z M106.5,107.8
		c-0.6-0.6-1.7-1.2-2.6-1.5l0.6-0.8c0.9,0.3,2.1,1,2.6,1.4L106.5,107.8z M104.3,114.7c0.7-1.2,1.5-3.3,2.2-5.1l0.8,0.6
		c-0.6,1.7-1.4,3.5-2,4.7c0.1,0.1,0.1,0.2,0.1,0.2v0.1L104.3,114.7z M107,103.6c-0.6-0.6-1.5-1.2-2.5-1.7l0.6-0.8
		c0.9,0.4,2,1.1,2.5,1.7L107,103.6z M109.8,101.4c0.8,0.1,1,0.1,1.3,0.1c0,0.1-0.1,0.2-0.3,0.2v5.2c0,3.1-0.3,6.2-2.8,8.6
		c-0.2-0.2-0.6-0.6-0.9-0.7c2.3-2.2,2.6-5.1,2.6-7.9L109.8,101.4z M107.3,109.2c0.8-0.9,1.1-2.4,1.3-3.8l0.8,0.2
		c-0.2,1.4-0.6,3.1-1.3,4.1L107.3,109.2z M112,109.4c-0.1-0.9-0.6-2.3-1-3.4l0.8-0.2c0.6,1.1,0.9,2.5,1.1,3.4L112,109.4z
		 M113.1,101.6l1.3,0.1c0,0.1-0.1,0.2-0.3,0.2v13.2h-1L113.1,101.6z M115.7,109.4c-0.2-1-0.9-2.5-1.7-3.6l0.8-0.3
		c0.7,1.1,1.4,2.6,1.7,3.6L115.7,109.4z M116.6,101.3l1.3,0.1c0,0.1-0.1,0.2-0.3,0.2v13.8h-1L116.6,101.3z M133.8,108.1v1h-6.6v5
		c0,0.8-0.2,1.1-0.8,1.2c-0.6,0.2-1.5,0.2-3.1,0.2c-0.1-0.3-0.2-0.8-0.4-1.1c0.8,0,1.7,0,2.1,0c1,0,1.1,0,1.1-0.4v-5h-6.6v-1h6.6
		v-2.5h0.6c1.2-0.7,2.5-1.5,3.5-2.4H121v-1h10.4l0.2-0.1l0.9,0.7c0,0.1-0.2,0.1-0.2,0.1c-1.3,1.2-3.3,2.6-5.1,3.6v1.7L133.8,108.1z
		 M135.5,105.3c1,0.4,2.3,1.1,3,1.7l-0.6,0.9c-0.7-0.6-1.9-1.3-2.9-1.7L135.5,105.3z M135.5,114.5c0.8-1.2,2-3.3,2.9-5.1l0.8,0.7
		c-0.8,1.7-1.8,3.6-2.5,4.9c0,0.1,0.1,0.1,0.1,0.2c0,0.1,0,0.1,0,0.2L135.5,114.5z M138.7,103.7c-0.6-0.6-1.9-1.3-2.9-1.9l0.6-0.8
		c1,0.4,2.2,1.2,2.9,1.8L138.7,103.7z M149.4,110.7v1h-4.5v3.8h-1.1v-3.8h-4.4v-1h4.4v-2.4h-3.5v-1h3.5V105h-4v-1h2.3
		c-0.2-0.7-0.9-1.8-1.4-2.5l0.9-0.4c0.7,0.8,1.3,1.9,1.5,2.6l-0.7,0.3h3.4l-0.4-0.2c0.6-0.8,1.2-1.9,1.5-2.8l1.3,0.6
		c0,0.1-0.2,0.1-0.3,0.1c-0.3,0.7-0.9,1.7-1.4,2.3h2.6v1H145v2.3h3.6v1H145v2.4H149.4z"/>
	<path class="st2-66" d="M185.3,55.2c0,0,1,0.9,1.6,1.5c0,0.2-0.2,0.2-0.4,0.2l-13.5,0l-0.1-0.4l3.3,0c0.4-1.6,0.9-3.7,1.3-5.8l-2.9,0
			l-0.1-0.4l3.1,0c0.3-1.5,0.6-2.9,0.8-4l-4.5,0l-0.1-0.4l9.7,0l0.9-1.2c0,0,1,0.8,1.7,1.4c0,0.2-0.2,0.2-0.4,0.2l-5.7,0
			c-0.2,1.2-0.5,2.6-0.8,4l3,0l0.7-0.8l1.5,1.2c-0.1,0.1-0.3,0.2-0.6,0.3l0,5.6l0.7,0L185.3,55.2z M179,50.7
			c-0.4,2.1-0.9,4.3-1.3,5.8l4.5,0l0-5.8L179,50.7z M193.2,56.1c0,0.9-0.2,1.5-1.7,1.6c0-0.4-0.1-0.7-0.3-0.9
			c-0.2-0.2-0.5-0.3-1.1-0.4l0-0.2c0,0,1.3,0.1,1.5,0.1c0.3,0,0.3-0.1,0.3-0.3l0-4.9c-0.3,0.4-0.7,0.9-1.2,1.4
			c0,0.2-0.1,0.4-0.3,0.4l-0.6-1c-0.1,2.1-0.6,4.3-2,5.9l-0.2-0.1c1-2.4,1-5.5,1-8.3l0-5.2l1.5,0.6l1.6,0l0.6-0.7l1.4,1
			c-0.1,0.1-0.3,0.2-0.6,0.3L193.2,56.1z M190,49.4c0,0.6,0,1.3,0,2.1c0.5-0.2,1.2-0.6,2-1l0-1.5c-0.1,0-0.3,0.1-0.5,0
			c-0.3-0.3-0.9-0.7-1.5-0.9L190,49.4z M189.9,45.2l0,2.3c1-0.1,1.6,0,2,0.3l0-2.6L189.9,45.2z M201,51.2c-0.1,0.1-0.3,0.2-0.6,0.2
			c-0.5,1.3-1.3,2.5-2.3,3.5c1.1,0.7,2.3,1.2,3.7,1.5l0,0.2c-0.6,0.1-1,0.5-1.2,1.1c-1.4-0.5-2.5-1.2-3.4-2.1
			c-1.1,0.9-2.6,1.6-4.3,2l-0.1-0.2c1.6-0.6,2.8-1.5,3.9-2.5c-0.8-1-1.4-2.3-1.8-3.8l-1.1,0l-0.1-0.4l5.3,0l0.8-0.8L201,51.2z
			 M193.5,50.4c1.4-1.3,1.6-2.9,1.6-4.2l0-1.8l1.5,0.6l1.7,0l0.7-0.7l1.3,1c-0.1,0.1-0.3,0.2-0.5,0.2l0,2.8c0,0.2,0,0.2,0.2,0.2
			l0.4,0h0.4c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.3-0.1l0.1,0l0.1,0c0.3,0.1,0.5,0.3,0.5,0.5c0,0.5-0.4,0.8-1.8,0.8l-0.7,0
			c-0.9,0-1.1-0.3-1.1-1.1l0-3.3l-2,0l0,0.8c0,1.3-0.3,3.3-2.7,4.4L193.5,50.4z M195.1,51.2c0.5,1.3,1.2,2.3,2.1,3.1
			c0.8-0.9,1.3-2,1.7-3.1L195.1,51.2z M165.4,65.5c3.6,0.4,2.6,3,1.2,2.1c-0.2-0.7-0.8-1.5-1.4-2L165.4,65.5z M169.1,66.5
			c2.5,2.1,1.3,4.3,0.4,3.3c0.1-1-0.2-2.3-0.6-3.2c-0.4,1.7-0.9,3.5-1,4.1c-0.1,0.5-0.2,1-0.2,1.4c0,0.8,0.6,1.3,0.5,2.7
			c0,0.7-0.4,1.1-1,1.1c-0.3,0-0.6-0.2-0.7-0.8c0.2-1.5,0.2-2.9-0.2-3.1c-0.2-0.1-0.4-0.2-0.8-0.2l0-0.3h0.6c0.2,0,0.3,0,0.4-0.3
			c0.3-0.5,0.3-0.5,2.5-6.5l0.2,0.1l-0.5,1.9L169.1,66.5z M166.4,62c3.8,0.5,2.7,3.1,1.3,2.2c-0.2-0.8-0.9-1.6-1.4-2.1L166.4,62z
			 M172.6,62.2c0,0.2-0.1,0.4-0.5,0.4l0,6.1c0,3-0.7,5.5-3.2,7.2l-0.2-0.2c1.7-1.8,2.2-4.2,2.2-7l0-6.7L172.6,62.2z M172.4,66.5
			c2.3,2,1.2,4.1,0.4,3.2c0.1-1-0.3-2.3-0.6-3.1L172.4,66.5z M175.7,62.7c0,0.2-0.1,0.3-0.5,0.4l0,11.6c0,0.1-0.5,0.4-1,0.5H174
			l0-12.6L175.7,62.7z M175.5,66.5c2.5,2,1.5,4.1,0.6,3.2c0-1-0.4-2.3-0.8-3.1L175.5,66.5z M179,62.2c0,0.2-0.1,0.3-0.5,0.4l0,12.7
			c0,0.2-0.6,0.5-1,0.5h-0.3l0-13.8L179,62.2z M192.5,67.4c0,0,1.1,0.8,1.7,1.4c0,0.2-0.2,0.2-0.4,0.2l-5.7,0l0,4.9
			c0,1.1-0.3,1.7-2.3,1.9c-0.1-0.5-0.2-0.8-0.5-1c-0.3-0.2-0.8-0.4-1.8-0.6V74c0,0,2.3,0.1,2.7,0.1c0.3,0,0.4-0.1,0.4-0.3l0-4.8
			l-6,0l-0.1-0.4l6.2,0l0-2.6l1.2,0.1c0.9-0.7,1.9-1.7,2.6-2.4l-8.3,0l-0.1-0.4l8.6,0l0.9-0.9l1.5,1.3c-0.1,0.1-0.3,0.2-0.6,0.2
			c-1,0.7-2.6,1.6-4,2.3l0.3,0c0,0.2-0.2,0.3-0.5,0.4l0,2l3.4,0L192.5,67.4z M195.4,65.7c3.7,0.3,2.8,3,1.4,2.1
			c-0.2-0.7-0.9-1.5-1.5-2L195.4,65.7z M200.2,64.3c-0.6,1.9-1.8,5.5-2,6.3c-0.1,0.5-0.2,1-0.2,1.4c0,0.8,0.5,1.3,0.5,2.6
			c0,0.7-0.4,1.1-1.1,1.1c-0.3,0-0.6-0.2-0.7-0.8c0.3-1.5,0.2-2.8-0.2-3c-0.2-0.2-0.4-0.2-0.8-0.2l0-0.3h0.7c0.2,0,0.3,0,0.4-0.3
			c0.3-0.6,0.3-0.6,3.1-6.9L200.2,64.3z M196.6,62.2c3.8,0.3,3,3,1.5,2.3c-0.2-0.8-1-1.6-1.7-2.2L196.6,62.2z M207.9,70.5
			c0,0,0.9,0.8,1.5,1.3c0,0.2-0.2,0.2-0.4,0.2l-4,0l0,3.4c0,0.1-0.5,0.4-1.2,0.4h-0.3l0-3.8l-4,0l-0.1-0.4l4.1,0l0-2.8l-3.2,0
			l-0.1-0.4l3.3,0l0-2.7l-3.4,0l-0.1-0.4l4.7,0c0.4-1,0.9-2.4,1.2-3.4l2.1,0.6c-0.1,0.2-0.2,0.3-0.6,0.3c-0.5,0.7-1.5,1.7-2.3,2.5
			l1.8,0l0.8-1.1c0,0,0.9,0.7,1.5,1.2c0,0.2-0.2,0.2-0.4,0.2l-3.8,0l0,2.7l1.5,0l0.8-1.1c0,0,0.9,0.7,1.5,1.3c0,0.2-0.2,0.2-0.4,0.2
			l-3.4,0l0,2.8l2,0L207.9,70.5z M201.1,61.9c3.7,1.1,2.5,3.8,1.1,2.8c-0.1-0.9-0.7-2-1.3-2.7L201.1,61.9z"/>
		<path class="st2-66" d="M49.8,182.8l0,5.4c0,0.1-0.4,0.4-1.1,0.4h-0.2l0-4.3c-0.1,0-0.2,0-0.3,0c-0.5,1.1-1.3,2.4-2.4,3.3l-0.2-0.2
			c0.7-1.2,1.3-2.9,1.5-4.1l1.5,0.6l0-1.1l-2.6,0l-0.1-0.4l2.7,0l0-1.8l-2.8,0l-0.1-0.4l4,0c0.3-0.9,0.6-2,0.7-2.8l-3.3,0
			c2.8,1.4,1.6,3.5,0.6,2.5c0-0.8-0.4-1.8-0.8-2.4l0.1-0.1l-1.1,0l-0.1-0.4l3.5,0c-0.1,0-0.3-0.1-0.5-0.2c-0.1-0.7-0.5-1.5-0.9-1.9
			l0.1-0.1c2.6,0.5,2.3,2.1,1.5,2.2l1.2,0l0.7-1c0,0,0.8,0.7,1.3,1.2c0,0.2-0.2,0.2-0.4,0.2l-1.8,0l1.7,0.5
			c-0.1,0.2-0.2,0.3-0.6,0.3c-0.4,0.6-1,1.4-1.6,2l1.1,0l0.7-1c0,0,0.9,0.7,1.4,1.2c0,0.2-0.2,0.2-0.4,0.2l-3,0l0,1.8l1,0l0.7-0.9
			c0,0,0.8,0.7,1.3,1.1c0,0.2-0.2,0.2-0.4,0.2L49.8,182.8z M50.2,183.5c3.1,1.5,1.8,3.8,0.8,2.8c0-0.9-0.5-2-0.9-2.7L50.2,183.5z
			 M58.1,178.8c0,0,1,0.8,1.5,1.3c0,0.2-0.2,0.2-0.4,0.2l-1.5,0l0,7.8c0,0.1-0.4,0.4-1.2,0.4h-0.2l0-8.2l-1.8,0l0,0.5
			c0,2.6-0.3,5.7-3.2,7.7l-0.2-0.2c1.8-2.1,2-4.8,2-7.5l0-5l1.5,0.5c1.1-0.5,2.4-1.2,3-1.7l1.6,1.2c-0.1,0.1-0.4,0.2-0.8,0
			c-1,0.3-2.5,0.7-3.9,0.9l0,3.1l2.7,0L58.1,178.8z M60.7,176.5l2.5,0l-0.2-1.8l1.9,0.1c0,0.2-0.1,0.3-0.4,0.4l0.2,1.2h1l0.8-1
			c0,0,0.9,0.7,1.4,1.2c0,0.2-0.2,0.2-0.4,0.2l-2.7,0l0.2,1.1c-0.2,0.3-0.7,0.4-1.3,0.4l-0.2-1.5l-2.4,0L60.7,176.5z M66.3,178.7
			c0,0.2-0.1,0.3-0.5,0.4l0,9.1c0,0.1-0.6,0.4-1.1,0.4h-0.3l0-4.4l-1.3,0c-0.1,1.6-0.5,3.2-2.3,4.3l-0.2-0.2c1-1.2,1.1-2.7,1.2-4.1
			l-1,0l-0.1-0.4l3.7,0l0-1.7l-1.5,0l-0.5,0.7L61,182c0.1-0.1,0.3-0.3,0.6-0.4l0-2.9l1.8,0.2c0,0.2-0.2,0.3-0.5,0.4l0,2.4l1.6,0
			l0-3.2L66.3,178.7z M72.8,180.9c0,0,1,0.8,1.5,1.3c0,0.2-0.2,0.2-0.4,0.2l-3.3,0l0,4.9l1.2,0l0.8-1.1c0,0,1,0.8,1.5,1.3
			c0,0.2-0.2,0.2-0.4,0.2l-7.2,0l-0.1-0.4l2.8,0l0-4.9l-3.1,0l-0.1-0.4l3.3,0l0-3.6l1.9,0.2c0,0.2-0.1,0.3-0.5,0.4l0,3l1.3,0
			L72.8,180.9z M73.1,175.5c0,0,0.9,0.7,1.4,1.2c0,0.2-0.2,0.2-0.4,0.2l-3.1,0l-0.2,1.2c-0.3,0.2-0.8,0.3-1.4,0.2l0.2-1.3l-1.5,0
			l-0.1-0.4l1.7,0l0.3-1.8l1.8,0.4c0,0.2-0.2,0.3-0.6,0.3l-0.2,1.1l1.2,0L73.1,175.5z M45.3,192.8c0,0,0.9,0.7,1.5,1.2
			c0,0.2-0.2,0.2-0.4,0.2l-8.1,0l-0.1-0.4l6.4,0L45.3,192.8z M45.2,199.2l1.5,1.1c-0.1,0.1-0.3,0.3-0.6,0.3l0,5.3
			c0,0.1-0.7,0.4-1.1,0.4h-0.2l0-0.9l-4.7,0l0,0.7c0,0.1-0.6,0.4-1.1,0.4l-0.2,0l0-7.2l1.4,0.6l4.5,0L45.2,199.2z M44,199l0-0.5
			l-3.4,0l0,0.4c0,0.1-0.6,0.4-1.2,0.4h-0.2l0-4.2l1.4,0.6l3.2,0l0.7-0.7l1.5,1.1c-0.1,0.1-0.3,0.3-0.6,0.3l0,2.4
			c0,0.1-0.7,0.3-1.2,0.3H44z M40,200.4l0,2.1l1.8,0l0-2.1L40,200.4z M40,205l1.8,0l0-2.1l-1.8,0L40,205z M44,198l0-2l-3.4,0l0,2
			L44,198z M42.9,200.4l0,2.1l1.8,0l0-2.1L42.9,200.4z M44.7,205l0-2.1l-1.8,0l0,2.1L44.7,205z M48.6,203c0,0.1-0.6,0.4-1,0.4h-0.2
			l0-9.5l1.8,0.2c0,0.2-0.2,0.3-0.5,0.4L48.6,203z M51.9,193.2c0,0.2-0.2,0.4-0.5,0.4l0,11.3c0,1-0.2,1.6-1.8,1.8
			c0-0.4-0.1-0.8-0.3-1c-0.2-0.2-0.6-0.4-1.2-0.5V205c0,0,1.4,0.1,1.7,0.1c0.3,0,0.3-0.1,0.3-0.3l0-11.8L51.9,193.2z M58.3,194.1
			c0,0,0.4,0.4,0.9,0.8c0.3-0.6,0.6-1.1,0.8-1.7l1.7,0.8c-0.1,0.2-0.3,0.2-0.6,0.2c-0.6,1.1-1.4,2.3-2.3,3.5h0.8l0.7-1
			c0,0,0.9,0.7,1.4,1.2c0,0.2-0.2,0.2-0.4,0.2l-2.8,0c-0.5,0.6-1.1,1.1-1.7,1.7l1.9,0l0.7-0.7l1.4,1.1c-0.1,0.1-0.3,0.2-0.6,0.3
			l0,5.5c0,0.1-0.7,0.4-1.1,0.4h-0.2l0-1.2l-2.7,0l0,0.9c0,0.1-0.4,0.4-1.1,0.4h-0.2l0-5.3c-0.5,0.3-1.1,0.7-1.7,0.9l-0.1-0.2
			c0.6-0.4,1.2-0.9,1.8-1.4l0-1.4l1,0.4c0.5-0.5,0.9-1,1.3-1.5l-3.9,0l-0.1-0.4l2.7,0l0-2.2l-2.2,0l-0.1-0.4l2.3,0l0-2.3l1.9,0.2
			c0,0.2-0.2,0.4-0.6,0.4l0,1.7l0.5,0L58.3,194.1z M56.1,200.2l-0.1,0.1l0,1.9l2.7,0l0-2L56.1,200.2z M58.6,204.7l0-2.1l-2.7,0
			l0,2.1L58.6,204.7z M57.3,197.7c0.5-0.7,1-1.4,1.4-2.2l-1.7,0l0,2.2H57.3z M67.2,194.6c-0.1,0.1-0.3,0.2-0.7,0.2
			c-0.5,1-1.5,2.7-2.3,3.7c1.8,1.2,2.5,2.6,2.5,3.8c0,1.5-0.6,2.3-2.3,2.4c0-0.4-0.1-0.9-0.2-1.1c-0.1-0.2-0.5-0.3-0.8-0.3l0-0.2
			l1.2,0c0.2,0,0.3,0,0.4-0.1c0.3-0.1,0.4-0.4,0.4-1c0-1.1-0.4-2.3-1.5-3.5c0.3-1,0.8-2.9,1.1-4.1l-2.1,0l0,11.8
			c0,0.1-0.4,0.4-1.1,0.4h-0.2l0-13.4l1.6,0.7l1.8,0l0.8-0.8L67.2,194.6z M70.1,197.2c0.9,2.7,0.4,4.6-0.3,5.5
			c-0.4,0.7-1.2,0.8-1.6,0.4c-0.3-0.3-0.2-0.8,0.1-1.2c0.8-0.8,1.5-2.7,1.5-4.7L70.1,197.2z M73.8,195.6c0,0.2-0.2,0.4-0.5,0.4l0,8
			c0,0.4,0.2,0.5,0.9,0.5l2,0c0.8,0,1.4,0,1.7,0c0.2,0,0.4-0.1,0.4-0.3c0.2-0.3,0.4-1.2,0.7-2.4h0.2l0,2.5c0.5,0.2,0.6,0.3,0.6,0.6
			c0,0.7-0.7,1-3.8,1l-2,0c-1.6,0-2.2-0.3-2.2-1.5l0-9L73.8,195.6z M76.2,197c-0.3-1.3-1.3-3-2.2-4.1l0.2-0.1
			C78.9,194.8,77.7,198.2,76.2,197z M80.7,202.9c-0.2-1.4-0.6-3.7-1.9-5.2l0.1-0.1C83.7,200.6,81.9,204.4,80.7,202.9z"/>
		<path class="st2-66" d="M57.5,50.1c0,0,1,0.9,1.6,1.5c0,0.2-0.2,0.2-0.4,0.2l-13.5,0L45,51.4l3.3,0c0.4-1.6,0.9-3.7,1.3-5.8l-2.9,0
			l-0.1-0.4l3.1,0c0.3-1.5,0.6-2.9,0.8-4l-4.5,0l-0.1-0.4l9.7,0l0.9-1.2c0,0,1,0.8,1.7,1.4c0,0.2-0.2,0.2-0.4,0.2l-5.7,0
			c-0.2,1.2-0.5,2.6-0.8,4l3,0l0.7-0.8l1.5,1.2c-0.1,0.1-0.3,0.2-0.6,0.3l0,5.6h0.7L57.5,50.1z M51.2,45.6c-0.4,2.1-0.9,4.3-1.3,5.8
			l4.5,0l0-5.8L51.2,45.6z M65.3,51.1c0,0.9-0.2,1.5-1.7,1.6c0-0.4-0.1-0.7-0.3-0.9c-0.2-0.2-0.5-0.3-1.1-0.4l0-0.2
			c0,0,1.3,0.1,1.5,0.1c0.3,0,0.3-0.1,0.3-0.3l0-4.9c-0.3,0.4-0.7,0.9-1.2,1.4c0,0.2-0.1,0.4-0.3,0.4l-0.6-1c-0.1,2.1-0.6,4.3-2,5.9
			l-0.2-0.1c1-2.4,1-5.5,1-8.3l0-5.2l1.5,0.6l1.6,0l0.6-0.7l1.4,1c-0.1,0.1-0.3,0.2-0.6,0.3L65.3,51.1z M62.1,44.3
			c0,0.6,0,1.3,0,2.1c0.5-0.2,1.2-0.6,2-1l0-1.5c-0.1,0-0.3,0.1-0.5,0c-0.3-0.3-0.9-0.7-1.5-0.9L62.1,44.3z M62.1,40.2l0,2.3
			c1-0.1,1.6,0,2,0.3l0-2.6L62.1,40.2z M73.2,46.1c-0.1,0.1-0.3,0.2-0.6,0.2c-0.5,1.3-1.3,2.5-2.3,3.5c1.1,0.7,2.3,1.2,3.7,1.5
			l0,0.2c-0.6,0.1-1,0.5-1.2,1.1c-1.4-0.5-2.5-1.2-3.4-2.1c-1.1,0.9-2.6,1.6-4.3,2l-0.1-0.2c1.6-0.6,2.8-1.5,3.9-2.5
			c-0.8-1-1.4-2.3-1.8-3.8l-1.1,0l-0.1-0.4l5.3,0l0.8-0.8L73.2,46.1z M65.7,45.3c1.4-1.3,1.6-2.9,1.6-4.2l0-1.8l1.5,0.6l1.7,0
			l0.7-0.7l1.3,1c-0.1,0.1-0.3,0.2-0.5,0.2l0,2.8c0,0.2,0,0.2,0.2,0.2h0.4h0.4c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.3-0.1h0.1l0.1,0
			c0.3,0.1,0.5,0.3,0.5,0.5c0,0.5-0.4,0.8-1.8,0.8l-0.7,0c-0.9,0-1.1-0.3-1.1-1.1l0-3.3l-2,0l0,0.8c0,1.3-0.3,3.3-2.7,4.4L65.7,45.3
			z M67.3,46.1c0.5,1.3,1.2,2.3,2.1,3.1c0.8-0.9,1.3-2,1.7-3.1L67.3,46.1z M49.6,57.5c0,0,1.1,0.8,1.7,1.3c0,0.2-0.2,0.2-0.4,0.2
			l-12.9,0l-0.1-0.4l6.7,0c-0.1,0-0.2-0.1-0.3-0.1c-0.1-0.6-0.6-1.3-0.9-1.7l0.1-0.1c2.5,0.3,2.4,1.6,1.7,1.9l3.6,0L49.6,57.5z
			 M49.1,60.6l1.5,1.2C50.5,61.9,50.3,62,50,62l0,7c0,1-0.2,1.6-1.9,1.7c0-0.4-0.1-0.8-0.3-1c-0.2-0.2-0.6-0.4-1.3-0.5v-0.2
			c0,0,1.4,0.1,1.8,0.1c0.3,0,0.3-0.1,0.3-0.3l0-4.5c-0.2,0.1-0.7,0.2-1.5,0.2h-0.7c-0.9,0-1-0.2-1-0.9l0-1.8l-1.5,0
			c-0.1,1.4-0.7,2.6-3.4,3.4l0,5.1c0,0.2-0.6,0.5-1.2,0.5l-0.2,0l0-10l1.5,0.6l1.8,0c-0.1,0-0.3-0.1-0.4-0.2
			c-0.1-0.7-0.5-1.4-0.9-1.9l0.1-0.1c2.6,0.5,2.3,2,1.5,2.2l3,0c0.2-0.7,0.5-1.6,0.7-2.2l2,0.5c-0.1,0.2-0.2,0.3-0.6,0.3
			c-0.4,0.5-1,1-1.6,1.5l2.2,0L49.1,60.6z M40.4,64.8c1.8-0.9,2-1.9,2.1-3l-2.1,0L40.4,64.8z M47.1,68.8c0,0.1-0.7,0.3-1.1,0.3h-0.2
			l0-0.7l-2.6,0l0,0.6c0,0.1-0.6,0.4-1.1,0.4h-0.2l0-4.8l1.3,0.6l2.4,0l0.6-0.6l1.3,1c-0.1,0.1-0.3,0.2-0.5,0.2L47.1,68.8z M45.8,68
			l0-2.4l-2.6,0l0,2.4L45.8,68z M48.4,63.5c0.1,0,0.1,0,0.2,0.1l0-1.8l-2.1,0l0,0.2l0,1.4c0,0.2,0,0.2,0.2,0.2h0.5
			c0.2,0,0.4,0,0.5,0h0.2c0.1,0,0.2,0,0.3,0H48.4z M52.5,70.1c1.4-0.7,3.1-1.9,4.3-3.4l1.6,1.1c-0.1,0.1-0.3,0.2-0.6,0.1
			c-1.4,1.2-3.5,2.1-5.2,2.4L52.5,70.1z M64.9,58.8c0,0,0.9,0.6,1.5,1.1c0,0.2-0.2,0.2-0.4,0.2l-4.4,0l1.7,0.5
			c-0.1,0.2-0.3,0.3-0.6,0.3c-0.4,0.4-0.9,0.9-1.5,1.3l2.2,0l0.8-1c0,0,0.9,0.7,1.5,1.2c0,0.2-0.2,0.2-0.4,0.2l-5,0l0,1.4l2.3,0
			l0.8-0.9c0,0,0.9,0.6,1.4,1.1c0,0.2-0.2,0.2-0.4,0.2l-4.1,0l0,1.5l3.7,0l0.8-1c0,0,0.9,0.7,1.5,1.2c0,0.2-0.2,0.2-0.4,0.2l-5.6,0
			l0,4c0,0.1-0.4,0.4-1.2,0.4l-0.3,0l0-4.4l-5.8,0l-0.1-0.4l5.9,0l0-1.5l-4.3,0L54.3,64l4.4,0l0-1.4l-5,0l-0.1-0.4l3.8,0
			c-0.1,0-0.2-0.1-0.3-0.2c0-0.6-0.4-1.3-0.8-1.7l0.1-0.1c2.3,0.5,2.1,1.8,1.5,2l2.7,0c0.3-0.6,0.7-1.4,0.9-2.1l-8.6,0l-0.1-0.4
			l4.9,0l0-2.9l1.7,0.2c0,0.2-0.1,0.3-0.5,0.4l0,2.4l1.3,0l0-2.9l1.8,0.2c0,0.2-0.1,0.3-0.5,0.4l0,2.4h0.5c0.5-0.8,0.9-1.8,1.3-2.6
			l1.8,0.6c-0.1,0.2-0.3,0.3-0.6,0.2c-0.5,0.6-1.3,1.2-2,1.8l1.8,0L64.9,58.8z M54.5,57.2c3.4,0.8,2.2,3.2,1,2.3
			c-0.1-0.8-0.6-1.6-1.2-2.2L54.5,57.2z M60.8,67.1c7.5,1.3,5,4,3.8,2.9c-0.7-0.8-2-1.8-3.9-2.7L60.8,67.1z M80.2,68.9
			c0.7,0.1,0.9,0.3,0.9,0.6c0,0.7-0.9,0.8-5.9,0.8l-3.5,0c-2.3,0-3.2-0.3-3.2-1.8l0-10.2l-0.6,0l-0.1-0.4l10.7,0l0.8-1
			c0,0,0.9,0.7,1.5,1.2c0,0.2-0.2,0.2-0.4,0.2l-10.6,0l0,0.4l0,9.7c0,0.7,0.3,0.9,1.8,0.9l3.8,0c1.5,0,2.7,0,3.2-0.1
			c0.3,0,0.6-0.1,0.8-0.1c0.2,0,0.4-0.1,0.7-0.2L80.2,68.9L80.2,68.9z M73.6,68.3l0-0.7l-1.7,0l0,0.6c0,0.1-0.5,0.4-1,0.4h-0.2l0-5
			l1.3,0.5l1.5,0l0.6-0.6l1.2,0.9c-0.1,0.1-0.3,0.2-0.5,0.2l0,3.2c0,0.1-0.6,0.3-1,0.3H73.6z M73.6,67.2l0-2.6l-1.7,0l0,2.6
			L73.6,67.2z M77.1,62.6l-3.4,0l0,0.5c0,0.1-0.6,0.4-1.2,0.4h-0.2l0-4.5l1.4,0.6l3.2,0l0.7-0.7l1.4,1.1c-0.1,0.1-0.3,0.2-0.6,0.3
			l0,2.7c0,0.1-0.7,0.4-1.1,0.4h-0.2L77.1,62.6z M77.1,62.1l0-2.2l-3.4,0l0,2.2L77.1,62.1z M78.7,68.3l0-0.7l-1.7,0v0.4
			c0,0.1-0.5,0.4-1,0.4h-0.2l0-4.8l1.3,0.5l1.5,0l0.6-0.6l1.3,1c-0.1,0.1-0.3,0.2-0.5,0.3l0,3.2c0,0.1-0.6,0.3-1,0.3L78.7,68.3z
			 M78.7,67.2l0-2.6l-1.7,0l0,2.6L78.7,67.2z"/>
		<path class="st2-66" d="M189.8,183.5c0,0,1,0.9,1.6,1.5c0,0.2-0.2,0.2-0.4,0.2l-13.5-0.3l-0.1-0.4l3.3,0.1c0.5-1.6,1-3.7,1.5-5.8
			l-2.9-0.1l-0.1-0.4l3.1,0.1c0.3-1.4,0.7-2.9,0.9-4l-4.5-0.1l-0.1-0.4l9.7,0.2l0.9-1.2c0,0,1,0.8,1.6,1.4c0,0.2-0.2,0.2-0.4,0.2
			l-5.7-0.1c-0.2,1.2-0.5,2.6-0.9,4l3,0.1l0.8-0.8l1.4,1.2c-0.1,0.1-0.3,0.2-0.6,0.3l-0.1,5.6l0.7,0L189.8,183.5z M183.6,178.8
			c-0.5,2.1-1,4.2-1.5,5.8l4.5,0.1l0.1-5.8L183.6,178.8z M197.8,184.3c0,0.9-0.2,1.5-1.7,1.6c0-0.4-0.1-0.7-0.3-0.9
			c-0.2-0.2-0.5-0.3-1.1-0.4l0-0.2c0,0,1.3,0.1,1.5,0.1c0.3,0,0.3-0.1,0.3-0.3l0-4.9c-0.3,0.4-0.7,0.9-1.2,1.4
			c0,0.2-0.1,0.4-0.3,0.4l-0.6-1c-0.1,2.1-0.6,4.3-2,5.9l-0.2-0.1c1-2.4,1-5.5,1-8.3l0-5.2l1.5,0.6l1.6,0l0.6-0.7l1.4,1
			c-0.1,0.1-0.3,0.2-0.6,0.3L197.8,184.3z M194.6,177.6c0,0.6,0,1.3,0,2.1c0.5-0.2,1.2-0.6,2-1l0-1.5c-0.1,0-0.3,0.1-0.5,0
			c-0.3-0.3-0.9-0.7-1.5-0.9L194.6,177.6z M194.6,173.4l0,2.3c1-0.1,1.6,0,2,0.3l0-2.6L194.6,173.4z M205.7,179.4
			c-0.1,0.1-0.3,0.2-0.6,0.2c-0.5,1.3-1.3,2.5-2.3,3.5c1.1,0.7,2.3,1.2,3.7,1.5l0,0.2c-0.6,0.1-1,0.5-1.2,1.1
			c-1.4-0.5-2.5-1.2-3.4-2.1c-1.1,0.9-2.6,1.6-4.3,2l-0.1-0.2c1.6-0.6,2.8-1.5,3.9-2.5c-0.8-1-1.4-2.3-1.8-3.8l-1.1,0l-0.1-0.4
			l5.3,0l0.8-0.8L205.7,179.4z M198.1,178.6c1.4-1.3,1.6-2.9,1.6-4.2l0-1.8l1.5,0.6l1.7,0l0.7-0.7l1.3,1c-0.1,0.1-0.3,0.2-0.5,0.2
			l0,2.8c0,0.2,0,0.2,0.2,0.2h0.4l0.4,0c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.3-0.1h0.1l0.1,0c0.3,0.1,0.5,0.3,0.5,0.5
			c0,0.5-0.4,0.8-1.8,0.8h-0.7c-0.9,0-1-0.3-1.1-1.1l0-3.3l-2,0l0,0.8c0,1.3-0.3,3.3-2.7,4.4L198.1,178.6z M199.8,179.4
			c0.5,1.3,1.2,2.3,2.1,3.1c0.8-0.9,1.3-2,1.7-3.1L199.8,179.4z M174.3,198.2l0,5.4c0,0.1-0.4,0.4-1.1,0.4h-0.2l0-4.3
			c-0.1,0-0.2,0-0.3,0c-0.5,1.1-1.3,2.4-2.4,3.3l-0.2-0.1c0.7-1.2,1.3-2.9,1.5-4.1l1.5,0.6l0-1.1l-2.6,0l-0.1-0.4l2.7,0l0-1.8
			l-2.8,0l-0.1-0.4l4,0c0.3-0.9,0.6-2,0.7-2.8l-3.3,0c2.8,1.4,1.6,3.5,0.6,2.5c0-0.8-0.4-1.8-0.8-2.4l0.1-0.1l-1.1,0l-0.1-0.4l3.4,0
			c-0.1,0-0.3-0.1-0.5-0.2c-0.1-0.7-0.5-1.5-0.9-1.9l0.1-0.1c2.6,0.5,2.3,2.1,1.5,2.2l1.2,0l0.7-1c0,0,0.8,0.7,1.3,1.2
			c0,0.2-0.2,0.2-0.4,0.2l-1.8,0l1.7,0.5c-0.1,0.2-0.2,0.3-0.6,0.3c-0.4,0.6-1,1.4-1.6,2l1.1,0l0.7-1c0,0,0.9,0.7,1.4,1.2
			c0,0.2-0.2,0.2-0.4,0.2l-3,0l0,1.8l1,0l0.7-0.9c0,0,0.8,0.7,1.3,1.1c0,0.2-0.2,0.2-0.4,0.2L174.3,198.2z M174.7,198.9
			c3.1,1.5,1.8,3.8,0.8,2.8c0-0.9-0.5-2-0.9-2.7L174.7,198.9z M182.6,194.2c0,0,1,0.8,1.5,1.3c0,0.2-0.2,0.2-0.4,0.2l-1.5,0l0,7.8
			c0,0.1-0.4,0.4-1.2,0.4h-0.2l0-8.2l-1.8,0l0,0.5c0,2.6-0.3,5.7-3.2,7.7l-0.2-0.2c1.8-2.1,2-4.8,2-7.5l0-5l1.5,0.5
			c1.1-0.5,2.4-1.2,3-1.7l1.6,1.2c-0.1,0.1-0.4,0.2-0.8,0c-1,0.3-2.5,0.7-3.9,0.9l0,3.1l2.7,0L182.6,194.2z M197.3,191.4
			c0,0,1,0.8,1.7,1.4c0,0.2-0.2,0.2-0.4,0.2l-5.8,0l0,2l2.7,0l0.7-0.8l1.5,1.2c-0.1,0.1-0.3,0.2-0.6,0.3l0,4.6c0,1-0.2,1.6-1.9,1.7
			c0-0.4-0.1-0.8-0.3-1c-0.2-0.2-0.5-0.4-1.2-0.5v-0.2c0,0,1.3,0.1,1.7,0.1c0.3,0,0.3-0.1,0.3-0.3l0-4.7l-2.8,0l0,8.1
			c0,0.1-0.5,0.4-1.2,0.4h-0.3l0-8.5l-2.8,0l0,6c0,0.1-0.6,0.5-1.2,0.5H187l0-7.6l1.5,0.6l2.7,0l0-2l-6.1,0l-0.1-0.4l11.3,0
			L197.3,191.4z M190.4,190.1c3.9,0.3,2.8,3.2,1.3,2.3c-0.2-0.8-0.8-1.6-1.4-2.2L190.4,190.1z M213.1,199.3c0,0,0.8,0.6,1.3,1.1
			c0,0.2-0.2,0.2-0.4,0.2l-8.3,0l-0.1-0.4l1.2,0l0-7.3l1.4,0.6l0.5,0c0-0.4,0-0.8,0.1-1.3l-2.7,0c0.6,0.9-0.4,1.6-1.1,1.1
			c-0.2-0.6-0.8-1.5-1.5-2.3c-0.5,1-1.2,2.2-2.1,3.2l2.4,0l0.7-0.9c0,0,0.8,0.6,1.3,1.1c0,0.2-0.2,0.2-0.4,0.2l-1.7,0l0,2.1h0.6
			l0.7-1c0,0,0.8,0.7,1.3,1.2c0,0.2-0.2,0.2-0.4,0.2l-2.2,0l0,4.3c0.8-0.1,1.6-0.3,2.5-0.4l0,0.2c-1.2,0.5-2.8,1.2-5.1,2.1
			c-0.1,0.2-0.2,0.3-0.4,0.4l-0.7-1.6c0.5-0.1,1.3-0.2,2.4-0.4l0-4.5l-2.2,0l-0.1-0.4l2.3,0l0-2.1l-1.4,0l0-0.1
			c-0.3,0.3-0.7,0.7-1,0.9l-0.2-0.1c1-1.4,2-3.8,2.3-5.3l2,0.5c0,0.2-0.2,0.3-0.6,0.3v0c1.3,0.4,2,0.9,2.4,1.3l-0.1-0.3l2.9,0
			c0-0.6,0.1-1.2,0.1-1.7l1.9,0.2c0,0.2-0.2,0.4-0.5,0.4c0,0.3-0.1,0.7-0.1,1.1l1.5,0l0.8-1c0,0,0.9,0.7,1.4,1.2
			c0,0.2-0.2,0.2-0.4,0.2l-3.4,0c-0.1,0.5-0.1,0.9-0.2,1.3l1.1,0l0.6-0.8l1.5,1.1c-0.1,0.2-0.3,0.2-0.7,0.3l0,6L213.1,199.3z
			 M200.7,197.7c2.5,2,1.2,4.1,0.3,3c0.1-1-0.2-2.2-0.5-3L200.7,197.7z M206.3,198c-0.1,0.2-0.2,0.3-0.6,0.3
			c-0.4,0.9-0.9,1.8-1.4,2.4l-0.3-0.1c0.2-0.8,0.4-2.1,0.5-3.1L206.3,198z M204.5,203.9c1.3-0.8,2.7-2.2,3.3-3.1l1.8,0.9
			c-0.1,0.2-0.3,0.2-0.7,0.2c-1,0.8-2.5,1.7-4.2,2.3L204.5,203.9z M208,193.9l0,1.2l3.1,0l0-1.2L208,193.9z M211.1,195.6l-3.1,0
			l0,1.2l3.1,0L211.1,195.6z M208,198.5l3.1,0l0-1.2l-3.1,0L208,198.5z M208,200.2l3.1,0l0-1.2l-3.1,0L208,200.2z M210.1,201
			c5.4,1.3,3.2,3.8,2.2,2.6c-0.4-0.7-1.1-1.6-2.4-2.4L210.1,201z"/>
	</g>
	<g id="線條"  class="an04">
		<path class="st3" d="M173.8,125.1l47.4-47.4c13.1-13.1,13.1-34.4,0-47.5l0,0c-13.1-13.1-34.4-13.1-47.5,0l-47.4,47.4"/>
		<path class="st3" d="M78.8,125.1l-47.4,47.4c-13.1,13.1-13.1,34.4,0,47.5h0c13.1,13.1,34.4,13.1,47.5,0l47.4-47.4"/>
		<path class="st3" d="M126.3,77.6L78.9,30.2c-13.1-13.1-34.4-13.1-47.5,0l0,0c-13.1,13.1-13.1,34.4,0,47.5l47.4,47.4"/>
		<path class="st3" d="M126.3,172.6l47.4,47.4c13.1,13.1,34.4,13.1,47.5,0h0c13.1-13.1,13.1-34.4,0-47.5l-47.4-47.4"/>
	</g>
</g>
</svg>
        <div class="title1">城市核心</div>
        <h3 class="title2">五股新核心 引領新未來</h3>
        <h3 class="desc">
          新北市推動「五股夏綠地」城市新生計畫，開發面積高達169公頃，其中保留16.6公頃滯洪公園，全力翻轉五股樣貌，「天空之邑」立足洲子洋最前沿，銜接周邊發展能量，成為嶄新城市核心，未來發展能量勢不可擋。
        </h3>
      </div>
    </transition>
    <img src="./s4/img.png" :alt="`${info.caseName}_img`" class="circle">
    <div class="btns flex-ac flex-jb">
      <h3 :class="`btn flex-c ${blockIndex === 0 ? 'active' : ''}`" @click="blockIndex = 0">
        精華地段
      </h3>
      <h3 :class="`btn flex-c ${blockIndex === 1 ? 'active' : ''}`" @click="blockIndex = 1">
        樂活綠地
      </h3>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section9 {
  width: 100%;
  height: size(965);
  min-height: size(965);
  max-height: size(965);
  position: relative;
  z-index: 8;
    background: #fff;
  // background-color: #fff;
  // min-height: size(900);
  // background-image: url('./s2/bg.jpg');
  // background-size: 100% 100%;
  // background-position: 0 0;
  // background-attachment: fixed;
  // overflow: hidden;
}
.st0{fill:none;stroke:#d38700;stroke-width:3;stroke-miterlimit:10;}
	.st1{fill:#d38700;}
	.st2{fill:#FFFFFF;}
.st2-66 {
  fill: #606060;
}
	.st3{fill:none;stroke:#d38700;stroke-width:4.2543;stroke-miterlimit:10;}
	.an00 {
			opacity: 0;
			stroke-dashoffset: 420;
			animation: an52 1s 1s linear forwards;
		  }
		  .an01 {
			stroke-dasharray: 212;
			stroke-dashoffset: 212;
			animation: an51 1s 2.5s linear forwards;
		  }
		  .an02 {
			stroke-dasharray: 520;
			stroke-dashoffset: 520;
			animation: an51 1s 1s linear forwards;
		  }

		  .an03 {
			opacity: 0;
			stroke-dashoffset: 420;
			animation: an52 1s 0.5s linear forwards;
		  }

		  .an04 {
			stroke-dasharray: 520;
			stroke-dashoffset: 520;
			animation: an51 2s 1.5s linear forwards;
		  }
		  .anfont {
			opacity: 0;
			stroke-dashoffset: 420;
			animation: an52 1s 1.5s linear forwards;
		  }
		  		  .an00 {
			opacity: 0;
			stroke-dashoffset: 420;
			animation: an52 1s 1s linear forwards;
		  }
		  .an01 {
			stroke-dasharray: 212;
			stroke-dashoffset: 212;
			animation: an51 1s 2.5s linear forwards;
		  }
		  .an02 {
			stroke-dasharray: 520;
			stroke-dashoffset: 520;
			animation: an51 1s 1s linear forwards;
		  }

		  .an03 {
			opacity: 0;
			stroke-dashoffset: 420;
			animation: an52 1s 0.5s linear forwards;
		  }

		  .an04 {
			stroke-dasharray: 520;
			stroke-dashoffset: 520;
			animation: an51 2s 1.5s linear forwards;
		  }
		  @keyframes an51 {
			to {
			  stroke-dashoffset: 0;
			}
		  }
		  @keyframes an52 {
			to {
			  opacity: 1;
			}
		  }

svg {
  @include div_l_pc(238, 238, 576, 206);
}
.title1 {
  @include div_l_pc(70, 464, 0, 270);
  font-size: size(40);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: size(4);
  text-align: left;
  padding-top: size(46);
  color: #ffffff;
  background-color: #003177;
  writing-mode: vertical-rl;
  text-orientation: upright;
}

.title2 {
  @include div_l_pc(34, 558, 50, 363);
  font-size: size(25);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: size(5);
  text-align: left;
  color: #003177;
  writing-mode: vertical-rl;
  text-orientation: upright;
}

.desc {
  @include div_r_pc(240, 566, 186, 1311);
  font-size: size(16);
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.94;
  letter-spacing: size(0.9);
  text-align: left;
  color: #606060;
  writing-mode: vertical-rl;
  text-orientation: upright;
}

.btns {
  @include img_l_pc(174 * 2 + 71, 118, 654);
}

.btn {
  width: size(174);
  height: size(28);
  cursor: pointer;
  background:#fff;
  transition: all .3s;
  font-weight: bold;
  font-size: size(18);
  // animation:btn 0.5s infinite alternate ;
  color: #606060;

  &.active ,&:hover {
    box-shadow: -2px 2px 0 0 #003177;
    background:#fff;
    color: #003177;
  }
}
.circle {
  @include img_r_pc(197, 157, 180);
  animation: circle 30s linear 0s infinite;
}

@keyframes circle {
  to {
    transform: rotate(360deg);
  }
}
// begin
.fade-up-leave-to {
  transform: translateY(15px);
  opacity: 0;
  z-index: 0;
}
// end
.fade-up-enter {
  transform: translateY(55px);
  opacity: 0;
  z-index: 1;
}

.fade-up-enter-active {
  transition: all 0.5s ease;
}

.fade-up-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

/* Swipe */
.swipe {
  @include div_r_pc(1026, 667, 182, 240);
  object-fit: cover;
  // background: #0344;
}

// begin
.swipe-fade-leave-to {
  opacity: 0;
  z-index: 0;
}
// end
.swipe-fade-enter {
  opacity: 0;
  z-index: 1;
}

.swipe-fade-enter-active {
  transition: all 0.3s ease;
}

.swipe-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

// begin
// .swipe-left-leave-to {
//   margin-left: -100vw;
//   z-index: 0;
// }
// // end
// .swipe-left-enter {
//   opacity: 0.5;
//   margin-left: 0;
//   z-index: 1;
// }

// .swipe-left-enter-active {
//   transition: all 0.5s ease;
// }

// .swipe-left-leave-active {
//   transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
// }

.swipe-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.swipe-item {
  width: 100%;
  height: 100%;
  z-index: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .slide-name {
    right: 2em;
    bottom: 1.2em;
    color: #fff;
    font-size: size(18);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.03em;
    text-align: left;
    text-shadow: 0 0.3em 1em #000;
  }

  // &:nth-child(1) {
  //   z-index: 1;
  //   // opacity: 1;
  // }

  // &.base {
  //   z-index: 1;
  //   opacity: 1;
  // }
  // &.active {
  //   z-index: 2;
  //   // opacity: 1;
  // }
}

.pagination {
  width: auto;
  bottom: size(24);
  right: 0;
  left: 0;
  margin: 0 auto;
  justify-content: center;
}

.pagination-dot {
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
  z-index: 4;

  span {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    box-shadow: 0 0 0 1px #fff;
    position: relative;
    background-color: transparent;
    transition: all 0.5s;

    &::before {
      content: '';
      width: 60%;
      height: 60%;
      display: block;
      background: #fff;
      border-radius: 20px;
      opacity: 1;
      position: absolute;
      top: 20%;
      // transform: translateY(-50%);
      left: 20%;
      transition: all 0.3s;
      transform-origin: center;
      transform: scale(0);
    }
    &.active {
      box-shadow: none;
      &::before {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        background: #fff;
        border-radius: 20px;
        opacity: 1;
        position: absolute;
        top: 0%;
        // transform: translateY(-50%);
        left: 0%;
        transform: scale(1);
      }
    }
  }
}

.swipe-btns {
  width: 100%;
  height: 100%;
  padding: 0 15px;
  z-index: 3;

  .prev-btn,
  .next-btn {
    width: size(20);
    cursor: pointer;
  }
}

@media only screen and (max-width: 1440px) {
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section9 {
    width: 100vw;
    height: sizem(893);
    min-height: auto;
    max-height: initial;
    //  background-image: url('./all/section_bg.jpg');
    // background-attachment: scroll;
    // background-image: url('./s2/bg.jpg');
    // background-size: 100% 100%;
    // background-position: 0 0;
    // background-attachment: fixed;
    overflow: hidden;
  }
  svg {
    @include div_l_m(190, 190, 0, 33);
    top: auto;
    bottom: sizem(47);
  }

  .title1 {
    @include div_l_m(178, 41, 92, 34);
    font-size: sizem(23);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.91;
    letter-spacing: sizem(2.3);
    text-align: center;
    color: #ffffff;
    background-color: #003177;
    padding-top: 0;
    writing-mode: horizontal-tb;
    text-orientation: mixed;
  }

  .title2 {
    @include div_l_m(258, 27, 57, 34);
    font-size: sizem(18);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: sizem(3.6);
    text-align: left;
    color: #003177;
    writing-mode: horizontal-tb;
    text-orientation: mixed;
  }

  .subtitle {
    @include div_r_m(310, 30, 471, 32);
    font-size: size(15);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: size(1);
    text-align: left;
    color: #000;
    writing-mode: horizontal-tb;
    text-orientation: mixed;
  }

  .desc {
    @include div_r_m(310, 30, 480, 32);
    font-size: sizem(15);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: normal;
    text-align: left;
    color: #606060;
    writing-mode: horizontal-tb;
    text-orientation: mixed;
  }

  .btns {
    @include img_c_m(140 * 2 + 11, 170);
  }

  .btn {
    width: sizem(140);
    height: sizem(30);
    cursor: pointer;
    background: #fff;
    transition: all 0.3s;
    font-size: sizem(19);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.14;
    letter-spacing: sizem(1.9);
    text-align: left;
    color: #606060;

    &.active,
    &:hover {
      box-shadow: -2px 2px 0 0 #003177;
      background: #fff;
      color: #003177;
    }
  }
  .circle {
    @include img_r_m(133, 708, -35);
  }

  /* Swipe */
  .swipe {
    width: 100%;
    height: sizem(243);
    min-height: auto;
    top: sizem(210);
    bottom: auto;
    left: sizem(0);
    object-fit: cover;
  }

  // begin
  .swipe-fade-leave-to {
    opacity: 0;
    z-index: 0;
  }
  // end
  .swipe-fade-enter {
    opacity: 0;
    z-index: 1;
  }

  .swipe-fade-enter-active {
    transition: all 0.5s ease;
  }

  .swipe-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }

  // begin
  // .swipe-left-leave-to {
  //   margin-left: -100vw;
  //   z-index: 0;
  // }
  // // end
  // .swipe-left-enter {
  //   opacity: 0.5;
  //   margin-left: 0;
  //   z-index: 1;
  // }

  // .swipe-left-enter-active {
  //   transition: all 0.5s ease;
  // }

  // .swipe-left-leave-active {
  //   transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  // }

  .swipe-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .swipe-item {
    width: 100%;
    height: 100%;
    z-index: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    // &:nth-child(1) {
    //   z-index: 1;
    //   // opacity: 1;
    // }

    // &.base {
    //   z-index: 1;
    //   opacity: 1;
    // }
    // &.active {
    //   z-index: 2;
    //   // opacity: 1;
    // }
    .slide-name {
      right: auto;
      width: auto;
      top: auto;
      bottom: 1.2em;
      right: 0.5em;
      text-align: right;
      font-size: sizem(12);
      font-family: "Noto Sans TC", serif;
      font-weight: 400;
    }
  }

  .pagination {
    width: auto;
    bottom: size(91);
    left: 0;
    right: 0;
    margin: 0 auto;
    justify-content: center;
  }

  .pagination-dot {
    padding: 5px;
    margin: 0 10px;
    cursor: pointer;
    z-index: 4;

    span {
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      box-shadow: 0 0 0 1px #fff;
      position: relative;
      background-color: rgba(0, 0, 0, 0.01);
      transition: all 0.5s;

      &::before {
        content: '';
        width: 60%;
        height: 60%;
        display: block;
        background: #004ea2;
        border-radius: 20px;
        opacity: 1;
        position: absolute;
        top: 20%;
        // transform: translateY(-50%);
        left: 20%;
        transition: all 0.3s;
        transform-origin: center;
        transform: scale(0);
      }
      &.active {
        &::before {
          content: '';
          width: 100%;
          height: 100%;
          display: block;
          background: #004ea2;
          border-radius: 20px;
          opacity: 1;
          position: absolute;
          top: 0%;
          // transform: translateY(-50%);
          left: 0%;
          transform: scale(1);
        }
      }
    }
  }

  .swipe-btns {
    width: 100%;
    height: 100%;
    padding: 0 15px;
    z-index: 3;

    .prev-btn,
    .next-btn {
      width: sizem(15);
      cursor: pointer;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'
import slider from '@/mixins/slider.js'

export default {
  name: 'section9',

  mixins: [slider],
  props: ['viewIndex'],

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
      blockIndex: 0,
      slideIndex1: 0,
      slideList: [
        {
          img: require('./s9/04-1_slider_1.jpg'),
          name: '捷運蘆洲站',
        },
        {
          img: require('./s9/04-1_slider_5.jpg'),
          name: '國民運動中心',
        },
        {
          img: require('./s9/04-1_slider_2.jpg'),
          name: '五福市場',
        },
        {
          img: require('./s9/04-1_slider_6.jpg'),
          name: '區公所',
        },
        {
          img: require('./s9/04-1_slider_4.jpg'),
          name: '市民活動中心',
        },

      ],
      slideList1: [
        {
          img: require('./s9/04-2_slider_1.jpg'),
          name: '芳洲公園',
        },
        {
          img: require('./s9/04-2_slider_2.jpg'),
          name: '新北大都會公園',
        },
        {
          img: require('./s9/04-2_slider_3.jpg'),
          name: '芳洲公園',
        },
        {
          img: require('./s9/04-2_slider_4.jpg'),
          name: '新北大都會公園',
        },
        {
          img: require('./s9/04-2_slider_5.jpg'),
          name: '新北大都會公園',
        },
      ],
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},

  watch: {
    // viewIndex() {
    //   if (this.viewIndex === 5) {
    //     this.slideIndex = 0
    //     console.log(this.slideIndex, 'slideIndex')
    //   }
    // },
  },
}
</script>
