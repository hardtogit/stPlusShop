<style lang="scss">
 .dynamic{
	 padding:0 30upx 30upx 30upx;
	 .dynamic-item{
		 padding-bottom: 30upx;
		 border-bottom: 1upx solid #DCDCDC;
		 .share-box{
			 height: 70upx;
		 }
		 .share{
			 width: 28upx;
			 height: 28upx;
			 float: right;
			 margin-top: 20upx;
			 position: relative;
			 .share-btn{
				position: absolute;
				width: 28upx;
				height: 28upx;
				top:0;
				left: 0;
				opacity: 0;
			 }
			 .icon{
				 display: block;
				 width: 28rpx;
				 height: 28rpx;
			 }
		 }
		 .store-title{
		 	font-size: 31upx;
			color: #121212;
		 }	
		 .sub-title{
		 	font-size: 26upx;
		 	color: #616161;
		 	margin-top: 18upx;
		 }
		 .pictures{
		 	margin-top: 24upx;
		 	.picture{
		 		width: 208upx;
		 		display: inline-block;
		 		height: 203upx;
		 		background-color: #ddd;
		 		margin-right: 30rpx;
		 		margin-bottom: 20upx;
				border-radius: 8upx;
		 		&:nth-child(3n){
		 			margin-right: 0;
		 		}
		 	}
		 }
	 }
 }
</style>
<template>
	<view class="dynamic" >
		<view class="dynamic-item" v-for="(item,index) in dynamicList" :key="index">
			<view class="share-box">
				<view class="share">
					<button class="share-btn" open-type="share"></button>
					<image class="icon" src="../../../static/icon/home/share.png"></image>
				</view>
			</view>
		<view class="store-title">东坡故里  泡博会探寻东坡味道</view>
		<view class="sub-title">
			第十一届中国泡菜食品 国际博览会，11月13日在四川眉山正式开幕，“健康食品 世界共享”。
		</view>
		<view class="pictures">
			<image class="picture" src=""></image>
			<image class="picture" src=""></image>
			<image class="picture" src=""></image>
		</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dynamicList:[{},{},{}]
			};
		},
		onShareAppMessage(res){
			console.log(res)
		}
	}
</script>


