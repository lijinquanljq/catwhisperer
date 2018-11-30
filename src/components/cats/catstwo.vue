<template>
	<div>
		<mt-header title="养喵小贴士">
  			<router-link to="/" slot="left">
  			  <mt-button icon="back" @click="back()">返回</mt-button>
  			  {{add()}}
  			</router-link>
		</mt-header>
		<div>
			<ul class="cattpart">
				<li class="cattpart_one" v-for="v in msl">
					<div class="hdpart_two">
						<img :src="v.cattimg" alt="">
					</div>
					<h4>{{v.cattcnt}}</h4>
					<p>
					<img :src="v.cattimg1" alt="" class="xx"><span>{{v.cattcnt1}}</span>
					<img :src="v.cattimg2" alt="" class="xxx"><span>{{v.cattcnt2}}</span>
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
				msl:[]
			}
		},
		mounted(){
			this.$http.get('./src/assets/json/index.json',{
				params:{

				}
			})
			.then((res)=>{
				this.msl=res.data.four;
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
.hdpart_two img{
	width:100%;
}	
.cattpart{
	font-size:15px;
	color:#545454;
	padding:10px;
	margin-bottom:31px;
}
.cattpart_one{
	border-bottom:1px solid #ccc;
	margin-bottom:15px;
	padding-bottom:20px;
}
.cattpart_one h4{
	margin-top:5px;
}
.cattpart_one p{
	font-size:12px;
	color:#999;
	margin-top:5px;
}
.cattpart_one span{
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
.cattpart_one p .time{
	float:right;
	color:#999;
}
</style>