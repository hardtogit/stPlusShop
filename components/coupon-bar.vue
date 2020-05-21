<style lang="scss" scoped>
	.goods-item {
		width: 750upx;
		height: 350upx;
		background-image: url(../static/icon/home/coupon_bg.png);
		background-size: 100% 100%;
		margin: 0 auto;
		padding: 50upx;

		.in {
			display: flex;
			padding-bottom: 20upx;
			border-bottom: 1upx solid #eee;
		}
		.sub{
			font-size: 25upx;
			color: #6D6D6D;
			margin-top: 6upx;
		}

		.img {
			border-radius: 7upx;
			height: 176upx;
			display: block;
			flex-shrink: 0;
			width: 176upx;
			background-color: #ddd;
		}

		.right {
			flex: 1;
			width: 0;
			flex-shrink: 0;
			height: 180upx;
			padding-left: 33upx;
			position: relative;

			.title {
				font-size: 28upx;
				color: #141414;
				font-weight: bold;
			}
			.des{
				font-size: 22upx;
				color: #5E5E5E;
				margin-top: 10upx;
			}

			.bottom {
				display: flex;
				position: absolute;
				bottom: 0;
				width: 100%;
				padding-right: 40upx;
				align-items: center;
 
				.price {
					flex: 1;
					font-size: 42upx;
					color: #ea6143;
					line-height: 1;
					font-family: Arial;

					&:before {
						content: '￥';
						font-size: 21upx;

					}
				}
				.distance{
					font-size: 22upx;
					color: #5E5E5E;
		
				}
				.default {
					font-size: 25upx;
					display: inline-block;
					align-items: baseline;
					color: #a5a5a5;
					text-decoration: line-through;

					&:before {
						content: '￥';
						font-size: 25upx;
						text-decoration: line-through;
					}
				}

				.add-icon {
					display: block;
					width: 32upx;
					height: 32upx;
				}
			}
		}

	}
</style>
<template>
	<view class="goods-item" @click="navTo(`/pages/home/detail/coupon/coupon?id=${goods.coupon.id}`)">
		<view class="in"> 
			<image class="img" :src="ctx+goods.coupon.imgPath"></image>
			<div class="right">
				<view class="title clamp">{{goods.coupon.name}}</view>
				<view class="des">
					{{goods.coupon.instro}}
				</view>
				<view class="bottom">
					<view class="price">{{goods.coupon.value}}</view>
					<view class="distance">{{goods.distance}}</view>
				</view>
			</div>
		</view>
		<view class="sub">京味斋 北京牡丹烤鸭(双安店）</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ctx:this.$ctx	
			};
		},
		props: {
			goods: {
				type: Object
			}
		},
		methods:{
			navTo(url) {
				uni.navigateTo({
					url
				})
			},
		}
	}
</script>
