(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["abou_ust~contacts"],{"0a49":function(t,e,a){var n=a("9b43"),i=a("626a"),o=a("4bf8"),r=a("9def"),c=a("cd1c");t.exports=function(t,e){var a=1==t,s=2==t,l=3==t,d=4==t,u=6==t,f=5==t||u,p=e||c;return function(e,c,h){for(var m,v,g=o(e),y=i(g),_=n(c,h,3),b=r(y.length),w=0,x=a?p(e,b):s?p(e,0):void 0;b>w;w++)if((f||w in y)&&(m=y[w],v=_(m,w,g),t))if(a)x[w]=v;else if(v)switch(t){case 3:return!0;case 5:return m;case 6:return w;case 2:x.push(m)}else if(d)return!1;return u?-1:l||d?d:x}}},1169:function(t,e,a){var n=a("2d95");t.exports=Array.isArray||function(t){return"Array"==n(t)}},"386d":function(t,e,a){"use strict";var n=a("cb7c"),i=a("83a1"),o=a("5f1b");a("214f")("search",1,(function(t,e,a,r){return[function(a){var n=t(this),i=void 0==a?void 0:a[e];return void 0!==i?i.call(a,n):new RegExp(a)[e](String(n))},function(t){var e=r(a,t,this);if(e.done)return e.value;var c=n(t),s=String(this),l=c.lastIndex;i(l,0)||(c.lastIndex=0);var d=o(c,s);return i(c.lastIndex,l)||(c.lastIndex=l),null===d?-1:d.index}]}))},7514:function(t,e,a){"use strict";var n=a("5ca1"),i=a("0a49")(5),o="find",r=!0;o in[]&&Array(1)[o]((function(){r=!1})),n(n.P+n.F*r,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(o)},"76b4":function(t,e,a){t.exports=a.p+"img/logo.370b47dd.png"},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},ba1d:function(t,e,a){"use strict";var n=a("de11"),i=a.n(n);i.a},cd1c:function(t,e,a){var n=a("e853");t.exports=function(t,e){return new(n(t))(e)}},de11:function(t,e,a){},e853:function(t,e,a){var n=a("d3f4"),i=a("1169"),o=a("2b4c")("species");t.exports=function(t){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)||(e=void 0),n(e)&&(e=e[o],null===e&&(e=void 0))),void 0===e?Array:e}},fe6c:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact",attrs:{id:"contact"}},[a("Order")],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"order-bg"},[n("div",{staticClass:"order"},[t._m(0),n("div",{staticClass:"order-desc",attrs:{"data-aos":"fade","data-aos-delay":"0"},domProps:{innerHTML:t._s(t.order.desc)}}),n("div",{staticClass:"order-hint",attrs:{"data-aos":"fade","data-aos-delay":"0"}},[t._v("* 每個欄位都是必填欄位")]),n("div",{staticClass:"form"},[n("div",{staticClass:"group"},[n("div",{staticClass:"row",attrs:{"data-aos":"fade-down","data-aos-delay":"100"}},[n("el-input",{attrs:{id:"form-name",placeholder:"姓名 (必填)"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),n("div",{staticClass:"row",attrs:{"data-aos":"fade-down","data-aos-delay":"200"}},[n("el-input",{attrs:{id:"form-phone",placeholder:"電話 (必填)"},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),n("div",{staticClass:"row",attrs:{"data-aos":"fade-down","data-aos-delay":"200"}},[n("el-input",{attrs:{id:"form-phone",placeholder:"想了解的建案"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}})],1),n("div",{staticClass:"row",attrs:{"data-aos":"fade-down","data-aos-delay":"300"}},[n("el-input",{attrs:{type:"textarea",rows:5,placeholder:"請輸入您的留言，將有專人為您服務"},model:{value:t.form.msg,callback:function(e){t.$set(t.form,"msg",e)},expression:"form.msg"}})],1),n("div",{staticClass:"control",attrs:{"data-aos":"fade-down","data-aos-delay":"500"}},[t._m(1),n("el-checkbox",{model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[n("div",[t._v("\n              本人知悉並同意\n              "),n("span",{on:{click:t.showPolicyDialog}},[t._v("「個資告知事項聲明」")]),t._v("\n              內容\n            ")])])],1),n("el-button",{staticClass:"form-submit flex-c",attrs:{type:"primary",disabled:!t.checked,loading:t.isSubmit},on:{click:t.submit}},[t._v("確認送出")])],1),n("div",{staticClass:"group"},[n("iframe",{staticClass:"google-map",staticStyle:{border:"0"},attrs:{title:"googlemap",src:t.googleSrc,width:"100%",height:"535",frameborder:"0",allowfullscreen:"","data-aos":"fade-down","data-aos-delay":"300"}}),n("div",{staticClass:"control",attrs:{"data-aos":"fade-down","data-aos-delay":"500"}},[n("img",{staticClass:"logo",attrs:{src:a("76b4"),alt:""}}),n("div",{staticClass:"control-desc"},[n("p",[t._v("\n              地址｜"+t._s(t.info.address)),n("br"),t._v("\n              電話｜"+t._s(t.info.phone)),n("br"),t._v("\n              傳真｜"+t._s(t.info.fax)),n("br"),t._v("\n              E-mail｜"+t._s(t.info.email)),n("br"),t._v("\n              歡迎來電或來信洽詢\n            ")])])])])]),n("Loading",{attrs:{loading:t.isSubmit,isOpacity:!0}})],1),n("PolicyDialog",{attrs:{policyVisible:t.policyVisible}})],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shin-lan-title-h shin-lan-title-h-m title gold",attrs:{"data-aos":"fade","data-aos-delay":"0"}},[t._v("\n      聯絡"),a("span",{attrs:{"data-aos":"flip-right"}}),t._v("我們\n    ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"control-desc"},[a("p",[t._v("您所登錄的個人資料將作為以下用途")]),a("p",[t._v("\n              (一)本網站所載之相關事項通知"),a("br"),t._v("\n              (二)客戶管理與服務"),a("br"),t._v("\n              (三)本公司行銷業務之推廣\n            ")])])}],c=(a("386d"),a("7f7f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"隱私權聲明",visible:t.policyVisible,width:"600px",fullscreen:"",modal:!1},on:{"update:visible":function(e){t.policyVisible=e}}},[a("div",{staticClass:"policy-dialog-content"},[a("div",{staticClass:"subtitle"},[t._v("非常歡迎您光臨「"+t._s(t.info.caseName)+"網站」（以下簡稱本網站），為了讓您能夠安心使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：")]),a("h3",[t._v("一、隱私權保護政策的適用範圍")]),a("p",[t._v("隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。")]),a("h3",[t._v("二、個人資料的蒐集、處理及利用方式")]),a("ul",[a("li",[t._v("\n        當您造訪本網站或使用本網站所提供之功能服務時，\n        我們將視該服務功能性質，請您提供必要的個人資料，\n        並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，\n        本網站不會將個人資料用於其他用途。\n      ")]),a("li",[t._v("本網站在您使用服務信箱、問卷調查等互動性功能時，會保留您所提供的姓名、電子郵件地址、聯絡方式及使用時間等。")]),a("li",[t._v("\n        於一般瀏覽時，伺服器會自行記錄相關行徑，\n        包括您使用連線設備的IP位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據，此記錄為內部應用，決不對外公佈。\n      ")]),a("li",[t._v("為提供精確的服務，我們會將收集的問卷調查內容進行統計與分析，分析結果之統計數據或說明文字呈現，除供內部研究外，我們會視需要公佈統計數據及說明文字，但不涉及特定個人之資料。")])]),a("h3",[t._v("三、資料之保護")]),a("ul",[a("li",[t._v("\n        本網站主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，\n        加以保護網站及您的個人資料採用嚴格的保護措施， 只由經過授權的人員才能接觸您的個人資料，\n        相關處理人員皆簽有保密合約，如有違反保密義務者， 將會受到相關的法律處分。\n      ")]),a("li",[t._v("如因業務需要有必要委託其他單位提供服務時，本網站亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。")])]),a("h3",[t._v("四、網站對外的相關連結")]),a("p",[t._v("本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。")]),a("h3",[t._v("五、與第三人共用個人資料之政策")]),a("p",[t._v("本網站絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關，但有法律依據或合約義務者，不在此限。")]),a("p",[t._v("前項但書之情形包括不限於：")]),a("ul",[a("li",[t._v("經由您書面同意。")]),a("li",[t._v("法律明文規定。")]),a("li",[t._v("為免除您生命、身體、自由或財產上之危險。")]),a("li",[t._v("與公務機關或學術研究機構合作，基於公共利益為統計或學術研究而有必要，且資料經過提供者處理或蒐集著依其揭露方式無從識別特定之當事人。")]),a("li",[t._v("當您在網站的行為，違反服務條款或可能損害或妨礙網站與其他使用者權益或導致任何人遭受損害時，經網站管理單位研析揭露您的個人資料是為了辨識、聯絡或採取法律行動所必要者。")]),a("li",[t._v("有利於您的權益。")]),a("li",[t._v("本網站委託廠商協助蒐集、處理或利用您的個人資料時，將對委外廠商或個人善盡監督管理之責。")])]),a("h3",[t._v("六、Cookie之使用")]),a("p",[t._v("\n      為了提供您最佳的服務， 本網站會在您的電腦中放置並取用我們的Cookie，\n      若您不願接受Cookie的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕Cookie的寫入，但可能會導至網站某些功能無法正常執行\n      。\n    ")]),a("h3",[t._v("七、隱私權保護政策之修正")]),a("p",[t._v("本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於網站上。")])])])}),s=[],l=a("53d2"),d={name:"policyDialog",components:{},data:function(){return{info:l["a"]}},props:["policyVisible"]},u=d,f=a("2877"),p=Object(f["a"])(u,c,s,!1,null,null,null),h=p.exports,m=(a("7514"),[["臺北市","中正區","大同區","中山區","松山區","大安區","萬華區","信義區","士林區","北投區","內湖區","南港區","文山區"],["基隆市","仁愛區","信義區","中正區","中山區","安樂區","暖暖區","七堵區"],["新北市","萬里區","金山區","板橋區","汐止區","深坑區","石碇區","瑞芳區","平溪區","雙溪區","貢寮區","新店區","坪林區","烏來區","永和區","中和區","土城區","三峽區","樹林區","鶯歌區","三重區","新莊區","泰山區","林口區","蘆洲區","五股區","八里區","淡水區","三芝區","石門區"],["宜蘭縣","宜蘭","頭城","礁溪","壯圍","員山","羅東","三星","大同","五結","冬山","蘇澳","南澳","釣魚臺列嶼"],["新竹市","新竹市"],["新竹縣","竹北","湖口","新豐","新埔","關西","芎林","寶山","竹東","五峰","橫山","尖石","北埔","峨眉"],["桃園市","中壢區","平鎮區","龍潭區","楊梅區","新屋區","觀音區","桃園區","龜山區","八德區","大溪區","復興區","大園區","蘆竹區"],["苗栗縣","竹南","頭份","三灣","南庄","獅潭","後龍","通霄","苑裡","苗栗","造橋","頭屋","公館","大湖","泰安","銅鑼","三義","西湖","卓蘭"],["臺中市","中區","東區","南區","西區","北區","北屯區","西屯區","南屯區","太平區","大里區","霧峰區","烏日區","豐原區","后里區","石岡區","東勢區","和平區","新社區","潭子區","大雅區","神岡區","大肚區","沙鹿區","龍井區","梧棲區","清水區","大甲區","外埔區","大安區"],["彰化縣","彰化","芬園","花壇","秀水","鹿港","福興","線西","和美","伸港","員林","社頭","永靖","埔心","溪湖","大村","埔鹽","田中","北斗","田尾","埤頭","溪州","竹塘","二林","大城","芳苑","二水"],["南投縣","南投","中寮","草屯","國姓","埔里","仁愛","名間","集集","水里","魚池","信義","竹山","鹿谷"],["嘉義市","嘉義市"],["嘉義縣","番路","梅山","竹崎","阿里山","中埔","大埔","水上","鹿草","太保","朴子","六腳","新港","民雄","大林","溪口","義竹","布袋","東石"],["雲林縣","斗南","大埤","虎尾","土庫","褒忠","東勢","臺西","崙背","麥寮","斗六","林內","古坑","莿桐","西螺","二崙","北港","水林","口湖","四湖","元長"],["臺南市","中西區","東區","南區","北區","安平區","安南區","永康區","歸仁區","新化區","左鎮區","玉井區","楠西區","南化區","仁德區","關廟區","龍崎區","官田區","麻豆區","佳里區","西港區","七股區","將軍區","學甲區","北門區","新營區","後壁區","白河區","東山區","六甲區","下營區","柳營區","鹽水區","善化區","大內區","山上區","新市區","安定區"],["高雄市","新興區","前金區","苓雅區","鹽埕區","鼓山區","旗津區","前鎮區","三民區","楠梓區","小港區","左營區","仁武區","大社區","岡山區","路竹區","阿蓮區","田寮區","燕巢區","橋頭區","梓官區","彌陀區","永安區","湖內區","鳳山區","大寮區","林園區","鳥松區","大樹區","旗山區","美濃區","六龜區","內門區","杉林區","甲仙區","桃源區","那瑪夏區","茂林區","茄萣區"],["南海諸島","東沙","南沙"],["澎湖縣","馬公","西嶼","望安","七美","白沙","湖西"],["屏東縣","屏東","三地門","霧臺","瑪家","九如","里港","高樹","鹽埔","長治","麟洛","竹田","內埔","萬丹","潮州","泰武","來義","萬巒","崁頂","新埤","南州","林邊","東港","琉球","佳冬","新園","枋寮","枋山","春日","獅子","車城","牡丹","恆春","滿州"],["臺東縣","臺東","綠島","蘭嶼","延平","卑南","鹿野","關山","海端","池上","東河","成功","長濱","太麻里","金峰","大武","達仁"],["花蓮縣","花蓮","新城","秀林","吉安","壽豐","鳳林","光復","豐濱","瑞穗","萬榮","玉里","卓溪","富里"],["金門縣","金沙","金湖","金寧","金城","烈嶼","烏坵"],["連江縣","南竿","北竿","莒光","東引"],["香港"],["中國"],["新加坡"],["馬來西亞"],["日本"],["韓國"],["美國"],["加拿大"],["中南美洲"],["歐洲"],["其他"]]),v=m.map((function(t){var e=t[0];return{label:e,value:e}})),g=function(t){if(0===t.length)return[];var e=function(e){return e[0]===t};return m.find(e).slice(1).map((function(t){return{value:t,label:t}}))},y=a("ed08"),_=a("3a5e");function b(){return b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},b.apply(this,arguments)}var w=function(){var t=!1,e=[],a=function(a){if(!t){t=!0;for(var n=0,i=e.length;n<i;n++)e[n](a)}},n=function(a){t?a():e.push(a)},i={resolved:function(){return t},resolve:a,promise:{then:n}};return i},x=Object.prototype.hasOwnProperty;function S(){var t=w();return{notify:function(){t.resolve()},wait:function(){return t.promise},render:function(t,e,a){this.wait().then((function(){a(window.grecaptcha.render(t,e))}))},reset:function(t){"undefined"!==typeof t&&(this.assertLoaded(),this.wait().then((function(){return window.grecaptcha.reset(t)})))},execute:function(t){"undefined"!==typeof t&&(this.assertLoaded(),this.wait().then((function(){return window.grecaptcha.execute(t)})))},checkRecaptchaLoad:function(){x.call(window,"grecaptcha")&&x.call(window.grecaptcha,"render")&&this.notify()},assertLoaded:function(){if(!t.resolved())throw new Error("ReCAPTCHA has not been loaded")}}}var C=S();"undefined"!==typeof window&&(window.vueRecaptchaApiLoaded=C.notify);var k={name:"VueRecaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String},badge:{type:String},type:{type:String},size:{type:String},tabindex:{type:String},loadRecaptchaScript:{type:Boolean,default:!1},recaptchaScriptId:{type:String,default:"__RECAPTCHA_SCRIPT"},recaptchaHost:{type:String,default:"www.google.com"},language:{type:String,default:""}},beforeMount:function(){if(this.loadRecaptchaScript&&!document.getElementById(this.recaptchaScriptId)){var t=document.createElement("script");t.id=this.recaptchaScriptId,t.src="https://"+this.recaptchaHost+"/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl="+this.language,t.async=!0,t.defer=!0,document.head.appendChild(t)}},mounted:function(){var t=this;C.checkRecaptchaLoad();var e=b({},this.$props,{callback:this.emitVerify,"expired-callback":this.emitExpired,"error-callback":this.emitError}),a=this.$slots["default"]?this.$el.children[0]:this.$el;C.render(a,e,(function(e){t.$widgetId=e,t.$emit("render",e)}))},methods:{reset:function(){C.reset(this.$widgetId)},execute:function(){C.execute(this.$widgetId)},emitVerify:function(t){this.$emit("verify",t)},emitExpired:function(){this.$emit("expired")},emitError:function(){this.$emit("error")}},render:function(t){return t("div",{},this.$slots["default"])}},$=k,E={name:"order",components:{PolicyDialog:h,Loading:_["a"],VueRecaptcha:$},data:function(){return{cityList:v,info:l["a"],order:l["a"].order,isMobile:y["a"],googleSrc:l["a"].googleSrc,form:{name:"",phone:"",email:"",city:"",area:"",msg:"",time_start:"",time_end:""},checked:!1,isSubmit:!1,policyVisible:!1,showValidateDialog:!1}},computed:{areaList:function(){return g(this.form.city)}},methods:{showPolicyDialog:function(){this.policyVisible=!0},hintSuccess:function(){this.$notify({title:"信件已送出"})},alertValidate:function(){var t=this.$createElement;this.$notify({title:"請填寫必填欄位",message:t("i",{style:"color: #82191d"},"「姓名、手機」是必填欄位")})},submit:function(){var t=this;if(console.log(123123),!this.isSubmit&&this.checked){if(this.isSubmit=!0,!this.form.name||!this.form.phone)return this.alertValidate(),void(this.isSubmit=!1);var e=new URLSearchParams(window.location.search),a=e.get("utm_source"),n=e.get("utm_medium"),i=e.get("utm_content"),o=e.get("utm_campaign"),r=new FormData;r.append("name",this.form.name),r.append("phone",this.form.phone),r.append("email",this.form.email),r.append("msg",this.form.msg),r.append("type",this.form.type),r.append("city",this.form.city),r.append("area",this.form.area),r.append("utm_source",a),r.append("utm_medium",n),r.append("utm_content",i),r.append("utm_campaign",o);var c=new Date,s=c.getFullYear(),d=c.getMonth()+1,u=c.getDate(),f=c.getHours(),p=c.getMinutes(),h=c.getSeconds(),m="".concat(s,"-").concat(d,"-").concat(u," ").concat(f,":").concat(p,":").concat(h);fetch("https://script.google.com/macros/s/AKfycbyQKCOhxPqCrLXWdxsAaAH06Zwz_p6mZ5swK80USQ/exec?name=".concat(this.form.name,"&phone=").concat(this.form.phone,"&email=").concat(this.form.email,"&cityarea=").concat(this.form.city).concat(this.form.area,"&msg=").concat(this.form.msg,"&utm_source=").concat(a,"&utm_medium=").concat(n,"&utm_content=").concat(i,"&utm_campaign=").concat(o,"&date=").concat(m,"&campaign_name=").concat(l["a"].caseName,"\n      "),{method:"GET"}),fetch("contact-form.php",{method:"POST",body:r}).then((function(e){t.isSubmit=!1,200===e.status&&(t.hintSuccess(),setTimeout((function(){window.location.href="formThanks"}),3e3))}))}}}},A=E,P=(a("ba1d"),Object(f["a"])(A,o,r,!1,null,"072df352",null)),L=P.exports,O={name:"contactSection",components:{Order:L},methods:{}},V=O,I=Object(f["a"])(V,n,i,!1,null,"3d5657ea",null);e["a"]=I.exports}}]);
//# sourceMappingURL=abou_ust~contacts.44adaa54.js.map