<template>
	<view class="content">
		<!--订单状态-->
		<view class="navbar">
			<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{current: tabCurrentIndex === index}"
			 @click="tabClick(index,item.id)">
				{{item.name}}
			</view>
		</view>
		<view class="back-status" v-if="tabCurrentIndex==4">
			<view class="status-item"  :class="{active: assStatus === 0}" @click="setAssStatus(0)">全部</view>
			<view class="status-item"  :class="{active: assStatus === 1}" @click="setAssStatus(1)">待审核</view>
			<view class="status-item"  :class="{active: assStatus === 2}" @click="setAssStatus(2)">已退款</view>
		</view>
		<!--订单列表-->
		<swiper :current="tabCurrentIndex" class="swiper-box" duration="300" @change="changeTab">
			<swiper-item class="tab-content" v-for="(tabItem,tabIndex) in navList" :key="tabIndex">
				<scroll-view class="list-scroll-content" scroll-y @scrolltolower="loadData">
					<!-- 订单列表 -->
					<view v-for="(item,index) in orderList" :key="index" class="order-item">
						<view class="top">
							<view class="left">订单编号：{{item.order.sn}}</view>
							<view class="right">{{item.order.statusStr}}</view>
						</view>
						<view class="center" v-for="(value,i) in item.products" :key="i">
							<view class="left">
								<image class="img" :src="url+value.goodsImg"></image>
							</view> 
							<view class="center"> 
								<view class="name">{{value.goodsName}}</view>
								<view class="dis">{{value.goodsSpecName}}</view>
							</view>
							<view class="right">
								<view class="price">{{value.goodsPrice/100}}</view>
								<view class="num">x{{value.goodsCountLong}}</view>
							</view>
						</view> 
						<view class="bottom">
							<view class="left">
								下单时间：{{item.order.addTimeStr}}
							</view>
							<view class="right">
								<view class="btn" v-if="item.order.status==1">
									确定
								</view>
								<view class="btn" v-if="status==2">
									发货
								</view>
								<view class="btn" v-if="status==4&&assStatus==1" @click="push('/pagesA/backSale/backSale')">
									审核
								</view>
							</view>
						</view>

					</view>
					<uni-load-more :status="loadingType"></uni-load-more>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	export default {
		components: {
			uniLoadMore
		},
		data() {
			return {
				tabCurrentIndex: 0, //当前tab索引
				navList: [], //tab数组
				headerPosition: "fixed",
				orderList: [], //订单列表
				pageSize: 10, //条数
				pageNumber: 1, //页数
				status: '', //订单状态
				loadingType: '', //数据加载状态
				url: this.$ctx,
				companyId: "",
				assStatus:0
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
			this.companyId = options.companyId
			this.getTable();
		},
		methods: {
			push(url){
				uni.navigateTo({
					url
			    })
			},
			// 获取订单状态
			getTable() {
				this.$getJson("/api/v3/order/status.jsp", {}, "POST", res => {
					this.navList = res.data;
					this.loadData();
				})
			},
			setAssStatus(assStatus){
				this.assStatus=assStatus
				this.pageNumber = 1
				this.orderList = [];
				this.loadData();
				console.log("1111111111111111111111111111")
			}, 
			//获取订单列表
			loadData(e) {
				// this.orderList = [];
				//这里是将订单挂载到tab列表下
				let index = this.tabCurrentIndex;
				let navItem = this.navList[index];
				this.status = navItem.id;
				this.$getJson("/api/v3/order/statusData.jsp", {
					pageNumber: this.pageNumber,
					pageSize: this.pageSize,
					status: this.status,
					storeId: this.companyId || 202,
					isCheapPurchase: true,
					assStatus:this.assStatus
				}, "POST", res => {
					let orderList = res.data
					console.log("--orderList---------", orderList)
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
					this.loadingType = orderList.length < 10 ? 'nomore' : 'more';
				});
				//loaded新字段用于表示数据加载完毕，如果为空可以显示空白页
				// this.$set(navItem, 'loaded', true);

				//判断是否还有数据， 有改为 more， 没有改为noMore 
				// this.loadingType = 'more';
			},
			confirm(sn) {
				var _this = this
				uni.showModal({
					title: '提示',
					content: '确认完成订单',
					success: function(res) {
						if (res.confirm) {
							_this.$getJson(
								'/api/v2/vue/sqPlus/order/confirmOrder.jsp', {
									data: JSON.stringify({
										sn: sn
									})
								},
								'POST',
								res => {
									_this.pageNumber = 1
									_this.orderList = [];
									_this.loadData();
								}
							);
						} else if (res.cancel) {}
					}
				});
			},
			refund(sn) {
				var _this = this
				uni.showModal({
					title: '提示',
					content: '确认退款吗？',
					success: function(res) {
						if (res.confirm) {
							_this.$getJson(
								'/api/v2/vue/sqPlus/order/refundOrder.jsp', {
									data: JSON.stringify({
										sn: sn
									})
								},
								'POST',
								res => {
									_this.pageNumber = 1
									_this.orderList = [];
									_this.loadData();
								}
							);
						} else if (res.cancel) {}
					}
				});
			},
			//swiper 切换
			changeTab(e) {
				this.tabCurrentIndex = e.target.current;
				this.pageNumber = 1
				this.orderList = [];
				this.loadData();
				console.log("1111111111111111111111111111")
			},
			//顶部tab点击
			tabClick(index) {
				this.tabCurrentIndex = index;
				this.pageNumber = 1
				this.orderList = [];
				// this.loadData()
				console.log("22222222222222222222222222")
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
		},
	}
</script>

<style lang="scss">
	.back-status{
		display: flex;
		align-items: center;
		justify-content: space-around;
		height: 80upx;
		.status-item{
			width: 112upx;
			text-align: center;
			font-size: 22upx;
			color: #333;
			line-height: 60upx;
			&.active{
				border-bottom: 2upx solid #FF2B42;
			}
		}
	}
	.order-item{
		background-color: #fff;
		width: 687upx;
		// height: 278upx;
		box-shadow:0px 0px 17upx 0px rgba(0, 0, 0, 0.1);
		border-radius:14upx;
		margin: 20upx auto 0 auto;
		padding: 24upx 22upx;
		.top{
			display: flex;
			.left{
				flex: 2;
				font-size: 21upx;
				color: #565656;
			}
			.right{
				flex: 1;
				font-size: 21upx;
				color: #FF2B42;
				text-align: right;
			}
		}
		>.center{
			display: flex;
			margin-top: 10upx;
			.left{
				width: 152upx;
				.img{
					display: block;
					width: 152upx;
					height: 152upx;
				}
			}
			.center{
				flex: 1;
					padding-left: 20upx;
				.name{
					font-size: 31upx;
					color: #141414;
				}
				.dis{
					font-size: 25upx;
				}
			}
			.right{
				.price{
					font-size: 28upx;
				}
				.num{
					font-size: 28upx;
				}
			}
		}
		.bottom{
			display: flex;
			align-items: center;
			.left{
				font-size: 18upx;
				flex: 1;
				color: #565656;
			}
			.right{
				.btn{
					width:138upx;
					height:48upx;
					background:rgba(255,43,66,1);
					border-radius:24upx;
					color: #fff;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
		}
	}
	
	page,
	.content {
		// background: $page-color-base;
		background-color: #fff;
		height: 100%;
	}

	.btn {
		padding: 4upx 10upx;
		display: inline-block;
		border-radius: 10upx;
		background-color: #004DA0;
		color: #fff;
		margin-left: 8upx;
		font-size: 26upx;
	}

	.userInfo {
		// display: flex;
		// align-content: center;
		padding-top: 10upx;

		image,
		text {
			vertical-align: middle;
			margin-right: 6px;
			color: #ccc;
		}
	}

	.userImg {
		width: 30px;
		height: 30px;
	}

	.swiper-box {
		height: calc(100% - 40px);
	}

	.list-scroll-content {
		height: 100%;
	}

	.navbar {
		display: flex;
		height: 40px;
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
				color: $base-color;

				&:after {
					content: '';
					position: absolute;
					left: 50%;
					bottom: 0;
					transform: translateX(-50%);
					width: 44px;
					height: 0;
					border-bottom: 2px solid $base-color;
				}
			}
		}
	}

	.uni-swiper-item {
		height: auto;
	}

	.action-box {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		height: 100upx;
		position: relative;
		padding-right: 30upx;
	}

	.action-btn {
		width: 160upx;
		height: 60upx;
		margin: 0;
		margin-left: 24upx;
		padding: 0;
		text-align: center;
		line-height: 60upx;
		font-size: $font-sm + 2upx;
		color: $font-color-dark;
		background: #fff;
		border-radius: 100px;

		&:after {
			border-radius: 100px;
		}

		&.recom {
			background: #e0efff;
			color: $base-color;

			&:after {
				border-color: #004d9f;
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
</style>
