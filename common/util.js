function formatTime(time) {
	if (typeof time !== 'number' || time < 0) {
		return time
	}

	var hour = parseInt(time / 3600)
	time = time % 3600
	var minute = parseInt(time / 60)
	time = time % 60
	var second = time

	return ([hour, minute, second]).map(function(n) {
		n = n.toString()
		return n[1] ? n : '0' + n
	}).join(':')
}

function formatLocation(longitude, latitude) {
	if (typeof longitude === 'string' && typeof latitude === 'string') {
		longitude = parseFloat(longitude)
		latitude = parseFloat(latitude)
	}

	longitude = longitude.toFixed(2)
	latitude = latitude.toFixed(2)

	return {
		longitude: longitude.toString().split('.'),
		latitude: latitude.toString().split('.')
	}
}
var dateUtils = {
	UNITS: {
		'年': 31557600000,
		'月': 2629800000,
		'天': 86400000,
		'小时': 3600000,
		'分钟': 60000,
		'秒': 1000
	},
	humanize: function(milliseconds) {
		var humanize = '';
		for (var key in this.UNITS) {
			if (milliseconds >= this.UNITS[key]) {
				humanize = Math.floor(milliseconds / this.UNITS[key]) + key + '前';
				break;
			}
		}
		return humanize || '刚刚';
	},
	format: function(dateStr) {
		var date = this.parse(dateStr)
		var diff = Date.now() - date.getTime();
		if (diff < this.UNITS['天']) {
			return this.humanize(diff);
		}
		var _format = function(number) {
			return (number < 10 ? ('0' + number) : number);
		};
		return date.getFullYear() + '/' + _format(date.getMonth() + 1) + '/' + _format(date.getDay()) + '-' +
			_format(date.getHours()) + ':' + _format(date.getMinutes());
	},
	parse: function(str) { //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
		var a = str.split(/[^0-9]/);
		return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
	}
};

function forMatNum(num) {
	return num < 10 ? '0' + num : num + '';
}

function initDays(year, month) {
	let totalDays = new Date(year, month, 0).getDate();
	let dates = [];
	for (let d = 1; d <= totalDays; d++) {
		dates.push(forMatNum(d));
	};
	return dates;
}

function initPicker(start, end, mode = "date", step) {
	let aToday = new Date();
	let tYear = aToday.getFullYear().toString();
	let tMonth = forMatNum(aToday.getMonth() + 1).toString();
	let tDay = forMatNum(aToday.getDate()).toString();
	let tHours = forMatNum(aToday.getHours()).toString();
	let tMinutes = forMatNum(aToday.getMinutes()).toString();
	let tSeconds = forMatNum(aToday.getSeconds()).toString();
	let initstartDate = new Date(start);
	let endDate = new Date(end);
	if (start > end) {
		initstartDate = new Date(end);
		endDate = new Date(start);
	};
	let startYear = initstartDate.getFullYear();
	let startMonth = initstartDate.getMonth();
	let endYear = endDate.getFullYear();
	let years = [],
		months = [],
		days = [],
		hours = [],
		minutes = [],
		seconds = [],
		defaultVal = [];
	let totalDays = new Date(startYear, startMonth, 0).getDate();
	for (let s = startYear; s <= endYear; s++) {
		years.push(s + '');
	};
	for (let m = 1; m <= 12; m++) {
		months.push(forMatNum(m));
	};
	for (let d = 1; d <= totalDays; d++) {
		days.push(forMatNum(d));
	}
	for (let h = 0; h < 24; h++) {
		hours.push(forMatNum(h));
	}
	for (let m = 0; m < 60; m += step * 1) {
		minutes.push(forMatNum(m));
	}
	for (let s = 0; s < 60; s++) {
		seconds.push(forMatNum(s));
	}
	switch (mode) {
		case "date":
			defaultVal = [years.indexOf(tYear), months.indexOf(tMonth), days.indexOf(tDay)];
			return {
				years,
				months,
				days,
				defaultVal
			}
			break;
		case "yearMonth":
			defaultVal = [years.indexOf(tYear), months.indexOf(tMonth)];
			return {
				years,
				months,
				defaultVal
			}
			break;
		case "dateTime":
			defaultVal = [years.indexOf(tYear), months.indexOf(tMonth), days.indexOf(tDay), hours.indexOf(tHours), minutes.indexOf(
				tMinutes), seconds.indexOf(tSeconds)];
			return {
				years,
				months,
				days,
				hours,
				minutes,
				seconds,
				defaultVal
			}
			break;
		case "time":
			defaultVal = [hours.indexOf(tHours), minutes.indexOf(tMinutes), seconds.indexOf(tSeconds)];
			return {
				hours,
				minutes,
				seconds,
				defaultVal
			}
			break;
	}
}

function date17() {
	let str = ''
	let time = new Date();
	let year = time.getFullYear();
	let month = time.getMonth() + 1;
	let date = time.getDate();
	let hours = time.getHours();
	let minutes = time.getMinutes();
	let seconds = time.getSeconds();
	if (month < 10) {
		month = '0' + month
	}
	if (date < 10) {
		date = '0' + date
	}
	if (hours < 10) {
		hours = '0' + hours
	}
	if (minutes < 10) {
		minutes = '0' + minutes
	}
	if (seconds < 10) {
		seconds = '0' + seconds
	}
	str = '' + year + month + date + hours + minutes + seconds + '000';
	return str
}

//base64加密
function Base64() {
	var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	this.encode = function(input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;
		input = _utf8_encode(input);
		while (i < input.length) {
			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);
			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;
			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}
			output = output +
				_keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
				_keyStr.charAt(enc3) + _keyStr.charAt(enc4);
		}
		return output;
	}
	// public method for decoding
	this.decode = function(input) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
		while (i < input.length) {
			enc1 = _keyStr.indexOf(input.charAt(i++));
			enc2 = _keyStr.indexOf(input.charAt(i++));
			enc3 = _keyStr.indexOf(input.charAt(i++));
			enc4 = _keyStr.indexOf(input.charAt(i++));
			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;
			output = output + String.fromCharCode(chr1);
			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}
		}
		output = _utf8_decode(output);
		return output;
	}
	// private method for UTF-8 encoding
	function _utf8_encode(string) {
		string = string.replace(/\r\n/g, "\n");
		var utftext = "";
		for (var n = 0; n < string.length; n++) {
			var c = string.charCodeAt(n);
			if (c < 128) {
				utftext += String.fromCharCode(c);
			} else if ((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			} else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}
		}
		return utftext;
	}
	// private method for UTF-8 decoding
	function _utf8_decode(utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;
		while (i < utftext.length) {
			c = utftext.charCodeAt(i);
			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			} else if ((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i + 1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			} else {
				c2 = utftext.charCodeAt(i + 1);
				c3 = utftext.charCodeAt(i + 2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}
		}
		return string;
	}
}


// #ifdef H5
/**
 * 调用手机的方法
 * @param data
 * data示例 var data={type:"终端方法名",a:"参数",callback:"回调方法名"}
 */
function contactPhone(data) {
	var base = new Base64();
	var jsonData = base.encode(JSON.stringify(data))
	if (uni.getSystemInfoSync().platform === 'android') {
		console.log('运行Android上')
		app.up72(jsonData)
	} else {
		console.log('运行iOS上')
		  window.webkit.messageHandlers.up72.postMessage(jsonData);
	}
}
/**
 * 调用手机的方法
 * @param data
 * data示例 var data={type:"终端方法名",a:"参数",callback:"回调方法名"}
 */
function uploadImg(callBackStr) {
	  var data = {
        type:'uploadImage',
        callback:callBackStr,
    }
	var base = new Base64();
	var jsonData = base.encode(JSON.stringify(data))
	if (uni.getSystemInfoSync().platform === 'android') {
		console.log('运行Android上')
		app.up72(jsonData)
	} else {
		console.log('运行iOS上')
		  window.webkit.messageHandlers.up72.postMessage(jsonData);
	}
}

/**
 * 调用手机方法放大图片
 * @param img
 * @param imgs
 */
function enlargeImg(img,imgs) {
    var data = {
        type: 'enlargeImg',
        data: {img: img, imgs: imgs}
    }
    var base = new Base64();
    var jsonData = base.encode(JSON.stringify(data));
	if (uni.getSystemInfoSync().platform === 'android') {
		console.log('运行Android上')
		app.up72(jsonData)
	} else {
		console.log('运行iOS上')
		  window.webkit.messageHandlers.up72.postMessage(jsonData);
	}
}
/**
 * 调用手机的方法,获取当前登录用户的token
 * @param data
 * data示例 var data={type:"终端方法名",a:"参数",callback:"回调方法名"}
 */
function getUserTokenByApp(callBackStr) { 
	if(process.env.NODE_ENV === 'development'){　　　　　　　　　　　　
		console.log('开发环境')
		window.sessionStorage.userToken = 'TwfyW3Xe1tblRSns91567764332116'
	}else{
		var data = {
			type:'appUserToken',
			callback:callBackStr,
		}
		var base = new Base64();
		var jsonData = base.encode(JSON.stringify(data))
		if (uni.getSystemInfoSync().platform === 'android') {
			console.log('运行Android上')
			app.up72(jsonData)
		} else {
			console.log('运行iOS上')
			  window.webkit.messageHandlers.up72.postMessage(jsonData);
		}
	}　
}



// #endif  

function addImgClickEvent() {
	var objs = document.getElementsByTagName("img");
	for (var i = 0; i < objs.length; i++) {
		objs[i].addEventListener('click', function(e) {
			enlargeImg(this.src, this.src);
		});
		objs[i].style.cursor = "pointer";
	}
}

function doShDown() {
	if (uni.getSystemInfoSync().platform === 'android') {
		console.log('运行Android上')
		window.location.href = "http://android.myapp.com/myapp/detail.htm?apkName=com.up72.youduoduo"
	} else {
		console.log('运行iOS上')
		window.location.href = "https://itunes.apple.com/cn/app/%E5%8F%8B%E5%A4%9A%E5%A4%9A/id1440124166"
	}
}
module.exports = {
	formatTime: formatTime,
	formatLocation: formatLocation,
	dateUtils: dateUtils,
	initDays,
	initPicker,
	date17: date17,
	Base64: Base64,
	// #ifdef H5
	contactPhone: contactPhone,
	uploadImg: uploadImg,
	enlargeImg: enlargeImg,
	getUserTokenByApp: getUserTokenByApp,
	// #endif
	addImgClickEvent: addImgClickEvent,
	doShDown: doShDown,
}
