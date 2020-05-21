<template>
	<view class="create-order">
		<!-- 地址 -->
		<navigator url="/pagesA/address/address?source=1" class="address-section">
			<view class="order-content">
				<text class="yticon icon-shouhuodizhi"></text>
				<view class="cen">
					<view class="top">
						<text class="name">{{addressData.consignee==''||addressData.consignee==null?'点击添加地址':addressData.consignee}}</text>
						<text class="mobile">{{addressData.mobile}}</text>
					</view>
					<text class="address" v-if='addressData.consignee'>{{addressData.address}}</text>
				</view>
				<text class="yticon icon-you"></text>
			</view>
		</navigator>

		<view class="goods-section" v-if="shopData.hot&&shopData.hot.length!==0">
			<view v-for="item in shopData.hot" :key="item.store.storeId">
				<view class="g-header">
					<text class="label">店铺商品</text>
					<text class="name">-{{item.store.name}}</text>
				</view>
				<!-- 商品列表 -->
				<view class="g-item" v-for="goods in item.list" :key="goods.goods.id">
					<view class="top">
						<image :src="url+goods.goods.firstImg"></image>
						<view class="item-right">
							<text class="title clamp">{{goods.goods.prodName}}</text>
							<text class="spec">{{goods.goods.subHeading}}</text>
						</view>
					</view>
					<!-- 金额明细 -->
					<view class="yt-list">
						<view class="yt-list-cell b-b">
							<text class="cell-tit clamp">价格</text>
							<text class="cell-tip">￥{{goods.goods.priceEdit}} x {{goods.cpCart.goodsCount}}</text>
						</view>
					</view>
				</view>
				<view class="yt-list-cell b-b receve">
					<text class="cell-tit clamp">收货方式</text>
					<view class="content">
						<view :class="['radio',item.acceptType=='zq'&&'active']" @click="changeAcceptType(item.store.storeId,'zq')" class="radio">
							<view class="circle"></view> 自取
						</view>
						<view :class="['radio',item.acceptType=='dd'&&'active']" @click="changeAcceptType(item.store.storeId,'dd')" class="radio">
							<view class="circle"></view> 快递¥{{item.fee.fee}}
						</view>
					</view>
				</view>
				<view class="yt-list-cell  b-b">
					<text class="cell-tit clamp">备注</text>
					<input class="cell-tip" style="text-align: right;" type="text" v-model="item.buyerMessage" placeholder="请填写备注信息" />
				</view>
			</view>
		</view>

		<view class="goods-section" v-if="shopData.platform&&shopData.platform.length!==0">
			<view v-for="item in shopData.platform" :key="item.store.storeId">
				<view class="g-header">
					<text class="label">巨划算商品</text>
					<text class="name">-{{item.store.name}}</text>
				</view>
				<!-- 商品列表 -->
				<view class="g-item" v-for="goods in item.list" :key="goods.goods.id">
					<view class="top">
						<image :src="url+goods.goods.firstImg"></image>
						<view class="item-right">
							<text class="title clamp">{{goods.goods.prodName}}</text>
							<text class="spec">{{goods.goods.subHeading}}</text>
						</view>
					</view>
					<!-- 金额明细 -->
					<view class="yt-list">
						<view class="yt-list-cell b-b">
							<text class="cell-tit clamp">价格</text>
							<text class="cell-tip">￥{{goods.goods.priceEdit}} x {{goods.cpCart.goodsCount}}</text>
						</view>
					</view>
				</view>
				<view class="yt-list-cell b-b receve">
					<text class="cell-tit clamp">收货方式</text>
					<view class="content">
						<view v-if="!item.free" :class="['radio','active']" class="radio">
							<view class="circle"></view> 自取
						</view>
						<view v-if="item.free" :class="['radio','active']" class="radio">
							<view class="circle"></view> 快递免邮
						</view>
					</view>
				</view>
				<view class="yt-list-cell  b-b">
					<text class="cell-tit clamp">备注</text>
					<input class="cell-tip" style="text-align: right;" type="text" v-model="item.buyerMessage" placeholder="请填写备注信息" />
				</view>
			</view>
		</view>
		<view class="goods-section" v-if="shopData.coupon&&shopData.coupon.length!==0">
			<view v-for="item in shopData.coupon" :key="item.store.storeId">
				<view class="g-header">
					<text class="label">商圈券</text>
					<text class="name">-{{item.store.name}}</text>
				</view>
				<!-- 商品列表 -->
				<view class="g-item" v-for="goods in item.list" :key="goods.goods.id">
					<view class="top">
						<image :src="url+goods.goods.imgPath"></image>
						<view class="item-right">
							<text class="title clamp">{{goods.goods.name}}</text>
							<text class="spec">{{goods.goods.instro}}</text>
						</view>
					</view>
					<!-- 金额明细 -->
					<view class="yt-list">
						<view class="yt-list-cell b-b">
							<text class="cell-tit clamp">价格</text>
							<text class="cell-tip">￥{{goods.goods.value/100}} x {{goods.cpCart.goodsCount}}</text>
						</view>
					</view>
				</view>
				<view class="yt-list-cell  b-b">
					<text class="cell-tit clamp">备注</text>
					<input class="cell-tip" style="text-align: right;" type="text" v-model="item.buyerMessage" placeholder="请填写备注信息" />
				</view>
			</view>
		</view>
		<!-- 底部 -->
		<view class="footer">
			<view class="price-content">
				<text>实付款</text>
				<text class="price-tip">￥</text>
				<text class="price">{{total}}</text>
			</view>
			<text class="submit" @click="submit">提交订单</text>
		</view>
	</view>
</template>

<script>
	import uniNumberBox from '@/components/uni-number-box.vue'
	import {
		mapState
	} from 'vuex'
	export default {
		components: {
			uniNumberBox
		},
		data() {
			return {
				url: this.$ctx,
				maskState: 0, //优惠券面板显示状态
				buyerMemo: '', //备注
				payType: 1, //1微信 2支付宝
				total: 0,
				inviteCode: '',
				addressData: {
					name: '',
					mobile: '',
					addressName: '',
					address: '',
					area: '149',
					default: false,
				},
				shopData: {},
				type: 1,
				userInfo: uni.getStorageSync(`userInfo`),
				cheapPurchaseCompanyId: "",
				acceptType: 1
			}
		},
		onLoad(option) {
			let shopData = uni.getStorageSync('goodsData')
			//普通商品   超过99免费配送、低于99只能自提
			if (shopData.hot.length !== 0) {
				shopData.hot.forEach((store) => {
					store.acceptType = 'zq',
						store.fee = ''
				})
			}

			//巨划算   超过99免费配送、低于99只能自提
			if (shopData.platform.length !== 0) {
				shopData.platform.forEach((store) => {
					let total = 0; //每家店费用
					store.list.forEach((goods) => {
						total += goods.goods.price * goods.cpCart.goodsCount
					})
					if (total > 9900 || total === 9900) {
						store.free = true
					} else {
						store.free = false
					}
				})
			}
			this.shopData = shopData
			this.calcTotal()
			this.getDefaultAddr()
		},
		methods: {
			//计算总价
			calcTotal() {
				let total = 0;
				if (this.shopData.hot.length !== 0) {
					this.shopData.hot.forEach((store) => {
						store.list.forEach((goods) => {
							total += goods.goods.price * goods.cpCart.goodsCount;

						})
						if (store.acceptType === 'dd') {
							total += store.fee.fee * 100
						}
					})
				}
				if (this.shopData.platform.length !== 0) {
					this.shopData.platform.forEach((store) => {
						store.list.forEach((goods) => {
							total += goods.goods.price * goods.cpCart.goodsCount
						})
					})
				}
				if (this.shopData.coupon.length !== 0) {
					this.shopData.coupon.forEach((store) => {
						store.list.forEach((goods) => {
							total += goods.goods.value * goods.cpCart.goodsCount
						})
					})
				}
				this.total = Number((total / 100).toFixed(2));
			},
			getDefaultAddr() {
				let data = {
					data: JSON.stringify({
						memberId: this.userInfo.id
					})
				}
				this.$getJson('/api/v2/vue/ydd/order/getDefaultAddr.jsp', data, 'POST', res => {
					this.choiceAddress(res.data.addr)
				})
			},
			choiceAddress(addressData) {
				this.addressData = addressData;
				//运费计算参数
				let stores = []
				//循环计算运费,只有店铺商品参与
				if (this.shopData.hot.length !== 0) {
					this.shopData.hot.forEach((store) => {
						let total = 0; //每家店费用
						store.list.forEach((goods) => {
							total += goods.goods.price * goods.cpCart.goodsCount
						})
						stores.push({
							storeId: store.store.storeId,
							price: total / 100,
							type: 1
						})
					})
				}
				//计算运费
				this.$getJson('/api/v3/express/deliveryCost.jsp', {
					stores: JSON.stringify(stores),
					receiver_addressId: this.addressData.id
				}, 'POST', res => {
					this.shopData.hot.forEach((store) => {
						res.data.success.forEach((fee) => {
							if (store.store.storeId === fee.storeId) {
								store.fee = fee
							}
						})
					})
					console.log(this.shopData)
					this.$forceUpdate()
				})
			},
			changePayType(type) {
				this.payType = type;

			},
			//切换收货方式
			changeAcceptType(storeId, acceptType) {
				this.shopData.hot.forEach((store) => {
					if (store.store.storeId == storeId) {
						store.acceptType = acceptType
					}
				})
				this.calcTotal()
				this.$forceUpdate()
			},
			submit() {
				const $this = this
				// console.log(this.shopData)
				// return
				if (!this.addressData) {
					uni.showToast({
						title: '请选择地址'
					});
					return;
				}
				let postFee = 0;
				let orders = []


				if (this.shopData.hot.length !== 0) {
					this.shopData.hot.forEach((store) => {
						let order = {}
						let products = []
						let total = 0
						if (store.acceptType == 'dd') {
							if (store.fee && store.fee.fee) {
								postFee += store.fee.fee * 100
							}
						}
						store.list.forEach((goods) => {
							total += goods.goods.price * goods.cpCart.goodsCount;
							products.push({
								proId: goods.goods.id,
								cartId: goods.cpCart.id,
								specId: goods.spec.id,
								num: goods.cpCart.goodsCount,
								price: goods.goods.price,
								shareId: "",
								shareUserId: 0
							})
						})
						if (store.acceptType === 'dd') {
							total += store.fee.fee * 100
							order = {
								storeId: store.store.storeId,
								dadaNo: store.fee.deliveryNo,
								yddNo: store.fee.origin_id,
								totalPay: total,
								productPay: total - store.fee.fee,
								paymentType: 0,
								expFee: store.fee.fee,
								receivingWay: 1,
								buyerMessage: store.buyerMessage,
								type: 1,
								products
							}
						} else {
							order = {
								storeId: store.store.storeId,
								dadaNo: "",
								yddNo: "",
								totalPay: total,
								productPay: total,
								paymentType: 0,
								expFee: 0,
								receivingWay: 1,
								buyerMessage: store.buyerMessage,
								type: 1,
								products
							}
						}
						orders.push(order)
					})
				}
				if (this.shopData.platform.length !== 0) {
					this.shopData.platform.forEach((store) => {
						let order = {}
						let products = []
						let total = 0
						store.list.forEach((goods) => {
							total += goods.goods.price * goods.cpCart.goodsCount;
							products.push({
								proId: goods.goods.id,
								cartId: goods.cpCart.id,
								specId: goods.spec.id,
								num: goods.cpCart.goodsCount,
								price: goods.goods.price,
								shareId: "",
								shareUserId: 0
							})
						})
						order = {
							storeId: store.store.storeId,
							dadaNo: "",
							yddNo: "",
							totalPay: total,
							productPay: total,
							paymentType: 0,
							expFee: 0,
							receivingWay: 1,
							buyerMessage: store.buyerMessage,
							type: 2,
							products
						}
						orders.push(order)
					})
				}
				if (this.shopData.coupon.length !== 0) {
					this.shopData.coupon.forEach((store) => {
						let order = {}
						let products = []
						let total = 0
						store.list.forEach((goods) => {
							total += goods.goods.value * goods.cpCart.goodsCount;
							products.push({
								proId: goods.goods.id,
								cartId: goods.cpCart.id,
								specId: '',
								num: goods.cpCart.goodsCount,
								price: goods.goods.value,
								shareId: "",
								shareUserId: 0
							})
						})
						order = {
							storeId: store.store.storeId,
							dadaNo: "",
							yddNo: "",
							totalPay: total,
							productPay: total,
							paymentType: 0,
							expFee: 0,
							receivingWay: 1,
							buyerMessage: store.buyerMessage,
							type: 3,
							products
						}
						orders.push(order)
					})
				}
				let params = {
					totalPay: this.total * 100,
					postFee: postFee,
					paymentType: 0, //微信支付
					productPay: this.total * 100 - postFee,
					nickName: '',
					receiverId: this.addressData.id,
					receiverName: this.addressData.consignee,
					receiverMobile: this.addressData.mobile,
					lat: this.addressData.lat,
					lng: this.addressData.lng,
					orders: JSON.stringify(orders)
				}
				console.log(params)
				this.$getJson('/api/v3/order/add.jsp', params, 'POST', function(res) {
					console.log(res)
					if (res.success) {
						uni.navigateTo({
							url: '/pages/money/pay?money=' + $this.total + '&sn=' + res.data.paysn
						});
					} else {
						uni.showToast({
							title: res.message
						});
					}
				});
			},
			stopPrevent() {}
		}
	}
</script>

<style lang="scss">
	.create-order {
		padding: 25upx;
	}

	page {
		background: $page-color-base;
		padding-bottom: 100upx;
	}

	.address-section {
		padding: 30upx 0;
		display: flex;
		align-items: center;
		height: 180upx;
		background: #fff;
		position: relative;

		.order-content {
			flex: 1;
			display: flex;
			align-items: center;
		}

		.icon-shouhuodizhi {
			flex-shrink: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 90upx;
			color: #888;
			font-size: 44upx;
		}

		.cen {
			display: flex;
			flex-direction: column;
			flex: 1;
			font-size: 28upx;
			color: $font-color-dark;
		}

		.name {
			font-size: 34upx;
			margin-right: 24upx;
		}

		.address {
			margin-top: 16upx;
			margin-right: 20upx;
			color: $font-color-light;
		}

		.icon-you {
			font-size: 32upx;
			color: $font-color-light;
			margin-right: 30upx;
		}

		.a-bg {
			position: absolute;
			left: 0;
			bottom: 0;
			display: block;
			width: 100%;
			height: 5upx;
		}
	}

	.goods-section {
		margin-top: 28upx;
		background: #fff;
		padding: 0 35upx;

		.g-header {
			display: flex;
			align-items: center;
			height: 84upx;
			position: relative;

			.label {
				font-size: 31upx;
				color: #000;
			}

			.name {
				font-size: 31upx;
				color: #a6a6a6;
			}

			border-bottom: 1upx solid #eee;
		}

		.logo {
			display: block;
			width: 50upx;
			height: 50upx;
			border-radius: 100px;
		}

		.name {
			font-size: 30upx;
			color: $font-color-base;
			margin-left: 24upx;
		}

		.g-item {
			margin: 30upx 0;
			position: relative;
			border-bottom: 1upx solid #eee;

			.top {
				display: flex;
			}

			image {
				flex-shrink: 0;
				display: block;
				width: 140upx;
				height: 140upx;
				border-radius: 4upx;
			}

			.uni-numbox {
				right: 0;
				left: initial;
			}

			.right {
				flex: 1;
				padding-left: 24upx;
				overflow: hidden;
			}

			.title {
				font-size: 30upx;
				color: $font-color-dark;
			}

			.spec {
				font-size: 26upx;
				color: $font-color-light;
			}

			.price-box {
				display: flex;
				align-items: center;
				font-size: 32upx;
				color: $font-color-dark;
				padding-top: 10upx;

				.price {
					margin-bottom: 4upx;
					color: #ff0000;
				}

				.number {
					font-size: 26upx;
					color: $font-color-base;
					margin-left: 20upx;
				}
			}

			.price-box-top {
				margin-top: 46upx;
			}

			.step-box {
				position: relative;
			}
		}
	}

	.yt-list {
		margin-top: 16upx;
		background: #fff;
	}

	.yt-list-cell {
		display: flex;
		align-items: center;
		padding: 10upx 0;
		line-height: 50upx;
		position: relative;

		&.receve {
			margin-top: 40upx;

			.clamp {
				flex: 1;
			}

			.content {
				flex: 1;
				display: flex;

				.radio {
					flex: 1;
					display: flex;
					align-items: center;
					justify-content: flex-end;
					font-size: 24upx;
					color: #808080;

					.circle {
						width: 25upx;
						height: 25upx;
						border-radius: 50%;
						border: 1upx solid #FF474D;
						margin-right: 6upx;
					}

					&.active {
						.circle {
							background-color: #FF474D;
						}
					}
				}
			}

		}

		&.cell-hover {
			background: #fafafa;
		}

		&.b-b:after {
			left: 30upx;
			border: none;
		}

		.cell-icon {
			height: 32upx;
			width: 32upx;
			font-size: 22upx;
			color: #fff;
			text-align: center;
			line-height: 32upx;
			background: #f85e52;
			border-radius: 4upx;
			margin-right: 12upx;

			&.hb {
				background: #ffaa0e;
			}

			&.lpk {
				background: #3ab54a;
			}

		}

		.cell-more {
			align-self: center;
			font-size: 24upx;
			color: $font-color-light;
			margin-left: 8upx;
			margin-right: -10upx;
		}

		.cell-tit {
			flex: 1;
			font-size: 26upx;
			color: $font-color-light;
			margin-right: 10upx;
		}

		.cell-tip {
			font-size: 26upx;
			color: #808080;

			&.disabled {
				color: $font-color-light;
			}

			&.active {
				color: $base-color;
			}

			&.red {
				color: $base-color;
			}
		}

		&.desc-cell {
			display: block;

			.cell-tit {
				max-width: 90upx;
			}
		}

		.desc {
			flex: 1;
			width: 100%;
			border-radius: 9upx;
			padding: 10upx;
			font-size: $font-base;
			height: 140upx;
			border: 1upx solid #ddd;
		}
	}

	/* 支付列表 */
	.pay-list {
		padding-left: 40upx;
		margin-top: 16upx;
		background: #fff;

		.pay-item {
			display: flex;
			align-items: center;
			padding-right: 20upx;
			line-height: 1;
			height: 110upx;
			position: relative;
		}

		.icon-weixinzhifu {
			width: 80upx;
			font-size: 40upx;
			color: #6BCC03;
		}

		.icon-alipay {
			width: 80upx;
			font-size: 40upx;
			color: #06B4FD;
		}

		.icon-xuanzhong2 {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 60upx;
			height: 60upx;
			font-size: 40upx;
			color: $base-color;
		}

		.tit {
			font-size: 32upx;
			color: $font-color-dark;
			flex: 1;
		}
	}

	.item-right {
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow: hidden;
		position: relative;
		padding-left: 30upx;

		.title {
			padding-right: 60upx;
		}

		.title,
		.price {
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			height: 40upx;
			line-height: 40upx;
		}

		.attr {
			font-size: $font-sm + 2upx;
			color: $font-color-light;
			height: 50upx;
			line-height: 50upx;
		}

		.price {
			height: 50upx;
			line-height: 50upx;
			margin-top: 70upx;
			color: $font-color-pink;
		}

		.step {
			position: absolute;
			right: 0;
			bottom: 0;
		}
	}

	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 995;
		display: flex;
		align-items: center;
		width: 100%;
		height: 100upx;
		justify-content: space-between;
		font-size: 30upx;
		background-color: #fff;
		z-index: 998;
		color: $font-color-base;
		box-shadow: 0 -1px 5px rgba(0, 0, 0, .1);

		.price-content {
			padding-left: 30upx;
		}

		.price-tip {
			color: #ff0000;
			margin-left: 8upx;
		}

		.price {
			font-size: 36upx;
			color: #ff0000;
		}

		.submit {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 258upx;
			height: 80upx;
			color: #fff;
			font-size: 32upx;
			background-color: #FF474C;
			border-radius: 40upx;
			margin-right: 26upx;
		}
	}

	/* 优惠券面板 */
	.mask {
		display: flex;
		align-items: flex-end;
		position: fixed;
		left: 0;
		top: var(--window-top);
		bottom: 0;
		width: 100%;
		background: rgba(0, 0, 0, 0);
		z-index: 9995;
		transition: .3s;

		.mask-content {
			width: 100%;
			min-height: 30vh;
			max-height: 70vh;
			background: #f3f3f3;
			transform: translateY(100%);
			transition: .3s;
			overflow-y: scroll;
		}

		&.none {
			display: none;
		}

		&.show {
			background: rgba(0, 0, 0, .4);

			.mask-content {
				transform: translateY(0);
			}
		}
	}

	/* 优惠券列表 */
	.coupon-item {
		display: flex;
		flex-direction: column;
		margin: 20upx 24upx;
		background: #fff;

		.con {
			display: flex;
			align-items: center;
			position: relative;
			height: 120upx;
			padding: 0 30upx;

			&:after {
				position: absolute;
				left: 0;
				bottom: 0;
				content: '';
				width: 100%;
				height: 0;
				border-bottom: 1px dashed #f3f3f3;
				transform: scaleY(50%);
			}
		}

		.left {
			display: flex;
			flex-direction: column;
			justify-content: center;
			flex: 1;
			overflow: hidden;
			height: 100upx;
		}

		.title {
			font-size: 32upx;
			color: $font-color-dark;
			margin-bottom: 10upx;
		}

		.time {
			font-size: 24upx;
			color: $font-color-light;
		}

		.right {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 26upx;
			color: $font-color-base;
			height: 100upx;
		}

		.price {
			font-size: 44upx;
			color: $base-color;

			&:before {
				content: '￥';
				font-size: 34upx;
			}
		}

		.tips {
			font-size: 24upx;
			color: $font-color-light;
			line-height: 60upx;
			padding-left: 30upx;
		}

		.circle {
			position: absolute;
			left: -6upx;
			bottom: -10upx;
			z-index: 10;
			width: 20upx;
			height: 20upx;
			background: #f3f3f3;
			border-radius: 100px;

			&.r {
				left: auto;
				right: -6upx;
			}
		}
	}
</style>
