<style lang="scss" scoped>
	.goods-item {
		width: 708upx;
		height: 264upx;
		margin: 0 auto;
		box-shadow: 0upx 3upx 20upx 2upx rgba(143, 143, 143, 0.16);
		border-radius: 10upx;
		padding: 26upx;

		.in {
			display: flex;
		}

		.img {
			border-radius: 7upx;
			height: 210upx;
			display: block;
			flex-shrink: 0;
			width: 210upx;
			background-color: #ddd;
		}

		.right {
			flex: 1;
			width: 0;
			flex-shrink: 0;
			height: 210upx;
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
				align-items: center;

				.price {
					font-size: 42upx;
					color: #ea6143;
					line-height: 1;
					font-family: Arial;

					&:before {
						content: '￥';
						font-size: 21upx;

					}
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
	<view class="goods-item" @click="navTo(`/pages/home/detail/goods/goods?id=${goods.id}`)">
		<view class="in"> 
			<image class="img" :src="ctx+goods.firstImg"></image>
			<div class="right">
				<view class="title clamp">{{goods.proName}}</view>
				<view class="des">
					{{goods.subheading}}
				</view>
				<view class="bottom">
					<view class="price">{{goods.price/100}}</view>
					<view class="default">{{goods.marketPrice/100}}</view>
					<image class="add-icon"></image>
				</view>
			</div>
		</view>
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
