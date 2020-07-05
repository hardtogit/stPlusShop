<style lang="scss">
	.container {
		padding: 0 25upx;
	}
	.rich{
		// margin-top: 20upx;
		font-size:25upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(18,18,18,1);
		line-height:38upx;
		}
		
	.header {
		background-image: url(../../static/home/index_bg.png);
		background-size: 100% 100%;
		height: 300upx;
		border-radius: 10upx;
		position: relative;
		text-align: center;
		padding-top: 38upx;

		.icons {
			position: absolute;
			width: 100%;
			top: 25upx;
			.col{
				width: 100upx;
				height: 32upx;
				float: left;
			}	
			.icon {
				display: inline-block;
				width: 32upx;
				height: 32upx;
			
				&.love {
					float: left;
					margin-left: 25upx;
				}

				&.qrcode {
					float: right;
					margin-right: 25upx;
				}

				&.turn {
					float: right;
					margin-right: 25upx;
				}
			}

			.share {
				display: inline-block;
				background: none;
				float: right;
				border: none;
				width: 59upx;
				padding: 0;

				&::after {
					border: none;
				}
			}
		}

		.logo {
			width: 125upx;
			height: 125upx;
			border-radius: 50%;

			display: block;
			margin: 0 auto;
		}

		.name {
			text-align: center;
			margin-top: 18upx;
			color: #fff;
		}

		.people {
			display: inline-block;
			position: relative;
			margin: 0 auto;
			color: #fff;

			.label {
				position: absolute;
				right: -86upx;
				top: 10upx;
				font-size: 21upx;
				color: #F26131;
				background-color: #F8E489;
				height: 25upx;
				border-radius: 12.5upx;
				line-height: 25upx;
				padding: 0 16upx;
			}
		}
	}

	.lables {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 30upx 0 20upx 0;

		.lable {
			width: 186upx;
			height: 65upx;
			line-height: 65upx;
			border-radius: 32.5upx;
			font-size: 33upx;
			text-align: center;
			color: #525252;

			&.active {
				background-color: #FF474C;
				color: #fff;
			}
		}
	}

	.swiper-item {
		.title {
			padding: 20upx 0;
			border-bottom: 0.5upx solid #eee;

			.inner {
				display: flex;
				align-items: center;
				// height: 34upx;
				padding-left: 10upx;

				.shu {
					width: 6upx;
					height: 34upx;
					background-color: #FF474C;
					margin-right: 15upx;
				}

				.text {
					font-size: 40upx;
					font-weight: 500;
				}

				.icon {
					flex: 1;
					text-align: right;
					color: #5a5a5a;

				}
			}
		}

		.swiper {

			// height: 540upx;
			.guess-section {
				white-space: nowrap;

				padding: 38upx 0;
				background: #fff;

				.guess-item {
					display: inline-block;
					position: relative;
					vertical-align: top;
					width: 303upx;
					margin-right: 18upx;

					.bottom {
						position: absolute;
						bottom: 0;
						left: 0;
						width: 100%;
						// height: ;
					}
				}

				.image-wrapper {
					width: 100%;
					height: 334upx;
					border-radius: 9upx;
					overflow: hidden;

					image {
						width: 100%;
						height: 100%;
						opacity: 1;
					}
				}

				.title {
					font-size: 30upx;
					color: #121212;
					font-family: Arial, Helvetica, sans-serif;
					margin-top: 8upx;
					border-bottom: none;
					padding: 0;
				}

				.text {
					color: #777;
					display: block;
					font-size: 22upx;
					line-height: 26upx;
					white-space: normal;
					margin: 8upx 0 28upx 0;
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
					font-size: 37upx;
					color: #ea6143;
					line-height: 1;
					font-family: Arial;

					&:before {
						content: '￥';
						margin-right: -6upx;
						font-size: 37upx;
					}
				}

				.default {
					font-size: 22upx;
					display: inline-block;
					align-items: baseline;
					color: #B1B1B1;
					text-decoration: line-through;

					&:before {
						content: '￥';
						font-size: 22upx;
						margin-right: -4upx;
						text-decoration: line-through;
					}
				}

				.label {
					color: #F0351C;
					font-size: 24upx;
					border: 0.5upx solid #F0351C;
					padding: 1upx 4upx;
					border-radius: 4upx;
				}

				&.coupon {
					.guess-item {
						height: 467upx;
						padding: 20upx;
						background-color: #fff;
						box-shadow: 0px 2px 21px 1px rgba(104, 101, 101, 0.14);

						.bottom {
							padding: 20upx;
						}

						.image-wrapper {
							width: 260upx;
							height: 223upx;
							overflow: hidden;

							image {
								width: 100%;
								height: 100%;
								opacity: 1;
							}
						}

						.text {
							white-space: nowrap;
							text-overflow: ellipsis;
							overflow: hidden;
							border-bottom: 1px dashed #C3C3C3;
							padding-bottom: 18upx;
							margin-bottom: 0;
						}

						.store-box {
							display: inline-block;

							.box {
								display: flex;
								height: 30upx;
								padding: 0 6upx;
								align-items: center;
								border: 1upx solid rgba(128, 128, 128, 1);
								border-radius: 16upx;
								font-size: 17upx;
								color: #808080;

								.pass {
									margin-right: 4upx;

									.num {
										color: #333;
									}
								}

								.leve {
									.num {
										color: #FF474C;
									}
								}
							}
						}
					}


				}
			}
		}

		// 店铺
		.store-title {
			font-size: 31upx;
			margin-top: 28upx;
		}

		.sub-title {
			font-size: 26upx;
			color: #616161;
			margin-top: 26upx;
			display: -webkit-box;
			
			overflow: hidden;
			
			text-overflow: ellipsis;
			
			word-wrap: break-word;
			
			white-space: normal !important;
			
			-webkit-line-clamp: 2;
			
			-webkit-box-orient: vertical;
	
		}

		.pictures {
			margin-top: 40upx;

			.picture {
				width: 208upx;
				display: inline-block;
				height: 203upx;
				background-color: #ddd;
				margin-right: 34rpx;
				margin-bottom: 20upx;

				&:nth-child(3n) {
					margin-right: 0;
				}
			}
		}

		.store-banner {
			display: block;
			width: 692upx;
			height: 565upx;
			margin: 0 auto;
		}

		.introduce-title {
			display: flex;
			align-items: center;
			margin-top: 58upx;	
			margin-bottom: 38rpx;
			.logo {
				width: 120upx;
				height: 120upx;
				display: block;
				background-color: #ddd;
			}

			.name {
				font-size: 38upx;
				color: #0F0F0F;
				flex: 1;
				padding-left: 34upx;
			}
		}

	}
</style>
<template>
	
	<view class="container">
		<official-account></official-account>
		<view class="header">
			<view class="icons">
				<view class="col" @click="toFavorite">
					<image v-if='!col' class="icon love" src="../../static/icon/home/love.png" ></image>
					<image v-if='col' class="icon love" src="../../static/icon/home/loveH.png" ></image>
				</view>
				<button class="share" open-type="share">
					<image class="icon turn" src="../../static/icon/home/turn.png"></image>
				</button>
				<image class="icon qrcode" src="../../static/icon/home/qrcode.png"></image>
			</view>
			<image class="logo" :src="ctx+companyInfo.logoPath" alt="">
				<view class="name">{{companyInfo.name}}</view>
				<view class="people">
					{{companyUser.realName}}
					<view class="label">
						店长
					</view>
				</view>
		</view>
		<view class="lables">
			<view class="lable active">店铺</view>
			<view class="lable" @click="push('/pages/home/classify/coupon/coupon')">商圈券</view>
			<view class="lable" @click="push('/pages/home/classify/platform/platform')">巨划算</view>
		</view>
		<view class="swiper-item">
			<view class="title" @click="push('/pages/home/classify/hot/hot')">
				<view class="inner">
					<view class="shu"></view>
					<view class="text">
						爆品
					</view>
					<view class="icon">
						<text class="cell-more yticon icon-you"></text>
					</view>
				</view>
			</view>
			<scroll-view class="swiper " :scroll-x="true">
				<view class="guess-section">
					<view v-for="(item, index) in goodsList" :key="index" class="guess-item" @tap.stop="navToDetailPage(item,'hot')">
						<view class="image-wrapper">
							<image :src="ctx+item.firstImg" ></image>
						</view>
						<text class="title clamp">{{item.proName}}</text>
						<text class="text">{{item.subheading}}</text>
						<view class="price-box">
							<view class="price-box" v-if="item.isFaceToFace != 1">
								<text class="price">{{item.price/100}}</text>
								<text class="default">{{item.marketPrice/100}}</text>
							</view>
							<!-- 	<view class="price-box" v-if="item.goods.isFaceToFace == 1 || item.goods.isFaceToFace == '1'">
				 			<text class="price">面议</text>
				 		</view> -->
							<text class="label">限时购</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="swiper-item">
			<view class="title" @click="push('/pages/home/classify/coupon/coupon')">
				<view class="inner">
					<view class="shu"></view>
					<view class="text">
						商圈券
					</view>
					<view class="icon">
						<text class="cell-more yticon icon-you"></text>
					</view>
				</view>
			</view>
			<scroll-view class="swiper " :scroll-x="true">
				<view class="guess-section coupon">
					<view v-for="(item, index) in couponList" :key="index" class="guess-item" @tap.stop="navToDetailPage(item,'coupon')">
						<view class="image-wrapper">
							<image :src="ctx+item.imgPath" ></image>
						</view>
						<text class="title clamp">{{item.name}}</text>
						<text class="text">{{item.instro}}</text>
						<view class="store-box">
							<view class="box">
								<view class="pass">已抢<text class="num">{{item.purchased}}</text>件</view>
								<view class="leve">仅剩<text class="num">{{item.quantityTotal}}</text>件</view>
							</view>
						</view>
						<view class="price-box bottom">
							<view class="price-box">
								<text class="price">{{item.value/100}}</text>
							</view>
							<!-- 	<view class="price-box" v-if="item.goods.isFaceToFace == 1 || item.goods.isFaceToFace == '1'">
							<text class="price">面议</text>
						</view> -->
							<!-- <text class="label">限时购</text> -->
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="swiper-item">
			<view class="title" @click="push('/pages/home/classify/platform/platform')">
				<view class="inner">
					<view class="shu"></view>
					<view class="text">
						巨划算
					</view>
					<view class="icon">
						<text class="cell-more yticon icon-you"></text>
					</view>
				</view>
			</view>
			<scroll-view class="swiper " :scroll-x="true">
				<view class="guess-section">
					<view v-for="(item, index) in platformList" :key="index" class="guess-item" @tap.stop="navToDetailPage(item,'platform')">
						<view class="image-wrapper">
							<image :src="ctx+item.firstImg" ></image>
						</view>
						<text class="title clamp">{{item.proName}}</text>
						<text class="text">{{item.subheading}}</text>
						<view class="price-box">
							<view class="price-box">
								<text class="price">{{item.price/100}}</text>
								<text class="default">{{item.marketPrice/100}}</text>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
			<view class="swiper-item">
				<view class="title">
					<view class="inner" @click="push('/pages/home/dynamic/dynamic')">
						<view class="shu"></view>
						<view class="text">
							店铺动态
						</view>
						<view class="icon">
							<text class="cell-more yticon icon-you"></text>
						</view>
					</view>
				</view>
				<view class="store-title">{{dynamic.title}}</view>
				<view class="sub-title">
					{{dynamicText}}
				</view>
				<view class="pictures">
					<image v-for="(url, i) in  dynamicImg" v-if="i<3" class="picture" :src="url" :key="i"></image>

				</view>
			</view>
			<view class="swiper-item">
				<view class="title" style="border-bottom: none;">
					<view class="inner">
						<view class="shu"></view>
						<view class="text">
							店铺介绍
						</view>
					</view>
				</view>
				<image class="store-banner" :src='ctx+companyInfo.descImgs'></image>
				<view class="introduce-title">
					<image class="logo" :src="ctx+companyInfo.logoPath" />
					<view class="name">{{companyInfo.name}}</view>
				</view>
				  <rich-text :nodes="companyInfo.desc" class="rich"></rich-text>
			</view>
		</view>
	</view>
</template>

<script>
	import {dealRich} from '@/common/common'
	export default {
		data() {
			return {
				ctx: this.$ctx,
				goodsList: [],
				couponList: [],
				platformList: [],
				companyInfo: {},
				companyUser: {},
				dynamic: {},
				dynamicImg: [],
				dynamicText: '',
				col:false
			}
		},
		//设置分享内容
		onShareAppMessage(res) {
			if (res.from === 'button') { // 来自页面内分享按钮
				console.log(res.target)
			}
			return {
				title:this.companyInfo.name,
				path: `/pages/home/home?storeId=${this.companyInfo.id}`,
				imageUrl: this.ctx+this.companyInfo.introduceImg
			}
		},
		methods: {
			getData() {
				const reg=new RegExp('/src=\"\/(ydd1\/)?upload/g')
				const regex = new RegExp('<img', 'gi');
				var url = '/api/v2/vue/ydd/index/resList.jsp'
				let data = {
					data: JSON.stringify({
						pageNumber: 1,
						pageSize: 10,
						companyId: uni.getStorageSync('companyId')
					})
				}
				this.$getJson(url, data, 'POST', res => {
					console.log('----list------------', res);
					if (res.data) {
						// this.goodsList=res.data
					}
				});
				this.$getJson('/api/v3/busiSettings/getSettings.jsp', {
					data: JSON.stringify({
						'HOMEPAGE.SHOPID': 1
					})
				}, 'POST', res => {
					console.log(res)
				})
				//获取热门商品
				this.$getJson('/api/v3/vue/home/hotGoods.jsp', {
					storeId: 202
				}, 'POST', res => {

					this.goodsList = res.data
				})
				//获取商圈券
				this.$getJson('/api/v3/vue/home/yyCoupon.jsp', {
					storeId: 202
				}, 'POST', res => {
					this.couponList = res.data
					console.log(this.couponList,'couponList')
				})

				//获取巨划算
				this.$getJson('/api/v3/vue/home/jhs.jsp', {
					storeId: 202
				}, 'POST', res => {
					this.platformList = res.data
				})
				//首页动态
				this.$getJson('/api/v3/vue/home/dt.jsp', {
					storeId: 202
				}, 'POST', res => {
					console.log(res, 'dys')
					var imgList = [];
					console.log(dealRich(res.data.detail),'aaaa')
					dealRich(res.data.detail).replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/g, (match, capture) => {
						this.dynamicImg = [...this.dynamicImg, capture];
					});
					this.dynamicText = res.data.detail.replace(/<[^<>]+>/g, "").replace(/&nbsp;/gi, "")
					console.log(this.dynamicImg, 'dynamic')
				})
			
		
					
				//店铺介绍
				this.$getJson('/api/v2/vue/sqPlus/company/companyInfo.jsp', {
					data: JSON.stringify({
						'companyId': 202
					})
				}, 'POST', res => {
					this.companyInfo = res.data.cjCompany
					this.companyUser = res.data.cjCompany.cjUser 
					this.companyInfo = {...res.data.cjCompany,desc:dealRich(res.data.cjCompany.desc)}
					console.log(this.companyInfo, 'companyInfo')
				})
			},
			//收藏
			toFavorite() {
				const $this=this
				this.$getJson('/api/v3/my/store/collect.jsp', {
					storeId: 202,
					action: 1
				}, 'POST', res => {
					if (res.success) {
						$this.col=true
						uni.showToast({
							title: '收藏成功',
							icon: 'none'
						})
					} else {
						if(res.message==='已收藏'){
							$this.col=true
						}
						uni.showToast({
							title: res.message,
							icon: 'none'
						})
					}

				});
			},
			push(url) {
				uni.navigateTo({
					url
				})
			},
			//详情页
			navToDetailPage(item, type) {
				if (type == 'hot' || type == 'platform') { //爆品和平台商品
					//测试数据没有写id，用title代替
					let id = item.id;
					uni.navigateTo({
						url: `/pages/home/detail/goods/goods?id=${id}` + "&companyId=" + this.companyId +
							"&cheapPurchaseCompanyId=" + this.cheapPurchaseCompanyId + "&classification=" + this.classification
					})
				} else if (type == 'coupon') { //优惠券
					//测试数据没有写id，用title代替
					let id = item.id;
					uni.navigateTo({
						url: `/pages/home/detail/coupon/coupon?id=${id}`

					})
				}
			},
		},
		mounted() {
			this.getData()
		}
	}
</script>
