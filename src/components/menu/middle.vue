<template>
	<div class="all">
		<ul>
			<li v-for="v in lja">
				<div class="all-a">
					<img :src="v.aimg1" alt="">
				</div>
				<div class="all-b">
				<h5>{{v.acnt1}}</h5>
				<p>
					<img :src="v.aimg2" alt="" class="xx"><span>{{v.acnt2}}</span>
					<img :src="v.aimg3" alt="" class="xxx"><span>{{v.acnt3}}</span>
					<span class="time">{{v.acnt4}}</span>
				</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
export default{
		data(){

			return{
				lja:[]
			}
		},
		mounted(){
			this.$http.get('./src/assets/json/index.json',{
				params:{

				}
			})
			.then((res)=>{
				this.lja=res.data.ten
				console.log(res)
			},
			function(){

			})
		}

	}
</script>
<style scoped>
.all{
	padding:10px;
	margin-bottom:50px;
}
.all li{
	border:1px solid #ccc;
	margin-bottom:10px;
	padding-top:10px;
	background:#ffc286;
}
.all-a{
	text-align:center;
}
.all-a img{
	width:70%;
}
.all-b{
	margin:0px 20px 10px 20px;
}
.all h5{
	padding-top:8px;
	color:#545454;
}
.all p{
	font-size:12px;
	color:#999;
}
.xx{
	width:14px;
	position:relative;
	top:3px;
}
.xxx{
	width:14px;
}
.all .time{
	color:#999;
	float:right;
}
</style>