// 统一请求地址

// #ifdef H5
// const apiUrl = 'https://web.51youduoduo.com';
import { contactPhone } from '@/common/util.js';
// #endif  
// #ifdef MP-WEIXIN
const apiUrl = 'https://api.51youduoduo.com/ydd1';
// const apiUrl = 'http://192.168.4.4:8080';
 let goLoginFlag=true;
// #endif
// 请求方式
const urlRequest = async (url, param, way, callBack,json) => {
	let token = "";  
	uni.getStorage({
		key: 'token',
		success: function(res) {
			token = res.data 
		}
	});
	showLoading("");
	uni.request({
		// #ifdef H5
		url: url,
		// #endif  
		// #ifdef MP-WEIXIN 
		url: apiUrl+url,
		// #endif  
		data: param,
		header: {
			// #ifdef H5
			'userToken': window.sessionStorage.userToken,
			// #endif  
			// #ifdef MP-WEIXIN 
			'openid': uni.getStorageSync("openid"),
			'Cookie': `SESSION=${uni.getStorageSync('SESSION')}`,
			// #endif  
			'Accept': 'application/json',
			'Content-Type': json?'application/json':'application/x-www-form-urlencoded',
		},
		method: way,
		success: (res) => {
			hideLoading();
			// #ifdef H5
			if(res.data.status == 99) 
			contactPhone({type: 'logOut'});
			// #endif  
             if(res.data.message=='请登录'){
				 if(goLoginFlag){
					 goLoginFlag=false
					 uni.navigateTo({
					 	url:'/pages/login/login'
					 })
					 setTimeout(()=>{
						 goLoginFlag=true
					 },10000)
				 }
				
			 }
			callBack(res.data);
		}
	});
}

//属性选择器
const select = (name,callBack) =>{
	uni.createSelectorQuery().select(name).boundingClientRect(data => {
		callBack(data);
	}).exec();
}

//属性选择器
const selectAll = (name,callBack) =>{
	uni.createSelectorQuery().selectAll(name).boundingClientRect(data => {
		callBack(data);
	}).exec();
}


// 提示
const toast = function (title) {
	uni.showToast({
		icon: 'none',
		title: title
	});
}

// 设置本地缓存
const setStorage = function(key,value){
    uni.setStorage({
	    key: key,
	    data: value,
	    success: function () {
	    }
	})
}

// 获取本地缓存
const getStorage = function(key,callBack){
	uni.getStorage({
	    key: key,
	    success: function (res) {
	        callBack(res);
	    }
	});
}






/** 字符串是否不为空 */
const isNotBlank = (value) => {
  return !isBlank(value);
}


/** 显示loading加载框 */
const showLoading = (value) =>{
	if(isBlank(value)){
		uni.showLoading({
    		title: '加载中'
		});
	}else{
		uni.showLoading({
    		title: value
		});
	}
}

/** 隐藏loading加载框 */
const hideLoading = () =>{
	uni.hideLoading();
}


/** 上传文件（只允许上传一张图，多图的未实现） */
const uploadFile = (result,successCallback,Callback) =>{
	let token = "";
	uni.getStorage({
		key: 'token',
		success: function(res) {
			token = res.data 
		}
	});
	showLoading("");
	// Promise
	uni.request({
        url: "/jsp/api/common/getUploadToken.jsp",
		data: {},
		header: {
			'Token': "application_test_2L",
			'Accept': 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded',
		}
    })
    
    .then(data => {//data为一个数组，数组第一项为错误信息，第二项为返回数据
        var [error, res]  = data;
        hideLoading();
        chooseImage(data[1].data.data,successCallback,result,Callback);
    })
		
}

/** 上传文件（只允许上传一张图片） */
const chooseImage = (uploadToken,successCallback,result,Callback) =>{
     // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      var tempFilePaths = result.tempFilePaths;
      showLoading("正在上传...");
  	  var ctx = apiUrl; // 上下文路径 /component/upload2/uploadByForm
      const upload_task = uni.uploadFile({
			url: ctx+'/jsp/api/grem/doUploadFile.jsp', //仅为示例，非真实的接口地址
			filePath: tempFilePaths[0],
			name: 'file',
            formData: {
	          'fileSingleSizeLimit': 10 * 1024 * 1024,
	          'fileSizeLimit': '10MB',
	          'originalName': "ceshi.jpg",
	          'token': uploadToken
	        },
            success: (uploadFileRes) => {
            	console.log(uploadFileRes.data);
                successCallback(uploadFileRes.data);
            },
            error:function(){
            	console.log('上传失败');	
            },
            complete:function(){
            	hideLoading();
            }
    });
    upload_task.onProgressUpdate(async (res) => {
		//console.log('上传进度' + res.progress);
        //console.log('已经上传的数据长度' + res.totalBytesSent);
        //console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
		Callback(res);
	});    
}

/** 获取日期(yyyy-MM-dd) */
const getFormatDate = function getFormatDate(time) {
  if (isBlank(time + "")) {
    return "";
  }
  var timeStr = time + "";
  if (timeStr.length != 17) {
    return "";
  }
  var returnTime = timeStr.substr(0, 4) + "-" + timeStr.substr(4, 2) + "-" + timeStr.substr(6, 2);
  return returnTime;
}

/** 获取日期(yyyy-MM-dd HH:mm:ss) */
const getFormatTime = function getFormatTime(time) {
	  if (isBlank(time + "")) {
	    return "";
	  }
	  var timeStr = time + "";
	  if (timeStr.length != 17) {
	    return "";
	  }
	  var returnTime = timeStr.substr(0, 4) + "-" + timeStr.substr(4, 2) + "-" + timeStr.substr(6, 2) + " " + timeStr.substr(8, 2) + ":" + timeStr.substr(10, 2) + ":" + timeStr.substr(12, 2);
	  return returnTime;
}

/** 将字符串日期格式化为long型 */
const format2long =  function format2long(str) {
  var STANDARD_TIME_LENGTH = 17;
  str = str.replace(/[^0-9]/ig, "");
  if (str.length > STANDARD_TIME_LENGTH) {
    return null;
  }
  // 补充长度
  var fillLen = STANDARD_TIME_LENGTH - str.length;
  var longStr = str;
  for (var i = 0; i < fillLen; i++) {
    longStr = longStr + "0";
  }
  var longTime = Number.parseInt(longStr + "");
  return longTime;
}


/** 字符串是否为空 */
const isBlank = (value) => {
  if (value == null || value == undefined || value == NaN) return true;
  if (typeof value != "string") {
    console.log("参数不是string类型，无法判断是否为空，请自行判断");
    return true;
  }
  if (value.length == 0) return true;
  if (value.trim() == "") return true;
  return false;
}

/** 二维数组转换成‘,’分隔的字符串 array=>数组 paramName=>参数名**/
const arrayToString = (value,paramName) => {
	let array = [];
	for (let i = 0; i < value.length; i++) {
		array.push(value[i][paramName]);
	}
	return array.join();
}

/** 是否是正整数 **/
const isDigits = (value) =>{
	return /^\d+$/.test(value);
}

//处理富文本
export const dealRich=(str)=>{
	const reg=new RegExp('/src=\"\/(ydd1\/)?upload/g')
	const regex = new RegExp('<img', 'gi');
	const result=str.replace(/src=\"\/(ydd1\/)?upload/gi,"src=\"http://gezen.51youduoduo.com/ydd1/upload").replace(regex, '<img style="max-width: 100%"')
	return result 
}

export const unDealRich=(str)=>{
	const reg=new RegExp('/http://gezen.51youduoduo.com/g')
	const result=str.replace(/http:\/\/gezen.51youduoduo.com/g,'')
	return result 
	
}
// 赋值操作
export default {
	apiUrl:apiUrl,
	urlRequest:urlRequest,
	toast:toast,
	setStorage:setStorage,
	getStorage:getStorage,
	isBlank:isBlank,
	isNotBlank:isNotBlank,
	hideLoading:hideLoading,
	showLoading:showLoading,
	uploadFile:uploadFile,
	select:select,
	selectAll:selectAll,
	getFormatDate:getFormatDate,
	getFormatTime:getFormatTime,
	format2long:format2long,
	arrayToString:arrayToString,
	isDigits:isDigits
}
