(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesA/user/order/detail/order"],{"39b3":function(t,n,e){"use strict";e.r(n);var o=e("e8cb"),a=e("4ea7");for(var c in a)"default"!==c&&function(t){e.d(n,t,(function(){return a[t]}))}(c);e("ea5e");var u,i=e("f0c5"),s=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);n["default"]=s.exports},"4ea7":function(t,n,e){"use strict";e.r(n);var o=e("f694"),a=e.n(o);for(var c in o)"default"!==c&&function(t){e.d(n,t,(function(){return o[t]}))}(c);n["default"]=a.a},6248:function(t,n,e){},cb96:function(t,n,e){"use strict";(function(t){e("ced0");o(e("66fd"));var n=o(e("39b3"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},e8cb:function(t,n,e){"use strict";var o,a=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return o}))},ea5e:function(t,n,e){"use strict";var o=e("6248"),a=e.n(o);a.a},f694:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{entity:{},ctx:this.$ctx,options:{},status:{0:"待付款",1:"已付款",30:"已完成",40:"已取消",2:"售后",6:"售后",11:"售后",25:"售后",26:"售后",50:"退款成功"}}},onLoad:function(t){this.options=t,this.getData()},methods:{getData:function(){var t=this;this.$getJson("/api/v3/order/info.jsp",{orderId:this.options.id,orderNo:this.options.orderNo},"POST",(function(n){console.log(n),t.entity=n.data}))},pay:function(n){t.navigateTo({url:"/pages/money/pay?money="+n.shouldPayAmountShow+"&sn="+n.sn})},cancelOrder:function(n){var e=this;t.showModal({content:"是否取消订单？",success:function(o){o.confirm&&e.$getJson("/jsp/api/order/doCancel.jsp",{id:n.id},"POST",(function(n){t.hideLoading(),1!=n.success&&"true"!=n.success||e.getData()}))}})},copyText:function(t){console.log(t),wx.setClipboardData({data:t.currentTarget.dataset.text,success:function(t){wx.getClipboardData({success:function(t){wx.showToast({title:"复制成功"})}})}})}}};n.default=e}).call(this,e("543d")["default"])}},[["cb96","common/runtime","common/vendor"]]]);