<template>
	<view class="content">
		<view class="row b-b">
			<text class="tit">联系人</text>
			<input class="input" type="text" v-model="addressData.consignee" placeholder="收货人姓名" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">手机号</text>
			<input class="input" type="number" v-model="addressData.mobile" placeholder="收货人手机号码" placeholder-class="placeholder" maxlength="11"/>
		</view>
		<view class="row b-b" @click="showPicker">
			<text class="tit">地区</text>
			<view class="li">
				<view class="input">
					{{pickerCity}}
				</view>
			</view>
		</view>
		<mpvue-picker ref="mpvuePicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault" :themeColor="themeColor" @onChange="onChange" @onConfirm="onConfirm" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
		<view class="row b-b"> 
			<text class="tit">详细地址</text>
			<input class="input" type="text" v-model="addressData.addrDetail" placeholder="详细地址" placeholder-class="placeholder" />
		</view>
		<view class="row default-row">
			<text class="tit">设为默认</text>
			<switch :checked="isDefault" color="#004da0" @change="switchChange" />
		</view>
		<button class="add-btn" @click="confirm">提交</button>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex';
	import mpvuePicker from '@/components/mpvue-picker/mpvuePicker.vue';
	import {cityData}  from '@/common/city.js';
	export default {
		components: {
			mpvuePicker,
		},
		data() {
			return {
				pickerCity:'请选择所在城市',//选择地区城市
				mode: 'selector',
				deepLength: 0, // 几级联动
				pickerValueDefault: [], // 初始化值
				pickerValueArray: [], // picker 数组值
				pickerText: '请选择行业',
				themeColor: '', // 颜色主题
				pickerArray:cityData,
				addressData: {
					id:'',
					consignee: '',
					mobile: '',
					addressName: '',
					address: '',
					addrDetail: '',
					isDefault:0,
					province:'',
					city:'',
					county:'',
				},
				isDefault:false,
			}
		},
		onLoad(option){
			let title = '新增收货地址';
			if(option.type==='edit'){
				title = '编辑收货地址'
				this.addressData = JSON.parse(option.data)
				console.info('this.addressData.isDefault',this.addressData.isDefault)
				if(this.addressData.isDefault == 1){
					this.isDefault = true;
				}else{
					this.isDefault = false;
				}
				console.info('this.isDefault',this.isDefault)
				this.pickerCity = this.addressData.province +'-'+this.addressData.city+'-'+this.addressData.county;
			}
			this.manageType = option.type;
			uni.setNavigationBarTitle({
				title
			})
		},
		methods: {
			switchChange(e){
				console.info(' e.detail', e.detail.value)
				if(e.detail.value){
					this.addressData.isDefault = 1;
				}else{
					this.addressData.isDefault = 0;
				}
				
			},
			//提交
			confirm(){
				let data = this.addressData;
				if(!data.consignee){
					this.$api.msg('请填写收货人姓名');
					return;
				}
				if(!/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(data.mobile)){
					this.$api.msg('请输入正确的手机号码');
					return;
				}
				if(!data.address){
					this.$api.msg('请选择地区');
					return;
				}
				if(!data.addrDetail){
					this.$api.msg('请填写详细地址信息');
					return;
				}
				let params = {
					id:data.id,
					consignee:data.consignee,
					mobile:data.mobile,
					addrDetail:data.addrDetail,
					pickerCity:this.pickerCity,
					memberId:uni.getStorageSync(`userInfo`).id,
					isDefault:this.addressData.isDefault
				}
				console.info('params',params)
				// 保存收货地址
				this.$getJson("/jsp/api/addr/doSaveAddr.jsp",params,"POST",res=>{
					if(res.success=='true'){
					}
				});
				
				
				//this.$api.prePage()获取上一页实例，可直接调用上页所有数据和方法，在App.vue定义
				this.$api.prePage().refreshList(this.manageType);
				this.$api.msg(`地址${this.manageType=='edit' ? '修改': '添加'}成功`);
				setTimeout(()=>{
					uni.navigateBack()
				}, 800)
			},
			showPicker() {
				this.pickerValueArray = this.pickerArray;
				this.mode = 'multiLinkageSelector';
				this.deepLength = 3;
				this.pickerValueDefault = [0, 0, 0];
				this.themeColor = '#004da0';
				this.$refs.mpvuePicker.show();
				},
			showPickerView() {
				this.$refs.mpvuePicker.show();
			},
			onConfirm(e) {
					if (this.mode === 'selector') {
						this.pickerText = e.label;
					}else if (
						this.mode === 'multiLinkageSelector' &&
						this.deepLength === 2
					) {
						this.pickerCity = e.label;
					} else if (
						this.mode === 'multiLinkageSelector' &&
						this.deepLength === 3
					) {
						this.pickerCity = e.label;
						this.citycode = e.value;
						this.citylist = e.label.split('-');
						this.addressData.address = e.label;
					}
			},
			onChange(e) {
				// console.log(e);
			},
			onCancel(e) {
				// console.log(e);
			},
		}
	}
</script>

<style lang="scss">
	page{
		background: $page-color-base;
		padding-top: 16upx;
	}

	.row{
		display: flex;
		align-items: center;
		position: relative;
		padding:0 30upx;
		height: 110upx;
		background: #fff;
		
		.tit{
			flex-shrink: 0;
			width: 140upx;
			font-size: 30upx;
			color: $font-color-dark;
		}
		.input{
			flex: 1;
			font-size: 30upx;
			color: $font-color-dark;
			text-align: right;
		}
		.icon-shouhuodizhi{
			font-size: 36upx;
			color: $font-color-light;
		}
	}
	.default-row{
		margin-top: 16upx;
		.tit{
			flex: 1;
		}
		switch{
			transform: translateX(16upx) scale(.9);
		}
	}
	.add-btn{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		margin: 60upx auto;
		font-size: $font-lg;
		color: #fff;
		background-color: $base-color;
		border-radius: 10upx;
		box-shadow: 1px 2px 5px rgba(0, 77, 160, 0.4);
	}
	.li{
		width:100%;
		.input{
		width: 100%;
		font-size: 30upx;
		text-align: right;
		}
	}
</style>
