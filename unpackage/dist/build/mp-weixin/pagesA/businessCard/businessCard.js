(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesA/businessCard/businessCard"],{"0335":function(e,o,n){"use strict";var t=n("25a4"),s=n.n(t);s.a},"25a4":function(e,o,n){},"414e":function(e,o,n){"use strict";n.r(o);var t=n("9f9e"),s=n.n(t);for(var a in t)"default"!==a&&function(e){n.d(o,e,function(){return t[e]})}(a);o["default"]=s.a},6229:function(e,o,n){"use strict";(function(e){n("ced0"),n("921b");t(n("66fd"));var o=t(n("9ac4"));function t(e){return e&&e.__esModule?e:{default:e}}e(o.default)}).call(this,n("543d")["createPage"])},"9ac4":function(e,o,n){"use strict";n.r(o);var t=n("d450"),s=n("414e");for(var a in s)"default"!==a&&function(e){n.d(o,e,function(){return s[e]})}(a);n("0335");var i,c=n("f0c5"),r=Object(c["a"])(s["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],i);o["default"]=r.exports},"9f9e":function(e,o,n){"use strict";(function(e){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t=s(n("055e"));function s(e){return e&&e.__esModule?e:{default:e}}var a=function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"4a96"))},i=new t.default({key:"JD7BZ-4LRWO-CNBWH-SH6OF-ZJVTE-Q6B4B"}),c={components:{uniPopup:a},data:function(){return{type:"",ctx:this.$ctx,isShow:!1,cjUser:{id:0},entrance:"",cjCompany:{},intvCjUser:{id:1},cjCompanyUser:{},inviteData:{},isOnShow:0,shareShow:!1,posterShow:!1,obj:{},qrcodePaths:["../../../static/images/logo.jpg"],loginCode:""}},onLoad:function(e){var o=this;if(wx.login({success:function(e){o.loginCode=e.code,console.log("_this.loginCode:",o.loginCode)}}),console.log("options:",e),e.scene){var n=decodeURIComponent(e.scene);console.log("scene:",n);var t=n.split("&");this.entrance=t[2],this.companyId=t[0],this.userId=t[1],console.log("datas:",t),console.log("entrance:",this.entrance),console.log("companyId:",this.companyId),console.log("userId:",this.userId)}else this.entrance=e.entrance,this.companyId=e.companyId,this.userId=e.userId;this.getData(),this.isOnShow=1},onShow:function(){0!=this.isOnShow&&this.getData()},onShareAppMessage:function(e){return this.shareShow=!this.shareShow,"button"===e.from&&console.log(e.target),{title:this.intvCjUser.realName+"给您分享了一张名片",path:"/pages/businessCard/businessCard?companyId="+this.companyId+"&userId="+this.userId+"&entrance=3"}},methods:{togglePopup:function(e){this.type=e},shareShowBtn:function(e){this.shareShow=!this.shareShow},posterShowBtn:function(){var o=e.getStorageSync("mobile");console.log("他取消掉了",o),""!=o&&null!=o?(this.type="",this.getQrcode()):this.type="login"},getPhoneNumber:function(o){console.log("e",o);var n=o.detail.encryptedData,t=o.detail.iv;if("getPhoneNumber:fail user deny"==o.detail.errMsg)console.log("他取消掉了");else{console.log("mobile***********************",e.getStorageSync("mobile"));var s=this;""!=e.getStorageSync("mobile")&&null!=e.getStorageSync("mobile")?(s.type="",s.getData(),s.shareShow=!s.shareShow,s.getQrcode()):wx.checkSession({success:function(o){s.$getJson("/api/v2/vue/sqPlus/common/getMobileAndOpenId.jsp",{data:JSON.stringify({decryptData:n,code:s.loginCode,iv:t})},"POST",function(o){console.log("----phone------------",o),e.setStorageSync("mobile",o.data.mobile),null!=o.data.wxUserInfoByPage&&e.setStorageSync("openid",o.data.wxUserInfoByPage.openid),console.log("mobile:",e.getStorageSync("mobile")),""==e.getStorageSync("mobile")||null==e.getStorageSync("mobile")?e.showModal({title:"提示",content:"获取手机号失败,请重试",success:function(e){}}):(s.type="",s.getData(),s.shareShow=!s.shareShow,s.getQrcode())})},fail:function(e){wx.login({success:function(e){s.loginCode=e.code,console.log("_this.loginCode:",s.loginCode)}}),console.log("file")}})}},getQrcode:function(){var e=this;this.$getJson("/api/v2/vue/sqPlus/common/getQrcode.jsp",{data:JSON.stringify({page:"pages/businessCard/businessCard",scene:this.companyId+"&"+this.userId+"&3"})},"POST",function(o){e.qrcodePaths[0]=e.ctx+o.data,console.log("res-+---------------------------",o),console.log(e.qrcodePaths[0]),e.posterShow=!e.posterShow})},copyWx:function(o){e.setClipboardData({data:o,success:function(){e.showToast({title:"复制成功",duration:2e3,icon:"none"})}})},saveQrcode:function(){console.log("---------------",this.qrcodePaths),e.previewImage({urls:this.qrcodePaths,longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(e){console.log("选中了第"+(e.tapIndex+1)+"个按钮,第"+(e.index+1)+"张图片")},fail:function(e){console.log("errerrerr",e)},complete:function(e){console.log("eeee",e)}}})},getData:function(){var o=this;this.$getJson("/api/v2/vue/sqPlus/card/cardInfo.jsp",{data:JSON.stringify({entrance:this.entrance||1,companyId:this.companyId||202,userId:this.userId||0,mobile:e.getStorageSync("mobile")})},"POST",function(e){console.log("----------------",e),e.data.cjUser&&(o.cjUser=e.data.cjUser),console.log("this.cjUser",o.cjUser),o.entrance=e.data.entrance,o.cjCompany=e.data.cjCompany,e.data.intvCjUser&&(o.intvCjUser=e.data.intvCjUser),console.log("this.intvCjUser",o.intvCjUser),o.cjCompanyUser=e.data.cjCompanyUser})},expandAll:function(){this.isShow=!this.isShow},telPhone:function(o){e.makePhoneCall({phoneNumber:o})},goToMap:function(e){console.log(e),i.geocoder({address:e,complete:function(e){console.log("经纬度",e);var o=e.result.location;wx.openLocation({latitude:o.lat,longitude:o.lng,name:e.result.title,scale:15})}})},gotoHomepage:function(){2==this.entrance?e.navigateBack({delta:1}):e.navigateTo({url:"/pages/homepage/homepage?companyId="+this.companyId+"&userId="+this.userId})},businessCardList:function(){e.navigateTo({url:"/pages/businessCard/businessCardList?userId="+this.userId})},businessCardAmend:function(){e.navigateTo({url:"/pages/businessCard/businessCardAmend?companyId="+this.companyId+"&userId="+this.userId+"&entrance=1"})}}};o.default=c}).call(this,n("543d")["default"])},d450:function(e,o,n){"use strict";var t={"uni-popup":()=>n.e("components/uni-popup/uni-popup").then(n.bind(null,"4a96"))},s=function(){var e=this,o=e.$createElement;e._self._c},a=[];n.d(o,"b",function(){return s}),n.d(o,"c",function(){return a}),n.d(o,"a",function(){return t})}},[["6229","common/runtime","common/vendor"]]]);