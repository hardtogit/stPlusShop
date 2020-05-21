<style lang="scss">
page{
	padding: 15upx;
	.staff{
		box-shadow:0px 2px 18px 1px rgba(169,169,169,0.17);
		border-radius:10px;
		width: 720upx;
		padding: 40upx 20upx;
	}
	.title{
		font-size: 38upx;
		border-bottom: 1upx solid #bfbfbf;
		padding: 20upx 0;
	}
	.sub-title{
		font-size: 28upx;
		padding:  20upx 0;
		margin-top: 68upx;
		border-bottom: 1upx solid #bfbfbf;
	}
	.canvas{
		width: 100%;
		height: 400upx;
	}
	.canvas-container{
		// padding:  0 0 0;
		height: 420upx;
		ec-canvas {
		  width: 100%;
		  height: 100%;
		}
	}
	.table-container{
		border: 1upx solid #A0A0A0;
		.table{
			.share{
				font-size: 25upx;
				padding: 20upx;
			}
			padding-bottom: 40upx;
			.center{
				text-align: right;
			}
			.right{
				text-align: right;
			}
			.th{
				display: flex;
				padding: 20upx;
				border-bottom: 1upx solid #A0A0A0;
				.left{
					flex: 1;
				}
				.center{
					width: 160upx;
					font-size: 29upx;
				}
				.right{
					width: 160upx;
					font-size: 29upx;
				}
			}
			.tr{
				padding: 10upx 20upx 0 20upx;
				display: flex;
				font-size: 25upx;
				.left{
					flex: 1;
				}
				.center{
					width: 160upx;
				}
				.right{
					width: 160upx;
				}
			}
			.sub-tr{
				padding: 40upx 20upx 20upx 20upx;
				display: flex;
				font-size: 25upx;
				border-bottom: 1upx solid #A0A0A0;
				.left{
					flex: 1;
					font-size: 29upx;
					
				}
				.center{
					width: 160upx;
				}
				.right{
					width: 160upx;
				}
			}
		}
	}
}
</style>
<template>
	<view class="staff">
		<view class="title">
			张可可
		</view>
		<view class="sub-title">
			最近6个月销售业绩
		</view>
		<view class="canvas-container">
			<ec-canvas id="mychart-dom-bar" canvas-id="mychart-bar" class="canvas" :ec="ec"></ec-canvas>
		</view>
		
		<view class="sub-title">
			最近6个月奖励
		</view>
		<view class="canvas-container">
			<ec-canvas id="mychart-dom-bar" canvas-id="mychart-bar" class="canvas" :ec="ecTwo"></ec-canvas>
		</view>
		<view class="params">
			<view class="date">
				
			</view>
			
		</view>
		<view class="table-container">
			<view class="table">
				<view class="share">分享链接21次</view>
				<view class="th">
					<view class="td left"></view>
					<view class="td center">销售额</view>
					<view class="td right">奖励额</view>
				</view>
				<view class="sub-tr">
					<view class="td left">店铺商品</view>
					<view class="td center">100</view>
					<view class="td right">200</view>
				</view>
				<view class="tr">
					<view class="td left">华为笔记本电脑</view>
					<view class="td center">100</view>
					<view class="td right">200</view>
				</view>
				<view class="tr">
					<view class="td left">华为笔记本电脑</view>
					<view class="td center">100</view>
					<view class="td right">200</view>
				</view>
				<view class="tr">
					<view class="td left">华为笔记本电脑</view>
					<view class="td center">100</view>
					<view class="td right">200</view>
				</view>
				<view class="tr">
					<view class="td left">华为笔记本电脑</view>
					<view class="td center">100</view>
					<view class="td right">200</view>
				</view>
				<view class="sub-tr">
					<view class="td left">商圈券</view>
					<view class="td center">100</view>
					<view class="td right">200</view>
				</view>
				<view class="tr">
					<view class="td left">华为笔记本电脑</view>
					<view class="td center">100</view>
					<view class="td right">200</view>
				</view>
				<view class="tr">
					<view class="td left">华为笔记本电脑</view>
					<view class="td center">100</view>
					<view class="td right">200</view>
				</view>
				<view class="tr">
					<view class="td left">华为笔记本电脑</view>
					<view class="td center">100</view>
					<view class="td right">200</view>
				</view>
				<view class="tr">
					<view class="td left">华为笔记本电脑</view>
					<view class="td center">100</view>
					<view class="td right">200</view>
				</view>
				<view class="sub-tr">
					<view class="td left">聚划算商品</view>
					<view class="td center">100</view>
					<view class="td right">200</view>
				</view>
				<view class="tr">
					<view class="td left">华为笔记本电脑</view>
					<view class="td center">100</view>
					<view class="td right">200</view>
				</view>
				<view class="tr">
					<view class="td left">华为笔记本电脑</view>
					<view class="td center">100</view>
					<view class="td right">200</view>
				</view>
				<view class="tr">
					<view class="td left">华为笔记本电脑</view>
					<view class="td center">100</view>
					<view class="td right">200</view>
				</view>
				<view class="tr">
					<view class="td left">华为笔记本电脑</view>
					<view class="td center">100</view>
					<view class="td right">200</view>
				</view>
				<view class="sub-tr">
					<view class="td left">分销作业</view>
					<view class="td center">100</view>
					<view class="td right">200</view>
				</view>
				<view class="tr">
					<view class="td left">华为笔记本电脑</view>
					<view class="td center">100</view>
					<view class="td right">200</view>
				</view>
				<view class="tr">
					<view class="td left">华为笔记本电脑</view>
					<view class="td center">100</view>
					<view class="td right">200</view>
				</view>
				<view class="tr">
					<view class="td left">华为笔记本电脑</view>
					<view class="td center">100</view>
					<view class="td right">200</view>
				</view>
				<view class="tr">
					<view class="td left">华为笔记本电脑</view>
					<view class="td center">100</view>
					<view class="td right">200</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import wxCharts from '@/static/js/wxcharts-min.js'
	import * as echarts from '../../wxcomponents/ec-canvas/echarts.js';
	export default {
		data() {
			return {
					ec:{
						onInit:"onInit",
						option:{      
				              xAxis: {
				                  data: ["十月","十一月","十二月","一月","二月","三月"],
								  axisLabel:{
									  interval:0
								  },
								  axisLine:{
									  show:false
								  },
								  axisTick:{
									  show:false
								  }
				              },
							  grid:{
								  top:'40',
								  bottom:'40'
								
							  },
				              yAxis: {
								  show:false
							  },
				              series: [{
				                  name: '销量',
				                  type: 'bar',
				                  data: [5, 20, 36, 10, 10, 20],
								  label:{
									  show:true,
									  position:'top'
								  },
									barWidth:"60%",
								  itemStyle:{
									  color:'#F97854'
								  }
				              }]
							}
					},
					ecTwo:{
						onInit:"onInit",
						option:{      
					          xAxis: {
					              data: ["十月","十一月","十二月","一月","二月","三月"],
								  axisLabel:{
									  interval:0
								  },
								  axisLine:{
									  show:false
								  },
								  axisTick:{
									  show:false
								  }
					          },
							  grid:{
								  top:'40',
								  bottom:'40'
								
							  },
					          yAxis: {
								  show:false
							  },
					          series: [{
					              name: '销量',
					              type: 'bar',
					              data: [5, 20, 36, 10, 10, 20],
								  label:{
									  show:true,
									  position:'top'
								  },
									barWidth:"60%",
								  itemStyle:{
									  color:'#FFCB00'
								  }
					          }]
							}
					}
			};
		},
		methods:{
		},
		mounted(){
			
					
		}
	}
</script>


