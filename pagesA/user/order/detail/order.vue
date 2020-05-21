<style lang="scss">
	page {
		background-color: #E6E6E6;
	}

	.order-detail {
		padding: 20upx 15upx;

		.card {
			background-color: #fff;
			border-radius: 10px;
			box-shadow: 0px 2px 18px 1px rgba(169, 169, 169, 0.17);
			padding: 28upx;
			margin-bottom: 20upx;

			.title {
				font-size: 33upx;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(9, 9, 9, 1);
				padding-bottom: 28upx;
			}

			.content {
				border-top: 1upx solid #eee;

				.goods {
					display: flex;
					align-items: center;
					padding: 30upx 0;
					.left {
						width: 90upx;
						.img{
							display: block;
							width: 90upx;
							height: 90upx;
						}
					}

					.right {
						flex: 1;
						padding-left: 26upx;

						.name {
							font-size: 25upx;
						}

						.spec {
							font-size: 21upx;
							display: inline-block;
							color: #6C6C6C;
							padding: 2upx 10upx;
							border-radius: 7upx;
							background-color: #F2F2F2;
						}
					}
				}

				.dis {
					color: #141414;

					.item {
						display: flex;
						align-items: flex-end;
						height: 60upx;

						.left {
							flex: 1;
							font-size: 28upx;
						}

						.right {
							font-size: 25upx;
							text-align: right;
							flex: 1;
						}
					}
				}

				&>.options {
					text-align: right;
					border-top: 1upx solid #eee;
					margin-top: 20upx;
					padding-top: 20upx;

					.btn {
						display: inline-block;
						text-align: center;
						width: 153upx;
						height: 45upx;
						line-height: 45upx;
						font-size: 25upx;
						color: #FF2B42;
						border: 1upx solid rgba(255, 43, 66, 1);
						margin-left: 36upx;
						border-radius: 10upx;
					}
				}

				&>.discription {
					.item {
						padding: 30upx 0;
						display: flex;
						align-items: center;
						border-bottom: 1upx solid #eee;

						.left {
							flex: 1;
							font-size: 28upx;
						}

						.right {
							font-size: 25upx;
							text-align: right;
							flex: 2;

							.copy {
								color: #fff;
								background-color: #FF474C;
								border-radius: 7upx;
								padding: 0 8upx;
								margin-left: 10upx;
							}
						}
					}
				}

				.subTitle {
					font-size: 25upx;
					color: #141441;
					margin-top: 30upx;
				}

				.qrcode {
					display: block;
					width: 266upx;
					height: 266upx;
					margin: 30upx auto;
				}
			}
		}
	}
</style>
<template>
	<view class="order-detail">
		<view class="card">
			<view class="title">{{status[entity.order.status]}}</view>
			<view class="content" v-if="express">
				<view class="dis">
					<view class="item">
						<view class="left">
							物流信息:
						</view>
						<view class="right">YT4401699137456</view>
					</view>
				</view>
			</view>
		</view>
		<view class="card" v-if="entity.order.goodsType==1">
			<view class="title">店铺商品</view>
			<view class="content">
				<view v-for="item in entity.goods" :key="item.id">
					<view class="goods">
						<view class="left">
							<image class="img" :src="ctx+item.goodsImg">
		
							</image>
						</view>
						<view class="right">
							<view class="name">{{item.goodsName}}</view>
							<view class="spec">规格：三层抽纸 20cmX6cm</view>
						</view>
					</view> 
					<view class="dis">
						<view class="item">
							<view class="left">商品单价</view>
							<view class="right">{{item.goodsPriceShow}}</view>
						</view>
						<view class="item">
							<view class="left">购买数量</view>
							<view class="right">{{item.goodsCountLong}}</view>
						</view>
					<!-- 	<view class="item">
							<view class="left">运费</view>
							<view class="right"></view>
						</view> -->
						<view class="item">
							<view class="left">订单总价</view>
							<view class="right">{{entity.order.shouldPayAmountShow}}</view>
						</view>
					</view>
				</view>
				<view class="options" v-if="entity.order.status==0">
					<view class="btn" @click="pay(entity.order)">
						立即付款
					</view>
					<view class="btn" @click="cancelOrder(entity.order)">
						取消订单
					</view>
				</view>
			</view>
		</view>
		<view class="card" v-if="entity.order.goodsType==2">
			<view class="title">巨划算商品</view>
			<view class="content">
				<view v-for="item in entity.goods" :key="item.id">
					<view class="goods">
						<view class="left">
							<image class="img" :src="ctx+item.goodsImg">

							</image>
						</view>
						<view class="right">
							<view class="name">{{item.goodsName}}</view>
							<view class="spec">规格：三层抽纸 20cmX6cm</view>
						</view>
					</view> 
					<view class="dis">
						<view class="item">
							<view class="left">商品单价</view>
							<view class="right">{{item.goodsPriceShow}}</view>
						</view>
						<view class="item">
							<view class="left">购买数量</view>
							<view class="right">{{item.goodsCountLong}}</view>
						</view>
					<!-- 	<view class="item">
							<view class="left">运费</view>
							<view class="right"></view>
						</view> -->
						<view class="item">
							<view class="left">订单总价</view>
							<view class="right">{{entity.order.shouldPayAmountShow}}</view>
						</view>
					</view>
				</view>
				<view class="options" v-if="entity.order.status==0">
					<view class="btn" @click="pay(entity.order)">
						立即付款
					</view>
					<view class="btn" @click="cancelOrder(entity.order)">
						取消订单
					</view>
				</view>
			</view>
		</view>
		<view class="card" v-if="entity.order.goodsType==3">
			<view class="title">优惠券</view>
			<view class="content">
				<view v-for="item in entity.goods" :key="item.id">
					<view class="goods">
						<view class="left">
							<image class="img" :src="ctx+item.goodsImg">
		
							</image>
						</view>
						<view class="right">
							<view class="name">{{item.goodsName}}</view>
							<view class="spec">规格：三层抽纸 20cmX6cm</view>
						</view>
					</view> 
					<view class="dis">
						<view class="item">
							<view class="left">商品单价</view>
							<view class="right">{{item.goodsPriceShow}}</view>
						</view>
						<view class="item">
							<view class="left">购买数量</view>
							<view class="right">{{item.goodsCountLong}}</view>
						</view>
					<!-- 	<view class="item">
							<view class="left">运费</view>
							<view class="right"></view>
						</view> -->
						<view class="item">
							<view class="left">订单总价</view>
							<view class="right">{{entity.order.shouldPayAmountShow}}</view>
						</view>
					</view>
				</view>
				<view class="options" v-if="entity.order.status==0">
					<view class="btn" @click="pay(entity.order)">
						立即付款
					</view>
					<view class="btn" @click="cancelOrder(entity.order)">
						取消订单
					</view>
				</view>
			</view>
		</view>

		<view class="card"  >
			<view class="title">
				订单信息
			</view>
			<view class="content">
				<view class="discription">
					<view class="item">
						<view class="left">订单编号</view>
						<view class="right">{{entity.order.sn}} <text class="copy" @click="copyText" :data-text="entity.order.sn">复制</text></view>
					</view>
					<view class="item">
						<view class="left">下单时间</view>
						<view class="right">{{entity.order.addTimeStr}}</view>
					</view>
					<view class="item">
						<view class="left">投诉</view>
						<view class="right">400-156-7600</view>
					</view>
				</view>
				<view class="subTitle">订单二维码</view>
				<image class="qrcode"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				entity: {},
				ctx:this.$ctx,
				options:{},
				status:{
					0:'待付款',
					1: '已付款',
					30: '已完成',
					40: '已取消',
					2: '售后',
					6: '售后',
					11: '售后',
					25: '售后',
					26: '售后',
					50: '退款成功',
				}
			}
		},
		onLoad(options) {
			this.options=options
			this.getData()
		},
		methods: {
			getData() {
			
				this.$getJson("/api/v3/order/info.jsp", {
					orderId: this.options.id,
					orderNo: this.options.orderNo
				}, "POST", res => {
					console.log(res)
					this.entity = res.data

				})
			},
			pay(item) {
				uni.navigateTo({
					url: '/pages/money/pay?money=' + item.shouldPayAmountShow + '&sn=' + item.sn
				});
			},
			//取消订单
			cancelOrder(item) {
				uni.showModal({
					content: '是否取消订单？',
					success: (e) => {
						if (e.confirm) {
							this.$getJson("/jsp/api/order/doCancel.jsp", {
								id: item.id,
							}, "POST", res => {
								uni.hideLoading(); //正在加载
								if (res.success == true || res.success == 'true') {
									this.getData()
								}
							})
						}
					}
				})
			
			},
			copyText: function(e) {
				console.log(e)
				wx.setClipboardData({
					data: e.currentTarget.dataset.text,
					success: function(res) {
						wx.getClipboardData({
							success: function(res) {
								wx.showToast({
									title: '复制成功'
								})
							}
						})
					}
				})
			},

		}
	}
</script>
