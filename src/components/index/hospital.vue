<template>
	<div>
		<mt-header title="我家宝贝医院">
  			<mt-button slot="left">
  			  <mt-button icon="back" @click="back()">返回</mt-button>
  			  {{add()}}
  			</mt-button>
  			<span slot="right"><img src="src/assets/images/sdian.svg" alt=""></span>
		</mt-header>
		<div class="fximg">
			<router-link to="/login" slot="right">
  			  <img src="src/assets/images/pl.svg" alt="">
  			</router-link>
		</div>		
		<footer>
		<div class="shopa">
			<router-link to="/hqb">全部</router-link>
		</div>
		<div class="shopa">
			<router-link to="/tc">套餐</router-link>
		</div>
		<div class="shopa">
			<router-link to="/jy">绝育</router-link>
		</div>
		<div class="shopa">
			<router-link to="/kb">看病</router-link>
		</div>
		<router-view></router-view>
		</footer>
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
.fximg{
	position: absolute;
	top:10px;
	right:60px;
}
.shopa{
	margin-top:20px;
	display:inline-block;
	margin-left:45px;
}
footer a{
	color:#545454;
}
.router-link-active{
	color:red;
	padding-bottom:3px;
	border-bottom:2px solid skyblue;
}


</style>