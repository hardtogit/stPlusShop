<style lang="scss">
	.container{
		border: 1upx solid #ddd;
		min-height: 300upx;
		padding: 20upx; 
		padding-bottom: 100upx;
		position: relative;
		.textarea{
			width: 100%;
		}
		.image{
			display: block;
			width: 100%;
		}
		.btns{
			position: absolute;
			height: 70upx;
			display: flex;
			justify-items: center;
			justify-content: center;
			align-items: center;
			text-align: center;
			border: 1upx solid #ddd;
			border-radius: 4upx;
			bottom: 20upx;
			width: 660upx;
			left: 50%; 
			transform: translate3d(-50%,0,0);
		}
		.tools{
			text-align: right;
			padding: 20upx 0;
			.image{
				display: inline-block;
				width: 28upx;
				height: 28upx;
				margin-left: 20upx;
			}
			.sure{
				color: #FF474D;
				font-size: 25upx;
			}
		}
		.text{
			position: relative; 
			text-align: justify;
		}
		.text-edit{
			width: 100%;
		}
	}
</style>
<template>
	<view class="article-edit">
		<view class="container">
			<view v-for="(item,index) in dataSource" :key="index">
				<view v-if="item.type=='text'">
					<view class="text" v-if='item.editting==false'>
						<view class="tools">
							<image @click="editText(index)" class="image" src="../static/icon/user/edit.png"></image>
							<image @click="deleteItem(index)" class="image" src="../static/icon/user/del.png"></image>
						</view>
					{{item.value}}
					</view>
					<view class="text" v-if='item.editting==true'>
						<view class="tools">
							<view class="sure" @click="sure()">确定</view>
						</view>
						<textarea class="text-edit" v-if='item.editting==true' v-model="item.value"></textarea>
					</view>
				</view>
				<view v-if="item.type=='image'" class="text">
					<view class="tools">
						<image @click="editImage(index)" class="image" src="../static/icon/user/edit.png"></image>
						<image @click="deleteItem(index)" class="image" src="../static/icon/user/del.png"></image>
					</view>
					<image class="image" :src="ctx+item.value" mode="aspectFit"></image>
				</view>
			</view>
			<view class="text">
				<view class="tools">
					<view class="sure" @click="addText()">确认添加</view>
				</view>
				<textarea v-model="currentText" class="textarea" name="" id="" cols="30" rows="10" placeholder="请填写...">
				</textarea>
			</view>
			<view class="btns" @click="addImg()">
				添加图片
			</view> 
		</view>
	</view> 
</template>

<script>
	export default {
		data() {
			return {
				ctx:this.$ctx,
				dataSource:[]
			};
		},
		methods:{
			editText(index){
				const copyDataSource=this.dataSource.map((item)=>({...item,editting:false}))
				this.dataSource=[copyDataSource.slice(0,index),{...copyDataSource[index],editting:true},...copyDataSource.slice(index+1,copyDataSource.length)]	
			},
			editImage(index){
				const copyDataSource=this.dataSource.map((item)=>({...item,editting:false}))
				let url=null
				this.$upload(1,res => {
					this.dataSource=[copyDataSource.slice(0,index),{...copyDataSource[index],value:res},...copyDataSource.slice(index+1,copyDataSource.length)]
					})
			},
			sure(){
				const copyDataSource=this.dataSource.map((item)=>({...item,editting:false}))
				this.dataSource=copyDataSource
			},
			deleteItem(index){
				const copyDataSource=this.dataSource.map((item)=>({...item}))
				this.dataSource=[...copyDataSource.slice(0,index),...copyDataSource.slice(index+1,copyDataSource.length)]					
			},
			 addImg(){  	
				 // const copyDataSource=this.dataSource.map((item)=>({...item,editting:false}))
				 this.$upload(1,res => {
				 	this.dataSource.push({ type:'image',value:res,editting:false});
				 	})
			 },
			 addText(){
				 if(!this.currentText){
					 uni.showToast({
					 	title:'请填写文字内容后，再点击添加文字',
						icon:'none'
					 })
					 return
				 }
				 this.dataSource.push({
					 type:'text',
					 value:this.currentText,
					 editting:false
				 })
				 this.currentText=''
			 }
		} 
	}
</script>


