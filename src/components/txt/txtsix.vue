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
			<h3>怎么让宠物猫配合剪指甲</h3>
			<span>发表于1年之前  阅读: 1156</span>
			<div class="txtbg">
				很多主人都不大愿意给宠物猫修剪指甲，认为剪指甲是一件比较痛苦的事情，也许指甲没剪成，自己手上多了几条红道道。那么如何让猫咪习惯定期剪指甲呢？除了需要从小开始让它习惯，还要主人有正确的修剪方法。
			</div>
			<p>很多主人都不大愿意给宠物猫修剪指甲，认为剪指甲是一件比较痛苦的事情，也许指甲没剪成，自己手上多了几条红道道。那么如何让猫咪习惯定期剪指甲呢?除了需要从小开始让它习惯，还要主人有正确的修剪方法。</p>
			<h4>一、让猫咪觉得舒服</h4>
			<p>
				基本上所有的猫咪都不喜欢剪指甲，所以在为猫咪剪指甲前，最好选择一个比较舒服的地方，把猫咪放在两腿或者膝盖上，先抚摸脚掌然后压推出爪子剪掉指甲。
			</p>
			<h4>二、选择合适的指甲剪 猫用指甲刀。</h4>
			<p>它们设计成从适当的角度剪掉爱猫的指甲而不会有指甲劈裂或碎裂的危险。这些指甲刀设计得像剪刀或环状铡刀。最好的指甲刀有非常锋利的刀刃和舒适的手柄。</p>
			<h4>三、具体步骤</h4>
			<p>握住爪子，手指轻轻的压住它并用拇指将指甲从它的爪子中按出来。用你的另一只手去修剪指甲。不要忘记剪 “ 拇指 ” ，在前腿的内侧。只要剪尖端的指甲，一般是白色的，避免剪到粉红色的活肉，否则会流血。</p>
			<h4>四、让猫咪对剪指甲有好感</h4>
			<p>剪指甲做的要快，如果你的猫已经开始烦躁就放它走即使只剪了一只或两只爪子。你可以以后再继续。要陪它玩耍或给予零食作为奖励它，这样它就会对剪指甲产生好的联想。修剪方法和工具都正确，猫咪还会不配合你的修剪吗?</p>
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