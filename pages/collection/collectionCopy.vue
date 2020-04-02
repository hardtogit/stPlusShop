<template>
	<view class="content">
		<view class="goods-list">
			<view v-for="(item, index) in goodsList" :key="index" class="goods-item" @tap.stop="navToDetailPage(item)">
				<view class="image-wrapper">
					<image :src="ctx+item.samllCoverImg" mode="aspectFill"></image>
				</view>
				<text class="title clamp">{{item.name}}</text>
				<view class="price-box">
					<view class="price-box" v-if="item.isFaceToFace != 1">
						<text class="price">{{item.price}}</text>
					</view>
					<view class="price-box" v-if="item.isFaceToFace == 1 || item.isFaceToFace == '1'">
						<text class="price">面议</text>
					</view>
					<!-- <text>余{{item.sales}}件</text> -->
					<text class="yticon icon-iconfontshanchu1" @tap.stop="cancel(item,index)"></text>
					<text class="yticon icon-gouwuche" @tap.stop="addCart(item.goodsId)"></text>
				</view>
			</view>
		</view>
		<uni-load-more :status="loadingType"></uni-load-more>
	</view>
</template>

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	export default {
		components: {
			uniLoadMore
		},
		data() {
			return {
				cateMaskState: 0, //分类面板展开状态
				headerPosition: "fixed",
				headerTop: "0px",
				loadingType: 'more', //加载更多状态
				filterIndex: 0,
				cateId: 0, //已选三级分类id
				priceOrder: 0, //1 价格从低到高 2价格从高到低
				goodsList: [],
				ctx: this.$ctx,
				pageNumber: 1,
				companyId: uni.getStorageSync(`companyId`),
				cheapPurchaseCompanyId: uni.getStorageSync(`cheapPurchaseCompanyId`),
				classification: uni.getStorageSync(`classification`),
			};
		},

		onLoad(options) {
			this.loadDataList();
		},
		onPageScroll(e) {
			//兼容iOS端下拉时顶部漂移
			if (e.scrollTop >= 0) {
				this.headerPosition = "fixed";
			} else {
				this.headerPosition = "absolute";
			}
		},
		//下拉刷新
		onPullDownRefresh() {
			this.pageNumber = 1;
			this.loadDataList('refresh');
		},
		//加载更多
		onReachBottom() {
			this.loadDataList();
		},
		methods: {
			//加入购物车
			addCart(goodsId) {
				//加入购物车
				let data = {
					data: JSON.stringify({
						goodsId: goodsId,
						memberId: uni.getStorageSync("userInfo").id,
						cheapPurchaseCompanyId: uni.getStorageSync('cheapPurchaseCompanyId')
					})
				}
				this.$getJson('/api/v2/vue/ydd/cart/addCart.jsp', data, 'POST', res => {
					console.log('----res------------', res);
					if (res.data == 1) {
						uni.showToast({
							title: "加入成功",
							icon: 'none'
						})
						this.cartCount += 1
					} else {
						uni.showToast({
							title: res.message,
							icon: 'none'
						})
					}
				});
			},
			//详情
			navToDetailPage(item) {
				//测试数据没有写id，用title代替
				let id = item.id;
				uni.navigateTo({
					url: `/pages/product/product?id=${id}` + "&companyId=" + this.companyId +
						"&cheapPurchaseCompanyId=" + this.cheapPurchaseCompanyId + "&classification=" + this.classification
				})
			},
			//加载数据
			async loadDataList(type = 'add', loading) {
				//没有更多直接返回
				if (type === 'add') {
					if (this.loadingType === 'nomore') {
						return;
					}
					this.loadingType = 'loading';
				} else {
					this.loadingType = 'more'
				}
				this.$getJson('/api/v2/vue/center/do/myCollectResources.jsp', {
					data: JSON.stringify({
						pageNumber: this.pageNumber,
						memberId: uni.getStorageSync(`userInfo`).id
					})
				}, 'POST', res => {
					console.log('----list------------', res);
					if (res.data) {

						let goodsList = [];
						res.data.forEach(item => {
							let obj = {
								samllCoverImg: item.yddResources.samllCoverImg,
								name: item.yddResources.name,
								time: item.addTimeStr,
								id: item.resourcesId,
								samllCoverImg: item.yddResources.samllCoverImg,
								price: item.goods.priceEdit,
								goodsId: item.goods.id,
								isFaceToFace: item.goods.isFaceToFace,
							}
							goodsList.push(obj)
						})
						if (this.pageNumber == 1) {
							this.goodsList = goodsList;
						} else {
							this.goodsList = this.goodsList.concat(goodsList);
						}
						this.pageNumber += 1
						//判断是否还有下一页，有是more  没有是nomore(测试数据判断大于20就没有了)
						this.loadingType = res.data.length < 8 ? 'nomore' : 'more';
						if (type === 'refresh') {
							uni.stopPullDownRefresh();
						}
					}
				});
			},

			//取消收藏
			cancel(item, index) {
				this.$getJson('/api/v2/vue/findingSomeone/do/doCollectResource.jsp', {
					data: JSON.stringify({
						id: item.id,
						isCollection: 0,
						memberId: uni.getStorageSync(`userInfo`).id
					})
				}, 'POST', res => {
					console.log(res)
					this.goodsList.splice(index, 1)
				})
			}
		},
	}
</script>

<style lang="scss">
	// page, .content{
	// 	background: $page-color-base;
	// }
	.content {
		padding-top: 9upx;
	}

	.navbar {
		position: fixed;
		left: 0;
		top: var(--window-top);
		display: flex;
		width: 100%;
		height: 80upx;
		background: #fff;
		box-shadow: 0 2upx 10upx rgba(0, 0, 0, .06);
		z-index: 10;

		.nav-item {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 30upx;
			color: $font-color-dark;
			position: relative;

			&.current {
				color: $base-color;

				&:after {
					content: '';
					position: absolute;
					left: 50%;
					bottom: 0;
					transform: translateX(-50%);
					width: 120upx;
					height: 0;
					border-bottom: 4upx solid $base-color;
				}
			}
		}

		.p-box {
			display: flex;
			flex-direction: column;

			.yticon {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 30upx;
				height: 14upx;
				line-height: 1;
				margin-left: 4upx;
				font-size: 26upx;
				color: #888;

				&.active {
					color: $base-color;
				}
			}

			.xia {
				transform: scaleY(-1);
			}
		}

		.cate-item {
			display: flex;
			justify-content: center;
			align-items: left;
			height: 100%;
			width: 80upx;
			position: relative;
			font-size: 44upx;

			&:after {
				content: '';
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				border-left: 1px solid #ddd;
				width: 0;
				height: 36upx;
			}
		}
	}

	/* 分类 */
	.cate-mask {
		position: fixed;
		left: 0;
		top: var(--window-top);
		bottom: 0;
		width: 100%;
		background: rgba(0, 0, 0, 0);
		z-index: 95;
		transition: .3s;

		.cate-content {
			width: 630upx;
			height: 100%;
			background: #fff;
			float: right;
			transform: translateX(100%);
			transition: .3s;
		}

		&.none {
			display: none;
		}

		&.show {
			background: rgba(0, 0, 0, .4);

			.cate-content {
				transform: translateX(0);
			}
		}
	}

	.cate-list {
		display: flex;
		flex-direction: column;
		height: 100%;

		.cate-item {
			display: flex;
			align-items: center;
			height: 90upx;
			padding-left: 30upx;
			font-size: 28upx;
			color: #555;
			position: relative;
		}

		.two {
			height: 64upx;
			color: #303133;
			font-size: 30upx;
			background: #f8f8f8;
		}

		.active {
			color: $base-color;
		}
	}

	/* 商品列表 */
	.goods-list {
		display: flex;
		flex-wrap: wrap;
		padding: 0 2%;
		background: #fff;

		.goods-item {
			display: flex;
			flex-direction: column;
			width: 49%;
			padding-bottom: 40upx;

			&:nth-child(2n+1) {
				margin-right: 2%;
			}
		}

		.image-wrapper {
			width: 100%;
			height: 330upx;
			border-radius: 3px;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
				opacity: 1;
			}
		}

		.title {
			font-size: $font-lg;
			color: $font-color-dark;
			line-height: 80upx;
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
			font-size: 34upx;
			color: #ea6143;
			line-height: 1;
			font-weight: bold;
			font-family: Arial;

			&:before {
				content: '￥';
				font-size: 26upx;
			}
		}

		.icon-gouwuche {
			color: #ea6143;
		}
	}
</style>
