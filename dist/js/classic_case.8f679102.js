(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["classic_case"],{"0964":function(t,e,i){t.exports=i.p+"img/topbg.ae92c6bd.jpg"},"0edd":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bg"},[i("div",{staticClass:"section",attrs:{id:"section1"}},[i("Section1")],1),i("vue-lazy-component",{staticClass:"section",attrs:{id:"section2"}},[i("Section2")],1)],1)},n=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section1"},[t.isPC?s("img",{staticClass:"bg-img",attrs:{src:i("0964"),alt:""}}):s("img",{staticClass:"bg-img",attrs:{src:i("f648"),alt:""}}),t._m(0),t.isPC?s("div",{staticClass:"type-tab flex-ac flex-jb"},[s("div",{class:"tab "+(2==t.$route.query.type?"":"active"),on:{click:function(e){return t.$router.push("/classic_case?type=1")}}},[t._v("\n      欣聯建設Shin-Lan\n    ")]),s("div",{class:"tab "+(2==t.$route.query.type?"active":""),on:{click:function(e){return t.$router.push("/classic_case?type=2")}}},[t._v("\n      合聯營造Holan\n    ")])]):t._e()])},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box"},[i("div",{staticClass:"shin-lan-title-v shin-lan-title-v-m title",attrs:{"data-aos":"fade"}},[t._v("\n    經典"),i("span",{attrs:{"data-aos":"flip-right"}}),t._v("案例\n  ")])])}],r=i("ed08"),o=i("53d2"),l={name:"section1",data:function(){return{info:o["a"],isPC:r["b"],isMobile:r["a"],isTablet:r["c"]}},methods:{},mounted:function(){},created:function(){},computed:{}},u=l,d=(i("eb4b"),i("2877")),f=Object(d["a"])(u,a,c,!1,null,"5bf962ec",null),p=f.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section2"},[i("div",{staticClass:"container"},[t.isMobile?i("div",{staticClass:"type-tab flex-ac flex-jb"},[i("div",{class:"tab "+(2==t.$route.query.type?"":"active"),on:{click:function(e){return t.$router.push("/classic_case?type=1")}}},[t._v("\n        欣聯建設Shin-Lan\n      ")]),i("div",{class:"tab "+(2==t.$route.query.type?"active":""),on:{click:function(e){return t.$router.push("/classic_case?type=2")}}},[t._v("\n        合聯營造Holan\n      ")])]):t._e(),i("div",{staticClass:"head flex-ac flex-jb"},[i("div",{staticClass:"current-tab"},[t._v(t._s(t.type_text))]),i("div",{staticClass:"pages flex-ac"},t._l(t.pages,(function(e,s){return i("div",{key:"page-btn-"+s,staticClass:"page-btn flex-c",on:{click:function(e){return t.changePage(s)}}},[t._v(t._s(e))])})),0)]),i("div",{staticClass:"cate-list flex-ac flex-jb"},[i("div",{class:"cate-btn "+(0==t.category_index?"active":""),on:{click:function(e){t.category_index=0}}},[t._v("全部")]),i("div",{class:"cate-btn "+(1==t.category_index?"active":""),on:{click:function(e){t.category_index=1}}},[t._v("住宅")]),i("div",{class:"cate-btn "+(2==t.category_index?"active":""),on:{click:function(e){t.category_index=2}}},[t._v("辦公室與廠辦")])]),i("transition-group",{staticClass:"flex-ac flex-js wrap",attrs:{name:"slide-fade",mode:"out-in"}},t._l(t.current_case_list,(function(e,s){return i("div",{key:e.title+s,staticClass:"card",on:{click:function(i){return t.$router.push(e.link)}}},[i("div",{staticClass:"card-img"},[i("img",{attrs:{src:e.img,alt:""}}),i("div",{staticClass:"add-btn"},[t._v("\n            +\n          ")])]),i("div",{staticClass:"card-content",domProps:{innerHTML:t._s(e.title)}})])})),0)],1)])},_=[],h=i("75fc"),b=i("41d1"),g=i("2ef0"),m=i.n(g),x={name:"section2",data:function(){return{info:o["a"],isPC:r["b"],isMobile:r["a"],isTablet:r["c"],pageIndex:0,count:6,case_list_1:Object(h["a"])(b["a"]),case_list_2:Object(h["a"])(b["b"]),category:[{title:"全部",value:""},{title:"住宅",value:1},{title:"辦公室與廠辦",value:2}],category_index:0}},computed:{type:function(){return this.$route.query.type?this.$route.query.type:1},total:function(){return this.case_list.length},type_text:function(){return 2==this.$route.query.type?"合聯營造Holan":"欣聯建設Shin-Lan"},totalPage:function(){return Math.floor(this.total/this.count)+(this.total%this.count>0?1:0)||1},case_list:function(){var t=this;return this["case_list_".concat(this.type||1)].filter((function(e){return 0==t.category_index||e.cate==t.category[t.category_index].value}))},current_case_list:function(){return this.case_list.slice(this.pageIndex*this.count,this.count*(this.pageIndex+1))},pages:function(){return m.a.range(1,this.totalPage+1)}},methods:{init:function(){this.pageIndex=0,this.isPC?this.count=6:this.count=999},changePage:function(t){this.pageIndex=t,this.category_index=0}},mounted:function(){this.init()},watch:{$route:function(){this.init()}},created:function(){}},C=x,y=(i("fe03"),Object(d["a"])(C,v,_,!1,null,"39a4bb3c",null)),w=y.exports,$={name:"classic_case",components:{Section1:p,Section2:w},data:function(){return{}},computed:{},mounted:function(){},methods:{},watch:{}},k=$,P=(i("306b"),Object(d["a"])(k,s,n,!1,null,"5e515abf",null));e["default"]=P.exports},"170d":function(t,e,i){"use strict";var s=i("d1f7"),n=i.n(s);n.a},"25af":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section2"},[i("div",{staticClass:"container flex flex-jb flex-ab wrap"},[i("div",{staticClass:"left"},[i("div",{staticClass:"side-bar"},[i("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption},on:{slideChangeTransitionEnd:t.slideChanged}},[t._l(t.slideList,(function(t,e){return i("swiper-slide",{key:t.img+e,attrs:{index:e}},[i("img",{class:"item-img",attrs:{src:t.img}}),i("div",{staticClass:"card-content"})])})),t.isPC?i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}):t._e(),t.isMobile?i("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}):t._e(),t.isMobile?i("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"}):t._e()],2)],1),i("div",{staticClass:"content"},[i("div",{staticClass:"current-tab"},[t._v(t._s(t.type_text))]),t.isPC?i("div",{staticClass:"shin-lan-title-h shin-lan-title-h-m title",attrs:{"data-aos":"fade"}},[t._v("\n          經典"),i("span",{attrs:{"data-aos":"flip-right"}}),t._v("案例\n        ")]):t._e(),i("div",{staticClass:"case-title",domProps:{innerHTML:t._s(t.current_case.title)}}),i("hr"),i("div",{staticClass:"case-desc",domProps:{innerHTML:t._s(t.current_case.desc)}}),i("div",{staticClass:"back-btn flex-c",on:{click:function(e){return t.$router.go(-1)}}},[t._v("回到上一頁")])])]),t.isPC?i("div",{staticClass:"right"},[i("img",{staticClass:"main-img",attrs:{src:t.slideList[t.slideIndex].img,alt:""}})]):t._e()])])},n=[],a=i("ed08"),c=i("53d2"),r=i("41d1"),o=i("c829"),l=(i("dfa4"),i("7212")),u={name:"section2",mixins:[o["a"]],components:{swiper:l["swiper"],swiperSlide:l["swiperSlide"]},data:function(){return{info:c["a"],isPC:a["b"],isMobile:a["a"],isTablet:a["c"],slideIndex:0,swiperOption:{slidesPerView:(a["a"],1),spaceBetween:a["c"]?20:0,slidesPerColumn:(a["a"],1),autoplay:{delay:4e3,disableOnInteraction:!0},loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}},slideList:[],current_case:{}}},computed:{type_text:function(){return 2==this.$route.params.type?"合聯營造Holan":"欣聯建設Shin-Lan"}},methods:{slideChanged:function(t){var e=this.$refs.mySwiper.swiper;console.log(e.activeIndex,e.slides.length,"eeee"),e.isEnd?this.slideIndex=0:this.slideIndex=(e.activeIndex-1)%this.current_case.imgs.length}},mounted:function(){if(this.$route.params.id){var t=this.$route.params.id,e=this.$route.params.type;1==e?this.current_case=r["a"][t-1]:2==e&&(this.current_case=r["b"][t-1]),this.slideList=this.current_case.imgs}},watch:{},created:function(){}},d=u,f=(i("8e3d"),i("170d"),i("2877")),p=Object(f["a"])(d,s,n,!1,null,"df67d4b8",null);e["default"]=p.exports},"306b":function(t,e,i){"use strict";var s=i("6773"),n=i.n(s);n.a},"46a4":function(t,e,i){},6773:function(t,e,i){},"8e3d":function(t,e,i){"use strict";var s=i("46a4"),n=i.n(s);n.a},"8e6ec":function(t,e,i){},a386:function(t,e,i){},d1f7:function(t,e,i){},eb4b:function(t,e,i){"use strict";var s=i("8e6ec"),n=i.n(s);n.a},f648:function(t,e,i){t.exports=i.p+"img/topbg.150c351f.jpg"},fe03:function(t,e,i){"use strict";var s=i("a386"),n=i.n(s);n.a}}]);
//# sourceMappingURL=classic_case.8f679102.js.map