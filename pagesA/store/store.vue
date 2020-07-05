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
					&.coupon{
						// height: 400upx;
					}
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
							position: relative;
							.badge{
								height: 28upx;
								min-width: 28upx;
								border-radius: 14upx;
								color: #fff;
								background-color: #FF474C;
								display: flex;
								align-items: center;
								justify-content: center;
								position: absolute;
								right: -10upx;
								top:-10upx;
								z-index: 10;
								font-size: 20upx;
							}
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
					<list-cell icon="../static/icon/user/p1.png" iconColor="#54b4ef" title="我的信息" @eventClick="navTo('/pagesA/personal/personal')"></list-cell>
					<list-cell icon="../static/icon/user/p2.png" iconColor="#54b4ef" title="我的名片" @eventClick="businessCard()"></list-cell>
					<list-cell icon="../static/icon/user/p3.png" iconColor="#54b4ef" title="切换到我的用户端" border="none" @eventClick="navTo('/pages/collection/collection')"></list-cell>
				</view>
				<view class="card">
					<view class="title">
						店铺管理
					</view>
					<list-cell icon="../static/icon/user/p4.png" iconColor="#54b4ef" title="店铺介绍" @eventClick="navTo('/pagesA/storeInfo/storeInfo')"></list-cell>
					<list-cell icon="../static/icon/user/p5.png" iconColor="#54b4ef" title="店铺动态" @eventClick="navTo('/pagesA/user/dynamic/list')"></list-cell>
					<list-cell icon="../static/icon/user/p6.png" iconColor="#54b4ef" title="商品管理" @eventClick="navTo('/pagesA/user/shopList/shopList')"></list-cell>
					<list-cell icon="../static/icon/user/p7.png" iconColor="#54b4ef" title="订单管理" @eventClick="navTo('/pagesA/store/order/order')"></list-cell>
					<list-cell icon="../static/icon/user/p8.png" iconColor="#54b4ef" title="销售管理" @eventClick="navTo('/pages/collection/collection')"></list-cell>
					<list-cell icon="../static/icon/user/p9.png" iconColor="#54b4ef" title="资金管理" @eventClick="navTo('/pagesA/user/money/index')"></list-cell>
					<list-cell icon="../static/icon/user/p10.png" iconColor="#54b4ef" title="员工管理" border="none" @eventClick="navTo('/pagesA/user/member/member')"></list-cell>
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
	import uniBadge from "@/components/uni-badge/uni-badge.vue"
	import uniEditor from "@/components/uni-editor/uni-editor.vue"
	export default {
		data() {
			return {
				userType: true,
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
				orderCount: {},
				couponCount: {},
				companyInfo: {},
				companyUser: {}
			}
		},
		components: {
			listCell,
			uniPop,
			uniPopup,
			uniBadge
		},
		methods: {
			navTo(url) {

				uni.navigateTo({
					url
				})
			},
			//去名片页
			businessCard() {
				console.log(this.companyInfo,this.companyUser)
				uni.navigateTo({
					url: '/pagesA/businessCard/businessCard?companyId=' + this.companyInfo.id + '&userId=' + this.companyUser
						.id + '&entrance=1'
				});
			},
			//获取商品数量统计
			getCount() {
				this.$getJson('/api/v3/my/store/collectList.jsp', {
					pageNumber: 1
				}, 'POST', res => {

				})
				this.$getJson('/api/v3/my/order/statics.jsp', {}, 'POST', res => {
					console.log(res)
					this.orderCount = res.data

				});
				this.$getJson('/api/v3/my/coupon/statics.jsp', {}, 'POST', res => {
					console.log(res)
					this.couponCount = res.data
				});


			},
			conect() {
				wx.makePhoneCall({
					phoneNumber: '400-1667600'
				})
			},
			getData() {
				//店铺介绍
				this.$getJson('/api/v2/vue/sqPlus/company/companyInfo.jsp', {
					data: JSON.stringify({
						'companyId': 202
					})
				}, 'POST', res => {
					this.companyInfo = res.data.cjCompany
					this.companyUser = res.data.cjCompany.cjUser
					this.companyInfo = { ...res.data.cjCompany
						// desc: dealRich(res.data.cjCompany.desc)
					}
					console.log(this.companyInfo, 'companyInfo')
					console.log(this.companyUser, 'companyUser')
				})


			}
		},
		onShow() {
			this.$refs.popup.close()
			this.mobile = uni.getStorageSync(`mobile`)
			this.userInfo = uni.getStorageSync(`userInfo`)
			this.cjUser = uni.getStorageSync(`cjUser`)
			console.log("this.cjUser", this.cjUser);
			// this.getCount()
			this.getData()
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
			this.$getJson('/api/v2/vue/stPlus/company/companyList.jsp', {}, 'POST', res => {
				console.log(res, 'companyList')

			});
		},
	}
</script>
