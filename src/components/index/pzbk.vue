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
			<router-link to="/all">长毛</router-link>
		</div>
		<span>|</span>
		<div class="shopa">
			<router-link to="/all">短毛</router-link>
		</div>
		<span>|</span>
		<div class="shopa">
			<router-link to="/all">小型</router-link>
		</div>
		<span>|</span>
		<div class="shopa">
			<router-link to="/all">中型</router-link>
		</div>
		<router-view></router-view>
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
.shopa .router-link-active{
	padding:15px;
	color:red;
}
</style>