(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/detail/coupon/coupon"],{"0291":function(t,o,n){"use strict";var e=n("39c7"),a=n.n(e);a.a},"10a7":function(t,o,n){"use strict";(function(t){function n(t){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(o){e(t,o,n[o])})}return t}function e(t,o,n){return o in t?Object.defineProperty(t,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[o]=n,t}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a={data:function(){return{id:null,ctx:this.$ctx,coupon:{},store:{},couponList:[]}},onShow:function(){this.getData()},methods:{getData:function(){var t=this;this.$getJson("/api/v3/coupon/info.jsp",{id:this.id},"POST",function(o){t.coupon=o.data,console.log(o,"coupon"),t.$getJson("/api/v2/vue/sqPlus/company/companyInfo.jsp",{data:JSON.stringify({companyId:o.data.storeId})},"POST",function(o){t.store=n({},o.data.cjCompany,{storeId:o.data.cjCompany.id})}),t.$getJson("/api/v2/vue/sqPlus/coupon/couponList.jsp",{companyId:o.data.storeId,pageNumber:1},"POST",function(o){t.couponList=o.data})})},call:function(){wx.makePhoneCall({phoneNumber:this.store.serviceNo})},buy:function(){console.log(this.productInfo);var o={hot:[],platform:[],coupon:[]};o.coupon.push({store:this.store,list:[{cpCart:{goodsCount:1},goods:this.coupon}]}),t.setStorageSync("goodsData",o),t.navigateTo({url:"/pages/home/order/createOrder"})},addCart:function(o){var n=this,e={goodsId:o,goodsType:3};this.$getJson("/api/v2/vue/ydd/cart/addCart.jsp",{data:JSON.stringify(e)},"POST",function(o){console.log("----res------------",o),1==o.data?(t.showToast({title:"加入成功",icon:"none"}),n.cartCount+=1):t.showToast({title:o.message,icon:"none"})})},changeCoupon:function(t){this.id=t,this.getData()},openLocation:function(){wx.openLocation({latitude:this.store.lat,longitude:this.store.lng,name:this.store.address,address:this.store.addressStr})}},onLoad:function(t){this.id=t.id||26}};o.default=a}).call(this,n("543d")["default"])},"39c7":function(t,o,n){},"656c":function(t,o,n){"use strict";(function(t){n("ced0"),n("921b");e(n("66fd"));var o=e(n("ac60"));function e(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,n("543d")["createPage"])},"8f32":function(t,o,n){"use strict";var e,a=function(){var t=this,o=t.$createElement;t._self._c},c=[];n.d(o,"b",function(){return a}),n.d(o,"c",function(){return c}),n.d(o,"a",function(){return e})},"97cf":function(t,o,n){"use strict";n.r(o);var e=n("10a7"),a=n.n(e);for(var c in e)"default"!==c&&function(t){n.d(o,t,function(){return e[t]})}(c);o["default"]=a.a},ac60:function(t,o,n){"use strict";n.r(o);var e=n("8f32"),a=n("97cf");for(var c in a)"default"!==c&&function(t){n.d(o,t,function(){return a[t]})}(c);n("0291");var i,r=n("f0c5"),u=Object(r["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],i);o["default"]=u.exports}},[["656c","common/runtime","common/vendor"]]]);