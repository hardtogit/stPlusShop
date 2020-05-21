<template>
	<view>
		<view class="mainBottom">
			<view class="shopDetailsBanner">
				<image lazy-load :src="ctx + resources.bannerImg"mode="widthFix"></image>
			</view>
			<view class="shopDetailsTitle">{{ resources.name }}</view>
			<view class="shopDetailsLabel">
				<view class="labelCon">
					价格：
					<text class="money" v-if="resources.id != popularId">&yen;{{ goods.priceShow }}</text>
					市场价：
					<text class="del">&yen;{{ goods.marketPriceShow }}</text>
				</view>
				<view class="LabelAddress" v-if="resources.id != popularId">
					{{addr}}
				</view>
			</view>
			<view class="shopDetailsInfo">
				<view class="shopDetailsInfoTit">介绍</view>
				<view class="shopDetailsInfoCon">
					<view class="content" space="nbsp" v-html="resources.intro"></view>
					<view v-for="img in resources.imgArr" class="resourceImg" style="width: 640upx;margin: 0 auto;">
						<image lazy-load :src="ctx + img" style="width:100%;"mode="widthFix"></image>
					</view>
				</view>
			</view>
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<!-- <view class="footBtn buttonFixed" v-if="!mobile"><button class="buttonBigWidth" open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber"
			 @getphonenumber="getPhoneNumber">立即购买</button></view>
		 <view class="footBtn buttonFixed" v-if="mobile"><button class="buttonBigWidth" @click="goResConfirm()">立即购买</button></view> -->
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ctx: this.$ctx,
				shops: {},
				resources: {},
				addr: '',
				goods: [],
				member: {},
				level: '',
				goodsId: '',
				isCollection: 0,
				popularId: 0,
				popularMoney: 1,
				resourcesId: "",
				loginCode: "",
				mobile:uni.getStorageSync("mobile")
			}
		},
		onLoad(option) {
			this.resourcesId = option.resourcesId;
			this.getData();
		},
		methods: {
			getData() {
				var _this = this
				wx.login({
					success: res => {
						_this.loginCode = res.code
						console.log("_this.loginCode:", _this.loginCode);
					}
				})
				this.$getJson('/jsp/api/resources/resoucesInfo.jsp', {
					resourcesId: this.resourcesId
				}, 'POST', res => {
					console.log("data", res.data);
					this.shops = res.data.relatedResources;
					this.resources = res.data.resources;
					this.resources.intro = res.data.resources.intro.replace(/<img/g, '<img style="width:100%;"');
					this.addr = res.data.addr.replace("<br>","");
					this.goods = res.data.goods;
					this.member = res.data.member;
					this.level = res.data.level;
					this.goodsId = res.data.goods.id;
					this.isCollection = res.data.isCollection;
					this.popularId = res.data.popularId;
					this.popularMoney = res.data.popularMoney;
				});
			},
			goResConfirm(){
				uni.navigateTo({
					url: '/pages/succend/resConfirm?goodsId=' + this.goodsId
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
							if (uni.getStorageSync("mobile") != "" && uni.getStorageSync("mobile") != -null) {
								_this.$getJson('/api/v2/vue/sqPlus/index/login.jsp', {
									data: JSON.stringify({
										mobile: uni.getStorageSync("mobile")
									})
								}, 'POST', res => {
									uni.navigateTo({
										url: '/pages/succend/resConfirm?goodsId=' + _this.goodsId
									});
								});
							} else {
								_this.$getJson('/api/v2/vue/sqPlus/common/getMobileAndOpenId.jsp', {
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
										_this.$getJson('/api/v2/vue/sqPlus/index/login.jsp', {
											data: JSON.stringify({
												mobile: uni.getStorageSync("mobile")
											})
										}, 'POST', res => {
											uni.navigateTo({
												url: '/pages/succend/resConfirm?goodsId=' + _this.goodsId
											});
										});
									}
								});
							}
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
			// getPhoneNumber(e) {
			// 	let _this = this
			// 	uni.login({
			// 			success(res) {
			// 				console.log("e", e);
			// 				console.log("res", res);
			// 				// 加密数据
			// 				var encryptedData = e.detail.encryptedData;
			// 				// 解密方式
			// 				var iv = e.detail.iv;
			// 				if (e.detail.errMsg == 'getPhoneNumber:fail user deny') {
			// 					console.log('他取消掉了');
			// 				} else {
			// 					if (uni.getStorageSync("mobile") != "" && uni.getStorageSync("mobile") != -null) {
			// 						_this.$getJson('/api/v2/vue/sqPlus/index/login.jsp', {
			// 							data: JSON.stringify({
			// 								mobile: uni.getStorageSync("mobile")
			// 							})
			// 						}, 'POST', res => {
			// 							uni.navigateTo({
			// 								url: '/pages/succend/resConfirm?goodsId=' + _this.goodsId
			// 							});
			// 						});
			// 					} else {
			// 						_this.$getJson('/api/v2/vue/sqPlus/common/getMobileAndOpenId.jsp', {
			// 							data: JSON.stringify({
			// 								decryptData: encryptedData,
			// 								code: res.code,
			// 								iv: iv
			// 							})
			// 						}, 'POST', res => {
			// 							console.log('----phone------------', res);
			// 							uni.setStorageSync('mobile', res.data.mobile);
			// 							if (res.data.wxUserInfoByPage != null) {
			// 								uni.setStorageSync('openid', res.data.wxUserInfoByPage.openid);
			// 							}
			// 							console.log("mobile:", uni.getStorageSync("mobile"));
			// 							if (uni.getStorageSync("mobile") == "" || uni.getStorageSync("mobile") == null) {
			// 								uni.showModal({
			// 									title: '提示',
			// 									content: "获取手机号失败,请重试",
			// 									success: function(res) {
			// 										//不操作
			// 									}
			// 								});
			// 							} else {
			// 								_this.$getJson('/api/v2/vue/sqPlus/index/login.jsp', {
			// 									data: JSON.stringify({
			// 										mobile: uni.getStorageSync("mobile")
			// 									})
			// 								}, 'POST', res => {
			// 									uni.navigateTo({
			// 										url: '/pages/succend/resConfirm?goodsId=' + _this.goodsId
			// 									});
			// 								});
			// 							}
			// 						});
			// 					}
			// 				}
			// 			}
			// 		});
			// 	}
		}
	}
</script>

<style>
	page {
		background: #fff;
	}

	.mainBottom {
		float: initial;
	}

	.shopDetailsBanner {
		width: 100%;
		display: block;
		overflow: hidden;
	}

	.shopDetailsBanner image {
		width: 100%;
	}

	.shopDetailsTitle {
		text-align: center;
		font-size: 34upx;
		color: #000;
		padding: 20upx 30upx;
	}

	.shopDetailsLabel {
		padding: 0 30upx 30upx;
	}

	.shopDetailsLabel .labelCon {
		color: #999;
	}

	.shopDetailsLabel .labelCon .money {
		font-size: 24upx;
		margin-right: 40upx;
		display: inline-block;
	}

	.shopDetailsLabel .labelCon .money text {
		font-size: 36upx;
		color: #ea3800;
	}

	.shopDetailsLabel .labelCon .del {
		font-size: 24upx;
		display: inline-block;
	}

	.shopDetailsLabel .labelCon .del text {
		position: relative;
	}

	.shopDetailsLabel .labelCon .del text:before {
		content: '';
		position: absolute;
		top: 50%;
		left: 0;
		right: 0;
		border-top: 1px solid #999;
	}

	.shopDetailsLabel .LabelAddress {
		font-size: 24upx;
		color: #999;
		padding-left: 40upx;
		position: relative;
		margin-top: 10upx;
	}

	.shopDetailsLabel .LabelAddress:after {
		content: '\e9ae';
		position: absolute;
		left: 0;
		top: 50%;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
		font-size: 30upx;
		color: #999;
	}

	.shopDetailsInfo {
		width: 100%;
		display: block;
		overflow: hidden;
		padding: 0 30upx;
	}

	.shopDetailsInfoTit {
		border-top: 1px solid #f5f5f5;
		padding: 30upx 0 20upx;
		font-size: 34upx;
		color: #000;
	}

	.shopDetailsInfoCon .content {
		font-size: 28upx;
		color: #666;
	}

	.shopDetailsInfoCon image {
		width: 100%;
	}
</style>
