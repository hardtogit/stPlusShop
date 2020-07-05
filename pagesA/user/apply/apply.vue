<style lang="scss">
	.apply{
	 padding-bottom: 100upx;
	 .type{
		 padding: 50upx 20upx;
		 .title{
			 font-size: 28upx;
			 color: #5c5c5c;
		 }
		 border-bottom: 1upx solid #f5f5f5;
	 }
	 //单选样式
	 .radio{
	 	display: flex;
	 	align-items: baseline;
		margin-top: 4upx;
	 	font-size: 24upx;
		margin-top: 40upx;
	 	color: #808080;
	 	.circle{
	 		width: 25upx;
	 		height: 25upx;
	 		border-radius: 50%;
	 		border: 1upx solid #FF474D;
	 		margin-right: 10upx;
			position: relative;
			top:2upx
	 	} 
	 	&.active{
	 		.circle{
	 			background-color: #FF474D;
	 		}
	 	}
	 }
	 .sku{
	 	font-size: 28upx;
	 	padding: 30upx 0;
	 	.header{
	 		display: flex;
	 		padding: 0 20upx;
	 		justify-content: space-between;
	 		.btn{
	 			color: #FF474D;
	 		}
	 	} 
	 	.content{
	 		padding:20upx;
	 	}
	 	.spec-item{
	 		display: flex;
	 		padding: 20upx 20upx 0 20upx;
	 		font-size: 25upx;
	 		.left{
	 			flex: 1;
	 		}
	 		.right{
	 			flex: 1;
	 			display: flex;
	 			justify-content: space-between;
	 			.icons{
	 				.icon{
	 					display: inline-block;
	 					width: 28upx;
	 					height: 28upx;
	 					&.del{
	 						margin-left: 20upx;
	 					}
	 				}
	 			}
	 		}
	 	}
	 }
 }
 .choice{
	 color: #d1d1d1;
	 font-size: 28upx;
	 height: 54upx;
	 display: flex;
	 align-items: center;
 }
 .choiced{
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
    .li-c{
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
 .bottomFixed{
    position: fixed;
	z-index: 100;
    bottom: 0;
    left: 0;
    height: 110upx;
    width: 100%;
    background-color: #fff;
    box-shadow:0px 2px 19px 1px rgba(97,97,97,0.13);
    padding: 10upx 55upx;
    .btn{
 	   width: 640upx;
 	   height: 90upx;
 	   color: #fff;
 	   background-color: #FF474D;
 	   display: flex;
 	   align-items: center;
 	   justify-content: center;
    }
 }
</style>
<template>
	<view class="apply">
		<view class="type">
			<view class="title">
				选择开通商圈店铺的类型:
			</view>
			<view :class="['radio',type==1&&'active']" @tap="changeType(1)" class="radio">
				<view class="circle"></view>商圈店铺（普通线下商铺、门店）
			</view>
			<view :class="['radio',type==2&&'active']" @tap="changeType(2)" class="radio">
				<view class="circle"></view> 商圈巨划算平台供应商（仅限高科技产品、特色产品的生产厂商或经销商）
			</view>
			<view :class="['radio',type==3&&'active']" @tap="changeType(3)" class="radio">
				<view class="circle"></view> 行业性商圈平台（限垂直行业领域内的集团型、连锁型机构）
			</view>
		</view>
		<view class="formListCon">
			<view class="name">公司名称：</view>
			<view class="right"><input v-model='companyName' type="text" class="inInput" name="price" maxlength="10" /></view>
		</view>
		<view class="formListCon">
			<view class="name">店长姓名：</view>
			<view class="right"><input v-model='name' type="text" class="inInput" name="price" maxlength="10" /></view>
		</view>
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
				<upload-images ref='certificate' length="1">
				</upload-images>
			</view>
		</view>
		<view class="bottomFixed">
			<view class="btn" @click="submit">
				确定
			</view>
		</view>
	</view>

</template>

<script>
	import uploadImages from '@/components/upload-images'
	import industry from '@/components/industry.vue'
	export default {
		components: {
			uploadImages,
			industry
		},
		data() {
			return {
				companyName: '',
				name:'',
				address: '',
				type: 1,
				industryEntity: null,
				addressName: '',
				provinceId: '',
				cityId: '',
				countyId: '',
				lat: '',
				lng: ''
			};
		},
		methods: {
			changeType(type) {
				this.type = type
			},
			handleIndustryChange(industryEntity) {
				this.industryEntity = industryEntity
			},
			transformLocation(location) {
				const $this = this
				this.$qqmapsdk.reverseGeocoder({
					location: location,
					success: function(res) { //成功后的回调
						$this.provinceId = res.result.ad_info.adcode.slice(0,2)+"0000";
						$this.cityId = res.result.ad_info.adcode.slice(0,4)+"00";
						$this.countyId = res.result.ad_info.adcode
					},
					fail: function(error) {
						console.error(error);
					},
					complete: function(res) {
						console.log(res);
					}
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
			submit() {
				// /api/v2/vue/sqPlus/company/addApply.jsp
				let params = {
					companyName: this.companyName,
					address: this.address,
					type: this.type,
					industryId: this.industryEntity && this.industryEntity.id,
					license: this.$refs.license.imageList.map((item) => item.src).join(','),
					certificate: this.$refs.certificate.imageList.map((item) => item.src).join(','),
					name: this.name,
					mobile: '',
					level:1,
					address:this.address,
					provinceId:this.provinceId,
					cityId:this.cityId,
					countyId:this.countyId,
					lat: this.lat,
					lng: this.lng
				}
				console.log(params)
				this.$getJson(
					'/api/v2/vue/sqPlus/company/addApply.jsp', params,
					'POST',
					res => {
						if(res.success){
							uni.showToast({
								icon:'success',
								title:'提交成功，我们将尽快为您审核！'
							})
							uni.navigateBack()
						}
			
					}
				);
			}
		}
	}
</script>
