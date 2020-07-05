<template>
	<view>
		<uni-popup class="userPop" ref="popup" type="center">
			<view>
				<uni-pop ref="uniPop" @changes="childClick" :wxUserInfo="wxUserInfo"></uni-pop>
			</view>
		</uni-popup>
		<button class="btn" v-if="!auth" open-type="getUserInfo" @getuserinfo="userInfoHandler"> 授权并登录 </button>
	</view>
</template>

<script>
	import uniPop from '@/components/uniPop.vue';
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		data() {
			return {
				wxUserInfo: {},
				auth:true
			};
		},
		components: {
			uniPop,
			uniPopup
		},
		onShow() {
			console.log('asdasdasdas')
			const $this = this
		   wx.getSetting({
		     success(res) {
		       if (!res.authSetting['scope.userInfo']) {
					$this.auth=false
		       }else{
				   $this.auth=true
				   wx.getUserInfo({
				   	success:function(res){
						console.log(res)
						$this.wxUserInfo=res.userInfo
					}
				   })
				   $this.login()
				   //弹出登录
				   $this.$refs.popup.open()
				   //防止点击遮罩关闭
				   $this.$refs.popup.clickClose(false)
			   }
		     },
			 fail(){
				 $this.auth=false
			 }
		   })
		},
		methods: {
			login() {
				var _this = this
				wx.login({
					success: res => {
						console.info('res', res)
						_this.loginCode = res.code
						console.log("_this.loginCode:", _this.loginCode);
						_this.$refs.uniPop.show({
							title: '登录',
							content: '是否同意获取手机号？',
							shade: true,
							shadeClose: true,
							time: 5,
							anim: 'fadeIn',
							isVisible: true,
							position: 'bottom',
							loginCode: res.code,
							isUrl: true
						})
					}
				})
			},
			userInfoHandler(e){
				 if(e.detail.userInfo){
					 this.wxUserInfo=e.detail.userInfo
					 this.login()
					 //弹出登录
					 this.$refs.popup.open()
					 //防止点击遮罩关闭
					 this.$refs.popup.clickClose(false)
				 }
			}, 
			childClick(e) {
				if (e != true) {
					// console.log(e,'asas----------')
					uni.setStorageSync('userInfo', e);
					uni.setStorageSync('mobile', e.mobile);
					// uni.setStorageSync('openid', e.openid);
					this.userInfo = e;
					this.$getJson('/api/v2/vue/stPlusShop/common/getUserInfo.jsp', {
						data: JSON.stringify({
							mobile: e.mobile,
							companyId: uni.getStorageSync('companyId')
						})
					}, 'POST', res => {
						// this.$emit("changes",res.data);
						uni.setStorageSync('cjUser', res.data);
						this.cjUser = uni.getStorageSync('cjUser');
						uni.navigateBack()
						console.log("--------------------------", uni.getStorageSync('cjUser'))
					})
					this.mobile = e.mobile;
					this.$refs.popup.close()

				}
			}
		}
	}
</script>

<style lang="scss">
    .btn{
 	   width: 640upx;
 	   height: 90upx;
 	   color: #fff;
 	   background-color: #FF474D;
 	   display: flex;
 	   align-items: center;
 	   justify-content: center;
	   position: fixed;
	   bottom: 60upx;
	   left: 55upx;
    }
</style>
