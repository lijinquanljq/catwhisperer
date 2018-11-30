<template>
	<div class="wrap">
	<div class="header">
		<mt-header title="">
		  <router-link to="/" slot="left">
		    <mt-button>猫语者</mt-button>
		  </router-link>
		  <mt-button slot="right"><router-link to="/login"><img src="src/assets/images/xxk.svg" alt=""></router-link></mt-button>
		</mt-header>

		<mt-search v-model="value">
		  <mt-cell
		    v-for="item in result"
		    :title="item.title"
		    :value="item.value">
		  </mt-cell>
		</mt-search>
		<router-view></router-view>
	</div>
		<mt-swipe :auto="4000">
		  <mt-swipe-item>
		  <router-link to="/catzx">
		  	<img src="src/assets/images/baner01.png" alt="">
		  </router-link>
		  </mt-swipe-item>	  
		  <mt-swipe-item>
		  <router-link to="/catzx">
		  	<img src="src/assets/images/baner01.png" alt="">
		  	</router-link>
		  </mt-swipe-item>
		  	<img src="src/assets/images/baner01.png" alt="">
		</mt-swipe>

		<div class="ban">
    		<ul>
    		<li><router-link to="/pzbk"><span>品种百科</span></router-link></li><h6>|</h6>
    		<li><router-link to="/jjzj"><span>紧急自救</span></router-link></li><h6>|</h6>
    		<li><router-link to="/mryl"><span>清洁美容</span></router-link></li><h6>|</h6>
    		  <li><router-link to="/zmy"><span>找喵友</span></router-link></li><h6>|</h6>
    		  <li><router-link to="/more"><span>更多&#62;</span></router-link></li>
    		</ul>
    		<router-view></router-view>
		</div>

		<div class="bar">
    		<ul>
    		  <li><router-link to="/catzx">
    		    <img src="src/assets/images/one.png" alt="">
    		    <span>喵资讯</span>
    		  </router-link></li>
    		  <li><router-link to="/cathd">
    		    <img src="src/assets/images/two.png" alt="">
    		    <span>喵活动</span></router-link></li>
    		  <li><router-link to="/catfx">
    		    <img src="src/assets/images/three.png" alt="">
    		    <span>喵发现</span>
    		  </router-link></li>
    		  <li><router-link to="/catxs">
    		    <img src="src/assets/images/four.png" alt="">
    		    <span>新手喵</span>
    		  </router-link></li>
    		</ul>
    		<router-view></router-view>			
		</div>
		<div class="box_a"></div>

		<router-link to="/bksp">
		<div class="txt">
			<h5>冲！或许这是最适合喵咪的口粮</h5>
		</div>
		<div class="cnt">
			<img src="src/assets/images/bg.png" alt="">
			<div class="flo">	
			<div class="left">
				<mt-button type="default">推广</mt-button>
			</div>
			<div class="right">
				<img src="src/assets/images/dian.svg" alt="">
			</div>
			</div>
		</div>
		</router-link>
		<div class="box_b"></div>

		<div class="title">
			<h5>喵圈精选</h5>
		</div>
		<div>
			<ul class="part">
				<li class="part_one" v-for="v in msg">
					<div class="paro">
					<router-link to="/txtone">
					<h4>{{v.title}}</h4>
					<p>{{v.cont}}</p>
					<p>
					<img :src="v.img1" alt="" class="xx"><span>{{v.span1}}</span>
					<img :src="v.img2" alt="" class="xxx"><span>{{v.span2}}</span>
					<span class="time">{{v.data}}</span>
					</p>
					<div class="part_two">
						<img :src="v.img3" alt="">
					</div>
					</router-link>
					<router-view></router-view>
					</div>
				</li>	
			</ul>
		</div>
		<div class="part_three">
			<router-link to="/catzx">
				<h4>戳我查看更多</h4>
			</router-link>
		</div>
		<div class="box_a"></div>

		<div class="title">
			<h5>医院推荐</h5>
		</div>
		<ul class="part_four">
			<li v-for="v in msh">
			<router-link to="/hospital">
				<img :src="v.pic" alt="">
				<div class="four_txt">
					<h4>{{v.cnt1}}</h4>
					<span>{{v.cnt2}}</span>
					<p>{{v.cnt3}}</p>
				</div>
				<br>
			</router-link>	
			</li>	
		</ul>
		<div class="part_three_a">
			<h4>戳我查看更多</h4>
		</div>
		<div class="box_a"></div>

		<div class="title">
			<h5>每日推荐</h5>
		</div>
			<ul class="tj">
				<li class="tj_left" v-for="v in msj">
				<router-link to="/comone">
					<img :src="v.pic1" alt="">
					<h5>{{v.cnt4}}</h5>
					<p class="tj_p">{{v.cnt5}}</p>
					<span>{{v.cnt6}}</span>
				</router-link>					
				</li>
				<router-view></router-view>
			</ul>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){

			return{
				msg:[],
				msh:[],
				msj:[]
			}
		},
		mounted(){
			this.$http.get('./src/assets/json/index.json',{
				params:{

				}
			})
			.then((res)=>{
				this.msg=res.data.list,
				this.msh=res.data.one,
				this.msj=res.data.two
				console.log(res)
			},
			function(){

			})
		}

	}
</script>

	<style>
		.wrap .mint-header{
			background:#fd6a67;
		}
		.wrap .mint-search{
			width:70%;
			height:100%;
			position:relative;
			top:-38px;
			left:18%;
		}
		.wrap .mint-searchbar{
			background:#fd6a67;
			padding:0px;
		}
		.wrap .mint-searchbar-inner{
			border-radius:20px;
		}
		.wrap .mint-swipe{
			margin-top:-36px;
		}
		.wrap .mint-swipe img{
			width:100%;
		}
		.wrap .ban{
			font-size:13px;
			margin-top:10px;
		}
		.ban ul{
		  display: flex;
		  width: 100%;
		}
		.ban ul li{
			flex:1;
			text-align: center;
		}
		.ban h6{
			color:#b2b2b2;
		}
		.ban span{
			color:#676767;
		}
		.bar{
			margin-top:20px;
			margin-bottom:10px;
		}
		.bar ul{
		  display: flex;
		  width: 100%;
		}
		.bar ul li{
			flex:1;
			text-align: center;
		}
		.bar ul li img{
		  display:block;
		  margin:0 auto;
		  margin-bottom:15px;
		}
		.bar span{
			color:#545454;
		}
		.box_a{
			width:100%;
			height:8px;
			background-color: rgba(204, 204, 204, 0.5)
		}
		.txt{
			padding:10px;
			color:#545454;
		}
		.cnt img{
			width:100%;
		}
		.flo{
			margin-top:-5px;
		}
		.left{
			float:left;
			padding:8px;
		}
		.left .mint-button{
			height:20px;
			border-radius: 10px;
		}
		.left .mint-button-text{
			font-size:14px;
			color:#ccc;
		}
		.right{
			width:16px;
			float:right;
			padding:8px;
		}
		.box_b{
			width:100%;
			height:8px;
			background-color: rgba(204, 204, 204, 0.5);
			margin-top:40px;

		}
		.title{
			padding:10px;
			color:#fc3c3a;
			border-bottom:1px solid #c7c7cc;
		}
		.part{
			font-size:15px;
			padding:0px 15px;
			color:#545454;
		}
		.paro{
			padding:15px 15px;
			border-bottom:1px solid #c7c7cc;
		}
		.part_one p{
			font-size:12px;
			color:#999;
		}
		.part_one h4{
			color:#545454;
		}
		.part_one span{
			color:#545454;
			font-size:13px;			
			padding-right:10px;
		}
		.xx{
			width:14px;
			position:relative;
			top:3px;
		}
		.xxx{
			width:14px;
		}
		.part_one p .time{
			padding-left:85px;
			color:#999;
		}
		.part_two{
			float:right;
			position:relative;
			top:-50px;
		}
		.part_two img{
			height:50px;
		}
		.part_three{
			text-align:center;
			padding:10px 100px;
		}
		.part_three h4{
			color:#999;
		}
		.part_four{
			padding:20px;
			margin-bottom:20px;
			border-bottom:1px solid #c7c7cc;
		}
		.part_four img{
			width:100%;
		}
		.four_txt{
			margin-top:10px;
			color:#545454;
		}
		.four_txt span{
		 	float:right;
		 	font-size:12px;
		 	position:relative;
			top:-20px;
		}
		.four_txt p{
			font-size:12px;
			color:#999;
		}
		.part_three_a{
			text-align:center;
			color:#999;
			padding:0px 100px;
			padding-bottom:10px;
			margin-top:-10px;
		}
		.tj{
			color:#545454;
			display:block;
			overflow: hidden;
			margin-bottom:70px;
		}
		.tj li{
			float:left;
			margin-left:20px;
		}
		.tj h5{
			color:#545454;
		}
		.tj img{
			width:157px;
			height:150px;
		}
		.tj_p{
			color:#fd3c3b;
			font-size:18px;
		}
		.tj span{
			font-size:12px;
			color:#666;
		}
		.tj_left{
			width:42%;
			margin-bottom:20px;
		}
	</style>