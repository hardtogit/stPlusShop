(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/detail/goods/goods"],{"02d8":function(t,o,e){},"38f9":function(t,o,e){"use strict";var s=e("02d8"),n=e.n(s);n.a},6503:function(t,o,e){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var s=function(){return e.e("components/uniPop").then(e.bind(null,"33b1"))},n=function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"4a96"))},i={components:{uniPop:s,uniPopup:n},data:function(){return{banners:[],cartCount:"",specClass:"none",specSelected:[],productInfo:{},member:{},yddMember:t.getStorageSync("userInfo"),shareShow:!1,favorite:!1,posterShow:!1,ctx:this.$ctx,qrcodePaths:[],id:null,shareList:[],imgList:[],inviteCode:"",loginCode:"",mobile:t.getStorageSync("mobile"),desc:"",companyId:"",cheapPurchaseCompanyId:"",classification:"",optionType:"buy",specList:[],selectedSpec:{}}},onShareAppMessage:function(t){return{title:"你是好友的",path:"/pages/product/product?id="+this.id+"&inviteCode="+this.yddMember.inviterCode+"&companyId="+this.companyId+"&cheapPurchaseCompanyId="+this.cheapPurchaseCompanyId+"&classification="+this.classification,imageUrl:this.$ctx+this.productInfo.resources.smallBannerImgArr[0]}},onLoad:function(t){console.log(t),this.id=347,t.id&&(this.id=t.id),this.inviteCode=t.inviteCode},onShow:function(){this.loadData(),this.getCarts(),this.login()},methods:{loadData:function(){var t=this,o={resourcesId:this.id};this.$getJson("/jsp/api/resources/resoucesInfo.jsp",o,"POST",function(e){console.log("----list------------",e),e.data&&(t.productInfo=e.data.goods,t.specList=e.data.specs,t.selectedSpec=e.data.specs[0],t.banners=t.productInfo.bimgs.split(","),t.$getJson("/jsp/api/resources/resoucesInfo.jsp",o,"POST",function(t){}))}),this.$getJson("/api/v3/my/store/checkCollect.jsp",{storeId:202},"POST",function(o){t.favorite=o.data})},getCarts:function(){var o=this;t.getStorageSync("mobile")&&this.$getJson("/api/v2/vue/ydd/cart/getCartNumber.jsp",{},"POST",function(t){t.data&&(o.cartCount=t.data)})},shareShowBtn:function(o){if(!t.getStorageSync("mobile"))return this.login(),this.$refs.popup.open(),void this.$refs.popup.clickClose(!0);this.shareShow=!this.shareShow,1==o&&this.getQrcode()},posterShowBtn:function(){this.posterShow=!this.posterShow},toggleSpec:function(){var t=this;"show"===this.specClass?(this.specClass="hide",setTimeout(function(){t.specClass="none"},250)):"none"===this.specClass&&(this.specClass="show")},selectSpec:function(t){this.selectedSpec=t},getQrcode:function(){var o=this;console.log("sssssss-------------",this.id+"&"+this.yddMember.inviterCode+"&"+t.getStorageSync("companyId")+"&"+t.getStorageSync("cheapPurchaseCompanyId")+"&"+t.getStorageSync("classification"));var e={data:JSON.stringify({page:"pages/product/product",scene:this.id+"&"+this.yddMember.inviterCode+"&"+t.getStorageSync("companyId")+"&"+t.getStorageSync("cheapPurchaseCompanyId")+"&"+t.getStorageSync("classification")})};this.$getJson("/api/v2/vue/stPlusShop/common/getQrcode.jsp",e,"POST",function(t){console.log("----list------------",t),t.data&&(o.qrcodePaths=[],o.qrcodePaths[0]=o.url+t.data)})},saveQrcode:function(o){var e=this;1==o?(e.qrcodePaths=[],this.productInfo.resources.smallBannerImgArr.forEach(function(t){e.qrcodePaths.push(e.url+t)})):2==o&&(e.qrcodePaths=[],this.productInfo.resources.imgArr.forEach(function(t){e.qrcodePaths.push(e.url+t)})),t.authorize({scope:"scope.writePhotosAlbum",success:function(){}}),t.previewImage({urls:this.qrcodePaths,longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(t){console.log("选中了第"+(t.tapIndex+1)+"个按钮,第"+(t.index+1)+"张图片")},fail:function(t){console.log("errerrerr",t)},complete:function(t){console.log("eeee",t)}}})},toFavorite:function(){var o=this;if(!t.getStorageSync("mobile"))return this.login(),this.$refs.popup.open(),void this.$refs.popup.clickClose(!0);var e=0,s="取消收藏成功";0==this.favorite&&(e=1,s="收藏成功"),this.$getJson("/api/v3/my/store/collect.jsp",{storeId:202,action:e},"POST",function(e){o.favorite=!o.favorite,t.showToast({title:s,icon:"none"})})},setOptionType:function(t){this.optionType=t,this.toggleSpec()},propComplete:function(){this.toggleSpec(),"buy"==this.optionType?this.buy():"cart"==this.optionType&&this.addCart()},buy:function(){console.log(this.productInfo);var o={hot:[],platform:[],coupon:[]};1==this.productInfo.type?o.hot.push({store:{},list:[{cpCart:{goodsCount:1},goods:this.productInfo}]}):2==this.productInfo.type&&o.platform.push({cpCart:{goodsCount:1},goods:this.productInfo}),t.setStorageSync("goodsData",o),t.navigateTo({url:"/pages/home/order/createOrder"})},addCart:function(){var o=this;if(console.log("s"),!t.getStorageSync("mobile"))return this.login(),this.$refs.popup.open(),void this.$refs.popup.clickClose(!0);var e={goodsId:this.productInfo.id,specId:this.selectedSpec.id,goodsType:this.productInfo.type};this.$getJson("/api/v2/vue/ydd/cart/addCart.jsp",{data:JSON.stringify(e)},"POST",function(e){console.log("----res------------",e),1==e.data?(t.showToast({title:"加入成功",icon:"none"}),o.cartCount+=1):t.showToast({title:e.message,icon:"none"})})},stopPrevent:function(){}}};o.default=i}).call(this,e("543d")["default"])},"6aee":function(t,o,e){"use strict";var s,n=function(){var t=this,o=t.$createElement;t._self._c},i=[];e.d(o,"b",function(){return n}),e.d(o,"c",function(){return i}),e.d(o,"a",function(){return s})},a386:function(t,o,e){"use strict";(function(t){e("ced0"),e("921b");s(e("66fd"));var o=s(e("c1cb"));function s(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,e("543d")["createPage"])},c1cb:function(t,o,e){"use strict";e.r(o);var s=e("6aee"),n=e("f5cb");for(var i in n)"default"!==i&&function(t){e.d(o,t,function(){return n[t]})}(i);e("38f9");var c,r=e("f0c5"),a=Object(r["a"])(n["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],c);o["default"]=a.exports},f5cb:function(t,o,e){"use strict";e.r(o);var s=e("6503"),n=e.n(s);for(var i in s)"default"!==i&&function(t){e.d(o,t,function(){return s[t]})}(i);o["default"]=n.a}},[["a386","common/runtime","common/vendor"]]]);