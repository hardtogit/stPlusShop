(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/home"],{5051:function(t,o,n){"use strict";(function(t){n("ced0"),n("921b");s(n("66fd"));var o=s(n("8622"));function s(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,n("543d")["createPage"])},"7af8":function(t,o,n){"use strict";var s,e=function(){var t=this,o=t.$createElement;t._self._c},a=[];n.d(o,"b",function(){return e}),n.d(o,"c",function(){return a}),n.d(o,"a",function(){return s})},8622:function(t,o,n){"use strict";n.r(o);var s=n("7af8"),e=n("9dd1");for(var a in e)"default"!==a&&function(t){n.d(o,t,function(){return e[t]})}(a);n("d228");var i,c=n("f0c5"),u=Object(c["a"])(e["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],i);o["default"]=u.exports},8770:function(t,o,n){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n={data:function(){return{ctx:this.$ctx,goodsList:[],couponList:[],platformList:[],companyInfo:{},companyUser:{}}},onShareAppMessage:function(t){return"button"===t.from&&console.log(t.target),{title:"友哆哆",path:"/pages/home/home",imageUrl:""}},methods:{getData:function(){var o=this,n="/api/v2/vue/ydd/index/resList.jsp",s={data:JSON.stringify({pageNumber:1,pageSize:10,companyId:t.getStorageSync("companyId")})};this.$getJson(n,s,"POST",function(t){console.log("----list------------",t),t.data}),this.$getJson("/api/v3/busiSettings/getSettings.jsp",{data:JSON.stringify({"HOMEPAGE.SHOPID":1})},"POST",function(t){console.log(t)}),this.$getJson("/api/v3/vue/home/hotGoods.jsp",{storeId:202},"POST",function(t){console.log(t.data,"sssssssssssssss"),o.goodsList=t.data}),this.$getJson("/api/v3/vue/home/yyCoupon.jsp",{storeId:202},"POST",function(t){console.log(t.data,"sssssssssssssss"),o.couponList=t.data}),this.$getJson("/api/v3/vue/home/jhs.jsp",{storeId:202},"POST",function(t){o.platformList=t.data}),this.$getJson("/api/v3/vue/home/dt.jsp",{storeId:202},"POST",function(t){console.log(t,"ss")}),this.$getJson("/api/v2/vue/sqPlus/company/companyInfo.jsp",{data:JSON.stringify({companyId:202})},"POST",function(t){o.companyInfo=t.data.cjCompany,o.companyUser=t.data.cjCompany.cjUser,console.log(o.companyInfo,"sss")})},toFavorite:function(){this.$getJson("/api/v3/my/store/collect.jsp",{storeId:202,action:1},"POST",function(o){o.success?t.showToast({title:"收藏成功",icon:"none"}):t.showToast({title:o.message,icon:"none"})})},push:function(o){t.navigateTo({url:o})},navToDetailPage:function(o,n){if("hot"==n||"platform"==n){var s=o.id;t.navigateTo({url:"/pages/home/detail/goods/goods?id=".concat(s)+"&companyId="+this.companyId+"&cheapPurchaseCompanyId="+this.cheapPurchaseCompanyId+"&classification="+this.classification})}else if("coupon"==n){var e=o.id;t.navigateTo({url:"/pages/home/detail/coupon/coupon?id=".concat(e)})}}},mounted:function(){this.getData()}};o.default=n}).call(this,n("543d")["default"])},"9db5":function(t,o,n){},"9dd1":function(t,o,n){"use strict";n.r(o);var s=n("8770"),e=n.n(s);for(var a in s)"default"!==a&&function(t){n.d(o,t,function(){return s[t]})}(a);o["default"]=e.a},d228:function(t,o,n){"use strict";var s=n("9db5"),e=n.n(s);e.a}},[["5051","common/runtime","common/vendor"]]]);