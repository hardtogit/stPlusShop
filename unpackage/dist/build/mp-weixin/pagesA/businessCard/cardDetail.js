(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesA/businessCard/cardDetail"],{"40a9":function(t,e,n){"use strict";var a,r=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},"4d08":function(t,e,n){"use strict";var a=n("d209"),r=n.n(a);r.a},"6f01":function(t,e,n){"use strict";(function(t){n("ced0");a(n("66fd"));var e=a(n("d574"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},d209:function(t,e,n){},d574:function(t,e,n){"use strict";n.r(e);var a=n("40a9"),r=n("f31f");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("4d08");var s,u=n("f0c5"),c=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);e["default"]=c.exports},f31f:function(t,e,n){"use strict";n.r(e);var a=n("fff8"),r=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=r.a},fff8:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{ctx:this.$ctx,isShow:!1,cjUserCard:{},inviteData:{}}},onLoad:function(t){this.userCardId=t.userCardId,this.getData()},onShareAppMessage:function(t){return"button"===t.from&&console.log(t.target),{title:this.cjUserCard.cjUser.realName+"给您分享了一张名片",path:"/pages/businessCard/businessCard?companyId="+this.cjUserCard.companyId+"&userId="+this.cjUserCard.recordUserId+"&entrance=3"}},methods:{getData:function(){var t=this;this.$getJson("/api/v2/vue/sqPlus/card/cardDetail.jsp",{data:JSON.stringify({userCardId:this.userCardId})},"POST",(function(e){console.log("----------------",e),t.cjUserCard=e.data}))},expandAll:function(){this.isShow=!this.isShow},telPhone:function(e){t.makePhoneCall({phoneNumber:e})},goToMap:function(t){qqMap.geocoder({address:t,complete:function(t){console.log("经纬度",t);var e=t.result.location;wx.openLocation({latitude:e.lat,longitude:e.lng,name:t.result.title,scale:15})}})},gotoHomepage:function(){t.navigateTo({url:"/pages/homepage/homepage?companyId="+this.cjUserCard.cjCompany.id+"&userId="+this.cjUserCard.cjUser.id})}}};e.default=n}).call(this,n("543d")["default"])}},[["6f01","common/runtime","common/vendor"]]]);