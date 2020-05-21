<style lang="scss">
	.collection{
		padding: 185upx 20upx 20upx 20upx;
		.header{
			position: fixed;
			width: 710upx;
			height: 185upx;
			background-color: #fff;
			z-index: 10;
			top:0;
			left: 20upx;
		}
		.search-bar{
			width: 700upx;
			height: 60upx;
			text-align: center;
			color: #808080;
			font-size: 24upx;
			line-height: 60upx;
			background-color: #f6f6f6;
			margin-top: 20upx;
			border-radius: 30upx;
		}
		.labels{
			display: flex;
			justify-content: space-between;
			margin-top: 20upx;
			.label{
				width: 348upx;
				height: 80upx;
				border-radius: 8upx;
				text-align: center;
				line-height: 80upx;
				color: #FF474D;
				border: 1upx solid #FF474D;
				&.active{ 
					background-color: #FF474D;
					color: #fff;
				}
			}
		}
		.list{
			.store{
				padding: 30upx 0;
				display: flex;
				border-bottom: 1upx solid #eee;
				.left{
					width: 140upx;
					.img{
						display: block;
						width: 140upx;
						height: 140upx;
						background-color: #ddd;
						border-radius: 20upx;
					}
				}
				.right{
					flex: 1;
					padding-left: 20upx;
					.title{
						font-size: 31upx;
						color: #333;
						font-weight: bold;
					}
					.address{
						display: flex;
						align-items: center;
						font-size: 25upx;
						color: #808080;
						margin-top: 10upx;
						image{
							display: block;
							width: 19upx;
							height: 23upx;
							margin-right: 4upx;
						}
					}
					.distance{
						font-size: 21upx;
						color: #808080;
						margin-top: 20upx;
					}
				}
			}
		}
	}
</style>
<template>
	<view class="collection">
		<view class="header">
			<view class="search-bar">
				搜索
			</view>
			<view class="labels">
				<view :class="['label',collectionType==1&&'active']" @click="changeCollectionType(1)">
					收藏的店铺
				</view>
				<view :class="['label',collectionType==2&&'active']" @click="changeCollectionType(2)">
					收藏的商品
				</view>
			</view>			
		</view>
		<view class="list">
			<view class="store" v-for="(item,index) in storeList" :key='index'>
				<view class="left">
					<image class="img" :src="ctx+item.logoPath"></image>
				</view>
				<view class="right">
					<view class="title clamp">{{item.name}}</view>
					<view class="address clamp"><image src="../../static/icon/home/address.png"></image> {{item.address}}</view>
					<view class="distance">{{item.distance}}</view>
				</view>					
			</view>				
		</view>
	</view>
</template>
<script>
	export default{
		data(){
			return{
				ctx:this.$ctx,
				storeList:[]
			}
		},
		onShow(){
			this.getData()
		},
		methods:{
			changeCollectionType(type){
				this.collectionType=type
			},
			getData(){
				this.$getJson('/api/v3/my/store/collectList.jsp',{pageNumber:1},'POST',res=>{
					console.log(res.data,'sssssssssssssss')
					this.storeList=res.data
				}) 
				
			}
		}
	}
</script>