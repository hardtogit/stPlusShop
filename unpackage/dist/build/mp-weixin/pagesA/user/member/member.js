(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesA/user/member/member"],{"53a3":function(t,n,e){"use strict";var o={"uni-popup":()=>e.e("components/uni-popup/uni-popup").then(e.bind(null,"4a96"))},a=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.cjCompanyUsers,function(n,e){var o=t.selectUser.indexOf(n.cjUser.id);return{$orig:t.__get_orig(n),g0:o}}));t.$mp.data=Object.assign({},{$root:{l0:e}})},i=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return i}),e.d(n,"a",function(){return o})},"714c":function(t,n,e){"use strict";(function(t){function o(t){return s(t)||i(t)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function i(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function s(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=function(){return e.e("components/uni-load-more/uni-load-more").then(e.bind(null,"b781"))},r=function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"4a96"))},u={components:{uniPopup:r,uniLoadMore:c},data:function(){return{userType:{0:"管理员",1:"员工",2:"代理"},activeFn:"",selectUser:[],c:0,ctx:this.$ctx,pageNumber:1,contentText:"正在加载...",noData:10,type:"",obj:{},companyId:"",cjCompanyUsers:[],inviteData:{},cjCompany:{}}},onLoad:function(t){this.companyId=t.companyId,this.getDataList()},onBackPress:function(){if(""!==this.type)return this.type="",!0},onReachBottom:function(){this.pageNumber++,console.log(this.pageNumber),this.getDataList()},onShareAppMessage:function(t){return"button"===t.from&&console.log(t.target),{title:this.cjCompany.cjUser.realName+"邀请您加入"+this.cjCompany.name,path:"/pages/invite/invite?companyId="+this.cjCompany.id+"&sharUserId="+this.cjCompany.cjUser.id,imageUrl:this.ctx+this.cjCompany.shareLogoPath}},methods:{setFn:function(t){this.activeFn=t},changeSelect:function(t){var n=this.selectUser;3==this.activeFn?-1!==n.indexOf(t)?this.selectUser=[].concat(o(n.slice(0,n.indexOf(t))),o(n.slice(n.indexOf(t)+1,n.length))):this.selectUser=[].concat(o(n),[t]):-1!==n.indexOf(t)?this.selectUser=[]:this.selectUser=[t]},handleSubmit:function(){var t=this.selectUser;this.$getJson("/api/v3/staff/set.jsp",{storeId:this.cjCompany.id||62,employeeId:t.join(","),status:this.activeFn},"POST",function(t){console.log(t)})},getDataList:function(){var t=this;this.noData<10?this.contentText="没有更多数据了":(this.contentText="正在加载...",this.$getJson("/api/v2/vue/sqPlus/company/companyUserList.jsp",{data:JSON.stringify({companyId:this.cjCompany.id||62,pageNumber:this.pageNumber})},"POST",function(n){console.log("----------------",n),t.cjCompany=n.data.cjCompany,n.data.cjCompanyUsers.forEach(function(n){t.cjCompanyUsers.push(n)}),t.noData=n.data.cjCompanyUsers.length,t.noData<10?t.contentText="没有更多数据了":t.contentText="上拉显示更多"}))},togglePopup:function(t,n){this.obj=n,this.type=t},define:function(){var t=this;this.$getJson("/api/v2/vue/stPlus/company/delCompanyUser.jsp",{data:JSON.stringify({companyUserId:this.obj.id})},"POST",function(n){t.cjCompanyUsers.forEach(function(n,e){n.id==t.obj.id&&(t.cjCompanyUsers.splice(e,1),t.type="",t.obj={})})})},memberDetails:function(n){t.navigateTo({url:"/pages/member/memberDetails?userId="+n+"&companyId="+this.cjCompany.id})}}};n.default=u}).call(this,e("543d")["default"])},7839:function(t,n,e){"use strict";var o=e("a3d4"),a=e.n(o);a.a},8011:function(t,n,e){"use strict";(function(t){e("ced0"),e("921b");o(e("66fd"));var n=o(e("aded"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},a3d4:function(t,n,e){},aded:function(t,n,e){"use strict";e.r(n);var o=e("53a3"),a=e("b4cc");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("7839");var s,c=e("f0c5"),r=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);n["default"]=r.exports},b4cc:function(t,n,e){"use strict";e.r(n);var o=e("714c"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=a.a}},[["8011","common/runtime","common/vendor"]]]);