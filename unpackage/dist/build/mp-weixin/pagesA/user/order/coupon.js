(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesA/user/order/coupon"],{"0850":function(e,n,t){"use strict";t.r(n);var o=t("d1cb"),a=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,function(){return o[e]})}(i);n["default"]=a.a},1228:function(e,n,t){"use strict";var o={"uni-load-more":()=>t.e("components/uni-load-more/uni-load-more").then(t.bind(null,"b781")),"uni-popup":()=>t.e("components/uni-popup/uni-popup").then(t.bind(null,"4a96"))},a=function(){var e=this,n=e.$createElement;e._self._c},i=[];t.d(n,"b",function(){return a}),t.d(n,"c",function(){return i}),t.d(n,"a",function(){return o})},2880:function(e,n,t){"use strict";t.r(n);var o=t("1228"),a=t("0850");for(var i in a)"default"!==i&&function(e){t.d(n,e,function(){return a[e]})}(i);t("4bb8");var r,u=t("f0c5"),s=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);n["default"]=s.exports},"4bb8":function(e,n,t){"use strict";var o=t("ced7"),a=t.n(o);a.a},ced7:function(e,n,t){},d1cb:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;o(t("3e05"));function o(e){return e&&e.__esModule?e:{default:e}}var a=function(){return t.e("components/uni-load-more/uni-load-more").then(t.bind(null,"b781"))},i=function(){return t.e("components/uni-popup/uni-popup").then(t.bind(null,"4a96"))},r=function(){return t.e("components/empty").then(t.bind(null,"7184"))},u={components:{uniLoadMore:a,empty:r,uniPopup:i},data:function(){return{tabCurrentIndex:0,navList:[{name:"未使用",id:1},{name:"已使用",id:2},{name:"已过期",id:3}],headerPosition:"fixed",orderList:[],memberId:e.getStorageSync("userInfo").id,pageSize:10,pageNumber:1,status:"",loadingType:"",url:this.$ctx,isCheapPurchase:0,currentCoupon:{}}},onPageScroll:function(e){e.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onPullDownRefresh:function(){this.pageNumber=1,this.orderList=[],this.loadData(1)},onReachBottom:function(){this.loadData()},onLoad:function(e){this.tabCurrentIndex=+e.index||0,this.isCheapPurchase=+e.isCheapPurchase,this.loadData()},methods:{goDetail:function(n){e.navigateTo({url:n})},buyBack:function(n){e.navigateTo({url:"/pagesA/user/backSale/backSale?id=".concat(n.order.id,"&orderNo=").concat(n.order.sn)})},openCodePop:function(e){this.currentCoupon=e,this.$refs.codePop.open()},loadData:function(n){var t=this,o=this.tabCurrentIndex,a=this.navList[o];this.status=a.id,this.$getJson("/api/v3/my/coupon/statusData.jsp",{pageNumber:this.pageNumber,pageSize:this.pageSize,status:this.status},"POST",function(o){var a=o.data;a.length>0?(1==t.pageNumber?t.orderList=a:t.orderList=t.orderList.concat(a),t.pageNumber+=1):t.loadingType="noMore",1==n?e.stopPullDownRefresh():e.hideLoading(),t.loadingType=a.length<8?"nomore":"more"})},changeTab:function(e){this.tabCurrentIndex=e.target.current,this.pageNumber=1,this.orderList=[],this.loadData()},tabClick:function(e){this.tabCurrentIndex=e,this.pageNumber=1,this.orderList=[]},deleteOrder:function(n,t){var o=this;e.showModal({content:"是否删除订单？",success:function(a){if(a.confirm){var i={data:JSON.stringify({id:n,memberId:e.getStorageSync("userInfo").id})};o.$getJson("/api/v2/vue/ydd/order/doDelOrder.jsp",i,"POST",function(n){e.hideLoading(),o.orderList.splice(t,1)})}}})},cancelOrder:function(n){var t=this;e.showModal({content:"是否取消订单？",success:function(o){o.confirm&&t.$getJson("/jsp/api/order/doCancel.jsp",{id:n.id,memberId:e.getStorageSync("userInfo").id},"POST",function(n){e.hideLoading(),1!=n.success&&"true"!=n.success||(t.pageNumber=1,t.orderList=[],t.loadData())})}})},copySn:function(n){e.setClipboardData({data:n,success:function(){e.showToast({title:n+"\r\n复制成功",icon:"none"})}})},orderStateExp:function(e){var n="",t="#ff0000";switch(+e){case 1:n="待付款";break;case 2:n="待发货";break;case 40:n="订单已关闭",t="#999";break}return{stateTip:n,stateTipColor:t}},pay:function(n){e.navigateTo({url:"/pages/money/pay?money="+n.order.shouldPayAmountShow+"&sn="+n.order.sn})}}};n.default=u}).call(this,t("543d")["default"])},e348:function(e,n,t){"use strict";(function(e){t("ced0"),t("921b");o(t("66fd"));var n=o(t("2880"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])}},[["e348","common/runtime","common/vendor"]]]);