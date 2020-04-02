<template>
	<view class="container">
		<uni-popup ref="popup" class="userPop" type="center">
			<view>
				<uni-pop ref="uniPop" @changes="childClick"></uni-pop>
			</view>
		</uni-popup>
		<!-- 小程序头部轮播 -->
		<view class="carousel-section" v-if="posterImgLength > 0">
			<!-- 标题栏和状态栏占位符 -->
			<!-- 背景色区域 -->
			<view class="titleNview-background" :style="{backgroundColor:titleNViewBackground}"></view>
			<swiper class="carousel" circular @change="imgChange">
				<swiper-item v-for="(item, index) in posterImgList" :key="index" class="carousel-item">
					<image :src="url+item" />
				</swiper-item>
			</swiper>
			<!-- 自定义swiper指示器 -->
			<view class="swiper-dots">
				<text class="num">{{posterImgCurrent+1}}</text>
				<text class="sign">/</text>
				<text class="num">{{posterImgLength}}</text>
			</view>
		</view>
		<view class="guess-section">
			<view v-for="(item, index) in goodsList" :key="index" class="guess-item" @tap.stop="navToDetailPage(item)">
				<view class="image-wrapper">
					<image :src="url+item.resource.samllCoverImg" mode="aspectFill"></image>
				</view>
				<text class="title clamp">{{item.resource.name}}</text>

				<view class="price-box">
					<view class="price-box" v-if="item.goods.isFaceToFace != 1">
						<text class="price">{{item.goods.priceEdit}}</text>
					</view>
					<view class="price-box" v-if="item.goods.isFaceToFace == 1 || item.goods.isFaceToFace == '1'">
						<text class="price">面议</text>
					</view>
					<text>余{{item.goods.stock}}件</text>
					<text class="yticon icon-gouwuche" @tap.stop="addCart(item.goods)"></text>
				</view>
			</view>
		</view>
		<uni-load-more :status="loadingType"></uni-load-more>

	</view>
</template>

<script>
	import uniPop from '@/components/uniPop.vue';
	import uniPopup from "@/components/uni-popup/uni-popup.vue";
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	export default {
		components: {
			uniLoadMore,
			uniPop,
			uniPopup
		},
		data() {
			return {
				titleNViewBackground: 'rgb(205, 215, 218)',
				posterImgCurrent: 0,
				headerPosition: "fixed",
				posterImgLength: 0,
				posterImgList: [],
				goodsList: [],
				url: this.$ctx,
				pageNumber: 1,
				loadingType: 'more', //加载更多状态
				companyId: uni.getStorageSync(`companyId`),
				cheapPurchaseCompanyId: uni.getStorageSync(`cheapPurchaseCompanyId`),
				classification: uni.getStorageSync(`classification`),
			};
		},
		//下拉刷新
		onPullDownRefresh() {
			this.loadDataTop();
			this.pageNumber = 1;
			this.loadDataList('refresh');
		},
		onLoad() {
			console.log("this.companyId", uni.getStorageSync('companyId'));
			this.loadDataTop();
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
		//加载更多
		onReachBottom() {
			this.loadDataList();
		},
		methods: {
			//加入购物车
			addCart(goods) {
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
						goodsId: goods.id,
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
				this.yddMember = e;
				console.log("denglu:-----", e)
				uni.setStorageSync('userInfo', e);
				this.mobile = e.mobile;
				this.$refs.popup.close()
			},
			/**
			 * 请求静态数据只是为了代码不那么乱
			 * 分次请求未作整合
			 */
			async loadDataTop() {
				let data = {
					data: JSON.stringify({
						companyId: uni.getStorageSync('companyId'),
						mini: "mini"
					})
				}
				this.$getJson('/api/v2/vue/ydd/index/topResList.jsp', data, 'POST', res => {
					console.log('----topList------------', res);
					if (res.data) {
						this.posterImgLength = res.data.length;
						this.posterImgList = res.data;
					}
				});

			},
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
				var url = '/api/v2/vue/ydd/index/resList.jsp'
				let data = {
					data: JSON.stringify({
						pageNumber: this.pageNumber,
						companyId: uni.getStorageSync('companyId')
					})
				}
				if (uni.getStorageSync('companyId') == 0 || uni.getStorageSync('companyId') == "" || uni.getStorageSync(
						'companyId') == null) {
						if(uni.getStorageSync('classification') != 0 && uni.getStorageSync('classification') != ""){
							data = {
								data: JSON.stringify({
									pageNumber: this.pageNumber,
									companyId: uni.getStorageSync('cheapPurchaseCompanyId'),
									classification: uni.getStorageSync('classification')
								})
							}
							url = '/api/v2/vue/sqPlus/resources/cheapPurchaseList.jsp'
						}	
				}
				this.$getJson(url, data, 'POST', res => {
					console.log('----list------------', res);
					if (res.data) {
						let goods = res.data
						if(url == '/api/v2/vue/sqPlus/resources/cheapPurchaseList.jsp'){
							goods = res.data.yddResourcess
						}
						if (this.pageNumber == 1) {
							this.goodsList = goods;
						} else {
							this.goodsList = this.goodsList.concat(goods);
						}
						this.pageNumber += 1
						//判断是否还有下一页，有是more  没有是nomore(测试数据判断大于20就没有了)
						this.loadingType = goods.length < 8 ? 'nomore' : 'more';
						if (type === 'refresh') {
							uni.stopPullDownRefresh();
						}
					}
				});
			},
			//轮播图切换修改背景色
			imgChange(e) {
				console.log("e---------------------------", e);
				const index = e.detail.current;
				this.posterImgCurrent = index;
			},
			//详情页
			navToDetailPage(item) {
				//测试数据没有写id，用title代替
				let id = item.resource.id;
				uni.navigateTo({
					url: `/pages/product/product?id=${id}` + "&companyId=" + this.companyId +
						"&cheapPurchaseCompanyId=" + this.cheapPurchaseCompanyId + "&classification=" + this.classification
				})
			},
			// 标题栏input搜索框点击
			wxSearchBtn() {
				uni.navigateTo({
					url: '/pages/search/search'
				})
			},
		},
		// #ifndef MP
		// 标题栏input搜索框点击
		onNavigationBarSearchInputClicked: async function(e) {
			// this.$api.msg('点击了搜索框');
			uni.navigateTo({
				url: '/pages/search/search'
			})
		},

		//点击导航栏 buttons 时触发
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				this.$api.msg('点击了扫描');
			} else if (index === 1) {
				// #ifdef APP-PLUS
				const pages = getCurrentPages();
				const page = pages[pages.length - 1];
				const currentWebview = page.$getAppWebview();
				currentWebview.hideTitleNViewButtonRedDot({
					index
				});
				// #endif
				uni.navigateTo({
					url: '/pages/notice/notice'
				})
			}
		}
		// #endif
	}
</script>

<style lang="scss">
	/* #ifdef MP */
	.headSearch {
		width: 100%;
		display: block;
		background: #fff;
		position: fixed;
		top: 0;
		left: 0;
		padding: 10upx 30upx;
		z-index: 30;
		height: 100upx;

		.headSearchCon {
			background: #f7f7f7;
			border-radius: 50px;
			display: inline-block;
			height: 76upx;
			width: 100%;

			.headSearchText {
				width: 80%;
				float: left;
				height: 76upx;

				input {
					font-size: 28upx;
					width: 100%;
					padding: 0 4%;
					height: 76upx;
					line-height: 76upx;
					color: #999;
				}
			}

			.headSearchBtn {
				width: 20%;
				float: right;
				height: 76upx;
				background: none;
				border: none;

				image {
					width: 40upx;
					display: block;
					margin-top: 18upx;
					margin-left: 30upx;
				}
			}

			.headSearchBtn::after {
				display: none;
			}
		}

	}

	.wx-Banner {
		margin-top: 100upx;
	}

	page {
		.cate-section {
			position: relative;
			z-index: 5;
			border-radius: 16upx 16upx 0 0;
			margin-top: -20upx;
		}

		.carousel-section {
			padding: 20upx 0 0;

			.titleNview-placing {
				padding-top: 0;
				height: 0;
			}

			.titleNview-background {
				height: 350upx;
			}

			.carousel {
				// .carousel-item{
				// 	padding: 0;
				// }
			}

			.swiper-dots {
				left: 50upx;
				bottom: 15upx;
			}
		}
	}

	/* #endif */


	page {
		background: #f5f5f5;
	}

	.m-t {
		margin-top: 16upx;
	}

	/* 头部 轮播图 */
	.carousel-section {
		position: relative;
		padding-top: 10px;
		background: #fff;

		.titleNview-placing {
			height: var(--status-bar-height);
			padding-top: 44px;
			box-sizing: content-box;
		}

		.titleNview-background {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 426upx;
			transition: .4s;
		}
	}

	.carousel {
		width: 100%;
		height: 350upx;

		.carousel-item {
			width: 100%;
			height: 100%;
			padding: 0 28upx;
			overflow: hidden;
		}

		image {
			width: 100%;
			height: 100%;
			border-radius: 10upx;
		}
	}

	.swiper-dots {
		display: flex;
		position: absolute;
		left: 60upx;
		bottom: 15upx;
		width: 72upx;
		height: 36upx;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk4MzlBNjE0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk4MzlBNjA0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0E3RUNERkE0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E3RUNERkI0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Gh5BPAAACTUlEQVR42uzcQW7jQAwFUdN306l1uWwNww5kqdsmm6/2MwtVCp8CosQtP9vg/2+/gY+DRAMBgqnjIp2PaCxCLLldpPARRIiFj1yBbMV+cHZh9PURRLQNhY8kgWyL/WDtwujjI8hoE8rKLqb5CDJaRMJHokC6yKgSCR9JAukmokIknCQJpLOIrJFwMsBJELFcKHwM9BFkLBMKFxNcBCHlQ+FhoocgpVwwnv0Xn30QBJGMC0QcaBVJiAMiec/dcwKuL4j1QMsVCXFAJE4s4NQA3K/8Y6DzO4g40P7UcmIBJxbEesCKWBDg8wWxHrAiFgT4fEGsB/CwIhYE+AeBAAdPLOcV8HRmWRDAiQVcO7GcV8CLM8uCAE4sQCDAlHcQ7x+ABQEEAggEEAggEEAggEAAgQACASAQQCCAQACBAAIBBAIIBBAIIBBAIABe4e9iAe/xd7EAJxYgEGDeO4j3EODp/cOCAE4sYMyJ5cwCHs4rCwI4sYBxJ5YzC84rCwKcXxArAuthQYDzC2JF0H49LAhwYUGsCFqvx5EF2T07dMaJBetx4cRyaqFtHJ8EIhK0i8OJBQxcECuCVutxJhCRoE0cZwMRyRcFefa/ffZBVPogePihhyCnbBhcfMFFEFM+DD4m+ghSlgmDkwlOgpAl4+BkkJMgZdk4+EgaSCcpVX7bmY9kgXQQU+1TgE0c+QJZUUz1b2T4SBbIKmJW+3iMj2SBVBWz+leVfCQLpIqYbp8b85EskIxyfIOfK5Sf+wiCRJEsllQ+oqEkQfBxmD8BBgA5hVjXyrBNUQAAAABJRU5ErkJggg==);
		background-size: 100% 100%;

		.num {
			width: 36upx;
			height: 36upx;
			border-radius: 50px;
			font-size: 24upx;
			color: #fff;
			text-align: center;
			line-height: 36upx;
		}

		.sign {
			position: absolute;
			top: 0;
			left: 50%;
			line-height: 36upx;
			font-size: 12upx;
			color: #fff;
			transform: translateX(-50%);
		}
	}

	/* 分类 */
	.cate-section {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
		padding: 30upx 22upx;
		background: #fff;

		.cate-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: $font-sm + 2upx;
			color: $font-color-dark;
		}

		/* 原图标颜色太深,不想改图了,所以加了透明度 */
		image {
			width: 88upx;
			height: 88upx;
			margin-bottom: 14upx;
			border-radius: 50%;
			opacity: .7;
			box-shadow: 4upx 4upx 20upx rgba(250, 67, 106, 0.3);
		}
	}

	.ad-1 {
		width: 100%;
		height: 210upx;
		padding: 10upx 0;
		background: #fff;

		image {
			width: 100%;
			height: 100%;
		}
	}

	/* 秒杀专区 */
	.seckill-section {
		padding: 4upx 30upx 24upx;
		background: #fff;

		.s-header {
			display: flex;
			align-items: center;
			height: 92upx;
			line-height: 1;

			.s-img {
				width: 140upx;
				height: 30upx;
			}

			.tip {
				font-size: $font-base;
				color: $font-color-light;
				margin: 0 20upx 0 40upx;
			}

			.timer {
				display: inline-block;
				width: 40upx;
				height: 36upx;
				text-align: center;
				line-height: 36upx;
				margin-right: 14upx;
				font-size: $font-sm+2upx;
				color: #fff;
				border-radius: 2px;
				background: rgba(0, 0, 0, .8);
			}

			.icon-you {
				font-size: $font-lg;
				color: $font-color-light;
				flex: 1;
				text-align: right;
			}
		}

		.floor-list {
			white-space: nowrap;
		}

		.scoll-wrapper {
			display: flex;
			align-items: flex-start;
		}

		.floor-item {
			width: 150upx;
			margin-right: 20upx;
			font-size: $font-sm+2upx;
			color: $font-color-dark;
			line-height: 1.8;

			image {
				width: 150upx;
				height: 150upx;
				border-radius: 6upx;
			}

			.price {
				color: $uni-color-primary;
			}
		}
	}

	.f-header {
		display: flex;
		align-items: center;
		height: 140upx;
		padding: 6upx 30upx 8upx;
		background: #fff;

		image {
			flex-shrink: 0;
			width: 80upx;
			height: 80upx;
			margin-right: 20upx;
		}

		.tit-box {
			flex: 1;
			display: flex;
			flex-direction: column;
		}

		.tit {
			font-size: $font-lg +2upx;
			color: #font-color-dark;
			line-height: 1.3;
		}

		.tit2 {
			font-size: $font-sm;
			color: $font-color-light;
		}

		.icon-you {
			font-size: $font-lg +2upx;
			color: $font-color-light;
		}
	}

	/* 团购楼层 */
	.group-section {
		background: #fff;

		.g-swiper {
			height: 650upx;
			padding-bottom: 30upx;
		}

		.g-swiper-item {
			width: 100%;
			padding: 0 30upx;
			display: flex;
		}

		image {
			width: 100%;
			height: 460upx;
			border-radius: 4px;
		}

		.g-item {
			display: flex;
			flex-direction: column;
			overflow: hidden;
		}

		.left {
			flex: 1.2;
			margin-right: 24upx;

			.t-box {
				padding-top: 20upx;
			}
		}

		.right {
			flex: 0.8;
			flex-direction: column-reverse;

			.t-box {
				padding-bottom: 20upx;
			}
		}

		.t-box {
			height: 160upx;
			font-size: $font-base+2upx;
			color: $font-color-dark;
			line-height: 1.6;
		}

		.price {
			color: $uni-color-primary;
		}

		.m-price {
			font-size: $font-sm+2upx;
			text-decoration: line-through;
			color: $font-color-light;
			margin-left: 8upx;
		}

		.pro-box {
			display: flex;
			align-items: center;
			margin-top: 10upx;
			font-size: $font-sm;
			color: $font-base;
			padding-right: 10upx;
		}

		.progress-box {
			flex: 1;
			border-radius: 10px;
			overflow: hidden;
			margin-right: 8upx;
		}
	}

	/* 分类推荐楼层 */
	.hot-floor {
		width: 100%;
		overflow: hidden;
		margin-bottom: 20upx;

		.floor-img-box {
			width: 100%;
			height: 320upx;
			position: relative;

			&:after {
				content: '';
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				background: linear-gradient(rgba(255, 255, 255, .06) 30%, #f8f8f8);
			}
		}

		.floor-img {
			width: 100%;
			height: 100%;
		}

		.floor-list {
			white-space: nowrap;
			padding: 20upx;
			padding-right: 50upx;
			border-radius: 6upx;
			margin-top: -140upx;
			margin-left: 30upx;
			background: #fff;
			box-shadow: 1px 1px 5px rgba(0, 0, 0, .2);
			position: relative;
			z-index: 1;
		}

		.scoll-wrapper {
			display: flex;
			align-items: flex-start;
		}

		.floor-item {
			width: 180upx;
			margin-right: 20upx;
			font-size: $font-sm+2upx;
			color: $font-color-dark;
			line-height: 1.8;

			image {
				width: 180upx;
				height: 180upx;
				border-radius: 6upx;
			}

			.price {
				color: $uni-color-primary;
			}
		}

		.more {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			flex-shrink: 0;
			width: 180upx;
			height: 180upx;
			border-radius: 6upx;
			background: #f3f3f3;
			font-size: $font-base;
			color: $font-color-light;

			text:first-child {
				margin-bottom: 4upx;
			}
		}
	}

	/* 猜你喜欢 */
	.guess-section {
		display: flex;
		flex-wrap: wrap;
		padding: 30upx 2% 0;
		background: #fff;

		.guess-item {
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
			font-family: Arial, Helvetica, sans-serif;
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
