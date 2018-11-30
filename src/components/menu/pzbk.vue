<template>
	<div>
		<mt-header title="品种百科">
  			<mt-button slot="left">
  			  <mt-button icon="back" @click="back()">返回</mt-button>
  			</mt-button>
  			<mt-button slot="right">
			<img src="src/assets/images/ss.svg" alt="">
			</mt-button>
		</mt-header>
		<footer>
		<div class="shopa">
			<router-link to="/all">全部</router-link>
		</div>
		<span>|</span>
		<div class="shopa">
			<router-link to="/long">长毛</router-link>
		</div>
		<span>|</span>
		<div class="shopa">
			<router-link to="/short">短毛</router-link>
		</div>
		<span>|</span>
		<div class="shopa">
			<router-link to="/small">小型</router-link>
		</div>
		<span>|</span>
		<div class="shopa">
			<router-link to="/middle">中型</router-link>
		</div>
		</footer>
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				title:'',
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

<style scoped>
.mint-header{
	background:#fd6a67;
}
.mint-button-text img{
	position:relative;
	top:2px;
}
.shopa{
	display:inline-block;
	padding:15px 0px;
}
span{
	color:#ccc;
}
.router-link-active{
	color:red;
	border-bottom:2px solid pink;
	padding:5px 10px;
}
footer a{
	color:#545454;
}
</style>