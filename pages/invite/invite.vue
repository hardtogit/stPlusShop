<template>
	<view>
		<view class="mainBottom">
			<image lazy-load :src="ctx + '/images/bg-05.png'" class="inviteTop"mode="widthFix"></image>
			<view class="inviteCon">
				<view class="inviteTitle">邀请团队成员</view>
				<view class="indexTop inviteInfo">
					<view class="photo">
						<image lazy-load :src="ctx + '/images/head.jpg'" class="photoCon"mode="widthFix"></image>
					</view>
					<view class="title">{{ cjCompany.cjUser.realName }}</view>
					<!-- <view class="tip">
						{{ cjCompany.name }}
						<text>{{ job }}</text>
					</view> -->
				</view>
				<view class="inviteJob">
					<view class="jobTip">完善你的姓名，与他一起共创世纪辉煌吧！</view>
					<view class="jobText"><input type="text" placeholder="请输入你的姓名" @input="onKeyUserNameInput" placeholder-class="jobPlaceholder" /></view>
				</view>
			</view>
		</view>
		<view class="footBtn buttonFixed">
			<button class="buttonBigWidth" open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber" @getphonenumber="getPhoneNumber">加入团队</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ctx: this.$ctx,
				memberId: "",
				cjCompany: {},
				mobile: "",
				loginCode: "",
				member: {}
			};
		},
		onLoad(option) {
			if (options.scene) {
				let scene = decodeURIComponent(options.scene);
				//&是我们定义的参数链接方式
				let datas = scene.split("&");
				this.memberId = datas[0];
			} else {
				this.memberId = option.memberId
			}
			if(options.scene){
			 this.memberId = options.scene
			}
			this.getData();
		},
		methods: {
			onKeyJobInput(event) {
				this.myJob = event.target.value
				console.log('----------------', this.myJob);
			},
			onKeyUserNameInput(event) {
				this.myName = event.target.value
				console.log('----------------', this.myName);
			},
			getData() {
				var _this = this
				wx.login({
					success: res => {
						_this.loginCode = res.code
						console.log("_this.loginCode:", _this.loginCode);
					}
				})
				this.$getJson('/api/v2/vue/ydd/index/member.jsp', {
					data: JSON.stringify({
						memberId: this.memberId
					})
				}, 'POST', res => {
					console.log("----------------", res)
					this.member = res.data
				});
			},
			getPhoneNumber(e) {
				console.log("e", e);
				// 加密数据
				var encryptedData = e.detail.encryptedData;
				// 解密方式
				var iv = e.detail.iv;
				if (e.detail.errMsg == 'getPhoneNumber:fail user deny') {
					console.log('他取消掉了');
				} else {
					console.log("mobile***********************", uni.getStorageSync("mobile"));
					let _this = this
					wx.checkSession({
						success(res) {
							_this.$getJson('/api/v2/vue/stPlusShop/common/getMobileAndOpenId.jsp', {
								data: JSON.stringify({
									decryptData: encryptedData,
									code: _this.loginCode,
									iv: iv
								})
							}, 'POST', res => {
								console.log('----phone------------', res);
								uni.setStorageSync('mobile', res.data.mobile);
								if (res.data.wxUserInfoByPage != null) {
									uni.setStorageSync('openid', res.data.wxUserInfoByPage.openid);
								}
								console.log("mobile:", uni.getStorageSync("mobile"));
								if (uni.getStorageSync("mobile") == "" || uni.getStorageSync("mobile") == null) {
									uni.showModal({
										title: '提示',
										content: "获取手机号失败,请重试",
										success: function(res) {
											//不操作
										}
									});
								} else {
									_this.$getJson('/api/v2/vue/ydd/user/register.jsp', {
										data: JSON.stringify({
											mobile: res.data.mobile,
											fatherPartnerId: _this.memberId
										})
									}, 'POST', res => {
										if (!res.data) {
											uni.showModal({
												title: '提示',
												content: res.message,
												success: function(res) {
													//不操作
												}
											});
										} else {
											uni.setStorageSync('userInfo', res.data);
											uni.redirectTo({
												url: '/pages/index/index'
											})
										}
									});
								}
							});
						},
						fail(err) {
							wx.login({
								success: res => {
									_this.loginCode = res.code
									console.log("_this.loginCode:", _this.loginCode);
								}
							})
						}
					})
				}
			},
		}
	}
</script>

<style>
	page {
		background: #fff;
	}

	.inviteTop {
		width: 100%;
	}

	.inviteTitle {
		margin-top: -140upx;
		font-size: 36upx;
		position: relative;
		z-index: 20;
		width: 80%;
		margin-left: 6%;
		padding-left: 30upx;
	}

	.inviteTitle:before {
		content: '';
		position: absolute;
		left: 0;
		top: 10upx;
		bottom: 14upx;
		border-left: 3px solid #549ef3;
	}

	.inviteInfo {
		background: none;
		margin-top: 70upx;
	}

	.inviteInfo .tip text {
		margin-left: 30upx;
	}

	.indexTop .photo {
		width: 160upx;
		height: 160upx;
		margin-bottom: 20upx;
	}

	.inviteJob {
		width: 100%;
		border-top: 1px solid #f5f5f5;
		padding: 30upx 6%;
		margin-top: 30upx;
	}

	.inviteJob .jobTip {
		font-size: 26upx;
		color: #000;
	}

	.inviteJob .jobText {
		margin-top: 10upx;
	}

	.inviteJob .jobText input {
		font-size: 26upx;
		color: #666;
	}

	.inviteJob .jobText .jobPlaceholder {
		color: #c0c0c0;
	}
</style>
