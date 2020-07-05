<style lang="scss">
	.dynamic {
		padding: 0 30upx 30upx 30upx;

		.dynamic-item {
			padding-bottom: 30upx;
			border-bottom: 1upx solid #eee;

			.share-box {
				height: 70upx;
			}

			.share {
				width: 28upx;
				height: 28upx;
				float: right;
				margin-top: 20upx;
				position: relative;
				margin-left: 35upx;

				.share-btn {
					position: absolute;
					width: 28upx;
					height: 28upx;
					top: 0;
					left: 0;
					opacity: 0;
				}

				.icon {
					display: block;
					width: 28rpx;
					height: 28rpx;
				}
			}

			.store-title {
				font-size: 31upx;
				color: #121212;
			}

			.sub-title {
				font-size: 26upx;
				color: #616161;
				margin-top: 18upx;
				display: -webkit-box;
				overflow: hidden;
				text-overflow: ellipsis;
				word-wrap: break-word;
				white-space: normal !important;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}

			.pictures {
				margin-top: 24upx;

				.picture {
					width: 208upx;
					display: inline-block;
					height: 203upx;
					background-color: #ddd;
					margin-right: 30rpx;
					margin-bottom: 20upx;
					border-radius: 8upx;

					&:nth-child(3n) {
						margin-right: 0;
					}
				}
			}
		}
	}

	.btn {
		width: 688upx;
		height: 83upx;
		border: 1upx solid #DCDCDC;
		border-radius: 9upx;
		align-items: center;
		justify-content: center;
		font-size: 28upx;
		color: #616161;
		display: flex;
		margin: 20upx auto;

		.icon {
			width: 34upx;
			height: 34upx;
			display: block;
			margin-right: 24upx;
		}
	}
</style>
<template>
	<view class="dynamic">
		<view class="btn" @tap="navTo(`/pagesA/user/dynamic/add`)">
			<image class="icon" src="../../../static/icon/user/addd.png"></image>
			添加动态
		</view>
		<view class="dynamic-item" v-for="(item,index) in dynamicList" :key="index" @tap="navTo(`/pages/home/dynamic/detail?id=${item.id}`)">
			<view class="share-box">
				<view class="share" @tap.stop="delLibrary(item.id)">
					<image class="icon" src="../../../static/icon/user/del.png"></image>
				</view>
				<view class="share" @tap.stop="navTo(`/pagesA/user/dynamic/edit?id=${item.id}`)">
					<image class="icon" src="../../../static/icon/user/edit.png"></image>
				</view>
			</view>
			<view class="store-title">{{item.title}}</view>
			<view class="sub-title">
				{{item.text}}
			</view>
			<view class="pictures">
				<image v-for="(url,index) in item.imgs" class="picture" :src="url" v-if="index<3" :key="index"></image>

			</view>
		</view>
	</view>
</template>

<script>
	import {
		dealRich
	} from '@/common/common'
	export default {
		data() {
			return {
				dynamicList: [],
				ctx: this.$ctx
			};
		},
		onShareAppMessage(res) {
			console.log(res)
		},
		onShow() {
			this.getData()
		},

		methods: {
			getData() {
				//获取巨划算
				this.$getJson('/api/v2/vue/sqPlus/library/libraryList.jsp', {
					data: JSON.stringify({
						companyId: 202,
						pageNumber: 1,
						pageSize: 10
					}),

				}, 'POST', res => {
					console.log(res)
					this.dynamicList = this.deal(res.data.libraryList)
				})
			},
			delLibrary(id) {
				const $this=this
				wx.showModal({
					title: '提示',
					content: '确定删除该条动态？',
					success(res) {
						if (res.confirm) {
							$this.$getJson('/api/v2/vue/sqPlus/library/doDel.jsp', {
								data: JSON.stringify({
									libraryId: id
								})
							}, 'POST', res => {
								$this.dynamicList.forEach((a, b) => {
									if (a.id == id) {
										$this.dynamicList.splice(b, 1);
										$this.type = '';
										$this.obj = {};
									}
								});
							});


						} else if (res.cancel) {
							console.log('用户点击取消')
						}
					}
				})





			},
			deal(libraryList = []) {
				let arr = [];
				libraryList.forEach((item) => {
					let imgs = [];
					let text = '';
					let title = ''
					dealRich(item.detail).replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/g, (match, capture) => {
						imgs.push(capture)
					});
					text = item.detail.replace(/<[^<>]+>/g, "").replace(/&nbsp;/gi, "")
					title = item.title
					arr.push({
						title,
						imgs,
						text,
						id: item.id
					})
				})
				return arr
			},

			navTo(url) {
				console.log('s')
				uni.navigateTo({
					url
				})
			},
		}
	}
</script>
