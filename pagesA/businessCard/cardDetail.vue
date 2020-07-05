<template>
	<view>
		<!--名片1-->
		<view class="businessCardOne" v-if="cjUserCard.cardId == 1">
			<view class="cardName">
				<!-- <image lazy-load :src="ctx + '/images/icon-14.png'"mode="widthFix"></image> -->
				<view class="topLeft">
					<view class="name">{{ cjUserCard.cjUser.realName }}</view>
					<view class="job">{{ cjUserCard.cjCompanyUser.job }}</view>
				</view>
				<view class="comName">{{ cjUserCard.cjCompany.name }}</view>
			</view>
			<view class="cardCard">
				<image :src="cjUserCard.cjCompany.logoPath ? ctx + cjUserCard.cjCompany.logoPath : ctx + '/images/company.jpg'"
				mode="widthFix"></image>
			</view>
			<!-- <view class="bottomLeft">
				<view class="name">{{ cjUserCard.cjUser.realName }}</view>
				<view class="job">{{ cjUserCard.cjCompanyUser.job }}</view>
			</view> -->
			<view class="bottomRight">
				<view class="labelCon">
					<text>M</text>
					<text class="colon">：</text>{{ cjUserCard.cjUser.mobile }}
				</view>
				<view class="labelCon">
					<text>T</text>
					<text class="colon">：</text>{{ cjUserCard.cjUser.phone }}
				</view>
				<view class="labelCon">
					<text>E</text>
					<text class="colon">：</text>{{ cjUserCard.cjUser.email }}
				</view>
				<view class="labelCon">
					<text>A</text>
					<text class="colon">：</text>{{ cjUserCard.cjCompany.addressStr }}
				</view>
			</view>
		</view>
		<!--名片2-->
		<view class="businessCardTwo" v-if="cjUserCard.cardId == 2">
			<view class="businessCardTwoBg">
				<view class="cardCard">
					<image :src="cjUserCard.cjCompany.logoPath ? ctx + cjUserCard.cjCompany.logoPath : ctx + '/images/company.jpg'"
					mode="widthFix"></image>
				</view>
				<view class="cardName">
					<!-- <image lazy-load :src="ctx + '/images/icon-21.png'"mode="widthFix"></image> -->
					<view class="comName">{{ cjUserCard.cjCompany.name }}</view>
				</view>
				<view class="bottomLeft">
					<view class="name">{{ cjUserCard.cjUser.realName }}</view>
					<view class="job" style="word-wrap:break-word;word-break:break-all;">{{ cjUserCard.cjCompanyUser.job }}</view>
				</view>
				<view class="bottomRight">
					<view class="labelCon">
						<text>M</text>
						<text class="colon">：</text>{{ cjUserCard.cjUser.mobile }}
					</view>
					<view class="labelCon">
						<text>T</text>
						<text class="colon">：</text>{{ cjUserCard.cjUser.phone }}
					</view>
					<view class="labelCon">
						<text>E</text>
						<text class="colon">：</text>{{ cjUserCard.cjUser.email }}
					</view>
					<view class="labelCon">
						<text>A</text>
						<text class="colon">：</text>{{ cjUserCard.cjCompany.addressStr }}
					</view>
				</view>
			</view>
		</view>
		<!--名片3-->
		<view class="businessCardThree" v-if="cjUserCard.cardId == 3">
			<image lazy-load :src="ctx + '/images/bg-06.png'"mode="widthFix" class="leftBg"></image>
			<image lazy-load :src="ctx + '/images/bg-07.png'"mode="widthFix" class="RightBg"></image>
			<view class="cardCard">
				<image :src="cjUserCard.cjCompany.logoPath ? ctx + cjUserCard.cjCompany.logoPath : ctx + '/images/company.jpg'"
				mode="widthFix"></image>
			</view>
			<view class="cardName">
				<view class="perName">
					{{ cjUserCard.cjUser.realName }}
					<text class="job">{{ cjUserCard.cjCompanyUser.job }}</text>
				</view>
				<view class="comName">{{ cjUserCard.cjCompany.name }}</view>
			</view>
			<view class="bottomRight">
				<view class="labelCon">
					<image lazy-load :src="ctx + '/images/icon-23.png'"mode="widthFix" class="iconBg"></image>
					{{ cjUserCard.cjUser.mobile }}
				</view>
				<view class="labelCon">
					<image lazy-load :src="ctx + '/images/icon-24.png'"mode="widthFix" class="iconBg"></image>
					>{{ cjUserCard.cjUser.phone }}
				</view>
				<view class="labelCon">
					<image lazy-load :src="ctx + '/images/icon-25.png'"mode="widthFix" class="iconBg"></image>
					{{ cjUserCard.cjUser.email }}
				</view>
				<view class="labelCon">
					<image lazy-load :src="ctx + '/images/icon-22.png'"mode="widthFix" class="iconBg"></image>
					{{ cjUserCard.cjCompany.addressStr }}
				</view>
			</view>
		</view>
		<!--名片4-->
		<view class="businessCardFore" v-if="cjUserCard.cardId == 4">
			<view class="cardCard">
				<image :src="cjUserCard.cjCompany.logoPath ? ctx + cjUserCard.cjCompany.logoPath : ctx + '/images/company.jpg'"
				mode="widthFix"></image>
			</view>
			<view class="bottomLeft">
				<view class="name">{{ cjUserCard.cjUser.realName }}</view>
				<view class="job">{{ cjUserCard.cjCompanyUser.job }}</view>
			</view>
			<view class="comName">{{ cjUserCard.cjCompany.name }}</view>
			<view class="bottomRight">
				<view class="labelCon">
					<image lazy-load :src="ctx + '/images/icon-26.png'"mode="widthFix" class="iconBg"></image>
					{{ cjUserCard.cjUser.mobile }}
				</view>
				<view class="labelCon">
					<image lazy-load :src="ctx + '/images/icon-27.png'"mode="widthFix" class="iconBg"></image>
					{{ cjUserCard.cjUser.email }}
				</view>
				<view class="labelCon">
					<image lazy-load :src="ctx + '/images/icon-28.png'"mode="widthFix" class="iconBg"></image>
					>{{ cjUserCard.cjUser.phone }}
				</view>
				<view class="labelCon">
					<image lazy-load :src="ctx + '/images/icon-29.png'"mode="widthFix" class="iconBg"></image>
					{{ cjUserCard.cjCompany.addressStr }}
				</view>
			</view>
			<view class="bottomBg"></view>
		</view>
		<!--名片5-->
		<view class="businessCardFive" v-if="cjUserCard.cardId == 5">
			<view class="cardCard">
				<image :src="cjUserCard.cjCompany.logoPath ? ctx + cjUserCard.cjCompany.logoPath : ctx + '/images/company.jpg'"
				mode="widthFix"></image>
			</view>
			<view class="comName">{{ cjUserCard.cjCompany.name }}</view>
			<view class="bottomLeft">
				<view class="name">{{ cjUserCard.cjUser.realName }}</view>
				<view class="job">{{ cjUserCard.cjCompanyUser.job }}</view>
			</view>
			<view class="bottomRight">
				<view class="labelCon">
					<image lazy-load :src="ctx + '/images/icon-26.png'"mode="widthFix" class="iconBg"></image>
					<text>{{ cjUserCard.cjUser.mobile }}</text>
				</view>
				<view class="labelCon">
					<image lazy-load :src="ctx + '/images/icon-28.png'"mode="widthFix" class="iconBg"></image>
					<text>{{ cjUserCard.cjUser.phone }}</text>
				</view>
				<view class="labelCon">
					<image lazy-load :src="ctx + '/images/icon-27.png'"mode="widthFix" class="iconBg"></image>
					<text>{{ cjUserCard.cjUser.email }}</text>
				</view>
				<view class="labelCon">
					<image lazy-load :src="ctx + '/images/icon-29.png'"mode="widthFix" class="iconBg"></image>
					<text>{{ cjUserCard.cjCompany.addressStr }}</text>
				</view>
			</view>
			<view class="bottomBg"></view>
		</view>
		<!--名片6-->
		<view class="businessCardSix" v-if="cjUserCard.cardId == 6">
			<view class="cardCard">
				<image :src="cjUserCard.cjCompany.logoPath ? ctx + cjUserCard.cjCompany.logoPath : ctx + '/images/company.jpg'"
				mode="widthFix"></image>
			</view>
			<view class="rightCon">
				<view class="limeBg"></view>
				<view class="labelCon firstimg">
					<image lazy-load :src="ctx + '/images/icon-37.png'"mode="widthFix" class="iconBg"></image>
					<view class="comName">{{ cjUserCard.cjCompany.name }}</view>
					<view class="name">{{ cjUserCard.cjUser.realName }}</view>
					<view class="job">{{ cjUserCard.cjCompanyUser.job }}</view>
				</view>
				<view class="labelCon">
					<image lazy-load :src="ctx + '/images/icon-41.png'"mode="widthFix" class="iconBg"></image>{{ cjUserCard.cjUser.mobile }}
				</view>
				<view class="labelCon">
					<image lazy-load :src="ctx + '/images/icon-38.png'"mode="widthFix" class="iconBg"></image>{{ cjUserCard.cjUser.email }}
				</view>
				<view class="labelCon">
					<image lazy-load :src="ctx + '/images/icon-39.png'"mode="widthFix" class="iconBg"></image>{{ cjUserCard.cjUser.phone }}
				</view>
				<view class="labelCon">
					<image lazy-load :src="ctx + '/images/icon-40.png'"mode="widthFix" class="iconBg"></image>{{ cjUserCard.cjCompany.addressStr }}
				</view>
			</view>
			<view class="bottomBg"></view>
		</view>
		<!--名片7-->
		<view class="businessCardSeven" v-if="cjUserCard.cardId == 7">
			<image class="businessCardSevenBg" lazy-load :src="ctx + '/images/bg-10.png'"mode="widthFix"></image>
			<view class="cardCard">
				<image :src="cjUserCard.cjCompany.logoPath ? ctx + cjUserCard.cjCompany.logoPath : ctx + '/images/company.jpg'"
				mode="widthFix"></image>
			</view>
			<view class="bottomLeft">
				<view class="name">{{ cjUserCard.cjUser.realName }}</view>
				<view class="job">{{ cjUserCard.cjCompanyUser.job }}</view>
			</view>
			<view class="bottomRight">
				<view class="labelCon">{{ cjUserCard.cjCompany.name }}</view>
				<view class="labelCon"><text>M</text><text class="colon">：</text>{{ cjUserCard.cjUser.mobile }}</view>
				<view class="labelCon"><text>T</text><text class="colon">：</text>{{ cjUserCard.cjUser.phone }}</view>
				<view class="labelCon"><text>E</text><text class="colon">：</text>{{ cjUserCard.cjUser.email }}</view>
				<view class="labelCon"><text>A</text><text class="colon">：</text>{{ cjUserCard.cjCompany.addressStr }}</view>
			</view>
			<view class="bottomBg"></view>
		</view>
		<!--名片8-->
		<view class="businessCardEight" v-if="cjUserCard.cardId == 8">
			<image class="businessCardEightBg" lazy-load :src="ctx + '/images/bg-09.jpg'"mode="widthFix"></image>
			<view class="eightTop">
				<view class="eightTopLeft">
					<view class="cardCard">
						<image :src="cjUserCard.cjCompany.logoPath ? ctx + cjUserCard.cjCompany.logoPath : ctx + '/images/company.jpg'"
						mode="widthFix"></image>
					</view>
					<view class="labelCon">{{ cjUserCard.cjCompany.name }}</view>
				</view>
				<view class="bottomLeft eightTopRight">
					<view class="name">{{ cjUserCard.cjUser.realName }}</view>
					<view class="job">{{ cjUserCard.cjCompanyUser.job }}</view>
				</view>
			</view>

			<view class="bottomRight">
				<view class="labelCon"><text>M</text><text class="colon">：</text>{{ cjUserCard.cjUser.mobile }}</view>
				<view class="labelCon"><text>T</text><text class="colon">：</text>{{ cjUserCard.cjUser.phone }}</view>
				<view class="labelCon"><text>E</text><text class="colon">：</text>{{ cjUserCard.cjUser.email }}</view>
				<view class="labelCon"><text>A</text><text class="colon">：</text>{{ cjUserCard.cjCompany.addressStr }}</view>
			</view>
			<view class="bottomBg"></view>
		</view>
		<!--名片9-->
		<view class="businessCardNine" v-if="cjUserCard.cardId == 9">
			<view class="nineTop">
				<view class="cardCard">
					<image :src="cjUserCard.cjCompany.logoPath ? ctx + cjUserCard.cjCompany.logoPath : ctx + '/images/company.jpg'"
					mode="widthFix"></image>
				</view>
				<view class="labelCon">{{ cjUserCard.cjCompany.name }}</view>
			</view>
			<view class="nineBottom">
				<view class="bottomRight">
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-42.png'"mode="widthFix" class="iconBg"></image>{{ cjUserCard.cjUser.mobile }}
					</view>
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-43.png'"mode="widthFix" class="iconBg"></image>{{ cjUserCard.cjUser.email }}
					</view>
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-44.png'"mode="widthFix" class="iconBg"></image>{{ cjUserCard.cjUser.phone }}
					</view>
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-45.png'"mode="widthFix" class="iconBg"></image>{{ cjUserCard.cjCompany.addressStr }}
					</view>
				</view>
				<view class="bottomLeft">
					<view class="name">{{ cjUserCard.cjUser.realName }}</view>
					<view class="job">{{ cjUserCard.cjCompanyUser.job }}</view>
				</view>
			</view>
			<view class="bottomBg"></view>
		</view>
		<!--名片10-->
		<view class="businessCardTen" v-if="cjUserCard.cardId == 10">
			<view class="cardCard">
				<image :src="cjUserCard.cjCompany.logoPath ? ctx + cjUserCard.cjCompany.logoPath : ctx + '/images/company.jpg'"
				mode="widthFix"></image>
			</view>
			<view class="nineBottom">
				<view class="bottomRight">
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-26.png'"mode="widthFix" class="iconBg"></image>{{ cjUserCard.cjUser.mobile }}
					</view>
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-27.png'"mode="widthFix" class="iconBg"></image>{{ cjUserCard.cjUser.email }}
					</view>
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-28.png'"mode="widthFix" class="iconBg"></image>{{ cjUserCard.cjUser.phone }}
					</view>
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-29.png'"mode="widthFix" class="iconBg"></image>{{ cjUserCard.cjCompany.addressStr }}
					</view>
				</view>
				<view class="bottomLeft">
					<view class="name">
						{{ cjUserCard.cjUser.realName }}
						<text class="comName">{{ cjUserCard.cjCompany.name }}</text>
					</view>
					<view class="job">
						<view class="con">{{ cjUserCard.cjCompanyUser.job }}</view>
						<view class="line"></view>
					</view>
				</view>
			</view>
			<view class="bottomBg"></view>
		</view>
		<!--名片11-->
		<view class="businessCardEleven" v-if="cjUserCard.cardId == 11">
			<image lazy-load :src="ctx + '/images/bg-10.jpg'" mode="aspectFill" class="businessCardElevenBg"></image>
			<view class="comName">{{ cjUserCard.cjCompany.name }}</view>
			<view class="cardCard">
				<image :src="cjUserCard.cjCompany.logoPath ? ctx + cjUserCard.cjCompany.logoPath : ctx + '/images/company.jpg'"
				mode="widthFix"></image>
			</view>
			<view class="nineBottom">
				<view class="bottomRight">
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-46.png'"mode="widthFix" class="iconBg"></image>{{ cjUserCard.cjUser.mobile }}
					</view>
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-47.png'"mode="widthFix" class="iconBg"></image>{{ cjUserCard.cjUser.email }}
					</view>
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-48.png'"mode="widthFix" class="iconBg"></image>{{ cjUserCard.cjUser.phone }}
					</view>
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-49.png'"mode="widthFix" class="iconBg"></image>{{ cjUserCard.cjCompany.addressStr }}
					</view>
				</view>
				<view class="bottomLeft">
					<view class="name">{{ cjUserCard.cjUser.realName }}</view>
					<view class="job">{{ cjUserCard.cjCompanyUser.job }}</view>
				</view>
			</view>
			<view class="bottomBg"></view>
		</view>
		<!--名片12-->
		<view class="businessCardTwelve" v-if="cjUserCard.cardId == 12">
			<image lazy-load :src="ctx + '/images/bg-11.jpg'" mode="aspectFill" class="businessCardElevenBg"></image>
			<view class="comName">{{ cjUserCard.cjCompany.name }}</view>
			<view class="cardCard">
				<image :src="cjUserCard.cjCompany.logoPath ? ctx + cjUserCard.cjCompany.logoPath : ctx + '/images/company.jpg'"
				mode="widthFix"></image>
			</view>
			<view class="bottomRight">
				<view class="labelCon">
					<image lazy-load :src="ctx + '/images/icon-50.png'"mode="widthFix" class="iconBg"></image>{{ cjUserCard.cjUser.mobile }}
				</view>
				<view class="labelCon">
					<image lazy-load :src="ctx + '/images/icon-52.png'"mode="widthFix" class="iconBg"></image>{{ cjUserCard.cjUser.email }}
				</view>
				<view class="labelCon">
					<image lazy-load :src="ctx + '/images/icon-51.png'"mode="widthFix" class="iconBg"></image>{{ cjUserCard.cjUser.phone }}
				</view>
				<view class="labelCon">
					<image lazy-load :src="ctx + '/images/icon-53.png'"mode="widthFix" class="iconBg"></image>
					<view class="labelAddress">{{ cjUserCard.cjCompany.addressStr }}</view>
				</view>
			</view>
			<view class="bottomLeft">
				<view class="name">{{ cjUserCard.cjUser.realName }}</view>
				<view class="job">{{ cjUserCard.cjCompanyUser.job }}</view>
			</view>
			<view class="bottomBg"></view>
		</view>
		<!--名片13-->
		<view class="businessCardThirteen" v-if="cjUserCard.cardId == 13">
			<view class="comName">{{ cjUserCard.cjCompany.name }}</view>
			<view class="cardCard">
				<image :src="cjUserCard.cjCompany.logoPath ? ctx + cjUserCard.cjCompany.logoPath : ctx + '/images/company.jpg'"
				mode="widthFix"></image>
			</view>
			<view class="bottomRight">
				<view class="labelCon">
					<image lazy-load :src="ctx + '/images/icon-54.png'"mode="widthFix" class="iconBg"></image>{{ cjUserCard.cjUser.mobile }}
				</view>
				<view class="labelCon">
					<image lazy-load :src="ctx + '/images/icon-56.png'"mode="widthFix" class="iconBg"></image>{{ cjUserCard.cjUser.email }}
				</view>
				<view class="labelCon">
					<image lazy-load :src="ctx + '/images/icon-55.png'"mode="widthFix" class="iconBg"></image>{{ cjUserCard.cjUser.phone }}
				</view>
				<view class="labelCon">
					<image lazy-load :src="ctx + '/images/icon-57.png'"mode="widthFix" class="iconBg"></image>

					<view class="labelAddress">{{ cjUserCard.cjCompany.addressStr }}</view>
				</view>
			</view>
			<view class="bottomLeft">
				<view class="bottomLeftCon">
					<view class="name">{{ cjUserCard.cjUser.realName }}</view>
					<view class="job">{{ cjUserCard.cjCompanyUser.job }}</view>
				</view>
			</view>
			<view class="bottomBg"></view>
		</view>
		<!--名片14-->
		<view class="businessCardFourteen" v-if="cjUserCard.cardId == 14">
			<view class="bottomLeft">
				<view class="cardCard">
					<image :src="cjUserCard.cjCompany.logoPath ? ctx + cjUserCard.cjCompany.logoPath : ctx + '/images/company.jpg'"
					mode="widthFix"></image>
				</view>
				<view class="bottomLeftCon">
					<view class="name">{{ cjUserCard.cjUser.realName }}</view>
					<view class="job">{{ cjUserCard.cjCompanyUser.job }}</view>
				</view>
			</view>
			<view class="FourteenName">
				<image lazy-load :src="ctx + '/images/bg-12.jpg'"mode="widthFix"></image>
				<view class="comName">{{ cjUserCard.cjCompany.name }}</view>
			</view>
			<view class="bottomRight">
				<view class="labelCon">
					<image lazy-load :src="ctx + '/images/icon-58.png'"mode="widthFix" class="iconBg"></image>{{ cjUserCard.cjUser.mobile }}
				</view>
				<view class="labelCon">
					<image lazy-load :src="ctx + '/images/icon-60.png'"mode="widthFix" class="iconBg"></image>{{ cjUserCard.cjUser.email }}
				</view>
				<view class="labelCon">
					<image lazy-load :src="ctx + '/images/icon-59.png'"mode="widthFix" class="iconBg"></image>{{ cjUserCard.cjUser.phone }}
				</view>
				<view class="labelCon">
					<image lazy-load :src="ctx + '/images/icon-61.png'"mode="widthFix" class="iconBg"></image>{{ cjUserCard.cjCompany.addressStr }}
				</view>
			</view>
			<view class="bottomBg"></view>
		</view>
		<!--名片15-->
		<view class="businessCardFifteen" v-if="cjUserCard.cardId == 15">
			<view class="bottomLeft">
				<view class="triangle">
					<image lazy-load :src="ctx + '/images/icon-66.png'"mode="widthFix"></image>
				</view>
				<view class="bottomLeftCon">
					<view class="name">{{ cjUserCard.cjUser.realName }}</view>
					<view class="job">{{ cjUserCard.cjCompanyUser.job }}</view>
				</view>
			</view>
			<view class="FourteenName">
				<view class="cardCard">
					<image :src="cjUserCard.cjCompany.logoPath ? ctx + cjUserCard.cjCompany.logoPath : ctx + '/images/company.jpg'"
					mode="widthFix"></image>
				</view>
				<view class="comName">{{ cjUserCard.cjCompany.name }}</view>
			</view>
			<view class="bottomRight">
				<view class="labelCon">
					<image lazy-load :src="ctx + '/images/icon-62.png'"mode="widthFix" class="iconBg"></image>{{ cjUserCard.cjUser.mobile }}
				</view>
				<view class="labelCon">
					<image lazy-load :src="ctx + '/images/icon-63.png'"mode="widthFix" class="iconBg"></image>{{ cjUserCard.cjUser.email }}
				</view>
				<view class="labelCon">
					<image lazy-load :src="ctx + '/images/icon-64.png'"mode="widthFix" class="iconBg"></image>{{ cjUserCard.cjUser.phone }}
				</view>
				<view class="labelCon">
					<image lazy-load :src="ctx + '/images/icon-65.png'"mode="widthFix" class="iconBg"></image>{{ cjUserCard.cjCompany.addressStr }}
				</view>
			</view>
			<image lazy-load :src="ctx + '/images/bg-11.png'"mode="widthFix" class="businessCardFifteenBg"></image>
			<view class="bottomBg"></view>
		</view>
		<!--名片16-->
		<view class="businessCardSixteen" v-if="cjUserCard.cardId == 16">
			<view class="cardCard">
				<image :src="cjUserCard.cjCompany.logoPath ? ctx + cjUserCard.cjCompany.logoPath : ctx + '/images/company.jpg'"
				mode="widthFix"></image>
			</view>
			<view class="cardName">
				<view class="perName">
					{{ cjUserCard.cjUser.realName }}
					<text class="job">{{ cjUserCard.cjCompanyUser.job }}</text>
				</view>
				<view class="comName">{{ cjUserCard.cjCompany.name }}</view>
			</view>
			<view class="lineBg">
				<image src="../../static/bg2.png"mode="widthFix"></image>
			</view>
			<view class="bottomRight">
				<view class="labelCon">
					<image src="../../static/sixteen-01.png"mode="widthFix" class="iconBg"></image>
					{{ cjUserCard.cjUser.mobile }}
				</view>
				<view class="labelCon">
					<image src="../../static/sixteen-02.png"mode="widthFix" class="iconBg"></image>
					{{ cjUserCard.cjUser.email }}
				</view>
				<view class="labelCon">
					<image src="../../static/sixteen-03.png"mode="widthFix" class="iconBg"></image>
					{{ cjUserCard.cjUser.phone }}
				</view>
				<view class="labelCon">
					<image src="../../static/sixteen-04.png"mode="widthFix" class="iconBg"></image>
					{{ cjUserCard.cjCompany.addressStr == 'null' ? "" : cjUserCard.cjCompany.addressStr}}
				</view>
			</view>
		</view>

		<view class="businessCardList">
			<view class="businessCardItem">
				<view class="name">手机：</view>
				<view class="content">{{ cjUserCard.cjUser.mobile }}</view>
				<view class="rightIco">
					<image lazy-load :src="ctx + '/images/icon-15.png'"mode="widthFix" @click="telPhone(cjUserCard.cjUser.mobile)"></image>
				</view>
			</view>
			<view class="businessCardItem">
				<view class="name">电话：</view>
				<view class="content">{{ cjUserCard.cjUser.phone }}</view>
				<view class="rightIco">
					<image lazy-load :src="ctx + '/images/icon-16.png'"mode="widthFix" @click="telPhone(cjUserCard.cjUser.phone)"></image>
				</view>
			</view>
			<view class="businessCardItem">
				<view class="name">微信：</view>
				<view class="content">{{ cjUserCard.cjUser.weixin }}</view>
				<view class="rightIco">
					<image lazy-load :src="ctx + '/images/icon-17.png'"mode="widthFix"></image>
				</view>
			</view>
			<view class="businessCardItem">
				<view class="name">邮箱：</view>
				<view class="content">{{ cjUserCard.cjUser.email }}</view>
				<view class="rightIco">
					<image lazy-load :src="ctx + '/images/icon-18.png'"mode="widthFix"></image>
				</view>
			</view>
			<view class="businessCardItem">
				<view class="name">公司：</view>
				<view class="content">{{ cjUserCard.cjCompany.name }}</view>
				<view class="rightIco">
					<image lazy-load :src="ctx + '/images/icon-19.png'"mode="widthFix"></image>
				</view>
			</view>
			<view class="businessCardItem">
				<view class="name">地址：</view>
				<view class="content">{{ cjUserCard.cjCompany.addressStr }}</view>
				<!-- #ifdef H5 -->
				<view class="rightIco">
					<image lazy-load :src="ctx + '/images/icon-20.png'"mode="widthFix" @click="goToMapApp(cjUserCard.cjCompany.addressStr, cjUserCard.cjCompany.cityStr)"></image>
				</view>
				<!-- #endif -->
				<!-- #ifdef MP-WEIXIN -->
				<view class="rightIco">
					<image lazy-load :src="ctx + '/images/icon-20.png'"mode="widthFix" @click="goToMap(cjUserCard.cjCompany.addressStr)"></image>
				</view>
				<!-- #endif -->
			</view>
		</view>
		<!-- <view class="businessCardUp">
			<view :class="isShow ? 'packUp' : 'expandAll'" @click="expandAll">{{ isShow ? '点击收起' : '展开全部' }}</view>
		</view> -->
		<view class="businessCardHandle ">
			<view class="handleBtn" @click="gotoHomepage">Ta的主页</view>
			<!-- #ifdef H5 -->
			<view class="handleBtn" @click="invite">分享</view>
			<!-- #endif  -->
			<!-- #ifdef MP-WEIXIN -->
			<button class="handleBtn" open-type="share">分享</button>
			<!-- #endif  -->
		</view>
	</view>
</template>

<script>
	// #ifdef H5
	import {
		contactPhone
	} from '@/common/util.js';
	// #endif  

	export default {
		data() {
			return {
				ctx: this.$ctx,
				isShow: false,
				cjUserCard: {},
				inviteData: {}
			};
		},
		onLoad(options) {
			this.userCardId = options.userCardId;
			this.getData();
		},
		onShareAppMessage(res) {
			if (res.from === 'button') {
				console.log(res.target);
			}
			return {
				title: this.cjUserCard.cjUser.realName + '给您分享了一张名片',
				path: '/pages/businessCard/businessCard?companyId=' + this.cjUserCard.companyId + '&userId=' + this.cjUserCard.recordUserId +
					'&entrance=3'
			};
		},
		methods: {
			getData() {
				this.$getJson('/api/v2/vue/sqPlus/card/cardDetail.jsp', {
					data: JSON.stringify({
						userCardId: this.userCardId
					})
				}, 'POST', res => {
					console.log('----------------', res);
					this.cjUserCard = res.data;
				});
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
			goToMapApp(address) {
				this.inviteData.type = 'gotoMap';
				this.inviteData.address = address;
				console.log(this.inviteData);
				contactPhone(this.inviteData);
			},
			invite() {
				this.inviteData.type = 'shareSmallPro';
				this.inviteData.url = '/pages/businessCard/businessCard?companyId=' + this.cjUserCard.companyId + '&userId=' + this
					.cjUserCard.recordUserId + '&entrance=3'
				this.inviteData.imagelocal = this.cjUserCard.cjCompany.shareLogoPath ? this.cjUserCard.cjCompany.shareLogoPath :
					"/images/icon-01.png";
				this.inviteData.title = this.cjUserCard.cjUser.realName + '给您分享了一张名片';
				this.inviteData.text = '进入个人名片，查看详细信息';
				this.inviteData.path = '/pages/businessCard/businessCard?companyId=' + this.cjUserCard.companyId + '&userId=' +
					this.cjUserCard.recordUserId + '&entrance=3'
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
				uni.navigateTo({
					url: '/pages/homepage/homepage?companyId=' + this.cjUserCard.cjCompany.id + '&userId=' + this.cjUserCard.cjUser.id
				});
			},

		}
	};
</script>

<style>
	page {
		background: #fff;
	}

	.businessCardHandle .handleBtn {
		background-color: #549df2;
	}

	.businessCardIco .icoBtn {
		background-color: #8cd8ff;
	}
</style>
