(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["hot_case"],{"0a3a":function(t,i,s){t.exports=s.p+"img/topbg.baa6d6d6.jpg"},1526:function(t,i,s){},2350:function(t,i,s){"use strict";var e=s("de58"),a=s.n(e);a.a},2599:function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"section2"},[e("div",{staticClass:"container flex flex-jb wrap"},[e("div",{staticClass:"side-bar"},[e("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption},on:{slideChangeTransitionEnd:t.slideChanged}},[t._l(t.slideList,function(i,s){return e("swiper-slide",{key:i.img,attrs:{index:s}},[e("img",{class:"item-img",attrs:{src:i.img}}),e("div",{staticClass:"card-content",domProps:{innerHTML:t._s(i.title)}})])}),t.isPC?e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}):t._e(),t.isMobile?e("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[e("img",{staticClass:"arrow-left",attrs:{src:s("a61d"),alt:""}})]):t._e(),t.isMobile?e("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"},[e("img",{staticClass:"arrow-next",attrs:{src:s("8f2f"),alt:""}})]):t._e()],2)],1),e("div",{staticClass:"content"},[t.isPC?e("img",{staticClass:"main-img",attrs:{src:t.slideList[t.slideIndex].img,alt:""}}):t._e(),t.isPC?e("div",{staticClass:"shin-lan-title-h shin-lan-title-h-m title gold",attrs:{"data-aos":"fade"}},[t._v("\n        熱銷"),e("span",{attrs:{"data-aos":"flip-right"}}),t._v("個案\n      ")]):t._e(),e("div",{staticClass:"case-title",domProps:{innerHTML:t._s(t.current_case.title)}}),e("hr"),e("div",{staticClass:"case-desc",domProps:{innerHTML:t._s(t.current_case.desc)}}),e("div",{staticClass:"back-btn flex-c",on:{click:function(i){return t.$router.push("/hot_case")}}},[t._v("回到上一頁")])])])])},a=[],n=s("ed08"),c=s("53d2"),r=s("41d1"),o=s("c829"),l=(s("dfa4"),s("7212")),d={name:"section2",mixins:[o["a"]],components:{swiper:l["swiper"],swiperSlide:l["swiperSlide"]},data:function(){return{info:c["a"],isPC:n["b"],isMobile:n["a"],isTablet:n["c"],slideIndex:0,swiperOption:{direction:n["a"]?"horizontal":"vertical",slidesPerView:n["a"]?1:3,spaceBetween:n["c"]?20:0,slidesPerColumn:(n["a"],1),autoplay:{delay:4e3,disableOnInteraction:!0},loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}},slideList:[],current_case:{}}},computed:{},methods:{slideChanged:function(t){var i=this.$refs.mySwiper.swiper;console.log(i.activeIndex,i.slides.length,"eeee"),i.isEnd?this.slideIndex=0:this.slideIndex=i.activeIndex%this.current_case.imgs.length+1}},mounted:function(){if(this.$route.params.id){var t=this.$route.params.id;this.current_case=r["d"][t-1],this.slideList=this.current_case.imgs}},watch:{},created:function(){}},u=d,p=(s("ca44"),s("3faf"),s("2877")),f=Object(p["a"])(u,e,a,!1,null,"fcaf4a5a",null);i["default"]=f.exports},"2bf7":function(t,i,s){},"3faf":function(t,i,s){"use strict";var e=s("2bf7"),a=s.n(e);a.a},"686d":function(t,i,s){},6903:function(t,i,s){"use strict";var e=s("be3f"),a=s.n(e);a.a},"76b4":function(t,i,s){t.exports=s.p+"img/logo.8da164a6.png"},"7fb4":function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"bg"},[s("div",{staticClass:"section",attrs:{id:"section1"}},[s("Section1")],1),s("vue-lazy-component",{staticClass:"section",attrs:{id:"section2"}},[s("Section2")],1)],1)},a=[],n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"section1"},[t.isPC?e("img",{staticClass:"bg-img",attrs:{src:s("0a3a"),alt:""}}):e("img",{staticClass:"bg-img",attrs:{src:s("a8c5"),alt:""}}),t._m(0)])},c=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"box"},[e("img",{staticClass:"logo",attrs:{src:s("76b4"),alt:""}}),e("div",{staticClass:"shin-lan-title-h shin-lan-title-h-m title gold",attrs:{"data-aos":"fade"}},[t._v("\n    熱銷"),e("span",{attrs:{"data-aos":"flip-right"}}),t._v("個案\n  ")])])}],r=s("ed08"),o=s("53d2"),l={name:"section1",data:function(){return{info:o["a"],isPC:r["b"],isMobile:r["a"],isTablet:r["c"]}},methods:{},mounted:function(){},created:function(){},computed:{}},d=l,u=(s("2350"),s("2877")),p=Object(u["a"])(d,n,c,!1,null,"7a7e591d",null),f=p.exports,m=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"section2"},[s("div",{staticClass:"container"},[s("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption,"data-aos":"fade","data-aos-delay":"200"},on:{slideChangeTransitionEnd:t.slideChanged}},[t._l(t.slideList,function(i,e){return s("swiper-slide",{key:i.img,staticClass:"card",attrs:{index:e}},[s("div",{staticClass:"card-img",on:{click:function(s){return t.$router.push(i.link)}}},[s("img",{class:"item-img",attrs:{src:i.img}}),s("div",{staticClass:"add-btn"},[t._v("\n            +\n          ")])]),s("div",{staticClass:"card-content",domProps:{innerHTML:t._s(i.title)},on:{click:function(s){return t.$router.push(i.link)}}})])}),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},g=[],v=s("75fc"),h=s("41d1"),b=s("c829"),w=(s("dfa4"),s("7212")),C={name:"section2",mixins:[b["a"]],components:{swiper:w["swiper"],swiperSlide:w["swiperSlide"]},data:function(){return{info:o["a"],isPC:r["b"],isMobile:r["a"],isTablet:r["c"],slideIndex:0,swiperOption:{slidesPerView:r["a"]?1:3,spaceBetween:r["c"]?20:30,slidesPerColumn:(r["a"],1),allowSlidePrev:(r["a"],!0),allowSlideNext:(r["a"],!0),autoplay:{delay:4e3,disableOnInteraction:!0},loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}},slideList:Object(v["a"])(h["d"])}},computed:{},methods:{slideChanged:function(t){var i=this.$refs.mySwiper.swiper;i.isEnd?this.slideIndex=0:i.isBeginning?this.slideIndex=i.slides.length-3:this.slideIndex=i.activeIndex-1}},mounted:function(){},watch:{},created:function(){}},_=C,x=(s("6903"),s("d35f"),Object(u["a"])(_,m,g,!1,null,"17e30582",null)),P=x.exports,S={name:"hot_case",components:{Section1:f,Section2:P},data:function(){return{}},computed:{},mounted:function(){},methods:{},watch:{}},E=S,I=(s("f43c"),Object(u["a"])(E,e,a,!1,null,"6f3a68ad",null));i["default"]=I.exports},a8c5:function(t,i,s){t.exports=s.p+"img/topbg.eaac5fef.jpg"},be3f:function(t,i,s){},ca44:function(t,i,s){"use strict";var e=s("686d"),a=s.n(e);a.a},d35f:function(t,i,s){"use strict";var e=s("1526"),a=s.n(e);a.a},d695:function(t,i,s){},de58:function(t,i,s){},f43c:function(t,i,s){"use strict";var e=s("d695"),a=s.n(e);a.a}}]);
//# sourceMappingURL=hot_case.4d50d860.js.map