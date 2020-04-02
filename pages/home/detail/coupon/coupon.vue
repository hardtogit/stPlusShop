<style lang="scss">
	page{
		background-color: #EEEBEE;
	}
	.coupon{
		padding:0 20upx 130upx 20upx;
	}
	.card{
		background-color: #fff;
		box-shadow:0px 3px 19px 0px rgba(143,143,143,0.14);
		border-radius: 10upx;
		margin-top: 20upx;
		padding: 46upx 38upx;
		&.one{
			.title{
				font-size: 42upx;
				color: #000;
			}
			.img{
				width: 100%;
				height: 350upx;
				border-radius: 7upx;
				background-color: #ddd;
				margin-top: 30upx;
			}
		}
	}
	.bottom{
		height: 110upx;
		background-color: #fff;
		z-index: 10;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		display: flex;
		box-shadow:0px 2px 19px 1px rgba(97,97,97,0.13);
		.left{
			flex: 1;
			display: flex;
			align-items: center;
			padding-left: 20upx;
			.price{
				display: flex;
				align-items: baseline;
				color: #F0351C;
				margin-right: 10upx;
				.unit{
					font-size: 25upx;
					margin-right: 4upx;
				}
				.num{
					font-size: 56upx;
				}
			}
			.default{
				display: flex;
				align-items: baseline;
				position: relative;
				top:8upx;
				color: #A5A5A5;
			    font-size: 25upx;
				text-decoration: line-through;
			}
		}
		.right{
			flex: 1;
			display: flex;
			align-items: center;
			.btn{
				width: 194upx;
				height: 60upx;
				border-radius: 30upx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 28upx;
				color: #fff;
				&.cart{
					background-color: #FFBA21;
					margin-right: 10upx;
				};
				&.buy{
					background-color:#FF474C;
					margin-right: 20upx;
				}
			}
		}
	}

</style>
<template>
	<view class="coupon">
		<view class="card one">
			<view class="title">超值2-3人羊蝎子套餐7折抢</view>
			<image class="img"></image>
		</view>
		<view class="card one">
			<view class="title">超值2-3人羊蝎子套餐7折抢</view>
			<image class="img"></image>
		</view>
		<view class="bottom">
			<view class="left">
				<view class="price">
					<view class="unit">¥</view>
					<view class="num">23.4</view>
				</view>
				<view class="default">
					<view class="unit">¥</view>
					<view class="num">33.6</view>
				</view>
			</view>
			<view class="right">
				<view class="btn cart">加入购物车</view>
				<view class="btn buy">立即抢购</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>


