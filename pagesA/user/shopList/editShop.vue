<style lang="scss">
	page {
		background: #f5f5f5;
	}
	.labelSetContent {
		border-top: 10px solid #f5f5f5;
		margin: 0 0px;
		padding: 0 12px;
	}

	.labelSetContent .title {
		position: relative;
	}

	.labelSetContent .title::before {
		content: '+';
		position: absolute;
		right: 16upx;
		top: 47%;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
		font-size: 46upx;
		color: #999;
	}

	.labelSetContent .title.active::before {
		content: '-';
	}

	.labelSetContent .labelList.labelHide {
		display: none;
	}

	.labelSetContent .labelList.labelShow {
		display: block;
	}
	.sku{
		font-size: 28upx;
		padding: 30upx 0;
		.header{
			display: flex;
			padding: 0 20upx;
			justify-content: space-between;
			.btn{
				color: #FF474D;
			}
		} 
		.content{
			padding:20upx;
		}
		.spec-item{
			display: flex;
			padding: 20upx 20upx 0 20upx;
			font-size: 25upx;
			.left{
				flex: 1;
			}
			.right{
				flex: 1;
				display: flex;
				justify-content: space-between;
				.icons{
					.icon{
						display: inline-block;
						width: 28upx;
						height: 28upx;
						&.del{
							margin-left: 20upx;
						}
					}
				}
			}
		}
	}
	.specContainer{
		width: 630upx;
		height: 450upx;
		margin: 0 auto;
		background-color: #fff;
		border-radius: 4upx;
		padding-top: 70upx;
		.input{
			width:514upx;
			height:81upx;
			margin: 0 auto;
			border:1upx solid rgba(209,208,208,1);
			border-radius:13upx;
			padding: 0 12upx;
			&.label{
				// margin-top: 70upx;
			}
			&.number{
				margin-top: 30upx;
			}
		}
		.btn{
			width: 514upx;
			height: 81upx;
			background-color: #FF474D;
			color: #fff;
			margin: 40upx auto 0 auto;
			border-radius: 40upx;
			text-align: center;
			line-height: 81upx;
		}
	}
	
	.formListCon{
		display: flex;
		align-items: center;
		.right{
			display: flex;
			align-items: center;
			text-align: right;
		}
		.unit{
			font-size: 28upx;
			margin-left: 10upx;
		}
	}
	//单选样式
	.radio{
		flex: 1;
		display: flex;
		float: right;
		align-items: center;
		font-size: 24upx;
		color: #808080;
		.circle{
			width: 25upx;
			height: 25upx;
			border-radius: 50%;
			border: 1upx solid #FF474D;
			margin-right: 6upx;
		} 
		&.active{
			.circle{
				background-color: #FF474D;
			}
		}
	}
	.bp{
		display: block;
		text-align: right;
		width: 100%;
	}
	.choice{
		 color: #d1d1d1;
		 font-size: 28upx;
		 height: 54upx;
		 display: flex;
		 align-items: center;
		 justify-content: right;
	}
	.choiced{
		 font-size: 28upx;
		 height: 54upx;
		 display: flex;
		 align-items: center;
		 justify-content: right;
	}
	.bottomFixed{
	   position: fixed;
	   bottom: 0;
	   left: 0;
	   height: 110upx;
	   width: 100%;
	   background-color: #fff;
	   box-shadow:0px 2px 19px 1px rgba(97,97,97,0.13);
	   padding: 10upx 55upx;
	   .btn{
		   width: 640upx;
		   height: 90upx;
		   color: #fff;
		   background-color: #FF474D;
		   display: flex;
		   align-items: center;
		   justify-content: center;
	   }
	}
</style>
<template>
	<view class="add-shop">
		<form @submit="formSubmit">
			<view class="MainHide mt20 mainBottom">
				<view class="mainConten">
					<view class="orderDLabel">
						<view class="formList">
							<view class="formListCon">
								<view class="name">商品名称：</view>
								<view class="right"><input type="text" placeholder="请填写标题" class="inInput" v-model="goods.prodName" name="name"
									 maxlength="20" /></view>
							</view>

							<view class="formListCon">
								<view class="name">商品副标题描述：</view>
								<view class="right"><input type="text" placeholder="填写商品副标题" class="inInput" v-model="goods.subHeading" name="price"
									 maxlength="10" /></view>
							</view>
							<view class="formListCon">
								<view class="name">选择商品类别：</view>
								<view class="right">

									<goods-type v-on:onChange="handlegoodsTypeChange" style="width: 100%;">
										<view v-if="!goodsTypeEtity" class="choice">请选择商品类别<text class="cell-more yticon icon-you"></text></view>
										<view v-if="goodsTypeEtity" class="choiced">{{goodsTypeEtity.name}}</view>
									</goods-type>
								</view>
							</view>
							<view class="formListCon">
								<view class="name">爆品</view>
								<view class="right">
									<view class="bp">
										<view :class="['radio',isExplosive==0&&'active']" @tap="changeisExplosive(0)" class="radio">
											<view class="circle"></view> 否（正价商品）
										</view>
										<view :class="['radio',isExplosive==1&&'active']" @tap="changeisExplosive(1)" class="radio">
											<view class="circle"></view>是（特价商品/活动商品）
										</view>
									</view>
								</view>
							</view>
							<view class="formListCon" >
								<view class="name">销售价</view>
								<view class="right"><input v-model="goods.price" type="number" placeholder="请填写销售价格" class="inInput" name="marketPrice"
									 maxlength="10" /></view>
								<view class="unit">
									元
								</view>
							</view>
							<view class="formListCon" v-if='isExplosive==1'>
								<view class="name">划线价：</view>
								<view class="right"><input v-model="goods.marketPrice" type="number" placeholder="请填写划线价格" class="inInput" name="marketPrice"
									 maxlength="10" /></view>
								<view class="unit">
									元
								</view>
							</view>
						
							<view class="sku">
								<view class="header">
									<view class="title">
										规格描述：
									</view>
									<view class="btn" @click="specPop()">添加</view>
								</view>
								<view class="spec-item" v-for="(item,index) in spec" :key="index">
									<view class="left">规格：{{item.sname}}</view>
									<view class="right">
										<view>库存：{{item.snum}}件</view>
										<view class="icons">
											<image src="../../../static/icon/user/edit.png" class="edit icon" @click="specPop(index)"></image>
											<image class="del icon" src="../../../static/icon/user/del.png" @click="delSpec(index)"></image>
										</view>
									</view>
								</view>
							</view>

							<view class="sku">
								<view class="formListCon">
									<view class="name">销售提成比例</view>
									<view class="right"><input v-model="goods.ers" type="number" placeholder="填写百分比" class="inInput" name="marketPrice"
										 maxlength="10" /></view>
									<view class="unit">
										%
									</view>
								</view>
							</view>
							<view class="sku">
								<view class="header">
									<view class="title">
										商品封面图：
									</view>
								</view>
								<view class="content">
									<upload-images ref="firstImg" length="1">
									</upload-images>
								</view>
							</view>
							<view class="sku">
								<view class="header">
									<view class="title">
										商品banner图：
									</view>
								</view>
								<view class="content">
									<upload-images ref="bimgs" length="9">
									</upload-images>
								</view>
							</view>
							<view class="sku">
								<view class="header">
									<view class="title">
										详情介绍：
									</view>
								</view>
								<view class="content">
									<uni-editor ref='intro'></uni-editor>
								</view>

							</view>
						</view>
					</view>
				</view>
			</view>
		</form>
		<view class="bottomFixed">
			<view class="btn" @click="submit">
				确定
			</view>
		</view>
		<!-- 弹窗 -->
		<uni-popup ref="specPop" type="center" :show=true>
			<view class="specContainer">
				<input class="label input" type="text" placeholder="输入详细规格：如颜色+大小" v-model="currentSpec.sname">
				<input class="number input" type="number" placeholder="输入库存：如100件" v-model="currentSpec.snum">
				<view class="btn" @click="saveSpec()">确定</view>
			</view>
		</uni-popup>


	</view>

</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup'
	import articleEdit from '@/components/article-edit'
	import uploadImages from '@/components/upload-images'
	import goodsType from '@/components/goods-type.vue'
	import uniEditor from '@/components/uni-editor/uni-editor.vue'
	import {dealRich} from '@/common/common.js'
	
	export default {
		components: {
			uniPopup,
			articleEdit,
			uploadImages,
			goodsType,
			uniEditor
		},
		data() {
			return {
				spec: [],
				productInfo:{},
				options:{},
				url:this.$ctx,
				currentSpec: {},
				currentSpecIndex: null,
				goodsTypeEtity: null, //商品类型
				isExplosive: 1,
				goods: {
					prodName: '',
					subHeading: '',
					marketPrice: '',
					price: '',
					ers: ''

				}
			}
		},
		onLoad(options){
			console.log(options)
			this.$options=options
			this.getData()
		},
		methods: {
			getData(){
				this.$getJson('/jsp/api/resources/resoucesInfo.jsp', {resourcesId: this.options.id||403,}, 'POST', res => {
					if (res.data) {
						
						this.goods ={...res.data.goods,
						intro:dealRich(res.data.goods.intro) 
						}
					}
					console.log(this.goods,'productInfo')
					this.isExplosive=this.goods.isExplosive
					this.spec=this.goods.specs
					const firstImgArr = this.goods.firstImg ? this.goods.firstImg.split(',') : [];
					const bimgsArr = this.goods.bimgs?this.goods.bimgs.split(','):[]
					// let lArr=[]  
					firstImgArr.forEach((item) => {
						console.log(item)
						this.$refs.firstImg.imageList.push({
							src: item,
							filePath: this.ctx + item
						})
					})
					bimgsArr.forEach((item)=>{
						this.$refs.bimgs.imageList.push({
							src: item,
							filePath: this.ctx + item
						})
					})
					this.$getJson('/api/v3/store/goods/category/list.jsp', {
						'storeId': 203
					}, 'GET', response => {
						response.data.forEach((item)=>{
							if(item.id==this.goods.catId){
								this.goodsTypeEtity=item
							}
						})
					})
				});
			},
			specPop(currentSpecIndex) {
				if (currentSpecIndex || currentSpecIndex == 0) {
					this.currentSpecIndex = currentSpecIndex
					this.currentSpec = { ...this.spec[currentSpecIndex]
					}
					this.$refs.specPop.open()
				} else {
					this.currentSpecIndex = null
					this.currentSpec = {}
					this.$refs.specPop.open()
				}
			},
			delSpec(currentSpecIndex) {
				const index = currentSpecIndex
				this.spec = [...this.spec.slice(0, index), ...this.spec.slice(index + 1, this.spec.length)]
			},
			saveSpec() {
				if (this.currentSpecIndex || this.currentSpecIndex == 0) {
					const index = this.currentSpecIndex
					this.spec = [...this.spec.slice(0, index), this.currentSpec, ...this.spec.slice(index + 1, this.spec.length)]
				} else {
					this.spec.push(this.currentSpec)
				}
				this.$refs.specPop.close()
			},
			handlegoodsTypeChange(goodsTypeEtity) {
				this.goodsTypeEtity = goodsTypeEtity
			},
			//切换爆品
			changeisExplosive(isExplosive) {
				this.isExplosive = isExplosive
			},
			changeIsFx(isFx) {
				this.isFx = isFx
			},
		
			submit() {
				let params = {}
				params = {
					...this.goods,
					isExplosive: this.isExplosive,
					catId: this.goodsTypeEtity && this.goodsTypeEtity.id,
					bimgs: this.$refs.bimgs.imageList.map((item) => item.src).join(','),
					intro: this.$refs.intro.html,
					specs: JSON.stringify(this.spec),
					storeId:202
				}
				this.$getJson(
					'/jsp/api/resources/saveOeEditResources.jsp', params,
					'POST',
					res => {
						console.log('----------------', res);
					}
				);
			}
		} 
	}
</script>
