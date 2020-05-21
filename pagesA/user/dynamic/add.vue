
<style lang="scss">
 .body{
	 padding: 20upx;
	 .title{
		 font-size: 28upx;
		 color: #141414;
		 line-height: 100upx;
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
</style>
<template>
	<view class="add">
			<view class="formListCon" >
				<view class="name">标题：</view>
				<view class="right"><input v-model='title' type="text" placeholder="请输入标题"  class="inInput" name="price"
					 maxlength="10" /></view>
			</view>
			<view class="body">
				<view class="title">内容详情:</view>
				<article-edit ref="detail"></article-edit>
			</view>
			
			<view class="bottomFixed">
				<view class="btn" @click="submit">
					确定
				</view>
			</view>
		</view>
		
</template>

<script>
	import articleEdit from '@/components/article-edit.vue'
	export default { 
		components:{
			articleEdit
		},
		data() {
			return {
				title:""
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
			
				this.$getJson(
					'/jsp/admin/shop/dtGl/do/doAdd.jsp', {
						storeId:202,
						title:this.title,
						detail:JSON.stringify(this.$refs.detail.dataSource)
					},
					'POST',
					res => {
						console.log('----------------', res);
					}
				);
			} 
		}
	}
</script>


