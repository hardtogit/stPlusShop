<template>
	<view class="container">
	<view class="header">
		<view class="icons">
			<image class="icon love" src="../../static/icon/home/love.png"></image>
			<image class="icon turn" src="../../static/icon/home/turn.png"></image>
			<image class="icon qrcode" src="../../static/icon/home/qrcode.png"></image>
		</view>
	</view>
	<view class="lables">
		<view class="lable active">店铺</view>
		<view class="lable">商圈券</view>
		<view class="lable">聚划算</view>
	</view>
	<view class="swiper-item">
		<view class="title" @click="push('/pages/home/classify/hot/hot')">
			<view class="inner">
			<view class="text">
				爆品
			</view>
			<view class="icon">
				<text class="cell-more yticon icon-you"></text>
			</view>
			</view>
		</view>
		<scroll-view  class="swiper " :scroll-x="true">
			<view class="guess-section">
				 <view v-for="(item, index) in goodsList" :key="index" class="guess-item" @tap.stop="navToDetailPage(item,'hot')">
				 	<view class="image-wrapper">
				 		<image :src="url+item.resource.samllCoverImg" mode="aspectFill"></image>
				 	</view>
				 	<text class="title clamp">{{item.resource.name}}</text>
				    <text class="text">干笋在发水烹饪后，其口感质嫩味鲜，清脆爽口</text>
				 	<view class="price-box">
				 		<view class="price-box" v-if="item.goods.isFaceToFace != 1">
				 			<text class="price">{{item.goods.priceEdit}}</text>
				 			<text class="default">{{item.goods.priceEdit}}</text>
				 		</view>
				 		<view class="price-box" v-if="item.goods.isFaceToFace == 1 || item.goods.isFaceToFace == '1'">
				 			<text class="price">面议</text>
				 		</view>
				 		<text class="label">限时购</text>
				 	</view>
				 </view>
				 </view>
		</scroll-view> 
	</view>
	<view class="swiper-item">
		<view class="title" @click="push('/pages/home/classify/coupon/coupon')">
			<view class="inner">
			<view class="text">
				商圈券
			</view>
			<view class="icon">
				<text class="cell-more yticon icon-you"></text>
			</view>
			</view>
		</view>
		<scroll-view  class="swiper " :scroll-x="true">
			<view class="guess-section">
				 <view v-for="(item, index) in goodsList" :key="index" class="guess-item" @tap.stop="navToDetailPage(item,'coupon')">
				 	<view class="image-wrapper">
				 		<image :src="url+item.resource.samllCoverImg" mode="aspectFill"></image>
				 	</view>
				 	<text class="title clamp">{{item.resource.name}}</text>
				    <text class="text">干笋在发水烹饪后，其口感质嫩味鲜，清脆爽口</text>
				 	<view class="price-box">
				 		<view class="price-box" v-if="item.goods.isFaceToFace != 1">
				 			<text class="price">{{item.goods.priceEdit}}</text>
				 			<text class="default">{{item.goods.priceEdit}}</text>
				 		</view>
				 		<view class="price-box" v-if="item.goods.isFaceToFace == 1 || item.goods.isFaceToFace == '1'">
				 			<text class="price">面议</text>
				 		</view>
				 		<text class="label">限时购</text>
				 	</view>
				 </view>
				 </view>
		</scroll-view> 
	</view>
	<view class="swiper-item">
		<view class="title" @click="push('/pages/home/classify/platform/platform')">
			<view class="inner">
			<view class="text">
				聚划算
			</view>
			<view class="icon">
				<text class="cell-more yticon icon-you"></text>
			</view>
			</view>
		</view>
		<scroll-view  class="swiper " :scroll-x="true">
			<view class="guess-section">
				 <view v-for="(item, index) in goodsList" :key="index" class="guess-item" @tap.stop="navToDetailPage(item,'platform')">
				 	<view class="image-wrapper">
				 		<image :src="url+item.resource.samllCoverImg" mode="aspectFill"></image>
				 	</view>
				 	<text class="title clamp">{{item.resource.name}}</text>
				    <text class="text">干笋在发水烹饪后，其口感质嫩味鲜，清脆爽口</text>
				 	<view class="price-box">
				 		<view class="price-box" v-if="item.goods.isFaceToFace != 1">
				 			<text class="price">{{item.goods.priceEdit}}</text>
				 			<text class="default">{{item.goods.priceEdit}}</text>
				 		</view>
				 		<view class="price-box" v-if="item.goods.isFaceToFace == 1 || item.goods.isFaceToFace == '1'">
				 			<text class="price">面议</text>
				 		</view>
				 		<text class="label">限时购</text>
				 	</view>
				 </view>
				 </view>
		</scroll-view> 
		<view class="swiper-item">
			<view class="title">
				<view class="inner">
				<view class="text">
					店铺动态
				</view>
				<view class="icon">
					<text class="cell-more yticon icon-you"></text>
				</view>
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
				<image class="picture" src=""></image>
				<image class="picture" src=""></image>
				<image class="picture" src=""></image>
				<image class="picture" src=""></image>
				<image class="picture" src=""></image>
			</view>
		</view>
		<view class="swiper-item">
			<view class="title">
				<view class="inner">
				<view class="text">
					店铺介绍
				</view>
				<view class="icon">
					<text class="cell-more yticon icon-you"></text>
				</view>
				</view>
			</view>
			<image class="store-banner" src=''></image>
			<view class="introduce-title">
				<image class="logo"/>
				<view class="name">华创大健康事业平台</view>
			</view>
	
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsList:[]
			}
		},
		methods: {
			getData(){
				var url = '/api/v2/vue/ydd/index/resList.jsp'
				let data = {
					data: JSON.stringify({
						pageNumber: 1,
						pageSize:10,
						companyId: uni.getStorageSync('companyId')
					})
				}
				this.$getJson(url, data, 'POST', res => {
					console.log('----list------------', res);
					if (res.data) {
						this.goodsList=res.data
					}
				});
			},
			push(url){
				uni.navigateTo({
					url
				})
			},
			//详情页
			navToDetailPage(item,type) {
				if(type=='hot'||type=='platform'){//爆品和平台商品
					//测试数据没有写id，用title代替
					let id = item.resource.id;
					uni.navigateTo({
						url: `/pages/home/detail/goods/goods?id=${id}` + "&companyId=" + this.companyId +
							"&cheapPurchaseCompanyId=" + this.cheapPurchaseCompanyId + "&classification=" + this.classification
					})					
				}else if(type=='coupon'){ //优惠券
					//测试数据没有写id，用title代替
					let id = item.resource.id;
					uni.navigateTo({
						url: `/pages/product/product?id=${id}` + "&companyId=" + this.companyId +
							"&cheapPurchaseCompanyId=" + this.cheapPurchaseCompanyId + "&classification=" + this.classification
					})
				}
			},
		},
		mounted(){
			this.getData()
		}
	}
</script>

<style lang="scss">
	.container{
		padding: 0 25upx;  
	}
	.header{
		background-color: #FF872F;
		height: 300upx;
		border-radius: 10upx;
		position: relative;
		.icons{
			position: absolute;
			width: 100%;
			top: 25upx;
			.icon{
				display: inline-block;
				width: 32upx;
				height: 32upx;
				&.love{
					float: left;
					margin-left: 25upx;
				}
				&.qrcode{
					float: right;
					margin-right: 25upx;
				}
				&.turn{
					float: right;
					margin-right: 25upx;
				}
			}
		}
	}
	.lables{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 30upx 0 20upx 0;
		.lable{
			width: 186upx;
			height: 65upx;
			line-height: 65upx;
			border-radius: 32.5upx;
			font-size: 33upx;
			text-align: center;
			color: #525252;
			&.active{
				background-color: #FF474C;
				color: #fff;
			}
		}
	}
    .swiper-item{
		.title{
			padding: 16upx 0;
			border-bottom: 0.5upx solid #DCDCDC;
			.inner{
				display: flex;
				align-items: center;
				border-left: 6upx solid #FF474C;
				padding-left: 10upx;
				.text{
					font-size: 40upx;
					font-weight: bold;
				}
				.icon{
					flex: 1;
					text-align: right;
				}
			}
		}
		.swiper{
			height: 540upx;
			.guess-section{
				white-space: nowrap;
				padding: 38upx 0;
				background: #fff;
				.guess-item {
					display: inline-block;
					width: 303upx;
					margin-right: 18upx;
				}
			
				.image-wrapper {
					width: 100%;
					height: 334upx;
					border-radius: 3px;
					overflow: hidden;
					image {
						width: 100%;
						height: 100%;
						opacity: 1;
					}
				}
			
				.title {
					font-size: 30upx;
					color: $font-color-dark;
					font-family: Arial, Helvetica, sans-serif;
					margin-top: 8upx;
					border-bottom: none;
					padding: 0;
				}
				.text{
					color: #777;
					display: block;
					font-size: 22upx;
					line-height: 26upx;
					white-space: normal;
					margin: 8upx 0; 
				}
		
				.price-box {
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding-right: 10upx;
					font-size: 24upx;
					color: $font-color-light;
					font-family: Arial;
				}
				.price {
					font-size: 37upx;
					color: #ea6143;
					line-height: 1;
					font-family: Arial;
					&:before {
						content: '￥';
						font-size: 37upx;
						margin-right: 2upx;
					}
				}
				.default{
					font-size: 22upx;
					display: inline-block;
					align-items: baseline;
					color: #B1B1B1;
					text-decoration: line-through;
					&:before {
						content: '￥';
						font-size: 22upx;
						margin-right: 2upx;
						text-decoration: line-through;
					}
				}
			    .label{
					color: #F0351C;
					font-size:24upx;
					border: 0.5upx solid #F0351C;
					padding: 1upx 4upx;
					border-radius: 4upx;
				}
			}
			}
			// 店铺
		.store-title{
			font-size: 31upx;
			margin-top: 28upx;
		}	
		.sub-title{
			font-size: 26upx;
			color: #616161;
			margin-top: 26upx;
		}
		.pictures{
			margin-top: 40upx;
			.picture{
				width: 208upx;
				display: inline-block;
				height: 203upx;
				background-color: #ddd;
				margin-right: 34rpx;
				margin-bottom: 20upx;
				&:nth-child(3n){
					margin-right: 0;
				}
			}
		}
		.store-banner{
			display: block;
			width: 692upx;
			height: 565upx;
			margin: 0 auto;
		}
		.introduce-title{
			display: flex;
			align-items: center;
			.logo{
				width: 120upx;
				height: 120upx;
				display: block;
				background-color: #ddd;
			}
			.name{
				font-size: 38upx;
				color: #0F0F0F;
				flex: 1;
				padding-left: 34upx;
			}
		}
			
	}
</style>
