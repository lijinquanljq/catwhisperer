<template>
<div>
	<ul class="tj">
		<li class="tj_left" v-for="v in msc">
		<router-link to="">
			<img :src="v.tpic1" alt="">
			<h5>{{v.tcnt4}}</h5>
			<p class="tj_p">{{v.tcnt5}}</p>
			<span>{{v.tcnt6}}</span>
		</router-link>					
		</li>
		<router-view></router-view>
	</ul>
</div>
</template>
<script type="text/javascript">
	export default{
		data(){

			return{
				msc:[]
			}
		},
		mounted(){
			this.$http.get('./src/assets/json/index.json',{
				params:{

				}
			})
			.then((res)=>{
				this.msc=res.data.seven
				console.log(res)
			},
			function(){

			})
		}

	}
</script>
<style>
.tj{
	color:#545454;
	display:block;
	overflow: hidden;
	margin-bottom:70px;
}
.tj li{
	float:left;
	margin-left:20px;
	margin-top:15px;
}
.tj h5{
	color:#545454;
}
.tj img{
	width:157px;
	height:150px;
}
.tj_p{
	color:#fd3c3b;
	font-size:18px;
}
.tj span{
	font-size:12px;
	color:#666;
}
.tj_left{
	width:42%;
	margin-bottom:20px;
}
</style>