<template>
	<view>
		<view class="mainBottom">
			<view class="memberDTop">
				<view class="photo">
					<image :src="cjCompanyUser.cjUser.imgPath ? ctx + cjCompanyUser.cjUser.imgPath : ctx + '/images/head.jpg'"mode="widthFix"></image>
				</view>
				<view class="name">{{ cjCompanyUser.cjUser.realName }}</view>
				<view class="job">{{ cjCompanyUser.job }}</view>
			</view>
			<view class="officialCon">
				<view class="officialTitle" v-if="cjCompanyUser.cjUser.signature">
					<view class="leftIco"><image ctx + '/images/icon-31.png'></image></view>
					个性签名
				</view>
				<view class="officialContent" v-if="cjCompanyUser.cjUser.signature">{{ cjCompanyUser.cjUser.signature }}</view>
				<view class="officialTitle" v-if="cjCompanyUser.cjUser.ability">
					<view class="leftIco"><image ctx + '/images/icon-32.png'></image></view>
					我的能力
				</view>
				<view class="officialContent" v-if="cjCompanyUser.cjUser.ability">{{ cjCompanyUser.cjUser.ability }}</view>
				<view class="officialTitle">
					<view class="leftIco"><image lazy-load :src="ctx + '/images/icon-05.png'"></image></view>
					联系方式
				</view>
				<view class="officialContact memberDCon">
					<view class="labelItem">
						手机号：{{ cjCompanyUser.cjUser.mobile }}
						<view class="iconfont memberDPhone" @click="telPhone(cjCompanyUser.cjUser.mobile)">&#xeb88;</view>
					</view>
					<view class="labelItem" v-if="cjCompanyUser.cjUser.phone">
						电话：{{ cjCompanyUser.cjUser.phone }}
						<view class="iconfont memberDPhone" @click="telPhone(cjCompanyUser.cjUser.phone)">&#xeb88;</view>
					</view>
					<view class="labelItem" v-if="cjCompanyUser.cjUser.weixin">微信号：{{ cjCompanyUser.cjUser.weixin }}</view>
					<view class="labelItem" v-if="cjCompanyUser.cjUser.email">公司邮箱：{{ cjCompanyUser.cjUser.email }}</view>
					<view class="labelItem" v-if="cjCompanyUser.cjUser.fax">传真：{{ cjCompanyUser.cjUser.fax }}</view>
				</view>
			</view>
		</view>
		<view class="footBtn buttonFixed"><button class="buttonBigWidth" @click="togglePopup('memberDel')">移除</button></view>
		<uni-popup :show="type === 'memberDel'" class="tipPopup" position="middle" mode="fixed" @hidePopup="togglePopup('')">
			<view class="tipPopupCon">
				<view class="tipTitle">提示</view>
				<view class="tipContent">确定要移除该成员吗？</view>
				<view class="tipGroup">
					<view class="tipGroupBtn" @click="togglePopup('')">取消</view>
					<view class="tipGroupBtn" @click="define('')">确定</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue';
export default {
	components: {
		uniPopup
	},
	data() {
		return {
			ctx:this.$ctx,
			userId: '',
			companyId: '',
			cjCompanyUser: {},
			type: '',
		};
	},
	onLoad(options) {
		this.userId = options.userId;
		this.companyId = options.companyId;
		this.getData();
	},
	onBackPress() {
		if (this.type !== '') {
			this.type = '';
			return true;
		}
	},
	methods: {
		getData() {
			this.contentText = '正在加载...';
			this.$getJson('/api/v2/vue/stPlus/company/companyUserInfo.jsp', { data: JSON.stringify({ userId: this.userId, companyId: this.companyId }) }, 'POST', res => {
				this.cjCompanyUser = res.data.cjCompanyUser;
			});
		},
		// #ifdef H5
		telPhone(phone) {
			contactPhone({type: 'tel',phoneNumber:phone});
		},
		// #endif
		
		// #ifdef MP-WEIXIN
		telPhone(phone) {
			uni.makePhoneCall({
				phoneNumber: phone //仅为示例
			});
		},
		//#endif
		togglePopup(type) {
			this.type = type;
		},
		define() {
			this.$getJson('/api/v2/vue/stPlus/company/delCompanyUser.jsp', { data: JSON.stringify({ companyUserId: this.cjCompanyUser.id }) }, 'POST', res => {
				uni.navigateTo({
					url: '/pages/member/member?companyId=' + this.cjCompanyUser.companyId
				});
			});
		},
	}
};
</script>

<style>
page {
	background: #fff;
}
.officialCon {
	border-top: 20upx solid #f5f5f5;
}
</style>
