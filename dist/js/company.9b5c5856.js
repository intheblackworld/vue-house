(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["company"],{"0465":function(t,e,i){},"1cac":function(t,e,i){"use strict";var n=i("35c4"),s=i.n(n);s.a},"35c4":function(t,e,i){},"66e1":function(t,e,i){"use strict";var n=i("c124"),s=i.n(n);s.a},"8fab":function(t,e,i){"use strict";var n=i("0465"),s=i.n(n);s.a},"960d":function(t,e,i){t.exports=i.p+"img/topbg.8db65b20.jpg"},b677:function(t,e,i){t.exports=i.p+"img/topbg.468421f5.jpg"},c124:function(t,e,i){},e7ca:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bg"},[i("vue-lazy-component",{staticClass:"section",attrs:{id:"section1"}},[i("Section1")],1),i("vue-lazy-component",{staticClass:"section",attrs:{id:"section2"}},[i("Section2")],1)],1)},s=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section1"},[t.isPC?n("img",{staticClass:"bg-img",attrs:{src:i("b677"),alt:""}}):n("img",{staticClass:"bg-img",attrs:{src:i("960d"),alt:""}}),t._m(0)])},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box"},[i("div",{staticClass:"shin-lan-title-v shin-lan-title-v-m title",attrs:{"data-aos":"fade"}},[t._v("\n    企業"),i("span",{attrs:{"data-aos":"flip-right"}}),t._v("責任\n  ")])])}],o=i("ed08"),r=i("53d2"),l={name:"section1",data:function(){return{info:r["a"],isPC:o["b"],isMobile:o["a"],isTablet:o["c"]}},methods:{},mounted:function(){},created:function(){},computed:{}},d=l,u=(i("1cac"),i("2877")),m=Object(u["a"])(d,a,c,!1,null,"299be9ea",null),p=m.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section2"},[i("div",{staticClass:"container"},[i("div",{staticClass:"pages flex-ac flex-jr"},t._l(t.pages,(function(e,n){return i("div",{key:"page-btn-"+n,staticClass:"page-btn flex-c",on:{click:function(e){return t.changePage(n)}}},[t._v(t._s(e))])})),0),i("transition-group",{staticClass:"item-list",attrs:{name:"slide-fade",mode:"out-in",tag:"div"}},t._l(t.current_company_list,(function(e,n){return i("div",{key:e.title+n,staticClass:"item flex flex-as flex-jb"},[i("div",{staticClass:"item-content"},[i("div",{staticClass:"item-date",domProps:{innerHTML:t._s(e.date)}}),i("div",{staticClass:"item-title",domProps:{innerHTML:t._s(e.title)}}),i("div",{staticClass:"item-subtitle",domProps:{innerHTML:t._s(e.subtitle)}}),i("div",{staticClass:"item-desc",domProps:{innerHTML:t._s(e.desc)}}),t.isPC?i("div",{staticClass:"pagination absolute flex-ac"},t._l(e.imgs,(function(s,a){return i("div",{key:s+"-dot"+a+n,class:"pagination-dot",on:{click:function(e){return t.goTo(n,a)}}},[i("span",{class:e.slideIndex===a?"active":""})])})),0):t._e()]),i("div",{staticClass:"swipe",attrs:{"data-aos":"fade","data-aos-delay":"200"},on:{mouseenter:function(e){e.stopPropagation(),t.toggleTimer=!1},mouseleave:function(e){e.stopPropagation(),t.toggleTimer=!0}}},[i("div",{directives:[{name:"touch",rawName:"v-touch:swipe.left",value:function(){return t.decIndex(n)},expression:"() => decIndex(itemIndex)",arg:"swipe",modifiers:{left:!0}},{name:"touch",rawName:"v-touch:swipe.right",value:function(){return t.addIndex(n)},expression:"() => addIndex(itemIndex)",arg:"swipe",modifiers:{right:!0}}],staticClass:"swipe-wrap relative"},[i("transition-group",{attrs:{name:"swipe-fade",mode:"out-in"}},t._l(e.imgs,(function(t,s){return i("div",{directives:[{name:"show",rawName:"v-show",value:e.slideIndex===s,expression:"item.slideIndex === i"}],key:t+s+n,class:"swipe-item absolute"},[i("img",{attrs:{src:t,alt:""}})])})),0)],1),t.isMobile?i("div",{staticClass:"arrow-left",on:{click:function(e){return t.decIndex(n)}}}):t._e(),t.isMobile?i("div",{staticClass:"arrow-right",on:{click:function(e){return t.addIndex(n)}}}):t._e()])])})),0)],1)])},g=[],h=i("75fc"),_=i("41d1"),v=i("2ef0"),x=i.n(v),b={name:"section2",data:function(){return{info:r["a"],isPC:o["b"],isMobile:o["a"],isTablet:o["c"],pageIndex:0,count:2,company_list:Object(h["a"])(_["c"])}},computed:{total:function(){return this.company_list.length},totalPage:function(){return Math.floor(this.total/this.count)+(this.total%this.count>0?1:0)||1},current_company_list:function(){return this.company_list.slice(this.pageIndex*this.count,this.count*(this.pageIndex+1))},pages:function(){return x.a.range(1,this.totalPage+1)}},methods:{init:function(){this.pageIndex=0,this.isPC?this.count=2:this.count=999},changePage:function(t){this.pageIndex=t},goTo:function(t,e){this.current_company_list[t].slideIndex=e},addIndex:function(t){this.current_company_list[t].slideIndex=this.current_company_list[t].slideIndex===this.current_company_list[t].imgs.length-1?0:this.current_company_list[t].slideIndex+1},decIndex:function(t){this.current_company_list[t].slideIndex=0===this.current_company_list[t].slideIndex?this.current_company_list[t].imgs.length-1:this.current_company_list[t].slideIndex-1}},mounted:function(){this.init()},watch:{},created:function(){}},C=b,I=(i("66e1"),Object(u["a"])(C,f,g,!1,null,"350a1726",null)),w=I.exports,y={name:"company",components:{Section1:p,Section2:w},data:function(){return{}},computed:{},mounted:function(){},methods:{},watch:{}},P=y,k=(i("8fab"),Object(u["a"])(P,n,s,!1,null,"66da0a43",null));e["default"]=k.exports}}]);
//# sourceMappingURL=company.9b5c5856.js.map