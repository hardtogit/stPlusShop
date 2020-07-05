<style lang="scss">
	.money {
		.header-box {
			width: 700upx;
			margin: 20upx auto;
			padding: 70upx 0;
			box-shadow: 0px 2px 19px 1px rgba(97, 97, 97, 0.13);
			border-radius: 9px;
			overflow: hidden;

			.title {
				font-size: 25upx;
				color: #808080;
				text-align: center;
			}

			.detail {
				text-align: center;
				margin-top: 20upx;
				position: relative;

				.price-box {
					display: inline-block;

					.inner {
						display: flex;
						align-items: baseline;

						.unit {
							font-size: 42upx;
						}

						.num {
							font-size: 69upx;
							font-weight: bold;
						}
					}
				}

				.more {
					position: absolute;
					right: 40upx;
					top: 20upx;
					font-size: 25upx;
					color: #FF474C;
				}

			}

			.btn {
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

			.tip {
				font-size: 25upx;
				color: #808080;
				width: 600upx;
				margin: 0 auto;
				text-align: justify;

				&.one {
					margin-top: 50upx;
				}

				&.two {
					margin-top: 30upx;
				}
			}
		}

		.cell-box {
			box-shadow: 0px 2px 19px 1px rgba(97, 97, 97, 0.13);
			margin-top: 20upx;
		}

		.cell {
			height: 100upx;
			display: flex;
			font-size: 25upx;
			align-items: center;
			padding: 20upx;

			&.border {
				border-bottom: 1upx solid #DCDCDC;
			}

			.left {
				flex: 1;
			}

			.right {
				flex: 1;
				text-align: right;
			}
		}
	}
</style>
<template>
	<view class="money">
		<view class="header-box">
			<view class="title">
				可提现金额
			</view>
			<view class="detail">
				<view class="price-box">
					<view class="inner">
						<view class="unit">¥</view>
						<view class="num">{{balance}}</view>
					</view>
				</view>
				<view class="more">
					明细
				</view>
			</view>
			<view class="btn" @click="push('/pagesA/user/money/withdraw')">
				提现
			</view>
			<view class="tip one">
				提现说明：当可提现金额不足1000元时，只可提现至微信零钱；当可提现金额等于或超过1000元，可以两种方式任选：微信零钱或银行卡账户。
			</view>
			<view class="tip two">
				提现申请提交后，平台需1-2天时间审核，审核通过后会将您的资金转入指定账户。如超过时间仍未收到款项，请致电400-166-7600与平台客服联系。
			</view>
		</view>
		<view class="cell-box">
			<view class="cell border" @click="push(`/pagesA/user/money/wait?num=${waitingIncome}`)">
				<view class="left">待结算（元）</view>
				<view class="right">{{waitingIncome}}</view>
			</view>
			<view class="cell" @click="push(`/pagesA/user/money/already?num=${grossIncome}`)">
				<view class="left">已结算（元）</view>
				<view class="right">{{grossIncome}}</view>
			</view>
		</view>
		<view class="cell-box">
			<view class="cell">
				<view class="left">我的银行卡</view>
				<view class="right">已绑定</view>
			</view>
		</view>

	</view>
</template>
<script>
	export default {
		data() {
			return {
				balance:'',
				grossIncome:'',
				waitingIncome:''
			}
		},
		onLoad(){
			// this.balance='wee'
			this.getData()
		},
		methods: {
			getData() {
				const $this=this
				this.$getJson(
					'/api/v2/vue/sqPlus/companyMoneyLog/getSumMoney.jsp', {
						data: JSON.stringify({
							companyId: $this.companyId||202
						})
					},
					'POST',
					res => {
						$this.balance = res.data.balance?(res.data.balance/100).toFixed(2):'0.00'
						$this.grossIncome = res.data.grossIncome? (res.data.grossIncome/100).toFixed(2):'0.00'
						$this.waitingIncome = res.data.waitingIncome? (res.data.waitingIncome/100).toFixed(2):'0.00'
						console.log($this.balance)
					}
				); 
			},
			push(url){
				uni.navigateTo({
					url
				})
			}

		}
	}
</script>
