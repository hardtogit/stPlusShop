(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/classify/coupon/coupon"],{3329:function(t,e,n){},"531e":function(t,e,n){"use strict";var o,s=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}))},b4b9:function(t,e,n){"use strict";(function(t){function o(t){return a(t)||r(t)||i(t)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t,e){if(t){if("string"===typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function a(t){if(Array.isArray(t))return c(t)}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(){n.e("components/coupon-bar").then(function(){return resolve(n("cca4"))}.bind(null,n)).catch(n.oe)},f={components:{couponBar:u},data:function(){return{selectMenu:1,classfiyVis:!1,classfiy:[],selectClassfiy:"",sort:"zh",subSort:1,goodsItems:[],pageNumber:1,pageSize:6,noMore:!1}},methods:{navTo:function(e){t.navigateTo({url:e})},handleMenuChange:function(t){this.selectMenu=t},onLoad:function(){this.getData(),this.getClassfiy()},targetType:function(){this.classfiyVis=!this.classfiyVis},changeClassfiy:function(t){this.selectClassfiy=t,this.classfiyVis=!1,this.initLoad()},changeSort:function(t){"price"==this.sort&&"price"==t?1==this.subSort?this.subSort=0:this.subSort=1:(this.sort=t,this.subSort=1),this.initLoad()},initLoad:function(){this.pageNumber=1,this.noMore=!1,this.goodsItems=[],this.getData()},getData:function(){var t=this;this.noMore||this.$getJson("/api/v3/coupon/others.jsp",{companyId:202,pageNumber:this.pageNumber,industryId:this.selectClassfiy,pageSize:this.pageSize,sort:this.sort+","+this.subSort},"POST",(function(e){var n=e.data||[];console.log(n),1==t.pageNumber?t.goodsItems=n:t.goodsItems=[].concat(o(t.goodsItems),o(n)),n.length<t.pageSize&&(t.noMore=!0),t.pageNumber=t.pageNumber+1}))},onReachBottom:function(){this.getData()},getClassfiy:function(){var t=this;this.$getJson("/jsp/api/resources/ajaxGetIndustry.jsp",{storeId:202},"POST",(function(e){t.classfiy=e.data.industry,console.log(t.classfiy)}))}}};e.default=f}).call(this,n("543d")["default"])},c68e:function(t,e,n){"use strict";(function(t){n("ced0");o(n("66fd"));var e=o(n("ee67"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},e622:function(t,e,n){"use strict";var o=n("3329"),s=n.n(o);s.a},ee67:function(t,e,n){"use strict";n.r(e);var o=n("531e"),s=n("f62c");for(var i in s)"default"!==i&&function(t){n.d(e,t,(function(){return s[t]}))}(i);n("e622");var r,a=n("f0c5"),c=Object(a["a"])(s["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=c.exports},f62c:function(t,e,n){"use strict";n.r(e);var o=n("b4b9"),s=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=s.a}},[["c68e","common/runtime","common/vendor"]]]);