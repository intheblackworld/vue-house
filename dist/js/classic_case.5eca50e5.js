(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["classic_case"],{"077c":function(t,e,s){},"0964":function(t,e,s){t.exports=s.p+"img/topbg.ae92c6bd.jpg"},"0d35":function(t,e,s){"use strict";var i=s("4674"),n=s.n(i);n.a},"0edd":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg"},[s("div",{staticClass:"section",attrs:{id:"section1"}},[s("Section1")],1),s("vue-lazy-component",{staticClass:"section",attrs:{id:"section2"}},[s("Section2")],1)],1)},n=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section1"},[t.isPC?i("img",{staticClass:"bg-img",attrs:{src:s("0964"),alt:""}}):i("img",{staticClass:"bg-img",attrs:{src:s("f648"),alt:""}}),t._m(0),t.isPC?i("div",{staticClass:"type-tab flex-ac flex-jb"},[i("div",{class:"tab "+(2==t.$route.query.type?"":"active"),on:{click:function(e){return t.$router.push("/classic_case?type=1")}}},[t._v("\n      欣聯建設Shin-Lan\n    ")]),i("div",{class:"tab "+(2==t.$route.query.type?"active":""),on:{click:function(e){return t.$router.push("/classic_case?type=2")}}},[t._v("\n      合聯營造Heran\n    ")])]):t._e()])},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box"},[s("div",{staticClass:"shin-lan-title-v shin-lan-title-v-m title",attrs:{"data-aos":"fade"}},[t._v("\n    經典"),s("span",{attrs:{"data-aos":"flip-right"}}),t._v("案例\n  ")])])}],r=s("ed08"),o=s("53d2"),l={name:"section1",data:function(){return{info:o["a"],isPC:r["b"],isMobile:r["a"],isTablet:r["c"]}},methods:{},mounted:function(){},created:function(){},computed:{}},u=l,d=(s("0d35"),s("2877")),p=Object(d["a"])(u,a,c,!1,null,"55b8cd72",null),f=p.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section2"},[s("div",{staticClass:"container"},[t.isMobile?s("div",{staticClass:"type-tab flex-ac flex-jb"},[s("div",{class:"tab "+(2==t.$route.query.type?"":"active"),on:{click:function(e){return t.$router.push("/classic_case?type=1")}}},[t._v("\n        欣聯建設Shin-Lan\n      ")]),s("div",{class:"tab "+(2==t.$route.query.type?"active":""),on:{click:function(e){return t.$router.push("/classic_case?type=2")}}},[t._v("\n        合聯營造Heran\n      ")])]):t._e(),s("div",{staticClass:"head flex-ac flex-jb"},[s("div",{staticClass:"current-tab"},[t._v(t._s(t.type_text))]),s("div",{staticClass:"pages flex-ac"},t._l(t.pages,function(e,i){return s("div",{key:"page-btn-"+i,staticClass:"page-btn flex-c",on:{click:function(e){return t.changePage(i)}}},[t._v(t._s(e))])}),0)]),s("transition-group",{staticClass:"flex-ac flex-js wrap",attrs:{name:"slide-fade",mode:"out-in"}},t._l(t.current_case_list,function(e,i){return s("div",{key:e.title+i,staticClass:"card",on:{click:function(s){return t.$router.push(e.link)}}},[s("div",{staticClass:"card-img"},[s("img",{attrs:{src:e.img,alt:""}}),s("div",{staticClass:"add-btn"},[t._v("\n            +\n          ")])]),s("div",{staticClass:"card-content",domProps:{innerHTML:t._s(e.title)}})])}),0)],1)])},v=[],_=s("75fc"),b=s("41d1"),m=s("2ef0"),g=s.n(m),C={name:"section2",data:function(){return{info:o["a"],isPC:r["b"],isMobile:r["a"],isTablet:r["c"],pageIndex:0,count:6,case_list_1:Object(_["a"])(b["a"]),case_list_2:Object(_["a"])(b["b"])}},computed:{type:function(){return this.$route.query.type?this.$route.query.type:1},total:function(){return this.case_list.length},type_text:function(){return 2==this.$route.query.type?"合聯營造Heran":"欣聯建設Shin-Lan"},totalPage:function(){return Math.floor(this.total/this.count)+(this.total%this.count>0?1:0)||1},case_list:function(){return this["case_list_".concat(this.type||1)]},current_case_list:function(){return this.case_list.slice(this.pageIndex*this.count,this.count*(this.pageIndex+1))},pages:function(){return g.a.range(1,this.totalPage+1)}},methods:{init:function(){this.pageIndex=0,this.isPC?this.count=6:this.count=999},changePage:function(t){this.pageIndex=t}},mounted:function(){this.init()},watch:{$route:function(){this.init()}},created:function(){}},x=C,y=(s("0f62"),Object(d["a"])(x,h,v,!1,null,"7d00d289",null)),w=y.exports,$={name:"classic_case",components:{Section1:f,Section2:w},data:function(){return{}},computed:{},mounted:function(){},methods:{},watch:{}},P=$,k=(s("aaf4"),Object(d["a"])(P,i,n,!1,null,"53e0726d",null));e["default"]=k.exports},"0f62":function(t,e,s){"use strict";var i=s("f861"),n=s.n(i);n.a},"25afe":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section2"},[s("div",{staticClass:"container flex flex-jb flex-ab wrap"},[s("div",{staticClass:"left"},[s("div",{staticClass:"side-bar"},[s("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption},on:{slideChangeTransitionEnd:t.slideChanged}},[t._l(t.slideList,function(t,e){return s("swiper-slide",{key:t.img+e,attrs:{index:e}},[s("img",{class:"item-img",attrs:{src:t.img}}),s("div",{staticClass:"card-content"})])}),t.isPC?s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}):t._e(),t.isMobile?s("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}):t._e(),t.isMobile?s("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"}):t._e()],2)],1),s("div",{staticClass:"content"},[s("div",{staticClass:"current-tab"},[t._v(t._s(t.type_text))]),t.isPC?s("div",{staticClass:"shin-lan-title-h shin-lan-title-h-m title",attrs:{"data-aos":"fade"}},[t._v("\n          經典"),s("span",{attrs:{"data-aos":"flip-right"}}),t._v("案例\n        ")]):t._e(),s("div",{staticClass:"case-title",domProps:{innerHTML:t._s(t.current_case.title)}}),s("hr"),s("div",{staticClass:"case-desc",domProps:{innerHTML:t._s(t.current_case.desc)}}),s("div",{staticClass:"back-btn flex-c",on:{click:function(e){return t.$router.push("/classic_case")}}},[t._v("回到上一頁")])])]),t.isPC?s("div",{staticClass:"right"},[s("img",{staticClass:"main-img",attrs:{src:t.slideList[t.slideIndex].img,alt:""}})]):t._e()])])},n=[],a=s("ed08"),c=s("53d2"),r=s("41d1"),o=s("c829"),l=(s("dfa4"),s("7212")),u={name:"section2",mixins:[o["a"]],components:{swiper:l["swiper"],swiperSlide:l["swiperSlide"]},data:function(){return{info:c["a"],isPC:a["b"],isMobile:a["a"],isTablet:a["c"],slideIndex:0,swiperOption:{slidesPerView:(a["a"],1),spaceBetween:a["c"]?20:0,slidesPerColumn:(a["a"],1),autoplay:{delay:4e3,disableOnInteraction:!0},loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}},slideList:[],current_case:{}}},computed:{type_text:function(){return 2==this.$route.params.type?"合聯營造Heran":"欣聯建設Shin-Lan"}},methods:{slideChanged:function(t){var e=this.$refs.mySwiper.swiper;console.log(e.activeIndex,e.slides.length,"eeee"),e.isEnd?this.slideIndex=0:this.slideIndex=(e.activeIndex-1)%this.current_case.imgs.length}},mounted:function(){if(this.$route.params.id){var t=this.$route.params.id,e=this.$route.params.type;1==e?this.current_case=r["a"][t-1]:2==e&&(this.current_case=r["b"][t-1]),this.slideList=this.current_case.imgs}},watch:{},created:function(){}},d=u,p=(s("8e3d"),s("5c97"),s("2877")),f=Object(p["a"])(d,i,n,!1,null,"58b5ea58",null);e["default"]=f.exports},4674:function(t,e,s){},"46a4":function(t,e,s){},"5c97":function(t,e,s){"use strict";var i=s("077c"),n=s.n(i);n.a},"8e3d":function(t,e,s){"use strict";var i=s("46a4"),n=s.n(i);n.a},aaf4:function(t,e,s){"use strict";var i=s("dac9"),n=s.n(i);n.a},dac9:function(t,e,s){},f648:function(t,e,s){t.exports=s.p+"img/topbg.150c351f.jpg"},f861:function(t,e,s){}}]);
//# sourceMappingURL=classic_case.5eca50e5.js.map