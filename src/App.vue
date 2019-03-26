<template>
  <div id="app">
    <div class="game_title"><img src="@/assets/title.png" alt=""></div>
		<div class="game_main">
			<div class="game_egg_hammer" :class="{active: active!==null}"><img :src="active!==null?hammers[active].pic:''" alt=""></div>
			<div class="game_egg" :class="{active: active!==null}"></div>
		</div>
		<div class="game_hammers">
			<div class="game_hammer" v-for="(item, index) in hammers" :key="index" @click="hammer(index)">
				<img :src="item.pic" alt="">
				<p>{{item.name}}/{{item.price}}豆</p>
			</div>
		</div>
  </div>
</template>

<script>
import hammer1 from '@/assets/hammer3.png'
import hammer2 from '@/assets/hammer2.png'
import hammer3 from '@/assets/hammer1.png'

export default {
  name: 'app',
	data(){
		return{
			active: null,
			hammers: [{
				name: "钻石锤",
				price: 250,
				pic: hammer1
			},{
				name: "黄金锤",
				price: 51,
				pic: hammer2
			},{
				name: "木棰",
				price: 10,
				pic: hammer3
			}]
		}
	},
	methods:{
		hammer(i){
				this.active = i;
				setTimeout(()=>{
					this.active = null;
				},500)
		}
	}
}
</script>

<style>
	html,body{
		margin: 0;
		padding: 0;
		height: 100%;
	}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
	
	max-width: 600px;
	margin: 0 auto;
	background: url(assets/eggbackground.png) no-repeat center top;
	background-size: cover;
	height: 100%;
}
.game_title{
	font-size: 0;
	max-width:170px;
	width: 25.667%;
	margin: 0 auto;
}
img{
	width: 100%;
}
.game_egg{
	width: 66.6%;
	max-width: 252px;
	padding-top: 66%;
	margin: 0 auto;
	background: url(assets/egg1.png) no-repeat center bottom;
	background-size: 100% auto;
}
@keyframes egg{
	from{background-image: url(assets/egg1.png);}
	to{background-image: url(assets/egg3.png);}
}
.game_egg.active{
	animation: egg .2s ease;
	background-image: url(assets/egg3.png);
}
.game_main{
	font-size: 0;
	padding-top: 18%;
	max-width: 347px;
	width: 46.26%;
	padding-bottom: 8%;
	background: url(assets/egg2.png) no-repeat center bottom;
	background-size: 100% auto;
	margin: 0 auto;
	position: relative;
}
.game_hammers{
	padding: 5%;
	margin: 0 auto;
}
.game_hammer{
	width: 33.33%;
	display: inline-block;
	text-align: center;
	color: #fff;
}
.game_hammer img{
	width: 60%;
}
.game_egg_hammer{
	width: 30%;
	max-width: 50px;
	position: absolute;
	right: 18%;
	top: 20%;
	display: none;
	transform: rotate(-30deg);
}
@keyframes hammer{
	from{transform: rotate(30deg);}
	to{transform: rotate(-30deg);}
}
.game_egg_hammer.active{
	display: block;
	animation: hammer .3s ease;
}
</style>
