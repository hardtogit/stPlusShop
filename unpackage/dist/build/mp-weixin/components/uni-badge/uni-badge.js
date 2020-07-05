(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-badge/uni-badge"],{"13eb":function(t,e,n){"use strict";var u=n("8eee"),a=n.n(u);a.a},"63a6":function(t,e,n){"use strict";n.r(e);var u=n("96f9"),a=n("6b21");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("13eb");var r,c=n("f0c5"),f=Object(c["a"])(a["default"],u["b"],u["c"],!1,null,"5f41c2d7",null,!1,u["a"],r);e["default"]=f.exports},"6b21":function(t,e,n){"use strict";n.r(e);var u=n("76ad"),a=n.n(u);for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);e["default"]=a.a},"76ad":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:[String,Number],default:""},size:{type:String,default:"normal"}},data:function(){return{badgeStyle:""}},watch:{text:function(){this.setStyle()}},mounted:function(){this.setStyle()},methods:{setStyle:function(){this.badgeStyle="width: ".concat(8*String(this.text).length+12,"px")},onClick:function(){this.$emit("click")}}};e.default=u},"8eee":function(t,e,n){},"96f9":function(t,e,n){"use strict";var u,a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return u})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-badge/uni-badge-create-component',
    {
        'components/uni-badge/uni-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("63a6"))
        })
    },
    [['components/uni-badge/uni-badge-create-component']]
]);
