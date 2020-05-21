
 var md5 = require('md5');
 /**
  * 求小数点后的数据长度
  */
 function deal(arg) {
     var t = 0;
     try {
         t = arg.toString().split(".")[1].length
     } catch(e) {}
     return t;
 }
function accMul(arg1, arg2) {
     var m = 0;
     m += deal(arg1);
     m += deal(arg2);
     var r1 = Number(arg1.toString().replace(".", ""));
     var r2 = Number(arg2.toString().replace(".", ""));
     return(r1 * r2) / Math.pow(10, m)
 }
 function wxpay(res) {
 		console.log(res)
		var appId = "wxcf34eb890a5b3794";
		var key = 'sdlsjo32Y23ms023L923nnd98Hjd032Y';
 		var nonce_str = randomString(32);
		var openid = uni.getStorageSync('openid');
 		var stringA = "appid="+appId+"&body=youduoduo&device_info=1000&mch_id=1508331751&nonce_str=" +
 			nonce_str + "&notify_url=http://gezen.51youduoduo.com/ydd1/api/v3/wxPay/wxPayBack.jsp" + "&openid=" +
			openid + "&out_trade_no=" +
 			res.sn + "&spbill_create_ip=47.105.143.198&total_fee=" + accMul(res.money,100) + "&trade_type=JSAPI";
 		var stringSignTemp = stringA + "&key="+key; //注：key为商户平台设置的密钥key
 		console.log("stringSignTemp：", stringSignTemp);
 		var sign = md5(stringSignTemp).toUpperCase(); //注：MD5签名方式
 		console.log("sign//", sign)
 		var formData = "<xml>" +
 			"<appid><![CDATA["+appId+"]]></appid>" +
 			"<body><![CDATA[youduoduo]]></body>" +
			"<device_info><![CDATA[1000]]></device_info>" +
 			"<mch_id><![CDATA[1508331751]]></mch_id>" +
 			"<nonce_str><![CDATA[" + nonce_str + "]]></nonce_str>" +
 			"<notify_url><![CDATA[http://gezen.51youduoduo.com/ydd1/api/v3/wxPay/wxPayBack.jsp]]></notify_url>" +
 			"<openid><![CDATA[" + openid + "]]></openid>" +
 			"<out_trade_no><![CDATA[" + res.sn + "]]></out_trade_no>" +
 			"<spbill_create_ip><![CDATA[47.105.143.198]]></spbill_create_ip>" +
 			"<total_fee><![CDATA[" + accMul(res.money,100) + "]]></total_fee>" +
 			"<trade_type><![CDATA[JSAPI]]></trade_type>" +
 			"<sign>" + sign + "</sign>" +
 			"</xml>"
 		console.log("formData//", formData)
 		wx.request({
 			url: 'https://api.mch.weixin.qq.com/pay/unifiedorder',
 			method: 'POST',
 			head: 'application/x-www-form-urlencoded',
 			data: formData, // 设置请求的 header
 			success: function(res) {
 				console.log(res.data)
 				var result_code = getXMLNodeValue('return_code', res.data.toString("utf-8"))
 				var resultCode = result_code.split('[')[2].split(']')[0]
 				if (resultCode == 'FAIL') {
 					var err_code_des = getXMLNodeValue('return_msg', res.data.toString("utf-8"))
 					var errDes = err_code_des.split('[')[2].split(']')[0]
 					wx.navigateBack({
 						delta: 1, // 回退前 delta(默认为1) 页面
 						success: function(res) {
 							wx.showToast({
 								title: errDes,
 								icon: 'success',
 								duration: 2000
 							})
 						},
 					})
 				} else {
 					//发起支付
 					var prepay_id = getXMLNodeValue('prepay_id', res.data.toString("utf-8"))
 					var tmp = prepay_id.split('[')
 					var tmp1 = tmp[2].split(']')
 					//签名  
 					var timeStamp = createTimeStamp();
 					var nonceStr = randomString(32);
 					var stringSignTemp = "appId="+appId+"&nonceStr=" + nonceStr + "&package=prepay_id=" + tmp1[0] +
 						"&signType=MD5&timeStamp=" + timeStamp + "&key=" + key
 					var sign = md5(stringSignTemp).toUpperCase()
 					console.log(sign)
 					var param = {
 						"timeStamp": timeStamp,
 						"package": 'prepay_id=' + tmp1[0],
 						"paySign": sign,
 						"signType": "MD5",
 						"nonceStr": nonceStr
 					}
 					pay(param)
 				}
 			},
 		})
 	}
 	/* 随机数 */
	function randomString(len) {
 		var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
 		var maxPos = chars.length;
 		var pwd = '';
 		for (var i = 0; i < len; i++) {
 			pwd += chars.charAt(Math.floor(Math.random() * maxPos));
 		}
 		return pwd;
 	}
 	/* 获取prepay_id */
 	function getXMLNodeValue(node_name, xml) {
 		var tmp = xml.split("<" + node_name + ">")
 		var _tmp = tmp[1].split("</" + node_name + ">")
 		return _tmp[0]
 	}
 	/* 时间戳产生函数   */
 	function createTimeStamp() {
 		return parseInt(new Date().getTime() / 1000) + ''
 	}
 	/* 支付   */
 	function pay(param) {
		console.log(param)
 		wx.requestPayment({
 			timeStamp: param.timeStamp,
 			nonceStr: param.nonceStr,
 			package: param.package,
 			signType: param.signType,
 			paySign: param.paySign,
 			success: function(res) {
 				// success
 				console.log(res)
				wx.showToast({
					title: '支付成功',
					icon: 'success',
					duration: 2000
				})
				setTimeout(()=>{
					uni.redirectTo({
						url: '/pages/money/paySuccess'
					})
				},1000)
 			},
 			fail: function(e) {
 				// fail
 				console.log("支付失败")
				console.log(e)
 			},
 			complete: function(e) {
 				// complete
 				console.log("pay complete")
				console.log(e)
 			}
 		})
 	}
 	export {
 		wxpay,
		randomString
 	};
