<style lang="scss">
	.container {
		.mack {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: #000;
			z-index: 9;
			opacity: .5;
		}

		.inner {
			padding: 57upx 16upx 0 16upx;
			position: relative;

			.toolbar {
				position: fixed;
				width: 100%;
				box-sizing: border-box;
				top: 0;
				right: 0;
				background-color: #fff;
				z-index: 10;
				font-size: 28upx;

				.inner {
					padding: 0 30upx;
					height: 80upx;
					display: flex;
					align-items: center;
					position: relative;

					.type {

						position: absolute;
						top: 80upx;
						border-radius: 0upx 0upx 21upx 21upx;
						left: 0;
						width: 100%;
						max-height: 480upx;
						overflow-y: auto;
						background-color: #fff;

						.type-item {
							font-size: 28upx;
							border-top: 1upx solid #eee;
							height: 80upx;
							display: flex;
							align-items: center;
							padding: 0 30upx;

							.text {
								flex: 1;
							}

							.choice {
								width: 23upx;
								height: 24upx;
							}
						}
					}

					.classfiy {
						text-align: left;
						flex: 1;
						&.active{
							color: #FF474C;
						}	
					}

					.left {
						display: flex;
						align-items: center;

						.search-icon {
							display: block;
							width: 24upx;
							height: 24upx;
						}

						.text {
							padding-left: 10upx;
							flex: 1;
						}
					}

					.right {
						display: flex;
						flex: 2;
						color: #141414;
						justify-content: space-between;

						.active {
							color: #FF474C;
						}
						.price-sort{
							display: flex;
							align-items: center;
						}	
						.up-dowm {
							display: inline-block;
							margin-left: 2upx;
							.yticon{
								font-size: 16upx;
								color: #141414;
								font-weight: 500;
								&.active{
									color: #FF474C;
								}
							}	
							.up {
								display: block;
								width: 10upx;
								height: 6upx;
							}

							.down {
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
	}
</style>
<template>
	<view>
		<view class="container">
			<view class="mack" v-show="classfiyVis" @click="targetType"></view>
			<view class="inner">
				<view class="toolbar">
					<div class="inner">
						<view class="type" v-show="classfiyVis">
							<view class="type-item" @click="changeClassfiy('')">
								<view class="text">全部</view>
								<image v-if="selectClassfiy==''" class="choice" src="../../../../static/icon/home/dui.png"></image>
							</view>
							<view class="type-item" v-for="item in classfiy" :key="item.id" @click="changeClassfiy(item.id)">
								<view class="text">{{item.name}}</view>
								<image v-if="selectClassfiy==item.id" class="choice" src="../../../../static/icon/home/dui.png"></image>
							</view>
						</view>
						<view :class="{'classfiy':true,'active':classfiyVis}" @click="targetType">
							商品分类
						</view>
						<view class="right">
							<view class="left" @click="navTo('/pages/home/search/platform/platform')">
								<image class="search-icon" src="../../../../static/search.png"></image>
								<view class="text">搜索商品</view>
							</view>
							<view :class="{'active':sort=='zh'}" @click="changeSort('zh')">综合</view>
							<view :class="{'active':sort=='new'}" @click="changeSort('new')">最新</view>
							<view :class="{'active':sort=='price','price-sort':true}" @click="changeSort('price')">价格
								<view class="up-dowm"> 
									<view :class="{'yticon':true,'icon-shang':true,'active':(sort=='price'&&subSort==0)}"></view>
									<view :class="{'yticon':true,'icon-xia':true,'active':(sort=='price'&&subSort==1)}"></view>
								</view>
							</view>
						</view>
					</div>
				</view>
				<view class="content">
					<view style="margin-bottom: 14upx;" v-for="(item,index) in goodsItems" :key="index">
						<goods-item :goods='item' />
					</view> 

				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import goodsItem from '@/components/goods-item.vue';
	export default {
		components: {
			goodsItem
		},
		data() {
			return {
				selectMenu: 1,
				classfiyVis:false,
				classfiy: [],
				selectClassfiy:'',
				sort:'zh',
				subSort:1,
				goodsItems: [],
				pageNumber: 1, //分页相关
				pageSize: 6, //
				noMore:false,
			};
		},
		methods: {
			navTo(url) {
				uni.navigateTo({
					url
				})
			},
			handleMenuChange(params) {
				this.selectMenu = params
			},
			onLoad() {
				this.getData()
				this.getClassfiy()
			},
			targetType(){
				  this.classfiyVis=!this.classfiyVis;
			},
			changeClassfiy(id){
			  this.selectClassfiy=id;
			  this.classfiyVis=false;
			  this.initLoad()
			},
			changeSort(sort){
				if(this.sort=='price'){
					if(sort=='price'){
						if(this.subSort==1){
							this.subSort=0
						}else{
							this.subSort=1
						}
					}else{
						this.sort=sort
						this.subSort=1
					}	
				}else{
						this.sort=sort
						this.subSort=1
				}
				this.initLoad()
			},
			
			initLoad(){
			   this.pageNumber=1
			   this.noMore=false
			   this.goodsItems=[]
			   this.getData()
			},
			getData() {
				if(this.noMore){
					return
				}
				this.$getJson('/api/v3/jhs/list.jsp', {
					companyId: 202,
					pageNumber: this.pageNumber,
					industryId:this.selectClassfiy,
					pageSize: this.pageSize,
					sort:this.sort+','+this.subSort
				}, 'POST', res => {
					const result=res.data||[]
					if(this.pageNumber==1){
						this.goodsItems = result
					}else{
						this.goodsItems = [...this.goodsItems,...result]
					}
					if(result.length<this.pageSize){
						this.noMore=true
					}
				
				    this.pageNumber=this.pageNumber+1
				})
			   
			},
			//加载更多
			onReachBottom(){
				this.getData();
			},
			getClassfiy(){
				this.$getJson('/jsp/api/resources/ajaxGetIndustry.jsp', {
					storeId: 202
				}, 'POST', res => {
					this.classfiy = res.data.industry
					console.log(this.classfiy)
				})
			}

		}
	}
</script>
