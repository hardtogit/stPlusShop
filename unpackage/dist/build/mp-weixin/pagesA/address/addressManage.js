(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesA/address/addressManage"],{"3e41":function(e,t,a){"use strict";var s=a("d85f"),n=a.n(s);n.a},"42b0":function(e,t,a){"use strict";a.r(t);var s=a("be78"),n=a("60c6");for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);a("3e41");var o,r=a("f0c5"),c=Object(r["a"])(n["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],o);t["default"]=c.exports},"60c6":function(e,t,a){"use strict";a.r(t);var s=a("9da9"),n=a.n(s);for(var i in s)"default"!==i&&function(e){a.d(t,e,function(){return s[e]})}(i);t["default"]=n.a},"9da9":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;a("2f62");function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},s=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),s.forEach(function(t){n(e,t,a[t])})}return e}function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var i={data:function(){return{pickerCity:"请选择所在城市",mode:"selector",deepLength:0,pickerValueDefault:[],pickerValueArray:[],pickerText:"请选择行业",themeColor:"",addressData:{id:"",consignee:"",mobile:"",addressName:"",addrDescription:"",poiaddress:"",address:"",addrDetail:"",isDefault:0,lat:"",lng:"",province:"",city:"",county:""},isDefault:!1}},onLoad:function(t){var a="新增收货地址";if("edit"===t.type){a="编辑收货地址",this.addressData=JSON.parse(t.data);var s=this.addressData.poiaddress.split(",");this.addressData.address=s[0],this.addressData.addressName=s[1],this.addressData.addrDescription=s[2]}this.manageType=t.type,e.setNavigationBarTitle({title:a})},methods:{switchChange:function(e){console.info(" e.detail",e.detail.value),e.detail.value?this.addressData.isDefault=1:this.addressData.isDefault=0},transformLocation:function(e){var t=this;this.$qqmapsdk.reverseGeocoder({location:e,success:function(e){t.addressData=s({},t.addressData,{province:e.result.address_component.province,city:e.result.address_component.city,county:e.result.address_component.district})},fail:function(e){console.error(e)},complete:function(e){console.log(e)}})},chooseAddres:function(){var e=this;wx.getSetting({success:function(t){console.log(t),t.authSetting["scope.userLocation"]?wx.chooseLocation({success:function(t){console.log(t),e.addressData=s({},e.addressData,{addressName:t.name,address:t.address,lat:t.latitude,lng:t.longitude}),e.transformLocation({latitude:t.latitude,longitude:t.longitude}),console.log(t)}}):wx.authorize({scope:"scope.userLocation",success:function(){wx.chooseLocation({success:function(t){console.log(t),e.addressData=s({},e.addressData,{addressName:t.name,address:t.address,lat:t.latitude,lng:t.longitude}),e.transformLocation({latitude:t.latitude,longitude:t.longitude})}})},fail:function(){wx.openSetting({success:function(e){}})}})}})},confirm:function(){var t=this.addressData;if(t.consignee)if(/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(t.mobile))if(t.address)if(t.addrDescription){var a={id:t.id,consignee:t.consignee,mobile:t.mobile,addrDescription:t.addrDescription,addressName:t.addressName,address:t.address,isDefault:t.isDefault,lat:t.lat,lng:t.lng,province:t.province,city:t.city,county:t.county,poiaddress:"".concat(t.address,",").concat(t.addressName,",").concat(t.addrDescription),pickerCity:"".concat(t.province,"-").concat(t.city,"-").concat(t.county),addrDetail:t.address.replace("".concat(t.province+t.city+t.county),"")+t.addressName+t.addrDescription};this.$getJson("/jsp/api/addr/doSaveAddr.jsp",a,"POST",function(e){e.success}),this.$api.prePage().refreshList(this.manageType),this.$api.msg("地址".concat("edit"==this.manageType?"修改":"添加","成功")),setTimeout(function(){e.navigateBack()},800)}else this.$api.msg("请填写详细地址信息");else this.$api.msg("请选择地区");else this.$api.msg("请输入正确的手机号码");else this.$api.msg("请填写收货人姓名")}}};t.default=i}).call(this,a("543d")["default"])},bb57:function(e,t,a){"use strict";(function(e){a("ced0"),a("921b");s(a("66fd"));var t=s(a("42b0"));function s(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("543d")["createPage"])},be78:function(e,t,a){"use strict";var s,n=function(){var e=this,t=e.$createElement;e._self._c},i=[];a.d(t,"b",function(){return n}),a.d(t,"c",function(){return i}),a.d(t,"a",function(){return s})},d85f:function(e,t,a){}},[["bb57","common/runtime","common/vendor"]]]);