(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesA/store/order/order"],{"2c63":function(t,e,n){},"2d19":function(t,e,n){"use strict";n.r(e);var o=n("e770"),a=n("d822");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("812e");var i,r=n("f0c5"),u=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);e["default"]=u.exports},"812e":function(t,e,n){"use strict";var o=n("2c63"),a=n.n(o);a.a},bc8d:function(t,e,n){"use strict";(function(t){n("ced0");o(n("66fd"));var e=o(n("2d19"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},d822:function(t,e,n){"use strict";n.r(e);var o=n("e091"),a=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,(function(){return o[t]}))}(s);e["default"]=a.a},e091:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){n.e("components/uni-load-more/uni-load-more").then(function(){return resolve(n("b781"))}.bind(null,n)).catch(n.oe)},a={components:{uniLoadMore:o},data:function(){return{tabCurrentIndex:0,navList:[],headerPosition:"fixed",orderList:[],pageSize:10,pageNumber:1,status:"",loadingType:"",url:this.$ctx,companyId:"",assStatus:0}},onPageScroll:function(t){t.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onPullDownRefresh:function(){this.pageNumber=1,this.orderList=[],this.loadData(1)},onReachBottom:function(){this.loadData()},onLoad:function(t){this.companyId=t.companyId,this.getTable()},methods:{push:function(e){t.navigateTo({url:e})},getTable:function(){var t=this;this.$getJson("/api/v3/order/status.jsp",{},"POST",(function(e){t.navList=e.data,t.loadData()}))},setAssStatus:function(t){this.assStatus=t,this.pageNumber=1,this.orderList=[],this.loadData(),console.log("1111111111111111111111111111")},loadData:function(e){var n=this,o=this.tabCurrentIndex,a=this.navList[o];this.status=a.id,this.$getJson("/api/v3/order/statusData.jsp",{pageNumber:this.pageNumber,pageSize:this.pageSize,status:this.status,storeId:this.companyId||202,isCheapPurchase:!0,assStatus:this.assStatus},"POST",(function(o){var a=o.data;console.log("--orderList---------",a),a.length>0?(1==n.pageNumber?n.orderList=a:n.orderList=n.orderList.concat(a),n.pageNumber+=1):n.loadingType="noMore",1==e?t.stopPullDownRefresh():t.hideLoading(),n.loadingType=a.length<10?"nomore":"more"}))},confirm:function(e){var n=this;t.showModal({title:"提示",content:"确认完成订单",success:function(t){t.confirm?n.$getJson("/api/v2/vue/sqPlus/order/confirmOrder.jsp",{data:JSON.stringify({sn:e})},"POST",(function(t){n.pageNumber=1,n.orderList=[],n.loadData()})):t.cancel}})},refund:function(e){var n=this;t.showModal({title:"提示",content:"确认退款吗？",success:function(t){t.confirm?n.$getJson("/api/v2/vue/sqPlus/order/refundOrder.jsp",{data:JSON.stringify({sn:e})},"POST",(function(t){n.pageNumber=1,n.orderList=[],n.loadData()})):t.cancel}})},changeTab:function(t){this.tabCurrentIndex=t.target.current,this.pageNumber=1,this.orderList=[],this.loadData(),console.log("1111111111111111111111111111")},tabClick:function(t){this.tabCurrentIndex=t,this.pageNumber=1,this.orderList=[],console.log("22222222222222222222222222")},copySn:function(e){t.setClipboardData({data:e,success:function(){t.showToast({title:e+"\r\n复制成功",icon:"none"})}})},orderStateExp:function(t){var e="",n="#ff0000";switch(+t){case 1:e="待付款";break;case 2:e="待发货";break;case 40:e="订单已关闭",n="#999";break}return{stateTip:e,stateTipColor:n}}}};e.default=a}).call(this,n("543d")["default"])},e770:function(t,e,n){"use strict";var o={uniLoadMore:function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"b781"))}},a=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return o}))}},[["bc8d","common/runtime","common/vendor"]]]);