<template>
	<div class="shop-wrap">
		<mt-header fixed title="商城">
		<mt-button slot="right">
			<img src="src/assets/images/gw.svg" alt="">
		</mt-button>
		</mt-header>
		<footer>
		<div class="shopa">
			<router-link to="/ml">猫粮</router-link>
		</div>
		<div class="shopa">
			<router-link to="/toy">玩具</router-link>
		</div>
		<div class="shopa">
			<router-link to="/wash">洗护</router-link>
		</div>
		<div class="shopa">
			<router-link to="/nest">猫窝</router-link>
		</div>
		<router-view></router-view>
		</footer>
	</div>
</template>

<script type="text/javascript">

</script>
<style scoped>
.mint-header{
	background:#fd6a67;
}
.shopa{
	margin-top:50px;
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