(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["hot_case"],{"03d6":function(t,i,e){},"08fd":function(t,i,e){},"0a3a":function(t,i,e){t.exports=e.p+"img/topbg.baa6d6d6.jpg"},2350:function(t,i,e){"use strict";var s=e("de58"),n=e.n(s);n.a},2599:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"section2"},[e("div",{staticClass:"container flex flex-jb wrap"},[e("div",{staticClass:"side-bar"},[t.slideList.length>0?e("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption},on:{slideChangeTransitionEnd:t.slideChanged}},[t._l(t.slideList,(function(i,s){return e("swiper-slide",{key:i.img,attrs:{index:s}},[e("div",{class:"item-img"},[e("img",{attrs:{src:i.img,alt:""}})]),e("div",{staticClass:"card-content",domProps:{innerHTML:t._s(i.title)}})])})),t.isMobile?e("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}):t._e(),t.isMobile?e("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"}):t._e()],2):t._e(),t.isPC?e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}):t._e()],1),e("div",{staticClass:"content"},[t.isPC?e("img",{staticClass:"main-img",attrs:{src:t.slideList[t.slideIndex]?t.slideList[t.slideIndex].img:"",alt:""}}):t._e(),t.isPC?e("div",{staticClass:"shin-lan-title-h shin-lan-title-h-m title gold",attrs:{"data-aos":"fade"}},[t._v("\n        熱銷"),e("span",{attrs:{"data-aos":"flip-right"}}),t._v("個案\n      ")]):t._e(),e("div",{staticClass:"case-title",domProps:{innerHTML:t._s(t.current_case.title)}}),e("hr"),e("div",{staticClass:"case-desc",domProps:{innerHTML:t._s(t.current_case.desc)}}),e("div",{staticClass:"back-btn flex-c",on:{click:function(i){return t.$router.push("/hot_case")}}},[t._v("回到上一頁")])])])])},n=[],a=e("ed08"),r=e("53d2"),c=e("41d1"),o=e("c829"),l=(e("dfa4"),e("7212")),d={name:"section2",mixins:[o["a"]],components:{swiper:l["swiper"],swiperSlide:l["swiperSlide"]},data:function(){return{info:r["a"],isPC:a["b"],isMobile:a["a"],isTablet:a["c"],slideIndex:0,swiperOption:{direction:a["a"]?"horizontal":"vertical",slidesPerView:a["a"]?1:"auto",spaceBetween:a["c"]?20:30,slidesPerColumn:(a["a"],1),slideToClickedSlide:!0,autoplay:{delay:4e3,disableOnInteraction:!0},loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}},slideList:[],current_case:{}}},computed:{swiper:function(){return this.$refs.mySwiper?this.$refs.mySwiper.swiper:""}},methods:{slideChanged:function(t){var i=this.$refs.mySwiper.swiper;i.isEnd?this.slideIndex=0:this.slideIndex=i.activeIndex%this.current_case.imgs.length}},mounted:function(){var t=this;if(this.$route.params.id){var i=this.$route.params.id;this.current_case=c["d"][i-1],this.slideList=this.current_case.imgs,this.slideIndex=0,setTimeout((function(){t.swiper&&t.swiper.slideTo(0,1e3,!1)}),500)}},created:function(){}},u=d,p=(e("ca44"),e("cb59"),e("2877")),f=Object(p["a"])(u,s,n,!1,null,"2461715e",null);i["default"]=f.exports},"686d":function(t,i,e){},6903:function(t,i,e){"use strict";var s=e("be3f"),n=e.n(s);n.a},"76b4":function(t,i,e){t.exports=e.p+"img/logo.370b47dd.png"},"7fb4":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"bg"},[e("div",{staticClass:"section",attrs:{id:"section1"}},[e("Section1")],1),e("vue-lazy-component",{staticClass:"section",attrs:{id:"section2"}},[e("Section2")],1)],1)},n=[],a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"section1"},[t.isPC?s("img",{staticClass:"bg-img",attrs:{src:e("0a3a"),alt:""}}):s("img",{staticClass:"bg-img",attrs:{src:e("a8c5"),alt:""}}),t._m(0)])},r=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"box"},[s("img",{staticClass:"logo",attrs:{src:e("76b4"),alt:""}}),s("div",{staticClass:"shin-lan-title-h shin-lan-title-h-m title gold",attrs:{"data-aos":"fade"}},[t._v("\n    熱銷"),s("span",{attrs:{"data-aos":"flip-right"}}),t._v("個案\n  ")])])}],c=e("ed08"),o=e("53d2"),l={name:"section1",data:function(){return{info:o["a"],isPC:c["b"],isMobile:c["a"],isTablet:c["c"]}},methods:{},mounted:function(){},created:function(){},computed:{}},d=l,u=(e("2350"),e("2877")),p=Object(u["a"])(d,a,r,!1,null,"7a7e591d",null),f=p.exports,m=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"section2"},[e("div",{staticClass:"container"},[e("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption,"data-aos":"fade","data-aos-delay":"200"},on:{slideChangeTransitionEnd:t.slideChanged}},[t._l(t.slideList,(function(i,s){return e("swiper-slide",{key:i.img,staticClass:"card",attrs:{index:s}},[e("div",{staticClass:"card-img",on:{click:function(e){return t.handle_enter(i.link)}}},[e("img",{class:"item-img",attrs:{src:i.img}}),e("div",{staticClass:"add-btn"},[t._v("\n            +\n          ")])]),e("div",{staticClass:"card-content",domProps:{innerHTML:t._s(i.title)},on:{click:function(e){return t.handle_enter(i.link)}}})])})),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},v=[],g=e("75fc"),h=e("41d1"),w=e("c829"),b=(e("dfa4"),e("7212")),C={name:"section2",mixins:[w["a"]],components:{swiper:b["swiper"],swiperSlide:b["swiperSlide"]},data:function(){return{info:o["a"],isPC:c["b"],isMobile:c["a"],isTablet:c["c"],slideIndex:0,swiperOption:{slidesPerView:c["a"]?1:3,spaceBetween:c["c"]?20:30,slidesPerColumn:(c["a"],1),allowSlidePrev:(c["a"],!0),allowSlideNext:(c["a"],!0),autoplay:{delay:4e3,disableOnInteraction:!0},loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}},slideList:Object(g["a"])(h["d"])}},computed:{},methods:{slideChanged:function(t){var i=this.$refs.mySwiper.swiper;i.isEnd?this.slideIndex=0:i.isBeginning?this.slideIndex=i.slides.length-3:this.slideIndex=i.activeIndex-1},handle_enter:function(t){console.log(t,"link"),this.$router.push(t)}},mounted:function(){},watch:{},created:function(){}},_=C,x=(e("6903"),e("83787"),Object(u["a"])(_,m,v,!1,null,"71383351",null)),S=x.exports,P={name:"hot_case",components:{Section1:f,Section2:S},data:function(){return{}},computed:{},mounted:function(){},methods:{},watch:{}},k=P,y=(e("f43c"),Object(u["a"])(k,s,n,!1,null,"6f3a68ad",null));i["default"]=y.exports},83787:function(t,i,e){"use strict";var s=e("03d6"),n=e.n(s);n.a},a8c5:function(t,i,e){t.exports=e.p+"img/topbg.eaac5fef.jpg"},be3f:function(t,i,e){},ca44:function(t,i,e){"use strict";var s=e("686d"),n=e.n(s);n.a},cb59:function(t,i,e){"use strict";var s=e("08fd"),n=e.n(s);n.a},d695:function(t,i,e){},de58:function(t,i,e){},f43c:function(t,i,e){"use strict";var s=e("d695"),n=e.n(s);n.a}}]);
//# sourceMappingURL=hot_case.fa70e614.js.map