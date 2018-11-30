<template>
	<div class="shop-wrap">
		<mt-header title="爆款商品">
  			<mt-button slot="left">
  			  <mt-button icon="back" @click="back()">返回</mt-button>
  			  {{add()}}
  			</mt-button>
		</mt-header>
		<footer>
		<div class="shopa">
			<router-link to="/qb">全部</router-link>
		</div>
		<div class="shopa">
			<router-link to="/bkrq">人气</router-link>
		</div>
		<div class="shopa">
			<router-link to="/xl">销量</router-link>
		</div>
		<div class="shopa">
			<router-link to="/jg">价格</router-link>
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
	margin-top:20px;
	display:inline-block;
	margin-left:45px;
}
.router-link-active{
	color:red;
	padding-bottom:3px;
	border-bottom:2px solid skyblue;
}
footer a{
	color:#545454;
}
</style>