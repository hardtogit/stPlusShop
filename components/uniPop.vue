<template>
        <view class="unipop__ui_panel">
            <view v-if="opts.shade" class="unipop__ui_mask" @tap="shadeTaped"></view>
            <view class="unipop__ui_main">
                <view class="unipop__ui_child" :style="opts.style">
                    <!-- 标题 -->
                    <view v-if="opts.title" class="unipop__ui_tit">{{opts.title}}</view>
                    <!-- 内容 -->
                    <view v-if="opts.content" class="unipop__ui_cnt" :style="opts.contentStyle">
                        {{opts.content}}
                    </view>
                    <view v-if="opts.btns" class="unipop__ui_btns">
                        <text v-for="(item,index) in opts.btns" :key="index" class="btn" :style="item.style" @tap="btnTaped(item)">{{item.text}}</text>
                    </view>
					<view class="unipop__ui_btns">
						<button @click="cancel">取消</button>
						<button class="navigator" open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber" @getphonenumber="getPhoneNumber">确定</button>
					</view>
                </view>
				
                <!-- xclose -->
                <view v-if="opts.xclose" class="unipop__xclose" @tap="close"></view>
            </view>
        </view>
    </view>
</template>

<script>
	export default {
		data() {
			return {
				defaultOptions: {
					isVisible: false,       //是否显示弹窗
					
					title: '',              //标题
					content: '',            //内容
					contentStyle: '',       //内容样式
					style: null,            //自定义弹窗样式
					skin: '',               //弹窗风格
					icon: '',               //弹窗图标
					xclose: false,          //自定义关闭按钮
					
					shade: true,            //遮罩层
					shadeClose: true,       //点击遮罩关闭
					opacity: '',            //遮罩透明度
					time: 0,                //自动关闭秒数
					end: null,              //销毁弹窗回调函数
					
					anim: 'scaleIn',        //弹窗动画  scaleIn(默认) | fadeIn | shake | top | right | bottom | left
					position: '',           //弹窗位置  top | right | bottom | left
					
					btns: null,             //弹窗按钮
				},
				opts: {},
				timer: null,
				loginCode:'',
				inviterCode:'',
				isUrl:true,
			};
		},
		methods:{
			show(args) {
				this.loginCode=args.loginCode
			    this.opts = Object.assign({}, this.defaultOptions, args, {isVisible: true})
			    this.isUrl=args.isUrl
			    //自动关闭
			    // if(this.opts.time) {
			    //     this.timer = setTimeout(() => {
			    //        this.close()
			    //     }, this.opts.time * 1000)
			    // }
			},
			getPhoneNumber(e) {
				// 加密数据
				var encryptedData = e.detail.encryptedData;
				// 解密方式
				var iv = e.detail.iv;
				if (e.detail.errMsg == 'getPhoneNumber:fail user deny') {
					console.log('他取消掉了');
				} else {
					let _this = this
					_this.$getJson('/api/v2/vue/stPlusShop/common/getMobileAndOpenId.jsp', {
						data: JSON.stringify({
							decryptData: encryptedData,
							code: _this.loginCode,
							iv: iv
						})
					}, 'POST', res => {
						if (res.data.wxUserInfoByPage != null) {
							uni.setStorageSync('openid', res.data.wxUserInfoByPage.openid);
						}
						if (res.data.mobile != null) {
							_this.rigister(res.data.mobile);
							uni.setStorageSync('mobile', res.data.mobile);
						}
					});
				}
			},
			rigister(mobile){
				//注册
				this.$getJson('/api/v2/vue/ydd/user/register.jsp', {
					data: JSON.stringify({
						mobile: mobile,
						inviterCode:this.inviterCode
					})
				}, 'POST', res => {
					this.$emit("changes",res.data);
						uni.setStorageSync('userInfo', res.data);
				})
			},
			cancel(){
				this.close()
				if(this.isUrl==true){
					uni.switchTab({url:'/pages/index/index'})
				}
				
			},
			close(){
				this.$emit("changes",true);
				this.opts.isVisible = false;
			}
		}
	}
</script>

<style>
.unipop__ui_tit{
	text-align: center;
	position: relative;
}

.unipop__ui_cnt{
	text-align: center;
	position: relative;
}
.unipop__ui_btns{
	display:block;
}
.unipop__ui_mask{
	width: 50%;
	height:20%;
	margin-top: 20%;
	margin-left: 20%;
}
</style>
