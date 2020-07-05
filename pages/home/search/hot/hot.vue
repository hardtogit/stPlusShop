<style lang="scss" scoped>
	.search{
		padding: 0 25upx;
		.search-box{
			display: flex;
			padding: 20upx 0;
			.left{
				flex: 1;
				position: relative;
				.input{
					width: 557upx;
					height: 69upx;
					border-radius: 34.5upx;
					background-color: #eee;
					padding-left: 80upx;
				}
				.search-icon{
					position: absolute;
					width: 37upx;
					height: 37upx;
					left: 24upx;
					top:18upx
				}
				.close{
					position: absolute;
					z-index: 10;
					width: 37upx;
					height: 37upx;
					right: 54upx;
					top:18upx
				}
			}
			.right{
				height: 69upx;
				width: 112upx;
				border-radius: 34.5upx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 33upx;
				color: #fff;
				background-color: #FF474C;
			}
		}
		.no-data{
			text-align: center;
			margin-top: 200upx;
		}
		.history{
			padding: 40upx 0;
			.title{
				font-size: 28upx;
				color: #333;
			}
			.his_c{
				display: inline-block;
				margin: 20upx 20upx 0 0;
				.his{
					font-size: 21upx;
					color: #333;
					padding: 0 20upx;
					height:44upx;
					display: flex;
					align-items: center;
					justify-content: center;
					background:rgba(238,238,238,1);
					border-radius:22upx;
				}
			}
			
		}
		
	}
</style>
<template>
	<view class="search">
		<view class="search-box">
			<view class="left">
				<image class="search-icon" src="../../../../static/search.png"></image>
				<input class='input' v-model="keywords" placeholder="请输入商品名称" type="text">
				<image v-show="search" class='close' @click="cancelSearch" src="../../../../static/close.png"></image>
			</view>
			<view class="right" @click="handleSearch">搜索</view>
		</view>
		<view class="history" v-if="!search">
			<view class="title">历史搜索</view>
			<div class=his_c v-for="(his,i) in history" :key="i" @click="hotSearch(his)">
				<div class="his">
					{{his}}
				</div>
			</div>
		</view>
		<view class="content" v-if="search">
			<view class="no-data" v-if="noData">
				没有数据~
			</view>
			<view style="margin-bottom: 14upx;" v-for="(item,index) in goodsItems" :key="index">
				<goods-item :goods='item' />
			</view>

		</view>

	</view>
</template>

<script>
	import goodsItem from '@/components/goods-item.vue';
	export default {
		data() {
			return {
				search: false,
				history:wx.getStorageSync('keywords')||[],
				keywords: '',
				goodsItems: [],
				pageNumber: 1, //分页相关
				pageSize: 6, //
				noMore: false,
				noData:false,
			};
		},
		components: {
			goodsItem
		},
		methods: {
			handleSearch() {
				this.search = true
				this.initLoad()
			},
			cancelSearch() {
				console.log('s')
				this.keywords = ''
				this.search = false
			},
			hotSearch(keywords){
				this.search = true
				this.keywords=keywords
					this.initLoad()
			},
			initLoad() {
				this.pageNumber = 1
				this.noMore = false
				noData:false
				this.goodsItems = []
				this.getData()
				if(this.keywords){
					let setArr=wx.getStorageSync('keywords')||[]
					setArr.unshift(this.keywords)
					setArr=[...new Set(setArr)]
					if(setArr.length===21){
						setArr.pop()
					}
					this.history=setArr
					wx.setStorageSync('keywords',setArr)
				}
				
			},
			getData() {
				if (this.noMore) {
					return
				}
				this.$getJson('/api/v2/vue/sqPlus/resources/resourcesList.jsp', {
					companyId: 202,
					pageNumber: this.pageNumber,
					search: this.keywords,
					pageSize: this.pageSize,
				}, 'POST', res => {
					const result = res.data || []
					if (this.pageNumber == 1) {
						this.goodsItems = result
						if(result.length===0){
							this.noData=true
						}else{
							this.noData=false
						}
					} else {
						this.goodsItems = [...this.goodsItems, ...result]
					}
					if (result.length < this.pageSize) {
						this.noMore = true
					}

					this.pageNumber = this.pageNumber + 1
				})

			},

		},
		//加载更多
		onReachBottom() {
			this.getData();
		},
	}
</script>
