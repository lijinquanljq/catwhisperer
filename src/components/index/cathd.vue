<template>
	<div>
		<mt-header title="喵活动">
  			<router-link to="/" slot="left">
  			  <mt-button icon="back" @click="back()">返回</mt-button>
  			  {{add()}}
  			</router-link>
		</mt-header>
		<div>
			<ul class="hdpart">
				<li class="hdpart_one">
					<div class="hdpart_two">
						<img src="src/assets/images/cathd01.png" alt="">
					</div>
					<h4>国际猫咪文化产业博览会</h4>
					<p>
					<img src="src/assets/images/xinxi.svg" alt="" class="xx"><span>2</span>
					<img src="src/assets/images/eyes.svg" alt="" class="xxx"><span>598</span>
					<span class="time">2017-06-13</span>
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
				title:''
			}
		},
		mounted(){
		
		
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
.hdpart_two img{
	width:100%;
}	
.hdpart{
	font-size:15px;
	color:#545454;
}
.hdpart_one h4{
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
.xx{
	width:14px;
	position:relative;
	top:3px;
}
.xxx{
	width:14px;
}
.hdpart_one p .time{
	float:right;
	color:#999;
}
</style>