<template>
	<view>
		<view v-if="roofPlacementList != 0">
			<view class="businessCardRecord" v-for="(item, index) in roofPlacementList" :key="index">
				<!--名片1-->
				<view class="businessCardOne" v-if="item.cardId == 1">
					<view class="businessContain" @click="toDetail(item)">
						<view class="cardName">
							<!-- <image lazy-load :src="ctx + '/images/icon-14.png'"mode="widthFix"></image> -->
							<view class="topLeft">
								<view class="name">{{ item.cjUser.realName }}</view>
								<view class="job">{{ item.cjCompanyUser.job }}</view>
							</view>
							<view class="comName">{{ item.cjCompany.name }}</view>
						</view>
						<view class="cardCard">
							<image :src="item.cjCompany.logoPath ? ctx + item.cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
						</view>
						<!-- <view class="bottomLeft">
							<view class="name">{{ item.cjUser.realName }}</view>
							<view class="job">{{ item.cjCompanyUser.job }}</view>
						</view> -->
						<view class="bottomRight">
							<view class="labelCon">
								<text>M</text>
								<text class="colon">：</text>{{ item.cjUser.mobile }}
							</view>
							<view class="labelCon">
								<text>T</text>
								<text class="colon">：</text>{{ item.cjUser.phone }}
							</view>
							<view class="labelCon">
								<text>E</text>
								<text class="colon">：</text>{{ item.cjUser.email }}
							</view>
							<view class="labelCon">
								<text>A</text>
								<text class="colon">：</text>{{ item.cjCompany.addressStr }}
							</view>
						</view>

					</view>
					<view class="businessMore businessMoreWhite">
						<view class="businessMoreBtn" @click="businessMoreBtnZD(index)">
							<image src="../../static/whiteMore.png"mode="widthFix"></image>
						</view>
						<view class="businessMoreList" v-if="businessMoreIndexZD ===index">
							<view class="item" @click.stop="zhidingtop(item, index)">取消置顶</view>
							<view class="item" @click="dodel(item,index,1)">删除</view>
						</view>
					</view>
				</view>
				<!--end-->
				<!--名片2-->
				<view class="businessCardTwo" v-if="item.cardId == 2">
					<view class="businessCardTwoBg" @click="toDetail(item)">
						<view class="cardCard">
							<image :src="item.cjCompany.logoPath ? ctx + item.cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
						</view>
						<view class="cardName">
							<!-- <image lazy-load :src="ctx + '/images/icon-21.png'"mode="widthFix"></image> -->
							<view class="comName">{{ item.cjCompany.name }}</view>
						</view>
						<view class="bottomLeft">
							<view class="name">{{ item.cjUser.realName }}</view>
							<view class="job" style="word-wrap:break-word;word-break:break-all;">{{ item.cjCompanyUser.job }}</view>
						</view>
						<view class="bottomRight">
							<view class="labelCon">
								<text>M</text>
								<text class="colon">：</text>{{ item.cjUser.mobile }}
							</view>
							<view class="labelCon">
								<text>T</text>
								<text class="colon">：</text>{{ item.cjUser.phone }}
							</view>
							<view class="labelCon">
								<text>E</text>
								<text class="colon">：</text>{{ item.cjUser.email }}
							</view>
							<view class="labelCon">
								<text>A</text>
								<text class="colon">：</text>{{ item.cjCompany.addressStr }}
							</view>
						</view>
					</view>
					<view class="businessMore">
						<view class="businessMoreBtn" @click="businessMoreBtnZD(index)">
							<image src="../../static/blackMore.png"mode="widthFix"></image>
						</view>
						<view class="businessMoreList" v-if="businessMoreIndexZD ===index">
							<view class="item" @click.stop="zhidingtop(item, index)">取消置顶</view>
							<view class="item" @click="dodel(item,index,1)">删除</view>
						</view>
					</view>
				</view>
				<!--end-->
				<!--名片3-->
				<view class="businessCardThree" v-if="item.cardId == 3">
					<view class="businessContain" @click="toDetail(item)">
						<image lazy-load :src="ctx + '/images/bg-06.png'"mode="widthFix" class="leftBg"></image>
						<image lazy-load :src="ctx + '/images/bg-07.png'"mode="widthFix" class="RightBg"></image>
						<view class="cardCard">
							<image :src="item.cjCompany.logoPath ? ctx + item.cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
						</view>
						<view class="cardName">
							<view class="perName">
								{{ item.cjUser.realName }}
								<text class="job">{{ item.cjCompanyUser.job }}</text>
							</view>
							<view class="comName">{{ item.cjCompany.name }}</view>
						</view>
						<view class="bottomRight">
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-23.png'"mode="widthFix" class="iconBg"></image>
								{{ item.cjUser.mobile }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-24.png'"mode="widthFix" class="iconBg"></image>
								{{ item.cjUser.phone }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-25.png'"mode="widthFix" class="iconBg"></image>
								{{ item.cjUser.email }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-22.png'"mode="widthFix" class="iconBg"></image>
								{{ item.cjCompany.addressStr }}
							</view>
						</view>
					</view>
					<view class="businessMore">
						<view class="businessMoreBtn" @click="businessMoreBtnZD(index)">
							<image src="../../static/blackMore.png"mode="widthFix"></image>
						</view>
						<view class="businessMoreList" v-if="businessMoreIndexZD ===index">
							<view class="item" @click.stop="zhidingtop(item, index)">取消置顶</view>
							<view class="item" @click="dodel(item,index,1)">删除</view>
						</view>
					</view>
				</view>
				<!--end-->
				<!--名片4-->
				<view class="businessCardFore" v-if="item.cardId == 4">
					<view class="businessContain" @click="toDetail(item)">
						<view class="cardCard">
							<image :src="item.cjCompany.logoPath ? ctx + item.cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
						</view>
						<view class="bottomLeft">
							<view class="name">{{ item.cjUser.realName }}</view>
							<view class="job">{{ item.cjCompanyUser.job }}</view>
						</view>
						<view class="comName">{{ item.cjCompany.name }}</view>
						<view class="bottomRight">
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-26.png'"mode="widthFix" class="iconBg"></image>
								{{ item.cjUser.mobile }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-27.png'"mode="widthFix" class="iconBg"></image>
								{{ item.cjUser.email }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-28.png'"mode="widthFix" class="iconBg"></image>
								{{ item.cjUser.phone }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-29.png'"mode="widthFix" class="iconBg"></image>
								{{ item.cjCompany.addressStr }}
							</view>
						</view>
					</view>
					<view class="bottomBg"></view>
					<view class="businessMore">
						<view class="businessMoreBtn" @click="businessMoreBtnZD(index)">
							<image src="../../static/blackMore.png"mode="widthFix"></image>
						</view>
						<view class="businessMoreList" v-if="businessMoreIndexZD ===index">
							<view class="item" @click.stop="zhidingtop(item, index)">取消置顶</view>
							<view class="item" @click="dodel(item,index,1)">删除</view>
						</view>
					</view>
				</view>
				<!--end-->
				<!--名片5-->
				<view class="businessCardFive" v-if="item.cardId == 5">
					<view class="businessContain" @click="toDetail(item)">
						<view class="cardCard">
							<image :src="item.cjCompany.logoPath ? ctx + item.cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
						</view>
						<view class="comName">{{ item.cjCompany.name }}</view>
						<view class="bottomLeft">
							<view class="name">{{ item.cjUser.realName }}</view>
							<view class="job">{{ item.cjCompanyUser.job }}</view>
						</view>
						<view class="bottomRight">
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-26.png'"mode="widthFix" class="iconBg"></image>
								{{ item.cjUser.mobile }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-28.png'"mode="widthFix" class="iconBg"></image>
								{{ item.cjUser.phone }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-27.png'"mode="widthFix" class="iconBg"></image>
								{{ item.cjUser.email }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-29.png'"mode="widthFix" class="iconBg"></image>
								{{ item.cjCompany.addressStr }}
							</view>
						</view>
					</view>
					<view class="bottomBg"></view>
					<view class="businessMore">
						<view class="businessMoreBtn" @click="businessMoreBtnZD(index)">
							<image src="../../static/blackMore.png"mode="widthFix"></image>
						</view>
						<view class="businessMoreList" v-if="businessMoreIndexZD ===index">
							<view class="item" @click.stop="zhidingtop(item, index)">取消置顶</view>
							<view class="item" @click="dodel(item,index,1)">删除</view>
						</view>
					</view>
				</view>
				<!--end-->
				<!--名片6-->
				<view class="businessCardSix" v-if="item.cardId == 6">
					<view class="businessContain" @click="toDetail(item)">
						<view class="cardCard">
							<image :src="item.cjCompany.logoPath ? ctx + item.cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
						</view>
						<view class="rightCon firstimg">
							<view class="limeBg"></view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-37.png'"mode="widthFix" class="iconBg"></image>
								<view class="comName">{{ item.cjCompany.name }}</view>
								<view class="name">{{ item.cjUser.realName }}</view>
								<view class="job">{{ item.cjCompanyUser.job }}</view>
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-41.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.mobile }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-38.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.phone }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-39.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.email }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-40.png'"mode="widthFix" class="iconBg"></image>{{ item.cjCompany.addressStr }}
							</view>
						</view>
					</view>
					<view class="businessMore">
						<view class="businessMoreBtn" @click="businessMoreBtnZD(index)">
							<image src="../../static/blackMore.png"mode="widthFix"></image>
						</view>
						<view class="businessMoreList" v-if="businessMoreIndexZD ===index">
							<view class="item" @click.stop="zhidingtop(item, index)">取消置顶</view>
							<view class="item" @click="dodel(item,index,1)">删除</view>
						</view>
					</view>
				</view>
				<!--end-->
				<!--名片7-->
				<view class="businessCardSeven" v-if="item.cardId == 7">
					<view class="businessContain" @click="toDetail(item)">
						<image class="businessCardSevenBg" lazy-load :src="ctx + '/images/bg-10.png'"mode="widthFix"></image>
						<view class="cardCard">
							<image :src="item.cjCompany.logoPath ? ctx + item.cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
						</view>
						<view class="bottomLeft">
							<view class="name">{{ item.cjUser.realName }}</view>
							<view class="job">{{ item.cjCompanyUser.job }}</view>
						</view>
						<view class="bottomRight">
							<view class="labelCon">{{ item.cjCompany.name }}</view>
							<view class="labelCon"><text>M</text><text class="colon">：</text>{{ item.cjUser.mobile }}</view>
							<view class="labelCon"><text>T</text><text class="colon">：</text>{{ item.cjUser.phone }}</view>
							<view class="labelCon"><text>E</text><text class="colon">：</text>{{ item.cjUser.email }}</view>
							<view class="labelCon"><text>A</text><text class="colon">：</text>{{ item.cjCompany.addressStr }}</view>
						</view>
					</view>
					<view class="businessMore">
						<view class="businessMoreBtn" @click="businessMoreBtnZD(index)">
							<image src="../../static/blackMore.png"mode="widthFix"></image>
						</view>
						<view class="businessMoreList" v-if="businessMoreIndexZD ===index">
							<view class="item" @click.stop="zhidingtop(item, index)">取消置顶</view>
							<view class="item" @click="dodel(item,index,1)">删除</view>
						</view>
					</view>
				</view>
				<!--end-->
				<!--名片8-->
				<view class="businessCardEight" v-if="item.cardId == 8">
					<view class="businessContain" @click="toDetail(item)">
						<image class="businessCardEightBg" lazy-load :src="ctx + '/images/bg-09.jpg'"mode="widthFix"></image>
						<view class="eightTop">
							<view class="cardCard">
								<image :src="item.cjCompany.logoPath ? ctx + item.cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
							</view>
							<view class="labelCon">{{ item.cjCompany.name }}</view>
						</view>
						<view class="bottomLeft">
							<view class="name">{{ item.cjUser.realName }}</view>
							<view class="job">{{ item.cjCompanyUser.job }}</view>
						</view>
						<view class="bottomRight">
							<view class="labelCon"><text>M</text><text class="colon">：</text>{{ item.cjUser.mobile }}</view>
							<view class="labelCon"><text>T</text><text class="colon">：</text>{{ item.cjUser.phone }}</view>
							<view class="labelCon"><text>E</text><text class="colon">：</text>{{ item.cjUser.email }}</view>
							<view class="labelCon"><text>A</text><text class="colon">：</text>{{ item.cjCompany.addressStr }}</view>
						</view>
					</view>
					<view class="businessMore">
						<view class="businessMoreBtn" @click="businessMoreBtnZD(index)">
							<image src="../../static/blackMore.png"mode="widthFix"></image>
						</view>
						<view class="businessMoreList" v-if="businessMoreIndexZD ===index">
							<view class="item" @click.stop="zhidingtop(item, index)">取消置顶</view>
							<view class="item" @click="dodel(item,index,1)">删除</view>
						</view>
					</view>
				</view>
				<!--end-->
				<!--名片9-->
				<view class="businessCardNine" v-if="item.cardId == 9">
					<view class="businessContain" @click="toDetail(item)">
						<view class="nineTop">
							<view class="cardCard">
								<image :src="item.cjCompany.logoPath ? ctx + item.cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
							</view>
							<view class="labelCon">{{ item.cjCompany.name }}</view>
						</view>
						<view class="nineBottom">
							<view class="bottomRight">
								<view class="labelCon">
									<image lazy-load :src="ctx + '/images/icon-42.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.mobile }}
								</view>
								<view class="labelCon">
									<image lazy-load :src="ctx + '/images/icon-43.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.phone }}
								</view>
								<view class="labelCon">
									<image lazy-load :src="ctx + '/images/icon-44.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.email }}
								</view>
								<view class="labelCon">
									<image lazy-load :src="ctx + '/images/icon-45.png'"mode="widthFix" class="iconBg"></image>{{ item.cjCompany.addressStr }}
								</view>
							</view>
							<view class="bottomLeft">
								<view class="name">{{ item.cjUser.realName }}</view>
								<view class="job">{{ item.cjCompanyUser.job }}</view>
							</view>
						</view>
					</view>
					<view class="businessMore">
						<view class="businessMoreBtn" @click="businessMoreBtnZD(index)">
							<image src="../../static/blackMore.png"mode="widthFix"></image>
						</view>
						<view class="businessMoreList" v-if="businessMoreIndexZD ===index">
							<view class="item" @click.stop="zhidingtop(item, index)">取消置顶</view>
							<view class="item" @click="dodel(item,index,1)">删除</view>
						</view>
					</view>
				</view>
				<!--end-->
				<!--名片10-->
				<view class="businessCardTen" v-if="item.cardId == 10">
					<view class="businessContain" @click="toDetail(item)">
						<view class="cardCard">
							<image :src="item.cjCompany.logoPath ? ctx + item.cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
						</view>
						<view class="nineBottom">
							<view class="bottomRight">
								<view class="labelCon">
									<image lazy-load :src="ctx + '/images/icon-26.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.mobile }}
								</view>
								<view class="labelCon">
									<image lazy-load :src="ctx + '/images/icon-27.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.email }}
								</view>
								<view class="labelCon">
									<image lazy-load :src="ctx + '/images/icon-28.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.phone }}
								</view>
								<view class="labelCon">
									<image lazy-load :src="ctx + '/images/icon-29.png'"mode="widthFix" class="iconBg"></image>{{ item.cjCompany.addressStr }}
								</view>
							</view>
							<view class="bottomLeft">
								<view class="name">
									{{ item.cjUser.realName }}
									<text class="comName">{{ item.cjCompany.name }}</text>
								</view>
								<view class="job">
									<view class="con">{{ item.cjCompanyUser.job }}</view>
									<view class="line"></view>
								</view>
							</view>
						</view>
					</view>
					<view class="businessMore">
						<view class="businessMoreBtn" @click="businessMoreBtnZD(index)">
							<image src="../../static/blackMore.png"mode="widthFix"></image>
						</view>
						<view class="businessMoreList" v-if="businessMoreIndexZD ===index">
							<view class="item" @click.stop="zhidingtop(item, index)">取消置顶</view>
							<view class="item" @click="dodel(item,index,1)">删除</view>
						</view>
					</view>
				</view>
				<!--end-->
				<!--名片11-->
				<view class="businessCardEleven" v-if="item.cardId == 11">
					<view class="businessContain" @click="toDetail(item)">
						<image lazy-load :src="ctx + '/images/bg-10.jpg'" mode="aspectFill" class="businessCardElevenBg"></image>
						<view class="comName">{{ item.cjCompany.name }}</view>
						<view class="cardCard">
							<image :src="item.cjCompany.logoPath ? ctx + item.cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
						</view>
						<view class="nineBottom">
							<view class="bottomRight">
								<view class="labelCon">
									<image lazy-load :src="ctx + '/images/icon-46.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.mobile }}
								</view>
								<view class="labelCon">
									<image lazy-load :src="ctx + '/images/icon-47.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.email }}
								</view>
								<view class="labelCon">
									<image lazy-load :src="ctx + '/images/icon-48.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.phone }}
								</view>
								<view class="labelCon">
									<image lazy-load :src="ctx + '/images/icon-49.png'"mode="widthFix" class="iconBg"></image>{{ item.cjCompany.addressStr }}
								</view>
							</view>
							<view class="bottomLeft">
								<view class="name">{{ item.cjUser.realName }}</view>
								<view class="job">{{ item.cjCompanyUser.job }}</view>
							</view>
						</view>
					</view>
					<view class="businessMore">
						<view class="businessMoreBtn" @click="businessMoreBtnZD(index)">
							<image src="../../static/blackMore.png"mode="widthFix"></image>
						</view>
						<view class="businessMoreList" v-if="businessMoreIndexZD ===index">
							<view class="item" @click.stop="zhidingtop(item, index)">取消置顶</view>
							<view class="item" @click="dodel(item,index,1)">删除</view>
						</view>
					</view>
				</view>
				<!--end-->
				<!--名片12-->
				<view class="businessCardTwelve" v-if="item.cardId == 12">
					<view class="businessContain" @click="toDetail(item)">
						<image lazy-load :src="ctx + '/images/bg-11.jpg'" mode="aspectFill" class="businessCardElevenBg"></image>
						<view class="comName">{{ item.cjCompany.name }}</view>
						<view class="cardCard">
							<image :src="item.cjCompany.logoPath ? ctx + item.cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
						</view>
						<view class="bottomRight">
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-50.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.mobile }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-52.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.email }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-51.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.phone }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-53.png'"mode="widthFix" class="iconBg"></image>
								<view class="labelAddress">{{ item.cjCompany.addressStr }}</view>
							</view>
						</view>
						<view class="bottomLeft">
							<view class="name">{{ item.cjUser.realName }}</view>
							<view class="job">{{ item.cjCompanyUser.job }}</view>
						</view>
					</view>
					<view class="businessMore">
						<view class="businessMoreBtn" @click="businessMoreBtnZD(index)">
							<image src="../../static/blackMore.png"mode="widthFix"></image>
						</view>
						<view class="businessMoreList" v-if="businessMoreIndexZD ===index">
							<view class="item" @click.stop="zhidingtop(item, index)">取消置顶</view>
							<view class="item" @click="dodel(item,index,1)">删除</view>
						</view>
					</view>
				</view>
				<!--end-->
				<!--名片13-->
				<view class="businessCardThirteen" v-if="item.cardId == 13">
					<view class="businessContain" @click="toDetail(item)">
						<view class="comName">{{ item.cjCompany.name }}</view>
						<view class="cardCard">
							<image :src="item.cjCompany.logoPath ? ctx + item.cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
						</view>
						<view class="bottomRight">
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-54.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.mobile }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-56.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.email }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-55.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.phone }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-57.png'"mode="widthFix" class="iconBg"></image>
								<view class="labelAddress">{{ item.cjCompany.addressStr }}</view>
							</view>
						</view>
						<view class="bottomLeft">
							<view class="bottomLeftCon">
								<view class="name">{{ item.cjUser.realName }}</view>
								<view class="job">{{ item.cjCompanyUser.job }}</view>
							</view>
						</view>
					</view>
					<view class="businessMore">
						<view class="businessMoreBtn" @click="businessMoreBtnZD(index)">
							<image src="../../static/blackMore.png"mode="widthFix"></image>
						</view>
						<view class="businessMoreList" v-if="businessMoreIndexZD ===index">
							<view class="item" @click.stop="zhidingtop(item, index)">取消置顶</view>
							<view class="item" @click="dodel(item,index,1)">删除</view>
						</view>
					</view>
				</view>
				<!--end-->
				<!--名片14-->
				<view class="businessCardFourteen" v-if="item.cardId == 14">
					<view class="businessContain" @click="toDetail(item)">
						<view class="bottomLeft">
							<view class="cardCard">
								<image :src="item.cjCompany.logoPath ? ctx + item.cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
							</view>
							<view class="bottomLeftCon">
								<view class="name">{{ item.cjUser.realName }}</view>
								<view class="job">{{ item.cjCompanyUser.job }}</view>
							</view>
						</view>
						<view class="FourteenName">
							<image lazy-load :src="ctx + '/images/bg-12.jpg'"mode="widthFix"></image>
							<view class="comName">{{ item.cjCompany.name }}</view>
						</view>
						<view class="bottomRight">
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-58.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.mobile }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-60.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.email }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-59.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.phone }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-61.png'"mode="widthFix" class="iconBg"></image>{{ item.cjCompany.addressStr }}
							</view>
						</view>
					</view>
					<view class="businessMore">
						<view class="businessMoreBtn" @click="businessMoreBtnZD(index)">
							<image src="../../static/blackMore.png"mode="widthFix"></image>
						</view>
						<view class="businessMoreList" v-if="businessMoreIndexZD ===index">
							<view class="item" @click.stop="zhidingtop(item, index)">取消置顶</view>
							<view class="item" @click="dodel(item,index,1)">删除</view>
						</view>
					</view>
				</view>
				<!--end-->
				<!--名片15-->
				<view class="businessCardFifteen" v-if="item.cardId == 15">
					<view class="businessContain" @click="toDetail(item)">
						<view class="bottomLeft">
							<view class="triangle">
								<image lazy-load :src="ctx + '/images/icon-66.png'"mode="widthFix"></image>
							</view>
							<view class="bottomLeftCon">
								<view class="name">{{ item.cjUser.realName }}</view>
								<view class="job">{{ item.cjCompanyUser.job }}</view>
							</view>
						</view>
						<view class="FourteenName">
							<view class="cardCard">
								<image :src="item.cjCompany.logoPath ? ctx + item.cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
							</view>
							<view class="comName">{{ item.cjCompany.name }}</view>
						</view>
						<view class="bottomRight">
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-62.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.mobile }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-63.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.email }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-64.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.phone }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-65.png'"mode="widthFix" class="iconBg"></image>{{ item.cjCompany.addressStr }}
							</view>
						</view>
						<image lazy-load :src="ctx + '/images/bg-11.png'"mode="widthFix" class="businessCardFifteenBg"></image>
					</view>
					<view class="businessMore">
						<view class="businessMoreBtn" @click="businessMoreBtnZD(index)">
							<image src="../../static/blackMore.png"mode="widthFix"></image>
						</view>
						<view class="businessMoreList" v-if="businessMoreIndexZD ===index">
							<view class="item" @click.stop="zhidingtop(item, index)">取消置顶</view>
							<view class="item" @click="dodel(item,index,1)">删除</view>
						</view>
					</view>
				</view>
				<!--end-->
				<!--名片16-->
				<view class="businessCardSixteen" v-if="item.cardId == 16">
					<view class="cardCard" @click="toDetail(item)">
						<image :src="item.cjCompany.logoPath ? ctx + item.cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
					</view>
					<view class="cardName" @click="toDetail(item)">
						<view class="perName">
							{{ item.cjUser.realName }}
							<text class="job">{{ item.cjCompanyUser.job }}</text>
						</view>
						<view class="comName">{{ item.cjCompany.name }}</view>
					</view>
					<view class="lineBg" @click="toDetail(item)">
						<image src="../../static/bg2.png"mode="widthFix"></image>
					</view>
					<view class="bottomRight" @click="toDetail(item)">
						<view class="labelCon">
							<image src="../../static/sixteen-01.png"mode="widthFix" class="iconBg"></image>
							{{ item.cjUser.mobile }}
						</view>
						<view class="labelCon">
							<image src="../../static/sixteen-02.png"mode="widthFix" class="iconBg"></image>
							{{ item.cjUser.email }}
						</view>
						<view class="labelCon">
							<image src="../../static/sixteen-03.png"mode="widthFix" class="iconBg"></image>
							{{ item.cjUser.phone }}
						</view>
						<view class="labelCon">
							<image src="../../static/sixteen-04.png"mode="widthFix" class="iconBg"></image>
							{{ item.cjCompany.addressStr == 'null' ? "" : item.cjCompany.addressStr}}
						</view>
					</view>
					<view class="businessMore">
						<view class="businessMoreBtn" @click="businessMoreBtnZD(index)">
							<image src="../../static/blackMore.png"mode="widthFix"></image>
						</view>
						<view class="businessMoreList" v-if="businessMoreIndexZD ===index">
							<view class="item" @click.stop="zhidingtop(item, index)">取消置顶</view>
							<view class="item" @click="dodel(item,index,1)">删除</view>
						</view>
					</view>
				</view>
				<!--end-->
			</view>
		</view>
		<view class="" v-if="cjUserCards.length != 0">
			<view class="businessCardRecord" v-for="(item, index) in cjUserCards" :key="index">
				<!--名片1-->
				<view class="businessCardOne" v-if="item.cardId == 1">
					<view class="businessContain" @click="toDetail(item)">
						<view class="cardName">
							<!-- <image lazy-load :src="ctx + '/images/icon-14.png'"mode="widthFix"></image> -->
							<view class="topLeft">
								<view class="name">{{ item.cjUser.realName }}</view>
								<view class="job">{{ item.cjCompanyUser.job }}</view>
							</view>
							<view class="comName">{{ item.cjCompany.name }}</view>
						</view>
						<view class="cardCard">
							<image :src="item.cjCompany.logoPath ? ctx + item.cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
						</view>
						<!-- <view class="bottomLeft">
							<view class="name">{{ item.cjUser.realName }}</view>
							<view class="job">{{ item.cjCompanyUser.job }}</view>
						</view> -->
						<view class="bottomRight">
							<view class="labelCon">
								<text>M</text>
								<text class="colon">：</text>{{ item.cjUser.mobile }}
							</view>
							<view class="labelCon">
								<text>T</text>
								<text class="colon">：</text>{{ item.cjUser.phone }}
							</view>
							<view class="labelCon">
								<text>E</text>
								<text class="colon">：</text>{{ item.cjUser.email }}
							</view>
							<view class="labelCon">
								<text>A</text>
								<text class="colon">：</text>{{ item.cjCompany.addressStr }}
							</view>
						</view>
					</view>
					<view class="businessMore businessMoreWhite">
						<view class="businessMoreBtn" @click="businessMoreBtn(index)">
							<image src="../../static/whiteMore.png"mode="widthFix"></image>
						</view>
						<view class="businessMoreList" v-if="businessMoreIndex ===index">
							<view class="item" @click.stop="zhiding(item, index)">置顶</view>
							<view class="item" @click="dodel(item,index,0)">删除</view>
						</view>
					</view>
				</view>
				<!--end-->
				<!--名片2-->
				<view class="businessCardTwo" v-if="item.cardId == 2">
					<view class="businessCardTwoBg" @click="toDetail(item)">
						<view class="cardCard">
							<image :src="item.cjCompany.logoPath ? ctx + item.cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
						</view>
						<view class="cardName">
							<!-- <image lazy-load :src="ctx + '/images/icon-21.png'"mode="widthFix"></image> -->
							<view class="comName">{{ item.cjCompany.name }}</view>
						</view>
						<view class="bottomLeft">
							<view class="name">{{ item.cjUser.realName }}</view>
							<view class="job" style="word-wrap:break-word;word-break:break-all;">{{ item.cjCompanyUser.job }}</view>
						</view>
						<view class="bottomRight">
							<view class="labelCon">
								<text>M</text>
								<text class="colon">：</text>{{ item.cjUser.mobile }}
							</view>
							<view class="labelCon">
								<text>T</text>
								<text class="colon">：</text>{{ item.cjUser.phone }}
							</view>
							<view class="labelCon">
								<text>E</text>
								<text class="colon">：</text>{{ item.cjUser.email }}
							</view>
							<view class="labelCon">
								<text>A</text>
								<text class="colon">：</text>{{ item.cjCompany.addressStr }}
							</view>
						</view>
					</view>
					<view class="businessMore">
						<view class="businessMoreBtn" @click="businessMoreBtn(index)">
							<image src="../../static/blackMore.png"mode="widthFix"></image>
						</view>
						<view class="businessMoreList" v-if="businessMoreIndex ===index">
							<view class="item" @click.stop="zhiding(item, index)">置顶</view>
							<view class="item" @click="dodel(item,index,0)">删除</view>
						</view>
					</view>
				</view>
				<!--end-->
				<!--名片3-->
				<view class="businessCardThree" v-if="item.cardId == 3">
					<view class="businessContain" @click="toDetail(item)">
						<image lazy-load :src="ctx + '/images/bg-06.png'"mode="widthFix" class="leftBg"></image>
						<image lazy-load :src="ctx + '/images/bg-07.png'"mode="widthFix" class="RightBg"></image>
						<view class="cardCard">
							<image :src="item.cjCompany.logoPath ? ctx + item.cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
						</view>
						<view class="cardName">
							<view class="perName">
								{{ item.cjUser.realName }}
								<text class="job">{{ item.cjCompanyUser.job }}</text>
							</view>
							<view class="comName">{{ item.cjCompany.name }}</view>
						</view>
						<view class="bottomRight">
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-23.png'"mode="widthFix" class="iconBg"></image>
								{{ item.cjUser.mobile }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-24.png'"mode="widthFix" class="iconBg"></image>
								{{ item.cjUser.phone }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-25.png'"mode="widthFix" class="iconBg"></image>
								{{ item.cjUser.email }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-22.png'"mode="widthFix" class="iconBg"></image>
								{{ item.cjCompany.addressStr }}
							</view>
						</view>
					</view>
					<view class="businessMore">
						<view class="businessMoreBtn" @click="businessMoreBtn(index)">
							<image src="../../static/blackMore.png"mode="widthFix"></image>
						</view>
						<view class="businessMoreList" v-if="businessMoreIndex ===index">
							<view class="item" @click.stop="zhiding(item, index)">置顶</view>
							<view class="item" @click="dodel(item,index,0)">删除</view>
						</view>
					</view>
				</view>
				<!--end-->
				<!--名片4-->
				<view class="businessCardFore" v-if="item.cardId == 4">
					<view class="businessContain" @click="toDetail(item)">
						<view class="cardCard">
							<image :src="item.cjCompany.logoPath ? ctx + item.cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
						</view>
						<view class="bottomLeft">
							<view class="name">{{ item.cjUser.realName }}</view>
							<view class="job">{{ item.cjCompanyUser.job }}</view>
						</view>
						<view class="comName">{{ item.cjCompany.name }}</view>
						<view class="bottomRight">
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-26.png'"mode="widthFix" class="iconBg"></image>
								{{ item.cjUser.mobile }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-27.png'"mode="widthFix" class="iconBg"></image>
								{{ item.cjUser.email }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-28.png'"mode="widthFix" class="iconBg"></image>
								{{ item.cjUser.phone }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-29.png'"mode="widthFix" class="iconBg"></image>
								{{ item.cjCompany.addressStr }}
							</view>
						</view>
					</view>
					<view class="bottomBg"></view>
					<view class="businessMore">
						<view class="businessMoreBtn" @click="businessMoreBtn(index)">
							<image src="../../static/blackMore.png"mode="widthFix"></image>
						</view>
						<view class="businessMoreList" v-if="businessMoreIndex ===index">
							<view class="item" @click.stop="zhiding(item, index)">置顶</view>
							<view class="item" @click="dodel(item,index,0)">删除</view>
						</view>
					</view>
				</view>
				<!--end-->
				<!--名片5-->
				<view class="businessCardFive" v-if="item.cardId == 5">
					<view class="businessContain" @click="toDetail(item)">
						<view class="cardCard">
							<image :src="item.cjCompany.logoPath ? ctx + item.cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
						</view>
						<view class="comName">{{ item.cjCompany.name }}</view>
						<view class="bottomLeft">
							<view class="name">{{ item.cjUser.realName }}</view>
							<view class="job">{{ item.cjCompanyUser.job }}</view>
						</view>
						<view class="bottomRight">
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-26.png'"mode="widthFix" class="iconBg"></image>
								{{ item.cjUser.mobile }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-28.png'"mode="widthFix" class="iconBg"></image>
								{{ item.cjUser.phone }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-27.png'"mode="widthFix" class="iconBg"></image>
								{{ item.cjUser.email }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-29.png'"mode="widthFix" class="iconBg"></image>
								{{ item.cjCompany.addressStr }}
							</view>
						</view>
					</view>
					<view class="bottomBg"></view>
					<view class="businessMore">
						<view class="businessMoreBtn" @click="businessMoreBtn(index)">
							<image src="../../static/blackMore.png"mode="widthFix"></image>
						</view>
						<view class="businessMoreList" v-if="businessMoreIndex ===index">
							<view class="item" @click.stop="zhiding(item, index)">置顶</view>
							<view class="item" @click="dodel(item,index,0)">删除</view>
						</view>
					</view>
				</view>
				<!--end-->
				<!--名片6-->
				<view class="businessCardSix" v-if="item.cardId == 6">
					<view class="businessContain" @click="toDetail(item)">
						<view class="cardCard">
							<image :src="item.cjCompany.logoPath ? ctx + item.cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
						</view>
						<view class="rightCon firstimg">
							<view class="limeBg"></view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-37.png'"mode="widthFix" class="iconBg"></image>
								<view class="comName">{{ item.cjCompany.name }}</view>
								<view class="name">{{ item.cjUser.realName }}</view>
								<view class="job">{{ item.cjCompanyUser.job }}</view>
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-41.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.mobile }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-38.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.phone }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-39.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.email }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-40.png'"mode="widthFix" class="iconBg"></image>{{ item.cjCompany.addressStr }}
							</view>
						</view>
					</view>
					<view class="businessMore">
						<view class="businessMoreBtn" @click="businessMoreBtn(index)">
							<image src="../../static/blackMore.png"mode="widthFix"></image>
						</view>
						<view class="businessMoreList" v-if="businessMoreIndex ===index">
							<view class="item" @click.stop="zhiding(item, index)">置顶</view>
							<view class="item" @click="dodel(item,index,0)">删除</view>
						</view>
					</view>
				</view>
				<!--end-->
				<!--名片7-->
				<view class="businessCardSeven" v-if="item.cardId == 7">
					<view class="businessContain" @click="toDetail(item)">
						<image class="businessCardSevenBg" lazy-load :src="ctx + '/images/bg-10.png'"mode="widthFix"></image>
						<view class="cardCard">
							<image :src="item.cjCompany.logoPath ? ctx + item.cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
						</view>
						<view class="bottomLeft">
							<view class="name">{{ item.cjUser.realName }}</view>
							<view class="job">{{ item.cjCompanyUser.job }}</view>
						</view>
						<view class="bottomRight">
							<view class="labelCon">{{ item.cjCompany.name }}</view>
							<view class="labelCon"><text>M</text><text class="colon">：</text>{{ item.cjUser.mobile }}</view>
							<view class="labelCon"><text>T</text><text class="colon">：</text>{{ item.cjUser.phone }}</view>
							<view class="labelCon"><text>E</text><text class="colon">：</text>{{ item.cjUser.email }}</view>
							<view class="labelCon"><text>A</text><text class="colon">：</text>{{ item.cjCompany.addressStr }}</view>
						</view>
					</view>
					<view class="businessMore">
						<view class="businessMoreBtn" @click="businessMoreBtn(index)">
							<image src="../../static/blackMore.png"mode="widthFix"></image>
						</view>
						<view class="businessMoreList" v-if="businessMoreIndex ===index">
							<view class="item" @click.stop="zhiding(item, index)">置顶</view>
							<view class="item" @click="dodel(item,index,0)">删除</view>
						</view>
					</view>
				</view>
				<!--end-->
				<!--名片8-->
				<view class="businessCardEight" v-if="item.cardId == 8">
					<view class="businessContain" @click="toDetail(item)">
						<image class="businessCardEightBg" lazy-load :src="ctx + '/images/bg-09.jpg'"mode="widthFix"></image>
						<view class="eightTop">
							<view class="cardCard">
								<image :src="item.cjCompany.logoPath ? ctx + item.cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
							</view>
							<view class="labelCon">{{ item.cjCompany.name }}</view>
						</view>
						<view class="bottomLeft">
							<view class="name">{{ item.cjUser.realName }}</view>
							<view class="job">{{ item.cjCompanyUser.job }}</view>
						</view>
						<view class="bottomRight">
							<view class="labelCon"><text>M</text><text class="colon">：</text>{{ item.cjUser.mobile }}</view>
							<view class="labelCon"><text>E</text><text class="colon">：</text>{{ item.cjUser.phone }}</view>
							<view class="labelCon"><text>E</text><text class="colon">：</text>{{ item.cjUser.email }}</view>
							<view class="labelCon"><text>A</text><text class="colon">：</text>{{ item.cjCompany.addressStr }}</view>
						</view>
					</view>
					<view class="businessMore">
						<view class="businessMoreBtn" @click="businessMoreBtn(index)">
							<image src="../../static/blackMore.png"mode="widthFix"></image>
						</view>
						<view class="businessMoreList" v-if="businessMoreIndex ===index">
							<view class="item" @click.stop="zhiding(item, index)">置顶</view>
							<view class="item" @click="dodel(item,index,0)">删除</view>
						</view>
					</view>
				</view>
				<!--end-->
				<!--名片9-->
				<view class="businessCardNine" v-if="item.cardId == 9">
					<view class="businessContain" @click="toDetail(item)">
						<view class="nineTop">
							<view class="cardCard">
								<image :src="item.cjCompany.logoPath ? ctx + item.cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
							</view>
							<view class="labelCon">{{ item.cjCompany.name }}</view>
						</view>
						<view class="nineBottom">
							<view class="bottomRight">
								<view class="labelCon">
									<image lazy-load :src="ctx + '/images/icon-42.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.mobile }}
								</view>
								<view class="labelCon">
									<image lazy-load :src="ctx + '/images/icon-43.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.phone }}
								</view>
								<view class="labelCon">
									<image lazy-load :src="ctx + '/images/icon-44.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.email }}
								</view>
								<view class="labelCon">
									<image lazy-load :src="ctx + '/images/icon-45.png'"mode="widthFix" class="iconBg"></image>{{ item.cjCompany.addressStr }}
								</view>
							</view>
							<view class="bottomLeft">
								<view class="name">{{ item.cjUser.realName }}</view>
								<view class="job">{{ item.cjCompanyUser.job }}</view>
							</view>
						</view>
					</view>
					<view class="businessMore">
						<view class="businessMoreBtn" @click="businessMoreBtn(index)">
							<image src="../../static/blackMore.png"mode="widthFix"></image>
						</view>
						<view class="businessMoreList" v-if="businessMoreIndex ===index">
							<view class="item" @click.stop="zhiding(item, index)">置顶</view>
							<view class="item" @click="dodel(item,index,0)">删除</view>
						</view>
					</view>
				</view>
				<!--end-->
				<!--名片10-->
				<view class="businessCardTen" v-if="item.cardId == 10">
					<view class="businessContain" @click="toDetail(item)">
						<view class="cardCard">
							<image :src="item.cjCompany.logoPath ? ctx + item.cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
						</view>
						<view class="nineBottom">
							<view class="bottomRight">
								<view class="labelCon">
									<image lazy-load :src="ctx + '/images/icon-26.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.mobile }}
								</view>
								<view class="labelCon">
									<image lazy-load :src="ctx + '/images/icon-27.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.email }}
								</view>
								<view class="labelCon">
									<image lazy-load :src="ctx + '/images/icon-28.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.phone }}
								</view>
								<view class="labelCon">
									<image lazy-load :src="ctx + '/images/icon-29.png'"mode="widthFix" class="iconBg"></image>{{ item.cjCompany.addressStr }}
								</view>
							</view>
							<view class="bottomLeft">
								<view class="name">
									{{ item.cjUser.realName }}
									<text class="comName">{{ item.cjCompany.name }}</text>
								</view>
								<view class="job">
									<view class="con">{{ item.cjCompanyUser.job }}</view>
									<view class="line"></view>
								</view>
							</view>
						</view>
					</view>
					<view class="businessMore">
						<view class="businessMoreBtn" @click="businessMoreBtn(index)">
							<image src="../../static/blackMore.png"mode="widthFix"></image>
						</view>
						<view class="businessMoreList" v-if="businessMoreIndex ===index">
							<view class="item" @click.stop="zhiding(item, index)">置顶</view>
							<view class="item" @click="dodel(item,index,0)">删除</view>
						</view>
					</view>
				</view>
				<!--end-->
				<!--名片11-->
				<view class="businessCardEleven" v-if="item.cardId == 11">
					<view class="businessContain" @click="toDetail(item)">
						<image lazy-load :src="ctx + '/images/bg-10.jpg'" mode="aspectFill" class="businessCardElevenBg"></image>
						<view class="comName">{{ item.cjCompany.name }}</view>
						<view class="cardCard">
							<image :src="item.cjCompany.logoPath ? ctx + item.cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
						</view>
						<view class="nineBottom">
							<view class="bottomRight">
								<view class="labelCon">
									<image lazy-load :src="ctx + '/images/icon-46.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.mobile }}
								</view>
								<view class="labelCon">
									<image lazy-load :src="ctx + '/images/icon-47.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.email }}
								</view>
								<view class="labelCon">
									<image lazy-load :src="ctx + '/images/icon-48.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.phone }}
								</view>
								<view class="labelCon">
									<image lazy-load :src="ctx + '/images/icon-49.png'"mode="widthFix" class="iconBg"></image>{{ item.cjCompany.addressStr }}
								</view>
							</view>
							<view class="bottomLeft">
								<view class="name">{{ item.cjUser.realName }}</view>
								<view class="job">{{ item.cjCompanyUser.job }}</view>
							</view>
						</view>
					</view>
					<view class="businessMore">
						<view class="businessMoreBtn" @click="businessMoreBtn(index)">
							<image src="../../static/blackMore.png"mode="widthFix"></image>
						</view>
						<view class="businessMoreList" v-if="businessMoreIndex ===index">
							<view class="item" @click.stop="zhiding(item, index)">置顶</view>
							<view class="item" @click="dodel(item,index,0)">删除</view>
						</view>
					</view>
				</view>
				<!--end-->
				<!--名片12-->
				<view class="businessCardTwelve" v-if="item.cardId == 12">
					<view class="businessContain" @click="toDetail(item)">
						<image lazy-load :src="ctx + '/images/bg-11.jpg'" mode="aspectFill" class="businessCardElevenBg"></image>
						<view class="comName">{{ item.cjCompany.name }}</view>
						<view class="cardCard">
							<image :src="item.cjCompany.logoPath ? ctx + item.cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
						</view>
						<view class="bottomRight">
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-50.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.mobile }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-52.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.email }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-51.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.phone }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-53.png'"mode="widthFix" class="iconBg"></image>
								<view class="labelAddress">{{ item.cjCompany.addressStr }}</view>
							</view>
						</view>
						<view class="bottomLeft">
							<view class="name">{{ item.cjUser.realName }}</view>
							<view class="job">{{ item.cjCompanyUser.job }}</view>
						</view>
					</view>
					<view class="businessMore">
						<view class="businessMoreBtn" @click="businessMoreBtn(index)">
							<image src="../../static/blackMore.png"mode="widthFix"></image>
						</view>
						<view class="businessMoreList" v-if="businessMoreIndex ===index">
							<view class="item" @click.stop="zhiding(item, index)">置顶</view>
							<view class="item" @click="dodel(item,index,0)">删除</view>
						</view>
					</view>
				</view>
				<!--end-->
				<!--名片13-->
				<view class="businessCardThirteen" v-if="item.cardId == 13">
					<view class="businessContain" @click="toDetail(item)">
						<view class="comName">{{ item.cjCompany.name }}</view>
						<view class="cardCard">
							<image :src="item.cjCompany.logoPath ? ctx + item.cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
						</view>
						<view class="bottomRight">
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-54.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.mobile }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-56.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.email }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-55.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.phone }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-57.png'"mode="widthFix" class="iconBg"></image>
								<view class="labelAddress">{{ item.cjCompany.addressStr }}</view>
							</view>
						</view>
						<view class="bottomLeft">
							<view class="bottomLeftCon">
								<view class="name">{{ item.cjUser.realName }}</view>
								<view class="job">{{ item.cjCompanyUser.job }}</view>
							</view>
						</view>
					</view>
					<view class="businessMore">
						<view class="businessMoreBtn" @click="businessMoreBtn(index)">
							<image src="../../static/blackMore.png"mode="widthFix"></image>
						</view>
						<view class="businessMoreList" v-if="businessMoreIndex ===index">
							<view class="item" @click.stop="zhiding(item, index)">置顶</view>
							<view class="item" @click="dodel(item,index,0)">删除</view>
						</view>
					</view>
				</view>
				<!--end-->
				<!--名片14-->
				<view class="businessCardFourteen" v-if="item.cardId == 14">
					<view class="businessContain" @click="toDetail(item)">
						<view class="bottomLeft">
							<view class="cardCard">
								<image :src="item.cjCompany.logoPath ? ctx + item.cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
							</view>
							<view class="bottomLeftCon">
								<view class="name">{{ item.cjUser.realName }}</view>
								<view class="job">{{ item.cjCompanyUser.job }}</view>
							</view>
						</view>
						<view class="FourteenName">
							<image lazy-load :src="ctx + '/images/bg-12.jpg'"mode="widthFix"></image>
							<view class="comName">{{ item.cjCompany.name }}</view>
						</view>
						<view class="bottomRight">
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-58.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.mobile }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-60.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.email }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-59.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.phone }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-61.png'"mode="widthFix" class="iconBg"></image>{{ item.cjCompany.addressStr }}
							</view>
						</view>
					</view>
					<view class="businessMore">
						<view class="businessMoreBtn" @click="businessMoreBtn(index)">
							<image src="../../static/blackMore.png"mode="widthFix"></image>
						</view>
						<view class="businessMoreList" v-if="businessMoreIndex ===index">
							<view class="item" @click.stop="zhiding(item, index)">置顶</view>
							<view class="item" @click="dodel(item,index,0)">删除</view>
						</view>
					</view>
				</view>
				<!--end-->
				<!--名片15-->
				<view class="businessCardFifteen" v-if="item.cardId == 15">
					<view class="businessContain" @click="toDetail(item)">
						<view class="bottomLeft">
							<view class="triangle">
								<image lazy-load :src="ctx + '/images/icon-66.png'"mode="widthFix"></image>
							</view>
							<view class="bottomLeftCon">
								<view class="name">{{ item.cjUser.realName }}</view>
								<view class="job">{{ item.cjCompanyUser.job }}</view>
							</view>
						</view>
						<view class="FourteenName">
							<view class="cardCard">
								<image :src="item.cjCompany.logoPath ? ctx + item.cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
							</view>
							<view class="comName">{{ item.cjCompany.name }}</view>
						</view>
						<view class="bottomRight">
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-62.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.mobile }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-63.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.email }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-64.png'"mode="widthFix" class="iconBg"></image>{{ item.cjUser.phone }}
							</view>
							<view class="labelCon">
								<image lazy-load :src="ctx + '/images/icon-65.png'"mode="widthFix" class="iconBg"></image>{{ item.cjCompany.addressStr }}
							</view>
						</view>
						<image lazy-load :src="ctx + '/images/bg-11.png'"mode="widthFix" class="businessCardFifteenBg"></image>

					</view>
					<view class="businessMore">
						<view class="businessMoreBtn" @click="businessMoreBtn(index)">
							<image src="../../static/blackMore.png"mode="widthFix"></image>
						</view>
						<view class="businessMoreList" v-if="businessMoreIndex ===index">
							<view class="item" @click.stop="zhiding(item, index)">置顶</view>
							<view class="item" @click="dodel(item,index,0)">删除</view>
						</view>
					</view>
				</view>
				<!--end-->
				<!--名片16-->
				<view class="businessCardSixteen" v-if="item.cardId == 16">
					<view class="cardCard" @click="toDetail(item)">
						<image :src="item.cjCompany.logoPath ? ctx + item.cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
					</view>
					<view class="cardName" @click="toDetail(item)">
						<view class="perName">
							{{ item.cjUser.realName }}
							<text class="job">{{ item.cjCompanyUser.job }}</text>
						</view>
						<view class="comName">{{ item.cjCompany.name }}</view>
					</view>
					<view class="lineBg" @click="toDetail(item)">
						<image src="../../static/bg2.png"mode="widthFix"></image>
					</view>
					<view class="bottomRight" @click="toDetail(item)">
						<view class="labelCon">
							<image src="../../static/sixteen-01.png"mode="widthFix" class="iconBg"></image>
							{{ item.cjUser.mobile }}
						</view>
						<view class="labelCon">
							<image src="../../static/sixteen-02.png"mode="widthFix" class="iconBg"></image>
							{{ item.cjUser.email }}
						</view>
						<view class="labelCon">
							<image src="../../static/sixteen-03.png"mode="widthFix" class="iconBg"></image>
							{{ item.cjUser.phone }}
						</view>
						<view class="labelCon">
							<image src="../../static/sixteen-04.png"mode="widthFix" class="iconBg"></image>
							{{ item.cjCompany.addressStr == 'null' ? "" : item.cjCompany.addressStr}}
						</view>
					</view>
					<view class="businessMore">
						<view class="businessMoreBtn" @click="businessMoreBtn(index)">
							<image src="../../static/blackMore.png"mode="widthFix"></image>
						</view>
						<view class="businessMoreList" v-if="businessMoreIndex ===index">
							<view class="item" @click.stop="zhiding(item, index)">置顶</view>
							<view class="item" @click="dodel(item,index,0)">删除</view>
						</view>
					</view>
				</view>
				<!--end-->
			</view>
			<text class="loading-text">{{ contentText }}</text>
		</view>
		<view class="mainNull" v-if="cjUserCards.length == 0 && roofPlacementList.length == 0">
			<view>
				<view class="iconfont">&#xe71f;</view>
				<view class="mainNullTip">暂无数据</view>
			</view>
		</view>
	</view>
</template>
<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	export default {
		components: {
			uniPopup,
			uniLoadMore
		},
		data() {
			return {
				ctx: this.$ctx,
				roofPlacementList: [],
				cjUserCards: [],
				userId: '',
				pageNumber: 1,
				contentText: '正在加载...',
				noData: 10,
				type: '',
				obj: {},
				businessMoreShow: false,
				businessMoreIndex: null,
				businessMoreIndexZD: null,
			};
		},
		onLoad(options) {
			this.userId = options.userId;
			this.getDataList();
		},
		onBackPress() {
			if (this.type !== '') {
				this.type = '';
				return true;
			}
		},
		onReachBottom: function() {
			this.pageNumber++;
			console.log(this.pageNumber);
			this.getDataList();
		},
		methods: {
			businessMoreBtn(index) {
				console.log(this.businessMoreIndex, index)
				if (this.businessMoreIndex == index) {
					return this.businessMoreIndex = null;
				}
				this.businessMoreIndex = index;
				this.businessMoreIndexZD = null;
				// console.log('123456789')
				// this.businessMoreShow = !this.businessMoreShow
			},

			businessMoreBtnZD(index) {
				console.log(this.businessMoreIndexZD, index)
				if (this.businessMoreIndexZD == index) {
					return this.businessMoreIndexZD = null;
				}
				this.businessMoreIndexZD = index;
				this.businessMoreIndex = null;
			},


			toDetail(obj) {
				uni.navigateTo({
					url: '/pages/businessCard/cardDetail?userCardId=' + obj.id
				});
			},
			getDataList() {
				if (this.noData < 10) {
					this.contentText = '没有更多数据了';
					return;
				}
				this.contentText = '正在加载...';
				// 请求数据列表
				this.$getJson('/api/v2/vue/sqPlus/card/cardHistoryList.jsp', {
					data: JSON.stringify({
						userId: this.userId,
						pageNumber: this.pageNumber
					})
				}, 'POST', res => {
					console.log('res', res);
					this.roofPlacementList = res.data.roofPlacementList;
					res.data.cjUserCards.forEach(item => {
						this.cjUserCards.push(item);
					});
					this.noData = res.data.cjUserCards.length;
					if (this.noData < 10) {
						this.contentText = '没有更多数据了';
					} else {
						this.contentText = '上拉显示更多';
					}
				});
			},
			togglePopup(type, item) {
				this.obj = item;
				this.type = type;
			},
			zhidingtop(item, index) {
				this.$getJson('/api/v2/vue/sqPlus/card/doRoofPlacement.jsp', {
					data: JSON.stringify({
						userCardId: item.id
					})
				}, 'POST', res => {
					console.log(item);
					this.roofPlacementList.splice(index, 1);
					this.cjUserCards.push(item);

					this.businessMoreIndex = null;
					this.businessMoreIndexZD = null;
				});

			},
			zhiding(item, index) {
				this.$getJson('/api/v2/vue/sqPlus/card/doRoofPlacement.jsp', {
					data: JSON.stringify({
						userCardId: item.id
					})
				}, 'POST', res => {
					console.log(item);
					this.cjUserCards.splice(index, 1);
					this.roofPlacementList.unshift(item);
					this.businessMoreIndex = null;
					this.businessMoreIndexZD = null;
				});
				// 发送请求 置顶请求
			},
			dodel(item, index, isTop) {
				var that = this
				uni.showModal({
					title: '提示',
					content: '确认删除' + item.cjUser.realName + "的名片吗",
					success: function(res) {
						if (res.confirm) {
							that.$getJson('/api/v2/vue/sqPlus/card/delUserCard.jsp', {
								data: JSON.stringify({
									userCardId: item.id
								})
							}, 'POST', res => {
								console.log(item);
								if (isTop == 0) {
									that.cjUserCards.splice(index, 1);
								} else {
									that.roofPlacementList.splice(index, 1);
								}
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}

		}
	};
</script>

<style>
	page {
		background: #fff;
	}

	.RecordHandle {
		position: relative;
		background: #8cd8ff;
	}

	.businessCardOne,
	.businessCardTwo,
	.businessCardThree,
	.businessCardFore,
	.businessCardFive,
	.businessCardSix,
	.businessCardSeven,
	.businessCardEight,
	.businessCardNine,
	.businessCardTen,
	.businessCardEleven,
	.businessCardTwelve,
	.businessCardThirteen,
	.businessCardFourteen,
	.businessCardFifteen {
		margin: 6% 4% 0 4%;
	}
</style>
