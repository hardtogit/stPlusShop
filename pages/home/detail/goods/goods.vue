<template>
	<view class="container">
		<uni-popup ref="popup" class="userPop" type="center">
			<view>
				<uni-pop ref="uniPop" @changes="childClick"></uni-pop>
			</view>
		</uni-popup>
		<view class="carousel">
			<swiper indicator-dots circular=true duration="400">
				<swiper-item class="swiper-item" v-for="(item,index) in productInfo.resources.smallBannerImgArr" :key="index">
					<view class="image-wrapper">
						<image :src="url+item" class="loaded" mode="aspectFill" @tap="saveQrcode(1)"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<view class="introduce-section" v-if="productInfo.goods.isFaceToFace != 1">
			<text class="title">{{productInfo.resources.name}}</text>
			<view class="price-store">
				<view class="price-box">
					<text class="price-tip">¥</text>
					<text class="price">{{productInfo.goods.priceShow}}</text>
				</view>
				<view class="store-box">
					<view class="box">
						<view class="pass">已抢<text class="num">38</text>件</view>
						<view class="leve">仅剩<text class="num">134</text>件</view>
					</view>
				</view>
			</view>
		</view>
		<view class="introduce-section" v-if="productInfo.goods.isFaceToFace == 1 || productInfo.goods.isFaceToFace == '1'">
			<text class="title">{{productInfo.resources.name}}</text>
			<view class="price-box">
				<text class="price-tip">¥</text>
				<text class="price">面议</text>
			</view>
		</view>
		<view class="detail-desc">
			<view class="d-header">
				<text>图文详情</text>
			</view>
			<rich-text :nodes="desc" @tap="saveQrcode(2)"></rich-text>
		</view>

		<!-- 底部操作菜单 -->
		<view class="page-bottom">
			<navigator url="/pages/index/index" open-type="switchTab" class="p-b-btn">
				<text class="yticon icon-xiatubiao--copy"></text>
				<text>首页</text>
			</navigator>
			<view @tap="shareShowBtn(1)" class="p-b-btn">
				<text class="yticon icon-fenxiang2"></text>
				<text>分享</text>
			</view>
			<view class="p-b-btn" :class="{active: favorite}" @click="toFavorite">
				<text class="yticon icon-shoucang"></text>
				<text>收藏</text>
			</view>
			<view class="action-btn-group">
				<button type="primary" class=" action-btn no-border add-cart-btn" @click="setOptionType('cart')">加入购物车</button>
				<button type="primary" class=" action-btn no-border buy-now-btn" @click="setOptionType('buy')" v-if="productInfo.resources.status == 2">立即购买</button>
				<button type="primary" class=" action-btn no-border add-cart-btn" style="background-color: #C0C0C0;" v-if="productInfo.resources.status != 2">已下架</button>
			</view>
		</view>
		<navigator url="/pages/cart/cart" open-type="switchTab" class="productCare">
			<text class="yticon icon-gouwuche"></text>
			<text class="number" v-if="cartCount">{{cartCount}}</text>
		</navigator>

		<!-- 规格-模态层弹窗 -->
		<view class="popup spec" :class="specClass" @touchmove.stop.prevent="stopPrevent" @click="toggleSpec">
			<!-- 遮罩层 -->
			<view class="mask"></view>
			<view class="layer attr-content" @click.stop="stopPrevent">
				<view class="a-t">
					<image src="https://gd3.alicdn.com/imgextra/i3/0/O1CN01IiyFQI1UGShoFKt1O_!!0-item_pic.jpg_400x400.jpg"></image>
					<view class="right">
						<text class="price">¥328.00</text>
						<text class="stock">库存：188件</text>
						<view class="selected">
							已选：
							<text class="selected-text" v-for="(sItem, sIndex) in specSelected" :key="sIndex">
								{{sItem.name}}
							</text>
						</view>
					</view>
				</view>
				<view v-for="(item,index) in specList" :key="index" class="attr-list">
					<text>{{item.name}}</text>
					<view class="item-list">
						<text v-for="(childItem, childIndex) in specChildList" v-if="childItem.pid === item.id" :key="childIndex" class="tit"
						 :class="{selected: childItem.selected}" @click="selectSpec(childIndex, childItem.pid)">
							{{childItem.name}}
						</text>
					</view>
				</view>
				<button class="btn" @click="propComplete()">完成</button>
			</view>
		</view>
		<!-- 分享 -->
		<share ref="share" :contentHeight="580" :shareList="shareList"></share>
		<!--点击邀请出现分享-->
		<view class="sharelayer" v-if="shareShow">
			<view class='layerBg' @tap="shareShowBtn"></view>
			<view class='layerCon'>
				<view class='layerShare'>
					<button open-type="share" class='layerShareCon'>
						<image src='../../../../static/wx.png' mode='widthFix'></image>
						<view class='name '>微信分享</view>
					</button>
					<view class='layerShareCon' @tap="posterShowBtn">
						<image src='../../../../static/hb.png' mode='widthFix'></image>
						<view class='name'>二维码分享</view>
					</view>
				</view>
				<button class='layerShareBtn' @tap="shareShowBtn">取消</button>
			</view>
		</view>
		<!--点击海报分享出现-->
		<view class="sharelayer" v-if="posterShow">
			<view class='layerBg' @tap="posterShowBtn"></view>
			<view class='layerPoster'>
				<view class="posterTop">
					<image src="../../static/bg.png" mode="widthFix"></image>
					<image src="../../static/close.png" @tap="posterShowBtn" mode="widthFix" class="posterClose"></image>
					<view class="content">
						<view class="headImg">
							<image src="../../static/missing-face.png" mode="widthFix"></image>
						</view>
						<view class="title">{{yddMember.realName}}邀请你购买</view>
					</view>
				</view>
				<view class="posterBottom">
					<view class="leftCon">
						<view class="title">友多多</view>
						<view class="label">点击右图长按保存到手机</view>
					</view>
					<view class="rightCon" @tap="saveQrcode">
						<image :src="qrcodePaths[0]" mode="widthFix"></image>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import uniPop from '@/components/uniPop.vue';
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components: {
			uniPop,
			uniPopup
		},
		data() {
			return {
				cartCount: '',
				specClass: 'none',
				specSelected: [],
				productInfo: {},
				member: {},
				yddMember: uni.getStorageSync("userInfo"),
				shareShow: false,
				favorite: false,
				posterShow: false,
				url: this.$ctx,
				qrcodePaths: [],
				id: null,
				shareList: [],
				imgList: [],
				inviteCode: '',
				loginCode: '',
				mobile: uni.getStorageSync(`mobile`),
				desc: ``,
				companyId: '',
				cheapPurchaseCompanyId: '',
				classification: "",
				optionType:"buy",//选择规格后是购买还是收藏
				specList: [{
						id: 1,
						name: '尺寸',
					},
					{
						id: 2,
						name: '颜色',
					},
				],
				specChildList: [{
						id: 1,
						pid: 1,
						name: 'XS',
					},
					{
						id: 2,
						pid: 1,
						name: 'S',
					},
					{
						id: 3,
						pid: 1,
						name: 'M',
					},
					{
						id: 4,
						pid: 1,
						name: 'L',
					},
					{
						id: 5,
						pid: 1,
						name: 'XL',
					},
					{
						id: 6,
						pid: 1,
						name: 'XXL',
					},
					{
						id: 7,
						pid: 2,
						name: '白色',
					},
					{
						id: 8,
						pid: 2,
						name: '珊瑚粉',
					},
					{
						id: 9,
						pid: 2,
						name: '草木绿',
					},
				]
			};
		},
		onShareAppMessage(res) {
			console.log("------------------------", this.productInfo.resources.smallBannerImgArr[0])
			if (res.from === 'button') { // 来自页面内分享按钮
				console.log(res.target)
			}
			return {
				title: this.yddMember.realName + "邀请你购买" + this.productInfo.resources.name,
				path: "/pages/product/product?id=" + this.id + "&inviteCode=" + this.yddMember.inviterCode + "&companyId=" + this.companyId +
					"&cheapPurchaseCompanyId=" + this.cheapPurchaseCompanyId + "&classification=" + this.classification,
				imageUrl: this.$ctx + this.productInfo.resources.smallBannerImgArr[0],
			}
		},
		onLoad(options) {
			console.log(options)
			//接收传值,id里面放的是标题，因为测试数据并没写id 
			this.id=305
			if (options.id) {
				this.id = options.id
			}
			this.inviteCode = options.inviteCode
			if (options.companyId) {
				this.companyId = options.companyId
				uni.setStorageSync('companyId', this.companyId);
				console.log("this.companyId", this.companyId);
			}
			if (options.cheapPurchaseCompanyId) {
				this.cheapPurchaseCompanyId = options.cheapPurchaseCompanyId
				uni.setStorageSync('cheapPurchaseCompanyId', this.cheapPurchaseCompanyId);
			}
			if (options.classification) {
				this.classification = options.classification
				uni.setStorageSync('classification', this.classification);
			}
			if (options.scene) {
				let scene = decodeURIComponent(options.scene);
				console.log("-----------scene--------",scene)
				//&是我们定义的参数链接方式
				let datas = scene.split("&");
				if (datas.length > 0) {
					this.id = datas[0];
				}
				if (datas.length > 1) {
					this.inviteCode = datas[1]
				}
				if (datas.length > 2) {
					this.companyId = options.companyId
					uni.setStorageSync('companyId', datas[2]);
				}
				if (datas.length > 2) {
					this.cheapPurchaseCompanyId = options.cheapPurchaseCompanyId
					uni.setStorageSync('cheapPurchaseCompanyId', datas[3]);
				}
				if (datas.length > 2) {
					this.classification = options.classification
					uni.setStorageSync('classification', datas[4]);
				}

			}
			//规格 默认选中第一条
			/* this.specList.forEach(item=>{
				for(let cItem of this.specChildList){
					if(cItem.pid === item.id){
						this.$set(cItem, 'selected', true);
						this.specSelected.push(cItem);
						break; //forEach不能使用break
					}
				}
			})
			this.shareList = await this.$api.json('shareList'); */
		},
		onShow() {
			this.loadData()
			this.getCarts()
			this.login(); //微信登录
		},
		methods: {
			loadData() {
				//过去商品详情
				let data = {
					data: JSON.stringify({
						resourcesId: this.id||305,
						memberId: uni.getStorageSync("userInfo").id
					})
				}
				this.$getJson('/api/v2/vue/ydd/index/resoucesInfo.jsp', data, 'POST', res => {
					console.log('----list------------', res);
					if (res.data) {
						this.productInfo.resources = res.data.resources;
						this.productInfo.goods = res.data.goods;
						this.member = res.data.member;
						this.favorite = res.data.isCollection > 0 ? true : false
						this.desc = '<div style="width:100%">'
						res.data.resources.imgArr.forEach(item => {
							this.desc += '<img style="width:100%;display:block;" src="' + this.url + item + '" />'
						})
						this.desc += '</div>'
					}
				});

			},
			//获取购物车数量
			getCarts() {
				if (uni.getStorageSync(`mobile`)) {
					//获取购物车数量
					let data = {
						data: JSON.stringify({
							memberId: uni.getStorageSync("userInfo").id
						})
					}
					this.$getJson('/api/v2/vue/ydd/cart/getCartNumber.jsp', data, 'POST', res => {
						console.log('----list------------', res);
						if (res.data) {
							this.cartCount = res.data
						}
					});
				}

			},
			//分享
			shareShowBtn(e) {
				if (!uni.getStorageSync(`mobile`)) {
					this.login()
					//弹出登录
					this.$refs.popup.open()
					//防止点击遮罩关闭
					this.$refs.popup.clickClose(true)
					return
				}
				this.shareShow = !this.shareShow;
				if (e == 1) {
					this.getQrcode()
				}
				/* uni.authorize({
				    scope: 'scope.writePhotosAlbum',
				    success() {
				    },
				}) */
			},
			posterShowBtn() {
				this.posterShow = !this.posterShow;
			},
			//规格弹窗开关
			toggleSpec() {
				if (this.specClass === 'show') {
					this.specClass = 'hide';
					setTimeout(() => {
						this.specClass = 'none';
					}, 250);
				} else if (this.specClass === 'none') {
					this.specClass = 'show';
				}
			},
			//选择规格
			selectSpec(index, pid) {
				let list = this.specChildList;
				list.forEach(item => {
					if (item.pid === pid) {
						this.$set(item, 'selected', false);
					}
				})

				this.$set(list[index], 'selected', true);
				//存储已选择
				/**
				 * 修复选择规格存储错误
				 * 将这几行代码替换即可
				 * 选择的规格存放在specSelected中
				 */
				this.specSelected = [];
				list.forEach(item => {
					if (item.selected === true) {
						this.specSelected.push(item);
					}
				})
			},
			//生成小程序二维码
			getQrcode() {
				console.log('sssssss-------------', this.id + "&" + this.yddMember.inviterCode + "&" + uni.getStorageSync(`companyId`) + "&" + uni.getStorageSync(
							`cheapPurchaseCompanyId`) + "&" + uni.getStorageSync(`classification`));
				let data = {
					data: JSON.stringify({
						page: "pages/product/product",
						scene: this.id + "&" + this.yddMember.inviterCode + "&" + uni.getStorageSync(`companyId`) + "&" + uni.getStorageSync(
							`cheapPurchaseCompanyId`) + "&" + uni.getStorageSync(`classification`),
					})
				}
				this.$getJson('/api/v2/vue/stPlusShop/common/getQrcode.jsp', data, 'POST', res => {
					console.log('----list------------', res);
					if (res.data) {
						this.qrcodePaths = []
						this.qrcodePaths[0] = this.url + res.data
						//如果正式发布请删除
						// this.qrcodePaths[0] ='../../static/logo.jpg'
					}
				});
			},
			//点击查看大图病可以保存
			saveQrcode(e) {
				let _this = this
				if (e == 1) {
					_this.qrcodePaths = []
					this.productInfo.resources.smallBannerImgArr.forEach(item => {
						_this.qrcodePaths.push(_this.url + item)
					})
				} else if (e == 2) {
					_this.qrcodePaths = []
					this.productInfo.resources.imgArr.forEach(item => {
						_this.qrcodePaths.push(_this.url + item)
					})
				}
				uni.authorize({
					scope: 'scope.writePhotosAlbum',
					success() {
						//查看保存小程序二维码
					},
				})
				uni.previewImage({
					urls: this.qrcodePaths,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log("errerrerr", err);
						},
						complete: function(e) {
							console.log("eeee", e)
						}
					}
				});
			},
			//收藏
			toFavorite() {
				if (!uni.getStorageSync(`mobile`)) {
					this.login()
					//弹出登录
					this.$refs.popup.open()
					//防止点击遮罩关闭
					this.$refs.popup.clickClose(true)
					return
				}
				this.favorite = !this.favorite;
				let isCollection = 0,
					message = "";
				if (this.favorite == true) {
					isCollection = 1
					message = "收藏成功"
				} else {
					isCollection = 0
					message = "取消收藏成功"
				}
				let data = {
					data: JSON.stringify({
						id: this.id,
						memberId: uni.getStorageSync("userInfo").id,
						isCollection: isCollection
					})
				}
				this.$getJson('/api/v2/vue/findingSomeone/do/doCollectResource.jsp', data, 'POST', res => {
					console.log('----res------------', res);
					if (res.data == 1) {
						uni.showToast({
							title: message,
							icon: 'none'
						})
					} else {
						uni.showToast({
							title: res.message,
							icon: 'none'
						})
					}
				});
			},
			//设置按钮action
			setOptionType(type){
				if(true){
					this.optionType=type
					this.toggleSpec()
				}else{
					if(type=='buy'){
						this.buy()
					}else if(type=='cart'){
						this.addCart()
					}
				}
			},
			//完成属性选择
			propComplete(){
				this.toggleSpec()
				if(this.optionType=='buy'){
					this.buy()
				}else if(this.optionType=='cart'){
					this.addCart()
				}
			},
			//购买
			buy() {
				if (!uni.getStorageSync(`mobile`)) {
					this.login()
					//弹出登录
					this.$refs.popup.open()
					//防止点击遮罩关闭
					this.$refs.popup.clickClose(true)
					return
				}
				let goodsData = [];
				let resource = {
					samllCoverImg: this.productInfo.resources.samllCoverImg,
					name: this.productInfo.resources.name
				}
				goodsData.push({
					goods: this.productInfo.goods,
					resource: resource,
					number: 1
				})
				
				uni.navigateTo({
					url: `/pages/home/order/createOrder?data=${JSON.stringify({
						goodsData: goodsData,type:1,
					inviteCode:this.inviteCode,
					cheapPurchaseCompanyId:uni.getStorageSync('cheapPurchaseCompanyId')
					})}`
				})
			},
			//加入购物车
			addCart() {
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
						goodsId: this.productInfo.goods.id,
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
			stopPrevent() {},
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
				this.loadData()
				this.getCarts()
			},
		}

	}
</script>

<style lang='scss'>
	page {
		background: $page-color-base;
		padding-bottom: 160upx;
	}

	.icon-you {
		font-size: $font-base + 2upx;
		color: #888;
	}

	.carousel {
		height: 722upx;
		position: relative;

		swiper {
			height: 100%;
		}

		.image-wrapper {
			width: 100%;
			height: 100%;
		}

		.swiper-item {
			display: flex;
			justify-content: center;
			align-content: center;
			height: 750upx;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}

	/* 标题简介 */
	.introduce-section {
		background: #fff;
		padding: 20upx 30upx;

		.title {
			font-size: $font-lg +4upx;
			color: $font-color-dark;
			height: 50upx;
			line-height: 50upx;
		}
		.price-store{
			display: flex;
			.price-box {
				display: flex;
				align-items: baseline;
				height: 64upx;
				padding: 10upx 0;
				font-size: 26upx;
				color: #ea6143;
				font-weight: bold;
				font-family: Arial;
				flex: 1;
			}
			
			.price {
				font-size: $font-lg + 6upx;
			}
			.store-box{
				flex: 1;
				display: flex;
				text-align: right;
				align-items: center;
				flex-direction:row-reverse;
				.box{
					display: flex;
					height:30upx;
					padding: 0 6upx;
					line-height: 30upx;
					border:1upx solid rgba(128,128,128,1);
					border-radius:16upx;
					font-size: 17upx;
					color: #808080;
					.pass{
						margin-right: 4upx;
						.num{
							color: #333;		
						}
					}
					.leve{
						.num{
							color: #FF474C;
						}
					}
				}
			}
			
			
		}
		.m-price {
			margin: 0 12upx;
			color: $font-color-light;
			text-decoration: line-through;
			font-weight: normal;
		}

		.coupon-tip {
			align-items: center;
			padding: 4upx 10upx;
			background: $uni-color-primary;
			font-size: $font-sm;
			color: #fff;
			border-radius: 6upx;
			line-height: 1;
			transform: translateY(-4upx);
		}

		.bot-row {
			display: flex;
			align-items: center;
			height: 50upx;
			font-size: $font-sm;
			color: $font-color-light;

			text {
				flex: 1;
			}
		}
	}

	/* 分享 */
	.share-section {
		display: flex;
		align-items: center;
		color: $font-color-base;
		background: linear-gradient(left, #e7f3ff, #c8e2fe);
		padding: 12upx 30upx;

		.share-icon {
			display: flex;
			align-items: center;
			width: 70upx;
			height: 30upx;
			line-height: 1;
			border: 1px solid $uni-color-primary;
			border-radius: 4upx;
			position: relative;
			overflow: hidden;
			font-size: 22upx;
			color: $uni-color-primary;

			&:after {
				content: '';
				width: 50upx;
				height: 50upx;
				border-radius: 50%;
				left: -20upx;
				top: -12upx;
				position: absolute;
				background: $uni-color-primary;
			}
		}

		.icon-xingxing {
			position: relative;
			z-index: 1;
			font-size: 24upx;
			margin-left: 2upx;
			margin-right: 10upx;
			color: #fff;
			line-height: 1;
		}

		.tit {
			font-size: $font-base;
			margin-left: 10upx;
		}

		.icon-bangzhu1 {
			padding: 10upx;
			font-size: 30upx;
			line-height: 1;
		}

		.share-btn {
			flex: 1;
			text-align: right;
			font-size: $font-sm;
			color: $uni-color-primary;
		}

		.icon-you {
			font-size: $font-sm;
			margin-left: 4upx;
			color: $uni-color-primary;
		}
	}

	.c-list {
		font-size: $font-sm + 2upx;
		color: $font-color-base;
		background: #fff;

		.c-row {
			display: flex;
			align-items: center;
			padding: 20upx 30upx;
			position: relative;
		}

		.tit {
			width: 140upx;
		}

		.con {
			flex: 1;
			color: $font-color-dark;

			.selected-text {
				margin-right: 10upx;
			}
		}

		.bz-list {
			height: 40upx;
			font-size: $font-sm+2upx;
			color: $font-color-dark;

			text {
				display: inline-block;
				margin-right: 30upx;
			}
		}

		.con-list {
			flex: 1;
			display: flex;
			flex-direction: column;
			color: $font-color-dark;
			line-height: 40upx;
		}

		.red {
			color: $uni-color-primary;
		}
	}

	/* 评价 */
	.eva-section {
		display: flex;
		flex-direction: column;
		padding: 20upx 30upx;
		background: #fff;
		margin-top: 16upx;

		.e-header {
			display: flex;
			align-items: center;
			height: 70upx;
			font-size: $font-sm + 2upx;
			color: $font-color-light;

			.tit {
				font-size: $font-base + 2upx;
				color: $font-color-dark;
				margin-right: 4upx;
			}

			.tip {
				flex: 1;
				text-align: right;
			}

			.icon-you {
				margin-left: 10upx;
			}
		}
	}

	.eva-box {
		display: flex;
		padding: 20upx 0;

		.portrait {
			flex-shrink: 0;
			width: 80upx;
			height: 80upx;
			border-radius: 100px;
		}

		.right {
			flex: 1;
			display: flex;
			flex-direction: column;
			font-size: $font-base;
			color: $font-color-base;
			padding-left: 26upx;

			.con {
				font-size: $font-base;
				color: $font-color-dark;
				padding: 20upx 0;
			}

			.bot {
				display: flex;
				justify-content: space-between;
				font-size: $font-sm;
				color: $font-color-light;
			}
		}
	}

	/*  详情 */
	.detail-desc {
		background: #fff;
		margin-top: 16upx;

		.d-header {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80upx;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			position: relative;

			text {
				padding: 0 20upx;
				background: #fff;
				position: relative;
				z-index: 1;
			}

			&:after {
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translateX(-50%);
				width: 300upx;
				height: 0;
				content: '';
				border-bottom: 1px solid #ccc;
			}
		}
	}

	/* 规格选择弹窗 */
	.attr-content {
		padding: 10upx 30upx;

		.a-t {
			display: flex;

			image {
				width: 170upx;
				height: 170upx;
				flex-shrink: 0;
				margin-top: -40upx;
				border-radius: 8upx;
				;
			}

			.right {
				display: flex;
				flex-direction: column;
				padding-left: 24upx;
				font-size: $font-sm + 2upx;
				color: $font-color-base;
				line-height: 42upx;

				.price {
					font-size: $font-lg;
					color: $uni-color-primary;
					margin-bottom: 10upx;
				}

				.selected-text {
					margin-right: 10upx;
				}
			}
		}

		.attr-list {
			display: flex;
			flex-direction: column;
			font-size: $font-base + 2upx;
			color: $font-color-base;
			padding-top: 30upx;
			padding-left: 10upx;
		}

		.item-list {
			padding: 20upx 0 0;
			display: flex;
			flex-wrap: wrap;

			text {
				display: flex;
				align-items: center;
				justify-content: center;
				background: #eee;
				margin-right: 20upx;
				margin-bottom: 20upx;
				border-radius: 100upx;
				min-width: 60upx;
				height: 60upx;
				padding: 0 20upx;
				font-size: $font-base;
				color: $font-color-dark;
			}

			.selected {
				background: #fbebee;
				color: $uni-color-primary;
			}
		}
	}

	/*  弹出层 */
	.popup {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 99;

		&.show {
			display: block;

			.mask {
				animation: showPopup 0.2s linear both;
			}

			.layer {
				animation: showLayer 0.2s linear both;
			}
		}

		&.hide {
			.mask {
				animation: hidePopup 0.2s linear both;
			}

			.layer {
				animation: hideLayer 0.2s linear both;
			}
		}

		&.none {
			display: none;
		}

		.mask {
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			background-color: rgba(0, 0, 0, 0.4);
		}

		.layer {
			position: fixed;
			z-index: 99;
			bottom: 0;
			width: 100%;
			min-height: 40vh;
			border-radius: 10upx 10upx 0 0;
			background-color: #fff;

			.btn {
				height: 66upx;
				line-height: 66upx;
				border-radius: 100upx;
				background: $uni-color-primary;
				font-size: $font-base + 2upx;
				color: #fff;
				margin: 30upx auto 20upx;
			}
		}

		@keyframes showPopup {
			0% {
				opacity: 0;
			}

			100% {
				opacity: 1;
			}
		}

		@keyframes hidePopup {
			0% {
				opacity: 1;
			}

			100% {
				opacity: 0;
			}
		}

		@keyframes showLayer {
			0% {
				transform: translateY(120%);
			}

			100% {
				transform: translateY(0%);
			}
		}

		@keyframes hideLayer {
			0% {
				transform: translateY(0);
			}

			100% {
				transform: translateY(120%);
			}
		}
	}

	/* 底部操作菜单 */
	.page-bottom {
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 95;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100upx;
		background: #fff;
		box-shadow: 0 0 20upx 0 rgba(0, 0, 0, .5);

		.p-b-btn {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size: $font-sm;
			color: $font-color-base;
			width: 96upx;
			height: 80upx;

			.yticon {
				font-size: 40upx;
				line-height: 48upx;
				color: $font-color-light;
			}

			&.active,
			&.active .yticon {
				color: $uni-color-primary;
			}

			.icon-fenxiang2 {
				font-size: 42upx;
				transform: translateY(-2upx);
			}

			.icon-shoucang {
				font-size: 46upx;
			}
		}

		.action-btn-group {
			display: flex;
			height: 76upx;
			border-radius: 100px;
			overflow: hidden;
			background: #004da0;
			margin-left: 20upx;
			position: relative;

			&:after {
				content: '';
				position: absolute;
				top: 50%;
				right: 50%;
				transform: translateY(-50%);
				height: 28upx;
				width: 0;
				/* border-right: 1px solid rgba(255, 255, 255, .5); */
			}

			.action-btn {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 180upx;
				height: 100%;
				font-size: $font-base;
				padding: 0;
				border-radius: 0;
				background: transparent;
				&.buy-now-btn{
					background-color: #FF474C;
				}
				&.add-cart-btn{
					background:linear-gradient(90deg,rgba(255,227,120,1),rgba(255,179,20,1));
				}
			}
		}
	}

	/*弹出层*/
	.sharelayer {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		bottom: 0;
		z-index: 900
	}

	.sharelayer .layerBg {
		background: rgba(0, 0, 0, 0.6);
		width: 100%;
		height: 100%
	}

	.sharelayer .layerCon {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background: #fff;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}

	.layerShare {
		width: 100%;
		display: block;
		overflow: hidden;
	}

	.layerShareCon {
		width: 50%;
		float: left;
		text-align: center;
		padding: 7% 0;
		background: none;
		height: inherit !important;
		line-height: inherit !important;
	}

	.layerShareCon:after {
		display: none;
	}

	.layerShareCon image {
		width: 100upx;
		display: inline-block;
		margin-bottom: 10upx
	}

	.layerShareCon .name {
		font-size: 26upx;
		color: #999
	}

	.layerShareBtn {
		width: 100%;
		display: block;
		background: #fff;
		height: inherit !important;
		line-height: inherit !important;
		border-top: 1px solid #f5f5f5;
		line-height: initial;
		padding: 28upx 0;
		font-size: 32upx;
		color: #666
	}

	.layerShareBtn::after {
		display: none
	}

	.layerPoster {
		position: fixed;
		top: 50%;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
		left: 6%;
		width: 88%;
		background: #fff;
		border-radius: 10px;
		overflow: hidden;
	}

	.posterTop {
		position: relative;
		width: 100%;
		display: block;
		overflow: hidden;
	}

	.posterTop image {
		display: block;
		width: 100%;
	}

	.posterTop .content {
		display: flex;
		align-items: center;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		width: 100%;
		padding: 0 40rpx;
	}

	.posterTop .content .headImg {
		width: 100rpx;
		height: 100rpx;
		border-radius: 100%;
		overflow: hidden;
		border: 1px solid #fff;
		margin-right: 30rpx;
	}

	.posterTop .content .title {
		color: #fff;
		font-size: 32rpx;
	}

	.posterBottom {
		padding: 60rpx 40rpx;
		display: flex;
		align-items: center;
	}

	.posterBottom .leftCon {
		width: 65%;
	}

	.posterBottom .rightCon {
		width: 30%;
		margin-left: 5%;
	}

	.posterBottom .rightCon image {
		width: 100%;
	}

	.posterBottom .leftCon .title {
		font-size: 30rpx;
		line-height: 1.5;
		margin-bottom: 20rpx;
	}

	.posterBottom .leftCon .label {
		font-size: 26rpx;
		color: #999;
	}

	.posterTop .posterClose {
		position: absolute;
		right: 30upx;
		top: 30upx;
		width: 35upx;
		z-index: 10;
	}

	.productCare {
		width: 100upx;
		height: 100upx;
		background: #FF474C;
		border-radius: 100%;
		position: fixed;
		bottom: 15%;
		right: 4%;
		box-shadow: 0px 0px 5px #999;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 40upx;
	}

	.productCare .icon-gouwuche {
		font-size: 44upx;
		color: #999;
	}

	.productCare .number {
		position: absolute;
		height: 36upx;
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 36upx;
		padding: 0 10upx;
		top: 0;
		left: 60upx;
		font-size: 24upx;
		color: #fff;
		background: #ff0000;
		border-radius: 50px;
	}
</style>
