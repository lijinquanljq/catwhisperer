<template>
  <div id="app">
      <div class="foot">
      <footer>
        <ul>
          <li><router-link to="/index">
            <img src="src/assets/images/dhone.png" alt="">
            首页
          </router-link></li>
          <li><router-link to="/cats">
            <img src="src/assets/images/dhtwo.png" alt="">
            喵圈</router-link></li>
          <li><router-link to="/shop">
            <img src="src/assets/images/dhthree.png" alt="">
            购物
          </router-link></li>
          <li><router-link to="/my">
            <img src="src/assets/images/dhfour.png" alt="">
            我的
          </router-link></li>
        </ul>
        <router-view></router-view>
        </footer>
      </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped="">
ul{
  position: fixed;
  z-index:99;
  bottom: 0px;
  left: 0px;
  display: flex;
  width: 100%;
  font-size:14px;
}
ul li{
	flex:1;
	text-align: center;
}
ul li img{
  display:block;
  margin:0 auto;
  margin-bottom:3px;
  width:22px;
}
.foot ul{
  background:#fff;
  border-top:1px solid #ccc;
  padding-top:5px;
}
.router-link-active{
  color:red;
}
footer a{
  color:#545454;
}
</style>
