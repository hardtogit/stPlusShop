
<style lang="scss">
	.header-box{
			width: 700upx;
			margin: 20upx auto;
			box-shadow:0px 2px 19px 1px rgba(97,97,97,0.13);
			border-radius:9px;
			overflow: hidden;
			padding: 40upx 40upx 80upx 40upx;
			.box{
				text-align: center;
				padding-top: 20upx;
			}
			.title{
				font-size: 28upx;
				color: #333;
			}
			.price-box{
				display: inline-block;
				.inner{
					display: flex;
					align-items: baseline;
					.unit{
						font-size: 42upx;
					}
					.num{
						font-size: 69upx;
						font-weight: bold;
					}
				}
			}
			}
			.sub-title{
				padding: 20upx  0upx 20upx 65upx;
				font-size: 28upx;
				color: #333;
			}
			.table{
				box-shadow:0px 2px 19px 1px rgba(97,97,97,0.13);
				width: 700upx;
				padding-bottom: 40upx;
				margin: 0 auto;
				.tr{
					display: flex;
					padding: 30upx 40upx 0 40upx;
					font-size: 28upx;
					&.th{
						padding: 30upx 40upx;
						border-bottom: 1upx solid #DCDCDC;
						.right{
							color: #333;
						}
					}
					.left{
						text-align: left;
					}
					.center{
						flex: 1;
						text-align: center;
					}
					.right{
						text-align: right;
						color: #FF474D;
					}
				}
			}
</style>
<template>
	<view>
		<view class="header-box">
			<view class="title">
				待结算金额
				<view class="box">
					<view class="price-box">
						<view class="inner">
							<view class="unit">¥</view>
							<view class="num">778.00</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="sub-title">待结算明细</view>
		<view class="table">
			<view class="tr th">
				<view class="left">姓名催化</view>
				<view class="center">订单编号</view>
				<view class="right">金额（元）</view>
			</view>
			<view class="tr">
				<view class="left">催化</view>
				<view class="center">13422497817</view>
				<view class="right">9:00</view>
			</view>
			<view class="tr">
				<view class="left">催化</view>
				<view class="center">13422497817</view>
				<view class="right">9:00</view>
			</view>
			<view class="tr">
				<view class="left">催化</view>
				<view class="center">13422497817</view>
				<view class="right">9:00</view>
			</view>
			<view class="tr">
				<view class="left">催化</view>
				<view class="center">13422497817</view>
				<view class="right">9:00</view>
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

