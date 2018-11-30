<template>
	<div>
		<div>
			<ul class="hdpart">
				<li class="hdpart_one" v-for="v in ljt">
					<div class="hdpart_two">
						<img :src="v.eeeimg" alt="">
					</div>
					<h4>{{v.eeecnt1}}</h4>
					<p>
					<span>{{v.eeecnt2}}</span>
					<span>{{v.eeecnt3}}</span>
					<span>{{v.eeecnt4}}</span>
					<p class="time">{{v.eeecnt5}}</p>
					</p>
				</li>	
			</ul>
		</div>

	</div>
</template>

<script type="text/javascript">
export default{
		data(){

			return{
				ljt:[]
			}
		},
		mounted(){
			this.$http.get('./src/assets/json/index.json',{
				params:{

				}
			})
			.then((res)=>{
				this.ljt=res.data.eee
				console.log(res)
			},
			function(){

			})
		}

	}
</script>
<style scoped>
.mint-header{
	background:#fd6a67;
}
.hdpart_two img{
	width:100%;
}	
.hdpart{
	font-size:15px;
	color:#545454;
	margin-top:20px;
	margin-bottom:70px;
}
.hdpart_one{
	margin-bottom:10px;
}
.hdpart_one h4{
	color:#333;
	padding: 5px 10px 5px 10px;
}
.hdpart_one p{
	font-size:12px;
	color:#999;
	padding:0px 10px 5px 10px;
}
.hdpart_one span{
	color:#545454;
	font-size:13px;			
	padding-right:10px;
}
.hdpart_one .time{
	color:red;
	font-weight:500;
	font-size:16px;
}
</style>