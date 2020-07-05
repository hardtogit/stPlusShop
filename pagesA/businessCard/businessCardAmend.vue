<template>
	<view>
		<view class="businessCardRecord">
			<!--名片7-->
			<view class="businessCardSeven" @click="cardSelect(7)">
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
					<view class="labelCon"><text>T</text><text class="colon">：</text>{{intvCjUser.phone}}</view>
					<view class="labelCon"><text>E</text><text class="colon">：</text>{{ intvCjUser.email }}</view>
					<view class="labelCon"><text>A</text><text class="colon">：</text>{{ cjCompany.addressStr == 'null' ? "" : cjCompany.addressStr}}</view>
				</view>
				<view class="iconfont selectBg" v-if="isshow == 7">&#xe605;</view>
			</view>
			<!--名片3-->
			<view class="businessCardThree" @click="cardSelect(3)">
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
						{{intvCjUser.phone}}
					</view>
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-25.png'"mode="widthFix" class="iconBg"></image>
						{{ intvCjUser.email }}
					</view>
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-22.png'"mode="widthFix" class="iconBg"></image>
						{{ cjCompany.addressStr == 'null' ? "" : cjCompany.addressStr}}
					</view>
				</view>
				<view class="iconfont selectBg" v-if="isshow == 3">&#xe605;</view>
			</view>
			<!--名片6-->
			<view class="businessCardSix" @click="cardSelect(6)">
				<view class="cardCard"> <image :src="cjCompany.logoPath ? ctx + cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image> </view>
				<view class="rightCon">
					<view class="limeBg"></view>
					<view class="labelCon firstimg">
						<image lazy-load :src="ctx + '/images/icon-37.png'"mode="widthFix" class="iconBg"></image>
						<view class="comName">{{ cjCompany.name }}</view>
						<view class="name">{{ intvCjUser.realName }}</view>
						<view class="job">{{ cjCompanyUser.job }}</view>
					</view>
					<view class="labelCon"><image lazy-load :src="ctx + '/images/icon-41.png'"mode="widthFix" class="iconBg"></image>{{ intvCjUser.mobile }}</view>
					<view class="labelCon"><image lazy-load :src="ctx + '/images/icon-38.png'"mode="widthFix" class="iconBg"></image>{{ intvCjUser.email }}</view>
					<view class="labelCon"><image lazy-load :src="ctx + '/images/icon-39.png'"mode="widthFix" class="iconBg"></image>{{intvCjUser.phone}}</view>
					<view class="labelCon"><image lazy-load :src="ctx + '/images/icon-40.png'"mode="widthFix" class="iconBg"></image>{{  cjCompany.addressStr == 'null' ? "" : cjCompany.addressStr}}</view>
				</view>
				<view class="iconfont selectBg" v-if="isshow == 6">&#xe605;</view>
			</view>
			<!--名片4-->
			<view class="businessCardFore" @click="cardSelect(4)">
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
						{{intvCjUser.phone}}
					</view>
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-29.png'"mode="widthFix" class="iconBg"></image>
						{{ cjCompany.addressStr == 'null' ? "" : cjCompany.addressStr}}
					</view>
				</view>
				<view class="bottomBg"></view>
				<view class="iconfont selectBg" v-if="isshow == 4">&#xe605;</view>
			</view>
			<!--名片5-->
			<view class="businessCardFive" @click="cardSelect(5)">
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
						<text>{{intvCjUser.phone}}</text>
					</view>
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-27.png'"mode="widthFix" class="iconBg"></image>
						<text>{{ intvCjUser.email }}</text>
					</view>
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-29.png'"mode="widthFix" class="iconBg"></image>
						<text>{{ cjCompany.addressStr == 'null' ? "" : cjCompany.addressStr}}</text>
					</view>
				</view>
				<view class="bottomBg"></view>
				<view class="iconfont selectBg" v-if="isshow == 5">&#xe605;</view>
			</view>
			<!--名片8-->
			<view class="businessCardEight" @click="cardSelect(8)">
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
					<view class="labelCon"><text>T</text><text class="colon">：</text>{{intvCjUser.phone}}</view>
					<view class="labelCon"><text>E</text><text class="colon">：</text>{{ intvCjUser.email }}</view>
					<view class="labelCon"><text>A</text><text class="colon">：</text>{{ cjCompany.addressStr == 'null' ? "" : cjCompany.addressStr}}</view>
				</view>
				<view class="iconfont selectBg" v-if="isshow == 8">&#xe605;</view>
			</view>
			<!--名片9-->
			<view class="businessCardNine" @click="cardSelect(9)">
				<view class="nineTop">
					<view class="cardCard">
						<image :src="cjCompany.logoPath ? ctx + cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
					</view>
					<view class="labelCon">{{ cjCompany.name }}</view>
				</view>
				<view class="nineBottom">
					<view class="bottomRight">
						<view class="labelCon"><image lazy-load :src="ctx + '/images/icon-42.png'"mode="widthFix" class="iconBg"></image>{{  intvCjUser.mobile }}</view>
						<view class="labelCon"><image lazy-load :src="ctx + '/images/icon-43.png'"mode="widthFix" class="iconBg"></image>{{intvCjUser.phone}}</view>
						<view class="labelCon"><image lazy-load :src="ctx + '/images/icon-44.png'"mode="widthFix" class="iconBg"></image>{{  intvCjUser.email }}</view>
						<view class="labelCon"><image lazy-load :src="ctx + '/images/icon-45.png'"mode="widthFix" class="iconBg"></image>{{  cjCompany.addressStr == 'null' ? "" : cjCompany.addressStr}}</view>
					</view>
					<view class="bottomLeft">
						<view class="name">{{ intvCjUser.realName }}</view>
						<view class="job">{{ cjCompanyUser.job }}</view>
					</view>
				</view>
				<view class="iconfont selectBg" v-if="isshow == 9">&#xe605;</view>
			</view>
			<!--名片10-->
			<view class="businessCardTen" @click="cardSelect(10)">
				<view class="cardCard">
					<image :src="cjCompany.logoPath ? ctx + cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
				</view>
				<view class="nineBottom">
					<view class="bottomRight">
						<view class="labelCon"><image lazy-load :src="ctx + '/images/icon-26.png'"mode="widthFix" class="iconBg"></image>{{  intvCjUser.mobile }}</view>
						<view class="labelCon"><image lazy-load :src="ctx + '/images/icon-27.png'"mode="widthFix" class="iconBg"></image>{{  intvCjUser.email }}</view>
						<view class="labelCon"><image lazy-load :src="ctx + '/images/icon-28.png'"mode="widthFix" class="iconBg"></image>{{intvCjUser.phone}}</view>
						<view class="labelCon"><image lazy-load :src="ctx + '/images/icon-29.png'"mode="widthFix" class="iconBg"></image>{{  cjCompany.addressStr == 'null' ? "" : cjCompany.addressStr}}</view>
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
				<view class="iconfont selectBg" v-if="isshow == 10">&#xe605;</view>
			</view>
			<!--名片11-->
			<view class="businessCardEleven" @click="cardSelect(11)">
				<image lazy-load :src="ctx + '/images/bg-10.jpg'" mode="aspectFill" class="businessCardElevenBg"></image>	
				<view class="comName">{{ cjCompany.name }}</view>	
				<view class="cardCard">
					<image :src="cjCompany.logoPath ? ctx + cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
				</view>
				<view class="nineBottom">
					<view class="bottomRight">
						<view class="labelCon"><image lazy-load :src="ctx + '/images/icon-46.png'"mode="widthFix" class="iconBg"></image>{{  intvCjUser.mobile }}</view>
						<view class="labelCon"><image lazy-load :src="ctx + '/images/icon-47.png'"mode="widthFix" class="iconBg"></image>{{  intvCjUser.email }}</view>
						<view class="labelCon"><image lazy-load :src="ctx + '/images/icon-48.png'"mode="widthFix" class="iconBg"></image>{{intvCjUser.phone}}</view>
						<view class="labelCon"><image lazy-load :src="ctx + '/images/icon-49.png'"mode="widthFix" class="iconBg"></image>{{  cjCompany.addressStr == 'null' ? "" : cjCompany.addressStr}}</view>
					</view>
					<view class="bottomLeft">
						<view class="name">{{ intvCjUser.realName }}</view>
						<view class="job">{{ cjCompanyUser.job }}</view>
					</view>
				</view>
				<view class="iconfont selectBg" v-if="isshow == 11">&#xe605;</view>
			</view>
			<!--名片12-->
			<view class="businessCardTwelve" @click="cardSelect(12)">
				<image lazy-load :src="ctx + '/images/bg-11.jpg'" mode="aspectFill" class="businessCardElevenBg"></image>	
				<view class="comName">{{ cjCompany.name }}</view>	
				<view class="cardCard">
					<image :src="cjCompany.logoPath ? ctx + cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
				</view>
				<view class="bottomRight">
					<view class="labelCon"><image lazy-load :src="ctx + '/images/icon-50.png'"mode="widthFix" class="iconBg"></image>{{  intvCjUser.mobile }}</view>
					<view class="labelCon"><image lazy-load :src="ctx + '/images/icon-52.png'"mode="widthFix" class="iconBg"></image>{{  intvCjUser.email }}</view>
					<view class="labelCon"><image lazy-load :src="ctx + '/images/icon-51.png'"mode="widthFix" class="iconBg"></image>{{intvCjUser.phone}}</view>
					<view class="labelCon"><image lazy-load :src="ctx + '/images/icon-53.png'"mode="widthFix" class="iconBg"></image>
					
						<view class="labelAddress">{{  cjCompany.addressStr == 'null' ? "" : cjCompany.addressStr}}</view>
					</view>
				</view>
				<view class="bottomLeft">
					<view class="name">{{ intvCjUser.realName }}</view>
					<view class="job">{{ cjCompanyUser.job }}</view>
				</view>
				<view class="iconfont selectBg" v-if="isshow == 12">&#xe605;</view>
			</view>
			<!--名片13-->
			<view class="businessCardThirteen" @click="cardSelect(13)">
				<view class="comName">{{ cjCompany.name }}</view>	
				<view class="cardCard">
					<image :src="cjCompany.logoPath ? ctx + cjCompany.logoPath : ctx + '/images/company.jpg'"mode="widthFix"></image>
				</view>
				<view class="bottomRight">
					<view class="labelCon"><image lazy-load :src="ctx + '/images/icon-54.png'"mode="widthFix" class="iconBg"></image>{{  intvCjUser.mobile }}</view>
					<view class="labelCon"><image lazy-load :src="ctx + '/images/icon-56.png'"mode="widthFix" class="iconBg"></image>{{  intvCjUser.email }}</view>
					<view class="labelCon"><image lazy-load :src="ctx + '/images/icon-55.png'"mode="widthFix" class="iconBg"></image>{{intvCjUser.phone}}</view>
					<view class="labelCon">
						<image lazy-load :src="ctx + '/images/icon-57.png'"mode="widthFix" class="iconBg"></image>
						<view class="labelAddress">{{  cjCompany.addressStr == 'null' ? "" : cjCompany.addressStr}}</view>
					</view>
				</view>
				<view class="bottomLeft">
					<view class="bottomLeftCon">
						<view class="name">{{ intvCjUser.realName }}</view>
						<view class="job">{{ cjCompanyUser.job }}</view>
					</view>
				</view>
				<view class="iconfont selectBg" v-if="isshow == 13">&#xe605;</view>
			</view>
			<!--名片14-->
			<view class="businessCardFourteen" @click="cardSelect(14)">
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
					<view class="labelCon"><image lazy-load :src="ctx + '/images/icon-58.png'"mode="widthFix" class="iconBg"></image>{{  intvCjUser.mobile }}</view>
					<view class="labelCon"><image lazy-load :src="ctx + '/images/icon-60.png'"mode="widthFix" class="iconBg"></image>{{  intvCjUser.email }}</view>
					<view class="labelCon"><image lazy-load :src="ctx + '/images/icon-59.png'"mode="widthFix" class="iconBg"></image>{{intvCjUser.phone}}</view>
					<view class="labelCon"><image lazy-load :src="ctx + '/images/icon-61.png'"mode="widthFix" class="iconBg"></image>{{  cjCompany.addressStr == 'null' ? "" : cjCompany.addressStr}}</view>
				</view>
				<view class="iconfont selectBg" v-if="isshow == 14">&#xe605;</view>
			</view>
			<!--名片15-->
			<view class="businessCardFifteen" @click="cardSelect(15)">
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
					<view class="labelCon"><image lazy-load :src="ctx + '/images/icon-62.png'"mode="widthFix" class="iconBg"></image>{{  intvCjUser.mobile }}</view>
					<view class="labelCon"><image lazy-load :src="ctx + '/images/icon-63.png'"mode="widthFix" class="iconBg"></image>{{  intvCjUser.email }}</view>
					<view class="labelCon"><image lazy-load :src="ctx + '/images/icon-64.png'"mode="widthFix" class="iconBg"></image>{{intvCjUser.phone}}</view>
					<view class="labelCon"><image lazy-load :src="ctx + '/images/icon-65.png'"mode="widthFix" class="iconBg"></image>{{  cjCompany.addressStr == 'null' ? "" : cjCompany.addressStr}}</view>
				</view>
				<image lazy-load :src="ctx + '/images/bg-11.png'"mode="widthFix" class="businessCardFifteenBg"></image>
				<view class="iconfont selectBg" v-if="isshow == 15">&#xe605;</view>
			</view>
			<!--名片16-->
			<view class="businessCardSixteen" @click="cardSelect(16)"> 
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
				<view class="lineBg"><image src="../../static/bg2.png"mode="widthFix"></image></view>
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
						{{intvCjUser.phone}}
					</view>
					<view class="labelCon">
						<image src="../../static/sixteen-04.png"mode="widthFix" class="iconBg"></image>
						{{ cjCompany.addressStr == 'null' ? "" : cjCompany.addressStr}}
					</view>
				</view>
				<view class="iconfont selectBg" v-if="isshow == 16">&#xe605;</view>
			</view>
			<!--名片1-->
			<view class="businessCardOne" @click="cardSelect(1)">
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
				<!-- <view class="bottomLeft">
					<view class="name">{{ intvCjUser.realName }}</view>
					<view class="job">{{ cjCompanyUser.job }}</view>
				</view> -->
				<view class="bottomRight">
					<view class="labelCon">
						<text>M</text>
						<text class="colon">：</text>{{ intvCjUser.mobile }}
					</view>
					<view class="labelCon">
						<text>T</text>
						<text class="colon">：</text>{{intvCjUser.phone}}
					</view>
					<view class="labelCon">
						<text>E</text>
						<text class="colon">：</text>{{ intvCjUser.email }}
					</view>
					<view class="labelCon">
						<text>A</text>
						<text class="colon">：</text>{{ cjCompany.addressStr == 'null' ? "" : cjCompany.addressStr}}
					</view>
				</view>
				<view class="iconfont selectBg" v-if="isshow == 1">&#xe605;</view>
			</view>
			<!--名片2-->
			<view class="businessCardTwo" @click="cardSelect(2)">
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
							<text class="colon">：</text>
							{{ intvCjUser.mobile }}
						</view>
						<view class="labelCon">
							<text>T</text>
							<text class="colon">：</text>
							{{intvCjUser.phone}}
						</view>
						<view class="labelCon">
							<text>E</text>
							<text class="colon">：</text>
							{{ intvCjUser.email }}
						</view>
						<view class="labelCon">
							<text>A</text>
							<text class="colon">：</text>
							{{ cjCompany.addressStr == 'null' ? "" : cjCompany.addressStr}}
						</view>
					</view>
				</view>
				<view class="iconfont selectBg" v-if="isshow == 2">&#xe605;</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ctx: this.$ctx,
				isshow: 1,
				cjUser: {},
				entrance: '',
				cjCompany: {},
				intvCjUser: {},
				cjCompanyUser: {},
			};
		},
		onLoad(options) {
			this.entrance = options.entrance;
			this.companyId = options.companyId;
			this.userId = options.userId;
			this.getData();
		},
		methods: {
			getData() {
				this.$getJson(
					'/api/v2/vue/sqPlus/card/cardInfo.jsp', {
						data: JSON.stringify({
							entrance: this.entrance,
							companyId: this.companyId,
							userId: this.userId,
							mobile:uni.getStorageSync("mobile")
						})
					},
					'POST',
					res => {
						console.log('----------------', res);

						this.isshow = res.data.intvCjUser.cardId;
						this.cjUser = res.data.cjUser;
						this.entrance = res.data.entrance;
						this.cjCompany = res.data.cjCompany;
						this.intvCjUser = res.data.intvCjUser;
						this.cjCompanyUser = res.data.cjCompanyUser;
					}
				);
			},
			cardSelect(num) {
				this.$getJson(
					'/api/v2/vue/sqPlus/card/setCardId.jsp', {
						data: JSON.stringify({
							userId: this.userId,
							cardId: num
						})
					},
					'POST',
					res => {
						this.isshow = num;
					}
				);
			}
		}
	};
</script>

<style>
	page {
		background: #fff;
	}

	.businessCardRecord .businessCardTwo,.businessCardRecord .businessCardThree,.businessCardRecord .businessCardFore,.businessCardRecord .businessCardFive,.businessCardRecord .businessCardSix,.businessCardRecord .businessCardSeven,.businessCardRecord .businessCardEight,.businessCardRecord .businessCardNine,.businessCardRecord .businessCardTen,.businessCardRecord .businessCardEleven,.businessCardRecord .businessCardTwelve,.businessCardRecord .businessCardThirteen,.businessCardRecord .businessCardFourteen,.businessCardFifteen{display: block; margin: 4%;}
	

	.businessCardHandle .handleBtn{
		background-color: #549ef3;
	}
</style>
