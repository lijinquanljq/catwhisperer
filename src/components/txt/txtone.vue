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
			<h3>去私人家庭购买猫咪注意事项</h3>
			<span>发表于1年之前 阅读：1902</span>
			<div class="txtbg">
				现在很多人购买猫咪，不会去宠物店或者猫舍买猫，很多爱猫者都会去朋友介绍的私人家庭购买，这样不仅是价格实惠，还有一点就是家养的猫咪，可以看到母猫。
			</div>
			<h4>去私人家庭购买猫咪注意事项</h4>
			<p>现在很多人购买猫咪，不会去宠物店或者猫舍买猫，很多爱猫者都会去朋友介绍的私人家庭购买，这样不仅是价格实惠，还有一点就是家养的猫咪，可以看到母猫。虽然是这样，我们去私人家庭购买猫咪，有些问题还是需要注意的。</p>
			<h4>一、去对方家里观察猫咪得生长环境。</h4>
			<p>
				如果猫咪是被关在笼子里面，而且不常让猫咪们出来透气，那生出来的小猫个性可能会像母猫一样封闭，不太容易亲近人。
			</p>
			<h4>二、观察猫咪的环境卫生还有饮食。</h4>
			<p>他们的猫沙盆干净吗?有没有常常清?他们吃什么牌子的饲料?营养充足吗?</p>
			<h4>三、看他们一共养了多少只猫?是不是很多品种的猫?</h4>
			<p>如果对方养猫超过十几只，而且猫咪各种血统、品种都有，那你可能需要考虑要不要跟他买猫。因为养猫就跟养小孩一样，这位猫主人可能无法好好照顾好每一只小猫，也无法很正确的了解每一只小猫的问题。而且不同品种的猫咪养在一起，会不会生出来的小猫是混种猫呢?</p>
			<h4>四、看小猫的父母以及兄弟姊妹。</h4>
			<p>例如你想要养金吉拉，你就得确认小猫的父母都是金吉拉，也要看看同一胎小猫的兄弟姊妹的样子，是不是都是金吉拉的样子。如果其中有一只不是金吉拉的样子，反而像是波斯猫(详情介绍)或是什么的，心里可能要怀疑一下血统纯不纯了!</p>
			<h4>五、检查小猫的健康状况。</h4>
			<p>1.眼睛要清澈有神，不要有眼屎。</p>
			<p>2.鼻子要微微湿润，不要流鼻涕或是鼻水。</p>
			<p>3.屁屁要干净，不要有拉肚子便便粘到毛上。</p>
			<p>4.皮肤没有霉菌，也没有伤口。</p>
			<p>5.跟他玩耍，牠要愿意亲近人。</p>
			<p>6.最好的方法是约在动物医院请兽医做检查。如果兽医检查出小猫有毛病，原主人有义务负担医药费，或是你可以不要买这只小猫。以上比较适用于私家猫咪的买卖。没有血统证明，但是会比较便宜。</p>
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