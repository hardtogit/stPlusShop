(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/detail"],{3516:function(t,e,n){"use strict";n.r(e);var a=n("e7fb"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=r.a},b34d:function(t,e,n){"use strict";var a,r=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return a})},c08c:function(t,e,n){},c8bab:function(t,e,n){"use strict";var a=n("c08c"),r=n.n(a);r.a},dc28:function(t,e,n){"use strict";(function(t){n("ced0"),n("921b");a(n("66fd"));var e=a(n("de54"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},de54:function(t,e,n){"use strict";n.r(e);var a=n("b34d"),r=n("3516");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("c8bab");var u,s=n("f0c5"),o=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);e["default"]=o.exports},e7fb:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,a,r,i,u){try{var s=t[i](u),o=s.value}catch(c){return void n(c)}s.done?e(o):Promise.resolve(o).then(a,r)}function u(t){return function(){var e=this,n=arguments;return new Promise(function(a,r){var u=t.apply(e,n);function s(t){i(u,a,r,s,o,"next",t)}function o(t){i(u,a,r,s,o,"throw",t)}s(void 0)})}}var s=function(){return n.e("components/share").then(n.bind(null,"7b7a"))},o={components:{share:s},data:function(){return{loaded:!1,currentEpd:1,data:{guessList:[{},{},{},{}]},shareList:[]}},onLoad:function(){var e=u(a.default.mark(function e(){var n,r;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.json("detailData");case 2:return n=e.sent,e.next=5,this.$api.json("shareList");case 5:r=e.sent,this.loaded=!0,this.data=n,this.shareList=r,t.setNavigationBarTitle({title:n.title});case 10:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),methods:{imageOnLoad:function(t,e){this.$set(this.data[t][e],"loaded","loaded")},changeEpd:function(t){var e=this.data.episodeList,n=e[t];this.$api.msg("切换到第".concat(n,"项")),this.currentEpd=n},share:function(){this.$refs.share.toggleMask()},favorite:function(){this.data.favorite=!this.data.favorite}},onBackPress:function(){if(this.$refs.share.show)return this.$refs.share.toggleMask(),!0}};e.default=o}).call(this,n("543d")["default"])}},[["dc28","common/runtime","common/vendor"]]]);