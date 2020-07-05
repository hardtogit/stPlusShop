<template>
	<view class="content">
		<text class="success-icon yticon icon-xuanzhong2"></text>
		<text class="tit">支付完成</text>
		
		<view class="btn-group">
			<navigator url="/pagesA/user/order/order" open-type="navigateTo" class="mix-btn">查看订单</navigator>
			<navigator url="/pages/home/home" open-type="switchTab" class="mix-btn hollow">返回首页</navigator>
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

<style lang='scss'>
	.content{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.success-icon{
		font-size: 178upx;
		color: #FF474D;
		margin-top: 100upx;
	}
	.tit{
		font-size: 42upx;
		color: #333;
		margin-top: 40upx;
		font-weight: 600upx;
	}
	.btn-group{
		padding-top: 100upx;
	}
	.mix-btn {
		margin-top: 30upx;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 600upx;
		height: 80upx;
		font-size: $font-lg;
		color: #fff;
		background-color: #FF474D;
		border-radius: 40upx;
		&.hollow{
			background: #fff;
			color: #303133;
			border: 1px solid #ccc;
		}
	}
</style>
