<template>
	<view class="content">
		<!--订单状态-->
		<view class="navbar">
			<view 
				v-for="(item, index) in navList" :key="index" 
				class="nav-item" 
				:class="{current: tabCurrentIndex === index}"
				@click="tabClick(index,item.id)"
			>
				{{item.name}}
			</view>
		</view>

		<!--订单列表-->
		<swiper :current="tabCurrentIndex" class="swiper-box" duration="300" @change="changeTab" >
			<swiper-item class="tab-content" v-for="(tabItem,tabIndex) in navList" :key="tabIndex">
				<scroll-view 
					class="list-scroll-content" 
					scroll-y
					@scrolltolower="loadData"
				>
					<!-- 空白页 -->
					<!-- <empty v-if="tabItem.loaded === true && tabItem.orderList.length === 0"></empty> -->
					
					<!-- 订单列表 -->
					<view 
						v-for="(item,index) in orderList" :key="index"
						class="order-item"
					>
						<view class="i-top b-b">订单: 
							<text class="time" @tap="copySn(item.sn)">{{item.sn}}</text>
							<text class="state" :style="{color: item.stateTipColor}">{{item.statusStr}}</text>
							<text v-if="item.status==='40'" class="del-btn yticon icon-iconfontshanchu1" @click="deleteOrder(item.id,index)"></text>
						</view>
						
						<!-- <scroll-view v-if="item.ddOrderGoodsList.length > 1" class="goods-box" scroll-x>
							<view v-for="(goodsItem, goodsIndex) in item.ddOrderGoodsList" :key="goodsIndex" class="goods-box-single">
								<image class="goods-img" :src="url+goodsItem.goodsName" mode="aspectFill"></image>
								<view class="right">
									<text class="title clamp">{{goodsItem.goodsName}}</text>
									<text class="attr-box">{{goodsItem.goodsPayPriceShow}}  x {{goodsItem.goodsCount}}</text>
									<text class="price price-box-top">{{goodsItem.goodsPriceShow}}</text>
								</view>
							</view>
						</scroll-view> -->
						<view  class="goods-box-single" v-for="(goodsItem, goodsIndex) in item.ddOrderGoodsList" :key="goodsIndex">
							<image class="goods-img" :src="url+goodsItem.smallImg" mode="aspectFill"></image>
							<view class="right">
								<text class="title clamp">{{goodsItem.goodsName}}</text>
								<!-- <text class="attr-box">{{goodsItem.goodsPayPriceShow}}  x {{goodsItem.goodsCountLong}}</text> -->
								<text class="price price-box-top">{{goodsItem.goodsPriceShow}}  x  {{goodsItem.goodsCountLong}}</text>
							</view>
						</view>
						<view class="price-box" style="padding: 0rpx 30rpx !important;">{{item.addTimeStr}}</view>
						<view class="price-box">
							共<text class="num">{{item.goodsCountLong}}</text>
							件商品 实付款<text class="price">{{item.shouldPayAmountShow}}</text>
						</view>
						<view class="action-box b-t" v-if="item.status == '0'">
							<button class="action-btn" @click="cancelOrder(item)">取消订单</button>
							<button class="action-btn recom" @click="pay(item)">立即支付</button>
						</view>
					</view>
					 
					<uni-load-more :status="loadingType"></uni-load-more>
					
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template> 

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import empty from "@/components/empty";
	import Json from '@/Json';
	export default {
		components: {
			uniLoadMore,
			empty
		},
		data() {
			return {
				tabCurrentIndex: 0,//当前tab索引
				navList:[],//tab数组
				headerPosition:"fixed",
				orderList:[],//订单列表
				memberId:uni.getStorageSync(`userInfo`).id,//当前用户id
				pageSize:10,//条数
				pageNumber:1,//页数
				status:'',//订单状态
				loadingType:'',//数据加载状态
				url:this.$ctx,
				isCheapPurchase:0,
			};
		},
		onPageScroll(e){
			//兼容iOS端下拉时顶部漂移
			if(e.scrollTop>=0){
				this.headerPosition = "fixed";
			}else{
				this.headerPosition = "absolute";
			}
		},
		//下拉刷新
		onPullDownRefresh(){
			this.pageNumber=1
			 this.orderList = [];
			this.loadData(1);
		},
		//加载更多
		onReachBottom(){
			this.loadData();
		},
		onLoad(options){
			this.tabCurrentIndex = + options.index;
			this.isCheapPurchase = + options.isCheapPurchase;
			this.getTable();
		},
		methods: {
			// 获取订单状态
			getTable(){
				this.$getJson("/jsp/api/order/getOrderStatus.jsp",{},"POST",res=>{
					this.navList = res.data;
					this.loadData();
				})
			},
			//获取订单列表
			loadData(e){
				// this.orderList = [];
				//这里是将订单挂载到tab列表下
				let index = this.tabCurrentIndex;
				let navItem = this.navList[index];
				this.status = navItem.id;
				/* if(this.loadingType === 'loading'){
					//防止重复加载
					return;
				}
				this.loadingType = 'loading'; */
					this.$getJson("/jsp/api/order/getOrderList.jsp",{pageNumber:this.pageNumber,pageSize:this.pageSize,status:this.status,memberId:this.memberId,isCheapPurchase:this.isCheapPurchase},"POST",res=>{
						let orderList = res.data
						/*orderList.forEach(item=>{
							this.$set(item, 'goodsList', []);
						})
						
						
						ddOrderGoodsList
						 for (var a = 0; a < res.data.length ; a++) {
							var d = res.data[a]
							let goods = {}
							goods.snShow = d.snShow;
							goods.status = d.status;
							goods.goodsName = d.ddOrderGoodsList[0].goodsName;
							goods.goodsPriceShow = d.ddOrderGoodsList[0].goodsPriceShow;
							goods.goodsAmountShow = d.goodsAmountShow;
							goods.goodsImg = d.ddOrderGoodsList[0].goodsImg;
							goods.goodsCount = d.ddOrderGoodsList[0].goodsCount;
							goods.sn = d.sn;
							goods.id = d.id;
								orderList[a].goodsList.push(goods);	
							
						} */
						
						if(orderList.length > 0 ){
							if(this.pageNumber==1){
								this.orderList = orderList;
							}else{
								this.orderList = this.orderList.concat(orderList);
							}
							this.pageNumber+=1
						}else{
							this.loadingType = 'noMore';
						}
						if(e == 1){
							uni.stopPullDownRefresh();
						}else{
							uni.hideLoading()
						}
						this.loadingType  = orderList.length <8? 'nomore' : 'more';
					});
					//loaded新字段用于表示数据加载完毕，如果为空可以显示空白页
					// this.$set(navItem, 'loaded', true);
					
					//判断是否还有数据， 有改为 more， 没有改为noMore 
					// this.loadingType = 'more';
			},
			//swiper 切换
			changeTab(e){
				this.tabCurrentIndex = e.target.current;
				this.pageNumber=1
				this.orderList = [];
				this.loadData();
			},
			//顶部tab点击
			tabClick(index){
				this.tabCurrentIndex = index;
				this.pageNumber=1
				this.orderList = [];
				// this.loadData()
			},
			//删除订单
			deleteOrder(id,index){
				uni.showModal({
					content: '是否删除订单？',
					success: (e)=>{
						if(e.confirm){
							let data = {data: JSON.stringify({id:id,memberId:uni.getStorageSync(`userInfo`).id})}
							this.$getJson("/api/v2/vue/ydd/order/doDelOrder.jsp",data,"POST",res=>{
								uni.hideLoading();//正在加载
								this.orderList.splice(index,1)
							})
						}
					}
				})
			},
			//取消订单
			cancelOrder(item){
				uni.showModal({
					content: '是否取消订单？',
					success: (e)=>{
						if(e.confirm){
							this.$getJson("/jsp/api/order/doCancel.jsp",{id:item.id,memberId:uni.getStorageSync(`userInfo`).id},"POST",res=>{
								uni.hideLoading();//正在加载
								if(res.success==true||res.success=='true'){
									this.pageNumber=1
									this.orderList = [];
									this.loadData()	
								}
							})
						}
					}
				})
					
			},
			//复制订单
			copySn(sn){
				//复制
				uni.setClipboardData({
				    data: sn,
				    success: function () {
				       uni.showToast({
				           title: sn+'\r\n复制成功',
				           icon:'none'
				       });
				    }
				});
				
			},
			//订单状态文字和颜色
			orderStateExp(state){
				let stateTip = '',
					stateTipColor = '#ff0000';
				switch(+state){
					case 1:
						stateTip = '待付款'; break;
					case 2:
						stateTip = '待发货'; break;
					case 40:
						stateTip = '订单已关闭'; 
						stateTipColor = '#999';
						break;
					//更多自定义
				}
				return {stateTip, stateTipColor};
			},
			pay(item){
				uni.navigateTo({
					url:'/pages/money/pay?money=' +item.shouldPayAmountShow +'&sn=' +item.sn
				});
			}
		},
	}
</script>

<style lang="scss">
	page, .content{
		background: $page-color-base;
		height: 100%;
	}
	
	.swiper-box{
		height: calc(100% - 40px);
	}
	.list-scroll-content{
		height: 100%;
	}
	
	.navbar{
		display: flex;
		height: 40px;
		padding: 0 5px;
		background: #fff;
		box-shadow: 0 1px 5px rgba(0,0,0,.06);
		position: relative;
		z-index: 10;
		.nav-item{
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 15px;
			color: $font-color-dark;
			position: relative;
			&.current{
				color: $base-color;
				&:after{
					content: '';
					position: absolute;
					left: 50%;
					bottom: 0;
					transform: translateX(-50%);
					width: 44px;
					height: 0;
					border-bottom: 2px solid $base-color;
				}
			}
		}
	}

	.uni-swiper-item{
		height: auto;
	}
	.order-item{
		display: flex;
		flex-direction: column;
		padding-left: 30upx;
		background: #fff;
		margin-top: 16upx;
		.i-top{
			display: flex;
			align-items: center;
			height: 80upx;
			padding-right:30upx;
			font-size: $font-base;
			color: $font-color-dark;
			position: relative;
			.time{
				flex: 1;
			}
			.state{
				color: $base-color;
			}
			.del-btn{
				padding: 10upx 0 10upx 36upx;
				font-size: $font-lg;
				color: $font-color-light;
				position: relative;
				&:after{
					content: '';
					width: 0;
					height: 30upx;
					border-left: 1px solid $border-color-dark;
					position: absolute;
					left: 20upx;
					top: 50%;
					transform: translateY(-50%);
				}
			}
		}
		/* 多条商品 */
		.goods-box{
			height: 160upx;
			padding: 20upx 0;
			white-space: nowrap;
			.goods-item{
				width: 120upx;
				height: 120upx;
				display: inline-block;
				margin-right: 24upx;
			}
			.goods-img{
				display: block;
				width: 100%;
				height: 100%;
			}
		}
		/* 单条商品 */
		.goods-box-single{
			display: flex;
			padding: 20upx 0;
			.goods-img{
				display: block;
				width: 120upx;
				height: 120upx;
			}
			.right{
				flex: 1;
				display: flex;
				flex-direction: column;
				padding: 0 30upx 0 24upx;
				overflow: hidden;
				.title{
					font-size: $font-base + 2upx;
					color: $font-color-dark;
					line-height: 1;
				}
				.attr-box{
					font-size: $font-sm + 2upx;
					color: $font-color-light;
					padding: 10upx 12upx;
				}
				.price{
					font-size: $font-base + 2upx;
					color: $font-color-pink;
					&:before{
						content: '￥';
						font-size: $font-sm;
						margin: 0 2upx 0 8upx;
					}
				}
			}
		}
		
		.price-box-top{
			margin-top: 52upx;
		}
		.price-box{
			display: flex;
			justify-content: flex-end;
			align-items: baseline;
			padding: 20upx 30upx;
			font-size: $font-sm + 2upx;
			color: $font-color-light;
			.num{
				margin: 0 8upx;
				color: $font-color-dark;
			}
			.price{
				font-size: $font-lg;
				color: $font-color-dark;
				&:before{
					content: '￥';
					font-size: $font-sm;
					margin: 0 2upx 0 8upx;
				}
			}
		}
		.action-box{
			display: flex;
			justify-content: flex-end;
			align-items: center;
			height: 100upx;
			position: relative;
			padding-right: 30upx;
		}
		.action-btn{
			width: 160upx;
			height: 60upx;
			margin: 0;
			margin-left: 24upx;
			padding: 0;
			text-align: center;
			line-height: 60upx;
			font-size: $font-sm + 2upx;
			color: $font-color-dark;
			background: #fff;
			border-radius: 100px;
			&:after{
				border-radius: 100px;
			}
			&.recom{
				background: #e0efff;
				color: $base-color;
				&:after{
					border-color: #004d9f;
				}
			}
		}
	}
	
	
	/* load-more */
	.uni-load-more {
		display: flex;
		flex-direction: row;
		height: 80upx;
		align-items: center;
		justify-content: center
	}
	
	.uni-load-more__text {
		font-size: 28upx;
		color: #999
	}
	
	.uni-load-more__img {
		height: 24px;
		width: 24px;
		margin-right: 10px
	}
	
	.uni-load-more__img>view {
		position: absolute
	}
	
	.uni-load-more__img>view view {
		width: 6px;
		height: 2px;
		border-top-left-radius: 1px;
		border-bottom-left-radius: 1px;
		background: #999;
		position: absolute;
		opacity: .2;
		transform-origin: 50%;
		animation: load 1.56s ease infinite
	}
	
	.uni-load-more__img>view view:nth-child(1) {
		transform: rotate(90deg);
		top: 2px;
		left: 9px
	}
	
	.uni-load-more__img>view view:nth-child(2) {
		transform: rotate(180deg);
		top: 11px;
		right: 0
	}
	
	.uni-load-more__img>view view:nth-child(3) {
		transform: rotate(270deg);
		bottom: 2px;
		left: 9px
	}
	
	.uni-load-more__img>view view:nth-child(4) {
		top: 11px;
		left: 0
	}
	
	.load1,
	.load2,
	.load3 {
		height: 24px;
		width: 24px
	}
	
	.load2 {
		transform: rotate(30deg)
	}
	
	.load3 {
		transform: rotate(60deg)
	}
	
	.load1 view:nth-child(1) {
		animation-delay: 0s
	}
	
	.load2 view:nth-child(1) {
		animation-delay: .13s
	}
	
	.load3 view:nth-child(1) {
		animation-delay: .26s
	}
	
	.load1 view:nth-child(2) {
		animation-delay: .39s
	}
	
	.load2 view:nth-child(2) {
		animation-delay: .52s
	}
	
	.load3 view:nth-child(2) {
		animation-delay: .65s
	}
	
	.load1 view:nth-child(3) {
		animation-delay: .78s
	}
	
	.load2 view:nth-child(3) {
		animation-delay: .91s
	}
	
	.load3 view:nth-child(3) {
		animation-delay: 1.04s
	}
	
	.load1 view:nth-child(4) {
		animation-delay: 1.17s
	}
	
	.load2 view:nth-child(4) {
		animation-delay: 1.3s
	}
	
	.load3 view:nth-child(4) {
		animation-delay: 1.43s
	}
	
	@-webkit-keyframes load {
		0% {
			opacity: 1
		}
	
		100% {
			opacity: .2
		}
	}
</style>
