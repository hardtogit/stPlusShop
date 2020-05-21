<style lang="scss">
	.tabs {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 24upx;

		.tab {
			width: 336upx;
			height: 84upx;
			line-height: 84px;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #fff;
			background-color: #FF2B42;
		}
	}

	.add {
		width: 700upx;
		height: 84upx;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid #ddd;
		margin: 0 auto;
	}
	.flex{
		display: flex;
		padding: 20upx;
		align-items: center;
		.left{
			flex: 2;
			text-align: center;
			.img{
				display: block;
				width: 200upx;
				height: 100upx;
			}
		}
		.center{
			flex: 1;
			text-align: center;
		}
		.right{
			flex: 1;
			text-align: center;
		}
	}
</style>
<template>
	<view>
		<view class="tabs">
			<view class="tab">
				商品
			</view>
			<view class="tab">
				优惠券
			</view>
		</view>
		<view class="add">
			添加商品
		</view>
		<view class="mainBottom shopList">
			<view class="flex">
				<view class="left">在销产品</view>
				<view class="center">状态</view>
				<view class="right">库存</view>
			</view>
			<view class="shopItem" v-for="(item, index) in dataList" :key="index">
			   <view class="flex">
				   <view class="left"><image class="img" :src="ctx+item.firstImg" alt=""></view>
				   <view class="center">{{item.isOn?'上架':'下架'}}</view>
				   <view class="right">{{item.stock}}</view>
			   </view>
			</view>
			<text class="loading-text">{{ contentText }}</text>
		</view>
		<view class="mainNull" v-if="dataList.length == 0">
			<view>
				<view class="iconfont">&#xe71f;</view>
				<view class="mainNullTip">暂无数据</view>
			</view>
		</view>
		<view class="footBtn buttonFixed"><button class="buttonBigWidth" @click="addShop(null)">添加商品</button></view>
		<uni-popup :show="type === 'memberDel'" class="tipPopup" position="middle" mode="fixed" @hidePopup="togglePopup('', '')">
			<view class="tipPopupCon">
				<view class="tipTitle">提示</view>
				<view class="tipContent">确定要设为爆款商品吗？</view>
				<view class="tipGroup">
					<view class="tipGroupBtn" @click="togglePopup('', '')">取消</view>
					<view class="tipGroupBtn" @click="delRes()">确定</view>
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
				ctx: this.$ctx,
				dataList: [],
				entrance: '',
				companyId: '',
				noData: '',
				contentText: '正在加载...',
				pageNumber: 1,
				obj: {},
				type: ''
			};
		},
		onBackPress() {
			if (this.type !== '') {
				this.type = '';
				return true;
			}
		},
		onLoad(option) {
			this.entrance = option.entrance;
			this.companyId = option.companyId;
			this.getDataList();
		},
		onShow() {
			console.log('this.companyId', this.companyId);
			this.noData = 10;
			this.dataList = [];
			this.contentText = '正在加载...';
			this.pageNumber = 1;
			this.getDataList();
		},
		onReachBottom: function() {
			this.pageNumber++;
			console.log(this.pageNumber);
			this.getDataList();
		},
		methods: {
			getDataList() {
				if (this.noData < 10) {
					this.contentText = '没有更多数据了';
					return;
				}
				this.contentText = '正在加载...';
				this.$getJson(
					'/api/v2/vue/sqPlus/resources/resourcesList.jsp', {
						companyId: this.companyId || 203,
						pageNumber: this.pageNumber,
						isManager:1
					},
					'POST',
					res => {
						console.log('----------------', res);

						this.dataList = [...this.dataList, ...res.data]
						this.noData = res.data.length;
						if (this.noData < 10) {
							this.contentText = '没有更多数据了';
						} else {
							this.contentText = '上拉显示更多';
						}
					}
				);
			},
			visual(item) {
				this.$getJson('/api/v2/vue/sqPlus/resources/resourcesIsExplosive.jsp', {
					data: JSON.stringify({
						resourcesId: item.id
					})
				}, 'POST', res => {
					this.dataList.forEach((a, b) => {
						if (a.id == item.id) {
							if (a.isExplosive == 0) {
								a.isExplosive = 1;
							} else {
								a.isExplosive = 0;
							}
						}
					});
				});
			},
			togglePopup(type, item) {
				console.log(item);
				this.type = type;
				this.obj = item;
			},
			delRes() {
				console.log(this.obj);
				this.$getJson('/jsp/api/resources/delResources.jsp', {
					resourcesId: this.obj.id
				}, 'POST', res => {
					this.dataList.forEach((a, b) => {
						if (a.id == this.obj.id) {
							this.dataList.splice(b, 1);
							this.type = '';
							this.obj = {};
						}
					});
				});
			},
			addShop(id) {
				uni.navigateTo({
					url: '/pages/user/shopList/addShop?isCard=1&resourcesId=' + id
				});
			},
			shopDetails(id) {
				uni.navigateTo({
					url: '/pages/shopList/shopDetails?isCard=1&resourcesId=' + id
				});
			}

		}
	};
</script>
