<template>
	<view class="content">
		<scroll-view scroll-y class="left-aside">
			<view v-for="item in flist" :key="item.id" class="f-item" :class="{active: item.id === currentId}" @click="tabtap(item)">
				{{item.name}}
			</view>
		</scroll-view>
		<scroll-view scroll-with-animation scroll-y class="right-aside" @scroll="asideScroll" :scroll-top="tabScrollTop">
			<!-- <view  class="s-list" > -->
				<!-- <text class="s-item">{{item.name}}</text> -->
				<view class="t-list" id="main-1">
					<view @click="navToList(currentId, titem.id)" v-if="titem.parentId === currentId" class="t-item" v-for="titem in slist" :key="titem.id">
						<image :src="ctx+titem.image"></image>
						<text>{{titem.name}}</text>
					</view>
					<view class="footWhite"></view>
				</view>
			<!-- </view> -->
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sizeCalcState: false,
				tabScrollTop: 0,
				currentId: 1,
				flist: [],
				slist: [],
				tlist: [],
				ctx:this.$ctx,
			}
		},
		onLoad(){
			// this.loadData();
		},
		methods: {
			async loadData(){
				this.$getJson('/api/v2/vue/ydd/common/getIndustry.jsp', {}, 'POST', res => {
					console.log('----list------------', res);
					res.data.list.forEach(item=>{
						// if(!item.pid){
						// 	this.flist.push(item);  //pid为父级id, 没有pid或者pid=0是一级分类
						// }else if(!item.picture){
						// 	this.slist.push(item); //没有图的是2级分类
						// }else{
						// 	this.tlist.push(item); //3级分类
						// }
						// 
						if(item.level==1){
							this.flist.push(item);  //pid为父级id, 没有pid或者pid=0是一级分类
						}else{
							this.slist.push(item); //有图的是2级分类
						}
					}) 
				});
			},
			//一级分类点击
			tabtap(item){
				if(!this.sizeCalcState){
					this.calcSize();
				}
				
				this.currentId = item.id;
				let index = this.slist.findIndex(sitem=>sitem.parentId === item.id);
				this.tabScrollTop = this.slist[index].top;
			},
			//右侧栏滚动
			asideScroll(e){
				if(!this.sizeCalcState){
					this.calcSize();
				}
				let scrollTop = e.detail.scrollTop;
				let tabs = this.slist.filter(item=>item.top <= scrollTop).reverse();
				if(tabs.length > 0){
					this.currentId = tabs[0].parentId;
				}
			},
			//计算右侧栏每个tab的高度等信息
			calcSize(){
				let h = 0;
				let view = uni.createSelectorQuery().select("#main-1");
				view.fields({
					size: true
				}, data => {
					view.top = h;
					h += data.height;
					view.bottom = h;
				}).exec();
				this.sizeCalcState = true;
			},
			navToList(sid, tid){
				uni.navigateTo({
					url: `/pages/product/list?twoIndustryId=${tid}`
				})
			}
		}
	}
</script>

<style lang='scss'>
	page,
	.content {
		height: 100%;
		/* background-color: #f8f8f8; */
	}

	.content {
		display: flex;
	}
	.left-aside {
		flex-shrink: 0;
		width:180upx;
		height: 100%;
		background-color: #f1f1f1;
	}
	.f-item {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100upx;
		font-size: 26upx;
		color: $font-color-base;
		position: relative;
		border-bottom:1px solid #e5e5e5;
		&.active{
			color: $base-color;
			background: #fff;
			border:none;
			&:before{
				content: '';
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				height: 36upx;
				width: 8upx;
				background-color: $base-color;
				border-radius: 0 4px 4px 0;
				opacity: .8;
			}
		}
	}
	.s-list{
		box-shadow: 0px 0px 5px #f5f5f5;
	}
	.right-aside{
		flex: 1;
		overflow: hidden;
		padding-left: 20upx;
	}
	.s-item{
		display: flex;
		align-items: center;
		height: 70upx;
		padding-top: 8upx;
		font-size: 28upx;
		color: $font-color-dark;
	}
	.t-list{
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		background: #fff;
		padding-top: 12upx;
		position:relative;
		&:after{
			content: '';
			flex: 99;
			height: 0;
		}
		&:before{
			content: '';
			width: 100%;
			background:#fff;
			height: 12upx;
			position: absolute;
			right: 0;
			left: 0;
			bottom: 30upx;
			z-index: 2;
			
		}
	}
	.t-item{
		flex-shrink: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 176upx;
		font-size: 24upx;
		color: #333;
		padding-bottom: 30upx;
		border-bottom:1px solid #f5f5f5;
		margin-bottom:30upx;
		image{
			width: 90upx;
			height: 90upx;
			margin-bottom: 15upx;
		}
	}
</style>
