<template>
	<view class="">
		<uni-popup ref="popup" class="userPop" type="center">
			<view>
				<uni-pop ref="uniPop" @changes="childClick"></uni-pop>
			</view>
		</uni-popup>
		<!-- 	<view class="navbar" :style="{position:headerPosition,top:headerTop}">
			<!-- <view class="nav-item" :class="{current: filterIndex === 0}" @click="tabClick(0)">
				综合排序
			</view>
			<view class="nav-item" :class="{current: filterIndex === 1}" @click="tabClick(1)">
				销量优先
			</view>
			<view class="nav-item" :class="{current: filterIndex === 2}" @click="tabClick(2)">
				<text>价格</text>
				<view class="p-box">
					<text :class="{active: priceOrder === 1 && filterIndex === 2}" class="yticon icon-shang"></text>
					<text :class="{active: priceOrder === 2 && filterIndex === 2}" class="yticon icon-shang xia"></text>
				</view>
			</view>
			<text class="cate-item yticon icon-fenlei1" @click="toggleCateMask('show')"></text>
		</view>  -->
		<view class="goods-list">
			<view v-for="(item, index) in goodsList" :key="index" class="goods-item">
				<view class="image-wrapper" @click="navToDetailPage(item)">
					<image :src="url+item.resource.samllCoverImg" mode="aspectFill"></image>
				</view>
				<text class="title clamp" @click="navToDetailPage(item)">{{item.resource.name}}</text>
				<view class="price-box">
					<text class="price" @click="navToDetailPage(item)">{{item.goods.priceEdit}}</text>
					<text>余{{item.goods.stock}}件</text>
					<text class="yticon icon-gouwuche" @click="addCart(item)"></text>
				</view>
			</view>
		</view>
		<uni-load-more :status="loadingType"></uni-load-more>

		<view class="cate-mask" :class="cateMaskState===0 ? 'none' : cateMaskState===1 ? 'show' : ''" @click="toggleCateMask">
			<view class="cate-content" @click.stop.prevent="stopPrevent" @touchmove.stop.prevent="stopPrevent">
				<scroll-view scroll-y class="cate-list">
					<view v-for="item in flist" :key="item.id">
						<view class="cate-item b-b two" @tap="showChild(item)">{{item.name}}
							<view class="fistRight">{{item.show}}</view>
						</view>
						<view v-for="tItem in slist" :key="tItem.id" v-if="tItem.parentId === item.id && tItem.checked==true" class="cate-item b-b"
						 :class="{active: tItem.id==twoIndustryId}" @click="changeCate(tItem)">
							{{tItem.name}}
						</view>
					</view>
				</scroll-view>
			</view>
		</view>

	</view>
</template>

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import uniPop from '@/components/uniPop.vue';
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components: {
			uniLoadMore,
			uniPop,
			uniPopup
		},
		data() {
			return {
				cateMaskState: 0, //分类面板展开状态
				headerPosition: "fixed",
				headerTop: "0px",
				loadingType: 'more', //加载更多状态
				filterIndex: 0,
				// cateId: 0, //已选三级分类id
				priceOrder: 0, //1 价格从低到高 2价格从高到低
				goodsList: [],
				url: this.$ctx,
				pageNumber: 1,
				likeTitle: '',
				twoIndustryId: null,
				mobile: uni.getStorageSync(`mobile`),
				flist: [],
				slist: [],
				companyId: uni.getStorageSync(`companyId`),
				cheapPurchaseCompanyId: uni.getStorageSync(`cheapPurchaseCompanyId`),
				classification: uni.getStorageSync(`classification`),
			};
		},

		onLoad(options) {
			// #ifdef H5
			this.headerTop = document.getElementsByTagName('uni-page-head')[0].offsetHeight + 'px';
			// #endif
			this.likeTitle = options.likeTitle;
			this.twoIndustryId = options.twoIndustryId;
			this.loadData();
			this.loadIndustry()
		},
		onShow() {
			this.login(); //微信登录
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
			this.loadData('refresh');
		},
		//加载更多
		onReachBottom() {
			this.loadData();
		},
		methods: {
			//加载商品 ，带下拉刷新和上滑加载
			async loadData(type = 'add', loading) {
				//没有更多直接返回
				if (type === 'add') {
					if (this.loadingType === 'nomore') {
						return;
					}
					this.loadingType = 'loading';
				} else {
					this.loadingType = 'more'
					this.pageNumber = 1
				}

				let data = {
					data: JSON.stringify({
						pageNumber: this.pageNumber,
						likeTitle: this.likeTitle,
						twoIndustryId: this.twoIndustryId
					})
				}
				this.$getJson('/api/v2/vue/ydd/index/resList.jsp', data, 'POST', res => {
					console.log('----list------------', res);
					if (res.data) {
						if (this.pageNumber == 1) {
							this.goodsList = res.data;
						} else {
							this.goodsList = this.goodsList.concat(res.data);
						}
						this.pageNumber += 1
						//判断是否还有下一页，有是more  没有是nomore(测试数据判断大于20就没有了)
						this.loadingType = res.data.length < 8 ? 'nomore' : 'more';
						if (type === 'refresh') {
							if (loading == 1) {
								uni.hideLoading()
							} else {
								uni.stopPullDownRefresh();
							}
						}
					}
				});
				//筛选，测试数据直接前端筛选了
				/* if(this.filterIndex === 1){
					goodsList.sort((a,b)=>b.sales - a.sales)
				}
				if(this.filterIndex === 2){
					goodsList.sort((a,b)=>{
						if(this.priceOrder == 1){
							return a.price - b.price;
						}
						return b.price - a.price;
					})
				} */

			},
			async loadIndustry() {
				this.$getJson('/api/v2/vue/ydd/common/getIndustry.jsp', {}, 'POST', res => {
					console.log('----getIndustry------------', res);
					res.data.list.forEach(item => {
						// if(!item.pid){
						// 	this.flist.push(item);  //pid为父级id, 没有pid或者pid=0是一级分类
						// }else if(!item.picture){
						// 	this.slist.push(item); //没有图的是2级分类
						// }else{
						// 	this.tlist.push(item); //3级分类
						// }
						// 
						if (item.level == 1) {
							item.show = "+"
							this.flist.push(item); //pid为父级id, 没有pid或者pid=0是一级分类
						} else {
							item.checked = false
							this.slist.push(item); //有图的是2级分类
						}
					})
				});
			},
			showChild(ite) {
				ite.show = ite.show == "+" ? "-" : "+"
				this.slist.forEach(item => {
					if (item.parentId == ite.id) {
						if (item.checked == false) {
							item.checked = true
						} else {
							item.checked = false
						}
					}
				})
			},
			//筛选点击
			tabClick(index) {
				if (this.filterIndex === index && index !== 2) {
					return;
				}
				this.filterIndex = index;
				if (index === 2) {
					this.priceOrder = this.priceOrder === 1 ? 2 : 1;
				} else {
					this.priceOrder = 0;
				}
				uni.pageScrollTo({
					duration: 300,
					scrollTop: 0
				})
				this.loadData('refresh', 1);
				uni.showLoading({
					title: '正在加载'
				})
			},
			//显示分类面板
			toggleCateMask(type) {
				let timer = type === 'show' ? 10 : 300;
				let state = type === 'show' ? 1 : 0;
				this.cateMaskState = 2;
				setTimeout(() => {
					this.cateMaskState = state;
				}, timer)
			},
			//分类点击
			changeCate(item) {
				this.twoIndustryId = item.id;
				this.toggleCateMask();
				uni.pageScrollTo({
					duration: 300,
					scrollTop: 0
				})
				this.loadData('refresh', 1);
				uni.showLoading({
					title: '正在加载'
				})
			},
			//详情
			navToDetailPage(item) {
				//测试数据没有写id，用title代替
				let id = item.resource.id;
				uni.navigateTo({
					url: `/pages/product/product?id=${id}` + "&companyId=" + this.companyId +
						"&cheapPurchaseCompanyId=" + this.cheapPurchaseCompanyId + "&classification=" + this.classification
				})
			},
			stopPrevent() {},
			//加入购物车
			addCart(item) {
				if (!uni.getStorageSync(`mobile`)) {
					this.login()
					//弹出登录
					this.$refs.popup.open()
					//防止点击遮罩关闭
					this.$refs.popup.clickClose(true)
					return
				}
				//加入购物车
				let data = {
					data: JSON.stringify({
						goodsId: item.goods.id,
						memberId: uni.getStorageSync("userInfo").id,
						cheapPurchaseCompanyId: uni.getStorageSync('cheapPurchaseCompanyId')
					})
				}
				this.$getJson('/api/v2/vue/ydd/cart/addCart.jsp', data, 'POST', res => {
					console.log('----res------------', res);
					uni.switchTab({
						url: `/pages/cart/cart`
					})
				});
			},
			//登录
			login() {
				var _this = this
				if (!this.mobile) {
					wx.login({
						success: res => {
							console.info('res', res)
							_this.loginCode = res.code
							_this.$refs.uniPop.show({
								title: '登录',
								content: '是否同意获取手机号？',
								shade: true,
								shadeClose: true,
								time: 5,
								anim: 'fadeIn',
								isVisible: true,
								position: 'bottom',
								loginCode: res.code,
								isUrl: false,
							})
						}
					})
				}
			},
			//登录回显
			childClick(e) {
				/* console.log(e)
				uni.setStorageSync('userInfo', e);
				this.userInfo = e;
				this.mobile = e.mobile; */
				// this.$refs.popup.close()
				if (e == true) {
					this.$refs.popup.close()
				} else {
					this.mobile = e.mobile
					this.$refs.popup.close()
				}
			},
		},
	}
</script>

<style lang="scss">
	// page, .content{
	// 	background: $page-color-base;
	// }
	.fistRight {
		right: 10%;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);

	}

	.content {
		padding-top: 96upx;
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
			position: relative;

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
