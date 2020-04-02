<template>
	<view class="container">
		<uni-popup  class="userPop" ref="popup" type="center">
			<view>
				<uni-pop ref="uniPop" @changes="childClick"></uni-pop>
			</view>
		</uni-popup>
		<!-- 空白页 -->
		<view v-if="!mobile || empty===true" class="empty">
			<image src="/static/emptyCart.jpg" mode="aspectFit"></image>
			<view v-if="mobile" class="empty-tips">
				空空如也
				<navigator class="navigator" v-if="mobile" url="../index/index" open-type="switchTab">随便逛逛></navigator>
			</view>
			<view v-else class="empty-tips">
				空空如也
				<!-- <button class="navigator" v-if="!mobile" open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber" @getphonenumber="getPhoneNumber">去登录></button> -->
			</view>
		</view>
		<view v-else>
			<!-- 列表 -->
			<view class="cart-list"  v-for="(storeCart, i) in storeCartList">
				<view class="cartTitle">{{storeCart.name}} <!-- <image src="../../static/arrowRight.png"mode="widthFix"></image> --> </view>
				<block v-for="(item, index) in storeCart.list" :key="item.cpCart.id">
					<view
						class="cart-item" 
						:class="{'b-b': index!==storeCart.list.length-1,'cur':item.resource.status != 2}"
					>
						<view class="image-wrapper">
							<image :src="url+item.resource.samllCoverImg" 
								:class="[item.loaded]"
								mode="aspectFill" 
								lazy-load 
							></image>
							<view 
								class="yticon icon-xuanzhong2 checkbox"
								:class="{checked: item.checked}"
								@click="check(i,index)"
							></view>
						</view>
						<view class="item-right">
							<text class="clamp title">{{item.resource.name}}</text>
						<!-- 	<text class="attr">{{item.attr_val}}</text> -->
							<text class="price"  v-if="item.resource.status == 2">¥{{item.goods.priceEdit}}</text>
							<text class="price"  v-if="item.resource.status != 2">已下架</text>
							<uni-number-box
								class="step"
								:min="1" 
								:max="item.goods.stock"
								:value="item.cpCart.goodsCount > item.goods.stock ? item.goods.stock : item.cpCart.goodsCount"
								:isMax="item.cpCart.goodsCount>=item.goods.stock?true:false"
								:isMin="item.cpCart.goodsCount===1"
								:index="index"
								@eventChange="numberChange($event,i,index)"
							></uni-number-box>
						</view>
						<text class="del-btn yticon icon-fork" @click="deleteCartItem(i,index)"></text>
						<text class="Ash" v-if="item.resource.status != 2"></text>
					</view>
				</block>
			</view>
			<!-- 底部菜单栏 -->
			<view class="action-section" v-if="storeCartList">
				<view class="total-box">
					<text class="price"><text>¥</text>{{total}}</text>
				</view>
				<button type="primary" class="no-border confirm-btn" @click="createOrder">去结算</button>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNumberBox from '@/components/uni-number-box.vue'
	import uniPop from '@/components/uniPop.vue';
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import {
		inputValue
	} from '@/components/uni-number-box.vue';
	export default {
		components: {
			uniNumberBox,uniPop,uniPopup
		},
		data() {
			return {
				total: 0, //总价格
				allChecked: false, //全选状态  true|false
				empty: false, //空白页现实  true|false
				storeCartList:[],
				loginCode:'',
				mobile:uni.getStorageSync(`mobile`),
				userInfo:uni.getStorageSync(`userInfo`),
				url:this.$ctx,
				storeIndex:0,
			};
		},
		onLoad(){
			
		},
		onShow(){
			console.log("走了吗");
			this.loadData();
			this.login();//微信登录
			if(!uni.getStorageSync(`mobile`)) {
				//弹出登录
				this.$refs.popup.open()
				//防止点击遮罩关闭
				this.$refs.popup.clickClose(false)
			}else{
				this.$refs.popup.close()
				this.mobile=uni.getStorageSync(`mobile`)
				this.userInfo=uni.getStorageSync(`userInfo`)
			}
		},
		watch:{
			//显示空白页
			storeCartList(e){
				let empty = e.length === 0 ? true: false;
				if(this.empty !== empty){
					this.empty = empty;
				}
			}
		},
		methods: {
			//请求数据
			async loadData(){
				let data = {data: JSON.stringify({memberId:this.userInfo.id})}
				this.$getJson('/api/v2/vue/ydd/cart/getCartList.jsp', data, 'POST', res => {
						console.log('----Cartlist------------', res);
						this.storeIndex = 0
						if(res.data){
							this.storeCartList = res.data
							var storeIndex = 0;
							var isAllNo = 0;
							this.storeCartList.forEach(store => {
								store.list.map(item=>{
									if(storeIndex == 0){
										if(item.resource.status == 2){
											item.checked = true;
											isAllNo++;
										}
									}else{
										if(isAllNo == 0){
											if(item.resource.status == 2){
												item.checked = true;
												isAllNo++;
											}
										}else{
											item.checked = false;
										}
									}
									console.log("item.cpCart.goodsCount---------",item.cpCart.goodsCount );
									item.cpCart.goodsCount = parseInt(item.cpCart.goodsCount)
									console.log("item.cpCart.goodsCount**********",item.cpCart.goodsCount );
									return item;
								});
								if(isAllNo == 0){
									this.storeIndex ++ ;
									console.log("888888888888888888", this.storeIndex);
									console.log("888888888888888888", this.storeIndex);
								}
								storeIndex++;
							});
						}
						this.calcTotal();  //计算总价+
					});
			},
			login() {
				var _this = this
				if(!this.mobile){
					wx.login({
						success: res => {
							console.info('res',res)
							_this.loginCode = res.code
							_this.$refs.uniPop.show({
								title:'登录',
								content: '是否同意获取手机号？',
								shade: true,
								shadeClose: true,
								time: 5,
								anim: 'fadeIn',
								isVisible:true,
								position:'bottom',
								loginCode:res.code,
								isUrl:true,
							})
						}
					})
				}
			},
			 //选中状态处理
			check(storeCartIndex, cartIndex){
				if(this.storeIndex == storeCartIndex){
					this.storeCartList[storeCartIndex].list[cartIndex].checked = !this.storeCartList[storeCartIndex].list[cartIndex].checked
				}else{
					this.storeCartList[this.storeIndex].list.map(item=>{
						item.checked = false;
					});
					this.storeCartList[storeCartIndex].list[cartIndex].checked = !this.storeCartList[storeCartIndex].list[cartIndex].checked
					this.storeIndex = storeCartIndex
				}
				this.calcTotal();
			},
			//数量
			numberChange(data,storeCartIndex,cartIndex){
				let row = this.storeCartList[storeCartIndex].list[cartIndex]
				let datas = {data: JSON.stringify({memberId:this.userInfo.id,goodId:row.goods.id,cartId:row.cpCart.id,number:data.number})}
				this.$getJson('/api/v2/vue/ydd/cart/editCartCount.jsp', datas, 'POST', res => {
					console.log(`data中`,res)
					if(res.data==1){
						this.storeCartList[storeCartIndex].list[cartIndex].cpCart.goodsCount = data.number
						this.calcTotal();
					}else{
						uni.showToast({title:res.message,icon:'none'})
					}
				})
			},
			//删除
			deleteCartItem(storeCartIndex, cartIndex){
				let row = this.storeCartList[storeCartIndex].list[cartIndex]
				let data = {data: JSON.stringify({memberId:this.userInfo.id,userId:row.cpCart.baseUserId,cartId:row.cpCart.id})}
				this.$getJson('/api/v2/vue/ydd/cart/delCart.jsp', data, 'POST', res => {
					console.log(`data中`,res)
					if(res.data==1){
						this.storeCartList[storeCartIndex].list.splice(cartIndex, 1);
						if(this.storeCartList[storeCartIndex].list.length == 0){
							this.storeCartList.splice(storeCartIndex, 1);
						}
						this.calcTotal();
						uni.hideLoading();
					}else{
						uni.showToast({title:res.message,icon:'none'})
					}
					
				})
			},
			//清空
			clearCart(){
				uni.showModal({
					content: '清空购物车？',
					success: (e)=>{
						if(e.confirm){
							let data = {data: JSON.stringify({memberId:this.userInfo.id})}
							this.$getJson('/api/v2/vue/ydd/cart/delCart.jsp', data, 'POST', res => {
								console.log(`delCart`,res)
								this.storeCartList = [];
							})
						}
					}
				})
			},
			//计算总价
			calcTotal(){
				console.log("7777777777777777777",this.storeIndex)
				let list = this.storeCartList[this.storeIndex].list
				if(list.length === 0){
					this.empty = true;
					return;
				}
				let total = 0;
				let checked = true;
				list.forEach(item=>{
					console.log("7777777777777777777",list)
					if(item.checked === true){
						total += item.goods.priceShow * item.cpCart.goodsCount;
						console.log("7777777777777777777",total)
					}else if(checked === true){
						checked = false;
					}
				})
				this.allChecked = checked;
				this.total = Number(total.toFixed(2));
			},
			//创建订单
			createOrder(){
				let goodsData = [];
				this.storeCartList[this.storeIndex].list.forEach(item=>{
					if(item.checked){
						let resource ={
							samllCoverImg:item.resource.samllCoverImg,name:item.resource.name
						}
						goodsData.push({
							goods: item.goods,
							resource:resource,
							cart:item.cpCart,
							number: item.cpCart.goodsCount
						})
					}
				})
				if(goodsData.length<=0){
					return uni.showToast({title:"请选择商品",icon:'none'})
				}
				console.log("goodsData",goodsData)
				uni.navigateTo({
					url: `/pages/order/createOrder?data=${JSON.stringify({
						goodsData: goodsData,type:2,
							cheapPurchaseCompanyId: uni.getStorageSync('cheapPurchaseCompanyId')
					})}`
				})
				// this.$api.msg('跳转到下单');
			},
			childClick(e){
				if(e!=true){
					uni.reLaunch({
					    url: '/pages/cart/cart'
					});
				}
				
			}
		}
	}
</script>

<style lang='scss'>
	page{
		background: #f5f5f5;
	}
	.container{
		padding-bottom: 134upx;
		/* 空白页 */
		.empty{
			position:fixed;
			left: 0;
			top:0;
			width: 100%;
			height: 100vh;
			padding-bottom:100upx;
			display:flex;
			justify-content: center;
			flex-direction: column;
			align-items:center;
			background: #fff;
			image{
				width: 240upx;
				height: 160upx;
				margin-bottom:30upx;
			}
			.empty-tips{
				display:flex;
				font-size: $font-sm+2upx;
				color: $font-color-disabled;
				.navigator{
					color: $uni-color-primary;
					margin-left: 16upx;
					background: none;
					font-size: $font-sm+2upx;
					line-height:initial;
					padding: 0;
					&:after{
						display: none;
					}
				}
			}
		}
	}
	/* 购物车列表项 */
	.cart-list{
		width: 100%;
		display: block;
		background: #fff;
		overflow: hidden;
		margin-bottom: 20upx;
	}
	.cartTitle{
		width: 100%;
		display: block;
		border-bottom: 1px solid #f5f5f5;
		padding: 25upx 30upx;
		font-size: 30upx;
		position: relative;
	}
	.cartTitle image{
		position: absolute;
		right: 20upx;
		top: 50%;
		width: 60upx;
		height: 60upx;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
	}
	.cart-item{
		display:flex;
		position:relative;
		padding:30upx 30upx;
		.image-wrapper{
			width: 160upx;
			height: 160upx;
			flex-shrink: 0;
			position:relative;
			image{
				border-radius:8upx;
			}
		}
		.checkbox{
			position:absolute;
			left:-16upx;
			top: -16upx;
			z-index: 8;
			font-size: 44upx;
			line-height: 1;
			padding: 4upx;
			color: $font-color-disabled;
			background:#fff;
			border-radius: 50px;
		}
		.item-right{
			display:flex;
			flex-direction: column;
			flex: 1;
			overflow: hidden;
			position:relative;
			padding-left: 30upx;
			.title{
				padding-right: 60upx;
			}
			.title,.price{
				font-size:$font-base + 2upx;
				color: $font-color-dark;
				height: 40upx;
				line-height: 40upx;
			}
			.attr{
				font-size: $font-sm + 2upx;
				color: $font-color-light;
				height: 50upx;
				line-height: 50upx;
			}
			.price{
				height: 50upx;
				line-height:50upx;
				margin-top: 70upx;
				color:#FF474C;
			}
			.step{
				position:absolute;
				right: 0;
				bottom: 0;
			}
		}
		.del-btn{
			padding:4upx 10upx;
			font-size:34upx; 
			height: 50upx;
			color: $font-color-light;
			position: absolute;
			right: 30upx; 
			top: 30upx;
		}
	}
	/* 底部栏 */
	.action-section{
		/* #ifdef H5 */
		/* margin-bottom:100upx; */
		/* #endif */
		position:fixed;
		left: 0;
		bottom: 0;
		z-index: 95;
		display: flex;
		align-items: center;
		width: 100%;
		height: 100upx;
		padding: 0 30upx;
		background: #fff;
		box-shadow:0px 2px 19px 1px rgba(97,97,97,0.13);
		.checkbox{
			height:52upx;
			position:relative;
			image{
				width: 52upx;
				height: 100%;
				position:relative;
				z-index: 5;
			}
		}
		.clear-btn{
			position:absolute;
			left: 26upx;
			top: 0;
			z-index: 4;
			width: 0;
			height: 52upx;
			line-height: 52upx;
			padding-left: 38upx;
			font-size: $font-base;
			color: #fff;
			background: $font-color-disabled;
			border-radius:0 50px 50px 0;
			opacity: 0;
			transition: .2s;
			&.show{
				opacity: 1;
				width: 120upx;
			}
		}
		.total-box{
			flex: 1;
			display:flex;
			flex-direction: column;
			text-align:left;
			padding-right: 40upx;
			padding-left:20upx;
			.price{
				font-size: 36upx;
				color:#FF474C;
				font-weight:bold;
				text{
					font-size: 28upx;
					margin-right: 2upx;
				}
			}
			.coupon{
				font-size: $font-sm;
				color: $font-color-light;
				text{
					color: $font-color-dark;
				}
			}
		}
		.confirm-btn{
			padding: 0 50upx;
			margin: 0;
			border-radius: 100px;
			height: 76upx;
			line-height: 76upx;
			font-size: $font-base + 2upx;
			background: #FF474C;
			box-shadow: 1px 2px 5px rgba(0, 77, 160, 0.72)
		}
	}
	/* 复选框选中状态 */
	.action-section .checkbox.checked,
	.cart-item .checkbox.checked{
		color: $uni-color-primary;
	}
	.uni-numbox{
		right: 0;
		left: initial;
	}
	.Ash{
		content: '';
		position:absolute;
		left:0;
		top:0;
		width: 100%;
		height:100%;
		background: rgba(0,0,0,0.2);
		z-index: 10;
	}
	.cart-item.cur .del-btn{
		z-index: 12;
		color: #ffffff;
	}
</style>
