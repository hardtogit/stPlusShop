<style lang="scss" scoped>
	.coupon-item{
		width: 533upx;
		height: 305upx;
		box-shadow:0px 3upx 20upx 2upx rgba(143,143,143,0.16);
		border-radius:10upx;
		margin-bottom: 20upx;
		.body{
			position: relative;
			padding: 20upx;
			height: 100%;
			.inner-box {
				display: flex;
			.left{
				width: 140upx;
				.img{
					width: 140upx;
					height: 140upx;
					display: block;
					background-color: #ddd;
				}
			}
			.right{
				padding-left: 20upx;
				.title{
					font-size: 28upx;
					color: #141414;
				}
				.discription{
					font-size: 22upx;
					color: #6D6D6D;
				}
				.bottom{
					display: flex;
					align-items: baseline;
					justify-content: space-between;
					.left{
						display: flex;
						align-items: baseline;
						.price{
							display: flex;
							margin-right: 6upx;
							align-items: baseline;
							color: #F0351C;
							font-size: 42upx;
							.unit{
								font-size: 21upx;
							}
						}
						.default{
							font-size: 25upx;
							color: #A5A5A5;
							text-decoration: line-through;
						}
					}
					.right{
						font-size: 25upx;
						color: #6D6D6D;
					}
				}
				
			}
			}
			.line{
			    border-top: .5upx solid rgba(197,195,197,.45);;
				height: 68upx;
				line-height: 68upx;
				position: absolute;
				width: 492upx;
				bottom: 0;
				font-size: 25upx;
				color: #6D6D6D;
			}
		}
	}
</style>
<template>
	<view class="coupon-item">
		<view class="body">
			<view class="inner-box">
			<view class="left">
				<image class="img" src=""></image>
			</view>
			<view class="right">
				<view class="title">单人15元宫保鸡丁套餐15 元宫保鸡丁套餐</view>
				<view class="discription">宫保鸡丁+可乐+米饭</view>
				<view class="bottom">
					<view class="left">
						<view class="price"><view class="unit">¥</view>88</view>
						<view class="default">¥45</view>
					</view>
					<view class="right">543m</view>
				</view>
			</view>
			</view>
			<view class="line">
				过饭卡过饭卡帅哥发了
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>


