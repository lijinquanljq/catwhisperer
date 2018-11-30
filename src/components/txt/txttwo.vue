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
		</mt-header>

		<div class="txt-big">
			<h3>训练猫不上床的方法</h3>
			<span>发表于1年之前  阅读: 2920</span>
			<div class="txtbg">
				实猫咪不仅喜欢呆在主人的床上，电脑、阳台、桌子、冰箱上……都是猫咪喜欢的地方，我们没有办法控制猫咪的自由行动，但是很多主人都想控制猫咪，不让猫咪上主人的床。
			</div>
			<h4>训练猫不上床的方法</h4>
			<p>其实猫咪不仅喜欢呆在主人的床上，电脑、阳台、桌子、冰箱上……都是猫咪喜欢的地方，我们没有办法控制猫咪的自由行动，但是很多主人都想控制猫咪，不让猫咪上主人的床。</p>
			<h4>一、猫咪为什么喜欢主人的床</h4>
			<p>
				在猫咪看来，最合适睡觉的就是温暖的地方，也许猫咪并没有意识到那是你的床，但是他知道那里是最暖的，并且有熟悉的主人的味道，如果主人不训练猫咪，猫咪会每天呆在主人的床上睡觉。
			</p>
			<h4>二、要为猫咪准备舒服的床</h4>
			<p>要让猫咪不再跳上主人的床，主人就应该为猫咪准备一个温暖舒适的猫窝，猫咪能在自己的窝内舒舒服服的休息，也会减少它跳上主人床的欲望。冬天猫咪喜欢温暖不愿意回到自己的窝，可以在窝里放一个暖水袋，让猫咪舒舒服服温暖过冬。</p>
			<h4>三、当猫咪跳上床的时候要呵斥</h4>
			<p>当猫咪跳上床的时候，主人应该适当地呵斥猫咪，要让给猫咪知道，跳上床的行为是错误的。或者拍打猫咪的臀部，将其赶下床。反复多次之后，猫咪就不会在跳上床了。</p>
			<h4>四、一些常规方法。</h4>
			<p>网络上对于训练猫咪的方法还是很多的，比如放柚子皮，但是并不是所有的猫都讨厌这个味道，所以成功率很低;还有一些主人直接会打猫，当然只是轻轻的拍打，其实这无疑是最好用的方法，同时主人表现出很生气的样子，猫咪对情绪的理解能力很强，慢慢就会知道这样做不对了;还有很多人建议使用水枪，这是小编不建议的方法，因为水会弄湿家里和猫，影响健康，而且这对猫来说，也是很暴力的方式。</p>
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