<style lang="scss">
   .goods-item{
	   width: 260upx;
	   height: 390upx;
	   box-sizing: border-box;
	   margin-right: 15upx;
	   display: inline-block;
	   box-shadow:0px 8px 10px 0px rgba(0, 0, 0, 0.05);
	   border-radius: 20upx;
	   margin-bottom: 15rpx;
	   &.no-margion{
		   margin-right: 0;
	   }
	   .img{
		   border-top-right-radius: 20upx;
		   border-top-left-radius: 20upx;
		   height: 280upx;
		   display: block;
		   width: 260upx;
		   background-color: #ddd;
	   }
	   .title{
		   font-size: 25upx;
		   color: #333;
		   font-weight: bold;
		   padding: 18upx 24upx 12upx 24upx;
		   
	   }
	   .bottom{
		   display: flex;
		   padding-left: 18upx;
		   align-items: center;
		   .price{
			   font-size: 21upx;
			   color: #FF474C;
			   font-weight: bold;
		   }
		   .default{
			   font-size: 15upx;
			   color: #808080;
			   text-decoration: line-through;
			   margin-left: 4upx;
		   }
		   .add-icon{
			   display: block;
			   width: 32upx;
			   height: 32upx;
		   }
	   }
   }
</style>
<template>
	<view :class="['goods-item',noMargin&&'no-margion']">
		<image class="img" src=""></image>
		<view class="title clamp">麻辣小龙虾发哈哈书法课和饭卡饭卡</view>
		<view class="bottom">
			<view class="price">¥59.00</view>
			<view class="default">¥99.00</view>
			<image class="add-icon"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:{
			noMargin:{
				type:Boolean,
				default:false
			}
		}
	}
</script>


