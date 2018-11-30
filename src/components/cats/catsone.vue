<template>
	<div>
		<mt-header title="寻宠">
  			<router-link to="/" slot="left">
  			  <mt-button icon="back" @click="back()">返回</mt-button>
  			  {{add()}}
  			</router-link>
  			<router-link to="/" slot="right">
  			<mt-button><span class="btn">发布</span></mt-button>
  			</router-link>
		</mt-header>
		<div>
			<ul class="copart">
				<li class="copart_one" v-for="v in msk">
					<div class="copart_two">
						<img :src="v.catsimg" alt="">
					</div>
					<h4>{{v.catscnt}}</h4>
					<p>
					<img :src="v.catsimg1" alt="" class="xx"><span>{{v.catscnt1}}</span>
					<img :src="v.catsimg2" alt="" class="xxx"><span>{{v.catscnt2}}</span>
					<span class="time">{{v.catscnt3}}</span>
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
				msk:[]
			}
		},
		mounted(){
			this.$http.get('./src/assets/json/index.json',{
				params:{

				}
			})
			.then((res)=>{
				this.msk=res.data.three;
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
.btn{
	background:yellow;
	padding:5px;
	color:#333;
	border-radius:5px;
	font-size:12px;
}
.copart_two img{
	width:100%;
	height:250px;
}	
.copart{
	font-size:15px;
	color:#545454;
	margin-bottom:70px;
}
.copart_one{
	margin-bottom:20px;
}
.copart_one h4{
	padding: 5px 10px 5px 10px;
}
.copart_one p{
	font-size:12px;
	color:#999;
	padding:0px 10px 5px 10px;
}
.copart_one span{
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
.copart_one p .time{
	float:right;
	color:#999;
}
</style>