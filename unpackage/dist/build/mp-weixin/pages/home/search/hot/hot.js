(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/search/hot/hot"],{"0027":function(e,t,n){"use strict";var o,r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return o})},"202f":function(e,t,n){},5343:function(e,t,n){"use strict";var o=n("202f"),r=n.n(o);r.a},ae0d:function(e,t,n){"use strict";function o(e){return s(e)||a(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function a(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function s(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){return n.e("components/goods-item").then(n.bind(null,"d28e"))},c={data:function(){return{search:!1,history:wx.getStorageSync("keywords")||[],keywords:"",goodsItems:[],pageNumber:1,pageSize:6,noMore:!1,noData:!1}},components:{goodsItem:i},methods:{handleSearch:function(){this.search=!0,this.initLoad()},cancelSearch:function(){console.log("s"),this.keywords="",this.search=!1},hotSearch:function(e){this.search=!0,this.keywords=e,this.initLoad()},initLoad:function(){if(this.pageNumber=1,this.noMore=!1,this.goodsItems=[],this.getData(),this.keywords){var e=wx.getStorageSync("keywords")||[];e.unshift(this.keywords),e=o(new Set(e)),this.history=e,wx.setStorageSync("keywords",e)}},getData:function(){var e=this;this.noMore||this.$getJson("/api/v2/vue/sqPlus/resources/resourcesList.jsp",{companyId:202,pageNumber:this.pageNumber,search:this.keywords,pageSize:this.pageSize},"POST",function(t){var n=t.data||[];1==e.pageNumber?(e.goodsItems=n,0===n.length?e.noData=!0:e.noData=!1):e.goodsItems=[].concat(o(e.goodsItems),o(n)),n.length<e.pageSize&&(e.noMore=!0),e.pageNumber=e.pageNumber+1})}},onReachBottom:function(){this.getData()}};t.default=c},ae14:function(e,t,n){"use strict";n.r(t);var o=n("0027"),r=n("efd8");for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);n("5343");var s,i=n("f0c5"),c=Object(i["a"])(r["default"],o["b"],o["c"],!1,null,"770f2fbe",null,!1,o["a"],s);t["default"]=c.exports},e90c:function(e,t,n){"use strict";(function(e){n("ced0"),n("921b");o(n("66fd"));var t=o(n("ae14"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},efd8:function(e,t,n){"use strict";n.r(t);var o=n("ae0d"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=r.a}},[["e90c","common/runtime","common/vendor"]]]);