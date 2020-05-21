
<style lang="scss">
 .apply{
	 padding-bottom: 100upx;
	 .type{
		 padding: 50upx 20upx;
		 .title{
			 font-size: 28upx;
			 color: #5c5c5c;
		 }
		 border-bottom: 1upx solid #f5f5f5;
	 }
	 //单选样式
	 .radio{
	 	display: flex;
	 	align-items: baseline;
		margin-top: 4upx;
	 	font-size: 24upx;
		margin-top: 40upx;
	 	color: #808080;
	 	.circle{
	 		width: 25upx;
	 		height: 25upx;
	 		border-radius: 50%;
	 		border: 1upx solid #FF474D;
	 		margin-right: 10upx;
			position: relative;
			top:2upx
	 	} 
	 	&.active{
	 		.circle{
	 			background-color: #FF474D;
	 		}
	 	}
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
 }
 .choice{
	 color: #d1d1d1;
	 font-size: 28upx;
	 height: 54upx;
	 display: flex;
	 align-items: center;
 }
 .choiced{
 	 font-size: 28upx;
 	 height: 54upx;
 	 display: flex;
 	 align-items: center;
 }
 .bottomFixed{
    position: fixed;
	z-index: 100;
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
	<view class="apply">
		<view class="type">
			<view class="title">
				选择开通商圈店铺的类型:
			</view>
			<view :class="['radio',type==1&&'active']" @tap="changeType(1)" class="radio"><view class="circle"></view>商圈店铺（普通线下商铺、门店） </view>
			<view :class="['radio',type==2&&'active']" @tap="changeType(2)" class="radio"><view class="circle"></view> 商圈巨划算平台供应商（仅限高科技产品、特色产品的生产厂商或经销商）</view>				
			<view :class="['radio',type==3&&'active']" @tap="changeType(3)" class="radio"><view class="circle"></view> 行业性商圈平台（限垂直行业领域内的集团型、连锁型机构）</view>				
			</view>
			<view class="formListCon" >
				<view class="name">企业名称：</view>
				<view class="right"><input v-model='companyName' type="text"  class="inInput" name="price"
					 maxlength="10" /></view>
			</view>
			<view class="formListCon" >
				<view class="name">公司地址：</view>
				<view class="right"><input v-model='address' type="text" placeholder="省市区 县乡镇等" class="inInput" name="price"
					 maxlength="10" /></view>
			</view>
			<view class="formListCon" >
				<view class="name">行业分类：</view>
				<view class="right">
					<industry v-on:onChange="handleIndustryChange">
						<view v-if="!industryEntity" class="choice">请选择行业<text class="cell-more yticon icon-you"></text></view>
						<view v-if="industryEntity" class="choiced">{{industryEntity.name}}</view>
						</industry>
				</view>
			</view>
			<view class="sku">
				<view class="header">
					<view class="title">
						营业执照：
					</view>
				</view>
				<view class="content">
					<upload-images ref='license' length="1">									
					</upload-images>
				</view> 
			</view>
			<view class="sku">
				<view class="header">
					<view class="title">
						资质证书：
					</view>
				</view>
				<view class="content">
					<upload-images ref='certificate' length="1">									
					</upload-images>
				</view> 
			</view>
			<view class="bottomFixed">
				<view class="btn" @click="submit">
					确定
				</view>
			</view>
		</view>
		
</template>

<script>
	import uploadImages from '@/components/upload-images'
	import industry from '@/components/industry.vue'
	export default { 
		components:{
			uploadImages,
			industry
		},
		data() {
			return {
				companyName:'',
				address:'',
				type:1,
				industryEntity:null
			};
		},
		methods:{
			changeType(type){
				this.type=type
			},
			handleIndustryChange(industryEntity){
				this.industryEntity=industryEntity
			},
			submit(){
				// /api/v2/vue/sqPlus/company/addApply.jsp
				let params={
					companyName:this.companyName,
					address:this.address,
					type:this.type,
					industryId:this.industryEntity&&this.industryEntity.id,
					license:this.$refs.license.imageList.map((item)=>item.src).join(','),
					license:this.$refs.certificate.imageList.map((item)=>item.src).join(',')
				}
				console.log(params)
				this.$getJson(
					'/api/v2/vue/sqPlus/company/addApply.jsp', {data:JSON.stringify(params)},
					'POST',
					res => {
						console.log('----------------', res);
					}
				);
			} 
		}
	}
</script>


