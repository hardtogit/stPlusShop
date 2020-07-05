
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
				<uni-editor ref="detail"></uni-editor>
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
	import {dealRich,unDealRich} from '@/common/common'
	import {uniEditor} from '@/components/uni-editor/uni-editor.vue'
	export default { 
		components:{
			articleEdit,
			uniEditor
		},
		data() {
			return {
				entity:{},
				title:"",
				detail:"",
				libraryId:"",
				options:{}
			};
		},
		onLoad(options){
			this.options=options
			this.getData()
		},
		methods:{
			changeType(type){
				this.type=type
			},
			handleIndustryChange(industryEntity){
				this.industryEntity=industryEntity
			},
			getData() {
				//获取巨划算
				this.$getJson('/api/v2/vue/sqPlus/library/detail.jsp', {
					data: JSON.stringify({
						libraryId: this.options.id||180,
						// mobile: uni.getStorageSync('mobile')
					})
				}, 'POST', res => {
					console.log(res)
					
					this.entity={...res.data.cjCompanyTextLibrary,detail:dealRich(res.data.cjCompanyTextLibrary.detail)}
					this.title=this.entity.title
					this.libraryId=this.entity.id
					this.$refs.detail.editorCtx.setContents({html:this.entity.detail})
				}) 
			},
			submit(){
			this.$refs.detail.editorCtx.getContents({success:({html})=>{
				this.$getJson(
					'/api/v2/vue/sqPlus/library/doAddOrEditLibrary.jsp', {
						data:JSON.stringify({
							libraryId: this.libraryId,
							companyId: this.companyId||202,											
							title:this.title,
							detail:html
						})
					},
					'POST',
					res => {
						uni.navigateBack({
							
						})
					}
				);
			}})
				
			} 
		}
	}
</script>


