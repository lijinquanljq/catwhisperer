<template>
	<div class="shop-wrap">
		<mt-header title="美容医疗">
  			<mt-button slot="left">
  			  <mt-button icon="back" @click="back()">返回</mt-button>
  			  {{add()}}
  			</mt-button>
		</mt-header>
		<footer>
		<div class="shopa">
			<router-link to="/zh">综合</router-link>
		</div>
		<div class="shopa">
			<router-link to="/rq">人气</router-link>
		</div>
		<div class="shopa">
			<router-link to="/jl">距离</router-link>
		</div>
		<router-view></router-view>
		</footer>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				title:'',
				msa:[]
			}
		},
		mounted(){
			this.$http.get('./src/assets/json/index.json',{
				params:{

				}
			})
			.then((res)=>{
				this.msa=res.data.five;
				console.log(res)
			},
			function(){

			})
		
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
.shopa{
	margin-top:10px;
	display:inline-block;
	margin-left:65px;
}
.router-link-active{
	color:red;
}
footer a{
	color:#333;
}
</style>