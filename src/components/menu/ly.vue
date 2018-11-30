<template>
	<div>
		<mt-header title="领养">
  			<router-link to="/" slot="left">
  			  <mt-button icon="back" @click="back()">返回</mt-button>
  			  {{add()}}
  			</router-link>
  			<span slot="right"><img src="src/assets/images/hx.svg" alt=""></span>
		</mt-header>
		<div class="fximg">
			<router-link to="/login" slot="right">
  			  <img src="src/assets/images/pl.svg" alt="">
  			</router-link>
		</div>		
		<div class="fx-one">
			<img src="src/assets/images/ly.png" alt="">
		</div>
		<div class="fx-two">
			<span class="spo">帖子</span>
			<span class="spt">0</span>
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
.fximg{
	position: absolute;
	top:10px;
	right:60px;
}
.fx-one img{
	width:100%;
}
.fx-two{
	padding:0px 20px;
	float:right;
	position:relative;
	top:-34px;
}
.spo{
	padding-right:5px;
	color:#999;
}
.spt{
	color:red;
}
</style>