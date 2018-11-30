<template>
	
	<div>
		<div class="login">
			<img src="src/assets/images/login.png" alt="">
		</div>
		<div class="login-one">
			<img src="src/assets/images/login.svg" alt="">
			<input type="search" class="search" maxlength="200" autocomplete="off" placeholder="请输入手机号" spellcheck="false">
		</div>
		<div class="login-one">
			<img src="src/assets/images/st.svg" alt="">
			<input type="search" class="search" maxlength="200" autocomplete="off" placeholder="请输入密码" spellcheck="false">
		</div>
		<div class="login-two">
			<button>登录</button>	
		</div>
		<div class="login-three">
			<ul>
				<li>
					<router-link to="">
						<span>注册新用户</span>
					</router-link>
				</li>
				<span>|</span>	
				<li>
					<router-link to="">
						<span>忘记密码</span>
					</router-link>
				</li>
			</ul>	
		</div>	
	</div>
	
</template>

<script type="text/javascript">
	export default{
		
	}
</script>

<style scoped>
	.login{
		text-align: center;
		margin-top:80px;
		margin-bottom:50px;
	}
	.login img{
		width:30%;
	}
	.login-one{
		text-align:center;
		margin-bottom:20px;
	}
	.search{
		font-size:20px;
		border:0px;
		margin-left:10px;
		border-bottom:1px solid #ccc;
	}
	.login-one img{
		position:relative;
		top:4px;
	}
	.login-two{
		margin-top:30px;
		text-align:center;
	}
	.login-two button{
		background:#fd6a67;
		color:#fff;
		font-size:18px;
		padding:10px 120px;
		border:0px;
	}
	.login-three{
		margin-top:25px;
	}
	.login-three ul{
		 display: flex;
		 width: 100%;
	}
	.login-three li{
		flex:1;
		text-align: center;
	}
	.login-three span{
		color:#b2b2b2;
	}
</style>