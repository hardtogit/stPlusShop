(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"458b":function(n,o,e){},"4e86":function(n,o,e){"use strict";e.r(o);var t=e("c75b"),i=e("5924");for(var u in i)"default"!==u&&function(n){e.d(o,n,function(){return i[n]})}(u);e("baad");var s,c=e("f0c5"),a=Object(c["a"])(i["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],s);o["default"]=a.exports},5232:function(n,o,e){"use strict";(function(n){e("ced0"),e("921b");t(e("66fd"));var o=t(e("4e86"));function t(n){return n&&n.__esModule?n:{default:n}}n(o.default)}).call(this,e("543d")["createPage"])},5924:function(n,o,e){"use strict";e.r(o);var t=e("729c"),i=e.n(t);for(var u in t)"default"!==u&&function(n){e.d(o,n,function(){return t[n]})}(u);o["default"]=i.a},"729c":function(n,o,e){"use strict";(function(n){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t=function(){return e.e("components/uniPop").then(e.bind(null,"33b1"))},i=function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"4a96"))},u={data:function(){return{wxUserInfo:{},auth:!0}},components:{uniPop:t,uniPopup:i},onShow:function(){console.log("asdasdasdas");var n=this;wx.getSetting({success:function(o){o.authSetting["scope.userInfo"]?(n.auth=!0,wx.getUserInfo({success:function(o){console.log(o),n.wxUserInfo=o.userInfo}}),n.login(),n.$refs.popup.open(),n.$refs.popup.clickClose(!1)):n.auth=!1},fail:function(){n.auth=!1}})},methods:{login:function(){var n=this;wx.login({success:function(o){console.info("res",o),n.loginCode=o.code,console.log("_this.loginCode:",n.loginCode),n.$refs.uniPop.show({title:"登录",content:"是否同意获取手机号？",shade:!0,shadeClose:!0,time:5,anim:"fadeIn",isVisible:!0,position:"bottom",loginCode:o.code,isUrl:!0})}})},userInfoHandler:function(n){n.detail.userInfo&&(this.wxUserInfo=n.detail.userInfo,this.login(),this.$refs.popup.open(),this.$refs.popup.clickClose(!1))},childClick:function(o){var e=this;1!=o&&(n.setStorageSync("userInfo",o),n.setStorageSync("mobile",o.mobile),this.userInfo=o,this.$getJson("/api/v2/vue/stPlusShop/common/getUserInfo.jsp",{data:JSON.stringify({mobile:o.mobile,companyId:n.getStorageSync("companyId")})},"POST",function(o){n.setStorageSync("cjUser",o.data),e.cjUser=n.getStorageSync("cjUser"),n.navigateBack(),console.log("--------------------------",n.getStorageSync("cjUser"))}),this.mobile=o.mobile,this.$refs.popup.close())}}};o.default=u}).call(this,e("543d")["default"])},baad:function(n,o,e){"use strict";var t=e("458b"),i=e.n(t);i.a},c75b:function(n,o,e){"use strict";var t={"uni-popup":()=>e.e("components/uni-popup/uni-popup").then(e.bind(null,"4a96"))},i=function(){var n=this,o=n.$createElement;n._self._c},u=[];e.d(o,"b",function(){return i}),e.d(o,"c",function(){return u}),e.d(o,"a",function(){return t})}},[["5232","common/runtime","common/vendor"]]]);