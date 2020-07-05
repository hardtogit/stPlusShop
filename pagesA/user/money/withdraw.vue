<style lang="scss">
	.header-box{
			width: 700upx;
			margin: 20upx auto;
			box-shadow:0px 2px 19px 1px rgba(97,97,97,0.13);
			border-radius:9px;
			overflow: hidden;
			.money-container{
				height: 180upx;
				display: flex;
				align-items: center;
				border-bottom: 1px solid #E6E6E6;
				.left{
					font-size: 25upx;
					color: #808080;
					flex: 1;
					padding-left: 70upx;
				}
				.right{
					flex: 1;
					display: flex;
					align-items: baseline;
					.unit{
						font-size: 42upx;
					}
					.num{
						font-size: 69upx;
						font-weight: bold;
						height: 100upx;
						padding-left: 20upx;
					}
				}
			}
			.choice{
				padding: 65upx 0 65upx 70upx;
				font-size: 33upx;
				color: #333;
			}
			.items{
				text-align: center;
				.item{
					display: inline-block;
					margin: 40upx 80upx;
					.text{
						font-size: 25upx;
						color: #808080;
					}
					&.wx{
						.img{
							width: 94upx;
							height: 75upx;
							display: block;
						}
						.text{
							margin-top: 17upx;
						}
					}
					&.card{
						.img{
							width: 92upx;
							height: 62upx;
							display: block;
						}
						.text{
							margin-top: 24upx;
						}
					}
				}
			}
			.btn{
				width: 600upx;
				height: 80upx;
				display: flex;
				margin: 40upx auto;
				border-radius: 10upx;
				color: #fff;
				align-items: center;
				justify-content: center;
				background-color: #FF474C;
			}
			}
</style>
<template>
	<view class="withdraw">
		<view class="header-box">
			<view class="money-container">
				<view class="left">提现金额</view>
				<view class="right">
					<view class="unit">¥</view>
					<input type="number" class="num"></input>					
				</view>
			</view>
			<view class="choice">
				提现选择
			</view>
			<view class="items">
				<view class="item wx">
					<image class="img" src="../../../static/icon/user/wx.png"></image>
					<view class="text">
						微信
					</view>
					<view class="checkbox">
						
					</view>
				</view>
				<view class="item card">
					<image class="img" src="../../../static/icon/user/card.png"></image>
					<view class="text">
						银行卡
					</view>
					<view class="checkbox">
						
					</view>
				</view>
			</view>
			<view class="btn">
				申请提现
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


