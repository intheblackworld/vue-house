(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"1e62":function(t,e,a){},"2fdb":function(t,e,a){"use strict";var s=a("5ca1"),i=a("d2c8"),n="includes";s(s.P+s.F*a("5147")(n),"String",{includes:function(t){return!!~i(this,t,n).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},5147:function(t,e,a){var s=a("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[s]=!1,!"/./"[t](e)}catch(i){}}return!0}},"575a":function(t,e,a){"use strict";var s=a("1e62"),i=a.n(s);i.a},"5cbc":function(t,e,a){t.exports=a.p+"img/topbg.e0971db3.jpg"},6762:function(t,e,a){"use strict";var s=a("5ca1"),i=a("c366")(!0);s(s.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")("includes")},"6a96":function(t,e,a){t.exports=a.p+"img/topbg.9aa862f4.jpg"},"6be7":function(t,e,a){"use strict";var s=a("782e"),i=a.n(s);i.a},"6d7d":function(t,e,a){t.exports=a.p+"img/img1.7e45d708.jpg"},"782e":function(t,e,a){},a9a6:function(t,e,a){},be94:function(t,e,a){"use strict";var s=a("a9a6"),i=a.n(s);i.a},c6f7:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg"},[a("vue-lazy-component",{staticClass:"section",attrs:{id:"section1"}},[a("Section1")],1),a("vue-lazy-component",{staticClass:"section",attrs:{id:"section2"}},[a("Section2")],1)],1)},i=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section1"},[t.isPC?s("img",{staticClass:"bg-img",attrs:{src:a("5cbc"),alt:""}}):s("img",{staticClass:"bg-img",attrs:{src:a("6a96"),alt:""}}),t._m(0)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("div",{staticClass:"shin-lan-title-v shin-lan-title-v-m title",attrs:{"data-aos":"fade"}},[t._v("\n    會員"),a("span",{attrs:{"data-aos":"flip-right"}}),t._v("專區\n  ")])])}],r=a("ed08"),c=a("53d2"),l={name:"section1",data:function(){return{info:c["a"],isPC:r["b"],isMobile:r["a"],isTablet:r["c"]}},methods:{},mounted:function(){},created:function(){},computed:{}},u=l,d=(a("6be7"),a("2877")),f=Object(d["a"])(u,n,o,!1,null,"168ff10a",null),m=f.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section2"},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"form flex-as flex-jb wrap"},[a("div",{staticClass:"group"},[a("div",{staticClass:"row flex-ac flex-jb",attrs:{"data-aos":"fade-down","data-aos-delay":"100"}},[a("div",{staticClass:"label"},[t._v("\n            帳　號\n          ")]),a("el-input",{attrs:{id:"form-email",placeholder:"請輸入Email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),a("div",{staticClass:"row flex-ac flex-jb",attrs:{"data-aos":"fade-down","data-aos-delay":"200"}},[a("div",{staticClass:"label"},[t._v("\n            密　碼\n          ")]),a("el-input",{attrs:{id:"form-phone",placeholder:"請輸入密碼",type:"password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),a("el-button",{staticClass:"form-submit flex-c",attrs:{type:"primary",loading:t.isSubmit},on:{click:t.login}},[t._v("確認送出")]),t.isPC?a("div",{staticClass:"hint"},[t._v("\n          如需有加入會員需求,歡迎聯絡專員,由專人為您服務\n        ")]):t._e(),t.isMobile?a("div",{staticClass:"hint"},[t._v("\n          如需有加入會員需求,"),a("br"),t._v("歡迎聯絡專員,由專人為您服務\n        ")]):t._e()],1),t._m(1)])])])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shin-lan-title-h shin-lan-title-h-m title gold",attrs:{"data-aos":"fade","data-aos-delay":"0"}},[t._v("\n      會員"),a("span",{attrs:{"data-aos":"flip-right"}}),t._v("登入\n    ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"group"},[s("img",{staticClass:"img1",attrs:{src:a("6d7d"),alt:""}})])}],h=(a("6762"),a("2fdb"),a("2ef0"),a("f96b")),b={name:"section2",data:function(){return{info:c["a"],isPC:r["b"],isMobile:r["a"],isTablet:r["c"],isSubmit:!1,form:{email:"",password:""}}},computed:{},methods:{login:function(){var t=this;if(!this.form.email||!this.form.password)return this.alertValidate(),void(this.isSubmit=!1);Object(h["f"])(this.form).then(function(e){t.$store.commit("user/setInfo",{key:"token",value:e.data.token}),t.$router.push("/member")}).catch(function(t){t.error_message.includes("信箱")?window.alert("帳號密碼有誤，請重新輸入"):window.alert(t.error_message)})},alertValidate:function(){var t=this.$createElement;this.$notify({title:"請填寫必填欄位",message:t("i",{style:"color: #82191d"},"「帳號、密碼」是必填欄位")})}},mounted:function(){},watch:{},created:function(){}},g=b,_=(a("575a"),Object(d["a"])(g,p,v,!1,null,"1de6ae11",null)),C=_.exports,w={name:"login",components:{Section1:m,Section2:C},data:function(){return{}},computed:{},mounted:function(){this.$store.getters["user/isLogin"]&&this.$router.push("/member")},methods:{},watch:{}},x=w,y=(a("be94"),Object(d["a"])(x,s,i,!1,null,"76861fd0",null));e["default"]=y.exports},d2c8:function(t,e,a){var s=a("aae3"),i=a("be13");t.exports=function(t,e,a){if(s(e))throw TypeError("String#"+a+" doesn't accept regex!");return String(i(t))}}}]);
//# sourceMappingURL=login.845da6cc.js.map