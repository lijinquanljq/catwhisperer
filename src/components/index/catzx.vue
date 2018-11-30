<template>
	<div>
		<mt-header title="喵资讯">
  			<router-link to="/" slot="left">
  			  <mt-button icon="back" @click="back()">返回</mt-button>
  			  {{add()}}
  			</router-link>
		</mt-header>
		<div>
			<ul class="part">
				<li class="part_one" v-for="v in msg">
					<div class="paro">
					<router-link to="/txtone">
					<h4>{{v.title}}</h4>
					<p>{{v.cont}}</p>
					<p>
					<img :src="v.img1" alt="" class="xx"><span>{{v.span1}}</span>
					<img :src="v.img2" alt="" class="xxx"><span>{{v.span2}}</span>
					<span class="time">{{v.data}}</span>
					</p>
					<div class="part_two">
						<img :src="v.img3" alt="">
					</div>
					</router-link>
					</div>
				</li>	
			</ul>

		</div>
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				title:'',
				msg:[]
			}
		},
		mounted(){
			this.$http.get('./src/assets/json/index.json',{
				params:{

				}
			})
			.then((res)=>{
				this.msg=res.data.list;
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
.part{
			font-size:15px;
			padding:0px 15px;
			color:#545454;
		}
		.paro{
			padding:15px 15px;
			border-bottom:1px solid #c7c7cc;
		}
		.part_one p{
			font-size:12px;
			color:#999;
		}
		.part_one h4{
			color:#545454;
		}
		.part_one span{
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
		.part_one p .time{
			padding-left:85px;
			color:#999;
		}
		.part_two{
			float:right;
			position:relative;
			top:-50px;
		}
		.part_two img{
			height:50px;
		}
</style>