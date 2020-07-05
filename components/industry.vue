<template>
	<view class="industry">
		<picker mode="selector" :range="data" range-key="name" @change="handleChange" value="value">
			<slot></slot>
		</picker>
	</view>
</template>

<script>
	export default {
		props:{
			onChange:{
				type:Function,
				default:()=>{}
			}
		},
		data() {
			return {
				data:[],
				value:0,
				storeId:''
			};
		},
		mounted(){
			this.$getJson('/jsp/api/resources/ajaxGetIndustry.jsp',{},'POST',res=>{
				this.data=res.data.industry
			}) 
		},
		methods:{
		  handleChange(e){
			  this.value=e.detail.value
			  this.$emit("onChange",this.data[e.detail.value]);
			  // this.onChange(this.data[e.detail.value])
		  }	
		}
	}
</script>

<style lang="scss">

</style>
