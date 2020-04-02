<template>
	<view>
		<!-- 地址 -->
		<navigator url="/pages/address/address?source=1" class="address-section">
			<view class="order-content">
				<text class="yticon icon-shouhuodizhi"></text>
				<view class="cen">
					<view class="top">
						<text class="name">{{addressData.consignee==''||addressData.consignee==null?'点击添加地址':addressData.consignee}}</text>
						<text class="mobile">{{addressData.mobile}}</text>
					</view>
					<text class="address">{{addressData.address}}</text>
				</view>
				<text class="yticon icon-you"></text>
			</view>
		</navigator>

		<view class="goods-section">
			<!-- <view class="g-header b-b">
				<image class="logo" src="http://duoduo.qibukj.cn/./Upload/Images/20190321/201903211727515.png"></image>
				<text class="name">西城小店铺</text>
			</view> -->
			<view class="g-header b-b">
				<text class="name nameLeft">商品信息</text>
			</view>
			<!-- 商品列表 -->
			<view class="g-item"  v-for="(item, index) in shopList" :key="item.goods.id">
				<image :src="url+item.resource.samllCoverImg"></image>
				<view class="item-right">
					<text class="title clamp">{{item.resource.name}}</text>
				<!-- 	<text class="spec">{{item.label}}</text> -->
					<view class="price-box price-box-top">
						<text class="price">￥{{item.goods.priceEdit}}</text>
					</view>
					<uni-number-box
						class="step"
						:min="1" 
						:max="item.goods.stock"
						:value="item.number>item.goods.stock?item.goods.stock:item.number"
						:isMax="item.number>=item.goods.stock?true:false"
						:isMin="item.number===1"
						:index="index"
						@eventChange="numberChange"
					></uni-number-box>
				</view>
			</view>
		</view>

		<!-- 优惠明细 -->
		<!-- <view class="yt-list">
			<view class="yt-list-cell b-b" @click="toggleMask('show')">
				<view class="cell-icon">
					券
				</view>
				<text class="cell-tit clamp">优惠券</text>
				<text class="cell-tip active">
					选择优惠券
				</text>
				<text class="cell-more wanjia wanjia-gengduo-d"></text>
			</view>
			<view class="yt-list-cell b-b">
				<view class="cell-icon hb">
					减
				</view>
				<text class="cell-tit clamp">商家促销</text>
				<text class="cell-tip disabled">暂无可用优惠</text>
			</view>
		</view> -->
		<!-- 金额明细 -->
		<view class="yt-list">
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">商品金额</text>
				<text class="cell-tip">￥{{total}}</text>
			</view>
			<!-- <view class="yt-list-cell b-b">
				<text class="cell-tit clamp">优惠金额</text>
				<text class="cell-tip red">-￥35</text>
			</view> -->
			<!-- <view class="yt-list-cell b-b">
				<text class="cell-tit clamp">运费</text>
				<text class="cell-tip">免运费</text>
			</view> -->
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">备注</text>
				<input class="desc" type="text" v-model="buyerMemo" placeholder="请填写备注信息" placeholder-class="placeholder" />
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
		
		<!-- 优惠券面板 -->
		<view class="mask" :class="maskState===0 ? 'none' : maskState===1 ? 'show' : ''" @click="toggleMask">
			<view class="mask-content" @click.stop.prevent="stopPrevent">
				<!-- 优惠券页面，仿mt -->
				<view class="coupon-item" v-for="(item,index) in couponList" :key="index">
					<view class="con">
						<view class="left">
							<text class="title">{{item.title}}</text>
							<text class="time">有效期至2019-06-30</text>
						</view>
						<view class="right">
							<text class="price">{{item.price}}</text>
							<text>满30可用</text>
						</view>
						
						<view class="circle l"></view>
						<view class="circle r"></view>
					</view>
					<text class="tips">限新用户使用</text>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import uniNumberBox from '@/components/uni-number-box.vue'
	import {mapState} from 'vuex'
	export default {
		components: {
			uniNumberBox
		},
		data() {
			return {
				url:this.$ctx,
				maskState: 0, //优惠券面板显示状态
				buyerMemo: '', //备注
				payType: 1, //1微信 2支付宝
				total:0,
				inviteCode:'',
				couponList: [
					{
						title: '新用户专享优惠券',
						price: 5,
					},
					{
						title: '庆五一发一波优惠券',
						price: 10,
					},
					{
						title: '优惠券优惠券优惠券优惠券',
						price: 15,
					}
				],
				addressData: {
					name: '',
					mobile: '',
					addressName: '',
					address: '',
					area: '149',
					default: false,
				},
				shopList:[],
				type:1,
				userInfo:uni.getStorageSync(`userInfo`),
				cheapPurchaseCompanyId:""
			}
		},
		// computed:{
		// 	...mapState(['userInfo']),
		// },
		onLoad(option){
			//商品数据
			console.log(option)
			let data = JSON.parse(option.data)
			console.log(data)
			this.type = data.type
			console.log("type-------------",this.type)
			this.shopList = data.goodsData;
			this.inviteCode = data.inviteCode
			this.cheapPurchaseCompanyId = data.cheapPurchaseCompanyId
			console.log("shopList",this.shopList)
			this.getDefaultAddr()
			this.calcTotal();
		},
		methods: {
			//显示优惠券面板
			toggleMask(type){
				let timer = type === 'show' ? 10 : 300;
				let	state = type === 'show' ? 1 : 0;
				this.maskState = 2;
				setTimeout(()=>{
					this.maskState = state;
				}, timer)
			},
			//数量
			numberChange(data){
				let row = this.shopList[data.index];
				if(this.type==2){
					let datas = {data: JSON.stringify({memberId:this.userInfo.id,goodId:row.goods.id,cartId:row.cart.id,number:data.number})}
					this.$getJson('/api/v2/vue/ydd/cart/editCartCount.jsp', datas, 'POST', res => {
						console.log(`data中`,res)
						if(res.data==1){
							this.shopList[data.index].number = data.number;
							this.calcTotal();
						}else{
							uni.showToast({title:res.message,icon:'none'})
						}
					})
				}else{
					this.shopList[data.index].number = data.number;
					this.calcTotal();
				}
				
			},
			//计算总价
			calcTotal(){
				let list = this.shopList;
				if(list.length === 0){
					this.empty = true;
					return;
				}
				let total = 0;
				let checked = true;
				list.forEach(item=>{
						total += item.goods.priceShow * item.number;
				})
				this.total = Number(total.toFixed(2));
			},
			getDefaultAddr(){
				let data = {data: JSON.stringify({memberId:this.userInfo.id})}
				this.$getJson('/api/v2/vue/ydd/order/getDefaultAddr.jsp', data, 'POST', res => {
					console.log(`data中`,res)
					this.addressData = res.data.addr;
				})
			},
			// numberChange(data) {
			// 	this.number = data.number;
			// },
			changePayType(type){
				this.payType = type;
			},
			submit(){
				if (!this.addressData) {
					uni.showToast({title: '请选择地址'});
					return;
				}
				let goodsCount = 0,goodsId=0,cartIds='';
				if(this.type==1){
					goodsCount = this.shopList[0].number
					goodsId = this.shopList[0].goods.id
				}else{
					this.shopList.forEach(item=>{
							goodsCount +=  item.number;
							cartIds +=","+item.cart.id
					})
					console.log("cartIds",cartIds)
					cartIds = cartIds.substring(1,cartIds.length)
				}
				let data = {data: JSON.stringify({
						type:this.type,
						memberId:this.userInfo.id,
						goodsId: goodsId,
						addrId: this.addressData.id,
						cartIds:cartIds,
						goodsCount: goodsCount,
						inviteCode:this.inviteCode,
						buyerMemo:this.buyerMemo,
						cheapPurchaseCompanyId:this.cheapPurchaseCompanyId
					})}
				this.$getJson('/api/v2/vue/ydd/order/doSubmitOrder.jsp',data,'POST',function(res) {
						if (res.message == '请求成功') {
							if (res.data.isPay == '1' || res.data.isPay == 1) {
								uni.navigateTo({
									url: '/pages/handle/paySuccend/paySuccend?sn=' + res.data.sn
								});
							} else {
								uni.navigateTo({
									url:'/pages/money/pay?money=' +res.data.money +'&sn=' +res.data.sn
								});
							}
						} else {
							uni.showToast({
								title: res.message
							});
						}
					}
				);
			},
			stopPrevent(){}
		}
	}
</script>

<style lang="scss">
	page {
		background: $page-color-base;
		padding-bottom: 100upx;
	}

	.address-section {
		padding: 30upx 0;
		background: #fff;
		position: relative;

		.order-content {
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
	.goods-section{
		.nameLeft{
			margin-left: 0 !important;
		}
	}
	.goods-section {
		margin-top: 16upx;
		background: #fff;
		padding-bottom: 1px;

		.g-header {
			display: flex;
			align-items: center;
			height: 84upx;
			padding: 0 30upx;
			position: relative;
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
			display: flex;
			margin: 20upx 30upx;
			position:relative;
			image {
				flex-shrink: 0;
				display: block;
				width: 140upx;
				height: 140upx;
				border-radius: 4upx;
			}
			.uni-numbox{
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
					color:#ff0000;
				}
				.number{
					font-size: 26upx;
					color: $font-color-base;
					margin-left: 20upx;
				}
			}
			.price-box-top{
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
		padding: 10upx 30upx 10upx 40upx;
		line-height: 70upx;
		position: relative;

		&.cell-hover {
			background: #fafafa;
		}

		&.b-b:after {
			left: 30upx;
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
			color: $font-color-dark;

			&.disabled {
				color: $font-color-light;
			}

			&.active {
				color: $base-color;
			}
			&.red{
				color: $base-color;
			}
		}

		&.desc-cell {
			.cell-tit {
				max-width: 90upx;
			}
		}

		.desc {
			flex: 1;
			font-size: $font-base;
			color: $font-color-dark;
		}
	}
	
	/* 支付列表 */
	.pay-list{
		padding-left: 40upx;
		margin-top: 16upx;
		background: #fff;
		.pay-item{
			display: flex;
			align-items: center;
			padding-right: 20upx;
			line-height: 1;
			height: 110upx;	
			position: relative;
		}
		.icon-weixinzhifu{
			width: 80upx;
			font-size: 40upx;
			color: #6BCC03;
		}
		.icon-alipay{
			width: 80upx;
			font-size: 40upx;
			color: #06B4FD;
		}
		.icon-xuanzhong2{
			display: flex;
			align-items: center;
			justify-content: center;
			width: 60upx;
			height: 60upx;
			font-size: 40upx;
			color: $base-color;
		}
		.tit{
			font-size: 32upx;
			color: $font-color-dark;
			flex: 1;
		}
	}
	.item-right{
		display:flex;
		flex-direction: column;
		flex: 1;
		overflow: hidden;
		position:relative;
		padding-left: 30upx;
		.title{
			padding-right: 60upx;
		}
		.title,.price{
			font-size:$font-base + 2upx;
			color: $font-color-dark;
			height: 40upx;
			line-height: 40upx;
		}
		.attr{
			font-size: $font-sm + 2upx;
			color: $font-color-light;
			height: 50upx;
			line-height: 50upx;
		}
		.price{
			height: 50upx;
			line-height:50upx;
			margin-top: 70upx;
			color:$font-color-pink;
		}
		.step{
			position:absolute;
			right: 0;
			bottom: 0;
		}
	}
	.footer{
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 995;
		display: flex;
		align-items: center;
		width: 100%;
		height: 90upx;
		justify-content: space-between;
		font-size: 30upx;
		background-color: #fff;
		z-index: 998;
		color: $font-color-base;
		box-shadow: 0 -1px 5px rgba(0,0,0,.1);
		.price-content{
			padding-left: 30upx;
		}
		.price-tip{
			color: #ff0000;
			margin-left: 8upx;
		}
		.price{
			font-size: 36upx;
			color:#ff0000;
		}
		.submit{
			display:flex;
			align-items:center;
			justify-content: center;
			width: 280upx;
			height: 100%;
			color: #fff;
			font-size: 32upx;
			background-color: $base-color;
		}
	}
	
	/* 优惠券面板 */
	.mask{
		display: flex;
		align-items: flex-end;
		position: fixed;
		left: 0;
		top: var(--window-top);
		bottom: 0;
		width: 100%;
		background: rgba(0,0,0,0);
		z-index: 9995;
		transition: .3s;
		
		.mask-content{
			width: 100%;
			min-height: 30vh;
			max-height: 70vh;
			background: #f3f3f3;
			transform: translateY(100%);
			transition: .3s;
			overflow-y:scroll;
		}
		&.none{
			display: none;
		}
		&.show{
			background: rgba(0,0,0,.4);
			
			.mask-content{
				transform: translateY(0);
			}
		}
	}

	/* 优惠券列表 */
	.coupon-item{
		display: flex;
		flex-direction: column;
		margin: 20upx 24upx;
		background: #fff;
		.con{
			display: flex;
			align-items: center;
			position: relative;
			height: 120upx;
			padding: 0 30upx;
			&:after{
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
		.left{
			display: flex;
			flex-direction: column;
			justify-content: center;
			flex: 1;
			overflow: hidden;
			height: 100upx;
		}
		.title{
			font-size: 32upx;
			color: $font-color-dark;
			margin-bottom: 10upx;
		}
		.time{
			font-size: 24upx;
			color: $font-color-light;
		}
		.right{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 26upx;
			color: $font-color-base;
			height: 100upx;
		}
		.price{
			font-size: 44upx;
			color: $base-color;
			&:before{
				content: '￥';
				font-size: 34upx;
			}
		}
		.tips{
			font-size: 24upx;
			color: $font-color-light;
			line-height: 60upx;
			padding-left: 30upx;
		}
		.circle{
			position: absolute;
			left: -6upx;
			bottom: -10upx;
			z-index: 10;
			width: 20upx;
			height: 20upx;
			background: #f3f3f3;
			border-radius: 100px;
			&.r{
				left: auto;
				right: -6upx;
			}
		}
	}

</style>
