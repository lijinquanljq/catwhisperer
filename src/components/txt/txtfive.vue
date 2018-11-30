<template>
	<div>
		<mt-header title="去私人家庭购买猫咪注意事项">
  			<router-link to="/" slot="left">
  			  <mt-button icon="back" @click="back()">返回</mt-button>
  			  {{add()}}
  			</router-link>
  			<router-link to="/login" slot="right">
  				<img src="src/assets/images/fx.svg" alt="">
  			</router-link>
  			<router-view></router-view>
		</mt-header>

		<div class="txt-big">
			<h3>导致猫咪得猫癣的原因有哪些</h3>
			<span>发表于1年之前  阅读: 1028</span>
			<div class="txtbg">
				猫癣是猫咪最为常见的一种皮肤疾病，这种疾病大多会发生在体弱多病和营养不良的猫咪身上，而且感染猫癣的猫咪，皮肤会发生红肿、搔痒等症状
			</div>
			<p>猫癣是猫咪最为常见的一种皮肤疾病，这种疾病大多会发生在体弱多病和营养不良的猫咪身上，而且感染猫癣的猫咪，皮肤会发生红肿、搔痒等症状，在这样情况下，我们需要了解猫咪为什么会得猫癣，找出病因所在才能对症下药。</p>
			<p>了解后得知，猫癣猫癣的多发部位在脸部，躯干，四肢和尾部等处，出现圆形或者椭圆形的的癣斑，上面覆有灰色的鳞屑，毛色会变得粗糙，癣斑部分的被毛一撮一撮脱落折断或者脱落。感染猫癣的猫咪，身体会感到瘙痒难忍，为了缓解不适，猫咪会不停的磨蹭墙壁或者其它物体。情况严重的会在鳞屑脱落后形成秃斑。</p>
			<p>猫癣这种疾病，主要是通过孢子传播的，让猫咪感染猫癣除了接触有这种疾病的猫咪之外，环境是否干净也非常的重要。例如，毛织物的东西最容易作为癣的中间传播媒介，一旦猫咪接触有真菌的毛织物之后就可能感染猫癣。此外，不干净的睡垫、衣服等等都可能是猫咪感染猫癣的源头。</p>
			<p>导致猫咪感染猫癣，其实究其原因还是日常照顾和养护工作没做好。要防止猫咪感染猫癣，环境的卫生就要定期的打扫消毒，确保猫咪接触的东西、生活的整个环境都干净。此外，猫咪的身体也需要及时的清洁，确保猫咪身体干净，才能更好的防止猫咪感染猫癣。</p>	
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
.txt-big{
	padding:12px 10px;
	margin-bottom:80px;
}
.txt-big h3{
	padding-bottom:5px;
}
.txt-big span{
	font-size:13px;
	color:#ccccc7;
}
.txtbg{
	background:#ccc;
	padding:10px;
	color:#666;
	font-size:14px;
	line-height:2em;
	margin:10px 0px;
}
.txt-big p{
	font-size:14px;
	color:#333;
	line-height:1.7em;
	margin:10px 0px;
}
</style>