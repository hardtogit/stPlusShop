(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/search/hot/hot"],{6231:function(t,e,n){"use strict";var o,r=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}))},"83f7":function(t,e,n){},8624:function(t,e,n){"use strict";var o=n("83f7"),r=n.n(o);r.a},ae0d:function(t,e,n){"use strict";function o(t){return s(t)||i(t)||a(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){if(t){if("string"===typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function s(t){if(Array.isArray(t))return c(t)}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(){n.e("components/goods-item").then(function(){return resolve(n("d28e"))}.bind(null,n)).catch(n.oe)},f={data:function(){return{search:!1,history:wx.getStorageSync("keywords")||[],keywords:"",goodsItems:[],pageNumber:1,pageSize:6,noMore:!1,noData:!1}},components:{goodsItem:u},methods:{handleSearch:function(){this.search=!0,this.initLoad()},cancelSearch:function(){console.log("s"),this.keywords="",this.search=!1},hotSearch:function(t){this.search=!0,this.keywords=t,this.initLoad()},initLoad:function(){if(this.pageNumber=1,this.noMore=!1,this.goodsItems=[],this.getData(),this.keywords){var t=wx.getStorageSync("keywords")||[];t.unshift(this.keywords),t=o(new Set(t)),21===t.length&&t.pop(),this.history=t,wx.setStorageSync("keywords",t)}},getData:function(){var t=this;this.noMore||this.$getJson("/api/v2/vue/sqPlus/resources/resourcesList.jsp",{companyId:202,pageNumber:this.pageNumber,search:this.keywords,pageSize:this.pageSize},"POST",(function(e){var n=e.data||[];1==t.pageNumber?(t.goodsItems=n,0===n.length?t.noData=!0:t.noData=!1):t.goodsItems=[].concat(o(t.goodsItems),o(n)),n.length<t.pageSize&&(t.noMore=!0),t.pageNumber=t.pageNumber+1}))}},onReachBottom:function(){this.getData()}};e.default=f},ae14:function(t,e,n){"use strict";n.r(e);var o=n("6231"),r=n("efd8");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("8624");var i,s=n("f0c5"),c=Object(s["a"])(r["default"],o["b"],o["c"],!1,null,"4b4049f0",null,!1,o["a"],i);e["default"]=c.exports},e90c:function(t,e,n){"use strict";(function(t){n("ced0");o(n("66fd"));var e=o(n("ae14"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},efd8:function(t,e,n){"use strict";n.r(e);var o=n("ae0d"),r=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=r.a}},[["e90c","common/runtime","common/vendor"]]]);