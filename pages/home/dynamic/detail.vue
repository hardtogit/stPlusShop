<template>
	<view class="dynamic-detail">
		<view class="share-box">
			<view class="share">
				<button class="share-btn" open-type="share"></button>
				<image class="icon" src="../../../static/icon/home/share.png"></image>
			</view>
		</view>
       <view class="title">
		   {{entity.title}}
	   </view>
	   <view class="time">
		   {{entity.addTimeStr}}
	   </view>
	   <rich-text :nodes="entity.detail" class="rich"></rich-text>
	</view>
</template>

<script>
	import {dealRich} from "@/common/common"
	export default {
		data() {
			return {
				options:{},
				entity:{}
			};
		},
		onLoad(options){
			this.options=options
			this.getData()
		},
		methods: {
			getData() {
				//获取巨划算
				this.$getJson('/api/v2/vue/sqPlus/library/detail.jsp', {

					data: JSON.stringify({
						libraryId: this.options.id||180,
						// mobile: uni.getStorageSync('mobile')
					})
				}, 'POST', res => {
					console.log(res)
					this.entity={...res.data.cjCompanyTextLibrary,detail:dealRich(res.data.cjCompanyTextLibrary.detail)}
				}) 
			},
		}
	}
</script>

<style lang="scss">
.dynamic-detail{
	padding: 30upx;
	.title{
		font-size:38upx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(18,18,18,1);
		line-height:42px;
	}
	.time{
		font-size: 22upx;
		color: #8A8A8A;
	}
	.rich{
		margin-top: 20upx;
		font-size:25upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(18,18,18,1);
		line-height:38upx;
	}
	img{
		width: 100%;
		display: block;
	}
	.share {
		width: 28upx;
		height: 28upx;
		float: right;
		margin-top: 20upx;
		position: relative;
	
		.share-btn {
			position: absolute;
			width: 28upx;
			height: 28upx;
			top: 0;
			left: 0;
			opacity: 0;
		}
	
		.icon {
			display: block;
			width: 28rpx;
			height: 28rpx;
		}
	}
}
</style>
