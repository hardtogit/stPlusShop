<template>
	<view class="industry">
		<picker mode="selector" :range="data" range-key="name" @change="handleChange" value="value">
			<slot></slot>
		</picker>
		<view @click="add">添加</view>
		<!-- 弹窗 -->
		<uni-popup ref="specPop" type="center" :show=true>
			<view class="specContainer">
				<input class="label input" type="text" placeholder="输入新类别" v-model="type">
				<view class="btn" @click="saveType()">确定</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup'
	export default {
		props: {
			onChange: {
				type: Function,
				default: () => {}
			}
		},
		components: {
			uniPopup
		},
		data() {
			return {
				data: [],
				value: 0,
				type: ''
			};
		},
		mounted() {
			this.getData()
		},
		methods: {
			handleChange(e) {
				this.value = e.detail.value
				this.$emit("onChange", this.data[e.detail.value]);
				// this.onChange(this.data[e.detail.value])
			},
			add() {
				this.$refs.specPop.open()
			},
			getData() {
				this.$getJson('/api/v3/store/goods/category/list.jsp', {
					'storeId': 203
				}, 'GET', res => {
					this.data = res.data
				})
			},
			saveType() {
				this.$getJson(
					'/api/v3/store/goods/category/addOrUpdate.jsp', {
						storeId: 203,
						name: this.type
					},
					'POST',
					res => {
						this.$refs.specPop.close()
						this.getData()
					}
				);


			}
		}
	}
</script>

<style lang="scss">
	.industry {
		display: inline-block;
		width: 100%;
	}
</style>
