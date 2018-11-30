<template>
	<div>
		<div>
			<ul class="hdpart">
				<li class="hdpart_one" v-for="v in ljw">
					<div class="hdpart_two">
						<img :src="v.cccimg" alt="">
					</div>
					<h4>{{v.ccccnt1}}</h4>
					<p>
					<span>{{v.ccccnt2}}</span>
					<span>{{v.ccccnt3}}</span>
					<span>{{v.ccccnt4}}</span>
					<p class="time">{{v.ccccnt5}}</p>
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
				ljw:[]
			}
		},
		mounted(){
			this.$http.get('./src/assets/json/index.json',{
				params:{

				}
			})
			.then((res)=>{
				this.ljw=res.data.ccc
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