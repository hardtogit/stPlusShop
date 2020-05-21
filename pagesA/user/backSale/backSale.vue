<template>
	<view class="backSale">
		<view class="flow">
			<image class="step-one" src="../../../static/icon/user/step1.png"></image>
			<view class="text active">提交审核</view>
			<image class="step-two" src="../../../static/icon/user/step2.png"></image>
			<view class="text">审核中</view>
			<image class="step-three" src="../../../static/icon/user/step2.png"></image>
			<view class="text">审核结果</view>
		</view>
		<view class="sition">
			<view class="title">
				请选择售后类型
			</view>
			<view class="choice">
				<view class='left'>
					<image class="one" src="../../../static/icon/user/backOne.png"></image>
					退货退款
				</view>
				<view class="right">
					<radio color="#FF474C" :checked="type==2" @click="changeType(3)"></radio>
				</view>
			</view>
			<view class="dis">（退货退款需要将商品退回店家，店家才会处理退货退款申请）</view>
			<view class="choice sub">
				<view class='left'>
					<image class="two" src="../../../static/icon/user/backTwo.png"></image>
					仅退款
				</view>
				<view class="right">
					<radio color="#FF474C" :checked="type==1" @click="changeType(1)"></radio>
				</view>
			</view>
		</view>
		<view class="sition">
			<view class="title">
				申请售后订单：{{entity.order.sn}}
			</view>
			<view class="goods" v-for="item in entity.goods">
				<view class="left">
					<image class="img" :src="ctx+item.goodsImg">

					</image>
				</view>
				<view class="right">
					<view class="name">{{item.goodsName}}</view>
					<view class="spec">规格：三层抽纸 20cmX6cm</view>
				</view>
			</view>
		</view>
		<view class="sition">
			<view class="title">
				请选择售后原因：
			</view>
			<picker class="reson" :range="reason"  range-key="text" @change="handReasonChange" :value="value">
				<view class="text">
					{{(value||value===0)?reason[value].text:'请选择原因'}}
				</view>
			</picker>
		</view>
		<view class="sition">
			<view class="title">
				上传问题照片：
			</view>
			<view>
				<upload-images ref='certificate' length="1"></upload-images>
			</view>
		</view>
		<view class="sition">
			<view class="title">
				请输入售后问题说明：
			</view>
			<textarea class="textarea" placeholder="请填写产品问题相关说明（100字以内）" v-model="explain" />
			</view>
	<view class="bottomFixed">
				<view class="btn" @click="handleSubmit">
					提交申请
				</view>
			</view>
	</view>
</template>

<script>
	import uploadImages from '@/components/upload-images'
	export default {
		data() {
			return {
				ctx:this.$ctx,
				type:1,
				value:'',
				reason:[],
				entity:{},
				options:{},
				explain:''
			};
		},
		components:{
			uploadImages
		},
		onLoad(options){
			this.options=options
			this.getData()
		},
		methods:{
			getData() {
			this.$getJson("/api/v3/afterSale/reason.jsp", {
			}, "POST", res => {
				console.log(res,'ssssss')
				this.reason=res.data
			
			})
				this.$getJson("/api/v3/order/info.jsp", {
					orderId: this.options.id,
					orderNo: this.options.orderNo
				}, "POST", res => {
					console.log(res)
					this.entity = res.data
				})
			},
			changeType(type){
				this.type=type
			},
			handReasonChange(e){
				console.log(e)
				this.value=e.detail.value
			},
			handleSubmit(){
				const params={
					orderNo:this.options.orderNo,
					orderId:this.options.id,
					type:this.type,
					reasonId:this.reason[this.value].id,
					reason:this.reason[this.value].text,
					imgs:this.$refs.certificate.imageList.map((item)=>item.src).join(','),
					explain:this.explain
				}
				this.$getJson("/api/v3/afterSale/apply.jsp", params, "POST", res => {
					uni.showToast({
						icon:'none',
						title:'申请成功，我们会尽快为您审核'
					})
					setTimeout(()=>{
					  uni.navigateBack()	
					},3000)						
				})
			
			}
		}
	}
</script>

<style lang="scss">
	.backSale {
		padding-bottom: 110upx;
		.flow {
			padding: 0 23upx;
			height: 125upx;
			font-size: 31upx;
			color: #090909;
			display: flex;
			align-items: center;
			border-bottom: 1upx solid #eee;

			.step-one {
				width: 26upx;
				height: 26upx;
				display: block;
				margin-right: 4upx;
			}

			.step-two,
			.step-three {
				width: 47upx;
				margin: 0 6upx 0 32upx;
				height: 15upx;
				display: block;
			}

			.active {
				color: #FF474C;
			}
		}

		.sition {
			padding: 0 23upx 30upx 23upx;
			color: #141414;
			border-bottom: 1upx solid #eee;
			.title {
				font-size:29upx;
				padding: 30upx 0;
			}
			.dis{
			    margin-top: 26upx;
				height:24upx;
				font-size:24upx;
				font-family:PingFang SC;
				font-weight:400;
				color:rgba(97,97,97,1);
				line-height:33upx;
			}
			.choice{
				display: flex;
				align-items: center;
				.left{
					flex: 1;
					display: flex;
					align-items: center;
					font-size:31upx;
					font-family:PingFang SC;
					font-weight:500;
					.one{
						width: 34upx;
						height: 31upx;
						display: block;
						margin-right: 28upx;
					}
					.two{
						width: 39upx;
						height: 35upx;
						display: block;
						margin-right: 28upx;
					}
				}
				&.sub{
					margin-top: 56upx;
				}
			}
			
			.goods {
				display: flex;
				align-items: center;
				padding:  0;
			
				.left {
					width: 120upx;
			
					.img {
						display: block;
						width: 120upx;
						height: 120upx;
					}
				}
			
				.right {
					flex: 1;
					padding-left: 38upx;
			
					.name {
						font-size: 25upx;
					}
			
					.spec {
						font-size: 21upx;
						display: inline-block;
						color: #6C6C6C;
						padding: 2upx 10upx;
						border-radius: 7upx;
						background-color: #F2F2F2;
					}
				}
			}
			.reson{
				border: 1upx solid #ddd;
				border-radius: 7upx;
				font-size: 25upx;
				padding: 20upx;
			}
			.textarea{
				display: block;
				padding: 20upx;
				width: 100%;
				height:240upx;
				border:1px solid #ddd;
				font-size: 25upx;
			}
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
	}
</style>
