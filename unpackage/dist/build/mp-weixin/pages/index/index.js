(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"02e0":function(e,n,t){"use strict";(function(e){t("ced0");o(t("66fd"));var n=o(t("a44f"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},2894:function(e,n,t){"use strict";var o={uniPopup:function(){return t.e("components/uni-popup/uni-popup").then(t.bind(null,"4a96"))},uniLoadMore:function(){return t.e("components/uni-load-more/uni-load-more").then(t.bind(null,"b781"))}},a=function(){var e=this,n=e.$createElement;e._self._c},i=[];t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return o}))},3353:function(e,n,t){"use strict";t.r(n);var o=t("af95"),a=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=a.a},"42ef":function(e,n,t){},a435:function(e,n,t){"use strict";var o=t("42ef"),a=t.n(o);a.a},a44f:function(e,n,t){"use strict";t.r(n);var o=t("2894"),a=t("3353");for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);t("a435");var r,c=t("f0c5"),s=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);n["default"]=s.exports},af95:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t("4795"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,o,a,i,r){try{var c=e[i](r),s=c.value}catch(u){return void t(u)}c.done?n(s):Promise.resolve(s).then(o,a)}function r(e){return function(){var n=this,t=arguments;return new Promise((function(o,a){var r=e.apply(n,t);function c(e){i(r,o,a,c,s,"next",e)}function s(e){i(r,o,a,c,s,"throw",e)}c(void 0)}))}}var c=function(){t.e("components/uniPop").then(function(){return resolve(t("33b1"))}.bind(null,t)).catch(t.oe)},s=function(){t.e("components/uni-popup/uni-popup").then(function(){return resolve(t("4a96"))}.bind(null,t)).catch(t.oe)},u=function(){t.e("components/uni-load-more/uni-load-more").then(function(){return resolve(t("b781"))}.bind(null,t)).catch(t.oe)},d={components:{uniLoadMore:u,uniPop:c,uniPopup:s},data:function(){return{titleNViewBackground:"rgb(205, 215, 218)",posterImgCurrent:0,headerPosition:"fixed",posterImgLength:0,posterImgList:[],goodsList:[],url:this.$ctx,pageNumber:1,loadingType:"more",companyId:e.getStorageSync("companyId"),cheapPurchaseCompanyId:e.getStorageSync("cheapPurchaseCompanyId"),classification:e.getStorageSync("classification")}},onPullDownRefresh:function(){this.loadDataTop(),this.pageNumber=1,this.loadDataList("refresh")},onLoad:function(){console.log("this.companyId",e.getStorageSync("companyId")),this.loadDataTop(),this.loadDataList()},onPageScroll:function(e){e.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onReachBottom:function(){this.loadDataList()},methods:{addCart:function(n){var t=this;if(!e.getStorageSync("mobile"))return this.login(),this.$refs.popup.open(),void this.$refs.popup.clickClose(!0);var o={data:JSON.stringify({goodsId:n.id,memberId:e.getStorageSync("userInfo").id,cheapPurchaseCompanyId:e.getStorageSync("cheapPurchaseCompanyId")})};this.$getJson("/api/v2/vue/ydd/cart/addCart.jsp",o,"POST",(function(n){console.log("----res------------",n),1==n.data?(e.showToast({title:"加入成功",icon:"none"}),t.cartCount+=1):e.showToast({title:n.message,icon:"none"})}))},login:function(){var e=this;this.mobile||wx.login({success:function(n){console.info("res",n),e.loginCode=n.code,e.$refs.uniPop.show({title:"登录",content:"是否同意获取手机号？",shade:!0,shadeClose:!0,time:5,anim:"fadeIn",isVisible:!0,position:"bottom",loginCode:n.code,isUrl:!1})}})},childClick:function(n){this.yddMember=n,console.log("denglu:-----",n),e.setStorageSync("userInfo",n),this.mobile=n.mobile,this.$refs.popup.close()},loadDataTop:function(){var n=this;return r(o.default.mark((function t(){var a;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a={data:JSON.stringify({companyId:e.getStorageSync("companyId"),mini:"mini"})},n.$getJson("/api/v2/vue/ydd/index/topResList.jsp",a,"POST",(function(e){console.log("----topList------------",e),e.data&&(n.posterImgLength=e.data.length,n.posterImgList=e.data)}));case 2:case"end":return t.stop()}}),t)})))()},loadDataList:function(){var n=arguments,t=this;return r(o.default.mark((function a(){var i,r,c;return o.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(i=n.length>0&&void 0!==n[0]?n[0]:"add",n.length>1?n[1]:void 0,"add"!==i){o.next=8;break}if("nomore"!==t.loadingType){o.next=5;break}return o.abrupt("return");case 5:t.loadingType="loading",o.next=9;break;case 8:t.loadingType="more";case 9:r="/api/v2/vue/ydd/index/resList.jsp",c={data:JSON.stringify({pageNumber:t.pageNumber,companyId:e.getStorageSync("companyId")})},0!=e.getStorageSync("companyId")&&""!=e.getStorageSync("companyId")&&null!=e.getStorageSync("companyId")||0!=e.getStorageSync("classification")&&""!=e.getStorageSync("classification")&&(c={data:JSON.stringify({pageNumber:t.pageNumber,companyId:e.getStorageSync("cheapPurchaseCompanyId"),classification:e.getStorageSync("classification")})},r="/api/v2/vue/sqPlus/resources/cheapPurchaseList.jsp"),t.$getJson(r,c,"POST",(function(n){if(console.log("----list------------",n),n.data){var o=n.data;"/api/v2/vue/sqPlus/resources/cheapPurchaseList.jsp"==r&&(o=n.data.yddResourcess),1==t.pageNumber?t.goodsList=o:t.goodsList=t.goodsList.concat(o),t.pageNumber+=1,t.loadingType=o.length<8?"nomore":"more","refresh"===i&&e.stopPullDownRefresh()}}));case 13:case"end":return o.stop()}}),a)})))()},imgChange:function(e){console.log("e---------------------------",e);var n=e.detail.current;this.posterImgCurrent=n},navToDetailPage:function(n){var t=n.resource.id;e.navigateTo({url:"/pages/product/product?id=".concat(t)+"&companyId="+this.companyId+"&cheapPurchaseCompanyId="+this.cheapPurchaseCompanyId+"&classification="+this.classification})},wxSearchBtn:function(){e.navigateTo({url:"/pages/search/search"})}}};n.default=d}).call(this,t("543d")["default"])}},[["02e0","common/runtime","common/vendor"]]]);