(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesA/store/store","components/uni-editor/uni-editor"],{"42e3":function(t,n,e){},"4f8e":function(t,n,e){},7675:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(e("ebaf"));function i(t){return t&&t.__esModule?t:{default:t}}var c={data:function(){return{readOnly:!1,formats:{},editorCtx:null,url:this.$ctx,html:""}},methods:{readOnlyChange:function(){this.readOnly=!this.readOnly},onEditorReady:function(){var n=this;t.createSelectorQuery().in(this).select("#editor").context(function(t){n.editorCtx=t.context,console.log(t)}).exec()},undo:function(){this.editorCtx.undo()},redo:function(){this.editorCtx.redo()},format:function(t){var n=t.target.dataset,e=n.name,o=n.value;e&&this.editorCtx.format(e,o)},onStatusChange:function(t){var n=t.detail;this.formats=n},insertDivider:function(){this.editorCtx.insertDivider({success:function(){console.log("insert divider success")}})},clear:function(){this.editorCtx.clear({success:function(t){console.log("clear success")}})},removeFormat:function(){this.editorCtx.removeFormat()},insertDate:function(){var t=new Date,n="".concat(t.getFullYear(),"/").concat(t.getMonth()+1,"/").concat(t.getDate());this.editorCtx.insertText({text:n})},insertImage:function(){var n=this;t.chooseImage({count:1,success:function(t){n.uploadImage(t.tempFilePaths[0]).then(function(t){console.log(t),n.editorCtx.insertImage({src:o.default.apiUrl+t,alt:"图像",width:"100%",height:"auto",success:function(){console.log("insert image success")}})})}})},uploadImage:function(n){var e=this;return new Promise(function(i,c){var a={thumb_mode:1,fileSingleSizeLimit:10485760,fileSizeLimit:"10MB",originalName:"ceshi.jpg",token:"TwfyW3Xe1tblRSns91567764332116"};e.uploadTask=t.uploadFile({url:"".concat(o.default.apiUrl,"/jsp/api/grem/doUploadFile.jsp"),filePath:n,name:"file",formData:a,success:function(t){var n=JSON.parse(t.data),e=n.data;console.log("路劲",e[0].relativePath),i(e[0].relativePath)},fail:function(){c("网络链接错误")}})})},handleInput:function(t){var n=t.detail,e=n.html;n.text,n.delta;this.html=e,console.log(e)}},onLoad:function(){t.loadFontFace({family:"Pacifico",source:'url("https://sungd.github.io/Pacifico.ttf")'})}};n.default=c}).call(this,e("543d")["default"])},"8a4c":function(t,n,e){"use strict";var o=e("4f8e"),i=e.n(o);i.a},a59e:function(t,n,e){"use strict";e.r(n);var o=e("e8eb"),i=e("c767");for(var c in i)"default"!==c&&function(t){e.d(n,t,function(){return i[t]})}(c);e("e998");var a,r=e("f0c5"),u=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);n["default"]=u.exports},b0f5:function(t,n,e){"use strict";var o={"uni-popup":()=>e.e("components/uni-popup/uni-popup").then(e.bind(null,"4a96"))},i=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"b",function(){return i}),e.d(n,"c",function(){return c}),e.d(n,"a",function(){return o})},bd20:function(t,n,e){"use strict";e.r(n);var o=e("b0f5"),i=e("c296");for(var c in i)"default"!==c&&function(t){e.d(n,t,function(){return i[t]})}(c);e("8a4c");var a,r=e("f0c5"),u=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);n["default"]=u.exports},c296:function(t,n,e){"use strict";e.r(n);var o=e("d5aa"),i=e.n(o);for(var c in o)"default"!==c&&function(t){e.d(n,t,function(){return o[t]})}(c);n["default"]=i.a},c767:function(t,n,e){"use strict";e.r(n);var o=e("7675"),i=e.n(o);for(var c in o)"default"!==c&&function(t){e.d(n,t,function(){return o[t]})}(c);n["default"]=i.a},d375:function(t,n,e){"use strict";(function(t){e("ced0"),e("921b");o(e("66fd"));var n=o(e("bd20"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},d5aa:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;o(e("a59e"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(n){c(t,n,e[n])})}return t}function c(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var a=function(){return e.e("components/mix-list-cell").then(e.bind(null,"5db4"))},r=function(){return e.e("components/uniPop").then(e.bind(null,"33b1"))},u=function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"4a96"))},s=function(){return e.e("components/uni-badge/uni-badge").then(e.bind(null,"63a6"))},l={data:function(){return{userType:!0,coverTransform:"translateY(0px)",coverTransition:"0s",moving:!1,navList:[],loginCode:"",mobile:t.getStorageSync("mobile"),inviterCode:"",ctx:this.$ctx,userInfo:t.getStorageSync("userInfo")||null,cjUser:t.getStorageSync("cjUser")||null,orderCount:{},couponCount:{},companyInfo:{},companyUser:{}}},components:{listCell:a,uniPop:r,uniPopup:u,uniBadge:s},methods:{navTo:function(n){t.navigateTo({url:n})},getCount:function(){var t=this;this.$getJson("/api/v3/my/store/collectList.jsp",{pageNumber:1},"POST",function(t){}),this.$getJson("/api/v3/my/order/statics.jsp",{},"POST",function(n){console.log(n),t.orderCount=n.data}),this.$getJson("/api/v3/my/coupon/statics.jsp",{},"POST",function(n){console.log(n),t.couponCount=n.data})},conect:function(){wx.makePhoneCall({phoneNumber:"400-1667600"})},getData:function(){var t=this;this.$getJson("/api/v2/vue/sqPlus/company/companyInfo.jsp",{data:JSON.stringify({companyId:202})},"POST",function(n){t.companyInfo=n.data.cjCompany,t.companyUser=n.data.cjCompany.cjUser,t.companyInfo=i({},n.data.cjCompany,{desc:dealRich(n.data.cjCompany.desc)}),console.log(t.companyInfo,"companyInfo")})}},onShow:function(){var n=this;this.$refs.popup.close(),this.mobile=t.getStorageSync("mobile"),this.userInfo=t.getStorageSync("userInfo"),this.cjUser=t.getStorageSync("cjUser"),console.log("this.cjUser",this.cjUser),this.getCount(),this.$getJson("/api/v2/vue/stPlusShop/common/getUserInfo.jsp",{data:JSON.stringify({mobile:t.getStorageSync("mobile"),companyId:t.getStorageSync("companyId")})},"POST",function(e){t.setStorageSync("cjUser",e.data),n.cjUser=t.getStorageSync("cjUser")}),this.$getJson("/api/v2/vue/stPlus/company/companyList.jsp",{},"POST",function(t){console.log(t,"companyList")})}};n.default=l}).call(this,e("543d")["default"])},e8eb:function(t,n,e){"use strict";var o,i=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"b",function(){return i}),e.d(n,"c",function(){return c}),e.d(n,"a",function(){return o})},e998:function(t,n,e){"use strict";var o=e("42e3"),i=e.n(o);i.a}},[["d375","common/runtime","common/vendor"]]]);