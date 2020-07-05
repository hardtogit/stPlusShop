<template>
	<view>
		<view class="formList mainBottom" style="margin-top:20upx;">
			<form @submit="formSubmit" @reset="formReset">
				<view class="formListCon formListAfter formListPhoto">
					<view class="name">头像：</view>
					<view class="right" @click="editImg">
						<view class="photo">
							<image lazy-load :src="ctx+data.imgPath" mode="aspectFill"></image>
						</view>
					</view>
				</view>
				<view class="formListCon">
					<view class="name">真实姓名：</view>
					<view class="right"><input v-model="data.realName" name="realName" type="text" placeholder="请输入名称"
						 placeholder-class="placeholder" class="inInput" maxlength="11"></view>
				</view>
				<!-- <view class="formListCon">
					<view class="name">手机：</view>
					<view class="right">
						<view class="inCon"><input v-model="data.mobile" name="mobile" type="text" placeholder="请输入手机号" placeholder-class="placeholder"
							 class="inInput"></view>
					</view>
				</view> -->
				<view class="formListCon">
					<view class="name">职位：</view>
					<view class="right"><input v-model="job" name="job" type="text" placeholder="请输入职位" placeholder-class="placeholder"
						 class="inInput" maxlength="11"></view>
				</view>
				<view class="formListCon">
					<view class="name">电话：</view>
					<view class="right"><input name="phone" v-model="data.phone" type="text" placeholder="请输入电话" placeholder-class="placeholder"
						 class="inInput"></view>
				</view>
				<!-- <view class="formListCon">
					<view class="name">传真：</view>
					<view class="right"><input name="fax" v-model="data.fax" type="text" placeholder="请输入传真号码" placeholder-class="placeholder"
						 class="inInput"></view>
				</view> -->
		<!-- 		<view class="formListCon">
					<view class="name">公司邮箱：</view>
					<view class="right"><input name="email" v-model="data.email" type="text" placeholder="请输入公司邮箱号" placeholder-class="placeholder"
						 class="inInput"></view>
				</view> -->
				<view class="formListCon">
					<view class="name">微信：</view>
					<view class="right"><input name="weixin" v-model="data.weixin" type="text" placeholder="请输入微信号" placeholder-class="placeholder"
						 class="inInput"></view>
				</view>
				<view class="formListCon">
					<view class="name">个性签名：</view>
					<view class="right rightLeft">
						<textarea name="signature" v-model="data.signature" placeholder="请输入自己的个性签名" placeholder-class="placeholder"
						 class="inInput"></textarea>
					</view>
				</view>
				<view class="formListCon">
					<view class="name">我的能力：</view>
					<view class="right rightLeft">
						<textarea name="ability" v-model="data.ability" placeholder="请输入自己的能力" placeholder-class="placeholder" class="inInput"></textarea>
					</view>
				</view>
				<cover-view class="footBtn buttonFixed">
					<button formType="submit" class="buttonBigWidth">保存</button>
				</cover-view>
			</form>
		</view>
	</view>
</template>
<script>
	import {
		uploadImg
	} from "@/common/util.js"
	export default {
		data() {
			return {
				ctx: this.$ctx,
				data: {
					// id: 35
					// imgPath: "/upload/da/dac60cc2a62ccbf58ef890cf77f07cf8/file.png"  头像路径
					// mobile: "13552421653" 手机
					// phone: "" 固定电话
					// fax: "" 传真
					// email: "" 公司邮箱
					// weixin: "" 微信号
					// signature: "" 个人签名
					// realName: "张会霞_35"  姓名
					// ability: ""		我的能力
					// addTime: 20190903094302532
					// addTimeStr: "2019-09-03 09:43:02"
					// cardId: 1
				},
				job:"",
			};
		},
		onLoad() {
			this.$getJson('/api/v2/vue/sqPlus/user/userInfo.jsp', {}, 'POST', res => {
				this.data = res.data.cjUser
				this.job = res.data.job
				console.log('数据=》', res.data)
			})
		},
		mounted() {
			// #ifdef H5
			// 将myUpload方法绑定到window下面，提供给外部调用
			window['myUpload'] = (rsp) => {
				this.myUploadImgUrl(rsp);
			}
			// #endif 
		},
		methods: {
			myUploadImgUrl(rsp) {
				this.data.imgPath = rsp.data;
			},
			editImg() {
				// #ifdef H5
				uploadImg('myUpload')
				// #endif  
				// #ifdef MP-WEIXIN
				const _this = this;
				this.$upload(1, res => {
					console.log('回调=>', res)
					this.data.imgPath = res;
				})
				// #endif 
			},
			//校验邮箱格式
			checkEmail(email){
				return RegExp(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/).test(email);
			},
			//校验手机格式
			checkMobile(mobile){
				return RegExp(/^1[34578]\d{9}$/).test(mobile);
			},
			isTelephone(mobile) {
				return RegExp( /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/).test(mobile);
			},
			formSubmit(e) {
				//  e => 校验可以用 或者用data里的data字段校验
				this.data.mobile = uni.getStorageSync('mobile')
				this.data.job = e.detail.value.job
				console.log('个人信息表单', this.data)
				
				if(this.data.phone != null && this.data.phone != ""){
					if(!this.isTelephone(this.data.phone) && !this.checkMobile(this.data.phone)){
						uni.showToast({
							title: '请输入正确的电话',
							icon: 'none'
						});
						return
					}
				}
				if(this.data.email != null && this.data.email != ""){
					if(!this.checkEmail(this.data.email)){
						uni.showToast({
							title: '请输入正确的邮箱',
							icon: 'none'
						});
						return
					}
				}
				
				
				this.$getJson('/api/v2/vue/sqPlus/user/editUserInfo.jsp', {
					data: JSON.stringify(this.data)
				}, 'POST', res => {
					uni.showToast({
						title: "保存成功",
						duration: 1000,
						success() {
							setTimeout(function() {
								//要延时执行的代码
								uni.navigateBack({
									delta: 1
								})
							}, 1000)
						}
					})
				})
			}
		}
	};
</script>
<style>
	.mainBottom {
		display: inline-block;
	}
</style>
