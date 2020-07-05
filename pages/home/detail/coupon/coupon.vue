<style lang="scss">
	page {
		background-color: #EEEBEE;
	}

	.coupon {
		padding: 0 20upx 130upx 20upx;
	}

	.card {
		background-color: #fff;
		box-shadow: 0px 3px 19px 0px rgba(143, 143, 143, 0.14);
		border-radius: 10upx;
		margin-top: 20upx;
		padding: 46upx 38upx;

		&.one {
			.title {
				font-size: 42upx;
				color: #000;
			}

			.img {
				width: 100%;
				height: 350upx;
				border-radius: 7upx;
				background-color: #ddd;
				margin-top: 30upx;
			}
		}

		&.two {
			.header {
				display: flex;

				.store-img {
					display: block;
					width: 120upx;
					height: 120upx;
					border-radius: 7upx;
				}

				&>.right {
					padding-left: 35upx;
					flex: 1;

					.store-title {
						font-size: 33upx;
						color: #1d1d1d;
					}

					.address {
						display: flex;
						margin-top: 22upx;
						align-items: center;

						.left {
							image {
								display: block;
								width: 24upx;
								height: 32upx;
								position: relative;
								top: -10upx;
							}
						}

						.center {
							flex: 1;
							padding: 0 24upx 0 12upx;

							.top {
								font-size: 25upx;
								color: #000;
								font-weight: 400;
							}

							.sub {
								font-size: 21upx;
								color: #7E7E7E;
							}
						}

						.right {
							padding-left: 24upx;
							border-left: 1px dashed #999;

							image {
								width: 42upx;
								height: 42upx;
							}
						}

					}
				}
			}
		}

		&.item {
			padding: 30upx;

			.inner {
				display: flex;

				.img {
					display: block;
					width: 204upx;
					height: 176upx;
				}

				.right {
					flex: 1;
					padding-left: 20upx;

					.title {
						font-size: 32upx;
						color: #141414;
					}

					.sub {
						font-size: 22upx;
						color: #6D6D6D;
					}

					.price {
						display: flex;
						align-items: baseline;
						color: #F0351C;
						margin-right: 10upx;

						.unit {
							font-size: 25upx;
							margin-right: 4upx;
						}

						.num {
							font-size: 42upx;
						}
					}

					.default {
						display: flex;
						align-items: baseline;
						position: relative;
						top: 8upx;
						color: #A5A5A5;
						font-size: 25upx;
						text-decoration: line-through;
					}

					.btns {
						display: flex;
						justify-content: flex-end;

						.btn {
							width: 147upx;
							height: 44upx;
							border-radius: 22upx;
							display: flex;
							align-items: center;
							justify-content: center;
							font-size: 21upx;
							color: #fff;

							&.cart {
								background-color: #FFBA21;
								margin-right: 10upx;
							}

							;

							&.buy {
								background-color: #FF474C;
								margin-right: 20upx;
							}
						}
					}
				}
			}
		}
	}

	.three {
		.title {
			font-size: 38upx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(49, 49, 49, 1);
		}

		.sub-title {
			margin-top: 30upx;
			font-size: 33upx;
			font-family: PingFang SC;
			font-weight: 400;
			color: rgba(114, 114, 114, 1);
		}

		.text {
			line-height: 38upx;
			margin-top: 12upx;
			font-size: 31upx;
			font-family: PingFang SC;
			font-weight: 400;
			color: rgba(16, 16, 16, 1);
		}
	}

	.bottom {
		height: 110upx;
		background-color: #fff;
		z-index: 10;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		display: flex;
		box-shadow: 0px 2px 19px 1px rgba(97, 97, 97, 0.13);

		.left {
			flex: 1;
			display: flex;
			align-items: center;
			padding-left: 20upx;

			.price {
				display: flex;
				align-items: baseline;
				color: #F0351C;
				margin-right: 10upx;

				.unit {
					font-size: 25upx;
					margin-right: 4upx;
				}

				.num {
					font-size: 56upx;
				}
			}

			.default {
				display: flex;
				align-items: baseline;
				position: relative;
				top: 8upx;
				color: #A5A5A5;
				font-size: 25upx;
				text-decoration: line-through;
			}
		}

		.right {
			flex: 1;
			display: flex;
			align-items: center;

			.btn {
				width: 194upx;
				height: 60upx;
				border-radius: 30upx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 28upx;
				color: #fff;

				&.cart {
					background-color: #FFBA21;
					margin-right: 10upx;
				}

				;

				&.buy {
					background-color: #FF474C;
					margin-right: 20upx;
				}
			}
		}
	}
</style>
<template>
	<view class="coupon">
		<view class="card one">
			<view class="title">{{coupon.name}}</view>
			<image :src="ctx+coupon.imgPath" class="img"></image>
		</view>
		<view class="card two">
			<view class="header">
				<image class="store-img" :src="ctx+store.logoPath">
				</image>
				<view class="right">
					<view class="store-name">{{store.name}}</view>
					<view class="address" @click="openLocation">
						<view class="left">
							<image src="../../../../static/icon/home/address.png"></image>
						</view>
						<view class="center">
							<view class="top ellipsis">{{store.address}}</view>
							<view class="sub ellipsis">{{store.addressStr}}</view>
						</view>
						<view class="right" @tap.stop="call">
							<image src="../../../../static/icon/home/phone.png"></image>
						</view>
					</view>
				</view>
			</view>
			<view class="discription">

			</view>
		</view>
		<view class="card three">
			<view class="title">使用规则</view>
			<view class="sub-title">有效期</view>
			<view class="text">{{coupon.startTimeStr}}至{{coupon.endTimeStr}}</view>
			<view class="sub-title">温馨提示</view>
			<view class="text">
				优惠券经门店验劵后非质量问题不退换！
			</view>
			<view class="text">
				店内服务问题，请致电商家咨询，以商家反 馈为准！
			</view>
			<view class="text">
				如部分食品/服务因不可抗拒因素无法提供，
				商家可用等价食品/服务替换或用户申请退
				款，具体事宜请与商家协商！发票问题请咨
				询商家。
			</view>
			<view class="text">
				优惠券最终解释权归商家所有！
			</view>
		</view>
		<view class="card item"  v-for="item in couponList" :key="item.id" @click="changeCoupon(item.id)">
			<view class="inner">
				<image class="img" :src="ctx+item.imgPath">
				</image>
				<view class="right">
					<view class="title">
						{{item.name}}
					</view>
					<view class="sub">
						{{item.instro}}
					</view>
					<view class="price">
						<view class="unit">¥</view>
						<view class="num">{{item.value/100}}</view>
					</view>
					<view class="btns">
						<view class="btn cart" @click="addCart(item.id)">加入购物车</view>
						<view class="btn buy">立即抢购</view>
					</view>
				</view>
			</view>
		</view>

		<view class="bottom">
			<view class="left">
				<view class="price">
					<view class="unit">¥</view>
					<view class="num">{{coupon.value}}</view>
				</view>
				<!-- 	<view class="default">
					<view class="unit">¥</view>
					<view class="num">33.6</view>
				</view> -->
			</view>
			<view class="right">
				<view class="btn cart" @click="addCart(coupon.id)">加入购物车</view>
				<view class="btn buy" @click="buy(coupon.id)">立即抢购</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: null,
				ctx: this.$ctx,
				coupon: {},
				store: {},
				couponList: []
			}
		},
		onShow() {
			this.getData()
		},
		methods: {
			getData() {
				//获取详情
				this.$getJson('/api/v3/coupon/info.jsp', {
					id: this.id
				}, 'POST', res => {
					this.coupon = res.data
					console.log(res, 'coupon')
					//获取店铺详情
					this.$getJson('/api/v2/vue/sqPlus/company/companyInfo.jsp', {
						data: JSON.stringify({
							companyId: res.data.storeId
						})
					}, 'POST', response => {
						this.store = { ...response.data.cjCompany,
							storeId: response.data.cjCompany.id
						}
					})
					//获取店铺的优惠券
					this.$getJson('/api/v2/vue/sqPlus/coupon/couponList.jsp', {
						companyId: res.data.storeId,
						pageNumber: 1
					}, 'POST', result => {
						this.couponList = result.data
					})

				})
			},
			//打电话
			call() {
				wx.makePhoneCall({
					phoneNumber: this.store.serviceNo
				})
			},
			//购买
			buy() {
				console.log(this.productInfo)
				let goodsData = {
					hot: [],
					platform: [],
					coupon: []
				}
				goodsData.coupon.push({
					store: this.store,
					list: [{
						cpCart: {
							goodsCount: 1
						},
						goods: this.coupon
					}]

				})

				uni.setStorageSync('goodsData', goodsData)
				uni.navigateTo({
					url: '/pages/home/order/createOrder'
				})
			},
			addCart(goodsId) {
				//加入购物车
				let data = {
					goodsId: goodsId,
					goodsType: 3
				}
				this.$getJson('/api/v2/vue/ydd/cart/addCart.jsp', {
					data: JSON.stringify(data)
				}, 'POST', res => {
					console.log('----res------------', res);
					if (res.data == 1) {
						uni.showToast({
							title: "加入成功",
							icon: 'none'
						})
						this.cartCount += 1
					} else {
						uni.showToast({
							title: res.message,
							icon: 'none'
						})
					}
				});
			},

			changeCoupon(id) {
				this.id = id;
				this.getData()
			},
			openLocation() {
				wx.openLocation({
					latitude: this.store.lat,
					longitude: this.store.lng,
					name: this.store.address,
					address: this.store.addressStr
				})
			}
		},
		onLoad(options) {
			this.id = options.id || 26
		}
	}
</script>
