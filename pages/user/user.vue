<style lang="scss">
	page{
		background-color: #FBF8FB;
	}
	.header{
		height: 338upx;
		position: relative;
		.img{
			width: 100%;
			height: 100%;
		}
		.box{
			position: absolute;	
			padding: 22rpx;
			top:0;
			left: 0;
			width: 100%;
			height: 100%;
			.top{
				position: absolute;
				width: 100%;
				padding: 0 42upx;
				top:22upx;
				left: 0;
				height: 100upx;
				display: flex;
				align-items: center;
				.left{
					flex: 1;
					font-size: 28upx;
					color: #fff;
					.left-icon{
						color: #fff;
					}
				}
				.right{
					.turn{
						width: 31upx;
						height: 31upx;
						display: block;
					}
				}
			}
			.logo{
				display: block;
				width: 125upx;
				height: 125upx;
				background-color: #ddd;
				border-radius: 50%;
				margin: 50upx auto 0 auto;
			}
			.store-name{
				color: #fff;
				font-size: 36upx;
				text-align: center;
				margin-top: 6upx;
			}
			.name{
				text-align: center;
				margin-top: 4upx;
				.own-name{
					display: inline-block;
					color: #fff;	
					font-size: 33upx;
				}
			}
		}
	}
	.body{
		padding: 0 22upx;
		.card{
			background-color: #fff;
			border-radius:9px;
			padding: 0 30upx;
			margin-bottom: 20upx;
			.title{
				font-size: 33upx;
				color: #333;
				display: flex;
				align-items: center;
				height: 100upx;
				border-bottom: 1upx solid #E4E7ED;
			}
		}
	}
	
</style>
<template>
	<view class="user">
		<view class="header">
			<image class="img" src="../../static/icon/user/bgtwo.png"></image>
			<view class="box">
				<view class="top">
					<view class="left">
						<text class="icon-zuo yticon left-icon"></text>
						<text>切换企业</text>
					</view>
					<view class="right">
						<image class="icon turn" src="../../static/icon/home/turn.png"></image>
					</view>
				</view>
				<image class="logo"></image>
				<view class="store-name">眉州东坡餐饮有限公司</view>
				<view class="name">
					<view class="own-name">王海龙</view>
				</view>
			</view>
		</view>
		<view class="body">
			<view class="card">
				<view class="title">
					个人信息
			</view>
				<list-cell icon="../static/icon/user/p1.png" iconColor="#54b4ef" title="我的信息"  @eventClick="navTo('/pages/collection/collection')"></list-cell>
				<list-cell icon="../static/icon/user/p2.png" iconColor="#54b4ef" title="我的名片"  @eventClick="navTo('/pages/collection/collection')"></list-cell>
				<list-cell icon="../static/icon/user/p3.png" iconColor="#54b4ef" title="切换到我的用户端" border="none"  @eventClick="navTo('/pages/collection/collection')"></list-cell>
			</view>		
				<view class="card">
					<view class="title">
						店铺管理
					</view>				
					<list-cell icon="../static/icon/user/p4.png" iconColor="#54b4ef" title="店铺介绍"   @eventClick="navTo('/pages/collection/collection')"></list-cell>
					<list-cell icon="../static/icon/user/p5.png" iconColor="#54b4ef" title="店铺动态"   @eventClick="navTo('/pages/collection/collection')"></list-cell>
					<list-cell icon="../static/icon/user/p6.png" iconColor="#54b4ef" title="商品管理"   @eventClick="navTo('/pages/collection/collection')"></list-cell>
					<list-cell icon="../static/icon/user/p7.png" iconColor="#54b4ef" title="订单管理"   @eventClick="navTo('/pages/collection/collection')"></list-cell>
					<list-cell icon="../static/icon/user/p8.png" iconColor="#54b4ef" title="销售管理"   @eventClick="navTo('/pages/collection/collection')"></list-cell>
					<list-cell icon="../static/icon/user/p9.png" iconColor="#54b4ef" title="资金管理"   @eventClick="navTo('/pages/collection/collection')"></list-cell>
					<list-cell icon="../static/icon/user/p10.png" iconColor="#54b4ef" title="员工管理" border="none"  @eventClick="navTo('/pages/collection/collection')"></list-cell>
				</view>	
		</view>
	</view>
</template>
<script>
		import listCell from '@/components/mix-list-cell';
		export default{
			data(){
				return{
					
				}
			},
			components:{
				listCell
			}
		}
	
</script>
