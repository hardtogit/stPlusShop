(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/classify/coupon/coupon"],{"0881":function(t,e,n){},"1f60":function(t,e,n){"use strict";var s,o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return s})},b4b9:function(t,e,n){"use strict";(function(t){function s(t){return a(t)||i(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function i(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function a(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(){return n.e("components/coupon-bar").then(n.bind(null,"cca4"))},u={components:{couponBar:r},data:function(){return{selectMenu:1,classfiyVis:!1,classfiy:[],selectClassfiy:"",sort:"zh",subSort:1,goodsItems:[],pageNumber:1,pageSize:6,noMore:!1}},methods:{navTo:function(e){t.navigateTo({url:e})},handleMenuChange:function(t){this.selectMenu=t},onLoad:function(){this.getData(),this.getClassfiy()},targetType:function(){this.classfiyVis=!this.classfiyVis},changeClassfiy:function(t){this.selectClassfiy=t,this.classfiyVis=!1,this.initLoad()},changeSort:function(t){"price"==this.sort&&"price"==t?1==this.subSort?this.subSort=0:this.subSort=1:(this.sort=t,this.subSort=1),this.initLoad()},initLoad:function(){this.pageNumber=1,this.noMore=!1,this.goodsItems=[],this.getData()},getData:function(){var t=this;this.noMore||this.$getJson("/api/v3/coupon/others.jsp",{companyId:202,pageNumber:this.pageNumber,industryId:this.selectClassfiy,pageSize:this.pageSize,sort:this.sort+","+this.subSort},"POST",function(e){var n=e.data||[];1==t.pageNumber?t.goodsItems=n:t.goodsItems=[].concat(s(t.goodsItems),s(n)),n.length<t.pageSize&&(t.noMore=!0),t.pageNumber=t.pageNumber+1})},onReachBottom:function(){this.getData()},getClassfiy:function(){var t=this;this.$getJson("/jsp/api/resources/ajaxGetIndustry.jsp",{storeId:202},"POST",function(e){t.classfiy=e.data.industry,console.log(t.classfiy)})}}};e.default=u}).call(this,n("543d")["default"])},c68e:function(t,e,n){"use strict";(function(t){n("ced0"),n("921b");s(n("66fd"));var e=s(n("ee67"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},e622:function(t,e,n){"use strict";var s=n("0881"),o=n.n(s);o.a},ee67:function(t,e,n){"use strict";n.r(e);var s=n("1f60"),o=n("f62c");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("e622");var a,r=n("f0c5"),u=Object(r["a"])(o["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],a);e["default"]=u.exports},f62c:function(t,e,n){"use strict";n.r(e);var s=n("b4b9"),o=n.n(s);for(var i in s)"default"!==i&&function(t){n.d(e,t,function(){return s[t]})}(i);e["default"]=o.a}},[["c68e","common/runtime","common/vendor"]]]);