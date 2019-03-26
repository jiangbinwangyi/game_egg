<template>
  <div id="app">
    <div class="game_title"><img src="@/assets/title.png" alt=""></div>
		<div class="game_main" :class="{active: animate!==null}">
			<div class="game_egg_hammer"><img :src="active!==null?hammers[active].pic:''" alt=""></div>
			<div class="game_egg" @click="begin"></div>
			<div class="game_egg_number" v-text="'共'+number+'次'"></div>
		</div>
		<div class="game_hammers">
			<div v-for="(item, index) in hammers" :class="['game_hammer',{active: active==index}]" :key="index" @click="hammer(index)">
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

// import { Toast, Icon } from 'mint-ui';

export default {
  name: 'app',
	data(){
		return{
			animate: null,
			number: 3,
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
			}],
		}
	},
	methods:{
		hammer(i){
			this.active = i;
			setTimeout(()=>{
				// this.active = null;
			},800)
		},
		begin(){
			if(this.number>0){
				if(this.active!==null && this.animate===null){
					this.animate = true;
					this.number--;
					setTimeout(()=>{
						this.active = null;
						this.animate = null;
					},600)
				}else{
					this.$toast({
					  message: '请先选择锤子',
					})
				}
			}else{
				this.$toast({
				  message: '暂无抽奖次数',
				})
			}
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
	transition: all .2s ease .2s;
}
.game_main.active .game_egg{
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
	width: 40%;
	transition: all .2s ease;
}
.game_hammer.active img{
	transform: scale(1.5);
}
.game_egg_hammer{
	width: 30%;
	max-width: 50px;
	position: absolute;
	right: 22%;
	top: 24%;
	display: none;
	transform: rotate(-30deg);
}
.game_egg_number{
	position: absolute;
	right: -26%;
	bottom: 10%;
	font-size: 12px;
	width: 20%;
	background: url(assets/regulation.png) no-repeat;
	background-size: 100% 100%;
	padding: 4px 5%;
	color: #cccc99;
}
@keyframes hammer{
	from{transform: rotate(30deg);}
	to{transform: rotate(-30deg);}
}
.game_main.active .game_egg_hammer{
	display: block;
	animation: hammer .3s ease;
}
</style>
