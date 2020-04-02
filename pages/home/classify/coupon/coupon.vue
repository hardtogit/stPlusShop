<style lang="scss">
    .aside{
		position: fixed;
		width: 185upx;
		height: 100%;
		left: 0;
		top: 0;
		background-color: #F2F2F2;
		.menu{
			height: 85upx;
			display: flex;
			align-items: center;
			.text{
				font-size: 28upx;
				color: #6F6F6F;
				text-align: center;
				flex: 1;
			}
			&.active{
				background-color: #fff;
				.text{
					font-size: 29upx;
					color: #090909;
					border-left: 7upx solid #FF474C;
				}
			}
		}
	}
			.container{
				padding-left: 185upx;
				.inner{
					padding: 57upx 16upx 0 16upx;
					position: relative;
					.toolbar{
						position: fixed;
						width: 565upx;
						box-sizing: border-box;
						padding:0 16upx;
						height: 58upx;
						top: 0;
						right:0;
						background-color: #fff;
						z-index: 10;
						display: flex;
						align-items: center;
						.left{
							flex: 1;
							display: flex;
							align-items: center;
							.search-icon{
								display: block;
								width: 24upx;
								height: 24upx;
							}
							.text{
								padding-left: 10upx;
								flex: 1;
								font-size: 26upx;
							}
						}
						.right{
							display: flex;
							flex: 1;
							font-size: 24upx;
							color: #141414;
							justify-content: space-between;
							.active{
								color: #FF474C;
							}
							.up-dowm{
								display: inline-block;
								margin-left: 2upx;
								.up{
									display: block;
									width: 10upx;
									height: 6upx;
								}  
								.down{ 
									display: block;
									margin-top: 6upx;
									width: 10upx;
									height: 6upx;
								}
							}
						}
					}
				}
			}
</style>
<template>
	<view>
		<view class="aside">
			<view :class="['menu',selectMenu==item.value&&'active']" 
			v-for="item in sideMenu" :key="item.value" @click="handleMenuChange(item.value)">
				<view  class="text">{{item.label}}</view>
			</view>
		</view>
		<view class="container">
			<view class="inner">
				<view class="toolbar">
					<view class="left">
					
					</view>
					<view class="right">
						<view class="active">综合</view>
						<view>最近</view>
						<view>价格
						<view class="up-dowm">
						<image class="up" src="../../../static/icon/home/up.png"></image>
						<image class="down" src="../../../static/icon/home/down.png"></image>
						</view>
						</view>
					</view>
				</view>
				<view class="content">
					<coupon-item v-for="(item,index) in goodsItems" :key="index" :noMargin="index%2==1"/>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import couponItem from '@/components/coupon-item.vue';
	export default {
		components: {
			couponItem 
		},
		data() {
			return {
				selectMenu:1,
				sideMenu:[
					{label:'全部',value:'1'},
					{label:'超市/便利',value:'2'},
					{label:'美容/美发',value:'3'},
					{label:'洗车/保养',value:'4'},
					{label:'餐饮/食品',value:'5'},
					],
				goodsItems:[
					{},
					{},
					{},
					{}
				]	
			};
		},
		methods:{
			handleMenuChange(params){
				this.selectMenu=params
			}
			
		}
	}
</script>


