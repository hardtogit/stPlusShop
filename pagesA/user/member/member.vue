<style lang="scss">
	.content {
		flex: 1;
	}

	.addTimeStr {
		font-size: 24upx;
		color: #9F9F9F;
		float: right;
	}

	.member {
		padding-top: 80upx;

		.bottomContainer {
			position: fixed;
			width: 100%;
			height: 110upx;
			background-color: #fff;
			z-index: 10;
			bottom: 0;
			left: 0;
			display: flex;
			justify-content: center;
			align-items: center;

			.btn {
				width: 640upx;
				height: 90upx;
				display: inline-block;
				text-align: center;
				line-height: 90upx;
				color: #fff;
				background-color: #FF474C;
				border-radius: 7upx;
			}
		}
	}

	.header {
		position: fixed;
		background-color: #fff;
		border-bottom: 1px solid #dcdcdc;
		// height: 250upx;
		height: 80upx;
		z-index: 10;
		width: 100%;
		top: 0;
		left: 0;
	}

	.memberItem {
		display: block;

		.top {
			display: flex;
		}

		.bottom {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			.subBtn {
				width: 120upx;
				height: 40upx;
				align-items: center;
				justify-content: center;
				display: flex;
				margin-left: 10upx;
				color: #FF474B;
				border: 1px solid #FF474B;
				font-size: 23upx;

			}
		}
	}
</style>
<template>
	<view class="member">
		<view class="header">
			<view class="invite"><button class="btn" open-type="share">邀请成员</button></view>

		</view>
		<view class="memberList mainBottom">
			<view class="memberItem" v-for="(item, index) in cjCompanyUsers" :key="index">
				<view class="top">
					<view class="photo" @click="memberDetails(item.cjUser.id)">
						<image :src="item.cjUser.imgPath ? ctx + item.cjUser.imgPath : ctx + '/images/head.jpg'" mode="widthFix"></image>
					</view>
					<view class="content" @click="memberDetails(item.cjUser.id)">
						<view class="name">{{ item.cjUser.realName }}
							<view class="addTimeStr">{{item.cjUser.addTimeStr}}</view>
						</view>
						<view class="label">{{ userType[item.cjUser.userType] }}</view>
						<view class="phone">{{ item.cjUser.mobile }}</view>
					</view>
				</view>

				<view class="bottom">
					<view :class="['subBtn',activeFn==0?'active':'']" @tap="setFn(0)">
						设置管理员
					</view>
					<view :class="['subBtn',activeFn==1?'active':'']" @tap="setFn(1)">
						设置员工
					</view>
					<view :class="['subBtn',activeFn==2?'active':'']" @tap="setFn(2)">
						设置代理
					</view>
					<view :class="['subBtn',activeFn==3?'active':'']" @tap="setFn(3)">
						移除
					</view>
				</view>
				<!-- <view class="memberDel" @click="togglePopup('memberDel', item)">移除</view> -->
			</view>
			<text class="loading-text">{{ contentText }}</text>
		</view>
		<view class="mainNull" v-if="cjCompanyUsers.length == 0">
			<view>
				<view class="iconfont">&#xe71f;</view>
				<view class="mainNullTip">暂无数据</view>
			</view>
		</view>
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
	<!-- 	<view class="bottomContainer">
			<view class="btn" @tap="handleSubmit">
				确定
			</view>
		</view> -->
	</view>
</template>

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	// #ifdef H5
	import {
		contactPhone
	} from '@/common/util.js';
	// #endif  
	export default {
		components: {
			uniPopup,
			uniLoadMore
		},
		data() {
			return {
				userType: {
					0: '管理员',
					1: '员工',
					2: '代理',
				},
				activeFn: '',
				selectUser: [],
				c: 0,
				ctx: this.$ctx,
				pageNumber: 1,
				contentText: '正在加载...',
				noData: 10,
				type: '',
				obj: {},
				companyId: '',
				cjCompanyUsers: [],
				inviteData: {},
				cjCompany: {},
			};
		},
		onLoad(option) {
			this.companyId = option.companyId;
			this.getDataList();
		},
		onBackPress() {
			if (this.type !== '') {
				this.type = '';
				return true;
			}
		},
		onReachBottom: function() {
			this.pageNumber++;
			console.log(this.pageNumber);
			this.getDataList();
		},
		onShareAppMessage(res) {
			if (res.from === 'button') {
				console.log(res.target);
			}
			return {
				title: this.cjCompany.cjUser.realName + '邀请您加入' + this.cjCompany.name,
				path: '/pages/invite/invite?companyId=' + this.cjCompany.id + '&sharUserId=' + this.cjCompany.cjUser.id,
				imageUrl: this.ctx + this.cjCompany.shareLogoPath,
			};
		},
		methods: {
			setFn(fn) {
				this.activeFn = fn
			},
			//处理选择
			changeSelect(id) {
				const selectArr = this.selectUser
				if (this.activeFn == 3) { //只有移除是多选
					if (selectArr.indexOf(id) !== -1) {
						this.selectUser = [...selectArr.slice(0, selectArr.indexOf(id)), ...selectArr.slice(selectArr.indexOf(id) + 1,
							selectArr.length)]
					} else {
						this.selectUser = [...selectArr, id]
					}
				} else {
					if (selectArr.indexOf(id) !== -1) {
						this.selectUser = []
					} else {
						this.selectUser = [id]
					}
				}
			},
			handleSubmit() {
				const selectArr = this.selectUser

				this.$getJson('/api/v3/staff/set.jsp', {
					storeId: this.cjCompany.id || 62,
					employeeId: selectArr.join(','),
					status: this.activeFn

				}, 'POST', res => {
					console.log(res)
				});

			},
			getDataList() {
				if (this.noData < 10) {
					this.contentText = '没有更多数据了';
					return;
				}
				this.contentText = '正在加载...';
				this.$getJson('/api/v2/vue/sqPlus/company/companyUserList.jsp', {
					data: JSON.stringify({
						companyId: this.cjCompany.id || 62,
						pageNumber: this.pageNumber
					})
				}, 'POST', res => {
					console.log('----------------', res);
					this.cjCompany = res.data.cjCompany;
					res.data.cjCompanyUsers.forEach(item => {
						this.cjCompanyUsers.push(item);
					});
					this.noData = res.data.cjCompanyUsers.length;
					if (this.noData < 10) {
						this.contentText = '没有更多数据了';
					} else {
						this.contentText = '上拉显示更多';
					}
				});
			},
			togglePopup(type, item) {
				this.obj = item;
				this.type = type;
			},
			define() {
				this.$getJson('/api/v2/vue/stPlus/company/delCompanyUser.jsp', {
					data: JSON.stringify({
						companyUserId: this.obj.id
					})
				}, 'POST', res => {
					this.cjCompanyUsers.forEach((a, b) => {
						if (a.id == this.obj.id) {
							this.cjCompanyUsers.splice(b, 1);
							this.type = '';
							this.obj = {};
						}
					});
				});
			},
			// #ifdef H5
			invite() {
				this.inviteData.type = 'shareSmallPro';
				this.inviteData.url = '/pages/invite/invite?companyId=' + this.cjCompany.id + '&sharUserId=' + this.cjCompany.cjUser
					.id;
				this.inviteData.imagelocal = this.cjCompany.shareLogoPath ? this.cjCompany.shareLogoPath : "/images/icon-01.png";
				this.inviteData.title = this.cjCompany.cjUser.realName + '邀请您加入企业';
				this.inviteData.text = '加入企业，共创世纪辉煌';
				this.inviteData.path = '/pages/invite/invite?companyId=' + this.cjCompany.id + '&sharUserId=' + this.cjCompany.cjUser
					.id;
				this.inviteData.userName = 'gh_94c4faca29ea';
				console.log(this.inviteData);
				contactPhone(this.inviteData);
				// uni.navigateTo({
				// 	url:'/pages/invite/invite'
				// })
			},
			// #endif  
			memberDetails(userId) {
				uni.navigateTo({
					url: '/pages/member/memberDetails?userId=' + userId + '&companyId=' + this.cjCompany.id
				});
			}
		}
	};
</script>
