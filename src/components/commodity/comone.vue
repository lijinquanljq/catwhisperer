<template>
	<div>
		<mt-header title="SANPO珍宝猫粮10kg喜多...">
  			<router-link to="/" slot="left">
  			  <mt-button icon="back" @click="back()">返回</mt-button>
  			  {{add()}}
  			</router-link>
  			<router-link to="/login" slot="right">
  				<img src="src/assets/images/fx.svg" alt="">
  			</router-link>
  			<router-view></router-view>
		</mt-header>
		<div class="comone-a">
			<img src="src/assets/images/tj01.jpg" alt="">
			<h4>SANPO珍宝猫粮10kg喜多鱼猫粮20斤</h4>
			<div class="comon-a-a"></div>
			<span>￥200.00</span>
			<div class="comon-a-a"></div>
			<p>剩余库存：<span class="comsp">无货</span>  累计出售：10</p>
		</div>
		<div class="comone-a-b"></div>
		<div class="comone-b">
			<span>商品评价</span>
			<span class="com-b-b">0条评价&nbsp;&nbsp;></span>
		</div>
		<div class="comone-a-b"></div>
		<div class="comone-c">
			<h5>商品详情</h5>
			<img src="src/assets/images/comone01.jpg" alt="">
			<img src="src/assets/images/comone02.jpg" alt="">
			<img src="src/assets/images/comone03.jpg" alt="">
			<img src="src/assets/images/comone04.jpg" alt="">
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				title:''
			}
		},
		mounted(){
		
		
		},
		
		methods:{
			back(){
				this.$router.go(-1)
			},
			add(){
				this.title=this.$route.params.id
				
			}
		}
	}
</script>
<style scoped>
.mint-header{
	background:#fd6a67;
}
.comone-a{
	padding:10px;
}
.comone-a img{
	width:100%;
}
.comone-a h4{
	padding:10px 0px;
	border-bottom:1px solid #ccc;
}
.comon-a-a{
	height:10px;
}
.comone-a span{
	color:red;
	font-weight:600;
}
.comone-a p{
	color:#666;
	font-size:14px;
}
.comone-a p span{
	color:#fff;
}
.comsp{
	padding:0px 5px;
	background:red;
	margin-right:20px;
}
.comone-a-b{
	height:15px;
	background:#e8e9e4;
}
.comone-b{
	padding:8px;
	color:#666;
	font-size:15px;
}
.com-b-b{
	float:right;
}
.comone-c{
	padding:10px;
	color:#333;
	margin-bottom:70px;
}
.comone-c h5{
	border-bottom:1px solid #ccc;
	padding-bottom:10px;
	margin-bottom:10px;
}
.comone-c img{
	width:100%;
}
</style>