import store from '@/common/common.js'
export const upload = (fileAmount, callback) => {
	// #ifdef MP-WEIXIN
	// uni.showToast({
	// 	title: '敬请期待',
	// 	duration: 2000
	// })
	// return;
	// #endif
	uni.chooseImage({
		count: fileAmount, //默认9
		sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
		success: function(res) {
			// res.tempFilePaths 文件路径的集合
			console.log("-----",JSON.stringify(res.tempFilePaths));
			let imgs = [];
			res.tempFilePaths.forEach(item => {
				uni.uploadFile({
					url: `${store.apiUrl}/jsp/api/grem/doUploadFile.jsp`,
					name: 'file',
					filePath: item,
					formData: {
						'fileSingleSizeLimit': 10 * 1024 * 1024,
						'fileSizeLimit': '10MB',
						'originalName': "ceshi.jpg",
						'token': `TwfyW3Xe1tblRSns91567764332116`
					},
					success: (res) => {
						let {
							data
						} = JSON.parse(res.data)
						console.log('路劲', JSON.parse(res.data))
						callback(data[0].relativePath)
					},
					fail: (err) => {
						uni.showToast({
							title: err.errMsg,
							icon: 'none'
						})
					}
				});
			})
		}
	});
}
