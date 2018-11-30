<template>
	<div class="my-wrap">
		<div class="my-one">
			<img src="src/assets/images/mycat.jpg" alt="">
		</div>
		<div>
			<router-link to="/login">
				<span class="myo"><img src="src/assets/images/myxx.svg" alt=""></span>
			</router-link>
			<router-link to="/login">
				<i class="myt"><img src="src/assets/images/sz.svg" alt=""></i>
			</router-link>
		</div>
		<div class="my-two">
			<router-link to="/login">
				<img src="src/assets/images/tx.svg" alt="">
				<span>登录/注册</span>
				<i><img src="src/assets/images/jt.svg" alt=""></i>
			</router-link>		
		</div>
		<div class="my-three">
			<router-link to="/login">
				<span>我的购物</span>
				<span class="mysp">查看全部订单<img src="src/assets/images/jt.svg" alt=""></span>
			</router-link>
		</div>
		<div class="my-four">
    		<ul>
    		  <li><router-link to="/login">
    		    <img src="src/assets/images/my01.png" alt="">
    		    <span>待付款</span>
    		  </router-link></li>
    		  <li><router-link to="/login">
    		    <img src="src/assets/images/my02.png" alt="">
    		    <span>待发货</span></router-link></li>
    		  <li><router-link to="/login">
    		    <img src="src/assets/images/my03.png" alt="">
    		    <span>待收获</span>
    		  </router-link></li>
    		  <li><router-link to="/login">
    		    <img src="src/assets/images/my04.png" alt="">
    		    <span>待评价</span>
    		  </router-link></li>
    		  <li><router-link to="/login">
    		    <img src="src/assets/images/my05.png" alt="">
    		    <span>退款</span>
    		  </router-link></li>
    		</ul>			
		</div>
		<div class="my-five">
			<ul>
    		  <li><router-link to="/login">
    		  <i class="siximg"><img src="src/assets/images/my06.png" alt=""></i>
    		  <span>待付款</span>
    		  </router-link></li>
    		  <li><router-link to="/login">
    		    <img src="src/assets/images/my07.png" alt="">
    		    <span>待发货</span></router-link></li>
    		</ul>
		</div>
		<div class="my-six">
			<router-link to="/login">
				<span>我的贴吧</span>
			</router-link>
		</div>
		<div class="my-four">
    		<ul>
    		  <li><router-link to="/login">
    		    <img src="src/assets/images/my08.png" alt="">
    		    <span>我的帖子</span>
    		  </router-link></li>
    		  <li><router-link to="/login">
    		    <img src="src/assets/images/my09.png" alt="">
    		    <span>浏览记录</span></router-link></li>
    		  <li><router-link to="/login">
    		    <img src="src/assets/images/my10.png" alt="">
    		    <span>帖子收藏</span>
    		  </router-link></li>
    		  <li><router-link to="/login">
    		    <img src="src/assets/images/my11.png" alt="">
    		    <span>贴吧消息</span>
    		  </router-link></li>
    		</ul>			
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		
	}
</script>
	
<style>
.my-wrap{
	width:100%;
	position:relative;
}
.my-one img{
	width:100%;
	height:225px;
 }
 .myo{
 	position: absolute;
    top:32px;
    right:60px;
 }
 .myt{
 	position: absolute;
    top:30px;
    right:10px;
 }
 .my-two{
    position: absolute;
    top:95px;
    left:20px;
 }
.my-two span{
	color:#fff;
	position: relative;
	top:-35px;
    left:10px;
    font-size:18px;
}
.my-two i{
	color:#fff;
	position: relative;
	top:-30px;
    left:10px;
    font-size:18px;
}
.my-three{
	padding:15px;
}
.my-three span{
	color:#666;
}
.mysp{
	float:right;
	position: relative;
	top:-4px;
	font-size:14px;
}
.mysp img{
	position: relative;
	top:6px;
}
.my-four{
	font-size:14px;
	margin-top:20px;
	margin-bottom:10px;
}
.my-four ul{
	display: flex;
	width: 100%;
}
.my-four ul li{
	flex:1;
	text-align: center;
}
.my-four ul li img{
    display:block;
    margin:0 auto;
    margin-bottom:10px;
}
.my-five{
	font-size:14px;
	padding:10px 18px;
}
.my-four span{
	color:#545454;
}
.my-five span{
	color:#545454;
}
.my-five ul li{
	float:left;
	padding-right:31px;
}
.my-five img{
	display:block;
	margin-bottom:10px;
	position:relative;
	left:9px;
}
.siximg{
	position:relative;
	left:-5px;
}
.my-six{
	margin-top:70px;
	padding:15px;
}
.my-six span{
	color:#666;
}
</style>