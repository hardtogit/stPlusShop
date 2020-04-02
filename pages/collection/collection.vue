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
					}
					.address{
						display: flex;
						font-size: 25upx;
						color: #808080;
						margin-top: 10upx;
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
					全部收藏
				</view>
				<view :class="['label',collectionType==2&&'active']" @click="changeCollectionType(2)">
					最近浏览
				</view>
			</view>			
		</view>
		<view class="list">
			<view class="store" v-for="(item,index) in storeList" :key='index'>
				<view class="left">
					<image class="img" :src="item.url"></image>
				</view>
				<view class="right">
					<view class="title clamp">{{item.title}}</view>
					<view class="address clamp">{{item.address}}</view>
					<view class="distance">{{item.distance}}</view>
				</view>					
			</view>
			<view class="store" v-for="(item,index) in storeList" :key='index'>
				<view class="left">
					<image class="img" :src="item.url"></image>
				</view>
				<view class="right">
					<view class="title clamp">{{item.title}}</view>
					<view class="address clamp">{{item.address}}</view>
					<view class="distance">{{item.distance}}</view>
				</view>					
			</view>
			<view class="store" v-for="(item,index) in storeList" :key='index'>
				<view class="left">
					<image class="img" :src="item.url"></image>
				</view>
				<view class="right">
					<view class="title clamp">{{item.title}}</view>
					<view class="address clamp">{{item.address}}</view>
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
				collectionType:1,
				storeList:[{url:'',title:'阿福发噶个哥萨克广发卡上',address:'尽快发噶时间广发卡帅哥发',distance:'12.5km'},
				{url:'',title:'阿福发噶个哥萨克广发卡上',address:'尽快发噶时间广发卡帅哥发',distance:'12.5km'},
				{url:'',title:'阿福发噶个哥萨克广发卡上',address:'尽快发噶时间广发卡帅哥发',distance:'12.5km'}]
			}
		},
		methods:{
			changeCollectionType(type){
				this.collectionType=type
			}
		}
	}
</script>