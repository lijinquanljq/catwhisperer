<template>
	<div class="zha">
		<ul>
			<li v-for="v in ljb">
				<img :src="v.eimg" alt="">
				<div class="zhz">
				<h4>{{v.ecnt1}}</h4>
				<span class="zhs">{{v.ecnt2}}</span>
				<p>{{v.ecnt3}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
export default{
	data(){

			return{
				ljb:[]
			}
		},
		mounted(){
			this.$http.get('./src/assets/json/index.json',{
				params:{

				}
			})
			.then((res)=>{
				this.ljb=res.data.eleven
				console.log(res)
			},
			function(){

			})
		}
	}
</script>
<style scoped>
.zha{
	margin:20px 15px 15px 15px;
}
.zha img{
	float:left;
}
.zha ul li{
	overflow:hidden;
	border-bottom:1px solid #ccc;
	padding-bottom:15px;
	margin-bottom:20px;
}
h4{
	display:inline-block;
	color:#333;
}
.zhz{
	margin-left:105px;
}
.zhs{
	float:right;
}
span,p{
	color:#545454;
	font-size:14px;
}
p{
	padding-top:5px;
}
</style>