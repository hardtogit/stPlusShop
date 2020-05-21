<style lang="scss">
	page{
		background-color: #FBF8FB;
	}
	.header{
		height: 338upx;
		position: relative;
		background-image: url(../../static/home/index_bg.png);
		background-size: 100% 100%;
		.img{
			width: 100%;
			height: 100%;
		}
		.box{
			position: absolute;	
			padding: 22rpx;
			top:0;
			left: 0;
			width: 100%;
			height: 100%;
			.top{
				position: absolute;
				width: 100%;
				padding: 0 42upx;
				top:22upx;
				left: 0;
				height: 100upx;
				display: flex;
				align-items: center;
				.left{
					flex: 1;
					font-size: 28upx;
					color: #fff;
					.left-icon{
						color: #fff;
					}
				}
				.right{
					.turn{
						width: 31upx;
						height: 31upx;
						display: block;
					}
				}
			}
			.logo{
				display: block;
				width: 125upx;
				height: 125upx;
				background-color: #ddd;
				border-radius: 50%;
				margin: 50upx auto 0 auto;
			}
			.store-name{
				color: #fff;
				font-size: 36upx;
				text-align: center;
				margin-top: 6upx;
			}
			.name{
				text-align: center;
				margin-top: 4upx;
				.own-name{
					display: inline-block;
					color: #fff;	
					font-size: 33upx;
				}
			}
		}
	}
	.body{
		padding: 0 22upx;
		.card{
			background-color: #fff;
			border-radius:9px;
			padding: 0 30upx;
			margin-bottom: 20upx;
			.title{
				font-size: 33upx;
				color: #333;
				display: flex;
				align-items: center;
				height: 100upx;
				border-bottom: 1upx solid #E4E7ED;
			}
		}
	}
	.custom{
		.top{
			position: relative;
			height: 342upx;
			.img{
				display: block;
				width: 100%;
				height: 100%;
				background-image: url(../../static/icon/user/bgTwo2.png);
				background-size: 100% 100%;
			}
			.box{
				padding: 0 20upx;
				position: absolute;
				width: 100%;
				height: 100%;
				left: 0;
				top:0;
				.top{
					display: flex;
					align-items: center;
					height: 180upx;
					.head{
						display: block;
						width: 125upx;
						height: 125upx;
						border-radius: 50%;
					}
					.right{
						color: #fff;
						font-size: 33upx;
						padding-left:20upx ;
					}
				}
				.apply{
					display: flex;
					height: 70upx;
					padding: 0 22upx;
					background-color: #FFA493;
					border-radius: 10upx;
					align-items: center;
					.icon{
						width: 46upx;
						height: 46upx;
					}
					.text{ 
						color: #fff;
						font-size: 28upx;
						flex: 1;
						padding-left: 22upx;
					}
					.icon-you{
						color: #fff;
					}
				}
			}
		}
		.center{
			padding: 0 20upx;
			margin-top:-72upx ;
			position: relative;
			z-index: 10;
			.panel{
				margin-bottom: 20upx; 
				background-color: #fff;
				border-radius: 10upx;
				padding: 0 22upx;
				.panel-header{
					display: flex;
					height: 90upx;
					align-items: center;
					border-bottom: 1upx solid #ccc;
					.left{
						font-size: 31upx;
						flex: 1;
					}
					.right{
						color: #686868;
						font-size: 25upx;
					}
				}
				.panel-body{
					padding: 80upx 0 60upx 0;
					.item{
						display: inline-block;
						text-align: center;
						margin-right: 64upx;
						&.last{
							margin-right: 0;
						}
						.icon{
							width: 49upx;
							height: 46upx;
							display: inline-block;
						}
						.text{
							font-size: 28upx;
						}
					}
				}
			}
		}
	}
	
</style>
<template>
	<view class="user">
		<view v-if="userType">
			<view class="header">
				<view class="box">
					<view class="top">
						<view class="left">
							<text class="icon-zuo yticon left-icon"></text>
							<text>切换企业</text>
						</view>
						<view class="right">
							<image class="icon turn" src="../../static/icon/home/turn.png"></image>
						</view>
					</view>
					<image class="logo"></image>
					<view class="store-name">眉州东坡餐饮有限公司</view>
					<view class="name">
						<view class="own-name">王海龙</view>
					</view>
				</view>
			</view>
			<view class="body">
				<view class="card">
					<view class="title">
						个人信息
					</view>
					<list-cell icon="../static/icon/user/p1.png" iconColor="#54b4ef" title="我的信息" @eventClick="navTo('/pages/user/info/info')"></list-cell>
					<list-cell icon="../static/icon/user/p2.png" iconColor="#54b4ef" title="我的名片" @eventClick="navTo('/pages/collection/collection')"></list-cell>
					<list-cell icon="../static/icon/user/p3.png" iconColor="#54b4ef" title="切换到我的用户端" border="none" @eventClick="navTo('/pages/collection/collection')"></list-cell>
				</view>
				<view class="card">
					<view class="title">
						店铺管理
					</view>
					<list-cell icon="../static/icon/user/p4.png" iconColor="#54b4ef" title="店铺介绍" @eventClick="navTo('/pages/collection/collection')"></list-cell>
					<list-cell icon="../static/icon/user/p5.png" iconColor="#54b4ef" title="店铺动态" @eventClick="navTo('/pagesA/user/dynamic/add')"></list-cell>
					<list-cell icon="../static/icon/user/p6.png" iconColor="#54b4ef" title="商品管理" @eventClick="navTo('/pages/user/shopList/shopList')"></list-cell>
					<list-cell icon="../static/icon/user/p7.png" iconColor="#54b4ef" title="订单管理" @eventClick="navTo('/pages/collection/collection')"></list-cell>
					<list-cell icon="../static/icon/user/p8.png" iconColor="#54b4ef" title="销售管理" @eventClick="navTo('/pages/collection/collection')"></list-cell>
					<list-cell icon="../static/icon/user/p9.png" iconColor="#54b4ef" title="资金管理" @eventClick="navTo('/pages/collection/collection')"></list-cell>
					<list-cell icon="../static/icon/user/p10.png" iconColor="#54b4ef" title="员工管理" border="none" @eventClick="navTo('/pages/user/member/member')"></list-cell>
				</view>
			</view>
		</view>
		<view class="custom" v-if='!userType'>
			<view class="top">
				<image class="img" src="../../static/icon/user/bgTwo2.png"></image>
				<view class="box">
					<view class="top">
						<view class="left">
							<image class="head" :src="ctx+userInfo.headImgPath"></image>
						</view>
						<view class="right">
							{{userInfo.realName}}
						</view>
					</view>
					<view class="apply" @click="navTo('/pagesA/user/apply/apply')">
						<image class="icon" src="../../static/icon/user/app.png"></image>
						<view class="text">申请加入商圈</view>
						<text class="cell-more yticon icon-you"></text>
						</vie>
					</view>
				</view>
				<view class="center">
					<view class="panel">
						<view class="panel-header">
							<view class="left">我的订单</view>
							<view class="right" @tap="navTo('/pagesA/user/order/order')">查看全部<text class="cell-more yticon icon-you"></text></view>
						</view>
						<view class="panel-body">
							<view class="item" @tap="navTo('/pagesA/user/order/order?index=0')">
								<image class="icon" src="../../static/icon/user/o1.png" alt="">
									<view class="text">待付款</view>
							</view>
							<view class="item" @tap="navTo('/pagesA/user/order/order?index=1')">
								<image class="icon" src="../../static/icon/user/o2.png" alt="">
									<view class="text">已付款</view>
							</view>
							<view class="item" @tap="navTo('/pagesA/user/order/order?index=2')">
								<image class="icon" src="../../static/icon/user/o3.png" alt="">
									<view class="text">已完成</view>
							</view>
							<view class="item" @tap="navTo('/pagesA/user/order/order?index=3')">
								<image class="icon" src="../../static/icon/user/o4.png" alt="">
									<view class="text">已取消</view>
							</view>
							<view class="item last" @tap="navTo('/pagesA/user/order/order?index=4')">
								<image class="icon" src="../../static/icon/user/o5.png" alt="">
									<view class="text">售后</view>
							</view>
						</view>
						</vie>
					</view>
					<view class="panel">
						<view class="panel-header" @tap="navTo('/pagesA/user/order/coupon')">
							<view class="left">我的商圈券</view>
							<view class="right">查看全部<text class="cell-more yticon icon-you"></text></view>
						</view>
						<view class="panel-body">
							<view class="item" @tap="navTo('/pagesA/user/order/coupon?index=0')">
								<image class="icon" src="../../static/icon/user/o6.png" alt="">
									<view class="text">未使用</view>
							</view>
							<view class="item" @tap="navTo('/pagesA/user/order/coupon?index=1')">
								<image class="icon" src="../../static/icon/user/o7.png" alt="">
									<view class="text">已使用</view>
							</view>
							<view class="item" @tap="navTo('/pagesA/user/order/coupon?index=2')">
								<image class="icon" src="../../static/icon/user/o8.png" alt="">
									<view class="text">已过期</view>
							</view>
						</view>
						</vie>
					</view>
				</view>
			</view>
		</view>
		<uni-popup class="userPop" ref="popup" type="center">
			<view>
				<uni-pop ref="uniPop" @changes="childClick"></uni-pop>
			</view>
		</uni-popup>
	</view>
</template>
<script>
	import listCell from '@/components/mix-list-cell';
	import uniPop from '@/components/uniPop.vue';
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		data() {
			return {
				userType: false,
				coverTransform: 'translateY(0px)',
				coverTransition: '0s',
				moving: false,
				navList: [],
				loginCode: '',
				mobile: uni.getStorageSync(`mobile`),
				inviterCode: '',
				ctx: this.$ctx,
				userInfo: uni.getStorageSync(`userInfo`) || null,
				cjUser: uni.getStorageSync(`cjUser`) || null,
			}
		},
		components: {
			listCell,
			uniPop,
			uniPopup
		},
		methods: {
			navTo(url) {
				console.log('s')
				uni.navigateTo({
					url
				})
			},
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
						console.log("--------------------------", uni.getStorageSync('cjUser'))
					})
					this.mobile = e.mobile;
					this.$refs.popup.close()
				}
			}
		},
		onShow() {
			this.login(); //微信登录
			if (!uni.getStorageSync('mobile')) {
				//弹出登录
				this.$refs.popup.open()
				//防止点击遮罩关闭
				this.$refs.popup.clickClose(false)
			} else {
				this.$refs.popup.close()
				this.mobile = uni.getStorageSync(`mobile`)
				this.userInfo = uni.getStorageSync(`userInfo`)
				this.cjUser = uni.getStorageSync(`cjUser`)
				console.log("this.cjUser", this.cjUser);
				this.$getJson('/api/v2/vue/stPlusShop/common/getUserInfo.jsp', {
					data: JSON.stringify({
						mobile: uni.getStorageSync('mobile'),
						companyId: uni.getStorageSync('companyId')
					})
				}, 'POST', res => {
					// this.$emit("changes",res.data);
					uni.setStorageSync('cjUser', res.data);
					this.cjUser = uni.getStorageSync('cjUser');
				})
			}

			this.$getJson('/api/v2/vue/stPlus/company/companyList.jsp', {}, 'POST', res => {
				console.log(res)
				return;
				this.cjCompanyUsers = res.data.cjCompanyUsers;
				this.cjUser = res.data.cjUser;
			});
		},
	}
</script>
