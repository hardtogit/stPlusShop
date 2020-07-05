<template>
	<view>
		<view class="businessCardF4f4f4">
			<!--名片1-->
			<view class="businessCardOne" v-if="intvCjUser.cardId == 1">
				<view class="cardName">
					<!-- <image lazy-load :src="ctx + '/images/icon-14.png'"mode="widthFix"></image> -->
					<view class="topLeft">
						<view class="name">{{ intvCjUser.realName }}</view>
						<view class="job">{{ cjCompanyUser.job }}</view>
					</view>
					<view class="comName">{{ cjCompany.name }}</view>
				</view>
				<view class="cardCard">
					<image :src="cjCompany.logoPath ? ctx + cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
				</view>
				<view class="bottomRight">
					<view class="labelCon">
						<text>M</text>
						<text class="colon">：</text>{{ intvCjUser.mobile }}
					</view>
					<view class="labelCon">
						<text>T</text>
						<text class="colon">：</text>{{ intvCjUser.phone }}
					</view>
					<view class="labelCon">
						<text>E</text>
						<text class="colon">：</text>{{ intvCjUser.email }}
					</view>
					<view class="labelCon" v-if="cjCompany.addressStr != null && cjCompany.addressStr != 'null'">
						<text>A</text>
						<text class="colon">：</text>{{ cjCompany.addressStr }}
					</view>
				</view>
			</view>
			<!--名片2-->
			<view class="businessCardTwo" v-if="intvCjUser.cardId == 2">
				<view class="businessCardTwoBg">
					<view class="cardCard">
						<image :src="cjCompany.logoPath ? ctx + cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
					</view>
					<view class="cardName">
						<!-- <image lazy-load :src="ctx + '/images/icon-21.png'"mode="widthFix"></image> -->
						<view class="comName">{{ cjCompany.name }}</view>
					</view>
					<view class="bottomLeft">
						<view class="name">{{ intvCjUser.realName }}</view>
						<view class="job" style="word-wrap:break-word;word-break:break-all;">{{ cjCompanyUser.job }}</view>
					</view>
					<view class="bottomRight">
						<view class="labelCon">
							<text>M</text>
							<text class="colon">：</text>{{ intvCjUser.mobile }}
						</view>
						<view class="labelCon">
							<text>T</text>
							<text class="colon">：</text>{{ intvCjUser.phone }}
						</view>
						<view class="labelCon">
							<text>E</text>
							<text class="colon">：</text>{{ intvCjUser.email }}
						</view>
						<view class="labelCon" v-if="cjCompany.addressStr != null && cjCompany.addressStr != 'null'">
							<text>A</text>
							<text class="colon">：</text>{{ cjCompany.addressStr }}
						</view>
					</view>
				</view>
			</view>
			<!--名片3-->
			<view class="businessCardThree" v-if="intvCjUser.cardId == 3">
				<image lazy-load :src="ctx + '/images/bg-06.png'"mode="widthFix" class="leftBg"></image>
				<image lazy-load :src="ctx + '/images/bg-07.png'"mode="widthFix" class="RightBg"></image>
				<view class="cardCard">
					<image :src="cjCompany.logoPath ? ctx + cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
				</view>
				<view class="cardName">
					<view class="perName">
						{{ intvCjUser.realName }}
						<text class="job">{{ cjCompanyUser.job }}</text>
					</view>
					<view class="comName">{{ cjCompany.name }}</view>
				</view>
				<view class="bottomRight">
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-23.png'"mode="widthFix" class="iconBg"></image>
						{{ intvCjUser.mobile }}
					</view>
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-24.png'"mode="widthFix" class="iconBg"></image>
						{{ intvCjUser.phone }}
					</view>
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-25.png'"mode="widthFix" class="iconBg"></image>
						{{ intvCjUser.email }}
					</view>
					<view class="labelCon" v-if="cjCompany.addressStr != null && cjCompany.addressStr != 'null'">
						<image lazy-load :src="ctx + '/images/icon-22.png'"mode="widthFix" class="iconBg"></image>
						{{ cjCompany.addressStr }}
					</view>
				</view>
			</view>
			<!--名片4-->
			<view class="businessCardFore" v-if="intvCjUser.cardId == 4">
				<view class="cardCard">
					<image :src="cjCompany.logoPath ? ctx + cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
				</view>
				<view class="bottomLeft">
					<view class="name">{{ intvCjUser.realName }}</view>
					<view class="job">{{ cjCompanyUser.job }}</view>
				</view>
				<view class="comName">{{ cjCompany.name }}</view>
				<view class="bottomRight">
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-26.png'"mode="widthFix" class="iconBg"></image>
						{{ intvCjUser.mobile }}
					</view>
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-27.png'"mode="widthFix" class="iconBg"></image>
						{{ intvCjUser.email }}
					</view>
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-28.png'"mode="widthFix" class="iconBg"></image>
						{{ intvCjUser.phone }}
					</view>
					<view class="labelCon" v-if="cjCompany.addressStr != null && cjCompany.addressStr != 'null'">
						<image lazy-load :src="ctx + '/images/icon-29.png'"mode="widthFix" class="iconBg"></image>
						{{ cjCompany.addressStr }}
					</view>
				</view>
				<view class="bottomBg"></view>
			</view>
			<!--名片5-->
			<view class="businessCardFive" v-if="intvCjUser.cardId == 5">
				<view class="cardCard">
					<image :src="cjCompany.logoPath ? ctx + cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
				</view>
				<view class="comName">{{ cjCompany.name }}</view>
				<view class="bottomLeft">
					<view class="name">{{ intvCjUser.realName }}</view>
					<view class="job">{{ cjCompanyUser.job }}</view>
				</view>
				<view class="bottomRight">
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-26.png'"mode="widthFix" class="iconBg"></image>
						<text>{{ intvCjUser.mobile }}</text>
					</view>
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-28.png'"mode="widthFix" class="iconBg"></image>
						<text>{{ intvCjUser.phone }}</text>
					</view>
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-27.png'"mode="widthFix" class="iconBg"></image>
						<text>{{ intvCjUser.email }}</text>
					</view>
					<view class="labelCon" v-if="cjCompany.addressStr != null && cjCompany.addressStr != 'null'">
						<image lazy-load :src="ctx + '/images/icon-29.png'"mode="widthFix" class="iconBg"></image>
						<text>{{ cjCompany.addressStr }}</text>
					</view>
				</view>
				<view class="bottomBg"></view>
			</view>
			<!--名片6-->
			<view class="businessCardSix" v-if="intvCjUser.cardId == 6">
				<view class="cardCard">
					<image :src="cjCompany.logoPath ? ctx + cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
				</view>
				<view class="rightCon">
					<view class="limeBg"></view>
					<view class="labelCon firstimg">
						<image lazy-load :src="ctx + '/images/icon-37.png'"mode="widthFix" class="iconBg"></image>
						<view class="comName">{{ cjCompany.name }}</view>
						<view class="name">{{ intvCjUser.realName }}</view>
						<view class="job">{{ cjCompanyUser.job }}</view>
					</view>
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-41.png'"mode="widthFix" class="iconBg"></image>{{ intvCjUser.mobile }}
					</view>
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-38.png'"mode="widthFix" class="iconBg"></image>{{ intvCjUser.email }}
					</view>
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-39.png'"mode="widthFix" class="iconBg"></image>{{ intvCjUser.phone }}
					</view>
					<view class="labelCon" v-if="cjCompany.addressStr != null && cjCompany.addressStr != 'null'">
						<image lazy-load :src="ctx + '/images/icon-40.png'"mode="widthFix" class="iconBg"></image>{{ cjCompany.addressStr }}
					</view>
				</view>
			</view>
			<!--名片7-->
			<view class="businessCardSeven" v-if="intvCjUser.cardId == 7">
				<image class="businessCardSevenBg" lazy-load :src="ctx + '/images/bg-10.png'"mode="widthFix"></image>
				<view class="cardCard">
					<image :src="cjCompany.logoPath ? ctx + cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
				</view>
				<view class="bottomLeft">
					<view class="name">{{ intvCjUser.realName }}</view>
					<view class="job">{{ cjCompanyUser.job }}</view>
				</view>
				<view class="bottomRight">
					<view class="labelCon">{{ cjCompany.name }}</view>
					<view class="labelCon"><text>M</text><text class="colon">：</text>{{ intvCjUser.mobile }}</view>
					<view class="labelCon"><text>T</text><text class="colon">：</text>{{ intvCjUser.phone }}</view>
					<view class="labelCon"><text>E</text><text class="colon">：</text>{{ intvCjUser.email }}</view>
					<view class="labelCon" v-if="cjCompany.addressStr != null && cjCompany.addressStr != 'null'"><text>A</text><text
						 class="colon">：</text>{{ cjCompany.addressStr }}
					</view>
				</view>
			</view>
			<!--名片8-->
			<view class="businessCardEight" v-if="intvCjUser.cardId == 8">
				<image class="businessCardEightBg" lazy-load :src="ctx + '/images/bg-09.jpg'"mode="widthFix"></image>
				<view class="eightTop">
					<view class="eightTopLeft">
						<view class="cardCard">
							<image :src="cjCompany.logoPath ? ctx + cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
						</view>
						<view class="labelCon">{{ cjCompany.name }}</view>
					</view>
					<view class="bottomLeft eightTopRight">
						<view class="name">{{ intvCjUser.realName }}</view>
						<view class="job">{{ cjCompanyUser.job }}</view>
					</view>
				</view>

				<view class="bottomRight">
					<view class="labelCon"><text>M</text><text class="colon">：</text>{{ intvCjUser.mobile }}</view>
					<view class="labelCon"><text>T</text><text class="colon">：</text>{{ intvCjUser.phone }}</view>
					<view class="labelCon"><text>E</text><text class="colon">：</text>{{ intvCjUser.email }}</view>
					<view class="labelCon" v-if="cjCompany.addressStr != null && cjCompany.addressStr != 'null'"><text>A</text><text
						 class="colon">：</text>{{ cjCompany.addressStr }}
					</view>
				</view>
			</view>
			<!--名片9-->
			<view class="businessCardNine" v-if="intvCjUser.cardId == 9">
				<view class="nineTop">
					<view class="cardCard">
						<image :src="cjCompany.logoPath ? ctx + cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
					</view>
					<view class="labelCon">{{ cjCompany.name }}</view>
				</view>
				<view class="nineBottom">
					<view class="bottomRight">
						<view class="labelCon">
							<image lazy-load :src="ctx + '/images/icon-42.png'"mode="widthFix" class="iconBg"></image>{{ intvCjUser.mobile }}
						</view>
						<view class="labelCon">
							<image lazy-load :src="ctx + '/images/icon-43.png'"mode="widthFix" class="iconBg"></image>{{ intvCjUser.email }}
						</view>
						<view class="labelCon">
							<image lazy-load :src="ctx + '/images/icon-44.png'"mode="widthFix" class="iconBg"></image>{{ intvCjUser.phone }}
						</view>
						<view class="labelCon" v-if="cjCompany.addressStr != null && cjCompany.addressStr != 'null'">
							<image lazy-load :src="ctx + '/images/icon-45.png'"mode="widthFix" class="iconBg"></image>{{ cjCompany.addressStr }}
						</view>
					</view>
					<view class="bottomLeft">
						<view class="name">{{ intvCjUser.realName }}</view>
						<view class="job">{{ cjCompanyUser.job }}</view>
					</view>
				</view>
			</view>
			<!--名片10-->
			<view class="businessCardTen" v-if="intvCjUser.cardId == 10">
				<view class="cardCard">
					<image :src="cjCompany.logoPath ? ctx + cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
				</view>
				<view class="nineBottom">
					<view class="bottomRight">
						<view class="labelCon">
							<image lazy-load :src="ctx + '/images/icon-26.png'"mode="widthFix" class="iconBg"></image>{{ intvCjUser.mobile }}
						</view>
						<view class="labelCon">
							<image lazy-load :src="ctx + '/images/icon-27.png'"mode="widthFix" class="iconBg"></image>{{ intvCjUser.email }}
						</view>
						<view class="labelCon">
							<image lazy-load :src="ctx + '/images/icon-28.png'"mode="widthFix" class="iconBg"></image>{{ intvCjUser.phone }}
						</view>
						<view class="labelCon" v-if="cjCompany.addressStr != null && cjCompany.addressStr != 'null'">
							<image lazy-load :src="ctx + '/images/icon-29.png'"mode="widthFix" class="iconBg"></image>{{ cjCompany.addressStr }}
						</view>
					</view>
					<view class="bottomLeft">
						<view class="name">
							{{ intvCjUser.realName }}
							<text class="comName">{{ cjCompany.name }}</text>
						</view>
						<view class="job">
							<view class="con">{{ cjCompanyUser.job }}</view>
							<view class="line"></view>
						</view>
					</view>
				</view>
			</view>
			<!--名片11-->
			<view class="businessCardEleven" v-if="intvCjUser.cardId == 11">
				<image lazy-load :src="ctx + '/images/bg-10.jpg'" mode="aspectFill" class="businessCardElevenBg"></image>
				<view class="comName">{{ cjCompany.name }}</view>
				<view class="cardCard">
					<image :src="cjCompany.logoPath ? ctx + cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
				</view>
				<view class="nineBottom">
					<view class="bottomRight">
						<view class="labelCon">
							<image lazy-load :src="ctx + '/images/icon-46.png'"mode="widthFix" class="iconBg"></image>{{ intvCjUser.mobile }}
						</view>
						<view class="labelCon">
							<image lazy-load :src="ctx + '/images/icon-47.png'"mode="widthFix" class="iconBg"></image>{{ intvCjUser.email }}
						</view>
						<view class="labelCon">
							<image lazy-load :src="ctx + '/images/icon-48.png'"mode="widthFix" class="iconBg"></image>{{ intvCjUser.phone }}
						</view>
						<view class="labelCon" v-if="cjCompany.addressStr != null && cjCompany.addressStr != 'null'">
							<image lazy-load :src="ctx + '/images/icon-49.png'"mode="widthFix" class="iconBg"></image>{{ cjCompany.addressStr }}
						</view>
					</view>
					<view class="bottomLeft">
						<view class="name">{{ intvCjUser.realName }}</view>
						<view class="job">{{ cjCompanyUser.job }}</view>
					</view>
				</view>
			</view>
			<!--名片12-->
			<view class="businessCardTwelve" v-if="intvCjUser.cardId == 12">
				<image lazy-load :src="ctx + '/images/bg-11.jpg'" mode="aspectFill" class="businessCardElevenBg"></image>
				<view class="comName">{{ cjCompany.name }}</view>
				<view class="cardCard">
					<image :src="cjCompany.logoPath ? ctx + cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
				</view>
				<view class="bottomRight">
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-50.png'"mode="widthFix" class="iconBg"></image>{{ intvCjUser.mobile }}
					</view>
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-52.png'"mode="widthFix" class="iconBg"></image>{{ intvCjUser.email }}
					</view>
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-51.png'"mode="widthFix" class="iconBg"></image>{{ intvCjUser.phone }}
					</view>
					<view class="labelCon" v-if="cjCompany.addressStr != null && cjCompany.addressStr != 'null'">
						<image lazy-load :src="ctx + '/images/icon-53.png'"mode="widthFix" class="iconBg"></image>
						<view class="labelAddress">{{ cjCompany.addressStr }}</view>
					</view>
				</view>
				<view class="bottomLeft">
					<view class="name">{{ intvCjUser.realName }}</view>
					<view class="job">{{ cjCompanyUser.job }}</view>
				</view>
			</view>
			<!--名片13-->
			<view class="businessCardThirteen" v-if="intvCjUser.cardId == 13">
				<view class="comName">{{ cjCompany.name }}</view>
				<view class="cardCard">
					<image :src="cjCompany.logoPath ? ctx + cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
				</view>
				<view class="bottomRight">
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-54.png'"mode="widthFix" class="iconBg"></image>{{ intvCjUser.mobile }}
					</view>
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-56.png'"mode="widthFix" class="iconBg"></image>{{ intvCjUser.email }}
					</view>
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-55.png'"mode="widthFix" class="iconBg"></image>{{ intvCjUser.phone }}
					</view>
					<view class="labelCon" v-if="cjCompany.addressStr != null && cjCompany.addressStr != 'null'">
						<image lazy-load :src="ctx + '/images/icon-57.png'"mode="widthFix" class="iconBg"></image>
						<view class="labelAddress">{{ cjCompany.addressStr }}</view>
					</view>
				</view>
				<view class="bottomLeft">
					<view class="bottomLeftCon">
						<view class="name">{{ intvCjUser.realName }}</view>
						<view class="job">{{ cjCompanyUser.job }}</view>
					</view>
				</view>
			</view>
			<!--名片14-->
			<view class="businessCardFourteen" v-if="intvCjUser.cardId == 14">
				<view class="bottomLeft">
					<view class="cardCard">
						<image :src="cjCompany.logoPath ? ctx + cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
					</view>
					<view class="bottomLeftCon">
						<view class="name">{{ intvCjUser.realName }}</view>
						<view class="job">{{ cjCompanyUser.job }}</view>
					</view>
				</view>
				<view class="FourteenName">
					<image lazy-load :src="ctx + '/images/bg-12.jpg'"mode="widthFix"></image>
					<view class="comName">{{ cjCompany.name }}</view>
				</view>
				<view class="bottomRight">
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-58.png'"mode="widthFix" class="iconBg"></image>{{ intvCjUser.mobile }}
					</view>
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-60.png'"mode="widthFix" class="iconBg"></image>{{ intvCjUser.email }}
					</view>
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-59.png'"mode="widthFix" class="iconBg"></image>{{ intvCjUser.phone }}
					</view>
					<view class="labelCon" v-if="cjCompany.addressStr != null && cjCompany.addressStr != 'null'">
						<image lazy-load :src="ctx + '/images/icon-61.png'"mode="widthFix" class="iconBg"></image>{{ cjCompany.addressStr }}
					</view>
				</view>
			</view>
			<!--名片15-->
			<view class="businessCardFifteen" v-if="intvCjUser.cardId == 15">
				<view class="bottomLeft">
					<view class="triangle">
						<image lazy-load :src="ctx + '/images/icon-66.png'"mode="widthFix"></image>
					</view>
					<view class="bottomLeftCon">
						<view class="name">{{ intvCjUser.realName }}</view>
						<view class="job">{{ cjCompanyUser.job }}</view>
					</view>
				</view>
				<view class="FourteenName">
					<view class="cardCard">
						<image :src="cjCompany.logoPath ? ctx + cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
					</view>
					<view class="comName">{{ cjCompany.name }}</view>
				</view>
				<view class="bottomRight">
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-62.png'"mode="widthFix" class="iconBg"></image>{{ intvCjUser.mobile }}
					</view>
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-63.png'"mode="widthFix" class="iconBg"></image>{{ intvCjUser.email }}
					</view>
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-64.png'"mode="widthFix" class="iconBg"></image>{{ intvCjUser.phone }}
					</view>
					<view class="labelCon" v-if="cjCompany.addressStr != null && cjCompany.addressStr != 'null'">
						<image lazy-load :src="ctx + '/images/icon-65.png'"mode="widthFix" class="iconBg"></image>{{ cjCompany.addressStr }}
					</view>
				</view>
				<image lazy-load :src="ctx + '/images/bg-11.png'"mode="widthFix" class="businessCardFifteenBg"></image>
			</view>
			<!--名片16-->
			<view class="businessCardSixteen" v-if="intvCjUser.cardId == 16">
				<view class="cardCard">
					<image :src="cjCompany.logoPath ? ctx + cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
				</view>
				<view class="cardName">
					<view class="perName">
						{{ intvCjUser.realName }}
						<text class="job">{{ cjCompanyUser.job }}</text>
					</view>
					<view class="comName">{{ cjCompany.name }}</view>
				</view>
				<view class="lineBg">
					<image src="../../static/bg2.png"mode="widthFix"></image>
				</view>
				<view class="bottomRight">
					<view class="labelCon">
						<image src="../../static/sixteen-01.png"mode="widthFix" class="iconBg"></image>
						{{ intvCjUser.mobile }}
					</view>
					<view class="labelCon">
						<image src="../../static/sixteen-02.png"mode="widthFix" class="iconBg"></image>
						{{ intvCjUser.email }}
					</view>
					<view class="labelCon">
						<image src="../../static/sixteen-03.png"mode="widthFix" class="iconBg"></image>
						{{intvCjUser.phone }}
					</view>
					<view class="labelCon" v-if="cjCompany.addressStr != null && cjCompany.addressStr != 'null'">
						<image src="../../static/sixteen-04.png"mode="widthFix" class="iconBg"></image>
						{{ cjCompany.addressStr == 'null' ? "" : cjCompany.addressStr}}
					</view>
				</view>
			</view>
			<view class="businessCardList">
				<!-- <view class="businessCardList" v-if="isShow"> -->
				<view class="businessCardItem">
					<view class="name">手机：</view>
					<view class="content">{{ intvCjUser.mobile }}</view>
					<view class="rightIco">
						<image lazy-load :src="ctx + '/images/icon-15.png'"mode="widthFix" @click="telPhone(intvCjUser.mobile)"></image>
					</view>
				</view>
				<view class="businessCardItem">
					<view class="name">电话：</view>
					<view class="content">{{ intvCjUser.phone }}</view>
					<view class="rightIco">
						<image lazy-load :src="ctx + '/images/icon-16.png'"mode="widthFix" @click="telPhone(intvCjUser.phone)"></image>
					</view>
				</view>
				<view class="businessCardItem">
					<view class="name">微信：</view>
					<view class="content">{{ intvCjUser.weixin }}</view>
					<view class="rightIco">
						<image lazy-load :src="ctx + '/images/icon-17.png'"mode="widthFix" @click="copyWx(intvCjUser.weixin)"></image>
					</view>
				</view>
				<view class="businessCardItem">
					<view class="name">邮箱：</view>
					<view class="content">{{ intvCjUser.email }}</view>
					<view class="rightIco">
						<image lazy-load :src="ctx + '/images/icon-18.png'"mode="widthFix"></image>
					</view>
				</view>
				<view class="businessCardItem">
					<view class="name">公司：</view>
					<view class="content">{{ cjCompany.name }}</view>
					<view class="rightIco">
						<image lazy-load :src="ctx + '/images/icon-19.png'"mode="widthFix"></image>
					</view>
				</view>
				<view class="businessCardItem" v-if="cjCompany.addressStr != null && cjCompany.addressStr != 'null'">
					<view class="name">地址：</view>
					<view class="content">{{ cjCompany.addressStr }}</view>
					<!-- #ifdef H5 -->
					<view class="rightIco">
						<image lazy-load :src="ctx + '/images/icon-20.png'"mode="widthFix" @click="goToMapApp(cjCompany.addressStr,cjCompany.cityStr)"></image>
					</view>
					<!-- #endif -->
					<!-- #ifdef MP-WEIXIN -->
					<view class="rightIco">
						<image lazy-load :src="ctx + '/images/icon-20.png'"mode="widthFix" @click="goToMap(cjCompany.addressStr)"></image>
					</view>
					<!-- #endif -->
				</view>
			</view>
		</view>
		<view class="businessCardBgFFF">
			<view class="businessCardIco">
				<view class="iconfont icoBtn" @click="businessCardList" v-if="intvCjUser.id == cjUser.id">
					<image src="../../static/mp.png" mode="widthFix"></image>
					名片夹
				</view>
				<view class="iconfont icoBtn" @click="businessCardAmend" v-if="intvCjUser.id == cjUser.id">
					<image src="../../static/mb.png" mode="widthFix"></image>
					名片模板
				</view>
			</view>
			<view class="businessCardHandle">
				<view class="handleBtn" @click="gotoHomepage">Ta的主页</view>
				<view class="handleBtn" @click="shareShowBtn">转发</view>
			</view>
		</view>
		<!-- <view class="businessCardIco" v-if="entrance == 1">
			<view class="iconfont icoBtn" @click="businessCardAmend">&#xe631;</view> -->
		<!-- #ifdef H5 -->
		<!-- <view class="iconfont icoBtn" @click="invite">&#xeb84;</view> -->
		<!-- #endif  -->
		<!-- #ifdef MP-WEIXIN -->
		<!-- <button class="iconfont icoBtn" open-type="share">&#xeb84;</button> -->
		<!-- #endif  -->
		<!-- </view> -->
		<!--点击邀请出现分享-->
		<view class="sharelayer" v-if="shareShow">
			<view class='' @tap="shareShowBtn"></view>
			<view class='layerCon'>
				<view class='layerShare'>
					<!-- #ifdef H5 -->
					<button class='layerShareCon' @click="invite">
						<image src='../../static/wx.png' mode='widthFix'></image>
						<view class='name '>分享到微信</view>
					</button>
					<!-- #endif  -->
					<!-- #ifdef MP-WEIXIN -->
					<button open-type="share" class='layerShareCon'>
						<image src='../../static/wx.png' mode='widthFix'></image>
						<view class='name '>分享到微信</view>
					</button>
					<!-- #endif  -->
					<view class='layerShareCon' @tap="posterShowBtn">
						<image src='../../static/hb.png' mode='widthFix'></image>
						<view class='name'>二维码分享</view>
					</view>
				</view>
				<button class='layerShareBtn' @tap="shareShowBtn">取消</button>
			</view>
		</view>
		<!--点击海报分享出现-->
		<view class="sharelayer" v-if="posterShow">
			<view class='layerBg' @tap="posterShowBtn"></view>
			<view class='layerPoster'>
				<view class="posterTop">
					<image src="../../static/bg.png"mode="widthFix"></image>
					<image src="../../static/close.png" @tap="posterShowBtn"mode="widthFix" class="posterClose"></image>
					<view class="content">
						<view class="headImg">
							<image :src="ctx + cjUser.imgPath"mode="widthFix"></image>
						</view>
						<view class="title">{{cjUser.realName}}给您分享了一张名片</view>
					</view>
				</view>
				<view class="posterBottom">
					<view class="leftCon">
						<view class="label">点击右图长按保存到手机</view>
					</view>
					<view class="rightCon" @tap="saveQrcode">
						<image src="../../static/logo.jpg"mode="widthFix"></image>
					</view>
				</view>
			</view>
		</view>
		<uni-popup :show="type === 'login'" class="tipPopup" position="middle" mode="fixed" @hidePopup="togglePopup('')">
			<view class="tipPopupCon">
				<view class="tipTitle">提示</view>
				<view class="tipContent">您还没有登录，请先登录</view>
				<view class="tipHandle">
					<button class="tipHandleBtn" @click="togglePopup('')">取消</button>
					<button class="tipHandleBtn" open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber" @getphonenumber="getPhoneNumber">确定</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	// #ifdef H5
	import {
		contactPhone
	} from '@/common/util.js';
	import {
		enlargeImg
	} from "@/common/util.js";
	// #endif
	// #ifdef MP-WEIXIN
	import  AMapWX  from '@/static/js/qqmap-wx-jssdk.min.js'
	var qqMap = new AMapWX({
		key: 'JD7BZ-4LRWO-CNBWH-SH6OF-ZJVTE-Q6B4B' // 必填
	});
	// #endif
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				type: '',
				ctx: this.$ctx,
				isShow: false,
				cjUser: {
					id: 0
				},
				entrance: '',
				cjCompany: {},
				intvCjUser: {
					id: 1
				},
				cjCompanyUser: {},
				inviteData: {},
				isOnShow: 0,
				shareShow: false,
				posterShow: false,
				obj: {},
				qrcodePaths: ["../../../static/images/logo.jpg"],
				loginCode: "",
			};
		},
		onLoad(options) {
			var _this = this
			wx.login({
				success: res => {
					_this.loginCode = res.code
					console.log("_this.loginCode:", _this.loginCode);
				}
			})
			console.log("options:", options);
			//window.sessionStorage.userToken = 'TwfyW3Xe1tblRSns91567764332116';
			// url: '/pages/businessCard/businessCard?companyId=' + this.cjCompanyUser.companyId + '&userId=' + this.cjCompanyUser.userId + '&entrance=1'
			if (options.scene) {
				let scene = decodeURIComponent(options.scene);
				console.log("scene:", scene);
				//&是我们定义的参数链接方式
				let datas = scene.split("&");
				this.entrance = datas[2];
				this.companyId = datas[0];
				this.userId = datas[1];
				console.log("datas:", datas);
				console.log("entrance:", this.entrance);
				console.log("companyId:", this.companyId);
				console.log("userId:", this.userId);
			} else {
				this.entrance = options.entrance;
				this.companyId = options.companyId;
				this.userId = options.userId;
			}
			this.getData();
			this.isOnShow = 1;
		},
		onShow() {
			if (this.isOnShow == 0) {
				return
			}
			this.getData();
		},
		onShareAppMessage(res) {
			this.shareShow = !this.shareShow;
			if (res.from === 'button') {
				console.log(res.target);
			}
			return {
				title: this.intvCjUser.realName + '给您分享了一张名片',
				path: '/pages/businessCard/businessCard?companyId=' + this.companyId + '&userId=' + this.userId + '&entrance=3'
			};
		},
		methods: {
			togglePopup(type) {
				this.type = type;
			},
			shareShowBtn(e) {
				this.shareShow = !this.shareShow;
			},
			posterShowBtn() {
				// #ifdef H5
				this.getQrcode();
				// #endif  
				// #ifdef MP-WEIXIN
				var mobile = uni.getStorageSync("mobile");
				console.log('他取消掉了',mobile);
				if (mobile != "" && mobile != null) {
					this.type = '';
					this.getQrcode();
				} else {
					this.type = 'login'
				}
				// #endif 
			},
			getPhoneNumber(e) {
				console.log("e", e);
				// 加密数据
				var encryptedData = e.detail.encryptedData;
				// 解密方式
				var iv = e.detail.iv;
				if (e.detail.errMsg == 'getPhoneNumber:fail user deny') {
					console.log('他取消掉了');
				} else {
					console.log("mobile***********************", uni.getStorageSync("mobile"));
					let _this = this
					if (uni.getStorageSync("mobile") != "" && uni.getStorageSync("mobile") != null) {
						_this.type = '';
						_this.getData();
						_this.shareShow = !_this.shareShow;
						_this.getQrcode();
					} else {
						wx.checkSession({
							success(res) {
								_this.$getJson('/api/v2/vue/sqPlus/common/getMobileAndOpenId.jsp', {
									data: JSON.stringify({
										decryptData: encryptedData,
										code: _this.loginCode,
										iv: iv
									})
								}, 'POST', res => {
									console.log('----phone------------', res);
									uni.setStorageSync('mobile', res.data.mobile);
									if (res.data.wxUserInfoByPage != null) {
										uni.setStorageSync('openid', res.data.wxUserInfoByPage.openid);
									}
									console.log("mobile:", uni.getStorageSync("mobile"));
									if (uni.getStorageSync("mobile") == "" || uni.getStorageSync("mobile") == null) {
										uni.showModal({
											title: '提示',
											content: "获取手机号失败,请重试",
											success: function(res) {
												//不操作
											}
										});
									} else {
										_this.type = '';
										_this.getData();
										_this.shareShow = !_this.shareShow;
										_this.getQrcode();
									}
								});
							},
							fail(err) {
								wx.login({
									success: res => {
										_this.loginCode = res.code
										console.log("_this.loginCode:", _this.loginCode);
									}
								})
								console.log("file");
							}
						})
					}
				}
			},
			getQrcode() {
				this.$getJson('/api/v2/vue/sqPlus/common/getQrcode.jsp', {
					data: JSON.stringify({
						page: "pages/businessCard/businessCard",
						scene: this.companyId + "&" + this.userId + "&3",
					})
				}, 'POST', res => {
					this.qrcodePaths[0] = this.ctx + res.data
					console.log("res-+---------------------------", res)
					console.log(this.qrcodePaths[0])
					this.posterShow = !this.posterShow;
				});
			},
			copyWx(wx) {
				uni.setClipboardData({
					data: wx,
					success() {
						uni.showToast({
							title: '复制成功',
							duration: 2000,
							icon: "none"
						})
					}
				})
			},
			saveQrcode() {
				// #ifdef H5
				enlargeImg(this.qrcodePaths[0], this.qrcodePaths[0])
				// #endif  
				// #ifdef MP-WEIXIN
				console.log("---------------",this.qrcodePaths);
				uni.previewImage({
					urls: this.qrcodePaths,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log("errerrerr", err);
						},
						complete: function(e) {
							console.log("eeee", e)
						}
					}
				});
				// #endif 
			},
			getData() {
				this.$getJson(
					'/api/v2/vue/sqPlus/card/cardInfo.jsp', {
						data: JSON.stringify({
							entrance: this.entrance||1,
							companyId: this.companyId||202,
							userId: this.userId||0,
							mobile:uni.getStorageSync("mobile")
						})
					},
					'POST',
					res => {
						console.log('----------------', res);
						if (res.data.cjUser) {
							this.cjUser = res.data.cjUser;
						}
						console.log("this.cjUser", this.cjUser)
						this.entrance = res.data.entrance;
						this.cjCompany = res.data.cjCompany;
						if (res.data.intvCjUser) {
							this.intvCjUser = res.data.intvCjUser;
						}
						console.log("this.intvCjUser", this.intvCjUser)
						this.cjCompanyUser = res.data.cjCompanyUser;
					}
				);
			},
			expandAll() {
				this.isShow = !this.isShow;
			},
			// #ifdef H5
			telPhone(phone) {
				contactPhone({
					type: 'tel',
					phoneNumber: phone
				});
			},
			goToMapApp(address, city) {
				this.inviteData.type = 'gotoMap';
				this.inviteData.city = city;
				this.inviteData.address = address;
				console.log(this.inviteData);
				contactPhone(this.inviteData);
			},
			invite() {
				this.inviteData.type = 'shareSmallPro';
				this.inviteData.url = '/pages/businessCard/businessCard?companyId=' + this.companyId + '&userId=' + this.userId +
					'&entrance=3'
				this.inviteData.imagelocal = this.cjCompany.shareLogoPath ? this.cjCompany.shareLogoPath :
					"/images/icon-01.png";
				this.inviteData.title = this.intvCjUser.realName + '给您分享了一张名片';
				this.inviteData.text = '进入个人名片，查看详细信息';
				this.inviteData.path = '/pages/businessCard/businessCard?companyId=' + this.companyId + '&userId=' + this.userId +
					'&entrance=3'
				this.inviteData.userName = 'gh_90fb58103047';
				console.log(this.inviteData);
				contactPhone(this.inviteData);
				// uni.navigateTo({
				// 	url:'/pages/invite/invite'
				// })
			},
			// #endif

			// #ifdef MP-WEIXIN
			telPhone(phone) {
				uni.makePhoneCall({
					phoneNumber: phone //仅为示例
				});
			},
			goToMap(address) {
				// uni.showToast({
				// 	title: '敬请期待',
				// 	duration: 2000
				// })
				// return;
				console.log(address);
				qqMap.geocoder({
					address: address, //用户输入的地址（注：地址中请包含城市名称，否则会影响解析效果），如：'北京市海淀区彩和坊路海淀西大街74号'
					complete: res => {
						console.log('经纬度', res); //经纬度对象
						const data = res.result.location;
						// console.log('无法定位到该地址，请确认地址信息！');
						wx.openLocation({
							latitude: data.lat,
							longitude: data.lng,
							name: res.result.title,
							scale: 15
						});
					}
				});
			},
			// #endif
			gotoHomepage() {
				if (this.entrance == 2) {
					uni.navigateBack({
						delta: 1
					})
				} else {
					uni.navigateTo({
						url: '/pages/homepage/homepage?companyId=' + this.companyId + '&userId=' + this.userId
					});
				}
			},
			businessCardList() {
				uni.navigateTo({
					url: '/pagesA/businessCard/businessCardList?userId=' + this.userId
				});
			},
			businessCardAmend() {
				uni.navigateTo({
					url: '/pagesA/businessCard/businessCardAmend?companyId=' + this.companyId + '&userId=' + this.userId +
						'&entrance=1'
				}); 
			}
		}
	};
</script>

<style>
	.tipHandle {
		display: flex;
		align-items: center;
		margin-top: 20upx;
	}

	.tipHandleBtn {
		background: none;
		font-size: 30rpx;
		color: #999;
		width: 100%;
	}

	.tipHandleBtn:last-child {
		color: #549df2;
	}

	.tipHandleBtn:after {
		display: none;
	}

	page {
		background: #fff;
	}

	.businessCardF4f4f4 {
		width: 100%;
		display: block;
		overflow: hidden;
		background: #f4f4f4;
	}

	.businessCardBgFFF {
		background: #fff;
		display: block;
		margin-top: 20upx;
		overflow: hidden;
		padding-bottom: 30upx;
	}

	.businessCardHandle .handleBtn {
		background-color: #549df2;
	}


	.businessCardHandlePlus {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		z-index: 99;
	}

	.businessCardHandlePlus .handleBtn {
		margin: 10rpx 5%;
	}

	.marBottom {
		margin-bottom: 120rpx;
	}
</style>
