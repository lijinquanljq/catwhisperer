<template>
<div>
	<mt-header fixed title="喵圈">
		<mt-button slot="left">
  			  <mt-button icon="back" @click="back()">返回</mt-button>
  		</mt-button>
	</mt-header>

	<div class="cat-one">
		<ul>
			<router-link to="">
				<li>
					<img src="src/assets/images/mq01.png" alt="">
					<span>品种百科</span>
					<i><img src="src/assets/images/jt.svg" alt=""></i>	
				</li>
			</router-link>
			<router-link to="">
				<li>
					<img src="src/assets/images/mq02.png" alt="">
					<span>美容医疗</span>
					<i><img src="src/assets/images/jt.svg" alt=""></i>	
			</li>
			</router-link>
			<router-link to="">
				<li>				
					<img src="src/assets/images/mq03.png" alt="">
					<span>领养</span>
					<i><img src="src/assets/images/jt.svg" alt=""></i>				
				</li>
			</router-link>
			<router-link to="">
				<li>
					<img src="src/assets/images/mq04.png" alt="">
					<span>配对</span>
					<i><img src="src/assets/images/jt.svg" alt=""></i>	
				</li>
			</router-link>
			<router-link to="/catsone">
				<li>
					<img src="src/assets/images/mq05.png" alt="">
					<span>寻宠</span>
					<i><img src="src/assets/images/jt.svg" alt=""></i>
				</li>
			</router-link>
			<router-link to="">
				<li>				
					<img src="src/assets/images/mq06.png" alt="">
					<span>找喵友</span>
					<i><img src="src/assets/images/jt.svg" alt=""></i>			
				</li>
			</router-link>
			<router-link to="/catstwo">
				<li>
					<img src="src/assets/images/mq07.png" alt="">
					<span>养喵小贴士</span>
					<i><img src="src/assets/images/jt.svg" alt=""></i>				
			</li>
			</router-link>
			<router-link to="/catsthree">
				<li>				
					<img src="src/assets/images/mq08.png" alt="">
					<span>紧急自救</span>
					<i><img src="src/assets/images/jt.svg" alt=""></i>				
			</li>
			</router-link>	
		</ul>					
	</div>
</div>	
</template>

<script type="text/javascript">
		export default{
		data(){
			return{

			}
		},
		mounted(){
		
		},
		
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style>
.mint-header-title{
	font-size:17px;
}
.mint-header{
	background:#fd6a67;
}
.cat-one{
	margin-top:39px;
	padding:10px;
}
.cat-one span{
	color:#545454;
	font-size:16px;
	font-weight:600;
	position:relative;
	top:-13px;
	left:20px;
}
.cat-one i{
	float:right;
	position:relative;
	top:11px;
}
.cat-one li{
	padding-bottom:15px;
}
</style>