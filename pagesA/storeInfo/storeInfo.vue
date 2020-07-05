<template>
	<view>
		<view class="formList mainBottom" style="margin-top:20upx;">
			<view class="formListCon">
				<view class="name">企业名称：</view>
				<view class="right"><input name="form.name" v-model="form.name" type="text" placeholder="" placeholder-class="placeholder"
					 class="inInput"></view>
			</view>
			<view class="formListCon">
				<view class="name">开户银行：</view>
				<view class="right"><input name="form.withdrawalsBank:" v-model="form.withdrawalsBank" type="text" placeholder=""
					 placeholder-class="placeholder" class="inInput"></view>
			</view>
			<view class="formListCon">
				<view class="name">开户行账号：</view>
				<view class="right"><input name="form.name" v-model="form.withdrawalsAccount" type="number" placeholder=""
					 placeholder-class="placeholder" class="inInput"></view>
			</view>
			<view class="formListCon">
				<view class="name">微信注册手机号：</view>
				<view class="right"><input name="form.name" v-model="form.wxMobile" type="number" placeholder="" placeholder-class="placeholder"
					 class="inInput"></view>
			</view>
			<view class="formListCon">
				<view class="name">微信实名认证姓名：</view>
				<view class="right"><input name="form.name" v-model="form.wxAuthName" type="text" placeholder="" placeholder-class="placeholder"
					 class="inInput"></view>
			</view>
			<!-- 	<view class="formListCon">
				<view class="name">地址：</view>
				<view class="right"><input name="form.name" v-model="form.name" type="text" placeholder="" placeholder-class="placeholder"
					 class="inInput"></view>
			</view> -->
			<view class="row b-b" @tap="chooseAddres">
				<text class="tit">公司地址：</text>
				<view class="li-c">
					<view class="input" v-if="address||addressName">
						<view class="address-name ellipsis">{{addressName}}</view>
						<view class="address ellipsis"> {{address}}</view>
					</view>
					<view class="input a" v-if="!address">
						<view class="placeholder">点击选择</view>
					</view>

				</view>
				<text class="yticon icon-you"></text>
			</view>

			<view class="formListCon">
				<view class="name">行业分类：</view>
				<view class="right">
					<industry v-on:onChange="handleIndustryChange">
						<view v-if="!industryEntity" class="choice">请选择行业<text class="cell-more yticon icon-you"></text></view>
						<view v-if="industryEntity" class="choiced">{{industryEntity.name}}</view>
					</industry>
				</view>
			</view>
			<view class="sku">
				<view class="header">
					<view class="title">
						营业执照：
					</view>
				</view>
				<view class="content">
					<upload-images ref='license' length="1">
					</upload-images>
				</view>
			</view>
			<view class="sku">
				<view class="header">
					<view class="title">
						资质证书：
					</view>
				</view>
				<view class="content">
					<upload-images ref='certificate' length="6">
					</upload-images>
				</view>
			</view>
			<view class="sku">
				<view class="header">
					<view class="title">
						企业LOGO：
					</view>
				</view>
				<view class="content">
					<upload-images ref='logoPath' length="1">
					</upload-images>
				</view>
			</view>
			<view class="sku">
				<view class="header">
					<view class="title">
						店铺分享图：
					</view>
				</view>
				<view class="content">
					<upload-images ref='introduceImg' length="1">
					</upload-images>
				</view>
			</view>
			<view class="sku">
				<view class="header">
					<view class="title">
						店铺介绍banner图：
					</view>
				</view>
				<view class="content">
					<upload-images ref='descImgs' length="1">
					</upload-images>
				</view>
			</view>
			<view class="formListCon">
				<view class="name">店铺客服电话：</view>
				<view class="right"><input name="form.name" v-model="form.serviceNo" type="text" placeholder="" placeholder-class="placeholder"
					 class="inInput"></view>
			</view>
			<view class="sku">
				<view class="header">
					<view class="title">
						店铺详情介绍：
					</view>
				</view>
				<view class="content">
					<uni-editor ref="desc"></uni-editor>
				</view>
			</view>

		</view>

		<!-- 销售提成比例	 -->
		<uni-popup ref='popOne' type="bottom">
			<view class="bottom-pop">
				<view class="bar">
					<view class="left">
						<view class="btn">
							取消
						</view>
					</view>
					<view class="right">
						<view class="btn">
							确定
						</view>
					</view>
				</view>
				<view class="content">
					<view class="title">
						设置销售提成比例
					</view>
					<view class="bp">
						<view :class="['radio',isExplosive==0&&'active']" @tap="changeisExplosive(0)" class="radio">
							<view class="circle"></view> 统一提成比例
						</view>
						<view :class="['radio',isExplosive==1&&'active']" @tap="changeisExplosive(1)" class="radio">
							<view class="circle"></view>按商品设置提成比例
						</view>
					</view>
					<view class="roleItem">
						<view class="label">店铺商品</view>
						<input class="input" type='number'></input>
						<view class="unit">%</view>
						<view class="dis">(自主设定)</view>
					</view>
					<view class="roleItem">
						<view class="label">商圈券</view>
						<input class="input" type='number'></input>
						<view class="unit">%</view>
						<view class="dis">(0≤奖励≤5%)</view>
					</view>
					<view class="roleItem">
						<view class="label">聚划算商品</view>
						<input class="input" type='number'></input>
						<view class="unit">%</view>
						<view class="dis">(0≤奖励≤5%)</view>
					</view>

				</view>



			</view>



		</uni-popup>

		<!-- 分销 -->
		<uni-popup ref='popTwo'></uni-popup>

		<cover-view class="footBtn buttonFixed" v-if="showTextarea">
			<button @click="submit" class="buttonBigWidth">保存</button>
		</cover-view>
		<mpvue-picker ref="mpvuePicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
		 :themeColor="themeColor" @onConfirm="onConfirm" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
		<!-- mode 类型 单行拉或者多列拉或则地点拉 -->
		<!-- pickerValueArray -->
	</view>
</template>

<script>
	import mpvuePicker from '@/components/mpvue-picker/mpvuePicker.vue';
	import uploadImages from '@/components/upload-images.vue';
	import {
		dealRich,
		unDealRich
	} from '@/common/common'
	import uniEditor from '@/components/uni-editor/uni-editor.vue';
	import uniPop from '@/components/uni-popup/uni-popup.vue'
	import industry from '@/components/industry.vue'
	import {
		uploadImg
	} from "@/common/util.js"
	const cityData = {}
	export default {
		components: {
			mpvuePicker,
			uploadImages,
			uniEditor,
			industry,
			uniPop
		},
		data() {
			return {
				ctx: this.$ctx,
				mode: 'selector',
				deepLength: 3, // 几级联动
				pickerValueDefault: [0, 0, 0], // 初始化值
				pickerValueValue: ["210000", "210400", "210411"],
				pickerValueArray: cityData, // picker 数组值
				pickerCity: '请选择所在城市',
				themeColor: '', // 颜色主题
				pickerArray: cityData,
				ids: [],
				arr: [],
				form: {},
				//声明
				showTextarea: true,
				hideTextarea: false,
				posterImg: [],
				industryEntity: null,
				address: '',
				addressName: '',
				addressObj: {}
			}
		},
		onLoad(e) {
			const $this = this
			this.$getJson('/api/v2/vue/sqPlus/company/companyInfo.jsp', {
				data: JSON.stringify({
					companyId: e.companyId || 202
				})
			}, 'POST', res => {
				console.log('企业信息==>', res.data.cjCompany);
				this.form = res.data.cjCompany;
				this.$getJson('/jsp/api/resources/ajaxGetIndustry.jsp', {}, 'POST', result => {
					result.data.industry.forEach((item) => {
						if (item.id == res.data.cjCompany.industryId) {
							$this.industryEntity = item
						}
					})
				})
				console.log('企业信息==>2', res);

				//回显数据
				this.$refs.desc.editorCtx.setContents({
					html: dealRich(res.data.cjCompany.desc)
				})
				 uni.pageScrollTo({            
				      scrollTop: 0,         
				      duration: 0              
				    }) 

				const licenseArr = res.data.cjCompany.license ? res.data.cjCompany.license.split(',') : [];
				const certificateArr = res.data.cjCompany.certificate ? res.data.cjCompany.certificate.split(',') : [];
				const logoPathArr = res.data.cjCompany.logoPath ? res.data.cjCompany.logoPath.split(',') : [];
				const introduceImgArr = res.data.cjCompany.introduceImg ? res.data.cjCompany.introduceImg.split(',') : [];
				const descImgsArr = res.data.cjCompany.descImgs ? res.data.cjCompany.descImgs.split(',') : [];


				// let lArr=[] 
				licenseArr.forEach((item) => {
					console.log(item)
					this.$refs.license.imageList.push({
						src: item,
						filePath: this.ctx + item
					})
				})

				certificateArr.forEach((item) => {
					console.log(item)
					this.$refs.certificate.imageList.push({
						src: item,
						filePath: this.ctx + item
					})
				})

				logoPathArr.forEach((item) => {
					console.log(item)
					this.$refs.logoPath.imageList.push({
						src: item,
						filePath: this.ctx + item
					})
				})

				introduceImgArr.forEach((item) => {
					console.log(item)
					this.$refs.introduceImg.imageList.push({
						src: item,
						filePath: this.ctx + item
					})
				})

				descImgsArr.forEach((item) => {
					console.log(item)
					this.$refs.descImgs.imageList.push({
						src: item,
						filePath: this.ctx + item
					})
				})

				if (this.form.posterImgArr == null) {
					this.posterImg = []
				} else {
					this.form.posterImgArr.forEach((img, index) => {
						if (img != "") {
							this.posterImg.push(img)
						}
					})
				}
				if (this.form.name == "企业名称待编辑") {
					this.form.name = ""
				}
				this.form['companyId'] = this.form['id'];
				this.form['job'] = res.data.job;
				if (res.data.industryIds) {
					this.ids = res.data.industryIds.split(',').map(Number);
				}
				delete this.form.cjUser
			})
		},
		methods: {
			//打开弹窗
			openOne() {
				this.$refs.popOne.open()
			},
			handleIndustryChange(industryEntity) {
				this.industryEntity = industryEntity
			},
			submit(e) {

				this.form.provinceId = this.provinceId||this.form.provinceId;
				this.form.cityId = this.cityId||this.form.cityId ;
				this.form.countyId = this.countyId||this.form.countyId;
				this.form.lng=this.lng;
				this.form.lat=this.lat;
				this.form.type=1;
				this.form.level=1;
				this.form.address =this.provinceId?(this.address + this.addressName).replace(this.addressObj.province + this.addressObj.city +
					this.addressObj.district, ''):this.form.address;
				// const licenseArr=res.data.cjCompany.license?res.data.cjCompany.license.split(','):[];
				// const certificateArr=res.data.cjCompany.certificate?res.data.cjCompany.certificate.split(','):[];
				// const logoPathArr=res.data.cjCompany.logoPath?res.data.cjCompany.logoPath.split(','):[];
				// const introduceImgArr=res.data.cjCompany.introduceImg?res.data.cjCompany.introduceImg.split(','):[];
				// const descImgsArr=res.data.cjCompany.descImgs?res.data.cjCompany.descImgs.split(','):[];
				let desc;
				this.$refs.desc.editorCtx.getContents({
					success: (res) => {
						console.log(res, this)
						desc = res.html;
						this.form.license = this.$refs.license.imageList.map((item) => item.src).join(',')
						this.form.certificate = this.$refs.certificate.imageList.map((item) => item.src).join(',')
						this.form.logoPath = this.$refs.logoPath.imageList.map((item) => item.src).join(',')
						this.form.introduceImg = this.$refs.introduceImg.imageList.map((item) => item.src).join(',')
						this.form.descImgs = this.$refs.descImgs.imageList.map((item) => item.src).join(',')
						this.form.desc = unDealRich(desc)
						console.log('表单', this.form);
						// return
						// this.form.posterImg = this.posterImg;
						this.$getJson('/api/v2/vue/sqPlus/company/editCompanyInfo.jsp', {
							// data: JSON.stringify(
								...this.form
							// )
						}, 'POST', res => {
							uni.showToast({
								title: "保存成功",
								duration: 1000,
								success() {
									setTimeout(function() {
										//要延时执行的代码
										uni.navigateBack({})
									}, 1000)
								}
							})
						})
					}
				})

			},
			onCancel(e) {
				//确认后恢复原样
				this.showTextarea = !this.showTextarea;
				this.hideTextarea = !this.hideTextarea;
			},
			onChange(e) {
				console.log(e);
			},
			addReturn() {
				uni.navigateBack({

				})
			},
			chooseAddres() {
				const $this = this
				wx.getSetting({
					success(res) {
						console.log(res)
						if (!res.authSetting['scope.userLocation']) {
							wx.authorize({
								scope: 'scope.userLocation',
								success() {
									// 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
									wx.chooseLocation({
										success(res) {
											$this.addressName = res.name;
											$this.address = res.address;
											$this.lat = res.latitude;
											$this.lng = res.longitude
											$this.transformLocation({
												latitude: res.latitude,
												longitude: res.longitude
											})
										}
									})
								},
								fail() {
									wx.openSetting({
										success: (res) => {}
									})
								}
							})
						} else {
							// 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
							wx.chooseLocation({
								success(res) {
									console.log(res)
									$this.addressName = res.name;
									$this.address = res.address;
									$this.lat = res.latitude;
									$this.lng = res.longitude
									$this.transformLocation({
										latitude: res.latitude,
										longitude: res.longitude
									})
								}
							})
						}
					}
				})
			},
			transformLocation(location) {
				const $this = this
				this.$qqmapsdk.reverseGeocoder({
					location: location,
					success: function(res) { //成功后的回调
						$this.provinceId = res.result.ad_info.adcode.slice(0, 2) + "0000";
						$this.cityId = res.result.ad_info.adcode.slice(0, 4) + "00";
						$this.countyId = res.result.ad_info.adcode;
						$this.addressObj = {
							city: res.result.address_component.city,
							district: res.result.address_component.district,
							nation: res.result.address_component.nation,
							province: res.result.address_component.province
						}
					},
					fail: function(error) {
						console.error(error);
					},
					complete: function(res) {
						console.log(res);
					}
				})

			},
		}
	};
</script>
<style lang="scss">
	// .apply{
	// padding-bottom: 100upx;
	.type {
		padding: 50upx 20upx;

		.title {
			font-size: 28upx;
			color: #5c5c5c;
		}

		border-bottom: 1upx solid #f5f5f5;
	}

	//单选样式
	.radio {
		display: flex;
		align-items: baseline;
		margin-top: 4upx;
		font-size: 26upx;
		color: #151515;
		font-weight: 500;
		float: left;

		.circle {
			width: 25upx;
			height: 25upx;
			border-radius: 50%;
			border: 1upx solid #FF474D;
			margin-right: 10upx;
			position: relative;
			top: 2upx
		}

		&.active {
			.circle {
				background-color: #FF474D;
			}
		}
	}

	.sku {
		font-size: 28upx;
		padding: 30upx 0;

		.header {
			display: flex;
			padding: 0 20upx;
			justify-content: space-between;

			.btn {
				color: #FF474D;
			}
		}

		.content {
			padding: 20upx;
		}

		.spec-item {
			display: flex;
			padding: 20upx 20upx 0 20upx;
			font-size: 25upx;

			.left {
				flex: 1;
			}

			.right {
				flex: 1;
				display: flex;
				justify-content: space-between;

				.icons {
					.icon {
						display: inline-block;
						width: 28upx;
						height: 28upx;

						&.del {
							margin-left: 20upx;
						}
					}
				}
			}
		}
	}

	// }
	.choice {
		color: #d1d1d1;
		font-size: 28upx;
		height: 54upx;
		display: flex;
		align-items: center;
	}

	.choiced {
		font-size: 28upx;
		height: 54upx;
		display: flex;
		align-items: center;
	}

	.row {
		display: flex;
		align-items: center;
		position: relative;
		padding: 0 20upx;
		height: 110upx;
		background: #fff;

		.tit {
			flex-shrink: 0;
			width: 140upx;
			font-size: 28upx;
			color: $font-color-dark;
		}

		.li-c {
			flex: 1;
			display: flex;
		}

		.input {
			flex: 1;
			width: 0;
			font-size: 30upx;
			color: $font-color-dark;
			text-align: right;

			.address-name {
				font-size: 32upx;
				color: #222;
			}

			.address {
				font-size: 28upx;
				color: #999;
			}
		}

		.icon-shouhuodizhi {
			font-size: 36upx;
			color: $font-color-light;
		}
	}

	.bottomFixed {
		position: fixed;
		z-index: 100;
		bottom: 0;
		left: 0;
		height: 110upx;
		width: 100%;
		background-color: #fff;
		box-shadow: 0px 2px 19px 1px rgba(97, 97, 97, 0.13);
		padding: 10upx 55upx;

		.btn {
			width: 640upx;
			height: 90upx;
			color: #fff;
			background-color: #FF474D;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	.bottom-pop {
		background-color: #fff;

		.bar {
			height: 97upx;
			display: flex;
			align-items: center;
			border-bottom: 1upx solid #eee;

			.left {
				flex: 1;
				text-align: left;

				.btn {
					font-size: 28upx;
					color: #535353;
					padding: 8upx 20upx;
				}
			}

			.right {
				flex: 1;
				text-align: right;

				.btn {
					font-size: 28upx;
					color: #FF474C;
					padding: 8upx 20upx;
				}
			}
		}

		.content {
			margin: 30upx 15upx;
			width: 720upx;
			height: 400upx;

			.bp {
				padding: 40upx 30upx;
				display: block;
				height: 80upx;
			}

			.title {
				width: 723upx;
				height: 58upx;
				background: #eee;
				font-size: 31upx;
				display: flex;
				align-items: center;
				padding: 0 20upx;
			}

			.roleItem {
				padding: 0 30upx;
				display: flex;
				align-items: center;
				margin-top: 30upx;

				.label {
					font-size: 26upx;
					color: #151515;
					width: 200upx;
					font-weight: 500;
				}

				.input {
					width: 92upx;
					height: 44upx;
					border: 1upx solid #ddd;

				}

				.unit {
					margin-left: 10upx;
					font-size: 26upx;
					color: #151515;
				}

				.dis {
					font-size: 26upx;
					color: #151515;

					flex: 1;
					padding-left: 60upx;
				}
			}
		}

	}

	.sku .content {
		padding: 0;
	}
</style>
