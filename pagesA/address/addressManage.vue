<template>
	<view class="content">
		<view class="row b-b">
			<text class="tit">联系人</text>
			<input class="input" type="text" v-model="addressData.consignee" placeholder="收货人姓名" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">手机号</text>
			<input class="input" type="number" v-model="addressData.mobile" placeholder="收货人手机号码" placeholder-class="placeholder"
			 maxlength="11" />
		</view>
		<view class="row b-b" @tap="chooseAddres">
			<text class="tit">收货地址</text>
			<view class="li">
				<view class="input" v-if="addressData.address||addressData.addressName">
					<view class="address-name ellipsis">{{addressData.addressName}}</view>
					<view class="address ellipsis"> {{addressData.address}}</view>
				</view>
				<view class="input a" v-if="!addressData.address">
					<view class="placeholder">点击选择</view>
				</view>

			</view>
			<text class="yticon icon-you"></text>
		</view>
		<!-- <mpvue-picker ref="mpvuePicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault" :themeColor="themeColor" @onChange="onChange" @onConfirm="onConfirm" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker> -->
		<view class="row b-b">
			<text class="tit">详细描述</text>
			<input class="input" type="text" v-model="addressData.addrDescription" placeholder="如:单元楼/门牌号等" placeholder-class="placeholder" />
		</view>
		<view class="row default-row">
			<text class="tit">设为默认</text>
			<switch :checked="addressData.isDefault==1" color="#F5222D" @change="switchChange" />
		</view>
		<button class="add-btn" @click="confirm">提交</button>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	// import {cityData}  from '../assets/js/city.js';
	export default {
		data() {
			return {
				pickerCity: '请选择所在城市', //选择地区城市
				mode: 'selector',
				deepLength: 0, // 几级联动
				pickerValueDefault: [], // 初始化值
				pickerValueArray: [], // picker 数组值
				pickerText: '请选择行业',
				themeColor: '', // 颜色主题
				addressData: {
					id: '',
					consignee: '',
					mobile: '',
					addressName: '',
					addrDescription:'',
					poiaddress:'',
					address: '',
					addrDetail: '',
					isDefault: 0,
					lat: '',
					lng: '',
					province:'',
					city:'',
					county:''
				},
				isDefault: false,
			}
		},
		onLoad(option) {
			// this.transformLocation({
			// 	latitude: 30.58447,
			// 	longitude: 103.91377
			// })	
			let title = '新增收货地址';
			if (option.type === 'edit') {
				title = '编辑收货地址'
				this.addressData = JSON.parse(option.data)
				let arr=this.addressData.poiaddress.split(',')
				this.addressData.address=arr[0]
				this.addressData.addressName=arr[1]
				this.addressData.addrDescription=arr[2]
			}
			this.manageType = option.type;
			uni.setNavigationBarTitle({
				title
			})
		},
		methods: {
			switchChange(e) {
				console.info(' e.detail', e.detail.value)
				if (e.detail.value) {
					this.addressData.isDefault = 1;
				} else {
					this.addressData.isDefault = 0;
				}
			},
			transformLocation(location) {
				const $this=this
				this.$qqmapsdk.reverseGeocoder({
					location: location,
					success: function(res) { //成功后的回调
					   $this.addressData={
						   ...$this.addressData,
						   province:res.result.address_component.province, 
						   city:res.result.address_component.city, 
						   county:res.result.address_component.district
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
											console.log(res)
											$this.addressData = {
												...$this.addressData,
												addressName: res.name,
												address: res.address,
												lat: res.latitude,
												lng: res.longitude
											}
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
							wx.chooseLocation({
								success(res) {
									console.log(res)
									$this.addressData = {
										...$this.addressData,
										addressName: res.name,
										address: res.address,
										lat: res.latitude,
										lng: res.longitude
									}
									$this.transformLocation({
										latitude: res.latitude,
										longitude: res.longitude
									})
									console.log(res)
								}
							})
						}
					}
				})
			},
			//提交
			confirm() {
				let data = this.addressData;
				if (!data.consignee) {
					this.$api.msg('请填写收货人姓名');
					return;
				}
				if (!/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(data.mobile)) {
					this.$api.msg('请输入正确的手机号码');
					return;
				}
				if (!data.address) {
					this.$api.msg('请选择地区');
					return;
				}
				if (!data.addrDetail) {
					this.$api.msg('请填写详细地址信息');
					return;
				}
				let params = {
					id: data.id,
					consignee: data.consignee,
					mobile: data.mobile,
					addrDescription:data.addrDescription,
					addressName: data.addressName,
					address: data.address,
					isDefault: data.isDefault,
					lat: data.lat,
					lng: data.lng,
					province:data.province,
					city:data.city,
					county:data.county,
					poiaddress:`${data.address},${data.addressName},${data.addrDescription}`,
					pickerCity:`${data.province}-${data.city}-${data.county}`,
					addrDetail:data.address.replace(`${data.province+data.city+data.county}`,'')+data.addressName+data.addrDescription,
				}
				// 保存收货地址
				this.$getJson("/jsp/api/addr/doSaveAddr.jsp", params, "POST", res => {
					if (res.success == 'true') {}
				});


				//this.$api.prePage()获取上一页实例，可直接调用上页所有数据和方法，在App.vue定义
				this.$api.prePage().refreshList(this.manageType);
				this.$api.msg(`地址${this.manageType=='edit' ? '修改': '添加'}成功`);
				setTimeout(() => {
					uni.navigateBack()
				}, 800)
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: $page-color-base;
		padding-top: 16upx;
	}

	.placeholder {
		color: #999;
	}

	.row {
		display: flex;
		align-items: center;
		position: relative;
		padding: 0 30upx;
		height: 110upx;
		background: #fff;

		.tit {
			flex-shrink: 0;
			width: 140upx;
			font-size: 30upx;
			color: $font-color-dark;
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

	.default-row {
		margin-top: 16upx;

		.tit {
			flex: 1;
		}

		switch {
			transform: translateX(16upx) scale(.9);
		}
	}

	.add-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		margin: 60upx auto;
		font-size: $font-lg;
		color: #fff;
		background-color: #F5222D;
		border-radius: 10upx;
		// box-shadow: 1px 2px 5px rgba(0, 77, 160, 0.4);
	}

	.li {
		flex: 1;
		width: 0;

		.input {
			width: 100%;
			font-size: 30upx;
			text-align: right;

			&.a {
				display: flex;
				align-items: center;
				justify-content: flex-end;
			}
		}
	}
</style>
