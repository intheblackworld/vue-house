(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["medias"],{1444:function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"bg"},[e("vue-lazy-component",{staticClass:"section",attrs:{id:"section1"}},[e("Section1")],1),e("vue-lazy-component",{staticClass:"section",attrs:{id:"section2"}},[e("Section2")],1)],1)},s=[],n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"section1"},[t.isPC?a("img",{staticClass:"bg-img",attrs:{src:e("f4e2"),alt:""}}):a("img",{staticClass:"bg-img",attrs:{src:e("6a39"),alt:""}}),t._m(0)])},o=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"box"},[e("div",{staticClass:"shin-lan-title-v shin-lan-title-v-m title",attrs:{"data-aos":"fade"}},[t._v("\n    影音"),e("span",{attrs:{"data-aos":"flip-right"}}),t._v("專區\n  ")])])}],c=e("ed08"),d=e("53d2"),l={name:"section1",data:function(){return{info:d["a"],isPC:c["b"],isMobile:c["a"],isTablet:c["c"]}},methods:{},mounted:function(){},created:function(){},computed:{}},r=l,u=(e("aa04"),e("2877")),f=Object(u["a"])(r,n,o,!1,null,"6b29910d",null),m=f.exports,h=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"section2"},[e("div",{staticClass:"container container1"},[e("transition-group",{staticClass:"item-list flex",attrs:{name:"slide-fade",mode:"out-in",tag:"div"}},t._l(t.current_media_list,(function(i){return e("div",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#container2"},expression:"{ element: `#container2` }"}],key:i.title+i.index,staticClass:"item",on:{click:function(e){t.handlePlay(i.index),t.isDialog=!0}}},[e("img",{staticClass:"video-img",attrs:{src:i.img,alt:""}}),e("div",{staticClass:"video-contant"},[e("div",{staticClass:"video-title",domProps:{innerHTML:t._s(i.title)}}),e("div",{staticClass:"video-hr"}),e("div",{staticClass:"video-desc",domProps:{innerHTML:t._s(i.desc)}})])])})),0),t.isMobile?e("div",{staticClass:"arrow-left",on:{click:t.prevPage}}):t._e(),t.isMobile?e("div",{staticClass:"arrow-right",on:{click:t.nextPage}}):t._e(),e("div",{staticClass:"head flex-c"},[t.isPC?e("div",{staticClass:"pages flex-ac"},t._l(t.pages,(function(i,a){return e("div",{key:"page-btn-"+a,staticClass:"page-btn flex-c",on:{click:function(i){return t.changePage(a)}}},[e("span",{class:t.pageIndex===a?"active":""})])})),0):t._e()])],1),t.isPC?e("div",{staticClass:"container container2",attrs:{id:"container2"}},[e("div",{staticClass:"video_box"},[e("div",{ref:"player",staticClass:"video-ifame",attrs:{id:"youtube-player-"+t.id}}),e("div",{staticClass:"video-title",domProps:{innerHTML:t._s(t.media_list[t.media_index].title)}}),e("div",{staticClass:"video-hr"}),e("div",{staticClass:"video-desc",domProps:{innerHTML:t._s(t.media_list[t.media_index].desc)}})])]):t._e(),t.isDialog&&t.isMobile?e("div",{staticClass:"video video-dialog"},[e("div",{staticClass:"mask",on:{click:function(i){t.isDialog=!1}}}),e("div",{staticClass:"video-bg"},[e("div",{staticClass:"video_box"},[e("iframe",{attrs:{title:"youtube",src:"https://www.youtube.com/embed/"+t.id,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])]),e("img",{staticClass:"close",attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTP////Pw8PLx8fLw8PLw8PPx8fHx8fLy8vLw8PXr6/Zeio0AAAALdFJOUwADRMS156s3KfgaAiHMOAAAAXtJREFUSMeFlr9qwzAQxnVZajoVLRLZTEMfoBAadywIt11t/AAGETqGhOzGoS/g0r20D1qRxLYsS/oy5Y/uk+/ud/eFnRoWecmcfTzdhX+n/Tf763bhAyJ7Z4l+DErQfdkw+izS0AGutiZY6JeABK2q8/XHMo0JhCXooUqvb/wSXNfXwIVXwjxBOmj5JLiqhzCh5+WkQzVG0bGYlVOscytIvG0cCWq/JjGn7md6YJlNQ5LsefKZfjsHA+cL6QQwdpvZidDevZKx1uZCZJtZ3okauaBVOQeRDmM5uco9tR+b2nPgSgxcjG1023uRGDiYA3KRCAn0EkGBXkKoOjgHC8OFna6nFsVOrvPILBou2tgoGkw6TxemXHTRdWA4iB+AV6CHNGk2UkXS5DqPFgqWGjULthsBA5GzoS19tUDYSzA4Zpzjo7dEw4vGX4IFYjiIryC0xHxr8MbGHy1SuIo5WObQDjgwFApZEnF9tiRkatAWobFCa4bmDv4evP4DsmNwZSA8CfQAAAAASUVORK5CYII="},on:{click:function(i){t.isDialog=!1}}})]):t._e()])},g=[],p=e("75fc"),v=e("41d1"),A=e("2ef0"),C=e.n(A),w={name:"section2",data:function(){return{info:d["a"],isPC:c["b"],isMobile:c["a"],isTablet:c["c"],pageIndex:0,count:2,media_list:Object(p["a"])(v["e"]),player:"",isDialog:!1,media_index:0}},computed:{total:function(){return this.media_list.length},totalPage:function(){return Math.floor(this.total/this.count)+(this.total%this.count>0?1:0)||1},current_media_list:function(){return this.media_list.slice(this.pageIndex*this.count,this.count*(this.pageIndex+1))},pages:function(){return C.a.range(1,this.totalPage+1)},id:function(){return this.media_list[this.media_index].id}},methods:{init:function(){this.pageIndex=0,this.isPC?this.count=2:this.count=1},changePage:function(t){this.pageIndex=t},nextPage:function(){this.pageIndex=this.pageIndex===this.total-1?0:this.pageIndex+1},prevPage:function(){this.pageIndex=0===this.pageIndex?this.total-1:this.pageIndex-1},handlePlay:function(t){this.media_index=t,this.isPC&&this.player.loadVideoById(this.id)},onPlayerReady:function(t){console.log("load"),t.target.playVideo()},loadVideo:function(){this.player=new window.YT.Player("youtube-player-".concat(this.id),{videoId:this.id,width:"100%",height:"100%",playerVars:{autoplay:1,loop:1,controls:0,showinfo:0,autohide:1,modestbranding:1,mute:0,suggestedQuality:"default",iv_load_policy:3},events:{onReady:this.onPlayerReady,onStateChange:this.onPlayerStateChange}})},onPlayerStateChange:function(t){t.data===window.YT.PlayerState.ENDED&&this.player.loadVideoById(this.id)}},mounted:function(){var t=this;this.init(),setTimeout((function(){t.isMobile||(window.YT?t.loadVideo():window.onYouTubeIframeAPIReady=t.loadVideo)}),2500)},watch:{},created:function(){var t=document.createElement("script");t.src="https://www.youtube.com/iframe_api";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(t,i)}},b=w,x=(e("84e7"),Object(u["a"])(b,h,g,!1,null,"39319fa6",null)),y=x.exports,_={name:"medias",components:{Section1:m,Section2:y},data:function(){return{}},computed:{},mounted:function(){},methods:{},watch:{}},P=_,I=(e("5f10"),Object(u["a"])(P,a,s,!1,null,"2c01ba02",null));i["default"]=I.exports},"3a25":function(t,i,e){},"5f10":function(t,i,e){"use strict";var a=e("6590"),s=e.n(a);s.a},6590:function(t,i,e){},"6a39":function(t,i,e){t.exports=e.p+"img/topbg.9f304a24.jpg"},"84e7":function(t,i,e){"use strict";var a=e("3a25"),s=e.n(a);s.a},"9fdd":function(t,i,e){},aa04:function(t,i,e){"use strict";var a=e("9fdd"),s=e.n(a);s.a},f4e2:function(t,i,e){t.exports=e.p+"img/topbg.e0f885f9.jpg"}}]);
//# sourceMappingURL=medias.6c970c2b.js.map