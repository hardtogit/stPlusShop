<template>
	<view class="content">
		<!--订单状态-->
		<view class="navbar">
			<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{current: tabCurrentIndex === index}"
			 @click="tabClick(index,item.id)">
				{{item.name}}
			</view>
		</view>

		<!--订单列表-->
		<swiper :current="tabCurrentIndex" class="swiper-box" duration="300" @change="changeTab">
			<swiper-item class="tab-content" v-for="(tabItem,tabIndex) in navList" :key="tabIndex">
				<scroll-view class="list-scroll-content" scroll-y @scrolltolower="loadData" :show-scrollbar="false">
					<!-- 空白页 -->
					<!-- <empty v-if="tabItem.loaded === true && tabItem.orderList.length === 0"></empty> -->

					<!-- 订单列表 -->
					<view v-for="(item,index) in orderList" :key="index" class="order-item" >
						<view class="store-name">
							{{item.companyName}}
						</view>
						<view class="flex">
							<view class="left">
								<image :src="url+item.goodsImg"></image>
							</view>
							<view class="right">
								<view class="title">{{item.couponName}}</view>
								<view class="dis">{{item.subHeading}}</view>
								<view class="price">{{item.price/100}}</view>
							</view>
						</view>
						<view class="bottom">
							<view class="left">
								截止日期：{{item.endTimeStr}}
							</view>
							<view class="right">
								<view class="btn" @tap.stop="openCodePop(item)">
									去使用
								</view>
							</view>
						</view>

					</view>

					<uni-load-more :status="loadingType"></uni-load-more>

				</scroll-view>
			</swiper-item>
		</swiper>
		<!-- 弹窗 -->
		<uni-popup ref="codePop" type="center" :show=true>
			<view class="pop-content">
				<view class="title">
					{{currentCoupon.couponName}}
				</view>
				<view class="time">
					有效期至：：{{currentCoupon.endTimeStr}}
				</view>
				<image class="code" :src="url+currentCoupon.qrcodePath">

				</image>
				<view class="code-num">券码：{{currentCoupon.code}}</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import uniPopup from '@/components/uni-popup/uni-popup';
	import empty from "@/components/empty";
	import Json from '@/Json';
	export default {
		components: {
			uniLoadMore,
			empty,
			uniPopup,
		},
		data() {
			return {
				tabCurrentIndex: 0, //当前tab索引
				navList: [{
					name: '未使用',
					id: 1
				}, {
					name: '已使用',
					id: 2
				}, {
					name: '已过期',
					id: 3
				}], //tab数组
				headerPosition: "fixed",
				orderList: [], //订单列表
				memberId: uni.getStorageSync(`userInfo`).id, //当前用户id
				pageSize: 10, //条数
				pageNumber: 1, //页数
				status: '', //订单状态
				loadingType: '', //数据加载状态
				url: this.$ctx,
				isCheapPurchase: 0,
				currentCoupon: {}
			};
		},
		onPageScroll(e) {
			//兼容iOS端下拉时顶部漂移
			if (e.scrollTop >= 0) {
				this.headerPosition = "fixed";
			} else {
				this.headerPosition = "absolute";
			}
		},
		//下拉刷新
		onPullDownRefresh() {
			this.pageNumber = 1
			this.orderList = [];
			this.loadData(1);
		},
		//加载更多
		onReachBottom() {
			this.loadData();
		},
		onLoad(options) {
			this.tabCurrentIndex = +options.index || 0;
			this.isCheapPurchase = +options.isCheapPurchase;
			this.loadData();

		},
		methods: {
			goDetail(url) {
				uni.navigateTo({
					url
				})

			},
			buyBack(item) {
				uni.navigateTo({
					url: `/pagesA/user/backSale/backSale?id=${item.order.id}&orderNo=${item.order.sn}`
				})
			},
			//打开二维码
			openCodePop(currentCoupon) {
				this.currentCoupon = currentCoupon
				this.$refs.codePop.open()
			},
			//获取订单列表
			loadData(e) {
				// this.orderList = [];
				//这里是将订单挂载到tab列表下
				let index = this.tabCurrentIndex;
				let navItem = this.navList[index];
				this.status = navItem.id;
				this.$getJson("/api/v3/my/coupon/statusData.jsp", {
					pageNumber: this.pageNumber,
					pageSize: this.pageSize,
					status: this.status
				}, "POST", res => {
					let orderList = res.data
					if (orderList.length > 0) {
						if (this.pageNumber == 1) {
							this.orderList = orderList;
						} else {
							this.orderList = this.orderList.concat(orderList);
						}
						this.pageNumber += 1
					} else {
						this.loadingType = 'noMore';
					}
					if (e == 1) {
						uni.stopPullDownRefresh();
					} else {
						uni.hideLoading()
					}
					this.loadingType = orderList.length < 8 ? 'nomore' : 'more';
				});
				//loaded新字段用于表示数据加载完毕，如果为空可以显示空白页
				// this.$set(navItem, 'loaded', true);

				//判断是否还有数据， 有改为 more， 没有改为noMore 
				// this.loadingType = 'more';
			},
			//swiper 切换
			changeTab(e) {
				this.tabCurrentIndex = e.target.current;
				this.pageNumber = 1
				this.orderList = [];
				this.loadData();
			},
			//顶部tab点击
			tabClick(index) {
				this.tabCurrentIndex = index;
				this.pageNumber = 1
				this.orderList = [];
				// this.loadData()
			},
			//删除订单
			deleteOrder(id, index) {
				uni.showModal({
					content: '是否删除订单？',
					success: (e) => {
						if (e.confirm) {
							let data = {
								data: JSON.stringify({
									id: id,
									memberId: uni.getStorageSync(`userInfo`).id
								})
							}
							this.$getJson("/api/v2/vue/ydd/order/doDelOrder.jsp", data, "POST", res => {
								uni.hideLoading(); //正在加载
								this.orderList.splice(index, 1)
							})
						}
					}
				})
			},
			//取消订单
			cancelOrder(item) {
				uni.showModal({
					content: '是否取消订单？',
					success: (e) => {
						if (e.confirm) {
							this.$getJson("/jsp/api/order/doCancel.jsp", {
								id: item.id,
								memberId: uni.getStorageSync(`userInfo`).id
							}, "POST", res => {
								uni.hideLoading(); //正在加载
								if (res.success == true || res.success == 'true') {
									this.pageNumber = 1
									this.orderList = [];
									this.loadData()
								}
							})
						}
					}
				})

			},
			//复制订单
			copySn(sn) {
				//复制
				uni.setClipboardData({
					data: sn,
					success: function() {
						uni.showToast({
							title: sn + '\r\n复制成功',
							icon: 'none'
						});
					}
				});

			},
			//订单状态文字和颜色
			orderStateExp(state) {
				let stateTip = '',
					stateTipColor = '#ff0000';
				switch (+state) {
					case 1:
						stateTip = '待付款';
						break;
					case 2:
						stateTip = '待发货';
						break;
					case 40:
						stateTip = '订单已关闭';
						stateTipColor = '#999';
						break;
						//更多自定义
				}
				return {
					stateTip,
					stateTipColor
				};
			},
			pay(item) {
				uni.navigateTo({
					url: '/pages/money/pay?money=' + item.order.shouldPayAmountShow + '&sn=' + item.order.sn
				});
			}
		},
	}
</script>

<style lang="scss">
	page,
	.content {
		background: #fff;
		height: 100%;
	}

	.swiper-box {
		height: calc(100% - 40px);
	}

	.list-scroll-content {
		height: 100%;
	}

	.navbar {
		display: flex;
		height: 100upx;
		padding: 0 5px;
		background: #fff;
		box-shadow: 0 1px 5px rgba(0, 0, 0, .06);
		position: relative;
		z-index: 10;

		.nav-item {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 15px;
			color: $font-color-dark;
			position: relative;

			&.current {
				&:after {
					content: '';
					position: absolute;
					left: 50%;
					bottom: 20upx;
					transform: translateX(-50%);
					width: 80upx;
					height: 0;
					border-bottom: 4upx solid #FF474C;
				}
			}
		}
	}

	.uni-swiper-item {
		height: auto;
	}

	.tab-content {
		padding: 0 40upx;

		.order-item {
			border-bottom: 1upx solid #CCCCCC;
			padding-bottom: 20upx;

			.store-name {
				font-size: 28upx;
				padding: 24upx 0;
				font-weight: 600;
			}

			.flex {
				display: flex;

				.left {
					width: 100upx;
					height: 100upx;

					image {
						display: block;
						width: 100%;
						height: 100%;
					}
				}

				.right {
					padding-left: 15upx;

					.title {
						font-size: 26upx;
					}

					.dis {
						font-size: 24upx;
					}
				}
			}

			.bottom {
				display: flex;

				.left {
					flex: 2;
					font-size: 24upx;
					color: #6D6D6D;
				}

				.right {
					flex: 1;
					display: flex;
					justify-content: flex-end;

					.btn {
						width: 104upx;
						height: 42upx;
						border: 1upx solid rgba(255, 71, 76, 1);
						border-radius: 7upx;
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 22upx;
						color: #FF474C;
					}
				}
			}
		}
	}



	/* load-more */
	.uni-load-more {
		display: flex;
		flex-direction: row;
		height: 80upx;
		align-items: center;
		justify-content: center
	}

	.uni-load-more__text {
		font-size: 28upx;
		color: #999
	}

	.uni-load-more__img {
		height: 24px;
		width: 24px;
		margin-right: 10px
	}

	.uni-load-more__img>view {
		position: absolute
	}

	.uni-load-more__img>view view {
		width: 6px;
		height: 2px;
		border-top-left-radius: 1px;
		border-bottom-left-radius: 1px;
		background: #999;
		position: absolute;
		opacity: .2;
		transform-origin: 50%;
		animation: load 1.56s ease infinite
	}

	.uni-load-more__img>view view:nth-child(1) {
		transform: rotate(90deg);
		top: 2px;
		left: 9px
	}

	.uni-load-more__img>view view:nth-child(2) {
		transform: rotate(180deg);
		top: 11px;
		right: 0
	}

	.uni-load-more__img>view view:nth-child(3) {
		transform: rotate(270deg);
		bottom: 2px;
		left: 9px
	}

	.uni-load-more__img>view view:nth-child(4) {
		top: 11px;
		left: 0
	}

	.load1,
	.load2,
	.load3 {
		height: 24px;
		width: 24px
	}

	.load2 {
		transform: rotate(30deg)
	}

	.load3 {
		transform: rotate(60deg)
	}

	.load1 view:nth-child(1) {
		animation-delay: 0s
	}

	.load2 view:nth-child(1) {
		animation-delay: .13s
	}

	.load3 view:nth-child(1) {
		animation-delay: .26s
	}

	.load1 view:nth-child(2) {
		animation-delay: .39s
	}

	.load2 view:nth-child(2) {
		animation-delay: .52s
	}

	.load3 view:nth-child(2) {
		animation-delay: .65s
	}

	.load1 view:nth-child(3) {
		animation-delay: .78s
	}

	.load2 view:nth-child(3) {
		animation-delay: .91s
	}

	.load3 view:nth-child(3) {
		animation-delay: 1.04s
	}

	.load1 view:nth-child(4) {
		animation-delay: 1.17s
	}

	.load2 view:nth-child(4) {
		animation-delay: 1.3s
	}

	.load3 view:nth-child(4) {
		animation-delay: 1.43s
	}

	@-webkit-keyframes load {
		0% {
			opacity: 1
		}

		100% {
			opacity: .2
		}
	}

	.pop-content.pop-content {
		width: 644upx;
		height: 820upx;
		background: rgba(255, 255, 255, 1);
		border-radius: 10upx;
		padding: 50upx;

		.title {
			font-size: 42upx;

			text-align: center;
		}

		.time {
			font-size: 33upx;
			color: #898989;
			text-align: center;
			margin-top: 30upx;
		}

		.code {
			display: block;
			width: 420upx;
			height: 420upx;
			margin: 50upx auto 0 auto;
		}

		.code-num {
			text-align: center;
			font-size: 33upx;
			margin-top: 40upx;
		}

	}
	::-webkit-scrollbar{
	width: 0;
	height: 0;
	color: transparent;
	}
</style>
