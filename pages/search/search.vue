<template>
	<view class="content">
		<view class="search-box">
			
			<view class="search-boxCon">
				<view class="input-box">
					<input type="text" placeholder="请输入关键字" @input="inputChange" v-model="keyword" @confirm="doSearch(false)" placeholder-class="placeholder-class" confirm-type="search">
				</view>
				<view class="yticon icon-sousuo search-boxIcon" @tap="doSearch(false)"></view>
			</view> 
			<!-- <view>
				<view class="swiper-tab-list" :class="{'active':active == 1}" @tap="active=1"><text>产品</text></view>
				<view class="swiper-tab-list" :class="{'active':active == 2}" @tap="active=2"><text>托人</text></view>
				<view class="swiper-tab-list" :class="{'active':active == 3}" @tap="active=3"><text>招商</text></view>
			</view> -->
				
			
		</view>
		<view class="search-keyword" @touchstart="blur">
			<scroll-view class="keyword-box" v-show="!isShowKeywordList" scroll-y>
				<!-- <view class="keyword-block">
					<view class="keyword-list-header">  
						<view class="searchName">历史搜索</view>
						<view>
							<image @tap="oldDelete" src="../../static/images/delete.png"></image>
						</view>
					</view>
					<view class="keyword">
						<view @click="searchShop">电商搜搜</view>
					</view>
				</view> -->
				<view class="keyword-block">
					<view class="keyword-list-header">
						<view class="searchName">热门搜索</view>
						<view>
							<image @tap="hotToggle" :src="'../../static/images/attention'+forbid+'.png'"></image>
						</view>
					</view>
					<view class="keyword">
						<view @click="searchShop(item)"  v-for="(item, index) in hotKeywordList" :key="index" >{{item.name}}</view>
					</view>
					<view class="hide-hot-tis" style="display: none;">
						<view>当前搜热门搜索已隐藏</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>
<script>
	//引用mSearch组件，如不需要删除即可
	export default {
		data() {
			return {
				active:1,
				defaultKeyword: "",
				keyword: "",
				oldKeywordList: [],
				hotKeywordList: [],
				keywordList: [],
				forbid: '',
				isShowKeywordList: false,
			}
		},
		onLoad(active) {
			this.active = active.active
		},
		onShow(){
			this.init();
		},
		methods: {
			init() {
				// this.loadDefaultKeyword();
				// this.loadOldKeyword();
				this.loadHotKeyword();
			},
			blur(){
				uni.hideKeyboard()
			},
			//加载默认搜索关键字
			loadDefaultKeyword() {
				//定义默认搜索关键字，可以自己实现ajax请求数据再赋值,用户未输入时，以水印方式显示在输入框，直接不输入内容搜索会搜索默认关键字
				// this.defaultKeyword = "默认关键字";
			},
			//加载历史搜索,自动读取本地Storage
			// loadOldKeyword() {
			// 	uni.getStorage({
			// 		key: 'OldKeys',
			// 		success: (res) => {
			// 			var OldKeys = JSON.parse(res.data);
			// 			this.oldKeywordList = OldKeys;
			// 		}
			// 	});
			// },
			//加载热门搜索
			loadHotKeyword() {
				this.$getJson("/api/v2/vue/ydd/common/popularSearchKey.jsp",{},"POST",res=>{
					this.hotKeywordList = res.data
				})	
			}, 
			//监听输入
			inputChange(event) {
				//兼容引入组件时传入参数情况
				// var keyword = event.detail?event.detail.value:event;
				// if (!keyword) {
				// 	// this.keywordList = [];
				// 	// this.isShowKeywordList = false;
				// 	return;
				// }
				// this.isShowKeywordList = true;
			},
			//高亮关键字
			drawCorrelativeKeyword(keywords, keyword) {
				var len = keywords.length,
					keywordArr = [];
				for (var i = 0; i < len; i++) {
					var row = keywords[i];
					//定义高亮#9f9f9f
					var html = row[0].replace(keyword, "<span style='color: #9f9f9f;'>" + keyword + "</span>");
					html = '<div>' + html + '</div>';
					var tmpObj = {
						keyword: row[0],
						htmlStr: html
					};
					keywordArr.push(tmpObj)
				}
				return keywordArr;
			},
			
			//清除历史搜索
			// oldDelete() {
			// 	uni.showModal({
			// 		content: '确定清除历史搜索记录？',
			// 		success: (res) => {
			// 			if (res.confirm) {
			// 				console.log('用户点击确定');
			// 				this.oldKeywordList = [];
			// 				uni.removeStorage({
			// 					key: 'OldKeys'
			// 				});
			// 			} else if (res.cancel) {
			// 				console.log('用户点击取消');
			// 			}
			// 		}
			// 	});
			// },
			//热门搜索开关
			hotToggle() {
				this.forbid = this.forbid ? '' : '_forbid';
			},
			//执行搜索
			doSearch(key) {
				if(key) this.keyword = key
				// key = key ? key : this.keyword ? this.keyword : this.defaultKeyword;
				// this.keyword = key;
				uni.navigateTo({
				 	url: '/pages/product/list?likeTitle='+this.keyword
				})
				
			},
			searchShop(data){
				uni.navigateTo({
				 	url: '/pages/product/list?likeTitle='+data.name
				})
			}
		}
	}
</script>
<style scoped>
	.swiper-tab-list{width: 33%;}
	.active uni-text{border-bottom:1px solid #007AFF;height: 90upx;display: inline-block;}
	.search-box {width:100%;background-color:rgb(242,242,242);padding:16upx 2.5%;justify-content:space-between;}
	.search-box .input-box {width:86%;flex-shrink:1;display:flex;justify-content:center;align-items:center;}
	.search-box .search-boxIcon{width:14%;justify-content:center;align-items:center;flex-shrink:0;color: #999; font-size:46upx;height: 76upx; text-align: center; line-height: 76upx;}
	.search-box .input-box .uni-input-input {
			width: 100%;
			height: 30px;
			font-size: 26upx;
			border: 0;
			border-radius: 30px;
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
			padding: 0 3%;
			margin: 0;
			text-align: left;
			background-color: #ffffff;
	} 
	.search-box .input-box>input{width: 100%;font-size: 30upx;}	
	.search-boxCon{ background: #fff; padding-left: 20upx; border-radius: 30px; height: 76upx; overflow: hidden; width: 100%;flex-shrink:1;display:flex;justify-content:center;align-items:center;}
	.placeholder-class {color:#9e9e9e;}
	.search-keyword {width:100%;background-color:rgb(242,242,242);}
	.keyword-list-box {height:calc(100vh - 55px);padding-top:5px;border-radius:0;background-color:#fff;}
	.keyword-entry-tap {background-color:#eee;}
	.keyword-entry {width:94%;height:80upx;margin:0 3%;font-size:30upx;color:#333;display:flex;justify-content:space-between;align-items:center;border-bottom:solid 1px #f5f5f5;}
	.keyword-entry image {width:30px;height:30px;}
	.keyword-entry .keyword-text,.keyword-entry .keyword-img {height:80upx;display:flex;align-items:center;}
	.keyword-entry .keyword-text {width:90%;}
	.keyword-entry .keyword-img {width:9%;justify-content:center;}
	.keyword-box {height:calc(100vh - 55px);border-radius:0;background-color:#fff;}
	.keyword-box .keyword-block {padding:5px 0;}
	.keyword-box .keyword-block .keyword-list-header {width:100%;padding:5px 3%;font-size:34upx;color:#333;display:flex;justify-content:space-between;}
	.keyword-box .keyword-block .keyword-list-header image {width:20px;height:20px; margin-top: 10upx;}
	.keyword-box .keyword-block .searchName{font-size:30upx;color:#333;}
	.keyword-box .keyword-block .keyword {width:100%;padding:3px 3%;display:flex;flex-flow:wrap;justify-content:flex-start;}
	.keyword-box .keyword-block .hide-hot-tis {display:flex;justify-content:center;font-size:28upx;color:#6b6b6b;}
	.keyword-box .keyword-block .keyword>view {display:flex;justify-content:center;align-items:center;border-radius:30px;padding:0 26upx;margin:10upx 20upx 10upx 0;height:54upx; line-height:60upx !important; font-size:26upx;background-color:rgb(242,242,242);color:#6b6b6b;}
</style>
