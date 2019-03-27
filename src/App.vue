<template>
	<div id="app">
		<div class="game_title"><img src="@/assets/title.png" alt=""></div>
		<div class="game_main" :class="{active: animate!==null}">
			<div class="game_egg_hammer"><img :src="active!==null?hammers[active].pic:''" alt=""></div>
			<div class="game_egg" @click="begin"></div>
			<select name="egg_number" id="egg_number" class="game_egg_number" v-model="changed">
				<option v-for="val in number" :key="val" :value="val">砸{{val}}次</option>
			</select>
		</div>
		<div class="game_hammers">
			<div v-for="(item, index) in hammers" :class="['game_hammer',{active: active==index}]" :key="index" @click="hammer(index)">
				<img :src="item.pic" alt="">
				<p>{{item.name}}/{{item.price}}豆</p>
			</div>
		</div>
		<div class="prizeList">
			<div class="moneyBox" v-text="money+'豆'"></div>
			<ul>
				<li v-for="(item,index) in prizeList" :key="index">
					<span v-text="item.user+'砸出【'+item.prize+'】'"></span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import hammer1 from '@/assets/hammer3.png'
	import hammer2 from '@/assets/hammer2.png'
	import hammer3 from '@/assets/hammer1.png'

	export default {
		name: 'app',
		data() {
			return {
				changed: 1, //每次砸几下
				animate: null, //是否执行砸蛋动画
				active: null, //是否选择锤子
				money: 1000, //豆子数
				number: [1,3,5,10], //砸几下列表
				hammers: [{
					name: "钻石锤",
					price: 250,
					pic: hammer1
				}, {
					name: "黄金锤",
					price: 51,
					pic: hammer2
				}, {
					name: "木棰",
					price: 10,
					pic: hammer3
				}],
				prize: ['IMac', 'IPad', 'IPhone', 'IPod']
			}
		},
		computed: {
			prizeList() {
				return this.$store.state.prizeList.slice(-3); //获取最新的三条获奖记录
			}
		},
		methods: {
			hammer(i) {
				this.active = this.active==i?null:i;
			},
			begin() {
				if (this.active !== null && this.animate === null) { //判断是否选择锤子，动画是否执行完毕
					if(this.money>=this.hammers[this.active].price*this.changed){ //钱数是否够
						this.animate = true; 
						this.money -= this.hammers[this.active].price*this.changed;

						let random = Math.floor(Math.random() * 4); //中奖随机数
						
						setTimeout(()=>{ //动画执行完弹框
							this.$messagebox.alert('恭喜您砸出一台' + this.prize[random] + '！').then(action => {
								this.$store.commit('addPirze', {
									user: '135****8465',
									prize: this.prize[random]
								})

								this.animate = null;
							})
						},600)
					}else{
						this.$toast({
							message: '您的豆子不够了！',
						})
					}
				} else {
					this.$toast({
						message: '请先选择锤子！',
					})
				}
			}
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	html,
	body {
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

	.game_title {
		font-size: 0;
		max-width: 170px;
		width: 25.667%;
		margin: 0 auto;
	}

	img {
		width: 100%;
	}

	.game_egg {
		width: 66.6%;
		max-width: 252px;
		padding-top: 66%;
		margin: 0 auto;
		background: url(assets/egg1.png) no-repeat center bottom;
		background-size: 100% auto;
		transition: all .2s ease .2s;
	}

	.game_main.active .game_egg {
		background-image: url(assets/egg3.png);
	}

	.game_main {
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

	.game_hammers {
		padding: 5% 5% 15%;
		margin: 0 auto;
	}

	.game_hammer {
		width: 33.33%;
		display: inline-block;
		text-align: center;
		color: #fff;
	}

	.game_hammer img {
		width: 40%;
		transition: all .2s ease;
	}

	.game_hammer.active img {
		transform: scale(1.5);
	}

	.game_egg_hammer {
		width: 30%;
		max-width: 50px;
		position: absolute;
		right: 22%;
		top: 24%;
		display: none;
		transform: rotate(-30deg);
	}

	.game_egg_number {
		position: absolute;
		right: -30%;
		bottom: 10%;
		font-size: 12px;
		background: url(assets/regulation.png) no-repeat;
		background-size: 100% 100%;
		line-height: 1;
		padding: 4px 2%;
		outline: none;
		color: #cccc99;
		border: none;
	}
	.game_egg_number option{
		background: #993333;
	}

	@keyframes hammer {
		from {
			transform: rotate(30deg);
		}

		to {
			transform: rotate(-30deg);
		}
	}

	.game_main.active .game_egg_hammer {
		display: block;
		animation: hammer .3s ease;
	}

	.prizeList {
		background: url(assets/notice3.png) no-repeat center top;
		background-size: 90% 100%;
		padding: 3% 5%;
	}

	.prizeList ul {
		display: inline-block;
		list-style: none;
		color: #ccc;
		line-height: 2;
		font-size: 12px;
		width: 70%;
		vertical-align: middle;
	}

	.prizeList li span {
		padding-right: 5%;
	}

	.moneyBox {
		display: inline-block;
		vertical-align: middle;
		background: url(assets/box.png) no-repeat center top;
		background-size: 80% auto;
		padding-top: 25%;
		width: 30%;
		color: #fff;
	}
</style>
